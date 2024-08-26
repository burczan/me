import{s as Te,a as ce,e as be,b as Ue,u as He,g as Re,d as Ve,f as qe}from"../chunks/scheduler.cac8211d.js";import{S as De,i as xe,k as fe,l as ue,m as de,n as Z,o as ee,p as he,s as I,e as f,t as U,f as S,c as u,a as y,b as H,d,q as W,u as w,g as F,h as i,w as ie,j as te}from"../chunks/index.bfe29077.js";import{e as O}from"../chunks/each.e59479a4.js";import{S as Ne}from"../chunks/SvelteHead.8790231a.js";import{I as Pe,g as je,a as Ge}from"../chunks/Icon.30b09c37.js";function Ye(r){let e;const o=r[2].default,t=Ue(o,r,r[3],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,n){t&&t.m(s,n),e=!0},p(s,n){t&&t.p&&(!e||n&8)&&He(t,o,s,s[3],e?Ve(o,s[3],n,null):Re(s[3]),null)},i(s){e||(Z(t,s),e=!0)},o(s){ee(t,s),e=!1},d(s){t&&t.d(s)}}}function ze(r){let e,o;const t=[{name:"ghost"},r[1],{iconNode:r[0]}];let s={$$slots:{default:[Ye]},$$scope:{ctx:r}};for(let n=0;n<t.length;n+=1)s=ce(s,t[n]);return e=new Pe({props:s}),{c(){fe(e.$$.fragment)},l(n){ue(e.$$.fragment,n)},m(n,c){de(e,n,c),o=!0},p(n,[c]){const k=c&3?je(t,[t[0],c&2&&Ge(n[1]),c&1&&{iconNode:n[0]}]):{};c&8&&(k.$$scope={dirty:c,ctx:n}),e.$set(k)},i(n){o||(Z(e.$$.fragment,n),o=!0)},o(n){ee(e.$$.fragment,n),o=!1},d(n){he(e,n)}}}function Be(r,e,o){let{$$slots:t={},$$scope:s}=e;const n=[["path",{d:"M9 10h.01"}],["path",{d:"M15 10h.01"}],["path",{d:"M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"}]];return r.$$set=c=>{o(1,e=ce(ce({},e),be(c))),"$$scope"in c&&o(3,s=c.$$scope)},e=be(e),[n,e,t,s]}class Oe extends De{constructor(e){super(),xe(this,e,Be,ze,Te,{})}}const We=Oe;function Ie(r,e,o){const t=r.slice();return t[1]=e[o],t}function Se(r,e,o){const t=r.slice();return t[4]=e[o].language,t[5]=e[o].level,t}function Le(r,e,o){const t=r.slice();return t[8]=e[o],t}function Me(r){let e,o=r[8]+"",t;return{c(){e=f("li"),t=U(o)},l(s){e=u(s,"LI",{});var n=y(e);t=H(n,o),n.forEach(d)},m(s,n){F(s,e,n),i(e,t)},p(s,n){n&1&&o!==(o=s[8]+"")&&te(t,o)},d(s){s&&d(e)}}}function Ae(r){let e,o,t=r[4]+"",s,n,c=r[5]+"",k,g;return{c(){e=f("li"),o=f("strong"),s=U(t),n=U(" ("),k=U(c),g=U(")")},l(v){e=u(v,"LI",{});var E=y(e);o=u(E,"STRONG",{});var R=y(o);s=H(R,t),R.forEach(d),n=H(E," ("),k=H(E,c),g=H(E,")"),E.forEach(d)},m(v,E){F(v,e,E),i(e,o),i(o,s),i(e,n),i(e,k),i(e,g)},p(v,E){E&1&&t!==(t=v[4]+"")&&te(s,t),E&1&&c!==(c=v[5]+"")&&te(k,c)},d(v){v&&d(e)}}}function Ce(r){let e,o=r[1]+"",t;return{c(){e=f("li"),t=U(o)},l(s){e=u(s,"LI",{});var n=y(e);t=H(n,o),n.forEach(d)},m(s,n){F(s,e,n),i(e,t)},p(s,n){n&1&&o!==(o=s[1]+"")&&te(t,o)},d(s){s&&d(e)}}}function Fe(r){let e,o,t,s,n,c,k,g,v,E=`<summary class="svelte-1p9w6yn">My code compiles, therefore I am</summary> <div class="content svelte-1p9w6yn"><p>I approach software development with a strong focus on <strong>quality</strong>
          and <strong>craftsmanship</strong>. I take pride in writing
          <strong>clean</strong>
          and
          <strong>maintainable</strong> code, always striving to choose the right
          tools to deliver optimal solutions.</p> <p>In my free time, I enjoy <strong>crocheting</strong>, which reflects
          my appreciation for craftsmanship, and helps me maintain a healthy
          work-life balance.</p></div>`,R,L,C,ge="Soft Skills Daemon: Running in the Background",le,V,q,se,T,me=`<summary class="svelte-1p9w6yn">Blocks, Chains, and Data Pains</summary> <div class="content svelte-1p9w6yn"><p>I have a growing interest in <strong>blockchain</strong>,
          <strong>data science</strong>, and
          <strong>artificial intelligence</strong>.</p> <p>While my academic background is not in STEM, my commitment to <strong>continuous learning</strong>, driven by a
          <strong>growth mindset</strong>, and followed by fascination for
          <strong>algorithms</strong> and <strong>data structures</strong>,
          <strong>mathematics</strong>, and theoretical
          <strong>computer science</strong> drive me to explore these fields.</p></div>`,ne,M,D,_e="Speech API: Running on Multiple Ports",ae,N,P,oe,A,x,pe="Hacks & Stacks: My Toolkit Unpacked",re,j,G,J;e=new Ne({props:{title:"About me"}}),n=new We({props:{class:"icon-h2"}});let Y=O(r[0].softSkills),m=[];for(let a=0;a<Y.length;a+=1)m[a]=Me(Le(r,Y,a));let z=O(r[0].spokenLanguages),_=[];for(let a=0;a<z.length;a+=1)_[a]=Ae(Se(r,z,a));let B=O(r[0].technologies),p=[];for(let a=0;a<B.length;a+=1)p[a]=Ce(Ie(r,B,a));return{c(){fe(e.$$.fragment),o=I(),t=f("div"),s=f("h2"),fe(n.$$.fragment),c=U(" About me"),k=I(),g=f("div"),v=f("details"),v.innerHTML=E,R=I(),L=f("details"),C=f("summary"),C.textContent=ge,le=I(),V=f("div"),q=f("ul");for(let a=0;a<m.length;a+=1)m[a].c();se=I(),T=f("details"),T.innerHTML=me,ne=I(),M=f("details"),D=f("summary"),D.textContent=_e,ae=I(),N=f("div"),P=f("ul");for(let a=0;a<_.length;a+=1)_[a].c();oe=I(),A=f("details"),x=f("summary"),x.textContent=pe,re=I(),j=f("div"),G=f("ul");for(let a=0;a<p.length;a+=1)p[a].c();this.h()},l(a){ue(e.$$.fragment,a),o=S(a),t=u(a,"DIV",{id:!0});var $=y(t);s=u($,"H2",{class:!0});var l=y(s);ue(n.$$.fragment,l),c=H(l," About me"),l.forEach(d),k=S($),g=u($,"DIV",{class:!0});var h=y(g);v=u(h,"DETAILS",{class:!0,"data-svelte-h":!0}),W(v)!=="svelte-11zqg98"&&(v.innerHTML=E),R=S(h),L=u(h,"DETAILS",{class:!0});var K=y(L);C=u(K,"SUMMARY",{class:!0,"data-svelte-h":!0}),W(C)!=="svelte-1tfsl9v"&&(C.textContent=ge),le=S(K),V=u(K,"DIV",{class:!0});var ve=y(V);q=u(ve,"UL",{});var ye=y(q);for(let b=0;b<m.length;b+=1)m[b].l(ye);ye.forEach(d),ve.forEach(d),K.forEach(d),se=S(h),T=u(h,"DETAILS",{class:!0,"data-svelte-h":!0}),W(T)!=="svelte-oxet7l"&&(T.innerHTML=me),ne=S(h),M=u(h,"DETAILS",{class:!0});var Q=y(M);D=u(Q,"SUMMARY",{class:!0,"data-svelte-h":!0}),W(D)!=="svelte-1cndppo"&&(D.textContent=_e),ae=S(Q),N=u(Q,"DIV",{class:!0});var $e=y(N);P=u($e,"UL",{});var we=y(P);for(let b=0;b<_.length;b+=1)_[b].l(we);we.forEach(d),$e.forEach(d),Q.forEach(d),oe=S(h),A=u(h,"DETAILS",{class:!0});var X=y(A);x=u(X,"SUMMARY",{class:!0,"data-svelte-h":!0}),W(x)!=="svelte-5phrdu"&&(x.textContent=pe),re=S(X),j=u(X,"DIV",{class:!0});var Ee=y(j);G=u(Ee,"UL",{});var ke=y(G);for(let b=0;b<p.length;b+=1)p[b].l(ke);ke.forEach(d),Ee.forEach(d),X.forEach(d),h.forEach(d),$.forEach(d),this.h()},h(){w(s,"class","yellow"),w(v,"class","svelte-1p9w6yn"),w(C,"class","svelte-1p9w6yn"),w(V,"class","content svelte-1p9w6yn"),w(L,"class","svelte-1p9w6yn"),w(T,"class","svelte-1p9w6yn"),w(D,"class","svelte-1p9w6yn"),w(N,"class","content svelte-1p9w6yn"),w(M,"class","svelte-1p9w6yn"),w(x,"class","svelte-1p9w6yn"),w(j,"class","content svelte-1p9w6yn"),w(A,"class","svelte-1p9w6yn"),w(g,"class","box"),w(t,"id","about-me")},m(a,$){de(e,a,$),F(a,o,$),F(a,t,$),i(t,s),de(n,s,null),i(s,c),i(t,k),i(t,g),i(g,v),i(g,R),i(g,L),i(L,C),i(L,le),i(L,V),i(V,q);for(let l=0;l<m.length;l+=1)m[l]&&m[l].m(q,null);i(g,se),i(g,T),i(g,ne),i(g,M),i(M,D),i(M,ae),i(M,N),i(N,P);for(let l=0;l<_.length;l+=1)_[l]&&_[l].m(P,null);i(g,oe),i(g,A),i(A,x),i(A,re),i(A,j),i(j,G);for(let l=0;l<p.length;l+=1)p[l]&&p[l].m(G,null);J=!0},p(a,[$]){if($&1){Y=O(a[0].softSkills);let l;for(l=0;l<Y.length;l+=1){const h=Le(a,Y,l);m[l]?m[l].p(h,$):(m[l]=Me(h),m[l].c(),m[l].m(q,null))}for(;l<m.length;l+=1)m[l].d(1);m.length=Y.length}if($&1){z=O(a[0].spokenLanguages);let l;for(l=0;l<z.length;l+=1){const h=Se(a,z,l);_[l]?_[l].p(h,$):(_[l]=Ae(h),_[l].c(),_[l].m(P,null))}for(;l<_.length;l+=1)_[l].d(1);_.length=z.length}if($&1){B=O(a[0].technologies);let l;for(l=0;l<B.length;l+=1){const h=Ie(a,B,l);p[l]?p[l].p(h,$):(p[l]=Ce(h),p[l].c(),p[l].m(G,null))}for(;l<p.length;l+=1)p[l].d(1);p.length=B.length}},i(a){J||(Z(e.$$.fragment,a),Z(n.$$.fragment,a),J=!0)},o(a){ee(e.$$.fragment,a),ee(n.$$.fragment,a),J=!1},d(a){a&&(d(o),d(t)),he(e,a),he(n),ie(m,a),ie(_,a),ie(p,a)}}}function Je(r,e,o){let{data:t}=e;return qe(()=>{const s=document.querySelectorAll("details");s.forEach(n=>{n.addEventListener("click",()=>{s.forEach(c=>{c!==n&&c.removeAttribute("open")})})})}),r.$$set=s=>{"data"in s&&o(0,t=s.data)},[t]}class tt extends De{constructor(e){super(),xe(this,e,Je,Fe,Te,{data:0})}}export{tt as component};
