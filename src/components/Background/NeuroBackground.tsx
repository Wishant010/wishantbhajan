import React, { useRef, useEffect, useState } from 'react';
import { Renderer, Camera, Transform, Program, Mesh, Plane } from 'ogl';
import { isMobileDevice, prefersReducedMotion } from '../../utils/performanceOptimization';

interface NeuroBackgroundProps {
  hue?: number;
  saturation?: number;
  chroma?: number;
  className?: string;
}

const NeuroBackground: React.FC<NeuroBackgroundProps> = ({
  hue = 200,
  saturation = 0.8,
  chroma = 0.6,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const rendererRef = useRef<Renderer | null>(null);
  const sceneRef = useRef<Transform | null>(null);
  const meshRef = useRef<Mesh | null>(null);
  const cameraRef = useRef<Camera | null>(null);
  const lastFrameTime = useRef<number>(0);
  const [isVisible, setIsVisible] = useState(false);
  const pointerRef = useRef({
    x: 0,
    y: 0,
    tX: 0,
    tY: 0,
  });

  const vertexShader = `
    precision mediump float;

    attribute vec2 position;
    attribute vec2 uv;

    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = vec4(position, 0.0, 1.0);
    }
  `;

  const fragmentShader = `
    precision mediump float;

    varying vec2 vUv;
    uniform float u_time;
    uniform float u_ratio;
    uniform vec2 u_pointer_position;
    uniform float u_scroll_progress;
    uniform float u_hue;
    uniform float u_saturation;
    uniform float u_chroma;

    vec2 rotate(vec2 uv, float th) {
        return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
    }

    float neuro_shape(vec2 uv, float t, float p) {
        vec2 sine_acc = vec2(0.);
        vec2 res = vec2(0.);
        float scale = 8.;

        for (int j = 0; j < 15; j++) {
            uv = rotate(uv, 1.);
            sine_acc = rotate(sine_acc, 1.);
            vec2 layer = uv * scale + float(j) + sine_acc - t;
            sine_acc += sin(layer) + 2.4 * p;
            res += (.5 + .5 * cos(layer)) / scale;
            scale *= (1.2);
        }
        return res.x + res.y;
    }

    // HSL to RGB conversion
    vec3 hsl2rgb(vec3 c) {
        vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),6.0)-3.0)-1.0, 0.0, 1.0);
        return c.z + c.y * (rgb - 0.5) * (1.0 - abs(2.0 * c.z - 1.0));
    }

    void main() {
        vec2 uv = .5 * vUv;
        uv.x *= u_ratio;

        vec2 pointer = vUv - u_pointer_position;
        pointer.x *= u_ratio;
        float p = clamp(length(pointer), 0., 1.);
        p = .5 * pow(1. - p, 2.);

        float t = .001 * u_time;
        vec3 color = vec3(0.);

        float noise = neuro_shape(uv, t, p);

        noise = 1.2 * pow(noise, 3.);
        noise += pow(noise, 10.);
        noise = max(.0, noise - .5);
        noise *= (1. - length(vUv - .5));

        // Convert hue from degrees to 0-1 range
        float normalizedHue = u_hue / 360.0;

        // Create HSL color with animation
        vec3 hsl = vec3(
            normalizedHue + 0.1 * sin(3.0 * u_scroll_progress + 1.5),
            u_saturation,
            u_chroma * 0.5 + 0.2 * sin(2.0 * u_scroll_progress)
        );

        // Convert to RGB
        color = hsl2rgb(hsl);
        color = color * noise;

        gl_FragColor = vec4(color, noise);
    }
  `;

  // Lazy loading with IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Don't initialize if not visible or reduced motion preferred
    if (!isVisible || prefersReducedMotion()) return undefined;

    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const isMobile = isMobileDevice();
    const targetFPS = isMobile ? 24 : 30;
    const frameInterval = 1000 / targetFPS;

    // Initialize OGL
    try {
      const renderer = new Renderer({
        canvas,
        width: canvas.clientWidth,
        height: canvas.clientHeight,
        dpr: isMobile ? 1 : Math.min(window.devicePixelRatio, 1.5),
      });

      const camera = new Camera(renderer.gl);
      const scene = new Transform();

      const geometry = new Plane(renderer.gl, {
        width: 2,
        height: 2,
      });

      const program = new Program(renderer.gl, {
        vertex: vertexShader,
        fragment: fragmentShader,
        uniforms: {
          u_time: { value: 0 },
          u_ratio: { value: window.innerWidth / window.innerHeight },
          u_pointer_position: { value: [0, 0] },
          u_scroll_progress: { value: 0 },
          u_hue: { value: hue },
          u_saturation: { value: saturation },
          u_chroma: { value: chroma },
        },
      });

      const mesh = new Mesh(renderer.gl, {
        geometry,
        program,
      });

      mesh.setParent(scene);

      rendererRef.current = renderer;
      cameraRef.current = camera;
      sceneRef.current = scene;
      meshRef.current = mesh;

      // Resize handler
      const handleResize = () => {
        if (!canvas || !renderer || !mesh) return;

        const width = canvas.clientWidth;
        const height = canvas.clientHeight;

        renderer.setSize(width, height);

        if (mesh.program && mesh.program.uniforms.u_ratio) {
          mesh.program.uniforms.u_ratio.value = width / height;
        }
      };

      // Mouse/touch handlers
      const updateMousePosition = (x: number, y: number) => {
        pointerRef.current.tX = x;
        pointerRef.current.tY = y;
      };

      const handlePointerMove = (e: PointerEvent) => {
        updateMousePosition(e.clientX, e.clientY);
      };

      const handleTouchMove = (e: TouchEvent) => {
        updateMousePosition(e.touches[0].clientX, e.touches[0].clientY);
      };

      const handleClick = (e: MouseEvent) => {
        updateMousePosition(e.clientX, e.clientY);
      };

      // Animation loop with FPS limiting
      const render = (timestamp: number) => {
        if (!renderer || !scene || !camera || !mesh) return;

        // Frame rate limiting
        if (timestamp - lastFrameTime.current < frameInterval) {
          animationRef.current = requestAnimationFrame(render);
          return;
        }
        lastFrameTime.current = timestamp;

        const currentTime = performance.now();
        const pointer = pointerRef.current;

        // Smooth pointer interpolation (slower on mobile)
        const interpolationSpeed = isMobile ? 0.1 : 0.2;
        pointer.x += (pointer.tX - pointer.x) * interpolationSpeed;
        pointer.y += (pointer.tY - pointer.y) * interpolationSpeed;

        // Update uniforms
        if (mesh.program && mesh.program.uniforms) {
          const uniforms = mesh.program.uniforms;

          if (uniforms.u_time) uniforms.u_time.value = currentTime;
          if (uniforms.u_pointer_position) {
            uniforms.u_pointer_position.value = [
              pointer.x / window.innerWidth,
              1 - pointer.y / window.innerHeight,
            ];
          }
          if (uniforms.u_scroll_progress) {
            uniforms.u_scroll_progress.value =
              window.pageYOffset / (2 * window.innerHeight);
          }
        }

        renderer.render({ scene, camera });
        animationRef.current = requestAnimationFrame(render);
      };

      // Initial setup
      handleResize();
      animationRef.current = requestAnimationFrame(render);

      // Add event listeners with passive flag
      window.addEventListener('resize', handleResize, { passive: true });
      if (!isMobile) {
        window.addEventListener('pointermove', handlePointerMove, { passive: true });
      }
      window.addEventListener('touchmove', handleTouchMove, { passive: true });
      window.addEventListener('click', handleClick, { passive: true });

      // Cleanup
      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }

        window.removeEventListener('resize', handleResize);
        window.removeEventListener('pointermove', handlePointerMove);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('click', handleClick);

        rendererRef.current = null;
        sceneRef.current = null;
        meshRef.current = null;
        cameraRef.current = null;
      };
    } catch (error) {
      console.error('Error initializing OGL:', error);
      return undefined;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hue, saturation, chroma, isVisible]);

  // Update uniforms when props change
  useEffect(() => {
    const mesh = meshRef.current;
    if (mesh && mesh.program && mesh.program.uniforms) {
      if (mesh.program.uniforms.u_hue) {
        mesh.program.uniforms.u_hue.value = hue;
      }
      if (mesh.program.uniforms.u_saturation) {
        mesh.program.uniforms.u_saturation.value = saturation;
      }
      if (mesh.program.uniforms.u_chroma) {
        mesh.program.uniforms.u_chroma.value = chroma;
      }
    }
  }, [hue, saturation, chroma]);

  // Static fallback for reduced motion
  if (prefersReducedMotion()) {
    return (
      <div
        ref={containerRef}
        className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
        style={{
          background: `radial-gradient(ellipse at center, hsl(${hue}, ${saturation * 100}%, 15%) 0%, transparent 70%)`
        }}
      />
    );
  }

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full">
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full pointer-events-none will-change-transform ${className}`}
      />
    </div>
  );
};

export default React.memo(NeuroBackground);
