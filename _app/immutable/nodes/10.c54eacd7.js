import{s as De,n as Me}from"../chunks/scheduler.e903ca9d.js";import{S as Ie,i as ye,k as se,s as H,e as u,t as D,l as ae,f as k,c as d,a as $,y as A,b as M,d as r,m as b,n as ne,g as T,h as s,j as F,o as ie,p as re,q as oe,w as Te,r as xe}from"../chunks/index.e8a2aa98.js";import{e as Ee}from"../chunks/each.e59479a4.js";import{L as me}from"../chunks/List.ae0c07bf.js";import{S as Ce}from"../chunks/SvelteHead.e1498644.js";function He(v,l,a){const t=v.slice();return t[1]=l[a].language,t[2]=l[a].level,t}function Se(v){let l,a=`<i class="nes-icon check nes-text is-success is-small"></i>
          Visiting office from time to time`,t,e,c=`<i class="nes-icon comment nes-text is-warning is-small"></i>
          Visiting office once a month`,n,_,h=`<i class="nes-icon times nes-text is-error is-small"></i>
          Visiting office once a week`,m,o,L=`<i class="nes-icon times nes-text is-error is-small"></i>
          Relocation to &lt;city&gt;`;return{c(){l=u("li"),l.innerHTML=a,t=H(),e=u("li"),e.innerHTML=c,n=H(),_=u("li"),_.innerHTML=h,m=H(),o=u("li"),o.innerHTML=L},l(i){l=d(i,"LI",{"data-svelte-h":!0}),A(l)!=="svelte-ximo1p"&&(l.innerHTML=a),t=k(i),e=d(i,"LI",{"data-svelte-h":!0}),A(e)!=="svelte-j5zune"&&(e.innerHTML=c),n=k(i),_=d(i,"LI",{"data-svelte-h":!0}),A(_)!=="svelte-27y6qp"&&(_.innerHTML=h),m=k(i),o=d(i,"LI",{"data-svelte-h":!0}),A(o)!=="svelte-1k4ax4n"&&(o.innerHTML=L)},m(i,p){T(i,l,p),T(i,t,p),T(i,e,p),T(i,n,p),T(i,_,p),T(i,m,p),T(i,o,p)},p:Me,d(i){i&&(r(l),r(t),r(e),r(n),r(_),r(m),r(o))}}}function ke(v){let l,a,t=v[1]+"",e,c,n=v[2]+"",_,h;return{c(){l=u("li"),a=u("span"),e=D(t),c=D(" ("),_=D(n),h=D(`)
            `),this.h()},l(m){l=d(m,"LI",{});var o=$(l);a=d(o,"SPAN",{class:!0});var L=$(a);e=M(L,t),L.forEach(r),c=M(o," ("),_=M(o,n),h=M(o,`)
            `),o.forEach(r),this.h()},h(){b(a,"class","nes-text is-success")},m(m,o){T(m,l,o),s(l,a),s(a,e),s(l,c),s(l,_),s(l,h)},p(m,o){o&1&&t!==(t=m[1]+"")&&F(e,t),o&1&&n!==(n=m[2]+"")&&F(_,n)},d(m){m&&r(l)}}}function we(v){let l,a=Ee(v[0].spokenLanguages),t=[];for(let e=0;e<a.length;e+=1)t[e]=ke(He(v,a,e));return{c(){for(let e=0;e<t.length;e+=1)t[e].c();l=Te()},l(e){for(let c=0;c<t.length;c+=1)t[c].l(e);l=Te()},m(e,c){for(let n=0;n<t.length;n+=1)t[n]&&t[n].m(e,c);T(e,l,c)},p(e,c){if(c&1){a=Ee(e[0].spokenLanguages);let n;for(n=0;n<a.length;n+=1){const _=He(e,a,n);t[n]?t[n].p(_,c):(t[n]=ke(_),t[n].c(),t[n].m(l.parentNode,l))}for(;n<t.length;n+=1)t[n].d(1);t.length=a.length}},d(e){e&&r(l),xe(t,e)}}}function Ve(v){let l,a,t,e,c,n,_,h,m,o,L;return{c(){l=u("li"),a=u("a"),t=D("LinkedIn "),e=u("i"),n=H(),_=u("li"),h=u("a"),m=D("GitHub "),o=u("i"),this.h()},l(i){l=d(i,"LI",{});var p=$(l);a=d(p,"A",{href:!0,rel:!0,target:!0});var P=$(a);t=M(P,"LinkedIn "),e=d(P,"I",{class:!0}),$(e).forEach(r),P.forEach(r),p.forEach(r),n=k(i),_=d(i,"LI",{});var q=$(_);h=d(q,"A",{href:!0,rel:!0,target:!0});var I=$(h);m=M(I,"GitHub "),o=d(I,"I",{class:!0}),$(o).forEach(r),I.forEach(r),q.forEach(r),this.h()},h(){b(e,"class","nes-icon linkedin is-small"),b(a,"href",c=v[0].about.contact.linkedin.href),b(a,"rel","noopener"),b(a,"target","_blank"),b(o,"class","nes-icon github-square is-small"),b(h,"href",L=v[0].about.contact.github.href),b(h,"rel","noopener"),b(h,"target","_blank")},m(i,p){T(i,l,p),s(l,a),s(a,t),s(a,e),T(i,n,p),T(i,_,p),s(_,h),s(h,m),s(h,o)},p(i,p){p&1&&c!==(c=i[0].about.contact.linkedin.href)&&b(a,"href",c),p&1&&L!==(L=i[0].about.contact.github.href)&&b(h,"href",L)},d(i){i&&(r(l),r(n),r(_))}}}function Ae(v){let l,a,t,e,c,n='<span class="nes-text is-primary">Role</span>',_,h,m,o=v[0].about.role+"",L,i,p,P='<span class="nes-text is-primary">Location</span>',q,I,y,J=v[0].about.location.city+"",Y,ce,K=v[0].about.location.region+"",Z,fe,N,O=v[0].about.location.country+"",ee,ue,x,de,te,_e,j,C,G,ve='<span class="nes-text is-primary">Spoken languages</span>',R,S,pe,z,$e='<span class="nes-text is-primary">Contact</span>',Q,w,V;return l=new Ce({props:{title:"About"}}),x=new me({props:{hideListStyleType:!0,$$slots:{default:[Se]},$$scope:{ctx:v}}}),S=new me({props:{$$slots:{default:[we]},$$scope:{ctx:v}}}),w=new me({props:{$$slots:{default:[Ve]},$$scope:{ctx:v}}}),{c(){se(l.$$.fragment),a=H(),t=u("div"),e=u("div"),c=u("dt"),c.innerHTML=n,_=H(),h=u("dd"),m=u("p"),L=D(o),i=H(),p=u("dt"),p.innerHTML=P,q=H(),I=u("dd"),y=u("p"),Y=D(J),ce=D(", "),Z=D(K),fe=D(`,
        `),N=u("span"),ee=D(O),ue=H(),se(x.$$.fragment),de=H(),te=u("dl"),_e=H(),j=u("div"),C=u("dl"),G=u("dt"),G.innerHTML=ve,R=u("dd"),se(S.$$.fragment),pe=H(),z=u("dt"),z.innerHTML=$e,Q=u("dd"),se(w.$$.fragment),this.h()},l(f){ae(l.$$.fragment,f),a=k(f),t=d(f,"DIV",{class:!0});var g=$(t);e=d(g,"DIV",{class:!0});var E=$(e);c=d(E,"DT",{"data-svelte-h":!0}),A(c)!=="svelte-11fcc4x"&&(c.innerHTML=n),_=k(E),h=d(E,"DD",{});var U=$(h);m=d(U,"P",{});var W=$(m);L=M(W,o),W.forEach(r),U.forEach(r),i=k(E),p=d(E,"DT",{"data-svelte-h":!0}),A(p)!=="svelte-d97cl6"&&(p.innerHTML=P),q=k(E),I=d(E,"DD",{});var le=$(I);y=d(le,"P",{});var B=$(y);Y=M(B,J),ce=M(B,", "),Z=M(B,K),fe=M(B,`,
        `),N=d(B,"SPAN",{class:!0});var ge=$(N);ee=M(ge,O),ge.forEach(r),B.forEach(r),ue=k(le),ae(x.$$.fragment,le),le.forEach(r),de=k(E),te=d(E,"DL",{}),$(te).forEach(r),E.forEach(r),_e=k(g),j=d(g,"DIV",{class:!0});var Le=$(j);C=d(Le,"DL",{});var X=$(C);G=d(X,"DT",{"data-svelte-h":!0}),A(G)!=="svelte-1pkro5c"&&(G.innerHTML=ve),R=d(X,"DD",{});var he=$(R);ae(S.$$.fragment,he),pe=k(he),he.forEach(r),z=d(X,"DT",{"data-svelte-h":!0}),A(z)!=="svelte-cy43l7"&&(z.innerHTML=$e),Q=d(X,"DD",{});var be=$(Q);ae(w.$$.fragment,be),be.forEach(r),X.forEach(r),Le.forEach(r),g.forEach(r),this.h()},h(){b(N,"class","nes-text is-success"),b(e,"class","left svelte-1pmyac5"),b(j,"class","right svelte-1pmyac5"),b(t,"class","columns svelte-1pmyac5")},m(f,g){ne(l,f,g),T(f,a,g),T(f,t,g),s(t,e),s(e,c),s(e,_),s(e,h),s(h,m),s(m,L),s(e,i),s(e,p),s(e,q),s(e,I),s(I,y),s(y,Y),s(y,ce),s(y,Z),s(y,fe),s(y,N),s(N,ee),s(I,ue),ne(x,I,null),s(e,de),s(e,te),s(t,_e),s(t,j),s(j,C),s(C,G),s(C,R),ne(S,R,null),s(R,pe),s(C,z),s(C,Q),ne(w,Q,null),V=!0},p(f,[g]){(!V||g&1)&&o!==(o=f[0].about.role+"")&&F(L,o),(!V||g&1)&&J!==(J=f[0].about.location.city+"")&&F(Y,J),(!V||g&1)&&K!==(K=f[0].about.location.region+"")&&F(Z,K),(!V||g&1)&&O!==(O=f[0].about.location.country+"")&&F(ee,O);const E={};g&32&&(E.$$scope={dirty:g,ctx:f}),x.$set(E);const U={};g&33&&(U.$$scope={dirty:g,ctx:f}),S.$set(U);const W={};g&33&&(W.$$scope={dirty:g,ctx:f}),w.$set(W)},i(f){V||(ie(l.$$.fragment,f),ie(x.$$.fragment,f),ie(S.$$.fragment,f),ie(w.$$.fragment,f),V=!0)},o(f){re(l.$$.fragment,f),re(x.$$.fragment,f),re(S.$$.fragment,f),re(w.$$.fragment,f),V=!1},d(f){f&&(r(a),r(t)),oe(l,f),oe(x),oe(S),oe(w)}}}function Pe(v,l,a){let{data:t}=l;return v.$$set=e=>{"data"in e&&a(0,t=e.data)},[t]}class ze extends Ie{constructor(l){super(),ye(this,l,Pe,Ae,De,{data:0})}}export{ze as component};
