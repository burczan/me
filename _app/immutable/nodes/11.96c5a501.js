import{s as De,a as ce,e as Se,b as Ue,u as He,g as Re,d as Ve,f as qe}from"../chunks/scheduler.4a803514.js";import{S as we,i as xe,k as fe,l as ue,m as de,n as Z,o as ee,p as he,s as S,e as f,t as C,f as L,c as u,a as v,b as T,d,q as W,u as B,g as F,h as i,v as ie,j as te}from"../chunks/index.6cb2e47b.js";import{I as Ne,g as Pe,a as je,e as O}from"../chunks/Icon.ff8c5fdb.js";import{S as Ge}from"../chunks/SvelteHead.b07b70d2.js";function Ye(r){let e;const o=r[2].default,t=Ue(o,r,r[3],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,a){t&&t.m(l,a),e=!0},p(l,a){t&&t.p&&(!e||a&8)&&He(t,o,l,l[3],e?Ve(o,l[3],a,null):Re(l[3]),null)},i(l){e||(Z(t,l),e=!0)},o(l){ee(t,l),e=!1},d(l){t&&t.d(l)}}}function ze(r){let e,o;const t=[{name:"ghost"},r[1],{iconNode:r[0]}];let l={$$slots:{default:[Ye]},$$scope:{ctx:r}};for(let a=0;a<t.length;a+=1)l=ce(l,t[a]);return e=new Ne({props:l}),{c(){fe(e.$$.fragment)},l(a){ue(e.$$.fragment,a)},m(a,c){de(e,a,c),o=!0},p(a,[c]){const b=c&3?Pe(t,[t[0],c&2&&je(a[1]),c&1&&{iconNode:a[0]}]):{};c&8&&(b.$$scope={dirty:c,ctx:a}),e.$set(b)},i(a){o||(Z(e.$$.fragment,a),o=!0)},o(a){ee(e.$$.fragment,a),o=!1},d(a){he(e,a)}}}function Be(r,e,o){let{$$slots:t={},$$scope:l}=e;const a=[["path",{d:"M9 10h.01"}],["path",{d:"M15 10h.01"}],["path",{d:"M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"}]];return r.$$set=c=>{o(1,e=ce(ce({},e),Se(c))),"$$scope"in c&&o(3,l=c.$$scope)},e=Se(e),[a,e,t,l]}class Oe extends we{constructor(e){super(),xe(this,e,Be,ze,De,{})}}const We=Oe;function Le(r,e,o){const t=r.slice();return t[1]=e[o],t}function ye(r,e,o){const t=r.slice();return t[4]=e[o].language,t[5]=e[o].level,t}function Me(r,e,o){const t=r.slice();return t[8]=e[o],t}function Ae(r){let e,o=r[8]+"",t;return{c(){e=f("li"),t=C(o)},l(l){e=u(l,"LI",{});var a=v(e);t=T(a,o),a.forEach(d)},m(l,a){F(l,e,a),i(e,t)},p(l,a){a&1&&o!==(o=l[8]+"")&&te(t,o)},d(l){l&&d(e)}}}function Ce(r){let e,o,t=r[4]+"",l,a,c=r[5]+"",b,g;return{c(){e=f("li"),o=f("strong"),l=C(t),a=C(" ("),b=C(c),g=C(")")},l($){e=u($,"LI",{});var k=v(e);o=u(k,"STRONG",{});var D=v(o);l=T(D,t),D.forEach(d),a=T(k," ("),b=T(k,c),g=T(k,")"),k.forEach(d)},m($,k){F($,e,k),i(e,o),i(o,l),i(e,a),i(e,b),i(e,g)},p($,k){k&1&&t!==(t=$[4]+"")&&te(l,t),k&1&&c!==(c=$[5]+"")&&te(b,c)},d($){$&&d(e)}}}function Te(r){let e,o=r[1]+"",t;return{c(){e=f("li"),t=C(o)},l(l){e=u(l,"LI",{});var a=v(e);t=T(a,o),a.forEach(d)},m(l,a){F(l,e,a),i(e,t)},p(l,a){a&1&&o!==(o=l[1]+"")&&te(t,o)},d(l){l&&d(e)}}}function Fe(r){let e,o,t,l,a,c,b,g,$,k=`<summary>My code compiles, therefore I am</summary> <div class="content"><p>I approach software development with a strong focus on <strong>quality</strong>
          and <strong>craftsmanship</strong>. I take pride in writing
          <strong>clean</strong>
          and
          <strong>maintainable</strong> code, always striving to choose the right
          tools to deliver optimal solutions.</p> <p>In my free time, I enjoy <strong>crocheting</strong>, which reflects
          my appreciation for craftsmanship, and helps me maintain a healthy
          work-life balance.</p></div>`,D,y,w,ge="Soft Skills Daemon: Running in the Background",ne,x,U,le,H,me=`<summary>Blocks, Chains, and Data Pains</summary> <div class="content"><p>I have a growing interest in <strong>blockchain</strong>,
          <strong>data science</strong>, and
          <strong>artificial intelligence</strong>.</p> <p>While my academic background is not in STEM, my commitment to <strong>continuous learning</strong>, driven by a
          <strong>growth mindset</strong>, and followed by fascination for
          <strong>algorithms</strong> and <strong>data structures</strong>,
          <strong>mathematics</strong>, and theoretical
          <strong>computer science</strong> drive me to explore these fields.</p></div>`,ae,M,R,_e="Speech API: Running on Multiple Ports",se,V,q,oe,A,N,pe="Hacks & Stacks: My Toolkit Unpacked",re,P,j,J;e=new Ge({props:{title:"About me"}}),a=new We({props:{class:"icon-h2"}});let G=O(r[0].softSkills),m=[];for(let s=0;s<G.length;s+=1)m[s]=Ae(Me(r,G,s));let Y=O(r[0].spokenLanguages),_=[];for(let s=0;s<Y.length;s+=1)_[s]=Ce(ye(r,Y,s));let z=O(r[0].technologies),p=[];for(let s=0;s<z.length;s+=1)p[s]=Te(Le(r,z,s));return{c(){fe(e.$$.fragment),o=S(),t=f("div"),l=f("h2"),fe(a.$$.fragment),c=C(" About me"),b=S(),g=f("div"),$=f("details"),$.innerHTML=k,D=S(),y=f("details"),w=f("summary"),w.textContent=ge,ne=S(),x=f("div"),U=f("ul");for(let s=0;s<m.length;s+=1)m[s].c();le=S(),H=f("details"),H.innerHTML=me,ae=S(),M=f("details"),R=f("summary"),R.textContent=_e,se=S(),V=f("div"),q=f("ul");for(let s=0;s<_.length;s+=1)_[s].c();oe=S(),A=f("details"),N=f("summary"),N.textContent=pe,re=S(),P=f("div"),j=f("ul");for(let s=0;s<p.length;s+=1)p[s].c();this.h()},l(s){ue(e.$$.fragment,s),o=L(s),t=u(s,"DIV",{id:!0});var E=v(t);l=u(E,"H2",{class:!0});var n=v(l);ue(a.$$.fragment,n),c=T(n," About me"),n.forEach(d),b=L(E),g=u(E,"DIV",{class:!0});var h=v(g);$=u(h,"DETAILS",{"data-svelte-h":!0}),W($)!=="svelte-11zqg98"&&($.innerHTML=k),D=L(h),y=u(h,"DETAILS",{});var K=v(y);w=u(K,"SUMMARY",{"data-svelte-h":!0}),W(w)!=="svelte-1tfsl9v"&&(w.textContent=ge),ne=L(K),x=u(K,"DIV",{class:!0});var ve=v(x);U=u(ve,"UL",{});var $e=v(U);for(let I=0;I<m.length;I+=1)m[I].l($e);$e.forEach(d),ve.forEach(d),K.forEach(d),le=L(h),H=u(h,"DETAILS",{"data-svelte-h":!0}),W(H)!=="svelte-oxet7l"&&(H.innerHTML=me),ae=L(h),M=u(h,"DETAILS",{});var Q=v(M);R=u(Q,"SUMMARY",{"data-svelte-h":!0}),W(R)!=="svelte-1cndppo"&&(R.textContent=_e),se=L(Q),V=u(Q,"DIV",{class:!0});var Ee=v(V);q=u(Ee,"UL",{});var ke=v(q);for(let I=0;I<_.length;I+=1)_[I].l(ke);ke.forEach(d),Ee.forEach(d),Q.forEach(d),oe=L(h),A=u(h,"DETAILS",{});var X=v(A);N=u(X,"SUMMARY",{"data-svelte-h":!0}),W(N)!=="svelte-5phrdu"&&(N.textContent=pe),re=L(X),P=u(X,"DIV",{class:!0});var be=v(P);j=u(be,"UL",{});var Ie=v(j);for(let I=0;I<p.length;I+=1)p[I].l(Ie);Ie.forEach(d),be.forEach(d),X.forEach(d),h.forEach(d),E.forEach(d),this.h()},h(){B(l,"class","orange"),B(x,"class","content"),B(V,"class","content"),B(P,"class","content"),B(g,"class","box"),B(t,"id","about-me")},m(s,E){de(e,s,E),F(s,o,E),F(s,t,E),i(t,l),de(a,l,null),i(l,c),i(t,b),i(t,g),i(g,$),i(g,D),i(g,y),i(y,w),i(y,ne),i(y,x),i(x,U);for(let n=0;n<m.length;n+=1)m[n]&&m[n].m(U,null);i(g,le),i(g,H),i(g,ae),i(g,M),i(M,R),i(M,se),i(M,V),i(V,q);for(let n=0;n<_.length;n+=1)_[n]&&_[n].m(q,null);i(g,oe),i(g,A),i(A,N),i(A,re),i(A,P),i(P,j);for(let n=0;n<p.length;n+=1)p[n]&&p[n].m(j,null);J=!0},p(s,[E]){if(E&1){G=O(s[0].softSkills);let n;for(n=0;n<G.length;n+=1){const h=Me(s,G,n);m[n]?m[n].p(h,E):(m[n]=Ae(h),m[n].c(),m[n].m(U,null))}for(;n<m.length;n+=1)m[n].d(1);m.length=G.length}if(E&1){Y=O(s[0].spokenLanguages);let n;for(n=0;n<Y.length;n+=1){const h=ye(s,Y,n);_[n]?_[n].p(h,E):(_[n]=Ce(h),_[n].c(),_[n].m(q,null))}for(;n<_.length;n+=1)_[n].d(1);_.length=Y.length}if(E&1){z=O(s[0].technologies);let n;for(n=0;n<z.length;n+=1){const h=Le(s,z,n);p[n]?p[n].p(h,E):(p[n]=Te(h),p[n].c(),p[n].m(j,null))}for(;n<p.length;n+=1)p[n].d(1);p.length=z.length}},i(s){J||(Z(e.$$.fragment,s),Z(a.$$.fragment,s),J=!0)},o(s){ee(e.$$.fragment,s),ee(a.$$.fragment,s),J=!1},d(s){s&&(d(o),d(t)),he(e,s),he(a),ie(m,s),ie(_,s),ie(p,s)}}}function Je(r,e,o){let{data:t}=e;return qe(()=>{const l=document.querySelectorAll("details");l.forEach(a=>{a.addEventListener("click",()=>{l.forEach(c=>{c!==a&&c.removeAttribute("open")})})})}),r.$$set=l=>{"data"in l&&o(0,t=l.data)},[t]}class et extends we{constructor(e){super(),xe(this,e,Je,Fe,De,{data:0})}}export{et as component};