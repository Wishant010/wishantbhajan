import{j as a,m as Y,u as Dr,a as hr}from"./vendor-framer-CCwuacKK.js";import{r as F,b as fe}from"./vendor-router-hSscntxs.js";import{u as kt}from"./index-BSBEuuWP.js";import{g as G}from"./vendor-gsap-Bc0iluX2.js";import{u as qr}from"./routerCompat-DSsinLcY.js";import{c as me,C as Ur,F as Kr}from"./Footer-DT5-h012.js";import{G as Zr}from"./GlobalNavbar-D5Jk_XNB.js";import"./vendor-react-DrTzz8Cn.js";import"./vendor-three-CiKi4VUc.js";import"./performanceOptimization-xggZkz5X.js";let Se,ye,Rt=typeof Symbol=="function"?Symbol():"_split",gt,Vr=()=>gt||_t.register(window.gsap),Pt=typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter:0,$e=e=>typeof e=="string"?$e(document.querySelectorAll(e)):"length"in e?Array.from(e).reduce((t,r)=>(typeof r=="string"?t.push(...$e(r)):t.push(r),t),[]):[e],Ot=e=>$e(e).filter(t=>t instanceof HTMLElement),xt=[],pt=function(){},Jr={add:e=>e()},Qr=/\s+/g,zt=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),Ze={left:0,top:0,width:0,height:0},en=(e,t)=>{for(;++t<e.length&&e[t]===Ze;);return e[t]||Ze},Wt=({element:e,html:t,ariaL:r,ariaH:n})=>{e.innerHTML=t,r?e.setAttribute("aria-label",r):e.removeAttribute("aria-label"),n?e.setAttribute("aria-hidden",n):e.removeAttribute("aria-hidden")},Yt=(e,t)=>{if(t){let r=new Set(e.join("").match(t)||xt),n=e.length,o,s,c,u;if(r.size)for(;--n>-1;){s=e[n];for(c of r)if(c.startsWith(s)&&c.length>s.length){for(o=0,u=s;c.startsWith(u+=e[n+ ++o])&&u.length<c.length;);if(o&&u.length===c.length){e[n]=c,e.splice(n+1,o);break}}}}return e},Ht=e=>window.getComputedStyle(e).display==="inline"&&(e.style.display="inline-block"),be=(e,t,r)=>t.insertBefore(typeof e=="string"?document.createTextNode(e):e,r),yt=(e,t,r)=>{let n=t[e+"sClass"]||"",{tag:o="div",aria:s="auto",propIndex:c=!1}=t,u=e==="line"?"block":"inline-block",i=n.indexOf("++")>-1,d=p=>{let y=document.createElement(o),m=r.length+1;return n&&(y.className=n+(i?" "+n+m:"")),c&&y.style.setProperty("--"+e,m+""),s!=="none"&&y.setAttribute("aria-hidden","true"),o!=="span"&&(y.style.position="relative",y.style.display=u),y.textContent=p,r.push(y),y};return i&&(n=n.replace("++","")),d.collection=r,d},tn=(e,t,r,n)=>{let o=yt("line",r,n),s=window.getComputedStyle(e).textAlign||"left";return(c,u)=>{let i=o("");for(i.style.textAlign=s,e.insertBefore(i,t[c]);c<u;c++)i.appendChild(t[c]);i.normalize()}},fr=(e,t,r,n,o,s,c,u,i,d)=>{var p;let y=Array.from(e.childNodes),m=0,{wordDelimiter:b,reduceWhiteSpace:v=!0,prepareText:S}=t,B=e.getBoundingClientRect(),h=B,C=!v&&window.getComputedStyle(e).whiteSpace.substring(0,3)==="pre",w=0,l=r.collection,g,f,j,I,$,k,x,D,N,_,T,O,z,W,R,M,E,A;for(typeof b=="object"?(j=b.delimiter||b,f=b.replaceWith||""):f=b===""?"":b||" ",g=f!==" ";m<y.length;m++)if(I=y[m],I.nodeType===3){for(R=I.textContent||"",v?R=R.replace(Qr," "):C&&(R=R.replace(/\n/g,f+`
`)),S&&(R=S(R,e)),I.textContent=R,$=f||j?R.split(j||f):R.match(u)||xt,E=$[$.length-1],D=g?E.slice(-1)===" ":!E,E||$.pop(),h=B,x=g?$[0].charAt(0)===" ":!$[0],x&&be(" ",e,I),$[0]||$.shift(),Yt($,i),s&&d||(I.textContent=""),N=1;N<=$.length;N++)if(M=$[N-1],!v&&C&&M.charAt(0)===`
`&&((p=I.previousSibling)==null||p.remove(),be(document.createElement("br"),e,I),M=M.slice(1)),!v&&M==="")be(f,e,I);else if(M===" ")e.insertBefore(document.createTextNode(" "),I);else{if(g&&M.charAt(0)===" "&&be(" ",e,I),w&&N===1&&!x&&l.indexOf(w.parentNode)>-1?(k=l[l.length-1],k.appendChild(document.createTextNode(n?"":M))):(k=r(n?"":M),be(k,e,I),w&&N===1&&!x&&k.insertBefore(w,k.firstChild)),n)for(T=Pt?Yt([...Pt.segment(M)].map(P=>P.segment),i):M.match(u)||xt,A=0;A<T.length;A++)k.appendChild(T[A]===" "?document.createTextNode(" "):n(T[A]));if(s&&d){if(R=I.textContent=R.substring(M.length+1,R.length),_=k.getBoundingClientRect(),_.top>h.top&&_.left<=h.left){for(O=e.cloneNode(),z=e.childNodes[0];z&&z!==k;)W=z,z=z.nextSibling,O.appendChild(W);e.parentNode.insertBefore(O,e),o&&Ht(O)}h=_}(N<$.length||D)&&be(N>=$.length?" ":g&&M.slice(-1)===" "?" "+f:f,e,I)}e.removeChild(I),w=0}else I.nodeType===1&&(c&&c.indexOf(I)>-1?(l.indexOf(I.previousSibling)>-1&&l[l.length-1].appendChild(I),w=I):(fr(I,t,r,n,o,s,c,u,i,!0),w=0),o&&Ht(I))};const mr=class gr{constructor(t,r){this.isSplit=!1,Vr(),this.elements=Ot(t),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=r,this.elements.forEach(c=>{var u;r.overwrite!==!1&&((u=c[Rt])==null||u._data.orig.filter(({element:i})=>i===c).forEach(Wt)),c[Rt]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let n=[],o,s=()=>{let c=n.length,u;for(;c--;){u=n[c];let i=u.element.offsetWidth;if(i!==u.width){u.width=i,this._split();return}}};this._data={orig:n,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(o),o=setTimeout(s,200)})},pt(this),this.split(r)}split(t){return(this._ctx||Jr).add(()=>{this.isSplit&&this.revert(),this.vars=t=t||this.vars||{};let{type:r="chars,words,lines",aria:n="auto",deepSlice:o=!0,smartWrap:s,onSplit:c,autoSplit:u=!1,specialChars:i,mask:d}=this.vars,p=r.indexOf("lines")>-1,y=r.indexOf("chars")>-1,m=r.indexOf("words")>-1,b=y&&!m&&!p,v=i&&("push"in i?new RegExp("(?:"+i.join("|")+")","gu"):i),S=v?new RegExp(v.source+"|"+zt.source,"gu"):zt,B=!!t.ignore&&Ot(t.ignore),{orig:h,animTime:C,obs:w}=this._data,l;(y||m||p)&&(this.elements.forEach((g,f)=>{h[f]={element:g,html:g.innerHTML,ariaL:g.getAttribute("aria-label"),ariaH:g.getAttribute("aria-hidden")},n==="auto"?g.setAttribute("aria-label",(g.textContent||"").trim()):n==="hidden"&&g.setAttribute("aria-hidden","true");let j=[],I=[],$=[],k=y?yt("char",t,j):null,x=yt("word",t,I),D,N,_,T;if(fr(g,t,x,k,b,o&&(p||b),B,S,v,!1),p){let O=$e(g.childNodes),z=tn(g,O,t,$),W,R=[],M=0,E=O.map(H=>H.nodeType===1?H.getBoundingClientRect():Ze),A=Ze,P;for(D=0;D<O.length;D++)W=O[D],W.nodeType===1&&(W.nodeName==="BR"?((!D||O[D-1].nodeName!=="BR")&&(R.push(W),z(M,D+1)),M=D+1,A=en(E,D)):(P=E[D],D&&P.top>A.top&&P.left<A.left+A.width-1&&(z(M,D),M=D),A=P));M<D&&z(M,D),R.forEach(H=>{var U;return(U=H.parentNode)==null?void 0:U.removeChild(H)})}if(!m){for(D=0;D<I.length;D++)if(N=I[D],y||!N.nextSibling||N.nextSibling.nodeType!==3)if(s&&!p){for(_=document.createElement("span"),_.style.whiteSpace="nowrap";N.firstChild;)_.appendChild(N.firstChild);N.replaceWith(_)}else N.replaceWith(...N.childNodes);else T=N.nextSibling,T&&T.nodeType===3&&(T.textContent=(N.textContent||"")+(T.textContent||""),N.remove());I.length=0,g.normalize()}this.lines.push(...$),this.words.push(...I),this.chars.push(...j)}),d&&this[d]&&this.masks.push(...this[d].map(g=>{let f=g.cloneNode();return g.replaceWith(f),f.appendChild(g),g.className&&(f.className=g.className.trim()+"-mask"),f.style.overflow="clip",f}))),this.isSplit=!0,ye&&p&&(u?ye.addEventListener("loadingdone",this._split):ye.status),(l=c&&c(this))&&l.totalTime&&(this._data.anim=C?l.totalTime(C):l),p&&u&&this.elements.forEach((g,f)=>{h[f].width=g.offsetWidth,w&&w.observe(g)})}),this}kill(){let{obs:t}=this._data;t&&t.disconnect(),ye?.removeEventListener("loadingdone",this._split)}revert(){var t,r;if(this.isSplit){let{orig:n,anim:o}=this._data;this.kill(),n.forEach(Wt),this.chars.length=this.words.length=this.lines.length=n.length=this.masks.length=0,this.isSplit=!1,o&&(this._data.animTime=o.totalTime(),o.revert()),(r=(t=this.vars).onRevert)==null||r.call(t,this)}return this}static create(t,r){return new gr(t,r)}static register(t){Se=Se||t||window.gsap,Se&&($e=Se.utils.toArray,pt=Se.core.context||pt),!gt&&window.innerWidth>0&&(ye=document.fonts,gt=!0)}};mr.version="3.14.2";let _t=mr;var rn=/(?:^\s+|\s+$)/g,nn=/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2642\u2640]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDD27\uDCBC\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCC\uDFCB]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;function St(e){var t=e.nodeType,r="";if(t===1||t===9||t===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)r+=St(e)}else if(t===3||t===4)return e.nodeValue;return r}function oe(e,t,r,n,o){if(e+="",r&&(e=e.trim?e.trim():e.replace(rn,"")),t&&t!=="")return e.replace(/>/g,"&gt;").replace(/</g,"&lt;").split(t);for(var s=[],c=e.length,u=0,i,d;u<c;u++)d=e.charAt(u),(d.charCodeAt(0)>=55296&&d.charCodeAt(0)<=56319||e.charCodeAt(u+1)>=65024&&e.charCodeAt(u+1)<=65039)&&(i=((e.substr(u,12).split(nn)||[])[1]||"").length||2,d=e.substr(u,i),s.emoji=1,u+=i-1),s.push(o?d:d===">"?"&gt;":d==="<"?"&lt;":n&&d===" "&&(e.charAt(u-1)===" "||e.charAt(u+1)===" ")?"&nbsp;":d);return s}var He=(function(){function e(r){this.chars=oe(r),this.sets=[],this.length=50;for(var n=0;n<20;n++)this.sets[n]=Gt(80,this.chars)}var t=e.prototype;return t.grow=function(n){for(var o=0;o<20;o++)this.sets[o]+=Gt(n-this.length,this.chars);this.length=n},e})(),de,xr,yr=function(){return de||typeof window<"u"&&(de=window.gsap)&&de.registerPlugin&&de},an=1,Xt=/\s+/g,Gt=function(t,r){for(var n=r.length,o="";--t>-1;)o+=r[~~(Math.random()*n)];return o},bt="ABCDEFGHIJKLMNOPQRSTUVWXYZ",qt=bt.toLowerCase(),on={upperCase:new He(bt),lowerCase:new He(qt),upperAndLowerCase:new He(bt+qt)},Ut=function(){xr=de=yr()},tt={version:"3.14.2",name:"scrambleText",register:function(t,r,n){de=t,Ut()},init:function(t,r,n,o,s){if(xr||Ut(),this.prop="innerHTML"in t?"innerHTML":"textContent"in t?"textContent":0,!!this.prop){this.target=t,typeof r!="object"&&(r={text:r});var c=r.text||r.value||"",u=r.trim!==!1,i=this,d,p,y,m;return i.delimiter=d=r.delimiter||"",i.original=oe(St(t).replace(Xt," ").split("&nbsp;").join(""),d,u),(c==="{original}"||c===!0||c==null)&&(c=i.original.join(d)),i.text=oe((c||"").replace(Xt," "),d,u),i.hasClass=!!(r.newClass||r.oldClass),i.newClass=r.newClass,i.oldClass=r.oldClass,m=d==="",i.textHasEmoji=m&&!!i.text.emoji,i.charsHaveEmoji=!!r.chars&&!!oe(r.chars).emoji,i.length=m?i.original.length:i.original.join(d).length,i.lengthDif=(m?i.text.length:i.text.join(d).length)-i.length,i.fillChar=r.fillChar||r.chars&&~r.chars.indexOf(" ")?"&nbsp;":"",i.charSet=y=on[r.chars||"upperCase"]||new He(r.chars),i.speed=.05/(r.speed||1),i.prevScrambleTime=0,i.setIndex=Math.random()*20|0,p=i.length+Math.max(i.lengthDif,0),p>y.length&&y.grow(p),i.chars=y.sets[i.setIndex],i.revealDelay=r.revealDelay||0,i.tweenLength=r.tweenLength!==!1,i.tween=n,i.rightToLeft=!!r.rightToLeft,i._props.push("scrambleText","text"),an}},render:function(t,r){var n=r.target,o=r.prop,s=r.text,c=r.delimiter,u=r.tween,i=r.prevScrambleTime,d=r.revealDelay,p=r.setIndex,y=r.chars,m=r.charSet,b=r.length,v=r.textHasEmoji,S=r.charsHaveEmoji,B=r.lengthDif,h=r.tweenLength,C=r.oldClass,w=r.newClass,l=r.rightToLeft,g=r.fillChar,f=r.speed,j=r.original,I=r.hasClass,$=s.length,k=u._time,x=k-i,D,N,_,T,O,z,W,R,M,E,A;d&&(u._from&&(k=u._dur-k),t=k===0?0:k<d?1e-6:k===u._dur?1:u._ease((k-d)/(u._dur-d))),t<0?t=0:t>1&&(t=1),l&&(t=1-t),D=~~(t*$+.5),t?((x>f||x<-f)&&(r.setIndex=p=(p+(Math.random()*19|0))%20,r.chars=m.sets[p],r.prevScrambleTime+=x),T=y):T=j.join(c),A=u._from?t:1-t,E=b+(h?u._from?A*A*A:1-A*A*A:1)*B,l?t===1&&(u._from||u.data==="isFromStart")?(_="",T=j.join(c)):(W=s.slice(D).join(c),S?_=oe(T).slice(0,E-(v?oe(W):W).length+.5|0).join(""):_=T.substr(0,E-(v?oe(W):W).length+.5|0),T=W):(_=s.slice(0,D).join(c),N=(v?oe(_):_).length,S?T=oe(T).slice(N,E+.5|0).join(""):T=T.substr(N,E-N+.5|0)),I?(R=l?C:w,M=l?w:C,O=R&&D!==0,z=M&&D!==$,W=(O?"<span class='"+R+"'>":"")+_+(O?"</span>":"")+(z?"<span class='"+M+"'>":"")+c+T+(z?"</span>":"")):W=_+c+T,n[o]=g==="&nbsp;"&&~W.indexOf("  ")?W.split("  ").join("&nbsp;&nbsp;"):W}};tt.emojiSafeSplit=oe;tt.getText=St;yr()&&de.registerPlugin(tt);G.registerPlugin(_t,tt);const sn=({radius:e=100,duration:t=1.2,speed:r=.5,scrambleChars:n=".:",className:o="",style:s={},children:c})=>{const u=F.useRef(null);return F.useEffect(()=>{if(!u.current)return;(async()=>{document.fonts&&await document.fonts.ready;const d=_t.create(u.current.querySelector("p"),{type:"chars",charsClass:"inline-block will-change-transform"});d.chars.forEach(m=>{const b=m;G.set(b,{attr:{"data-content":b.innerHTML}})});const p=m=>{d.chars.forEach(b=>{const v=b,{left:S,top:B,width:h,height:C}=v.getBoundingClientRect(),w=m.clientX-(S+h/2),l=m.clientY-(B+C/2),g=Math.hypot(w,l);g<e&&G.to(v,{overwrite:!0,duration:t*(1-g/e),scrambleText:{text:v.dataset.content||"",chars:n,speed:r},ease:"none"})})},y=u.current;return y.addEventListener("pointermove",p),()=>{y.removeEventListener("pointermove",p),d.revert()}})()},[e,t,r,n]),a.jsx("div",{ref:u,className:o,style:s,children:a.jsx("p",{children:c})})},cn=()=>typeof window>"u"?!1:window.innerWidth<768||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),un=(e,t)=>{const r=new Set([...Object.keys(e),...t.flatMap(o=>Object.keys(o))]),n={};return r.forEach(o=>{n[o]=[e[o],...t.map(s=>s[o])]}),n},Kt=({text:e="",delay:t=200,className:r="",animateBy:n="words",direction:o="top",threshold:s=.1,rootMargin:c="0px",animationFrom:u,animationTo:i,easing:d=m=>m,onAnimationComplete:p,stepDuration:y=.35})=>{const[m,b]=F.useState(!1),v=n==="words"?e.split(" "):e.split(""),[S,B]=F.useState(!1),h=F.useRef(null);F.useEffect(()=>{b(cn())},[]),F.useEffect(()=>{if(!h.current)return;const $=new IntersectionObserver(([k])=>{k.isIntersecting&&(B(!0),$.unobserve(h.current))},{threshold:s,rootMargin:c});return $.observe(h.current),()=>$.disconnect()},[s,c]);const C=F.useMemo(()=>o==="top"?{opacity:0,y:-50}:{opacity:0,y:50},[o]),w=F.useMemo(()=>[{opacity:.5,y:o==="top"?5:-5},{opacity:1,y:0}],[o]),l=u??C,g=i??w,f=g.length+1,j=y*(f-1),I=Array.from({length:f},($,k)=>f===1?0:k/(f-1));return m?a.jsx("p",{ref:h,className:`blur-text ${r}`,children:a.jsx(Y.span,{initial:{opacity:0},animate:{opacity:S?1:0},transition:{duration:.5},children:e})}):a.jsx("p",{ref:h,className:`blur-text ${r} flex flex-wrap`,children:v.map(($,k)=>{const x=un(l,g),D={duration:j,times:I,delay:k*t/1e3,ease:d};return a.jsxs(Y.span,{initial:l,animate:S?x:l,transition:D,onAnimationComplete:k===v.length-1?p:void 0,style:{display:"inline-block",willChange:"transform, opacity"},children:[$===" "?" ":$,n==="words"&&k<v.length-1&&" "]},k)})})};var J=function(){return J=Object.assign||function(t){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t},J.apply(this,arguments)};function Ve(e,t,r){if(r||arguments.length===2)for(var n=0,o=t.length,s;n<o;n++)(s||!(n in t))&&(s||(s=Array.prototype.slice.call(t,0,n)),s[n]=t[n]);return e.concat(s||Array.prototype.slice.call(t))}var q="-ms-",Ie="-moz-",X="-webkit-",br="comm",rt="rule",Bt="decl",ln="@import",vr="@keyframes",dn="@layer",wr=Math.abs,Tt=String.fromCharCode,vt=Object.assign;function pn(e,t){return V(e,0)^45?(((t<<2^V(e,0))<<2^V(e,1))<<2^V(e,2))<<2^V(e,3):0}function Cr(e){return e.trim()}function ce(e,t){return(e=t.exec(e))?e[0]:e}function L(e,t,r){return e.replace(t,r)}function Xe(e,t,r){return e.indexOf(t,r)}function V(e,t){return e.charCodeAt(t)|0}function Ce(e,t,r){return e.slice(t,r)}function se(e){return e.length}function Er(e){return e.length}function Te(e,t){return t.push(e),e}function Dn(e,t){return e.map(t).join("")}function Zt(e,t){return e.filter(function(r){return!ce(r,t)})}var nt=1,Ee=1,Fr=0,te=0,K=0,Ae="";function at(e,t,r,n,o,s,c,u){return{value:e,root:t,parent:r,type:n,props:o,children:s,line:nt,column:Ee,length:c,return:"",siblings:u}}function le(e,t){return vt(at("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ve(e){for(;e.root;)e=le(e.root,{children:[e]});Te(e,e.siblings)}function hn(){return K}function fn(){return K=te>0?V(Ae,--te):0,Ee--,K===10&&(Ee=1,nt--),K}function ne(){return K=te<Fr?V(Ae,te++):0,Ee++,K===10&&(Ee=1,nt++),K}function De(){return V(Ae,te)}function Ge(){return te}function ot(e,t){return Ce(Ae,e,t)}function wt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function mn(e){return nt=Ee=1,Fr=se(Ae=e),te=0,[]}function gn(e){return Ae="",e}function Dt(e){return Cr(ot(te-1,Ct(e===91?e+2:e===40?e+1:e)))}function xn(e){for(;(K=De())&&K<33;)ne();return wt(e)>2||wt(K)>3?"":" "}function yn(e,t){for(;--t&&ne()&&!(K<48||K>102||K>57&&K<65||K>70&&K<97););return ot(e,Ge()+(t<6&&De()==32&&ne()==32))}function Ct(e){for(;ne();)switch(K){case e:return te;case 34:case 39:e!==34&&e!==39&&Ct(K);break;case 40:e===41&&Ct(e);break;case 92:ne();break}return te}function bn(e,t){for(;ne()&&e+K!==57;)if(e+K===84&&De()===47)break;return"/*"+ot(t,te-1)+"*"+Tt(e===47?e:ne())}function vn(e){for(;!wt(De());)ne();return ot(e,te)}function wn(e){return gn(qe("",null,null,null,[""],e=mn(e),0,[0],e))}function qe(e,t,r,n,o,s,c,u,i){for(var d=0,p=0,y=c,m=0,b=0,v=0,S=1,B=1,h=1,C=0,w="",l=o,g=s,f=n,j=w;B;)switch(v=C,C=ne()){case 40:if(v!=108&&V(j,y-1)==58){Xe(j+=L(Dt(C),"&","&\f"),"&\f",wr(d?u[d-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:j+=Dt(C);break;case 9:case 10:case 13:case 32:j+=xn(v);break;case 92:j+=yn(Ge()-1,7);continue;case 47:switch(De()){case 42:case 47:Te(Cn(bn(ne(),Ge()),t,r,i),i);break;default:j+="/"}break;case 123*S:u[d++]=se(j)*h;case 125*S:case 59:case 0:switch(C){case 0:case 125:B=0;case 59+p:h==-1&&(j=L(j,/\f/g,"")),b>0&&se(j)-y&&Te(b>32?Jt(j+";",n,r,y-1,i):Jt(L(j," ","")+";",n,r,y-2,i),i);break;case 59:j+=";";default:if(Te(f=Vt(j,t,r,d,p,o,u,w,l=[],g=[],y,s),s),C===123)if(p===0)qe(j,t,f,f,l,s,y,u,g);else switch(m===99&&V(j,3)===110?100:m){case 100:case 108:case 109:case 115:qe(e,f,f,n&&Te(Vt(e,f,f,0,0,o,u,w,o,l=[],y,g),g),o,g,y,u,n?l:g);break;default:qe(j,f,f,f,[""],g,0,u,g)}}d=p=b=0,S=h=1,w=j="",y=c;break;case 58:y=1+se(j),b=v;default:if(S<1){if(C==123)--S;else if(C==125&&S++==0&&fn()==125)continue}switch(j+=Tt(C),C*S){case 38:h=p>0?1:(j+="\f",-1);break;case 44:u[d++]=(se(j)-1)*h,h=1;break;case 64:De()===45&&(j+=Dt(ne())),m=De(),p=y=se(w=j+=vn(Ge())),C++;break;case 45:v===45&&se(j)==2&&(S=0)}}return s}function Vt(e,t,r,n,o,s,c,u,i,d,p,y){for(var m=o-1,b=o===0?s:[""],v=Er(b),S=0,B=0,h=0;S<n;++S)for(var C=0,w=Ce(e,m+1,m=wr(B=c[S])),l=e;C<v;++C)(l=Cr(B>0?b[C]+" "+w:L(w,/&\f/g,b[C])))&&(i[h++]=l);return at(e,t,r,o===0?rt:u,i,d,p,y)}function Cn(e,t,r,n){return at(e,t,r,br,Tt(hn()),Ce(e,2,-2),0,n)}function Jt(e,t,r,n,o){return at(e,t,r,Bt,Ce(e,0,n),Ce(e,n+1,-1),n,o)}function jr(e,t,r){switch(pn(e,t)){case 5103:return X+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return X+e+e;case 4789:return Ie+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return X+e+Ie+e+q+e+e;case 5936:switch(V(e,t+11)){case 114:return X+e+q+L(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return X+e+q+L(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return X+e+q+L(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return X+e+q+e+e;case 6165:return X+e+q+"flex-"+e+e;case 5187:return X+e+L(e,/(\w+).+(:[^]+)/,X+"box-$1$2"+q+"flex-$1$2")+e;case 5443:return X+e+q+"flex-item-"+L(e,/flex-|-self/g,"")+(ce(e,/flex-|baseline/)?"":q+"grid-row-"+L(e,/flex-|-self/g,""))+e;case 4675:return X+e+q+"flex-line-pack"+L(e,/align-content|flex-|-self/g,"")+e;case 5548:return X+e+q+L(e,"shrink","negative")+e;case 5292:return X+e+q+L(e,"basis","preferred-size")+e;case 6060:return X+"box-"+L(e,"-grow","")+X+e+q+L(e,"grow","positive")+e;case 4554:return X+L(e,/([^-])(transform)/g,"$1"+X+"$2")+e;case 6187:return L(L(L(e,/(zoom-|grab)/,X+"$1"),/(image-set)/,X+"$1"),e,"")+e;case 5495:case 3959:return L(e,/(image-set\([^]*)/,X+"$1$`$1");case 4968:return L(L(e,/(.+:)(flex-)?(.*)/,X+"box-pack:$3"+q+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+X+e+e;case 4200:if(!ce(e,/flex-|baseline/))return q+"grid-column-align"+Ce(e,t)+e;break;case 2592:case 3360:return q+L(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,o){return t=o,ce(n.props,/grid-\w+-end/)})?~Xe(e+(r=r[t].value),"span",0)?e:q+L(e,"-start","")+e+q+"grid-row-span:"+(~Xe(r,"span",0)?ce(r,/\d+/):+ce(r,/\d+/)-+ce(e,/\d+/))+";":q+L(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return ce(n.props,/grid-\w+-start/)})?e:q+L(L(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return L(e,/(.+)-inline(.+)/,X+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(se(e)-1-t>6)switch(V(e,t+1)){case 109:if(V(e,t+4)!==45)break;case 102:return L(e,/(.+:)(.+)-([^]+)/,"$1"+X+"$2-$3$1"+Ie+(V(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Xe(e,"stretch",0)?jr(L(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return L(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,o,s,c,u,i,d){return q+o+":"+s+d+(c?q+o+"-span:"+(u?i:+i-+s)+d:"")+e});case 4949:if(V(e,t+6)===121)return L(e,":",":"+X)+e;break;case 6444:switch(V(e,V(e,14)===45?18:11)){case 120:return L(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+X+(V(e,14)===45?"inline-":"")+"box$3$1"+X+"$2$3$1"+q+"$2box$3")+e;case 100:return L(e,":",":"+q)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return L(e,"scroll-","scroll-snap-")+e}return e}function Je(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function En(e,t,r,n){switch(e.type){case dn:if(e.children.length)break;case ln:case Bt:return e.return=e.return||e.value;case br:return"";case vr:return e.return=e.value+"{"+Je(e.children,n)+"}";case rt:if(!se(e.value=e.props.join(",")))return""}return se(r=Je(e.children,n))?e.return=e.value+"{"+r+"}":""}function Fn(e){var t=Er(e);return function(r,n,o,s){for(var c="",u=0;u<t;u++)c+=e[u](r,n,o,s)||"";return c}}function jn(e){return function(t){t.root||(t=t.return)&&e(t)}}function Nn(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case Bt:e.return=jr(e.value,e.length,r);return;case vr:return Je([le(e,{value:L(e.value,"@","@"+X)})],n);case rt:if(e.length)return Dn(r=e.props,function(o){switch(ce(o,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ve(le(e,{props:[L(o,/:(read-\w+)/,":"+Ie+"$1")]})),ve(le(e,{props:[o]})),vt(e,{props:Zt(r,n)});break;case"::placeholder":ve(le(e,{props:[L(o,/:(plac\w+)/,":"+X+"input-$1")]})),ve(le(e,{props:[L(o,/:(plac\w+)/,":"+Ie+"$1")]})),ve(le(e,{props:[L(o,/:(plac\w+)/,q+"input-$1")]})),ve(le(e,{props:[o]})),vt(e,{props:Zt(r,n)});break}return""})}}var An={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Q={},Fe=typeof process<"u"&&Q!==void 0&&(Q.REACT_APP_SC_ATTR||Q.SC_ATTR)||"data-styled",Nr="active",Ar="data-styled-version",st="6.1.19",It=`/*!sc*/
`,Qe=typeof window<"u"&&typeof document<"u",kn=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Q!==void 0&&Q.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Q.REACT_APP_SC_DISABLE_SPEEDY!==""?Q.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Q.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Q!==void 0&&Q.SC_DISABLE_SPEEDY!==void 0&&Q.SC_DISABLE_SPEEDY!==""&&Q.SC_DISABLE_SPEEDY!=="false"&&Q.SC_DISABLE_SPEEDY),it=Object.freeze([]),je=Object.freeze({});function _n(e,t,r){return r===void 0&&(r=je),e.theme!==r.theme&&e.theme||t||r.theme}var kr=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Sn=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Bn=/(^-|-$)/g;function Qt(e){return e.replace(Sn,"-").replace(Bn,"")}var Tn=/(a)(d)/gi,Pe=52,er=function(e){return String.fromCharCode(e+(e>25?39:97))};function Et(e){var t,r="";for(t=Math.abs(e);t>Pe;t=t/Pe|0)r=er(t%Pe)+r;return(er(t%Pe)+r).replace(Tn,"$1-$2")}var ht,_r=5381,we=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Sr=function(e){return we(_r,e)};function In(e){return Et(Sr(e)>>>0)}function $n(e){return e.displayName||e.name||"Component"}function ft(e){return typeof e=="string"&&!0}var Br=typeof Symbol=="function"&&Symbol.for,Tr=Br?Symbol.for("react.memo"):60115,Mn=Br?Symbol.for("react.forward_ref"):60112,Ln={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Rn={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ir={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Pn=((ht={})[Mn]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ht[Tr]=Ir,ht);function tr(e){return("type"in(t=e)&&t.type.$$typeof)===Tr?Ir:"$$typeof"in e?Pn[e.$$typeof]:Ln;var t}var On=Object.defineProperty,zn=Object.getOwnPropertyNames,rr=Object.getOwnPropertySymbols,Wn=Object.getOwnPropertyDescriptor,Yn=Object.getPrototypeOf,nr=Object.prototype;function $r(e,t,r){if(typeof t!="string"){if(nr){var n=Yn(t);n&&n!==nr&&$r(e,n,r)}var o=zn(t);rr&&(o=o.concat(rr(t)));for(var s=tr(e),c=tr(t),u=0;u<o.length;++u){var i=o[u];if(!(i in Rn||r&&r[i]||c&&i in c||s&&i in s)){var d=Wn(t,i);try{On(e,i,d)}catch{}}}}return e}function Ne(e){return typeof e=="function"}function $t(e){return typeof e=="object"&&"styledComponentId"in e}function pe(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ar(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=e[n];return r}function Me(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ft(e,t,r){if(r===void 0&&(r=!1),!r&&!Me(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Ft(e[n],t[n]);else if(Me(t))for(var n in t)e[n]=Ft(e[n],t[n]);return e}function Mt(e,t){Object.defineProperty(e,"toString",{value:t})}function Le(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Hn=(function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,s=o;t>=s;)if((s<<=1)<0)throw Le(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(n),this.length=s;for(var c=o;c<s;c++)this.groupSizes[c]=0}for(var u=this.indexOfGroup(t+1),i=(c=0,r.length);c<i;c++)this.tag.insertRule(u,r[c])&&(this.groupSizes[t]++,u++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),o=n+r;this.groupSizes[t]=0;for(var s=n;s<o;s++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],o=this.indexOfGroup(t),s=o+n,c=o;c<s;c++)r+="".concat(this.tag.getRule(c)).concat(It);return r},e})(),Ue=new Map,et=new Map,Ke=1,Oe=function(e){if(Ue.has(e))return Ue.get(e);for(;et.has(Ke);)Ke++;var t=Ke++;return Ue.set(e,t),et.set(t,e),t},Xn=function(e,t){Ke=t+1,Ue.set(e,t),et.set(t,e)},Gn="style[".concat(Fe,"][").concat(Ar,'="').concat(st,'"]'),qn=new RegExp("^".concat(Fe,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Un=function(e,t,r){for(var n,o=r.split(","),s=0,c=o.length;s<c;s++)(n=o[s])&&e.registerName(t,n)},Kn=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(It),o=[],s=0,c=n.length;s<c;s++){var u=n[s].trim();if(u){var i=u.match(qn);if(i){var d=0|parseInt(i[1],10),p=i[2];d!==0&&(Xn(p,d),Un(e,p,i[3]),e.getTag().insertRules(d,o)),o.length=0}else o.push(u)}}},or=function(e){for(var t=document.querySelectorAll(Gn),r=0,n=t.length;r<n;r++){var o=t[r];o&&o.getAttribute(Fe)!==Nr&&(Kn(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function Zn(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Mr=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=(function(u){var i=Array.from(u.querySelectorAll("style[".concat(Fe,"]")));return i[i.length-1]})(r),s=o!==void 0?o.nextSibling:null;n.setAttribute(Fe,Nr),n.setAttribute(Ar,st);var c=Zn();return c&&n.setAttribute("nonce",c),r.insertBefore(n,s),n},Vn=(function(){function e(t){this.element=Mr(t),this.element.appendChild(document.createTextNode("")),this.sheet=(function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,o=0,s=n.length;o<s;o++){var c=n[o];if(c.ownerNode===r)return c}throw Le(17)})(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e})(),Jn=(function(){function e(t){this.element=Mr(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e})(),Qn=(function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e})(),sr=Qe,ea={isServer:!Qe,useCSSOMInjection:!kn},Lr=(function(){function e(t,r,n){t===void 0&&(t=je),r===void 0&&(r={});var o=this;this.options=J(J({},ea),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&Qe&&sr&&(sr=!1,or(this)),Mt(this,function(){return(function(s){for(var c=s.getTag(),u=c.length,i="",d=function(y){var m=(function(h){return et.get(h)})(y);if(m===void 0)return"continue";var b=s.names.get(m),v=c.getGroup(y);if(b===void 0||!b.size||v.length===0)return"continue";var S="".concat(Fe,".g").concat(y,'[id="').concat(m,'"]'),B="";b!==void 0&&b.forEach(function(h){h.length>0&&(B+="".concat(h,","))}),i+="".concat(v).concat(S,'{content:"').concat(B,'"}').concat(It)},p=0;p<u;p++)d(p);return i})(o)})}return e.registerId=function(t){return Oe(t)},e.prototype.rehydrate=function(){!this.server&&Qe&&or(this)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(J(J({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=(function(r){var n=r.useCSSOMInjection,o=r.target;return r.isServer?new Qn(o):n?new Vn(o):new Jn(o)})(this.options),new Hn(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(Oe(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(Oe(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Oe(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e})(),ta=/&/g,ra=/^\s*\/\/.*$/gm;function Rr(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Rr(r.children,t)),r})}function na(e){var t,r,n,o=je,s=o.options,c=s===void 0?je:s,u=o.plugins,i=u===void 0?it:u,d=function(m,b,v){return v.startsWith(r)&&v.endsWith(r)&&v.replaceAll(r,"").length>0?".".concat(t):m},p=i.slice();p.push(function(m){m.type===rt&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(ta,r).replace(n,d))}),c.prefix&&p.push(Nn),p.push(En);var y=function(m,b,v,S){b===void 0&&(b=""),v===void 0&&(v=""),S===void 0&&(S="&"),t=S,r=b,n=new RegExp("\\".concat(r,"\\b"),"g");var B=m.replace(ra,""),h=wn(v||b?"".concat(v," ").concat(b," { ").concat(B," }"):B);c.namespace&&(h=Rr(h,c.namespace));var C=[];return Je(h,Fn(p.concat(jn(function(w){return C.push(w)})))),C};return y.hash=i.length?i.reduce(function(m,b){return b.name||Le(15),we(m,b.name)},_r).toString():"",y}var aa=new Lr,jt=na(),Pr=fe.createContext({shouldForwardProp:void 0,styleSheet:aa,stylis:jt});Pr.Consumer;fe.createContext(void 0);function ir(){return F.useContext(Pr)}var oa=(function(){function e(t,r){var n=this;this.inject=function(o,s){s===void 0&&(s=jt);var c=n.name+s.hash;o.hasNameForId(n.id,c)||o.insertRules(n.id,c,s(n.rules,c,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,Mt(this,function(){throw Le(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=jt),this.name+t.hash},e})(),sa=function(e){return e>="A"&&e<="Z"};function cr(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;sa(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var Or=function(e){return e==null||e===!1||e===""},zr=function(e){var t,r,n=[];for(var o in e){var s=e[o];e.hasOwnProperty(o)&&!Or(s)&&(Array.isArray(s)&&s.isCss||Ne(s)?n.push("".concat(cr(o),":"),s,";"):Me(s)?n.push.apply(n,Ve(Ve(["".concat(o," {")],zr(s),!1),["}"],!1)):n.push("".concat(cr(o),": ").concat((t=o,(r=s)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in An||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function he(e,t,r,n){if(Or(e))return[];if($t(e))return[".".concat(e.styledComponentId)];if(Ne(e)){if(!Ne(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var o=e(t);return he(o,t,r,n)}var s;return e instanceof oa?r?(e.inject(r,n),[e.getName(n)]):[e]:Me(e)?zr(e):Array.isArray(e)?Array.prototype.concat.apply(it,e.map(function(c){return he(c,t,r,n)})):[e.toString()]}function ia(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Ne(r)&&!$t(r))return!1}return!0}var ca=Sr(st),ua=(function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&ia(t),this.componentId=r,this.baseHash=we(ca,r),this.baseStyle=n,Lr.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=pe(o,this.staticRulesId);else{var s=ar(he(this.rules,t,r,n)),c=Et(we(this.baseHash,s)>>>0);if(!r.hasNameForId(this.componentId,c)){var u=n(s,".".concat(c),void 0,this.componentId);r.insertRules(this.componentId,c,u)}o=pe(o,c),this.staticRulesId=c}else{for(var i=we(this.baseHash,n.hash),d="",p=0;p<this.rules.length;p++){var y=this.rules[p];if(typeof y=="string")d+=y;else if(y){var m=ar(he(y,t,r,n));i=we(i,m+p),d+=m}}if(d){var b=Et(i>>>0);r.hasNameForId(this.componentId,b)||r.insertRules(this.componentId,b,n(d,".".concat(b),void 0,this.componentId)),o=pe(o,b)}}return o},e})(),Wr=fe.createContext(void 0);Wr.Consumer;var mt={};function la(e,t,r){var n=$t(e),o=e,s=!ft(e),c=t.attrs,u=c===void 0?it:c,i=t.componentId,d=i===void 0?(function(l,g){var f=typeof l!="string"?"sc":Qt(l);mt[f]=(mt[f]||0)+1;var j="".concat(f,"-").concat(In(st+f+mt[f]));return g?"".concat(g,"-").concat(j):j})(t.displayName,t.parentComponentId):i,p=t.displayName,y=p===void 0?(function(l){return ft(l)?"styled.".concat(l):"Styled(".concat($n(l),")")})(e):p,m=t.displayName&&t.componentId?"".concat(Qt(t.displayName),"-").concat(t.componentId):t.componentId||d,b=n&&o.attrs?o.attrs.concat(u).filter(Boolean):u,v=t.shouldForwardProp;if(n&&o.shouldForwardProp){var S=o.shouldForwardProp;if(t.shouldForwardProp){var B=t.shouldForwardProp;v=function(l,g){return S(l,g)&&B(l,g)}}else v=S}var h=new ua(r,m,n?o.componentStyle:void 0);function C(l,g){return(function(f,j,I){var $=f.attrs,k=f.componentStyle,x=f.defaultProps,D=f.foldedComponentIds,N=f.styledComponentId,_=f.target,T=fe.useContext(Wr),O=ir(),z=f.shouldForwardProp||O.shouldForwardProp,W=_n(j,T,x)||je,R=(function(U,Z,re){for(var ee,ie=J(J({},Z),{className:void 0,theme:re}),ke=0;ke<U.length;ke+=1){var ge=Ne(ee=U[ke])?ee(ie):ee;for(var ae in ge)ie[ae]=ae==="className"?pe(ie[ae],ge[ae]):ae==="style"?J(J({},ie[ae]),ge[ae]):ge[ae]}return Z.className&&(ie.className=pe(ie.className,Z.className)),ie})($,j,W),M=R.as||_,E={};for(var A in R)R[A]===void 0||A[0]==="$"||A==="as"||A==="theme"&&R.theme===W||(A==="forwardedAs"?E.as=R.forwardedAs:z&&!z(A,M)||(E[A]=R[A]));var P=(function(U,Z){var re=ir(),ee=U.generateAndInjectStyles(Z,re.styleSheet,re.stylis);return ee})(k,R),H=pe(D,N);return P&&(H+=" "+P),R.className&&(H+=" "+R.className),E[ft(M)&&!kr.has(M)?"class":"className"]=H,I&&(E.ref=I),F.createElement(M,E)})(w,l,g)}C.displayName=y;var w=fe.forwardRef(C);return w.attrs=b,w.componentStyle=h,w.displayName=y,w.shouldForwardProp=v,w.foldedComponentIds=n?pe(o.foldedComponentIds,o.styledComponentId):"",w.styledComponentId=m,w.target=n?o.target:e,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(l){this._foldedDefaultProps=n?(function(g){for(var f=[],j=1;j<arguments.length;j++)f[j-1]=arguments[j];for(var I=0,$=f;I<$.length;I++)Ft(g,$[I],!0);return g})({},o.defaultProps,l):l}}),Mt(w,function(){return".".concat(w.styledComponentId)}),s&&$r(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function ur(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var lr=function(e){return Object.assign(e,{isCss:!0})};function da(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(Ne(e)||Me(e))return lr(he(ur(it,Ve([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?he(n):lr(he(ur(n,t)))}function Nt(e,t,r){if(r===void 0&&(r=je),!t)throw Le(1,t);var n=function(o){for(var s=[],c=1;c<arguments.length;c++)s[c-1]=arguments[c];return e(t,r,da.apply(void 0,Ve([o],s,!1)))};return n.attrs=function(o){return Nt(e,t,J(J({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},n.withConfig=function(o){return Nt(e,t,J(J({},r),o))},n}var Yr=function(e){return Nt(la,e)},Lt=Yr;kr.forEach(function(e){Lt[e]=Yr(e)});const pa=()=>a.jsx(Da,{children:a.jsxs("div",{className:"tooltip-container",children:[a.jsx("div",{className:"tooltip",children:a.jsxs("div",{className:"profile",children:[a.jsxs("div",{className:"user",children:[a.jsx("div",{className:"img",children:"WB"}),a.jsxs("div",{className:"details",children:[a.jsx("div",{className:"name",children:"Wishant Bhajan"}),a.jsx("div",{className:"username",children:"Co-founder TableTech"})]})]}),a.jsx("div",{className:"about",children:"220+ Connections • Open to Work"})]})}),a.jsx("div",{className:"text",children:a.jsxs("a",{href:"https://www.linkedin.com/in/wishant-bhajan-0a73832a4/",target:"_blank",rel:"noopener noreferrer",className:"icon",children:[a.jsxs("div",{className:"layer",children:[a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{className:"fab fa-linkedin",children:a.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})})]}),a.jsx("div",{className:"text",children:"LinkedIn"})]})})]})}),Da=Lt.div`
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
  }`,ha=()=>a.jsx(fa,{children:a.jsxs("div",{className:"tooltip-container",children:[a.jsx("div",{className:"tooltip",children:a.jsxs("div",{className:"profile",children:[a.jsxs("div",{className:"user",children:[a.jsx("div",{className:"img",children:"WB"}),a.jsxs("div",{className:"details",children:[a.jsx("div",{className:"name",children:"Wishant Bhajan"}),a.jsx("div",{className:"username",children:"@Wishant010"})]})]}),a.jsx("div",{className:"about",children:"20+ Repositories • Active Developer"})]})}),a.jsx("div",{className:"text",children:a.jsxs("a",{href:"https://github.com/Wishant010",target:"_blank",rel:"noopener noreferrer",className:"icon",children:[a.jsxs("div",{className:"layer",children:[a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{className:"fab fa-github",children:a.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})})]}),a.jsx("div",{className:"text",children:"GitHub"})]})})]})}),fa=Lt.div`
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
  }`,ma=()=>{const[e,t]=F.useState(!1);return F.useEffect(()=>{const r=()=>{const n=window.innerWidth<768||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);t(n)};return r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),e},ga=({gridSize:e=10,cubeSize:t,maxAngle:r=45,radius:n=3,easing:o="power3.out",duration:s={enter:.3,leave:.6},cellGap:c,borderStyle:u="1px solid #fff",faceColor:i="#060010",shadow:d=!1,autoAnimate:p=!0,rippleOnClick:y=!0,rippleColor:m="#fff",rippleSpeed:b=2,visibleCells:v})=>{const S=ma(),B=F.useRef(null),h=F.useRef(null),C=F.useRef(null),w=F.useRef(!1),l=F.useRef({x:0,y:0}),g=F.useRef({x:0,y:0}),f=F.useRef(null),j=typeof c=="number"?`${c}px`:c?.col!==void 0?`${c.col}px`:"5%",I=typeof c=="number"?`${c}px`:c?.row!==void 0?`${c.row}px`:"5%",$=s.enter,k=s.leave,x=F.useCallback((E,A)=>{B.current&&B.current.querySelectorAll(".cube").forEach(P=>{const H=+P.dataset.row,U=+P.dataset.col,Z=Math.hypot(H-E,U-A);if(Z<=n){const ee=(1-Z/n)*r;G.to(P,{duration:$,ease:o,overwrite:!0,rotateX:-ee,rotateY:ee})}else G.to(P,{duration:k,ease:"power3.out",overwrite:!0,rotateX:0,rotateY:0})})},[n,r,$,k,o]),D=F.useCallback(E=>{w.current=!0,C.current&&clearTimeout(C.current);const A=B.current.getBoundingClientRect(),P=A.width/e,H=A.height/e,U=(E.clientX-A.left)/P,Z=(E.clientY-A.top)/H;h.current&&cancelAnimationFrame(h.current),h.current=requestAnimationFrame(()=>x(Z,U)),C.current=setTimeout(()=>{w.current=!1},3e3)},[e,x]),N=F.useCallback(()=>{B.current&&B.current.querySelectorAll(".cube").forEach(E=>G.to(E,{duration:k,rotateX:0,rotateY:0,ease:"power3.out"}))},[k]),_=F.useCallback(E=>{E.preventDefault(),w.current=!0,C.current&&clearTimeout(C.current);const A=B.current.getBoundingClientRect(),P=A.width/e,H=A.height/e,U=E.touches[0],Z=(U.clientX-A.left)/P,re=(U.clientY-A.top)/H;h.current&&cancelAnimationFrame(h.current),h.current=requestAnimationFrame(()=>x(re,Z)),C.current=setTimeout(()=>{w.current=!1},3e3)},[e,x]),T=F.useCallback(()=>{w.current=!0},[]),O=F.useCallback(()=>{B.current&&N()},[N]),z=F.useCallback(E=>{if(!y||!B.current)return;const A=B.current.getBoundingClientRect(),P=A.width/e,H=A.height/e,U=E.clientX||E.touches&&E.touches[0].clientX,Z=E.clientY||E.touches&&E.touches[0].clientY,re=Math.floor((U-A.left)/P),ee=Math.floor((Z-A.top)/H),ie=.15,ke=.3,ge=.6,ae=ie/b,ut=ke/b,Gr=ge/b,_e={};B.current.querySelectorAll(".cube").forEach(ue=>{const xe=+ue.dataset.row,Re=+ue.dataset.col,lt=Math.hypot(xe-ee,Re-re),dt=Math.round(lt);_e[dt]||(_e[dt]=[]),_e[dt].push(ue)}),Object.keys(_e).map(Number).sort((ue,xe)=>ue-xe).forEach(ue=>{const xe=ue*ae,Re=_e[ue].flatMap(lt=>Array.from(lt.querySelectorAll(".cube-face")));G.to(Re,{backgroundColor:m,duration:ut,delay:xe,ease:"power3.out"}),G.to(Re,{backgroundColor:i,duration:ut,delay:xe+ut+Gr,ease:"power3.out"})})},[y,e,i,m,b]);F.useEffect(()=>{if(!p||!B.current||S)return;l.current={x:Math.random()*e,y:Math.random()*e},g.current={x:Math.random()*e,y:Math.random()*e};const E=.02,A=()=>{if(!w.current){const P=l.current,H=g.current;P.x+=(H.x-P.x)*E,P.y+=(H.y-P.y)*E,x(P.y,P.x),Math.hypot(P.x-H.x,P.y-H.y)<.1&&(g.current={x:Math.random()*e,y:Math.random()*e})}f.current=requestAnimationFrame(A)};return f.current=requestAnimationFrame(A),()=>{f.current!=null&&cancelAnimationFrame(f.current)}},[p,e,x,S]),F.useEffect(()=>{const E=B.current;if(E&&!S)return E.addEventListener("pointermove",D),E.addEventListener("pointerleave",N),E.addEventListener("click",z),E.addEventListener("touchmove",_,{passive:!1}),E.addEventListener("touchstart",T,{passive:!0}),E.addEventListener("touchend",O,{passive:!0}),()=>{E.removeEventListener("pointermove",D),E.removeEventListener("pointerleave",N),E.removeEventListener("click",z),E.removeEventListener("touchmove",_),E.removeEventListener("touchstart",T),E.removeEventListener("touchend",O),h.current!=null&&cancelAnimationFrame(h.current),C.current&&clearTimeout(C.current)}},[D,N,z,_,T,O,S]);const W=Array.from({length:e}),R={style:{"--cube-face-border":u,"--cube-face-bg":i,"--cube-face-shadow":d===!0?"0 0 6px rgba(0,0,0,.5)":d||"none","--grid-size":e,"--cube-size":t?`${t}px`:"1fr","--column-gap":j,"--row-gap":I,"--total-width":t?`${e*t}px`:"auto","--total-height":t?`${e*t}px`:"auto"},"data-has-cube-size":t?"true":"false"},M=(E,A)=>!v||v.length===0?!0:v.some(P=>P.row===E&&P.col===A);return a.jsx("div",{className:"cubes-wrapper",...R,children:a.jsx("div",{ref:B,className:"cubes-scene",children:W.map((E,A)=>W.map((P,H)=>M(A,H)?a.jsxs("div",{className:"cube","data-row":A,"data-col":H,children:[a.jsx("span",{className:"cube-pointer-area"}),a.jsx("div",{className:"cube-face cube-face-top"}),a.jsx("div",{className:"cube-face cube-face-bottom"}),a.jsx("div",{className:"cube-face cube-face-left"}),a.jsx("div",{className:"cube-face cube-face-right"}),a.jsx("div",{className:"cube-face cube-face-front"}),a.jsx("div",{className:"cube-face cube-face-back"})]},`${A}-${H}`):a.jsx("div",{className:"invisible"},`${A}-${H}`)))})})},xa=()=>{const[e,t]=F.useState(!1);return F.useEffect(()=>{const r=()=>{t(window.innerWidth<768||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))};return r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),e},ya=({isVisible:e=!0})=>{const{t}=kt(),r=xa();return a.jsxs("div",{className:"min-h-screen max-sm:min-h-fit relative overflow-hidden page-content scroll-snap-section",children:[a.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/80 to-purple-950/60"}),!r&&a.jsxs(a.Fragment,{children:[a.jsx(Y.div,{className:"orb orb-emerald absolute top-1/4 -left-20 w-96 h-96",animate:e?{x:[0,100,0],y:[0,50,0],scale:[1,1.2,1]}:{},transition:{duration:20,repeat:Number.POSITIVE_INFINITY,ease:"easeInOut"}}),a.jsx(Y.div,{className:"orb orb-teal absolute top-1/2 right-1/4 w-[500px] h-[500px]",animate:e?{x:[0,-80,0],y:[0,-40,0],scale:[1,1.3,1]}:{},transition:{duration:25,repeat:Number.POSITIVE_INFINITY,ease:"easeInOut"}}),a.jsx(Y.div,{className:"orb orb-purple absolute bottom-1/4 -right-20 w-96 h-96",animate:e?{x:[0,-50,0],y:[0,-30,0],scale:[1.1,1.3,1.1]}:{},transition:{duration:30,repeat:Number.POSITIVE_INFINITY,ease:"easeInOut"}}),a.jsx(Y.div,{className:"orb orb-cyan absolute bottom-1/3 left-1/3 w-[400px] h-[400px]",animate:e?{x:[0,60,0],y:[0,-60,0],scale:[1,1.15,1]}:{},transition:{duration:22,repeat:Number.POSITIVE_INFINITY,ease:"easeInOut"}})]}),r&&a.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-purple-900/20 pointer-events-none"}),a.jsx("div",{className:"relative min-h-screen flex items-center z-30 max-sm:items-start",children:a.jsx("div",{className:"max-w-7xl mx-auto px-6 pt-24 pb-32 w-full max-sm:pt-16 max-sm:pb-8",children:a.jsxs("div",{className:"grid lg:grid-cols-2 gap-12 lg:gap-20 items-center",children:[a.jsxs(Y.div,{className:"space-y-8",initial:{opacity:0,x:-50},animate:{opacity:e?1:0,x:e?0:-50},transition:{duration:.8,delay:.5},children:[a.jsxs("div",{className:"space-y-2",children:[a.jsx(Y.div,{initial:{opacity:0,y:20},animate:{opacity:e?1:0,y:e?0:20},transition:{delay:.6,duration:.6},children:a.jsx(sn,{radius:150,duration:1.5,speed:.6,scrambleChars:"!@#$%^&*()_+-={}[]|:;<>?,./~",className:"text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight whitespace-nowrap",style:{margin:0,maxWidth:"100%"},children:t("hero.welcome")})}),a.jsx(Y.h1,{className:"text-5xl md:text-6xl lg:text-7xl font-bold leading-tight whitespace-nowrap",initial:{opacity:0,filter:"blur(10px)",y:20},animate:{opacity:e?1:0,filter:e?"blur(0px)":"blur(10px)",y:e?0:20},transition:{delay:.8,duration:1,ease:[.23,1,.32,1]},children:a.jsx("span",{className:"bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent whitespace-nowrap",children:t("hero.portfolio")})})]}),a.jsx(Y.div,{className:"flex flex-wrap gap-3",initial:{opacity:0,y:20},animate:{opacity:e?1:0,y:e?0:20},transition:{delay:.8,duration:.6},children:[{icon:a.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),text:t("hero.role1"),color:"from-blue-500 to-cyan-500"},{icon:a.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"})}),text:t("hero.role2"),color:"from-purple-500 to-pink-500"},{icon:a.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})}),text:t("hero.role3"),color:"from-emerald-500 to-teal-500"}].map((n,o)=>a.jsxs(Y.div,{className:`px-5 py-3 rounded-xl bg-gradient-to-r ${n.color} bg-opacity-10 backdrop-blur-sm border border-white/10 flex items-center gap-3`,initial:{opacity:0,scale:.8},animate:{opacity:e?1:0,scale:e?1:.8},transition:{delay:.9+o*.1,duration:.4},whileHover:{scale:1.05,borderColor:"rgba(255, 255, 255, 0.3)"},children:[a.jsx("span",{className:"text-white",children:n.icon}),a.jsx("span",{className:"text-white text-base font-semibold",children:n.text})]},n.text))}),a.jsxs(Y.div,{className:"space-y-3",initial:{opacity:0,y:20},animate:{opacity:e?1:0,y:e?0:20},transition:{delay:1.1,duration:.6},children:[a.jsx(Kt,{text:`${t("hero.description1")} ${t("hero.description1.highlight")}. ${t("hero.description2")} ${t("hero.description2.highlight")}.`,delay:60,animateBy:"words",direction:"top",className:"text-slate-300 text-lg md:text-xl leading-relaxed",stepDuration:.35}),a.jsx(Kt,{text:t("hero.description3"),delay:70,animateBy:"words",direction:"top",className:"text-slate-400 text-base md:text-lg",stepDuration:.35})]}),a.jsx(Y.div,{className:"flex flex-wrap items-center gap-4",initial:{opacity:0,y:20},animate:{opacity:e?1:0,y:e?0:20},transition:{delay:1.3,duration:.6},children:a.jsxs("div",{className:"inline-flex items-center gap-4 px-6 py-4 rounded-xl bg-slate-800/90 backdrop-blur-md border border-emerald-500/50 shadow-xl",children:[a.jsx("span",{className:"text-white text-base font-bold",children:t("hero.follow")}),a.jsx("div",{className:"h-6 w-px bg-emerald-500/50"}),a.jsxs("div",{className:"flex gap-4 items-center",children:[a.jsx(Y.div,{initial:{opacity:0,scale:.8},animate:{opacity:e?1:0,scale:e?1:.8},transition:{delay:1.5,duration:.4},children:a.jsx(pa,{})}),a.jsx(Y.div,{initial:{opacity:0,scale:.8},animate:{opacity:e?1:0,scale:e?1:.8},transition:{delay:1.6,duration:.4},children:a.jsx(ha,{})}),a.jsx("div",{className:"h-6 w-px bg-emerald-500/50"}),a.jsx(Y.a,{href:"/Wishant%20Bhajan.pdf",download:"Wishant_Bhajan_CV.pdf",className:"inline-flex items-center justify-center w-[45px] h-[45px] rounded-md bg-slate-800/80 border border-white/30 text-emerald-500 font-bold text-sm cursor-pointer hover:border-emerald-500/50 hover:shadow-[0_0_10px_rgba(16,185,129,0.3)] hover:bg-emerald-500/10 transition-all duration-300",initial:{opacity:0,scale:.8},animate:{opacity:e?1:0,scale:e?1:.8},transition:{delay:1.7,duration:.4},whileTap:{scale:.95},title:"Download CV",children:a.jsx("span",{children:"CV"})})]})]})})]}),a.jsx(Y.div,{className:"relative lg:flex items-center justify-center hidden",initial:{opacity:0,x:50},animate:{opacity:e?1:0,x:e?0:50},transition:{duration:.8,delay:.7},children:a.jsx("div",{className:"cube-animation",children:a.jsx(ga,{gridSize:16,cubeSize:40,maxAngle:45,radius:6,duration:{enter:.3,leave:.6},cellGap:6,borderStyle:"1px solid rgba(100, 116, 139, 0.3)",faceColor:"rgba(30, 41, 59, 0.6)",shadow:!1,autoAnimate:!0,rippleOnClick:!0,rippleColor:"rgba(71, 85, 105, 0.5)",rippleSpeed:2.5,visibleCells:[{row:1,col:4},{row:2,col:4},{row:3,col:4},{row:4,col:4},{row:5,col:4},{row:6,col:4},{row:7,col:4},{row:8,col:4},{row:9,col:5},{row:8,col:6},{row:7,col:7},{row:8,col:8},{row:9,col:9},{row:8,col:10},{row:7,col:10},{row:6,col:10},{row:5,col:10},{row:4,col:10},{row:3,col:10},{row:2,col:10},{row:1,col:10},{row:1,col:13},{row:2,col:13},{row:3,col:13},{row:4,col:13},{row:5,col:13},{row:6,col:13},{row:7,col:13},{row:8,col:13},{row:9,col:13},{row:1,col:14},{row:1,col:15},{row:2,col:15},{row:3,col:15},{row:4,col:14},{row:4,col:15},{row:5,col:14},{row:6,col:14},{row:6,col:15},{row:7,col:15},{row:8,col:15},{row:9,col:14},{row:9,col:15}]})})})]})})}),a.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-[400px] pointer-events-none z-20",children:a.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"})}),a.jsx("style",{children:`
        @keyframes cubeColorPulse {
          0%, 100% {
            filter: hue-rotate(0deg) brightness(1);
          }
          50% {
            filter: hue-rotate(60deg) brightness(1.3);
          }
        }
      `})]})},ba="radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(266,100%,90%,var(--card-opacity)) 4%,hsla(266,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(266,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(266,0%,60%,0) 100%),radial-gradient(35% 52% at 55% 20%,#00ffaac4 0%,#073aff00 100%),radial-gradient(100% 100% at 50% 50%,#00c1ffff 1%,#073aff00 76%),conic-gradient(from 124deg at 50% 50%,#c137ffff 0%,#07c6ffff 40%,#07c6ffff 60%,#c137ffff 100%)",va="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)",Be={SMOOTH_DURATION:600,INITIAL_DURATION:1500,INITIAL_X_OFFSET:70,INITIAL_Y_OFFSET:60,DEVICE_BETA_OFFSET:20},ze=(e,t=0,r=100)=>Math.min(Math.max(e,t),r),At=(e,t=3)=>parseFloat(e.toFixed(t)),We=(e,t,r,n,o)=>At(n+(o-n)*(e-t)/(r-t)),wa=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,Ca=({avatarUrl:e="/profile/wish-photo.jpg",iconUrl:t,grainUrl:r,behindGradient:n,innerGradient:o,showBehindGradient:s=!0,className:c="",enableTilt:u=!0,enableMobileTilt:i=!1,mobileTiltSensitivity:d=5,miniAvatarUrl:p,name:y="Wishant Bhajan",title:m="Software Engineer",handle:b="wishant010",status:v="Online",contactText:S="Contact",showUserInfo:B=!0,onContactClick:h})=>{const C=F.useRef(null),w=F.useRef(null),l=F.useMemo(()=>{if(!u)return null;let x=null;const D=(_,T,O,z)=>{const W=O.clientWidth,R=O.clientHeight,M=ze(100/W*_),E=ze(100/R*T),A=M-50,P=E-50,H={"--pointer-x":`${M}%`,"--pointer-y":`${E}%`,"--background-x":`${We(M,0,100,35,65)}%`,"--background-y":`${We(E,0,100,35,65)}%`,"--pointer-from-center":`${ze(Math.hypot(E-50,M-50)/50,0,1)}`,"--pointer-from-top":`${E/100}`,"--pointer-from-left":`${M/100}`,"--rotate-x":`${At(-(A/5))}deg`,"--rotate-y":`${At(P/4)}deg`};Object.entries(H).forEach(([U,Z])=>{z.style.setProperty(U,Z)})};return{updateCardTransform:D,createSmoothAnimation:(_,T,O,z,W)=>{const R=performance.now(),M=W.clientWidth/2,E=W.clientHeight/2,A=P=>{const H=P-R,U=ze(H/_),Z=wa(U),re=We(Z,0,1,T,M),ee=We(Z,0,1,O,E);D(re,ee,z,W),U<1&&(x=requestAnimationFrame(A))};x=requestAnimationFrame(A)},cancelAnimation:()=>{x&&(cancelAnimationFrame(x),x=null)}}},[u]),g=F.useCallback(x=>{const D=w.current,N=C.current;if(!D||!N||!l)return;const _=D.getBoundingClientRect();l.updateCardTransform(x.clientX-_.left,x.clientY-_.top,D,N)},[l]),f=F.useCallback(()=>{const x=w.current,D=C.current;!x||!D||!l||(l.cancelAnimation(),D.classList.add("active"),x.classList.add("active"))},[l]),j=F.useCallback(x=>{const D=w.current,N=C.current;!D||!N||!l||(l.createSmoothAnimation(Be.SMOOTH_DURATION,x.offsetX,x.offsetY,D,N),N.classList.remove("active"),D.classList.remove("active"))},[l]),I=F.useCallback(x=>{const D=w.current,N=C.current;if(!D||!N||!l)return;const{beta:_,gamma:T}=x;!_||!T||l.updateCardTransform(D.clientHeight/2+T*d,D.clientWidth/2+(_-Be.DEVICE_BETA_OFFSET)*d,D,N)},[l,d]);F.useEffect(()=>{if(!u||!l)return;const x=w.current,D=C.current;if(!x||!D)return;const N=()=>window.innerWidth<768||/iPhone|iPod|Android.*Mobile/i.test(navigator.userAgent),_=g,T=f,O=j,z=I,W=()=>{!i||location.protocol!=="https:"||(typeof window.DeviceMotionEvent.requestPermission=="function"?window.DeviceMotionEvent.requestPermission?.().then(E=>{E==="granted"&&window.addEventListener("deviceorientation",z)}).catch(E=>{}):window.addEventListener("deviceorientation",z))};N()||(x.addEventListener("pointerenter",T),x.addEventListener("pointermove",_),x.addEventListener("pointerleave",O),x.addEventListener("click",W));const R=D.clientWidth-Be.INITIAL_X_OFFSET,M=Be.INITIAL_Y_OFFSET;return l.updateCardTransform(R,M,x,D),l.createSmoothAnimation(Be.INITIAL_DURATION,R,M,x,D),()=>{x.removeEventListener("pointerenter",T),x.removeEventListener("pointermove",_),x.removeEventListener("pointerleave",O),x.removeEventListener("click",W),window.removeEventListener("deviceorientation",z),l.cancelAnimation()}},[u,i,l,g,f,j,I]),F.useEffect(()=>{const x=C.current;if(!x)return;const D={"--icon":t?`url(${t})`:"none","--grain":r?`url(${r})`:"none","--behind-gradient":s?n??ba:"none","--inner-gradient":o??va};Object.entries(D).forEach(([N,_])=>{x.style.setProperty(N,_)})},[t,r,s,n,o]);const $=F.useCallback(()=>{h?.()},[h]),k=typeof window<"u"&&(window.innerWidth<768||/iPhone|iPod|Android.*Mobile/i.test(navigator.userAgent));return a.jsx("div",{ref:C,className:`pc-card-wrapper ${c}`.trim(),children:a.jsx("section",{ref:w,className:"pc-card",style:{touchAction:k?"pan-y":"auto"},children:a.jsxs("div",{className:"pc-inside",children:[a.jsx("div",{className:"pc-shine"}),a.jsx("div",{className:"pc-glare"}),a.jsxs("div",{className:"pc-content pc-avatar-content",children:[a.jsx("img",{className:"avatar",src:e,alt:`${y||"User"} avatar`,loading:"lazy",decoding:"async",onError:x=>{const D=x.target;D.style.display="none"}}),B&&a.jsxs("div",{className:"pc-user-info",children:[a.jsxs("div",{className:"pc-user-details",children:[a.jsx("div",{className:"pc-mini-avatar",children:a.jsx("img",{src:p||e,alt:`${y||"User"} mini avatar`,loading:"lazy",decoding:"async",onError:x=>{const D=x.target;D.style.opacity="0.5",D.src=e}})}),a.jsxs("div",{className:"pc-user-text",children:[a.jsxs("div",{className:"pc-handle",children:["@",b]}),a.jsx("div",{className:"pc-status",children:v})]})]}),a.jsx("button",{className:"pc-contact-btn",onClick:$,type:"button","aria-label":`Contact ${y||"user"}`,children:S})]})]}),a.jsx("div",{className:"pc-content",children:a.jsxs("div",{className:"pc-details",children:[a.jsx("h3",{children:y}),a.jsx("p",{children:m})]})})]})})})},Ea=fe.memo(Ca),Fa=({startTyping:e,onTypingComplete:t,t:r})=>{const[n,o]=F.useState(""),[s,c]=F.useState(0),[u,i]=F.useState(!0),[d,p]=F.useState(!1),y=[{prompt:">",command:"./about-me.sh",delay:500},{prompt:">",text:r("aboutsection.terminal.name"),delay:100},{prompt:">",text:r("aboutsection.terminal.age"),delay:100},{prompt:">",text:r("aboutsection.terminal.location"),delay:100},{prompt:">",text:r("aboutsection.terminal.role"),delay:100},{prompt:">",text:r("aboutsection.terminal.status"),delay:100},{prompt:">",text:r("aboutsection.terminal.passion"),delay:100},{prompt:">",text:r("aboutsection.terminal.experience"),delay:100}];return F.useEffect(()=>{if(!e||d)return;p(!0),(async()=>{for(let v=0;v<y.length;v++){const S=y[v];await new Promise(C=>setTimeout(C,S.delay));const B=S.command||S.text||"";let h="";for(let C=0;C<=B.length;C++)h=B.slice(0,C),c(v),o(w=>{const l=w.split(`
`);return l[v]=`${S.prompt} ${h}`,l.join(`
`)}),await new Promise(w=>setTimeout(w,30))}t&&t()})();const b=setInterval(()=>{i(v=>!v)},500);return()=>clearInterval(b)},[e,d]),a.jsxs(Y.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3,duration:.5},className:"group relative bg-black rounded-xl overflow-hidden shadow-2xl border border-cyan-500/20 w-full max-w-2xl transition-all duration-300 before:content-[''] before:absolute before:inset-[-1px] before:bg-gradient-to-r before:from-[#00F5FF] before:to-[#00FFB9] before:opacity-10 before:rounded-lg before:-z-10 before:transition-opacity before:duration-300 hover:before:opacity-20",style:{boxShadow:"0 0 60px rgba(0, 245, 255, 0.15)"},children:[a.jsxs("div",{className:"bg-gray-800 px-6 py-3 flex items-center gap-2 border-b border-[rgba(0,245,255,0.1)]",children:[a.jsxs("div",{className:"flex gap-2",children:[a.jsx("span",{className:"w-3 h-3 rounded-full bg-red-500"}),a.jsx("span",{className:"w-3 h-3 rounded-full bg-yellow-500"}),a.jsx("span",{className:"w-3 h-3 rounded-full bg-green-500"})]}),a.jsx("span",{className:"ml-4 text-gray-500 text-sm font-mono",children:"about-me.sh"})]}),a.jsx("div",{className:"p-8 font-mono text-base lg:text-lg min-h-[200px] relative overflow-hidden",children:n.split(`
`).map((m,b)=>a.jsxs("div",{className:"mb-2 flex items-center animate-terminal-line-fade",children:[m.includes(":")?a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"text-teal-500",children:m.split(":")[0]}),a.jsx("span",{className:"text-gray-400",children:":"}),a.jsx("span",{className:"text-cyan-600",children:m.split(":")[1]})]}):a.jsx("span",{className:"text-teal-500",children:m}),b===s&&u&&a.jsx("span",{className:"text-cyan-500 animate-blink",children:"_"})]},b))})]})},ja=()=>{const e=F.useRef(null),t=Dr(e,{once:!1,amount:.3}),r=hr(),[n,o]=F.useState(!1),{t:s}=kt();return F.useEffect(()=>{t&&r.start("visible")},[t,r]),a.jsxs("section",{ref:e,className:"about-section relative min-h-screen py-32 px-6 lg:px-12 overflow-hidden bg-[length:200%_200%] animate-gradient-shift",style:{background:`linear-gradient(180deg,
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
        )`},children:[a.jsxs("div",{className:"absolute inset-0",children:[a.jsx("div",{className:"absolute inset-0",style:{background:"radial-gradient(ellipse at 30% 0%, rgba(0, 245, 255, 0.05) 0%, transparent 40%)"}}),a.jsx("div",{className:"absolute inset-0",style:{background:"radial-gradient(ellipse at 70% 100%, rgba(0, 255, 185, 0.03) 0%, transparent 40%)"}}),a.jsx("div",{className:"absolute inset-0 opacity-[0.03] mix-blend-soft-light",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`}})]}),a.jsx("div",{className:"container mx-auto max-w-[1600px] relative z-10",children:a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32",children:[a.jsxs(Y.div,{initial:{opacity:0,x:-50},animate:{opacity:t?1:0,x:t?0:-50},transition:{duration:.6},className:"space-y-10 lg:mt-8",children:[a.jsxs(Y.div,{initial:{opacity:0,y:-30},animate:{opacity:t?1:0,y:t?0:-30},transition:{duration:.5},children:[a.jsx("h2",{className:"text-5xl lg:text-7xl font-bold mb-6 text-[#00B8D4]",style:{textShadow:"0 0 25px rgba(0, 184, 212, 0.5), 0 0 8px rgba(0, 150, 168, 0.7)"},children:s("aboutsection.title")}),a.jsx("p",{className:"text-lg lg:text-xl text-gray-300 leading-relaxed max-w-xl",children:s("aboutsection.subtitle")})]}),a.jsx(Fa,{startTyping:t,onTypingComplete:()=>o(!0),t:s}),n&&a.jsx(Y.div,{initial:{opacity:0,x:-30},animate:{opacity:1,x:0},transition:{duration:.5},className:"flex justify-start mt-8",children:a.jsxs(Y.button,{onClick:()=>window.location.href="/about",className:"group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-bold rounded-xl overflow-hidden before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-0 before:h-0 before:rounded-full before:bg-white/10 before:-translate-x-1/2 before:-translate-y-1/2 before:transition-all before:duration-[600ms] hover:before:w-[300px] hover:before:h-[300px] cursor-pointer",style:{boxShadow:"0 0 30px rgba(0, 184, 212, 0.4)"},whileHover:{scale:1.08,x:10,boxShadow:"0 0 40px rgba(0, 184, 212, 0.6), 0 0 60px rgba(0, 245, 255, 0.3)"},whileTap:{scale:.95},children:[a.jsx("span",{className:"relative z-10 transition-all duration-300 group-hover:tracking-wider",children:s("aboutsection.button")}),a.jsx("svg",{className:"w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 8l4 4m0 0l-4 4m4-4H3"})}),a.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]})})]}),a.jsx(Y.div,{className:"relative h-[600px] lg:h-[700px] flex items-center justify-center",initial:{opacity:0,x:50},animate:{opacity:t?1:0,x:t?0:50},transition:{duration:.6,delay:.2},children:a.jsx(Ea,{avatarUrl:"/profile/wish-photo.jpg",miniAvatarUrl:"/site-assets/favicon.svg",name:s("aboutsection.profilecard.name"),title:s("aboutsection.profilecard.title"),handle:"wishant",status:s("aboutsection.profilecard.status"),contactText:s("aboutsection.profilecard.contact"),showUserInfo:!0,enableTilt:!0,enableMobileTilt:!1,onContactClick:()=>{const c="+31 6 52438663";navigator.clipboard?navigator.clipboard.writeText(c).then(()=>{alert(`📞 Telefoonnummer gekopieerd!
`+c)}).catch(()=>{alert(`📞 Telefoonnummer:
`+c)}):alert(`📞 Telefoonnummer:
`+c)}})})]})}),a.jsx("div",{className:"absolute inset-0 pointer-events-none z-[1]",style:{background:`
            radial-gradient(circle at 20% 50%, rgba(15, 26, 52, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(10, 20, 45, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(13, 21, 46, 0.3) 0%, transparent 50%)
          `}})]})};const Na=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Aa=me("arrow-right",Na);const ka=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],dr=me("brain",ka);const _a=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],Sa=me("cloud",_a);const Ba=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],Ye=me("code",Ba);const Ta=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Ia=me("database",Ta);const $a=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Ma=me("shield",$a);const La=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],pr=me("terminal",La),Hr=12,Xr=300,ct="0, 245, 255",Ra=768,Pa=(e,t,r=ct)=>{const n=document.createElement("div");return n.className="particle",n.style.cssText=`
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
  `,n},Oa=e=>({proximity:e*.5,fadeDistance:e*.75}),za=(e,t,r,n,o)=>{const s=e.getBoundingClientRect(),c=(t-s.left)/s.width*100,u=(r-s.top)/s.height*100;e.style.setProperty("--glow-x",`${c}%`),e.style.setProperty("--glow-y",`${u}%`),e.style.setProperty("--glow-intensity",n.toString()),e.style.setProperty("--glow-radius",`${o}px`)},Wa=({children:e,className:t="",disableAnimations:r=!1,style:n,particleCount:o=Hr,glowColor:s=ct,enableTilt:c=!0,clickEffect:u=!1,enableMagnetism:i=!1,onClick:d})=>{const p=F.useRef(null),y=F.useRef([]),m=F.useRef([]),b=F.useRef(!1),v=F.useRef([]),S=F.useRef(!1),B=F.useRef(null),h=F.useCallback(()=>{if(S.current||!p.current)return;const{width:l,height:g}=p.current.getBoundingClientRect();v.current=Array.from({length:o},()=>Pa(Math.random()*l,Math.random()*g,s)),S.current=!0},[o,s]),C=F.useCallback(()=>{m.current.forEach(clearTimeout),m.current=[],B.current?.kill(),y.current.forEach(l=>{G.to(l,{scale:0,opacity:0,duration:.3,ease:"back.in(1.7)",onComplete:()=>{l.parentNode?.removeChild(l)}})}),y.current=[]},[]),w=F.useCallback(()=>{!p.current||!b.current||(S.current||h(),v.current.forEach((l,g)=>{const f=setTimeout(()=>{if(!b.current||!p.current)return;const j=l.cloneNode(!0);p.current.appendChild(j),y.current.push(j),G.fromTo(j,{scale:0,opacity:0},{scale:1,opacity:1,duration:.3,ease:"back.out(1.7)"}),G.to(j,{x:(Math.random()-.5)*100,y:(Math.random()-.5)*100,rotation:Math.random()*360,duration:2+Math.random()*2,ease:"none",repeat:-1,yoyo:!0}),G.to(j,{opacity:.3,duration:1.5,ease:"power2.inOut",repeat:-1,yoyo:!0})},g*100);m.current.push(f)}))},[h]);return F.useEffect(()=>{if(r||!p.current)return;const l=p.current,g=()=>{b.current=!0,w(),c&&G.to(l,{rotateX:5,rotateY:5,duration:.3,ease:"power2.out",transformPerspective:1e3})},f=()=>{b.current=!1,C(),c&&G.to(l,{rotateX:0,rotateY:0,duration:.3,ease:"power2.out"}),i&&G.to(l,{x:0,y:0,duration:.3,ease:"power2.out"})},j=$=>{if(!c&&!i)return;const k=l.getBoundingClientRect(),x=$.clientX-k.left,D=$.clientY-k.top,N=k.width/2,_=k.height/2;if(c){const T=(D-_)/_*-10,O=(x-N)/N*10;G.to(l,{rotateX:T,rotateY:O,duration:.1,ease:"power2.out",transformPerspective:1e3})}if(i){const T=(x-N)*.05,O=(D-_)*.05;B.current=G.to(l,{x:T,y:O,duration:.3,ease:"power2.out"})}},I=$=>{if(!u)return;const k=l.getBoundingClientRect(),x=$.clientX-k.left,D=$.clientY-k.top,N=Math.max(Math.hypot(x,D),Math.hypot(x-k.width,D),Math.hypot(x,D-k.height),Math.hypot(x-k.width,D-k.height)),_=document.createElement("div");_.style.cssText=`
        position: absolute;
        width: ${N*2}px;
        height: ${N*2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${s}, 0.4) 0%, rgba(${s}, 0.2) 30%, transparent 70%);
        left: ${x-N}px;
        top: ${D-N}px;
        pointer-events: none;
        z-index: 1000;
      `,l.appendChild(_),G.fromTo(_,{scale:0,opacity:1},{scale:1,opacity:0,duration:.8,ease:"power2.out",onComplete:()=>_.remove()})};return l.addEventListener("mouseenter",g),l.addEventListener("mouseleave",f),l.addEventListener("mousemove",j),l.addEventListener("click",I),d&&l.addEventListener("click",d),()=>{b.current=!1,l.removeEventListener("mouseenter",g),l.removeEventListener("mouseleave",f),l.removeEventListener("mousemove",j),l.removeEventListener("click",I),d&&l.removeEventListener("click",d),C()}},[w,C,r,c,i,u,s,d]),a.jsx("div",{ref:p,className:`${t} relative overflow-hidden`,style:{...n,position:"relative",overflow:"hidden"},children:e})},Ya=({gridRef:e,disableAnimations:t=!1,enabled:r=!0,spotlightRadius:n=Xr,glowColor:o=ct})=>{const s=F.useRef(null),c=F.useRef(!1);return F.useEffect(()=>{if(t||!e?.current||!r)return;const u=document.createElement("div");u.className="global-spotlight",u.style.cssText=`
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
    `,document.body.appendChild(u),s.current=u;const i=p=>{if(!s.current||!e.current)return;const m=e.current.closest(".bento-section")?.getBoundingClientRect(),b=m&&p.clientX>=m.left&&p.clientX<=m.right&&p.clientY>=m.top&&p.clientY<=m.bottom;c.current=b||!1;const v=e.current.querySelectorAll(".card");if(!b){G.to(s.current,{opacity:0,duration:.3,ease:"power2.out"}),v.forEach(w=>{w.style.setProperty("--glow-intensity","0")});return}const{proximity:S,fadeDistance:B}=Oa(n);let h=1/0;v.forEach(w=>{const l=w,g=l.getBoundingClientRect(),f=g.left+g.width/2,j=g.top+g.height/2,I=Math.hypot(p.clientX-f,p.clientY-j)-Math.max(g.width,g.height)/2,$=Math.max(0,I);h=Math.min(h,$);let k=0;$<=S?k=1:$<=B&&(k=(B-$)/(B-S)),za(l,p.clientX,p.clientY,k,n)}),G.to(s.current,{left:p.clientX,top:p.clientY,duration:.1,ease:"power2.out"});const C=h<=S?.8:h<=B?(B-h)/(B-S)*.8:0;G.to(s.current,{opacity:C,duration:C>0?.2:.5,ease:"power2.out"})},d=()=>{c.current=!1,e.current?.querySelectorAll(".card").forEach(p=>{p.style.setProperty("--glow-intensity","0")}),s.current&&G.to(s.current,{opacity:0,duration:.3,ease:"power2.out"})};return document.addEventListener("mousemove",i),document.addEventListener("mouseleave",d),()=>{document.removeEventListener("mousemove",i),document.removeEventListener("mouseleave",d),s.current?.parentNode?.removeChild(s.current)}},[e,t,r,n,o]),null},Ha=({children:e,gridRef:t})=>a.jsx("div",{className:"bento-section w-full",style:{fontSize:"clamp(1rem, 0.9rem + 0.5vw, 1.5rem)"},ref:t,children:e}),Xa=()=>{const[e,t]=F.useState(!1);return F.useEffect(()=>{const r=()=>t(window.innerWidth<=Ra);return r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),e},Ga=({textAutoHide:e=!0,enableStars:t=!0,enableSpotlight:r=!0,enableBorderGlow:n=!0,disableAnimations:o=!1,spotlightRadius:s=Xr,particleCount:c=Hr,enableTilt:u=!1,glowColor:i=ct,clickEffect:d=!0,enableMagnetism:p=!0,cards:y})=>{const m=F.useRef(null),b=Xa(),v=o||b,B=y||[{color:"#0A0E27",title:"CyberGuard Pro",description:"Advanced network security monitoring system with real-time threat detection",label:"Live Project",featured:!0,image:"/api/placeholder/600/400",span:{cols:2,rows:2}},{color:"#0A0E27",title:"Data Vault",description:"Encrypted cloud storage solution with zero-knowledge architecture",label:"In Development",image:"/api/placeholder/400/300"},{color:"#0A0E27",title:"AI Assistant",description:"Smart automation platform powered by machine learning",label:"Featured",image:"/api/placeholder/400/300"},{color:"#0B1029",title:"Blockchain Wallet",description:"Secure crypto wallet with multi-chain support",label:"Beta",span:{cols:2,rows:1},image:"/api/placeholder/600/300"},{color:"#0C132B",title:"Task Manager",description:"Productivity app with AI",label:"Live",image:"/api/placeholder/400/300"},{color:"#0A0E27",title:"Weather Dashboard",description:"Real-time weather analytics",label:"Live",image:"/api/placeholder/400/300"}];return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
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
        `}),r&&a.jsx(Ya,{gridRef:m,disableAnimations:v,enabled:r,spotlightRadius:s,glowColor:i}),a.jsx(Ha,{gridRef:m,children:a.jsx("div",{className:"card-responsive grid",children:B.map((h,C)=>{const w=[h.span?.cols===2?"card-span-2-cols":"",h.span?.rows===2?"card-span-2-rows":""].filter(Boolean).join(" "),l=`card relative min-h-[200px] w-full rounded-[20px] border border-solid font-light overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,245,255,0.15)] ${n?"card--border-glow":""} ${w}`,g={backgroundColor:h.color||"var(--background-dark)",borderColor:"var(--border-color)",color:"var(--white)","--glow-x":"50%","--glow-y":"50%","--glow-intensity":"0","--glow-radius":"200px"};return t?a.jsxs(Wa,{className:l,style:g,disableAnimations:v,particleCount:c,glowColor:i,enableTilt:u,clickEffect:d,enableMagnetism:p,onClick:h.onClick,children:[h.image&&a.jsx("img",{src:h.image,alt:h.title,loading:"lazy",decoding:"async",className:"card-image"}),a.jsxs("div",{className:"card-content-overlay",children:[a.jsx("div",{className:"card__header flex justify-between gap-3 mb-2",children:a.jsx("span",{className:"card__label text-xs font-semibold text-cyan-400 uppercase tracking-wider",children:h.label})}),a.jsx("h3",{className:`card__title font-bold ${h.featured?"text-2xl":"text-xl"} mb-2 text-white ${e?"text-clamp-1":""}`,children:h.title}),a.jsx("p",{className:`card__description text-sm leading-6 text-gray-300 ${e?"text-clamp-2":""}`,children:h.description})]})]},C):a.jsxs("div",{className:l,style:g,ref:f=>{if(!f)return;const j=k=>{if(v)return;const x=f.getBoundingClientRect(),D=k.clientX-x.left,N=k.clientY-x.top,_=x.width/2,T=x.height/2;if(u){const O=(N-T)/T*-10,z=(D-_)/_*10;G.to(f,{rotateX:O,rotateY:z,duration:.1,ease:"power2.out",transformPerspective:1e3})}if(p){const O=(D-_)*.05,z=(N-T)*.05;G.to(f,{x:O,y:z,duration:.3,ease:"power2.out"})}},I=()=>{v||(u&&G.to(f,{rotateX:0,rotateY:0,duration:.3,ease:"power2.out"}),p&&G.to(f,{x:0,y:0,duration:.3,ease:"power2.out"}))},$=k=>{if(!d||v)return;const x=f.getBoundingClientRect(),D=k.clientX-x.left,N=k.clientY-x.top,_=Math.max(Math.hypot(D,N),Math.hypot(D-x.width,N),Math.hypot(D,N-x.height),Math.hypot(D-x.width,N-x.height)),T=document.createElement("div");T.style.cssText=`
                      position: absolute;
                      width: ${_*2}px;
                      height: ${_*2}px;
                      border-radius: 50%;
                      background: radial-gradient(circle, rgba(${i}, 0.4) 0%, rgba(${i}, 0.2) 30%, transparent 70%);
                      left: ${D-_}px;
                      top: ${N-_}px;
                      pointer-events: none;
                      z-index: 1000;
                    `,f.appendChild(T),G.fromTo(T,{scale:0,opacity:1},{scale:1,opacity:0,duration:.8,ease:"power2.out",onComplete:()=>T.remove()})};f.addEventListener("mousemove",j),f.addEventListener("mouseleave",I),f.addEventListener("click",$),h.onClick&&f.addEventListener("click",h.onClick)},children:[h.image&&a.jsx("img",{src:h.image,alt:h.title,loading:"lazy",decoding:"async",className:"card-image"}),a.jsxs("div",{className:"card-content-overlay",children:[a.jsx("div",{className:"card__header flex justify-between gap-3 mb-2",children:a.jsx("span",{className:"card__label text-xs font-semibold text-cyan-400 uppercase tracking-wider",children:h.label})}),a.jsx("h3",{className:`card__title font-bold ${h.featured?"text-2xl":"text-xl"} mb-2 text-white ${e?"text-clamp-1":""}`,children:h.title}),a.jsx("p",{className:`card__description text-sm leading-6 text-gray-300 ${e?"text-clamp-2":""}`,children:h.description})]})]},C)})})})]})},qa=()=>{const e=qr(),t=F.useRef(null),r=Dr(t,{once:!1,amount:.2}),n=hr(),{t:o}=kt();F.useEffect(()=>{r&&n.start("visible")},[r,n]);const s=[{color:"#0A0E27",title:"WishShield",description:o("featured.wishshield.desc"),label:o("featured.label.cybersecurity"),featured:!0,image:"/projects/security/futuristic_cybersecurity_shield_icon_with_hexagonal_shape.jpeg",span:{cols:2,rows:2}},{color:"#0B1029",title:"TableTech",description:o("featured.tabletech.desc"),label:o("featured.label.live"),image:"/projects/business/modern_restaurant_technology_visualization_with_prominent_tabletech.jpeg"},{color:"#0C132B",title:"Calendify",description:o("featured.calendify.desc"),label:o("featured.label.personal"),image:"/projects/business/professional_office_management_dashboard_clean_calendar_interface.jpeg"},{color:"#0D152E",title:"WishGuard",description:o("featured.wishguard.desc"),label:o("featured.label.cybersecurity"),span:{cols:2,rows:1},image:"/projects/security/fix_the_letter_b__so_that.png"},{color:"#0E1831",title:"Crypto Bot",description:o("featured.cryptobot.desc"),label:o("featured.label.comingSoon"),image:"/projects/business/futuristic_cryptocurrency_trading_bot_visualization_wb_logo.jpg"},{color:"#0A0E27",title:"Urban Mobility",description:o("featured.urbanmobility.desc"),label:o("featured.label.personal"),image:"/projects/utilities/professional_terminal_interface_with_urban_mobility_text_v2.png"}],c=[{name:o("featured.skill.ai"),level:85,category:o("featured.category.ai"),icon:a.jsx(dr,{}),color:"from-purple-400 to-pink-500",note:o("featured.skill.ai.note")},{name:o("featured.skill.react"),level:80,category:o("featured.category.frontend"),icon:a.jsx(Ye,{}),color:"from-cyan-400 to-blue-500"},{name:o("featured.skill.typescript"),level:80,category:o("featured.category.frontend"),icon:a.jsx(Ye,{}),color:"from-blue-400 to-purple-500"},{name:o("featured.skill.csharp"),level:75,category:o("featured.category.backend"),icon:a.jsx(Ye,{}),color:"from-purple-400 to-indigo-500"},{name:o("featured.skill.nodejs"),level:75,category:o("featured.category.backend"),icon:a.jsx(pr,{}),color:"from-green-400 to-emerald-500"},{name:o("featured.skill.python"),level:70,category:o("featured.category.backend"),icon:a.jsx(pr,{}),color:"from-yellow-400 to-orange-500"},{name:o("featured.skill.cybersecurity"),level:40,category:o("featured.category.security"),icon:a.jsx(Ma,{}),color:"from-red-400 to-pink-500",note:o("featured.skill.cybersecurity.note")},{name:o("featured.skill.databases"),level:70,category:o("featured.category.database"),icon:a.jsx(Ia,{}),color:"from-indigo-400 to-blue-500"},{name:o("featured.skill.docker"),level:65,category:o("featured.category.devops"),icon:a.jsx(Sa,{}),color:"from-purple-400 to-pink-500"},{name:o("featured.skill.ml"),level:70,category:o("featured.category.ai"),icon:a.jsx(dr,{}),color:"from-pink-400 to-rose-500"},{name:o("featured.skill.other"),level:70,category:o("featured.category.tools"),icon:a.jsx(Ye,{}),color:"from-teal-400 to-cyan-500"}],u=[...new Set(c.map(i=>i.category))];return a.jsxs("section",{ref:t,className:"featured-projects-skills-section relative min-h-screen pt-20 pb-24 px-6 lg:px-12 overflow-hidden",style:{background:`linear-gradient(180deg,
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
        )`},children:[a.jsxs("div",{className:"absolute inset-0",children:[a.jsx("div",{className:"absolute inset-0 opacity-5",style:{backgroundImage:"linear-gradient(rgba(0, 245, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 245, 255, 0.1) 1px, transparent 1px)",backgroundSize:"50px 50px"}}),a.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-1/2 hidden lg:block",style:{background:"linear-gradient(90deg, rgba(0, 184, 212, 0.02) 0%, transparent 100%)"}}),a.jsx("div",{className:"absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block",style:{background:"linear-gradient(270deg, rgba(0, 255, 185, 0.02) 0%, transparent 100%)"}}),a.jsxs("div",{className:"absolute left-1/2 top-[5%] bottom-[5%] w-px transform -translate-x-1/2 z-10 hidden lg:block",children:[a.jsx("div",{className:"absolute inset-0 w-px bg-gradient-to-b from-transparent via-cyan-500/40 to-transparent"}),a.jsx("div",{className:"absolute inset-0 w-[2px] bg-gradient-to-b from-transparent via-cyan-400/25 to-transparent"}),a.jsx("div",{className:"absolute inset-0 w-[4px] bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent blur-sm"}),a.jsx("div",{className:"absolute inset-0 w-[8px] bg-gradient-to-b from-transparent via-cyan-300/15 to-transparent blur-lg"}),a.jsx("div",{className:"absolute top-0 left-1/2 transform -translate-x-1/2",children:a.jsx("div",{className:"w-3 h-3 bg-cyan-500/60 rounded-full blur-sm"})}),a.jsx("div",{className:"absolute bottom-0 left-1/2 transform -translate-x-1/2",children:a.jsx("div",{className:"w-3 h-3 bg-cyan-500/60 rounded-full blur-sm"})})]})]}),a.jsx("div",{className:"container mx-auto max-w-[1600px] relative z-10",children:a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16",children:[a.jsxs(Y.div,{initial:{opacity:0,x:-50},animate:{opacity:r?1:0,x:r?0:-50},transition:{duration:.6},className:"space-y-8",children:[a.jsxs("div",{className:"text-left",children:[a.jsx("h2",{className:"text-4xl lg:text-5xl font-bold mb-4 text-[#00F5FF]",style:{textShadow:"0 0 30px rgba(0, 245, 255, 0.5), 0 0 10px rgba(0, 184, 212, 0.7)"},children:o("featured.projects.title")}),a.jsx("p",{className:"text-lg text-gray-400",children:o("featured.projects.description")})]}),a.jsx("div",{className:"w-full",children:a.jsx(Ga,{cards:s,textAutoHide:!1,enableStars:!0,enableSpotlight:!0,enableBorderGlow:!0,enableTilt:!0,clickEffect:!0,enableMagnetism:!0,glowColor:"0, 245, 255"})}),a.jsx(Y.div,{initial:{opacity:0,y:20},animate:{opacity:r?1:0,y:r?0:20},transition:{delay:.4,duration:.5},children:a.jsxs("button",{type:"button",onClick:()=>e("/portfolio"),className:"group inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold bg-[linear-gradient(135deg,rgba(0,245,255,0.1)_0%,rgba(0,184,212,0.1)_100%)] border-2 border-[rgba(0,245,255,0.3)] text-[#00F5FF] transition-all duration-300 hover:-translate-y-0.5",style:{boxShadow:"0 0 20px rgba(0, 245, 255, 0.2)"},onMouseEnter:i=>{i.currentTarget.style.boxShadow="0 0 30px rgba(0, 245, 255, 0.4)"},onMouseLeave:i=>{i.currentTarget.style.boxShadow="0 0 20px rgba(0, 245, 255, 0.2)"},children:[o("featured.viewAllProjects"),a.jsx(Aa,{className:"w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"})]})})]}),a.jsxs(Y.div,{initial:{opacity:0,x:50},animate:{opacity:r?1:0,x:r?0:50},transition:{duration:.6},className:"space-y-8 lg:pl-12",children:[a.jsxs("div",{className:"text-left",children:[a.jsx("h2",{className:"text-4xl lg:text-5xl font-bold mb-4 text-[#00FFB9]",style:{textShadow:"0 0 30px rgba(0, 255, 185, 0.5), 0 0 10px rgba(0, 235, 175, 0.7)"},children:o("featured.skills.title")}),a.jsx("p",{className:"text-lg text-gray-400",children:o("featured.skills.description")})]}),a.jsxs("div",{className:"space-y-6",children:[a.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:u.map((i,d)=>a.jsx(Y.span,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:d*.1},className:"px-3 py-1 text-xs font-semibold rounded-full bg-slate-800/50 text-cyan-400 border border-cyan-500/20",children:i},i))}),a.jsx("div",{className:"space-y-4",children:c.map((i,d)=>a.jsxs(Y.div,{initial:{opacity:0,x:30},animate:{opacity:r?1:0,x:r?0:30},transition:{delay:.1*d,duration:.5},className:"group",children:[a.jsxs("div",{className:"flex items-center justify-between mb-2",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("span",{className:"text-cyan-400",children:i.icon}),a.jsx("span",{className:"text-white font-medium",children:i.name})]}),a.jsxs("span",{className:"text-cyan-400 font-bold",children:[i.level,"%"]})]}),a.jsx("div",{className:"relative h-2 bg-slate-800/50 rounded-full overflow-hidden",children:a.jsx(Y.div,{initial:{width:0},animate:{width:r?`${i.level}%`:0},transition:{delay:.2+d*.1,duration:1,ease:"easeOut"},className:`absolute h-full bg-gradient-to-r ${i.color} rounded-full`,children:a.jsx("div",{className:"absolute inset-0 opacity-50 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)] animate-shimmer"})})}),i.note&&a.jsx("p",{className:"text-xs text-gray-400 italic mt-1 ml-6",children:i.note})]},i.name))}),a.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-8",children:[a.jsxs(Y.div,{initial:{opacity:0,y:20},animate:{opacity:r?1:0,y:r?0:20},transition:{delay:.6},className:"text-center p-4 bg-slate-800/30 rounded-lg border border-cyan-500/20",children:[a.jsx("div",{className:"text-2xl font-bold text-cyan-400",children:"8+"}),a.jsx("div",{className:"text-xs text-gray-400",children:o("featured.stats.technologies")})]}),a.jsxs(Y.div,{initial:{opacity:0,y:20},animate:{opacity:r?1:0,y:r?0:20},transition:{delay:.7},className:"text-center p-4 bg-slate-800/30 rounded-lg border border-cyan-500/20",children:[a.jsx("div",{className:"text-2xl font-bold text-cyan-400",children:"3+"}),a.jsx("div",{className:"text-xs text-gray-400",children:o("featured.stats.experience")})]}),a.jsxs(Y.div,{initial:{opacity:0,y:20},animate:{opacity:r?1:0,y:r?0:20},transition:{delay:.8},className:"text-center p-4 bg-slate-800/30 rounded-lg border border-cyan-500/20",children:[a.jsx("div",{className:"text-2xl font-bold text-cyan-400",children:"20+"}),a.jsx("div",{className:"text-xs text-gray-400",children:o("featured.stats.projects")})]})]})]})]})]})})]})},ao=({isVisible:e=!0})=>(fe.useEffect(()=>(document.documentElement.style.scrollBehavior="smooth",()=>{document.documentElement.style.scrollBehavior="auto"}),[]),a.jsxs("div",{className:"relative","data-page":"home",children:[a.jsx(Zr,{}),a.jsx("section",{id:"home",children:a.jsx(ya,{isVisible:e})}),a.jsx("section",{id:"about",children:a.jsx(ja,{})}),a.jsx("section",{id:"portfolio",children:a.jsx(qa,{})}),a.jsx("section",{id:"contact",children:a.jsx(Ur,{useHomepageStyle:!0})}),a.jsx(Kr,{useHomepageStyle:!0})]}));export{ao as default};
