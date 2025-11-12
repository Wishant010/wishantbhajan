var et=Object.defineProperty;var tt=(v,m,h)=>m in v?et(v,m,{enumerable:!0,configurable:!0,writable:!0,value:h}):v[m]=h;var W=(v,m,h)=>tt(v,typeof m!="symbol"?m+"":m,h);import{j as c,A as Ce,m as I}from"./vendor-animation-DFw3RoWT.js";import{r as g,u as rt}from"./vendor-router-BmFJG5KR.js";import{u as pe,a as it,b as ee}from"./index-C79LPYuS.js";import"./vendor-react-Gt25DZgv.js";import"./vendor-three-DO_qwccS.js";function nt(){return{id:-1,texcoordX:0,texcoordY:0,prevTexcoordX:0,prevTexcoordY:0,deltaX:0,deltaY:0,down:!1,moved:!1,color:{r:0,g:0,b:0}}}function ot({SIM_RESOLUTION:v=128,DYE_RESOLUTION:m=1440,CAPTURE_RESOLUTION:h=512,DENSITY_DISSIPATION:S=3.5,VELOCITY_DISSIPATION:_=2,PRESSURE:p=.1,PRESSURE_ITERATIONS:D=20,CURL:z=3,SPLAT_RADIUS:R=.2,SPLAT_FORCE:P=6e3,SHADING:E=!0,COLOR_UPDATE_SPEED:l=10,BACK_COLOR:Y={r:.5,g:0,b:0},TRANSPARENT:H=!0}){const q=g.useRef(null);return g.useEffect(()=>{const T=q.current;if(!T)return;const A=[nt()],d={SIM_RESOLUTION:v,DYE_RESOLUTION:m,DENSITY_DISSIPATION:S,VELOCITY_DISSIPATION:_,PRESSURE:p,PRESSURE_ITERATIONS:D,CURL:z,SPLAT_RADIUS:R,SPLAT_FORCE:P,SHADING:E,COLOR_UPDATE_SPEED:l},{gl:t,ext:N}=Z(T);if(!t||!N)return;N.supportLinearFiltering||(d.DYE_RESOLUTION=256,d.SHADING=!1);function Z(e){const i={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1};let r=e.getContext("webgl2",i);if(r||(r=e.getContext("webgl",i)||e.getContext("experimental-webgl",i)),!r)throw new Error("Unable to initialize WebGL.");const n="drawBuffers"in r;let o=!1,f=null;n?(r.getExtension("EXT_color_buffer_float"),o=!!r.getExtension("OES_texture_float_linear")):(f=r.getExtension("OES_texture_half_float"),o=!!r.getExtension("OES_texture_half_float_linear")),r.clearColor(0,0,0,1);const x=n?r.HALF_FLOAT:f&&f.HALF_FLOAT_OES||0;let U,X,$;return n?(U=k(r,r.RGBA16F,r.RGBA,x),X=k(r,r.RG16F,r.RG,x),$=k(r,r.R16F,r.RED,x)):(U=k(r,r.RGBA,r.RGBA,x),X=k(r,r.RGBA,r.RGBA,x),$=k(r,r.RGBA,r.RGBA,x)),{gl:r,ext:{formatRGBA:U,formatRG:X,formatR:$,halfFloatTexType:x,supportLinearFiltering:o}}}function k(e,i,r,n){if(!te(e,i,r,n)){if("drawBuffers"in e){const o=e;switch(i){case o.R16F:return k(o,o.RG16F,o.RG,n);case o.RG16F:return k(o,o.RGBA16F,o.RGBA,n);default:return null}}return null}return{internalFormat:i,format:r}}function te(e,i,r,n){const o=e.createTexture();if(!o)return!1;e.bindTexture(e.TEXTURE_2D,o),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,i,4,4,0,r,n,null);const f=e.createFramebuffer();return f?(e.bindFramebuffer(e.FRAMEBUFFER,f),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,o,0),e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE):!1}function re(e){if(!e.length)return 0;let i=0;for(let r=0;r<e.length;r++)i=(i<<5)-i+e.charCodeAt(r),i|=0;return i}function me(e,i){if(!i)return e;let r="";for(const n of i)r+=`#define ${n}
`;return r+e}function G(e,i,r=null){const n=me(i,r),o=t.createShader(e);return o?(t.shaderSource(o,n),t.compileShader(o),t.getShaderParameter(o,t.COMPILE_STATUS),o):null}function ae(e,i){if(!e||!i)return null;const r=t.createProgram();return r?(t.attachShader(r,e),t.attachShader(r,i),t.linkProgram(r),t.getProgramParameter(r,t.LINK_STATUS),r):null}function se(e){const i={},r=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<r;n++){const o=t.getActiveUniform(e,n);o&&(i[o.name]=t.getUniformLocation(e,o.name))}return i}class j{constructor(i,r){W(this,"program");W(this,"uniforms");this.program=ae(i,r),this.uniforms=this.program?se(this.program):{}}bind(){this.program&&t.useProgram(this.program)}}class he{constructor(i,r){W(this,"vertexShader");W(this,"fragmentShaderSource");W(this,"programs");W(this,"activeProgram");W(this,"uniforms");this.vertexShader=i,this.fragmentShaderSource=r,this.programs={},this.activeProgram=null,this.uniforms={}}setKeywords(i){let r=0;for(const o of i)r+=re(o);let n=this.programs[r];if(n==null){const o=G(t.FRAGMENT_SHADER,this.fragmentShaderSource,i);n=ae(this.vertexShader,o),this.programs[r]=n}n!==this.activeProgram&&(n&&(this.uniforms=se(n)),this.activeProgram=n)}bind(){this.activeProgram&&t.useProgram(this.activeProgram)}}const V=G(t.VERTEX_SHADER,`
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
    `),ge=G(t.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      uniform sampler2D uTexture;

      void main () {
          gl_FragColor = texture2D(uTexture, vUv);
      }
    `),ye=G(t.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      uniform sampler2D uTexture;
      uniform float value;

      void main () {
          gl_FragColor = value * texture2D(uTexture, vUv);
      }
    `),ce=`
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
    `,le=G(t.FRAGMENT_SHADER,`
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
    `),Te=G(t.FRAGMENT_SHADER,`
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
    `,N.supportLinearFiltering?null:["MANUAL_FILTERING"]),be=G(t.FRAGMENT_SHADER,`
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
    `),ue=G(t.FRAGMENT_SHADER,`
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
    `),Re=G(t.FRAGMENT_SHADER,`
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
    `),Ee=G(t.FRAGMENT_SHADER,`
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
    `),we=G(t.FRAGMENT_SHADER,`
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
    `),M=(()=>{const e=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,e),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),t.STATIC_DRAW);const i=t.createBuffer();return t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,i),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),t.STATIC_DRAW),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0),t.enableVertexAttribArray(0),(r,n=!1)=>{t&&(r?(t.viewport(0,0,r.width,r.height),t.bindFramebuffer(t.FRAMEBUFFER,r.fbo)):(t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),t.bindFramebuffer(t.FRAMEBUFFER,null)),n&&(t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT)),t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0))}})();let s,a,u,y,b;const L=new j(V,ge),B=new j(V,ye),F=new j(V,le),w=new j(V,Te),fe=new j(V,be),de=new j(V,ue),O=new j(V,Re),J=new j(V,Ee),Q=new j(V,we),ie=new he(V,ce);function ne(e,i,r,n,o,f){t.activeTexture(t.TEXTURE0);const x=t.createTexture();t.bindTexture(t.TEXTURE_2D,x),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,f),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,f),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texImage2D(t.TEXTURE_2D,0,r,e,i,0,n,o,null);const U=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,U),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,x,0),t.viewport(0,0,e,i),t.clear(t.COLOR_BUFFER_BIT);const X=1/e,$=1/i;return{texture:x,fbo:U,width:e,height:i,texelSizeX:X,texelSizeY:$,attach(oe){return t.activeTexture(t.TEXTURE0+oe),t.bindTexture(t.TEXTURE_2D,x),oe}}}function Se(e,i,r,n,o,f){const x=ne(e,i,r,n,o,f),U=ne(e,i,r,n,o,f);return{width:e,height:i,texelSizeX:x.texelSizeX,texelSizeY:x.texelSizeY,read:x,write:U,swap(){const X=this.read;this.read=this.write,this.write=X}}}function Ue(e,i,r,n,o,f,x){const U=ne(i,r,n,o,f,x);return L.bind(),L.uniforms.uTexture&&t.uniform1i(L.uniforms.uTexture,e.attach(0)),M(U,!1),U}function _e(e,i,r,n,o,f,x){return e.width===i&&e.height===r||(e.read=Ue(e.read,i,r,n,o,f,x),e.write=ne(i,r,n,o,f,x),e.width=i,e.height=r,e.texelSizeX=1/i,e.texelSizeY=1/r),e}function ze(){const e=Pe(d.SIM_RESOLUTION),i=Pe(d.DYE_RESOLUTION),r=N.halfFloatTexType,n=N.formatRGBA,o=N.formatRG,f=N.formatR,x=N.supportLinearFiltering?t.LINEAR:t.NEAREST;t.disable(t.BLEND),s?s=_e(s,i.width,i.height,n.internalFormat,n.format,r,x):s=Se(i.width,i.height,n.internalFormat,n.format,r,x),a?a=_e(a,e.width,e.height,o.internalFormat,o.format,r,x):a=Se(e.width,e.height,o.internalFormat,o.format,r,x),u=ne(e.width,e.height,f.internalFormat,f.format,r,t.NEAREST),y=ne(e.width,e.height,f.internalFormat,f.format,r,t.NEAREST),b=Se(e.width,e.height,f.internalFormat,f.format,r,t.NEAREST)}function Xe(){const e=[];d.SHADING&&e.push("SHADING"),ie.setKeywords(e)}function Pe(e){const i=t.drawingBufferWidth,r=t.drawingBufferHeight,n=i/r,o=n<1?1/n:n,f=Math.round(e),x=Math.round(e*o);return i>r?{width:x,height:f}:{width:f,height:x}}function C(e){const i=window.devicePixelRatio||1;return Math.floor(e*i)}Xe(),ze();let Ne=Date.now(),xe=0;function De(){const e=Ie();Ge()&&ze(),je(e),Ye(),Ve(e),Oe(null),requestAnimationFrame(De)}function Ie(){const e=Date.now();let i=(e-Ne)/1e3;return i=Math.min(i,.016666),Ne=e,i}function Ge(){const e=C(T.clientWidth),i=C(T.clientHeight);return T.width!==e||T.height!==i?(T.width=e,T.height=i,!0):!1}function je(e){xe+=e*d.COLOR_UPDATE_SPEED,xe>=1&&(xe=Qe(xe,0,1),A.forEach(i=>{i.color=ve()}))}function Ye(){for(const e of A)e.moved&&(e.moved=!1,He(e))}function Ve(e){t.disable(t.BLEND),de.bind(),de.uniforms.texelSize&&t.uniform2f(de.uniforms.texelSize,a.texelSizeX,a.texelSizeY),de.uniforms.uVelocity&&t.uniform1i(de.uniforms.uVelocity,a.read.attach(0)),M(y),O.bind(),O.uniforms.texelSize&&t.uniform2f(O.uniforms.texelSize,a.texelSizeX,a.texelSizeY),O.uniforms.uVelocity&&t.uniform1i(O.uniforms.uVelocity,a.read.attach(0)),O.uniforms.uCurl&&t.uniform1i(O.uniforms.uCurl,y.attach(1)),O.uniforms.curl&&t.uniform1f(O.uniforms.curl,d.CURL),O.uniforms.dt&&t.uniform1f(O.uniforms.dt,e),M(a.write),a.swap(),fe.bind(),fe.uniforms.texelSize&&t.uniform2f(fe.uniforms.texelSize,a.texelSizeX,a.texelSizeY),fe.uniforms.uVelocity&&t.uniform1i(fe.uniforms.uVelocity,a.read.attach(0)),M(u),B.bind(),B.uniforms.uTexture&&t.uniform1i(B.uniforms.uTexture,b.read.attach(0)),B.uniforms.value&&t.uniform1f(B.uniforms.value,d.PRESSURE),M(b.write),b.swap(),J.bind(),J.uniforms.texelSize&&t.uniform2f(J.uniforms.texelSize,a.texelSizeX,a.texelSizeY),J.uniforms.uDivergence&&t.uniform1i(J.uniforms.uDivergence,u.attach(0));for(let r=0;r<d.PRESSURE_ITERATIONS;r++)J.uniforms.uPressure&&t.uniform1i(J.uniforms.uPressure,b.read.attach(1)),M(b.write),b.swap();Q.bind(),Q.uniforms.texelSize&&t.uniform2f(Q.uniforms.texelSize,a.texelSizeX,a.texelSizeY),Q.uniforms.uPressure&&t.uniform1i(Q.uniforms.uPressure,b.read.attach(0)),Q.uniforms.uVelocity&&t.uniform1i(Q.uniforms.uVelocity,a.read.attach(1)),M(a.write),a.swap(),w.bind(),w.uniforms.texelSize&&t.uniform2f(w.uniforms.texelSize,a.texelSizeX,a.texelSizeY),!N.supportLinearFiltering&&w.uniforms.dyeTexelSize&&t.uniform2f(w.uniforms.dyeTexelSize,a.texelSizeX,a.texelSizeY);const i=a.read.attach(0);w.uniforms.uVelocity&&t.uniform1i(w.uniforms.uVelocity,i),w.uniforms.uSource&&t.uniform1i(w.uniforms.uSource,i),w.uniforms.dt&&t.uniform1f(w.uniforms.dt,e),w.uniforms.dissipation&&t.uniform1f(w.uniforms.dissipation,d.VELOCITY_DISSIPATION),M(a.write),a.swap(),!N.supportLinearFiltering&&w.uniforms.dyeTexelSize&&t.uniform2f(w.uniforms.dyeTexelSize,s.texelSizeX,s.texelSizeY),w.uniforms.uVelocity&&t.uniform1i(w.uniforms.uVelocity,a.read.attach(0)),w.uniforms.uSource&&t.uniform1i(w.uniforms.uSource,s.read.attach(1)),w.uniforms.dissipation&&t.uniform1f(w.uniforms.dissipation,d.DENSITY_DISSIPATION),M(s.write),s.swap()}function Oe(e){t.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA),t.enable(t.BLEND),ke(e)}function ke(e){const i=t.drawingBufferWidth,r=t.drawingBufferHeight;ie.bind(),d.SHADING&&ie.uniforms.texelSize&&t.uniform2f(ie.uniforms.texelSize,1/i,1/r),ie.uniforms.uTexture&&t.uniform1i(ie.uniforms.uTexture,s.read.attach(0)),M(e,!1)}function He(e){const i=e.deltaX*d.SPLAT_FORCE,r=e.deltaY*d.SPLAT_FORCE;Le(e.texcoordX,e.texcoordY,i,r,e.color)}function $e(e){const i=ve();i.r*=10,i.g*=10,i.b*=10;const r=10*(Math.random()-.5),n=30*(Math.random()-.5);Le(e.texcoordX,e.texcoordY,r,n,i)}function Le(e,i,r,n,o){F.bind(),F.uniforms.uTarget&&t.uniform1i(F.uniforms.uTarget,a.read.attach(0)),F.uniforms.aspectRatio&&t.uniform1f(F.uniforms.aspectRatio,T.width/T.height),F.uniforms.point&&t.uniform2f(F.uniforms.point,e,i),F.uniforms.color&&t.uniform3f(F.uniforms.color,r,n,0),F.uniforms.radius&&t.uniform1f(F.uniforms.radius,We(d.SPLAT_RADIUS/100)),M(a.write),a.swap(),F.uniforms.uTarget&&t.uniform1i(F.uniforms.uTarget,s.read.attach(0)),F.uniforms.color&&t.uniform3f(F.uniforms.color,o.r,o.g,o.b),M(s.write),s.swap()}function We(e){const i=T.width/T.height;return i>1&&(e*=i),e}function Ae(e,i,r,n){e.id=i,e.down=!0,e.moved=!1,e.texcoordX=r/T.width,e.texcoordY=1-n/T.height,e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.deltaX=0,e.deltaY=0,e.color=ve()}function Fe(e,i,r,n){e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.texcoordX=i/T.width,e.texcoordY=1-r/T.height,e.deltaX=qe(e.texcoordX-e.prevTexcoordX),e.deltaY=Ze(e.texcoordY-e.prevTexcoordY),e.moved=Math.abs(e.deltaX)>0||Math.abs(e.deltaY)>0,e.color=n}function Ke(e){e.down=!1}function qe(e){const i=T.width/T.height;return i<1&&(e*=i),e}function Ze(e){const i=T.width/T.height;return i>1&&(e/=i),e}function ve(){const e=Je(Math.random(),1,1);return e.r*=.15,e.g*=.15,e.b*=.15,e}function Je(e,i,r){let n=0,o=0,f=0;const x=Math.floor(e*6),U=e*6-x,X=r*(1-i),$=r*(1-U*i),oe=r*(1-(1-U)*i);switch(x%6){case 0:n=r,o=oe,f=X;break;case 1:n=$,o=r,f=X;break;case 2:n=X,o=r,f=oe;break;case 3:n=X,o=$,f=r;break;case 4:n=oe,o=X,f=r;break;case 5:n=r,o=X,f=$;break}return{r:n,g:o,b:f}}function Qe(e,i,r){const n=r-i;return(e-i)%n+i}window.addEventListener("mousedown",e=>{const i=A[0],r=C(e.clientX),n=C(e.clientY);Ae(i,-1,r,n),$e(i)});function Me(e){const i=A[0],r=C(e.clientX),n=C(e.clientY),o=ve();De(),Fe(i,r,n,o),document.body.removeEventListener("mousemove",Me)}document.body.addEventListener("mousemove",Me),window.addEventListener("mousemove",e=>{const i=A[0],r=C(e.clientX),n=C(e.clientY),o=i.color;Fe(i,r,n,o)});function Be(e){const i=e.targetTouches,r=A[0];for(let n=0;n<i.length;n++){const o=C(i[n].clientX),f=C(i[n].clientY);De(),Ae(r,i[n].identifier,o,f)}document.body.removeEventListener("touchstart",Be)}document.body.addEventListener("touchstart",Be),window.addEventListener("touchstart",e=>{const i=e.targetTouches,r=A[0];for(let n=0;n<i.length;n++){const o=C(i[n].clientX),f=C(i[n].clientY);Ae(r,i[n].identifier,o,f)}},!1),window.addEventListener("touchmove",e=>{const i=e.targetTouches,r=A[0];for(let n=0;n<i.length;n++){const o=C(i[n].clientX),f=C(i[n].clientY);Fe(r,o,f,r.color)}},!1),window.addEventListener("touchend",e=>{const i=e.changedTouches,r=A[0];for(let n=0;n<i.length;n++)Ke(r)})},[v,m,h,S,_,p,D,z,R,P,E,l,Y,H]),c.jsx("div",{className:"fixed top-0 left-0 z-50 pointer-events-none w-full h-full",children:c.jsx("canvas",{ref:q,id:"fluid",className:"w-screen h-screen block"})})}const at=({glitchColors:v=["#2b4539","#61dca3","#61b3dc"],glitchSpeed:m=40,centerVignette:h=!1,outerVignette:S=!0,smooth:_=!0,onComplete:p,duration:D=0,className:z=""})=>{const R=g.useRef(null),P=g.useRef(null),E=g.useRef(null),l=g.useRef([]),Y=g.useRef({columns:0,rows:0}),H=g.useRef(null),q=g.useRef(Date.now()),T=g.useRef(Date.now()),A=g.useRef(!1),{isMobile:d,isTablet:t,prefersReducedMotion:N}=pe(),Z=it(),k=d?12:t?14:16,te=d?8:t?9:10,re=d?16:t?18:20,me=N||Z?m*3:d?m*1.2:m,G=d?.05:t?.06:.07,ae=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","!","@","#","$","&","*","(",")","-","_","+","=","/","[","]","{","}",";",":","<",">",",","0","1","2","3","4","5","6","7","8","9"],se=()=>ae[Math.floor(Math.random()*ae.length)],j=()=>v[Math.floor(Math.random()*v.length)],he=s=>{const a=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;s=s.replace(a,(y,b,L)=>y+y+b+b+L+L);const u=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(s);return u?{r:parseInt(u[1],16),g:parseInt(u[2],16),b:parseInt(u[3],16)}:null},V=(s,a,u)=>{const y={r:Math.round(s.r+(a.r-s.r)*u),g:Math.round(s.g+(a.g-s.g)*u),b:Math.round(s.b+(a.b-s.b)*u)};return`rgb(${y.r}, ${y.g}, ${y.b})`},ge=(s,a)=>{const u=Math.ceil(s/te),y=Math.ceil(a/re);return{columns:u,rows:y}},ye=(s,a)=>{Y.current={columns:s,rows:a};const u=s*a;l.current=Array.from({length:u},()=>({char:se(),color:j(),targetColor:j(),colorProgress:1}))},ce=()=>{const s=R.current,a=P.current;if(!s||!a||A.current)return;a.parentElement&&(a.style.width="100%",a.style.height="100%");const y=a.getBoundingClientRect(),b=y.width,L=y.height;if(b===0||L===0){setTimeout(()=>{A.current||ce()},50);return}const B=d?Math.min(window.devicePixelRatio||1,2):window.devicePixelRatio||1;s.width=b*B,s.height=L*B,s.style.width=`${b}px`,s.style.height=`${L}px`,H.current&&H.current.setTransform(B,0,0,B,0,0);const{columns:F,rows:w}=ge(b,L);ye(F,w),le()},le=()=>{if(!H.current||l.current.length===0||A.current)return;const s=H.current;if(!R.current)return;const u=P.current;if(!u)return;const y=u.getBoundingClientRect();s.fillStyle="#000000",s.fillRect(0,0,y.width,y.height),s.font=`${k}px monospace`,s.textBaseline="top",l.current.forEach((b,L)=>{const B=L%Y.current.columns*te,F=Math.floor(L/Y.current.columns)*re;B>=-te&&B<=y.width+te&&F>=-re&&F<=y.height+re&&(s.fillStyle=b.color,s.fillText(b.char,B,F))})},Te=()=>{if(!l.current||l.current.length===0||A.current)return;const s=Math.max(1,Math.floor(l.current.length*G));for(let a=0;a<s;a++){const u=Math.floor(Math.random()*l.current.length);l.current[u]&&(Math.random()>.4&&(l.current[u].char=se()),Math.random()>.5&&(l.current[u].targetColor=j()),!_||N||Z?(l.current[u].color=l.current[u].targetColor,l.current[u].colorProgress=1):l.current[u].colorProgress=0)}},be=()=>{if(N||Z)return;let s=!1;const a=d?.15:.12;l.current.forEach(u=>{if(u.colorProgress<1){u.colorProgress+=a,u.colorProgress>1&&(u.colorProgress=1);const y=he(u.color),b=he(u.targetColor);y&&b&&(u.color=V(y,b,u.colorProgress),s=!0)}}),s&&le()},ue=()=>{if(A.current)return;const s=Date.now();if(D>0&&s-T.current>=D){E.current&&cancelAnimationFrame(E.current),p==null||p();return}s-q.current>=me&&(Te(),le(),q.current=s),_&&!N&&!Z&&be(),E.current=requestAnimationFrame(ue)};g.useEffect(()=>{const s=R.current;if(!s)return;A.current=!1,H.current=s.getContext("2d",{alpha:!1,willReadFrequently:!1,desynchronized:!d}),T.current=Date.now(),setTimeout(()=>{A.current||(ce(),ue())},10);let a;const u=()=>{clearTimeout(a),a=setTimeout(()=>{A.current||(E.current&&cancelAnimationFrame(E.current),ce(),ue())},100)};let y=null;return"ResizeObserver"in window&&P.current&&(y=new ResizeObserver(b=>{for(const L of b)if(L.target===P.current){u();break}}),y.observe(P.current)),window.addEventListener("resize",u),()=>{A.current=!0,E.current&&cancelAnimationFrame(E.current),window.removeEventListener("resize",u),y&&y.disconnect(),clearTimeout(a)}},[me,_,D,p,d,N,Z]);const Re={position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"#000000",overflow:"hidden",willChange:"transform",transform:"translateZ(0)",backfaceVisibility:"hidden"},Ee={position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"block",backgroundColor:"#000000",willChange:"transform",transform:"translateZ(0)",imageRendering:"auto"},we={position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",background:"radial-gradient(circle, rgba(0,0,0,0) 60%, rgba(0,0,0,1) 100%)",opacity:d?.7:1},M={position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",background:"radial-gradient(circle, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%)",opacity:d?.6:.8};return c.jsxs("div",{ref:P,style:Re,className:z,children:[c.jsx("canvas",{ref:R,style:Ee}),S&&c.jsx("div",{style:we}),h&&c.jsx("div",{style:M})]})},K={particleCounts:{xs:15,sm:20,md:25,lg:30,xl:35,"2xl":40,"3xl":45,"4xl":50},animationSpeeds:{xs:120,sm:100,md:90,lg:80,xl:70,"2xl":60,"3xl":50,"4xl":40},buttonSizes:{normal:{xs:{width:"280px",height:"50px"},sm:{width:"320px",height:"55px"},md:{width:"360px",height:"60px"},lg:{width:"400px",height:"60px"},xl:{width:"420px",height:"65px"},"2xl":{width:"450px",height:"70px"},"3xl":{width:"480px",height:"75px"},"4xl":{width:"520px",height:"80px"}},expanded:{xs:{width:"300px",height:"120px"},sm:{width:"380px",height:"140px"},md:{width:"450px",height:"160px"},lg:{width:"550px",height:"220px"},xl:{width:"600px",height:"240px"},"2xl":{width:"650px",height:"260px"},"3xl":{width:"700px",height:"280px"},"4xl":{width:"750px",height:"300px"}}},textSizes:{title:{xs:"text-3xl",sm:"text-4xl",md:"text-5xl",lg:"text-6xl",xl:"text-7xl","2xl":"text-8xl","3xl":"text-9xl","4xl":"text-[8rem]"},subtitle:{xs:"text-sm",sm:"text-base",md:"text-lg",lg:"text-xl",xl:"text-2xl","2xl":"text-3xl","3xl":"text-4xl","4xl":"text-5xl"},button:{xs:"text-sm",sm:"text-base",md:"text-lg",lg:"text-xl",xl:"text-xl","2xl":"text-2xl","3xl":"text-3xl","4xl":"text-4xl"}},spacing:{xs:{container:16,elements:24},sm:{container:20,elements:32},md:{container:24,elements:40},lg:{container:32,elements:48},xl:{container:40,elements:56},"2xl":{container:48,elements:64},"3xl":{container:56,elements:72},"4xl":{container:64,elements:80}}},st=({text:v,delay:m=0,className:h=""})=>{var R;const[S,_]=g.useState(0),p=(R=pe())==null?void 0:R.prefersReducedMotion,D=ee(K.animationSpeeds),z=ee(K.textSizes.title);return g.useEffect(()=>{const P=p?D*2:D,E=setInterval(()=>{_(l=>l<v.length?l+1:(clearInterval(E),l))},P);return()=>clearInterval(E)},[v,D,p]),c.jsx(I.h1,{className:`${z} font-bold tracking-tight ${h}`,initial:{opacity:0},animate:{opacity:1},transition:{duration:p?.3:.5,delay:p?0:m},children:v.split("").map((P,E)=>c.jsx(I.span,{className:"bg-gradient-to-r from-emerald-200 via-teal-200 to-cyan-200 bg-clip-text text-transparent inline-block",initial:{opacity:0,y:p?0:50,scale:p?1:.3,filter:"blur(5px)",rotateX:p?0:-90},animate:E<S?{opacity:1,y:0,scale:1,filter:"blur(0px)",rotateX:0}:{},transition:{duration:p?.3:.8,ease:p?"easeOut":[.23,1,.32,1],type:p?"tween":"spring",stiffness:100,damping:15},style:{textShadow:E<S?"0 0 20px rgba(16,185,129,0.5)":"none"},children:P===" "?" ":P},E))})},ct=({onComplete:v})=>{const[m,h]=g.useState(""),S="ACCESS GRANTED",_=ee(K.textSizes.button);return g.useEffect(()=>{let p=0;const z=setInterval(()=>{p<=S.length?(h(S.slice(0,p)),p++):(clearInterval(z),setTimeout(()=>{v==null||v()},1e3))},60);return()=>clearInterval(z)},[v]),c.jsx("div",{className:"flex items-center justify-center w-full h-full bg-black/70 backdrop-blur-sm rounded-3xl border border-blue-500/30",children:c.jsx("div",{className:`font-mono ${_} font-bold text-center`,children:c.jsxs("span",{className:"text-blue-400 access-granted-glow",children:[m,c.jsx("span",{className:"inline-block w-0.5 h-6 bg-blue-400 ml-1 animate-pulse"})]})})})},lt=({text:v,delay:m=0,speed:h=50,className:S=""})=>{const[_,p]=g.useState(""),[D,z]=g.useState(!0),{prefersReducedMotion:R}=pe();return g.useEffect(()=>{const P=R?h/2:h,E=setTimeout(()=>{let l=0;const Y=setInterval(()=>{l<=v.length?(p(v.slice(0,l)),l++):(clearInterval(Y),z(!1))},P);return()=>clearInterval(Y)},m);return()=>clearTimeout(E)},[v,m,h,R]),c.jsxs("span",{className:S,children:[_,D&&c.jsx("span",{className:"animate-pulse",children:"|"})]})},ut=()=>{const v=g.useRef(null);return g.useEffect(()=>{const m=v.current;if(!m)return;const h=m.getContext("2d");if(!h)return;const S=()=>{m.width=window.innerWidth,m.height=window.innerHeight};S(),window.addEventListener("resize",S);const p="ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}".split(""),D=14,z=m.width/D,R=[];for(let l=0;l<z;l++)R[l]=1;const E=setInterval(()=>{h.fillStyle="rgba(0, 0, 0, 0.04)",h.fillRect(0,0,m.width,m.height),h.fillStyle="#0F4",h.font=D+"px monospace";for(let l=0;l<R.length;l++){const Y=p[Math.floor(Math.random()*p.length)];h.fillStyle=`rgba(0, 255, 70, ${Math.random()*.5+.5})`,h.fillText(Y,l*D,R[l]*D),R[l]*D>m.height&&Math.random()>.975&&(R[l]=0),R[l]++}},35);return()=>{clearInterval(E),window.removeEventListener("resize",S)}},[]),c.jsx("canvas",{ref:v,className:"absolute inset-0 opacity-20 pointer-events-none"})},ft=({isActive:v=!0})=>{const m=ee(K.particleCounts);return c.jsx("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:Array.from({length:m}).map((h,S)=>c.jsx(I.div,{className:"absolute w-1 h-1 bg-emerald-400/30 rounded-full",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`},animate:v?{x:[0,Math.random()*200-100],y:[0,Math.random()*200-100],opacity:[0,1,0],scale:[0,1,0]}:{},transition:{duration:Math.random()*4+2,repeat:Number.POSITIVE_INFINITY,ease:"easeInOut",delay:Math.random()*2}},S))})},gt=()=>{const[v,m]=g.useState(!1),[h,S]=g.useState("normal"),[_,p]=g.useState(!1),D=rt(),z=g.useRef([]),{isTablet:R}=pe(),P=ee(K.textSizes.subtitle),E=ee(K.textSizes.button),l=ee(K.spacing);g.useEffect(()=>{document.body.style.backgroundColor="#0f172a",document.body.style.overflow="hidden",document.body.style.height="100vh",document.documentElement.style.setProperty("--container-padding",`${l.container}px`);const d=setTimeout(()=>{m(!0)},500);return z.current.push(d),()=>{z.current.forEach(N=>clearTimeout(N)),z.current=[],document.body.style.overflow="unset",document.body.style.height="auto",document.documentElement.style.removeProperty("--container-padding")}},[l.container]);const Y=g.useCallback(()=>{if(_)return;p(!0),S("expanded");const d=setTimeout(()=>S("glitch"),800);z.current.push(d)},[_]),H=g.useCallback(()=>{S("access")},[]),q=g.useCallback(()=>{const d=setTimeout(()=>{D("/home")},500);z.current.push(d)},[D]),T=()=>{const d=R?"md":"lg",t=K.buttonSizes;switch(h){case"expanded":case"glitch":case"access":return t.expanded[d]||t.expanded.lg;default:return t.normal[d]||t.normal.lg}},A=()=>{switch(h){case"expanded":case"glitch":case"access":return 1;default:return 1}};return c.jsxs("div",{className:"relative min-h-screen bg-slate-900",children:[c.jsx(ot,{}),c.jsx("div",{className:"fixed inset-0 bg-slate-900 z-0"}),c.jsx(Ce,{mode:"wait",children:c.jsxs(I.div,{className:"min-h-screen relative overflow-hidden z-10",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,scale:.9,filter:"blur(5px)"},transition:{duration:1,ease:[.23,1,.32,1]},children:[c.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900"}),c.jsx(ut,{}),!R&&c.jsx(ft,{isActive:!0}),c.jsx("div",{className:"relative z-20 flex flex-col items-center justify-center min-h-screen dynamic-container-padding",children:v&&c.jsxs(c.Fragment,{children:[c.jsx(I.div,{className:"text-center mb-8",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:c.jsx(st,{text:"WISHANT BHAJAN",delay:0})}),c.jsx(I.div,{className:"text-center mb-12",initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{duration:.8,delay:.6},children:c.jsx("div",{className:`${P} font-normal tracking-wide`,children:c.jsx(lt,{text:"Full Stack Developer",delay:1200,speed:100,className:"text-emerald-200/90 font-sans typing-text-container"})})}),c.jsx(I.div,{className:"text-center",initial:{opacity:0,y:60},animate:{opacity:1,y:0},transition:{duration:.8,delay:1},children:c.jsxs(I.button,{onClick:Y,className:`relative overflow-hidden group bg-gradient-to-r from-emerald-500/30 via-teal-500/25 to-cyan-500/30 backdrop-blur-xl border-2 border-emerald-400/50 rounded-3xl font-bold transition-all duration-500 shadow-2xl ${E} px-8 py-4`,animate:{...T(),scale:A()},transition:{duration:.8,ease:[.23,1,.32,1]},whileHover:_?{}:{scale:1.1,y:-10,boxShadow:"0 25px 50px rgba(16,185,129,0.4)",borderColor:"rgba(16,185,129,0.8)"},whileTap:_?{}:{scale:.95},disabled:_,children:[c.jsxs(Ce,{mode:"wait",children:[h==="normal"&&c.jsx(I.div,{className:"relative z-10 flex items-center justify-center w-full h-full",exit:{opacity:0},children:c.jsx("span",{className:"bg-gradient-to-r from-emerald-200 via-teal-200 to-cyan-200 bg-clip-text text-transparent font-bold tracking-wide",children:"Hack Website"})},"normal"),h==="expanded"&&c.jsx(I.div,{className:"relative z-10 flex items-center justify-center w-full h-full",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0},children:c.jsx("span",{className:"bg-gradient-to-r from-emerald-200 via-teal-200 to-cyan-200 bg-clip-text text-transparent font-bold tracking-wide",children:"Initiating Hack..."})},"expanded"),h==="glitch"&&c.jsx(I.div,{className:"absolute inset-0",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:c.jsx(at,{onComplete:H,duration:3e3,glitchColors:["#10b981","#06d6a0","#118ab2","#3b82f6","#8b5cf6","#f59e0b"],glitchSpeed:50,smooth:!1,className:"rounded-3xl"})},"glitch"),h==="access"&&c.jsx(I.div,{className:"absolute inset-0",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:c.jsx(ct,{onComplete:q})},"access")]}),h==="normal"&&c.jsxs(c.Fragment,{children:[c.jsx(I.div,{className:"absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-3xl",animate:{scale:[1,1.15,1],opacity:[.4,.7,.4],rotate:[0,1,-1,0]},transition:{duration:2.5,repeat:Number.POSITIVE_INFINITY,ease:"easeInOut"}}),c.jsx("div",{className:"absolute inset-0 overflow-hidden rounded-3xl opacity-20",children:Array.from({length:15}).map((d,t)=>c.jsx(I.div,{className:"absolute text-emerald-300 font-mono text-xs",style:{left:`${Math.random()*100}%`,top:"-10px"},animate:{y:[0,80],opacity:[0,1,0]},transition:{duration:Math.random()*2+1,repeat:Number.POSITIVE_INFINITY,delay:Math.random()*3,ease:"linear"},children:Math.random()>.5?"1":"0"},t))})]})]})})]})})]},"homepage")})]})};export{gt as default};
