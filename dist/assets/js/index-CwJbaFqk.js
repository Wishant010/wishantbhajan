import{r as s,j as e,R as ue}from"./vendor-react-An46niRM.js";import{u as ce}from"./index-CR_D9Nvi.js";import{S as me,g as A,a as Ee}from"./vendor-gsap-Cuefk9xl.js";import{m as E,u as xe,a as he}from"./vendor-framer-BIbzFTVK.js";import{w as fe,B as le,C as ee,T as de,S as ke,D as _e,x as Ce,A as Me}from"./vendor-B86kEltU.js";import{u as Le}from"./routerCompat-EkTl6m8S.js";import{G as Ie}from"./GlobalNavbar-Dg9GNQhi.js";import{C as Te,F as Ae}from"./Footer-B9pHHkYR.js";import"./vendor-router-CZpTHvga.js";import"./performanceOptimization-xggZkz5X.js";A.registerPlugin(me,Ee);const $e=({radius:t=100,duration:n=1.2,speed:r=.5,scrambleChars:u=".:",className:a="",style:d={},children:b})=>{const k=s.useRef(null);return s.useEffect(()=>{if(!k.current)return;(async()=>{document.fonts&&await document.fonts.ready;const w=me.create(k.current.querySelector("p"),{type:"chars",charsClass:"inline-block will-change-transform"});w.chars.forEach(j=>{const L=j;A.set(L,{attr:{"data-content":L.innerHTML}})});const f=j=>{w.chars.forEach(L=>{const v=L,{left:$,top:y,width:l,height:g}=v.getBoundingClientRect(),C=j.clientX-($+l/2),i=j.clientY-(y+g/2),I=Math.hypot(C,i);I<t&&A.to(v,{overwrite:!0,duration:n*(1-I/t),scrambleText:{text:v.dataset.content||"",chars:u,speed:r},ease:"none"})})},F=k.current;return F.addEventListener("pointermove",f),()=>{F.removeEventListener("pointermove",f),w.revert()}})()},[t,n,r,u]),e.jsx("div",{ref:k,className:a,style:d,children:e.jsx("p",{children:b})})},Re=()=>typeof window>"u"?!1:window.innerWidth<768||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),Be=(t,n)=>{const r=new Set([...Object.keys(t),...n.flatMap(a=>Object.keys(a))]),u={};return r.forEach(a=>{u[a]=[t[a],...n.map(d=>d[a])]}),u},pe=({text:t="",delay:n=200,className:r="",animateBy:u="words",direction:a="top",threshold:d=.1,rootMargin:b="0px",animationFrom:k,animationTo:p,easing:w=j=>j,onAnimationComplete:f,stepDuration:F=.35})=>{const[j,L]=s.useState(!1),v=u==="words"?t.split(" "):t.split(""),[$,y]=s.useState(!1),l=s.useRef(null);s.useEffect(()=>{L(Re())},[]),s.useEffect(()=>{if(!l.current)return;const R=new IntersectionObserver(([o])=>{o.isIntersecting&&(y(!0),R.unobserve(l.current))},{threshold:d,rootMargin:b});return R.observe(l.current),()=>R.disconnect()},[d,b]);const g=s.useMemo(()=>a==="top"?{opacity:0,y:-50}:{opacity:0,y:50},[a]),C=s.useMemo(()=>[{opacity:.5,y:a==="top"?5:-5},{opacity:1,y:0}],[a]),i=k??g,I=p??C,N=I.length+1,P=F*(N-1),Y=Array.from({length:N},(R,o)=>N===1?0:o/(N-1));return j?e.jsx("p",{ref:l,className:`blur-text ${r}`,children:e.jsx(E.span,{initial:{opacity:0},animate:{opacity:$?1:0},transition:{duration:.5},children:t})}):e.jsx("p",{ref:l,className:`blur-text ${r} flex flex-wrap`,children:v.map((R,o)=>{const c=Be(i,I),x={duration:P,times:Y,delay:o*n/1e3,ease:w};return e.jsxs(E.span,{initial:i,animate:$?c:i,transition:x,onAnimationComplete:o===v.length-1?f:void 0,style:{display:"inline-block",willChange:"transform, opacity"},children:[R===" "?" ":R,u==="words"&&o<v.length-1&&" "]},o)})})},Fe=()=>e.jsx(Se,{children:e.jsxs("div",{className:"tooltip-container",children:[e.jsx("div",{className:"tooltip",children:e.jsxs("div",{className:"profile",children:[e.jsxs("div",{className:"user",children:[e.jsx("div",{className:"img",children:"WB"}),e.jsxs("div",{className:"details",children:[e.jsx("div",{className:"name",children:"Wishant Bhajan"}),e.jsx("div",{className:"username",children:"Co-founder TableTech"})]})]}),e.jsx("div",{className:"about",children:"220+ Connections • Open to Work"})]})}),e.jsx("div",{className:"text",children:e.jsxs("a",{href:"https://www.linkedin.com/in/wishant-bhajan-0a73832a4/",target:"_blank",rel:"noopener noreferrer",className:"icon",children:[e.jsxs("div",{className:"layer",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{className:"fab fa-linkedin",children:e.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})})]}),e.jsx("div",{className:"text",children:"LinkedIn"})]})})]})}),Se=fe.div`
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
  }`,Pe=()=>e.jsx(De,{children:e.jsxs("div",{className:"tooltip-container",children:[e.jsx("div",{className:"tooltip",children:e.jsxs("div",{className:"profile",children:[e.jsxs("div",{className:"user",children:[e.jsx("div",{className:"img",children:"WB"}),e.jsxs("div",{className:"details",children:[e.jsx("div",{className:"name",children:"Wishant Bhajan"}),e.jsx("div",{className:"username",children:"@Wishant010"})]})]}),e.jsx("div",{className:"about",children:"20+ Repositories • Active Developer"})]})}),e.jsx("div",{className:"text",children:e.jsxs("a",{href:"https://github.com/Wishant010",target:"_blank",rel:"noopener noreferrer",className:"icon",children:[e.jsxs("div",{className:"layer",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{className:"fab fa-github",children:e.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})})]}),e.jsx("div",{className:"text",children:"GitHub"})]})})]})}),De=fe.div`
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
  }`,Oe=()=>{const[t,n]=s.useState(!1);return s.useEffect(()=>{const r=()=>{const u=window.innerWidth<768||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);n(u)};return r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),t},Ye=({gridSize:t=10,cubeSize:n,maxAngle:r=45,radius:u=3,easing:a="power3.out",duration:d={enter:.3,leave:.6},cellGap:b,borderStyle:k="1px solid #fff",faceColor:p="#060010",shadow:w=!1,autoAnimate:f=!0,rippleOnClick:F=!0,rippleColor:j="#fff",rippleSpeed:L=2,visibleCells:v})=>{const $=Oe(),y=s.useRef(null),l=s.useRef(null),g=s.useRef(null),C=s.useRef(!1),i=s.useRef({x:0,y:0}),I=s.useRef({x:0,y:0}),N=s.useRef(null),P=typeof b=="number"?`${b}px`:b?.col!==void 0?`${b.col}px`:"5%",Y=typeof b=="number"?`${b}px`:b?.row!==void 0?`${b.row}px`:"5%",R=d.enter,o=d.leave,c=s.useCallback((m,M)=>{y.current&&y.current.querySelectorAll(".cube").forEach(T=>{const S=+T.dataset.row,X=+T.dataset.col,W=Math.hypot(S-m,X-M);if(W<=u){const Z=(1-W/u)*r;A.to(T,{duration:R,ease:a,overwrite:!0,rotateX:-Z,rotateY:Z})}else A.to(T,{duration:o,ease:"power3.out",overwrite:!0,rotateX:0,rotateY:0})})},[u,r,R,o,a]),x=s.useCallback(m=>{C.current=!0,g.current&&clearTimeout(g.current);const M=y.current.getBoundingClientRect(),T=M.width/t,S=M.height/t,X=(m.clientX-M.left)/T,W=(m.clientY-M.top)/S;l.current&&cancelAnimationFrame(l.current),l.current=requestAnimationFrame(()=>c(W,X)),g.current=setTimeout(()=>{C.current=!1},3e3)},[t,c]),h=s.useCallback(()=>{y.current&&y.current.querySelectorAll(".cube").forEach(m=>A.to(m,{duration:o,rotateX:0,rotateY:0,ease:"power3.out"}))},[o]),_=s.useCallback(m=>{m.preventDefault(),C.current=!0,g.current&&clearTimeout(g.current);const M=y.current.getBoundingClientRect(),T=M.width/t,S=M.height/t,X=m.touches[0],W=(X.clientX-M.left)/T,G=(X.clientY-M.top)/S;l.current&&cancelAnimationFrame(l.current),l.current=requestAnimationFrame(()=>c(G,W)),g.current=setTimeout(()=>{C.current=!1},3e3)},[t,c]),B=s.useCallback(()=>{C.current=!0},[]),D=s.useCallback(()=>{y.current&&h()},[h]),O=s.useCallback(m=>{if(!F||!y.current)return;const M=y.current.getBoundingClientRect(),T=M.width/t,S=M.height/t,X=m.clientX||m.touches&&m.touches[0].clientX,W=m.clientY||m.touches&&m.touches[0].clientY,G=Math.floor((X-M.left)/T),Z=Math.floor((W-M.top)/S),ye=.15,ve=.3,we=.6,je=ye/L,ne=ve/L,Ne=we/L,J={};y.current.querySelectorAll(".cube").forEach(U=>{const K=+U.dataset.row,V=+U.dataset.col,oe=Math.hypot(K-Z,V-G),se=Math.round(oe);J[se]||(J[se]=[]),J[se].push(U)}),Object.keys(J).map(Number).sort((U,K)=>U-K).forEach(U=>{const K=U*je,V=J[U].flatMap(oe=>Array.from(oe.querySelectorAll(".cube-face")));A.to(V,{backgroundColor:j,duration:ne,delay:K,ease:"power3.out"}),A.to(V,{backgroundColor:p,duration:ne,delay:K+ne+Ne,ease:"power3.out"})})},[F,t,p,j,L]);s.useEffect(()=>{if(!f||!y.current||$)return;i.current={x:Math.random()*t,y:Math.random()*t},I.current={x:Math.random()*t,y:Math.random()*t};const m=.02,M=()=>{if(!C.current){const T=i.current,S=I.current;T.x+=(S.x-T.x)*m,T.y+=(S.y-T.y)*m,c(T.y,T.x),Math.hypot(T.x-S.x,T.y-S.y)<.1&&(I.current={x:Math.random()*t,y:Math.random()*t})}N.current=requestAnimationFrame(M)};return N.current=requestAnimationFrame(M),()=>{N.current!=null&&cancelAnimationFrame(N.current)}},[f,t,c,$]),s.useEffect(()=>{const m=y.current;if(m&&!$)return m.addEventListener("pointermove",x),m.addEventListener("pointerleave",h),m.addEventListener("click",O),m.addEventListener("touchmove",_,{passive:!1}),m.addEventListener("touchstart",B,{passive:!0}),m.addEventListener("touchend",D,{passive:!0}),()=>{m.removeEventListener("pointermove",x),m.removeEventListener("pointerleave",h),m.removeEventListener("click",O),m.removeEventListener("touchmove",_),m.removeEventListener("touchstart",B),m.removeEventListener("touchend",D),l.current!=null&&cancelAnimationFrame(l.current),g.current&&clearTimeout(g.current)}},[x,h,O,_,B,D,$]);const H=Array.from({length:t}),z={style:{"--cube-face-border":k,"--cube-face-bg":p,"--cube-face-shadow":w===!0?"0 0 6px rgba(0,0,0,.5)":w||"none","--grid-size":t,"--cube-size":n?`${n}px`:"1fr","--column-gap":P,"--row-gap":Y,"--total-width":n?`${t*n}px`:"auto","--total-height":n?`${t*n}px`:"auto"},"data-has-cube-size":n?"true":"false"},q=(m,M)=>!v||v.length===0?!0:v.some(T=>T.row===m&&T.col===M);return e.jsx("div",{className:"cubes-wrapper",...z,children:e.jsx("div",{ref:y,className:"cubes-scene",children:H.map((m,M)=>H.map((T,S)=>q(M,S)?e.jsxs("div",{className:"cube","data-row":M,"data-col":S,children:[e.jsx("span",{className:"cube-pointer-area"}),e.jsx("div",{className:"cube-face cube-face-top"}),e.jsx("div",{className:"cube-face cube-face-bottom"}),e.jsx("div",{className:"cube-face cube-face-left"}),e.jsx("div",{className:"cube-face cube-face-right"}),e.jsx("div",{className:"cube-face cube-face-front"}),e.jsx("div",{className:"cube-face cube-face-back"})]},`${M}-${S}`):e.jsx("div",{className:"invisible"},`${M}-${S}`)))})})},Xe=()=>{const[t,n]=s.useState(!1);return s.useEffect(()=>{const r=()=>{n(window.innerWidth<768||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))};return r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),t},ze=({isVisible:t=!0})=>{const{t:n}=ce(),r=Xe();return e.jsxs("div",{className:"min-h-screen max-sm:min-h-fit relative overflow-hidden page-content scroll-snap-section",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/80 to-purple-950/60"}),!r&&e.jsxs(e.Fragment,{children:[e.jsx(E.div,{className:"orb orb-emerald absolute top-1/4 -left-20 w-96 h-96",animate:t?{x:[0,100,0],y:[0,50,0],scale:[1,1.2,1]}:{},transition:{duration:20,repeat:Number.POSITIVE_INFINITY,ease:"easeInOut"}}),e.jsx(E.div,{className:"orb orb-teal absolute top-1/2 right-1/4 w-[500px] h-[500px]",animate:t?{x:[0,-80,0],y:[0,-40,0],scale:[1,1.3,1]}:{},transition:{duration:25,repeat:Number.POSITIVE_INFINITY,ease:"easeInOut"}}),e.jsx(E.div,{className:"orb orb-purple absolute bottom-1/4 -right-20 w-96 h-96",animate:t?{x:[0,-50,0],y:[0,-30,0],scale:[1.1,1.3,1.1]}:{},transition:{duration:30,repeat:Number.POSITIVE_INFINITY,ease:"easeInOut"}}),e.jsx(E.div,{className:"orb orb-cyan absolute bottom-1/3 left-1/3 w-[400px] h-[400px]",animate:t?{x:[0,60,0],y:[0,-60,0],scale:[1,1.15,1]}:{},transition:{duration:22,repeat:Number.POSITIVE_INFINITY,ease:"easeInOut"}})]}),r&&e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-purple-900/20 pointer-events-none"}),e.jsx("div",{className:"relative min-h-screen flex items-center z-30 max-sm:items-start",children:e.jsx("div",{className:"max-w-7xl mx-auto px-6 pt-24 pb-32 w-full max-sm:pt-16 max-sm:pb-8",children:e.jsxs("div",{className:"grid lg:grid-cols-2 gap-12 lg:gap-20 items-center",children:[e.jsxs(E.div,{className:"space-y-8",initial:{opacity:0,x:-50},animate:{opacity:t?1:0,x:t?0:-50},transition:{duration:.8,delay:.5},children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(E.div,{initial:{opacity:0,y:20},animate:{opacity:t?1:0,y:t?0:20},transition:{delay:.6,duration:.6},children:e.jsx($e,{radius:150,duration:1.5,speed:.6,scrambleChars:"!@#$%^&*()_+-={}[]|:;<>?,./~",className:"text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight whitespace-nowrap",style:{margin:0,maxWidth:"100%"},children:n("hero.welcome")})}),e.jsx(E.h1,{className:"text-5xl md:text-6xl lg:text-7xl font-bold leading-tight whitespace-nowrap",initial:{opacity:0,filter:"blur(10px)",y:20},animate:{opacity:t?1:0,filter:t?"blur(0px)":"blur(10px)",y:t?0:20},transition:{delay:.8,duration:1,ease:[.23,1,.32,1]},children:e.jsx("span",{className:"bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent whitespace-nowrap",children:n("hero.portfolio")})})]}),e.jsx(E.div,{className:"flex flex-wrap gap-3",initial:{opacity:0,y:20},animate:{opacity:t?1:0,y:t?0:20},transition:{delay:.8,duration:.6},children:[{icon:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),text:n("hero.role1"),color:"from-blue-500 to-cyan-500"},{icon:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"})}),text:n("hero.role2"),color:"from-purple-500 to-pink-500"},{icon:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})}),text:n("hero.role3"),color:"from-emerald-500 to-teal-500"}].map((u,a)=>e.jsxs(E.div,{className:`px-5 py-3 rounded-xl bg-gradient-to-r ${u.color} bg-opacity-10 backdrop-blur-sm border border-white/10 flex items-center gap-3`,initial:{opacity:0,scale:.8},animate:{opacity:t?1:0,scale:t?1:.8},transition:{delay:.9+a*.1,duration:.4},whileHover:{scale:1.05,borderColor:"rgba(255, 255, 255, 0.3)"},children:[e.jsx("span",{className:"text-white",children:u.icon}),e.jsx("span",{className:"text-white text-base font-semibold",children:u.text})]},u.text))}),e.jsxs(E.div,{className:"space-y-3",initial:{opacity:0,y:20},animate:{opacity:t?1:0,y:t?0:20},transition:{delay:1.1,duration:.6},children:[e.jsx(pe,{text:`${n("hero.description1")} ${n("hero.description1.highlight")}. ${n("hero.description2")} ${n("hero.description2.highlight")}.`,delay:60,animateBy:"words",direction:"top",className:"text-slate-300 text-lg md:text-xl leading-relaxed",stepDuration:.35}),e.jsx(pe,{text:n("hero.description3"),delay:70,animateBy:"words",direction:"top",className:"text-slate-400 text-base md:text-lg",stepDuration:.35})]}),e.jsx(E.div,{className:"flex flex-wrap items-center gap-4",initial:{opacity:0,y:20},animate:{opacity:t?1:0,y:t?0:20},transition:{delay:1.3,duration:.6},children:e.jsxs("div",{className:"inline-flex items-center gap-4 px-6 py-4 rounded-xl bg-slate-800/90 backdrop-blur-md border border-emerald-500/50 shadow-xl",children:[e.jsx("span",{className:"text-white text-base font-bold",children:n("hero.follow")}),e.jsx("div",{className:"h-6 w-px bg-emerald-500/50"}),e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx(E.div,{initial:{opacity:0,scale:.8},animate:{opacity:t?1:0,scale:t?1:.8},transition:{delay:1.5,duration:.4},children:e.jsx(Fe,{})}),e.jsx(E.div,{initial:{opacity:0,scale:.8},animate:{opacity:t?1:0,scale:t?1:.8},transition:{delay:1.6,duration:.4},children:e.jsx(Pe,{})}),e.jsx("div",{className:"h-6 w-px bg-emerald-500/50"}),e.jsx(E.a,{href:"/Wishant%20Bhajan.pdf",download:"Wishant_Bhajan_CV.pdf",className:"inline-flex items-center justify-center w-[45px] h-[45px] rounded-md bg-slate-800/80 border border-white/30 text-emerald-500 font-bold text-sm cursor-pointer hover:border-emerald-500/50 hover:shadow-[0_0_10px_rgba(16,185,129,0.3)] hover:bg-emerald-500/10 transition-all duration-300",initial:{opacity:0,scale:.8},animate:{opacity:t?1:0,scale:t?1:.8},transition:{delay:1.7,duration:.4},whileTap:{scale:.95},title:"Download CV",children:e.jsx("span",{children:"CV"})})]})]})})]}),e.jsx(E.div,{className:"relative lg:flex items-center justify-center hidden",initial:{opacity:0,x:50},animate:{opacity:t?1:0,x:t?0:50},transition:{duration:.8,delay:.7},children:e.jsx("div",{className:"cube-animation",children:e.jsx(Ye,{gridSize:16,cubeSize:40,maxAngle:45,radius:6,duration:{enter:.3,leave:.6},cellGap:6,borderStyle:"1px solid rgba(100, 116, 139, 0.3)",faceColor:"rgba(30, 41, 59, 0.6)",shadow:!1,autoAnimate:!0,rippleOnClick:!0,rippleColor:"rgba(71, 85, 105, 0.5)",rippleSpeed:2.5,visibleCells:[{row:1,col:4},{row:2,col:4},{row:3,col:4},{row:4,col:4},{row:5,col:4},{row:6,col:4},{row:7,col:4},{row:8,col:4},{row:9,col:5},{row:8,col:6},{row:7,col:7},{row:8,col:8},{row:9,col:9},{row:8,col:10},{row:7,col:10},{row:6,col:10},{row:5,col:10},{row:4,col:10},{row:3,col:10},{row:2,col:10},{row:1,col:10},{row:1,col:13},{row:2,col:13},{row:3,col:13},{row:4,col:13},{row:5,col:13},{row:6,col:13},{row:7,col:13},{row:8,col:13},{row:9,col:13},{row:1,col:14},{row:1,col:15},{row:2,col:15},{row:3,col:15},{row:4,col:14},{row:4,col:15},{row:5,col:14},{row:6,col:14},{row:6,col:15},{row:7,col:15},{row:8,col:15},{row:9,col:14},{row:9,col:15}]})})})]})})}),e.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-[400px] pointer-events-none z-20",children:e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"})}),e.jsx("style",{children:`
        @keyframes cubeColorPulse {
          0%, 100% {
            filter: hue-rotate(0deg) brightness(1);
          }
          50% {
            filter: hue-rotate(60deg) brightness(1.3);
          }
        }
      `})]})},We="radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(266,100%,90%,var(--card-opacity)) 4%,hsla(266,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(266,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(266,0%,60%,0) 100%),radial-gradient(35% 52% at 55% 20%,#00ffaac4 0%,#073aff00 100%),radial-gradient(100% 100% at 50% 50%,#00c1ffff 1%,#073aff00 76%),conic-gradient(from 124deg at 50% 50%,#c137ffff 0%,#07c6ffff 40%,#07c6ffff 60%,#c137ffff 100%)",He="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)",Q={SMOOTH_DURATION:600,INITIAL_DURATION:1500,INITIAL_X_OFFSET:70,INITIAL_Y_OFFSET:60,DEVICE_BETA_OFFSET:20},te=(t,n=0,r=100)=>Math.min(Math.max(t,n),r),ie=(t,n=3)=>parseFloat(t.toFixed(n)),ae=(t,n,r,u,a)=>ie(u+(a-u)*(t-n)/(r-n)),qe=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,Ue=({avatarUrl:t="/profile/wish-photo.jpg",iconUrl:n,grainUrl:r,behindGradient:u,innerGradient:a,showBehindGradient:d=!0,className:b="",enableTilt:k=!0,enableMobileTilt:p=!1,mobileTiltSensitivity:w=5,miniAvatarUrl:f,name:F="Wishant Bhajan",title:j="Software Engineer",handle:L="wishant010",status:v="Online",contactText:$="Contact",showUserInfo:y=!0,onContactClick:l})=>{const g=s.useRef(null),C=s.useRef(null),i=s.useMemo(()=>{if(!k)return null;let o=null;const c=(h,_,B,D)=>{const O=B.clientWidth,H=B.clientHeight,z=te(100/O*h),q=te(100/H*_),m=z-50,M=q-50,T={"--pointer-x":`${z}%`,"--pointer-y":`${q}%`,"--background-x":`${ae(z,0,100,35,65)}%`,"--background-y":`${ae(q,0,100,35,65)}%`,"--pointer-from-center":`${te(Math.hypot(q-50,z-50)/50,0,1)}`,"--pointer-from-top":`${q/100}`,"--pointer-from-left":`${z/100}`,"--rotate-x":`${ie(-(m/5))}deg`,"--rotate-y":`${ie(M/4)}deg`};Object.entries(T).forEach(([S,X])=>{D.style.setProperty(S,X)})};return{updateCardTransform:c,createSmoothAnimation:(h,_,B,D,O)=>{const H=performance.now(),z=O.clientWidth/2,q=O.clientHeight/2,m=M=>{const T=M-H,S=te(T/h),X=qe(S),W=ae(X,0,1,_,z),G=ae(X,0,1,B,q);c(W,G,D,O),S<1&&(o=requestAnimationFrame(m))};o=requestAnimationFrame(m)},cancelAnimation:()=>{o&&(cancelAnimationFrame(o),o=null)}}},[k]),I=s.useCallback(o=>{const c=C.current,x=g.current;if(!c||!x||!i)return;const h=c.getBoundingClientRect();i.updateCardTransform(o.clientX-h.left,o.clientY-h.top,c,x)},[i]),N=s.useCallback(()=>{const o=C.current,c=g.current;!o||!c||!i||(i.cancelAnimation(),c.classList.add("active"),o.classList.add("active"))},[i]),P=s.useCallback(o=>{const c=C.current,x=g.current;!c||!x||!i||(i.createSmoothAnimation(Q.SMOOTH_DURATION,o.offsetX,o.offsetY,c,x),x.classList.remove("active"),c.classList.remove("active"))},[i]),Y=s.useCallback(o=>{const c=C.current,x=g.current;if(!c||!x||!i)return;const{beta:h,gamma:_}=o;!h||!_||i.updateCardTransform(c.clientHeight/2+_*w,c.clientWidth/2+(h-Q.DEVICE_BETA_OFFSET)*w,c,x)},[i,w]);s.useEffect(()=>{if(!k||!i)return;const o=C.current,c=g.current;if(!o||!c)return;const x=I,h=N,_=P,B=Y,D=()=>{!p||location.protocol!=="https:"||(typeof window.DeviceMotionEvent.requestPermission=="function"?window.DeviceMotionEvent.requestPermission?.().then(z=>{z==="granted"&&window.addEventListener("deviceorientation",B)}).catch(z=>{}):window.addEventListener("deviceorientation",B))};o.addEventListener("pointerenter",h),o.addEventListener("pointermove",x),o.addEventListener("pointerleave",_),o.addEventListener("click",D);const O=c.clientWidth-Q.INITIAL_X_OFFSET,H=Q.INITIAL_Y_OFFSET;return i.updateCardTransform(O,H,o,c),i.createSmoothAnimation(Q.INITIAL_DURATION,O,H,o,c),()=>{o.removeEventListener("pointerenter",h),o.removeEventListener("pointermove",x),o.removeEventListener("pointerleave",_),o.removeEventListener("click",D),window.removeEventListener("deviceorientation",B),i.cancelAnimation()}},[k,p,i,I,N,P,Y]),s.useEffect(()=>{const o=g.current;if(!o)return;const c={"--icon":n?`url(${n})`:"none","--grain":r?`url(${r})`:"none","--behind-gradient":d?u??We:"none","--inner-gradient":a??He};Object.entries(c).forEach(([x,h])=>{o.style.setProperty(x,h)})},[n,r,d,u,a]);const R=s.useCallback(()=>{l?.()},[l]);return e.jsx("div",{ref:g,className:`pc-card-wrapper ${b}`.trim(),children:e.jsx("section",{ref:C,className:"pc-card",children:e.jsxs("div",{className:"pc-inside",children:[e.jsx("div",{className:"pc-shine"}),e.jsx("div",{className:"pc-glare"}),e.jsxs("div",{className:"pc-content pc-avatar-content",children:[e.jsx("img",{className:"avatar",src:t,alt:`${F||"User"} avatar`,loading:"lazy",decoding:"async",onError:o=>{const c=o.target;c.style.display="none"}}),y&&e.jsxs("div",{className:"pc-user-info",children:[e.jsxs("div",{className:"pc-user-details",children:[e.jsx("div",{className:"pc-mini-avatar",children:e.jsx("img",{src:f||t,alt:`${F||"User"} mini avatar`,loading:"lazy",decoding:"async",onError:o=>{const c=o.target;c.style.opacity="0.5",c.src=t}})}),e.jsxs("div",{className:"pc-user-text",children:[e.jsxs("div",{className:"pc-handle",children:["@",L]}),e.jsx("div",{className:"pc-status",children:v})]})]}),e.jsx("button",{className:"pc-contact-btn",onClick:R,type:"button","aria-label":`Contact ${F||"user"}`,children:$})]})]}),e.jsx("div",{className:"pc-content",children:e.jsxs("div",{className:"pc-details",children:[e.jsx("h3",{children:F}),e.jsx("p",{children:j})]})})]})})})},Ge=ue.memo(Ue),Ke=({startTyping:t,onTypingComplete:n,t:r})=>{const[u,a]=s.useState(""),[d,b]=s.useState(0),[k,p]=s.useState(!0),[w,f]=s.useState(!1),F=[{prompt:">",command:"./about-me.sh",delay:500},{prompt:">",text:r("aboutsection.terminal.name"),delay:100},{prompt:">",text:r("aboutsection.terminal.age"),delay:100},{prompt:">",text:r("aboutsection.terminal.location"),delay:100},{prompt:">",text:r("aboutsection.terminal.role"),delay:100},{prompt:">",text:r("aboutsection.terminal.status"),delay:100},{prompt:">",text:r("aboutsection.terminal.passion"),delay:100},{prompt:">",text:r("aboutsection.terminal.experience"),delay:100}];return s.useEffect(()=>{if(!t||w)return;f(!0),(async()=>{for(let v=0;v<F.length;v++){const $=F[v];await new Promise(g=>setTimeout(g,$.delay));const y=$.command||$.text||"";let l="";for(let g=0;g<=y.length;g++)l=y.slice(0,g),b(v),a(C=>{const i=C.split(`
`);return i[v]=`${$.prompt} ${l}`,i.join(`
`)}),await new Promise(C=>setTimeout(C,30))}n&&n()})();const L=setInterval(()=>{p(v=>!v)},500);return()=>clearInterval(L)},[t,w]),e.jsxs(E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3,duration:.5},className:"group relative bg-black rounded-xl overflow-hidden shadow-2xl border border-cyan-500/20 w-full max-w-2xl transition-all duration-300 before:content-[''] before:absolute before:inset-[-1px] before:bg-gradient-to-r before:from-[#00F5FF] before:to-[#00FFB9] before:opacity-10 before:rounded-lg before:-z-10 before:transition-opacity before:duration-300 hover:before:opacity-20",style:{boxShadow:"0 0 60px rgba(0, 245, 255, 0.15)"},children:[e.jsxs("div",{className:"bg-gray-800 px-6 py-3 flex items-center gap-2 border-b border-[rgba(0,245,255,0.1)]",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("span",{className:"w-3 h-3 rounded-full bg-red-500"}),e.jsx("span",{className:"w-3 h-3 rounded-full bg-yellow-500"}),e.jsx("span",{className:"w-3 h-3 rounded-full bg-green-500"})]}),e.jsx("span",{className:"ml-4 text-gray-500 text-sm font-mono",children:"about-me.sh"})]}),e.jsx("div",{className:"p-8 font-mono text-base lg:text-lg min-h-[200px] relative overflow-hidden",children:u.split(`
`).map((j,L)=>e.jsxs("div",{className:"mb-2 flex items-center animate-terminal-line-fade",children:[j.includes(":")?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"text-teal-500",children:j.split(":")[0]}),e.jsx("span",{className:"text-gray-400",children:":"}),e.jsx("span",{className:"text-cyan-600",children:j.split(":")[1]})]}):e.jsx("span",{className:"text-teal-500",children:j}),L===d&&k&&e.jsx("span",{className:"text-cyan-500 animate-blink",children:"_"})]},L))})]})},Je=()=>{const t=s.useRef(null),n=xe(t,{once:!1,amount:.3}),r=he(),[u,a]=s.useState(!1),{t:d}=ce();return s.useEffect(()=>{n&&r.start("visible")},[n,r]),e.jsxs("section",{ref:t,className:"about-section relative min-h-screen py-32 px-6 lg:px-12 overflow-hidden bg-[length:200%_200%] animate-gradient-shift",style:{background:`linear-gradient(180deg,
          #0A0E27 0%,
          #0B1029 8%,
          #0C132B 16%,
          #0D152E 24%,
          #0E1831 32%,
          #0F1A34 40%,
          #101D37 48%,
          #0F1B35 56%,
          #0E1932 64%,
          #0C1630 72%,
          #0A142D 80%,
          #08112A 88%,
          #060E26 94%,
          #050B22 97%,
          #04081E 100%
        )`},children:[e.jsxs("div",{className:"absolute inset-0",children:[e.jsx("div",{className:"absolute inset-0",style:{background:"radial-gradient(ellipse at 30% 0%, rgba(0, 245, 255, 0.05) 0%, transparent 40%)"}}),e.jsx("div",{className:"absolute inset-0",style:{background:"radial-gradient(ellipse at 70% 100%, rgba(0, 255, 185, 0.03) 0%, transparent 40%)"}}),e.jsx("div",{className:"absolute inset-0 opacity-[0.03] mix-blend-soft-light",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`}})]}),e.jsx("div",{className:"container mx-auto max-w-[1600px] relative z-10",children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32",children:[e.jsxs(E.div,{initial:{opacity:0,x:-50},animate:{opacity:n?1:0,x:n?0:-50},transition:{duration:.6},className:"space-y-10 lg:mt-8",children:[e.jsxs(E.div,{initial:{opacity:0,y:-30},animate:{opacity:n?1:0,y:n?0:-30},transition:{duration:.5},children:[e.jsx("h2",{className:"text-5xl lg:text-7xl font-bold mb-6 text-[#00B8D4]",style:{textShadow:"0 0 25px rgba(0, 184, 212, 0.5), 0 0 8px rgba(0, 150, 168, 0.7)"},children:d("aboutsection.title")}),e.jsx("p",{className:"text-lg lg:text-xl text-gray-300 leading-relaxed max-w-xl",children:d("aboutsection.subtitle")})]}),e.jsx(Ke,{startTyping:n,onTypingComplete:()=>a(!0),t:d}),u&&e.jsx(E.div,{initial:{opacity:0,x:-30},animate:{opacity:1,x:0},transition:{duration:.5},className:"flex justify-start mt-8",children:e.jsxs(E.a,{href:"/about",className:"group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-bold rounded-xl overflow-hidden before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-0 before:h-0 before:rounded-full before:bg-white/10 before:-translate-x-1/2 before:-translate-y-1/2 before:transition-all before:duration-[600ms] hover:before:w-[300px] hover:before:h-[300px]",style:{boxShadow:"0 0 30px rgba(0, 184, 212, 0.4)"},whileHover:{scale:1.08,x:10,boxShadow:"0 0 40px rgba(0, 184, 212, 0.6), 0 0 60px rgba(0, 245, 255, 0.3)"},whileTap:{scale:.95},children:[e.jsx("span",{className:"relative z-10 transition-all duration-300 group-hover:tracking-wider",children:d("aboutsection.button")}),e.jsx("svg",{className:"w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 8l4 4m0 0l-4 4m4-4H3"})}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]})})]}),e.jsx(E.div,{className:"relative h-[600px] lg:h-[700px] flex items-center justify-center",initial:{opacity:0,x:50},animate:{opacity:n?1:0,x:n?0:50},transition:{duration:.6,delay:.2},children:e.jsx(Ge,{avatarUrl:"/profile/wish-photo.jpg",miniAvatarUrl:"/site-assets/favicon.svg",name:d("aboutsection.profilecard.name"),title:d("aboutsection.profilecard.title"),handle:"wishant010",status:d("aboutsection.profilecard.status"),contactText:d("aboutsection.profilecard.contact"),showUserInfo:!0,enableTilt:!0,enableMobileTilt:!1,onContactClick:()=>{const b=document.querySelector("#contact");b&&b.scrollIntoView({behavior:"smooth"})}})})]})}),e.jsx("div",{className:"absolute inset-0 pointer-events-none z-[1]",style:{background:`
            radial-gradient(circle at 20% 50%, rgba(15, 26, 52, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(10, 20, 45, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(13, 21, 46, 0.3) 0%, transparent 50%)
          `}})]})},be=12,ge=300,re="0, 245, 255",Qe=768,Ze=(t,n,r=re)=>{const u=document.createElement("div");return u.className="particle",u.style.cssText=`
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${r}, 1);
    box-shadow: 0 0 6px rgba(${r}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${t}px;
    top: ${n}px;
  `,u},Ve=t=>({proximity:t*.5,fadeDistance:t*.75}),et=(t,n,r,u,a)=>{const d=t.getBoundingClientRect(),b=(n-d.left)/d.width*100,k=(r-d.top)/d.height*100;t.style.setProperty("--glow-x",`${b}%`),t.style.setProperty("--glow-y",`${k}%`),t.style.setProperty("--glow-intensity",u.toString()),t.style.setProperty("--glow-radius",`${a}px`)},tt=({children:t,className:n="",disableAnimations:r=!1,style:u,particleCount:a=be,glowColor:d=re,enableTilt:b=!0,clickEffect:k=!1,enableMagnetism:p=!1,onClick:w})=>{const f=s.useRef(null),F=s.useRef([]),j=s.useRef([]),L=s.useRef(!1),v=s.useRef([]),$=s.useRef(!1),y=s.useRef(null),l=s.useCallback(()=>{if($.current||!f.current)return;const{width:i,height:I}=f.current.getBoundingClientRect();v.current=Array.from({length:a},()=>Ze(Math.random()*i,Math.random()*I,d)),$.current=!0},[a,d]),g=s.useCallback(()=>{j.current.forEach(clearTimeout),j.current=[],y.current?.kill(),F.current.forEach(i=>{A.to(i,{scale:0,opacity:0,duration:.3,ease:"back.in(1.7)",onComplete:()=>{i.parentNode?.removeChild(i)}})}),F.current=[]},[]),C=s.useCallback(()=>{!f.current||!L.current||($.current||l(),v.current.forEach((i,I)=>{const N=setTimeout(()=>{if(!L.current||!f.current)return;const P=i.cloneNode(!0);f.current.appendChild(P),F.current.push(P),A.fromTo(P,{scale:0,opacity:0},{scale:1,opacity:1,duration:.3,ease:"back.out(1.7)"}),A.to(P,{x:(Math.random()-.5)*100,y:(Math.random()-.5)*100,rotation:Math.random()*360,duration:2+Math.random()*2,ease:"none",repeat:-1,yoyo:!0}),A.to(P,{opacity:.3,duration:1.5,ease:"power2.inOut",repeat:-1,yoyo:!0})},I*100);j.current.push(N)}))},[l]);return s.useEffect(()=>{if(r||!f.current)return;const i=f.current,I=()=>{L.current=!0,C(),b&&A.to(i,{rotateX:5,rotateY:5,duration:.3,ease:"power2.out",transformPerspective:1e3})},N=()=>{L.current=!1,g(),b&&A.to(i,{rotateX:0,rotateY:0,duration:.3,ease:"power2.out"}),p&&A.to(i,{x:0,y:0,duration:.3,ease:"power2.out"})},P=R=>{if(!b&&!p)return;const o=i.getBoundingClientRect(),c=R.clientX-o.left,x=R.clientY-o.top,h=o.width/2,_=o.height/2;if(b){const B=(x-_)/_*-10,D=(c-h)/h*10;A.to(i,{rotateX:B,rotateY:D,duration:.1,ease:"power2.out",transformPerspective:1e3})}if(p){const B=(c-h)*.05,D=(x-_)*.05;y.current=A.to(i,{x:B,y:D,duration:.3,ease:"power2.out"})}},Y=R=>{if(!k)return;const o=i.getBoundingClientRect(),c=R.clientX-o.left,x=R.clientY-o.top,h=Math.max(Math.hypot(c,x),Math.hypot(c-o.width,x),Math.hypot(c,x-o.height),Math.hypot(c-o.width,x-o.height)),_=document.createElement("div");_.style.cssText=`
        position: absolute;
        width: ${h*2}px;
        height: ${h*2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${d}, 0.4) 0%, rgba(${d}, 0.2) 30%, transparent 70%);
        left: ${c-h}px;
        top: ${x-h}px;
        pointer-events: none;
        z-index: 1000;
      `,i.appendChild(_),A.fromTo(_,{scale:0,opacity:1},{scale:1,opacity:0,duration:.8,ease:"power2.out",onComplete:()=>_.remove()})};return i.addEventListener("mouseenter",I),i.addEventListener("mouseleave",N),i.addEventListener("mousemove",P),i.addEventListener("click",Y),w&&i.addEventListener("click",w),()=>{L.current=!1,i.removeEventListener("mouseenter",I),i.removeEventListener("mouseleave",N),i.removeEventListener("mousemove",P),i.removeEventListener("click",Y),w&&i.removeEventListener("click",w),g()}},[C,g,r,b,p,k,d,w]),e.jsx("div",{ref:f,className:`${n} relative overflow-hidden`,style:{...u,position:"relative",overflow:"hidden"},children:t})},at=({gridRef:t,disableAnimations:n=!1,enabled:r=!0,spotlightRadius:u=ge,glowColor:a=re})=>{const d=s.useRef(null),b=s.useRef(!1);return s.useEffect(()=>{if(n||!t?.current||!r)return;const k=document.createElement("div");k.className="global-spotlight",k.style.cssText=`
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
    `,document.body.appendChild(k),d.current=k;const p=f=>{if(!d.current||!t.current)return;const j=t.current.closest(".bento-section")?.getBoundingClientRect(),L=j&&f.clientX>=j.left&&f.clientX<=j.right&&f.clientY>=j.top&&f.clientY<=j.bottom;b.current=L||!1;const v=t.current.querySelectorAll(".card");if(!L){A.to(d.current,{opacity:0,duration:.3,ease:"power2.out"}),v.forEach(C=>{C.style.setProperty("--glow-intensity","0")});return}const{proximity:$,fadeDistance:y}=Ve(u);let l=1/0;v.forEach(C=>{const i=C,I=i.getBoundingClientRect(),N=I.left+I.width/2,P=I.top+I.height/2,Y=Math.hypot(f.clientX-N,f.clientY-P)-Math.max(I.width,I.height)/2,R=Math.max(0,Y);l=Math.min(l,R);let o=0;R<=$?o=1:R<=y&&(o=(y-R)/(y-$)),et(i,f.clientX,f.clientY,o,u)}),A.to(d.current,{left:f.clientX,top:f.clientY,duration:.1,ease:"power2.out"});const g=l<=$?.8:l<=y?(y-l)/(y-$)*.8:0;A.to(d.current,{opacity:g,duration:g>0?.2:.5,ease:"power2.out"})},w=()=>{b.current=!1,t.current?.querySelectorAll(".card").forEach(f=>{f.style.setProperty("--glow-intensity","0")}),d.current&&A.to(d.current,{opacity:0,duration:.3,ease:"power2.out"})};return document.addEventListener("mousemove",p),document.addEventListener("mouseleave",w),()=>{document.removeEventListener("mousemove",p),document.removeEventListener("mouseleave",w),d.current?.parentNode?.removeChild(d.current)}},[t,n,r,u,a]),null},rt=({children:t,gridRef:n})=>e.jsx("div",{className:"bento-section w-full",style:{fontSize:"clamp(1rem, 0.9rem + 0.5vw, 1.5rem)"},ref:n,children:t}),nt=()=>{const[t,n]=s.useState(!1);return s.useEffect(()=>{const r=()=>n(window.innerWidth<=Qe);return r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),t},ot=({textAutoHide:t=!0,enableStars:n=!0,enableSpotlight:r=!0,enableBorderGlow:u=!0,disableAnimations:a=!1,spotlightRadius:d=ge,particleCount:b=be,enableTilt:k=!1,glowColor:p=re,clickEffect:w=!0,enableMagnetism:f=!0,cards:F})=>{const j=s.useRef(null),L=nt(),v=a||L,y=F||[{color:"#0A0E27",title:"CyberGuard Pro",description:"Advanced network security monitoring system with real-time threat detection",label:"Live Project",featured:!0,image:"/api/placeholder/600/400",span:{cols:2,rows:2}},{color:"#0A0E27",title:"Data Vault",description:"Encrypted cloud storage solution with zero-knowledge architecture",label:"In Development",image:"/api/placeholder/400/300"},{color:"#0A0E27",title:"AI Assistant",description:"Smart automation platform powered by machine learning",label:"Featured",image:"/api/placeholder/400/300"},{color:"#0B1029",title:"Blockchain Wallet",description:"Secure crypto wallet with multi-chain support",label:"Beta",span:{cols:2,rows:1},image:"/api/placeholder/600/300"},{color:"#0C132B",title:"Task Manager",description:"Productivity app with AI",label:"Live",image:"/api/placeholder/400/300"},{color:"#0A0E27",title:"Weather Dashboard",description:"Real-time weather analytics",label:"Live",image:"/api/placeholder/400/300"}];return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          .bento-section {
            --glow-x: 50%;
            --glow-y: 50%;
            --glow-intensity: 0;
            --glow-radius: 200px;
            --glow-color: ${p};
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
                rgba(${p}, calc(var(--glow-intensity) * 0.8)) 0%,
                rgba(${p}, calc(var(--glow-intensity) * 0.4)) 30%,
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
            box-shadow: 0 4px 20px rgba(0, 245, 255, 0.3), 0 0 30px rgba(${p}, 0.2);
            transform: translateY(-4px);
          }

          .particle::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: rgba(${p}, 0.2);
            border-radius: 50%;
            z-index: -1;
          }

          .particle-container:hover {
            box-shadow: 0 4px 20px rgba(0, 245, 255, 0.2), 0 0 30px rgba(${p}, 0.2);
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
        `}),r&&e.jsx(at,{gridRef:j,disableAnimations:v,enabled:r,spotlightRadius:d,glowColor:p}),e.jsx(rt,{gridRef:j,children:e.jsx("div",{className:"card-responsive grid",children:y.map((l,g)=>{const C=[l.span?.cols===2?"card-span-2-cols":"",l.span?.rows===2?"card-span-2-rows":""].filter(Boolean).join(" "),i=`card relative min-h-[200px] w-full rounded-[20px] border border-solid font-light overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,245,255,0.15)] ${u?"card--border-glow":""} ${C}`,I={backgroundColor:l.color||"var(--background-dark)",borderColor:"var(--border-color)",color:"var(--white)","--glow-x":"50%","--glow-y":"50%","--glow-intensity":"0","--glow-radius":"200px"};return n?e.jsxs(tt,{className:i,style:I,disableAnimations:v,particleCount:b,glowColor:p,enableTilt:k,clickEffect:w,enableMagnetism:f,onClick:l.onClick,children:[l.image&&e.jsx("img",{src:l.image,alt:l.title,loading:"lazy",decoding:"async",className:"card-image"}),e.jsxs("div",{className:"card-content-overlay",children:[e.jsx("div",{className:"card__header flex justify-between gap-3 mb-2",children:e.jsx("span",{className:"card__label text-xs font-semibold text-cyan-400 uppercase tracking-wider",children:l.label})}),e.jsx("h3",{className:`card__title font-bold ${l.featured?"text-2xl":"text-xl"} mb-2 text-white ${t?"text-clamp-1":""}`,children:l.title}),e.jsx("p",{className:`card__description text-sm leading-6 text-gray-300 ${t?"text-clamp-2":""}`,children:l.description})]})]},g):e.jsxs("div",{className:i,style:I,ref:N=>{if(!N)return;const P=o=>{if(v)return;const c=N.getBoundingClientRect(),x=o.clientX-c.left,h=o.clientY-c.top,_=c.width/2,B=c.height/2;if(k){const D=(h-B)/B*-10,O=(x-_)/_*10;A.to(N,{rotateX:D,rotateY:O,duration:.1,ease:"power2.out",transformPerspective:1e3})}if(f){const D=(x-_)*.05,O=(h-B)*.05;A.to(N,{x:D,y:O,duration:.3,ease:"power2.out"})}},Y=()=>{v||(k&&A.to(N,{rotateX:0,rotateY:0,duration:.3,ease:"power2.out"}),f&&A.to(N,{x:0,y:0,duration:.3,ease:"power2.out"}))},R=o=>{if(!w||v)return;const c=N.getBoundingClientRect(),x=o.clientX-c.left,h=o.clientY-c.top,_=Math.max(Math.hypot(x,h),Math.hypot(x-c.width,h),Math.hypot(x,h-c.height),Math.hypot(x-c.width,h-c.height)),B=document.createElement("div");B.style.cssText=`
                      position: absolute;
                      width: ${_*2}px;
                      height: ${_*2}px;
                      border-radius: 50%;
                      background: radial-gradient(circle, rgba(${p}, 0.4) 0%, rgba(${p}, 0.2) 30%, transparent 70%);
                      left: ${x-_}px;
                      top: ${h-_}px;
                      pointer-events: none;
                      z-index: 1000;
                    `,N.appendChild(B),A.fromTo(B,{scale:0,opacity:1},{scale:1,opacity:0,duration:.8,ease:"power2.out",onComplete:()=>B.remove()})};N.addEventListener("mousemove",P),N.addEventListener("mouseleave",Y),N.addEventListener("click",R),l.onClick&&N.addEventListener("click",l.onClick)},children:[l.image&&e.jsx("img",{src:l.image,alt:l.title,loading:"lazy",decoding:"async",className:"card-image"}),e.jsxs("div",{className:"card-content-overlay",children:[e.jsx("div",{className:"card__header flex justify-between gap-3 mb-2",children:e.jsx("span",{className:"card__label text-xs font-semibold text-cyan-400 uppercase tracking-wider",children:l.label})}),e.jsx("h3",{className:`card__title font-bold ${l.featured?"text-2xl":"text-xl"} mb-2 text-white ${t?"text-clamp-1":""}`,children:l.title}),e.jsx("p",{className:`card__description text-sm leading-6 text-gray-300 ${t?"text-clamp-2":""}`,children:l.description})]})]},g)})})})]})},st=()=>{const t=Le(),n=s.useRef(null),r=xe(n,{once:!1,amount:.2}),u=he(),{t:a}=ce();s.useEffect(()=>{r&&u.start("visible")},[r,u]);const d=[{color:"#0A0E27",title:"WishShield",description:a("featured.wishshield.desc"),label:a("featured.label.cybersecurity"),featured:!0,image:"/projects/security/futuristic_cybersecurity_shield_icon_with_hexagonal_shape.jpeg",span:{cols:2,rows:2}},{color:"#0B1029",title:"TableTech",description:a("featured.tabletech.desc"),label:a("featured.label.live"),image:"/projects/business/modern_restaurant_technology_visualization_with_prominent_tabletech.jpeg"},{color:"#0C132B",title:"Calendify",description:a("featured.calendify.desc"),label:a("featured.label.personal"),image:"/projects/business/professional_office_management_dashboard_clean_calendar_interface.jpeg"},{color:"#0D152E",title:"WishGuard",description:a("featured.wishguard.desc"),label:a("featured.label.cybersecurity"),span:{cols:2,rows:1},image:"/projects/security/fix_the_letter_b__so_that.png"},{color:"#0E1831",title:"Crypto Bot",description:a("featured.cryptobot.desc"),label:a("featured.label.comingSoon"),image:"/projects/business/futuristic_cryptocurrency_trading_bot_visualization_wb_logo.jpg"},{color:"#0A0E27",title:"Urban Mobility",description:a("featured.urbanmobility.desc"),label:a("featured.label.personal"),image:"/projects/utilities/professional_terminal_interface_with_urban_mobility_text_v2.png"}],b=[{name:a("featured.skill.ai"),level:85,category:a("featured.category.ai"),icon:e.jsx(le,{}),color:"from-purple-400 to-pink-500",note:a("featured.skill.ai.note")},{name:a("featured.skill.react"),level:80,category:a("featured.category.frontend"),icon:e.jsx(ee,{}),color:"from-cyan-400 to-blue-500"},{name:a("featured.skill.typescript"),level:80,category:a("featured.category.frontend"),icon:e.jsx(ee,{}),color:"from-blue-400 to-purple-500"},{name:a("featured.skill.csharp"),level:75,category:a("featured.category.backend"),icon:e.jsx(ee,{}),color:"from-purple-400 to-indigo-500"},{name:a("featured.skill.nodejs"),level:75,category:a("featured.category.backend"),icon:e.jsx(de,{}),color:"from-green-400 to-emerald-500"},{name:a("featured.skill.python"),level:70,category:a("featured.category.backend"),icon:e.jsx(de,{}),color:"from-yellow-400 to-orange-500"},{name:a("featured.skill.cybersecurity"),level:40,category:a("featured.category.security"),icon:e.jsx(ke,{}),color:"from-red-400 to-pink-500",note:a("featured.skill.cybersecurity.note")},{name:a("featured.skill.databases"),level:70,category:a("featured.category.database"),icon:e.jsx(_e,{}),color:"from-indigo-400 to-blue-500"},{name:a("featured.skill.docker"),level:65,category:a("featured.category.devops"),icon:e.jsx(Ce,{}),color:"from-purple-400 to-pink-500"},{name:a("featured.skill.ml"),level:70,category:a("featured.category.ai"),icon:e.jsx(le,{}),color:"from-pink-400 to-rose-500"},{name:a("featured.skill.other"),level:70,category:a("featured.category.tools"),icon:e.jsx(ee,{}),color:"from-teal-400 to-cyan-500"}],k=[...new Set(b.map(p=>p.category))];return e.jsxs("section",{ref:n,className:"featured-projects-skills-section relative min-h-screen pt-20 pb-24 px-6 lg:px-12 overflow-hidden",style:{background:`linear-gradient(180deg,
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
        )`},children:[e.jsxs("div",{className:"absolute inset-0",children:[e.jsx("div",{className:"absolute inset-0 opacity-5",style:{backgroundImage:"linear-gradient(rgba(0, 245, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 245, 255, 0.1) 1px, transparent 1px)",backgroundSize:"50px 50px"}}),e.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-1/2 hidden lg:block",style:{background:"linear-gradient(90deg, rgba(0, 184, 212, 0.02) 0%, transparent 100%)"}}),e.jsx("div",{className:"absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block",style:{background:"linear-gradient(270deg, rgba(0, 255, 185, 0.02) 0%, transparent 100%)"}}),e.jsxs("div",{className:"absolute left-1/2 top-[5%] bottom-[5%] w-px transform -translate-x-1/2 z-10 hidden lg:block",children:[e.jsx("div",{className:"absolute inset-0 w-px bg-gradient-to-b from-transparent via-cyan-500/40 to-transparent"}),e.jsx("div",{className:"absolute inset-0 w-[2px] bg-gradient-to-b from-transparent via-cyan-400/25 to-transparent"}),e.jsx("div",{className:"absolute inset-0 w-[4px] bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent blur-sm"}),e.jsx("div",{className:"absolute inset-0 w-[8px] bg-gradient-to-b from-transparent via-cyan-300/15 to-transparent blur-lg"}),e.jsx("div",{className:"absolute top-0 left-1/2 transform -translate-x-1/2",children:e.jsx("div",{className:"w-3 h-3 bg-cyan-500/60 rounded-full blur-sm"})}),e.jsx("div",{className:"absolute bottom-0 left-1/2 transform -translate-x-1/2",children:e.jsx("div",{className:"w-3 h-3 bg-cyan-500/60 rounded-full blur-sm"})})]})]}),e.jsx("div",{className:"container mx-auto max-w-[1600px] relative z-10",children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16",children:[e.jsxs(E.div,{initial:{opacity:0,x:-50},animate:{opacity:r?1:0,x:r?0:-50},transition:{duration:.6},className:"space-y-8",children:[e.jsxs("div",{className:"text-left",children:[e.jsx("h2",{className:"text-4xl lg:text-5xl font-bold mb-4 text-[#00F5FF]",style:{textShadow:"0 0 30px rgba(0, 245, 255, 0.5), 0 0 10px rgba(0, 184, 212, 0.7)"},children:a("featured.projects.title")}),e.jsx("p",{className:"text-lg text-gray-400",children:a("featured.projects.description")})]}),e.jsx("div",{className:"w-full",children:e.jsx(ot,{cards:d,textAutoHide:!1,enableStars:!0,enableSpotlight:!0,enableBorderGlow:!0,enableTilt:!0,clickEffect:!0,enableMagnetism:!0,glowColor:"0, 245, 255"})}),e.jsx(E.div,{initial:{opacity:0,y:20},animate:{opacity:r?1:0,y:r?0:20},transition:{delay:.4,duration:.5},children:e.jsxs("button",{type:"button",onClick:()=>t("/portfolio"),className:"group inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold bg-[linear-gradient(135deg,rgba(0,245,255,0.1)_0%,rgba(0,184,212,0.1)_100%)] border-2 border-[rgba(0,245,255,0.3)] text-[#00F5FF] transition-all duration-300 hover:-translate-y-0.5",style:{boxShadow:"0 0 20px rgba(0, 245, 255, 0.2)"},onMouseEnter:p=>{p.currentTarget.style.boxShadow="0 0 30px rgba(0, 245, 255, 0.4)"},onMouseLeave:p=>{p.currentTarget.style.boxShadow="0 0 20px rgba(0, 245, 255, 0.2)"},children:[a("featured.viewAllProjects"),e.jsx(Me,{className:"w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"})]})})]}),e.jsxs(E.div,{initial:{opacity:0,x:50},animate:{opacity:r?1:0,x:r?0:50},transition:{duration:.6},className:"space-y-8 lg:pl-12",children:[e.jsxs("div",{className:"text-left",children:[e.jsx("h2",{className:"text-4xl lg:text-5xl font-bold mb-4 text-[#00FFB9]",style:{textShadow:"0 0 30px rgba(0, 255, 185, 0.5), 0 0 10px rgba(0, 235, 175, 0.7)"},children:a("featured.skills.title")}),e.jsx("p",{className:"text-lg text-gray-400",children:a("featured.skills.description")})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:k.map((p,w)=>e.jsx(E.span,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:w*.1},className:"px-3 py-1 text-xs font-semibold rounded-full bg-slate-800/50 text-cyan-400 border border-cyan-500/20",children:p},p))}),e.jsx("div",{className:"space-y-4",children:b.map((p,w)=>e.jsxs(E.div,{initial:{opacity:0,x:30},animate:{opacity:r?1:0,x:r?0:30},transition:{delay:.1*w,duration:.5},className:"group",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-cyan-400",children:p.icon}),e.jsx("span",{className:"text-white font-medium",children:p.name})]}),e.jsxs("span",{className:"text-cyan-400 font-bold",children:[p.level,"%"]})]}),e.jsx("div",{className:"relative h-2 bg-slate-800/50 rounded-full overflow-hidden",children:e.jsx(E.div,{initial:{width:0},animate:{width:r?`${p.level}%`:0},transition:{delay:.2+w*.1,duration:1,ease:"easeOut"},className:`absolute h-full bg-gradient-to-r ${p.color} rounded-full`,children:e.jsx("div",{className:"absolute inset-0 opacity-50 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)] animate-shimmer"})})}),p.note&&e.jsx("p",{className:"text-xs text-gray-400 italic mt-1 ml-6",children:p.note})]},p.name))}),e.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-8",children:[e.jsxs(E.div,{initial:{opacity:0,y:20},animate:{opacity:r?1:0,y:r?0:20},transition:{delay:.6},className:"text-center p-4 bg-slate-800/30 rounded-lg border border-cyan-500/20",children:[e.jsx("div",{className:"text-2xl font-bold text-cyan-400",children:"8+"}),e.jsx("div",{className:"text-xs text-gray-400",children:a("featured.stats.technologies")})]}),e.jsxs(E.div,{initial:{opacity:0,y:20},animate:{opacity:r?1:0,y:r?0:20},transition:{delay:.7},className:"text-center p-4 bg-slate-800/30 rounded-lg border border-cyan-500/20",children:[e.jsx("div",{className:"text-2xl font-bold text-cyan-400",children:"3+"}),e.jsx("div",{className:"text-xs text-gray-400",children:a("featured.stats.experience")})]}),e.jsxs(E.div,{initial:{opacity:0,y:20},animate:{opacity:r?1:0,y:r?0:20},transition:{delay:.8},className:"text-center p-4 bg-slate-800/30 rounded-lg border border-cyan-500/20",children:[e.jsx("div",{className:"text-2xl font-bold text-cyan-400",children:"20+"}),e.jsx("div",{className:"text-xs text-gray-400",children:a("featured.stats.projects")})]})]})]})]})]})})]})},bt=({isVisible:t=!0})=>(ue.useEffect(()=>(document.documentElement.style.scrollBehavior="smooth",()=>{document.documentElement.style.scrollBehavior="auto"}),[]),e.jsxs("div",{className:"relative","data-page":"home",children:[e.jsx(Ie,{}),e.jsx("section",{id:"home",children:e.jsx(ze,{isVisible:t})}),e.jsx("section",{id:"about",children:e.jsx(Je,{})}),e.jsx("section",{id:"portfolio",children:e.jsx(st,{})}),e.jsx("section",{id:"contact",children:e.jsx(Te,{useHomepageStyle:!0})}),e.jsx(Ae,{useHomepageStyle:!0})]}));export{bt as default};
