import"../chunks/DsnmJJEf.js";import{p as K,a as L,c as O,f as h,b as i,n as $,d as u,e as n,s as o,as as aa,r as e,at as ea,au as ta,t as y,A as a}from"../chunks/DyY6Qw_P.js";import{s as p}from"../chunks/Ck0luKbF.js";import{i as J}from"../chunks/D0bG8P8O.js";import{e as q,i as w}from"../chunks/DZZI4maP.js";import{s as ra,a as oa}from"../chunks/C-Zd23Sr.js";import{d as sa}from"../chunks/TVtcwlgc.js";import{S as na}from"../chunks/DpPBdA6o.js";import{s as ia}from"../chunks/BSgINJMC.js";import{s as la,r as va}from"../chunks/BCrMY1Ax.js";import{I as pa}from"../chunks/Cj9TMHWQ.js";function ca(D,s){K(s,!0);/**
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
 */let S=va(s,["$$slots","$$events","$$legacy"]);const l=[["path",{d:"M21.56 4.56a1.5 1.5 0 0 1 0 2.122l-.47.47a3 3 0 0 1-4.212-.03 3 3 0 0 1 0-4.243l.44-.44a1.5 1.5 0 0 1 2.121 0z"}],["path",{d:"M3 22a1 1 0 0 1-1-1v-3.586a1 1 0 0 1 .293-.707l3.355-3.355a1.205 1.205 0 0 1 1.704 0l3.296 3.296a1.205 1.205 0 0 1 0 1.704l-3.355 3.355a1 1 0 0 1-.707.293z"}],["path",{d:"m9 15 7.879-7.878"}]];pa(D,la({name:"shovel"},()=>S,{get iconNode(){return l},children:(g,k)=>{var c=O(),d=h(c);ia(d,()=>s.children??$),i(g,c)},$$slots:{default:!0}})),L()}var da=u("<button> </button>"),ma=u("<li> </li>"),_a=u("<b>Technologies:</b> ",1),fa=u('<h2><span class="green"> </span> </h2> <h3> </h3> <ul></ul> <!>',1),ha=u('<!> <div id="experience"><h1><!> Experience</h1> <div role="group"></div> <div class="box"></div></div>',1);function Ma(D,s){K(s,!0);const S=s.data.experience.map(m=>m.role);let l=ta(0);var g=ha(),k=h(g);na(k,{title:"Experience"});var c=o(k,2),d=n(c),Q=n(d);ca(Q,{class:"icon-h1"}),aa(),e(d);var I=o(d,2);q(I,21,()=>S,w,(m,t,v)=>{var r=da();r.__click=()=>ea(l,v,!0);let x;var z=n(r,!0);e(r),y((E,M)=>{ra(r,"id",E),x=oa(r,1,"",null,x,M),p(z,a(t))},[()=>v.toString(),()=>({primary:v===a(l),outline:v!==a(l)})]),i(m,r)}),e(I);var B=o(I,2);q(B,21,()=>s.data.experience,w,(m,t,v)=>{let r=()=>a(t).role,x=()=>a(t).company,z=()=>a(t).startDate,E=()=>a(t).endDate,M=()=>a(t).description,C=()=>a(t).technologies;var F=O(),R=h(F);{var U=N=>{var G=fa(),T=h(G),j=n(T),V=n(j,!0);e(j);var W=o(j);e(T);var A=o(T,2),X=n(A);e(A);var H=o(A,2);q(H,21,M,w,(_,b)=>{var f=ma(),P=n(f,!0);e(f),y(()=>p(P,a(b))),i(_,f)}),e(H);var Y=o(H,2);{var Z=_=>{var b=_a(),f=o(h(b));y(P=>p(f,` ${P??""}`),[()=>C().join(", ")]),i(_,b)};J(Y,_=>{C()&&_(Z)})}y(()=>{p(V,r()),p(W,` @${x()??""}`),p(X,`${z()??""} – ${E()??""}`)}),i(N,G)};J(R,N=>{a(l)===v&&N(U)})}i(m,F)}),e(B),e(c),i(D,g),L()}sa(["click"]);export{Ma as component};
