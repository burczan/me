import{s as F,n as $,A as ae}from"./scheduler.D1-0ZQVk.js";import{S as J,i as K,e as d,s as I,c as f,a as m,q as M,f as S,d as c,u as v,g as H,h as l,v as ge,t as E,b}from"./index.DzQRJq2a.js";import{e as ee}from"./each.D6YF6ztN.js";import{e as De,c as Le,i as Ne,p as Pe,s as Ve,b as se,f as Oe}from"./index.9BhPN0SV.js";function je(r,e,t){const n=r.slice();return n[0]=e[t].school,n[1]=e[t].city,n[2]=e[t].country,n[3]=e[t].degree,n[4]=e[t].field,n[5]=e[t].subfield,n[6]=e[t].dateRange,n[7]=e[t].website,n}function Ae(r){let e;return{c(){e=E(r[0])},l(t){e=b(t,r[0])},m(t,n){H(t,e,n)},d(t){t&&c(e)}}}function He(r){let e,t;return{c(){e=d("a"),t=E(r[0]),this.h()},l(n){e=f(n,"A",{href:!0,title:!0,rel:!0,target:!0});var u=m(e);t=b(u,r[0]),u.forEach(c),this.h()},h(){v(e,"href",r[7]),v(e,"title",r[0]),v(e,"rel","noopener"),v(e,"target","_blank")},m(n,u){H(n,e,u),l(e,t)},d(n){n&&c(e)}}}function Ge(r){let e,t;return{c(){e=E(", "),t=E(r[5])},l(n){e=b(n,", "),t=b(n,r[5])},m(n,u){H(n,e,u),H(n,t,u)},d(n){n&&(c(e),c(t))}}}function Re(r){let e,t,n,u,h,i,s,o,a,w,D,T,A,O,k,N,L;function V(C,_){return C[7]?He:Ae}let g=V(r)(r),p=r[5]&&Ge(r);return{c(){e=d("div"),t=d("div"),g.c(),n=E(`
        (`),u=E(r[1]),h=E(", "),i=E(r[2]),s=E(")"),o=I(),a=d("div"),w=E(r[3]),D=E(`,
        `),T=d("strong"),A=E(r[4]),p&&p.c(),O=I(),k=d("div"),N=E(r[6]),L=I(),this.h()},l(C){e=f(C,"DIV",{class:!0});var _=m(e);t=f(_,"DIV",{class:!0});var x=m(t);g.l(x),n=b(x,`
        (`),u=b(x,r[1]),h=b(x,", "),i=b(x,r[2]),s=b(x,")"),x.forEach(c),o=S(_),a=f(_,"DIV",{});var j=m(a);w=b(j,r[3]),D=b(j,`,
        `),T=f(j,"STRONG",{});var P=m(T);A=b(P,r[4]),P.forEach(c),p&&p.l(j),j.forEach(c),O=S(_),k=f(_,"DIV",{});var z=m(k);N=b(z,r[6]),z.forEach(c),L=S(_),_.forEach(c),this.h()},h(){v(t,"class","head"),v(e,"class","entry")},m(C,_){H(C,e,_),l(e,t),g.m(t,null),l(t,n),l(t,u),l(t,h),l(t,i),l(t,s),l(e,o),l(e,a),l(a,w),l(a,D),l(a,T),l(T,A),p&&p.m(a,null),l(e,O),l(e,k),l(k,N),l(e,L)},p:$,d(C){C&&c(e),g.d(),p&&p.d()}}}function Me(r){let e,t,n="Education",u,h=ee(De),i=[];for(let s=0;s<h.length;s+=1)i[s]=Re(je(r,h,s));return{c(){e=d("section"),t=d("h2"),t.textContent=n,u=I();for(let s=0;s<i.length;s+=1)i[s].c();this.h()},l(s){e=f(s,"SECTION",{id:!0});var o=m(e);t=f(o,"H2",{"data-svelte-h":!0}),M(t)!=="svelte-w5efo"&&(t.textContent=n),u=S(o);for(let a=0;a<i.length;a+=1)i[a].l(o);o.forEach(c),this.h()},h(){v(e,"id","education")},m(s,o){H(s,e,o),l(e,t),l(e,u);for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(e,null)},p:$,i:$,o:$,d(s){s&&c(e),ge(i,s)}}}class et extends J{constructor(e){super(),K(this,e,null,Me,F,{})}}function we(r,e,t){const n=r.slice();return n[1]=e[t].role,n[2]=e[t].company,n[3]=e[t].startDate,n[4]=e[t].endDate,n[5]=e[t].description,n}function xe(r,e,t){const n=r.slice();return n[8]=e[t],n}function Te(r){let e,t=r[8]+"",n;return{c(){e=d("li"),n=E(t)},l(u){e=f(u,"LI",{});var h=m(e);n=b(h,t),h.forEach(c)},m(u,h){H(u,e,h),l(e,n)},p:$,d(u){u&&c(e)}}}function $e(r){let e,t,n,u=r[1]+"",h,i,s=r[2]+"",o,a,w=r[3]+"",D,T,A=r[4]+"",O,k,N,L,V,y=ee(r[5]),g=[];for(let p=0;p<y.length;p+=1)g[p]=Te(xe(r,y,p));return{c(){e=d("div"),t=d("div"),n=d("strong"),h=E(u),i=E(`
        @`),o=E(s),a=E(" ("),D=E(w),T=E(" – "),O=E(A),k=E(")"),N=I(),L=d("ul");for(let p=0;p<g.length;p+=1)g[p].c();V=I(),this.h()},l(p){e=f(p,"DIV",{class:!0});var C=m(e);t=f(C,"DIV",{class:!0});var _=m(t);n=f(_,"STRONG",{});var x=m(n);h=b(x,u),x.forEach(c),i=b(_,`
        @`),o=b(_,s),a=b(_," ("),D=b(_,w),T=b(_," – "),O=b(_,A),k=b(_,")"),_.forEach(c),N=S(C),L=f(C,"UL",{class:!0});var j=m(L);for(let P=0;P<g.length;P+=1)g[P].l(j);j.forEach(c),V=S(C),C.forEach(c),this.h()},h(){v(t,"class","head"),v(L,"class","svelte-1ery1hp"),v(e,"class","entry")},m(p,C){H(p,e,C),l(e,t),l(t,n),l(n,h),l(t,i),l(t,o),l(t,a),l(t,D),l(t,T),l(t,O),l(t,k),l(e,N),l(e,L);for(let _=0;_<g.length;_+=1)g[_]&&g[_].m(L,null);l(e,V)},p(p,C){if(C&1){y=ee(p[5]);let _;for(_=0;_<y.length;_+=1){const x=xe(p,y,_);g[_]?g[_].p(x,C):(g[_]=Te(x),g[_].c(),g[_].m(L,null))}for(;_<g.length;_+=1)g[_].d(1);g.length=y.length}},d(p){p&&c(e),ge(g,p)}}}function ze(r){let e,t,n="Experience",u,h=ee(r[0]),i=[];for(let s=0;s<h.length;s+=1)i[s]=$e(we(r,h,s));return{c(){e=d("section"),t=d("h2"),t.textContent=n,u=I();for(let s=0;s<i.length;s+=1)i[s].c();this.h()},l(s){e=f(s,"SECTION",{id:!0});var o=m(e);t=f(o,"H2",{"data-svelte-h":!0}),M(t)!=="svelte-10mha1a"&&(t.textContent=n),u=S(o);for(let a=0;a<i.length;a+=1)i[a].l(o);o.forEach(c),this.h()},h(){v(e,"id","work-experience")},m(s,o){H(s,e,o),l(e,t),l(e,u);for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(e,null)},p(s,[o]){if(o&1){h=ee(s[0]);let a;for(a=0;a<h.length;a+=1){const w=we(s,h,a);i[a]?i[a].p(w,o):(i[a]=$e(w),i[a].c(),i[a].m(e,null))}for(;a<i.length;a+=1)i[a].d(1);i.length=h.length}},i:$,o:$,d(s){s&&c(e),ge(i,s)}}}function We(r){return[Le.filter(t=>t.company!=="LLidero")]}class tt extends J{constructor(e){super(),K(this,e,We,ze,F,{})}}function qe(r){let e,t,n="Interests",u,h,i=Ne.join(", ")+"",s;return{c(){e=d("section"),t=d("h2"),t.textContent=n,u=I(),h=d("p"),s=E(i),this.h()},l(o){e=f(o,"SECTION",{id:!0});var a=m(e);t=f(a,"H2",{"data-svelte-h":!0}),M(t)!=="svelte-1pd86v"&&(t.textContent=n),u=S(a),h=f(a,"P",{});var w=m(h);s=b(w,i),w.forEach(c),a.forEach(c),this.h()},h(){v(e,"id","general-interests")},m(o,a){H(o,e,a),l(e,t),l(e,u),l(e,h),l(h,s)},p:$,i:$,o:$,d(o){o&&c(e)}}}class lt extends J{constructor(e){super(),K(this,e,null,qe,F,{})}}function Ue(r){let e,t,n="Projects",u,h,i,s,o,a=r[0].shortTitle+"",w,D,T,A=`I am developing a tool aimed at bridging the gap between rapidly evolving
      technical skills and essential human competencies, such as effective
      communication and adaptability.`,O,k,N=`Leveraging my understanding of software engineering as well as my personal
      experience in the tech industry, I am designing a solution that provides
      an intuitive and user-friendly interface, specifically tailored to the
      analytical mindset of technical professionals.`,L,V,y=`This project is helping individuals grow both professionally and
      personally in a constantly changing world, aligning with industry demands
      for well-rounded technical experts.`;return{c(){e=d("section"),t=d("h2"),t.textContent=n,u=I(),h=d("div"),i=d("div"),s=d("strong"),o=d("a"),w=E(a),D=I(),T=d("p"),T.textContent=A,O=I(),k=d("p"),k.textContent=N,L=I(),V=d("p"),V.textContent=y,this.h()},l(g){e=f(g,"SECTION",{id:!0});var p=m(e);t=f(p,"H2",{"data-svelte-h":!0}),M(t)!=="svelte-7jt1gw"&&(t.textContent=n),u=S(p),h=f(p,"DIV",{class:!0});var C=m(h);i=f(C,"DIV",{class:!0});var _=m(i);s=f(_,"STRONG",{});var x=m(s);o=f(x,"A",{href:!0,title:!0,rel:!0,target:!0});var j=m(o);w=b(j,a),j.forEach(c),x.forEach(c),_.forEach(c),D=S(C),T=f(C,"P",{"data-svelte-h":!0}),M(T)!=="svelte-7zkfx1"&&(T.textContent=A),O=S(C),k=f(C,"P",{"data-svelte-h":!0}),M(k)!=="svelte-xwz9rw"&&(k.textContent=N),L=S(C),V=f(C,"P",{"data-svelte-h":!0}),M(V)!=="svelte-rb9i94"&&(V.textContent=y),C.forEach(c),p.forEach(c),this.h()},h(){v(o,"href","https://burczan.github.io/me/projects/"+r[0].slug+"/"),v(o,"title",r[0].shortTitle),v(o,"rel","noopener"),v(o,"target","_blank"),v(i,"class","head"),v(h,"class","entry"),v(e,"id","projects")},m(g,p){H(g,e,p),l(e,t),l(e,u),l(e,h),l(h,i),l(i,s),l(s,o),l(o,w),l(h,D),l(h,T),l(h,O),l(h,k),l(h,L),l(h,V)},p:$,i:$,o:$,d(g){g&&c(e)}}}function Be(r){return[Pe[0]]}class nt extends J{constructor(e){super(),K(this,e,Be,Ue,F,{})}}function Fe(r){let e,t,n="Soft skils",u,h,i=Ve.join(", ")+"",s;return{c(){e=d("section"),t=d("h2"),t.textContent=n,u=I(),h=d("p"),s=E(i),this.h()},l(o){e=f(o,"SECTION",{id:!0});var a=m(e);t=f(a,"H2",{"data-svelte-h":!0}),M(t)!=="svelte-wkw8fm"&&(t.textContent=n),u=S(a),h=f(a,"P",{});var w=m(h);s=b(w,i),w.forEach(c),a.forEach(c),this.h()},h(){v(e,"id","soft-skills")},m(o,a){H(o,e,a),l(e,t),l(e,u),l(e,h),l(h,s)},p:$,i:$,o:$,d(o){o&&c(e)}}}class rt extends J{constructor(e){super(),K(this,e,null,Fe,F,{})}}function Je(r){let e,t,n,u,h=se.name+"",i,s,o,a=`<i class="${Oe.headline}"></i>`,w,D,T=se.role+"",A,O,k,N,L=`Software engineer with a background in <strong>software testing</strong>
      and a deep interest in <strong>backend</strong> development. While
      primarily focused on backend roles, also open to
      <strong>full-stack</strong> positions as well as eager to expand
      <strong>DevOps</strong> skills and gain further experience at a junior level.`,V,y,g,p,C,_=r[3].displayValue+"",x,j,P,z,oe,me=r[2].displayValue+"",ie,ce,R,Q,he,Ee=r[1].displayValue+"",ue,de,G,X,fe,be=r[0].city+"",ve,_e,Y,Ce=r[0].country+"",pe;return{c(){e=d("section"),t=d("div"),n=d("h1"),u=d("span"),i=E(h),s=I(),o=d("span"),o.innerHTML=a,w=I(),D=d("span"),A=E(T),O=I(),k=d("div"),N=d("p"),N.innerHTML=L,V=I(),y=d("p"),g=d("a"),p=d("i"),C=I(),x=E(_),j=I(),P=d("a"),z=d("i"),oe=I(),ie=E(me),ce=I(),R=d("a"),Q=d("i"),he=I(),ue=E(Ee),de=I(),G=d("a"),X=d("i"),fe=I(),ve=E(be),_e=E(`,
        `),Y=d("strong"),pe=E(Ce),this.h()},l(Z){e=f(Z,"SECTION",{});var q=m(e);t=f(q,"DIV",{id:!0});var ke=m(t);n=f(ke,"H1",{class:!0});var U=m(n);u=f(U,"SPAN",{class:!0});var ye=m(u);i=b(ye,h),ye.forEach(c),s=S(U),o=f(U,"SPAN",{class:!0,"data-svelte-h":!0}),M(o)!=="svelte-urpsvv"&&(o.innerHTML=a),w=S(U),D=f(U,"SPAN",{class:!0});var Ie=m(D);A=b(Ie,T),Ie.forEach(c),U.forEach(c),ke.forEach(c),O=S(q),k=f(q,"DIV",{id:!0,class:!0});var te=m(k);N=f(te,"P",{"data-svelte-h":!0}),M(N)!=="svelte-19ugnlr"&&(N.innerHTML=L),V=S(te),y=f(te,"P",{id:!0,class:!0});var W=m(y);g=f(W,"A",{href:!0,rel:!0,target:!0});var le=m(g);p=f(le,"I",{class:!0}),m(p).forEach(c),C=S(le),x=b(le,_),le.forEach(c),j=S(W),P=f(W,"A",{href:!0,rel:!0,target:!0});var ne=m(P);z=f(ne,"I",{class:!0}),m(z).forEach(c),oe=S(ne),ie=b(ne,me),ne.forEach(c),ce=S(W),R=f(W,"A",{href:!0,rel:!0,target:!0});var re=m(R);Q=f(re,"I",{class:!0}),m(Q).forEach(c),he=S(re),ue=b(re,Ee),re.forEach(c),de=S(W),G=f(W,"A",{href:!0,rel:!0,target:!0});var B=m(G);X=f(B,"I",{class:!0}),m(X).forEach(c),fe=S(B),ve=b(B,be),_e=b(B,`,
        `),Y=f(B,"STRONG",{});var Se=m(Y);pe=b(Se,Ce),Se.forEach(c),B.forEach(c),W.forEach(c),te.forEach(c),q.forEach(c),this.h()},h(){v(u,"class","svelte-1ebni08"),v(o,"class","svelte-1ebni08"),v(D,"class","svelte-1ebni08"),v(n,"class","svelte-1ebni08"),v(t,"id","headline"),v(p,"class",ae(r[3].faIconClass)+" svelte-1ebni08"),v(g,"href",r[3].href),v(g,"rel","noopener"),v(g,"target","_blank"),v(z,"class",ae(r[2].faIconClass)+" svelte-1ebni08"),v(P,"href",r[2].href),v(P,"rel","noopener"),v(P,"target","_blank"),v(Q,"class",ae(r[1].faIconClass)+" svelte-1ebni08"),v(R,"href",r[1].href),v(R,"rel","noopener"),v(R,"target","_blank"),v(X,"class",ae(r[0].icon)+" svelte-1ebni08"),v(G,"href",r[0].mapUrl),v(G,"rel","noopener"),v(G,"target","_blank"),v(y,"id","contact"),v(y,"class","svelte-1ebni08"),v(k,"id","summary-content"),v(k,"class","svelte-1ebni08")},m(Z,q){H(Z,e,q),l(e,t),l(t,n),l(n,u),l(u,i),l(n,s),l(n,o),l(n,w),l(n,D),l(D,A),l(e,O),l(e,k),l(k,N),l(k,V),l(k,y),l(y,g),l(g,p),l(g,C),l(g,x),l(y,j),l(y,P),l(P,z),l(P,oe),l(P,ie),l(y,ce),l(y,R),l(R,Q),l(R,he),l(R,ue),l(y,de),l(y,G),l(G,X),l(G,fe),l(G,ve),l(G,_e),l(G,Y),l(Y,pe)},p:$,i:$,o:$,d(Z){Z&&c(e)}}}function Ke(r){const{location:e}=se,{github:t,linkedin:n,web:u}=se.contact;return[e,t,n,u]}class at extends J{constructor(e){super(),K(this,e,Ke,Je,F,{})}}export{tt as E,lt as G,nt as P,at as S,rt as a,et as b};
