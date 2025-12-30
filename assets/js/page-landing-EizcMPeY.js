var ft=Object.defineProperty;var dt=(a,u,s)=>u in a?ft(a,u,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[u]=s;var ie=(a,u,s)=>dt(a,typeof u!="symbol"?u+"":u,s);import{R as mt,r as p,j as c}from"./vendor-react-CmfUEsbk.js";import{p as ht,i as xt,b as vt}from"./page-about-BV4vKgXW.js";import{A as He,m as j}from"./vendor-animation-DepeZ2CL.js";import"./vendor-other-NG8tfkVl.js";import"./vendor-three-BkPH-HYM.js";function pt(){return{id:-1,texcoordX:0,texcoordY:0,prevTexcoordX:0,prevTexcoordY:0,deltaX:0,deltaY:0,down:!1,moved:!1,color:{r:0,g:0,b:0}}}function gt({SIM_RESOLUTION:a=128,DYE_RESOLUTION:u=1440,CAPTURE_RESOLUTION:s=512,DENSITY_DISSIPATION:m=3.5,VELOCITY_DISSIPATION:f=2,PRESSURE:l=.1,PRESSURE_ITERATIONS:b=20,CURL:_=3,SPLAT_RADIUS:w=.2,SPLAT_FORCE:S=6e3,SHADING:D=!0,COLOR_UPDATE_SPEED:x=10,BACK_COLOR:C={r:.5,g:0,b:0},TRANSPARENT:q=!0}){const oe=p.useRef(null),ee=p.useRef(null),[U,A]=p.useState(!1);p.useEffect(()=>{const R=new IntersectionObserver(([Y])=>{A(Y.isIntersecting)},{threshold:.1});return ee.current&&R.observe(ee.current),()=>R.disconnect()},[]);const M=xt(),$=ht(),te=M?64:a,be=M?512:u,ae=M?10:b,se=M?!1:D;return p.useEffect(()=>{if(!U||M||$)return;const R=oe.current;if(!R)return;const Y=[pt()],L={SIM_RESOLUTION:te,DYE_RESOLUTION:be,DENSITY_DISSIPATION:m,VELOCITY_DISSIPATION:f,PRESSURE:l,PRESSURE_ITERATIONS:ae,CURL:_,SPLAT_RADIUS:w,SPLAT_FORCE:S,SHADING:se,COLOR_UPDATE_SPEED:x},{gl:t,ext:B}=Te(R);if(!t||!B)return;B.supportLinearFiltering||(L.DYE_RESOLUTION=256,L.SHADING=!1);function Te(e){const i={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1};let r=e.getContext("webgl2",i);if(r||(r=e.getContext("webgl",i)||e.getContext("experimental-webgl",i)),!r)throw new Error("Unable to initialize WebGL.");const n="drawBuffers"in r;let o=!1,h=null;n?(r.getExtension("EXT_color_buffer_float"),o=!!r.getExtension("OES_texture_float_linear")):(h=r.getExtension("OES_texture_half_float"),o=!!r.getExtension("OES_texture_half_float_linear")),r.clearColor(0,0,0,1);const y=n?r.HALF_FLOAT:h&&h.HALF_FLOAT_OES||0;let G,k,J;return n?(G=Q(r,r.RGBA16F,r.RGBA,y),k=Q(r,r.RG16F,r.RG,y),J=Q(r,r.R16F,r.RED,y)):(G=Q(r,r.RGBA,r.RGBA,y),k=Q(r,r.RGBA,r.RGBA,y),J=Q(r,r.RGBA,r.RGBA,y)),{gl:r,ext:{formatRGBA:G,formatRG:k,formatR:J,halfFloatTexType:y,supportLinearFiltering:o}}}function Q(e,i,r,n){if(!Ae(e,i,r,n)){if("drawBuffers"in e){const o=e;switch(i){case o.R16F:return Q(o,o.RG16F,o.RG,n);case o.RG16F:return Q(o,o.RGBA16F,o.RGBA,n);default:return null}}return null}return{internalFormat:i,format:r}}function Ae(e,i,r,n){const o=e.createTexture();if(!o)return!1;e.bindTexture(e.TEXTURE_2D,o),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,i,4,4,0,r,n,null);const h=e.createFramebuffer();return h?(e.bindFramebuffer(e.FRAMEBUFFER,h),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,o,0),e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE):!1}function Fe(e){if(!e.length)return 0;let i=0;for(let r=0;r<e.length;r++)i=(i<<5)-i+e.charCodeAt(r),i|=0;return i}function xe(e,i){if(!i)return e;let r="";for(const n of i)r+=`#define ${n}
`;return r+e}function P(e,i,r=null){const n=xe(i,r),o=t.createShader(e);return o?(t.shaderSource(o,n),t.compileShader(o),t.getShaderParameter(o,t.COMPILE_STATUS),o):null}function Re(e,i){if(!e||!i)return null;const r=t.createProgram();return r?(t.attachShader(r,e),t.attachShader(r,i),t.linkProgram(r),t.getProgramParameter(r,t.LINK_STATUS),r):null}function Ee(e){const i={},r=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<r;n++){const o=t.getActiveUniform(e,n);o&&(i[o.name]=t.getUniformLocation(e,o.name))}return i}class V{constructor(i,r){ie(this,"program");ie(this,"uniforms");this.program=Re(i,r),this.uniforms=this.program?Ee(this.program):{}}bind(){this.program&&t.useProgram(this.program)}}class _e{constructor(i,r){ie(this,"vertexShader");ie(this,"fragmentShaderSource");ie(this,"programs");ie(this,"activeProgram");ie(this,"uniforms");this.vertexShader=i,this.fragmentShaderSource=r,this.programs={},this.activeProgram=null,this.uniforms={}}setKeywords(i){let r=0;for(const o of i)r+=Fe(o);let n=this.programs[r];if(n==null){const o=P(t.FRAGMENT_SHADER,this.fragmentShaderSource,i);n=Re(this.vertexShader,o),this.programs[r]=n}n!==this.activeProgram&&(n&&(this.uniforms=Ee(n)),this.activeProgram=n)}bind(){this.activeProgram&&t.useProgram(this.activeProgram)}}const W=P(t.VERTEX_SHADER,`
      precision highp float;
      attribute vec2 aPosition;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform vec2 texelSize;

      void main () {
        vUv = aPosition * 0.5 + 0.5;
        vL = vUv - vec2(texelSize.x, 0.0);
        vR = vUv + vec2(texelSize.x, 0.0);
        vT = vUv + vec2(0.0, texelSize.y);
        vB = vUv - vec2(0.0, texelSize.y);
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `),Me=P(t.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      uniform sampler2D uTexture;

      void main () {
          gl_FragColor = texture2D(uTexture, vUv);
      }
    `),Le=P(t.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      uniform sampler2D uTexture;
      uniform float value;

      void main () {
          gl_FragColor = value * texture2D(uTexture, vUv);
      }
    `),d=`
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uTexture;
      uniform sampler2D uDithering;
      uniform vec2 ditherScale;
      uniform vec2 texelSize;

      vec3 linearToGamma (vec3 color) {
          color = max(color, vec3(0));
          return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
      }

      void main () {
          vec3 c = texture2D(uTexture, vUv).rgb;
          #ifdef SHADING
              vec3 lc = texture2D(uTexture, vL).rgb;
              vec3 rc = texture2D(uTexture, vR).rgb;
              vec3 tc = texture2D(uTexture, vT).rgb;
              vec3 bc = texture2D(uTexture, vB).rgb;

              float dx = length(rc) - length(lc);
              float dy = length(tc) - length(bc);

              vec3 n = normalize(vec3(dx, dy, length(texelSize)));
              vec3 l = vec3(0.0, 0.0, 1.0);

              float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
              c *= diffuse;
          #endif

          float a = max(c.r, max(c.g, c.b));
          gl_FragColor = vec4(c, a);
      }
    `,T=P(t.FRAGMENT_SHADER,`
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      uniform sampler2D uTarget;
      uniform float aspectRatio;
      uniform vec3 color;
      uniform vec2 point;
      uniform float radius;

      void main () {
          vec2 p = vUv - point.xy;
          p.x *= aspectRatio;
          vec3 splat = exp(-dot(p, p) / radius) * color;
          vec3 base = texture2D(uTarget, vUv).xyz;
          gl_FragColor = vec4(base + splat, 1.0);
      }
    `),v=P(t.FRAGMENT_SHADER,`
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      uniform sampler2D uVelocity;
      uniform sampler2D uSource;
      uniform vec2 texelSize;
      uniform vec2 dyeTexelSize;
      uniform float dt;
      uniform float dissipation;

      vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
          vec2 st = uv / tsize - 0.5;
          vec2 iuv = floor(st);
          vec2 fuv = fract(st);

          vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
          vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
          vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
          vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);

          return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
      }

      void main () {
          #ifdef MANUAL_FILTERING
              vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
              vec4 result = bilerp(uSource, coord, dyeTexelSize);
          #else
              vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
              vec4 result = texture2D(uSource, coord);
          #endif
          float decay = 1.0 + dissipation * dt;
          gl_FragColor = result / decay;
      }
    `,B.supportLinearFiltering?null:["MANUAL_FILTERING"]),E=P(t.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uVelocity;

      void main () {
          float L = texture2D(uVelocity, vL).x;
          float R = texture2D(uVelocity, vR).x;
          float T = texture2D(uVelocity, vT).y;
          float B = texture2D(uVelocity, vB).y;

          vec2 C = texture2D(uVelocity, vUv).xy;
          if (vL.x < 0.0) { L = -C.x; }
          if (vR.x > 1.0) { R = -C.x; }
          if (vT.y > 1.0) { T = -C.y; }
          if (vB.y < 0.0) { B = -C.y; }

          float div = 0.5 * (R - L + T - B);
          gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
      }
    `),N=P(t.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uVelocity;

      void main () {
          float L = texture2D(uVelocity, vL).y;
          float R = texture2D(uVelocity, vR).y;
          float T = texture2D(uVelocity, vT).x;
          float B = texture2D(uVelocity, vB).x;
          float vorticity = R - L - T + B;
          gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
      }
    `),I=P(t.FRAGMENT_SHADER,`
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uVelocity;
      uniform sampler2D uCurl;
      uniform float curl;
      uniform float dt;

      void main () {
          float L = texture2D(uCurl, vL).x;
          float R = texture2D(uCurl, vR).x;
          float T = texture2D(uCurl, vT).x;
          float B = texture2D(uCurl, vB).x;
          float C = texture2D(uCurl, vUv).x;

          vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
          force /= length(force) + 0.0001;
          force *= curl * C;
          force.y *= -1.0;

          vec2 velocity = texture2D(uVelocity, vUv).xy;
          velocity += force * dt;
          velocity = min(max(velocity, -1000.0), 1000.0);
          gl_FragColor = vec4(velocity, 0.0, 1.0);
      }
    `),Z=P(t.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uPressure;
      uniform sampler2D uDivergence;

      void main () {
          float L = texture2D(uPressure, vL).x;
          float R = texture2D(uPressure, vR).x;
          float T = texture2D(uPressure, vT).x;
          float B = texture2D(uPressure, vB).x;
          float C = texture2D(uPressure, vUv).x;
          float divergence = texture2D(uDivergence, vUv).x;
          float pressure = (L + R + B + T - divergence) * 0.25;
          gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
      }
    `),ce=P(t.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uPressure;
      uniform sampler2D uVelocity;

      void main () {
          float L = texture2D(uPressure, vL).x;
          float R = texture2D(uPressure, vR).x;
          float T = texture2D(uPressure, vT).x;
          float B = texture2D(uPressure, vB).x;
          vec2 velocity = texture2D(uVelocity, vUv).xy;
          velocity.xy -= vec2(R - L, T - B);
          gl_FragColor = vec4(velocity, 0.0, 1.0);
      }
    `),X=(()=>{const e=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,e),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),t.STATIC_DRAW);const i=t.createBuffer();return t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,i),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),t.STATIC_DRAW),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0),t.enableVertexAttribArray(0),(r,n=!1)=>{t&&(r?(t.viewport(0,0,r.width,r.height),t.bindFramebuffer(t.FRAMEBUFFER,r.fbo)):(t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),t.bindFramebuffer(t.FRAMEBUFFER,null)),n&&(t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT)),t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0))}})();let H,g,Ne,Pe,re;const ze=new V(W,Me),ve=new V(W,Le),z=new V(W,T),F=new V(W,v),pe=new V(W,E),ge=new V(W,N),K=new V(W,I),le=new V(W,Z),ue=new V(W,ce),de=new _e(W,d);function me(e,i,r,n,o,h){t.activeTexture(t.TEXTURE0);const y=t.createTexture();t.bindTexture(t.TEXTURE_2D,y),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,h),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,h),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texImage2D(t.TEXTURE_2D,0,r,e,i,0,n,o,null);const G=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,G),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,y,0),t.viewport(0,0,e,i),t.clear(t.COLOR_BUFFER_BIT);const k=1/e,J=1/i;return{texture:y,fbo:G,width:e,height:i,texelSizeX:k,texelSizeY:J,attach(he){return t.activeTexture(t.TEXTURE0+he),t.bindTexture(t.TEXTURE_2D,y),he}}}function Ce(e,i,r,n,o,h){const y=me(e,i,r,n,o,h),G=me(e,i,r,n,o,h);return{width:e,height:i,texelSizeX:y.texelSizeX,texelSizeY:y.texelSizeY,read:y,write:G,swap(){const k=this.read;this.read=this.write,this.write=k}}}function $e(e,i,r,n,o,h,y){const G=me(i,r,n,o,h,y);return ze.bind(),ze.uniforms.uTexture&&t.uniform1i(ze.uniforms.uTexture,e.attach(0)),X(G,!1),G}function Xe(e,i,r,n,o,h,y){return e.width===i&&e.height===r||(e.read=$e(e.read,i,r,n,o,h,y),e.write=me(i,r,n,o,h,y),e.width=i,e.height=r,e.texelSizeX=1/i,e.texelSizeY=1/r),e}function Oe(){const e=Ge(L.SIM_RESOLUTION),i=Ge(L.DYE_RESOLUTION),r=B.halfFloatTexType,n=B.formatRGBA,o=B.formatRG,h=B.formatR,y=B.supportLinearFiltering?t.LINEAR:t.NEAREST;t.disable(t.BLEND),H?H=Xe(H,i.width,i.height,n.internalFormat,n.format,r,y):H=Ce(i.width,i.height,n.internalFormat,n.format,r,y),g?g=Xe(g,e.width,e.height,o.internalFormat,o.format,r,y):g=Ce(e.width,e.height,o.internalFormat,o.format,r,y),Ne=me(e.width,e.height,h.internalFormat,h.format,r,t.NEAREST),Pe=me(e.width,e.height,h.internalFormat,h.format,r,t.NEAREST),re=Ce(e.width,e.height,h.internalFormat,h.format,r,t.NEAREST)}function Ke(){const e=[];L.SHADING&&e.push("SHADING"),de.setKeywords(e)}function Ge(e){const i=t.drawingBufferWidth,r=t.drawingBufferHeight,n=i/r,o=n<1?1/n:n,h=Math.round(e),y=Math.round(e*o);return i>r?{width:y,height:h}:{width:h,height:y}}function O(e){const i=window.devicePixelRatio||1;return Math.floor(e*i)}Ke(),Oe();let ke=Date.now(),Se=0;function Ue(){const e=Qe();Ze()&&Oe(),qe(e),Je(),et(e),tt(null),requestAnimationFrame(Ue)}function Qe(){const e=Date.now();let i=(e-ke)/1e3;return i=Math.min(i,.016666),ke=e,i}function Ze(){const e=O(R.clientWidth),i=O(R.clientHeight);return R.width!==e||R.height!==i?(R.width=e,R.height=i,!0):!1}function qe(e){Se+=e*L.COLOR_UPDATE_SPEED,Se>=1&&(Se=ut(Se,0,1),Y.forEach(i=>{i.color=De()}))}function Je(){for(const e of Y)e.moved&&(e.moved=!1,it(e))}function et(e){t.disable(t.BLEND),ge.bind(),ge.uniforms.texelSize&&t.uniform2f(ge.uniforms.texelSize,g.texelSizeX,g.texelSizeY),ge.uniforms.uVelocity&&t.uniform1i(ge.uniforms.uVelocity,g.read.attach(0)),X(Pe),K.bind(),K.uniforms.texelSize&&t.uniform2f(K.uniforms.texelSize,g.texelSizeX,g.texelSizeY),K.uniforms.uVelocity&&t.uniform1i(K.uniforms.uVelocity,g.read.attach(0)),K.uniforms.uCurl&&t.uniform1i(K.uniforms.uCurl,Pe.attach(1)),K.uniforms.curl&&t.uniform1f(K.uniforms.curl,L.CURL),K.uniforms.dt&&t.uniform1f(K.uniforms.dt,e),X(g.write),g.swap(),pe.bind(),pe.uniforms.texelSize&&t.uniform2f(pe.uniforms.texelSize,g.texelSizeX,g.texelSizeY),pe.uniforms.uVelocity&&t.uniform1i(pe.uniforms.uVelocity,g.read.attach(0)),X(Ne),ve.bind(),ve.uniforms.uTexture&&t.uniform1i(ve.uniforms.uTexture,re.read.attach(0)),ve.uniforms.value&&t.uniform1f(ve.uniforms.value,L.PRESSURE),X(re.write),re.swap(),le.bind(),le.uniforms.texelSize&&t.uniform2f(le.uniforms.texelSize,g.texelSizeX,g.texelSizeY),le.uniforms.uDivergence&&t.uniform1i(le.uniforms.uDivergence,Ne.attach(0));for(let r=0;r<L.PRESSURE_ITERATIONS;r++)le.uniforms.uPressure&&t.uniform1i(le.uniforms.uPressure,re.read.attach(1)),X(re.write),re.swap();ue.bind(),ue.uniforms.texelSize&&t.uniform2f(ue.uniforms.texelSize,g.texelSizeX,g.texelSizeY),ue.uniforms.uPressure&&t.uniform1i(ue.uniforms.uPressure,re.read.attach(0)),ue.uniforms.uVelocity&&t.uniform1i(ue.uniforms.uVelocity,g.read.attach(1)),X(g.write),g.swap(),F.bind(),F.uniforms.texelSize&&t.uniform2f(F.uniforms.texelSize,g.texelSizeX,g.texelSizeY),!B.supportLinearFiltering&&F.uniforms.dyeTexelSize&&t.uniform2f(F.uniforms.dyeTexelSize,g.texelSizeX,g.texelSizeY);const i=g.read.attach(0);F.uniforms.uVelocity&&t.uniform1i(F.uniforms.uVelocity,i),F.uniforms.uSource&&t.uniform1i(F.uniforms.uSource,i),F.uniforms.dt&&t.uniform1f(F.uniforms.dt,e),F.uniforms.dissipation&&t.uniform1f(F.uniforms.dissipation,L.VELOCITY_DISSIPATION),X(g.write),g.swap(),!B.supportLinearFiltering&&F.uniforms.dyeTexelSize&&t.uniform2f(F.uniforms.dyeTexelSize,H.texelSizeX,H.texelSizeY),F.uniforms.uVelocity&&t.uniform1i(F.uniforms.uVelocity,g.read.attach(0)),F.uniforms.uSource&&t.uniform1i(F.uniforms.uSource,H.read.attach(1)),F.uniforms.dissipation&&t.uniform1f(F.uniforms.dissipation,L.DENSITY_DISSIPATION),X(H.write),H.swap()}function tt(e){t.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA),t.enable(t.BLEND),rt(e)}function rt(e){const i=t.drawingBufferWidth,r=t.drawingBufferHeight;de.bind(),L.SHADING&&de.uniforms.texelSize&&t.uniform2f(de.uniforms.texelSize,1/i,1/r),de.uniforms.uTexture&&t.uniform1i(de.uniforms.uTexture,H.read.attach(0)),X(e,!1)}function it(e){const i=e.deltaX*L.SPLAT_FORCE,r=e.deltaY*L.SPLAT_FORCE;je(e.texcoordX,e.texcoordY,i,r,e.color)}function nt(e){const i=De();i.r*=10,i.g*=10,i.b*=10;const r=10*(Math.random()-.5),n=30*(Math.random()-.5);je(e.texcoordX,e.texcoordY,r,n,i)}function je(e,i,r,n,o){z.bind(),z.uniforms.uTarget&&t.uniform1i(z.uniforms.uTarget,g.read.attach(0)),z.uniforms.aspectRatio&&t.uniform1f(z.uniforms.aspectRatio,R.width/R.height),z.uniforms.point&&t.uniform2f(z.uniforms.point,e,i),z.uniforms.color&&t.uniform3f(z.uniforms.color,r,n,0),z.uniforms.radius&&t.uniform1f(z.uniforms.radius,ot(L.SPLAT_RADIUS/100)),X(g.write),g.swap(),z.uniforms.uTarget&&t.uniform1i(z.uniforms.uTarget,H.read.attach(0)),z.uniforms.color&&t.uniform3f(z.uniforms.color,o.r,o.g,o.b),X(H.write),H.swap()}function ot(e){const i=R.width/R.height;return i>1&&(e*=i),e}function Be(e,i,r,n){e.id=i,e.down=!0,e.moved=!1,e.texcoordX=r/R.width,e.texcoordY=1-n/R.height,e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.deltaX=0,e.deltaY=0,e.color=De()}function Ie(e,i,r,n){e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.texcoordX=i/R.width,e.texcoordY=1-r/R.height,e.deltaX=st(e.texcoordX-e.prevTexcoordX),e.deltaY=ct(e.texcoordY-e.prevTexcoordY),e.moved=Math.abs(e.deltaX)>0||Math.abs(e.deltaY)>0,e.color=n}function at(e){e.down=!1}function st(e){const i=R.width/R.height;return i<1&&(e*=i),e}function ct(e){const i=R.width/R.height;return i>1&&(e/=i),e}function De(){const e=lt(Math.random(),1,1);return e.r*=.15,e.g*=.15,e.b*=.15,e}function lt(e,i,r){let n=0,o=0,h=0;const y=Math.floor(e*6),G=e*6-y,k=r*(1-i),J=r*(1-G*i),he=r*(1-(1-G)*i);switch(y%6){case 0:n=r,o=he,h=k;break;case 1:n=J,o=r,h=k;break;case 2:n=k,o=r,h=he;break;case 3:n=k,o=J,h=r;break;case 4:n=he,o=k,h=r;break;case 5:n=r,o=k,h=J;break}return{r:n,g:o,b:h}}function ut(e,i,r){const n=r-i;return(e-i)%n+i}window.addEventListener("mousedown",e=>{const i=Y[0],r=O(e.clientX),n=O(e.clientY);Be(i,-1,r,n),nt(i)});function Ye(e){const i=Y[0],r=O(e.clientX),n=O(e.clientY),o=De();Ue(),Ie(i,r,n,o),document.body.removeEventListener("mousemove",Ye)}document.body.addEventListener("mousemove",Ye),window.addEventListener("mousemove",e=>{const i=Y[0],r=O(e.clientX),n=O(e.clientY),o=i.color;Ie(i,r,n,o)});function Ve(e){const i=e.targetTouches,r=Y[0];for(let n=0;n<i.length;n++){const o=O(i[n].clientX),h=O(i[n].clientY);Ue(),Be(r,i[n].identifier,o,h)}document.body.removeEventListener("touchstart",Ve)}document.body.addEventListener("touchstart",Ve),window.addEventListener("touchstart",e=>{const i=e.targetTouches,r=Y[0];for(let n=0;n<i.length;n++){const o=O(i[n].clientX),h=O(i[n].clientY);Be(r,i[n].identifier,o,h)}},!1),window.addEventListener("touchmove",e=>{const i=e.targetTouches,r=Y[0];for(let n=0;n<i.length;n++){const o=O(i[n].clientX),h=O(i[n].clientY);Ie(r,o,h,r.color)}},!1),window.addEventListener("touchend",e=>{const i=e.changedTouches,r=Y[0];for(let n=0;n<i.length;n++)at(r)})},[U,M,$,te,be,s,m,f,l,ae,_,w,S,se,x,C,q]),M||$?null:c.jsx("div",{ref:ee,className:"fixed top-0 left-0 z-50 pointer-events-none w-full h-full",children:c.jsx("canvas",{ref:oe,id:"fluid",className:"w-screen h-screen block"})})}const yt=mt.memo(gt),ye={xs:320,sm:640,md:768,lg:1024,xl:1280,"2xl":1536,"3xl":1920,"4xl":2560};function wt(a){const[u,s]=p.useState(!1),m=p.useRef(null);return p.useEffect(()=>{if(typeof window>"u")return;const f=window.matchMedia(a);m.current=f,s(f.matches);const l=b=>{s(b.matches)};return f.addEventListener?f.addEventListener("change",l):f.addListener(l),()=>{f.removeEventListener?f.removeEventListener("change",l):f.removeListener(l)}},[a]),u}function we(){const[a,u]=p.useState(()=>{if(typeof window>"u")return{category:"desktop",breakpoint:"lg",width:1024,height:768,orientation:"landscape",pixelRatio:1,isTouch:!1,isRetina:!1,isMobile:!1,isTablet:!1,isDesktop:!0,hasHover:!0,prefersReducedMotion:!1,colorScheme:"dark",canHover:!0,pointerAccuracy:"fine"};const m=window.innerWidth,f=window.innerHeight;return We(m,f)}),s=p.useCallback(()=>{if(typeof window>"u")return;const m=window.innerWidth,f=window.innerHeight;u(We(m,f))},[]);return p.useEffect(()=>{if(typeof window>"u")return;let m;const f=()=>{clearTimeout(m),m=setTimeout(s,16)};window.addEventListener("resize",f,{passive:!0}),window.addEventListener("orientationchange",f,{passive:!0});const l=window.matchMedia("(prefers-color-scheme: dark)");return l.addEventListener("change",f),()=>{clearTimeout(m),window.removeEventListener("resize",f),window.removeEventListener("orientationchange",f),l.removeEventListener("change",f)}},[s]),a}function fe(a){const{breakpoint:u}=we();return p.useMemo(()=>{if(typeof a!="object"||a===null)return a;const s=a,m=Object.keys(ye),f=m.indexOf(u);for(let l=f;l>=0;l--){const b=m[l];if(s[b]!==void 0)return s[b]}for(const l of m)if(s[l]!==void 0)return s[l]},[a,u])}function bt(){return wt("(prefers-reduced-motion: reduce)")}function We(a,u){const s=typeof window<"u"&&window.devicePixelRatio||1,m=a>u?"landscape":"portrait",f=Tt(a),l=Rt(a),b=typeof window<"u"&&("ontouchstart"in window||navigator.maxTouchPoints>0),_=s>=2,w=typeof window<"u"&&window.matchMedia("(hover: hover)").matches,S=typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,D=typeof window<"u"&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",x=typeof window<"u"&&window.matchMedia("(hover: hover) and (pointer: fine)").matches,C=typeof window<"u"&&window.matchMedia("(pointer: coarse)").matches?"coarse":"fine";return{category:l,breakpoint:f,width:a,height:u,orientation:m,pixelRatio:s,isTouch:b,isRetina:_,isMobile:l==="mobile",isTablet:l==="tablet",isDesktop:l==="desktop"||l==="ultrawide",hasHover:w,prefersReducedMotion:S,colorScheme:D,canHover:x,pointerAccuracy:C}}function Tt(a){const u=Object.entries(ye).reverse();for(const[s,m]of u)if(a>=m)return s;return"xs"}function Rt(a){return a>=ye["3xl"]?"ultrawide":a>=ye.lg?"desktop":a>=ye.sm?"tablet":"mobile"}const Et=({glitchColors:a=["#2b4539","#61dca3","#61b3dc"],glitchSpeed:u=40,centerVignette:s=!1,outerVignette:m=!0,smooth:f=!0,onComplete:l,duration:b=0,className:_=""})=>{const w=p.useRef(null),S=p.useRef(null),D=p.useRef(null),x=p.useRef([]),C=p.useRef({columns:0,rows:0}),q=p.useRef(null),oe=p.useRef(Date.now()),ee=p.useRef(Date.now()),U=p.useRef(!1),{isMobile:A,isTablet:M,prefersReducedMotion:$}=we(),te=bt(),be=A?12:M?14:16,ae=A?8:M?9:10,se=A?16:M?18:20,R=$||te?u*3:A?u*1.2:u,Y=A?.05:M?.06:.07,L=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","!","@","#","$","&","*","(",")","-","_","+","=","/","[","]","{","}",";",":","<",">",",","0","1","2","3","4","5","6","7","8","9"],t=()=>L[Math.floor(Math.random()*L.length)],B=()=>a[Math.floor(Math.random()*a.length)],Te=d=>{const T=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;d=d.replace(T,(E,N,I)=>E+E+N+N+I+I);const v=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(d);return v?{r:parseInt(v[1],16),g:parseInt(v[2],16),b:parseInt(v[3],16)}:null},Q=(d,T,v)=>{const E={r:Math.round(d.r+(T.r-d.r)*v),g:Math.round(d.g+(T.g-d.g)*v),b:Math.round(d.b+(T.b-d.b)*v)};return`rgb(${E.r}, ${E.g}, ${E.b})`},Ae=(d,T)=>{const v=Math.ceil(d/ae),E=Math.ceil(T/se);return{columns:v,rows:E}},Fe=(d,T)=>{C.current={columns:d,rows:T};const v=d*T;x.current=Array.from({length:v},()=>({char:t(),color:B(),targetColor:B(),colorProgress:1}))},xe=()=>{const d=w.current,T=S.current;if(!d||!T||U.current)return;T.parentElement&&(T.style.width="100%",T.style.height="100%");const E=T.getBoundingClientRect(),N=E.width,I=E.height;if(N===0||I===0){setTimeout(()=>{U.current||xe()},50);return}const Z=A?Math.min(window.devicePixelRatio||1,2):window.devicePixelRatio||1;d.width=N*Z,d.height=I*Z,d.style.width=`${N}px`,d.style.height=`${I}px`,q.current&&q.current.setTransform(Z,0,0,Z,0,0);const{columns:ce,rows:X}=Ae(N,I);Fe(ce,X),P()},P=()=>{if(!q.current||x.current.length===0||U.current)return;const d=q.current;if(!w.current)return;const v=S.current;if(!v)return;const E=v.getBoundingClientRect();d.fillStyle="#000000",d.fillRect(0,0,E.width,E.height),d.font=`${be}px monospace`,d.textBaseline="top",x.current.forEach((N,I)=>{const Z=I%C.current.columns*ae,ce=Math.floor(I/C.current.columns)*se;Z>=-ae&&Z<=E.width+ae&&ce>=-se&&ce<=E.height+se&&(d.fillStyle=N.color,d.fillText(N.char,Z,ce))})},Re=()=>{if(!x.current||x.current.length===0||U.current)return;const d=Math.max(1,Math.floor(x.current.length*Y));for(let T=0;T<d;T++){const v=Math.floor(Math.random()*x.current.length);x.current[v]&&(Math.random()>.4&&(x.current[v].char=t()),Math.random()>.5&&(x.current[v].targetColor=B()),!f||$||te?(x.current[v].color=x.current[v].targetColor,x.current[v].colorProgress=1):x.current[v].colorProgress=0)}},Ee=()=>{if($||te)return;let d=!1;const T=A?.15:.12;x.current.forEach(v=>{if(v.colorProgress<1){v.colorProgress+=T,v.colorProgress>1&&(v.colorProgress=1);const E=Te(v.color),N=Te(v.targetColor);E&&N&&(v.color=Q(E,N,v.colorProgress),d=!0)}}),d&&P()},V=()=>{if(U.current)return;const d=Date.now();if(b>0&&d-ee.current>=b){D.current&&cancelAnimationFrame(D.current),l?.();return}d-oe.current>=R&&(Re(),P(),oe.current=d),f&&!$&&!te&&Ee(),D.current=requestAnimationFrame(V)};p.useEffect(()=>{const d=w.current;if(!d)return;U.current=!1,q.current=d.getContext("2d",{alpha:!1,willReadFrequently:!1,desynchronized:!A}),ee.current=Date.now(),setTimeout(()=>{U.current||(xe(),V())},10);let T;const v=()=>{clearTimeout(T),T=setTimeout(()=>{U.current||(D.current&&cancelAnimationFrame(D.current),xe(),V())},100)};let E=null;return"ResizeObserver"in window&&S.current&&(E=new ResizeObserver(N=>{for(const I of N)if(I.target===S.current){v();break}}),E.observe(S.current)),window.addEventListener("resize",v),()=>{U.current=!0,D.current&&cancelAnimationFrame(D.current),window.removeEventListener("resize",v),E&&E.disconnect(),clearTimeout(T)}},[R,f,b,l,A,$,te]);const _e={position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"#000000",overflow:"hidden",willChange:"transform",transform:"translateZ(0)",backfaceVisibility:"hidden"},W={position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"block",backgroundColor:"#000000",willChange:"transform",transform:"translateZ(0)",imageRendering:"auto"},Me={position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",background:"radial-gradient(circle, rgba(0,0,0,0) 60%, rgba(0,0,0,1) 100%)",opacity:A?.7:1},Le={position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",background:"radial-gradient(circle, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%)",opacity:A?.6:.8};return c.jsxs("div",{ref:S,style:_e,className:_,children:[c.jsx("canvas",{ref:w,style:W}),m&&c.jsx("div",{style:Me}),s&&c.jsx("div",{style:Le})]})},ne={particleCounts:{xs:15,sm:20,md:25,lg:30,xl:35,"2xl":40,"3xl":45,"4xl":50},animationSpeeds:{xs:120,sm:100,md:90,lg:80,xl:70,"2xl":60,"3xl":50,"4xl":40},buttonSizes:{normal:{xs:{width:"280px",height:"50px"},sm:{width:"320px",height:"55px"},md:{width:"360px",height:"60px"},lg:{width:"400px",height:"60px"},xl:{width:"420px",height:"65px"},"2xl":{width:"450px",height:"70px"},"3xl":{width:"480px",height:"75px"},"4xl":{width:"520px",height:"80px"}},expanded:{xs:{width:"300px",height:"120px"},sm:{width:"380px",height:"140px"},md:{width:"450px",height:"160px"},lg:{width:"550px",height:"220px"},xl:{width:"600px",height:"240px"},"2xl":{width:"650px",height:"260px"},"3xl":{width:"700px",height:"280px"},"4xl":{width:"750px",height:"300px"}}},textSizes:{title:{xs:"text-5xl",sm:"text-4xl",md:"text-5xl",lg:"text-6xl",xl:"text-7xl","2xl":"text-8xl","3xl":"text-9xl","4xl":"text-[8rem]"},subtitle:{xs:"text-sm",sm:"text-base",md:"text-lg",lg:"text-xl",xl:"text-2xl","2xl":"text-3xl","3xl":"text-4xl","4xl":"text-5xl"},button:{xs:"text-xl",sm:"text-base",md:"text-lg",lg:"text-xl",xl:"text-xl","2xl":"text-2xl","3xl":"text-3xl","4xl":"text-4xl"}},spacing:{xs:{container:16,elements:24},sm:{container:20,elements:32},md:{container:24,elements:40},lg:{container:32,elements:48},xl:{container:40,elements:56},"2xl":{container:48,elements:64},"3xl":{container:56,elements:72},"4xl":{container:64,elements:80}}},St=({text:a,delay:u=0,className:s=""})=>{const[m,f]=p.useState(0),l=we()?.prefersReducedMotion,b=fe(ne.animationSpeeds),_=fe(ne.textSizes.title);return p.useEffect(()=>{const w=l?b*2:b,S=setInterval(()=>{f(D=>D<a.length?D+1:(clearInterval(S),D))},w);return()=>clearInterval(S)},[a,b,l]),c.jsx(j.h1,{className:`${_} font-bold tracking-tight ${s}`,initial:{opacity:0},animate:{opacity:1},transition:{duration:l?.3:.5,delay:l?0:u},children:a.split("").map((w,S)=>c.jsx(j.span,{className:"bg-gradient-to-r from-emerald-200 via-teal-200 to-cyan-200 bg-clip-text text-transparent inline-block",initial:{opacity:0,y:l?0:50,scale:l?1:.3,filter:"blur(5px)",rotateX:l?0:-90},animate:S<m?{opacity:1,y:0,scale:1,filter:"blur(0px)",rotateX:0}:{},transition:{duration:l?.3:.8,ease:l?"easeOut":[.23,1,.32,1],type:"tween",filter:{type:"tween"}},style:{textShadow:S<m?"0 0 20px rgba(16,185,129,0.5)":"none"},children:w===" "?" ":w},S))})},Dt=({onComplete:a})=>{const[u,s]=p.useState(""),m="ACCESS GRANTED",f=fe(ne.textSizes.button);return p.useEffect(()=>{let l=0;const b=60;let _=!1;const w=setInterval(()=>{l<=m.length?(s(m.slice(0,l)),l++):(clearInterval(w),!_&&a&&(_=!0,setTimeout(()=>{a()},800)))},b);return()=>{clearInterval(w)}},[a,m]),c.jsx("div",{className:"flex items-center justify-center w-full h-full bg-black/70 backdrop-blur-sm rounded-3xl border border-blue-500/30",children:c.jsx("div",{className:`font-mono ${f} font-bold text-center`,children:c.jsxs("span",{className:"text-blue-400 access-granted-glow",children:[u,c.jsx("span",{className:"inline-block w-0.5 h-6 bg-blue-400 ml-1 animate-pulse"})]})})})},At=({text:a,delay:u=0,speed:s=50,className:m=""})=>{const[f,l]=p.useState(""),[b,_]=p.useState(!0),{prefersReducedMotion:w}=we();return p.useEffect(()=>{const S=w?s/2:s,D=setTimeout(()=>{let x=0;const C=setInterval(()=>{x<=a.length?(l(a.slice(0,x)),x++):(clearInterval(C),_(!1))},S);return()=>clearInterval(C)},u);return()=>clearTimeout(D)},[a,u,s,w]),c.jsxs("span",{className:m,children:[f,b&&c.jsx("span",{className:"animate-pulse",children:"|"})]})},Ft=()=>{const a=p.useRef(null);return p.useEffect(()=>{const u=a.current;if(!u)return;const s=u.getContext("2d");if(!s)return;const m=()=>{u.width=window.innerWidth,u.height=window.innerHeight};m(),window.addEventListener("resize",m);const l="ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}".split(""),b=14,_=u.width/b,w=[];for(let x=0;x<_;x++)w[x]=1;const D=setInterval(()=>{s.fillStyle="rgba(0, 0, 0, 0.04)",s.fillRect(0,0,u.width,u.height),s.fillStyle="#0F4",s.font=b+"px monospace";for(let x=0;x<w.length;x++){const C=l[Math.floor(Math.random()*l.length)];s.fillStyle=`rgba(0, 255, 70, ${Math.random()*.5+.5})`,s.fillText(C,x*b,w[x]*b),w[x]*b>u.height&&Math.random()>.975&&(w[x]=0),w[x]++}},35);return()=>{clearInterval(D),window.removeEventListener("resize",m)}},[]),c.jsx("canvas",{ref:a,className:"absolute inset-0 opacity-20 pointer-events-none"})},_t=({isActive:a=!0})=>{const u=fe(ne.particleCounts);return c.jsx("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:Array.from({length:u}).map((s,m)=>c.jsx(j.div,{className:"absolute w-1 h-1 bg-emerald-400/30 rounded-full",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`},animate:a?{x:[0,Math.random()*200-100],y:[0,Math.random()*200-100],opacity:[0,1,0],scale:[0,1,0]}:{},transition:{duration:Math.random()*4+2,repeat:Number.POSITIVE_INFINITY,ease:"easeInOut",delay:Math.random()*2}},m))})},Ut=()=>{const[a,u]=p.useState(!1),[s,m]=p.useState("normal"),[f,l]=p.useState(!1),b=vt(),_=p.useRef([]),{isTablet:w}=we(),S=fe(ne.textSizes.subtitle),D=fe(ne.textSizes.button),x=fe(ne.spacing);p.useEffect(()=>{document.body.style.backgroundColor="#0f172a",document.body.style.overflow="hidden",document.body.style.height="100vh",document.documentElement.style.setProperty("--container-padding",`${x.container}px`);const A=setTimeout(()=>{u(!0)},500);return _.current.push(A),()=>{_.current.forEach($=>clearTimeout($)),_.current=[],document.body.style.overflow="unset",document.body.style.height="auto",document.documentElement.style.removeProperty("--container-padding")}},[x.container]);const C=p.useCallback(()=>{if(f)return;l(!0),m("expanded");const A=setTimeout(()=>m("glitch"),800);_.current.push(A)},[f]),q=p.useCallback(()=>{m("access")},[]),oe=p.useCallback(()=>{sessionStorage.setItem("hasVisitedSite","true"),b("/home")},[b]),ee=()=>{const A=w?"md":"lg",M=ne.buttonSizes;switch(s){case"expanded":case"glitch":case"access":return M.expanded[A]||M.expanded.lg;default:return M.normal[A]||M.normal.lg}},U=()=>{switch(s){case"expanded":case"glitch":case"access":return 1;default:return 1}};return c.jsxs("div",{className:"relative min-h-screen bg-slate-900",children:[c.jsx(yt,{}),c.jsx("div",{className:"fixed inset-0 bg-slate-900 z-0"}),c.jsx(He,{mode:"wait",children:c.jsxs(j.div,{className:"min-h-screen relative overflow-hidden z-10",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,scale:.9,filter:"blur(5px)"},transition:{duration:1,ease:[.23,1,.32,1]},children:[c.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900"}),c.jsx(Ft,{}),!w&&c.jsx(_t,{isActive:!0}),c.jsx("div",{className:"relative z-20 flex flex-col items-center justify-center min-h-screen dynamic-container-padding",children:a&&c.jsxs(c.Fragment,{children:[c.jsx(j.div,{className:"text-center mb-8",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:c.jsx(St,{text:"WISHANT BHAJAN",delay:0})}),c.jsx(j.div,{className:"text-center mb-12",initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{duration:.8,delay:.6},children:c.jsx("div",{className:`${S} font-normal tracking-wide`,children:c.jsx(At,{text:"Full Stack Developer",delay:1200,speed:100,className:"text-emerald-200/90 font-sans typing-text-container"})})}),c.jsx(j.div,{className:"text-center",initial:{opacity:0,y:60},animate:{opacity:1,y:0},transition:{duration:.8,delay:1},children:c.jsxs(j.button,{onClick:C,className:`relative overflow-hidden group bg-gradient-to-r from-emerald-500/30 via-teal-500/25 to-cyan-500/30 backdrop-blur-xl border-2 border-emerald-400/50 rounded-3xl font-bold transition-all duration-500 shadow-2xl ${D} px-8 py-4`,animate:{...ee(),scale:U()},transition:{duration:.8,ease:[.23,1,.32,1]},whileHover:f?{}:{scale:1.1,y:-10,boxShadow:"0 25px 50px rgba(16,185,129,0.4)",borderColor:"rgba(16,185,129,0.8)"},whileTap:f?{}:{scale:.95},disabled:f,children:[c.jsxs(He,{children:[s==="normal"&&c.jsx(j.div,{className:"relative z-10 flex items-center justify-center w-full h-full",exit:{opacity:0},children:c.jsx("span",{className:"bg-gradient-to-r from-emerald-200 via-teal-200 to-cyan-200 bg-clip-text text-transparent font-bold tracking-wide",children:"Hack Website"})},"normal"),s==="expanded"&&c.jsx(j.div,{className:"relative z-10 flex items-center justify-center w-full h-full",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0},children:c.jsx("span",{className:"bg-gradient-to-r from-emerald-200 via-teal-200 to-cyan-200 bg-clip-text text-transparent font-bold tracking-wide",children:"Initiating Hack..."})},"expanded"),s==="glitch"&&c.jsx(j.div,{className:"absolute inset-0",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:c.jsx(Et,{onComplete:q,duration:3e3,glitchColors:["#10b981","#06d6a0","#118ab2","#3b82f6","#8b5cf6","#f59e0b"],glitchSpeed:50,smooth:!1,className:"rounded-3xl"})},"glitch"),s==="access"&&c.jsx(j.div,{className:"absolute inset-0",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:c.jsx(Dt,{onComplete:oe})},"access")]}),s==="normal"&&c.jsxs(c.Fragment,{children:[c.jsx(j.div,{className:"absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-3xl",animate:{scale:[1,1.15,1],opacity:[.4,.7,.4],rotate:[0,1,-1,0]},transition:{duration:2.5,repeat:Number.POSITIVE_INFINITY,ease:"easeInOut"}}),c.jsx("div",{className:"absolute inset-0 overflow-hidden rounded-3xl opacity-20",children:Array.from({length:15}).map((A,M)=>c.jsx(j.div,{className:"absolute text-emerald-300 font-mono text-xs",style:{left:`${Math.random()*100}%`,top:"-10px"},animate:{y:[0,80],opacity:[0,1,0]},transition:{duration:Math.random()*2+1,repeat:Number.POSITIVE_INFINITY,delay:Math.random()*3,ease:"linear"},children:Math.random()>.5?"1":"0"},M))})]})]})})]})})]},"homepage")})]})};export{Ut as default};
