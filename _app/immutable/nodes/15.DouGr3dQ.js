import{p as j}from"../chunks/index.BDSgt2Rw.js";import{s as y,n as u}from"../chunks/scheduler.UCFHsqob.js";import{S,i as k,e as c,c as f,a as h,d as i,g as b,v as x,t as E,b as L,u as d,h as m,j as O}from"../chunks/index.BY5Ryio2.js";import{e as p}from"../chunks/each.D6YF6ztN.js";const P=async()=>({projects:j}),T=Object.freeze(Object.defineProperty({__proto__:null,load:P},Symbol.toStringTag,{value:"Module"}));function g(o,l,n){const t=o.slice();return t[1]=l[n],t}function v(o){let l,n,t=o[1].title+"",a,r;return{c(){l=c("li"),n=c("a"),a=E(t),this.h()},l(e){l=f(e,"LI",{});var s=h(l);n=f(s,"A",{href:!0});var _=h(n);a=L(_,t),_.forEach(i),s.forEach(i),this.h()},h(){d(n,"href",r=o[1].slug)},m(e,s){b(e,l,s),m(l,n),m(n,a)},p(e,s){s&1&&t!==(t=e[1].title+"")&&O(a,t),s&1&&r!==(r=e[1].slug)&&d(n,"href",r)},d(e){e&&i(l)}}}function q(o){let l,n=p(o[0].projects),t=[];for(let a=0;a<n.length;a+=1)t[a]=v(g(o,n,a));return{c(){l=c("ul");for(let a=0;a<t.length;a+=1)t[a].c()},l(a){l=f(a,"UL",{});var r=h(l);for(let e=0;e<t.length;e+=1)t[e].l(r);r.forEach(i)},m(a,r){b(a,l,r);for(let e=0;e<t.length;e+=1)t[e]&&t[e].m(l,null)},p(a,[r]){if(r&1){n=p(a[0].projects);let e;for(e=0;e<n.length;e+=1){const s=g(a,n,e);t[e]?t[e].p(s,r):(t[e]=v(s),t[e].c(),t[e].m(l,null))}for(;e<t.length;e+=1)t[e].d(1);t.length=n.length}},i:u,o:u,d(a){a&&i(l),x(t,a)}}}function z(o,l,n){let{data:t}=l;return o.$$set=a=>{"data"in a&&n(0,t=a.data)},[t]}class U extends S{constructor(l){super(),k(this,l,z,q,y,{data:0})}}export{U as component,T as universal};
