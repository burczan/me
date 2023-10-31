import{s as K,n as $,o as ot}from"../chunks/scheduler.e903ca9d.js";import{S as Q,i as X,e as g,c as d,x as ee,g as I,d as h,s as b,a as p,f as x,y as v,h as f,v as le,t as M,b as A,q as xe,H as rt,w as it,k as F,B as ct,l as G,m as U,n as B,o as V,p as O}from"../chunks/index.53a158f6.js";import{e as H}from"../chunks/each.e59479a4.js";import{b as ft}from"../chunks/paths.3767174c.js";const ht=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function ut(c){let e,n=`<figcaption><i class="fa-solid fa-address-book"></i>
    Contact</figcaption> <ul class="hideMarkers"><li><a href="https://burczan.github.io/me/" rel="noopener" target="_blank"><i class="fa-solid fa-globe"></i>
        burczan.github.io/me</a></li> <li><a href="https://www.linkedin.com/in/nataliapospieszynska/" rel="noopener" target="_blank"><i class="fa-brands fa-linkedin"></i>
        /nataliapospieszynska</a></li> <li><a href="https://github.com/burczan" rel="noopener" target="_blank"><i class="fa-brands fa-github"></i>
        /burczan</a></li> <li><a href="https://en.mapy.cz/turisticka?source=dist&amp;id=36&amp;ds=1&amp;x=15.8373076&amp;y=50.5704668&amp;z=10" rel="noopener" target="_blank"><i class="fa-solid fa-location-dot"></i>
        Trutnov,
        <strong>Czechia</strong></a></li></ul>`;return{c(){e=g("figure"),e.innerHTML=n},l(t){e=d(t,"FIGURE",{"data-svelte-h":!0}),ee(e)!=="svelte-1p2iygz"&&(e.innerHTML=n)},m(t,r){I(t,e,r)},p:$,i:$,o:$,d(t){t&&h(e)}}}class Ue extends Q{constructor(e){super(),X(this,e,null,ut,K,{})}}function Be(c,e,n){const t=c.slice();return t[1]=e[n].tech,t[2]=e[n].favourite,t}function gt(c){let e;return{c(){e=g("i"),this.h()},l(n){e=d(n,"I",{class:!0}),p(e).forEach(h),this.h()},h(){v(e,"class","fa-solid fa-heart fa-xs")},m(n,t){I(n,e,t)},d(n){n&&h(e)}}}function Ve(c){let e,n=c[1]+"",t,r,i,o=c[2]&&gt();return{c(){e=g("li"),t=M(n),r=b(),o&&o.c(),i=b()},l(l){e=d(l,"LI",{});var a=p(e);t=A(a,n),r=x(a),o&&o.l(a),i=x(a),a.forEach(h)},m(l,a){I(l,e,a),f(e,t),f(e,r),o&&o.m(e,null),f(e,i)},p:$,d(l){l&&h(e),o&&o.d()}}}function dt(c){let e,n,t=`<i class="fa-solid fa-gears"></i>
    Current techstack`,r,i,o=H(c[0]),l=[];for(let a=0;a<o.length;a+=1)l[a]=Ve(Be(c,o,a));return{c(){e=g("figure"),n=g("figcaption"),n.innerHTML=t,r=b(),i=g("ul");for(let a=0;a<l.length;a+=1)l[a].c();this.h()},l(a){e=d(a,"FIGURE",{});var u=p(e);n=d(u,"FIGCAPTION",{"data-svelte-h":!0}),ee(n)!=="svelte-7ggaa7"&&(n.innerHTML=t),r=x(u),i=d(u,"UL",{class:!0});var s=p(i);for(let m=0;m<l.length;m+=1)l[m].l(s);s.forEach(h),u.forEach(h),this.h()},h(){v(i,"class","hideMarkers")},m(a,u){I(a,e,u),f(e,n),f(e,r),f(e,i);for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(i,null)},p(a,[u]){if(u&1){o=H(a[0]);let s;for(s=0;s<o.length;s+=1){const m=Be(a,o,s);l[s]?l[s].p(m,u):(l[s]=Ve(m),l[s].c(),l[s].m(i,null))}for(;s<l.length;s+=1)l[s].d(1);l.length=o.length}},i:$,o:$,d(a){a&&h(e),le(l,a)}}}function mt(c){return[[{tech:"AWS",favourite:!1},{tech:"Bash",favourite:!1},{tech:"JavaScript",favourite:!1},{tech:"Linux",favourite:!0},{tech:"Node.js",favourite:!0},{tech:"React",favourite:!1},{tech:"Svelte",favourite:!0},{tech:"TypeScript",favourite:!0}]]}class pt extends Q{constructor(e){super(),X(this,e,mt,dt,K,{})}}function Oe(c,e,n){const t=c.slice();return t[1]=e[n].school,t[2]=e[n].degree,t[3]=e[n].dateRange,t}function je(c){let e,n,t,r,i=c[1]+"",o,l,a,u,s=c[2]+"",m,k,J=c[3]+"",C,R;return{c(){e=g("div"),n=g("h3"),t=g("i"),r=b(),o=M(i),l=b(),a=g("h4"),u=new rt(!1),m=b(),k=g("h5"),C=M(J),R=b(),this.h()},l(q){e=d(q,"DIV",{class:!0});var S=p(e);n=d(S,"H3",{class:!0});var L=p(n);t=d(L,"I",{class:!0}),p(t).forEach(h),r=x(L),o=A(L,i),L.forEach(h),l=x(S),a=d(S,"H4",{class:!0});var j=p(a);u=it(j,!1),j.forEach(h),m=x(S),k=d(S,"H5",{class:!0});var w=p(k);C=A(w,J),w.forEach(h),R=x(S),S.forEach(h),this.h()},h(){v(t,"class","fa-solid fa-graduation-cap fa-xs"),v(n,"class","svelte-1267ckz"),u.a=null,v(a,"class","iconWidthIndent"),v(k,"class","iconWidthIndent"),v(e,"class","border-top")},m(q,S){I(q,e,S),f(e,n),f(n,t),f(n,r),f(n,o),f(e,l),f(e,a),u.m(s,a),f(e,m),f(e,k),f(k,C),f(e,R)},p:$,d(q){q&&h(e)}}}function vt(c){let e,n=H(c[0]),t=[];for(let r=0;r<n.length;r+=1)t[r]=je(Oe(c,n,r));return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=xe()},l(r){for(let i=0;i<t.length;i+=1)t[i].l(r);e=xe()},m(r,i){for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(r,i);I(r,e,i)},p(r,[i]){if(i&1){n=H(r[0]);let o;for(o=0;o<n.length;o+=1){const l=Oe(r,n,o);t[o]?t[o].p(l,i):(t[o]=je(l),t[o].c(),t[o].m(e.parentNode,e))}for(;o<t.length;o+=1)t[o].d(1);t.length=n.length}},i:$,o:$,d(r){r&&h(e),le(t,r)}}}function _t(c){return[[{school:"Polish Naval Academy (Gdynia)",degree:"Postgraduate studies, <strong>Cybersecurity</strong>",dateRange:"2019 - 2020"},{school:"Adam Mickiewicz University (Poznań)",degree:"Master studies, <strong>Philosophy</strong>, Social Communication",dateRange:"2013 - 2016"},{school:"Post-Secondary School (Poznań)",degree:"Technician, <strong>Sound Engineering</strong>",dateRange:"2011 - 2013"},{school:"Adam Mickiewicz University (Poznań)",degree:"Bachelor's degree, <strong>Educational/Instructional Technology</strong>",dateRange:"2010 - 2013"}]]}class $t extends Q{constructor(e){super(),X(this,e,_t,vt,K,{})}}function We(c,e,n){const t=c.slice();return t[1]=e[n].role,t[2]=e[n].company,t[3]=e[n].startDate,t[4]=e[n].endDate,t[5]=e[n].description,t}function Je(c,e,n){const t=c.slice();return t[8]=e[n],t}function qe(c){let e,n,t=c[8]+"",r;return{c(){e=g("li"),n=g("span"),r=M(t)},l(i){e=d(i,"LI",{});var o=p(e);n=d(o,"SPAN",{});var l=p(n);r=A(l,t),l.forEach(h),o.forEach(h)},m(i,o){I(i,e,o),f(e,n),f(n,r)},p:$,d(i){i&&h(e)}}}function Ke(c){let e,n,t,r,i,o=c[1]+"",l,a,u=c[2]+"",s,m,k,J=c[3]+"",C,R,q=c[4]+"",S,L,j,w,P=H(c[5]),T=[];for(let y=0;y<P.length;y+=1)T[y]=qe(Je(c,P,y));return{c(){e=g("div"),n=g("h3"),t=g("i"),r=b(),i=g("strong"),l=M(o),a=M(`
      @
      `),s=M(u),m=b(),k=g("h5"),C=M(J),R=M(" - "),S=M(q),L=b(),j=g("ul");for(let y=0;y<T.length;y+=1)T[y].c();w=b(),this.h()},l(y){e=d(y,"DIV",{class:!0});var D=p(e);n=d(D,"H3",{class:!0});var E=p(n);t=d(E,"I",{class:!0}),p(t).forEach(h),r=x(E),i=d(E,"STRONG",{});var Y=p(i);l=A(Y,o),Y.forEach(h),a=A(E,`
      @
      `),s=A(E,u),E.forEach(h),m=x(D),k=d(D,"H5",{class:!0});var W=p(k);C=A(W,J),R=A(W," - "),S=A(W,q),W.forEach(h),L=x(D),j=d(D,"UL",{});var z=p(j);for(let N=0;N<T.length;N+=1)T[N].l(z);z.forEach(h),w=x(D),D.forEach(h),this.h()},h(){v(t,"class","fa-solid fa-person-digging fa-xs"),v(n,"class","svelte-1267ckz"),v(k,"class","iconWidthIndent"),v(e,"class","border-top")},m(y,D){I(y,e,D),f(e,n),f(n,t),f(n,r),f(n,i),f(i,l),f(n,a),f(n,s),f(e,m),f(e,k),f(k,C),f(k,R),f(k,S),f(e,L),f(e,j);for(let E=0;E<T.length;E+=1)T[E]&&T[E].m(j,null);f(e,w)},p(y,D){if(D&1){P=H(y[5]);let E;for(E=0;E<P.length;E+=1){const Y=Je(y,P,E);T[E]?T[E].p(Y,D):(T[E]=qe(Y),T[E].c(),T[E].m(j,null))}for(;E<T.length;E+=1)T[E].d(1);T.length=P.length}},d(y){y&&h(e),le(T,y)}}}function kt(c){let e,n=H(c[0]),t=[];for(let r=0;r<n.length;r+=1)t[r]=Ke(We(c,n,r));return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=xe()},l(r){for(let i=0;i<t.length;i+=1)t[i].l(r);e=xe()},m(r,i){for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(r,i);I(r,e,i)},p(r,[i]){if(i&1){n=H(r[0]);let o;for(o=0;o<n.length;o+=1){const l=We(r,n,o);t[o]?t[o].p(l,i):(t[o]=Ke(l),t[o].c(),t[o].m(e.parentNode,e))}for(;o<t.length;o+=1)t[o].d(1);t.length=n.length}},i:$,o:$,d(r){r&&h(e),le(t,r)}}}function Et(c){return[[{role:"Backend Engineer",company:"Capbase",startDate:"Apr 2021",endDate:"Jul 2022",description:["Delivering new features and improvements to the product","Developing an API for the internal usage","Debugging","Writing unit and integration tests"],skills:["Bash","Node.js","React","Linux","TypeScript","AWS","Express.js"]},{role:"Frontend Engineer",company:"Beta District",startDate:"Dec 2019",endDate:"Aug 2020",description:["Building reusable components for the newly created frontend","Writing unit and integration tests"],skills:["JavaScript","React","GraphQL","TypeScript","Redux","Unit testing"]},{role:"Software Test Engineer",company:"Beta District",startDate:"Jan 2019",endDate:"Nov 2019",description:["Remote mentoring of QA specialist, including introduction into programming and test automation","Writing various kinds of automated tests","Developing functionalities in React"],skills:["Mentoring","Test automation","JavaScript","React","Ruby","API testing"]},{role:"QA Specialist",company:"Beta District",startDate:"Feb 2018",endDate:"Dec 2018",description:["Manual functional and API testing","Working in close cooperation with the developers for the implementation of new functionalities","Testing the production environment after each release"],skills:["Burp Suite","Test automation","Manual testing","JavaScript","Ruby","API testing"]},{role:"Junior QA Specialist",company:"Beta District",startDate:"Apr 2017",endDate:"Jan 2018",description:["Manual testing","Proposing and implementing more efficient testing procedures","Making suggestions for improvements to projects","Finding and reporting bugs"],skills:["Manual testing","API testing"]}]]}class bt extends Q{constructor(e){super(),X(this,e,Et,kt,K,{})}}function xt(c){let e,n=`Handmade with <a href="https://svelte.dev/">Svelte</a>,
  <a href="https://milligram.io/">Milligram</a>,
  <a href="https://fontawesome.com/">Font Awesome</a>, and
  <a href="https://github.com/cognitom/paper-css">Paper CSS</a> by
  <a href="${ft}/cv#contact">me</a>.`;return{c(){e=g("p"),e.innerHTML=n},l(t){e=d(t,"P",{"data-svelte-h":!0}),ee(e)!=="svelte-1wdlt23"&&(e.innerHTML=n)},m(t,r){I(t,e,r)},p:$,i:$,o:$,d(t){t&&h(e)}}}class yt extends Q{constructor(e){super(),X(this,e,null,xt,K,{})}}function Qe(c,e,n){const t=c.slice();return t[1]=e[n],t}function Xe(c){let e,n,t=c[1]+"";return{c(){e=g("li"),n=new rt(!1),this.h()},l(r){e=d(r,"LI",{});var i=p(e);n=it(i,!1),i.forEach(h),this.h()},h(){n.a=null},m(r,i){I(r,e,i),n.m(t,e)},p:$,d(r){r&&h(e)}}}function It(c){let e,n,t=`<i class="fa-solid fa-book-open-reader"></i>
    Happy to learn`,r,i,o=H(c[0]),l=[];for(let a=0;a<o.length;a+=1)l[a]=Xe(Qe(c,o,a));return{c(){e=g("figure"),n=g("figcaption"),n.innerHTML=t,r=b(),i=g("ul");for(let a=0;a<l.length;a+=1)l[a].c();this.h()},l(a){e=d(a,"FIGURE",{});var u=p(e);n=d(u,"FIGCAPTION",{"data-svelte-h":!0}),ee(n)!=="svelte-18qt83d"&&(n.innerHTML=t),r=x(u),i=d(u,"UL",{class:!0});var s=p(i);for(let m=0;m<l.length;m+=1)l[m].l(s);s.forEach(h),u.forEach(h),this.h()},h(){v(i,"class","hideMarkers")},m(a,u){I(a,e,u),f(e,n),f(e,r),f(e,i);for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(i,null)},p(a,[u]){if(u&1){o=H(a[0]);let s;for(s=0;s<o.length;s+=1){const m=Qe(a,o,s);l[s]?l[s].p(m,u):(l[s]=Xe(m),l[s].c(),l[s].m(i,null))}for(;s<l.length;s+=1)l[s].d(1);l.length=o.length}},i:$,o:$,d(a){a&&h(e),le(l,a)}}}function Tt(c){return[["C","C++","C#","Java","Python","Rust","Solidity","(but not limited to)"]]}class St extends Q{constructor(e){super(),X(this,e,Tt,It,K,{})}}function wt(c){let e,n='<div class="left svelte-xzs0ah"><h1 class="svelte-xzs0ah"><strong>Natalia Pospieszyńska</strong></h1></div> <div class="center svelte-xzs0ah"><h1 class="svelte-xzs0ah"><i class="fa-solid fa-code"></i></h1></div> <div class="right svelte-xzs0ah"><h1 class="svelte-xzs0ah"><strong>Software Engineer</strong></h1></div>';return{c(){e=g("div"),e.innerHTML=n,this.h()},l(t){e=d(t,"DIV",{class:!0,"data-svelte-h":!0}),ee(e)!=="svelte-cn285e"&&(e.innerHTML=n),this.h()},h(){v(e,"class","grid-container svelte-xzs0ah")},m(t,r){I(t,e,r)},p:$,i:$,o:$,d(t){t&&h(e)}}}class Ye extends Q{constructor(e){super(),X(this,e,null,wt,K,{})}}function Ze(c,e,n){const t=c.slice();return t[1]=e[n],t}function et(c){let e,n=c[1]+"",t;return{c(){e=g("li"),t=M(n)},l(r){e=d(r,"LI",{});var i=p(e);t=A(i,n),i.forEach(h)},m(r,i){I(r,e,i),f(e,t)},p:$,d(r){r&&h(e)}}}function Lt(c){let e,n,t=`<i class="fa-solid fa-brain"></i>
    Generally interested in`,r,i,o=H(c[0]),l=[];for(let a=0;a<o.length;a+=1)l[a]=et(Ze(c,o,a));return{c(){e=g("figure"),n=g("figcaption"),n.innerHTML=t,r=b(),i=g("ul");for(let a=0;a<l.length;a+=1)l[a].c();this.h()},l(a){e=d(a,"FIGURE",{});var u=p(e);n=d(u,"FIGCAPTION",{"data-svelte-h":!0}),ee(n)!=="svelte-1suog43"&&(n.innerHTML=t),r=x(u),i=d(u,"UL",{class:!0});var s=p(i);for(let m=0;m<l.length;m+=1)l[m].l(s);s.forEach(h),u.forEach(h),this.h()},h(){v(i,"class","hideMarkers")},m(a,u){I(a,e,u),f(e,n),f(e,r),f(e,i);for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(i,null)},p(a,[u]){if(u&1){o=H(a[0]);let s;for(s=0;s<o.length;s+=1){const m=Ze(a,o,s);l[s]?l[s].p(m,u):(l[s]=et(m),l[s].c(),l[s].m(i,null))}for(;s<l.length;s+=1)l[s].d(1);l.length=o.length}},i:$,o:$,d(a){a&&h(e),le(l,a)}}}function Dt(c){return[["Algorithms and Data Structures","Blockchain","Crocheting","DevOps","Distributed Systems","Electronics","Knitting","Machine Learning","Math","Neuroscience","Resilience Engineering","Security","Theoretical Computer Science","Tunisian Crochet","Web3"]]}class Mt extends Q{constructor(e){super(),X(this,e,Dt,Lt,K,{})}}function tt(c,e,n){const t=c.slice();return t[1]=e[n],t}function nt(c){let e,n=c[1]+"",t;return{c(){e=g("li"),t=M(n)},l(r){e=d(r,"LI",{});var i=p(e);t=A(i,n),i.forEach(h)},m(r,i){I(r,e,i),f(e,t)},p:$,d(r){r&&h(e)}}}function At(c){let e,n,t=`<i class="fa-solid fa-people-pulling"></i>
    Soft skils`,r,i,o=H(c[0]),l=[];for(let a=0;a<o.length;a+=1)l[a]=nt(tt(c,o,a));return{c(){e=g("figure"),n=g("figcaption"),n.innerHTML=t,r=b(),i=g("ul");for(let a=0;a<l.length;a+=1)l[a].c();this.h()},l(a){e=d(a,"FIGURE",{});var u=p(e);n=d(u,"FIGCAPTION",{"data-svelte-h":!0}),ee(n)!=="svelte-lqgldl"&&(n.innerHTML=t),r=x(u),i=d(u,"UL",{class:!0});var s=p(i);for(let m=0;m<l.length;m+=1)l[m].l(s);s.forEach(h),u.forEach(h),this.h()},h(){v(i,"class","hideMarkers")},m(a,u){I(a,e,u),f(e,n),f(e,r),f(e,i);for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(i,null)},p(a,[u]){if(u&1){o=H(a[0]);let s;for(s=0;s<o.length;s+=1){const m=tt(a,o,s);l[s]?l[s].p(m,u):(l[s]=nt(m),l[s].c(),l[s].m(i,null))}for(;s<l.length;s+=1)l[s].d(1);l.length=o.length}},i:$,o:$,d(a){a&&h(e),le(l,a)}}}function Ht(c){return[["Analytical skills","Attention to detail","Laziness","Mentoring","Open-mindedness","Problem solving","Remote working","Self learning"]]}class Ct extends Q{constructor(e){super(),X(this,e,Ht,At,K,{})}}function lt(c,e,n){const t=c.slice();return t[1]=e[n].language,t[2]=e[n].level,t}function at(c){let e,n,t=c[1]+"",r,i,o,l,a=c[2]+"",u,s;return{c(){e=g("li"),n=g("strong"),r=M(t),i=b(),o=g("br"),l=M(`
        (`),u=M(a),s=M(`)
      `)},l(m){e=d(m,"LI",{});var k=p(e);n=d(k,"STRONG",{});var J=p(n);r=A(J,t),J.forEach(h),i=x(k),o=d(k,"BR",{}),l=A(k,`
        (`),u=A(k,a),s=A(k,`)
      `),k.forEach(h)},m(m,k){I(m,e,k),f(e,n),f(n,r),f(e,i),f(e,o),f(e,l),f(e,u),f(e,s)},p:$,d(m){m&&h(e)}}}function Rt(c){let e,n,t=`<i class="fa-solid fa-language"></i>
    Spoken languages`,r,i,o=H(c[0]),l=[];for(let a=0;a<o.length;a+=1)l[a]=at(lt(c,o,a));return{c(){e=g("figure"),n=g("figcaption"),n.innerHTML=t,r=b(),i=g("ul");for(let a=0;a<l.length;a+=1)l[a].c();this.h()},l(a){e=d(a,"FIGURE",{});var u=p(e);n=d(u,"FIGCAPTION",{"data-svelte-h":!0}),ee(n)!=="svelte-xegcir"&&(n.innerHTML=t),r=x(u),i=d(u,"UL",{class:!0});var s=p(i);for(let m=0;m<l.length;m+=1)l[m].l(s);s.forEach(h),u.forEach(h),this.h()},h(){v(i,"class","hideMarkers")},m(a,u){I(a,e,u),f(e,n),f(e,r),f(e,i);for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(i,null)},p(a,[u]){if(u&1){o=H(a[0]);let s;for(s=0;s<o.length;s+=1){const m=lt(a,o,s);l[s]?l[s].p(m,u):(l[s]=at(m),l[s].c(),l[s].m(i,null))}for(;s<l.length;s+=1)l[s].d(1);l.length=o.length}},i:$,o:$,d(a){a&&h(e),le(l,a)}}}function zt(c){return[[{language:"Polish",level:"Native proficiency"},{language:"English",level:"Full professional proficiency"},{language:"Czech",level:"Limited working proficiency"}]]}class Pt extends Q{constructor(e){super(),X(this,e,zt,Rt,K,{})}}function Nt(c){let e,n=`<figcaption><i class="fa-solid fa-user-pen"></i>
    Summary</figcaption> <ul class="hideMarkers"><li><p>Software engineer with a background in <strong>software testing</strong>.</p></li> <li><p>Interested primarily in <strong>backend development</strong> in
        <strong>TypeScript</strong> <br/> but also <strong>open</strong> to other
        technologies.</p></li> <li><p>Focused on writing a <strong>clean</strong>,
        <strong>understandable</strong>, and <strong>high quality</strong> code.</p></li></ul>`;return{c(){e=g("figure"),e.innerHTML=n},l(t){e=d(t,"FIGURE",{"data-svelte-h":!0}),ee(e)!=="svelte-y8z2y2"&&(e.innerHTML=n)},m(t,r){I(t,e,r)},p:$,i:$,o:$,d(t){t&&h(e)}}}class st extends Q{constructor(e){super(),X(this,e,null,Nt,K,{})}}const{document:be}=ht;function Ft(c){let e,n,t,r,i,o,l,a,u,s,m,k,J,C,R,q,S,L,j,w,P,T,y,D,E,Y,W,z,N,he,ae,ye,ue,se,Ie,ge,re,Te,de,ie,Se,te,oe,we,ce,Le,me,fe,ke;return u=new Ye({}),k=new st({}),R=new Ue({}),L=new bt({}),P=new pt({}),y=new St({}),E=new Pt({}),ae=new Ye({}),se=new st({}),re=new Ue({}),ie=new $t({}),oe=new Ct({}),ce=new Mt({}),fe=new yt({}),{c(){e=g("link"),n=g("link"),t=g("link"),r=b(),i=g("div"),o=g("div"),l=g("header"),a=g("div"),F(u.$$.fragment),s=b(),m=g("div"),F(k.$$.fragment),J=b(),C=g("div"),F(R.$$.fragment),q=b(),S=g("main"),F(L.$$.fragment),j=b(),w=g("aside"),F(P.$$.fragment),T=b(),F(y.$$.fragment),D=b(),F(E.$$.fragment),Y=b(),W=g("div"),z=g("div"),N=g("header"),he=g("div"),F(ae.$$.fragment),ye=b(),ue=g("div"),F(se.$$.fragment),Ie=b(),ge=g("div"),F(re.$$.fragment),Te=b(),de=g("main"),F(ie.$$.fragment),Se=b(),te=g("aside"),F(oe.$$.fragment),we=b(),F(ce.$$.fragment),Le=b(),me=g("footer"),F(fe.$$.fragment),this.h()},l(_){const Z=ct("svelte-1u35q2r",be.head);e=d(Z,"LINK",{rel:!0,href:!0}),n=d(Z,"LINK",{rel:!0,href:!0}),t=d(Z,"LINK",{rel:!0,href:!0}),Z.forEach(h),r=x(_),i=d(_,"DIV",{id:!0,class:!0});var De=p(i);o=d(De,"DIV",{class:!0});var pe=p(o);l=d(pe,"HEADER",{class:!0});var ve=p(l);a=d(ve,"DIV",{class:!0});var Me=p(a);G(u.$$.fragment,Me),Me.forEach(h),s=x(ve),m=d(ve,"DIV",{class:!0});var Ae=p(m);G(k.$$.fragment,Ae),Ae.forEach(h),J=x(ve),C=d(ve,"DIV",{id:!0,class:!0});var He=p(C);G(R.$$.fragment,He),He.forEach(h),ve.forEach(h),q=x(pe),S=d(pe,"MAIN",{class:!0});var Ce=p(S);G(L.$$.fragment,Ce),Ce.forEach(h),j=x(pe),w=d(pe,"ASIDE",{class:!0});var _e=p(w);G(P.$$.fragment,_e),T=x(_e),G(y.$$.fragment,_e),D=x(_e),G(E.$$.fragment,_e),_e.forEach(h),pe.forEach(h),De.forEach(h),Y=x(_),W=d(_,"DIV",{id:!0,class:!0});var Re=p(W);z=d(Re,"DIV",{class:!0});var ne=p(z);N=d(ne,"HEADER",{class:!0});var $e=p(N);he=d($e,"DIV",{class:!0});var ze=p(he);G(ae.$$.fragment,ze),ze.forEach(h),ye=x($e),ue=d($e,"DIV",{class:!0});var Pe=p(ue);G(se.$$.fragment,Pe),Pe.forEach(h),Ie=x($e),ge=d($e,"DIV",{class:!0});var Ne=p(ge);G(re.$$.fragment,Ne),Ne.forEach(h),$e.forEach(h),Te=x(ne),de=d(ne,"MAIN",{class:!0});var Fe=p(de);G(ie.$$.fragment,Fe),Fe.forEach(h),Se=x(ne),te=d(ne,"ASIDE",{class:!0});var Ee=p(te);G(oe.$$.fragment,Ee),we=x(Ee),G(ce.$$.fragment,Ee),Ee.forEach(h),Le=x(ne),me=d(ne,"FOOTER",{class:!0});var Ge=p(me);G(fe.$$.fragment,Ge),Ge.forEach(h),ne.forEach(h),Re.forEach(h),this.h()},h(){v(e,"rel","stylesheet"),v(e,"href","https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css"),v(n,"rel","stylesheet"),v(n,"href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"),v(t,"rel","stylesheet"),v(t,"href","https://cdnjs.cloudflare.com/ajax/libs/paper-css/0.4.1/paper.min.css"),v(a,"class","headline svelte-gx99oh"),v(m,"class","summary svelte-gx99oh"),v(C,"id","contact"),v(C,"class","contact svelte-gx99oh"),v(l,"class","header svelte-gx99oh"),v(S,"class","main svelte-gx99oh"),v(w,"class","sidebar svelte-gx99oh"),v(o,"class","container grid-container svelte-gx99oh"),v(i,"id","page1"),v(i,"class","sheet"),v(he,"class","headline svelte-gx99oh"),v(ue,"class","summary svelte-gx99oh"),v(ge,"class","contact svelte-gx99oh"),v(N,"class","header svelte-gx99oh"),v(de,"class","main svelte-gx99oh"),v(te,"class","sidebar svelte-gx99oh"),v(me,"class","footer svelte-gx99oh"),v(z,"class","container grid-container svelte-gx99oh"),v(W,"id","page2"),v(W,"class","sheet")},m(_,Z){f(be.head,e),f(be.head,n),f(be.head,t),I(_,r,Z),I(_,i,Z),f(i,o),f(o,l),f(l,a),U(u,a,null),f(l,s),f(l,m),U(k,m,null),f(l,J),f(l,C),U(R,C,null),f(o,q),f(o,S),U(L,S,null),f(o,j),f(o,w),U(P,w,null),f(w,T),U(y,w,null),f(w,D),U(E,w,null),I(_,Y,Z),I(_,W,Z),f(W,z),f(z,N),f(N,he),U(ae,he,null),f(N,ye),f(N,ue),U(se,ue,null),f(N,Ie),f(N,ge),U(re,ge,null),f(z,Te),f(z,de),U(ie,de,null),f(z,Se),f(z,te),U(oe,te,null),f(te,we),U(ce,te,null),f(z,Le),f(z,me),U(fe,me,null),ke=!0},p:$,i(_){ke||(B(u.$$.fragment,_),B(k.$$.fragment,_),B(R.$$.fragment,_),B(L.$$.fragment,_),B(P.$$.fragment,_),B(y.$$.fragment,_),B(E.$$.fragment,_),B(ae.$$.fragment,_),B(se.$$.fragment,_),B(re.$$.fragment,_),B(ie.$$.fragment,_),B(oe.$$.fragment,_),B(ce.$$.fragment,_),B(fe.$$.fragment,_),ke=!0)},o(_){V(u.$$.fragment,_),V(k.$$.fragment,_),V(R.$$.fragment,_),V(L.$$.fragment,_),V(P.$$.fragment,_),V(y.$$.fragment,_),V(E.$$.fragment,_),V(ae.$$.fragment,_),V(se.$$.fragment,_),V(re.$$.fragment,_),V(ie.$$.fragment,_),V(oe.$$.fragment,_),V(ce.$$.fragment,_),V(fe.$$.fragment,_),ke=!1},d(_){_&&(h(r),h(i),h(Y),h(W)),h(e),h(n),h(t),O(u),O(k),O(R),O(L),O(P),O(y),O(E),O(ae),O(se),O(re),O(ie),O(oe),O(ce),O(fe)}}}function Gt(c){return ot(()=>{document.body.classList.add("A4"),document.querySelectorAll('i[class^="fa-"]').forEach(n=>{n.classList.add("fa-fw")})}),[]}class jt extends Q{constructor(e){super(),X(this,e,Gt,Ft,K,{})}}export{jt as component};
