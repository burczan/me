import{p as j}from"../chunks/index.c6828150.js";import{s as S,n as f}from"../chunks/scheduler.4a803514.js";import{S as k,i as x,y as h,g as b,d as i,v as E,e as _,t as O,c as u,a as d,b as P,u as m,h as p,j as q}from"../chunks/index.6cb2e47b.js";import{e as g}from"../chunks/Icon.ff8c5fdb.js";const z=async()=>({projects:j}),T=Object.freeze(Object.defineProperty({__proto__:null,load:z},Symbol.toStringTag,{value:"Module"}));function v(o,l,n){const e=o.slice();return e[1]=l[n],e}function y(o){let l,n,e=o[1].title+"",t,r;return{c(){l=_("li"),n=_("a"),t=O(e),this.h()},l(a){l=u(a,"LI",{});var s=d(l);n=u(s,"A",{href:!0});var c=d(n);t=P(c,e),c.forEach(i),s.forEach(i),this.h()},h(){m(n,"href",r=o[1].slug)},m(a,s){b(a,l,s),p(l,n),p(n,t)},p(a,s){s&1&&e!==(e=a[1].title+"")&&q(t,e),s&1&&r!==(r=a[1].slug)&&m(n,"href",r)},d(a){a&&i(l)}}}function A(o){let l,n=g(o[0].projects),e=[];for(let t=0;t<n.length;t+=1)e[t]=y(v(o,n,t));return{c(){for(let t=0;t<e.length;t+=1)e[t].c();l=h()},l(t){for(let r=0;r<e.length;r+=1)e[r].l(t);l=h()},m(t,r){for(let a=0;a<e.length;a+=1)e[a]&&e[a].m(t,r);b(t,l,r)},p(t,[r]){if(r&1){n=g(t[0].projects);let a;for(a=0;a<n.length;a+=1){const s=v(t,n,a);e[a]?e[a].p(s,r):(e[a]=y(s),e[a].c(),e[a].m(l.parentNode,l))}for(;a<e.length;a+=1)e[a].d(1);e.length=n.length}},i:f,o:f,d(t){t&&i(l),E(e,t)}}}function C(o,l,n){let{data:e}=l;return o.$$set=t=>{"data"in t&&n(0,e=t.data)},[e]}class w extends k{constructor(l){super(),x(this,l,C,A,S,{data:0})}}export{w as component,T as universal};
