import{r as y,j as n,R as xe,g as xt,C as Ie,T as gt,S as lr,D as dr,h as ur,A as pr}from"./vendor-react-DVZl_X9K.js";import{a as Pt,b as fr,A as hr,C as mr,F as xr}from"./page-about-O0MnpgSo.js";import{b as Tt,g as M,c as gr,m as T,u as yr,a as br}from"./vendor-animation-CyFae76L.js";import{G as vr}from"./page-event-DjSus5EO.js";import"./vendor-three-BkPH-HYM.js";M.registerPlugin(Tt,gr);const wr=({radius:e=100,duration:t=1.2,speed:r=.5,scrambleChars:a=".:",className:o="",style:s={},children:i})=>{const d=y.useRef(null);return y.useEffect(()=>{if(!d.current)return;(async()=>{document.fonts&&await document.fonts.ready;const h=Tt.create(d.current.querySelector("p"),{type:"chars",charsClass:"inline-block will-change-transform"});h.chars.forEach(g=>{const m=g;M.set(m,{attr:{"data-content":m.innerHTML}})});const p=g=>{h.chars.forEach(m=>{const b=m,{left:S,top:k,width:l,height:w}=b.getBoundingClientRect(),j=g.clientX-(S+l/2),u=g.clientY-(k+w/2),v=Math.hypot(j,u);v<e&&M.to(b,{overwrite:!0,duration:t*(1-v/e),scrambleText:{text:b.dataset.content||"",chars:a,speed:r},ease:"none"})})},N=d.current;return N.addEventListener("pointermove",p),()=>{N.removeEventListener("pointermove",p),h.revert()}})()},[e,t,r,a]),n.jsx("div",{ref:d,className:o,style:s,children:n.jsx("p",{children:i})})},jr=()=>typeof window>"u"?!1:window.innerWidth<768||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),Nr=(e,t)=>{const r=new Set([...Object.keys(e),...t.flatMap(o=>Object.keys(o))]),a={};return r.forEach(o=>{a[o]=[e[o],...t.map(s=>s[o])]}),a},yt=({text:e="",delay:t=200,className:r="",animateBy:a="words",direction:o="top",threshold:s=.1,rootMargin:i="0px",animationFrom:d,animationTo:c,easing:h=g=>g,onAnimationComplete:p,stepDuration:N=.35})=>{const[g,m]=y.useState(!1),b=a==="words"?e.split(" "):e.split(""),[S,k]=y.useState(!1),l=y.useRef(null);y.useEffect(()=>{m(jr())},[]),y.useEffect(()=>{if(!l.current)return;const R=new IntersectionObserver(([C])=>{C.isIntersecting&&(k(!0),R.unobserve(l.current))},{threshold:s,rootMargin:i});return R.observe(l.current),()=>R.disconnect()},[s,i]);const w=y.useMemo(()=>o==="top"?{opacity:0,y:-50}:{opacity:0,y:50},[o]),j=y.useMemo(()=>[{opacity:.5,y:o==="top"?5:-5},{opacity:1,y:0}],[o]),u=d??w,v=c??j,f=v.length+1,x=N*(f-1),X=Array.from({length:f},(R,C)=>f===1?0:C/(f-1));return g?n.jsx("p",{ref:l,className:`blur-text ${r}`,children:n.jsx(T.span,{initial:{opacity:0},animate:{opacity:S?1:0},transition:{duration:.5},children:e})}):n.jsx("p",{ref:l,className:`blur-text ${r} flex flex-wrap`,children:b.map((R,C)=>{const $=Nr(u,v),L={duration:x,times:X,delay:C*t/1e3,ease:h};return n.jsxs(T.span,{initial:u,animate:S?$:u,transition:L,onAnimationComplete:C===b.length-1?p:void 0,style:{display:"inline-block",willChange:"transform, opacity"},children:[R===" "?" ":R,a==="words"&&C<b.length-1&&" "]},C)})})};var H=function(){return H=Object.assign||function(t){for(var r,a=1,o=arguments.length;a<o;a++){r=arguments[a];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t},H.apply(this,arguments)};function Be(e,t,r){if(r||arguments.length===2)for(var a=0,o=t.length,s;a<o;a++)(s||!(a in t))&&(s||(s=Array.prototype.slice.call(t,0,a)),s[a]=t[a]);return e.concat(s||Array.prototype.slice.call(t))}var D="-ms-",_e="-moz-",I="-webkit-",Lt="comm",We="rule",dt="decl",kr="@import",Ot="@keyframes",Er="@layer",Dt=Math.abs,ut=String.fromCharCode,nt=Object.assign;function Sr(e,t){return W(e,0)^45?(((t<<2^W(e,0))<<2^W(e,1))<<2^W(e,2))<<2^W(e,3):0}function Bt(e){return e.trim()}function oe(e,t){return(e=t.exec(e))?e[0]:e}function _(e,t,r){return e.replace(t,r)}function Pe(e,t,r){return e.indexOf(t,r)}function W(e,t){return e.charCodeAt(t)|0}function ge(e,t,r){return e.slice(t,r)}function re(e){return e.length}function zt(e){return e.length}function Se(e,t){return t.push(e),e}function _r(e,t){return e.map(t).join("")}function bt(e,t){return e.filter(function(r){return!oe(r,t)})}var Xe=1,ye=1,Ft=0,Z=0,F=0,je="";function Ge(e,t,r,a,o,s,i,d){return{value:e,root:t,parent:r,type:a,props:o,children:s,line:Xe,column:ye,length:i,return:"",siblings:d}}function ie(e,t){return nt(Ge("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function he(e){for(;e.root;)e=ie(e.root,{children:[e]});Se(e,e.siblings)}function Cr(){return F}function Ar(){return F=Z>0?W(je,--Z):0,ye--,F===10&&(ye=1,Xe--),F}function V(){return F=Z<Ft?W(je,Z++):0,ye++,F===10&&(ye=1,Xe++),F}function le(){return W(je,Z)}function Te(){return Z}function He(e,t){return ge(je,e,t)}function at(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function $r(e){return Xe=ye=1,Ft=re(je=e),Z=0,[]}function Ir(e){return je="",e}function Ve(e){return Bt(He(Z-1,ot(e===91?e+2:e===40?e+1:e)))}function Rr(e){for(;(F=le())&&F<33;)V();return at(e)>2||at(F)>3?"":" "}function Mr(e,t){for(;--t&&V()&&!(F<48||F>102||F>57&&F<65||F>70&&F<97););return He(e,Te()+(t<6&&le()==32&&V()==32))}function ot(e){for(;V();)switch(F){case e:return Z;case 34:case 39:e!==34&&e!==39&&ot(F);break;case 40:e===41&&ot(e);break;case 92:V();break}return Z}function Pr(e,t){for(;V()&&e+F!==57;)if(e+F===84&&le()===47)break;return"/*"+He(t,Z-1)+"*"+ut(e===47?e:V())}function Tr(e){for(;!at(le());)V();return He(e,Z)}function Lr(e){return Ir(Le("",null,null,null,[""],e=$r(e),0,[0],e))}function Le(e,t,r,a,o,s,i,d,c){for(var h=0,p=0,N=i,g=0,m=0,b=0,S=1,k=1,l=1,w=0,j="",u=o,v=s,f=a,x=j;k;)switch(b=w,w=V()){case 40:if(b!=108&&W(x,N-1)==58){Pe(x+=_(Ve(w),"&","&\f"),"&\f",Dt(h?d[h-1]:0))!=-1&&(l=-1);break}case 34:case 39:case 91:x+=Ve(w);break;case 9:case 10:case 13:case 32:x+=Rr(b);break;case 92:x+=Mr(Te()-1,7);continue;case 47:switch(le()){case 42:case 47:Se(Or(Pr(V(),Te()),t,r,c),c);break;default:x+="/"}break;case 123*S:d[h++]=re(x)*l;case 125*S:case 59:case 0:switch(w){case 0:case 125:k=0;case 59+p:l==-1&&(x=_(x,/\f/g,"")),m>0&&re(x)-N&&Se(m>32?wt(x+";",a,r,N-1,c):wt(_(x," ","")+";",a,r,N-2,c),c);break;case 59:x+=";";default:if(Se(f=vt(x,t,r,h,p,o,d,j,u=[],v=[],N,s),s),w===123)if(p===0)Le(x,t,f,f,u,s,N,d,v);else switch(g===99&&W(x,3)===110?100:g){case 100:case 108:case 109:case 115:Le(e,f,f,a&&Se(vt(e,f,f,0,0,o,d,j,o,u=[],N,v),v),o,v,N,d,a?u:v);break;default:Le(x,f,f,f,[""],v,0,d,v)}}h=p=m=0,S=l=1,j=x="",N=i;break;case 58:N=1+re(x),m=b;default:if(S<1){if(w==123)--S;else if(w==125&&S++==0&&Ar()==125)continue}switch(x+=ut(w),w*S){case 38:l=p>0?1:(x+="\f",-1);break;case 44:d[h++]=(re(x)-1)*l,l=1;break;case 64:le()===45&&(x+=Ve(V())),g=le(),p=N=re(j=x+=Tr(Te())),w++;break;case 45:b===45&&re(x)==2&&(S=0)}}return s}function vt(e,t,r,a,o,s,i,d,c,h,p,N){for(var g=o-1,m=o===0?s:[""],b=zt(m),S=0,k=0,l=0;S<a;++S)for(var w=0,j=ge(e,g+1,g=Dt(k=i[S])),u=e;w<b;++w)(u=Bt(k>0?m[w]+" "+j:_(j,/&\f/g,m[w])))&&(c[l++]=u);return Ge(e,t,r,o===0?We:d,c,h,p,N)}function Or(e,t,r,a){return Ge(e,t,r,Lt,ut(Cr()),ge(e,2,-2),0,a)}function wt(e,t,r,a,o){return Ge(e,t,r,dt,ge(e,0,a),ge(e,a+1,-1),a,o)}function Yt(e,t,r){switch(Sr(e,t)){case 5103:return I+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return I+e+e;case 4789:return _e+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return I+e+_e+e+D+e+e;case 5936:switch(W(e,t+11)){case 114:return I+e+D+_(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return I+e+D+_(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return I+e+D+_(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return I+e+D+e+e;case 6165:return I+e+D+"flex-"+e+e;case 5187:return I+e+_(e,/(\w+).+(:[^]+)/,I+"box-$1$2"+D+"flex-$1$2")+e;case 5443:return I+e+D+"flex-item-"+_(e,/flex-|-self/g,"")+(oe(e,/flex-|baseline/)?"":D+"grid-row-"+_(e,/flex-|-self/g,""))+e;case 4675:return I+e+D+"flex-line-pack"+_(e,/align-content|flex-|-self/g,"")+e;case 5548:return I+e+D+_(e,"shrink","negative")+e;case 5292:return I+e+D+_(e,"basis","preferred-size")+e;case 6060:return I+"box-"+_(e,"-grow","")+I+e+D+_(e,"grow","positive")+e;case 4554:return I+_(e,/([^-])(transform)/g,"$1"+I+"$2")+e;case 6187:return _(_(_(e,/(zoom-|grab)/,I+"$1"),/(image-set)/,I+"$1"),e,"")+e;case 5495:case 3959:return _(e,/(image-set\([^]*)/,I+"$1$`$1");case 4968:return _(_(e,/(.+:)(flex-)?(.*)/,I+"box-pack:$3"+D+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+I+e+e;case 4200:if(!oe(e,/flex-|baseline/))return D+"grid-column-align"+ge(e,t)+e;break;case 2592:case 3360:return D+_(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(a,o){return t=o,oe(a.props,/grid-\w+-end/)})?~Pe(e+(r=r[t].value),"span",0)?e:D+_(e,"-start","")+e+D+"grid-row-span:"+(~Pe(r,"span",0)?oe(r,/\d+/):+oe(r,/\d+/)-+oe(e,/\d+/))+";":D+_(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(a){return oe(a.props,/grid-\w+-start/)})?e:D+_(_(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return _(e,/(.+)-inline(.+)/,I+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(re(e)-1-t>6)switch(W(e,t+1)){case 109:if(W(e,t+4)!==45)break;case 102:return _(e,/(.+:)(.+)-([^]+)/,"$1"+I+"$2-$3$1"+_e+(W(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Pe(e,"stretch",0)?Yt(_(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return _(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(a,o,s,i,d,c,h){return D+o+":"+s+h+(i?D+o+"-span:"+(d?c:+c-+s)+h:"")+e});case 4949:if(W(e,t+6)===121)return _(e,":",":"+I)+e;break;case 6444:switch(W(e,W(e,14)===45?18:11)){case 120:return _(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+I+(W(e,14)===45?"inline-":"")+"box$3$1"+I+"$2$3$1"+D+"$2box$3")+e;case 100:return _(e,":",":"+D)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return _(e,"scroll-","scroll-snap-")+e}return e}function ze(e,t){for(var r="",a=0;a<e.length;a++)r+=t(e[a],a,e,t)||"";return r}function Dr(e,t,r,a){switch(e.type){case Er:if(e.children.length)break;case kr:case dt:return e.return=e.return||e.value;case Lt:return"";case Ot:return e.return=e.value+"{"+ze(e.children,a)+"}";case We:if(!re(e.value=e.props.join(",")))return""}return re(r=ze(e.children,a))?e.return=e.value+"{"+r+"}":""}function Br(e){var t=zt(e);return function(r,a,o,s){for(var i="",d=0;d<t;d++)i+=e[d](r,a,o,s)||"";return i}}function zr(e){return function(t){t.root||(t=t.return)&&e(t)}}function Fr(e,t,r,a){if(e.length>-1&&!e.return)switch(e.type){case dt:e.return=Yt(e.value,e.length,r);return;case Ot:return ze([ie(e,{value:_(e.value,"@","@"+I)})],a);case We:if(e.length)return _r(r=e.props,function(o){switch(oe(o,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":he(ie(e,{props:[_(o,/:(read-\w+)/,":"+_e+"$1")]})),he(ie(e,{props:[o]})),nt(e,{props:bt(r,a)});break;case"::placeholder":he(ie(e,{props:[_(o,/:(plac\w+)/,":"+I+"input-$1")]})),he(ie(e,{props:[_(o,/:(plac\w+)/,":"+_e+"$1")]})),he(ie(e,{props:[_(o,/:(plac\w+)/,D+"input-$1")]})),he(ie(e,{props:[o]})),nt(e,{props:bt(r,a)});break}return""})}}var Yr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},K={},be=typeof process<"u"&&K!==void 0&&(K.REACT_APP_SC_ATTR||K.SC_ATTR)||"data-styled",Wt="active",Xt="data-styled-version",qe="6.1.19",pt=`/*!sc*/
`,Fe=typeof window<"u"&&typeof document<"u",Wr=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&K!==void 0&&K.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&K.REACT_APP_SC_DISABLE_SPEEDY!==""?K.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&K.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&K!==void 0&&K.SC_DISABLE_SPEEDY!==void 0&&K.SC_DISABLE_SPEEDY!==""&&K.SC_DISABLE_SPEEDY!=="false"&&K.SC_DISABLE_SPEEDY),Ue=Object.freeze([]),ve=Object.freeze({});function Xr(e,t,r){return r===void 0&&(r=ve),e.theme!==r.theme&&e.theme||t||r.theme}var Gt=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Gr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Hr=/(^-|-$)/g;function jt(e){return e.replace(Gr,"-").replace(Hr,"")}var qr=/(a)(d)/gi,Re=52,Nt=function(e){return String.fromCharCode(e+(e>25?39:97))};function st(e){var t,r="";for(t=Math.abs(e);t>Re;t=t/Re|0)r=Nt(t%Re)+r;return(Nt(t%Re)+r).replace(qr,"$1-$2")}var et,Ht=5381,me=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},qt=function(e){return me(Ht,e)};function Ur(e){return st(qt(e)>>>0)}function Kr(e){return e.displayName||e.name||"Component"}function tt(e){return typeof e=="string"&&!0}var Ut=typeof Symbol=="function"&&Symbol.for,Kt=Ut?Symbol.for("react.memo"):60115,Zr=Ut?Symbol.for("react.forward_ref"):60112,Jr={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Qr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Zt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Vr=((et={})[Zr]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},et[Kt]=Zt,et);function kt(e){return("type"in(t=e)&&t.type.$$typeof)===Kt?Zt:"$$typeof"in e?Vr[e.$$typeof]:Jr;var t}var en=Object.defineProperty,tn=Object.getOwnPropertyNames,Et=Object.getOwnPropertySymbols,rn=Object.getOwnPropertyDescriptor,nn=Object.getPrototypeOf,St=Object.prototype;function Jt(e,t,r){if(typeof t!="string"){if(St){var a=nn(t);a&&a!==St&&Jt(e,a,r)}var o=tn(t);Et&&(o=o.concat(Et(t)));for(var s=kt(e),i=kt(t),d=0;d<o.length;++d){var c=o[d];if(!(c in Qr||r&&r[c]||i&&c in i||s&&c in s)){var h=rn(t,c);try{en(e,c,h)}catch{}}}}return e}function we(e){return typeof e=="function"}function ft(e){return typeof e=="object"&&"styledComponentId"in e}function ce(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function _t(e,t){if(e.length===0)return"";for(var r=e[0],a=1;a<e.length;a++)r+=e[a];return r}function Ce(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function it(e,t,r){if(r===void 0&&(r=!1),!r&&!Ce(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var a=0;a<t.length;a++)e[a]=it(e[a],t[a]);else if(Ce(t))for(var a in t)e[a]=it(e[a],t[a]);return e}function ht(e,t){Object.defineProperty(e,"toString",{value:t})}function Ae(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var an=(function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,a=0;a<t;a++)r+=this.groupSizes[a];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var a=this.groupSizes,o=a.length,s=o;t>=s;)if((s<<=1)<0)throw Ae(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(a),this.length=s;for(var i=o;i<s;i++)this.groupSizes[i]=0}for(var d=this.indexOfGroup(t+1),c=(i=0,r.length);i<c;i++)this.tag.insertRule(d,r[i])&&(this.groupSizes[t]++,d++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],a=this.indexOfGroup(t),o=a+r;this.groupSizes[t]=0;for(var s=a;s<o;s++)this.tag.deleteRule(a)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var a=this.groupSizes[t],o=this.indexOfGroup(t),s=o+a,i=o;i<s;i++)r+="".concat(this.tag.getRule(i)).concat(pt);return r},e})(),Oe=new Map,Ye=new Map,De=1,Me=function(e){if(Oe.has(e))return Oe.get(e);for(;Ye.has(De);)De++;var t=De++;return Oe.set(e,t),Ye.set(t,e),t},on=function(e,t){De=t+1,Oe.set(e,t),Ye.set(t,e)},sn="style[".concat(be,"][").concat(Xt,'="').concat(qe,'"]'),cn=new RegExp("^".concat(be,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ln=function(e,t,r){for(var a,o=r.split(","),s=0,i=o.length;s<i;s++)(a=o[s])&&e.registerName(t,a)},dn=function(e,t){for(var r,a=((r=t.textContent)!==null&&r!==void 0?r:"").split(pt),o=[],s=0,i=a.length;s<i;s++){var d=a[s].trim();if(d){var c=d.match(cn);if(c){var h=0|parseInt(c[1],10),p=c[2];h!==0&&(on(p,h),ln(e,p,c[3]),e.getTag().insertRules(h,o)),o.length=0}else o.push(d)}}},Ct=function(e){for(var t=document.querySelectorAll(sn),r=0,a=t.length;r<a;r++){var o=t[r];o&&o.getAttribute(be)!==Wt&&(dn(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function un(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Qt=function(e){var t=document.head,r=e||t,a=document.createElement("style"),o=(function(d){var c=Array.from(d.querySelectorAll("style[".concat(be,"]")));return c[c.length-1]})(r),s=o!==void 0?o.nextSibling:null;a.setAttribute(be,Wt),a.setAttribute(Xt,qe);var i=un();return i&&a.setAttribute("nonce",i),r.insertBefore(a,s),a},pn=(function(){function e(t){this.element=Qt(t),this.element.appendChild(document.createTextNode("")),this.sheet=(function(r){if(r.sheet)return r.sheet;for(var a=document.styleSheets,o=0,s=a.length;o<s;o++){var i=a[o];if(i.ownerNode===r)return i}throw Ae(17)})(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e})(),fn=(function(){function e(t){this.element=Qt(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var a=document.createTextNode(r);return this.element.insertBefore(a,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e})(),hn=(function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e})(),At=Fe,mn={isServer:!Fe,useCSSOMInjection:!Wr},Vt=(function(){function e(t,r,a){t===void 0&&(t=ve),r===void 0&&(r={});var o=this;this.options=H(H({},mn),t),this.gs=r,this.names=new Map(a),this.server=!!t.isServer,!this.server&&Fe&&At&&(At=!1,Ct(this)),ht(this,function(){return(function(s){for(var i=s.getTag(),d=i.length,c="",h=function(N){var g=(function(l){return Ye.get(l)})(N);if(g===void 0)return"continue";var m=s.names.get(g),b=i.getGroup(N);if(m===void 0||!m.size||b.length===0)return"continue";var S="".concat(be,".g").concat(N,'[id="').concat(g,'"]'),k="";m!==void 0&&m.forEach(function(l){l.length>0&&(k+="".concat(l,","))}),c+="".concat(b).concat(S,'{content:"').concat(k,'"}').concat(pt)},p=0;p<d;p++)h(p);return c})(o)})}return e.registerId=function(t){return Me(t)},e.prototype.rehydrate=function(){!this.server&&Fe&&Ct(this)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(H(H({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=(function(r){var a=r.useCSSOMInjection,o=r.target;return r.isServer?new hn(o):a?new pn(o):new fn(o)})(this.options),new an(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(Me(t),this.names.has(t))this.names.get(t).add(r);else{var a=new Set;a.add(r),this.names.set(t,a)}},e.prototype.insertRules=function(t,r,a){this.registerName(t,r),this.getTag().insertRules(Me(t),a)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Me(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e})(),xn=/&/g,gn=/^\s*\/\/.*$/gm;function er(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(a){return"".concat(t," ").concat(a)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=er(r.children,t)),r})}function yn(e){var t,r,a,o=ve,s=o.options,i=s===void 0?ve:s,d=o.plugins,c=d===void 0?Ue:d,h=function(g,m,b){return b.startsWith(r)&&b.endsWith(r)&&b.replaceAll(r,"").length>0?".".concat(t):g},p=c.slice();p.push(function(g){g.type===We&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(xn,r).replace(a,h))}),i.prefix&&p.push(Fr),p.push(Dr);var N=function(g,m,b,S){m===void 0&&(m=""),b===void 0&&(b=""),S===void 0&&(S="&"),t=S,r=m,a=new RegExp("\\".concat(r,"\\b"),"g");var k=g.replace(gn,""),l=Lr(b||m?"".concat(b," ").concat(m," { ").concat(k," }"):k);i.namespace&&(l=er(l,i.namespace));var w=[];return ze(l,Br(p.concat(zr(function(j){return w.push(j)})))),w};return N.hash=c.length?c.reduce(function(g,m){return m.name||Ae(15),me(g,m.name)},Ht).toString():"",N}var bn=new Vt,ct=yn(),tr=xe.createContext({shouldForwardProp:void 0,styleSheet:bn,stylis:ct});tr.Consumer;xe.createContext(void 0);function $t(){return y.useContext(tr)}var vn=(function(){function e(t,r){var a=this;this.inject=function(o,s){s===void 0&&(s=ct);var i=a.name+s.hash;o.hasNameForId(a.id,i)||o.insertRules(a.id,i,s(a.rules,i,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,ht(this,function(){throw Ae(12,String(a.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=ct),this.name+t.hash},e})(),wn=function(e){return e>="A"&&e<="Z"};function It(e){for(var t="",r=0;r<e.length;r++){var a=e[r];if(r===1&&a==="-"&&e[0]==="-")return e;wn(a)?t+="-"+a.toLowerCase():t+=a}return t.startsWith("ms-")?"-"+t:t}var rr=function(e){return e==null||e===!1||e===""},nr=function(e){var t,r,a=[];for(var o in e){var s=e[o];e.hasOwnProperty(o)&&!rr(s)&&(Array.isArray(s)&&s.isCss||we(s)?a.push("".concat(It(o),":"),s,";"):Ce(s)?a.push.apply(a,Be(Be(["".concat(o," {")],nr(s),!1),["}"],!1)):a.push("".concat(It(o),": ").concat((t=o,(r=s)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in Yr||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return a};function de(e,t,r,a){if(rr(e))return[];if(ft(e))return[".".concat(e.styledComponentId)];if(we(e)){if(!we(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var o=e(t);return de(o,t,r,a)}var s;return e instanceof vn?r?(e.inject(r,a),[e.getName(a)]):[e]:Ce(e)?nr(e):Array.isArray(e)?Array.prototype.concat.apply(Ue,e.map(function(i){return de(i,t,r,a)})):[e.toString()]}function jn(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(we(r)&&!ft(r))return!1}return!0}var Nn=qt(qe),kn=(function(){function e(t,r,a){this.rules=t,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&jn(t),this.componentId=r,this.baseHash=me(Nn,r),this.baseStyle=a,Vt.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,a){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,a):"";if(this.isStatic&&!a.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=ce(o,this.staticRulesId);else{var s=_t(de(this.rules,t,r,a)),i=st(me(this.baseHash,s)>>>0);if(!r.hasNameForId(this.componentId,i)){var d=a(s,".".concat(i),void 0,this.componentId);r.insertRules(this.componentId,i,d)}o=ce(o,i),this.staticRulesId=i}else{for(var c=me(this.baseHash,a.hash),h="",p=0;p<this.rules.length;p++){var N=this.rules[p];if(typeof N=="string")h+=N;else if(N){var g=_t(de(N,t,r,a));c=me(c,g+p),h+=g}}if(h){var m=st(c>>>0);r.hasNameForId(this.componentId,m)||r.insertRules(this.componentId,m,a(h,".".concat(m),void 0,this.componentId)),o=ce(o,m)}}return o},e})(),ar=xe.createContext(void 0);ar.Consumer;var rt={};function En(e,t,r){var a=ft(e),o=e,s=!tt(e),i=t.attrs,d=i===void 0?Ue:i,c=t.componentId,h=c===void 0?(function(u,v){var f=typeof u!="string"?"sc":jt(u);rt[f]=(rt[f]||0)+1;var x="".concat(f,"-").concat(Ur(qe+f+rt[f]));return v?"".concat(v,"-").concat(x):x})(t.displayName,t.parentComponentId):c,p=t.displayName,N=p===void 0?(function(u){return tt(u)?"styled.".concat(u):"Styled(".concat(Kr(u),")")})(e):p,g=t.displayName&&t.componentId?"".concat(jt(t.displayName),"-").concat(t.componentId):t.componentId||h,m=a&&o.attrs?o.attrs.concat(d).filter(Boolean):d,b=t.shouldForwardProp;if(a&&o.shouldForwardProp){var S=o.shouldForwardProp;if(t.shouldForwardProp){var k=t.shouldForwardProp;b=function(u,v){return S(u,v)&&k(u,v)}}else b=S}var l=new kn(r,g,a?o.componentStyle:void 0);function w(u,v){return(function(f,x,X){var R=f.attrs,C=f.componentStyle,$=f.defaultProps,L=f.foldedComponentIds,O=f.styledComponentId,B=f.target,Y=xe.useContext(ar),q=$t(),J=f.shouldForwardProp||q.shouldForwardProp,Ne=Xr(x,Y,$)||ve,Q=(function(U,G,ne){for(var ee,ae=H(H({},G),{className:void 0,theme:ne}),ke=0;ke<U.length;ke+=1){var pe=we(ee=U[ke])?ee(ae):ee;for(var te in pe)ae[te]=te==="className"?ce(ae[te],pe[te]):te==="style"?H(H({},ae[te]),pe[te]):pe[te]}return G.className&&(ae.className=ce(ae.className,G.className)),ae})(R,x,Ne),ue=Q.as||B,E={};for(var A in Q)Q[A]===void 0||A[0]==="$"||A==="as"||A==="theme"&&Q.theme===Ne||(A==="forwardedAs"?E.as=Q.forwardedAs:J&&!J(A,ue)||(E[A]=Q[A]));var P=(function(U,G){var ne=$t(),ee=U.generateAndInjectStyles(G,ne.styleSheet,ne.stylis);return ee})(C,Q),z=ce(L,O);return P&&(z+=" "+P),Q.className&&(z+=" "+Q.className),E[tt(ue)&&!Gt.has(ue)?"class":"className"]=z,X&&(E.ref=X),y.createElement(ue,E)})(j,u,v)}w.displayName=N;var j=xe.forwardRef(w);return j.attrs=m,j.componentStyle=l,j.displayName=N,j.shouldForwardProp=b,j.foldedComponentIds=a?ce(o.foldedComponentIds,o.styledComponentId):"",j.styledComponentId=g,j.target=a?o.target:e,Object.defineProperty(j,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(u){this._foldedDefaultProps=a?(function(v){for(var f=[],x=1;x<arguments.length;x++)f[x-1]=arguments[x];for(var X=0,R=f;X<R.length;X++)it(v,R[X],!0);return v})({},o.defaultProps,u):u}}),ht(j,function(){return".".concat(j.styledComponentId)}),s&&Jt(j,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),j}function Rt(e,t){for(var r=[e[0]],a=0,o=t.length;a<o;a+=1)r.push(t[a],e[a+1]);return r}var Mt=function(e){return Object.assign(e,{isCss:!0})};function Sn(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(we(e)||Ce(e))return Mt(de(Rt(Ue,Be([e],t,!0))));var a=e;return t.length===0&&a.length===1&&typeof a[0]=="string"?de(a):Mt(de(Rt(a,t)))}function lt(e,t,r){if(r===void 0&&(r=ve),!t)throw Ae(1,t);var a=function(o){for(var s=[],i=1;i<arguments.length;i++)s[i-1]=arguments[i];return e(t,r,Sn.apply(void 0,Be([o],s,!1)))};return a.attrs=function(o){return lt(e,t,H(H({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},a.withConfig=function(o){return lt(e,t,H(H({},r),o))},a}var or=function(e){return lt(En,e)},mt=or;Gt.forEach(function(e){mt[e]=or(e)});const _n=()=>n.jsx(Cn,{children:n.jsxs("div",{className:"tooltip-container",children:[n.jsx("div",{className:"tooltip",children:n.jsxs("div",{className:"profile",children:[n.jsxs("div",{className:"user",children:[n.jsx("div",{className:"img",children:"WB"}),n.jsxs("div",{className:"details",children:[n.jsx("div",{className:"name",children:"Wishant Bhajan"}),n.jsx("div",{className:"username",children:"Co-founder TableTech"})]})]}),n.jsx("div",{className:"about",children:"220+ Connections • Open to Work"})]})}),n.jsx("div",{className:"text",children:n.jsxs("a",{href:"https://www.linkedin.com/in/wishant-bhajan-0a73832a4/",target:"_blank",rel:"noopener noreferrer",className:"icon",children:[n.jsxs("div",{className:"layer",children:[n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{className:"fab fa-linkedin",children:n.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})})]}),n.jsx("div",{className:"text",children:"LinkedIn"})]})})]})}),Cn=mt.div`
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
  }`,An=()=>n.jsx($n,{children:n.jsxs("div",{className:"tooltip-container",children:[n.jsx("div",{className:"tooltip",children:n.jsxs("div",{className:"profile",children:[n.jsxs("div",{className:"user",children:[n.jsx("div",{className:"img",children:"WB"}),n.jsxs("div",{className:"details",children:[n.jsx("div",{className:"name",children:"Wishant Bhajan"}),n.jsx("div",{className:"username",children:"@Wishant010"})]})]}),n.jsx("div",{className:"about",children:"20+ Repositories • Active Developer"})]})}),n.jsx("div",{className:"text",children:n.jsxs("a",{href:"https://github.com/Wishant010",target:"_blank",rel:"noopener noreferrer",className:"icon",children:[n.jsxs("div",{className:"layer",children:[n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{className:"fab fa-github",children:n.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})})]}),n.jsx("div",{className:"text",children:"GitHub"})]})})]})}),$n=mt.div`
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
  }`,In=()=>{const[e,t]=y.useState(!1);return y.useEffect(()=>{const r=()=>{const a=window.innerWidth<768||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);t(a)};return r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),e},Rn=({gridSize:e=10,cubeSize:t,maxAngle:r=45,radius:a=3,easing:o="power3.out",duration:s={enter:.3,leave:.6},cellGap:i,borderStyle:d="1px solid #fff",faceColor:c="#060010",shadow:h=!1,autoAnimate:p=!0,rippleOnClick:N=!0,rippleColor:g="#fff",rippleSpeed:m=2,visibleCells:b})=>{const S=In(),k=y.useRef(null),l=y.useRef(null),w=y.useRef(null),j=y.useRef(!1),u=y.useRef({x:0,y:0}),v=y.useRef({x:0,y:0}),f=y.useRef(null),x=typeof i=="number"?`${i}px`:i?.col!==void 0?`${i.col}px`:"5%",X=typeof i=="number"?`${i}px`:i?.row!==void 0?`${i.row}px`:"5%",R=s.enter,C=s.leave,$=y.useCallback((E,A)=>{k.current&&k.current.querySelectorAll(".cube").forEach(P=>{const z=+P.dataset.row,U=+P.dataset.col,G=Math.hypot(z-E,U-A);if(G<=a){const ee=(1-G/a)*r;M.to(P,{duration:R,ease:o,overwrite:!0,rotateX:-ee,rotateY:ee})}else M.to(P,{duration:C,ease:"power3.out",overwrite:!0,rotateX:0,rotateY:0})})},[a,r,R,C,o]),L=y.useCallback(E=>{j.current=!0,w.current&&clearTimeout(w.current);const A=k.current.getBoundingClientRect(),P=A.width/e,z=A.height/e,U=(E.clientX-A.left)/P,G=(E.clientY-A.top)/z;l.current&&cancelAnimationFrame(l.current),l.current=requestAnimationFrame(()=>$(G,U)),w.current=setTimeout(()=>{j.current=!1},3e3)},[e,$]),O=y.useCallback(()=>{k.current&&k.current.querySelectorAll(".cube").forEach(E=>M.to(E,{duration:C,rotateX:0,rotateY:0,ease:"power3.out"}))},[C]),B=y.useCallback(E=>{E.preventDefault(),j.current=!0,w.current&&clearTimeout(w.current);const A=k.current.getBoundingClientRect(),P=A.width/e,z=A.height/e,U=E.touches[0],G=(U.clientX-A.left)/P,ne=(U.clientY-A.top)/z;l.current&&cancelAnimationFrame(l.current),l.current=requestAnimationFrame(()=>$(ne,G)),w.current=setTimeout(()=>{j.current=!1},3e3)},[e,$]),Y=y.useCallback(()=>{j.current=!0},[]),q=y.useCallback(()=>{k.current&&O()},[O]),J=y.useCallback(E=>{if(!N||!k.current)return;const A=k.current.getBoundingClientRect(),P=A.width/e,z=A.height/e,U=E.clientX||E.touches&&E.touches[0].clientX,G=E.clientY||E.touches&&E.touches[0].clientY,ne=Math.floor((U-A.left)/P),ee=Math.floor((G-A.top)/z),ae=.15,ke=.3,pe=.6,te=ae/m,Ze=ke/m,cr=pe/m,Ee={};k.current.querySelectorAll(".cube").forEach(se=>{const fe=+se.dataset.row,$e=+se.dataset.col,Je=Math.hypot(fe-ee,$e-ne),Qe=Math.round(Je);Ee[Qe]||(Ee[Qe]=[]),Ee[Qe].push(se)}),Object.keys(Ee).map(Number).sort((se,fe)=>se-fe).forEach(se=>{const fe=se*te,$e=Ee[se].flatMap(Je=>Array.from(Je.querySelectorAll(".cube-face")));M.to($e,{backgroundColor:g,duration:Ze,delay:fe,ease:"power3.out"}),M.to($e,{backgroundColor:c,duration:Ze,delay:fe+Ze+cr,ease:"power3.out"})})},[N,e,c,g,m]);y.useEffect(()=>{if(!p||!k.current||S)return;u.current={x:Math.random()*e,y:Math.random()*e},v.current={x:Math.random()*e,y:Math.random()*e};const E=.02,A=()=>{if(!j.current){const P=u.current,z=v.current;P.x+=(z.x-P.x)*E,P.y+=(z.y-P.y)*E,$(P.y,P.x),Math.hypot(P.x-z.x,P.y-z.y)<.1&&(v.current={x:Math.random()*e,y:Math.random()*e})}f.current=requestAnimationFrame(A)};return f.current=requestAnimationFrame(A),()=>{f.current!=null&&cancelAnimationFrame(f.current)}},[p,e,$,S]),y.useEffect(()=>{const E=k.current;if(E&&!S)return E.addEventListener("pointermove",L),E.addEventListener("pointerleave",O),E.addEventListener("click",J),E.addEventListener("touchmove",B,{passive:!1}),E.addEventListener("touchstart",Y,{passive:!0}),E.addEventListener("touchend",q,{passive:!0}),()=>{E.removeEventListener("pointermove",L),E.removeEventListener("pointerleave",O),E.removeEventListener("click",J),E.removeEventListener("touchmove",B),E.removeEventListener("touchstart",Y),E.removeEventListener("touchend",q),l.current!=null&&cancelAnimationFrame(l.current),w.current&&clearTimeout(w.current)}},[L,O,J,B,Y,q,S]);const Ne=Array.from({length:e}),Q={style:{"--cube-face-border":d,"--cube-face-bg":c,"--cube-face-shadow":h===!0?"0 0 6px rgba(0,0,0,.5)":h||"none","--grid-size":e,"--cube-size":t?`${t}px`:"1fr","--column-gap":x,"--row-gap":X,"--total-width":t?`${e*t}px`:"auto","--total-height":t?`${e*t}px`:"auto"},"data-has-cube-size":t?"true":"false"},ue=(E,A)=>!b||b.length===0?!0:b.some(P=>P.row===E&&P.col===A);return n.jsx("div",{className:"cubes-wrapper",...Q,children:n.jsx("div",{ref:k,className:"cubes-scene",children:Ne.map((E,A)=>Ne.map((P,z)=>ue(A,z)?n.jsxs("div",{className:"cube","data-row":A,"data-col":z,children:[n.jsx("span",{className:"cube-pointer-area"}),n.jsx("div",{className:"cube-face cube-face-top"}),n.jsx("div",{className:"cube-face cube-face-bottom"}),n.jsx("div",{className:"cube-face cube-face-left"}),n.jsx("div",{className:"cube-face cube-face-right"}),n.jsx("div",{className:"cube-face cube-face-front"}),n.jsx("div",{className:"cube-face cube-face-back"})]},`${A}-${z}`):n.jsx("div",{className:"invisible"},`${A}-${z}`)))})})},Mn=()=>{const[e,t]=y.useState(!1);return y.useEffect(()=>{const r=()=>{t(window.innerWidth<768||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))};return r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),e},Pn=({isVisible:e=!0})=>{const{t}=Pt(),r=Mn();return n.jsxs("div",{className:"min-h-screen max-sm:min-h-fit relative overflow-hidden page-content scroll-snap-section",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/80 to-purple-950/60"}),!r&&n.jsxs(n.Fragment,{children:[n.jsx(T.div,{className:"orb orb-emerald absolute top-1/4 -left-20 w-96 h-96",animate:e?{x:[0,100,0],y:[0,50,0],scale:[1,1.2,1]}:{},transition:{duration:20,repeat:Number.POSITIVE_INFINITY,ease:"easeInOut"}}),n.jsx(T.div,{className:"orb orb-teal absolute top-1/2 right-1/4 w-[500px] h-[500px]",animate:e?{x:[0,-80,0],y:[0,-40,0],scale:[1,1.3,1]}:{},transition:{duration:25,repeat:Number.POSITIVE_INFINITY,ease:"easeInOut"}}),n.jsx(T.div,{className:"orb orb-purple absolute bottom-1/4 -right-20 w-96 h-96",animate:e?{x:[0,-50,0],y:[0,-30,0],scale:[1.1,1.3,1.1]}:{},transition:{duration:30,repeat:Number.POSITIVE_INFINITY,ease:"easeInOut"}}),n.jsx(T.div,{className:"orb orb-cyan absolute bottom-1/3 left-1/3 w-[400px] h-[400px]",animate:e?{x:[0,60,0],y:[0,-60,0],scale:[1,1.15,1]}:{},transition:{duration:22,repeat:Number.POSITIVE_INFINITY,ease:"easeInOut"}})]}),r&&n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-purple-900/20 pointer-events-none"}),n.jsx("div",{className:"relative min-h-screen flex items-center z-30 max-sm:items-start",children:n.jsx("div",{className:"max-w-7xl mx-auto px-6 pt-24 pb-32 w-full max-sm:pt-16 max-sm:pb-8",children:n.jsxs("div",{className:"grid lg:grid-cols-2 gap-12 lg:gap-20 items-center",children:[n.jsxs(T.div,{className:"space-y-8",initial:{opacity:0,x:-50},animate:{opacity:e?1:0,x:e?0:-50},transition:{duration:.8,delay:.5},children:[n.jsxs("div",{className:"space-y-2",children:[n.jsx(T.div,{initial:{opacity:0,y:20},animate:{opacity:e?1:0,y:e?0:20},transition:{delay:.6,duration:.6},children:n.jsx(wr,{radius:150,duration:1.5,speed:.6,scrambleChars:"!@#$%^&*()_+-={}[]|:;<>?,./~",className:"text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight whitespace-nowrap",style:{margin:0,maxWidth:"100%"},children:t("hero.welcome")})}),n.jsx(T.h1,{className:"text-5xl md:text-6xl lg:text-7xl font-bold leading-tight whitespace-nowrap",initial:{opacity:0,filter:"blur(10px)",y:20},animate:{opacity:e?1:0,filter:e?"blur(0px)":"blur(10px)",y:e?0:20},transition:{delay:.8,duration:1,ease:[.23,1,.32,1]},children:n.jsx("span",{className:"bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent whitespace-nowrap",children:t("hero.portfolio")})})]}),n.jsx(T.div,{className:"flex flex-wrap gap-3",initial:{opacity:0,y:20},animate:{opacity:e?1:0,y:e?0:20},transition:{delay:.8,duration:.6},children:[{icon:n.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),text:t("hero.role1"),color:"from-blue-500 to-cyan-500"},{icon:n.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"})}),text:t("hero.role2"),color:"from-purple-500 to-pink-500"},{icon:n.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})}),text:t("hero.role3"),color:"from-emerald-500 to-teal-500"}].map((a,o)=>n.jsxs(T.div,{className:`px-5 py-3 rounded-xl bg-gradient-to-r ${a.color} bg-opacity-10 backdrop-blur-sm border border-white/10 flex items-center gap-3`,initial:{opacity:0,scale:.8},animate:{opacity:e?1:0,scale:e?1:.8},transition:{delay:.9+o*.1,duration:.4},whileHover:{scale:1.05,borderColor:"rgba(255, 255, 255, 0.3)"},children:[n.jsx("span",{className:"text-white",children:a.icon}),n.jsx("span",{className:"text-white text-base font-semibold",children:a.text})]},a.text))}),n.jsxs(T.div,{className:"space-y-3",initial:{opacity:0,y:20},animate:{opacity:e?1:0,y:e?0:20},transition:{delay:1.1,duration:.6},children:[n.jsx(yt,{text:`${t("hero.description1")} ${t("hero.description1.highlight")}. ${t("hero.description2")} ${t("hero.description2.highlight")}.`,delay:60,animateBy:"words",direction:"top",className:"text-slate-300 text-lg md:text-xl leading-relaxed",stepDuration:.35}),n.jsx(yt,{text:t("hero.description3"),delay:70,animateBy:"words",direction:"top",className:"text-slate-400 text-base md:text-lg",stepDuration:.35})]}),n.jsx(T.div,{className:"flex flex-wrap items-center gap-4",initial:{opacity:0,y:20},animate:{opacity:e?1:0,y:e?0:20},transition:{delay:1.3,duration:.6},children:n.jsxs("div",{className:"inline-flex items-center gap-4 px-6 py-4 rounded-xl bg-slate-800/90 backdrop-blur-md border border-emerald-500/50 shadow-xl",children:[n.jsx("span",{className:"text-white text-base font-bold",children:t("hero.follow")}),n.jsx("div",{className:"h-6 w-px bg-emerald-500/50"}),n.jsxs("div",{className:"flex gap-4 items-center",children:[n.jsx(T.div,{initial:{opacity:0,scale:.8},animate:{opacity:e?1:0,scale:e?1:.8},transition:{delay:1.5,duration:.4},children:n.jsx(_n,{})}),n.jsx(T.div,{initial:{opacity:0,scale:.8},animate:{opacity:e?1:0,scale:e?1:.8},transition:{delay:1.6,duration:.4},children:n.jsx(An,{})}),n.jsx("div",{className:"h-6 w-px bg-emerald-500/50"}),n.jsx(T.a,{href:"/Wishant%20Bhajan.pdf",download:"Wishant_Bhajan_CV.pdf",className:"inline-flex items-center justify-center w-[45px] h-[45px] rounded-md bg-slate-800/80 border border-white/30 text-emerald-500 font-bold text-sm cursor-pointer hover:border-emerald-500/50 hover:shadow-[0_0_10px_rgba(16,185,129,0.3)] hover:bg-emerald-500/10 transition-all duration-300",initial:{opacity:0,scale:.8},animate:{opacity:e?1:0,scale:e?1:.8},transition:{delay:1.7,duration:.4},whileTap:{scale:.95},title:"Download CV",children:n.jsx("span",{children:"CV"})})]})]})})]}),n.jsx(T.div,{className:"relative lg:flex items-center justify-center hidden",initial:{opacity:0,x:50},animate:{opacity:e?1:0,x:e?0:50},transition:{duration:.8,delay:.7},children:n.jsx("div",{className:"cube-animation",children:n.jsx(Rn,{gridSize:16,cubeSize:40,maxAngle:45,radius:6,duration:{enter:.3,leave:.6},cellGap:6,borderStyle:"1px solid rgba(100, 116, 139, 0.3)",faceColor:"rgba(30, 41, 59, 0.6)",shadow:!1,autoAnimate:!0,rippleOnClick:!0,rippleColor:"rgba(71, 85, 105, 0.5)",rippleSpeed:2.5,visibleCells:[{row:1,col:4},{row:2,col:4},{row:3,col:4},{row:4,col:4},{row:5,col:4},{row:6,col:4},{row:7,col:4},{row:8,col:4},{row:9,col:5},{row:8,col:6},{row:7,col:7},{row:8,col:8},{row:9,col:9},{row:8,col:10},{row:7,col:10},{row:6,col:10},{row:5,col:10},{row:4,col:10},{row:3,col:10},{row:2,col:10},{row:1,col:10},{row:1,col:13},{row:2,col:13},{row:3,col:13},{row:4,col:13},{row:5,col:13},{row:6,col:13},{row:7,col:13},{row:8,col:13},{row:9,col:13},{row:1,col:14},{row:1,col:15},{row:2,col:15},{row:3,col:15},{row:4,col:14},{row:4,col:15},{row:5,col:14},{row:6,col:14},{row:6,col:15},{row:7,col:15},{row:8,col:15},{row:9,col:14},{row:9,col:15}]})})})]})})}),n.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-[400px] pointer-events-none z-20",children:n.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"})}),n.jsx("style",{children:`
        @keyframes cubeColorPulse {
          0%, 100% {
            filter: hue-rotate(0deg) brightness(1);
          }
          50% {
            filter: hue-rotate(60deg) brightness(1.3);
          }
        }
      `})]})},sr=12,ir=300,Ke="0, 245, 255",Tn=768,Ln=(e,t,r=Ke)=>{const a=document.createElement("div");return a.className="particle",a.style.cssText=`
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${r}, 1);
    box-shadow: 0 0 6px rgba(${r}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${e}px;
    top: ${t}px;
  `,a},On=e=>({proximity:e*.5,fadeDistance:e*.75}),Dn=(e,t,r,a,o)=>{const s=e.getBoundingClientRect(),i=(t-s.left)/s.width*100,d=(r-s.top)/s.height*100;e.style.setProperty("--glow-x",`${i}%`),e.style.setProperty("--glow-y",`${d}%`),e.style.setProperty("--glow-intensity",a.toString()),e.style.setProperty("--glow-radius",`${o}px`)},Bn=({children:e,className:t="",disableAnimations:r=!1,style:a,particleCount:o=sr,glowColor:s=Ke,enableTilt:i=!0,clickEffect:d=!1,enableMagnetism:c=!1,onClick:h})=>{const p=y.useRef(null),N=y.useRef([]),g=y.useRef([]),m=y.useRef(!1),b=y.useRef([]),S=y.useRef(!1),k=y.useRef(null),l=y.useCallback(()=>{if(S.current||!p.current)return;const{width:u,height:v}=p.current.getBoundingClientRect();b.current=Array.from({length:o},()=>Ln(Math.random()*u,Math.random()*v,s)),S.current=!0},[o,s]),w=y.useCallback(()=>{g.current.forEach(clearTimeout),g.current=[],k.current?.kill(),N.current.forEach(u=>{M.to(u,{scale:0,opacity:0,duration:.3,ease:"back.in(1.7)",onComplete:()=>{u.parentNode?.removeChild(u)}})}),N.current=[]},[]),j=y.useCallback(()=>{!p.current||!m.current||(S.current||l(),b.current.forEach((u,v)=>{const f=setTimeout(()=>{if(!m.current||!p.current)return;const x=u.cloneNode(!0);p.current.appendChild(x),N.current.push(x),M.fromTo(x,{scale:0,opacity:0},{scale:1,opacity:1,duration:.3,ease:"back.out(1.7)"}),M.to(x,{x:(Math.random()-.5)*100,y:(Math.random()-.5)*100,rotation:Math.random()*360,duration:2+Math.random()*2,ease:"none",repeat:-1,yoyo:!0}),M.to(x,{opacity:.3,duration:1.5,ease:"power2.inOut",repeat:-1,yoyo:!0})},v*100);g.current.push(f)}))},[l]);return y.useEffect(()=>{if(r||!p.current)return;const u=p.current,v=()=>{m.current=!0,j(),i&&M.to(u,{rotateX:5,rotateY:5,duration:.3,ease:"power2.out",transformPerspective:1e3})},f=()=>{m.current=!1,w(),i&&M.to(u,{rotateX:0,rotateY:0,duration:.3,ease:"power2.out"}),c&&M.to(u,{x:0,y:0,duration:.3,ease:"power2.out"})},x=R=>{if(!i&&!c)return;const C=u.getBoundingClientRect(),$=R.clientX-C.left,L=R.clientY-C.top,O=C.width/2,B=C.height/2;if(i){const Y=(L-B)/B*-10,q=($-O)/O*10;M.to(u,{rotateX:Y,rotateY:q,duration:.1,ease:"power2.out",transformPerspective:1e3})}if(c){const Y=($-O)*.05,q=(L-B)*.05;k.current=M.to(u,{x:Y,y:q,duration:.3,ease:"power2.out"})}},X=R=>{if(!d)return;const C=u.getBoundingClientRect(),$=R.clientX-C.left,L=R.clientY-C.top,O=Math.max(Math.hypot($,L),Math.hypot($-C.width,L),Math.hypot($,L-C.height),Math.hypot($-C.width,L-C.height)),B=document.createElement("div");B.style.cssText=`
        position: absolute;
        width: ${O*2}px;
        height: ${O*2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${s}, 0.4) 0%, rgba(${s}, 0.2) 30%, transparent 70%);
        left: ${$-O}px;
        top: ${L-O}px;
        pointer-events: none;
        z-index: 1000;
      `,u.appendChild(B),M.fromTo(B,{scale:0,opacity:1},{scale:1,opacity:0,duration:.8,ease:"power2.out",onComplete:()=>B.remove()})};return u.addEventListener("mouseenter",v),u.addEventListener("mouseleave",f),u.addEventListener("mousemove",x),u.addEventListener("click",X),h&&u.addEventListener("click",h),()=>{m.current=!1,u.removeEventListener("mouseenter",v),u.removeEventListener("mouseleave",f),u.removeEventListener("mousemove",x),u.removeEventListener("click",X),h&&u.removeEventListener("click",h),w()}},[j,w,r,i,c,d,s,h]),n.jsx("div",{ref:p,className:`${t} relative overflow-hidden`,style:{...a,position:"relative",overflow:"hidden"},children:e})},zn=({gridRef:e,disableAnimations:t=!1,enabled:r=!0,spotlightRadius:a=ir,glowColor:o=Ke})=>{const s=y.useRef(null),i=y.useRef(!1);return y.useEffect(()=>{if(t||!e?.current||!r)return;const d=document.createElement("div");d.className="global-spotlight",d.style.cssText=`
      position: fixed;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${o}, 0.15) 0%,
        rgba(${o}, 0.08) 15%,
        rgba(${o}, 0.04) 25%,
        rgba(${o}, 0.02) 40%,
        rgba(${o}, 0.01) 65%,
        transparent 70%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
    `,document.body.appendChild(d),s.current=d;const c=p=>{if(!s.current||!e.current)return;const g=e.current.closest(".bento-section")?.getBoundingClientRect(),m=g&&p.clientX>=g.left&&p.clientX<=g.right&&p.clientY>=g.top&&p.clientY<=g.bottom;i.current=m||!1;const b=e.current.querySelectorAll(".card");if(!m){M.to(s.current,{opacity:0,duration:.3,ease:"power2.out"}),b.forEach(j=>{j.style.setProperty("--glow-intensity","0")});return}const{proximity:S,fadeDistance:k}=On(a);let l=1/0;b.forEach(j=>{const u=j,v=u.getBoundingClientRect(),f=v.left+v.width/2,x=v.top+v.height/2,X=Math.hypot(p.clientX-f,p.clientY-x)-Math.max(v.width,v.height)/2,R=Math.max(0,X);l=Math.min(l,R);let C=0;R<=S?C=1:R<=k&&(C=(k-R)/(k-S)),Dn(u,p.clientX,p.clientY,C,a)}),M.to(s.current,{left:p.clientX,top:p.clientY,duration:.1,ease:"power2.out"});const w=l<=S?.8:l<=k?(k-l)/(k-S)*.8:0;M.to(s.current,{opacity:w,duration:w>0?.2:.5,ease:"power2.out"})},h=()=>{i.current=!1,e.current?.querySelectorAll(".card").forEach(p=>{p.style.setProperty("--glow-intensity","0")}),s.current&&M.to(s.current,{opacity:0,duration:.3,ease:"power2.out"})};return document.addEventListener("mousemove",c),document.addEventListener("mouseleave",h),()=>{document.removeEventListener("mousemove",c),document.removeEventListener("mouseleave",h),s.current?.parentNode?.removeChild(s.current)}},[e,t,r,a,o]),null},Fn=({children:e,gridRef:t})=>n.jsx("div",{className:"bento-section w-full",style:{fontSize:"clamp(1rem, 0.9rem + 0.5vw, 1.5rem)"},ref:t,children:e}),Yn=()=>{const[e,t]=y.useState(!1);return y.useEffect(()=>{const r=()=>t(window.innerWidth<=Tn);return r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),e},Wn=({textAutoHide:e=!0,enableStars:t=!0,enableSpotlight:r=!0,enableBorderGlow:a=!0,disableAnimations:o=!1,spotlightRadius:s=ir,particleCount:i=sr,enableTilt:d=!1,glowColor:c=Ke,clickEffect:h=!0,enableMagnetism:p=!0,cards:N})=>{const g=y.useRef(null),m=Yn(),b=o||m,k=N||[{color:"#0A0E27",title:"CyberGuard Pro",description:"Advanced network security monitoring system with real-time threat detection",label:"Live Project",featured:!0,image:"/api/placeholder/600/400",span:{cols:2,rows:2}},{color:"#0A0E27",title:"Data Vault",description:"Encrypted cloud storage solution with zero-knowledge architecture",label:"In Development",image:"/api/placeholder/400/300"},{color:"#0A0E27",title:"AI Assistant",description:"Smart automation platform powered by machine learning",label:"Featured",image:"/api/placeholder/400/300"},{color:"#0B1029",title:"Blockchain Wallet",description:"Secure crypto wallet with multi-chain support",label:"Beta",span:{cols:2,rows:1},image:"/api/placeholder/600/300"},{color:"#0C132B",title:"Task Manager",description:"Productivity app with AI",label:"Live",image:"/api/placeholder/400/300"},{color:"#0A0E27",title:"Weather Dashboard",description:"Real-time weather analytics",label:"Live",image:"/api/placeholder/400/300"}];return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
          .bento-section {
            --glow-x: 50%;
            --glow-y: 50%;
            --glow-intensity: 0;
            --glow-radius: 200px;
            --glow-color: ${c};
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
                rgba(${c}, calc(var(--glow-intensity) * 0.8)) 0%,
                rgba(${c}, calc(var(--glow-intensity) * 0.4)) 30%,
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
            box-shadow: 0 4px 20px rgba(0, 245, 255, 0.3), 0 0 30px rgba(${c}, 0.2);
            transform: translateY(-4px);
          }

          .particle::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: rgba(${c}, 0.2);
            border-radius: 50%;
            z-index: -1;
          }

          .particle-container:hover {
            box-shadow: 0 4px 20px rgba(0, 245, 255, 0.2), 0 0 30px rgba(${c}, 0.2);
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
        `}),r&&n.jsx(zn,{gridRef:g,disableAnimations:b,enabled:r,spotlightRadius:s,glowColor:c}),n.jsx(Fn,{gridRef:g,children:n.jsx("div",{className:"card-responsive grid",children:k.map((l,w)=>{const j=[l.span?.cols===2?"card-span-2-cols":"",l.span?.rows===2?"card-span-2-rows":""].filter(Boolean).join(" "),u=`card relative min-h-[200px] w-full rounded-[20px] border border-solid font-light overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,245,255,0.15)] ${a?"card--border-glow":""} ${j}`,v={backgroundColor:l.color||"var(--background-dark)",borderColor:"var(--border-color)",color:"var(--white)","--glow-x":"50%","--glow-y":"50%","--glow-intensity":"0","--glow-radius":"200px"};return t?n.jsxs(Bn,{className:u,style:v,disableAnimations:b,particleCount:i,glowColor:c,enableTilt:d,clickEffect:h,enableMagnetism:p,onClick:l.onClick,children:[l.image&&n.jsx("img",{src:l.image,alt:l.title,loading:"lazy",decoding:"async",className:"card-image"}),n.jsxs("div",{className:"card-content-overlay",children:[n.jsx("div",{className:"card__header flex justify-between gap-3 mb-2",children:n.jsx("span",{className:"card__label text-xs font-semibold text-cyan-400 uppercase tracking-wider",children:l.label})}),n.jsx("h3",{className:`card__title font-bold ${l.featured?"text-2xl":"text-xl"} mb-2 text-white ${e?"text-clamp-1":""}`,children:l.title}),n.jsx("p",{className:`card__description text-sm leading-6 text-gray-300 ${e?"text-clamp-2":""}`,children:l.description})]})]},w):n.jsxs("div",{className:u,style:v,ref:f=>{if(!f)return;const x=C=>{if(b)return;const $=f.getBoundingClientRect(),L=C.clientX-$.left,O=C.clientY-$.top,B=$.width/2,Y=$.height/2;if(d){const q=(O-Y)/Y*-10,J=(L-B)/B*10;M.to(f,{rotateX:q,rotateY:J,duration:.1,ease:"power2.out",transformPerspective:1e3})}if(p){const q=(L-B)*.05,J=(O-Y)*.05;M.to(f,{x:q,y:J,duration:.3,ease:"power2.out"})}},X=()=>{b||(d&&M.to(f,{rotateX:0,rotateY:0,duration:.3,ease:"power2.out"}),p&&M.to(f,{x:0,y:0,duration:.3,ease:"power2.out"}))},R=C=>{if(!h||b)return;const $=f.getBoundingClientRect(),L=C.clientX-$.left,O=C.clientY-$.top,B=Math.max(Math.hypot(L,O),Math.hypot(L-$.width,O),Math.hypot(L,O-$.height),Math.hypot(L-$.width,O-$.height)),Y=document.createElement("div");Y.style.cssText=`
                      position: absolute;
                      width: ${B*2}px;
                      height: ${B*2}px;
                      border-radius: 50%;
                      background: radial-gradient(circle, rgba(${c}, 0.4) 0%, rgba(${c}, 0.2) 30%, transparent 70%);
                      left: ${L-B}px;
                      top: ${O-B}px;
                      pointer-events: none;
                      z-index: 1000;
                    `,f.appendChild(Y),M.fromTo(Y,{scale:0,opacity:1},{scale:1,opacity:0,duration:.8,ease:"power2.out",onComplete:()=>Y.remove()})};f.addEventListener("mousemove",x),f.addEventListener("mouseleave",X),f.addEventListener("click",R),l.onClick&&f.addEventListener("click",l.onClick)},children:[l.image&&n.jsx("img",{src:l.image,alt:l.title,loading:"lazy",decoding:"async",className:"card-image"}),n.jsxs("div",{className:"card-content-overlay",children:[n.jsx("div",{className:"card__header flex justify-between gap-3 mb-2",children:n.jsx("span",{className:"card__label text-xs font-semibold text-cyan-400 uppercase tracking-wider",children:l.label})}),n.jsx("h3",{className:`card__title font-bold ${l.featured?"text-2xl":"text-xl"} mb-2 text-white ${e?"text-clamp-1":""}`,children:l.title}),n.jsx("p",{className:`card__description text-sm leading-6 text-gray-300 ${e?"text-clamp-2":""}`,children:l.description})]})]},w)})})})]})},Xn=()=>{const e=fr(),t=y.useRef(null),r=yr(t,{once:!1,amount:.2}),a=br(),{t:o}=Pt();y.useEffect(()=>{r&&a.start("visible")},[r,a]);const s=[{color:"#0A0E27",title:"WishShield",description:o("featured.wishshield.desc"),label:o("featured.label.cybersecurity"),featured:!0,image:"/projects/security/futuristic_cybersecurity_shield_icon_with_hexagonal_shape.jpeg",span:{cols:2,rows:2}},{color:"#0B1029",title:"TableTech",description:o("featured.tabletech.desc"),label:o("featured.label.live"),image:"/projects/business/modern_restaurant_technology_visualization_with_prominent_tabletech.jpeg"},{color:"#0C132B",title:"Calendify",description:o("featured.calendify.desc"),label:o("featured.label.personal"),image:"/projects/business/professional_office_management_dashboard_clean_calendar_interface.jpeg"},{color:"#0D152E",title:"WishGuard",description:o("featured.wishguard.desc"),label:o("featured.label.cybersecurity"),span:{cols:2,rows:1},image:"/projects/security/fix_the_letter_b__so_that.png"},{color:"#0E1831",title:"Crypto Bot",description:o("featured.cryptobot.desc"),label:o("featured.label.comingSoon"),image:"/projects/business/futuristic_cryptocurrency_trading_bot_visualization_wb_logo.jpg"},{color:"#0A0E27",title:"Urban Mobility",description:o("featured.urbanmobility.desc"),label:o("featured.label.personal"),image:"/projects/utilities/professional_terminal_interface_with_urban_mobility_text_v2.png"}],i=[{name:o("featured.skill.ai"),level:85,category:o("featured.category.ai"),icon:n.jsx(xt,{}),color:"from-purple-400 to-pink-500",note:o("featured.skill.ai.note")},{name:o("featured.skill.react"),level:80,category:o("featured.category.frontend"),icon:n.jsx(Ie,{}),color:"from-cyan-400 to-blue-500"},{name:o("featured.skill.typescript"),level:80,category:o("featured.category.frontend"),icon:n.jsx(Ie,{}),color:"from-blue-400 to-purple-500"},{name:o("featured.skill.csharp"),level:75,category:o("featured.category.backend"),icon:n.jsx(Ie,{}),color:"from-purple-400 to-indigo-500"},{name:o("featured.skill.nodejs"),level:75,category:o("featured.category.backend"),icon:n.jsx(gt,{}),color:"from-green-400 to-emerald-500"},{name:o("featured.skill.python"),level:70,category:o("featured.category.backend"),icon:n.jsx(gt,{}),color:"from-yellow-400 to-orange-500"},{name:o("featured.skill.cybersecurity"),level:40,category:o("featured.category.security"),icon:n.jsx(lr,{}),color:"from-red-400 to-pink-500",note:o("featured.skill.cybersecurity.note")},{name:o("featured.skill.databases"),level:70,category:o("featured.category.database"),icon:n.jsx(dr,{}),color:"from-indigo-400 to-blue-500"},{name:o("featured.skill.docker"),level:65,category:o("featured.category.devops"),icon:n.jsx(ur,{}),color:"from-purple-400 to-pink-500"},{name:o("featured.skill.ml"),level:70,category:o("featured.category.ai"),icon:n.jsx(xt,{}),color:"from-pink-400 to-rose-500"},{name:o("featured.skill.other"),level:70,category:o("featured.category.tools"),icon:n.jsx(Ie,{}),color:"from-teal-400 to-cyan-500"}],d=[...new Set(i.map(c=>c.category))];return n.jsxs("section",{ref:t,className:"featured-projects-skills-section relative min-h-screen pt-20 pb-24 px-6 lg:px-12 overflow-hidden",style:{background:`linear-gradient(180deg,
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
        )`},children:[n.jsxs("div",{className:"absolute inset-0",children:[n.jsx("div",{className:"absolute inset-0 opacity-5",style:{backgroundImage:"linear-gradient(rgba(0, 245, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 245, 255, 0.1) 1px, transparent 1px)",backgroundSize:"50px 50px"}}),n.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-1/2 hidden lg:block",style:{background:"linear-gradient(90deg, rgba(0, 184, 212, 0.02) 0%, transparent 100%)"}}),n.jsx("div",{className:"absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block",style:{background:"linear-gradient(270deg, rgba(0, 255, 185, 0.02) 0%, transparent 100%)"}}),n.jsxs("div",{className:"absolute left-1/2 top-[5%] bottom-[5%] w-px transform -translate-x-1/2 z-10 hidden lg:block",children:[n.jsx("div",{className:"absolute inset-0 w-px bg-gradient-to-b from-transparent via-cyan-500/40 to-transparent"}),n.jsx("div",{className:"absolute inset-0 w-[2px] bg-gradient-to-b from-transparent via-cyan-400/25 to-transparent"}),n.jsx("div",{className:"absolute inset-0 w-[4px] bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent blur-sm"}),n.jsx("div",{className:"absolute inset-0 w-[8px] bg-gradient-to-b from-transparent via-cyan-300/15 to-transparent blur-lg"}),n.jsx("div",{className:"absolute top-0 left-1/2 transform -translate-x-1/2",children:n.jsx("div",{className:"w-3 h-3 bg-cyan-500/60 rounded-full blur-sm"})}),n.jsx("div",{className:"absolute bottom-0 left-1/2 transform -translate-x-1/2",children:n.jsx("div",{className:"w-3 h-3 bg-cyan-500/60 rounded-full blur-sm"})})]})]}),n.jsx("div",{className:"container mx-auto max-w-[1600px] relative z-10",children:n.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16",children:[n.jsxs(T.div,{initial:{opacity:0,x:-50},animate:{opacity:r?1:0,x:r?0:-50},transition:{duration:.6},className:"space-y-8",children:[n.jsxs("div",{className:"text-left",children:[n.jsx("h2",{className:"text-4xl lg:text-5xl font-bold mb-4 text-[#00F5FF]",style:{textShadow:"0 0 30px rgba(0, 245, 255, 0.5), 0 0 10px rgba(0, 184, 212, 0.7)"},children:o("featured.projects.title")}),n.jsx("p",{className:"text-lg text-gray-400",children:o("featured.projects.description")})]}),n.jsx("div",{className:"w-full",children:n.jsx(Wn,{cards:s,textAutoHide:!1,enableStars:!0,enableSpotlight:!0,enableBorderGlow:!0,enableTilt:!0,clickEffect:!0,enableMagnetism:!0,glowColor:"0, 245, 255"})}),n.jsx(T.div,{initial:{opacity:0,y:20},animate:{opacity:r?1:0,y:r?0:20},transition:{delay:.4,duration:.5},children:n.jsxs("button",{type:"button",onClick:()=>e("/portfolio"),className:"group inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold bg-[linear-gradient(135deg,rgba(0,245,255,0.1)_0%,rgba(0,184,212,0.1)_100%)] border-2 border-[rgba(0,245,255,0.3)] text-[#00F5FF] transition-all duration-300 hover:-translate-y-0.5",style:{boxShadow:"0 0 20px rgba(0, 245, 255, 0.2)"},onMouseEnter:c=>{c.currentTarget.style.boxShadow="0 0 30px rgba(0, 245, 255, 0.4)"},onMouseLeave:c=>{c.currentTarget.style.boxShadow="0 0 20px rgba(0, 245, 255, 0.2)"},children:[o("featured.viewAllProjects"),n.jsx(pr,{className:"w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"})]})})]}),n.jsxs(T.div,{initial:{opacity:0,x:50},animate:{opacity:r?1:0,x:r?0:50},transition:{duration:.6},className:"space-y-8 lg:pl-12",children:[n.jsxs("div",{className:"text-left",children:[n.jsx("h2",{className:"text-4xl lg:text-5xl font-bold mb-4 text-[#00FFB9]",style:{textShadow:"0 0 30px rgba(0, 255, 185, 0.5), 0 0 10px rgba(0, 235, 175, 0.7)"},children:o("featured.skills.title")}),n.jsx("p",{className:"text-lg text-gray-400",children:o("featured.skills.description")})]}),n.jsxs("div",{className:"space-y-6",children:[n.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:d.map((c,h)=>n.jsx(T.span,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:h*.1},className:"px-3 py-1 text-xs font-semibold rounded-full bg-slate-800/50 text-cyan-400 border border-cyan-500/20",children:c},c))}),n.jsx("div",{className:"space-y-4",children:i.map((c,h)=>n.jsxs(T.div,{initial:{opacity:0,x:30},animate:{opacity:r?1:0,x:r?0:30},transition:{delay:.1*h,duration:.5},className:"group",children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-cyan-400",children:c.icon}),n.jsx("span",{className:"text-white font-medium",children:c.name})]}),n.jsxs("span",{className:"text-cyan-400 font-bold",children:[c.level,"%"]})]}),n.jsx("div",{className:"relative h-2 bg-slate-800/50 rounded-full overflow-hidden",children:n.jsx(T.div,{initial:{width:0},animate:{width:r?`${c.level}%`:0},transition:{delay:.2+h*.1,duration:1,ease:"easeOut"},className:`absolute h-full bg-gradient-to-r ${c.color} rounded-full`,children:n.jsx("div",{className:"absolute inset-0 opacity-50 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)] animate-shimmer"})})}),c.note&&n.jsx("p",{className:"text-xs text-gray-400 italic mt-1 ml-6",children:c.note})]},c.name))}),n.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-8",children:[n.jsxs(T.div,{initial:{opacity:0,y:20},animate:{opacity:r?1:0,y:r?0:20},transition:{delay:.6},className:"text-center p-4 bg-slate-800/30 rounded-lg border border-cyan-500/20",children:[n.jsx("div",{className:"text-2xl font-bold text-cyan-400",children:"8+"}),n.jsx("div",{className:"text-xs text-gray-400",children:o("featured.stats.technologies")})]}),n.jsxs(T.div,{initial:{opacity:0,y:20},animate:{opacity:r?1:0,y:r?0:20},transition:{delay:.7},className:"text-center p-4 bg-slate-800/30 rounded-lg border border-cyan-500/20",children:[n.jsx("div",{className:"text-2xl font-bold text-cyan-400",children:"3+"}),n.jsx("div",{className:"text-xs text-gray-400",children:o("featured.stats.experience")})]}),n.jsxs(T.div,{initial:{opacity:0,y:20},animate:{opacity:r?1:0,y:r?0:20},transition:{delay:.8},className:"text-center p-4 bg-slate-800/30 rounded-lg border border-cyan-500/20",children:[n.jsx("div",{className:"text-2xl font-bold text-cyan-400",children:"20+"}),n.jsx("div",{className:"text-xs text-gray-400",children:o("featured.stats.projects")})]})]})]})]})]})})]})},Zn=({isVisible:e=!0})=>(xe.useEffect(()=>(document.documentElement.style.scrollBehavior="smooth",()=>{document.documentElement.style.scrollBehavior="auto"}),[]),n.jsxs("div",{className:"relative","data-page":"home",children:[n.jsx(vr,{}),n.jsx("section",{id:"home",children:n.jsx(Pn,{isVisible:e})}),n.jsx("section",{id:"about",children:n.jsx(hr,{})}),n.jsx("section",{id:"portfolio",children:n.jsx(Xn,{})}),n.jsx("section",{id:"contact",children:n.jsx(mr,{useHomepageStyle:!0})}),n.jsx(xr,{useHomepageStyle:!0})]}));export{Zn as default};
