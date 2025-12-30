import{r as n,j as e,g as ae,C as J,T as re,S as be,D as ge,h as ye,A as ve,R as we}from"./vendor-react-CmfUEsbk.js";import{a as ne,b as je,A as Ne,C as ke,F as Ee}from"./page-about-BV4vKgXW.js";import{b as se,g,c as Me,m as w,u as _e,a as Le}from"./vendor-animation-DepeZ2CL.js";import{w as ie}from"./vendor-other-NG8tfkVl.js";import{G as Ce}from"./page-event-2BfvMbf7.js";import"./vendor-three-BkPH-HYM.js";g.registerPlugin(se,Me);const $e=({radius:t=100,duration:o=1.2,speed:r=.5,scrambleChars:l=".:",className:a="",style:u={},children:m})=>{const N=n.useRef(null);return n.useEffect(()=>{if(!N.current)return;(async()=>{document.fonts&&await document.fonts.ready;const j=se.create(N.current.querySelector("p"),{type:"chars",charsClass:"inline-block will-change-transform"});j.chars.forEach(k=>{const $=k;g.set($,{attr:{"data-content":$.innerHTML}})});const x=k=>{j.chars.forEach($=>{const E=$,{left:R,top:h,width:s,height:A}=E.getBoundingClientRect(),T=k.clientX-(R+s/2),c=k.clientY-(h+A/2),y=Math.hypot(T,c);y<t&&g.to(E,{overwrite:!0,duration:o*(1-y/t),scrambleText:{text:E.dataset.content||"",chars:l,speed:r},ease:"none"})})},S=N.current;return S.addEventListener("pointermove",x),()=>{S.removeEventListener("pointermove",x),j.revert()}})()},[t,o,r,l]),e.jsx("div",{ref:N,className:a,style:u,children:e.jsx("p",{children:m})})},Ae=()=>typeof window>"u"?!1:window.innerWidth<768||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),Ie=(t,o)=>{const r=new Set([...Object.keys(t),...o.flatMap(a=>Object.keys(a))]),l={};return r.forEach(a=>{l[a]=[t[a],...o.map(u=>u[a])]}),l},oe=({text:t="",delay:o=200,className:r="",animateBy:l="words",direction:a="top",threshold:u=.1,rootMargin:m="0px",animationFrom:N,animationTo:i,easing:j=k=>k,onAnimationComplete:x,stepDuration:S=.35})=>{const[k,$]=n.useState(!1),E=l==="words"?t.split(" "):t.split(""),[R,h]=n.useState(!1),s=n.useRef(null);n.useEffect(()=>{$(Ae())},[]),n.useEffect(()=>{if(!s.current)return;const M=new IntersectionObserver(([p])=>{p.isIntersecting&&(h(!0),M.unobserve(s.current))},{threshold:u,rootMargin:m});return M.observe(s.current),()=>M.disconnect()},[u,m]);const A=n.useMemo(()=>a==="top"?{opacity:0,y:-50}:{opacity:0,y:50},[a]),T=n.useMemo(()=>[{opacity:.5,y:a==="top"?5:-5},{opacity:1,y:0}],[a]),c=N??A,y=i??T,f=y.length+1,P=S*(f-1),X=Array.from({length:f},(M,p)=>f===1?0:p/(f-1));return k?e.jsx("p",{ref:s,className:`blur-text ${r}`,children:e.jsx(w.span,{initial:{opacity:0},animate:{opacity:R?1:0},transition:{duration:.5},children:t})}):e.jsx("p",{ref:s,className:`blur-text ${r} flex flex-wrap`,children:E.map((M,p)=>{const b=Ie(c,y),_={duration:P,times:X,delay:p*o/1e3,ease:j};return e.jsxs(w.span,{initial:c,animate:R?b:c,transition:_,onAnimationComplete:p===E.length-1?x:void 0,style:{display:"inline-block",willChange:"transform, opacity"},children:[M===" "?" ":M,l==="words"&&p<E.length-1&&" "]},p)})})},Re=()=>e.jsx(Te,{children:e.jsxs("div",{className:"tooltip-container",children:[e.jsx("div",{className:"tooltip",children:e.jsxs("div",{className:"profile",children:[e.jsxs("div",{className:"user",children:[e.jsx("div",{className:"img",children:"WB"}),e.jsxs("div",{className:"details",children:[e.jsx("div",{className:"name",children:"Wishant Bhajan"}),e.jsx("div",{className:"username",children:"Co-founder TableTech"})]})]}),e.jsx("div",{className:"about",children:"220+ Connections • Open to Work"})]})}),e.jsx("div",{className:"text",children:e.jsxs("a",{href:"https://www.linkedin.com/in/wishant-bhajan-0a73832a4/",target:"_blank",rel:"noopener noreferrer",className:"icon",children:[e.jsxs("div",{className:"layer",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{className:"fab fa-linkedin",children:e.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})})]}),e.jsx("div",{className:"text",children:"LinkedIn"})]})})]})}),Te=ie.div`
  .tooltip-container {
    position: relative;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 17px;
    border-radius: 10px;
  }

  .tooltip {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s;
    border-radius: 15px;
    z-index: 1000;
    box-shadow:
      inset 5px 5px 5px rgba(0, 0, 0, 0.2),
      inset -5px -5px 15px rgba(255, 255, 255, 0.1),
      5px 5px 15px rgba(0, 0, 0, 0.3),
      -5px -5px 15px rgba(255, 255, 255, 0.1);
  }

  .profile {
    background: #1a1f2e;
    border-radius: 10px 15px;
    padding: 10px;
    border: 1px solid #0077b5;
    width: 200px;
  }

  .tooltip-container:hover .tooltip {
    top: -160px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  .icon {
    text-decoration: none;
    color: #fff;
    display: block;
    position: relative;
  }

  .layer {
    width: 45px;
    height: 45px;
    transition: transform 0.3s;
  }

  .icon:hover .layer {
    transform: rotate(-35deg) skew(20deg);
  }

  .layer span {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 5px;
    transition: all 0.3s;
    background: rgba(31, 41, 55, 0.8);
  }

  .layer span.fab {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #0077b5;
  }

  .icon:hover .layer span {
    box-shadow: -1px 1px 3px rgba(0, 119, 181, 0.5);
  }

  .icon .text {
    position: absolute;
    left: 50%;
    bottom: -5px;
    opacity: 0;
    font-weight: 500;
    transform: translateX(-50%);
    transition:
      bottom 0.3s ease,
      opacity 0.3s ease;
    font-size: 12px;
    color: #0077b5;
  }

  .icon:hover .text {
    bottom: -35px;
    opacity: 1;
  }

  .icon:hover .layer span:nth-child(1) {
    opacity: 0.2;
  }
  .icon:hover .layer span:nth-child(2) {
    opacity: 0.4;
    transform: translate(5px, -5px);
  }
  .icon:hover .layer span:nth-child(3) {
    opacity: 0.6;
    transform: translate(10px, -10px);
  }
  .icon:hover .layer span:nth-child(4) {
    opacity: 0.8;
    transform: translate(15px, -15px);
  }
  .icon:hover .layer span:nth-child(5) {
    opacity: 1;
    transform: translate(20px, -20px);
  }

  .user {
    display: flex;
    gap: 10px;
  }

  .img {
    width: 45px;
    height: 45px;
    font-size: 18px;
    font-weight: 700;
    border: 1px solid #0077b5;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #0077b5, #0a66c2);
    color: #fff;
  }

  .name {
    font-size: 15px;
    font-weight: 700;
    color: #0077b5;
  }

  .username {
    font-size: 13px;
    color: #9ca3af;
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: 0;
    color: #fff;
    justify-content: center;
  }

  .about {
    color: #9ca3af;
    padding-top: 5px;
    font-size: 12px;
  }`,Be=()=>e.jsx(Pe,{children:e.jsxs("div",{className:"tooltip-container",children:[e.jsx("div",{className:"tooltip",children:e.jsxs("div",{className:"profile",children:[e.jsxs("div",{className:"user",children:[e.jsx("div",{className:"img",children:"WB"}),e.jsxs("div",{className:"details",children:[e.jsx("div",{className:"name",children:"Wishant Bhajan"}),e.jsx("div",{className:"username",children:"@Wishant010"})]})]}),e.jsx("div",{className:"about",children:"20+ Repositories • Active Developer"})]})}),e.jsx("div",{className:"text",children:e.jsxs("a",{href:"https://github.com/Wishant010",target:"_blank",rel:"noopener noreferrer",className:"icon",children:[e.jsxs("div",{className:"layer",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{className:"fab fa-github",children:e.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})})]}),e.jsx("div",{className:"text",children:"GitHub"})]})})]})}),Pe=ie.div`
  .tooltip-container {
    position: relative;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 17px;
    border-radius: 10px;
  }

  .tooltip {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s;
    border-radius: 15px;
    z-index: 1000;
    box-shadow:
      inset 5px 5px 5px rgba(0, 0, 0, 0.2),
      inset -5px -5px 15px rgba(255, 255, 255, 0.1),
      5px 5px 15px rgba(0, 0, 0, 0.3),
      -5px -5px 15px rgba(255, 255, 255, 0.1);
  }

  .profile {
    background: #1a1f2e;
    border-radius: 10px 15px;
    padding: 10px;
    border: 1px solid #333;
    width: 200px;
  }

  .tooltip-container:hover .tooltip {
    top: -160px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  .icon {
    text-decoration: none;
    color: #fff;
    display: block;
    position: relative;
  }

  .layer {
    width: 45px;
    height: 45px;
    transition: transform 0.3s;
  }

  .icon:hover .layer {
    transform: rotate(-35deg) skew(20deg);
  }

  .layer span {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 5px;
    transition: all 0.3s;
    background: rgba(31, 41, 55, 0.8);
  }

  .layer span.fab {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #10b981;
  }

  .icon:hover .layer span {
    box-shadow: -1px 1px 3px rgba(16, 185, 129, 0.5);
  }

  .icon .text {
    position: absolute;
    left: 50%;
    bottom: -5px;
    opacity: 0;
    font-weight: 500;
    transform: translateX(-50%);
    transition:
      bottom 0.3s ease,
      opacity 0.3s ease;
    font-size: 12px;
    color: #10b981;
  }

  .icon:hover .text {
    bottom: -35px;
    opacity: 1;
  }

  .icon:hover .layer span:nth-child(1) {
    opacity: 0.2;
  }
  .icon:hover .layer span:nth-child(2) {
    opacity: 0.4;
    transform: translate(5px, -5px);
  }
  .icon:hover .layer span:nth-child(3) {
    opacity: 0.6;
    transform: translate(10px, -10px);
  }
  .icon:hover .layer span:nth-child(4) {
    opacity: 0.8;
    transform: translate(15px, -15px);
  }
  .icon:hover .layer span:nth-child(5) {
    opacity: 1;
    transform: translate(20px, -20px);
  }

  .user {
    display: flex;
    gap: 10px;
  }

  .img {
    width: 45px;
    height: 45px;
    font-size: 18px;
    font-weight: 700;
    border: 1px solid #10b981;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #10b981, #059669);
    color: #fff;
  }

  .name {
    font-size: 15px;
    font-weight: 700;
    color: #10b981;
  }

  .username {
    font-size: 13px;
    color: #9ca3af;
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: 0;
    color: #fff;
    justify-content: center;
  }

  .about {
    color: #9ca3af;
    padding-top: 5px;
    font-size: 12px;
  }`,De=()=>{const[t,o]=n.useState(!1);return n.useEffect(()=>{const r=()=>{const l=window.innerWidth<768||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);o(l)};return r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),t},Se=({gridSize:t=10,cubeSize:o,maxAngle:r=45,radius:l=3,easing:a="power3.out",duration:u={enter:.3,leave:.6},cellGap:m,borderStyle:N="1px solid #fff",faceColor:i="#060010",shadow:j=!1,autoAnimate:x=!0,rippleOnClick:S=!0,rippleColor:k="#fff",rippleSpeed:$=2,visibleCells:E})=>{const R=De(),h=n.useRef(null),s=n.useRef(null),A=n.useRef(null),T=n.useRef(!1),c=n.useRef({x:0,y:0}),y=n.useRef({x:0,y:0}),f=n.useRef(null),P=typeof m=="number"?`${m}px`:m?.col!==void 0?`${m.col}px`:"5%",X=typeof m=="number"?`${m}px`:m?.row!==void 0?`${m.row}px`:"5%",M=u.enter,p=u.leave,b=n.useCallback((d,v)=>{h.current&&h.current.querySelectorAll(".cube").forEach(C=>{const B=+C.dataset.row,F=+C.dataset.col,z=Math.hypot(B-d,F-v);if(z<=l){const U=(1-z/l)*r;g.to(C,{duration:M,ease:a,overwrite:!0,rotateX:-U,rotateY:U})}else g.to(C,{duration:p,ease:"power3.out",overwrite:!0,rotateX:0,rotateY:0})})},[l,r,M,p,a]),_=n.useCallback(d=>{T.current=!0,A.current&&clearTimeout(A.current);const v=h.current.getBoundingClientRect(),C=v.width/t,B=v.height/t,F=(d.clientX-v.left)/C,z=(d.clientY-v.top)/B;s.current&&cancelAnimationFrame(s.current),s.current=requestAnimationFrame(()=>b(z,F)),A.current=setTimeout(()=>{T.current=!1},3e3)},[t,b]),L=n.useCallback(()=>{h.current&&h.current.querySelectorAll(".cube").forEach(d=>g.to(d,{duration:p,rotateX:0,rotateY:0,ease:"power3.out"}))},[p]),I=n.useCallback(d=>{d.preventDefault(),T.current=!0,A.current&&clearTimeout(A.current);const v=h.current.getBoundingClientRect(),C=v.width/t,B=v.height/t,F=d.touches[0],z=(F.clientX-v.left)/C,G=(F.clientY-v.top)/B;s.current&&cancelAnimationFrame(s.current),s.current=requestAnimationFrame(()=>b(G,z)),A.current=setTimeout(()=>{T.current=!1},3e3)},[t,b]),D=n.useCallback(()=>{T.current=!0},[]),Y=n.useCallback(()=>{h.current&&L()},[L]),W=n.useCallback(d=>{if(!S||!h.current)return;const v=h.current.getBoundingClientRect(),C=v.width/t,B=v.height/t,F=d.clientX||d.touches&&d.touches[0].clientX,z=d.clientY||d.touches&&d.touches[0].clientY,G=Math.floor((F-v.left)/C),U=Math.floor((z-v.top)/B),ue=.15,xe=.3,me=.6,he=ue/$,Z=xe/$,fe=me/$,q={};h.current.querySelectorAll(".cube").forEach(O=>{const H=+O.dataset.row,K=+O.dataset.col,V=Math.hypot(H-U,K-G),ee=Math.round(V);q[ee]||(q[ee]=[]),q[ee].push(O)}),Object.keys(q).map(Number).sort((O,H)=>O-H).forEach(O=>{const H=O*he,K=q[O].flatMap(V=>Array.from(V.querySelectorAll(".cube-face")));g.to(K,{backgroundColor:k,duration:Z,delay:H,ease:"power3.out"}),g.to(K,{backgroundColor:i,duration:Z,delay:H+Z+fe,ease:"power3.out"})})},[S,t,i,k,$]);n.useEffect(()=>{if(!x||!h.current||R)return;c.current={x:Math.random()*t,y:Math.random()*t},y.current={x:Math.random()*t,y:Math.random()*t};const d=.02,v=()=>{if(!T.current){const C=c.current,B=y.current;C.x+=(B.x-C.x)*d,C.y+=(B.y-C.y)*d,b(C.y,C.x),Math.hypot(C.x-B.x,C.y-B.y)<.1&&(y.current={x:Math.random()*t,y:Math.random()*t})}f.current=requestAnimationFrame(v)};return f.current=requestAnimationFrame(v),()=>{f.current!=null&&cancelAnimationFrame(f.current)}},[x,t,b,R]),n.useEffect(()=>{const d=h.current;if(d&&!R)return d.addEventListener("pointermove",_),d.addEventListener("pointerleave",L),d.addEventListener("click",W),d.addEventListener("touchmove",I,{passive:!1}),d.addEventListener("touchstart",D,{passive:!0}),d.addEventListener("touchend",Y,{passive:!0}),()=>{d.removeEventListener("pointermove",_),d.removeEventListener("pointerleave",L),d.removeEventListener("click",W),d.removeEventListener("touchmove",I),d.removeEventListener("touchstart",D),d.removeEventListener("touchend",Y),s.current!=null&&cancelAnimationFrame(s.current),A.current&&clearTimeout(A.current)}},[_,L,W,I,D,Y,R]);const te=Array.from({length:t}),de={style:{"--cube-face-border":N,"--cube-face-bg":i,"--cube-face-shadow":j===!0?"0 0 6px rgba(0,0,0,.5)":j||"none","--grid-size":t,"--cube-size":o?`${o}px`:"1fr","--column-gap":P,"--row-gap":X,"--total-width":o?`${t*o}px`:"auto","--total-height":o?`${t*o}px`:"auto"},"data-has-cube-size":o?"true":"false"},pe=(d,v)=>!E||E.length===0?!0:E.some(C=>C.row===d&&C.col===v);return e.jsx("div",{className:"cubes-wrapper",...de,children:e.jsx("div",{ref:h,className:"cubes-scene",children:te.map((d,v)=>te.map((C,B)=>pe(v,B)?e.jsxs("div",{className:"cube","data-row":v,"data-col":B,children:[e.jsx("span",{className:"cube-pointer-area"}),e.jsx("div",{className:"cube-face cube-face-top"}),e.jsx("div",{className:"cube-face cube-face-bottom"}),e.jsx("div",{className:"cube-face cube-face-left"}),e.jsx("div",{className:"cube-face cube-face-right"}),e.jsx("div",{className:"cube-face cube-face-front"}),e.jsx("div",{className:"cube-face cube-face-back"})]},`${v}-${B}`):e.jsx("div",{className:"invisible"},`${v}-${B}`)))})})},Ye=()=>{const[t,o]=n.useState(!1);return n.useEffect(()=>{const r=()=>{o(window.innerWidth<768||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))};return r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),t},Xe=({isVisible:t=!0})=>{const{t:o}=ne(),r=Ye();return e.jsxs("div",{className:"min-h-screen max-sm:min-h-fit relative overflow-hidden page-content scroll-snap-section",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/80 to-purple-950/60"}),!r&&e.jsxs(e.Fragment,{children:[e.jsx(w.div,{className:"orb orb-emerald absolute top-1/4 -left-20 w-96 h-96",animate:t?{x:[0,100,0],y:[0,50,0],scale:[1,1.2,1]}:{},transition:{duration:20,repeat:Number.POSITIVE_INFINITY,ease:"easeInOut"}}),e.jsx(w.div,{className:"orb orb-teal absolute top-1/2 right-1/4 w-[500px] h-[500px]",animate:t?{x:[0,-80,0],y:[0,-40,0],scale:[1,1.3,1]}:{},transition:{duration:25,repeat:Number.POSITIVE_INFINITY,ease:"easeInOut"}}),e.jsx(w.div,{className:"orb orb-purple absolute bottom-1/4 -right-20 w-96 h-96",animate:t?{x:[0,-50,0],y:[0,-30,0],scale:[1.1,1.3,1.1]}:{},transition:{duration:30,repeat:Number.POSITIVE_INFINITY,ease:"easeInOut"}}),e.jsx(w.div,{className:"orb orb-cyan absolute bottom-1/3 left-1/3 w-[400px] h-[400px]",animate:t?{x:[0,60,0],y:[0,-60,0],scale:[1,1.15,1]}:{},transition:{duration:22,repeat:Number.POSITIVE_INFINITY,ease:"easeInOut"}})]}),r&&e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-purple-900/20 pointer-events-none"}),e.jsx("div",{className:"relative min-h-screen flex items-center z-30 max-sm:items-start",children:e.jsx("div",{className:"max-w-7xl mx-auto px-6 pt-24 pb-32 w-full max-sm:pt-16 max-sm:pb-8",children:e.jsxs("div",{className:"grid lg:grid-cols-2 gap-12 lg:gap-20 items-center",children:[e.jsxs(w.div,{className:"space-y-8",initial:{opacity:0,x:-50},animate:{opacity:t?1:0,x:t?0:-50},transition:{duration:.8,delay:.5},children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(w.div,{initial:{opacity:0,y:20},animate:{opacity:t?1:0,y:t?0:20},transition:{delay:.6,duration:.6},children:e.jsx($e,{radius:150,duration:1.5,speed:.6,scrambleChars:"!@#$%^&*()_+-={}[]|:;<>?,./~",className:"text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight whitespace-nowrap",style:{margin:0,maxWidth:"100%"},children:o("hero.welcome")})}),e.jsx(w.h1,{className:"text-5xl md:text-6xl lg:text-7xl font-bold leading-tight whitespace-nowrap",initial:{opacity:0,filter:"blur(10px)",y:20},animate:{opacity:t?1:0,filter:t?"blur(0px)":"blur(10px)",y:t?0:20},transition:{delay:.8,duration:1,ease:[.23,1,.32,1]},children:e.jsx("span",{className:"bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent whitespace-nowrap",children:o("hero.portfolio")})})]}),e.jsx(w.div,{className:"flex flex-wrap gap-3",initial:{opacity:0,y:20},animate:{opacity:t?1:0,y:t?0:20},transition:{delay:.8,duration:.6},children:[{icon:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),text:o("hero.role1"),color:"from-blue-500 to-cyan-500"},{icon:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"})}),text:o("hero.role2"),color:"from-purple-500 to-pink-500"},{icon:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})}),text:o("hero.role3"),color:"from-emerald-500 to-teal-500"}].map((l,a)=>e.jsxs(w.div,{className:`px-5 py-3 rounded-xl bg-gradient-to-r ${l.color} bg-opacity-10 backdrop-blur-sm border border-white/10 flex items-center gap-3`,initial:{opacity:0,scale:.8},animate:{opacity:t?1:0,scale:t?1:.8},transition:{delay:.9+a*.1,duration:.4},whileHover:{scale:1.05,borderColor:"rgba(255, 255, 255, 0.3)"},children:[e.jsx("span",{className:"text-white",children:l.icon}),e.jsx("span",{className:"text-white text-base font-semibold",children:l.text})]},l.text))}),e.jsxs(w.div,{className:"space-y-3",initial:{opacity:0,y:20},animate:{opacity:t?1:0,y:t?0:20},transition:{delay:1.1,duration:.6},children:[e.jsx(oe,{text:`${o("hero.description1")} ${o("hero.description1.highlight")}. ${o("hero.description2")} ${o("hero.description2.highlight")}.`,delay:60,animateBy:"words",direction:"top",className:"text-slate-300 text-lg md:text-xl leading-relaxed",stepDuration:.35}),e.jsx(oe,{text:o("hero.description3"),delay:70,animateBy:"words",direction:"top",className:"text-slate-400 text-base md:text-lg",stepDuration:.35})]}),e.jsx(w.div,{className:"flex flex-wrap items-center gap-4",initial:{opacity:0,y:20},animate:{opacity:t?1:0,y:t?0:20},transition:{delay:1.3,duration:.6},children:e.jsxs("div",{className:"inline-flex items-center gap-4 px-6 py-4 rounded-xl bg-slate-800/90 backdrop-blur-md border border-emerald-500/50 shadow-xl",children:[e.jsx("span",{className:"text-white text-base font-bold",children:o("hero.follow")}),e.jsx("div",{className:"h-6 w-px bg-emerald-500/50"}),e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx(w.div,{initial:{opacity:0,scale:.8},animate:{opacity:t?1:0,scale:t?1:.8},transition:{delay:1.5,duration:.4},children:e.jsx(Re,{})}),e.jsx(w.div,{initial:{opacity:0,scale:.8},animate:{opacity:t?1:0,scale:t?1:.8},transition:{delay:1.6,duration:.4},children:e.jsx(Be,{})}),e.jsx("div",{className:"h-6 w-px bg-emerald-500/50"}),e.jsx(w.a,{href:"/Wishant%20Bhajan.pdf",download:"Wishant_Bhajan_CV.pdf",className:"inline-flex items-center justify-center w-[45px] h-[45px] rounded-md bg-slate-800/80 border border-white/30 text-emerald-500 font-bold text-sm cursor-pointer hover:border-emerald-500/50 hover:shadow-[0_0_10px_rgba(16,185,129,0.3)] hover:bg-emerald-500/10 transition-all duration-300",initial:{opacity:0,scale:.8},animate:{opacity:t?1:0,scale:t?1:.8},transition:{delay:1.7,duration:.4},whileTap:{scale:.95},title:"Download CV",children:e.jsx("span",{children:"CV"})})]})]})})]}),e.jsx(w.div,{className:"relative lg:flex items-center justify-center hidden",initial:{opacity:0,x:50},animate:{opacity:t?1:0,x:t?0:50},transition:{duration:.8,delay:.7},children:e.jsx("div",{className:"cube-animation",children:e.jsx(Se,{gridSize:16,cubeSize:40,maxAngle:45,radius:6,duration:{enter:.3,leave:.6},cellGap:6,borderStyle:"1px solid rgba(100, 116, 139, 0.3)",faceColor:"rgba(30, 41, 59, 0.6)",shadow:!1,autoAnimate:!0,rippleOnClick:!0,rippleColor:"rgba(71, 85, 105, 0.5)",rippleSpeed:2.5,visibleCells:[{row:1,col:4},{row:2,col:4},{row:3,col:4},{row:4,col:4},{row:5,col:4},{row:6,col:4},{row:7,col:4},{row:8,col:4},{row:9,col:5},{row:8,col:6},{row:7,col:7},{row:8,col:8},{row:9,col:9},{row:8,col:10},{row:7,col:10},{row:6,col:10},{row:5,col:10},{row:4,col:10},{row:3,col:10},{row:2,col:10},{row:1,col:10},{row:1,col:13},{row:2,col:13},{row:3,col:13},{row:4,col:13},{row:5,col:13},{row:6,col:13},{row:7,col:13},{row:8,col:13},{row:9,col:13},{row:1,col:14},{row:1,col:15},{row:2,col:15},{row:3,col:15},{row:4,col:14},{row:4,col:15},{row:5,col:14},{row:6,col:14},{row:6,col:15},{row:7,col:15},{row:8,col:15},{row:9,col:14},{row:9,col:15}]})})})]})})}),e.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-[400px] pointer-events-none z-20",children:e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"})}),e.jsx("style",{children:`
        @keyframes cubeColorPulse {
          0%, 100% {
            filter: hue-rotate(0deg) brightness(1);
          }
          50% {
            filter: hue-rotate(60deg) brightness(1.3);
          }
        }
      `})]})},ce=12,le=300,Q="0, 245, 255",Fe=768,ze=(t,o,r=Q)=>{const l=document.createElement("div");return l.className="particle",l.style.cssText=`
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${r}, 1);
    box-shadow: 0 0 6px rgba(${r}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${t}px;
    top: ${o}px;
  `,l},Oe=t=>({proximity:t*.5,fadeDistance:t*.75}),We=(t,o,r,l,a)=>{const u=t.getBoundingClientRect(),m=(o-u.left)/u.width*100,N=(r-u.top)/u.height*100;t.style.setProperty("--glow-x",`${m}%`),t.style.setProperty("--glow-y",`${N}%`),t.style.setProperty("--glow-intensity",l.toString()),t.style.setProperty("--glow-radius",`${a}px`)},He=({children:t,className:o="",disableAnimations:r=!1,style:l,particleCount:a=ce,glowColor:u=Q,enableTilt:m=!0,clickEffect:N=!1,enableMagnetism:i=!1,onClick:j})=>{const x=n.useRef(null),S=n.useRef([]),k=n.useRef([]),$=n.useRef(!1),E=n.useRef([]),R=n.useRef(!1),h=n.useRef(null),s=n.useCallback(()=>{if(R.current||!x.current)return;const{width:c,height:y}=x.current.getBoundingClientRect();E.current=Array.from({length:a},()=>ze(Math.random()*c,Math.random()*y,u)),R.current=!0},[a,u]),A=n.useCallback(()=>{k.current.forEach(clearTimeout),k.current=[],h.current?.kill(),S.current.forEach(c=>{g.to(c,{scale:0,opacity:0,duration:.3,ease:"back.in(1.7)",onComplete:()=>{c.parentNode?.removeChild(c)}})}),S.current=[]},[]),T=n.useCallback(()=>{!x.current||!$.current||(R.current||s(),E.current.forEach((c,y)=>{const f=setTimeout(()=>{if(!$.current||!x.current)return;const P=c.cloneNode(!0);x.current.appendChild(P),S.current.push(P),g.fromTo(P,{scale:0,opacity:0},{scale:1,opacity:1,duration:.3,ease:"back.out(1.7)"}),g.to(P,{x:(Math.random()-.5)*100,y:(Math.random()-.5)*100,rotation:Math.random()*360,duration:2+Math.random()*2,ease:"none",repeat:-1,yoyo:!0}),g.to(P,{opacity:.3,duration:1.5,ease:"power2.inOut",repeat:-1,yoyo:!0})},y*100);k.current.push(f)}))},[s]);return n.useEffect(()=>{if(r||!x.current)return;const c=x.current,y=()=>{$.current=!0,T(),m&&g.to(c,{rotateX:5,rotateY:5,duration:.3,ease:"power2.out",transformPerspective:1e3})},f=()=>{$.current=!1,A(),m&&g.to(c,{rotateX:0,rotateY:0,duration:.3,ease:"power2.out"}),i&&g.to(c,{x:0,y:0,duration:.3,ease:"power2.out"})},P=M=>{if(!m&&!i)return;const p=c.getBoundingClientRect(),b=M.clientX-p.left,_=M.clientY-p.top,L=p.width/2,I=p.height/2;if(m){const D=(_-I)/I*-10,Y=(b-L)/L*10;g.to(c,{rotateX:D,rotateY:Y,duration:.1,ease:"power2.out",transformPerspective:1e3})}if(i){const D=(b-L)*.05,Y=(_-I)*.05;h.current=g.to(c,{x:D,y:Y,duration:.3,ease:"power2.out"})}},X=M=>{if(!N)return;const p=c.getBoundingClientRect(),b=M.clientX-p.left,_=M.clientY-p.top,L=Math.max(Math.hypot(b,_),Math.hypot(b-p.width,_),Math.hypot(b,_-p.height),Math.hypot(b-p.width,_-p.height)),I=document.createElement("div");I.style.cssText=`
        position: absolute;
        width: ${L*2}px;
        height: ${L*2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${u}, 0.4) 0%, rgba(${u}, 0.2) 30%, transparent 70%);
        left: ${b-L}px;
        top: ${_-L}px;
        pointer-events: none;
        z-index: 1000;
      `,c.appendChild(I),g.fromTo(I,{scale:0,opacity:1},{scale:1,opacity:0,duration:.8,ease:"power2.out",onComplete:()=>I.remove()})};return c.addEventListener("mouseenter",y),c.addEventListener("mouseleave",f),c.addEventListener("mousemove",P),c.addEventListener("click",X),j&&c.addEventListener("click",j),()=>{$.current=!1,c.removeEventListener("mouseenter",y),c.removeEventListener("mouseleave",f),c.removeEventListener("mousemove",P),c.removeEventListener("click",X),j&&c.removeEventListener("click",j),A()}},[T,A,r,m,i,N,u,j]),e.jsx("div",{ref:x,className:`${o} relative overflow-hidden`,style:{...l,position:"relative",overflow:"hidden"},children:t})},qe=({gridRef:t,disableAnimations:o=!1,enabled:r=!0,spotlightRadius:l=le,glowColor:a=Q})=>{const u=n.useRef(null),m=n.useRef(!1);return n.useEffect(()=>{if(o||!t?.current||!r)return;const N=document.createElement("div");N.className="global-spotlight",N.style.cssText=`
      position: fixed;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${a}, 0.15) 0%,
        rgba(${a}, 0.08) 15%,
        rgba(${a}, 0.04) 25%,
        rgba(${a}, 0.02) 40%,
        rgba(${a}, 0.01) 65%,
        transparent 70%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
    `,document.body.appendChild(N),u.current=N;const i=x=>{if(!u.current||!t.current)return;const k=t.current.closest(".bento-section")?.getBoundingClientRect(),$=k&&x.clientX>=k.left&&x.clientX<=k.right&&x.clientY>=k.top&&x.clientY<=k.bottom;m.current=$||!1;const E=t.current.querySelectorAll(".card");if(!$){g.to(u.current,{opacity:0,duration:.3,ease:"power2.out"}),E.forEach(T=>{T.style.setProperty("--glow-intensity","0")});return}const{proximity:R,fadeDistance:h}=Oe(l);let s=1/0;E.forEach(T=>{const c=T,y=c.getBoundingClientRect(),f=y.left+y.width/2,P=y.top+y.height/2,X=Math.hypot(x.clientX-f,x.clientY-P)-Math.max(y.width,y.height)/2,M=Math.max(0,X);s=Math.min(s,M);let p=0;M<=R?p=1:M<=h&&(p=(h-M)/(h-R)),We(c,x.clientX,x.clientY,p,l)}),g.to(u.current,{left:x.clientX,top:x.clientY,duration:.1,ease:"power2.out"});const A=s<=R?.8:s<=h?(h-s)/(h-R)*.8:0;g.to(u.current,{opacity:A,duration:A>0?.2:.5,ease:"power2.out"})},j=()=>{m.current=!1,t.current?.querySelectorAll(".card").forEach(x=>{x.style.setProperty("--glow-intensity","0")}),u.current&&g.to(u.current,{opacity:0,duration:.3,ease:"power2.out"})};return document.addEventListener("mousemove",i),document.addEventListener("mouseleave",j),()=>{document.removeEventListener("mousemove",i),document.removeEventListener("mouseleave",j),u.current?.parentNode?.removeChild(u.current)}},[t,o,r,l,a]),null},Ge=({children:t,gridRef:o})=>e.jsx("div",{className:"bento-section w-full",style:{fontSize:"clamp(1rem, 0.9rem + 0.5vw, 1.5rem)"},ref:o,children:t}),Ue=()=>{const[t,o]=n.useState(!1);return n.useEffect(()=>{const r=()=>o(window.innerWidth<=Fe);return r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),t},Ke=({textAutoHide:t=!0,enableStars:o=!0,enableSpotlight:r=!0,enableBorderGlow:l=!0,disableAnimations:a=!1,spotlightRadius:u=le,particleCount:m=ce,enableTilt:N=!1,glowColor:i=Q,clickEffect:j=!0,enableMagnetism:x=!0,cards:S})=>{const k=n.useRef(null),$=Ue(),E=a||$,h=S||[{color:"#0A0E27",title:"CyberGuard Pro",description:"Advanced network security monitoring system with real-time threat detection",label:"Live Project",featured:!0,image:"/api/placeholder/600/400",span:{cols:2,rows:2}},{color:"#0A0E27",title:"Data Vault",description:"Encrypted cloud storage solution with zero-knowledge architecture",label:"In Development",image:"/api/placeholder/400/300"},{color:"#0A0E27",title:"AI Assistant",description:"Smart automation platform powered by machine learning",label:"Featured",image:"/api/placeholder/400/300"},{color:"#0B1029",title:"Blockchain Wallet",description:"Secure crypto wallet with multi-chain support",label:"Beta",span:{cols:2,rows:1},image:"/api/placeholder/600/300"},{color:"#0C132B",title:"Task Manager",description:"Productivity app with AI",label:"Live",image:"/api/placeholder/400/300"},{color:"#0A0E27",title:"Weather Dashboard",description:"Real-time weather analytics",label:"Live",image:"/api/placeholder/400/300"}];return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          .bento-section {
            --glow-x: 50%;
            --glow-y: 50%;
            --glow-intensity: 0;
            --glow-radius: 200px;
            --glow-color: ${i};
            --border-color: rgba(0, 245, 255, 0.2);
            --background-dark: #0A0E27;
            --white: hsl(0, 0%, 100%);
            --cyan-primary: rgba(0, 245, 255, 1);
            --cyan-glow: rgba(0, 245, 255, 0.2);
            --cyan-border: rgba(0, 245, 255, 0.8);
          }

          .card-responsive {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            grid-auto-rows: minmax(200px, auto);
            width: 100%;
            margin: 0;
            padding: 0;
            gap: 1rem;
          }

          @media (min-width: 768px) {
            .card-responsive {
              grid-template-columns: repeat(4, 1fr);
              grid-auto-rows: minmax(180px, auto);
            }
          }

          .card-span-2-cols {
            grid-column: span 2;
          }

          .card-span-2-rows {
            grid-row: span 2;
          }

          .card-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            top: 0;
            left: 0;
            transition: transform 0.5s ease;
          }

          .card:hover .card-image {
            transform: scale(1.1);
          }

          .card-content-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 1.5rem;
            background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.7) 60%, transparent 100%);
          }

          @media (max-width: 767px) {
            .card-span-2-cols,
            .card-span-2-rows {
              grid-column: span 1;
              grid-row: span 1;
            }
          }

          .card--border-glow::after {
            content: '';
            position: absolute;
            inset: 0;
            padding: 6px;
            background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
                rgba(${i}, calc(var(--glow-intensity) * 0.8)) 0%,
                rgba(${i}, calc(var(--glow-intensity) * 0.4)) 30%,
                transparent 60%);
            border-radius: inherit;
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask-composite: subtract;
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            pointer-events: none;
            transition: opacity 0.3s ease;
            z-index: 1;
          }

          .card--border-glow:hover::after {
            opacity: 1;
          }

          .card--border-glow:hover {
            box-shadow: 0 4px 20px rgba(0, 245, 255, 0.3), 0 0 30px rgba(${i}, 0.2);
            transform: translateY(-4px);
          }

          .particle::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: rgba(${i}, 0.2);
            border-radius: 50%;
            z-index: -1;
          }

          .particle-container:hover {
            box-shadow: 0 4px 20px rgba(0, 245, 255, 0.2), 0 0 30px rgba(${i}, 0.2);
          }

          .text-clamp-1 {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            line-clamp: 1;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .text-clamp-2 {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          @media (max-width: 599px) {
            .card-responsive {
              grid-template-columns: 1fr;
              width: 100%;
              margin: 0;
              padding: 0;
            }

            .card-responsive .card {
              width: 100%;
              min-height: 180px;
            }
          }
        `}),r&&e.jsx(qe,{gridRef:k,disableAnimations:E,enabled:r,spotlightRadius:u,glowColor:i}),e.jsx(Ge,{gridRef:k,children:e.jsx("div",{className:"card-responsive grid",children:h.map((s,A)=>{const T=[s.span?.cols===2?"card-span-2-cols":"",s.span?.rows===2?"card-span-2-rows":""].filter(Boolean).join(" "),c=`card relative min-h-[200px] w-full rounded-[20px] border border-solid font-light overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,245,255,0.15)] ${l?"card--border-glow":""} ${T}`,y={backgroundColor:s.color||"var(--background-dark)",borderColor:"var(--border-color)",color:"var(--white)","--glow-x":"50%","--glow-y":"50%","--glow-intensity":"0","--glow-radius":"200px"};return o?e.jsxs(He,{className:c,style:y,disableAnimations:E,particleCount:m,glowColor:i,enableTilt:N,clickEffect:j,enableMagnetism:x,onClick:s.onClick,children:[s.image&&e.jsx("img",{src:s.image,alt:s.title,loading:"lazy",decoding:"async",className:"card-image"}),e.jsxs("div",{className:"card-content-overlay",children:[e.jsx("div",{className:"card__header flex justify-between gap-3 mb-2",children:e.jsx("span",{className:"card__label text-xs font-semibold text-cyan-400 uppercase tracking-wider",children:s.label})}),e.jsx("h3",{className:`card__title font-bold ${s.featured?"text-2xl":"text-xl"} mb-2 text-white ${t?"text-clamp-1":""}`,children:s.title}),e.jsx("p",{className:`card__description text-sm leading-6 text-gray-300 ${t?"text-clamp-2":""}`,children:s.description})]})]},A):e.jsxs("div",{className:c,style:y,ref:f=>{if(!f)return;const P=p=>{if(E)return;const b=f.getBoundingClientRect(),_=p.clientX-b.left,L=p.clientY-b.top,I=b.width/2,D=b.height/2;if(N){const Y=(L-D)/D*-10,W=(_-I)/I*10;g.to(f,{rotateX:Y,rotateY:W,duration:.1,ease:"power2.out",transformPerspective:1e3})}if(x){const Y=(_-I)*.05,W=(L-D)*.05;g.to(f,{x:Y,y:W,duration:.3,ease:"power2.out"})}},X=()=>{E||(N&&g.to(f,{rotateX:0,rotateY:0,duration:.3,ease:"power2.out"}),x&&g.to(f,{x:0,y:0,duration:.3,ease:"power2.out"}))},M=p=>{if(!j||E)return;const b=f.getBoundingClientRect(),_=p.clientX-b.left,L=p.clientY-b.top,I=Math.max(Math.hypot(_,L),Math.hypot(_-b.width,L),Math.hypot(_,L-b.height),Math.hypot(_-b.width,L-b.height)),D=document.createElement("div");D.style.cssText=`
                      position: absolute;
                      width: ${I*2}px;
                      height: ${I*2}px;
                      border-radius: 50%;
                      background: radial-gradient(circle, rgba(${i}, 0.4) 0%, rgba(${i}, 0.2) 30%, transparent 70%);
                      left: ${_-I}px;
                      top: ${L-I}px;
                      pointer-events: none;
                      z-index: 1000;
                    `,f.appendChild(D),g.fromTo(D,{scale:0,opacity:1},{scale:1,opacity:0,duration:.8,ease:"power2.out",onComplete:()=>D.remove()})};f.addEventListener("mousemove",P),f.addEventListener("mouseleave",X),f.addEventListener("click",M),s.onClick&&f.addEventListener("click",s.onClick)},children:[s.image&&e.jsx("img",{src:s.image,alt:s.title,loading:"lazy",decoding:"async",className:"card-image"}),e.jsxs("div",{className:"card-content-overlay",children:[e.jsx("div",{className:"card__header flex justify-between gap-3 mb-2",children:e.jsx("span",{className:"card__label text-xs font-semibold text-cyan-400 uppercase tracking-wider",children:s.label})}),e.jsx("h3",{className:`card__title font-bold ${s.featured?"text-2xl":"text-xl"} mb-2 text-white ${t?"text-clamp-1":""}`,children:s.title}),e.jsx("p",{className:`card__description text-sm leading-6 text-gray-300 ${t?"text-clamp-2":""}`,children:s.description})]})]},A)})})})]})},Je=()=>{const t=je(),o=n.useRef(null),r=_e(o,{once:!1,amount:.2}),l=Le(),{t:a}=ne();n.useEffect(()=>{r&&l.start("visible")},[r,l]);const u=[{color:"#0A0E27",title:"WishShield",description:a("featured.wishshield.desc"),label:a("featured.label.cybersecurity"),featured:!0,image:"/projects/security/futuristic_cybersecurity_shield_icon_with_hexagonal_shape.jpeg",span:{cols:2,rows:2}},{color:"#0B1029",title:"TableTech",description:a("featured.tabletech.desc"),label:a("featured.label.live"),image:"/projects/business/modern_restaurant_technology_visualization_with_prominent_tabletech.jpeg"},{color:"#0C132B",title:"Calendify",description:a("featured.calendify.desc"),label:a("featured.label.personal"),image:"/projects/business/professional_office_management_dashboard_clean_calendar_interface.jpeg"},{color:"#0D152E",title:"WishGuard",description:a("featured.wishguard.desc"),label:a("featured.label.cybersecurity"),span:{cols:2,rows:1},image:"/projects/security/fix_the_letter_b__so_that.png"},{color:"#0E1831",title:"Crypto Bot",description:a("featured.cryptobot.desc"),label:a("featured.label.comingSoon"),image:"/projects/business/futuristic_cryptocurrency_trading_bot_visualization_wb_logo.jpg"},{color:"#0A0E27",title:"Urban Mobility",description:a("featured.urbanmobility.desc"),label:a("featured.label.personal"),image:"/projects/utilities/professional_terminal_interface_with_urban_mobility_text_v2.png"}],m=[{name:a("featured.skill.ai"),level:85,category:a("featured.category.ai"),icon:e.jsx(ae,{}),color:"from-purple-400 to-pink-500",note:a("featured.skill.ai.note")},{name:a("featured.skill.react"),level:80,category:a("featured.category.frontend"),icon:e.jsx(J,{}),color:"from-cyan-400 to-blue-500"},{name:a("featured.skill.typescript"),level:80,category:a("featured.category.frontend"),icon:e.jsx(J,{}),color:"from-blue-400 to-purple-500"},{name:a("featured.skill.csharp"),level:75,category:a("featured.category.backend"),icon:e.jsx(J,{}),color:"from-purple-400 to-indigo-500"},{name:a("featured.skill.nodejs"),level:75,category:a("featured.category.backend"),icon:e.jsx(re,{}),color:"from-green-400 to-emerald-500"},{name:a("featured.skill.python"),level:70,category:a("featured.category.backend"),icon:e.jsx(re,{}),color:"from-yellow-400 to-orange-500"},{name:a("featured.skill.cybersecurity"),level:40,category:a("featured.category.security"),icon:e.jsx(be,{}),color:"from-red-400 to-pink-500",note:a("featured.skill.cybersecurity.note")},{name:a("featured.skill.databases"),level:70,category:a("featured.category.database"),icon:e.jsx(ge,{}),color:"from-indigo-400 to-blue-500"},{name:a("featured.skill.docker"),level:65,category:a("featured.category.devops"),icon:e.jsx(ye,{}),color:"from-purple-400 to-pink-500"},{name:a("featured.skill.ml"),level:70,category:a("featured.category.ai"),icon:e.jsx(ae,{}),color:"from-pink-400 to-rose-500"},{name:a("featured.skill.other"),level:70,category:a("featured.category.tools"),icon:e.jsx(J,{}),color:"from-teal-400 to-cyan-500"}],N=[...new Set(m.map(i=>i.category))];return e.jsxs("section",{ref:o,className:"featured-projects-skills-section relative min-h-screen pt-20 pb-24 px-6 lg:px-12 overflow-hidden",style:{background:`linear-gradient(180deg,
          #04081E 0%,
          #050B22 10%,
          #060E26 20%,
          #08112A 30%,
          #0A142D 40%,
          #0C1630 50%,
          #0A142D 60%,
          #08112A 70%,
          #091527 80%,
          #0a1527 85%,
          #0a1628 95%,
          #0a1628 100%
        )`},children:[e.jsxs("div",{className:"absolute inset-0",children:[e.jsx("div",{className:"absolute inset-0 opacity-5",style:{backgroundImage:"linear-gradient(rgba(0, 245, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 245, 255, 0.1) 1px, transparent 1px)",backgroundSize:"50px 50px"}}),e.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-1/2 hidden lg:block",style:{background:"linear-gradient(90deg, rgba(0, 184, 212, 0.02) 0%, transparent 100%)"}}),e.jsx("div",{className:"absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block",style:{background:"linear-gradient(270deg, rgba(0, 255, 185, 0.02) 0%, transparent 100%)"}}),e.jsxs("div",{className:"absolute left-1/2 top-[5%] bottom-[5%] w-px transform -translate-x-1/2 z-10 hidden lg:block",children:[e.jsx("div",{className:"absolute inset-0 w-px bg-gradient-to-b from-transparent via-cyan-500/40 to-transparent"}),e.jsx("div",{className:"absolute inset-0 w-[2px] bg-gradient-to-b from-transparent via-cyan-400/25 to-transparent"}),e.jsx("div",{className:"absolute inset-0 w-[4px] bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent blur-sm"}),e.jsx("div",{className:"absolute inset-0 w-[8px] bg-gradient-to-b from-transparent via-cyan-300/15 to-transparent blur-lg"}),e.jsx("div",{className:"absolute top-0 left-1/2 transform -translate-x-1/2",children:e.jsx("div",{className:"w-3 h-3 bg-cyan-500/60 rounded-full blur-sm"})}),e.jsx("div",{className:"absolute bottom-0 left-1/2 transform -translate-x-1/2",children:e.jsx("div",{className:"w-3 h-3 bg-cyan-500/60 rounded-full blur-sm"})})]})]}),e.jsx("div",{className:"container mx-auto max-w-[1600px] relative z-10",children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16",children:[e.jsxs(w.div,{initial:{opacity:0,x:-50},animate:{opacity:r?1:0,x:r?0:-50},transition:{duration:.6},className:"space-y-8",children:[e.jsxs("div",{className:"text-left",children:[e.jsx("h2",{className:"text-4xl lg:text-5xl font-bold mb-4 text-[#00F5FF]",style:{textShadow:"0 0 30px rgba(0, 245, 255, 0.5), 0 0 10px rgba(0, 184, 212, 0.7)"},children:a("featured.projects.title")}),e.jsx("p",{className:"text-lg text-gray-400",children:a("featured.projects.description")})]}),e.jsx("div",{className:"w-full",children:e.jsx(Ke,{cards:u,textAutoHide:!1,enableStars:!0,enableSpotlight:!0,enableBorderGlow:!0,enableTilt:!0,clickEffect:!0,enableMagnetism:!0,glowColor:"0, 245, 255"})}),e.jsx(w.div,{initial:{opacity:0,y:20},animate:{opacity:r?1:0,y:r?0:20},transition:{delay:.4,duration:.5},children:e.jsxs("button",{type:"button",onClick:()=>t("/portfolio"),className:"group inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold bg-[linear-gradient(135deg,rgba(0,245,255,0.1)_0%,rgba(0,184,212,0.1)_100%)] border-2 border-[rgba(0,245,255,0.3)] text-[#00F5FF] transition-all duration-300 hover:-translate-y-0.5",style:{boxShadow:"0 0 20px rgba(0, 245, 255, 0.2)"},onMouseEnter:i=>{i.currentTarget.style.boxShadow="0 0 30px rgba(0, 245, 255, 0.4)"},onMouseLeave:i=>{i.currentTarget.style.boxShadow="0 0 20px rgba(0, 245, 255, 0.2)"},children:[a("featured.viewAllProjects"),e.jsx(ve,{className:"w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"})]})})]}),e.jsxs(w.div,{initial:{opacity:0,x:50},animate:{opacity:r?1:0,x:r?0:50},transition:{duration:.6},className:"space-y-8 lg:pl-12",children:[e.jsxs("div",{className:"text-left",children:[e.jsx("h2",{className:"text-4xl lg:text-5xl font-bold mb-4 text-[#00FFB9]",style:{textShadow:"0 0 30px rgba(0, 255, 185, 0.5), 0 0 10px rgba(0, 235, 175, 0.7)"},children:a("featured.skills.title")}),e.jsx("p",{className:"text-lg text-gray-400",children:a("featured.skills.description")})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:N.map((i,j)=>e.jsx(w.span,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:j*.1},className:"px-3 py-1 text-xs font-semibold rounded-full bg-slate-800/50 text-cyan-400 border border-cyan-500/20",children:i},i))}),e.jsx("div",{className:"space-y-4",children:m.map((i,j)=>e.jsxs(w.div,{initial:{opacity:0,x:30},animate:{opacity:r?1:0,x:r?0:30},transition:{delay:.1*j,duration:.5},className:"group",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-cyan-400",children:i.icon}),e.jsx("span",{className:"text-white font-medium",children:i.name})]}),e.jsxs("span",{className:"text-cyan-400 font-bold",children:[i.level,"%"]})]}),e.jsx("div",{className:"relative h-2 bg-slate-800/50 rounded-full overflow-hidden",children:e.jsx(w.div,{initial:{width:0},animate:{width:r?`${i.level}%`:0},transition:{delay:.2+j*.1,duration:1,ease:"easeOut"},className:`absolute h-full bg-gradient-to-r ${i.color} rounded-full`,children:e.jsx("div",{className:"absolute inset-0 opacity-50 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)] animate-shimmer"})})}),i.note&&e.jsx("p",{className:"text-xs text-gray-400 italic mt-1 ml-6",children:i.note})]},i.name))}),e.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-8",children:[e.jsxs(w.div,{initial:{opacity:0,y:20},animate:{opacity:r?1:0,y:r?0:20},transition:{delay:.6},className:"text-center p-4 bg-slate-800/30 rounded-lg border border-cyan-500/20",children:[e.jsx("div",{className:"text-2xl font-bold text-cyan-400",children:"8+"}),e.jsx("div",{className:"text-xs text-gray-400",children:a("featured.stats.technologies")})]}),e.jsxs(w.div,{initial:{opacity:0,y:20},animate:{opacity:r?1:0,y:r?0:20},transition:{delay:.7},className:"text-center p-4 bg-slate-800/30 rounded-lg border border-cyan-500/20",children:[e.jsx("div",{className:"text-2xl font-bold text-cyan-400",children:"3+"}),e.jsx("div",{className:"text-xs text-gray-400",children:a("featured.stats.experience")})]}),e.jsxs(w.div,{initial:{opacity:0,y:20},animate:{opacity:r?1:0,y:r?0:20},transition:{delay:.8},className:"text-center p-4 bg-slate-800/30 rounded-lg border border-cyan-500/20",children:[e.jsx("div",{className:"text-2xl font-bold text-cyan-400",children:"20+"}),e.jsx("div",{className:"text-xs text-gray-400",children:a("featured.stats.projects")})]})]})]})]})]})})]})},rt=({isVisible:t=!0})=>(we.useEffect(()=>(document.documentElement.style.scrollBehavior="smooth",()=>{document.documentElement.style.scrollBehavior="auto"}),[]),e.jsxs("div",{className:"relative","data-page":"home",children:[e.jsx(Ce,{}),e.jsx("section",{id:"home",children:e.jsx(Xe,{isVisible:t})}),e.jsx("section",{id:"about",children:e.jsx(Ne,{})}),e.jsx("section",{id:"portfolio",children:e.jsx(Je,{})}),e.jsx("section",{id:"contact",children:e.jsx(ke,{useHomepageStyle:!0})}),e.jsx(Ee,{useHomepageStyle:!0})]}));export{rt as default};
