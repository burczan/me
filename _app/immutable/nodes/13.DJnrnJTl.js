import"../chunks/DsnmJJEf.js";import{p as J,a as K,c as O,f as x,b as v,n as ia,d as y,e as i,s as n,as as na,r as s,at as la,au as va,t as m,A as a,av as C}from"../chunks/DyY6Qw_P.js";import{s as l}from"../chunks/Ck0luKbF.js";import{i as A}from"../chunks/D0bG8P8O.js";import{e as D,i as F}from"../chunks/DZZI4maP.js";import{s as G,a as da}from"../chunks/C-Zd23Sr.js";import{d as ca}from"../chunks/TVtcwlgc.js";import{S as pa}from"../chunks/DpPBdA6o.js";import{s as fa}from"../chunks/BSgINJMC.js";import{s as _a,r as ua}from"../chunks/BCrMY1Ax.js";import{I as ma}from"../chunks/Cj9TMHWQ.js";function ha(k,d){J(d,!0);/**
 * @license @lucide/svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let I=ua(d,["$$slots","$$events","$$legacy"]);const c=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"}],["path",{d:"M22 10v6"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5"}]];ma(k,_a({name:"graduation-cap"},()=>I,{get iconNode(){return c},children:(h,M)=>{var f=O(),_=x(f);fa(_,()=>d.children??ia),v(h,f)},$$slots:{default:!0}})),K()}var ga=y("<button> </button>"),ba=y('<a rel="noopener" target="_blank"> </a>'),xa=y('<h3><!> </h3> <h4> <span class="green"> </span><!></h4> <h5> </h5>',1),ya=y('<!> <div id="education"><h1><!> Education</h1> <div role="group"></div> <div class="box"></div></div>',1);function Ga(k,d){J(d,!0);const I=d.data.education.map(u=>u.field);let c=va(0);var h=ya(),M=x(h);pa(M,{title:"Education"});var f=n(M,2),_=i(f),Q=i(_);ha(Q,{class:"icon-h1"}),na(),s(_);var S=n(_,2);D(S,21,()=>I,F,(u,e,p)=>{var r=ga();r.__click=()=>la(c,p,!0);let g;var w=i(r,!0);s(r),m((b,E)=>{G(r,"id",b),g=da(r,1,"",null,g,E),l(w,a(e))},[()=>p.toString(),()=>({primary:p===a(c),outline:p!==a(c)})]),v(u,r)}),s(S);var H=n(S,2);D(H,21,()=>d.data.education,F,(u,e,p)=>{let r=()=>a(e).school,g=()=>a(e).city,w=()=>a(e).country,b=()=>a(e).website,E=()=>a(e).field,P=()=>a(e).subfield,U=()=>a(e).degree,W=()=>a(e).dateRange;var T=O(),X=x(T);{var Y=L=>{var V=xa(),N=x(V),j=i(N);{var Z=o=>{var t=ba(),sa=i(t,!0);s(t),m(()=>{G(t,"href",b()),G(t,"title",r()),l(sa,r())}),v(o,t)},$=o=>{var t=C();m(()=>l(t,r())),v(o,t)};A(j,o=>{b()?o(Z):o($,!1)})}var aa=n(j);s(N);var R=n(N,2),q=i(R),z=n(q),ta=i(z,!0);s(z);var ea=n(z);{var ra=o=>{var t=C();m(()=>l(t,`,
            ${P()??""}`)),v(o,t)};A(ea,o=>{P()&&o(ra)})}s(R);var B=n(R,2),oa=i(B,!0);s(B),m(()=>{l(aa,` (${g()??""}, ${w()??""})`),l(q,`${U()??""}, `),l(ta,E()),l(oa,W())}),v(L,V)};A(X,L=>{a(c)===p&&L(Y)})}v(u,T)}),s(H),s(f),v(k,h),K()}ca(["click"]);export{Ga as component};
