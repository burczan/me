import{s as g,c as S,u as b,g as w,d as M,n as _}from"./scheduler.e108d1fd.js";import{S as v,i as k,g as u,s as q,h,j as C,c as A,f as c,k as f,A as m,a as E,y as d,d as H,t as $,m as j,n as D,o as I,C as T}from"./index.9afde77f.js";function p(n){let e,a;return{c(){e=u("h1"),a=j(n[0]),this.h()},l(s){e=h(s,"H1",{class:!0});var t=C(e);a=D(t,n[0]),t.forEach(c),this.h()},h(){f(e,"class","title")},m(s,t){E(s,e,t),d(e,a)},p(s,t){t&1&&I(a,s[0])},d(s){s&&c(e)}}}function V(n){let e,a,s,t=n[0]&&p(n);const r=n[2].default,l=S(r,n,n[1],null);return{c(){e=u("div"),t&&t.c(),a=q(),l&&l.c(),this.h()},l(i){e=h(i,"DIV",{class:!0});var o=C(e);t&&t.l(o),a=A(o),l&&l.l(o),o.forEach(c),this.h()},h(){f(e,"class","nes-container is-dark"),m(e,"with-title",!!n[0])},m(i,o){E(i,e,o),t&&t.m(e,null),d(e,a),l&&l.m(e,null),s=!0},p(i,[o]){i[0]?t?t.p(i,o):(t=p(i),t.c(),t.m(e,a)):t&&(t.d(1),t=null),l&&l.p&&(!s||o&2)&&b(l,r,i,i[1],s?M(r,i[1],o,null):w(i[1]),null),(!s||o&1)&&m(e,"with-title",!!i[0])},i(i){s||(H(l,i),s=!0)},o(i){$(l,i),s=!1},d(i){i&&c(e),t&&t.d(),l&&l.d(i)}}}function y(n,e,a){let{$$slots:s={},$$scope:t}=e,{title:r=void 0}=e;return n.$$set=l=>{"title"in l&&a(0,r=l.title),"$$scope"in l&&a(1,t=l.$$scope)},[r,t,s]}class J extends v{constructor(e){super(),k(this,e,y,V,g,{title:0})}}function z(n){let e,a;return document.title=e="Me | "+n[0],{c(){a=u("meta"),this.h()},l(s){const t=T("svelte-xmqw2t",document.head);a=h(t,"META",{name:!0,content:!0}),t.forEach(c),this.h()},h(){f(a,"name","description"),f(a,"content",n[0])},m(s,t){d(document.head,a)},p(s,[t]){t&1&&e!==(e="Me | "+s[0])&&(document.title=e),t&1&&f(a,"content",s[0])},i:_,o:_,d(s){c(a)}}}function B(n,e,a){let{title:s}=e;return n.$$set=t=>{"title"in t&&a(0,s=t.title)},[s]}class K extends v{constructor(e){super(),k(this,e,B,z,g,{title:0})}}export{J as C,K as S};
