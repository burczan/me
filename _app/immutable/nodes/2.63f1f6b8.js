import{a as $e}from"../chunks/index.c6828150.js";import{s as ie,a as W,e as oe,b as ue,u as me,g as _e,d as he,c as ve}from"../chunks/scheduler.4a803514.js";import{S as de,i as pe,k as z,l as D,m as F,n as P,o as T,p as H,e as d,s as y,t as Y,r as be,c as p,d as _,f as O,a as $,b as Z,u as v,h as i,g as x,j as ge,v as Ee,w as q}from"../chunks/index.6cb2e47b.js";import{I as Ie,g as Me,a as Ae,e as le}from"../chunks/Icon.ff8c5fdb.js";import{b as N}from"../chunks/paths.dbf5a6e3.js";import{p as je}from"../chunks/stores.81f700e8.js";import{C as Ce}from"../chunks/code-xml.38a00b4a.js";function Ne(l){let e;const o=l[2].default,t=ue(o,l,l[3],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,a){t&&t.m(n,a),e=!0},p(n,a){t&&t.p&&(!e||a&8)&&me(t,o,n,n[3],e?he(o,n[3],a,null):_e(n[3]),null)},i(n){e||(P(t,n),e=!0)},o(n){T(t,n),e=!1},d(n){t&&t.d(n)}}}function Se(l){let e,o;const t=[{name:"construction"},l[1],{iconNode:l[0]}];let n={$$slots:{default:[Ne]},$$scope:{ctx:l}};for(let a=0;a<t.length;a+=1)n=W(n,t[a]);return e=new Ie({props:n}),{c(){z(e.$$.fragment)},l(a){D(e.$$.fragment,a)},m(a,c){F(e,a,c),o=!0},p(a,[c]){const r=c&3?Me(t,[t[0],c&2&&Ae(a[1]),c&1&&{iconNode:a[0]}]):{};c&8&&(r.$$scope={dirty:c,ctx:a}),e.$set(r)},i(a){o||(P(e.$$.fragment,a),o=!0)},o(a){T(e.$$.fragment,a),o=!1},d(a){H(e,a)}}}function ke(l,e,o){let{$$slots:t={},$$scope:n}=e;const a=[["rect",{x:"2",y:"6",width:"20",height:"8",rx:"1"}],["path",{d:"M17 14v7"}],["path",{d:"M7 14v7"}],["path",{d:"M17 3v3"}],["path",{d:"M7 3v3"}],["path",{d:"M10 14 2.3 6.3"}],["path",{d:"m14 6 7.7 7.7"}],["path",{d:"m8 6 8 8"}]];return l.$$set=c=>{o(1,e=W(W({},e),oe(c))),"$$scope"in c&&o(3,n=c.$$scope)},e=oe(e),[a,e,t,n]}class we extends de{constructor(e){super(),pe(this,e,ke,Se,ie,{})}}const re=we,Le=async()=>({navbarItems:[{name:"Home",href:"/"},{name:"About me",href:"/about/"},{name:"Projects",href:"/projects/"},{name:"Experience",href:"/experience/"},{name:"Education",href:"/education/"},{name:"Contact",href:"/contact/"}],about:$e}),ye=!0,Oe="always",Re=Object.freeze(Object.defineProperty({__proto__:null,load:Le,prerender:ye,trailingSlash:Oe},Symbol.toStringTag,{value:"Module"}));function ce(l,e,o){const t=l.slice();return t[4]=e[o].name,t[5]=e[o].href,t}function fe(l){let e,o,t=l[4]+"",n,a,c;return{c(){e=d("li"),o=d("a"),n=Y(t),c=y(),this.h()},l(r){e=p(r,"LI",{});var m=$(e);o=p(m,"A",{href:!0});var b=$(o);n=Z(b,t),b.forEach(_),c=O(m),m.forEach(_),this.h()},h(){v(o,"href",a=""+(N+l[5])),q(o,"orange",`${N}${l[5]}`===l[1].url.pathname),q(o,"contrast",`${N}${l[5]}`===l[1].url.pathname)},m(r,m){x(r,e,m),i(e,o),i(o,n),i(e,c)},p(r,m){m&1&&t!==(t=r[4]+"")&&ge(n,t),m&1&&a!==(a=""+(N+r[5]))&&v(o,"href",a),m&3&&q(o,"orange",`${N}${r[5]}`===r[1].url.pathname),m&3&&q(o,"contrast",`${N}${r[5]}`===r[1].url.pathname)},d(r){r&&_(e)}}}function Pe(l){let e,o,t,n,a,c,r,m=l[0].about.name+"",b,R,E,X,S,B,k,G,w,I,M,J,A,j;E=new Ce({});let L=le(l[0].navbarItems),u=[];for(let s=0;s<L.length;s+=1)u[s]=fe(ce(l,L,s));const K=l[3].default,h=ue(K,l,l[2],null);return M=new re({}),A=new re({}),{c(){e=d("meta"),o=y(),t=d("div"),n=d("nav"),a=d("ul"),c=d("li"),r=d("a"),b=Y(m),R=y(),z(E.$$.fragment),X=y(),S=d("ul");for(let s=0;s<u.length;s+=1)u[s].c();B=y(),k=d("main"),h&&h.c(),G=y(),w=d("footer"),I=d("span"),z(M.$$.fragment),J=Y("   ▅ ▅ ▅ ▅ ▅ ▅ ▅ ▁ ▁ ▁   "),z(A.$$.fragment),this.h()},l(s){const g=be("svelte-1139iux",document.head);e=p(g,"META",{name:!0,content:!0}),g.forEach(_),o=O(s),t=p(s,"DIV",{class:!0});var f=$(t);n=p(f,"NAV",{class:!0});var C=$(n);a=p(C,"UL",{});var ee=$(a);c=p(ee,"LI",{});var te=$(c);r=p(te,"A",{href:!0});var U=$(r);b=Z(U,m),R=O(U),D(E.$$.fragment,U),U.forEach(_),te.forEach(_),ee.forEach(_),X=O(C),S=p(C,"UL",{});var ae=$(S);for(let Q=0;Q<u.length;Q+=1)u[Q].l(ae);ae.forEach(_),C.forEach(_),B=O(f),k=p(f,"MAIN",{class:!0});var ne=$(k);h&&h.l(ne),ne.forEach(_),G=O(f),w=p(f,"FOOTER",{class:!0});var se=$(w);I=p(se,"SPAN",{});var V=$(I);D(M.$$.fragment,V),J=Z(V,"   ▅ ▅ ▅ ▅ ▅ ▅ ▅ ▁ ▁ ▁   "),D(A.$$.fragment,V),V.forEach(_),se.forEach(_),f.forEach(_),this.h()},h(){v(e,"name","color-scheme"),v(e,"content","light dark"),v(r,"href",N+"/"),v(n,"class","svelte-8hogte"),v(k,"class","svelte-8hogte"),v(w,"class","svelte-8hogte"),v(t,"class","grid-container svelte-8hogte")},m(s,g){i(document.head,e),x(s,o,g),x(s,t,g),i(t,n),i(n,a),i(a,c),i(c,r),i(r,b),i(r,R),F(E,r,null),i(n,X),i(n,S);for(let f=0;f<u.length;f+=1)u[f]&&u[f].m(S,null);i(t,B),i(t,k),h&&h.m(k,null),i(t,G),i(t,w),i(w,I),F(M,I,null),i(I,J),F(A,I,null),j=!0},p(s,[g]){if((!j||g&1)&&m!==(m=s[0].about.name+"")&&ge(b,m),g&3){L=le(s[0].navbarItems);let f;for(f=0;f<L.length;f+=1){const C=ce(s,L,f);u[f]?u[f].p(C,g):(u[f]=fe(C),u[f].c(),u[f].m(S,null))}for(;f<u.length;f+=1)u[f].d(1);u.length=L.length}h&&h.p&&(!j||g&4)&&me(h,K,s,s[2],j?he(K,s[2],g,null):_e(s[2]),null)},i(s){j||(P(E.$$.fragment,s),P(h,s),P(M.$$.fragment,s),P(A.$$.fragment,s),j=!0)},o(s){T(E.$$.fragment,s),T(h,s),T(M.$$.fragment,s),T(A.$$.fragment,s),j=!1},d(s){s&&(_(o),_(t)),_(e),H(E),Ee(u,s),h&&h.d(s),H(M),H(A)}}}function Te(l,e,o){let t;ve(l,je,r=>o(1,t=r));let{$$slots:n={},$$scope:a}=e,{data:c}=e;return l.$$set=r=>{"data"in r&&o(0,c=r.data),"$$scope"in r&&o(2,a=r.$$scope)},[c,t,a,n]}class Xe extends de{constructor(e){super(),pe(this,e,Te,Pe,ie,{data:0})}}export{Xe as component,Re as universal};