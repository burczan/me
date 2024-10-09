import{s as be,b as Si,u as Ti,g as Fi,d as Ii,n as fe,o as Pi}from"./scheduler.UCFHsqob.js";import{S as ge,i as ye,e as S,s as O,c as T,a as J,f as z,d as g,g as F,h as L,n as he,o as pe,t as Ne,b as qe,j as Xe,k as _e,l as we,q as N,m as ke,p as ve,H as Li,y as fu,G as Ri,u as ht}from"./index.BY5Ryio2.js";import{v as Mi,g as ji}from"./generateToC.BdFYRwfi.js";function hu(e){let t,n,u;return{c(){t=S("span"),n=S("b"),u=Ne(e[0])},l(i){t=T(i,"SPAN",{});var a=J(t);n=T(a,"B",{});var o=J(n);u=qe(o,e[0]),o.forEach(g),a.forEach(g)},m(i,a){F(i,t,a),L(t,n),L(n,u)},p(i,a){a&1&&Xe(u,i[0])},d(i){i&&g(t)}}}function Oi(e){let t,n,u,i,a=e[0]&&hu(e);const o=e[2].default,r=Si(o,e,e[1],null);return{c(){t=S("div"),a&&a.c(),n=O(),u=S("ul"),r&&r.c()},l(c){t=T(c,"DIV",{});var s=J(t);a&&a.l(s),n=z(s),u=T(s,"UL",{});var l=J(u);r&&r.l(l),l.forEach(g),s.forEach(g)},m(c,s){F(c,t,s),a&&a.m(t,null),L(t,n),L(t,u),r&&r.m(u,null),i=!0},p(c,[s]){c[0]?a?a.p(c,s):(a=hu(c),a.c(),a.m(t,n)):a&&(a.d(1),a=null),r&&r.p&&(!i||s&2)&&Ti(r,o,c,c[1],i?Ii(o,c[1],s,null):Fi(c[1]),null)},i(c){i||(he(r,c),i=!0)},o(c){pe(r,c),i=!1},d(c){c&&g(t),a&&a.d(),r&&r.d(c)}}}function zi(e,t,n){let{$$slots:u={},$$scope:i}=t,{caption:a=void 0}=t;return e.$$set=o=>{"caption"in o&&n(0,a=o.caption),"$$scope"in o&&n(1,i=o.$$scope)},[a,i,u]}class Ye extends ge{constructor(t){super(),ye(this,t,zi,Oi,be,{caption:0})}}function Ni(e){let t,n=e[0].status+"",u;return{c(){t=S("li"),u=Ne(n)},l(i){t=T(i,"LI",{});var a=J(t);u=qe(a,n),a.forEach(g)},m(i,a){F(i,t,a),L(t,u)},p(i,a){a&1&&n!==(n=i[0].status+"")&&Xe(u,n)},d(i){i&&g(t)}}}function qi(e){let t,n=`generating <a href="https://plantuml.com/" rel="noopener" target="_blank">PlantUML</a>
    diagrams.`,u,i,a="diagrams' storage and retrieval.",o,r,c=`HTML &lt;--&gt; <a href="https://prismjs.com/" rel="noopener" target="_blank">Prism</a>
    conversion.`;return{c(){t=S("li"),t.innerHTML=n,u=O(),i=S("li"),i.textContent=a,o=O(),r=S("li"),r.innerHTML=c},l(s){t=T(s,"LI",{"data-svelte-h":!0}),N(t)!=="svelte-tn1atf"&&(t.innerHTML=n),u=z(s),i=T(s,"LI",{"data-svelte-h":!0}),N(i)!=="svelte-8ecb9n"&&(i.textContent=a),o=z(s),r=T(s,"LI",{"data-svelte-h":!0}),N(r)!=="svelte-5kmjes"&&(r.innerHTML=c)},m(s,l){F(s,t,l),F(s,u,l),F(s,i,l),F(s,o,l),F(s,r,l)},p:fe,d(s){s&&(g(t),g(u),g(i),g(o),g(r))}}}function Bi(e){let t,n,u,i=`Custom scripts (TypeScript) and styling (Sass) for <a href="https://apps.ankiweb.net/" rel="noopener" target="_blank">Anki</a>
  flashcards.`,a,o,r="CLI tools (Node/TypeScript) for",c,s,l,h,m=`<button type="button" class="nes-btn is-disabled"><i class="nes-icon github-square is-small"></i>
    Private repository</button>`,p;return t=new Ye({props:{caption:"Status",$$slots:{default:[Ni]},$$scope:{ctx:e}}}),s=new Ye({props:{$$slots:{default:[qi]},$$scope:{ctx:e}}}),{c(){_e(t.$$.fragment),n=O(),u=S("p"),u.innerHTML=i,a=O(),o=S("p"),o.textContent=r,c=O(),_e(s.$$.fragment),l=O(),h=S("p"),h.innerHTML=m},l(f){we(t.$$.fragment,f),n=z(f),u=T(f,"P",{"data-svelte-h":!0}),N(u)!=="svelte-sbaycm"&&(u.innerHTML=i),a=z(f),o=T(f,"P",{"data-svelte-h":!0}),N(o)!=="svelte-39gd3j"&&(o.textContent=r),c=z(f),we(s.$$.fragment,f),l=z(f),h=T(f,"P",{"data-svelte-h":!0}),N(h)!=="svelte-1ff7x8g"&&(h.innerHTML=m)},m(f,y){ke(t,f,y),F(f,n,y),F(f,u,y),F(f,a,y),F(f,o,y),F(f,c,y),ke(s,f,y),F(f,l,y),F(f,h,y),p=!0},p(f,[y]){const I={};y&3&&(I.$$scope={dirty:y,ctx:f}),t.$set(I);const M={};y&2&&(M.$$scope={dirty:y,ctx:f}),s.$set(M)},i(f){p||(he(t.$$.fragment,f),he(s.$$.fragment,f),p=!0)},o(f){pe(t.$$.fragment,f),pe(s.$$.fragment,f),p=!1},d(f){f&&(g(n),g(u),g(a),g(o),g(c),g(l),g(h)),ve(t,f),ve(s,f)}}}function $i(e,t,n){let{project:u}=t;return e.$$set=i=>{"project"in i&&n(0,u=i.project)},[u]}class Ui extends ge{constructor(t){super(),ye(this,t,$i,Bi,be,{project:0})}}function Wi(e){let t,n=e[0].status+"",u;return{c(){t=S("li"),u=Ne(n)},l(i){t=T(i,"LI",{});var a=J(t);u=qe(a,n),a.forEach(g)},m(i,a){F(i,t,a),L(t,u)},p(i,a){a&1&&n!==(n=i[0].status+"")&&Xe(u,n)},d(i){i&&g(t)}}}function Hi(e){let t,n="Database of crochet patterns.",u,i,a="Database of yarns.",o,r,c="Various tools and calculators for patterns/projects/yarns management.";return{c(){t=S("li"),t.textContent=n,u=O(),i=S("li"),i.textContent=a,o=O(),r=S("li"),r.textContent=c},l(s){t=T(s,"LI",{"data-svelte-h":!0}),N(t)!=="svelte-proamt"&&(t.textContent=n),u=z(s),i=T(s,"LI",{"data-svelte-h":!0}),N(i)!=="svelte-10yx669"&&(i.textContent=a),o=z(s),r=T(s,"LI",{"data-svelte-h":!0}),N(r)!=="svelte-1u3u7ym"&&(r.textContent=c)},m(s,l){F(s,t,l),F(s,u,l),F(s,i,l),F(s,o,l),F(s,r,l)},p:fe,d(s){s&&(g(t),g(u),g(i),g(o),g(r))}}}function Gi(e){let t,n,u,i,a,o=`<button type="button" class="nes-btn is-disabled"><i class="nes-icon github-square is-small"></i>
    Private repository</button>`,r;return t=new Ye({props:{caption:"Status",$$slots:{default:[Wi]},$$scope:{ctx:e}}}),u=new Ye({props:{$$slots:{default:[Hi]},$$scope:{ctx:e}}}),{c(){_e(t.$$.fragment),n=O(),_e(u.$$.fragment),i=O(),a=S("p"),a.innerHTML=o},l(c){we(t.$$.fragment,c),n=z(c),we(u.$$.fragment,c),i=z(c),a=T(c,"P",{"data-svelte-h":!0}),N(a)!=="svelte-1ff7x8g"&&(a.innerHTML=o)},m(c,s){ke(t,c,s),F(c,n,s),ke(u,c,s),F(c,i,s),F(c,a,s),r=!0},p(c,[s]){const l={};s&3&&(l.$$scope={dirty:s,ctx:c}),t.$set(l);const h={};s&2&&(h.$$scope={dirty:s,ctx:c}),u.$set(h)},i(c){r||(he(t.$$.fragment,c),he(u.$$.fragment,c),r=!0)},o(c){pe(t.$$.fragment,c),pe(u.$$.fragment,c),r=!1},d(c){c&&(g(n),g(i),g(a)),ve(t,c),ve(u,c)}}}function Vi(e,t,n){let{project:u}=t;return e.$$set=i=>{"project"in i&&n(0,u=i.project)},[u]}class Qi extends ge{constructor(t){super(),ye(this,t,Vi,Gi,be,{project:0})}}const Zi=""+new URL("../assets/crochetMS_component_api_layer.D9xFDxDP.svg",import.meta.url).href,Yi=""+new URL("../assets/crochetMS_container_crochet_management_system.BKvRjGry.svg",import.meta.url).href,Ji=""+new URL("../assets/crochetMS_system_context.DtlamE4W.svg",import.meta.url).href,pu={};function Xi(e){let t=pu[e];if(t)return t;t=pu[e]=[];for(let n=0;n<128;n++){const u=String.fromCharCode(n);t.push(u)}for(let n=0;n<e.length;n++){const u=e.charCodeAt(n);t[u]="%"+("0"+u.toString(16).toUpperCase()).slice(-2)}return t}function mt(e,t){typeof t!="string"&&(t=mt.defaultChars);const n=Xi(t);return e.replace(/(%[a-f0-9]{2})+/gi,function(u){let i="";for(let a=0,o=u.length;a<o;a+=3){const r=parseInt(u.slice(a+1,a+3),16);if(r<128){i+=n[r];continue}if((r&224)===192&&a+3<o){const c=parseInt(u.slice(a+4,a+6),16);if((c&192)===128){const s=r<<6&1984|c&63;s<128?i+="��":i+=String.fromCharCode(s),a+=3;continue}}if((r&240)===224&&a+6<o){const c=parseInt(u.slice(a+4,a+6),16),s=parseInt(u.slice(a+7,a+9),16);if((c&192)===128&&(s&192)===128){const l=r<<12&61440|c<<6&4032|s&63;l<2048||l>=55296&&l<=57343?i+="���":i+=String.fromCharCode(l),a+=6;continue}}if((r&248)===240&&a+9<o){const c=parseInt(u.slice(a+4,a+6),16),s=parseInt(u.slice(a+7,a+9),16),l=parseInt(u.slice(a+10,a+12),16);if((c&192)===128&&(s&192)===128&&(l&192)===128){let h=r<<18&1835008|c<<12&258048|s<<6&4032|l&63;h<65536||h>1114111?i+="����":(h-=65536,i+=String.fromCharCode(55296+(h>>10),56320+(h&1023))),a+=9;continue}}i+="�"}return i})}mt.defaultChars=";/?:@&=+$,#";mt.componentChars="";const mu={};function Ki(e){let t=mu[e];if(t)return t;t=mu[e]=[];for(let n=0;n<128;n++){const u=String.fromCharCode(n);/^[0-9a-z]$/i.test(u)?t.push(u):t.push("%"+("0"+n.toString(16).toUpperCase()).slice(-2))}for(let n=0;n<e.length;n++)t[e.charCodeAt(n)]=e[n];return t}function Lt(e,t,n){typeof t!="string"&&(n=t,t=Lt.defaultChars),typeof n>"u"&&(n=!0);const u=Ki(t);let i="";for(let a=0,o=e.length;a<o;a++){const r=e.charCodeAt(a);if(n&&r===37&&a+2<o&&/^[0-9a-f]{2}$/i.test(e.slice(a+1,a+3))){i+=e.slice(a,a+3),a+=2;continue}if(r<128){i+=u[r];continue}if(r>=55296&&r<=57343){if(r>=55296&&r<=56319&&a+1<o){const c=e.charCodeAt(a+1);if(c>=56320&&c<=57343){i+=encodeURIComponent(e[a]+e[a+1]),a++;continue}}i+="%EF%BF%BD";continue}i+=encodeURIComponent(e[a])}return i}Lt.defaultChars=";/?:@&=+$,-_.!~*'()#";Lt.componentChars="-_.!~*'()";function Tn(e){let t="";return t+=e.protocol||"",t+=e.slashes?"//":"",t+=e.auth?e.auth+"@":"",e.hostname&&e.hostname.indexOf(":")!==-1?t+="["+e.hostname+"]":t+=e.hostname||"",t+=e.port?":"+e.port:"",t+=e.pathname||"",t+=e.search||"",t+=e.hash||"",t}function Zt(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}const ea=/^([a-z0-9.+-]+:)/i,ta=/:[0-9]*$/,na=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,ua=["<",">",'"',"`"," ","\r",`
`,"	"],ia=["{","}","|","\\","^","`"].concat(ua),aa=["'"].concat(ia),bu=["%","/","?",";","#"].concat(aa),gu=["/","?","#"],ra=255,yu=/^[+a-z0-9A-Z_-]{0,63}$/,oa=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,xu={javascript:!0,"javascript:":!0},_u={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function Fn(e,t){if(e&&e instanceof Zt)return e;const n=new Zt;return n.parse(e,t),n}Zt.prototype.parse=function(e,t){let n,u,i,a=e;if(a=a.trim(),!t&&e.split("#").length===1){const s=na.exec(a);if(s)return this.pathname=s[1],s[2]&&(this.search=s[2]),this}let o=ea.exec(a);if(o&&(o=o[0],n=o.toLowerCase(),this.protocol=o,a=a.substr(o.length)),(t||o||a.match(/^\/\/[^@\/]+@[^@\/]+/))&&(i=a.substr(0,2)==="//",i&&!(o&&xu[o])&&(a=a.substr(2),this.slashes=!0)),!xu[o]&&(i||o&&!_u[o])){let s=-1;for(let f=0;f<gu.length;f++)u=a.indexOf(gu[f]),u!==-1&&(s===-1||u<s)&&(s=u);let l,h;s===-1?h=a.lastIndexOf("@"):h=a.lastIndexOf("@",s),h!==-1&&(l=a.slice(0,h),a=a.slice(h+1),this.auth=l),s=-1;for(let f=0;f<bu.length;f++)u=a.indexOf(bu[f]),u!==-1&&(s===-1||u<s)&&(s=u);s===-1&&(s=a.length),a[s-1]===":"&&s--;const m=a.slice(0,s);a=a.slice(s),this.parseHost(m),this.hostname=this.hostname||"";const p=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!p){const f=this.hostname.split(/\./);for(let y=0,I=f.length;y<I;y++){const M=f[y];if(M&&!M.match(yu)){let A="";for(let E=0,x=M.length;E<x;E++)M.charCodeAt(E)>127?A+="x":A+=M[E];if(!A.match(yu)){const E=f.slice(0,y),x=f.slice(y+1),w=M.match(oa);w&&(E.push(w[1]),x.unshift(w[2])),x.length&&(a=x.join(".")+a),this.hostname=E.join(".");break}}}}this.hostname.length>ra&&(this.hostname=""),p&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}const r=a.indexOf("#");r!==-1&&(this.hash=a.substr(r),a=a.slice(0,r));const c=a.indexOf("?");return c!==-1&&(this.search=a.substr(c),a=a.slice(0,c)),a&&(this.pathname=a),_u[n]&&this.hostname&&!this.pathname&&(this.pathname=""),this};Zt.prototype.parseHost=function(e){let t=ta.exec(e);t&&(t=t[0],t!==":"&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)};const sa=Object.freeze(Object.defineProperty({__proto__:null,decode:mt,encode:Lt,format:Tn,parse:Fn},Symbol.toStringTag,{value:"Module"})),Ru=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,Mu=/[\0-\x1F\x7F-\x9F]/,ca=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,In=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,ju=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,Ou=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,la=Object.freeze(Object.defineProperty({__proto__:null,Any:Ru,Cc:Mu,Cf:ca,P:In,S:ju,Z:Ou},Symbol.toStringTag,{value:"Module"})),da=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(e=>e.charCodeAt(0))),fa=new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(e=>e.charCodeAt(0)));var yn;const ha=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),pa=(yn=String.fromCodePoint)!==null&&yn!==void 0?yn:function(e){let t="";return e>65535&&(e-=65536,t+=String.fromCharCode(e>>>10&1023|55296),e=56320|e&1023),t+=String.fromCharCode(e),t};function ma(e){var t;return e>=55296&&e<=57343||e>1114111?65533:(t=ha.get(e))!==null&&t!==void 0?t:e}var Z;(function(e){e[e.NUM=35]="NUM",e[e.SEMI=59]="SEMI",e[e.EQUALS=61]="EQUALS",e[e.ZERO=48]="ZERO",e[e.NINE=57]="NINE",e[e.LOWER_A=97]="LOWER_A",e[e.LOWER_F=102]="LOWER_F",e[e.LOWER_X=120]="LOWER_X",e[e.LOWER_Z=122]="LOWER_Z",e[e.UPPER_A=65]="UPPER_A",e[e.UPPER_F=70]="UPPER_F",e[e.UPPER_Z=90]="UPPER_Z"})(Z||(Z={}));const ba=32;var Ze;(function(e){e[e.VALUE_LENGTH=49152]="VALUE_LENGTH",e[e.BRANCH_LENGTH=16256]="BRANCH_LENGTH",e[e.JUMP_TABLE=127]="JUMP_TABLE"})(Ze||(Ze={}));function En(e){return e>=Z.ZERO&&e<=Z.NINE}function ga(e){return e>=Z.UPPER_A&&e<=Z.UPPER_F||e>=Z.LOWER_A&&e<=Z.LOWER_F}function ya(e){return e>=Z.UPPER_A&&e<=Z.UPPER_Z||e>=Z.LOWER_A&&e<=Z.LOWER_Z||En(e)}function xa(e){return e===Z.EQUALS||ya(e)}var Q;(function(e){e[e.EntityStart=0]="EntityStart",e[e.NumericStart=1]="NumericStart",e[e.NumericDecimal=2]="NumericDecimal",e[e.NumericHex=3]="NumericHex",e[e.NamedEntity=4]="NamedEntity"})(Q||(Q={}));var Qe;(function(e){e[e.Legacy=0]="Legacy",e[e.Strict=1]="Strict",e[e.Attribute=2]="Attribute"})(Qe||(Qe={}));class _a{constructor(t,n,u){this.decodeTree=t,this.emitCodePoint=n,this.errors=u,this.state=Q.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=Qe.Strict}startEntity(t){this.decodeMode=t,this.state=Q.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(t,n){switch(this.state){case Q.EntityStart:return t.charCodeAt(n)===Z.NUM?(this.state=Q.NumericStart,this.consumed+=1,this.stateNumericStart(t,n+1)):(this.state=Q.NamedEntity,this.stateNamedEntity(t,n));case Q.NumericStart:return this.stateNumericStart(t,n);case Q.NumericDecimal:return this.stateNumericDecimal(t,n);case Q.NumericHex:return this.stateNumericHex(t,n);case Q.NamedEntity:return this.stateNamedEntity(t,n)}}stateNumericStart(t,n){return n>=t.length?-1:(t.charCodeAt(n)|ba)===Z.LOWER_X?(this.state=Q.NumericHex,this.consumed+=1,this.stateNumericHex(t,n+1)):(this.state=Q.NumericDecimal,this.stateNumericDecimal(t,n))}addToNumericResult(t,n,u,i){if(n!==u){const a=u-n;this.result=this.result*Math.pow(i,a)+parseInt(t.substr(n,a),i),this.consumed+=a}}stateNumericHex(t,n){const u=n;for(;n<t.length;){const i=t.charCodeAt(n);if(En(i)||ga(i))n+=1;else return this.addToNumericResult(t,u,n,16),this.emitNumericEntity(i,3)}return this.addToNumericResult(t,u,n,16),-1}stateNumericDecimal(t,n){const u=n;for(;n<t.length;){const i=t.charCodeAt(n);if(En(i))n+=1;else return this.addToNumericResult(t,u,n,10),this.emitNumericEntity(i,2)}return this.addToNumericResult(t,u,n,10),-1}emitNumericEntity(t,n){var u;if(this.consumed<=n)return(u=this.errors)===null||u===void 0||u.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(t===Z.SEMI)this.consumed+=1;else if(this.decodeMode===Qe.Strict)return 0;return this.emitCodePoint(ma(this.result),this.consumed),this.errors&&(t!==Z.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(t,n){const{decodeTree:u}=this;let i=u[this.treeIndex],a=(i&Ze.VALUE_LENGTH)>>14;for(;n<t.length;n++,this.excess++){const o=t.charCodeAt(n);if(this.treeIndex=wa(u,i,this.treeIndex+Math.max(1,a),o),this.treeIndex<0)return this.result===0||this.decodeMode===Qe.Attribute&&(a===0||xa(o))?0:this.emitNotTerminatedNamedEntity();if(i=u[this.treeIndex],a=(i&Ze.VALUE_LENGTH)>>14,a!==0){if(o===Z.SEMI)return this.emitNamedEntityData(this.treeIndex,a,this.consumed+this.excess);this.decodeMode!==Qe.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var t;const{result:n,decodeTree:u}=this,i=(u[n]&Ze.VALUE_LENGTH)>>14;return this.emitNamedEntityData(n,i,this.consumed),(t=this.errors)===null||t===void 0||t.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(t,n,u){const{decodeTree:i}=this;return this.emitCodePoint(n===1?i[t]&~Ze.VALUE_LENGTH:i[t+1],u),n===3&&this.emitCodePoint(i[t+2],u),u}end(){var t;switch(this.state){case Q.NamedEntity:return this.result!==0&&(this.decodeMode!==Qe.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case Q.NumericDecimal:return this.emitNumericEntity(0,2);case Q.NumericHex:return this.emitNumericEntity(0,3);case Q.NumericStart:return(t=this.errors)===null||t===void 0||t.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case Q.EntityStart:return 0}}}function zu(e){let t="";const n=new _a(e,u=>t+=pa(u));return function(i,a){let o=0,r=0;for(;(r=i.indexOf("&",r))>=0;){t+=i.slice(o,r),n.startEntity(a);const s=n.write(i,r+1);if(s<0){o=r+n.end();break}o=r+s,r=s===0?o+1:o}const c=t+i.slice(o);return t="",c}}function wa(e,t,n,u){const i=(t&Ze.BRANCH_LENGTH)>>7,a=t&Ze.JUMP_TABLE;if(i===0)return a!==0&&u===a?n:-1;if(a){const c=u-a;return c<0||c>=i?-1:e[n+c]-1}let o=n,r=o+i-1;for(;o<=r;){const c=o+r>>>1,s=e[c];if(s<u)o=c+1;else if(s>u)r=c-1;else return e[c+i]}return-1}const ka=zu(da);zu(fa);function Nu(e,t=Qe.Legacy){return ka(e,t)}function va(e){return Object.prototype.toString.call(e)}function Pn(e){return va(e)==="[object String]"}const Aa=Object.prototype.hasOwnProperty;function Ca(e,t){return Aa.call(e,t)}function Xt(e){return Array.prototype.slice.call(arguments,1).forEach(function(n){if(n){if(typeof n!="object")throw new TypeError(n+"must be object");Object.keys(n).forEach(function(u){e[u]=n[u]})}}),e}function qu(e,t,n){return[].concat(e.slice(0,t),n,e.slice(t+1))}function Ln(e){return!(e>=55296&&e<=57343||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534||e>=0&&e<=8||e===11||e>=14&&e<=31||e>=127&&e<=159||e>1114111)}function Yt(e){if(e>65535){e-=65536;const t=55296+(e>>10),n=56320+(e&1023);return String.fromCharCode(t,n)}return String.fromCharCode(e)}const Bu=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,Ea=/&([a-z#][a-z0-9]{1,31});/gi,Da=new RegExp(Bu.source+"|"+Ea.source,"gi"),Sa=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function Ta(e,t){if(t.charCodeAt(0)===35&&Sa.test(t)){const u=t[1].toLowerCase()==="x"?parseInt(t.slice(2),16):parseInt(t.slice(1),10);return Ln(u)?Yt(u):e}const n=Nu(e);return n!==e?n:e}function Fa(e){return e.indexOf("\\")<0?e:e.replace(Bu,"$1")}function bt(e){return e.indexOf("\\")<0&&e.indexOf("&")<0?e:e.replace(Da,function(t,n,u){return n||Ta(t,u)})}const Ia=/[&<>"]/,Pa=/[&<>"]/g,La={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function Ra(e){return La[e]}function Je(e){return Ia.test(e)?e.replace(Pa,Ra):e}const Ma=/[.?*+^$[\]\\(){}|-]/g;function ja(e){return e.replace(Ma,"\\$&")}function U(e){switch(e){case 9:case 32:return!0}return!1}function Tt(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function Ft(e){return In.test(e)||ju.test(e)}function It(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function Kt(e){return e=e.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(e=e.replace(/ẞ/g,"ß")),e.toLowerCase().toUpperCase()}const Oa={mdurl:sa,ucmicro:la},za=Object.freeze(Object.defineProperty({__proto__:null,arrayReplaceAt:qu,assign:Xt,escapeHtml:Je,escapeRE:ja,fromCodePoint:Yt,has:Ca,isMdAsciiPunct:It,isPunctChar:Ft,isSpace:U,isString:Pn,isValidEntityCode:Ln,isWhiteSpace:Tt,lib:Oa,normalizeReference:Kt,unescapeAll:bt,unescapeMd:Fa},Symbol.toStringTag,{value:"Module"}));function Na(e,t,n){let u,i,a,o;const r=e.posMax,c=e.pos;for(e.pos=t+1,u=1;e.pos<r;){if(a=e.src.charCodeAt(e.pos),a===93&&(u--,u===0)){i=!0;break}if(o=e.pos,e.md.inline.skipToken(e),a===91){if(o===e.pos-1)u++;else if(n)return e.pos=c,-1}}let s=-1;return i&&(s=e.pos),e.pos=c,s}function qa(e,t,n){let u,i=t;const a={ok:!1,pos:0,str:""};if(e.charCodeAt(i)===60){for(i++;i<n;){if(u=e.charCodeAt(i),u===10||u===60)return a;if(u===62)return a.pos=i+1,a.str=bt(e.slice(t+1,i)),a.ok=!0,a;if(u===92&&i+1<n){i+=2;continue}i++}return a}let o=0;for(;i<n&&(u=e.charCodeAt(i),!(u===32||u<32||u===127));){if(u===92&&i+1<n){if(e.charCodeAt(i+1)===32)break;i+=2;continue}if(u===40&&(o++,o>32))return a;if(u===41){if(o===0)break;o--}i++}return t===i||o!==0||(a.str=bt(e.slice(t,i)),a.pos=i,a.ok=!0),a}function Ba(e,t,n,u){let i,a=t;const o={ok:!1,can_continue:!1,pos:0,str:"",marker:0};if(u)o.str=u.str,o.marker=u.marker;else{if(a>=n)return o;let r=e.charCodeAt(a);if(r!==34&&r!==39&&r!==40)return o;t++,a++,r===40&&(r=41),o.marker=r}for(;a<n;){if(i=e.charCodeAt(a),i===o.marker)return o.pos=a+1,o.str+=bt(e.slice(t,a)),o.ok=!0,o;if(i===40&&o.marker===41)return o;i===92&&a+1<n&&a++,a++}return o.can_continue=!0,o.str+=bt(e.slice(t,a)),o}const $a=Object.freeze(Object.defineProperty({__proto__:null,parseLinkDestination:qa,parseLinkLabel:Na,parseLinkTitle:Ba},Symbol.toStringTag,{value:"Module"})),Pe={};Pe.code_inline=function(e,t,n,u,i){const a=e[t];return"<code"+i.renderAttrs(a)+">"+Je(a.content)+"</code>"};Pe.code_block=function(e,t,n,u,i){const a=e[t];return"<pre"+i.renderAttrs(a)+"><code>"+Je(e[t].content)+`</code></pre>
`};Pe.fence=function(e,t,n,u,i){const a=e[t],o=a.info?bt(a.info).trim():"";let r="",c="";if(o){const l=o.split(/(\s+)/g);r=l[0],c=l.slice(2).join("")}let s;if(n.highlight?s=n.highlight(a.content,r,c)||Je(a.content):s=Je(a.content),s.indexOf("<pre")===0)return s+`
`;if(o){const l=a.attrIndex("class"),h=a.attrs?a.attrs.slice():[];l<0?h.push(["class",n.langPrefix+r]):(h[l]=h[l].slice(),h[l][1]+=" "+n.langPrefix+r);const m={attrs:h};return`<pre><code${i.renderAttrs(m)}>${s}</code></pre>
`}return`<pre><code${i.renderAttrs(a)}>${s}</code></pre>
`};Pe.image=function(e,t,n,u,i){const a=e[t];return a.attrs[a.attrIndex("alt")][1]=i.renderInlineAsText(a.children,n,u),i.renderToken(e,t,n)};Pe.hardbreak=function(e,t,n){return n.xhtmlOut?`<br />
`:`<br>
`};Pe.softbreak=function(e,t,n){return n.breaks?n.xhtmlOut?`<br />
`:`<br>
`:`
`};Pe.text=function(e,t){return Je(e[t].content)};Pe.html_block=function(e,t){return e[t].content};Pe.html_inline=function(e,t){return e[t].content};function gt(){this.rules=Xt({},Pe)}gt.prototype.renderAttrs=function(t){let n,u,i;if(!t.attrs)return"";for(i="",n=0,u=t.attrs.length;n<u;n++)i+=" "+Je(t.attrs[n][0])+'="'+Je(t.attrs[n][1])+'"';return i};gt.prototype.renderToken=function(t,n,u){const i=t[n];let a="";if(i.hidden)return"";i.block&&i.nesting!==-1&&n&&t[n-1].hidden&&(a+=`
`),a+=(i.nesting===-1?"</":"<")+i.tag,a+=this.renderAttrs(i),i.nesting===0&&u.xhtmlOut&&(a+=" /");let o=!1;if(i.block&&(o=!0,i.nesting===1&&n+1<t.length)){const r=t[n+1];(r.type==="inline"||r.hidden||r.nesting===-1&&r.tag===i.tag)&&(o=!1)}return a+=o?`>
`:">",a};gt.prototype.renderInline=function(e,t,n){let u="";const i=this.rules;for(let a=0,o=e.length;a<o;a++){const r=e[a].type;typeof i[r]<"u"?u+=i[r](e,a,t,n,this):u+=this.renderToken(e,a,t)}return u};gt.prototype.renderInlineAsText=function(e,t,n){let u="";for(let i=0,a=e.length;i<a;i++)switch(e[i].type){case"text":u+=e[i].content;break;case"image":u+=this.renderInlineAsText(e[i].children,t,n);break;case"html_inline":case"html_block":u+=e[i].content;break;case"softbreak":case"hardbreak":u+=`
`;break}return u};gt.prototype.render=function(e,t,n){let u="";const i=this.rules;for(let a=0,o=e.length;a<o;a++){const r=e[a].type;r==="inline"?u+=this.renderInline(e[a].children,t,n):typeof i[r]<"u"?u+=i[r](e,a,t,n,this):u+=this.renderToken(e,a,t,n)}return u};function ae(){this.__rules__=[],this.__cache__=null}ae.prototype.__find__=function(e){for(let t=0;t<this.__rules__.length;t++)if(this.__rules__[t].name===e)return t;return-1};ae.prototype.__compile__=function(){const e=this,t=[""];e.__rules__.forEach(function(n){n.enabled&&n.alt.forEach(function(u){t.indexOf(u)<0&&t.push(u)})}),e.__cache__={},t.forEach(function(n){e.__cache__[n]=[],e.__rules__.forEach(function(u){u.enabled&&(n&&u.alt.indexOf(n)<0||e.__cache__[n].push(u.fn))})})};ae.prototype.at=function(e,t,n){const u=this.__find__(e),i=n||{};if(u===-1)throw new Error("Parser rule not found: "+e);this.__rules__[u].fn=t,this.__rules__[u].alt=i.alt||[],this.__cache__=null};ae.prototype.before=function(e,t,n,u){const i=this.__find__(e),a=u||{};if(i===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(i,0,{name:t,enabled:!0,fn:n,alt:a.alt||[]}),this.__cache__=null};ae.prototype.after=function(e,t,n,u){const i=this.__find__(e),a=u||{};if(i===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(i+1,0,{name:t,enabled:!0,fn:n,alt:a.alt||[]}),this.__cache__=null};ae.prototype.push=function(e,t,n){const u=n||{};this.__rules__.push({name:e,enabled:!0,fn:t,alt:u.alt||[]}),this.__cache__=null};ae.prototype.enable=function(e,t){Array.isArray(e)||(e=[e]);const n=[];return e.forEach(function(u){const i=this.__find__(u);if(i<0){if(t)return;throw new Error("Rules manager: invalid rule name "+u)}this.__rules__[i].enabled=!0,n.push(u)},this),this.__cache__=null,n};ae.prototype.enableOnly=function(e,t){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(n){n.enabled=!1}),this.enable(e,t)};ae.prototype.disable=function(e,t){Array.isArray(e)||(e=[e]);const n=[];return e.forEach(function(u){const i=this.__find__(u);if(i<0){if(t)return;throw new Error("Rules manager: invalid rule name "+u)}this.__rules__[i].enabled=!1,n.push(u)},this),this.__cache__=null,n};ae.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};function Ae(e,t,n){this.type=e,this.tag=t,this.attrs=null,this.map=null,this.nesting=n,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}Ae.prototype.attrIndex=function(t){if(!this.attrs)return-1;const n=this.attrs;for(let u=0,i=n.length;u<i;u++)if(n[u][0]===t)return u;return-1};Ae.prototype.attrPush=function(t){this.attrs?this.attrs.push(t):this.attrs=[t]};Ae.prototype.attrSet=function(t,n){const u=this.attrIndex(t),i=[t,n];u<0?this.attrPush(i):this.attrs[u]=i};Ae.prototype.attrGet=function(t){const n=this.attrIndex(t);let u=null;return n>=0&&(u=this.attrs[n][1]),u};Ae.prototype.attrJoin=function(t,n){const u=this.attrIndex(t);u<0?this.attrPush([t,n]):this.attrs[u][1]=this.attrs[u][1]+" "+n};function $u(e,t,n){this.src=e,this.env=n,this.tokens=[],this.inlineMode=!1,this.md=t}$u.prototype.Token=Ae;const Ua=/\r\n?|\n/g,Wa=/\0/g;function Ha(e){let t;t=e.src.replace(Ua,`
`),t=t.replace(Wa,"�"),e.src=t}function Ga(e){let t;e.inlineMode?(t=new e.Token("inline","",0),t.content=e.src,t.map=[0,1],t.children=[],e.tokens.push(t)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}function Va(e){const t=e.tokens;for(let n=0,u=t.length;n<u;n++){const i=t[n];i.type==="inline"&&e.md.inline.parse(i.content,e.md,e.env,i.children)}}function Qa(e){return/^<a[>\s]/i.test(e)}function Za(e){return/^<\/a\s*>/i.test(e)}function Ya(e){const t=e.tokens;if(e.md.options.linkify)for(let n=0,u=t.length;n<u;n++){if(t[n].type!=="inline"||!e.md.linkify.pretest(t[n].content))continue;let i=t[n].children,a=0;for(let o=i.length-1;o>=0;o--){const r=i[o];if(r.type==="link_close"){for(o--;i[o].level!==r.level&&i[o].type!=="link_open";)o--;continue}if(r.type==="html_inline"&&(Qa(r.content)&&a>0&&a--,Za(r.content)&&a++),!(a>0)&&r.type==="text"&&e.md.linkify.test(r.content)){const c=r.content;let s=e.md.linkify.match(c);const l=[];let h=r.level,m=0;s.length>0&&s[0].index===0&&o>0&&i[o-1].type==="text_special"&&(s=s.slice(1));for(let p=0;p<s.length;p++){const f=s[p].url,y=e.md.normalizeLink(f);if(!e.md.validateLink(y))continue;let I=s[p].text;s[p].schema?s[p].schema==="mailto:"&&!/^mailto:/i.test(I)?I=e.md.normalizeLinkText("mailto:"+I).replace(/^mailto:/,""):I=e.md.normalizeLinkText(I):I=e.md.normalizeLinkText("http://"+I).replace(/^http:\/\//,"");const M=s[p].index;if(M>m){const w=new e.Token("text","",0);w.content=c.slice(m,M),w.level=h,l.push(w)}const A=new e.Token("link_open","a",1);A.attrs=[["href",y]],A.level=h++,A.markup="linkify",A.info="auto",l.push(A);const E=new e.Token("text","",0);E.content=I,E.level=h,l.push(E);const x=new e.Token("link_close","a",-1);x.level=--h,x.markup="linkify",x.info="auto",l.push(x),m=s[p].lastIndex}if(m<c.length){const p=new e.Token("text","",0);p.content=c.slice(m),p.level=h,l.push(p)}t[n].children=i=qu(i,o,l)}}}}const Uu=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,Ja=/\((c|tm|r)\)/i,Xa=/\((c|tm|r)\)/ig,Ka={c:"©",r:"®",tm:"™"};function er(e,t){return Ka[t.toLowerCase()]}function tr(e){let t=0;for(let n=e.length-1;n>=0;n--){const u=e[n];u.type==="text"&&!t&&(u.content=u.content.replace(Xa,er)),u.type==="link_open"&&u.info==="auto"&&t--,u.type==="link_close"&&u.info==="auto"&&t++}}function nr(e){let t=0;for(let n=e.length-1;n>=0;n--){const u=e[n];u.type==="text"&&!t&&Uu.test(u.content)&&(u.content=u.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1—").replace(/(^|\s)--(?=\s|$)/mg,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1–")),u.type==="link_open"&&u.info==="auto"&&t--,u.type==="link_close"&&u.info==="auto"&&t++}}function ur(e){let t;if(e.md.options.typographer)for(t=e.tokens.length-1;t>=0;t--)e.tokens[t].type==="inline"&&(Ja.test(e.tokens[t].content)&&tr(e.tokens[t].children),Uu.test(e.tokens[t].content)&&nr(e.tokens[t].children))}const ir=/['"]/,wu=/['"]/g,ku="’";function Vt(e,t,n){return e.slice(0,t)+n+e.slice(t+1)}function ar(e,t){let n;const u=[];for(let i=0;i<e.length;i++){const a=e[i],o=e[i].level;for(n=u.length-1;n>=0&&!(u[n].level<=o);n--);if(u.length=n+1,a.type!=="text")continue;let r=a.content,c=0,s=r.length;e:for(;c<s;){wu.lastIndex=c;const l=wu.exec(r);if(!l)break;let h=!0,m=!0;c=l.index+1;const p=l[0]==="'";let f=32;if(l.index-1>=0)f=r.charCodeAt(l.index-1);else for(n=i-1;n>=0&&!(e[n].type==="softbreak"||e[n].type==="hardbreak");n--)if(e[n].content){f=e[n].content.charCodeAt(e[n].content.length-1);break}let y=32;if(c<s)y=r.charCodeAt(c);else for(n=i+1;n<e.length&&!(e[n].type==="softbreak"||e[n].type==="hardbreak");n++)if(e[n].content){y=e[n].content.charCodeAt(0);break}const I=It(f)||Ft(String.fromCharCode(f)),M=It(y)||Ft(String.fromCharCode(y)),A=Tt(f),E=Tt(y);if(E?h=!1:M&&(A||I||(h=!1)),A?m=!1:I&&(E||M||(m=!1)),y===34&&l[0]==='"'&&f>=48&&f<=57&&(m=h=!1),h&&m&&(h=I,m=M),!h&&!m){p&&(a.content=Vt(a.content,l.index,ku));continue}if(m)for(n=u.length-1;n>=0;n--){let x=u[n];if(u[n].level<o)break;if(x.single===p&&u[n].level===o){x=u[n];let w,D;p?(w=t.md.options.quotes[2],D=t.md.options.quotes[3]):(w=t.md.options.quotes[0],D=t.md.options.quotes[1]),a.content=Vt(a.content,l.index,D),e[x.token].content=Vt(e[x.token].content,x.pos,w),c+=D.length-1,x.token===i&&(c+=w.length-1),r=a.content,s=r.length,u.length=n;continue e}}h?u.push({token:i,pos:l.index,single:p,level:o}):m&&p&&(a.content=Vt(a.content,l.index,ku))}}}function rr(e){if(e.md.options.typographer)for(let t=e.tokens.length-1;t>=0;t--)e.tokens[t].type!=="inline"||!ir.test(e.tokens[t].content)||ar(e.tokens[t].children,e)}function or(e){let t,n;const u=e.tokens,i=u.length;for(let a=0;a<i;a++){if(u[a].type!=="inline")continue;const o=u[a].children,r=o.length;for(t=0;t<r;t++)o[t].type==="text_special"&&(o[t].type="text");for(t=n=0;t<r;t++)o[t].type==="text"&&t+1<r&&o[t+1].type==="text"?o[t+1].content=o[t].content+o[t+1].content:(t!==n&&(o[n]=o[t]),n++);t!==n&&(o.length=n)}}const xn=[["normalize",Ha],["block",Ga],["inline",Va],["linkify",Ya],["replacements",ur],["smartquotes",rr],["text_join",or]];function Rn(){this.ruler=new ae;for(let e=0;e<xn.length;e++)this.ruler.push(xn[e][0],xn[e][1])}Rn.prototype.process=function(e){const t=this.ruler.getRules("");for(let n=0,u=t.length;n<u;n++)t[n](e)};Rn.prototype.State=$u;function Le(e,t,n,u){this.src=e,this.md=t,this.env=n,this.tokens=u,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0;const i=this.src;for(let a=0,o=0,r=0,c=0,s=i.length,l=!1;o<s;o++){const h=i.charCodeAt(o);if(!l)if(U(h)){r++,h===9?c+=4-c%4:c++;continue}else l=!0;(h===10||o===s-1)&&(h!==10&&o++,this.bMarks.push(a),this.eMarks.push(o),this.tShift.push(r),this.sCount.push(c),this.bsCount.push(0),l=!1,r=0,c=0,a=o+1)}this.bMarks.push(i.length),this.eMarks.push(i.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}Le.prototype.push=function(e,t,n){const u=new Ae(e,t,n);return u.block=!0,n<0&&this.level--,u.level=this.level,n>0&&this.level++,this.tokens.push(u),u};Le.prototype.isEmpty=function(t){return this.bMarks[t]+this.tShift[t]>=this.eMarks[t]};Le.prototype.skipEmptyLines=function(t){for(let n=this.lineMax;t<n&&!(this.bMarks[t]+this.tShift[t]<this.eMarks[t]);t++);return t};Le.prototype.skipSpaces=function(t){for(let n=this.src.length;t<n;t++){const u=this.src.charCodeAt(t);if(!U(u))break}return t};Le.prototype.skipSpacesBack=function(t,n){if(t<=n)return t;for(;t>n;)if(!U(this.src.charCodeAt(--t)))return t+1;return t};Le.prototype.skipChars=function(t,n){for(let u=this.src.length;t<u&&this.src.charCodeAt(t)===n;t++);return t};Le.prototype.skipCharsBack=function(t,n,u){if(t<=u)return t;for(;t>u;)if(n!==this.src.charCodeAt(--t))return t+1;return t};Le.prototype.getLines=function(t,n,u,i){if(t>=n)return"";const a=new Array(n-t);for(let o=0,r=t;r<n;r++,o++){let c=0;const s=this.bMarks[r];let l=s,h;for(r+1<n||i?h=this.eMarks[r]+1:h=this.eMarks[r];l<h&&c<u;){const m=this.src.charCodeAt(l);if(U(m))m===9?c+=4-(c+this.bsCount[r])%4:c++;else if(l-s<this.tShift[r])c++;else break;l++}c>u?a[o]=new Array(c-u+1).join(" ")+this.src.slice(l,h):a[o]=this.src.slice(l,h)}return a.join("")};Le.prototype.Token=Ae;const sr=65536;function _n(e,t){const n=e.bMarks[t]+e.tShift[t],u=e.eMarks[t];return e.src.slice(n,u)}function vu(e){const t=[],n=e.length;let u=0,i=e.charCodeAt(u),a=!1,o=0,r="";for(;u<n;)i===124&&(a?(r+=e.substring(o,u-1),o=u):(t.push(r+e.substring(o,u)),r="",o=u+1)),a=i===92,u++,i=e.charCodeAt(u);return t.push(r+e.substring(o)),t}function cr(e,t,n,u){if(t+2>n)return!1;let i=t+1;if(e.sCount[i]<e.blkIndent||e.sCount[i]-e.blkIndent>=4)return!1;let a=e.bMarks[i]+e.tShift[i];if(a>=e.eMarks[i])return!1;const o=e.src.charCodeAt(a++);if(o!==124&&o!==45&&o!==58||a>=e.eMarks[i])return!1;const r=e.src.charCodeAt(a++);if(r!==124&&r!==45&&r!==58&&!U(r)||o===45&&U(r))return!1;for(;a<e.eMarks[i];){const x=e.src.charCodeAt(a);if(x!==124&&x!==45&&x!==58&&!U(x))return!1;a++}let c=_n(e,t+1),s=c.split("|");const l=[];for(let x=0;x<s.length;x++){const w=s[x].trim();if(!w){if(x===0||x===s.length-1)continue;return!1}if(!/^:?-+:?$/.test(w))return!1;w.charCodeAt(w.length-1)===58?l.push(w.charCodeAt(0)===58?"center":"right"):w.charCodeAt(0)===58?l.push("left"):l.push("")}if(c=_n(e,t).trim(),c.indexOf("|")===-1||e.sCount[t]-e.blkIndent>=4)return!1;s=vu(c),s.length&&s[0]===""&&s.shift(),s.length&&s[s.length-1]===""&&s.pop();const h=s.length;if(h===0||h!==l.length)return!1;if(u)return!0;const m=e.parentType;e.parentType="table";const p=e.md.block.ruler.getRules("blockquote"),f=e.push("table_open","table",1),y=[t,0];f.map=y;const I=e.push("thead_open","thead",1);I.map=[t,t+1];const M=e.push("tr_open","tr",1);M.map=[t,t+1];for(let x=0;x<s.length;x++){const w=e.push("th_open","th",1);l[x]&&(w.attrs=[["style","text-align:"+l[x]]]);const D=e.push("inline","",0);D.content=s[x].trim(),D.children=[],e.push("th_close","th",-1)}e.push("tr_close","tr",-1),e.push("thead_close","thead",-1);let A,E=0;for(i=t+2;i<n&&!(e.sCount[i]<e.blkIndent);i++){let x=!1;for(let D=0,B=p.length;D<B;D++)if(p[D](e,i,n,!0)){x=!0;break}if(x||(c=_n(e,i).trim(),!c)||e.sCount[i]-e.blkIndent>=4||(s=vu(c),s.length&&s[0]===""&&s.shift(),s.length&&s[s.length-1]===""&&s.pop(),E+=h-s.length,E>sr))break;if(i===t+2){const D=e.push("tbody_open","tbody",1);D.map=A=[t+2,0]}const w=e.push("tr_open","tr",1);w.map=[i,i+1];for(let D=0;D<h;D++){const B=e.push("td_open","td",1);l[D]&&(B.attrs=[["style","text-align:"+l[D]]]);const q=e.push("inline","",0);q.content=s[D]?s[D].trim():"",q.children=[],e.push("td_close","td",-1)}e.push("tr_close","tr",-1)}return A&&(e.push("tbody_close","tbody",-1),A[1]=i),e.push("table_close","table",-1),y[1]=i,e.parentType=m,e.line=i,!0}function lr(e,t,n){if(e.sCount[t]-e.blkIndent<4)return!1;let u=t+1,i=u;for(;u<n;){if(e.isEmpty(u)){u++;continue}if(e.sCount[u]-e.blkIndent>=4){u++,i=u;continue}break}e.line=i;const a=e.push("code_block","code",0);return a.content=e.getLines(t,i,4+e.blkIndent,!1)+`
`,a.map=[t,e.line],!0}function dr(e,t,n,u){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||i+3>a)return!1;const o=e.src.charCodeAt(i);if(o!==126&&o!==96)return!1;let r=i;i=e.skipChars(i,o);let c=i-r;if(c<3)return!1;const s=e.src.slice(r,i),l=e.src.slice(i,a);if(o===96&&l.indexOf(String.fromCharCode(o))>=0)return!1;if(u)return!0;let h=t,m=!1;for(;h++,!(h>=n||(i=r=e.bMarks[h]+e.tShift[h],a=e.eMarks[h],i<a&&e.sCount[h]<e.blkIndent));)if(e.src.charCodeAt(i)===o&&!(e.sCount[h]-e.blkIndent>=4)&&(i=e.skipChars(i,o),!(i-r<c)&&(i=e.skipSpaces(i),!(i<a)))){m=!0;break}c=e.sCount[t],e.line=h+(m?1:0);const p=e.push("fence","code",0);return p.info=l,p.content=e.getLines(t+1,h,c,!0),p.markup=s,p.map=[t,e.line],!0}function fr(e,t,n,u){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];const o=e.lineMax;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(i)!==62)return!1;if(u)return!0;const r=[],c=[],s=[],l=[],h=e.md.block.ruler.getRules("blockquote"),m=e.parentType;e.parentType="blockquote";let p=!1,f;for(f=t;f<n;f++){const E=e.sCount[f]<e.blkIndent;if(i=e.bMarks[f]+e.tShift[f],a=e.eMarks[f],i>=a)break;if(e.src.charCodeAt(i++)===62&&!E){let w=e.sCount[f]+1,D,B;e.src.charCodeAt(i)===32?(i++,w++,B=!1,D=!0):e.src.charCodeAt(i)===9?(D=!0,(e.bsCount[f]+w)%4===3?(i++,w++,B=!1):B=!0):D=!1;let q=w;for(r.push(e.bMarks[f]),e.bMarks[f]=i;i<a;){const re=e.src.charCodeAt(i);if(U(re))re===9?q+=4-(q+e.bsCount[f]+(B?1:0))%4:q++;else break;i++}p=i>=a,c.push(e.bsCount[f]),e.bsCount[f]=e.sCount[f]+1+(D?1:0),s.push(e.sCount[f]),e.sCount[f]=q-w,l.push(e.tShift[f]),e.tShift[f]=i-e.bMarks[f];continue}if(p)break;let x=!1;for(let w=0,D=h.length;w<D;w++)if(h[w](e,f,n,!0)){x=!0;break}if(x){e.lineMax=f,e.blkIndent!==0&&(r.push(e.bMarks[f]),c.push(e.bsCount[f]),l.push(e.tShift[f]),s.push(e.sCount[f]),e.sCount[f]-=e.blkIndent);break}r.push(e.bMarks[f]),c.push(e.bsCount[f]),l.push(e.tShift[f]),s.push(e.sCount[f]),e.sCount[f]=-1}const y=e.blkIndent;e.blkIndent=0;const I=e.push("blockquote_open","blockquote",1);I.markup=">";const M=[t,0];I.map=M,e.md.block.tokenize(e,t,f);const A=e.push("blockquote_close","blockquote",-1);A.markup=">",e.lineMax=o,e.parentType=m,M[1]=e.line;for(let E=0;E<l.length;E++)e.bMarks[E+t]=r[E],e.tShift[E+t]=l[E],e.sCount[E+t]=s[E],e.bsCount[E+t]=c[E];return e.blkIndent=y,!0}function hr(e,t,n,u){const i=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let a=e.bMarks[t]+e.tShift[t];const o=e.src.charCodeAt(a++);if(o!==42&&o!==45&&o!==95)return!1;let r=1;for(;a<i;){const s=e.src.charCodeAt(a++);if(s!==o&&!U(s))return!1;s===o&&r++}if(r<3)return!1;if(u)return!0;e.line=t+1;const c=e.push("hr","hr",0);return c.map=[t,e.line],c.markup=Array(r+1).join(String.fromCharCode(o)),!0}function Au(e,t){const n=e.eMarks[t];let u=e.bMarks[t]+e.tShift[t];const i=e.src.charCodeAt(u++);if(i!==42&&i!==45&&i!==43)return-1;if(u<n){const a=e.src.charCodeAt(u);if(!U(a))return-1}return u}function Cu(e,t){const n=e.bMarks[t]+e.tShift[t],u=e.eMarks[t];let i=n;if(i+1>=u)return-1;let a=e.src.charCodeAt(i++);if(a<48||a>57)return-1;for(;;){if(i>=u)return-1;if(a=e.src.charCodeAt(i++),a>=48&&a<=57){if(i-n>=10)return-1;continue}if(a===41||a===46)break;return-1}return i<u&&(a=e.src.charCodeAt(i),!U(a))?-1:i}function pr(e,t){const n=e.level+2;for(let u=t+2,i=e.tokens.length-2;u<i;u++)e.tokens[u].level===n&&e.tokens[u].type==="paragraph_open"&&(e.tokens[u+2].hidden=!0,e.tokens[u].hidden=!0,u+=2)}function mr(e,t,n,u){let i,a,o,r,c=t,s=!0;if(e.sCount[c]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[c]-e.listIndent>=4&&e.sCount[c]<e.blkIndent)return!1;let l=!1;u&&e.parentType==="paragraph"&&e.sCount[c]>=e.blkIndent&&(l=!0);let h,m,p;if((p=Cu(e,c))>=0){if(h=!0,o=e.bMarks[c]+e.tShift[c],m=Number(e.src.slice(o,p-1)),l&&m!==1)return!1}else if((p=Au(e,c))>=0)h=!1;else return!1;if(l&&e.skipSpaces(p)>=e.eMarks[c])return!1;if(u)return!0;const f=e.src.charCodeAt(p-1),y=e.tokens.length;h?(r=e.push("ordered_list_open","ol",1),m!==1&&(r.attrs=[["start",m]])):r=e.push("bullet_list_open","ul",1);const I=[c,0];r.map=I,r.markup=String.fromCharCode(f);let M=!1;const A=e.md.block.ruler.getRules("list"),E=e.parentType;for(e.parentType="list";c<n;){a=p,i=e.eMarks[c];const x=e.sCount[c]+p-(e.bMarks[c]+e.tShift[c]);let w=x;for(;a<i;){const ue=e.src.charCodeAt(a);if(ue===9)w+=4-(w+e.bsCount[c])%4;else if(ue===32)w++;else break;a++}const D=a;let B;D>=i?B=1:B=w-x,B>4&&(B=1);const q=x+B;r=e.push("list_item_open","li",1),r.markup=String.fromCharCode(f);const re=[c,0];r.map=re,h&&(r.info=e.src.slice(o,p-1));const P=e.tight,ce=e.tShift[c],le=e.sCount[c],xe=e.listIndent;if(e.listIndent=e.blkIndent,e.blkIndent=q,e.tight=!0,e.tShift[c]=D-e.bMarks[c],e.sCount[c]=w,D>=i&&e.isEmpty(c+1)?e.line=Math.min(e.line+2,n):e.md.block.tokenize(e,c,n,!0),(!e.tight||M)&&(s=!1),M=e.line-c>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=xe,e.tShift[c]=ce,e.sCount[c]=le,e.tight=P,r=e.push("list_item_close","li",-1),r.markup=String.fromCharCode(f),c=e.line,re[1]=c,c>=n||e.sCount[c]<e.blkIndent||e.sCount[c]-e.blkIndent>=4)break;let oe=!1;for(let ue=0,de=A.length;ue<de;ue++)if(A[ue](e,c,n,!0)){oe=!0;break}if(oe)break;if(h){if(p=Cu(e,c),p<0)break;o=e.bMarks[c]+e.tShift[c]}else if(p=Au(e,c),p<0)break;if(f!==e.src.charCodeAt(p-1))break}return h?r=e.push("ordered_list_close","ol",-1):r=e.push("bullet_list_close","ul",-1),r.markup=String.fromCharCode(f),I[1]=c,e.line=c,e.parentType=E,s&&pr(e,y),!0}function br(e,t,n,u){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t],o=t+1;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(i)!==91)return!1;function r(A){const E=e.lineMax;if(A>=E||e.isEmpty(A))return null;let x=!1;if(e.sCount[A]-e.blkIndent>3&&(x=!0),e.sCount[A]<0&&(x=!0),!x){const B=e.md.block.ruler.getRules("reference"),q=e.parentType;e.parentType="reference";let re=!1;for(let P=0,ce=B.length;P<ce;P++)if(B[P](e,A,E,!0)){re=!0;break}if(e.parentType=q,re)return null}const w=e.bMarks[A]+e.tShift[A],D=e.eMarks[A];return e.src.slice(w,D+1)}let c=e.src.slice(i,a+1);a=c.length;let s=-1;for(i=1;i<a;i++){const A=c.charCodeAt(i);if(A===91)return!1;if(A===93){s=i;break}else if(A===10){const E=r(o);E!==null&&(c+=E,a=c.length,o++)}else if(A===92&&(i++,i<a&&c.charCodeAt(i)===10)){const E=r(o);E!==null&&(c+=E,a=c.length,o++)}}if(s<0||c.charCodeAt(s+1)!==58)return!1;for(i=s+2;i<a;i++){const A=c.charCodeAt(i);if(A===10){const E=r(o);E!==null&&(c+=E,a=c.length,o++)}else if(!U(A))break}const l=e.md.helpers.parseLinkDestination(c,i,a);if(!l.ok)return!1;const h=e.md.normalizeLink(l.str);if(!e.md.validateLink(h))return!1;i=l.pos;const m=i,p=o,f=i;for(;i<a;i++){const A=c.charCodeAt(i);if(A===10){const E=r(o);E!==null&&(c+=E,a=c.length,o++)}else if(!U(A))break}let y=e.md.helpers.parseLinkTitle(c,i,a);for(;y.can_continue;){const A=r(o);if(A===null)break;c+=A,i=a,a=c.length,o++,y=e.md.helpers.parseLinkTitle(c,i,a,y)}let I;for(i<a&&f!==i&&y.ok?(I=y.str,i=y.pos):(I="",i=m,o=p);i<a;){const A=c.charCodeAt(i);if(!U(A))break;i++}if(i<a&&c.charCodeAt(i)!==10&&I)for(I="",i=m,o=p;i<a;){const A=c.charCodeAt(i);if(!U(A))break;i++}if(i<a&&c.charCodeAt(i)!==10)return!1;const M=Kt(c.slice(1,s));return M?(u||(typeof e.env.references>"u"&&(e.env.references={}),typeof e.env.references[M]>"u"&&(e.env.references[M]={title:I,href:h}),e.line=o),!0):!1}const gr=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],yr="[a-zA-Z_:][a-zA-Z0-9:._-]*",xr="[^\"'=<>`\\x00-\\x20]+",_r="'[^']*'",wr='"[^"]*"',kr="(?:"+xr+"|"+_r+"|"+wr+")",vr="(?:\\s+"+yr+"(?:\\s*=\\s*"+kr+")?)",Wu="<[A-Za-z][A-Za-z0-9\\-]*"+vr+"*\\s*\\/?>",Hu="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",Ar="<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->",Cr="<[?][\\s\\S]*?[?]>",Er="<![A-Za-z][^>]*>",Dr="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",Sr=new RegExp("^(?:"+Wu+"|"+Hu+"|"+Ar+"|"+Cr+"|"+Er+"|"+Dr+")"),Tr=new RegExp("^(?:"+Wu+"|"+Hu+")"),ft=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+gr.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(Tr.source+"\\s*$"),/^$/,!1]];function Fr(e,t,n,u){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(i)!==60)return!1;let o=e.src.slice(i,a),r=0;for(;r<ft.length&&!ft[r][0].test(o);r++);if(r===ft.length)return!1;if(u)return ft[r][2];let c=t+1;if(!ft[r][1].test(o)){for(;c<n&&!(e.sCount[c]<e.blkIndent);c++)if(i=e.bMarks[c]+e.tShift[c],a=e.eMarks[c],o=e.src.slice(i,a),ft[r][1].test(o)){o.length!==0&&c++;break}}e.line=c;const s=e.push("html_block","",0);return s.map=[t,c],s.content=e.getLines(t,c,e.blkIndent,!0),!0}function Ir(e,t,n,u){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let o=e.src.charCodeAt(i);if(o!==35||i>=a)return!1;let r=1;for(o=e.src.charCodeAt(++i);o===35&&i<a&&r<=6;)r++,o=e.src.charCodeAt(++i);if(r>6||i<a&&!U(o))return!1;if(u)return!0;a=e.skipSpacesBack(a,i);const c=e.skipCharsBack(a,35,i);c>i&&U(e.src.charCodeAt(c-1))&&(a=c),e.line=t+1;const s=e.push("heading_open","h"+String(r),1);s.markup="########".slice(0,r),s.map=[t,e.line];const l=e.push("inline","",0);l.content=e.src.slice(i,a).trim(),l.map=[t,e.line],l.children=[];const h=e.push("heading_close","h"+String(r),-1);return h.markup="########".slice(0,r),!0}function Pr(e,t,n){const u=e.md.block.ruler.getRules("paragraph");if(e.sCount[t]-e.blkIndent>=4)return!1;const i=e.parentType;e.parentType="paragraph";let a=0,o,r=t+1;for(;r<n&&!e.isEmpty(r);r++){if(e.sCount[r]-e.blkIndent>3)continue;if(e.sCount[r]>=e.blkIndent){let p=e.bMarks[r]+e.tShift[r];const f=e.eMarks[r];if(p<f&&(o=e.src.charCodeAt(p),(o===45||o===61)&&(p=e.skipChars(p,o),p=e.skipSpaces(p),p>=f))){a=o===61?1:2;break}}if(e.sCount[r]<0)continue;let m=!1;for(let p=0,f=u.length;p<f;p++)if(u[p](e,r,n,!0)){m=!0;break}if(m)break}if(!a)return!1;const c=e.getLines(t,r,e.blkIndent,!1).trim();e.line=r+1;const s=e.push("heading_open","h"+String(a),1);s.markup=String.fromCharCode(o),s.map=[t,e.line];const l=e.push("inline","",0);l.content=c,l.map=[t,e.line-1],l.children=[];const h=e.push("heading_close","h"+String(a),-1);return h.markup=String.fromCharCode(o),e.parentType=i,!0}function Lr(e,t,n){const u=e.md.block.ruler.getRules("paragraph"),i=e.parentType;let a=t+1;for(e.parentType="paragraph";a<n&&!e.isEmpty(a);a++){if(e.sCount[a]-e.blkIndent>3||e.sCount[a]<0)continue;let s=!1;for(let l=0,h=u.length;l<h;l++)if(u[l](e,a,n,!0)){s=!0;break}if(s)break}const o=e.getLines(t,a,e.blkIndent,!1).trim();e.line=a;const r=e.push("paragraph_open","p",1);r.map=[t,e.line];const c=e.push("inline","",0);return c.content=o,c.map=[t,e.line],c.children=[],e.push("paragraph_close","p",-1),e.parentType=i,!0}const Qt=[["table",cr,["paragraph","reference"]],["code",lr],["fence",dr,["paragraph","reference","blockquote","list"]],["blockquote",fr,["paragraph","reference","blockquote","list"]],["hr",hr,["paragraph","reference","blockquote","list"]],["list",mr,["paragraph","reference","blockquote"]],["reference",br],["html_block",Fr,["paragraph","reference","blockquote"]],["heading",Ir,["paragraph","reference","blockquote"]],["lheading",Pr],["paragraph",Lr]];function en(){this.ruler=new ae;for(let e=0;e<Qt.length;e++)this.ruler.push(Qt[e][0],Qt[e][1],{alt:(Qt[e][2]||[]).slice()})}en.prototype.tokenize=function(e,t,n){const u=this.ruler.getRules(""),i=u.length,a=e.md.options.maxNesting;let o=t,r=!1;for(;o<n&&(e.line=o=e.skipEmptyLines(o),!(o>=n||e.sCount[o]<e.blkIndent));){if(e.level>=a){e.line=n;break}const c=e.line;let s=!1;for(let l=0;l<i;l++)if(s=u[l](e,o,n,!1),s){if(c>=e.line)throw new Error("block rule didn't increment state.line");break}if(!s)throw new Error("none of the block rules matched");e.tight=!r,e.isEmpty(e.line-1)&&(r=!0),o=e.line,o<n&&e.isEmpty(o)&&(r=!0,o++,e.line=o)}};en.prototype.parse=function(e,t,n,u){if(!e)return;const i=new this.State(e,t,n,u);this.tokenize(i,i.line,i.lineMax)};en.prototype.State=Le;function Rt(e,t,n,u){this.src=e,this.env=n,this.md=t,this.tokens=u,this.tokens_meta=Array(u.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}Rt.prototype.pushPending=function(){const e=new Ae("text","",0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending="",e};Rt.prototype.push=function(e,t,n){this.pending&&this.pushPending();const u=new Ae(e,t,n);let i=null;return n<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),u.level=this.level,n>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],i={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(u),this.tokens_meta.push(i),u};Rt.prototype.scanDelims=function(e,t){const n=this.posMax,u=this.src.charCodeAt(e),i=e>0?this.src.charCodeAt(e-1):32;let a=e;for(;a<n&&this.src.charCodeAt(a)===u;)a++;const o=a-e,r=a<n?this.src.charCodeAt(a):32,c=It(i)||Ft(String.fromCharCode(i)),s=It(r)||Ft(String.fromCharCode(r)),l=Tt(i),h=Tt(r),m=!h&&(!s||l||c),p=!l&&(!c||h||s);return{can_open:m&&(t||!p||c),can_close:p&&(t||!m||s),length:o}};Rt.prototype.Token=Ae;function Rr(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function Mr(e,t){let n=e.pos;for(;n<e.posMax&&!Rr(e.src.charCodeAt(n));)n++;return n===e.pos?!1:(t||(e.pending+=e.src.slice(e.pos,n)),e.pos=n,!0)}const jr=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function Or(e,t){if(!e.md.options.linkify||e.linkLevel>0)return!1;const n=e.pos,u=e.posMax;if(n+3>u||e.src.charCodeAt(n)!==58||e.src.charCodeAt(n+1)!==47||e.src.charCodeAt(n+2)!==47)return!1;const i=e.pending.match(jr);if(!i)return!1;const a=i[1],o=e.md.linkify.matchAtStart(e.src.slice(n-a.length));if(!o)return!1;let r=o.url;if(r.length<=a.length)return!1;r=r.replace(/\*+$/,"");const c=e.md.normalizeLink(r);if(!e.md.validateLink(c))return!1;if(!t){e.pending=e.pending.slice(0,-a.length);const s=e.push("link_open","a",1);s.attrs=[["href",c]],s.markup="linkify",s.info="auto";const l=e.push("text","",0);l.content=e.md.normalizeLinkText(r);const h=e.push("link_close","a",-1);h.markup="linkify",h.info="auto"}return e.pos+=r.length-a.length,!0}function zr(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==10)return!1;const u=e.pending.length-1,i=e.posMax;if(!t)if(u>=0&&e.pending.charCodeAt(u)===32)if(u>=1&&e.pending.charCodeAt(u-1)===32){let a=u-1;for(;a>=1&&e.pending.charCodeAt(a-1)===32;)a--;e.pending=e.pending.slice(0,a),e.push("hardbreak","br",0)}else e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0);else e.push("softbreak","br",0);for(n++;n<i&&U(e.src.charCodeAt(n));)n++;return e.pos=n,!0}const Mn=[];for(let e=0;e<256;e++)Mn.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e){Mn[e.charCodeAt(0)]=1});function Nr(e,t){let n=e.pos;const u=e.posMax;if(e.src.charCodeAt(n)!==92||(n++,n>=u))return!1;let i=e.src.charCodeAt(n);if(i===10){for(t||e.push("hardbreak","br",0),n++;n<u&&(i=e.src.charCodeAt(n),!!U(i));)n++;return e.pos=n,!0}let a=e.src[n];if(i>=55296&&i<=56319&&n+1<u){const r=e.src.charCodeAt(n+1);r>=56320&&r<=57343&&(a+=e.src[n+1],n++)}const o="\\"+a;if(!t){const r=e.push("text_special","",0);i<256&&Mn[i]!==0?r.content=a:r.content=o,r.markup=o,r.info="escape"}return e.pos=n+1,!0}function qr(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==96)return!1;const i=n;n++;const a=e.posMax;for(;n<a&&e.src.charCodeAt(n)===96;)n++;const o=e.src.slice(i,n),r=o.length;if(e.backticksScanned&&(e.backticks[r]||0)<=i)return t||(e.pending+=o),e.pos+=r,!0;let c=n,s;for(;(s=e.src.indexOf("`",c))!==-1;){for(c=s+1;c<a&&e.src.charCodeAt(c)===96;)c++;const l=c-s;if(l===r){if(!t){const h=e.push("code_inline","code",0);h.markup=o,h.content=e.src.slice(n,s).replace(/\n/g," ").replace(/^ (.+) $/,"$1")}return e.pos=c,!0}e.backticks[l]=s}return e.backticksScanned=!0,t||(e.pending+=o),e.pos+=r,!0}function Br(e,t){const n=e.pos,u=e.src.charCodeAt(n);if(t||u!==126)return!1;const i=e.scanDelims(e.pos,!0);let a=i.length;const o=String.fromCharCode(u);if(a<2)return!1;let r;a%2&&(r=e.push("text","",0),r.content=o,a--);for(let c=0;c<a;c+=2)r=e.push("text","",0),r.content=o+o,e.delimiters.push({marker:u,length:0,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close});return e.pos+=i.length,!0}function Eu(e,t){let n;const u=[],i=t.length;for(let a=0;a<i;a++){const o=t[a];if(o.marker!==126||o.end===-1)continue;const r=t[o.end];n=e.tokens[o.token],n.type="s_open",n.tag="s",n.nesting=1,n.markup="~~",n.content="",n=e.tokens[r.token],n.type="s_close",n.tag="s",n.nesting=-1,n.markup="~~",n.content="",e.tokens[r.token-1].type==="text"&&e.tokens[r.token-1].content==="~"&&u.push(r.token-1)}for(;u.length;){const a=u.pop();let o=a+1;for(;o<e.tokens.length&&e.tokens[o].type==="s_close";)o++;o--,a!==o&&(n=e.tokens[o],e.tokens[o]=e.tokens[a],e.tokens[a]=n)}}function $r(e){const t=e.tokens_meta,n=e.tokens_meta.length;Eu(e,e.delimiters);for(let u=0;u<n;u++)t[u]&&t[u].delimiters&&Eu(e,t[u].delimiters)}const Gu={tokenize:Br,postProcess:$r};function Ur(e,t){const n=e.pos,u=e.src.charCodeAt(n);if(t||u!==95&&u!==42)return!1;const i=e.scanDelims(e.pos,u===42);for(let a=0;a<i.length;a++){const o=e.push("text","",0);o.content=String.fromCharCode(u),e.delimiters.push({marker:u,length:i.length,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close})}return e.pos+=i.length,!0}function Du(e,t){const n=t.length;for(let u=n-1;u>=0;u--){const i=t[u];if(i.marker!==95&&i.marker!==42||i.end===-1)continue;const a=t[i.end],o=u>0&&t[u-1].end===i.end+1&&t[u-1].marker===i.marker&&t[u-1].token===i.token-1&&t[i.end+1].token===a.token+1,r=String.fromCharCode(i.marker),c=e.tokens[i.token];c.type=o?"strong_open":"em_open",c.tag=o?"strong":"em",c.nesting=1,c.markup=o?r+r:r,c.content="";const s=e.tokens[a.token];s.type=o?"strong_close":"em_close",s.tag=o?"strong":"em",s.nesting=-1,s.markup=o?r+r:r,s.content="",o&&(e.tokens[t[u-1].token].content="",e.tokens[t[i.end+1].token].content="",u--)}}function Wr(e){const t=e.tokens_meta,n=e.tokens_meta.length;Du(e,e.delimiters);for(let u=0;u<n;u++)t[u]&&t[u].delimiters&&Du(e,t[u].delimiters)}const Vu={tokenize:Ur,postProcess:Wr};function Hr(e,t){let n,u,i,a,o="",r="",c=e.pos,s=!0;if(e.src.charCodeAt(e.pos)!==91)return!1;const l=e.pos,h=e.posMax,m=e.pos+1,p=e.md.helpers.parseLinkLabel(e,e.pos,!0);if(p<0)return!1;let f=p+1;if(f<h&&e.src.charCodeAt(f)===40){for(s=!1,f++;f<h&&(n=e.src.charCodeAt(f),!(!U(n)&&n!==10));f++);if(f>=h)return!1;if(c=f,i=e.md.helpers.parseLinkDestination(e.src,f,e.posMax),i.ok){for(o=e.md.normalizeLink(i.str),e.md.validateLink(o)?f=i.pos:o="",c=f;f<h&&(n=e.src.charCodeAt(f),!(!U(n)&&n!==10));f++);if(i=e.md.helpers.parseLinkTitle(e.src,f,e.posMax),f<h&&c!==f&&i.ok)for(r=i.str,f=i.pos;f<h&&(n=e.src.charCodeAt(f),!(!U(n)&&n!==10));f++);}(f>=h||e.src.charCodeAt(f)!==41)&&(s=!0),f++}if(s){if(typeof e.env.references>"u")return!1;if(f<h&&e.src.charCodeAt(f)===91?(c=f+1,f=e.md.helpers.parseLinkLabel(e,f),f>=0?u=e.src.slice(c,f++):f=p+1):f=p+1,u||(u=e.src.slice(m,p)),a=e.env.references[Kt(u)],!a)return e.pos=l,!1;o=a.href,r=a.title}if(!t){e.pos=m,e.posMax=p;const y=e.push("link_open","a",1),I=[["href",o]];y.attrs=I,r&&I.push(["title",r]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,e.push("link_close","a",-1)}return e.pos=f,e.posMax=h,!0}function Gr(e,t){let n,u,i,a,o,r,c,s,l="";const h=e.pos,m=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91)return!1;const p=e.pos+2,f=e.md.helpers.parseLinkLabel(e,e.pos+1,!1);if(f<0)return!1;if(a=f+1,a<m&&e.src.charCodeAt(a)===40){for(a++;a<m&&(n=e.src.charCodeAt(a),!(!U(n)&&n!==10));a++);if(a>=m)return!1;for(s=a,r=e.md.helpers.parseLinkDestination(e.src,a,e.posMax),r.ok&&(l=e.md.normalizeLink(r.str),e.md.validateLink(l)?a=r.pos:l=""),s=a;a<m&&(n=e.src.charCodeAt(a),!(!U(n)&&n!==10));a++);if(r=e.md.helpers.parseLinkTitle(e.src,a,e.posMax),a<m&&s!==a&&r.ok)for(c=r.str,a=r.pos;a<m&&(n=e.src.charCodeAt(a),!(!U(n)&&n!==10));a++);else c="";if(a>=m||e.src.charCodeAt(a)!==41)return e.pos=h,!1;a++}else{if(typeof e.env.references>"u")return!1;if(a<m&&e.src.charCodeAt(a)===91?(s=a+1,a=e.md.helpers.parseLinkLabel(e,a),a>=0?i=e.src.slice(s,a++):a=f+1):a=f+1,i||(i=e.src.slice(p,f)),o=e.env.references[Kt(i)],!o)return e.pos=h,!1;l=o.href,c=o.title}if(!t){u=e.src.slice(p,f);const y=[];e.md.inline.parse(u,e.md,e.env,y);const I=e.push("image","img",0),M=[["src",l],["alt",""]];I.attrs=M,I.children=y,I.content=u,c&&M.push(["title",c])}return e.pos=a,e.posMax=m,!0}const Vr=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,Qr=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function Zr(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==60)return!1;const u=e.pos,i=e.posMax;for(;;){if(++n>=i)return!1;const o=e.src.charCodeAt(n);if(o===60)return!1;if(o===62)break}const a=e.src.slice(u+1,n);if(Qr.test(a)){const o=e.md.normalizeLink(a);if(!e.md.validateLink(o))return!1;if(!t){const r=e.push("link_open","a",1);r.attrs=[["href",o]],r.markup="autolink",r.info="auto";const c=e.push("text","",0);c.content=e.md.normalizeLinkText(a);const s=e.push("link_close","a",-1);s.markup="autolink",s.info="auto"}return e.pos+=a.length+2,!0}if(Vr.test(a)){const o=e.md.normalizeLink("mailto:"+a);if(!e.md.validateLink(o))return!1;if(!t){const r=e.push("link_open","a",1);r.attrs=[["href",o]],r.markup="autolink",r.info="auto";const c=e.push("text","",0);c.content=e.md.normalizeLinkText(a);const s=e.push("link_close","a",-1);s.markup="autolink",s.info="auto"}return e.pos+=a.length+2,!0}return!1}function Yr(e){return/^<a[>\s]/i.test(e)}function Jr(e){return/^<\/a\s*>/i.test(e)}function Xr(e){const t=e|32;return t>=97&&t<=122}function Kr(e,t){if(!e.md.options.html)return!1;const n=e.posMax,u=e.pos;if(e.src.charCodeAt(u)!==60||u+2>=n)return!1;const i=e.src.charCodeAt(u+1);if(i!==33&&i!==63&&i!==47&&!Xr(i))return!1;const a=e.src.slice(u).match(Sr);if(!a)return!1;if(!t){const o=e.push("html_inline","",0);o.content=a[0],Yr(o.content)&&e.linkLevel++,Jr(o.content)&&e.linkLevel--}return e.pos+=a[0].length,!0}const eo=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,to=/^&([a-z][a-z0-9]{1,31});/i;function no(e,t){const n=e.pos,u=e.posMax;if(e.src.charCodeAt(n)!==38||n+1>=u)return!1;if(e.src.charCodeAt(n+1)===35){const a=e.src.slice(n).match(eo);if(a){if(!t){const o=a[1][0].toLowerCase()==="x"?parseInt(a[1].slice(1),16):parseInt(a[1],10),r=e.push("text_special","",0);r.content=Ln(o)?Yt(o):Yt(65533),r.markup=a[0],r.info="entity"}return e.pos+=a[0].length,!0}}else{const a=e.src.slice(n).match(to);if(a){const o=Nu(a[0]);if(o!==a[0]){if(!t){const r=e.push("text_special","",0);r.content=o,r.markup=a[0],r.info="entity"}return e.pos+=a[0].length,!0}}}return!1}function Su(e){const t={},n=e.length;if(!n)return;let u=0,i=-2;const a=[];for(let o=0;o<n;o++){const r=e[o];if(a.push(0),(e[u].marker!==r.marker||i!==r.token-1)&&(u=o),i=r.token,r.length=r.length||0,!r.close)continue;t.hasOwnProperty(r.marker)||(t[r.marker]=[-1,-1,-1,-1,-1,-1]);const c=t[r.marker][(r.open?3:0)+r.length%3];let s=u-a[u]-1,l=s;for(;s>c;s-=a[s]+1){const h=e[s];if(h.marker===r.marker&&h.open&&h.end<0){let m=!1;if((h.close||r.open)&&(h.length+r.length)%3===0&&(h.length%3!==0||r.length%3!==0)&&(m=!0),!m){const p=s>0&&!e[s-1].open?a[s-1]+1:0;a[o]=o-s+p,a[s]=p,r.open=!1,h.end=o,h.close=!1,l=-1,i=-2;break}}}l!==-1&&(t[r.marker][(r.open?3:0)+(r.length||0)%3]=l)}}function uo(e){const t=e.tokens_meta,n=e.tokens_meta.length;Su(e.delimiters);for(let u=0;u<n;u++)t[u]&&t[u].delimiters&&Su(t[u].delimiters)}function io(e){let t,n,u=0;const i=e.tokens,a=e.tokens.length;for(t=n=0;t<a;t++)i[t].nesting<0&&u--,i[t].level=u,i[t].nesting>0&&u++,i[t].type==="text"&&t+1<a&&i[t+1].type==="text"?i[t+1].content=i[t].content+i[t+1].content:(t!==n&&(i[n]=i[t]),n++);t!==n&&(i.length=n)}const wn=[["text",Mr],["linkify",Or],["newline",zr],["escape",Nr],["backticks",qr],["strikethrough",Gu.tokenize],["emphasis",Vu.tokenize],["link",Hr],["image",Gr],["autolink",Zr],["html_inline",Kr],["entity",no]],kn=[["balance_pairs",uo],["strikethrough",Gu.postProcess],["emphasis",Vu.postProcess],["fragments_join",io]];function Mt(){this.ruler=new ae;for(let e=0;e<wn.length;e++)this.ruler.push(wn[e][0],wn[e][1]);this.ruler2=new ae;for(let e=0;e<kn.length;e++)this.ruler2.push(kn[e][0],kn[e][1])}Mt.prototype.skipToken=function(e){const t=e.pos,n=this.ruler.getRules(""),u=n.length,i=e.md.options.maxNesting,a=e.cache;if(typeof a[t]<"u"){e.pos=a[t];return}let o=!1;if(e.level<i){for(let r=0;r<u;r++)if(e.level++,o=n[r](e,!0),e.level--,o){if(t>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}else e.pos=e.posMax;o||e.pos++,a[t]=e.pos};Mt.prototype.tokenize=function(e){const t=this.ruler.getRules(""),n=t.length,u=e.posMax,i=e.md.options.maxNesting;for(;e.pos<u;){const a=e.pos;let o=!1;if(e.level<i){for(let r=0;r<n;r++)if(o=t[r](e,!1),o){if(a>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}if(o){if(e.pos>=u)break;continue}e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()};Mt.prototype.parse=function(e,t,n,u){const i=new this.State(e,t,n,u);this.tokenize(i);const a=this.ruler2.getRules(""),o=a.length;for(let r=0;r<o;r++)a[r](i)};Mt.prototype.State=Rt;function ao(e){const t={};e=e||{},t.src_Any=Ru.source,t.src_Cc=Mu.source,t.src_Z=Ou.source,t.src_P=In.source,t.src_ZPCc=[t.src_Z,t.src_P,t.src_Cc].join("|"),t.src_ZCc=[t.src_Z,t.src_Cc].join("|");const n="[><｜]";return t.src_pseudo_letter="(?:(?!"+n+"|"+t.src_ZPCc+")"+t.src_Any+")",t.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",t.src_auth="(?:(?:(?!"+t.src_ZCc+"|[@/\\[\\]()]).)+@)?",t.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",t.src_host_terminator="(?=$|"+n+"|"+t.src_ZPCc+")(?!"+(e["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+t.src_ZPCc+"))",t.src_path="(?:[/?#](?:(?!"+t.src_ZCc+"|"+n+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+t.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+t.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+t.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+t.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+t.src_ZCc+"|[']).)+\\'|\\'(?="+t.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+t.src_ZCc+"|[.]|$)|"+(e["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+t.src_ZCc+"|$)|;(?!"+t.src_ZCc+"|$)|\\!+(?!"+t.src_ZCc+"|[!]|$)|\\?(?!"+t.src_ZCc+"|[?]|$))+|\\/)?",t.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',t.src_xn="xn--[a-z0-9\\-]{1,59}",t.src_domain_root="(?:"+t.src_xn+"|"+t.src_pseudo_letter+"{1,63})",t.src_domain="(?:"+t.src_xn+"|(?:"+t.src_pseudo_letter+")|(?:"+t.src_pseudo_letter+"(?:-|"+t.src_pseudo_letter+"){0,61}"+t.src_pseudo_letter+"))",t.src_host="(?:(?:(?:(?:"+t.src_domain+")\\.)*"+t.src_domain+"))",t.tpl_host_fuzzy="(?:"+t.src_ip4+"|(?:(?:(?:"+t.src_domain+")\\.)+(?:%TLDS%)))",t.tpl_host_no_ip_fuzzy="(?:(?:(?:"+t.src_domain+")\\.)+(?:%TLDS%))",t.src_host_strict=t.src_host+t.src_host_terminator,t.tpl_host_fuzzy_strict=t.tpl_host_fuzzy+t.src_host_terminator,t.src_host_port_strict=t.src_host+t.src_port+t.src_host_terminator,t.tpl_host_port_fuzzy_strict=t.tpl_host_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_port_no_ip_fuzzy_strict=t.tpl_host_no_ip_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+t.src_ZPCc+"|>|$))",t.tpl_email_fuzzy="(^|"+n+'|"|\\(|'+t.src_ZCc+")("+t.src_email_name+"@"+t.tpl_host_fuzzy_strict+")",t.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_fuzzy_strict+t.src_path+")",t.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_no_ip_fuzzy_strict+t.src_path+")",t}function Dn(e){return Array.prototype.slice.call(arguments,1).forEach(function(n){n&&Object.keys(n).forEach(function(u){e[u]=n[u]})}),e}function tn(e){return Object.prototype.toString.call(e)}function ro(e){return tn(e)==="[object String]"}function oo(e){return tn(e)==="[object Object]"}function so(e){return tn(e)==="[object RegExp]"}function Tu(e){return tn(e)==="[object Function]"}function co(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}const Qu={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function lo(e){return Object.keys(e||{}).reduce(function(t,n){return t||Qu.hasOwnProperty(n)},!1)}const fo={"http:":{validate:function(e,t,n){const u=e.slice(t);return n.re.http||(n.re.http=new RegExp("^\\/\\/"+n.re.src_auth+n.re.src_host_port_strict+n.re.src_path,"i")),n.re.http.test(u)?u.match(n.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(e,t,n){const u=e.slice(t);return n.re.no_http||(n.re.no_http=new RegExp("^"+n.re.src_auth+"(?:localhost|(?:(?:"+n.re.src_domain+")\\.)+"+n.re.src_domain_root+")"+n.re.src_port+n.re.src_host_terminator+n.re.src_path,"i")),n.re.no_http.test(u)?t>=3&&e[t-3]===":"||t>=3&&e[t-3]==="/"?0:u.match(n.re.no_http)[0].length:0}},"mailto:":{validate:function(e,t,n){const u=e.slice(t);return n.re.mailto||(n.re.mailto=new RegExp("^"+n.re.src_email_name+"@"+n.re.src_host_strict,"i")),n.re.mailto.test(u)?u.match(n.re.mailto)[0].length:0}}},ho="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",po="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function mo(e){e.__index__=-1,e.__text_cache__=""}function bo(e){return function(t,n){const u=t.slice(n);return e.test(u)?u.match(e)[0].length:0}}function Fu(){return function(e,t){t.normalize(e)}}function Jt(e){const t=e.re=ao(e.__opts__),n=e.__tlds__.slice();e.onCompile(),e.__tlds_replaced__||n.push(ho),n.push(t.src_xn),t.src_tlds=n.join("|");function u(r){return r.replace("%TLDS%",t.src_tlds)}t.email_fuzzy=RegExp(u(t.tpl_email_fuzzy),"i"),t.link_fuzzy=RegExp(u(t.tpl_link_fuzzy),"i"),t.link_no_ip_fuzzy=RegExp(u(t.tpl_link_no_ip_fuzzy),"i"),t.host_fuzzy_test=RegExp(u(t.tpl_host_fuzzy_test),"i");const i=[];e.__compiled__={};function a(r,c){throw new Error('(LinkifyIt) Invalid schema "'+r+'": '+c)}Object.keys(e.__schemas__).forEach(function(r){const c=e.__schemas__[r];if(c===null)return;const s={validate:null,link:null};if(e.__compiled__[r]=s,oo(c)){so(c.validate)?s.validate=bo(c.validate):Tu(c.validate)?s.validate=c.validate:a(r,c),Tu(c.normalize)?s.normalize=c.normalize:c.normalize?a(r,c):s.normalize=Fu();return}if(ro(c)){i.push(r);return}a(r,c)}),i.forEach(function(r){e.__compiled__[e.__schemas__[r]]&&(e.__compiled__[r].validate=e.__compiled__[e.__schemas__[r]].validate,e.__compiled__[r].normalize=e.__compiled__[e.__schemas__[r]].normalize)}),e.__compiled__[""]={validate:null,normalize:Fu()};const o=Object.keys(e.__compiled__).filter(function(r){return r.length>0&&e.__compiled__[r]}).map(co).join("|");e.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+t.src_ZPCc+"))("+o+")","i"),e.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+t.src_ZPCc+"))("+o+")","ig"),e.re.schema_at_start=RegExp("^"+e.re.schema_search.source,"i"),e.re.pretest=RegExp("("+e.re.schema_test.source+")|("+e.re.host_fuzzy_test.source+")|@","i"),mo(e)}function go(e,t){const n=e.__index__,u=e.__last_index__,i=e.__text_cache__.slice(n,u);this.schema=e.__schema__.toLowerCase(),this.index=n+t,this.lastIndex=u+t,this.raw=i,this.text=i,this.url=i}function Sn(e,t){const n=new go(e,t);return e.__compiled__[n.schema].normalize(n,e),n}function se(e,t){if(!(this instanceof se))return new se(e,t);t||lo(e)&&(t=e,e={}),this.__opts__=Dn({},Qu,t),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=Dn({},fo,e),this.__compiled__={},this.__tlds__=po,this.__tlds_replaced__=!1,this.re={},Jt(this)}se.prototype.add=function(t,n){return this.__schemas__[t]=n,Jt(this),this};se.prototype.set=function(t){return this.__opts__=Dn(this.__opts__,t),this};se.prototype.test=function(t){if(this.__text_cache__=t,this.__index__=-1,!t.length)return!1;let n,u,i,a,o,r,c,s,l;if(this.re.schema_test.test(t)){for(c=this.re.schema_search,c.lastIndex=0;(n=c.exec(t))!==null;)if(a=this.testSchemaAt(t,n[2],c.lastIndex),a){this.__schema__=n[2],this.__index__=n.index+n[1].length,this.__last_index__=n.index+n[0].length+a;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(s=t.search(this.re.host_fuzzy_test),s>=0&&(this.__index__<0||s<this.__index__)&&(u=t.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(o=u.index+u[1].length,(this.__index__<0||o<this.__index__)&&(this.__schema__="",this.__index__=o,this.__last_index__=u.index+u[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(l=t.indexOf("@"),l>=0&&(i=t.match(this.re.email_fuzzy))!==null&&(o=i.index+i[1].length,r=i.index+i[0].length,(this.__index__<0||o<this.__index__||o===this.__index__&&r>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=o,this.__last_index__=r))),this.__index__>=0};se.prototype.pretest=function(t){return this.re.pretest.test(t)};se.prototype.testSchemaAt=function(t,n,u){return this.__compiled__[n.toLowerCase()]?this.__compiled__[n.toLowerCase()].validate(t,u,this):0};se.prototype.match=function(t){const n=[];let u=0;this.__index__>=0&&this.__text_cache__===t&&(n.push(Sn(this,u)),u=this.__last_index__);let i=u?t.slice(u):t;for(;this.test(i);)n.push(Sn(this,u)),i=i.slice(this.__last_index__),u+=this.__last_index__;return n.length?n:null};se.prototype.matchAtStart=function(t){if(this.__text_cache__=t,this.__index__=-1,!t.length)return null;const n=this.re.schema_at_start.exec(t);if(!n)return null;const u=this.testSchemaAt(t,n[2],n[0].length);return u?(this.__schema__=n[2],this.__index__=n.index+n[1].length,this.__last_index__=n.index+n[0].length+u,Sn(this,0)):null};se.prototype.tlds=function(t,n){return t=Array.isArray(t)?t:[t],n?(this.__tlds__=this.__tlds__.concat(t).sort().filter(function(u,i,a){return u!==a[i-1]}).reverse(),Jt(this),this):(this.__tlds__=t.slice(),this.__tlds_replaced__=!0,Jt(this),this)};se.prototype.normalize=function(t){t.schema||(t.url="http://"+t.url),t.schema==="mailto:"&&!/^mailto:/i.test(t.url)&&(t.url="mailto:"+t.url)};se.prototype.onCompile=function(){};const pt=2147483647,Fe=36,jn=1,Pt=26,yo=38,xo=700,Zu=72,Yu=128,Ju="-",_o=/^xn--/,wo=/[^\0-\x7F]/,ko=/[\x2E\u3002\uFF0E\uFF61]/g,vo={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},vn=Fe-jn,Ie=Math.floor,An=String.fromCharCode;function Ve(e){throw new RangeError(vo[e])}function Ao(e,t){const n=[];let u=e.length;for(;u--;)n[u]=t(e[u]);return n}function Xu(e,t){const n=e.split("@");let u="";n.length>1&&(u=n[0]+"@",e=n[1]),e=e.replace(ko,".");const i=e.split("."),a=Ao(i,t).join(".");return u+a}function Ku(e){const t=[];let n=0;const u=e.length;for(;n<u;){const i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<u){const a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}const Co=e=>String.fromCodePoint(...e),Eo=function(e){return e>=48&&e<58?26+(e-48):e>=65&&e<91?e-65:e>=97&&e<123?e-97:Fe},Iu=function(e,t){return e+22+75*(e<26)-((t!=0)<<5)},ei=function(e,t,n){let u=0;for(e=n?Ie(e/xo):e>>1,e+=Ie(e/t);e>vn*Pt>>1;u+=Fe)e=Ie(e/vn);return Ie(u+(vn+1)*e/(e+yo))},ti=function(e){const t=[],n=e.length;let u=0,i=Yu,a=Zu,o=e.lastIndexOf(Ju);o<0&&(o=0);for(let r=0;r<o;++r)e.charCodeAt(r)>=128&&Ve("not-basic"),t.push(e.charCodeAt(r));for(let r=o>0?o+1:0;r<n;){const c=u;for(let l=1,h=Fe;;h+=Fe){r>=n&&Ve("invalid-input");const m=Eo(e.charCodeAt(r++));m>=Fe&&Ve("invalid-input"),m>Ie((pt-u)/l)&&Ve("overflow"),u+=m*l;const p=h<=a?jn:h>=a+Pt?Pt:h-a;if(m<p)break;const f=Fe-p;l>Ie(pt/f)&&Ve("overflow"),l*=f}const s=t.length+1;a=ei(u-c,s,c==0),Ie(u/s)>pt-i&&Ve("overflow"),i+=Ie(u/s),u%=s,t.splice(u++,0,i)}return String.fromCodePoint(...t)},ni=function(e){const t=[];e=Ku(e);const n=e.length;let u=Yu,i=0,a=Zu;for(const c of e)c<128&&t.push(An(c));const o=t.length;let r=o;for(o&&t.push(Ju);r<n;){let c=pt;for(const l of e)l>=u&&l<c&&(c=l);const s=r+1;c-u>Ie((pt-i)/s)&&Ve("overflow"),i+=(c-u)*s,u=c;for(const l of e)if(l<u&&++i>pt&&Ve("overflow"),l===u){let h=i;for(let m=Fe;;m+=Fe){const p=m<=a?jn:m>=a+Pt?Pt:m-a;if(h<p)break;const f=h-p,y=Fe-p;t.push(An(Iu(p+f%y,0))),h=Ie(f/y)}t.push(An(Iu(h,0))),a=ei(i,s,r===o),i=0,++r}++i,++u}return t.join("")},Do=function(e){return Xu(e,function(t){return _o.test(t)?ti(t.slice(4).toLowerCase()):t})},So=function(e){return Xu(e,function(t){return wo.test(t)?"xn--"+ni(t):t})},ui={version:"2.3.1",ucs2:{decode:Ku,encode:Co},decode:ti,encode:ni,toASCII:So,toUnicode:Do},To={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},Fo={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},Io={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}},Po={default:To,zero:Fo,commonmark:Io},Lo=/^(vbscript|javascript|file|data):/,Ro=/^data:image\/(gif|png|jpeg|webp);/;function Mo(e){const t=e.trim().toLowerCase();return Lo.test(t)?Ro.test(t):!0}const ii=["http:","https:","mailto:"];function jo(e){const t=Fn(e,!0);if(t.hostname&&(!t.protocol||ii.indexOf(t.protocol)>=0))try{t.hostname=ui.toASCII(t.hostname)}catch{}return Lt(Tn(t))}function Oo(e){const t=Fn(e,!0);if(t.hostname&&(!t.protocol||ii.indexOf(t.protocol)>=0))try{t.hostname=ui.toUnicode(t.hostname)}catch{}return mt(Tn(t),mt.defaultChars+"%")}function me(e,t){if(!(this instanceof me))return new me(e,t);t||Pn(e)||(t=e||{},e="default"),this.inline=new Mt,this.block=new en,this.core=new Rn,this.renderer=new gt,this.linkify=new se,this.validateLink=Mo,this.normalizeLink=jo,this.normalizeLinkText=Oo,this.utils=za,this.helpers=Xt({},$a),this.options={},this.configure(e),t&&this.set(t)}me.prototype.set=function(e){return Xt(this.options,e),this};me.prototype.configure=function(e){const t=this;if(Pn(e)){const n=e;if(e=Po[n],!e)throw new Error('Wrong `markdown-it` preset "'+n+'", check name')}if(!e)throw new Error("Wrong `markdown-it` preset, can't be empty");return e.options&&t.set(e.options),e.components&&Object.keys(e.components).forEach(function(n){e.components[n].rules&&t[n].ruler.enableOnly(e.components[n].rules),e.components[n].rules2&&t[n].ruler2.enableOnly(e.components[n].rules2)}),this};me.prototype.enable=function(e,t){let n=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(i){n=n.concat(this[i].ruler.enable(e,!0))},this),n=n.concat(this.inline.ruler2.enable(e,!0));const u=e.filter(function(i){return n.indexOf(i)<0});if(u.length&&!t)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+u);return this};me.prototype.disable=function(e,t){let n=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(i){n=n.concat(this[i].ruler.disable(e,!0))},this),n=n.concat(this.inline.ruler2.disable(e,!0));const u=e.filter(function(i){return n.indexOf(i)<0});if(u.length&&!t)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+u);return this};me.prototype.use=function(e){const t=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,t),this};me.prototype.parse=function(e,t){if(typeof e!="string")throw new Error("Input data should be a String");const n=new this.core.State(e,this,t);return this.core.process(n),n.tokens};me.prototype.render=function(e,t){return t=t||{},this.renderer.render(this.parse(e,t),this.options,t)};me.prototype.parseInline=function(e,t){const n=new this.core.State(e,this,t);return n.inlineMode=!0,this.core.process(n),n.tokens};me.prototype.renderInline=function(e,t){return t=t||{},this.renderer.render(this.parseInline(e,t),this.options,t)};var zo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function No(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Cn={exports:{}};/*! @license DOMPurify 3.1.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.7/LICENSE */var Pu;function Lu(){return Pu||(Pu=1,function(e,t){(function(n,u){e.exports=u()})(zo,function(){const{entries:n,setPrototypeOf:u,isFrozen:i,getPrototypeOf:a,getOwnPropertyDescriptor:o}=Object;let{freeze:r,seal:c,create:s}=Object,{apply:l,construct:h}=typeof Reflect<"u"&&Reflect;r||(r=function(v){return v}),c||(c=function(v){return v}),l||(l=function(v,j,R){return v.apply(j,R)}),h||(h=function(v,j){return new v(...j)});const m=q(Array.prototype.forEach),p=q(Array.prototype.pop),f=q(Array.prototype.push),y=q(String.prototype.toLowerCase),I=q(String.prototype.toString),M=q(String.prototype.match),A=q(String.prototype.replace),E=q(String.prototype.indexOf),x=q(String.prototype.trim),w=q(Object.prototype.hasOwnProperty),D=q(RegExp.prototype.test),B=re(TypeError);function q(_){return function(v){for(var j=arguments.length,R=new Array(j>1?j-1:0),K=1;K<j;K++)R[K-1]=arguments[K];return l(_,v,R)}}function re(_){return function(){for(var v=arguments.length,j=new Array(v),R=0;R<v;R++)j[R]=arguments[R];return h(_,j)}}function P(_,v){let j=arguments.length>2&&arguments[2]!==void 0?arguments[2]:y;u&&u(_,null);let R=v.length;for(;R--;){let K=v[R];if(typeof K=="string"){const je=j(K);je!==K&&(i(v)||(v[R]=je),K=je)}_[K]=!0}return _}function ce(_){for(let v=0;v<_.length;v++)w(_,v)||(_[v]=null);return _}function le(_){const v=s(null);for(const[j,R]of n(_))w(_,j)&&(Array.isArray(R)?v[j]=ce(R):R&&typeof R=="object"&&R.constructor===Object?v[j]=le(R):v[j]=R);return v}function xe(_,v){for(;_!==null;){const R=o(_,v);if(R){if(R.get)return q(R.get);if(typeof R.value=="function")return q(R.value)}_=a(_)}function j(){return null}return j}const oe=r(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),ue=r(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),de=r(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),jt=r(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Ke=r(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Be=r(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),yt=r(["#text"]),nt=r(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Ce=r(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),xt=r(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),$e=r(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Ue=c(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Ot=c(/<%[\w\W]*|[\w\W]*%>/gm),_t=c(/\${[\w\W]*}/gm),We=c(/^data-[\-\w.\u00B7-\uFFFF]/),zt=c(/^aria-[\-\w]+$/),ut=c(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),He=c(/^(?:\w+script|data):/i),Nt=c(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),it=c(/^html$/i),Ge=c(/^[a-z][.\w]*(-[.\w]+)+$/i);var wt=Object.freeze({__proto__:null,MUSTACHE_EXPR:Ue,ERB_EXPR:Ot,TMPLIT_EXPR:_t,DATA_ATTR:We,ARIA_ATTR:zt,IS_ALLOWED_URI:ut,IS_SCRIPT_OR_DATA:He,ATTR_WHITESPACE:Nt,DOCTYPE_NAME:it,CUSTOM_ELEMENT:Ge});const Re={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},Me=function(){return typeof window>"u"?null:window},et=function(v,j){if(typeof v!="object"||typeof v.createPolicy!="function")return null;let R=null;const K="data-tt-policy-suffix";j&&j.hasAttribute(K)&&(R=j.getAttribute(K));const je="dompurify"+(R?"#"+R:"");try{return v.createPolicy(je,{createHTML(at){return at},createScriptURL(at){return at}})}catch{return console.warn("TrustedTypes policy "+je+" could not be created."),null}};function X(){let _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Me();const v=C=>X(C);if(v.version="3.1.7",v.removed=[],!_||!_.document||_.document.nodeType!==Re.document)return v.isSupported=!1,v;let{document:j}=_;const R=j,K=R.currentScript,{DocumentFragment:je,HTMLTemplateElement:at,Node:nn,Element:On,NodeFilter:kt,NamedNodeMap:ai=_.NamedNodeMap||_.MozNamedAttrMap,HTMLFormElement:ri,DOMParser:oi,trustedTypes:qt}=_,vt=On.prototype,si=xe(vt,"cloneNode"),ci=xe(vt,"remove"),li=xe(vt,"nextSibling"),di=xe(vt,"childNodes"),Bt=xe(vt,"parentNode");if(typeof at=="function"){const C=j.createElement("template");C.content&&C.content.ownerDocument&&(j=C.content.ownerDocument)}let te,At="";const{implementation:un,createNodeIterator:fi,createDocumentFragment:hi,getElementsByTagName:pi}=j,{importNode:mi}=R;let De={};v.isSupported=typeof n=="function"&&typeof Bt=="function"&&un&&un.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:an,ERB_EXPR:rn,TMPLIT_EXPR:on,DATA_ATTR:bi,ARIA_ATTR:gi,IS_SCRIPT_OR_DATA:yi,ATTR_WHITESPACE:zn,CUSTOM_ELEMENT:xi}=wt;let{IS_ALLOWED_URI:Nn}=wt,H=null;const qn=P({},[...oe,...ue,...de,...Ke,...yt]);let G=null;const Bn=P({},[...nt,...Ce,...xt,...$e]);let W=Object.seal(s(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Ct=null,sn=null,$n=!0,cn=!0,Un=!1,Wn=!0,rt=!1,ln=!0,tt=!1,dn=!1,fn=!1,ot=!1,$t=!1,Ut=!1,Hn=!0,Gn=!1;const _i="user-content-";let hn=!0,Et=!1,st={},ct=null;const Vn=P({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Qn=null;const Zn=P({},["audio","video","img","source","image","track"]);let pn=null;const Yn=P({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Wt="http://www.w3.org/1998/Math/MathML",Ht="http://www.w3.org/2000/svg",Oe="http://www.w3.org/1999/xhtml";let lt=Oe,mn=!1,bn=null;const wi=P({},[Wt,Ht,Oe],I);let Dt=null;const ki=["application/xhtml+xml","text/html"],vi="text/html";let V=null,dt=null;const Ai=j.createElement("form"),Jn=function(d){return d instanceof RegExp||d instanceof Function},gn=function(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(dt&&dt===d)){if((!d||typeof d!="object")&&(d={}),d=le(d),Dt=ki.indexOf(d.PARSER_MEDIA_TYPE)===-1?vi:d.PARSER_MEDIA_TYPE,V=Dt==="application/xhtml+xml"?I:y,H=w(d,"ALLOWED_TAGS")?P({},d.ALLOWED_TAGS,V):qn,G=w(d,"ALLOWED_ATTR")?P({},d.ALLOWED_ATTR,V):Bn,bn=w(d,"ALLOWED_NAMESPACES")?P({},d.ALLOWED_NAMESPACES,I):wi,pn=w(d,"ADD_URI_SAFE_ATTR")?P(le(Yn),d.ADD_URI_SAFE_ATTR,V):Yn,Qn=w(d,"ADD_DATA_URI_TAGS")?P(le(Zn),d.ADD_DATA_URI_TAGS,V):Zn,ct=w(d,"FORBID_CONTENTS")?P({},d.FORBID_CONTENTS,V):Vn,Ct=w(d,"FORBID_TAGS")?P({},d.FORBID_TAGS,V):{},sn=w(d,"FORBID_ATTR")?P({},d.FORBID_ATTR,V):{},st=w(d,"USE_PROFILES")?d.USE_PROFILES:!1,$n=d.ALLOW_ARIA_ATTR!==!1,cn=d.ALLOW_DATA_ATTR!==!1,Un=d.ALLOW_UNKNOWN_PROTOCOLS||!1,Wn=d.ALLOW_SELF_CLOSE_IN_ATTR!==!1,rt=d.SAFE_FOR_TEMPLATES||!1,ln=d.SAFE_FOR_XML!==!1,tt=d.WHOLE_DOCUMENT||!1,ot=d.RETURN_DOM||!1,$t=d.RETURN_DOM_FRAGMENT||!1,Ut=d.RETURN_TRUSTED_TYPE||!1,fn=d.FORCE_BODY||!1,Hn=d.SANITIZE_DOM!==!1,Gn=d.SANITIZE_NAMED_PROPS||!1,hn=d.KEEP_CONTENT!==!1,Et=d.IN_PLACE||!1,Nn=d.ALLOWED_URI_REGEXP||ut,lt=d.NAMESPACE||Oe,W=d.CUSTOM_ELEMENT_HANDLING||{},d.CUSTOM_ELEMENT_HANDLING&&Jn(d.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(W.tagNameCheck=d.CUSTOM_ELEMENT_HANDLING.tagNameCheck),d.CUSTOM_ELEMENT_HANDLING&&Jn(d.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(W.attributeNameCheck=d.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),d.CUSTOM_ELEMENT_HANDLING&&typeof d.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(W.allowCustomizedBuiltInElements=d.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),rt&&(cn=!1),$t&&(ot=!0),st&&(H=P({},yt),G=[],st.html===!0&&(P(H,oe),P(G,nt)),st.svg===!0&&(P(H,ue),P(G,Ce),P(G,$e)),st.svgFilters===!0&&(P(H,de),P(G,Ce),P(G,$e)),st.mathMl===!0&&(P(H,Ke),P(G,xt),P(G,$e))),d.ADD_TAGS&&(H===qn&&(H=le(H)),P(H,d.ADD_TAGS,V)),d.ADD_ATTR&&(G===Bn&&(G=le(G)),P(G,d.ADD_ATTR,V)),d.ADD_URI_SAFE_ATTR&&P(pn,d.ADD_URI_SAFE_ATTR,V),d.FORBID_CONTENTS&&(ct===Vn&&(ct=le(ct)),P(ct,d.FORBID_CONTENTS,V)),hn&&(H["#text"]=!0),tt&&P(H,["html","head","body"]),H.table&&(P(H,["tbody"]),delete Ct.tbody),d.TRUSTED_TYPES_POLICY){if(typeof d.TRUSTED_TYPES_POLICY.createHTML!="function")throw B('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof d.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw B('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');te=d.TRUSTED_TYPES_POLICY,At=te.createHTML("")}else te===void 0&&(te=et(qt,K)),te!==null&&typeof At=="string"&&(At=te.createHTML(""));r&&r(d),dt=d}},Xn=P({},["mi","mo","mn","ms","mtext"]),Kn=P({},["annotation-xml"]),Ci=P({},["title","style","font","a","script"]),eu=P({},[...ue,...de,...jt]),tu=P({},[...Ke,...Be]),Ei=function(d){let b=Bt(d);(!b||!b.tagName)&&(b={namespaceURI:lt,tagName:"template"});const k=y(d.tagName),$=y(b.tagName);return bn[d.namespaceURI]?d.namespaceURI===Ht?b.namespaceURI===Oe?k==="svg":b.namespaceURI===Wt?k==="svg"&&($==="annotation-xml"||Xn[$]):!!eu[k]:d.namespaceURI===Wt?b.namespaceURI===Oe?k==="math":b.namespaceURI===Ht?k==="math"&&Kn[$]:!!tu[k]:d.namespaceURI===Oe?b.namespaceURI===Ht&&!Kn[$]||b.namespaceURI===Wt&&!Xn[$]?!1:!tu[k]&&(Ci[k]||!eu[k]):!!(Dt==="application/xhtml+xml"&&bn[d.namespaceURI]):!1},Se=function(d){f(v.removed,{element:d});try{Bt(d).removeChild(d)}catch{ci(d)}},Gt=function(d,b){try{f(v.removed,{attribute:b.getAttributeNode(d),from:b})}catch{f(v.removed,{attribute:null,from:b})}if(b.removeAttribute(d),d==="is"&&!G[d])if(ot||$t)try{Se(b)}catch{}else try{b.setAttribute(d,"")}catch{}},nu=function(d){let b=null,k=null;if(fn)d="<remove></remove>"+d;else{const Y=M(d,/^[\r\n\t ]+/);k=Y&&Y[0]}Dt==="application/xhtml+xml"&&lt===Oe&&(d='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+d+"</body></html>");const $=te?te.createHTML(d):d;if(lt===Oe)try{b=new oi().parseFromString($,Dt)}catch{}if(!b||!b.documentElement){b=un.createDocument(lt,"template",null);try{b.documentElement.innerHTML=mn?At:$}catch{}}const ee=b.body||b.documentElement;return d&&k&&ee.insertBefore(j.createTextNode(k),ee.childNodes[0]||null),lt===Oe?pi.call(b,tt?"html":"body")[0]:tt?b.documentElement:ee},uu=function(d){return fi.call(d.ownerDocument||d,d,kt.SHOW_ELEMENT|kt.SHOW_COMMENT|kt.SHOW_TEXT|kt.SHOW_PROCESSING_INSTRUCTION|kt.SHOW_CDATA_SECTION,null)},iu=function(d){return d instanceof ri&&(typeof d.nodeName!="string"||typeof d.textContent!="string"||typeof d.removeChild!="function"||!(d.attributes instanceof ai)||typeof d.removeAttribute!="function"||typeof d.setAttribute!="function"||typeof d.namespaceURI!="string"||typeof d.insertBefore!="function"||typeof d.hasChildNodes!="function")},au=function(d){return typeof nn=="function"&&d instanceof nn},ze=function(d,b,k){De[d]&&m(De[d],$=>{$.call(v,b,k,dt)})},ru=function(d){let b=null;if(ze("beforeSanitizeElements",d,null),iu(d))return Se(d),!0;const k=V(d.nodeName);if(ze("uponSanitizeElement",d,{tagName:k,allowedTags:H}),d.hasChildNodes()&&!au(d.firstElementChild)&&D(/<[/\w]/g,d.innerHTML)&&D(/<[/\w]/g,d.textContent)||d.nodeType===Re.progressingInstruction||ln&&d.nodeType===Re.comment&&D(/<[/\w]/g,d.data))return Se(d),!0;if(!H[k]||Ct[k]){if(!Ct[k]&&su(k)&&(W.tagNameCheck instanceof RegExp&&D(W.tagNameCheck,k)||W.tagNameCheck instanceof Function&&W.tagNameCheck(k)))return!1;if(hn&&!ct[k]){const $=Bt(d)||d.parentNode,ee=di(d)||d.childNodes;if(ee&&$){const Y=ee.length;for(let ie=Y-1;ie>=0;--ie){const Te=si(ee[ie],!0);Te.__removalCount=(d.__removalCount||0)+1,$.insertBefore(Te,li(d))}}}return Se(d),!0}return d instanceof On&&!Ei(d)||(k==="noscript"||k==="noembed"||k==="noframes")&&D(/<\/no(script|embed|frames)/i,d.innerHTML)?(Se(d),!0):(rt&&d.nodeType===Re.text&&(b=d.textContent,m([an,rn,on],$=>{b=A(b,$," ")}),d.textContent!==b&&(f(v.removed,{element:d.cloneNode()}),d.textContent=b)),ze("afterSanitizeElements",d,null),!1)},ou=function(d,b,k){if(Hn&&(b==="id"||b==="name")&&(k in j||k in Ai))return!1;if(!(cn&&!sn[b]&&D(bi,b))){if(!($n&&D(gi,b))){if(!G[b]||sn[b]){if(!(su(d)&&(W.tagNameCheck instanceof RegExp&&D(W.tagNameCheck,d)||W.tagNameCheck instanceof Function&&W.tagNameCheck(d))&&(W.attributeNameCheck instanceof RegExp&&D(W.attributeNameCheck,b)||W.attributeNameCheck instanceof Function&&W.attributeNameCheck(b))||b==="is"&&W.allowCustomizedBuiltInElements&&(W.tagNameCheck instanceof RegExp&&D(W.tagNameCheck,k)||W.tagNameCheck instanceof Function&&W.tagNameCheck(k))))return!1}else if(!pn[b]){if(!D(Nn,A(k,zn,""))){if(!((b==="src"||b==="xlink:href"||b==="href")&&d!=="script"&&E(k,"data:")===0&&Qn[d])){if(!(Un&&!D(yi,A(k,zn,"")))){if(k)return!1}}}}}}return!0},su=function(d){return d!=="annotation-xml"&&M(d,xi)},cu=function(d){ze("beforeSanitizeAttributes",d,null);const{attributes:b}=d;if(!b)return;const k={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:G};let $=b.length;for(;$--;){const ee=b[$],{name:Y,namespaceURI:ie,value:Te}=ee,St=V(Y);let ne=Y==="value"?Te:x(Te);if(k.attrName=St,k.attrValue=ne,k.keepAttr=!0,k.forceKeepAttr=void 0,ze("uponSanitizeAttribute",d,k),ne=k.attrValue,k.forceKeepAttr||(Gt(Y,d),!k.keepAttr))continue;if(!Wn&&D(/\/>/i,ne)){Gt(Y,d);continue}rt&&m([an,rn,on],du=>{ne=A(ne,du," ")});const lu=V(d.nodeName);if(ou(lu,St,ne)){if(Gn&&(St==="id"||St==="name")&&(Gt(Y,d),ne=_i+ne),ln&&D(/((--!?|])>)|<\/(style|title)/i,ne)){Gt(Y,d);continue}if(te&&typeof qt=="object"&&typeof qt.getAttributeType=="function"&&!ie)switch(qt.getAttributeType(lu,St)){case"TrustedHTML":{ne=te.createHTML(ne);break}case"TrustedScriptURL":{ne=te.createScriptURL(ne);break}}try{ie?d.setAttributeNS(ie,Y,ne):d.setAttribute(Y,ne),iu(d)?Se(d):p(v.removed)}catch{}}}ze("afterSanitizeAttributes",d,null)},Di=function C(d){let b=null;const k=uu(d);for(ze("beforeSanitizeShadowDOM",d,null);b=k.nextNode();)ze("uponSanitizeShadowNode",b,null),!ru(b)&&(b.content instanceof je&&C(b.content),cu(b));ze("afterSanitizeShadowDOM",d,null)};return v.sanitize=function(C){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},b=null,k=null,$=null,ee=null;if(mn=!C,mn&&(C="<!-->"),typeof C!="string"&&!au(C))if(typeof C.toString=="function"){if(C=C.toString(),typeof C!="string")throw B("dirty is not a string, aborting")}else throw B("toString is not a function");if(!v.isSupported)return C;if(dn||gn(d),v.removed=[],typeof C=="string"&&(Et=!1),Et){if(C.nodeName){const Te=V(C.nodeName);if(!H[Te]||Ct[Te])throw B("root node is forbidden and cannot be sanitized in-place")}}else if(C instanceof nn)b=nu("<!---->"),k=b.ownerDocument.importNode(C,!0),k.nodeType===Re.element&&k.nodeName==="BODY"||k.nodeName==="HTML"?b=k:b.appendChild(k);else{if(!ot&&!rt&&!tt&&C.indexOf("<")===-1)return te&&Ut?te.createHTML(C):C;if(b=nu(C),!b)return ot?null:Ut?At:""}b&&fn&&Se(b.firstChild);const Y=uu(Et?C:b);for(;$=Y.nextNode();)ru($)||($.content instanceof je&&Di($.content),cu($));if(Et)return C;if(ot){if($t)for(ee=hi.call(b.ownerDocument);b.firstChild;)ee.appendChild(b.firstChild);else ee=b;return(G.shadowroot||G.shadowrootmode)&&(ee=mi.call(R,ee,!0)),ee}let ie=tt?b.outerHTML:b.innerHTML;return tt&&H["!doctype"]&&b.ownerDocument&&b.ownerDocument.doctype&&b.ownerDocument.doctype.name&&D(it,b.ownerDocument.doctype.name)&&(ie="<!DOCTYPE "+b.ownerDocument.doctype.name+`>
`+ie),rt&&m([an,rn,on],Te=>{ie=A(ie,Te," ")}),te&&Ut?te.createHTML(ie):ie},v.setConfig=function(){let C=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};gn(C),dn=!0},v.clearConfig=function(){dt=null,dn=!1},v.isValidAttribute=function(C,d,b){dt||gn({});const k=V(C),$=V(d);return ou(k,$,b)},v.addHook=function(C,d){typeof d=="function"&&(De[C]=De[C]||[],f(De[C],d))},v.removeHook=function(C){if(De[C])return p(De[C])},v.removeHooks=function(C){De[C]&&(De[C]=[])},v.removeAllHooks=function(){De={}},v}var Ee=X();return Ee})}(Cn)),Cn.exports}var qo=window.DOMPurify||(window.DOMPurify=Lu().default||Lu());const Bo=No(qo);function $o(e){let t,n;return{c(){t=new Li(!1),n=fu(),this.h()},l(u){t=Ri(u,!1),n=fu(),this.h()},h(){t.a=n},m(u,i){t.m(e[0],u,i),F(u,n,i)},p:fe,i:fe,o:fe,d(u){u&&(g(n),t.d())}}}function Uo(e,t,n){let{content:u}=t;const a=Object.fromEntries(Object.entries(Object.assign({"/src/lib/assets/crochetMS/crochetMS_component_api_layer.svg":Zi,"/src/lib/assets/crochetMS/crochetMS_container_crochet_management_system.svg":Yi,"/src/lib/assets/crochetMS/crochetMS_system_context.svg":Ji,"/src/lib/assets/viridi_achievements.png":Mi})).map(([s,l])=>[s.replace("/src/lib/assets/",""),l])),o=new me({linkify:!0,typographer:!0});o.renderer.rules.image=(s,l,h,m,p)=>{const f=s[l],y=f.attrIndex("src");if(!f.attrs)return p.renderToken(s,l,h);const I=f.attrs[y][1];if(a[I])f.attrs[y][1]=a[I];else throw new Error(`Invalid image path for ${I}`);return p.renderToken(s,l,h)};const r=o.render(u),c=Bo.sanitize(r);return e.$$set=s=>{"content"in s&&n(1,u=s.content)},[c,u]}class Wo extends ge{constructor(t){super(),ye(this,t,Uo,$o,be,{content:1})}}const Ho=`# Overview of Crochet Management System

## Scope of the System

The system is designed for crochet enthusiasts to manage yarn inventory, track projects, store crochet patterns, and monitor associated costs. Users will be able to:

- Organize and search for yarns based on attributes (weight, fiber content, etc.).
- Track crochet projects, including costs based on yarn usage.
- Store digital crochet patterns, add annotations, and print them.
- Use financial calculators to compare yarn prices and calculate project costs.

### Out of scope

E-commerce integrations for yarn purchasing and mobile app development in the initial phase.

### Key Features

- **Yarn Management**: Add, edit, and categorize yarns by various attributes (e.g., weight, fiber, price).
- **Project Management**: Track progress and costs based on yarn usage.
- **Pattern Management**: Store and manage digital crochet patterns.
- **Financial Calculators**: Calculate yarn cost per 100 meter, and project total cost based on yarn usage.
- **Offline Support**: View and edit inventory, projects, and patterns while offline. Data sync when back online.

## Assumptions

- **Primary Users**: Crochet enthusiasts.
- **User Input**: Users manually input yarn, project, pattern, and cost details.
- **Access**: Primarily via desktop browsers.
- **Offline Functionality**: Basic functionalities will work offline, with data syncing upon reconnection.

## Constraints

- **Technology Agnostic**: No preference for specific technologies initially.
- **Device Usage**: Primarily desktop; mobile not prioritized.
- **Offline Support**: Basic offline functionality required, with auto-sync upon reconnection.
- **Performance**: The system should perform well for small-scale users but allow for growth. No immediate need for large-scale optimizations.
- **Data Security**: Users will store personal project data. Sensitive data like payment info is not included, but basic encryption and security best practices must be followed.
- **Financial Compliance**: There's no need to comply with financial regulations since the system is for personal use.
- **Scalability**: The architecture should accommodate easy scaling for future growth (e.g., mobile apps, e-commerce integration).
- **Usability**: The system should be intuitive for non-technical users with a focus on easy data entry and manipulation.

# System Requirements

## Functional Requirements

### Yarn Management

- **Must Have**
  - Users can add, edit, and delete yarns with attributes (weight, fiber, price in a chosen currency, etc.).
  - Yarns are categorized by attributes (weight, fiber content, price, etc.).
  - Users can search and filter yarns by attributes.

### Project Management

- **Must Have**
  - Users can create, edit, and delete crochet projects.
  - Project costs are calculated automatically based on yarn usage and associated prices.
- **Could Have**
  - Users can track progress of each project through predefined stages (e.g., "In Progress," "Completed").

### Pattern Management

- **Must Have**
  - Users can upload and organize crochet patterns.
  - Patterns can be stored as text, image, and other common formats (e.g., PDF, PNG).
- **Could Have**
  - Users can annotate patterns and print them.

### Financial Calculators

- **Must Have**
  - Users can compare the total cost of different yarns for a project based on price and amount.
- **Should Have**
  - A calculator should help users determine price per 100 meters based on skein length and price.
- **Could Have**
  - Users can export financial calculations as a PDF or CSV file.

### Offline Support

- **Must Have**
  - Basic offline functionality should allow viewing and editing of yarn, project, and pattern data.
  - Offline changes automatically sync when user reconnects.
- **Should Have**
  - Basic search and filtering should work offline.

### Data Syncing

- **Must Have**
  - When online, the system automatically syncs any changes made offline.
  - Users can resolve conflicts through a side-by-side comparison of local changes and server data.

## Non-Functional Requirements

### Usability

The system should have an intuitive, user-friendly interface with a focus on simplicity for data entry and data manipulation.

### Performance

- The system should efficiently handle large data sets (e.g., hundreds of yarns or projects) without significant performance loss.
- Sync operations should happen smoothly, with minimal delay when switching between online and offline modes.

### Availability

- The system should be available 99.9% of the time during online use, excluding maintenance windows.
- Core features should always be available offline.

### Security

- The system must use encryption for data transmission and stored user data.
- Authentication is required for accessing personal inventories and projects.

### Scalability

- The system architecture must allow easy scalability in the future (e.g., more users, e-commerce integrations, mobile app).

### Data Storage and Backup

- User data should be backed up regularly to prevent loss.
- Offline data should be stored locally and must be recoverable in case of issues during syncing.

# Use Cases

## Use Case 1: Manage Yarn Inventory

- **Actors**: User
- **Pre-conditions**:
    - The user is logged into the system.
    - The user has yarn inventory available or is adding new yarns.
- **Main Flow**:
    1. The user accesses the yarn inventory page.
    2. The user can add a new yarn by inputting details such as name, weight, fiber content, and price.
    3. The user can edit or delete existing yarns.
    4. The user can search or filter the inventory by yarn attributes (e.g., fiber content, weight).
- **Post-conditions**:
    - Updated yarn inventory reflects changes made by the user.

## Use Case 2: Manage Crochet Projects

- **Actors**: User
- **Pre-conditions**:
    - The user is logged into the system.
    - The user has yarns available in their inventory.
- **Main Flow**:
    1. The user navigates to the crochet projects section.
    2. The user creates a new project by entering a project name and selecting the yarn(s) to be used.
    3. The system automatically calculates the project cost based on the yarn selected and its associated price.
    4. The user can update the project progress by entering a percentage or selecting a predefined stage (e.g., “In Progress”).
    5. The user can edit or delete the project at any time.
- **Post-conditions**: Project data is saved, and yarn usage costs are automatically updated.

## Use Case 3: Upload and Organize Crochet Patterns

- **Actors**: User
- **Pre-conditions**:
    - The user is logged into the system.
- **Main Flow**:
    1. The user navigates to the pattern storage section.
    2. The user uploads a pattern file (PDF, JPEG, PNG, etc.).
    3. The user can add notes or annotations to the pattern.
    4. The user can organize patterns into folders or categories.
    5. The user can print patterns, with the option to include or exclude annotations.
- **Post-conditions**: Pattern is uploaded and stored with optional annotations.

## Use Case 4: Financial Calculators for Yarn and Project Costs

- **Actors**: User
- **Pre-conditions**:
    - The user is logged into the system.
    - The user has yarns in their inventory and projects defined.
- **Main Flow**:
    1. The user accesses the financial calculator from a project page.
    2. The user selects yarns and enters the required yarn quantity for the project.
    3. The system calculates and displays the total project cost.
    4. The user can calculate the price per 100 meters of yarn by entering the skein length and price.
    5. The user can save or export the calculation results as a PDF or CSV file.
- **Post-conditions**: Financial data is calculated, with an option to save/export.

## Use Case 5: Offline Mode

- **Actors**: User
- **Pre-conditions**:
    - The user is logged into the system and working in offline mode with previously synced data available.
- **Main Flow**:
    1. The user adds, edits, or deletes yarns, projects, or patterns while offline.
    2. The system saves these changes locally.
    3. The system alerts the user that full functionality (e.g., search and filter) may not be available offline.
- **Post-conditions**: Offline changes are saved locally and ready for syncing when connectivity is restored.

## Use Case 6: Sync Data after Reconnecting Online

- **Actors**: User
- **Pre-conditions**:
    - The user has made changes while in offline mode.
    - The user has reconnected to the internet.
- **Main Flow**:
    1. The system detects the restored connection and automatically begins syncing offline changes to the server.
    2. If sync conflicts are detected, the system notifies the user and presents a conflict resolution dialog.
    3. The user selects whether to keep their offline changes or revert to server data.
    4. The system completes the sync and provides a summary of synced changes.
- **Post-conditions**: All offline changes are synced with the server, and any conflicts are resolved.

# Scalability Considerations

The system is designed to support future growth while maintaining high performance for both read-heavy and write-heavy operations. Initially, the architecture will handle a small to moderate number of users, but it must scale effectively as the user base and data volume grow. Below are the strategies for scaling various system components using AWS infrastructure to handle the increasing read and write loads.

## Horizontal and Vertical Scaling

- **Vertical Scaling**: In the initial stages, the system will use Amazon EC2 instances for the web application and API layers. To handle early load increases, vertical scaling (adding CPU and memory to the instances) will be implemented. This approach works well for early growth and simplifies setup.
- **Horizontal Scaling**: As the user base grows, horizontal scaling will be achieved through AWS Auto Scaling. This will automatically add or remove EC2 instances based on CPU, memory, or traffic metrics. Horizontal scaling will ensure that the system can distribute both read and write operations efficiently across multiple instances.

## Database Scalability

The system's database (PostgreSQL) will need to support both read-heavy and write-heavy workloads, especially as users frequently update project details and retrieve large datasets like yarn or pattern information.

- **Initial Setup**: Amazon RDS for PostgreSQL will be used as the database backend. In the early stages, the database will run on a single node with optimizations for both reads and writes, including proper indexing on searchable fields (yarn attributes, project status, etc.) and query optimization for cost-related calculations.
- **Future Scalability**:
    - **Read Replicas**: To handle increasing read-heavy operations (e.g., users frequently searching and filtering yarns or viewing project details), read replicas will be deployed. RDS Read Replicas will offload read operations from the primary database, improving performance for users fetching data.
    - **Write-Optimized Instances**: For write-heavy workloads (e.g., adding new yarns, updating projects, and syncing offline changes), the database will be optimized for faster write operations by using scalable storage options that support high I/O throughput. The system will prioritize configurations that allow for rapid data writes, such as increasing instance sizes, using storage types optimized for frequent read/write operations, and adjusting I/O capacity to meet growing demands.
    - **Sharding**: If the database reaches a point where vertical scaling is insufficient, sharding will be introduced. Data can be partitioned, for example, by user ID or project category to distribute both read and write loads across multiple database nodes.
    - **Caching**: For frequently accessed, read-heavy data like yarn attributes and pattern files, a distributed cache using Amazon ElastiCache (Redis) will be introduced. This will store commonly requested data in memory to reduce database load and improve response times.

## Web Application Scalability

The Web Application serves as the user interface, allowing users to manage yarn inventory, projects, and patterns. As the number of users increases, the Web Application must be able to handle more concurrent connections and traffic, ensuring responsiveness and availability.

- **Initial Setup**:
    - **Horizontal Scaling**: The Web Application will be deployed on AWS EC2 instances behind an Elastic Load Balancer (ELB). As the user base grows, additional EC2 instances can be automatically added or removed based on traffic patterns using AWS Auto Scaling. This ensures that the application can handle increased traffic without sacrificing performance.
- **Future Scalability**:
    - **CDN for Static Assets**: Static assets (e.g., HTML, CSS, JavaScript) will be distributed using a Content Delivery Network (CDN) like AWS CloudFront. This ensures faster delivery of assets by caching them closer to users, reducing latency and improving load times, especially for geographically dispersed users.
    - **Serverless Options**: For further scaling and reducing maintenance overhead, parts of the web application could be migrated to serverless platforms like AWS Amplify or AWS Lambda. This would allow the system to scale automatically without needing to manage underlying server infrastructure, particularly for handling spikes in user activity.

## API Layer Scalability

The API layer, built with Node.js and Express, must handle both read-heavy and write-heavy traffic as users interact with the system, especially when fetching patterns, updating projects, and performing financial calculations.

- **Initial Setup**: The API will run on Amazon EC2 instances, and Elastic Load Balancing (ELB) will be used to distribute incoming API requests across multiple instances, ensuring that both read and write operations are handled efficiently.
- **Future Scalability**:
    - **Load Balancing for Read/Write Separation**: In the future, separate load balancers and EC2 instance groups can be used to optimize for read-heavy and write-heavy traffic. API requests for fetching yarns and patterns (read-heavy) can be routed to instances optimized for reads, while updates to projects and patterns (write-heavy) can be directed to instances optimized for writes.
    - **Microservices for Scalability**: As the system evolves, the monolithic API can be refactored into microservices using AWS Lambda for serverless execution or containerized with Amazon ECS. Each service (e.g., yarn management, project management) can be scaled independently based on specific workload patterns (e.g., project management might be more write-heavy, while pattern viewing is more read-heavy).

## File Storage Scalability

The system stores unstructured data, like crochet pattern files, in AWS S3, which is well-suited for scaling file storage as user uploads grow. S3 can easily handle both read-heavy and write-heavy operations. With its virtually unlimited storage capacity, S3 can scale seamlessly with the system's growth.

## Monitoring and Auto-scaling

- **Monitoring**: Monitoring will be performed using Amazon CloudWatch, which will track key metrics (e.g., database read/write performance, API request times, cache hit/miss rates). Alerts will be set up to notify the team if performance bottlenecks arise, allowing for proactive scaling or adjustments.
- **Auto-scaling**: The system will use AWS Auto Scaling to dynamically adjust the number of EC2 instances based on real-time metrics such as CPU utilization, memory usage, and traffic patterns. This allows the system to scale automatically during periods of high read or write traffic, maintaining performance and availability.

# Performance and Optimizations

The system is designed to maintain high performance as it scales, ensuring efficient data retrieval, smooth user interactions, and fast syncing of data. Below are the key performance strategies and optimization.

## Database Optimization

### Indexing

Indexing will be applied to frequently queried fields such as yarn attributes (e.g., weight, fiber content) and project statuses. By creating indexes on these fields, the system can quickly locate relevant data without scanning the entire table, significantly speeding up search and filtering operations, especially as the dataset grows. Indexing is particularly crucial for ensuring that queries return results efficiently, even with large inventories or projects.

In addition to speeding up common queries, indexes will be carefully managed to balance read and write performance. While indexing enhances read operations, it can slightly slow down write operations (e.g., adding new yarn entries), so only the most frequently queried fields will be indexed to maintain overall performance.

### Query Optimization

Complex queries, such as calculating total yarn costs for projects, will be optimized to avoid performance bottlenecks like full table scans. Techniques like query caching will be implemented to store the results of frequently executed queries, reducing the need to recompute them.

## Caching for Faster Data Retrieval

### Server-Side Data Caching

Server-side caching is used to store frequently accessed data, such as yarn inventory and project details, in memory to improve retrieval speeds and reduce the load on the database. This is especially beneficial for read-heavy operations like searching yarns or viewing projects, as it significantly reduces latency and improves overall system performance.

### Client-Side Caching

Client-side caching is handled by service workers, which cache static resources such as HTML, CSS, and JavaScript in the user's browser. This enables faster page loads, as these assets are retrieved from the local cache rather than re-fetched from the server on every visit. Additionally, this supports offline functionality, allowing users to interact with cached data and static assets even when they are not connected to the internet.

## Efficient Data Syncing

To optimize the synchronization process when users reconnect after working offline, the system employs incremental syncing and batching sync operations, which work in tandem to reduce sync time and server load.

Incremental syncing identifies changes made offline and syncs only those differences with the server, minimizing data transfer and speeding up the sync process.

Batching then groups these changes into a smaller number of API requests, lowering latency and reducing the number of calls made to the server. For example, related changes like yarn updates or project modifications are combined into a single request, rather than sending each change separately.

Together, these techniques ensure that only necessary data is synced and that it is sent efficiently, providing a faster, smoother user experience.

# Security Considerations

Although the system doesn't handle sensitive financial or personal data, basic security measures are in place to protect user data and ensure the system operates reliably.

## Authentication and Authorization

- **JWT for Authentication**: The system will use JSON Web Tokens (JWT) to authenticate users. This ensures that only authorized users can access and modify their own data (e.g., yarn inventory, projects).

## Data Encryption

- **Encryption at Rest**: Although the data is not highly sensitive, all user data (e.g., yarn information, project details) stored in the database and file storage will be encrypted at rest using standard encryption methods. This ensures that even if unauthorized access to the storage occurs, the data remains protected.
- **Encryption in Transit**: All communication between the client and the server will be secured using TLS (Transport Layer Security), ensuring that data exchanged over the network is protected from eavesdropping or tampering.

## Input Validation

- **Server-Side Validation**: User input will be validated on both the client and server side to prevent common security vulnerabilities such as SQL Injection and Cross-Site Scripting (XSS).

## Basic Rate Limiting

Rate limiting sets a cap on the number of API requests a client (user, device, or IP) can make over a specific period (e.g., 100 requests per minute). If a client exceeds this limit, further requests are either blocked or delayed until the rate limit resets.

To prevent abuse, the system will implement basic rate limiting on API endpoints, ensuring that no single user can overwhelm the system with excessive requests.

# High-Level Architecture

The architecture of the Crochet Management System is described using the [C4 model](https://c4model.com/). This model provides a clear and structured way to visualize the system at multiple levels:

1. **System Context**: Shows how the user interacts with the Crochet Management System through the Web Application.
2. **Container**: Breaks down the system into containers, including the Web Application, API Layer, Database, and File Storage.
3. **Component**: Provides a detailed look at the components within the API Layer, such as the Yarn API, Pattern API, Project API, and Calculator API, and how they interact with the Database and File Storage.

This layered approach to the architecture ensures that each component has a clear responsibility, promoting modularity, scalability, and maintainability.

## C4 Model Level 1: System Context View

The User interacts with the Crochet Management System through a Web Application running in the browser to manage yarns, patterns, and projects.

![Component - API layer](crochetMS/crochetMS_system_context.svg)

## C4 Model Level 2: Container View

The Container View breaks down the system into its major components and describes how they communicate. In this system, we have the following containers:

![Component - API layer](crochetMS/crochetMS_container_crochet_management_system.svg)

### Web Application (Browser)

The client-side application through which the user interacts with the system. It provides the interface for users to manage yarns, patterns, and projects. The Web Application uses Local Storage to cache unsynced changes (e.g., new yarns or project updates) when the user is offline.

### API Layer

The API layer serves as the intermediary between the web application and the backend services. The Web Application sends requests to the API Layer, which handles business logic and interacts with the Database and File Storage for data storage and retrieval.

### Database (Relational Database)

A relational database that stores yarn, pattern, and project data in dedicated tables. It supports complex queries and operations via the API layer and is optimized for performance with indexing and query optimization techniques.

### File Storage (Cloud Storage)

Unstructured data such as pattern charts and project images are stored in cloud storage, providing scalability and reliable access for large files.

### Local Storage (Client-Side Storage)

Temporarily stores unsynced data while the user is offline. When the user reconnects, this data is synced with the backend to ensure consistency across all devices.

## C4 Model Level 3: Component View

### API Layer

The API layer handles all business logic and serves as the intermediary between the web application and the backend services. It is composed of multiple components that handle various aspects of the system:

- **Yarn API**: Handles CRUD operations for managing yarn data.
- **Pattern API**: Manages pattern data and interacts with cloud storage for storing and retrieving pattern charts.
- **Project API**: Manages project data, including progress tracking and project images stored in the cloud.
- **Calculator API**: Performs cost calculations based on yarn usage and project progress.

The API Layer communicates with both the database and file storage containers to retrieve or update data as necessary. This division of responsibilities ensures modularity and maintainability.

![Component - API layer](crochetMS/crochetMS_component_api_layer.svg)

### Database

Main tables:

- Yarn
- Pattern
- Project

# Technical Choices

## ADR #1: Choosing React as the Frontend Framework

### Title

Choosing React as the Frontend Framework for an Offline-First Web Application

### Status

Accepted

### Context

The system is designed for crochet enthusiasts to manage yarn inventory, track projects, store crochet patterns, and monitor associated costs. The application must support offline functionality, allowing users to view, modify, and sync their data when they regain an internet connection. It must also be user-friendly for non-technical users, handle a moderate amount of data without performance degradation, and be easy to extend and maintain over time. Additionally, we need a solution that supports reusable components.

### Decision Drivers

The following key drivers influenced the decision:

- **Offline Support**: The frontend must support Progressive Web Application (PWA) capabilities, including service workers for caching and background sync, to ensure smooth offline functionality.
- **Component Reusability**: A component-based architecture is essential to simplify UI development and ensure scalability, allowing for the reuse of components like yarn cards, project forms, and pattern uploads.
- **Performance**: The system should handle a moderate number of yarns and projects (hundreds of entries) without noticeable performance degradation.
- **State Management**: Efficient state management is required to manage unsynced changes made while offline, ensuring smooth transitions between offline and online states.
- **Ecosystem**: The library should have a robust ecosystem, including tools for routing, form handling, state management, and offline support.
- **Team Expertise**: The development team has prior experience with React, reducing the learning curve and minimizing the risks of adopting a new technology.

### Alternative Options Considered

- **Vue.js**: Rejected due to its smaller ecosystem compared to React, particularly for advanced state management and offline-first capabilities. While Vue is simpler, it may not provide the same long-term flexibility as React for scaling the project.
- **Angular**: Rejected because of its complexity and heavier framework size, which is not necessary for a project of this size. Angular would introduce a steep learning curve and increase development time due to its strict architecture and advanced tooling.
- **Svelte**: Rejected due to its smaller and less mature ecosystem. While Svelte is simple and performant, it lacks the deep ecosystem support needed for a production-ready offline-first application, particularly in terms of PWA and state management features.

### Decision

We decided to use **React** as the frontend framework.

### Rationale

React was chosen because it directly satisfies the key decision drivers:

- **Offline Support**: React has excellent PWA support, which is critical for implementing offline capabilities. With React, we can easily integrate service workers to handle caching and background syncing, meeting the requirement for a seamless offline-first experience.
- **Component Reusability**: React's component-based architecture allows us to build modular, reusable components, such as yarn cards and project forms. This will streamline development and help us scale the system while maintaining a clean, modular codebase.
- **Performance**: React's virtual DOM enables efficient UI rendering, even with large datasets like hundreds of yarns or projects. This ensures that the system can handle the required data volume without noticeable performance degradation.
- **State Management**: While React alone does not include built-in state management, it integrates well with libraries like Redux, providing the flexibility to handle offline/online state transitions. This allows us to efficiently manage unsynced data and smooth transitions.
- **Ecosystem**: React's mature and extensive ecosystem provides the tools needed for routing, form handling, and state management. This robust ecosystem is essential for building a production-ready offline-first web application.
- **Team Expertise**: The team has significant experience with React, reducing the learning curve and development risks. This allows for faster implementation and reduces the need for additional training.

### Consequences

#### Positive

- **Faster Development**: Leveraging React's component-based architecture and the team's existing experience will allow for rapid development and deployment, reducing the overall project timeline.
- **Reduced Maintenance Overhead**: The reusability of React components will simplify future maintenance, allowing easy updates and modifications without affecting the entire system, leading to long-term sustainability.

#### Negative

- **Complexity in state management**: While React is flexible, managing state (especially offline/online transitions) may require additional libraries like Redux, which can add complexity to the codebase.
- **Bundle size concerns**: As React applications grow, bundle size can become an issue. We may need to optimize the build process to ensure that performance remains acceptable, especially for users with slow connections.

### Conclusion

- In the context of **building an offline-first web application**,
- facing **the need for component reusability, offline support, and a robust ecosystem**,
- we decided to use **React**,
- and neglected **Vue.js, Angular, and Svelte**,
- to achieve **faster development, easier maintenance, and a better user experience**,
- accepting **the trade-offs of potential complexity in state management and bundle size concerns**.

## ADR #2: Choosing Node.js with Express for the Backend (API Layer)

### Title

Choosing Node.js with Express for the Backend of the Offline-First Web Application

### Status

Accepted

### Context

The system is an offline-first web application designed for managing crochet projects, yarn inventory, and crochet patterns. Users will need to be able to work seamlessly while offline and have their data synchronized when they reconnect to the internet. The backend must provide a scalable API to handle requests for yarn, project, and pattern data, support file uploads (e.g., crochet pattern PDFs and images), and manage business logic, such as calculating project costs.

Additionally, the backend must integrate with cloud services (e.g., AWS S3 for file storage) and handle asynchronous tasks, such as syncing offline data when the user reconnects. Given the team's expertise in JavaScript, a solution that minimizes the learning curve and development time while offering high performance for handling I/O-bound operations is crucial. The ability to scale the system in the future is also important, as the application may grow in terms of user base and data volume.

### Decision Drivers

The following key drivers influenced our decision-making process for the backend:

- **Performance and Scalability**: The backend must handle multiple concurrent users efficiently and scale as the system grows. It must be capable of handling tasks like data synchronization, API requests for yarn and project data, and file uploads (patterns).
- **Developer Efficiency and Familiarity**: The development team has significant experience with JavaScript and Node.js. This reduces the time and complexity of development, minimizing risks associated with adopting unfamiliar technologies.
- **RESTful API Support**: The backend needs to support simple and efficient creation of RESTful APIs to handle CRUD operations for yarns, projects, patterns, and calculations.
- **Cloud Integration**: The system must integrate smoothly with cloud services like AWS S3 for file storage and PostgreSQL for structured data. This ensures scalability and the ability to offload certain tasks (like file management) to external services.
- **Maintainability**: The system should be easy to maintain, with a clean and modular structure. The backend should be flexible and adaptable, supporting future growth with minimal refactoring.
- **Authentication**: The backend must support lightweight, stateless user authentication, likely using JWT for securing user access to their inventory and projects.

### Alternative Options Considered

Those options were rejected:

- **Python with Flask**: Flask was considered because of its simplicity and flexibility for building small, RESTful APIs. However, it is synchronous by default, requiring additional configuration to handle concurrent requests efficiently, which would increase complexity. For this reason, Node.js with its non-blocking I/O architecture was preferred for better handling of multiple concurrent requests.
- **Python with Django**: While Django is a powerful full-stack framework with built-in features like an ORM and user management, it was rejected due to its added complexity and heavier architecture, which is unnecessary for this project. The project only requires a lightweight backend for RESTful APIs, making Express a better fit.
- **Ruby on Rails**: Rails was considered for its productivity features and built-in functionality, but it was rejected due to concerns about its performance for handling I/O-bound tasks and the team's unfamiliarity with Ruby. Using Rails would introduce a steep learning curve and increase development time.

### Decision

We decided to use Node.js with Express as the backend framework for building the RESTful API and handling the I/O-bound operations of the offline-first web application.

### Rationale

Node.js with Express was chosen because it meets the project's key requirements:

- **Performance and Scalability**: Node.js is well-suited for handling I/O-bound tasks, such as serving API requests and managing data synchronization, which are key needs for this system. Its event-driven, non-blocking architecture ensures that the backend can handle multiple concurrent requests efficiently.
- **Developer Efficiency and Familiarity**: The development team is already proficient in JavaScript and Node.js, reducing the risk of delays or errors in the development process. This familiarity allows the team to focus on building core features quickly and efficiently.
- **RESTful API Support**: Express is a lightweight and flexible framework that allows for fast and straightforward creation of RESTful APIs. This makes it ideal for managing CRUD operations for yarns, projects, and patterns.
- **Cloud Integration**: Node.js has strong support for integrating with cloud services like AWS S3 (for file storage) and PostgreSQL (for structured data), which aligns with our need for scalable, external storage and database solutions.
- **Maintainability**: Express's minimalist design provides flexibility and simplicity, ensuring that the backend is modular and easy to maintain. This supports future scalability and adaptability as the project grows.
- **Authentication**: Node.js works seamlessly with JWT for stateless authentication, providing secure access to user-specific data while keeping the authentication system lightweight.

### Consequences

#### Positive

- **Efficient I/O Handling**: Node.js's non-blocking, asynchronous nature ensures the backend can efficiently handle I/O-bound tasks such as data synchronization, database queries, and file uploads, which are core operations in this project.
- **Developer Productivity**: The team's familiarity with JavaScript and Node.js reduces onboarding time and allows for faster development, decreasing the overall development risk and ensuring that the team can focus on delivering functionality rather than learning new technologies.
- **Simple API Development**: Express simplifies the creation of RESTful APIs, making it easy to implement CRUD operations for yarns, projects, and patterns, while keeping the codebase maintainable and scalable.
- **Cloud Integration**: Node.js integrates seamlessly with AWS S3 for file storage and PostgreSQL for database management, ensuring that we can scale the storage and database requirements of the system as the user base grows.
- **Maintainability**: The minimalistic nature of Express allows for a modular backend design, which is easy to maintain and extend as the system grows. This also ensures that future requirements, such as new API endpoints or business logic, can be added with minimal refactoring.
- **Stateless Authentication**: Using JWT for authentication ensures lightweight, secure, and scalable access control for users, fitting well with the stateless nature of Node.js and enabling easy scaling.

#### Negative

- **Single-threaded Limitations**: While Node.js handles I/O-bound tasks well, it may struggle with CPU-intensive tasks due to its single-threaded nature. However, this is mitigated because the system's primary operations are I/O-bound (e.g., API requests, file handling), so performance bottlenecks are unlikely.
- **Middleware Complexity**: While Express is lightweight and flexible, it requires additional middleware to handle common backend tasks such as authentication (e.g., JWT), file uploads (e.g., Multer), and error handling. This can introduce complexity, but the wide availability of libraries in the Node.js ecosystem mitigates this challenge.

#### Subsequent ADRs

- A future ADR will be needed to choose the database schema and define the relationships between yarns, projects, and patterns.
- Another ADR may be required to choose a deployment strategy (e.g., containers, serverless) for the Node.js backend.

### Conclusion

- In the context of **building a performant and scalable backend for an offline-first web application**,
- facing **the need for efficient handling of I/O-bound operations and seamless integration with cloud services**,
- we decided to use **Node.js with Express**,
- and neglected **Python with Flask or Django**,
- to achieve **developer efficiency, scalable API support, and cloud service integration**,
- accepting **the trade-off of potential complexity in middleware and single-threaded performance limitations for CPU-bound tasks**.

## ADR #3: Choosing PostgreSQL as the Database

### Title

Choosing PostgreSQL as the Database for the Offline-First Web Application

### Status

Accepted

### Context

The system will manage data for yarn inventory, crochet projects, and patterns, all of which require structured data storage. Users will need to filter, search, and organize their data based on various attributes (e.g., yarn weight, fiber content, project status). The database must be able to handle structured relationships between these entities and support complex queries such as joins and filtering by multiple criteria. In addition, the system must be scalable to support future growth, with efficient querying and data integrity.

The database will be accessed via a RESTful API, and its performance must remain consistent as the user base and data volume grow. The database should also integrate seamlessly with cloud services for backup, recovery, and scalability.

### Decision Drivers

The following key drivers influenced the decision-making process for the database:

- **Relational Data Model**: The system needs a robust relational model to manage relationships between yarn, projects, and patterns, allowing for complex queries and data integrity through features like foreign keys and constraints.
- **Structured Query Support**: The database must support complex queries, such as filtering yarns by attributes and calculating project costs, while ensuring efficient performance even as the dataset grows.
- **Scalability**: The database should allow for easy scaling, both vertically (adding more resources to a single server) and horizontally (distributing data across multiple servers), as the application grows.
- **Full-Text Search**: Efficient full-text search capabilities are needed to enable users to search for patterns or yarns based on keywords or attributes.
- **Backup and Durability**: The database should offer reliable backup, recovery, and high durability to ensure user data is protected.
- **Team Familiarity**: The team has experience with relational databases like PostgreSQL, reducing the learning curve and ensuring that the team can implement the system efficiently.

### Alternative Options Considered

Those options were rejected:

- **SQLite**: Rejected due to its limitations in handling concurrent users and large datasets. SQLite is file-based and best suited for smaller, single-user applications. Since our system requires scalability and the ability to handle multiple users simultaneously, PostgreSQL's client-server architecture is a better fit.
- **NoSQL (e.g., MongoDB)**: Rejected because the project requires complex relationships between entities, which are best modeled using a relational database. NoSQL databases are more suitable for unstructured or semi-structured data and do not natively support the complex querying and relationship constraints that PostgreSQL provides.

### Decision

We decided to use PostgreSQL as the database for the offline-first web application. PostgreSQL's robust relational model, support for complex queries, scalability, and full-text search capabilities make it the best choice for the system's data management needs.

### Rationale

PostgreSQL was chosen because it satisfies the key requirements for managing structured data and supporting the application's long-term scalability:

- **Relational Data Model**: PostgreSQL's strong relational model, including support for foreign keys, constraints, and joins, ensures that we can effectively model the relationships between yarns, projects, and patterns. This will allow for consistent, structured data handling and integrity.
- **Structured Query Support**: PostgreSQL provides powerful query capabilities, allowing the system to handle complex queries, such as filtering yarns by multiple attributes and performing cost calculations for projects.
- **Scalability**: PostgreSQL is designed to scale both vertically and horizontally, which ensures that the database can handle increased user demand and data growth over time.
- **Full-Text Search**: PostgreSQL offers built-in full-text search capabilities, which will be useful for enabling users to search patterns and yarns efficiently.
- **Backup and Durability**: PostgreSQL provides robust backup and recovery options, ensuring that user data is secure and easily recoverable in case of failures.
- **Team Familiarity**: The development team has prior experience working with PostgreSQL, minimizing the learning curve and development risk while ensuring efficient implementation.

### Consequences

#### Positive

- **Efficient Structured Data Handling**: PostgreSQL's relational model and support for complex queries will enable efficient management of yarn, project, and pattern data, ensuring data integrity and high performance even with growing datasets.
- **Scalable Architecture**: PostgreSQL's ability to scale both vertically and horizontally ensures that the system can grow as the user base increases, without compromising performance.
- **Advanced Query Capabilities**: The system will benefit from PostgreSQL's powerful query features, including full-text search, which will allow users to perform complex filtering and searches on their data.
- **Durability and Reliability**: PostgreSQL provides high durability and reliability, including automatic backups and robust recovery options, ensuring that user data is always protected.

#### Negative

- **More Complex Setup Compared to SQLite**: PostgreSQL requires more setup and maintenance than SQLite, particularly in terms of server configuration and management. However, this is mitigated by its scalability and the team's familiarity with PostgreSQL.
- **Overhead for Smaller Projects**: PostgreSQL's full-featured architecture may introduce unnecessary overhead if the system remains small. However, the system is expected to grow over time, and PostgreSQL is better suited for handling long-term scalability needs.

### Conclusion

- In the context of **building a scalable, relational database for managing structured data**,
- facing **the need for complex queries, data integrity, and future scalability**,
- we decided to use **PostgreSQL**,
- and neglected **SQLite**,
- to achieve **efficient data handling, full-text search, and scalability**,
- accepting **the trade-off of increased setup complexity compared to simpler databases like SQLite**.

## ADR #4: Choosing AWS S3 for File Storage

### Title

Choosing AWS S3 for File Storage in the Offline-First Web Application

### Status

Accepted

### Context

The system allows users to upload and store crochet patterns, which can be in various formats such as PDFs or images. These patterns must be securely stored, easily retrievable, and scalable as the number of users and files grows. The storage solution must handle potentially large file sizes while ensuring that the files are backed up and available when needed.

Additionally, the file storage system should integrate with the backend API, allowing users to upload files and retrieve them as part of their project workflows. Security is also a key concern, with file access limited to authenticated users. The system should scale seamlessly with increasing data while remaining cost-effective.

### Decision Drivers

The following key drivers influenced the decision-making process for file storage:

- **Scalability**: The system needs to support increasing amounts of unstructured data as the user base grows. The file storage solution should scale efficiently, with no limitations on the number of files or total storage space.
- **Cost Efficiency**: The storage solution should be cost-effective, particularly for a growing system that may store thousands of files in the future. Pay-as-you-go pricing is preferred to avoid over-provisioning.
- **Backup and Durability**: The files must be backed up and available with a high degree of durability to prevent data loss.
- **Secure Access**: Users' pattern files should only be accessible to authenticated users, and file transfers must be encrypted. Temporary file access (e.g., via pre-signed URLs) should be supported.
- **Ease of Integration**: The storage system must integrate easily with the backend (Node.js with Express), allowing for smooth file uploads, retrieval, and management.
- **Performance**: The system should offer fast file retrieval and upload speeds, particularly for users with large pattern files.

### Alternative Options Considered

Those options were rejected:

- **Azure Blob Storage**: Rejected because, while it offers similar capabilities to AWS S3, the project does not currently use the Azure ecosystem, and the team has more experience with AWS. Switching to Azure would require additional learning and setup costs.
- **Google Cloud Storage**: Rejected for similar reasons as Azure Blob Storage. The team is already more familiar with AWS services, and adopting Google Cloud Storage would introduce additional overhead in terms of learning and configuration.

### Decision

We decided to use AWS S3 as the file storage solution for storing and managing unstructured data, such as crochet patterns (PDFs, images).

### Rationale

AWS S3 was chosen because it meets the system's core requirements for file storage:

- **Scalability**: AWS S3 is designed to scale automatically with no limits on the number of files or storage capacity, making it an ideal solution for a growing user base and increasing amounts of data.
- **Cost Efficiency**: S3 offers a pay-as-you-go pricing model, which is cost-effective for smaller projects while allowing for easy scaling as the system grows. This flexibility ensures that we don't over-provision or incur unnecessary costs.
- **Backup and Durability**: AWS S3 provides 99.999999999% (11 nines) durability by replicating data across multiple availability zones, ensuring that files are highly durable and recoverable in the event of hardware failure.
- **Secure Access**: S3 integrates with AWS Identity and Access Management (IAM) to control access to files. It also supports pre-signed URLs, which allow for temporary access to files, ensuring that only authenticated users can retrieve pattern files.
- **Ease of Integration**: AWS S3 integrates easily with Node.js via the AWS SDK, allowing us to handle file uploads, retrieval, and management with minimal effort. It also integrates with other AWS services we may adopt in the future.
- **Performance**: S3 provides fast, reliable access to files, with options like S3 Transfer Acceleration to further enhance performance for users uploading large files from remote locations.

### Consequences

#### Positive

- **Scalability without Maintenance**: AWS S3 scales automatically as more pattern files are uploaded, requiring no intervention or maintenance. This frees up the development team from needing to manage or adjust storage capacity as the system grows.
- **Pay-as-you-go Model**: The cost structure of AWS S3 ensures that we only pay for the storage we use, which is cost-efficient at the beginning and will remain flexible as the storage needs increase.
- **Built-in Redundancy and Backup**: AWS S3 ensures that data is replicated across multiple locations, providing durability and protection against data loss. This reduces the need for the team to implement their own backup solution.
- **Simple Integration with Backend**: The AWS SDK makes it easy to handle file uploads and retrievals through the existing Node.js backend, simplifying the development effort.

#### Negative

- **AWS-specific Configuration and IAM Management**: Configuring access control and security using AWS IAM roles and policies requires some additional setup. While these features are powerful, managing them can introduce complexity, especially for fine-tuning permissions.
- **Potential Cost Increases**: While the pay-as-you-go model is beneficial initially, costs could increase significantly as the number of users and the amount of stored files grows, especially if not carefully monitored.

### Conclusion

- In the context of **storing and managing large amounts of unstructured data for an offline-first web application**,
- facing **the need for scalable, durable, and cost-effective file storage**,
- we decided to use **AWS S3**,
- and neglected **Azure Blob Storage and Google Cloud Storage**,
- to achieve **automatic scalability, secure access control, and easy cloud integration**,
- accepting **the trade-off of potential vendor lock-in and additional AWS-specific configuration**.

## ADR #5: Choosing Workbox for Offline Support

### Title

Choosing Workbox for Offline Support

### Status

Accepted

### Context

The web application requires offline functionality so that users can manage yarn inventory, projects, and crochet patterns without an internet connection. Users need to view and edit their data while offline, and these changes should automatically sync with the server once the user reconnects.

The offline functionality must allow for:

- **Caching static assets** (HTML, CSS, JS) to enable the app to load when offline.
- **Storing data locally** so that users can access and modify yarn, project, and pattern data offline.
- **Data synchronization**: Any changes made while offline must sync automatically with the server once the user reconnects, ensuring consistency between offline and online states.

### Decision Drivers

The following key drivers influenced the decision-making process for offline support:

- **Seamless User Experience**: Users should be able to work offline without interruptions, with automatic syncing once they reconnect to the internet.
- **Efficient Caching and Data Storage**: The system needs to cache static assets and store dynamic data locally so users can access and modify it even when offline.
- **Automatic Data Syncing**: Offline changes must sync automatically with the server once the user reconnects, without manual intervention.

### Alternative Options Considered

This option was rejected:

- **Custom Service Worker Implementation**: Rejected because implementing a custom solution for caching, background sync, and offline storage requires more effort and maintenance. Workbox simplifies these tasks with minimal configuration.

### Decision

We decided to use Workbox to implement offline support.

### Rationale

Workbox was chosen because it directly addresses the key requirements for offline support, offering a unified solution for caching and background synchronization:

- **Seamless User Experience**: Workbox enables smooth offline functionality by caching static assets and API responses, ensuring users can load and interact with the application even without an internet connection. This aligns with the requirement for uninterrupted offline workflows.
- **Efficient Caching and Data Storage**: Workbox simplifies caching strategies, enabling efficient use of service workers to store static assets and API responses. It also works seamlessly with various offline data storage solutions, ensuring that structured data like yarns and projects can be stored and accessed while offline, meeting the need for robust local data availability.
- **Automatic Data Syncing**: Workbox simplifies the integration of the Background Sync API, which allows any changes made while offline to be synced with the server when the user reconnects. This reduces the need for manual syncing and ensures that the application remains consistent between offline and online states.

### Consequences

#### Positive

- **Reduced Manual Intervention**: By automating the caching of assets and data, as well as syncing changes when the user reconnects, the system reduces the need for manual interventions in both development and user actions.
- **Simplified Maintenance**: Workbox's encapsulation of service workers, caching, and background sync reduces the complexity of building and maintaining custom solutions, making the system easier to support and extend in the future.

#### Negative

- **Initial Complexity in Setup**: Setting up service workers, managing offline data storage, and integrating the Background Sync API requires careful configuration, especially for ensuring consistent offline-to-online transitions.

### Conclusion

- In the context of **providing offline support for a web application**,
- facing **the need for seamless user experience, efficient caching, and automatic data synchronization**,
- we decided to use **Workbox**,
- and neglected **custom service worker implementation**,
- to achieve **reduced manual intervention, and simplified maintenance**,
- accepting **the trade-offs of initial setup complexity**.

## ADR #6: Choosing Last Write Wins (LWW) for Conflict Resolution

### Title

Choosing Last Write Wins (LWW) for Conflict Resolution with Optional User-Assisted Resolution

### Status

Accepted

### Context

The application allows users to work offline and make changes to their data, such as yarn inventory or crochet projects. When the user reconnects to the internet, these offline changes need to be synced with the server. However, conflicts may arise if the user on another device has updated the same data while offline.

The system must automatically resolve such conflicts when syncing, but the solution should be simple to implement and maintain while ensuring consistency. However, in some cases, users may wish to have more control over how their data conflicts are resolved.

### Decision Drivers

The following key drivers influenced the decision-making process for conflict resolution:

- **Simplicity**: The conflict resolution strategy should be easy to implement and maintain without introducing unnecessary complexity.
- **Consistency**: The system must ensure that conflicting changes are resolved in a consistent and predictable manner.
- **Automated Resolution**: For most cases, conflicts should be resolved automatically by the system to avoid overwhelming users with manual conflict resolution tasks.
- **User Control**: In critical scenarios, users may prefer to have control over which version of their data is kept, especially for important project details.

### Alternative Options Considered

- **Manual Conflict Resolution**: This option would involve asking users to manually resolve conflicts by choosing between conflicting versions of data. This was rejected because it introduces unnecessary complexity for users and could slow down workflows. However, this approach could be selectively applied for critical data, offering more flexibility.
- **Versioning**: This strategy creates a version history for each change, allowing the system or the user to resolve conflicts by comparing different versions of the data. While this offers granular control and safety, it was rejected for this phase due to its complexity and the overhead it introduces in terms of storage and version management.
- **Merging Changes**: This option attempts to combine changes from different versions, requiring sophisticated logic to identify conflicts and merge data. While powerful, this was rejected due to the added complexity and potential for unexpected behavior in a system where conflicts are relatively rare and simple.

### Decision

We decided to implement Last Write Wins (LWW) as the primary conflict resolution strategy, combined with optional user-assisted conflict resolution for critical cases. LWW resolves conflicts by overwriting the previous data with the most recent update based on a timestamp. However, for certain sensitive data (e.g., project milestones or financial calculations), the system will allow users to manually resolve conflicts when needed.

### Rationale

The Last Write Wins (LWW) strategy was chosen because it satisfies the project's key requirements of simplicity and consistency, while the introduction of optional user-assisted resolution for key scenarios provides a safety net for handling more sensitive data.

- **Simplicity**: LWW is a straightforward solution that requires minimal development effort. By simply comparing timestamps of conflicting data and accepting the most recent update, implementation remains lightweight and easy to manage.
- **Consistency**: LWW ensures that data remains consistent across the system after conflicts are resolved, preventing duplicate or outdated information. Since most data in the system (e.g., yarn inventory) is not highly sensitive, automated resolution fits well.
- **Automated Resolution**: For most data, users are not required to take action. The system handles conflicts automatically, allowing for a smooth and uninterrupted user experience.
- **User Control for Critical Data**: For key data elements (e.g., completed project stages, financial records), users will have the option to manually resolve conflicts when reconnecting to the internet. This provides flexibility without complicating the system for less important data.

### Consequences

#### Positive

- **Lower Risk of User Confusion**: For the majority of data, LWW resolves conflicts automatically, reducing the chance that users will encounter confusing conflict resolution workflows. For critical data, the user-assisted option ensures that data loss is minimized where it matters most.
- **Reduced Development Time**: Implementing LWW requires less development effort than more complex strategies like versioning or merging. This allows the project to focus on core functionalities without getting bogged down by conflict resolution complexities.
- **Predictable Behavior**: The LWW approach provides consistent and predictable behavior, making it easier for both users and developers to understand how conflicts are resolved. With the option to allow manual resolution for critical data, users retain control where needed.
- **Scalability**: The simplicity of LWW makes it easy to scale as the system grows, allowing for conflict resolution to remain efficient even as the number of users and devices increases.

#### Negative

- **Potential Data Loss in LWW**: In scenarios where LWW is applied, older changes may be overwritten without user input. However, by restricting manual conflict resolution to key scenarios, the system mitigates the risk of data loss for important data.
- **Additional Complexity for User-Assisted Resolution**: Introducing optional manual conflict resolution adds a bit of complexity in terms of development and user experience. However, this complexity is limited to a subset of critical data, balancing user control with system automation.

### Conclusion

- In the context of **providing conflict resolution for an offline-first web application**,
- facing **the need for simplicity, consistency, automated resolution, and user control in critical scenarios**,
- we decided to use **Last Write Wins (LWW)** for the majority of data with **optional user-assisted conflict resolution** for critical data,
- and neglected **manual conflict resolution, versioning, and merging changes**,
- to achieve **reduced user confusion, predictable behavior, scalability, and data safety**,
- accepting **the trade-offs of potential data loss for non-critical data under LWW** and **additional complexity for manual resolution in key cases**.

## ADR #7: Choosing a Distributed Architecture

### Title

Choosing a Distributed Architecture

### Status

Accepted

### Context

The system is designed for crochet enthusiasts to manage yarn inventory, track projects, store crochet patterns, and monitor associated costs. The current scope targets a small number of users, but the system must be able to scale as new features are added, third-party integrations are introduced, and the user base grows over time.

To ensure long-term flexibility, scalability, and ease of introducing new components or integrations, the choice of architecture must balance initial simplicity with the ability to evolve and grow over time.

### Decision Drivers

The following key factors influence the architecture decision:

- **Scalability**: The architecture must allow for scaling as the user base grows and as different components of the system (e.g., yarn management, project management) require more resources.
- **Future Integrations**: The system may need to support third-party services (e.g., yarn price APIs, pattern repositories) and new features in the future. The architecture must accommodate these integrations with minimal disruption.
- **Cost Efficiency**: The system should remain cost-effective at its current scale while providing a clear path for handling increased operational complexity as it grows.
- **Maintainability**: The architecture should make it easy to manage, update, and debug individual components of the system.

### Alternative Options Considered

- **Monolithic Architecture**: A monolithic approach bundles all components into a single deployment unit, simplifying early development and deployment. However, it was rejected because it introduces scalability limitations, as the entire application would need to be deployed or scaled as a single unit. This would also make future integrations more complex and require greater refactoring efforts as the system grows.

### Decision

We decided to adopt a distributed architecture, beginning with a modular approach where individual services (e.g., yarn management, project management) are designed as independent components. Initially, these services may be deployed together, but the architecture will allow for gradual decoupling into independent deployment units as the system grows.

### Rationale

The distributed architecture was chosen because it best supports the system's long-term goals of scalability, flexibility, and independent service management:

- **Scalability**: As the user base grows or new features are introduced, services can be scaled independently without affecting other components.
- **Future-Proofing**: Distributed architecture supports the integration of third-party services and new features more easily, without needing a complete system overhaul.
- **Modular Evolution**: Starting with loosely coupled services within a distributed system allows for future migration to a microservices approach, but without the complexity and overhead of full microservices from the start.

### Consequences

#### Positive

- **Easier Maintenance Over Time**: The modular structure will make it easier to manage, update, and debug individual components without affecting the entire system. This will reduce the long-term technical debt associated with the system's evolution.
- **Faster Time to Market for New Features**: The ability to independently develop, update, and deploy different parts of the system will allow faster iteration and deployment of new features or services without requiring full redeployments of the entire system.
- **Improved Resource Allocation**: Independent scaling of components means resources can be allocated efficiently based on the actual usage patterns of different parts of the system (e.g., scaling the yarn management service separately from the project tracking service).
- **Better User Experience**: Updates and changes to specific services can be made with minimal or no downtime, providing a smoother and more reliable user experience.

#### Negative

- **Initial Complexity**: While not as complex as full microservices, distributed architecture introduces some complexity in managing communication between services and ensuring consistency.
- **Potential Overhead for Small Scale**: In the early stages, with a small user base, the overhead of managing distributed services may add unnecessary complexity compared to a monolithic architecture.

### Subsequent ADRs

- A future ADR may define the specific strategies for managing communication between distributed services, such as choosing between REST APIs, message queues, or event-driven communication.

### Conclusion

- In the context of **designing a scalable and flexible system for a small but growing user base**,
- facing **the need for long-term scalability, support for future integrations, and maintainability**,
- we decided to use a **distributed architecture**,
- and neglected **monolithic architecture**,
- to achieve **flexibility, scalability, and modular development**,
- accepting **the trade-off of initial complexity and potential overhead for managing distributed services in the early stages**.

## ADR #8: Choosing a Third-Party Authentication Service

- In the context of **building a cost-effective and scalable web application with user authentication**,
- facing **the need for strong security, minimal development effort, and future scalability**,
- we decided to use **third-party authentication services**,
- and neglected **building custom authentication system**,
- to achieve **faster implementation, robust security features, and long-term scalability**,
- accepting **the trade-off of potential vendor lock-in and ongoing service costs**.

## ADR #9: Choosing an Automated Cloud Backups

- In the context of **ensuring data reliability and recovery for user-uploaded files and database records**,
- facing **the need for scalable, cost-effective, and low-maintenance backup solutions**,
- we decided for **using automated cloud backups**,
- and neglected **manual backup processes**,
- to achieve **automated, reliable backups with minimal ongoing maintenance and easy recovery**,
- accepting **the trade-off of potential vendor lock-in and ongoing service costs**.

# Appendix

## Structurizr diagram

[Structurizr](https://structurizr.com/) diagram code for Crochet Management System:

\`\`\`
workspace {
  model {
    user = person "Crocheter" {
      description "Crocheting Enthusiast"
    }

    crochetApp = softwareSystem "Crochet Management System" {
      webApp = container "Web Application" {
        technology "TypeScript, React"
        description "Allows users to manage yarns, patterns, and projects"
        tags "Web Browser"
      }

      api = container "API Layer" {
        technology "Node.js, Express.js"
        description "Exposes CRUD operations for managing yarns, patterns, and projects"

        patternAPI = component "Pattern API" {
          technology "Node.js, Express.js"
          description "Manages pattern-related data"
        }
        projectAPI = component "Project API" {
          technology "Node.js, Express.js"
          description "Manages project-related data"
        }
        yarnAPI = component "Yarn API" {
          technology "Node.js, Express.js"
          description "Manages yarn-related data"
        }
        calculatorAPI = component "Calculator API" {
          technology "Node.js, Express.js"
          description "Handles logic for project cost and yarn price calculations"
        }
      }

      database = container "Database" {
        technology "PostgreSQL"
        description "Stores yarns, patterns, and projects"
        tags "Database"

        yarnTable = component "Yarn table"
        patternTable = component "Pattern table"
        projectTable = component "Project table"
      }

      fileStorage = container "File Storage" {
        technology "AWS S3"
        description "Stores pattern charts and project images"
      }

      localStorage = container "Local Storage" {
        technology "Workbox"
        description "Temporarily stores unsynced data while offline"
      }
    }

    user -> webApp "Manages yarns, patterns, and projects"
    webApp -> api "Makes API calls" "JSON/HTTPS"
    webApp -> localStorage "Stores local unsynced data"

    api -> database "Reads from and writes to" "SQL"
    yarnAPI -> database "Reads from and writes to" "SQL"
    patternAPI -> database "Reads from and writes to" "SQL"
    projectAPI -> database "Reads from and writes to" "SQL"
    calculatorAPI -> database "Reads from and writes to" "SQL"
    patternAPI -> fileStorage "Stores and retrieves pattern charts"
    projectAPI -> fileStorage "Stores and retrieves project images"
  }

  views {
    theme default

    systemContext crochetApp {
      include *
      autolayout
      title "[System Context] Crochet Management System"
    }

    container crochetApp {
      include *
      autolayout lr
      title "[Container] Crochet Management System"
    }

    component api {
      include *
      autolayout
      title "[Component] API Layer"
    }

    component database {
      include *
      autolayout
      title "[Component] Database"
    }

    styles {
      element "External" {
        background grey
      }
      element "Web Browser" {
        shape WebBrowser
      }
      element "Database" {
        shape Cylinder
      }
    }

    properties {
      structurizr.softwareSystemBoundaries true
      c4plantuml.stdlib false
    }
  }
}
\`\`\``;function Go(e){let t,n,u;return n=new Wo({props:{content:Ho}}),{c(){t=S("article"),_e(n.$$.fragment),this.h()},l(i){t=T(i,"ARTICLE",{class:!0});var a=J(t);we(n.$$.fragment,a),a.forEach(g),this.h()},h(){ht(t,"class","system-design")},m(i,a){F(i,t,a),ke(n,t,null),u=!0},p:fe,i(i){u||(he(n.$$.fragment,i),u=!0)},o(i){pe(n.$$.fragment,i),u=!1},d(i){i&&g(t),ve(n)}}}class Vo extends ge{constructor(t){super(),ye(this,t,null,Go,be,{})}}function Qo(e){let t,n="<small><strong>(╯°□°）╯︵ ┻━┻</strong></small>";return{c(){t=S("p"),t.innerHTML=n,this.h()},l(u){t=T(u,"P",{class:!0,"data-svelte-h":!0}),N(t)!=="svelte-6cg12i"&&(t.innerHTML=n),this.h()},h(){ht(t,"class","text-center")},m(u,i){F(u,t,i)},p:fe,i:fe,o:fe,d(u){u&&g(t)}}}class Zo extends ge{constructor(t){super(),ye(this,t,null,Qo,be,{})}}function Yo(e){let t,n="<small><strong>(ヘ･_･)ヘ┳━┳</strong></small>";return{c(){t=S("p"),t.innerHTML=n,this.h()},l(u){t=T(u,"P",{class:!0,"data-svelte-h":!0}),N(t)!=="svelte-klt78m"&&(t.innerHTML=n),this.h()},h(){ht(t,"class","text-center green")},m(u,i){F(u,t,i)},p:fe,i:fe,o:fe,d(u){u&&g(t)}}}class Jo extends ge{constructor(t){super(),ye(this,t,null,Yo,be,{})}}function Xo(e){let t,n,u=`Engineering the Intangible:<br/>The Essential Handbook for Engineers Who
    Refuse to Lose Their Minds While Navigating a World Where the Only Certainty
    Is That Your Stack Will Never Stop Changing`,i,a,o,r,c=e[0].started+"",s,l,h,m,p,f,y=`<h3>Summary</h3> <p>The <i>Engineering the Intangible</i> project emerged from my own experience
        as a software engineer, when I realized the importance of balancing rapidly
        changing technical skills with lasting human abilities. In a world where
        technology quickly becomes outdated, skills like effective communication
        and adaptability are crucial for long-term success.</p> <p>This insight made me see a gap: many existing resources are either too
        generic, overly complex, or not well-suited for the analytical mindset
        of technical professionals. <i>Engineering the Intangible</i> aims to fill
        this gap by offering an approach tailored specifically for engineers and
        tech professionals. My aim is to create a tool that&#39;s easy to access and
        use, helping people improve their job performance while also fostering their
        personal growth.</p> <p>This project is my way of providing a straightforward and intuitive
        resource that supports the continuous development of these essential,
        intangible skills. By focusing on these competencies, it helps
        individuals grow both professionally and personally in a constantly
        changing world.</p>`,I,M,A=`<h3>Introduction</h3> <p>The <i>Engineering the Intangible</i> project was born to tackle a challenge
        every engineer faces: the need to stay up-to-date with rapidly changing technologies
        while also building the soft skills that are crucial for career growth. Unlike
        many existing resources that can be too generic, overly complex, or aimed
        at those with a background in psychology, this project takes a straightforward
        approach tailored to the analytical mindset of engineers.</p> <p>The goal is to create an accessible tool that not only boosts job
        performance but also supports overall personal development in all areas
        of life. By focusing on mastering timeless competencies, this project
        aims to help you sustain long-term success and continuous growth.</p>`,E,x,w,D="Problem",B,q,re=`In the rapidly changing IT world, where new technologies mushroom,
        certain core competencies—such as adaptability and effective
        communication—remain essential. Mastering these skills not only ensures
        your long-term career success but also makes daily work life more
        satisfying.`,P,ce,le=`While technical skills can quickly become outdated, these timeless
        competencies provide a stable foundation, helping you stay adaptable and
        valuable no matter how the industry changes.`,xe,oe,ue,de,jt=`<h3>Motivation Behind the Project</h3> <p>This project is born from my own experience in the IT field, where I saw
        a growing need to develop non-technical skills alongside technical
        expertise. Even though there are resources out there discussing these
        competencies, I found a lack of options that specifically cater to the
        unique needs of technical professionals.</p> <p>To fill this gap, I have developed a straightforward approach to foster
        these timeless competencies. My goal is to create a tool that is:</p> <ul><li><b>Simple</b><br/>
          Fits into busy schedule without being overwhelming.</li> <li><b>Easy to Use</b><br/>
          Requires no prior expertise in psychology or HR.</li> <li><b>Plug-and-Play</b><br/>
          Ready for immediate use with minimal setup.</li> <li><b>Flexible</b><br/>
          Useful for both professional and personal development.</li></ul>`,Ke,Be,yt=`<h3>Theoretical Foundation</h3> <p>The <i>Engineering the Intangible</i> project draws on established competency
        models, particularly those by Spencer &amp; Spencer (1993), who define competencies
        as the &quot;underlying characteristics of an individual related to effective
        and superior performance.&quot; These characteristics include deeper qualities
        such as motives, traits, and self-concept, which are crucial for long-term
        success, especially in fields where technical skills can quickly become outdated.</p> <p>As statistician George Box famously said, <q>All models are wrong, but some are useful.</q> This project embraces that idea, offering a framework that, while not perfect,
        is designed to be practical and adaptable across various professional contexts.</p>`,nt,Ce,xt=`<h4>Selected Bibliography</h4> <ul><li>Lucia, A. D., &amp; Lepsinger, R. (1999). <cite>The art and science of competency models: Pinpointing critical
            success factors in organizations</cite>. Jossey-Bass/Pfeiffer.</li> <li>McClelland, D.C. (1987). <cite>Human motivation</cite>. Cambridge:
          Cambridge University Press.</li> <li>Spencer, L. M., &amp; Spencer, S. M. (1993). <cite>Competence at work: Models for superior performance</cite>. Wiley.</li></ul>`,$e,Ue,Ot=`<h3>Goal of the Project</h3> <p>The primary goal of this project is to develop a structured, accessible
        approach for tracking and enhancing intangible skills, especially for
        those who lack formal training in psychology or human resources. This
        tool is intended to support self-improvement in both your professional
        and personal life.</p>`,_t,We,zt=`<h3>Target Audience</h3> <p>While this framework is developed from a software engineer&#39;s
        perspective, its focus on timeless competencies makes it relevant to
        anyone looking to grow personally and professionally, no matter where
        they are in their career—whether they&#39;re just starting out, stepping
        into leadership, or navigating new challenges in a constantly changing
        world.</p> <p>For junior engineers, the need to acquire extensive technical skills can
        be overwhelming, and the importance of non-technical skills is
        frequently overlooked or underestimated. This tool helps them develop
        these broader skills, which are crucial for comprehensive growth.
        Mid-career professionals transitioning into leadership roles will also
        find this framework valuable, as these intangible competencies become
        increasingly critical.</p>`,ut,He,Nt=`<h3>Key Use Cases</h3> <ul><li><b>Interview Preparation</b><br/>Strengthen key competencies to
          better articulate your skills and experience.</li> <li><b>Ongoing Personal Development</b><br/>Plan your career growth by
          strategically building the soft skills you need.</li></ul> <p>For example, a software engineer preparing for an interview could use
        this tool to identify and enhance relevant non-technical skills, helping
        them develop clear, concise narratives to share during the interview.</p> <p>Similarly, a mid-career software engineer aiming to switch into a
        managerial role might use this framework to strategically plan their
        skill development, making their transition smoother and more effective.</p>`,it,Ge,wt=`<h3>Benefits</h3> <ul><li><b>Increased Self-Awareness</b><br/>
          Understand your strengths and areas for improvement, accelerating your
          career progress and boosting job satisfaction.</li> <li><b>Objective Measurement</b><br/>
          Track your growth over time using a clear, structured approach, helping
          you achieve both short-term and long-term goals.</li> <li><b>Gap Identification</b><br/>
          Proactively address skill gaps to prepare for future challenges, keeping
          you competitive in your field.</li> <li><b>Well-Rounded Growth</b><br/>
          Improve your effectiveness in all areas of life and enhance your ability
          to adapt to new roles and responsibilities.</li></ul>`,Re,Me,et;return oe=new Zo({}),Me=new Jo({}),{c(){t=S("article"),n=S("h2"),n.innerHTML=u,i=O(),a=S("section"),o=S("p"),r=S("small"),s=Ne(c),l=Ne(" – Present (Research Phase)"),h=O(),m=S("section"),p=O(),f=S("section"),f.innerHTML=y,I=O(),M=S("section"),M.innerHTML=A,E=O(),x=S("section"),w=S("h3"),w.textContent=D,B=O(),q=S("p"),q.textContent=re,P=O(),ce=S("p"),ce.textContent=le,xe=O(),_e(oe.$$.fragment),ue=O(),de=S("section"),de.innerHTML=jt,Ke=O(),Be=S("section"),Be.innerHTML=yt,nt=O(),Ce=S("section"),Ce.innerHTML=xt,$e=O(),Ue=S("section"),Ue.innerHTML=Ot,_t=O(),We=S("section"),We.innerHTML=zt,ut=O(),He=S("section"),He.innerHTML=Nt,it=O(),Ge=S("section"),Ge.innerHTML=wt,Re=O(),_e(Me.$$.fragment),this.h()},l(X){t=T(X,"ARTICLE",{class:!0});var Ee=J(t);n=T(Ee,"H2",{"data-svelte-h":!0}),N(n)!=="svelte-ics1av"&&(n.innerHTML=u),i=z(Ee),a=T(Ee,"SECTION",{});var _=J(a);o=T(_,"P",{class:!0});var v=J(o);r=T(v,"SMALL",{});var j=J(r);s=qe(j,c),l=qe(j," – Present (Research Phase)"),j.forEach(g),v.forEach(g),h=z(_),m=T(_,"SECTION",{id:!0}),J(m).forEach(g),p=z(_),f=T(_,"SECTION",{"data-svelte-h":!0}),N(f)!=="svelte-qzanqj"&&(f.innerHTML=y),I=z(_),M=T(_,"SECTION",{"data-svelte-h":!0}),N(M)!=="svelte-xj7loo"&&(M.innerHTML=A),E=z(_),x=T(_,"SECTION",{});var R=J(x);w=T(R,"H3",{"data-svelte-h":!0}),N(w)!=="svelte-1cxwba3"&&(w.textContent=D),B=z(R),q=T(R,"P",{"data-svelte-h":!0}),N(q)!=="svelte-dz5iuq"&&(q.textContent=re),P=z(R),ce=T(R,"P",{"data-svelte-h":!0}),N(ce)!=="svelte-g5omnv"&&(ce.textContent=le),xe=z(R),we(oe.$$.fragment,R),R.forEach(g),ue=z(_),de=T(_,"SECTION",{"data-svelte-h":!0}),N(de)!=="svelte-18fay02"&&(de.innerHTML=jt),Ke=z(_),Be=T(_,"SECTION",{"data-svelte-h":!0}),N(Be)!=="svelte-h261u2"&&(Be.innerHTML=yt),nt=z(_),Ce=T(_,"SECTION",{"data-svelte-h":!0}),N(Ce)!=="svelte-1xjvzd"&&(Ce.innerHTML=xt),$e=z(_),Ue=T(_,"SECTION",{"data-svelte-h":!0}),N(Ue)!=="svelte-1gmzz7a"&&(Ue.innerHTML=Ot),_t=z(_),We=T(_,"SECTION",{"data-svelte-h":!0}),N(We)!=="svelte-12lm50q"&&(We.innerHTML=zt),ut=z(_),He=T(_,"SECTION",{"data-svelte-h":!0}),N(He)!=="svelte-11g0ypa"&&(He.innerHTML=Nt),it=z(_),Ge=T(_,"SECTION",{"data-svelte-h":!0}),N(Ge)!=="svelte-11gxyv9"&&(Ge.innerHTML=wt),Re=z(_),we(Me.$$.fragment,_),_.forEach(g),Ee.forEach(g),this.h()},h(){ht(o,"class","text-center"),ht(m,"id","toc"),ht(t,"class","project")},m(X,Ee){F(X,t,Ee),L(t,n),L(t,i),L(t,a),L(a,o),L(o,r),L(r,s),L(r,l),L(a,h),L(a,m),L(a,p),L(a,f),L(a,I),L(a,M),L(a,E),L(a,x),L(x,w),L(x,B),L(x,q),L(x,P),L(x,ce),L(x,xe),ke(oe,x,null),L(a,ue),L(a,de),L(a,Ke),L(a,Be),L(a,nt),L(a,Ce),L(a,$e),L(a,Ue),L(a,_t),L(a,We),L(a,ut),L(a,He),L(a,it),L(a,Ge),L(a,Re),ke(Me,a,null),et=!0},p(X,[Ee]){(!et||Ee&1)&&c!==(c=X[0].started+"")&&Xe(s,c)},i(X){et||(he(oe.$$.fragment,X),he(Me.$$.fragment,X),et=!0)},o(X){pe(oe.$$.fragment,X),pe(Me.$$.fragment,X),et=!1},d(X){X&&g(t),ve(oe),ve(Me)}}}function Ko(e,t,n){let{project:u}=t;return Pi(()=>{ji(3);const{hash:i}=document.location,a=i&&document.getElementById(i.slice(1));a&&a.scrollIntoView()}),e.$$set=i=>{"project"in i&&n(0,u=i.project)},[u]}class es extends ge{constructor(t){super(),ye(this,t,Ko,Xo,be,{project:0})}}function ts(e){let t,n=e[0].status+"",u;return{c(){t=S("li"),u=Ne(n)},l(i){t=T(i,"LI",{});var a=J(t);u=qe(a,n),a.forEach(g)},m(i,a){F(i,t,a),L(t,u)},p(i,a){a&1&&n!==(n=i[0].status+"")&&Xe(u,n)},d(i){i&&g(t)}}}function ns(e){let t,n,u,i="Prepare for behavioral interviews like a pro.",a,o,r=`<button type="button" class="nes-btn is-disabled"><i class="nes-icon github-square is-small"></i>
    Public soon</button>`,c;return t=new Ye({props:{caption:"Status",$$slots:{default:[ts]},$$scope:{ctx:e}}}),{c(){_e(t.$$.fragment),n=O(),u=S("p"),u.textContent=i,a=O(),o=S("p"),o.innerHTML=r},l(s){we(t.$$.fragment,s),n=z(s),u=T(s,"P",{"data-svelte-h":!0}),N(u)!=="svelte-1cy67pe"&&(u.textContent=i),a=z(s),o=T(s,"P",{"data-svelte-h":!0}),N(o)!=="svelte-liw4it"&&(o.innerHTML=r)},m(s,l){ke(t,s,l),F(s,n,l),F(s,u,l),F(s,a,l),F(s,o,l),c=!0},p(s,[l]){const h={};l&3&&(h.$$scope={dirty:l,ctx:s}),t.$set(h)},i(s){c||(he(t.$$.fragment,s),c=!0)},o(s){pe(t.$$.fragment,s),c=!1},d(s){s&&(g(n),g(u),g(a),g(o)),ve(t,s)}}}function us(e,t,n){let{project:u}=t;return e.$$set=i=>{"project"in i&&n(0,u=i.project)},[u]}class is extends ge{constructor(t){super(),ye(this,t,us,ns,be,{project:0})}}function as(e){let t,n=e[0].status+"",u;return{c(){t=S("li"),u=Ne(n)},l(i){t=T(i,"LI",{});var a=J(t);u=qe(a,n),a.forEach(g)},m(i,a){F(i,t,a),L(t,u)},p(i,a){a&1&&n!==(n=i[0].status+"")&&Xe(u,n)},d(i){i&&g(t)}}}function rs(e){let t,n,u,i='Easy management of <a href="https://plantuml.com/" rel="noopener" target="_blank">PlantUML</a> diagrams.',a,o,r='<a href="https://github.com/burczan/plantuml-is-your-friend" rel="noopener" target="_blank"><button type="button" class="nes-btn"><i class="nes-icon github-square is-small"></i></button></a>',c;return t=new Ye({props:{caption:"Status",$$slots:{default:[as]},$$scope:{ctx:e}}}),{c(){_e(t.$$.fragment),n=O(),u=S("p"),u.innerHTML=i,a=O(),o=S("p"),o.innerHTML=r},l(s){we(t.$$.fragment,s),n=z(s),u=T(s,"P",{"data-svelte-h":!0}),N(u)!=="svelte-umzvhf"&&(u.innerHTML=i),a=z(s),o=T(s,"P",{"data-svelte-h":!0}),N(o)!=="svelte-1lw9kh1"&&(o.innerHTML=r)},m(s,l){ke(t,s,l),F(s,n,l),F(s,u,l),F(s,a,l),F(s,o,l),c=!0},p(s,[l]){const h={};l&3&&(h.$$scope={dirty:l,ctx:s}),t.$set(h)},i(s){c||(he(t.$$.fragment,s),c=!0)},o(s){pe(t.$$.fragment,s),c=!1},d(s){s&&(g(n),g(u),g(a),g(o)),ve(t,s)}}}function os(e,t,n){let{project:u}=t;return e.$$set=i=>{"project"in i&&n(0,u=i.project)},[u]}class ss extends ge{constructor(t){super(),ye(this,t,os,rs,be,{project:0})}}function cs(e){let t,n=e[0].status+"",u;return{c(){t=S("li"),u=Ne(n)},l(i){t=T(i,"LI",{});var a=J(t);u=qe(a,n),a.forEach(g)},m(i,a){F(i,t,a),L(t,u)},p(i,a){a&1&&n!==(n=i[0].status+"")&&Xe(u,n)},d(i){i&&g(t)}}}function ls(e){let t,n,u,i=`Compare price of two toilet paper rolls depending on amount of layers and
  leafs.`,a,o,r=`<a href="https://github.com/burczan/toiper" rel="noopener" target="_blank"><button type="button" class="nes-btn"><i class="nes-icon github-square is-small"></i>
      Python CLI version</button></a> <a href="https://github.com/burczan/toiper-react" rel="noopener" target="_blank"><button type="button" class="nes-btn"><i class="nes-icon github-square is-small"></i>
      React GUI version</button></a>`,c;return t=new Ye({props:{caption:"Status",$$slots:{default:[cs]},$$scope:{ctx:e}}}),{c(){_e(t.$$.fragment),n=O(),u=S("p"),u.textContent=i,a=O(),o=S("p"),o.innerHTML=r},l(s){we(t.$$.fragment,s),n=z(s),u=T(s,"P",{"data-svelte-h":!0}),N(u)!=="svelte-1sah0lg"&&(u.textContent=i),a=z(s),o=T(s,"P",{"data-svelte-h":!0}),N(o)!=="svelte-1o6qsbs"&&(o.innerHTML=r)},m(s,l){ke(t,s,l),F(s,n,l),F(s,u,l),F(s,a,l),F(s,o,l),c=!0},p(s,[l]){const h={};l&3&&(h.$$scope={dirty:l,ctx:s}),t.$set(h)},i(s){c||(he(t.$$.fragment,s),c=!0)},o(s){pe(t.$$.fragment,s),c=!1},d(s){s&&(g(n),g(u),g(a),g(o)),ve(t,s)}}}function ds(e,t,n){let{project:u}=t;return e.$$set=i=>{"project"in i&&n(0,u=i.project)},[u]}class fs extends ge{constructor(t){super(),ye(this,t,ds,ls,be,{project:0})}}function hs(e){let t,n=e[0].status+"",u;return{c(){t=S("li"),u=Ne(n)},l(i){t=T(i,"LI",{});var a=J(t);u=qe(a,n),a.forEach(g)},m(i,a){F(i,t,a),L(t,u)},p(i,a){a&1&&n!==(n=i[0].status+"")&&Xe(u,n)},d(i){i&&g(t)}}}function ps(e){let t,n,u,i=`Display pressure values from last 4 hours for Liberec station and warn if
  change can be dangerous.`,a,o,r='Data source: <a href="https://www.chmi.cz/" rel="noopener" target="_blank">Český hydrometeorologický ústav</a>.',c,s,l='<a href="https://github.com/burczan/under-pressure" rel="noopener" target="_blank"><button type="button" class="nes-btn"><i class="nes-icon github-square is-small"></i></button></a>',h;return t=new Ye({props:{caption:"Status",$$slots:{default:[hs]},$$scope:{ctx:e}}}),{c(){_e(t.$$.fragment),n=O(),u=S("p"),u.textContent=i,a=O(),o=S("p"),o.innerHTML=r,c=O(),s=S("p"),s.innerHTML=l},l(m){we(t.$$.fragment,m),n=z(m),u=T(m,"P",{"data-svelte-h":!0}),N(u)!=="svelte-3b8b9s"&&(u.textContent=i),a=z(m),o=T(m,"P",{"data-svelte-h":!0}),N(o)!=="svelte-9vokzh"&&(o.innerHTML=r),c=z(m),s=T(m,"P",{"data-svelte-h":!0}),N(s)!=="svelte-1xz8e3o"&&(s.innerHTML=l)},m(m,p){ke(t,m,p),F(m,n,p),F(m,u,p),F(m,a,p),F(m,o,p),F(m,c,p),F(m,s,p),h=!0},p(m,[p]){const f={};p&3&&(f.$$scope={dirty:p,ctx:m}),t.$set(f)},i(m){h||(he(t.$$.fragment,m),h=!0)},o(m){pe(t.$$.fragment,m),h=!1},d(m){m&&(g(n),g(u),g(a),g(o),g(c),g(s)),ve(t,m)}}}function ms(e,t,n){let{project:u}=t;return e.$$set=i=>{"project"in i&&n(0,u=i.project)},[u]}class bs extends ge{constructor(t){super(),ye(this,t,ms,ps,be,{project:0})}}const _s={name:"Natalia Pospieszyńska",role:"Backend Software Engineer",location:{city:"Trutnov",region:"Hradec Králové",country:"Czechia",icon:"fa-solid fa-location-dot",mapUrl:"https://en.mapy.cz/turisticka?source=dist&id=36&ds=1&x=15.8373076&y=50.5704668&z=10"},contact:{linkedin:{href:"https://www.linkedin.com/in/nataliapospieszynska/",displayValue:"/nataliapospieszynska",faIconClass:"fa-brands fa-linkedin"},github:{href:"https://github.com/burczan",displayValue:"/burczan",faIconClass:"fa-brands fa-github"},web:{href:"https://burczan.github.io/me/",displayValue:"burczan.github.io/me",faIconClass:"fa-solid fa-globe"}}},ws=[{school:"Polish Naval Academy",city:"Gdynia",country:"Poland",field:"Cybersecurity",degree:"Postgraduate studies",dateRange:"2019–2020",website:"https://www.amw.gdynia.pl"},{school:"Adam Mickiewicz University",city:"Poznań",country:"Poland",field:"Philosophy",subfield:"Social Communication",degree:"Master studies",dateRange:"2013–2016",website:"https://amu.edu.pl/"},{school:"Post-Secondary Vocational School",city:"Poznań",country:"Poland",field:"Sound Engineering",degree:"Technician",dateRange:"2011–2013"},{school:"Adam Mickiewicz University",city:"Poznań",country:"Poland",field:"Instructional Technology",degree:"Bachelor's degree",dateRange:"2010–2013",website:"https://amu.edu.pl/"}],ks=[{role:"Backend Software Engineer",company:"Capbase",startDate:"04/2021",endDate:"07/2022",description:["Implemented and enhanced several product features in TypeScript, Node.js, and React, improving user experience and addressing customer feedback.","Developed and optimized an internal API with Express.js and AWS, enabling seamless data integration and improving internal workflows.","Diagnosed and resolved technical issues, improving application stability and ensuring smooth performance.","Wrote and maintained comprehensive unit and integration tests, leading to high code quality and fewer bugs in production."],descriptionShortened:["Implemented and enhanced several product features in TypeScript, Node.js, and React.","Developed and optimized an internal API with Express.js and AWS.","Diagnosed and resolved technical issues.","Wrote and maintained comprehensive unit and integration tests."],technologies:["AWS","Bash","Express.js","Linux","Node.js","React","TypeScript"]},{role:"Frontend Software Engineer",company:"Beta District",startDate:"12/2019",endDate:"08/2020",description:["Developed reusable components in React and TypeScript, improving code consistency and speeding up the development process for future features.","Implemented unit and integration tests using Jest and React Testing Library, ensuring high code reliability and significantly reducing bug occurrences."],descriptionShortened:["Developed reusable components in React and TypeScript for a newly created frontend.","Implemented unit and integration tests using Jest and React Testing Library."],technologies:["GraphQL","JavaScript","React","Redux","TypeScript","Unit testing"]},{role:"Software Test Engineer",company:"Beta District",startDate:"01/2019",endDate:"11/2019",description:["Remotely mentored a QA specialist, introducing programming and test automation practices, which enhanced the team's testing efficiency and technical capabilities.","Developed and maintained automated tests in JavaScript and Ruby, improving test coverage and helping ensure consistent product quality throughout the release cycle.","Contributed to frontend development by implementing basic functionalities in React, supporting the timely delivery of key features alongside the development team."],descriptionShortened:["Remotely mentored QA specialist.","Developed and maintained automated tests in JavaScript and Ruby.","Contributed to frontend development by implementing basic functionalities in React."],technologies:["API testing","JavaScript","React","Ruby","Test automation"]},{role:"QA Specialist",company:"Beta District",startDate:"02/2018",endDate:"12/2018",description:["Conducted manual functional and API testing using Burp Suite and Postman, ensuring reliability and preventing major issues before deployment to production.","Collaborated closely with developers to implement new functionalities, providing critical feedback that improved product quality and streamlined the development process.","Learned and applied test automation using JavaScript and Ruby, contributing to enhanced test coverage and overall improvement in the team's testing process.","Performed post-release production environment testing using manual testing techniques, identifying and resolving issues that maintained system stability and reliability."],descriptionShortened:["Conducted manual functional and API testing using Burp Suite and Postman.","Collaborated closely with developers to implement new features.","Performed production environment testing after each release."],technologies:["API testing","Burp Suite","JavaScript","Manual testing","Ruby","Test automation"]},{role:"Junior QA Specialist",company:"Beta District",startDate:"04/2017",endDate:"01/2018",description:["Performed manual testing to identify and document defects, ensuring high-quality software products and preventing critical issues before release.","Proposed and implemented more efficient testing procedures, streamlining the process and reducing test execution time.","Actively identified and reported bugs, suggesting improvements that contributed to enhancing the overall quality and performance of software projects.","Actively learned new concepts and techniques in manual and API testing, applying these insights to improve the team's testing effectiveness and product quality."],descriptionShortened:["Performed manual testing to identify and document defects.","Proposed and implemented more efficient testing procedures.","Suggested improvements to projects by finding and reporting bugs.","Actively learned new concepts and techniques in software testing."],technologies:["API testing","Manual testing"]},{role:"Instructional Designer",company:"LLidero",startDate:"05/2014",endDate:"06/2016",description:["Designed and developed educational courses tailored to various learner needs, applying instructional design principles and pedagogical techniques to create effective learning experiences.","Set clear learning goals and objectives for each course, ensuring alignment with educational standards and learner outcomes.","Conducted thorough testing of courses, demonstrating strong attention to detail to identify and resolve any issues, ensuring the quality and effectiveness of instructional materials.","Collaborated with subject matter experts to gather content and ensure accuracy, integrating their expertise into the course design to enhance the learning experience."],descriptionShortened:["Designed and developed educational courses tailored to various learner needs.","Set clear learning goals and objectives for each course.","Collaborated with subject matter experts to gather content and ensure accuracy."]}],vs=[{name:"Mathematics",description:"Uncovering the hidden order and underlying patterns that govern the universe."},{name:"Philosophy",description:"Searching the meaning behind the order and chaos that mathematics reveals."},{name:"Psychology",description:"Exploring the complexities of human thought, mirroring the pursuit of order amid the chaos revealed by mathematics and questioned by philosophy."},{name:"Theoretical Computer Science",description:"Investigating the limits of computation, where chaos, order, and meaning intersect in the search for knowledge."}],As={programmingLanguages:{display:"Programming Languages",skills:["JavaScript","TypeScript","Ruby","Bash"]},frontendDevelopment:{display:"Frontend Development",skills:["React","Svelte","Vanilla JS","HTML","CSS","Tailwind"]},backendDevelopment:{display:"Backend Development & Databases",skills:["Node.js","Express.js","REST API","GraphQL","SQL","NoSQL","AWS DynamoDB","PostgreSQL"]},cloudPlatforms:{display:"Cloud Platforms",skills:["Amazon Web Services (AWS)"]},systemDesignArchitecture:{display:"System Design & Architecture",skills:["Distributed Systems","System Architecture","Microservices","Serverless"]},diagrammingDocumentation:{display:"Diagramming & Technical Documentation",skills:["PlantUML","Structurizr","Graphviz","TikZ","LaTeX"]},softwareEngineering:{display:"Software Engineering",skills:["Algorithms and Data Structures","Code Review","Debugging","Software Craftsmanship (KISS, DRY, YAGNI, etc.)"]},testingAutomation:{display:"Testing & Automation",skills:["API Testing (Postman)","Jest","Puppeteer","Security Testing (Burp Suite)","Test Automation (Frontend/Backend)","Unit Testing"]},versionControlCollaboration:{display:"Version Control & Collaboration",skills:["Git","GitHub","Linear","Obsidian"]},operatingSystems:{display:"Operating Systems",skills:["Linux"]}},Cs=["Adaptability","Analytical skills","Asking questions","Attention to detail","Collaboration","Continuous learning","Critical thinking","Growth mindset","Mentoring","Open-mindedness","Openness to feedback","Persistence","Problem solving","Remote working","Resilience","Self-motivation"],Es=[{slug:"crochet-management-system",title:"Crochet Management System Design",shortTitle:"Crochet Management System Design",started:"10/2024",ended:"10/2024",component:Vo},{slug:"engineering-intangible",title:"Engineering the Intangible: The Essential Handbook for Engineers Who Refuse to Lose Their Minds While Navigating a World Where the Only Certainty Is That Your Stack Will Never Stop Changing",shortTitle:"Engineering the Intangible",started:"07/2024",ended:"Present (Research Phase)",component:es}],Ds=[{title:"Anki Scripts",shortDescription:"Scripts and styling for Anki flashcards.",status:"Maintained/active development.",repository:{private:!0},component:Ui},{title:"Crocheting Admin Tools",shortDescription:"Personal database of yarns and crochet patterns. Various tools and calculators for patterns/projects/yarns management.",status:"Maintained/active development.",repository:{private:!0},component:Qi},{title:"Intraview",shortDescription:"Prepare for behavioral interviews like a pro.",status:"Active development.",repository:{private:!0,github:"Public soon"},component:is},{title:"PlantUML-is-your-friend",shortDescription:"Easy management of PlantUML diagrams.",status:"Maintained/active development.",repository:{private:!1,github:"https://github.com/burczan/plantuml-is-your-friend"},component:ss},{title:"Toiper",shortDescription:"Compare price of two toilet paper rolls depending on amount of layers and leafs.",status:"Current versions deprecated. Working on improved comparison algorithm.",repository:{private:!1,github:"https://github.com/burczan/toiper"},component:fs},{title:"Under Pressure",shortDescription:"Display pressure values from last 4 hours for Liberec station and warn if change can be dangerous.",status:"Deprecated.",repository:{private:!1,github:"https://github.com/burczan/under-pressure"},component:bs}],Ss=[{language:"Polish",level:"Native proficiency"},{language:"English",level:"Full professional proficiency"},{language:"Czech",level:"Limited working proficiency"},{language:"Spanish",level:"Elementary proficiency"}],Ts={aboutMe:"fa-solid fa-ghost",contact:"fa-solid fa-address-book",education:"fa-solid fa-user-graduate",experience:"fa-solid fa-person-digging",externalLink:"fa-solid fa-link",favourite:"fa-solid fa-heart",futureTechstack:"fa-solid fa-book-open-reader",generalInterests:"fa-solid fa-book-open-reader",headline:"fa-solid fa-code",projects:"fa-solid fa-person-walking-luggage",softSkills:"fa-solid fa-people-pulling",spokenLanguages:"fa-solid fa-language",summary:"fa-solid fa-user-pen",technologies:"fa-solid fa-user-astronaut"};export{Ss as a,_s as b,ks as c,Ds as d,ws as e,Ts as f,vs as i,Es as p,Cs as s,As as t};
