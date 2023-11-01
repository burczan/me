import{s as ee,n as p,o as Ke,d as We}from"../chunks/scheduler.e903ca9d.js";import{S as te,i as le,e as f,s as I,t as L,c as h,a as d,y as de,f as k,d as o,b as T,m as _,g as S,h as r,r as me,w as Me,k as j,x as Be,l as z,n as P,o as q,p as K,q as W}from"../chunks/index.e8a2aa98.js";import{a as Se,h as ae,d as Je,e as Qe,b as Xe,f as Ye,g as Ze,c as et,s as tt}from"../chunks/index.d76d82e2.js";import{e as $e}from"../chunks/each.e59479a4.js";const lt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function rt(s){let e,t,l=`<i class="${ae.contact}"></i>
    Contact`,a,i,g,c,n,v,u=s[3].displayValue+"",m,M,C,x,w,V,D=s[2].displayValue+"",H,b,y,$,F,A,X=s[1].displayValue+"",N,ge,O,G,R,ne,se=s[0].city+"",pe,ie,B,Ee=s[0].country+"",oe;return{c(){e=f("figure"),t=f("figcaption"),t.innerHTML=l,a=I(),i=f("ul"),g=f("li"),c=f("a"),n=f("i"),v=I(),m=L(u),M=I(),C=f("li"),x=f("a"),w=f("i"),V=I(),H=L(D),b=I(),y=f("li"),$=f("a"),F=f("i"),A=I(),N=L(X),ge=I(),O=f("li"),G=f("a"),R=f("i"),ne=I(),pe=L(se),ie=L(`,
        `),B=f("strong"),oe=L(Ee),this.h()},l(J){e=h(J,"FIGURE",{});var ce=d(e);t=h(ce,"FIGCAPTION",{"data-svelte-h":!0}),de(t)!=="svelte-m8xoc3"&&(t.innerHTML=l),a=k(ce),i=h(ce,"UL",{class:!0});var U=d(i);g=h(U,"LI",{});var fe=d(g);c=h(fe,"A",{href:!0,rel:!0,target:!0});var _e=d(c);n=h(_e,"I",{class:!0}),d(n).forEach(o),v=k(_e),m=T(_e,u),_e.forEach(o),fe.forEach(o),M=k(U),C=h(U,"LI",{});var re=d(C);x=h(re,"A",{href:!0,rel:!0,target:!0});var Y=d(x);w=h(Y,"I",{class:!0}),d(w).forEach(o),V=k(Y),H=T(Y,D),Y.forEach(o),re.forEach(o),b=k(U),y=h(U,"LI",{});var Ie=d(y);$=h(Ie,"A",{href:!0,rel:!0,target:!0});var Z=d($);F=h(Z,"I",{class:!0}),d(F).forEach(o),A=k(Z),N=T(Z,X),Z.forEach(o),Ie.forEach(o),ge=k(U),O=h(U,"LI",{});var ke=d(O);G=h(ke,"A",{href:!0,rel:!0,target:!0});var Q=d(G);R=h(Q,"I",{class:!0}),d(R).forEach(o),ne=k(Q),pe=T(Q,se),ie=T(Q,`,
        `),B=h(Q,"STRONG",{});var he=d(B);oe=T(he,Ee),he.forEach(o),Q.forEach(o),ke.forEach(o),U.forEach(o),ce.forEach(o),this.h()},h(){_(n,"class",s[3].faIconClass),_(c,"href",s[3].href),_(c,"rel","noopener"),_(c,"target","_blank"),_(w,"class",s[2].faIconClass),_(x,"href",s[2].href),_(x,"rel","noopener"),_(x,"target","_blank"),_(F,"class",s[1].faIconClass),_($,"href",s[1].href),_($,"rel","noopener"),_($,"target","_blank"),_(R,"class",s[0].icon),_(G,"href",s[0].mapUrl),_(G,"rel","noopener"),_(G,"target","_blank"),_(i,"class","hideMarkers")},m(J,ce){S(J,e,ce),r(e,t),r(e,a),r(e,i),r(i,g),r(g,c),r(c,n),r(c,v),r(c,m),r(i,M),r(i,C),r(C,x),r(x,w),r(x,V),r(x,H),r(i,b),r(i,y),r(y,$),r($,F),r($,A),r($,N),r(i,ge),r(i,O),r(O,G),r(G,R),r(G,ne),r(G,pe),r(G,ie),r(G,B),r(B,oe)},p,i:p,o:p,d(J){J&&o(e)}}}function at(s){const{location:e}=Se,{github:t,linkedin:l,web:a}=Se.contact;return[e,t,l,a]}class ze extends te{constructor(e){super(),le(this,e,at,rt,ee,{})}}function nt(s,e,t){const l=s.slice();return l[0]=e[t].tech,l[1]=e[t].favourite,l}function st(s){let e;return{c(){e=f("i"),this.h()},l(t){e=h(t,"I",{class:!0}),d(e).forEach(o),this.h()},h(){_(e,"class",ae.favourite+" fa-xs")},m(t,l){S(t,e,l)},d(t){t&&o(e)}}}function it(s){let e,t,l,a,i=s[1]&&st();return{c(){e=f("li"),t=L(s[0]),l=I(),i&&i.c(),a=I()},l(g){e=h(g,"LI",{});var c=d(e);t=T(c,s[0]),l=k(c),i&&i.l(c),a=k(c),c.forEach(o)},m(g,c){S(g,e,c),r(e,t),r(e,l),i&&i.m(e,null),r(e,a)},p,d(g){g&&o(e),i&&i.d()}}}function ot(s){let e,t,l=`<i class="${ae.currentTechstack}"></i>
    Current techstack`,a,i,g=$e(Je),c=[];for(let n=0;n<g.length;n+=1)c[n]=it(nt(s,g,n));return{c(){e=f("figure"),t=f("figcaption"),t.innerHTML=l,a=I(),i=f("ul");for(let n=0;n<c.length;n+=1)c[n].c();this.h()},l(n){e=h(n,"FIGURE",{});var v=d(e);t=h(v,"FIGCAPTION",{"data-svelte-h":!0}),de(t)!=="svelte-1nfbei5"&&(t.innerHTML=l),a=k(v),i=h(v,"UL",{class:!0});var u=d(i);for(let m=0;m<c.length;m+=1)c[m].l(u);u.forEach(o),v.forEach(o),this.h()},h(){_(i,"class","hideMarkers")},m(n,v){S(n,e,v),r(e,t),r(e,a),r(e,i);for(let u=0;u<c.length;u+=1)c[u]&&c[u].m(i,null)},p,i:p,o:p,d(n){n&&o(e),me(c,n)}}}class ct extends te{constructor(e){super(),le(this,e,null,ot,ee,{})}}function ft(s,e,t){const l=s.slice();return l[0]=e[t].school,l[1]=e[t].city,l[2]=e[t].degree,l[3]=e[t].field,l[4]=e[t].subfield,l[5]=e[t].dateRange,l}function ht(s){let e,t;return{c(){e=L(`,
        `),t=L(s[4])},l(l){e=T(l,`,
        `),t=T(l,s[4])},m(l,a){S(l,e,a),S(l,t,a)},d(l){l&&(o(e),o(t))}}}function ut(s){let e,t,l,a,i,g,c,n,v,u,m,M,C,x,w,V,D,H,b=s[4]&&ht(s);return{c(){e=f("div"),t=f("h3"),l=f("i"),a=I(),i=L(s[0]),g=L(" ("),c=L(s[1]),n=L(")"),v=I(),u=f("h4"),m=L(s[2]),M=L(", "),C=f("strong"),x=L(s[3]),b&&b.c(),w=I(),V=f("h5"),D=L(s[5]),H=I(),this.h()},l(y){e=h(y,"DIV",{class:!0});var $=d(e);t=h($,"H3",{class:!0});var F=d(t);l=h(F,"I",{class:!0}),d(l).forEach(o),a=k(F),i=T(F,s[0]),g=T(F," ("),c=T(F,s[1]),n=T(F,")"),F.forEach(o),v=k($),u=h($,"H4",{class:!0});var A=d(u);m=T(A,s[2]),M=T(A,", "),C=h(A,"STRONG",{});var X=d(C);x=T(X,s[3]),X.forEach(o),b&&b.l(A),A.forEach(o),w=k($),V=h($,"H5",{class:!0});var N=d(V);D=T(N,s[5]),N.forEach(o),H=k($),$.forEach(o),this.h()},h(){_(l,"class",ae.education+" fa-xs"),_(t,"class","svelte-1267ckz"),_(u,"class","iconWidthIndent"),_(V,"class","iconWidthIndent"),_(e,"class","border-top")},m(y,$){S(y,e,$),r(e,t),r(t,l),r(t,a),r(t,i),r(t,g),r(t,c),r(t,n),r(e,v),r(e,u),r(u,m),r(u,M),r(u,C),r(C,x),b&&b.m(u,null),r(e,w),r(e,V),r(V,D),r(e,H)},p,d(y){y&&o(e),b&&b.d()}}}function dt(s){let e,t=$e(Qe),l=[];for(let a=0;a<t.length;a+=1)l[a]=ut(ft(s,t,a));return{c(){for(let a=0;a<l.length;a+=1)l[a].c();e=Me()},l(a){for(let i=0;i<l.length;i+=1)l[i].l(a);e=Me()},m(a,i){for(let g=0;g<l.length;g+=1)l[g]&&l[g].m(a,i);S(a,e,i)},p,i:p,o:p,d(a){a&&o(e),me(l,a)}}}class gt extends te{constructor(e){super(),le(this,e,null,dt,ee,{})}}function _t(s,e,t){const l=s.slice();return l[0]=e[t].role,l[1]=e[t].company,l[2]=e[t].startDate,l[3]=e[t].endDate,l[4]=e[t].description,l}function vt(s,e,t){const l=s.slice();return l[7]=e[t],l}function mt(s){let e,t,l;return{c(){e=f("li"),t=f("span"),l=L(s[7])},l(a){e=h(a,"LI",{});var i=d(e);t=h(i,"SPAN",{});var g=d(t);l=T(g,s[7]),g.forEach(o),i.forEach(o)},m(a,i){S(a,e,i),r(e,t),r(t,l)},p,d(a){a&&o(e)}}}function $t(s){let e,t,l,a,i,g,c,n,v,u,m,M,C,x,w,V,D=$e(s[4]),H=[];for(let b=0;b<D.length;b+=1)H[b]=mt(vt(s,D,b));return{c(){e=f("div"),t=f("h3"),l=f("i"),a=I(),i=f("strong"),g=L(s[0]),c=L(`
      @
      `),n=L(s[1]),v=I(),u=f("h5"),m=L(s[2]),M=L(" - "),C=L(s[3]),x=I(),w=f("ul");for(let b=0;b<H.length;b+=1)H[b].c();V=I(),this.h()},l(b){e=h(b,"DIV",{class:!0});var y=d(e);t=h(y,"H3",{class:!0});var $=d(t);l=h($,"I",{class:!0}),d(l).forEach(o),a=k($),i=h($,"STRONG",{});var F=d(i);g=T(F,s[0]),F.forEach(o),c=T($,`
      @
      `),n=T($,s[1]),$.forEach(o),v=k(y),u=h(y,"H5",{class:!0});var A=d(u);m=T(A,s[2]),M=T(A," - "),C=T(A,s[3]),A.forEach(o),x=k(y),w=h(y,"UL",{});var X=d(w);for(let N=0;N<H.length;N+=1)H[N].l(X);X.forEach(o),V=k(y),y.forEach(o),this.h()},h(){_(l,"class",ae.experience+" fa-xs"),_(t,"class","svelte-1267ckz"),_(u,"class","iconWidthIndent"),_(e,"class","border-top")},m(b,y){S(b,e,y),r(e,t),r(t,l),r(t,a),r(t,i),r(i,g),r(t,c),r(t,n),r(e,v),r(e,u),r(u,m),r(u,M),r(u,C),r(e,x),r(e,w);for(let $=0;$<H.length;$+=1)H[$]&&H[$].m(w,null);r(e,V)},p,d(b){b&&o(e),me(H,b)}}}function pt(s){let e,t=$e(Xe),l=[];for(let a=0;a<t.length;a+=1)l[a]=$t(_t(s,t,a));return{c(){for(let a=0;a<l.length;a+=1)l[a].c();e=Me()},l(a){for(let i=0;i<l.length;i+=1)l[i].l(a);e=Me()},m(a,i){for(let g=0;g<l.length;g+=1)l[g]&&l[g].m(a,i);S(a,e,i)},p,i:p,o:p,d(a){a&&o(e),me(l,a)}}}class Et extends te{constructor(e){super(),le(this,e,null,pt,ee,{})}}function It(s){let e,t=`Handmade with <a href="https://svelte.dev/">Svelte</a>,
  <a href="https://milligram.io/">Milligram</a>,
  <a href="https://fontawesome.com/">Font Awesome</a>, and
  <a href="https://github.com/cognitom/paper-css">Paper CSS</a> by
  <a href="#contact">me</a>.`;return{c(){e=f("p"),e.innerHTML=t},l(l){e=h(l,"P",{"data-svelte-h":!0}),de(e)!=="svelte-55cdaq"&&(e.innerHTML=t)},m(l,a){S(l,e,a)},p,i:p,o:p,d(l){l&&o(e)}}}class kt extends te{constructor(e){super(),le(this,e,null,It,ee,{})}}function bt(s,e,t){const l=s.slice();return l[0]=e[t],l}function yt(s){let e,t;return{c(){e=f("li"),t=L(s[0])},l(l){e=h(l,"LI",{});var a=d(e);t=T(a,s[0]),a.forEach(o)},m(l,a){S(l,e,a),r(e,t)},p,d(l){l&&o(e)}}}function Lt(s){let e,t,l=`<i class="${ae.futureTechstack}"></i>
    Happy to learn`,a,i,g=$e(Ye),c=[];for(let n=0;n<g.length;n+=1)c[n]=yt(bt(s,g,n));return{c(){e=f("figure"),t=f("figcaption"),t.innerHTML=l,a=I(),i=f("ul");for(let n=0;n<c.length;n+=1)c[n].c();this.h()},l(n){e=h(n,"FIGURE",{});var v=d(e);t=h(v,"FIGCAPTION",{"data-svelte-h":!0}),de(t)!=="svelte-1grj4i1"&&(t.innerHTML=l),a=k(v),i=h(v,"UL",{class:!0});var u=d(i);for(let m=0;m<c.length;m+=1)c[m].l(u);u.forEach(o),v.forEach(o),this.h()},h(){_(i,"class","hideMarkers")},m(n,v){S(n,e,v),r(e,t),r(e,a),r(e,i);for(let u=0;u<c.length;u+=1)c[u]&&c[u].m(i,null)},p,i:p,o:p,d(n){n&&o(e),me(c,n)}}}class Tt extends te{constructor(e){super(),le(this,e,null,Lt,ee,{})}}function xt(s){let e,t,l,a,i=Se.name+"",g,c,n,v=`<h1 class="svelte-xzs0ah"><i class="${ae.headline} svelte-xzs0ah"></i></h1>`,u,m,M,C,x=Se.role+"",w;return{c(){e=f("div"),t=f("div"),l=f("h1"),a=f("strong"),g=L(i),c=I(),n=f("div"),n.innerHTML=v,u=I(),m=f("div"),M=f("h1"),C=f("strong"),w=L(x),this.h()},l(V){e=h(V,"DIV",{class:!0});var D=d(e);t=h(D,"DIV",{class:!0});var H=d(t);l=h(H,"H1",{class:!0});var b=d(l);a=h(b,"STRONG",{});var y=d(a);g=T(y,i),y.forEach(o),b.forEach(o),H.forEach(o),c=k(D),n=h(D,"DIV",{class:!0,"data-svelte-h":!0}),de(n)!=="svelte-105tj0c"&&(n.innerHTML=v),u=k(D),m=h(D,"DIV",{class:!0});var $=d(m);M=h($,"H1",{class:!0});var F=d(M);C=h(F,"STRONG",{});var A=d(C);w=T(A,x),A.forEach(o),F.forEach(o),$.forEach(o),D.forEach(o),this.h()},h(){_(l,"class","svelte-xzs0ah"),_(t,"class","left svelte-xzs0ah"),_(n,"class","center svelte-xzs0ah"),_(M,"class","svelte-xzs0ah"),_(m,"class","right svelte-xzs0ah"),_(e,"class","grid-container svelte-xzs0ah")},m(V,D){S(V,e,D),r(e,t),r(t,l),r(l,a),r(a,g),r(e,c),r(e,n),r(e,u),r(e,m),r(m,M),r(M,C),r(C,w)},p,i:p,o:p,d(V){V&&o(e)}}}class Pe extends te{constructor(e){super(),le(this,e,null,xt,ee,{})}}function Ht(s,e,t){const l=s.slice();return l[0]=e[t],l}function wt(s){let e,t;return{c(){e=f("li"),t=L(s[0])},l(l){e=h(l,"LI",{});var a=d(e);t=T(a,s[0]),a.forEach(o)},m(l,a){S(l,e,a),r(e,t)},p,d(l){l&&o(e)}}}function Mt(s){let e,t,l=`<i class="${ae.generallyInterested}"></i>
    Generally interested in`,a,i,g=$e(Ze),c=[];for(let n=0;n<g.length;n+=1)c[n]=wt(Ht(s,g,n));return{c(){e=f("figure"),t=f("figcaption"),t.innerHTML=l,a=I(),i=f("ul");for(let n=0;n<c.length;n+=1)c[n].c();this.h()},l(n){e=h(n,"FIGURE",{});var v=d(e);t=h(v,"FIGCAPTION",{"data-svelte-h":!0}),de(t)!=="svelte-mg6l66"&&(t.innerHTML=l),a=k(v),i=h(v,"UL",{class:!0});var u=d(i);for(let m=0;m<c.length;m+=1)c[m].l(u);u.forEach(o),v.forEach(o),this.h()},h(){_(i,"class","hideMarkers")},m(n,v){S(n,e,v),r(e,t),r(e,a),r(e,i);for(let u=0;u<c.length;u+=1)c[u]&&c[u].m(i,null)},p,i:p,o:p,d(n){n&&o(e),me(c,n)}}}class St extends te{constructor(e){super(),le(this,e,null,Mt,ee,{})}}function Ct(s,e,t){const l=s.slice();return l[0]=e[t],l}function Dt(s){let e,t;return{c(){e=f("li"),t=L(s[0])},l(l){e=h(l,"LI",{});var a=d(e);t=T(a,s[0]),a.forEach(o)},m(l,a){S(l,e,a),r(e,t)},p,d(l){l&&o(e)}}}function At(s){let e,t,l=`<i class="${ae.softSkills}"></i>
    Soft skils`,a,i,g=$e(et),c=[];for(let n=0;n<g.length;n+=1)c[n]=Dt(Ct(s,g,n));return{c(){e=f("figure"),t=f("figcaption"),t.innerHTML=l,a=I(),i=f("ul");for(let n=0;n<c.length;n+=1)c[n].c();this.h()},l(n){e=h(n,"FIGURE",{});var v=d(e);t=h(v,"FIGCAPTION",{"data-svelte-h":!0}),de(t)!=="svelte-191fs1t"&&(t.innerHTML=l),a=k(v),i=h(v,"UL",{class:!0});var u=d(i);for(let m=0;m<c.length;m+=1)c[m].l(u);u.forEach(o),v.forEach(o),this.h()},h(){_(i,"class","hideMarkers")},m(n,v){S(n,e,v),r(e,t),r(e,a),r(e,i);for(let u=0;u<c.length;u+=1)c[u]&&c[u].m(i,null)},p,i:p,o:p,d(n){n&&o(e),me(c,n)}}}class Gt extends te{constructor(e){super(),le(this,e,null,At,ee,{})}}function Vt(s,e,t){const l=s.slice();return l[0]=e[t].language,l[1]=e[t].level,l}function Ft(s){let e,t,l,a,i,g,c,n;return{c(){e=f("li"),t=f("strong"),l=L(s[0]),a=I(),i=f("br"),g=L(`
        (`),c=L(s[1]),n=L(`)
      `)},l(v){e=h(v,"LI",{});var u=d(e);t=h(u,"STRONG",{});var m=d(t);l=T(m,s[0]),m.forEach(o),a=k(u),i=h(u,"BR",{}),g=T(u,`
        (`),c=T(u,s[1]),n=T(u,`)
      `),u.forEach(o)},m(v,u){S(v,e,u),r(e,t),r(t,l),r(e,a),r(e,i),r(e,g),r(e,c),r(e,n)},p,d(v){v&&o(e)}}}function Nt(s){let e,t,l=`<i class="${ae.spokenLanguages}"></i>
    Spoken languages`,a,i,g=$e(tt),c=[];for(let n=0;n<g.length;n+=1)c[n]=Ft(Vt(s,g,n));return{c(){e=f("figure"),t=f("figcaption"),t.innerHTML=l,a=I(),i=f("ul");for(let n=0;n<c.length;n+=1)c[n].c();this.h()},l(n){e=h(n,"FIGURE",{});var v=d(e);t=h(v,"FIGCAPTION",{"data-svelte-h":!0}),de(t)!=="svelte-jjp0up"&&(t.innerHTML=l),a=k(v),i=h(v,"UL",{class:!0});var u=d(i);for(let m=0;m<c.length;m+=1)c[m].l(u);u.forEach(o),v.forEach(o),this.h()},h(){_(i,"class","hideMarkers")},m(n,v){S(n,e,v),r(e,t),r(e,a),r(e,i);for(let u=0;u<c.length;u+=1)c[u]&&c[u].m(i,null)},p,i:p,o:p,d(n){n&&o(e),me(c,n)}}}class Rt extends te{constructor(e){super(),le(this,e,null,Nt,ee,{})}}function Ut(s){let e,t=`<figcaption><i class="${ae.summary}"></i>
    Summary</figcaption> <ul class="hideMarkers"><li><p>Software engineer with a background in <strong>software testing</strong>.</p></li> <li><p>Interested primarily in <strong>backend development</strong> in
        <strong>TypeScript</strong> <br/> but also <strong>open</strong> to other
        technologies.</p></li> <li><p>Focused on writing a <strong>clean</strong>,
        <strong>understandable</strong>, and <strong>high quality</strong> code.</p></li></ul>`;return{c(){e=f("figure"),e.innerHTML=t},l(l){e=h(l,"FIGURE",{"data-svelte-h":!0}),de(e)!=="svelte-1hbc4t4"&&(e.innerHTML=t)},m(l,a){S(l,e,a)},p,i:p,o:p,d(l){l&&o(e)}}}class qe extends te{constructor(e){super(),le(this,e,null,Ut,ee,{})}}const{document:we}=lt;function Ot(s){let e,t,l,a,i,g,c,n,v,u,m,M,C,x,w,V,D,H,b,y,$,F,A,X,N,ge,O,G,R,ne,se,pe,ie,B,Ee,oe,J,ce,U,fe,_e,re,Y,Ie,Z,ke,Q,he,xe;return v=new Pe({}),M=new qe({}),w=new ze({}),H=new Et({}),$=new ct({}),A=new Tt({}),N=new Rt({}),se=new Pe({}),B=new qe({}),J=new ze({}),fe=new gt({}),Y=new Gt({}),Z=new St({}),he=new kt({}),{c(){e=f("link"),t=f("link"),l=f("link"),a=I(),i=f("div"),g=f("div"),c=f("header"),n=f("div"),j(v.$$.fragment),u=I(),m=f("div"),j(M.$$.fragment),C=I(),x=f("div"),j(w.$$.fragment),V=I(),D=f("main"),j(H.$$.fragment),b=I(),y=f("aside"),j($.$$.fragment),F=I(),j(A.$$.fragment),X=I(),j(N.$$.fragment),ge=I(),O=f("div"),G=f("div"),R=f("header"),ne=f("div"),j(se.$$.fragment),pe=I(),ie=f("div"),j(B.$$.fragment),Ee=I(),oe=f("div"),j(J.$$.fragment),ce=I(),U=f("main"),j(fe.$$.fragment),_e=I(),re=f("aside"),j(Y.$$.fragment),Ie=I(),j(Z.$$.fragment),ke=I(),Q=f("footer"),j(he.$$.fragment),this.h()},l(E){const ue=Be("svelte-1u35q2r",we.head);e=h(ue,"LINK",{rel:!0,href:!0}),t=h(ue,"LINK",{rel:!0,href:!0}),l=h(ue,"LINK",{rel:!0,href:!0}),ue.forEach(o),a=k(E),i=h(E,"DIV",{id:!0,class:!0});var Ce=d(i);g=h(Ce,"DIV",{class:!0});var be=d(g);c=h(be,"HEADER",{class:!0});var ye=d(c);n=h(ye,"DIV",{class:!0});var De=d(n);z(v.$$.fragment,De),De.forEach(o),u=k(ye),m=h(ye,"DIV",{class:!0});var Ae=d(m);z(M.$$.fragment,Ae),Ae.forEach(o),C=k(ye),x=h(ye,"DIV",{id:!0,class:!0});var Ge=d(x);z(w.$$.fragment,Ge),Ge.forEach(o),ye.forEach(o),V=k(be),D=h(be,"MAIN",{class:!0});var Ve=d(D);z(H.$$.fragment,Ve),Ve.forEach(o),b=k(be),y=h(be,"ASIDE",{class:!0});var Le=d(y);z($.$$.fragment,Le),F=k(Le),z(A.$$.fragment,Le),X=k(Le),z(N.$$.fragment,Le),Le.forEach(o),be.forEach(o),Ce.forEach(o),ge=k(E),O=h(E,"DIV",{id:!0,class:!0});var Fe=d(O);G=h(Fe,"DIV",{class:!0});var ve=d(G);R=h(ve,"HEADER",{class:!0});var Te=d(R);ne=h(Te,"DIV",{class:!0});var Ne=d(ne);z(se.$$.fragment,Ne),Ne.forEach(o),pe=k(Te),ie=h(Te,"DIV",{class:!0});var Re=d(ie);z(B.$$.fragment,Re),Re.forEach(o),Ee=k(Te),oe=h(Te,"DIV",{class:!0});var Ue=d(oe);z(J.$$.fragment,Ue),Ue.forEach(o),Te.forEach(o),ce=k(ve),U=h(ve,"MAIN",{class:!0});var Oe=d(U);z(fe.$$.fragment,Oe),Oe.forEach(o),_e=k(ve),re=h(ve,"ASIDE",{class:!0});var He=d(re);z(Y.$$.fragment,He),Ie=k(He),z(Z.$$.fragment,He),He.forEach(o),ke=k(ve),Q=h(ve,"FOOTER",{class:!0});var je=d(Q);z(he.$$.fragment,je),je.forEach(o),ve.forEach(o),Fe.forEach(o),this.h()},h(){_(e,"rel","stylesheet"),_(e,"href","https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css"),_(t,"rel","stylesheet"),_(t,"href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"),_(l,"rel","stylesheet"),_(l,"href","https://cdnjs.cloudflare.com/ajax/libs/paper-css/0.4.1/paper.min.css"),_(n,"class","headline svelte-gx99oh"),_(m,"class","summary svelte-gx99oh"),_(x,"id","contact"),_(x,"class","contact svelte-gx99oh"),_(c,"class","header svelte-gx99oh"),_(D,"class","main svelte-gx99oh"),_(y,"class","sidebar svelte-gx99oh"),_(g,"class","container grid-container svelte-gx99oh"),_(i,"id","page1"),_(i,"class","sheet"),_(ne,"class","headline svelte-gx99oh"),_(ie,"class","summary svelte-gx99oh"),_(oe,"class","contact svelte-gx99oh"),_(R,"class","header svelte-gx99oh"),_(U,"class","main svelte-gx99oh"),_(re,"class","sidebar svelte-gx99oh"),_(Q,"class","footer svelte-gx99oh"),_(G,"class","container grid-container svelte-gx99oh"),_(O,"id","page2"),_(O,"class","sheet")},m(E,ue){r(we.head,e),r(we.head,t),r(we.head,l),S(E,a,ue),S(E,i,ue),r(i,g),r(g,c),r(c,n),P(v,n,null),r(c,u),r(c,m),P(M,m,null),r(c,C),r(c,x),P(w,x,null),r(g,V),r(g,D),P(H,D,null),r(g,b),r(g,y),P($,y,null),r(y,F),P(A,y,null),r(y,X),P(N,y,null),S(E,ge,ue),S(E,O,ue),r(O,G),r(G,R),r(R,ne),P(se,ne,null),r(R,pe),r(R,ie),P(B,ie,null),r(R,Ee),r(R,oe),P(J,oe,null),r(G,ce),r(G,U),P(fe,U,null),r(G,_e),r(G,re),P(Y,re,null),r(re,Ie),P(Z,re,null),r(G,ke),r(G,Q),P(he,Q,null),xe=!0},p,i(E){xe||(q(v.$$.fragment,E),q(M.$$.fragment,E),q(w.$$.fragment,E),q(H.$$.fragment,E),q($.$$.fragment,E),q(A.$$.fragment,E),q(N.$$.fragment,E),q(se.$$.fragment,E),q(B.$$.fragment,E),q(J.$$.fragment,E),q(fe.$$.fragment,E),q(Y.$$.fragment,E),q(Z.$$.fragment,E),q(he.$$.fragment,E),xe=!0)},o(E){K(v.$$.fragment,E),K(M.$$.fragment,E),K(w.$$.fragment,E),K(H.$$.fragment,E),K($.$$.fragment,E),K(A.$$.fragment,E),K(N.$$.fragment,E),K(se.$$.fragment,E),K(B.$$.fragment,E),K(J.$$.fragment,E),K(fe.$$.fragment,E),K(Y.$$.fragment,E),K(Z.$$.fragment,E),K(he.$$.fragment,E),xe=!1},d(E){E&&(o(a),o(i),o(ge),o(O)),o(e),o(t),o(l),W(v),W(M),W(w),W(H),W($),W(A),W(N),W(se),W(B),W(J),W(fe),W(Y),W(Z),W(he)}}}function jt(s){return Ke(()=>{document.body.classList.add("A4")}),We(()=>{document.querySelectorAll('i[class^="fa-"]').forEach(t=>{t.classList.add("fa-fw")})}),[]}class Wt extends te{constructor(e){super(),le(this,e,jt,Ot,ee,{})}}export{Wt as component};
