var ft=Object.defineProperty;var dt=(a,u,s)=>u in a?ft(a,u,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[u]=s;var ne=(a,u,s)=>dt(a,typeof u!="symbol"?u+"":u,s);import{u as mt,a as ht,b as xt,r as x,j as c,L as vt,R as pt}from"./vendor-react-DJ9TheEo.js";import{A as He,m as j}from"./vendor-animation-CJCAu5cO.js";function Xt(){return ht()}function gt(){return mt()}function Ot(){return xt()}const yt=x.forwardRef(({to:a,children:u,replace:s,onClick:d,...f},l)=>c.jsx(vt,{to:a,replace:s,onClick:d,...f,ref:l,children:u}));yt.displayName="Link";const wt=()=>typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches,bt=()=>typeof window>"u"?!1:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<768;function Tt(){return{id:-1,texcoordX:0,texcoordY:0,prevTexcoordX:0,prevTexcoordY:0,deltaX:0,deltaY:0,down:!1,moved:!1,color:{r:0,g:0,b:0}}}function Rt({SIM_RESOLUTION:a=128,DYE_RESOLUTION:u=1440,CAPTURE_RESOLUTION:s=512,DENSITY_DISSIPATION:d=3.5,VELOCITY_DISSIPATION:f=2,PRESSURE:l=.1,PRESSURE_ITERATIONS:b=20,CURL:_=3,SPLAT_RADIUS:w=.2,SPLAT_FORCE:E=6e3,SHADING:D=!0,COLOR_UPDATE_SPEED:v=10,BACK_COLOR:C={r:.5,g:0,b:0},TRANSPARENT:q=!0}){const oe=x.useRef(null),ee=x.useRef(null),[U,A]=x.useState(!1);x.useEffect(()=>{const R=new IntersectionObserver(([Y])=>{A(Y.isIntersecting)},{threshold:.1});return ee.current&&R.observe(ee.current),()=>R.disconnect()},[]);const M=bt(),W=wt(),te=M?64:a,be=M?512:u,ae=M?10:b,se=M?!1:D;return x.useEffect(()=>{if(!U||M||W)return;const R=oe.current;if(!R)return;const Y=[Tt()],L={SIM_RESOLUTION:te,DYE_RESOLUTION:be,DENSITY_DISSIPATION:d,VELOCITY_DISSIPATION:f,PRESSURE:l,PRESSURE_ITERATIONS:ae,CURL:_,SPLAT_RADIUS:w,SPLAT_FORCE:E,SHADING:se,COLOR_UPDATE_SPEED:v},{gl:t,ext:B}=Te(R);if(!t||!B)return;B.supportLinearFiltering||(L.DYE_RESOLUTION=256,L.SHADING=!1);function Te(e){const n={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1};let r=e.getContext("webgl2",n);if(r||(r=e.getContext("webgl",n)||e.getContext("experimental-webgl",n)),!r)throw new Error("Unable to initialize WebGL.");const i="drawBuffers"in r;let o=!1,h=null;i?(r.getExtension("EXT_color_buffer_float"),o=!!r.getExtension("OES_texture_float_linear")):(h=r.getExtension("OES_texture_half_float"),o=!!r.getExtension("OES_texture_half_float_linear")),r.clearColor(0,0,0,1);const y=i?r.HALF_FLOAT:h&&h.HALF_FLOAT_OES||0;let k,G,J;return i?(k=Q(r,r.RGBA16F,r.RGBA,y),G=Q(r,r.RG16F,r.RG,y),J=Q(r,r.R16F,r.RED,y)):(k=Q(r,r.RGBA,r.RGBA,y),G=Q(r,r.RGBA,r.RGBA,y),J=Q(r,r.RGBA,r.RGBA,y)),{gl:r,ext:{formatRGBA:k,formatRG:G,formatR:J,halfFloatTexType:y,supportLinearFiltering:o}}}function Q(e,n,r,i){if(!Ae(e,n,r,i)){if("drawBuffers"in e){const o=e;switch(n){case o.R16F:return Q(o,o.RG16F,o.RG,i);case o.RG16F:return Q(o,o.RGBA16F,o.RGBA,i);default:return null}}return null}return{internalFormat:n,format:r}}function Ae(e,n,r,i){const o=e.createTexture();if(!o)return!1;e.bindTexture(e.TEXTURE_2D,o),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,n,4,4,0,r,i,null);const h=e.createFramebuffer();return h?(e.bindFramebuffer(e.FRAMEBUFFER,h),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,o,0),e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE):!1}function Fe(e){if(!e.length)return 0;let n=0;for(let r=0;r<e.length;r++)n=(n<<5)-n+e.charCodeAt(r),n|=0;return n}function xe(e,n){if(!n)return e;let r="";for(const i of n)r+=`#define ${i}
`;return r+e}function N(e,n,r=null){const i=xe(n,r),o=t.createShader(e);return o?(t.shaderSource(o,i),t.compileShader(o),t.getShaderParameter(o,t.COMPILE_STATUS),o):null}function Re(e,n){if(!e||!n)return null;const r=t.createProgram();return r?(t.attachShader(r,e),t.attachShader(r,n),t.linkProgram(r),t.getProgramParameter(r,t.LINK_STATUS),r):null}function Se(e){const n={},r=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<r;i++){const o=t.getActiveUniform(e,i);o&&(n[o.name]=t.getUniformLocation(e,o.name))}return n}class V{constructor(n,r){ne(this,"program");ne(this,"uniforms");this.program=Re(n,r),this.uniforms=this.program?Se(this.program):{}}bind(){this.program&&t.useProgram(this.program)}}class _e{constructor(n,r){ne(this,"vertexShader");ne(this,"fragmentShaderSource");ne(this,"programs");ne(this,"activeProgram");ne(this,"uniforms");this.vertexShader=n,this.fragmentShaderSource=r,this.programs={},this.activeProgram=null,this.uniforms={}}setKeywords(n){let r=0;for(const o of n)r+=Fe(o);let i=this.programs[r];if(i==null){const o=N(t.FRAGMENT_SHADER,this.fragmentShaderSource,n);i=Re(this.vertexShader,o),this.programs[r]=i}i!==this.activeProgram&&(i&&(this.uniforms=Se(i)),this.activeProgram=i)}bind(){this.activeProgram&&t.useProgram(this.activeProgram)}}const $=N(t.VERTEX_SHADER,`
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
    `),Me=N(t.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      uniform sampler2D uTexture;

      void main () {
          gl_FragColor = texture2D(uTexture, vUv);
      }
    `),Le=N(t.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      uniform sampler2D uTexture;
      uniform float value;

      void main () {
          gl_FragColor = value * texture2D(uTexture, vUv);
      }
    `),m=`
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
    `,T=N(t.FRAGMENT_SHADER,`
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
    `),p=N(t.FRAGMENT_SHADER,`
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
    `,B.supportLinearFiltering?null:["MANUAL_FILTERING"]),S=N(t.FRAGMENT_SHADER,`
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
    `),P=N(t.FRAGMENT_SHADER,`
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
    `),I=N(t.FRAGMENT_SHADER,`
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
    `),Z=N(t.FRAGMENT_SHADER,`
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
    `),ce=N(t.FRAGMENT_SHADER,`
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
    `),X=(()=>{const e=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,e),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),t.STATIC_DRAW);const n=t.createBuffer();return t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),t.STATIC_DRAW),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0),t.enableVertexAttribArray(0),(r,i=!1)=>{t&&(r?(t.viewport(0,0,r.width,r.height),t.bindFramebuffer(t.FRAMEBUFFER,r.fbo)):(t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),t.bindFramebuffer(t.FRAMEBUFFER,null)),i&&(t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT)),t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0))}})();let H,g,Pe,Ne,re;const ze=new V($,Me),ve=new V($,Le),z=new V($,T),F=new V($,p),pe=new V($,S),ge=new V($,P),K=new V($,I),le=new V($,Z),ue=new V($,ce),de=new _e($,m);function me(e,n,r,i,o,h){t.activeTexture(t.TEXTURE0);const y=t.createTexture();t.bindTexture(t.TEXTURE_2D,y),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,h),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,h),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texImage2D(t.TEXTURE_2D,0,r,e,n,0,i,o,null);const k=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,k),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,y,0),t.viewport(0,0,e,n),t.clear(t.COLOR_BUFFER_BIT);const G=1/e,J=1/n;return{texture:y,fbo:k,width:e,height:n,texelSizeX:G,texelSizeY:J,attach(he){return t.activeTexture(t.TEXTURE0+he),t.bindTexture(t.TEXTURE_2D,y),he}}}function Ce(e,n,r,i,o,h){const y=me(e,n,r,i,o,h),k=me(e,n,r,i,o,h);return{width:e,height:n,texelSizeX:y.texelSizeX,texelSizeY:y.texelSizeY,read:y,write:k,swap(){const G=this.read;this.read=this.write,this.write=G}}}function We(e,n,r,i,o,h,y){const k=me(n,r,i,o,h,y);return ze.bind(),ze.uniforms.uTexture&&t.uniform1i(ze.uniforms.uTexture,e.attach(0)),X(k,!1),k}function Xe(e,n,r,i,o,h,y){return e.width===n&&e.height===r||(e.read=We(e.read,n,r,i,o,h,y),e.write=me(n,r,i,o,h,y),e.width=n,e.height=r,e.texelSizeX=1/n,e.texelSizeY=1/r),e}function Oe(){const e=ke(L.SIM_RESOLUTION),n=ke(L.DYE_RESOLUTION),r=B.halfFloatTexType,i=B.formatRGBA,o=B.formatRG,h=B.formatR,y=B.supportLinearFiltering?t.LINEAR:t.NEAREST;t.disable(t.BLEND),H?H=Xe(H,n.width,n.height,i.internalFormat,i.format,r,y):H=Ce(n.width,n.height,i.internalFormat,i.format,r,y),g?g=Xe(g,e.width,e.height,o.internalFormat,o.format,r,y):g=Ce(e.width,e.height,o.internalFormat,o.format,r,y),Pe=me(e.width,e.height,h.internalFormat,h.format,r,t.NEAREST),Ne=me(e.width,e.height,h.internalFormat,h.format,r,t.NEAREST),re=Ce(e.width,e.height,h.internalFormat,h.format,r,t.NEAREST)}function Ke(){const e=[];L.SHADING&&e.push("SHADING"),de.setKeywords(e)}function ke(e){const n=t.drawingBufferWidth,r=t.drawingBufferHeight,i=n/r,o=i<1?1/i:i,h=Math.round(e),y=Math.round(e*o);return n>r?{width:y,height:h}:{width:h,height:y}}function O(e){const n=window.devicePixelRatio||1;return Math.floor(e*n)}Ke(),Oe();let Ge=Date.now(),Ee=0;function Ue(){const e=Qe();Ze()&&Oe(),qe(e),Je(),et(e),tt(null),requestAnimationFrame(Ue)}function Qe(){const e=Date.now();let n=(e-Ge)/1e3;return n=Math.min(n,.016666),Ge=e,n}function Ze(){const e=O(R.clientWidth),n=O(R.clientHeight);return R.width!==e||R.height!==n?(R.width=e,R.height=n,!0):!1}function qe(e){Ee+=e*L.COLOR_UPDATE_SPEED,Ee>=1&&(Ee=ut(Ee,0,1),Y.forEach(n=>{n.color=De()}))}function Je(){for(const e of Y)e.moved&&(e.moved=!1,nt(e))}function et(e){t.disable(t.BLEND),ge.bind(),ge.uniforms.texelSize&&t.uniform2f(ge.uniforms.texelSize,g.texelSizeX,g.texelSizeY),ge.uniforms.uVelocity&&t.uniform1i(ge.uniforms.uVelocity,g.read.attach(0)),X(Ne),K.bind(),K.uniforms.texelSize&&t.uniform2f(K.uniforms.texelSize,g.texelSizeX,g.texelSizeY),K.uniforms.uVelocity&&t.uniform1i(K.uniforms.uVelocity,g.read.attach(0)),K.uniforms.uCurl&&t.uniform1i(K.uniforms.uCurl,Ne.attach(1)),K.uniforms.curl&&t.uniform1f(K.uniforms.curl,L.CURL),K.uniforms.dt&&t.uniform1f(K.uniforms.dt,e),X(g.write),g.swap(),pe.bind(),pe.uniforms.texelSize&&t.uniform2f(pe.uniforms.texelSize,g.texelSizeX,g.texelSizeY),pe.uniforms.uVelocity&&t.uniform1i(pe.uniforms.uVelocity,g.read.attach(0)),X(Pe),ve.bind(),ve.uniforms.uTexture&&t.uniform1i(ve.uniforms.uTexture,re.read.attach(0)),ve.uniforms.value&&t.uniform1f(ve.uniforms.value,L.PRESSURE),X(re.write),re.swap(),le.bind(),le.uniforms.texelSize&&t.uniform2f(le.uniforms.texelSize,g.texelSizeX,g.texelSizeY),le.uniforms.uDivergence&&t.uniform1i(le.uniforms.uDivergence,Pe.attach(0));for(let r=0;r<L.PRESSURE_ITERATIONS;r++)le.uniforms.uPressure&&t.uniform1i(le.uniforms.uPressure,re.read.attach(1)),X(re.write),re.swap();ue.bind(),ue.uniforms.texelSize&&t.uniform2f(ue.uniforms.texelSize,g.texelSizeX,g.texelSizeY),ue.uniforms.uPressure&&t.uniform1i(ue.uniforms.uPressure,re.read.attach(0)),ue.uniforms.uVelocity&&t.uniform1i(ue.uniforms.uVelocity,g.read.attach(1)),X(g.write),g.swap(),F.bind(),F.uniforms.texelSize&&t.uniform2f(F.uniforms.texelSize,g.texelSizeX,g.texelSizeY),!B.supportLinearFiltering&&F.uniforms.dyeTexelSize&&t.uniform2f(F.uniforms.dyeTexelSize,g.texelSizeX,g.texelSizeY);const n=g.read.attach(0);F.uniforms.uVelocity&&t.uniform1i(F.uniforms.uVelocity,n),F.uniforms.uSource&&t.uniform1i(F.uniforms.uSource,n),F.uniforms.dt&&t.uniform1f(F.uniforms.dt,e),F.uniforms.dissipation&&t.uniform1f(F.uniforms.dissipation,L.VELOCITY_DISSIPATION),X(g.write),g.swap(),!B.supportLinearFiltering&&F.uniforms.dyeTexelSize&&t.uniform2f(F.uniforms.dyeTexelSize,H.texelSizeX,H.texelSizeY),F.uniforms.uVelocity&&t.uniform1i(F.uniforms.uVelocity,g.read.attach(0)),F.uniforms.uSource&&t.uniform1i(F.uniforms.uSource,H.read.attach(1)),F.uniforms.dissipation&&t.uniform1f(F.uniforms.dissipation,L.DENSITY_DISSIPATION),X(H.write),H.swap()}function tt(e){t.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA),t.enable(t.BLEND),rt(e)}function rt(e){const n=t.drawingBufferWidth,r=t.drawingBufferHeight;de.bind(),L.SHADING&&de.uniforms.texelSize&&t.uniform2f(de.uniforms.texelSize,1/n,1/r),de.uniforms.uTexture&&t.uniform1i(de.uniforms.uTexture,H.read.attach(0)),X(e,!1)}function nt(e){const n=e.deltaX*L.SPLAT_FORCE,r=e.deltaY*L.SPLAT_FORCE;je(e.texcoordX,e.texcoordY,n,r,e.color)}function it(e){const n=De();n.r*=10,n.g*=10,n.b*=10;const r=10*(Math.random()-.5),i=30*(Math.random()-.5);je(e.texcoordX,e.texcoordY,r,i,n)}function je(e,n,r,i,o){z.bind(),z.uniforms.uTarget&&t.uniform1i(z.uniforms.uTarget,g.read.attach(0)),z.uniforms.aspectRatio&&t.uniform1f(z.uniforms.aspectRatio,R.width/R.height),z.uniforms.point&&t.uniform2f(z.uniforms.point,e,n),z.uniforms.color&&t.uniform3f(z.uniforms.color,r,i,0),z.uniforms.radius&&t.uniform1f(z.uniforms.radius,ot(L.SPLAT_RADIUS/100)),X(g.write),g.swap(),z.uniforms.uTarget&&t.uniform1i(z.uniforms.uTarget,H.read.attach(0)),z.uniforms.color&&t.uniform3f(z.uniforms.color,o.r,o.g,o.b),X(H.write),H.swap()}function ot(e){const n=R.width/R.height;return n>1&&(e*=n),e}function Be(e,n,r,i){e.id=n,e.down=!0,e.moved=!1,e.texcoordX=r/R.width,e.texcoordY=1-i/R.height,e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.deltaX=0,e.deltaY=0,e.color=De()}function Ie(e,n,r,i){e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.texcoordX=n/R.width,e.texcoordY=1-r/R.height,e.deltaX=st(e.texcoordX-e.prevTexcoordX),e.deltaY=ct(e.texcoordY-e.prevTexcoordY),e.moved=Math.abs(e.deltaX)>0||Math.abs(e.deltaY)>0,e.color=i}function at(e){e.down=!1}function st(e){const n=R.width/R.height;return n<1&&(e*=n),e}function ct(e){const n=R.width/R.height;return n>1&&(e/=n),e}function De(){const e=lt(Math.random(),1,1);return e.r*=.15,e.g*=.15,e.b*=.15,e}function lt(e,n,r){let i=0,o=0,h=0;const y=Math.floor(e*6),k=e*6-y,G=r*(1-n),J=r*(1-k*n),he=r*(1-(1-k)*n);switch(y%6){case 0:i=r,o=he,h=G;break;case 1:i=J,o=r,h=G;break;case 2:i=G,o=r,h=he;break;case 3:i=G,o=J,h=r;break;case 4:i=he,o=G,h=r;break;case 5:i=r,o=G,h=J;break}return{r:i,g:o,b:h}}function ut(e,n,r){const i=r-n;return(e-n)%i+n}window.addEventListener("mousedown",e=>{const n=Y[0],r=O(e.clientX),i=O(e.clientY);Be(n,-1,r,i),it(n)});function Ye(e){const n=Y[0],r=O(e.clientX),i=O(e.clientY),o=De();Ue(),Ie(n,r,i,o),document.body.removeEventListener("mousemove",Ye)}document.body.addEventListener("mousemove",Ye),window.addEventListener("mousemove",e=>{const n=Y[0],r=O(e.clientX),i=O(e.clientY),o=n.color;Ie(n,r,i,o)});function Ve(e){const n=e.targetTouches,r=Y[0];for(let i=0;i<n.length;i++){const o=O(n[i].clientX),h=O(n[i].clientY);Ue(),Be(r,n[i].identifier,o,h)}document.body.removeEventListener("touchstart",Ve)}document.body.addEventListener("touchstart",Ve),window.addEventListener("touchstart",e=>{const n=e.targetTouches,r=Y[0];for(let i=0;i<n.length;i++){const o=O(n[i].clientX),h=O(n[i].clientY);Be(r,n[i].identifier,o,h)}},!1),window.addEventListener("touchmove",e=>{const n=e.targetTouches,r=Y[0];for(let i=0;i<n.length;i++){const o=O(n[i].clientX),h=O(n[i].clientY);Ie(r,o,h,r.color)}},!1),window.addEventListener("touchend",e=>{const n=e.changedTouches,r=Y[0];for(let i=0;i<n.length;i++)at(r)})},[U,M,W,te,be,s,d,f,l,ae,_,w,E,se,v,C,q]),M||W?null:c.jsx("div",{ref:ee,className:"fixed top-0 left-0 z-50 pointer-events-none w-full h-full",children:c.jsx("canvas",{ref:oe,id:"fluid",className:"w-screen h-screen block"})})}const St=pt.memo(Rt),ye={xs:320,sm:640,md:768,lg:1024,xl:1280,"2xl":1536,"3xl":1920,"4xl":2560};function Et(a){const[u,s]=x.useState(!1),d=x.useRef(null);return x.useEffect(()=>{if(typeof window>"u")return;const f=window.matchMedia(a);d.current=f,s(f.matches);const l=b=>{s(b.matches)};return f.addEventListener?f.addEventListener("change",l):f.addListener(l),()=>{f.removeEventListener?f.removeEventListener("change",l):f.removeListener(l)}},[a]),u}function we(){const[a,u]=x.useState(()=>{if(typeof window>"u")return{category:"desktop",breakpoint:"lg",width:1024,height:768,orientation:"landscape",pixelRatio:1,isTouch:!1,isRetina:!1,isMobile:!1,isTablet:!1,isDesktop:!0,hasHover:!0,prefersReducedMotion:!1,colorScheme:"dark",canHover:!0,pointerAccuracy:"fine"};const d=window.innerWidth,f=window.innerHeight;return $e(d,f)}),s=x.useCallback(()=>{if(typeof window>"u")return;const d=window.innerWidth,f=window.innerHeight;u($e(d,f))},[]);return x.useEffect(()=>{if(typeof window>"u")return;let d;const f=()=>{clearTimeout(d),d=setTimeout(s,16)};window.addEventListener("resize",f,{passive:!0}),window.addEventListener("orientationchange",f,{passive:!0});const l=window.matchMedia("(prefers-color-scheme: dark)");return l.addEventListener("change",f),()=>{clearTimeout(d),window.removeEventListener("resize",f),window.removeEventListener("orientationchange",f),l.removeEventListener("change",f)}},[s]),a}function fe(a){const{breakpoint:u}=we();return x.useMemo(()=>{if(typeof a!="object"||a===null)return a;const s=a,d=Object.keys(ye),f=d.indexOf(u);for(let l=f;l>=0;l--){const b=d[l];if(s[b]!==void 0)return s[b]}for(const l of d)if(s[l]!==void 0)return s[l]},[a,u])}function Dt(){return Et("(prefers-reduced-motion: reduce)")}function $e(a,u){const s=typeof window<"u"&&window.devicePixelRatio||1,d=a>u?"landscape":"portrait",f=At(a),l=Ft(a),b=typeof window<"u"&&("ontouchstart"in window||navigator.maxTouchPoints>0),_=s>=2,w=typeof window<"u"&&window.matchMedia("(hover: hover)").matches,E=typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,D=typeof window<"u"&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",v=typeof window<"u"&&window.matchMedia("(hover: hover) and (pointer: fine)").matches,C=typeof window<"u"&&window.matchMedia("(pointer: coarse)").matches?"coarse":"fine";return{category:l,breakpoint:f,width:a,height:u,orientation:d,pixelRatio:s,isTouch:b,isRetina:_,isMobile:l==="mobile",isTablet:l==="tablet",isDesktop:l==="desktop"||l==="ultrawide",hasHover:w,prefersReducedMotion:E,colorScheme:D,canHover:v,pointerAccuracy:C}}function At(a){const u=Object.entries(ye).reverse();for(const[s,d]of u)if(a>=d)return s;return"xs"}function Ft(a){return a>=ye["3xl"]?"ultrawide":a>=ye.lg?"desktop":a>=ye.sm?"tablet":"mobile"}const _t=({glitchColors:a=["#2b4539","#61dca3","#61b3dc"],glitchSpeed:u=40,centerVignette:s=!1,outerVignette:d=!0,smooth:f=!0,onComplete:l,duration:b=0,className:_=""})=>{const w=x.useRef(null),E=x.useRef(null),D=x.useRef(null),v=x.useRef([]),C=x.useRef({columns:0,rows:0}),q=x.useRef(null),oe=x.useRef(Date.now()),ee=x.useRef(Date.now()),U=x.useRef(!1),{isMobile:A,isTablet:M,prefersReducedMotion:W}=we(),te=Dt(),be=A?12:M?14:16,ae=A?8:M?9:10,se=A?16:M?18:20,R=W||te?u*3:A?u*1.2:u,Y=A?.05:M?.06:.07,L=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","!","@","#","$","&","*","(",")","-","_","+","=","/","[","]","{","}",";",":","<",">",",","0","1","2","3","4","5","6","7","8","9"],t=()=>L[Math.floor(Math.random()*L.length)],B=()=>a[Math.floor(Math.random()*a.length)],Te=m=>{const T=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;m=m.replace(T,(S,P,I)=>S+S+P+P+I+I);const p=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(m);return p?{r:parseInt(p[1],16),g:parseInt(p[2],16),b:parseInt(p[3],16)}:null},Q=(m,T,p)=>{const S={r:Math.round(m.r+(T.r-m.r)*p),g:Math.round(m.g+(T.g-m.g)*p),b:Math.round(m.b+(T.b-m.b)*p)};return`rgb(${S.r}, ${S.g}, ${S.b})`},Ae=(m,T)=>{const p=Math.ceil(m/ae),S=Math.ceil(T/se);return{columns:p,rows:S}},Fe=(m,T)=>{C.current={columns:m,rows:T};const p=m*T;v.current=Array.from({length:p},()=>({char:t(),color:B(),targetColor:B(),colorProgress:1}))},xe=()=>{const m=w.current,T=E.current;if(!m||!T||U.current)return;T.parentElement&&(T.style.width="100%",T.style.height="100%");const S=T.getBoundingClientRect(),P=S.width,I=S.height;if(P===0||I===0){setTimeout(()=>{U.current||xe()},50);return}const Z=A?Math.min(window.devicePixelRatio||1,2):window.devicePixelRatio||1;m.width=P*Z,m.height=I*Z,m.style.width=`${P}px`,m.style.height=`${I}px`,q.current&&q.current.setTransform(Z,0,0,Z,0,0);const{columns:ce,rows:X}=Ae(P,I);Fe(ce,X),N()},N=()=>{if(!q.current||v.current.length===0||U.current)return;const m=q.current;if(!w.current)return;const p=E.current;if(!p)return;const S=p.getBoundingClientRect();m.fillStyle="#000000",m.fillRect(0,0,S.width,S.height),m.font=`${be}px monospace`,m.textBaseline="top",v.current.forEach((P,I)=>{const Z=I%C.current.columns*ae,ce=Math.floor(I/C.current.columns)*se;Z>=-ae&&Z<=S.width+ae&&ce>=-se&&ce<=S.height+se&&(m.fillStyle=P.color,m.fillText(P.char,Z,ce))})},Re=()=>{if(!v.current||v.current.length===0||U.current)return;const m=Math.max(1,Math.floor(v.current.length*Y));for(let T=0;T<m;T++){const p=Math.floor(Math.random()*v.current.length);v.current[p]&&(Math.random()>.4&&(v.current[p].char=t()),Math.random()>.5&&(v.current[p].targetColor=B()),!f||W||te?(v.current[p].color=v.current[p].targetColor,v.current[p].colorProgress=1):v.current[p].colorProgress=0)}},Se=()=>{if(W||te)return;let m=!1;const T=A?.15:.12;v.current.forEach(p=>{if(p.colorProgress<1){p.colorProgress+=T,p.colorProgress>1&&(p.colorProgress=1);const S=Te(p.color),P=Te(p.targetColor);S&&P&&(p.color=Q(S,P,p.colorProgress),m=!0)}}),m&&N()},V=()=>{if(U.current)return;const m=Date.now();if(b>0&&m-ee.current>=b){D.current&&cancelAnimationFrame(D.current),l?.();return}m-oe.current>=R&&(Re(),N(),oe.current=m),f&&!W&&!te&&Se(),D.current=requestAnimationFrame(V)};x.useEffect(()=>{const m=w.current;if(!m)return;U.current=!1,q.current=m.getContext("2d",{alpha:!1,willReadFrequently:!1,desynchronized:!A}),ee.current=Date.now(),setTimeout(()=>{U.current||(xe(),V())},10);let T;const p=()=>{clearTimeout(T),T=setTimeout(()=>{U.current||(D.current&&cancelAnimationFrame(D.current),xe(),V())},100)};let S=null;return"ResizeObserver"in window&&E.current&&(S=new ResizeObserver(P=>{for(const I of P)if(I.target===E.current){p();break}}),S.observe(E.current)),window.addEventListener("resize",p),()=>{U.current=!0,D.current&&cancelAnimationFrame(D.current),window.removeEventListener("resize",p),S&&S.disconnect(),clearTimeout(T)}},[R,f,b,l,A,W,te]);const _e={position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"#000000",overflow:"hidden",willChange:"transform",transform:"translateZ(0)",backfaceVisibility:"hidden"},$={position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"block",backgroundColor:"#000000",willChange:"transform",transform:"translateZ(0)",imageRendering:"auto"},Me={position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",background:"radial-gradient(circle, rgba(0,0,0,0) 60%, rgba(0,0,0,1) 100%)",opacity:A?.7:1},Le={position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",background:"radial-gradient(circle, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%)",opacity:A?.6:.8};return c.jsxs("div",{ref:E,style:_e,className:_,children:[c.jsx("canvas",{ref:w,style:$}),d&&c.jsx("div",{style:Me}),s&&c.jsx("div",{style:Le})]})},ie={particleCounts:{xs:15,sm:20,md:25,lg:30,xl:35,"2xl":40,"3xl":45,"4xl":50},animationSpeeds:{xs:120,sm:100,md:90,lg:80,xl:70,"2xl":60,"3xl":50,"4xl":40},buttonSizes:{normal:{xs:{width:"280px",height:"50px"},sm:{width:"320px",height:"55px"},md:{width:"360px",height:"60px"},lg:{width:"400px",height:"60px"},xl:{width:"420px",height:"65px"},"2xl":{width:"450px",height:"70px"},"3xl":{width:"480px",height:"75px"},"4xl":{width:"520px",height:"80px"}},expanded:{xs:{width:"300px",height:"120px"},sm:{width:"380px",height:"140px"},md:{width:"450px",height:"160px"},lg:{width:"550px",height:"220px"},xl:{width:"600px",height:"240px"},"2xl":{width:"650px",height:"260px"},"3xl":{width:"700px",height:"280px"},"4xl":{width:"750px",height:"300px"}}},textSizes:{title:{xs:"text-5xl",sm:"text-4xl",md:"text-5xl",lg:"text-6xl",xl:"text-7xl","2xl":"text-8xl","3xl":"text-9xl","4xl":"text-[8rem]"},subtitle:{xs:"text-sm",sm:"text-base",md:"text-lg",lg:"text-xl",xl:"text-2xl","2xl":"text-3xl","3xl":"text-4xl","4xl":"text-5xl"},button:{xs:"text-xl",sm:"text-base",md:"text-lg",lg:"text-xl",xl:"text-xl","2xl":"text-2xl","3xl":"text-3xl","4xl":"text-4xl"}},spacing:{xs:{container:16,elements:24},sm:{container:20,elements:32},md:{container:24,elements:40},lg:{container:32,elements:48},xl:{container:40,elements:56},"2xl":{container:48,elements:64},"3xl":{container:56,elements:72},"4xl":{container:64,elements:80}}},Mt=({text:a,delay:u=0,className:s=""})=>{const[d,f]=x.useState(0),l=we()?.prefersReducedMotion,b=fe(ie.animationSpeeds),_=fe(ie.textSizes.title);return x.useEffect(()=>{const w=l?b*2:b,E=setInterval(()=>{f(D=>D<a.length?D+1:(clearInterval(E),D))},w);return()=>clearInterval(E)},[a,b,l]),c.jsx(j.h1,{className:`${_} font-bold tracking-tight ${s}`,initial:{opacity:0},animate:{opacity:1},transition:{duration:l?.3:.5,delay:l?0:u},children:a.split("").map((w,E)=>c.jsx(j.span,{className:"bg-gradient-to-r from-emerald-200 via-teal-200 to-cyan-200 bg-clip-text text-transparent inline-block",initial:{opacity:0,y:l?0:50,scale:l?1:.3,filter:"blur(5px)",rotateX:l?0:-90},animate:E<d?{opacity:1,y:0,scale:1,filter:"blur(0px)",rotateX:0}:{},transition:{duration:l?.3:.8,ease:l?"easeOut":[.23,1,.32,1],type:"tween",filter:{type:"tween"}},style:{textShadow:E<d?"0 0 20px rgba(16,185,129,0.5)":"none"},children:w===" "?" ":w},E))})},Lt=({onComplete:a})=>{const[u,s]=x.useState(""),d="ACCESS GRANTED",f=fe(ie.textSizes.button);return x.useEffect(()=>{let l=0;const b=60;let _=!1;const w=setInterval(()=>{l<=d.length?(s(d.slice(0,l)),l++):(clearInterval(w),!_&&a&&(_=!0,setTimeout(()=>{a()},800)))},b);return()=>{clearInterval(w)}},[a,d]),c.jsx("div",{className:"flex items-center justify-center w-full h-full bg-black/70 backdrop-blur-sm rounded-3xl border border-blue-500/30",children:c.jsx("div",{className:`font-mono ${f} font-bold text-center`,children:c.jsxs("span",{className:"text-blue-400 access-granted-glow",children:[u,c.jsx("span",{className:"inline-block w-0.5 h-6 bg-blue-400 ml-1 animate-pulse"})]})})})},Pt=({text:a,delay:u=0,speed:s=50,className:d=""})=>{const[f,l]=x.useState(""),[b,_]=x.useState(!0),{prefersReducedMotion:w}=we();return x.useEffect(()=>{const E=w?s/2:s,D=setTimeout(()=>{let v=0;const C=setInterval(()=>{v<=a.length?(l(a.slice(0,v)),v++):(clearInterval(C),_(!1))},E);return()=>clearInterval(C)},u);return()=>clearTimeout(D)},[a,u,s,w]),c.jsxs("span",{className:d,children:[f,b&&c.jsx("span",{className:"animate-pulse",children:"|"})]})},Nt=()=>{const a=x.useRef(null);return x.useEffect(()=>{const u=a.current;if(!u)return;const s=u.getContext("2d");if(!s)return;const d=()=>{u.width=window.innerWidth,u.height=window.innerHeight};d(),window.addEventListener("resize",d);const l="ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}".split(""),b=14,_=u.width/b,w=[];for(let v=0;v<_;v++)w[v]=1;const D=setInterval(()=>{s.fillStyle="rgba(0, 0, 0, 0.04)",s.fillRect(0,0,u.width,u.height),s.fillStyle="#0F4",s.font=b+"px monospace";for(let v=0;v<w.length;v++){const C=l[Math.floor(Math.random()*l.length)];s.fillStyle=`rgba(0, 255, 70, ${Math.random()*.5+.5})`,s.fillText(C,v*b,w[v]*b),w[v]*b>u.height&&Math.random()>.975&&(w[v]=0),w[v]++}},35);return()=>{clearInterval(D),window.removeEventListener("resize",d)}},[]),c.jsx("canvas",{ref:a,className:"absolute inset-0 opacity-20 pointer-events-none"})},zt=({isActive:a=!0})=>{const u=fe(ie.particleCounts);return c.jsx("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:Array.from({length:u}).map((s,d)=>c.jsx(j.div,{className:"absolute w-1 h-1 bg-emerald-400/30 rounded-full",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`},animate:a?{x:[0,Math.random()*200-100],y:[0,Math.random()*200-100],opacity:[0,1,0],scale:[0,1,0]}:{},transition:{duration:Math.random()*4+2,repeat:Number.POSITIVE_INFINITY,ease:"easeInOut",delay:Math.random()*2}},d))})},Ct=()=>{const[a,u]=x.useState(!1),[s,d]=x.useState("normal"),[f,l]=x.useState(!1),b=gt(),_=x.useRef([]),{isTablet:w}=we(),E=fe(ie.textSizes.subtitle),D=fe(ie.textSizes.button),v=fe(ie.spacing);x.useEffect(()=>{document.body.style.backgroundColor="#0f172a",document.body.style.overflow="hidden",document.body.style.height="100vh",document.documentElement.style.setProperty("--container-padding",`${v.container}px`);const A=setTimeout(()=>{u(!0)},500);return _.current.push(A),()=>{_.current.forEach(W=>clearTimeout(W)),_.current=[],document.body.style.overflow="unset",document.body.style.height="auto",document.documentElement.style.removeProperty("--container-padding")}},[v.container]);const C=x.useCallback(()=>{if(f)return;l(!0),d("expanded");const A=setTimeout(()=>d("glitch"),800);_.current.push(A)},[f]),q=x.useCallback(()=>{d("access")},[]),oe=x.useCallback(()=>{sessionStorage.setItem("hasVisitedSite","true"),b("/home")},[b]),ee=()=>{const A=w?"md":"lg",M=ie.buttonSizes;switch(s){case"expanded":case"glitch":case"access":return M.expanded[A]||M.expanded.lg;default:return M.normal[A]||M.normal.lg}},U=()=>{switch(s){case"expanded":case"glitch":case"access":return 1;default:return 1}};return c.jsxs("div",{className:"relative min-h-screen bg-slate-900",children:[c.jsx(St,{}),c.jsx("div",{className:"fixed inset-0 bg-slate-900 z-0"}),c.jsx(He,{mode:"wait",children:c.jsxs(j.div,{className:"min-h-screen relative overflow-hidden z-10",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,scale:.9,filter:"blur(5px)"},transition:{duration:1,ease:[.23,1,.32,1]},children:[c.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900"}),c.jsx(Nt,{}),!w&&c.jsx(zt,{isActive:!0}),c.jsx("div",{className:"relative z-20 flex flex-col items-center justify-center min-h-screen dynamic-container-padding",children:a&&c.jsxs(c.Fragment,{children:[c.jsx(j.div,{className:"text-center mb-8",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:c.jsx(Mt,{text:"WISHANT BHAJAN",delay:0})}),c.jsx(j.div,{className:"text-center mb-12",initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{duration:.8,delay:.6},children:c.jsx("div",{className:`${E} font-normal tracking-wide`,children:c.jsx(Pt,{text:"Full Stack Developer",delay:1200,speed:100,className:"text-emerald-200/90 font-sans typing-text-container"})})}),c.jsx(j.div,{className:"text-center",initial:{opacity:0,y:60},animate:{opacity:1,y:0},transition:{duration:.8,delay:1},children:c.jsxs(j.button,{onClick:C,className:`relative overflow-hidden group bg-gradient-to-r from-emerald-500/30 via-teal-500/25 to-cyan-500/30 backdrop-blur-xl border-2 border-emerald-400/50 rounded-3xl font-bold transition-all duration-500 shadow-2xl ${D} px-8 py-4`,animate:{...ee(),scale:U()},transition:{duration:.8,ease:[.23,1,.32,1]},whileHover:f?{}:{scale:1.1,y:-10,boxShadow:"0 25px 50px rgba(16,185,129,0.4)",borderColor:"rgba(16,185,129,0.8)"},whileTap:f?{}:{scale:.95},disabled:f,children:[c.jsxs(He,{children:[s==="normal"&&c.jsx(j.div,{className:"relative z-10 flex items-center justify-center w-full h-full",exit:{opacity:0},children:c.jsx("span",{className:"bg-gradient-to-r from-emerald-200 via-teal-200 to-cyan-200 bg-clip-text text-transparent font-bold tracking-wide",children:"Hack Website"})},"normal"),s==="expanded"&&c.jsx(j.div,{className:"relative z-10 flex items-center justify-center w-full h-full",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0},children:c.jsx("span",{className:"bg-gradient-to-r from-emerald-200 via-teal-200 to-cyan-200 bg-clip-text text-transparent font-bold tracking-wide",children:"Initiating Hack..."})},"expanded"),s==="glitch"&&c.jsx(j.div,{className:"absolute inset-0",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:c.jsx(_t,{onComplete:q,duration:3e3,glitchColors:["#10b981","#06d6a0","#118ab2","#3b82f6","#8b5cf6","#f59e0b"],glitchSpeed:50,smooth:!1,className:"rounded-3xl"})},"glitch"),s==="access"&&c.jsx(j.div,{className:"absolute inset-0",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:c.jsx(Lt,{onComplete:oe})},"access")]}),s==="normal"&&c.jsxs(c.Fragment,{children:[c.jsx(j.div,{className:"absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-3xl",animate:{scale:[1,1.15,1],opacity:[.4,.7,.4],rotate:[0,1,-1,0]},transition:{duration:2.5,repeat:Number.POSITIVE_INFINITY,ease:"easeInOut"}}),c.jsx("div",{className:"absolute inset-0 overflow-hidden rounded-3xl opacity-20",children:Array.from({length:15}).map((A,M)=>c.jsx(j.div,{className:"absolute text-emerald-300 font-mono text-xs",style:{left:`${Math.random()*100}%`,top:"-10px"},animate:{y:[0,80],opacity:[0,1,0]},transition:{duration:Math.random()*2+1,repeat:Number.POSITIVE_INFINITY,delay:Math.random()*3,ease:"linear"},children:Math.random()>.5?"1":"0"},M))})]})]})})]})})]},"homepage")})]})},kt=Object.freeze(Object.defineProperty({__proto__:null,default:Ct},Symbol.toStringTag,{value:"Module"}));export{kt as F,yt as L,gt as a,Ot as b,bt as i,wt as p,Xt as u};
