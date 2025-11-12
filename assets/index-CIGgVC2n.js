import{j as n,m as H,u as pr,a as Dr}from"./vendor-animation-DFw3RoWT.js";import{r as k,R as me,u as qr}from"./vendor-router-BmFJG5KR.js";import{c as kt}from"./index-C79LPYuS.js";import{g as X}from"./index-D2IpGxFF.js";import{c as xe,C as Gr,F as Ur}from"./Footer-DbAbzWv8.js";import{G as Kr}from"./GlobalNavbar-CENVFPBD.js";import"./vendor-react-Gt25DZgv.js";import"./vendor-three-DO_qwccS.js";let Te,ve,xt,Zr=()=>xt||_t.register(window.gsap),Mt=typeof Intl<"u"?new Intl.Segmenter:0,Je=e=>typeof e=="string"?Je(document.querySelectorAll(e)):"length"in e?Array.from(e):[e],Ot=e=>Je(e).filter(t=>t instanceof HTMLElement),gt=[],pt=function(){},Jr=/\s+/g,Pt=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),zt={left:0,top:0,width:0,height:0},Wt=(e,t)=>{if(t){let r=new Set(e.join("").match(t)||gt),a=e.length,s,o,c,u;if(r.size)for(;--a>-1;){o=e[a];for(c of r)if(c.startsWith(o)&&c.length>o.length){for(s=0,u=o;c.startsWith(u+=e[a+ ++s])&&u.length<c.length;);if(s&&u.length===c.length){e[a]=c,e.splice(a+1,s);break}}}}return e},Yt=e=>window.getComputedStyle(e).display==="inline"&&(e.style.display="inline-block"),be=(e,t,r)=>t.insertBefore(typeof e=="string"?document.createTextNode(e):e,r),yt=(e,t,r)=>{let a=t[e+"sClass"]||"",{tag:s="div",aria:o="auto",propIndex:c=!1}=t,u=e==="line"?"block":"inline-block",i=a.indexOf("++")>-1,d=p=>{let D=document.createElement(s),m=r.length+1;return a&&(D.className=a+(i?" "+a+m:"")),c&&D.style.setProperty("--"+e,m+""),o!=="none"&&D.setAttribute("aria-hidden","true"),s!=="span"&&(D.style.position="relative",D.style.display=u),D.textContent=p,r.push(D),D};return i&&(a=a.replace("++","")),d.collection=r,d},Qr=(e,t,r,a)=>{let s=yt("line",r,a),o=window.getComputedStyle(e).textAlign||"left";return(c,u)=>{let i=s("");for(i.style.textAlign=o,e.insertBefore(i,t[c]);c<u;c++)i.appendChild(t[c]);i.normalize()}},hr=(e,t,r,a,s,o,c,u,i,d)=>{var p;let D=Array.from(e.childNodes),m=0,{wordDelimiter:v,reduceWhiteSpace:j=!0,prepareText:E}=t,$=e.getBoundingClientRect(),f=$,C=!j&&window.getComputedStyle(e).whiteSpace.substring(0,3)==="pre",N=0,l=r.collection,x,b,y,w,L,h,_,A,F,T,I,O,P,z,R,g,S,B;for(typeof v=="object"?(y=v.delimiter||v,b=v.replaceWith||""):b=v===""?"":v||" ",x=b!==" ";m<D.length;m++)if(w=D[m],w.nodeType===3){for(R=w.textContent||"",j?R=R.replace(Jr," "):C&&(R=R.replace(/\n/g,b+`
`)),E&&(R=E(R,e)),w.textContent=R,L=b||y?R.split(y||b):R.match(u)||gt,S=L[L.length-1],A=x?S.slice(-1)===" ":!S,S||L.pop(),f=$,_=x?L[0].charAt(0)===" ":!L[0],_&&be(" ",e,w),L[0]||L.shift(),Wt(L,i),o&&d||(w.textContent=""),F=1;F<=L.length;F++)if(g=L[F-1],!j&&C&&g.charAt(0)===`
`&&((p=w.previousSibling)==null||p.remove(),be(document.createElement("br"),e,w),g=g.slice(1)),!j&&g==="")be(b,e,w);else if(g===" ")e.insertBefore(document.createTextNode(" "),w);else{if(x&&g.charAt(0)===" "&&be(" ",e,w),N&&F===1&&!_&&l.indexOf(N.parentNode)>-1?(h=l[l.length-1],h.appendChild(document.createTextNode(a?"":g))):(h=r(a?"":g),be(h,e,w),N&&F===1&&!_&&h.insertBefore(N,h.firstChild)),a)for(I=Mt?Wt([...Mt.segment(g)].map(W=>W.segment),i):g.match(u)||gt,B=0;B<I.length;B++)h.appendChild(I[B]===" "?document.createTextNode(" "):a(I[B]));if(o&&d){if(R=w.textContent=R.substring(g.length+1,R.length),T=h.getBoundingClientRect(),T.top>f.top&&T.left<=f.left){for(O=e.cloneNode(),P=e.childNodes[0];P&&P!==h;)z=P,P=P.nextSibling,O.appendChild(z);e.parentNode.insertBefore(O,e),s&&Yt(O)}f=T}(F<L.length||A)&&be(F>=L.length?" ":x&&g.slice(-1)===" "?" "+b:b,e,w)}e.removeChild(w),N=0}else w.nodeType===1&&(c&&c.indexOf(w)>-1?(l.indexOf(w.previousSibling)>-1&&l[l.length-1].appendChild(w),N=w):(hr(w,t,r,a,s,o,c,u,i,!0),N=0),s&&Yt(w))};const fr=class mr{constructor(t,r){this.isSplit=!1,Zr(),this.elements=Ot(t),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=r,this._split=()=>this.isSplit&&this.split(this.vars);let a=[],s,o=()=>{let c=a.length,u;for(;c--;){u=a[c];let i=u.element.offsetWidth;if(i!==u.width){u.width=i,this._split();return}}};this._data={orig:a,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(s),s=setTimeout(o,200)})},pt(this),this.split(r)}split(t){this.isSplit&&this.revert(),this.vars=t=t||this.vars||{};let{type:r="chars,words,lines",aria:a="auto",deepSlice:s=!0,smartWrap:o,onSplit:c,autoSplit:u=!1,specialChars:i,mask:d}=this.vars,p=r.indexOf("lines")>-1,D=r.indexOf("chars")>-1,m=r.indexOf("words")>-1,v=D&&!m&&!p,j=i&&("push"in i?new RegExp("(?:"+i.join("|")+")","gu"):i),E=j?new RegExp(j.source+"|"+Pt.source,"gu"):Pt,$=!!t.ignore&&Ot(t.ignore),{orig:f,animTime:C,obs:N}=this._data,l;return(D||m||p)&&(this.elements.forEach((x,b)=>{f[b]={element:x,html:x.innerHTML,ariaL:x.getAttribute("aria-label"),ariaH:x.getAttribute("aria-hidden")},a==="auto"?x.setAttribute("aria-label",(x.textContent||"").trim()):a==="hidden"&&x.setAttribute("aria-hidden","true");let y=[],w=[],L=[],h=D?yt("char",t,y):null,_=yt("word",t,w),A,F,T,I;if(hr(x,t,_,h,v,s&&(p||v),$,E,j,!1),p){let O=Je(x.childNodes),P=Qr(x,O,t,L),z,R=[],g=0,S=O.map(W=>W.nodeType===1?W.getBoundingClientRect():zt),B=zt;for(A=0;A<O.length;A++)z=O[A],z.nodeType===1&&(z.nodeName==="BR"?(R.push(z),P(g,A+1),g=A+1,B=S[g]):(A&&S[A].top>B.top&&S[A].left<=B.left&&(P(g,A),g=A),B=S[A]));g<A&&P(g,A),R.forEach(W=>{var G;return(G=W.parentNode)==null?void 0:G.removeChild(W)})}if(!m){for(A=0;A<w.length;A++)if(F=w[A],D||!F.nextSibling||F.nextSibling.nodeType!==3)if(o&&!p){for(T=document.createElement("span"),T.style.whiteSpace="nowrap";F.firstChild;)T.appendChild(F.firstChild);F.replaceWith(T)}else F.replaceWith(...F.childNodes);else I=F.nextSibling,I&&I.nodeType===3&&(I.textContent=(F.textContent||"")+(I.textContent||""),F.remove());w.length=0,x.normalize()}this.lines.push(...L),this.words.push(...w),this.chars.push(...y)}),d&&this[d]&&this.masks.push(...this[d].map(x=>{let b=x.cloneNode();return x.replaceWith(b),b.appendChild(x),x.className&&(b.className=x.className.replace(/(\b\w+\b)/g,"$1-mask")),b.style.overflow="clip",b}))),this.isSplit=!0,ve&&(u?ve.addEventListener("loadingdone",this._split):ve.status),(l=c&&c(this))&&l.totalTime&&(this._data.anim=C?l.totalTime(C):l),p&&u&&this.elements.forEach((x,b)=>{f[b].width=x.offsetWidth,N&&N.observe(x)}),this}revert(){var t,r;let{orig:a,anim:s,obs:o}=this._data;return o&&o.disconnect(),a.forEach(({element:c,html:u,ariaL:i,ariaH:d})=>{c.innerHTML=u,i?c.setAttribute("aria-label",i):c.removeAttribute("aria-label"),d?c.setAttribute("aria-hidden",d):c.removeAttribute("aria-hidden")}),this.chars.length=this.words.length=this.lines.length=a.length=this.masks.length=0,this.isSplit=!1,ve==null||ve.removeEventListener("loadingdone",this._split),s&&(this._data.animTime=s.totalTime(),s.revert()),(r=(t=this.vars).onRevert)==null||r.call(t,this),this}static create(t,r){return new mr(t,r)}static register(t){Te=Te||t||window.gsap,Te&&(Je=Te.utils.toArray,pt=Te.core.context||pt),!xt&&window.innerWidth>0&&(ve=document.fonts,xt=!0)}};fr.version="3.13.0";let _t=fr;var Vr=/(?:^\s+|\s+$)/g,en=/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2642\u2640]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDD27\uDCBC\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCC\uDFCB]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;function St(e){var t=e.nodeType,r="";if(t===1||t===9||t===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)r+=St(e)}else if(t===3||t===4)return e.nodeValue;return r}function se(e,t,r,a,s){if(e+="",r&&(e=e.trim?e.trim():e.replace(Vr,"")),t&&t!=="")return e.replace(/>/g,"&gt;").replace(/</g,"&lt;").split(t);for(var o=[],c=e.length,u=0,i,d;u<c;u++)d=e.charAt(u),(d.charCodeAt(0)>=55296&&d.charCodeAt(0)<=56319||e.charCodeAt(u+1)>=65024&&e.charCodeAt(u+1)<=65039)&&(i=((e.substr(u,12).split(en)||[])[1]||"").length||2,d=e.substr(u,i),o.emoji=1,u+=i-1),o.push(s?d:d===">"?"&gt;":d==="<"?"&lt;":a&&d===" "&&(e.charAt(u-1)===" "||e.charAt(u+1)===" ")?"&nbsp;":d);return o}var Xe=(function(){function e(r){this.chars=se(r),this.sets=[],this.length=50;for(var a=0;a<20;a++)this.sets[a]=Xt(80,this.chars)}var t=e.prototype;return t.grow=function(a){for(var s=0;s<20;s++)this.sets[s]+=Xt(a-this.length,this.chars);this.length=a},e})(),pe,xr,gr=function(){return pe||typeof window<"u"&&(pe=window.gsap)&&pe.registerPlugin&&pe},tn=1,Ht=/\s+/g,Xt=function(t,r){for(var a=r.length,s="";--t>-1;)s+=r[~~(Math.random()*a)];return s},vt="ABCDEFGHIJKLMNOPQRSTUVWXYZ",qt=vt.toLowerCase(),rn={upperCase:new Xe(vt),lowerCase:new Xe(qt),upperAndLowerCase:new Xe(vt+qt)},Gt=function(){xr=pe=gr()},rt={version:"3.13.0",name:"scrambleText",register:function(t,r,a){pe=t,Gt()},init:function(t,r,a,s,o){if(xr||Gt(),this.prop="innerHTML"in t?"innerHTML":"textContent"in t?"textContent":0,!!this.prop){this.target=t,typeof r!="object"&&(r={text:r});var c=r.text||r.value||"",u=r.trim!==!1,i=this,d,p,D,m;return i.delimiter=d=r.delimiter||"",i.original=se(St(t).replace(Ht," ").split("&nbsp;").join(""),d,u),(c==="{original}"||c===!0||c==null)&&(c=i.original.join(d)),i.text=se((c||"").replace(Ht," "),d,u),i.hasClass=!!(r.newClass||r.oldClass),i.newClass=r.newClass,i.oldClass=r.oldClass,m=d==="",i.textHasEmoji=m&&!!i.text.emoji,i.charsHaveEmoji=!!r.chars&&!!se(r.chars).emoji,i.length=m?i.original.length:i.original.join(d).length,i.lengthDif=(m?i.text.length:i.text.join(d).length)-i.length,i.fillChar=r.fillChar||r.chars&&~r.chars.indexOf(" ")?"&nbsp;":"",i.charSet=D=rn[r.chars||"upperCase"]||new Xe(r.chars),i.speed=.05/(r.speed||1),i.prevScrambleTime=0,i.setIndex=Math.random()*20|0,p=i.length+Math.max(i.lengthDif,0),p>D.length&&D.grow(p),i.chars=D.sets[i.setIndex],i.revealDelay=r.revealDelay||0,i.tweenLength=r.tweenLength!==!1,i.tween=a,i.rightToLeft=!!r.rightToLeft,i._props.push("scrambleText","text"),tn}},render:function(t,r){var a=r.target,s=r.prop,o=r.text,c=r.delimiter,u=r.tween,i=r.prevScrambleTime,d=r.revealDelay,p=r.setIndex,D=r.chars,m=r.charSet,v=r.length,j=r.textHasEmoji,E=r.charsHaveEmoji,$=r.lengthDif,f=r.tweenLength,C=r.oldClass,N=r.newClass,l=r.rightToLeft,x=r.fillChar,b=r.speed,y=r.original,w=r.hasClass,L=o.length,h=u._time,_=h-i,A,F,T,I,O,P,z,R,g,S,B;d&&(u._from&&(h=u._dur-h),t=h===0?0:h<d?1e-6:h===u._dur?1:u._ease((h-d)/(u._dur-d))),t<0?t=0:t>1&&(t=1),l&&(t=1-t),A=~~(t*L+.5),t?((_>b||_<-b)&&(r.setIndex=p=(p+(Math.random()*19|0))%20,r.chars=m.sets[p],r.prevScrambleTime+=_),I=D):I=y.join(c),B=u._from?t:1-t,S=v+(f?u._from?B*B*B:1-B*B*B:1)*$,l?t===1&&(u._from||u.data==="isFromStart")?(T="",I=y.join(c)):(z=o.slice(A).join(c),E?T=se(I).slice(0,S-(j?se(z):z).length+.5|0).join(""):T=I.substr(0,S-(j?se(z):z).length+.5|0),I=z):(T=o.slice(0,A).join(c),F=(j?se(T):T).length,E?I=se(I).slice(F,S+.5|0).join(""):I=I.substr(F,S-F+.5|0)),w?(R=l?C:N,g=l?N:C,O=R&&A!==0,P=g&&A!==L,z=(O?"<span class='"+R+"'>":"")+T+(O?"</span>":"")+(P?"<span class='"+g+"'>":"")+c+I+(P?"</span>":"")):z=T+c+I,a[s]=x==="&nbsp;"&&~z.indexOf("  ")?z.split("  ").join("&nbsp;&nbsp;"):z}};rt.emojiSafeSplit=se;rt.getText=St;gr()&&pe.registerPlugin(rt);X.registerPlugin(_t,rt);const nn=({radius:e=100,duration:t=1.2,speed:r=.5,scrambleChars:a=".:",className:s="",style:o={},children:c})=>{const u=k.useRef(null);return k.useEffect(()=>{if(!u.current)return;const i=_t.create(u.current.querySelector("p"),{type:"chars",charsClass:"inline-block will-change-transform"});i.chars.forEach(D=>{const m=D;X.set(m,{attr:{"data-content":m.innerHTML}})});const d=D=>{i.chars.forEach(m=>{const v=m,{left:j,top:E,width:$,height:f}=v.getBoundingClientRect(),C=D.clientX-(j+$/2),N=D.clientY-(E+f/2),l=Math.hypot(C,N);l<e&&X.to(v,{overwrite:!0,duration:t*(1-l/e),scrambleText:{text:v.dataset.content||"",chars:a,speed:r},ease:"none"})})},p=u.current;return p.addEventListener("pointermove",d),()=>{p.removeEventListener("pointermove",d),i.revert()}},[e,t,r,a]),n.jsx("div",{ref:u,className:s,style:o,children:n.jsx("p",{children:c})})},an=(e,t)=>{const r=new Set([...Object.keys(e),...t.flatMap(s=>Object.keys(s))]),a={};return r.forEach(s=>{a[s]=[e[s],...t.map(o=>o[s])]}),a},Ut=({text:e="",delay:t=200,className:r="",animateBy:a="words",direction:s="top",threshold:o=.1,rootMargin:c="0px",animationFrom:u,animationTo:i,easing:d=m=>m,onAnimationComplete:p,stepDuration:D=.35})=>{const m=a==="words"?e.split(" "):e.split(""),[v,j]=k.useState(!1),E=k.useRef(null);k.useEffect(()=>{if(!E.current)return;const y=new IntersectionObserver(([w])=>{w.isIntersecting&&(j(!0),y.unobserve(E.current))},{threshold:o,rootMargin:c});return y.observe(E.current),()=>y.disconnect()},[o,c]);const $=k.useMemo(()=>s==="top"?{filter:"blur(10px)",opacity:0,y:-50}:{filter:"blur(10px)",opacity:0,y:50},[s]),f=k.useMemo(()=>[{filter:"blur(5px)",opacity:.5,y:s==="top"?5:-5},{filter:"blur(0px)",opacity:1,y:0}],[s]),C=u??$,N=i??f,l=N.length+1,x=D*(l-1),b=Array.from({length:l},(y,w)=>l===1?0:w/(l-1));return n.jsx("p",{ref:E,className:`blur-text ${r} flex flex-wrap`,children:m.map((y,w)=>{const L=an(C,N),h={duration:x,times:b,delay:w*t/1e3,ease:d};return n.jsxs(H.span,{initial:C,animate:v?L:C,transition:h,onAnimationComplete:w===m.length-1?p:void 0,style:{display:"inline-block",willChange:"transform, filter, opacity"},children:[y===" "?" ":y,a==="words"&&w<m.length-1&&" "]},w)})})};var J=function(){return J=Object.assign||function(t){for(var r,a=1,s=arguments.length;a<s;a++){r=arguments[a];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},J.apply(this,arguments)};function Qe(e,t,r){if(r||arguments.length===2)for(var a=0,s=t.length,o;a<s;a++)(o||!(a in t))&&(o||(o=Array.prototype.slice.call(t,0,a)),o[a]=t[a]);return e.concat(o||Array.prototype.slice.call(t))}var q="-ms-",Re="-moz-",Y="-webkit-",yr="comm",nt="rule",Bt="decl",sn="@import",vr="@keyframes",on="@layer",br=Math.abs,Tt=String.fromCharCode,bt=Object.assign;function cn(e,t){return Z(e,0)^45?(((t<<2^Z(e,0))<<2^Z(e,1))<<2^Z(e,2))<<2^Z(e,3):0}function wr(e){return e.trim()}function ce(e,t){return(e=t.exec(e))?e[0]:e}function M(e,t,r){return e.replace(t,r)}function qe(e,t,r){return e.indexOf(t,r)}function Z(e,t){return e.charCodeAt(t)|0}function Fe(e,t,r){return e.slice(t,r)}function oe(e){return e.length}function Cr(e){return e.length}function $e(e,t){return t.push(e),e}function un(e,t){return e.map(t).join("")}function Kt(e,t){return e.filter(function(r){return!ce(r,t)})}var at=1,je=1,Er=0,te=0,U=0,_e="";function st(e,t,r,a,s,o,c,u){return{value:e,root:t,parent:r,type:a,props:s,children:o,line:at,column:je,length:c,return:"",siblings:u}}function le(e,t){return bt(st("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function we(e){for(;e.root;)e=le(e.root,{children:[e]});$e(e,e.siblings)}function ln(){return U}function dn(){return U=te>0?Z(_e,--te):0,je--,U===10&&(je=1,at--),U}function ne(){return U=te<Er?Z(_e,te++):0,je++,U===10&&(je=1,at++),U}function he(){return Z(_e,te)}function Ge(){return te}function ot(e,t){return Fe(_e,e,t)}function wt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function pn(e){return at=je=1,Er=oe(_e=e),te=0,[]}function Dn(e){return _e="",e}function Dt(e){return wr(ot(te-1,Ct(e===91?e+2:e===40?e+1:e)))}function hn(e){for(;(U=he())&&U<33;)ne();return wt(e)>2||wt(U)>3?"":" "}function fn(e,t){for(;--t&&ne()&&!(U<48||U>102||U>57&&U<65||U>70&&U<97););return ot(e,Ge()+(t<6&&he()==32&&ne()==32))}function Ct(e){for(;ne();)switch(U){case e:return te;case 34:case 39:e!==34&&e!==39&&Ct(U);break;case 40:e===41&&Ct(e);break;case 92:ne();break}return te}function mn(e,t){for(;ne()&&e+U!==57;)if(e+U===84&&he()===47)break;return"/*"+ot(t,te-1)+"*"+Tt(e===47?e:ne())}function xn(e){for(;!wt(he());)ne();return ot(e,te)}function gn(e){return Dn(Ue("",null,null,null,[""],e=pn(e),0,[0],e))}function Ue(e,t,r,a,s,o,c,u,i){for(var d=0,p=0,D=c,m=0,v=0,j=0,E=1,$=1,f=1,C=0,N="",l=s,x=o,b=a,y=N;$;)switch(j=C,C=ne()){case 40:if(j!=108&&Z(y,D-1)==58){qe(y+=M(Dt(C),"&","&\f"),"&\f",br(d?u[d-1]:0))!=-1&&(f=-1);break}case 34:case 39:case 91:y+=Dt(C);break;case 9:case 10:case 13:case 32:y+=hn(j);break;case 92:y+=fn(Ge()-1,7);continue;case 47:switch(he()){case 42:case 47:$e(yn(mn(ne(),Ge()),t,r,i),i);break;default:y+="/"}break;case 123*E:u[d++]=oe(y)*f;case 125*E:case 59:case 0:switch(C){case 0:case 125:$=0;case 59+p:f==-1&&(y=M(y,/\f/g,"")),v>0&&oe(y)-D&&$e(v>32?Jt(y+";",a,r,D-1,i):Jt(M(y," ","")+";",a,r,D-2,i),i);break;case 59:y+=";";default:if($e(b=Zt(y,t,r,d,p,s,u,N,l=[],x=[],D,o),o),C===123)if(p===0)Ue(y,t,b,b,l,o,D,u,x);else switch(m===99&&Z(y,3)===110?100:m){case 100:case 108:case 109:case 115:Ue(e,b,b,a&&$e(Zt(e,b,b,0,0,s,u,N,s,l=[],D,x),x),s,x,D,u,a?l:x);break;default:Ue(y,b,b,b,[""],x,0,u,x)}}d=p=v=0,E=f=1,N=y="",D=c;break;case 58:D=1+oe(y),v=j;default:if(E<1){if(C==123)--E;else if(C==125&&E++==0&&dn()==125)continue}switch(y+=Tt(C),C*E){case 38:f=p>0?1:(y+="\f",-1);break;case 44:u[d++]=(oe(y)-1)*f,f=1;break;case 64:he()===45&&(y+=Dt(ne())),m=he(),p=D=oe(N=y+=xn(Ge())),C++;break;case 45:j===45&&oe(y)==2&&(E=0)}}return o}function Zt(e,t,r,a,s,o,c,u,i,d,p,D){for(var m=s-1,v=s===0?o:[""],j=Cr(v),E=0,$=0,f=0;E<a;++E)for(var C=0,N=Fe(e,m+1,m=br($=c[E])),l=e;C<j;++C)(l=wr($>0?v[C]+" "+N:M(N,/&\f/g,v[C])))&&(i[f++]=l);return st(e,t,r,s===0?nt:u,i,d,p,D)}function yn(e,t,r,a){return st(e,t,r,yr,Tt(ln()),Fe(e,2,-2),0,a)}function Jt(e,t,r,a,s){return st(e,t,r,Bt,Fe(e,0,a),Fe(e,a+1,-1),a,s)}function Fr(e,t,r){switch(cn(e,t)){case 5103:return Y+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Y+e+e;case 4789:return Re+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Y+e+Re+e+q+e+e;case 5936:switch(Z(e,t+11)){case 114:return Y+e+q+M(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Y+e+q+M(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Y+e+q+M(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Y+e+q+e+e;case 6165:return Y+e+q+"flex-"+e+e;case 5187:return Y+e+M(e,/(\w+).+(:[^]+)/,Y+"box-$1$2"+q+"flex-$1$2")+e;case 5443:return Y+e+q+"flex-item-"+M(e,/flex-|-self/g,"")+(ce(e,/flex-|baseline/)?"":q+"grid-row-"+M(e,/flex-|-self/g,""))+e;case 4675:return Y+e+q+"flex-line-pack"+M(e,/align-content|flex-|-self/g,"")+e;case 5548:return Y+e+q+M(e,"shrink","negative")+e;case 5292:return Y+e+q+M(e,"basis","preferred-size")+e;case 6060:return Y+"box-"+M(e,"-grow","")+Y+e+q+M(e,"grow","positive")+e;case 4554:return Y+M(e,/([^-])(transform)/g,"$1"+Y+"$2")+e;case 6187:return M(M(M(e,/(zoom-|grab)/,Y+"$1"),/(image-set)/,Y+"$1"),e,"")+e;case 5495:case 3959:return M(e,/(image-set\([^]*)/,Y+"$1$`$1");case 4968:return M(M(e,/(.+:)(flex-)?(.*)/,Y+"box-pack:$3"+q+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Y+e+e;case 4200:if(!ce(e,/flex-|baseline/))return q+"grid-column-align"+Fe(e,t)+e;break;case 2592:case 3360:return q+M(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(a,s){return t=s,ce(a.props,/grid-\w+-end/)})?~qe(e+(r=r[t].value),"span",0)?e:q+M(e,"-start","")+e+q+"grid-row-span:"+(~qe(r,"span",0)?ce(r,/\d+/):+ce(r,/\d+/)-+ce(e,/\d+/))+";":q+M(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(a){return ce(a.props,/grid-\w+-start/)})?e:q+M(M(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return M(e,/(.+)-inline(.+)/,Y+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(oe(e)-1-t>6)switch(Z(e,t+1)){case 109:if(Z(e,t+4)!==45)break;case 102:return M(e,/(.+:)(.+)-([^]+)/,"$1"+Y+"$2-$3$1"+Re+(Z(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~qe(e,"stretch",0)?Fr(M(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return M(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(a,s,o,c,u,i,d){return q+s+":"+o+d+(c?q+s+"-span:"+(u?i:+i-+o)+d:"")+e});case 4949:if(Z(e,t+6)===121)return M(e,":",":"+Y)+e;break;case 6444:switch(Z(e,Z(e,14)===45?18:11)){case 120:return M(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Y+(Z(e,14)===45?"inline-":"")+"box$3$1"+Y+"$2$3$1"+q+"$2box$3")+e;case 100:return M(e,":",":"+q)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return M(e,"scroll-","scroll-snap-")+e}return e}function Ve(e,t){for(var r="",a=0;a<e.length;a++)r+=t(e[a],a,e,t)||"";return r}function vn(e,t,r,a){switch(e.type){case on:if(e.children.length)break;case sn:case Bt:return e.return=e.return||e.value;case yr:return"";case vr:return e.return=e.value+"{"+Ve(e.children,a)+"}";case nt:if(!oe(e.value=e.props.join(",")))return""}return oe(r=Ve(e.children,a))?e.return=e.value+"{"+r+"}":""}function bn(e){var t=Cr(e);return function(r,a,s,o){for(var c="",u=0;u<t;u++)c+=e[u](r,a,s,o)||"";return c}}function wn(e){return function(t){t.root||(t=t.return)&&e(t)}}function Cn(e,t,r,a){if(e.length>-1&&!e.return)switch(e.type){case Bt:e.return=Fr(e.value,e.length,r);return;case vr:return Ve([le(e,{value:M(e.value,"@","@"+Y)})],a);case nt:if(e.length)return un(r=e.props,function(s){switch(ce(s,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":we(le(e,{props:[M(s,/:(read-\w+)/,":"+Re+"$1")]})),we(le(e,{props:[s]})),bt(e,{props:Kt(r,a)});break;case"::placeholder":we(le(e,{props:[M(s,/:(plac\w+)/,":"+Y+"input-$1")]})),we(le(e,{props:[M(s,/:(plac\w+)/,":"+Re+"$1")]})),we(le(e,{props:[M(s,/:(plac\w+)/,q+"input-$1")]})),we(le(e,{props:[s]})),bt(e,{props:Kt(r,a)});break}return""})}}var En={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Q={},Ne=typeof process<"u"&&Q!==void 0&&(Q.REACT_APP_SC_ATTR||Q.SC_ATTR)||"data-styled",jr="active",Nr="data-styled-version",it="6.1.19",It=`/*!sc*/
`,et=typeof window<"u"&&typeof document<"u",Fn=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Q!==void 0&&Q.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Q.REACT_APP_SC_DISABLE_SPEEDY!==""?Q.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Q.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Q!==void 0&&Q.SC_DISABLE_SPEEDY!==void 0&&Q.SC_DISABLE_SPEEDY!==""&&Q.SC_DISABLE_SPEEDY!=="false"&&Q.SC_DISABLE_SPEEDY),ct=Object.freeze([]),Ae=Object.freeze({});function jn(e,t,r){return r===void 0&&(r=Ae),e.theme!==r.theme&&e.theme||t||r.theme}var Ar=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Nn=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,An=/(^-|-$)/g;function Qt(e){return e.replace(Nn,"-").replace(An,"")}var kn=/(a)(d)/gi,Pe=52,Vt=function(e){return String.fromCharCode(e+(e>25?39:97))};function Et(e){var t,r="";for(t=Math.abs(e);t>Pe;t=t/Pe|0)r=Vt(t%Pe)+r;return(Vt(t%Pe)+r).replace(kn,"$1-$2")}var ht,kr=5381,Ee=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},_r=function(e){return Ee(kr,e)};function _n(e){return Et(_r(e)>>>0)}function Sn(e){return e.displayName||e.name||"Component"}function ft(e){return typeof e=="string"&&!0}var Sr=typeof Symbol=="function"&&Symbol.for,Br=Sr?Symbol.for("react.memo"):60115,Bn=Sr?Symbol.for("react.forward_ref"):60112,Tn={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},In={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Tr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},$n=((ht={})[Bn]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ht[Br]=Tr,ht);function er(e){return("type"in(t=e)&&t.type.$$typeof)===Br?Tr:"$$typeof"in e?$n[e.$$typeof]:Tn;var t}var Rn=Object.defineProperty,Ln=Object.getOwnPropertyNames,tr=Object.getOwnPropertySymbols,Mn=Object.getOwnPropertyDescriptor,On=Object.getPrototypeOf,rr=Object.prototype;function Ir(e,t,r){if(typeof t!="string"){if(rr){var a=On(t);a&&a!==rr&&Ir(e,a,r)}var s=Ln(t);tr&&(s=s.concat(tr(t)));for(var o=er(e),c=er(t),u=0;u<s.length;++u){var i=s[u];if(!(i in In||r&&r[i]||c&&i in c||o&&i in o)){var d=Mn(t,i);try{Rn(e,i,d)}catch{}}}}return e}function ke(e){return typeof e=="function"}function $t(e){return typeof e=="object"&&"styledComponentId"in e}function De(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function nr(e,t){if(e.length===0)return"";for(var r=e[0],a=1;a<e.length;a++)r+=e[a];return r}function Le(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ft(e,t,r){if(r===void 0&&(r=!1),!r&&!Le(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var a=0;a<t.length;a++)e[a]=Ft(e[a],t[a]);else if(Le(t))for(var a in t)e[a]=Ft(e[a],t[a]);return e}function Rt(e,t){Object.defineProperty(e,"toString",{value:t})}function Me(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Pn=(function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,a=0;a<t;a++)r+=this.groupSizes[a];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var a=this.groupSizes,s=a.length,o=s;t>=o;)if((o<<=1)<0)throw Me(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(a),this.length=o;for(var c=s;c<o;c++)this.groupSizes[c]=0}for(var u=this.indexOfGroup(t+1),i=(c=0,r.length);c<i;c++)this.tag.insertRule(u,r[c])&&(this.groupSizes[t]++,u++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],a=this.indexOfGroup(t),s=a+r;this.groupSizes[t]=0;for(var o=a;o<s;o++)this.tag.deleteRule(a)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var a=this.groupSizes[t],s=this.indexOfGroup(t),o=s+a,c=s;c<o;c++)r+="".concat(this.tag.getRule(c)).concat(It);return r},e})(),Ke=new Map,tt=new Map,Ze=1,ze=function(e){if(Ke.has(e))return Ke.get(e);for(;tt.has(Ze);)Ze++;var t=Ze++;return Ke.set(e,t),tt.set(t,e),t},zn=function(e,t){Ze=t+1,Ke.set(e,t),tt.set(t,e)},Wn="style[".concat(Ne,"][").concat(Nr,'="').concat(it,'"]'),Yn=new RegExp("^".concat(Ne,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Hn=function(e,t,r){for(var a,s=r.split(","),o=0,c=s.length;o<c;o++)(a=s[o])&&e.registerName(t,a)},Xn=function(e,t){for(var r,a=((r=t.textContent)!==null&&r!==void 0?r:"").split(It),s=[],o=0,c=a.length;o<c;o++){var u=a[o].trim();if(u){var i=u.match(Yn);if(i){var d=0|parseInt(i[1],10),p=i[2];d!==0&&(zn(p,d),Hn(e,p,i[3]),e.getTag().insertRules(d,s)),s.length=0}else s.push(u)}}},ar=function(e){for(var t=document.querySelectorAll(Wn),r=0,a=t.length;r<a;r++){var s=t[r];s&&s.getAttribute(Ne)!==jr&&(Xn(e,s),s.parentNode&&s.parentNode.removeChild(s))}};function qn(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var $r=function(e){var t=document.head,r=e||t,a=document.createElement("style"),s=(function(u){var i=Array.from(u.querySelectorAll("style[".concat(Ne,"]")));return i[i.length-1]})(r),o=s!==void 0?s.nextSibling:null;a.setAttribute(Ne,jr),a.setAttribute(Nr,it);var c=qn();return c&&a.setAttribute("nonce",c),r.insertBefore(a,o),a},Gn=(function(){function e(t){this.element=$r(t),this.element.appendChild(document.createTextNode("")),this.sheet=(function(r){if(r.sheet)return r.sheet;for(var a=document.styleSheets,s=0,o=a.length;s<o;s++){var c=a[s];if(c.ownerNode===r)return c}throw Me(17)})(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e})(),Un=(function(){function e(t){this.element=$r(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var a=document.createTextNode(r);return this.element.insertBefore(a,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e})(),Kn=(function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e})(),sr=et,Zn={isServer:!et,useCSSOMInjection:!Fn},Rr=(function(){function e(t,r,a){t===void 0&&(t=Ae),r===void 0&&(r={});var s=this;this.options=J(J({},Zn),t),this.gs=r,this.names=new Map(a),this.server=!!t.isServer,!this.server&&et&&sr&&(sr=!1,ar(this)),Rt(this,function(){return(function(o){for(var c=o.getTag(),u=c.length,i="",d=function(D){var m=(function(f){return tt.get(f)})(D);if(m===void 0)return"continue";var v=o.names.get(m),j=c.getGroup(D);if(v===void 0||!v.size||j.length===0)return"continue";var E="".concat(Ne,".g").concat(D,'[id="').concat(m,'"]'),$="";v!==void 0&&v.forEach(function(f){f.length>0&&($+="".concat(f,","))}),i+="".concat(j).concat(E,'{content:"').concat($,'"}').concat(It)},p=0;p<u;p++)d(p);return i})(s)})}return e.registerId=function(t){return ze(t)},e.prototype.rehydrate=function(){!this.server&&et&&ar(this)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(J(J({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=(function(r){var a=r.useCSSOMInjection,s=r.target;return r.isServer?new Kn(s):a?new Gn(s):new Un(s)})(this.options),new Pn(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(ze(t),this.names.has(t))this.names.get(t).add(r);else{var a=new Set;a.add(r),this.names.set(t,a)}},e.prototype.insertRules=function(t,r,a){this.registerName(t,r),this.getTag().insertRules(ze(t),a)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ze(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e})(),Jn=/&/g,Qn=/^\s*\/\/.*$/gm;function Lr(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(a){return"".concat(t," ").concat(a)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Lr(r.children,t)),r})}function Vn(e){var t,r,a,s=Ae,o=s.options,c=o===void 0?Ae:o,u=s.plugins,i=u===void 0?ct:u,d=function(m,v,j){return j.startsWith(r)&&j.endsWith(r)&&j.replaceAll(r,"").length>0?".".concat(t):m},p=i.slice();p.push(function(m){m.type===nt&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(Jn,r).replace(a,d))}),c.prefix&&p.push(Cn),p.push(vn);var D=function(m,v,j,E){v===void 0&&(v=""),j===void 0&&(j=""),E===void 0&&(E="&"),t=E,r=v,a=new RegExp("\\".concat(r,"\\b"),"g");var $=m.replace(Qn,""),f=gn(j||v?"".concat(j," ").concat(v," { ").concat($," }"):$);c.namespace&&(f=Lr(f,c.namespace));var C=[];return Ve(f,bn(p.concat(wn(function(N){return C.push(N)})))),C};return D.hash=i.length?i.reduce(function(m,v){return v.name||Me(15),Ee(m,v.name)},kr).toString():"",D}var ea=new Rr,jt=Vn(),Mr=me.createContext({shouldForwardProp:void 0,styleSheet:ea,stylis:jt});Mr.Consumer;me.createContext(void 0);function or(){return k.useContext(Mr)}var ta=(function(){function e(t,r){var a=this;this.inject=function(s,o){o===void 0&&(o=jt);var c=a.name+o.hash;s.hasNameForId(a.id,c)||s.insertRules(a.id,c,o(a.rules,c,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,Rt(this,function(){throw Me(12,String(a.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=jt),this.name+t.hash},e})(),ra=function(e){return e>="A"&&e<="Z"};function ir(e){for(var t="",r=0;r<e.length;r++){var a=e[r];if(r===1&&a==="-"&&e[0]==="-")return e;ra(a)?t+="-"+a.toLowerCase():t+=a}return t.startsWith("ms-")?"-"+t:t}var Or=function(e){return e==null||e===!1||e===""},Pr=function(e){var t,r,a=[];for(var s in e){var o=e[s];e.hasOwnProperty(s)&&!Or(o)&&(Array.isArray(o)&&o.isCss||ke(o)?a.push("".concat(ir(s),":"),o,";"):Le(o)?a.push.apply(a,Qe(Qe(["".concat(s," {")],Pr(o),!1),["}"],!1)):a.push("".concat(ir(s),": ").concat((t=s,(r=o)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in En||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return a};function fe(e,t,r,a){if(Or(e))return[];if($t(e))return[".".concat(e.styledComponentId)];if(ke(e)){if(!ke(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var s=e(t);return fe(s,t,r,a)}var o;return e instanceof ta?r?(e.inject(r,a),[e.getName(a)]):[e]:Le(e)?Pr(e):Array.isArray(e)?Array.prototype.concat.apply(ct,e.map(function(c){return fe(c,t,r,a)})):[e.toString()]}function na(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(ke(r)&&!$t(r))return!1}return!0}var aa=_r(it),sa=(function(){function e(t,r,a){this.rules=t,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&na(t),this.componentId=r,this.baseHash=Ee(aa,r),this.baseStyle=a,Rr.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,a){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,a):"";if(this.isStatic&&!a.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))s=De(s,this.staticRulesId);else{var o=nr(fe(this.rules,t,r,a)),c=Et(Ee(this.baseHash,o)>>>0);if(!r.hasNameForId(this.componentId,c)){var u=a(o,".".concat(c),void 0,this.componentId);r.insertRules(this.componentId,c,u)}s=De(s,c),this.staticRulesId=c}else{for(var i=Ee(this.baseHash,a.hash),d="",p=0;p<this.rules.length;p++){var D=this.rules[p];if(typeof D=="string")d+=D;else if(D){var m=nr(fe(D,t,r,a));i=Ee(i,m+p),d+=m}}if(d){var v=Et(i>>>0);r.hasNameForId(this.componentId,v)||r.insertRules(this.componentId,v,a(d,".".concat(v),void 0,this.componentId)),s=De(s,v)}}return s},e})(),zr=me.createContext(void 0);zr.Consumer;var mt={};function oa(e,t,r){var a=$t(e),s=e,o=!ft(e),c=t.attrs,u=c===void 0?ct:c,i=t.componentId,d=i===void 0?(function(l,x){var b=typeof l!="string"?"sc":Qt(l);mt[b]=(mt[b]||0)+1;var y="".concat(b,"-").concat(_n(it+b+mt[b]));return x?"".concat(x,"-").concat(y):y})(t.displayName,t.parentComponentId):i,p=t.displayName,D=p===void 0?(function(l){return ft(l)?"styled.".concat(l):"Styled(".concat(Sn(l),")")})(e):p,m=t.displayName&&t.componentId?"".concat(Qt(t.displayName),"-").concat(t.componentId):t.componentId||d,v=a&&s.attrs?s.attrs.concat(u).filter(Boolean):u,j=t.shouldForwardProp;if(a&&s.shouldForwardProp){var E=s.shouldForwardProp;if(t.shouldForwardProp){var $=t.shouldForwardProp;j=function(l,x){return E(l,x)&&$(l,x)}}else j=E}var f=new sa(r,m,a?s.componentStyle:void 0);function C(l,x){return(function(b,y,w){var L=b.attrs,h=b.componentStyle,_=b.defaultProps,A=b.foldedComponentIds,F=b.styledComponentId,T=b.target,I=me.useContext(zr),O=or(),P=b.shouldForwardProp||O.shouldForwardProp,z=jn(y,I,_)||Ae,R=(function(K,V,re){for(var de,ie=J(J({},V),{className:void 0,theme:re}),Se=0;Se<K.length;Se+=1){var ge=ke(de=K[Se])?de(ie):de;for(var ee in ge)ie[ee]=ee==="className"?De(ie[ee],ge[ee]):ee==="style"?J(J({},ie[ee]),ge[ee]):ge[ee]}return V.className&&(ie.className=De(ie.className,V.className)),ie})(L,y,z),g=R.as||T,S={};for(var B in R)R[B]===void 0||B[0]==="$"||B==="as"||B==="theme"&&R.theme===z||(B==="forwardedAs"?S.as=R.forwardedAs:P&&!P(B,g)||(S[B]=R[B]));var W=(function(K,V){var re=or(),de=K.generateAndInjectStyles(V,re.styleSheet,re.stylis);return de})(h,R),G=De(A,F);return W&&(G+=" "+W),R.className&&(G+=" "+R.className),S[ft(g)&&!Ar.has(g)?"class":"className"]=G,w&&(S.ref=w),k.createElement(g,S)})(N,l,x)}C.displayName=D;var N=me.forwardRef(C);return N.attrs=v,N.componentStyle=f,N.displayName=D,N.shouldForwardProp=j,N.foldedComponentIds=a?De(s.foldedComponentIds,s.styledComponentId):"",N.styledComponentId=m,N.target=a?s.target:e,Object.defineProperty(N,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(l){this._foldedDefaultProps=a?(function(x){for(var b=[],y=1;y<arguments.length;y++)b[y-1]=arguments[y];for(var w=0,L=b;w<L.length;w++)Ft(x,L[w],!0);return x})({},s.defaultProps,l):l}}),Rt(N,function(){return".".concat(N.styledComponentId)}),o&&Ir(N,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),N}function cr(e,t){for(var r=[e[0]],a=0,s=t.length;a<s;a+=1)r.push(t[a],e[a+1]);return r}var ur=function(e){return Object.assign(e,{isCss:!0})};function ia(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(ke(e)||Le(e))return ur(fe(cr(ct,Qe([e],t,!0))));var a=e;return t.length===0&&a.length===1&&typeof a[0]=="string"?fe(a):ur(fe(cr(a,t)))}function Nt(e,t,r){if(r===void 0&&(r=Ae),!t)throw Me(1,t);var a=function(s){for(var o=[],c=1;c<arguments.length;c++)o[c-1]=arguments[c];return e(t,r,ia.apply(void 0,Qe([s],o,!1)))};return a.attrs=function(s){return Nt(e,t,J(J({},r),{attrs:Array.prototype.concat(r.attrs,s).filter(Boolean)}))},a.withConfig=function(s){return Nt(e,t,J(J({},r),s))},a}var Wr=function(e){return Nt(oa,e)},Lt=Wr;Ar.forEach(function(e){Lt[e]=Wr(e)});const ca=()=>n.jsx(ua,{children:n.jsxs("div",{className:"tooltip-container",children:[n.jsx("div",{className:"tooltip",children:n.jsxs("div",{className:"profile",children:[n.jsxs("div",{className:"user",children:[n.jsx("div",{className:"img",children:"WB"}),n.jsxs("div",{className:"details",children:[n.jsx("div",{className:"name",children:"Wishant Bhajan"}),n.jsx("div",{className:"username",children:"Co-founder TableTech"})]})]}),n.jsx("div",{className:"about",children:"220+ Connections • Open to Work"})]})}),n.jsx("div",{className:"text",children:n.jsxs("a",{href:"https://www.linkedin.com/in/wishant-bhajan-0a73832a4/",target:"_blank",rel:"noopener noreferrer",className:"icon",children:[n.jsxs("div",{className:"layer",children:[n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{className:"fab fa-linkedin",children:n.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})})]}),n.jsx("div",{className:"text",children:"LinkedIn"})]})})]})}),ua=Lt.div`
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
  }`,la=()=>n.jsx(da,{children:n.jsxs("div",{className:"tooltip-container",children:[n.jsx("div",{className:"tooltip",children:n.jsxs("div",{className:"profile",children:[n.jsxs("div",{className:"user",children:[n.jsx("div",{className:"img",children:"WB"}),n.jsxs("div",{className:"details",children:[n.jsx("div",{className:"name",children:"Wishant Bhajan"}),n.jsx("div",{className:"username",children:"@Wishant010"})]})]}),n.jsx("div",{className:"about",children:"20+ Repositories • Active Developer"})]})}),n.jsx("div",{className:"text",children:n.jsxs("a",{href:"https://github.com/Wishant010",target:"_blank",rel:"noopener noreferrer",className:"icon",children:[n.jsxs("div",{className:"layer",children:[n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{className:"fab fa-github",children:n.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})})]}),n.jsx("div",{className:"text",children:"GitHub"})]})})]})}),da=Lt.div`
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
  }`,pa=({gridSize:e=10,cubeSize:t,maxAngle:r=45,radius:a=3,easing:s="power3.out",duration:o={enter:.3,leave:.6},cellGap:c,borderStyle:u="1px solid #fff",faceColor:i="#060010",shadow:d=!1,autoAnimate:p=!0,rippleOnClick:D=!0,rippleColor:m="#fff",rippleSpeed:v=2,visibleCells:j})=>{const E=k.useRef(null),$=k.useRef(null),f=k.useRef(null),C=k.useRef(!1),N=k.useRef({x:0,y:0}),l=k.useRef({x:0,y:0}),x=k.useRef(null),b=typeof c=="number"?`${c}px`:(c==null?void 0:c.col)!==void 0?`${c.col}px`:"5%",y=typeof c=="number"?`${c}px`:(c==null?void 0:c.row)!==void 0?`${c.row}px`:"5%",w=o.enter,L=o.leave,h=k.useCallback((g,S)=>{E.current&&E.current.querySelectorAll(".cube").forEach(B=>{const W=+B.dataset.row,G=+B.dataset.col,K=Math.hypot(W-g,G-S);if(K<=a){const re=(1-K/a)*r;X.to(B,{duration:w,ease:s,overwrite:!0,rotateX:-re,rotateY:re})}else X.to(B,{duration:L,ease:"power3.out",overwrite:!0,rotateX:0,rotateY:0})})},[a,r,w,L,s]),_=k.useCallback(g=>{C.current=!0,f.current&&clearTimeout(f.current);const S=E.current.getBoundingClientRect(),B=S.width/e,W=S.height/e,G=(g.clientX-S.left)/B,K=(g.clientY-S.top)/W;$.current&&cancelAnimationFrame($.current),$.current=requestAnimationFrame(()=>h(K,G)),f.current=setTimeout(()=>{C.current=!1},3e3)},[e,h]),A=k.useCallback(()=>{E.current&&E.current.querySelectorAll(".cube").forEach(g=>X.to(g,{duration:L,rotateX:0,rotateY:0,ease:"power3.out"}))},[L]),F=k.useCallback(g=>{g.preventDefault(),C.current=!0,f.current&&clearTimeout(f.current);const S=E.current.getBoundingClientRect(),B=S.width/e,W=S.height/e,G=g.touches[0],K=(G.clientX-S.left)/B,V=(G.clientY-S.top)/W;$.current&&cancelAnimationFrame($.current),$.current=requestAnimationFrame(()=>h(V,K)),f.current=setTimeout(()=>{C.current=!1},3e3)},[e,h]),T=k.useCallback(()=>{C.current=!0},[]),I=k.useCallback(()=>{E.current&&A()},[A]),O=k.useCallback(g=>{if(!D||!E.current)return;const S=E.current.getBoundingClientRect(),B=S.width/e,W=S.height/e,G=g.clientX||g.touches&&g.touches[0].clientX,K=g.clientY||g.touches&&g.touches[0].clientY,V=Math.floor((G-S.left)/B),re=Math.floor((K-S.top)/W),de=.15,ie=.3,Se=.6,ge=de/v,ee=ie/v,Xr=Se/v,Be={};E.current.querySelectorAll(".cube").forEach(ue=>{const ye=+ue.dataset.row,Oe=+ue.dataset.col,lt=Math.hypot(ye-re,Oe-V),dt=Math.round(lt);Be[dt]||(Be[dt]=[]),Be[dt].push(ue)}),Object.keys(Be).map(Number).sort((ue,ye)=>ue-ye).forEach(ue=>{const ye=ue*ge,Oe=Be[ue].flatMap(lt=>Array.from(lt.querySelectorAll(".cube-face")));X.to(Oe,{backgroundColor:m,duration:ee,delay:ye,ease:"power3.out"}),X.to(Oe,{backgroundColor:i,duration:ee,delay:ye+ee+Xr,ease:"power3.out"})})},[D,e,i,m,v]);k.useEffect(()=>{if(!p||!E.current)return;N.current={x:Math.random()*e,y:Math.random()*e},l.current={x:Math.random()*e,y:Math.random()*e};const g=.02,S=()=>{if(!C.current){const B=N.current,W=l.current;B.x+=(W.x-B.x)*g,B.y+=(W.y-B.y)*g,h(B.y,B.x),Math.hypot(B.x-W.x,B.y-W.y)<.1&&(l.current={x:Math.random()*e,y:Math.random()*e})}x.current=requestAnimationFrame(S)};return x.current=requestAnimationFrame(S),()=>{x.current!=null&&cancelAnimationFrame(x.current)}},[p,e,h]),k.useEffect(()=>{const g=E.current;if(g)return g.addEventListener("pointermove",_),g.addEventListener("pointerleave",A),g.addEventListener("click",O),g.addEventListener("touchmove",F,{passive:!1}),g.addEventListener("touchstart",T,{passive:!0}),g.addEventListener("touchend",I,{passive:!0}),()=>{g.removeEventListener("pointermove",_),g.removeEventListener("pointerleave",A),g.removeEventListener("click",O),g.removeEventListener("touchmove",F),g.removeEventListener("touchstart",T),g.removeEventListener("touchend",I),$.current!=null&&cancelAnimationFrame($.current),f.current&&clearTimeout(f.current)}},[_,A,O,F,T,I]);const P=Array.from({length:e}),z={style:{"--cube-face-border":u,"--cube-face-bg":i,"--cube-face-shadow":d===!0?"0 0 6px rgba(0,0,0,.5)":d||"none","--grid-size":e,"--cube-size":t?`${t}px`:"1fr","--column-gap":b,"--row-gap":y,"--total-width":t?`${e*t}px`:"auto","--total-height":t?`${e*t}px`:"auto"},"data-has-cube-size":t?"true":"false"},R=(g,S)=>!j||j.length===0?!0:j.some(B=>B.row===g&&B.col===S);return n.jsx("div",{className:"cubes-wrapper",...z,children:n.jsx("div",{ref:E,className:"cubes-scene",children:P.map((g,S)=>P.map((B,W)=>R(S,W)?n.jsxs("div",{className:"cube","data-row":S,"data-col":W,children:[n.jsx("span",{className:"cube-pointer-area"}),n.jsx("div",{className:"cube-face cube-face-top"}),n.jsx("div",{className:"cube-face cube-face-bottom"}),n.jsx("div",{className:"cube-face cube-face-left"}),n.jsx("div",{className:"cube-face cube-face-right"}),n.jsx("div",{className:"cube-face cube-face-front"}),n.jsx("div",{className:"cube-face cube-face-back"})]},`${S}-${W}`):n.jsx("div",{className:"invisible"},`${S}-${W}`)))})})},Da=({isVisible:e=!0})=>{const{t}=kt();return n.jsxs("div",{className:"min-h-screen relative overflow-hidden page-content scroll-snap-section",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/80 to-purple-950/60"}),n.jsx(H.div,{className:"orb orb-emerald absolute top-1/4 -left-20 w-96 h-96",animate:e?{x:[0,100,0],y:[0,50,0],scale:[1,1.2,1]}:{},transition:{duration:20,repeat:Number.POSITIVE_INFINITY,ease:"easeInOut"}}),n.jsx(H.div,{className:"orb orb-teal absolute top-1/2 right-1/4 w-[500px] h-[500px]",animate:e?{x:[0,-80,0],y:[0,-40,0],scale:[1,1.3,1]}:{},transition:{duration:25,repeat:Number.POSITIVE_INFINITY,ease:"easeInOut"}}),n.jsx(H.div,{className:"orb orb-purple absolute bottom-1/4 -right-20 w-96 h-96",animate:e?{x:[0,-50,0],y:[0,-30,0],scale:[1.1,1.3,1.1]}:{},transition:{duration:30,repeat:Number.POSITIVE_INFINITY,ease:"easeInOut"}}),n.jsx(H.div,{className:"orb orb-cyan absolute bottom-1/3 left-1/3 w-[400px] h-[400px]",animate:e?{x:[0,60,0],y:[0,-60,0],scale:[1,1.15,1]}:{},transition:{duration:22,repeat:Number.POSITIVE_INFINITY,ease:"easeInOut"}}),n.jsx("div",{className:"relative min-h-screen flex items-center z-30",children:n.jsx("div",{className:"max-w-7xl mx-auto px-6 pt-24 pb-32 w-full",children:n.jsxs("div",{className:"grid lg:grid-cols-2 gap-12 lg:gap-20 items-center",children:[n.jsxs(H.div,{className:"space-y-8",initial:{opacity:0,x:-50},animate:{opacity:e?1:0,x:e?0:-50},transition:{duration:.8,delay:.5},children:[n.jsxs("div",{className:"space-y-2",children:[n.jsx(H.div,{initial:{opacity:0,y:20},animate:{opacity:e?1:0,y:e?0:20},transition:{delay:.6,duration:.6},children:n.jsx(nn,{radius:150,duration:1.5,speed:.6,scrambleChars:"!@#$%^&*()_+-={}[]|:;<>?,./~",className:"text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight whitespace-nowrap",style:{margin:0,maxWidth:"100%"},children:t("hero.welcome")})}),n.jsx(H.h1,{className:"text-5xl md:text-6xl lg:text-7xl font-bold leading-tight whitespace-nowrap",initial:{opacity:0,filter:"blur(10px)",y:20},animate:{opacity:e?1:0,filter:e?"blur(0px)":"blur(10px)",y:e?0:20},transition:{delay:.8,duration:1,ease:[.23,1,.32,1]},children:n.jsx("span",{className:"bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent whitespace-nowrap",children:t("hero.portfolio")})})]}),n.jsx(H.div,{className:"flex flex-wrap gap-3",initial:{opacity:0,y:20},animate:{opacity:e?1:0,y:e?0:20},transition:{delay:.8,duration:.6},children:[{icon:n.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),text:t("hero.role1"),color:"from-blue-500 to-cyan-500"},{icon:n.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"})}),text:t("hero.role2"),color:"from-purple-500 to-pink-500"},{icon:n.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})}),text:t("hero.role3"),color:"from-emerald-500 to-teal-500"}].map((r,a)=>n.jsxs(H.div,{className:`px-5 py-3 rounded-xl bg-gradient-to-r ${r.color} bg-opacity-10 backdrop-blur-sm border border-white/10 flex items-center gap-3`,initial:{opacity:0,scale:.8},animate:{opacity:e?1:0,scale:e?1:.8},transition:{delay:.9+a*.1,duration:.4},whileHover:{scale:1.05,borderColor:"rgba(255, 255, 255, 0.3)"},children:[n.jsx("span",{className:"text-white",children:r.icon}),n.jsx("span",{className:"text-white text-base font-semibold",children:r.text})]},r.text))}),n.jsxs(H.div,{className:"space-y-3",initial:{opacity:0,y:20},animate:{opacity:e?1:0,y:e?0:20},transition:{delay:1.1,duration:.6},children:[n.jsx(Ut,{text:`${t("hero.description1")} ${t("hero.description1.highlight")}. ${t("hero.description2")} ${t("hero.description2.highlight")}.`,delay:60,animateBy:"words",direction:"top",className:"text-slate-300 text-lg md:text-xl leading-relaxed",stepDuration:.35}),n.jsx(Ut,{text:t("hero.description3"),delay:70,animateBy:"words",direction:"top",className:"text-slate-400 text-base md:text-lg",stepDuration:.35})]}),n.jsx(H.div,{className:"space-y-4",initial:{opacity:0,y:20},animate:{opacity:e?1:0,y:e?0:20},transition:{delay:1.3,duration:.6},children:n.jsxs("div",{className:"inline-flex items-center gap-4 px-6 py-4 rounded-xl bg-slate-800/90 backdrop-blur-md border border-emerald-500/50 shadow-xl",children:[n.jsx("span",{className:"text-white text-base font-bold",children:t("hero.follow")}),n.jsx("div",{className:"h-6 w-px bg-emerald-500/50"}),n.jsxs("div",{className:"flex gap-4",children:[n.jsx(H.div,{initial:{opacity:0,scale:.8},animate:{opacity:e?1:0,scale:e?1:.8},transition:{delay:1.5,duration:.4},children:n.jsx(ca,{})}),n.jsx(H.div,{initial:{opacity:0,scale:.8},animate:{opacity:e?1:0,scale:e?1:.8},transition:{delay:1.6,duration:.4},children:n.jsx(la,{})})]})]})})]}),n.jsx(H.div,{className:"relative lg:flex items-center justify-center hidden",initial:{opacity:0,x:50},animate:{opacity:e?1:0,x:e?0:50},transition:{duration:.8,delay:.7},children:n.jsx("div",{className:"cube-animation",children:n.jsx(pa,{gridSize:16,cubeSize:40,maxAngle:45,radius:6,duration:{enter:.3,leave:.6},cellGap:6,borderStyle:"1px solid rgba(100, 116, 139, 0.3)",faceColor:"rgba(30, 41, 59, 0.6)",shadow:!1,autoAnimate:!0,rippleOnClick:!0,rippleColor:"rgba(71, 85, 105, 0.5)",rippleSpeed:2.5,visibleCells:[{row:1,col:4},{row:2,col:4},{row:3,col:4},{row:4,col:4},{row:5,col:4},{row:6,col:4},{row:7,col:4},{row:8,col:4},{row:9,col:5},{row:8,col:6},{row:7,col:7},{row:8,col:8},{row:9,col:9},{row:8,col:10},{row:7,col:10},{row:6,col:10},{row:5,col:10},{row:4,col:10},{row:3,col:10},{row:2,col:10},{row:1,col:10},{row:1,col:13},{row:2,col:13},{row:3,col:13},{row:4,col:13},{row:5,col:13},{row:6,col:13},{row:7,col:13},{row:8,col:13},{row:9,col:13},{row:1,col:14},{row:1,col:15},{row:2,col:15},{row:3,col:15},{row:4,col:14},{row:4,col:15},{row:5,col:14},{row:6,col:14},{row:6,col:15},{row:7,col:15},{row:8,col:15},{row:9,col:14},{row:9,col:15}]})})})]})})}),n.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-[400px] pointer-events-none z-20",children:n.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"})}),n.jsx("style",{children:`
        @keyframes cubeColorPulse {
          0%, 100% {
            filter: hue-rotate(0deg) brightness(1);
          }
          50% {
            filter: hue-rotate(60deg) brightness(1.3);
          }
        }
      `})]})},ha="radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(266,100%,90%,var(--card-opacity)) 4%,hsla(266,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(266,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(266,0%,60%,0) 100%),radial-gradient(35% 52% at 55% 20%,#00ffaac4 0%,#073aff00 100%),radial-gradient(100% 100% at 50% 50%,#00c1ffff 1%,#073aff00 76%),conic-gradient(from 124deg at 50% 50%,#c137ffff 0%,#07c6ffff 40%,#07c6ffff 60%,#c137ffff 100%)",fa="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)",Ie={SMOOTH_DURATION:600,INITIAL_DURATION:1500,INITIAL_X_OFFSET:70,INITIAL_Y_OFFSET:60,DEVICE_BETA_OFFSET:20},We=(e,t=0,r=100)=>Math.min(Math.max(e,t),r),At=(e,t=3)=>parseFloat(e.toFixed(t)),Ye=(e,t,r,a,s)=>At(a+(s-a)*(e-t)/(r-t)),ma=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,xa=({avatarUrl:e="/wish-photo.jpg",iconUrl:t,grainUrl:r,behindGradient:a,innerGradient:s,showBehindGradient:o=!0,className:c="",enableTilt:u=!0,enableMobileTilt:i=!1,mobileTiltSensitivity:d=5,miniAvatarUrl:p,name:D="Wishant Bhajan",title:m="Software Engineer",handle:v="wishant010",status:j="Online",contactText:E="Contact",showUserInfo:$=!0,onContactClick:f})=>{const C=k.useRef(null),N=k.useRef(null),l=k.useMemo(()=>{if(!u)return null;let h=null;const _=(F,T,I,O)=>{const P=I.clientWidth,z=I.clientHeight,R=We(100/P*F),g=We(100/z*T),S=R-50,B=g-50,W={"--pointer-x":`${R}%`,"--pointer-y":`${g}%`,"--background-x":`${Ye(R,0,100,35,65)}%`,"--background-y":`${Ye(g,0,100,35,65)}%`,"--pointer-from-center":`${We(Math.hypot(g-50,R-50)/50,0,1)}`,"--pointer-from-top":`${g/100}`,"--pointer-from-left":`${R/100}`,"--rotate-x":`${At(-(S/5))}deg`,"--rotate-y":`${At(B/4)}deg`};Object.entries(W).forEach(([G,K])=>{O.style.setProperty(G,K)})};return{updateCardTransform:_,createSmoothAnimation:(F,T,I,O,P)=>{const z=performance.now(),R=P.clientWidth/2,g=P.clientHeight/2,S=B=>{const W=B-z,G=We(W/F),K=ma(G),V=Ye(K,0,1,T,R),re=Ye(K,0,1,I,g);_(V,re,O,P),G<1&&(h=requestAnimationFrame(S))};h=requestAnimationFrame(S)},cancelAnimation:()=>{h&&(cancelAnimationFrame(h),h=null)}}},[u]),x=k.useCallback(h=>{const _=N.current,A=C.current;if(!_||!A||!l)return;const F=_.getBoundingClientRect();l.updateCardTransform(h.clientX-F.left,h.clientY-F.top,_,A)},[l]),b=k.useCallback(()=>{const h=N.current,_=C.current;!h||!_||!l||(l.cancelAnimation(),_.classList.add("active"),h.classList.add("active"))},[l]),y=k.useCallback(h=>{const _=N.current,A=C.current;!_||!A||!l||(l.createSmoothAnimation(Ie.SMOOTH_DURATION,h.offsetX,h.offsetY,_,A),A.classList.remove("active"),_.classList.remove("active"))},[l]),w=k.useCallback(h=>{const _=N.current,A=C.current;if(!_||!A||!l)return;const{beta:F,gamma:T}=h;!F||!T||l.updateCardTransform(_.clientHeight/2+T*d,_.clientWidth/2+(F-Ie.DEVICE_BETA_OFFSET)*d,_,A)},[l,d]);k.useEffect(()=>{if(!u||!l)return;const h=N.current,_=C.current;if(!h||!_)return;const A=x,F=b,T=y,I=w,O=()=>{var R,g;!i||location.protocol!=="https:"||(typeof window.DeviceMotionEvent.requestPermission=="function"?(g=(R=window.DeviceMotionEvent).requestPermission)==null||g.call(R).then(S=>{S==="granted"&&window.addEventListener("deviceorientation",I)}).catch(S=>{}):window.addEventListener("deviceorientation",I))};h.addEventListener("pointerenter",F),h.addEventListener("pointermove",A),h.addEventListener("pointerleave",T),h.addEventListener("click",O);const P=_.clientWidth-Ie.INITIAL_X_OFFSET,z=Ie.INITIAL_Y_OFFSET;return l.updateCardTransform(P,z,h,_),l.createSmoothAnimation(Ie.INITIAL_DURATION,P,z,h,_),()=>{h.removeEventListener("pointerenter",F),h.removeEventListener("pointermove",A),h.removeEventListener("pointerleave",T),h.removeEventListener("click",O),window.removeEventListener("deviceorientation",I),l.cancelAnimation()}},[u,i,l,x,b,y,w]),k.useEffect(()=>{const h=C.current;if(!h)return;const _={"--icon":t?`url(${t})`:"none","--grain":r?`url(${r})`:"none","--behind-gradient":o?a??ha:"none","--inner-gradient":s??fa};Object.entries(_).forEach(([A,F])=>{h.style.setProperty(A,F)})},[t,r,o,a,s]);const L=k.useCallback(()=>{f==null||f()},[f]);return n.jsx("div",{ref:C,className:`pc-card-wrapper ${c}`.trim(),children:n.jsx("section",{ref:N,className:"pc-card",children:n.jsxs("div",{className:"pc-inside",children:[n.jsx("div",{className:"pc-shine"}),n.jsx("div",{className:"pc-glare"}),n.jsxs("div",{className:"pc-content pc-avatar-content",children:[n.jsx("img",{className:"avatar",src:e,alt:`${D||"User"} avatar`,loading:"lazy",onError:h=>{const _=h.target;_.style.display="none"}}),$&&n.jsxs("div",{className:"pc-user-info",children:[n.jsxs("div",{className:"pc-user-details",children:[n.jsx("div",{className:"pc-mini-avatar",children:n.jsx("img",{src:p||e,alt:`${D||"User"} mini avatar`,loading:"lazy",onError:h=>{const _=h.target;_.style.opacity="0.5",_.src=e}})}),n.jsxs("div",{className:"pc-user-text",children:[n.jsxs("div",{className:"pc-handle",children:["@",v]}),n.jsx("div",{className:"pc-status",children:j})]})]}),n.jsx("button",{className:"pc-contact-btn",onClick:L,type:"button","aria-label":`Contact ${D||"user"}`,children:E})]})]}),n.jsx("div",{className:"pc-content",children:n.jsxs("div",{className:"pc-details",children:[n.jsx("h3",{children:D}),n.jsx("p",{children:m})]})})]})})})},ga=me.memo(xa),ya="_aboutSection_cj7q7_3",va="_gradientOverlay1_cj7q7_43",ba="_gradientOverlay2_cj7q7_51",wa="_noiseTexture_cj7q7_59",Ca="_ctaButton_cj7q7_69",Ea="_titleHeading_cj7q7_77",Ce={aboutSection:ya,gradientOverlay1:va,gradientOverlay2:ba,noiseTexture:wa,ctaButton:Ca,titleHeading:Ea},Fa=({startTyping:e,onTypingComplete:t,t:r})=>{const[a,s]=k.useState(""),[o,c]=k.useState(0),[u,i]=k.useState(!0),[d,p]=k.useState(!1),D=[{prompt:">",command:"./about-me.sh",delay:500},{prompt:">",text:r("aboutsection.terminal.name"),delay:100},{prompt:">",text:r("aboutsection.terminal.age"),delay:100},{prompt:">",text:r("aboutsection.terminal.location"),delay:100},{prompt:">",text:r("aboutsection.terminal.role"),delay:100},{prompt:">",text:r("aboutsection.terminal.status"),delay:100},{prompt:">",text:r("aboutsection.terminal.passion"),delay:100},{prompt:">",text:r("aboutsection.terminal.experience"),delay:100}];return k.useEffect(()=>{if(!e||d)return;p(!0),(async()=>{for(let j=0;j<D.length;j++){const E=D[j];await new Promise(C=>setTimeout(C,E.delay));const $=E.command||E.text||"";let f="";for(let C=0;C<=$.length;C++)f=$.slice(0,C),c(j),s(N=>{const l=N.split(`
`);return l[j]=`${E.prompt} ${f}`,l.join(`
`)}),await new Promise(N=>setTimeout(N,30))}t&&t()})();const v=setInterval(()=>{i(j=>!j)},500);return()=>clearInterval(v)},[e,d]),n.jsxs(H.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3,duration:.5},className:"terminal-container relative bg-[#0D1117] rounded-xl overflow-hidden shadow-2xl border border-cyan-500/20 w-full max-w-2xl",style:{boxShadow:"0 0 60px rgba(0, 245, 255, 0.15)"},children:[n.jsxs("div",{className:"terminal-header bg-[#161B22] px-6 py-3 flex items-center gap-2",children:[n.jsxs("div",{className:"flex gap-2",children:[n.jsx("span",{className:"w-3 h-3 rounded-full bg-red-500"}),n.jsx("span",{className:"w-3 h-3 rounded-full bg-yellow-500"}),n.jsx("span",{className:"w-3 h-3 rounded-full bg-green-500"})]}),n.jsx("span",{className:"ml-4 text-gray-500 text-sm font-mono",children:"about-me.sh"})]}),n.jsx("div",{className:"terminal-content p-8 font-mono text-base lg:text-lg",children:a.split(`
`).map((m,v)=>n.jsxs("div",{className:"terminal-line mb-2",children:[m.includes(":")?n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"text-teal-500",children:m.split(":")[0]}),n.jsx("span",{className:"text-gray-400",children:":"}),n.jsx("span",{className:"text-cyan-600",children:m.split(":")[1]})]}):n.jsx("span",{className:"text-teal-500",children:m}),v===o&&u&&n.jsx("span",{className:"terminal-cursor text-cyan-500",children:"_"})]},v))})]})},ja=()=>{const e=k.useRef(null),t=pr(e,{once:!1,amount:.3}),r=Dr(),[a,s]=k.useState(!1),{t:o}=kt();return k.useEffect(()=>{t&&r.start("visible")},[t,r]),n.jsxs("section",{ref:e,className:`about-section relative min-h-screen py-32 px-6 lg:px-12 overflow-hidden ${Ce.aboutSection}`,children:[n.jsxs("div",{className:"absolute inset-0",children:[n.jsx("div",{className:`absolute inset-0 ${Ce.gradientOverlay1}`}),n.jsx("div",{className:`absolute inset-0 ${Ce.gradientOverlay2}`}),n.jsx("div",{className:`absolute inset-0 opacity-[0.03] ${Ce.noiseTexture}`})]}),n.jsx("div",{className:"container mx-auto max-w-[1600px] relative z-10",children:n.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32",children:[n.jsxs(H.div,{initial:{opacity:0,x:-50},animate:{opacity:t?1:0,x:t?0:-50},transition:{duration:.6},className:"space-y-10 lg:mt-8",children:[n.jsxs(H.div,{initial:{opacity:0,y:-30},animate:{opacity:t?1:0,y:t?0:-30},transition:{duration:.5},children:[n.jsx("h2",{className:`text-5xl lg:text-7xl font-bold mb-6 ${Ce.titleHeading}`,children:o("aboutsection.title")}),n.jsx("p",{className:"text-lg lg:text-xl text-gray-300 leading-relaxed max-w-xl",children:o("aboutsection.subtitle")})]}),n.jsx(Fa,{startTyping:t,onTypingComplete:()=>s(!0),t:o}),a&&n.jsx(H.div,{initial:{opacity:0,x:-30},animate:{opacity:1,x:0},transition:{duration:.5},className:"flex justify-start mt-8",children:n.jsxs(H.a,{href:"/about",className:`group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-bold rounded-xl overflow-hidden ${Ce.ctaButton}`,whileHover:{scale:1.08,x:10,boxShadow:"0 0 40px rgba(0, 184, 212, 0.6), 0 0 60px rgba(0, 245, 255, 0.3)"},whileTap:{scale:.95},children:[n.jsx("span",{className:"relative z-10 transition-all duration-300 group-hover:tracking-wider",children:o("aboutsection.button")}),n.jsx("svg",{className:"w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 8l4 4m0 0l-4 4m4-4H3"})}),n.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]})})]}),n.jsx(H.div,{className:"relative h-[600px] lg:h-[700px] flex items-center justify-center",initial:{opacity:0,x:50},animate:{opacity:t?1:0,x:t?0:50},transition:{duration:.6,delay:.2},children:n.jsx(ga,{avatarUrl:"/wish-photo.jpg",miniAvatarUrl:"/favicon.svg",name:o("aboutsection.profilecard.name"),title:o("aboutsection.profilecard.title"),handle:"wishant010",status:o("aboutsection.profilecard.status"),contactText:o("aboutsection.profilecard.contact"),showUserInfo:!0,enableTilt:!0,enableMobileTilt:!1,onContactClick:()=>{const c=document.querySelector("#contact");c&&c.scrollIntoView({behavior:"smooth"})}})})]})}),n.jsx("style",{children:`
        /* Smooth gradient animation for extra smoothness */
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .about-section {
          background-size: 200% 200%;
          animation: gradientShift 15s ease infinite;
        }

        /* Mesh gradient overlay for ultra-smooth effect */
        .about-section::after {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 20% 50%, rgba(15, 26, 52, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(10, 20, 45, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(13, 21, 46, 0.3) 0%, transparent 50%);
          pointer-events: none;
          z-index: 1;
        }


        .terminal-cursor {
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        @media (max-width: 1024px) {
          .about-section {
            padding: 4rem 2rem;
          }
        }

        @media (max-width: 768px) {
          .about-section {
            padding: 3rem 1rem;
          }
        }
      `})]})};const Na=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Aa=xe("arrow-right",Na);const ka=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],lr=xe("brain",ka);const _a=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],Sa=xe("cloud",_a);const Ba=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],He=xe("code",Ba);const Ta=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Ia=xe("database",Ta);const $a=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Ra=xe("shield",$a);const La=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],dr=xe("terminal",La),Yr=12,Hr=300,ut="0, 245, 255",Ma=768,Oa=(e,t,r=ut)=>{const a=document.createElement("div");return a.className="particle",a.style.cssText=`
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
  `,a},Pa=e=>({proximity:e*.5,fadeDistance:e*.75}),za=(e,t,r,a,s)=>{const o=e.getBoundingClientRect(),c=(t-o.left)/o.width*100,u=(r-o.top)/o.height*100;e.style.setProperty("--glow-x",`${c}%`),e.style.setProperty("--glow-y",`${u}%`),e.style.setProperty("--glow-intensity",a.toString()),e.style.setProperty("--glow-radius",`${s}px`)},Wa=({children:e,className:t="",disableAnimations:r=!1,style:a,particleCount:s=Yr,glowColor:o=ut,enableTilt:c=!0,clickEffect:u=!1,enableMagnetism:i=!1,onClick:d})=>{const p=k.useRef(null),D=k.useRef([]),m=k.useRef([]),v=k.useRef(!1),j=k.useRef([]),E=k.useRef(!1),$=k.useRef(null),f=k.useCallback(()=>{if(E.current||!p.current)return;const{width:l,height:x}=p.current.getBoundingClientRect();j.current=Array.from({length:s},()=>Oa(Math.random()*l,Math.random()*x,o)),E.current=!0},[s,o]),C=k.useCallback(()=>{var l;m.current.forEach(clearTimeout),m.current=[],(l=$.current)==null||l.kill(),D.current.forEach(x=>{X.to(x,{scale:0,opacity:0,duration:.3,ease:"back.in(1.7)",onComplete:()=>{var b;(b=x.parentNode)==null||b.removeChild(x)}})}),D.current=[]},[]),N=k.useCallback(()=>{!p.current||!v.current||(E.current||f(),j.current.forEach((l,x)=>{const b=setTimeout(()=>{if(!v.current||!p.current)return;const y=l.cloneNode(!0);p.current.appendChild(y),D.current.push(y),X.fromTo(y,{scale:0,opacity:0},{scale:1,opacity:1,duration:.3,ease:"back.out(1.7)"}),X.to(y,{x:(Math.random()-.5)*100,y:(Math.random()-.5)*100,rotation:Math.random()*360,duration:2+Math.random()*2,ease:"none",repeat:-1,yoyo:!0}),X.to(y,{opacity:.3,duration:1.5,ease:"power2.inOut",repeat:-1,yoyo:!0})},x*100);m.current.push(b)}))},[f]);return k.useEffect(()=>{if(r||!p.current)return;const l=p.current,x=()=>{v.current=!0,N(),c&&X.to(l,{rotateX:5,rotateY:5,duration:.3,ease:"power2.out",transformPerspective:1e3})},b=()=>{v.current=!1,C(),c&&X.to(l,{rotateX:0,rotateY:0,duration:.3,ease:"power2.out"}),i&&X.to(l,{x:0,y:0,duration:.3,ease:"power2.out"})},y=L=>{if(!c&&!i)return;const h=l.getBoundingClientRect(),_=L.clientX-h.left,A=L.clientY-h.top,F=h.width/2,T=h.height/2;if(c){const I=(A-T)/T*-10,O=(_-F)/F*10;X.to(l,{rotateX:I,rotateY:O,duration:.1,ease:"power2.out",transformPerspective:1e3})}if(i){const I=(_-F)*.05,O=(A-T)*.05;$.current=X.to(l,{x:I,y:O,duration:.3,ease:"power2.out"})}},w=L=>{if(!u)return;const h=l.getBoundingClientRect(),_=L.clientX-h.left,A=L.clientY-h.top,F=Math.max(Math.hypot(_,A),Math.hypot(_-h.width,A),Math.hypot(_,A-h.height),Math.hypot(_-h.width,A-h.height)),T=document.createElement("div");T.style.cssText=`
        position: absolute;
        width: ${F*2}px;
        height: ${F*2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${o}, 0.4) 0%, rgba(${o}, 0.2) 30%, transparent 70%);
        left: ${_-F}px;
        top: ${A-F}px;
        pointer-events: none;
        z-index: 1000;
      `,l.appendChild(T),X.fromTo(T,{scale:0,opacity:1},{scale:1,opacity:0,duration:.8,ease:"power2.out",onComplete:()=>T.remove()})};return l.addEventListener("mouseenter",x),l.addEventListener("mouseleave",b),l.addEventListener("mousemove",y),l.addEventListener("click",w),d&&l.addEventListener("click",d),()=>{v.current=!1,l.removeEventListener("mouseenter",x),l.removeEventListener("mouseleave",b),l.removeEventListener("mousemove",y),l.removeEventListener("click",w),d&&l.removeEventListener("click",d),C()}},[N,C,r,c,i,u,o,d]),n.jsx("div",{ref:p,className:`${t} relative overflow-hidden`,style:{...a,position:"relative",overflow:"hidden"},children:e})},Ya=({gridRef:e,disableAnimations:t=!1,enabled:r=!0,spotlightRadius:a=Hr,glowColor:s=ut})=>{const o=k.useRef(null),c=k.useRef(!1);return k.useEffect(()=>{if(t||!(e!=null&&e.current)||!r)return;const u=document.createElement("div");u.className="global-spotlight",u.style.cssText=`
      position: fixed;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${s}, 0.15) 0%,
        rgba(${s}, 0.08) 15%,
        rgba(${s}, 0.04) 25%,
        rgba(${s}, 0.02) 40%,
        rgba(${s}, 0.01) 65%,
        transparent 70%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
    `,document.body.appendChild(u),o.current=u;const i=p=>{if(!o.current||!e.current)return;const D=e.current.closest(".bento-section"),m=D==null?void 0:D.getBoundingClientRect(),v=m&&p.clientX>=m.left&&p.clientX<=m.right&&p.clientY>=m.top&&p.clientY<=m.bottom;c.current=v||!1;const j=e.current.querySelectorAll(".card");if(!v){X.to(o.current,{opacity:0,duration:.3,ease:"power2.out"}),j.forEach(N=>{N.style.setProperty("--glow-intensity","0")});return}const{proximity:E,fadeDistance:$}=Pa(a);let f=1/0;j.forEach(N=>{const l=N,x=l.getBoundingClientRect(),b=x.left+x.width/2,y=x.top+x.height/2,w=Math.hypot(p.clientX-b,p.clientY-y)-Math.max(x.width,x.height)/2,L=Math.max(0,w);f=Math.min(f,L);let h=0;L<=E?h=1:L<=$&&(h=($-L)/($-E)),za(l,p.clientX,p.clientY,h,a)}),X.to(o.current,{left:p.clientX,top:p.clientY,duration:.1,ease:"power2.out"});const C=f<=E?.8:f<=$?($-f)/($-E)*.8:0;X.to(o.current,{opacity:C,duration:C>0?.2:.5,ease:"power2.out"})},d=()=>{var p;c.current=!1,(p=e.current)==null||p.querySelectorAll(".card").forEach(D=>{D.style.setProperty("--glow-intensity","0")}),o.current&&X.to(o.current,{opacity:0,duration:.3,ease:"power2.out"})};return document.addEventListener("mousemove",i),document.addEventListener("mouseleave",d),()=>{var p,D;document.removeEventListener("mousemove",i),document.removeEventListener("mouseleave",d),(D=(p=o.current)==null?void 0:p.parentNode)==null||D.removeChild(o.current)}},[e,t,r,a,s]),null},Ha=({children:e,gridRef:t})=>n.jsx("div",{className:"bento-section w-full",style:{fontSize:"clamp(1rem, 0.9rem + 0.5vw, 1.5rem)"},ref:t,children:e}),Xa=()=>{const[e,t]=k.useState(!1);return k.useEffect(()=>{const r=()=>t(window.innerWidth<=Ma);return r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),e},qa=({textAutoHide:e=!0,enableStars:t=!0,enableSpotlight:r=!0,enableBorderGlow:a=!0,disableAnimations:s=!1,spotlightRadius:o=Hr,particleCount:c=Yr,enableTilt:u=!1,glowColor:i=ut,clickEffect:d=!0,enableMagnetism:p=!0,cards:D})=>{const m=k.useRef(null),v=Xa(),j=s||v,$=D||[{color:"#0A0E27",title:"CyberGuard Pro",description:"Advanced network security monitoring system with real-time threat detection",label:"Live Project",featured:!0,image:"/api/placeholder/600/400",span:{cols:2,rows:2}},{color:"#0A0E27",title:"Data Vault",description:"Encrypted cloud storage solution with zero-knowledge architecture",label:"In Development",image:"/api/placeholder/400/300"},{color:"#0A0E27",title:"AI Assistant",description:"Smart automation platform powered by machine learning",label:"Featured",image:"/api/placeholder/400/300"},{color:"#0B1029",title:"Blockchain Wallet",description:"Secure crypto wallet with multi-chain support",label:"Beta",span:{cols:2,rows:1},image:"/api/placeholder/600/300"},{color:"#0C132B",title:"Task Manager",description:"Productivity app with AI",label:"Live",image:"/api/placeholder/400/300"},{color:"#0A0E27",title:"Weather Dashboard",description:"Real-time weather analytics",label:"Live",image:"/api/placeholder/400/300"}];return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
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
        `}),r&&n.jsx(Ya,{gridRef:m,disableAnimations:j,enabled:r,spotlightRadius:o,glowColor:i}),n.jsx(Ha,{gridRef:m,children:n.jsx("div",{className:"card-responsive grid",children:$.map((f,C)=>{var b,y;const N=[((b=f.span)==null?void 0:b.cols)===2?"card-span-2-cols":"",((y=f.span)==null?void 0:y.rows)===2?"card-span-2-rows":""].filter(Boolean).join(" "),l=`card relative min-h-[200px] w-full rounded-[20px] border border-solid font-light overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,245,255,0.15)] ${a?"card--border-glow":""} ${N}`,x={backgroundColor:f.color||"var(--background-dark)",borderColor:"var(--border-color)",color:"var(--white)","--glow-x":"50%","--glow-y":"50%","--glow-intensity":"0","--glow-radius":"200px"};return t?n.jsxs(Wa,{className:l,style:x,disableAnimations:j,particleCount:c,glowColor:i,enableTilt:u,clickEffect:d,enableMagnetism:p,onClick:f.onClick,children:[f.image&&n.jsx("img",{src:f.image,alt:f.title,className:"card-image"}),n.jsxs("div",{className:"card-content-overlay",children:[n.jsx("div",{className:"card__header flex justify-between gap-3 mb-2",children:n.jsx("span",{className:"card__label text-xs font-semibold text-cyan-400 uppercase tracking-wider",children:f.label})}),n.jsx("h3",{className:`card__title font-bold ${f.featured?"text-2xl":"text-xl"} mb-2 text-white ${e?"text-clamp-1":""}`,children:f.title}),n.jsx("p",{className:`card__description text-sm leading-6 text-gray-300 ${e?"text-clamp-2":""}`,children:f.description})]})]},C):n.jsxs("div",{className:l,style:x,ref:w=>{if(!w)return;const L=A=>{if(j)return;const F=w.getBoundingClientRect(),T=A.clientX-F.left,I=A.clientY-F.top,O=F.width/2,P=F.height/2;if(u){const z=(I-P)/P*-10,R=(T-O)/O*10;X.to(w,{rotateX:z,rotateY:R,duration:.1,ease:"power2.out",transformPerspective:1e3})}if(p){const z=(T-O)*.05,R=(I-P)*.05;X.to(w,{x:z,y:R,duration:.3,ease:"power2.out"})}},h=()=>{j||(u&&X.to(w,{rotateX:0,rotateY:0,duration:.3,ease:"power2.out"}),p&&X.to(w,{x:0,y:0,duration:.3,ease:"power2.out"}))},_=A=>{if(!d||j)return;const F=w.getBoundingClientRect(),T=A.clientX-F.left,I=A.clientY-F.top,O=Math.max(Math.hypot(T,I),Math.hypot(T-F.width,I),Math.hypot(T,I-F.height),Math.hypot(T-F.width,I-F.height)),P=document.createElement("div");P.style.cssText=`
                      position: absolute;
                      width: ${O*2}px;
                      height: ${O*2}px;
                      border-radius: 50%;
                      background: radial-gradient(circle, rgba(${i}, 0.4) 0%, rgba(${i}, 0.2) 30%, transparent 70%);
                      left: ${T-O}px;
                      top: ${I-O}px;
                      pointer-events: none;
                      z-index: 1000;
                    `,w.appendChild(P),X.fromTo(P,{scale:0,opacity:1},{scale:1,opacity:0,duration:.8,ease:"power2.out",onComplete:()=>P.remove()})};w.addEventListener("mousemove",L),w.addEventListener("mouseleave",h),w.addEventListener("click",_),f.onClick&&w.addEventListener("click",f.onClick)},children:[f.image&&n.jsx("img",{src:f.image,alt:f.title,className:"card-image"}),n.jsxs("div",{className:"card-content-overlay",children:[n.jsx("div",{className:"card__header flex justify-between gap-3 mb-2",children:n.jsx("span",{className:"card__label text-xs font-semibold text-cyan-400 uppercase tracking-wider",children:f.label})}),n.jsx("h3",{className:`card__title font-bold ${f.featured?"text-2xl":"text-xl"} mb-2 text-white ${e?"text-clamp-1":""}`,children:f.title}),n.jsx("p",{className:`card__description text-sm leading-6 text-gray-300 ${e?"text-clamp-2":""}`,children:f.description})]})]},C)})})})]})},Ga="_sectionBackground_hqw6a_1",Ua="_cyberGrid_hqw6a_35",Ka="_leftOverlay_hqw6a_49",Za="_rightOverlay_hqw6a_57",Ja="_projectsTitle_hqw6a_73",Qa="_viewAllButton_hqw6a_83",Va="_skillsTitle_hqw6a_109",es="_skillIconShimmer_hqw6a_127",ts="_pulseAnimation_hqw6a_135",rs="_shimmerAnimation_hqw6a_143",ae={sectionBackground:Ga,cyberGrid:Ua,leftOverlay:Ka,rightOverlay:Za,projectsTitle:Ja,viewAllButton:Qa,skillsTitle:Va,skillIconShimmer:es,pulseAnimation:ts,shimmerAnimation:rs},ns=()=>{const e=qr(),t=k.useRef(null),r=pr(t,{once:!1,amount:.2}),a=Dr(),{t:s}=kt();k.useEffect(()=>{r&&a.start("visible")},[r,a]);const o=[{color:"#0A0E27",title:s("featured.project1.title"),description:s("featured.project1.desc"),label:s("featured.project1.label"),featured:!0,image:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",span:{cols:2,rows:2}},{color:"#0B1029",title:s("featured.project2.title"),description:s("featured.project2.desc"),label:s("featured.project2.label"),image:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop"},{color:"#0C132B",title:s("featured.project3.title"),description:s("featured.project3.desc"),label:s("featured.project3.label"),image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop"},{color:"#0D152E",title:s("featured.project4.title"),description:s("featured.project4.desc"),label:s("featured.project4.label"),span:{cols:2,rows:1},image:"https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=300&fit=crop"},{color:"#0E1831",title:s("featured.project5.title"),description:s("featured.project5.desc"),label:s("featured.project5.label"),image:"https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop"},{color:"#0A0E27",title:s("featured.project6.title"),description:s("featured.project6.desc"),label:s("featured.project6.label"),image:"https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop"}],c=[{name:s("featured.skill.ai"),level:85,category:s("featured.category.ai"),icon:n.jsx(lr,{}),color:"from-purple-400 to-pink-500",note:s("featured.skill.ai.note")},{name:s("featured.skill.react"),level:95,category:s("featured.category.frontend"),icon:n.jsx(He,{}),color:"from-cyan-400 to-blue-500"},{name:s("featured.skill.typescript"),level:90,category:s("featured.category.frontend"),icon:n.jsx(He,{}),color:"from-blue-400 to-purple-500"},{name:s("featured.skill.csharp"),level:85,category:s("featured.category.backend"),icon:n.jsx(He,{}),color:"from-purple-400 to-indigo-500"},{name:s("featured.skill.nodejs"),level:85,category:s("featured.category.backend"),icon:n.jsx(dr,{}),color:"from-green-400 to-emerald-500"},{name:s("featured.skill.python"),level:88,category:s("featured.category.backend"),icon:n.jsx(dr,{}),color:"from-yellow-400 to-orange-500"},{name:s("featured.skill.cybersecurity"),level:35,category:s("featured.category.security"),icon:n.jsx(Ra,{}),color:"from-red-400 to-pink-500"},{name:s("featured.skill.databases"),level:70,category:s("featured.category.database"),icon:n.jsx(Ia,{}),color:"from-indigo-400 to-blue-500"},{name:s("featured.skill.docker"),level:65,category:s("featured.category.devops"),icon:n.jsx(Sa,{}),color:"from-purple-400 to-pink-500"},{name:s("featured.skill.ml"),level:70,category:s("featured.category.ai"),icon:n.jsx(lr,{}),color:"from-pink-400 to-rose-500"},{name:s("featured.skill.other"),level:70,category:s("featured.category.tools"),icon:n.jsx(He,{}),color:"from-teal-400 to-cyan-500"}],u=[...new Set(c.map(i=>i.category))];return n.jsxs("section",{ref:t,className:`featured-projects-skills-section relative min-h-screen pt-20 pb-24 px-6 lg:px-12 overflow-hidden ${ae.sectionBackground}`,children:[n.jsxs("div",{className:"absolute inset-0",children:[n.jsx("div",{className:`absolute inset-0 opacity-5 ${ae.cyberGrid}`}),n.jsx("div",{className:`absolute left-0 top-0 bottom-0 w-1/2 hidden lg:block ${ae.leftOverlay}`}),n.jsx("div",{className:`absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block ${ae.rightOverlay}`}),n.jsxs("div",{className:"absolute left-1/2 top-[5%] bottom-[5%] w-px transform -translate-x-1/2 z-10 hidden lg:block",children:[n.jsx("div",{className:"absolute inset-0 w-px bg-gradient-to-b from-transparent via-cyan-500/40 to-transparent"}),n.jsx("div",{className:"absolute inset-0 w-[2px] bg-gradient-to-b from-transparent via-cyan-400/25 to-transparent"}),n.jsx("div",{className:"absolute inset-0 w-[4px] bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent blur-sm"}),n.jsx("div",{className:"absolute inset-0 w-[8px] bg-gradient-to-b from-transparent via-cyan-300/15 to-transparent blur-lg"}),n.jsx("div",{className:`absolute inset-0 w-[2px] bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent ${ae.pulseAnimation}`}),n.jsxs("div",{className:"absolute top-0 left-1/2 transform -translate-x-1/2",children:[n.jsx("div",{className:"w-3 h-3 bg-cyan-500/60 rounded-full blur-sm"}),n.jsx("div",{className:"absolute top-0 left-0 w-3 h-3 bg-cyan-400/40 rounded-full animate-ping"})]}),n.jsxs("div",{className:"absolute bottom-0 left-1/2 transform -translate-x-1/2",children:[n.jsx("div",{className:"w-3 h-3 bg-cyan-500/60 rounded-full blur-sm"}),n.jsx("div",{className:"absolute bottom-0 left-0 w-3 h-3 bg-cyan-400/40 rounded-full animate-ping"})]})]})]}),n.jsx("div",{className:"container mx-auto max-w-[1600px] relative z-10",children:n.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16",children:[n.jsxs(H.div,{initial:{opacity:0,x:-50},animate:{opacity:r?1:0,x:r?0:-50},transition:{duration:.6},className:"space-y-8",children:[n.jsxs("div",{className:"text-left",children:[n.jsx("h2",{className:`text-4xl lg:text-5xl font-bold mb-4 ${ae.projectsTitle}`,children:s("featured.projects.title")}),n.jsx("p",{className:"text-lg text-gray-400",children:s("featured.projects.description")})]}),n.jsx("div",{className:"w-full",children:n.jsx(qa,{cards:o,textAutoHide:!1,enableStars:!0,enableSpotlight:!0,enableBorderGlow:!0,enableTilt:!0,clickEffect:!0,enableMagnetism:!0,glowColor:"0, 245, 255"})}),n.jsx(H.div,{initial:{opacity:0,y:20},animate:{opacity:r?1:0,y:r?0:20},transition:{delay:.4,duration:.5},children:n.jsxs("button",{type:"button",onClick:()=>e("/portfolio"),className:`group inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold ${ae.viewAllButton}`,children:[s("featured.viewAllProjects"),n.jsx(Aa,{className:"w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"})]})})]}),n.jsxs(H.div,{initial:{opacity:0,x:50},animate:{opacity:r?1:0,x:r?0:50},transition:{duration:.6},className:"space-y-8 lg:pl-12",children:[n.jsxs("div",{className:"text-left",children:[n.jsx("h2",{className:`text-4xl lg:text-5xl font-bold mb-4 ${ae.skillsTitle}`,children:s("featured.skills.title")}),n.jsx("p",{className:"text-lg text-gray-400",children:s("featured.skills.description")})]}),n.jsxs("div",{className:"space-y-6",children:[n.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:u.map((i,d)=>n.jsx(H.span,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:d*.1},className:"px-3 py-1 text-xs font-semibold rounded-full bg-slate-800/50 text-cyan-400 border border-cyan-500/20",children:i},i))}),n.jsx("div",{className:"space-y-4",children:c.map((i,d)=>n.jsxs(H.div,{initial:{opacity:0,x:30},animate:{opacity:r?1:0,x:r?0:30},transition:{delay:.1*d,duration:.5},className:"group",children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-cyan-400",children:i.icon}),n.jsx("span",{className:"text-white font-medium",children:i.name})]}),n.jsxs("span",{className:"text-cyan-400 font-bold",children:[i.level,"%"]})]}),n.jsx("div",{className:"relative h-2 bg-slate-800/50 rounded-full overflow-hidden",children:n.jsx(H.div,{initial:{width:0},animate:{width:r?`${i.level}%`:0},transition:{delay:.2+d*.1,duration:1,ease:"easeOut"},className:`absolute h-full bg-gradient-to-r ${i.color} rounded-full`,children:n.jsx("div",{className:`absolute inset-0 opacity-50 ${ae.skillIconShimmer} ${ae.shimmerAnimation}`})})}),i.note&&n.jsx("p",{className:"text-xs text-gray-400 italic mt-1 ml-6",children:i.note})]},i.name))}),n.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-8",children:[n.jsxs(H.div,{initial:{opacity:0,y:20},animate:{opacity:r?1:0,y:r?0:20},transition:{delay:.6},className:"text-center p-4 bg-slate-800/30 rounded-lg border border-cyan-500/20",children:[n.jsx("div",{className:"text-2xl font-bold text-cyan-400",children:"8+"}),n.jsx("div",{className:"text-xs text-gray-400",children:s("featured.stats.technologies")})]}),n.jsxs(H.div,{initial:{opacity:0,y:20},animate:{opacity:r?1:0,y:r?0:20},transition:{delay:.7},className:"text-center p-4 bg-slate-800/30 rounded-lg border border-cyan-500/20",children:[n.jsx("div",{className:"text-2xl font-bold text-cyan-400",children:"3+"}),n.jsx("div",{className:"text-xs text-gray-400",children:s("featured.stats.experience")})]}),n.jsxs(H.div,{initial:{opacity:0,y:20},animate:{opacity:r?1:0,y:r?0:20},transition:{delay:.8},className:"text-center p-4 bg-slate-800/30 rounded-lg border border-cyan-500/20",children:[n.jsx("div",{className:"text-2xl font-bold text-cyan-400",children:"20+"}),n.jsx("div",{className:"text-xs text-gray-400",children:s("featured.stats.projects")})]})]})]})]})]})}),n.jsx("style",{children:`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
        }

        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .featured-projects-skills-section {
            padding: 3rem 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .featured-projects-skills-section {
            padding: 2rem 1rem;
          }
        }
      `})]})},ps=({isVisible:e=!0})=>(me.useEffect(()=>(document.documentElement.style.scrollBehavior="smooth",()=>{document.documentElement.style.scrollBehavior="auto"}),[]),n.jsxs("div",{className:"relative","data-page":"home",children:[n.jsx(Kr,{}),n.jsx("section",{id:"home",children:n.jsx(Da,{isVisible:e})}),n.jsx("section",{id:"about",children:n.jsx(ja,{})}),n.jsx("section",{id:"portfolio",children:n.jsx(ns,{})}),n.jsx("section",{id:"contact",children:n.jsx(Gr,{useHomepageStyle:!0})}),n.jsx(Ur,{useHomepageStyle:!0})]}));export{ps as default};
