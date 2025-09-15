import"./DsnmJJEf.js";import{t as cn,h as zu,i as Nu,a5 as xi,b3 as _i,o as ju,N as wi,a1 as ki,am as Ai,al as vi,ap as Bu,G as Ci,aq as Ei,L as ot,p as ln,c as Di,f as Si,b as Ve,a as dn,d as pt,e as Ee,r as De,s as st}from"./DyY6Qw_P.js";import{v as Ti,g as Fi}from"./BdFYRwfi.js";import{o as Ii}from"./DszDiCpO.js";import{s as Pi}from"./Ck0luKbF.js";import"./CvO9jjes.js";function Ri(e,t,u=!1,i=!1,a=!1){var n=e,o="";cn(()=>{var r=xi;if(o===(o=t()??"")){zu&&Nu();return}if(r.nodes_start!==null&&(_i(r.nodes_start,r.nodes_end),r.nodes_start=r.nodes_end=null),o!==""){if(zu){ju.data;for(var s=Nu(),c=s;s!==null&&(s.nodeType!==wi||s.data!=="");)c=s,s=ki(s);if(s===null)throw Ai(),vi;Bu(ju,c),n=Ci(s);return}var d=o+"";u?d=`<svg>${d}</svg>`:i&&(d=`<math>${d}</math>`);var f=Ei(d);if((u||i)&&(f=ot(f)),Bu(ot(f),f.lastChild),u||i)for(;ot(f);)n.before(ot(f));else n.before(f)}})}const Mi=""+new URL("../assets/crochetMS_component_api_layer.D9xFDxDP.svg",import.meta.url).href,Li=""+new URL("../assets/crochetMS_container_crochet_management_system.BKvRjGry.svg",import.meta.url).href,Oi=""+new URL("../assets/crochetMS_system_context.DtlamE4W.svg",import.meta.url).href,qu={};function zi(e){let t=qu[e];if(t)return t;t=qu[e]=[];for(let u=0;u<128;u++){const i=String.fromCharCode(u);t.push(i)}for(let u=0;u<e.length;u++){const i=e.charCodeAt(u);t[i]="%"+("0"+i.toString(16).toUpperCase()).slice(-2)}return t}function Te(e,t){typeof t!="string"&&(t=Te.defaultChars);const u=zi(t);return e.replace(/(%[a-f0-9]{2})+/gi,function(i){let a="";for(let n=0,o=i.length;n<o;n+=3){const r=parseInt(i.slice(n+1,n+3),16);if(r<128){a+=u[r];continue}if((r&224)===192&&n+3<o){const s=parseInt(i.slice(n+4,n+6),16);if((s&192)===128){const c=r<<6&1984|s&63;c<128?a+="��":a+=String.fromCharCode(c),n+=3;continue}}if((r&240)===224&&n+6<o){const s=parseInt(i.slice(n+4,n+6),16),c=parseInt(i.slice(n+7,n+9),16);if((s&192)===128&&(c&192)===128){const d=r<<12&61440|s<<6&4032|c&63;d<2048||d>=55296&&d<=57343?a+="���":a+=String.fromCharCode(d),n+=6;continue}}if((r&248)===240&&n+9<o){const s=parseInt(i.slice(n+4,n+6),16),c=parseInt(i.slice(n+7,n+9),16),d=parseInt(i.slice(n+10,n+12),16);if((s&192)===128&&(c&192)===128&&(d&192)===128){let f=r<<18&1835008|s<<12&258048|c<<6&4032|d&63;f<65536||f>1114111?a+="����":(f-=65536,a+=String.fromCharCode(55296+(f>>10),56320+(f&1023))),n+=9;continue}}a+="�"}return a})}Te.defaultChars=";/?:@&=+$,#";Te.componentChars="";const Wu={};function Ni(e){let t=Wu[e];if(t)return t;t=Wu[e]=[];for(let u=0;u<128;u++){const i=String.fromCharCode(u);/^[0-9a-z]$/i.test(i)?t.push(i):t.push("%"+("0"+u.toString(16).toUpperCase()).slice(-2))}for(let u=0;u<e.length;u++)t[e.charCodeAt(u)]=e[u];return t}function Qe(e,t,u){typeof t!="string"&&(u=t,t=Qe.defaultChars),typeof u>"u"&&(u=!0);const i=Ni(t);let a="";for(let n=0,o=e.length;n<o;n++){const r=e.charCodeAt(n);if(u&&r===37&&n+2<o&&/^[0-9a-f]{2}$/i.test(e.slice(n+1,n+3))){a+=e.slice(n,n+3),n+=2;continue}if(r<128){a+=i[r];continue}if(r>=55296&&r<=57343){if(r>=55296&&r<=56319&&n+1<o){const s=e.charCodeAt(n+1);if(s>=56320&&s<=57343){a+=encodeURIComponent(e[n]+e[n+1]),n++;continue}}a+="%EF%BF%BD";continue}a+=encodeURIComponent(e[n])}return a}Qe.defaultChars=";/?:@&=+$,-_.!~*'()#";Qe.componentChars="-_.!~*'()";function Zt(e){let t="";return t+=e.protocol||"",t+=e.slashes?"//":"",t+=e.auth?e.auth+"@":"",e.hostname&&e.hostname.indexOf(":")!==-1?t+="["+e.hostname+"]":t+=e.hostname||"",t+=e.port?":"+e.port:"",t+=e.pathname||"",t+=e.search||"",t+=e.hash||"",t}function dt(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}const ji=/^([a-z0-9.+-]+:)/i,Bi=/:[0-9]*$/,qi=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,Wi=["<",">",'"',"`"," ","\r",`
`,"	"],Ui=["{","}","|","\\","^","`"].concat(Wi),Hi=["'"].concat(Ui),Uu=["%","/","?",";","#"].concat(Hi),Hu=["/","?","#"],Gi=255,Gu=/^[+a-z0-9A-Z_-]{0,63}$/,$i=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,$u={javascript:!0,"javascript:":!0},Vu={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function Yt(e,t){if(e&&e instanceof dt)return e;const u=new dt;return u.parse(e,t),u}dt.prototype.parse=function(e,t){let u,i,a,n=e;if(n=n.trim(),!t&&e.split("#").length===1){const c=qi.exec(n);if(c)return this.pathname=c[1],c[2]&&(this.search=c[2]),this}let o=ji.exec(n);if(o&&(o=o[0],u=o.toLowerCase(),this.protocol=o,n=n.substr(o.length)),(t||o||n.match(/^\/\/[^@\/]+@[^@\/]+/))&&(a=n.substr(0,2)==="//",a&&!(o&&$u[o])&&(n=n.substr(2),this.slashes=!0)),!$u[o]&&(a||o&&!Vu[o])){let c=-1;for(let h=0;h<Hu.length;h++)i=n.indexOf(Hu[h]),i!==-1&&(c===-1||i<c)&&(c=i);let d,f;c===-1?f=n.lastIndexOf("@"):f=n.lastIndexOf("@",c),f!==-1&&(d=n.slice(0,f),n=n.slice(f+1),this.auth=d),c=-1;for(let h=0;h<Uu.length;h++)i=n.indexOf(Uu[h]),i!==-1&&(c===-1||i<c)&&(c=i);c===-1&&(c=n.length),n[c-1]===":"&&c--;const b=n.slice(0,c);n=n.slice(c),this.parseHost(b),this.hostname=this.hostname||"";const p=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!p){const h=this.hostname.split(/\./);for(let C=0,E=h.length;C<E;C++){const I=h[C];if(I&&!I.match(Gu)){let _="";for(let A=0,k=I.length;A<k;A++)I.charCodeAt(A)>127?_+="x":_+=I[A];if(!_.match(Gu)){const A=h.slice(0,C),k=h.slice(C+1),w=I.match($i);w&&(A.push(w[1]),k.unshift(w[2])),k.length&&(n=k.join(".")+n),this.hostname=A.join(".");break}}}}this.hostname.length>Gi&&(this.hostname=""),p&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}const r=n.indexOf("#");r!==-1&&(this.hash=n.substr(r),n=n.slice(0,r));const s=n.indexOf("?");return s!==-1&&(this.search=n.substr(s),n=n.slice(0,s)),n&&(this.pathname=n),Vu[u]&&this.hostname&&!this.pathname&&(this.pathname=""),this};dt.prototype.parseHost=function(e){let t=Bi.exec(e);t&&(t=t[0],t!==":"&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)};const Vi=Object.freeze(Object.defineProperty({__proto__:null,decode:Te,encode:Qe,format:Zt,parse:Yt},Symbol.toStringTag,{value:"Module"})),fn=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,hn=/[\0-\x1F\x7F-\x9F]/,Qi=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,Jt=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,pn=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,mn=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,Zi=Object.freeze(Object.defineProperty({__proto__:null,Any:fn,Cc:hn,Cf:Qi,P:Jt,S:pn,Z:mn},Symbol.toStringTag,{value:"Module"})),Yi=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(e=>e.charCodeAt(0))),Ji=new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(e=>e.charCodeAt(0)));var zt;const Xi=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),Ki=(zt=String.fromCodePoint)!==null&&zt!==void 0?zt:function(e){let t="";return e>65535&&(e-=65536,t+=String.fromCharCode(e>>>10&1023|55296),e=56320|e&1023),t+=String.fromCharCode(e),t};function ea(e){var t;return e>=55296&&e<=57343||e>1114111?65533:(t=Xi.get(e))!==null&&t!==void 0?t:e}var q;(function(e){e[e.NUM=35]="NUM",e[e.SEMI=59]="SEMI",e[e.EQUALS=61]="EQUALS",e[e.ZERO=48]="ZERO",e[e.NINE=57]="NINE",e[e.LOWER_A=97]="LOWER_A",e[e.LOWER_F=102]="LOWER_F",e[e.LOWER_X=120]="LOWER_X",e[e.LOWER_Z=122]="LOWER_Z",e[e.UPPER_A=65]="UPPER_A",e[e.UPPER_F=70]="UPPER_F",e[e.UPPER_Z=90]="UPPER_Z"})(q||(q={}));const ta=32;var he;(function(e){e[e.VALUE_LENGTH=49152]="VALUE_LENGTH",e[e.BRANCH_LENGTH=16256]="BRANCH_LENGTH",e[e.JUMP_TABLE=127]="JUMP_TABLE"})(he||(he={}));function $t(e){return e>=q.ZERO&&e<=q.NINE}function ua(e){return e>=q.UPPER_A&&e<=q.UPPER_F||e>=q.LOWER_A&&e<=q.LOWER_F}function na(e){return e>=q.UPPER_A&&e<=q.UPPER_Z||e>=q.LOWER_A&&e<=q.LOWER_Z||$t(e)}function ia(e){return e===q.EQUALS||na(e)}var B;(function(e){e[e.EntityStart=0]="EntityStart",e[e.NumericStart=1]="NumericStart",e[e.NumericDecimal=2]="NumericDecimal",e[e.NumericHex=3]="NumericHex",e[e.NamedEntity=4]="NamedEntity"})(B||(B={}));var fe;(function(e){e[e.Legacy=0]="Legacy",e[e.Strict=1]="Strict",e[e.Attribute=2]="Attribute"})(fe||(fe={}));class aa{constructor(t,u,i){this.decodeTree=t,this.emitCodePoint=u,this.errors=i,this.state=B.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=fe.Strict}startEntity(t){this.decodeMode=t,this.state=B.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(t,u){switch(this.state){case B.EntityStart:return t.charCodeAt(u)===q.NUM?(this.state=B.NumericStart,this.consumed+=1,this.stateNumericStart(t,u+1)):(this.state=B.NamedEntity,this.stateNamedEntity(t,u));case B.NumericStart:return this.stateNumericStart(t,u);case B.NumericDecimal:return this.stateNumericDecimal(t,u);case B.NumericHex:return this.stateNumericHex(t,u);case B.NamedEntity:return this.stateNamedEntity(t,u)}}stateNumericStart(t,u){return u>=t.length?-1:(t.charCodeAt(u)|ta)===q.LOWER_X?(this.state=B.NumericHex,this.consumed+=1,this.stateNumericHex(t,u+1)):(this.state=B.NumericDecimal,this.stateNumericDecimal(t,u))}addToNumericResult(t,u,i,a){if(u!==i){const n=i-u;this.result=this.result*Math.pow(a,n)+parseInt(t.substr(u,n),a),this.consumed+=n}}stateNumericHex(t,u){const i=u;for(;u<t.length;){const a=t.charCodeAt(u);if($t(a)||ua(a))u+=1;else return this.addToNumericResult(t,i,u,16),this.emitNumericEntity(a,3)}return this.addToNumericResult(t,i,u,16),-1}stateNumericDecimal(t,u){const i=u;for(;u<t.length;){const a=t.charCodeAt(u);if($t(a))u+=1;else return this.addToNumericResult(t,i,u,10),this.emitNumericEntity(a,2)}return this.addToNumericResult(t,i,u,10),-1}emitNumericEntity(t,u){var i;if(this.consumed<=u)return(i=this.errors)===null||i===void 0||i.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(t===q.SEMI)this.consumed+=1;else if(this.decodeMode===fe.Strict)return 0;return this.emitCodePoint(ea(this.result),this.consumed),this.errors&&(t!==q.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(t,u){const{decodeTree:i}=this;let a=i[this.treeIndex],n=(a&he.VALUE_LENGTH)>>14;for(;u<t.length;u++,this.excess++){const o=t.charCodeAt(u);if(this.treeIndex=ra(i,a,this.treeIndex+Math.max(1,n),o),this.treeIndex<0)return this.result===0||this.decodeMode===fe.Attribute&&(n===0||ia(o))?0:this.emitNotTerminatedNamedEntity();if(a=i[this.treeIndex],n=(a&he.VALUE_LENGTH)>>14,n!==0){if(o===q.SEMI)return this.emitNamedEntityData(this.treeIndex,n,this.consumed+this.excess);this.decodeMode!==fe.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var t;const{result:u,decodeTree:i}=this,a=(i[u]&he.VALUE_LENGTH)>>14;return this.emitNamedEntityData(u,a,this.consumed),(t=this.errors)===null||t===void 0||t.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(t,u,i){const{decodeTree:a}=this;return this.emitCodePoint(u===1?a[t]&~he.VALUE_LENGTH:a[t+1],i),u===3&&this.emitCodePoint(a[t+2],i),i}end(){var t;switch(this.state){case B.NamedEntity:return this.result!==0&&(this.decodeMode!==fe.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case B.NumericDecimal:return this.emitNumericEntity(0,2);case B.NumericHex:return this.emitNumericEntity(0,3);case B.NumericStart:return(t=this.errors)===null||t===void 0||t.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case B.EntityStart:return 0}}}function bn(e){let t="";const u=new aa(e,i=>t+=Ki(i));return function(a,n){let o=0,r=0;for(;(r=a.indexOf("&",r))>=0;){t+=a.slice(o,r),u.startEntity(n);const c=u.write(a,r+1);if(c<0){o=r+u.end();break}o=r+c,r=c===0?o+1:o}const s=t+a.slice(o);return t="",s}}function ra(e,t,u,i){const a=(t&he.BRANCH_LENGTH)>>7,n=t&he.JUMP_TABLE;if(a===0)return n!==0&&i===n?u:-1;if(n){const s=i-n;return s<0||s>=a?-1:e[u+s]-1}let o=u,r=o+a-1;for(;o<=r;){const s=o+r>>>1,c=e[s];if(c<i)o=s+1;else if(c>i)r=s-1;else return e[s+a]}return-1}const oa=bn(Yi);bn(Ji);function gn(e,t=fe.Legacy){return oa(e,t)}function sa(e){return Object.prototype.toString.call(e)}function Xt(e){return sa(e)==="[object String]"}const ca=Object.prototype.hasOwnProperty;function la(e,t){return ca.call(e,t)}function mt(e){return Array.prototype.slice.call(arguments,1).forEach(function(u){if(u){if(typeof u!="object")throw new TypeError(u+"must be object");Object.keys(u).forEach(function(i){e[i]=u[i]})}}),e}function yn(e,t,u){return[].concat(e.slice(0,t),u,e.slice(t+1))}function Kt(e){return!(e>=55296&&e<=57343||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534||e>=0&&e<=8||e===11||e>=14&&e<=31||e>=127&&e<=159||e>1114111)}function ft(e){if(e>65535){e-=65536;const t=55296+(e>>10),u=56320+(e&1023);return String.fromCharCode(t,u)}return String.fromCharCode(e)}const xn=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,da=/&([a-z#][a-z0-9]{1,31});/gi,fa=new RegExp(xn.source+"|"+da.source,"gi"),ha=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function pa(e,t){if(t.charCodeAt(0)===35&&ha.test(t)){const i=t[1].toLowerCase()==="x"?parseInt(t.slice(2),16):parseInt(t.slice(1),10);return Kt(i)?ft(i):e}const u=gn(e);return u!==e?u:e}function ma(e){return e.indexOf("\\")<0?e:e.replace(xn,"$1")}function Fe(e){return e.indexOf("\\")<0&&e.indexOf("&")<0?e:e.replace(fa,function(t,u,i){return u||pa(t,i)})}const ba=/[&<>"]/,ga=/[&<>"]/g,ya={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function xa(e){return ya[e]}function pe(e){return ba.test(e)?e.replace(ga,xa):e}const _a=/[.?*+^$[\]\\(){}|-]/g;function wa(e){return e.replace(_a,"\\$&")}function R(e){switch(e){case 9:case 32:return!0}return!1}function Ue(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function He(e){return Jt.test(e)||pn.test(e)}function Ge(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function bt(e){return e=e.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(e=e.replace(/ẞ/g,"ß")),e.toLowerCase().toUpperCase()}const ka={mdurl:Vi,ucmicro:Zi},Aa=Object.freeze(Object.defineProperty({__proto__:null,arrayReplaceAt:yn,assign:mt,escapeHtml:pe,escapeRE:wa,fromCodePoint:ft,has:la,isMdAsciiPunct:Ge,isPunctChar:He,isSpace:R,isString:Xt,isValidEntityCode:Kt,isWhiteSpace:Ue,lib:ka,normalizeReference:bt,unescapeAll:Fe,unescapeMd:ma},Symbol.toStringTag,{value:"Module"}));function va(e,t,u){let i,a,n,o;const r=e.posMax,s=e.pos;for(e.pos=t+1,i=1;e.pos<r;){if(n=e.src.charCodeAt(e.pos),n===93&&(i--,i===0)){a=!0;break}if(o=e.pos,e.md.inline.skipToken(e),n===91){if(o===e.pos-1)i++;else if(u)return e.pos=s,-1}}let c=-1;return a&&(c=e.pos),e.pos=s,c}function Ca(e,t,u){let i,a=t;const n={ok:!1,pos:0,str:""};if(e.charCodeAt(a)===60){for(a++;a<u;){if(i=e.charCodeAt(a),i===10||i===60)return n;if(i===62)return n.pos=a+1,n.str=Fe(e.slice(t+1,a)),n.ok=!0,n;if(i===92&&a+1<u){a+=2;continue}a++}return n}let o=0;for(;a<u&&(i=e.charCodeAt(a),!(i===32||i<32||i===127));){if(i===92&&a+1<u){if(e.charCodeAt(a+1)===32)break;a+=2;continue}if(i===40&&(o++,o>32))return n;if(i===41){if(o===0)break;o--}a++}return t===a||o!==0||(n.str=Fe(e.slice(t,a)),n.pos=a,n.ok=!0),n}function Ea(e,t,u,i){let a,n=t;const o={ok:!1,can_continue:!1,pos:0,str:"",marker:0};if(i)o.str=i.str,o.marker=i.marker;else{if(n>=u)return o;let r=e.charCodeAt(n);if(r!==34&&r!==39&&r!==40)return o;t++,n++,r===40&&(r=41),o.marker=r}for(;n<u;){if(a=e.charCodeAt(n),a===o.marker)return o.pos=n+1,o.str+=Fe(e.slice(t,n)),o.ok=!0,o;if(a===40&&o.marker===41)return o;a===92&&n+1<u&&n++,n++}return o.can_continue=!0,o.str+=Fe(e.slice(t,n)),o}const Da=Object.freeze(Object.defineProperty({__proto__:null,parseLinkDestination:Ca,parseLinkLabel:va,parseLinkTitle:Ea},Symbol.toStringTag,{value:"Module"})),ae={};ae.code_inline=function(e,t,u,i,a){const n=e[t];return"<code"+a.renderAttrs(n)+">"+pe(n.content)+"</code>"};ae.code_block=function(e,t,u,i,a){const n=e[t];return"<pre"+a.renderAttrs(n)+"><code>"+pe(e[t].content)+`</code></pre>
`};ae.fence=function(e,t,u,i,a){const n=e[t],o=n.info?Fe(n.info).trim():"";let r="",s="";if(o){const d=o.split(/(\s+)/g);r=d[0],s=d.slice(2).join("")}let c;if(u.highlight?c=u.highlight(n.content,r,s)||pe(n.content):c=pe(n.content),c.indexOf("<pre")===0)return c+`
`;if(o){const d=n.attrIndex("class"),f=n.attrs?n.attrs.slice():[];d<0?f.push(["class",u.langPrefix+r]):(f[d]=f[d].slice(),f[d][1]+=" "+u.langPrefix+r);const b={attrs:f};return`<pre><code${a.renderAttrs(b)}>${c}</code></pre>
`}return`<pre><code${a.renderAttrs(n)}>${c}</code></pre>
`};ae.image=function(e,t,u,i,a){const n=e[t];return n.attrs[n.attrIndex("alt")][1]=a.renderInlineAsText(n.children,u,i),a.renderToken(e,t,u)};ae.hardbreak=function(e,t,u){return u.xhtmlOut?`<br />
`:`<br>
`};ae.softbreak=function(e,t,u){return u.breaks?u.xhtmlOut?`<br />
`:`<br>
`:`
`};ae.text=function(e,t){return pe(e[t].content)};ae.html_block=function(e,t){return e[t].content};ae.html_inline=function(e,t){return e[t].content};function Ie(){this.rules=mt({},ae)}Ie.prototype.renderAttrs=function(t){let u,i,a;if(!t.attrs)return"";for(a="",u=0,i=t.attrs.length;u<i;u++)a+=" "+pe(t.attrs[u][0])+'="'+pe(t.attrs[u][1])+'"';return a};Ie.prototype.renderToken=function(t,u,i){const a=t[u];let n="";if(a.hidden)return"";a.block&&a.nesting!==-1&&u&&t[u-1].hidden&&(n+=`
`),n+=(a.nesting===-1?"</":"<")+a.tag,n+=this.renderAttrs(a),a.nesting===0&&i.xhtmlOut&&(n+=" /");let o=!1;if(a.block&&(o=!0,a.nesting===1&&u+1<t.length)){const r=t[u+1];(r.type==="inline"||r.hidden||r.nesting===-1&&r.tag===a.tag)&&(o=!1)}return n+=o?`>
`:">",n};Ie.prototype.renderInline=function(e,t,u){let i="";const a=this.rules;for(let n=0,o=e.length;n<o;n++){const r=e[n].type;typeof a[r]<"u"?i+=a[r](e,n,t,u,this):i+=this.renderToken(e,n,t)}return i};Ie.prototype.renderInlineAsText=function(e,t,u){let i="";for(let a=0,n=e.length;a<n;a++)switch(e[a].type){case"text":i+=e[a].content;break;case"image":i+=this.renderInlineAsText(e[a].children,t,u);break;case"html_inline":case"html_block":i+=e[a].content;break;case"softbreak":case"hardbreak":i+=`
`;break}return i};Ie.prototype.render=function(e,t,u){let i="";const a=this.rules;for(let n=0,o=e.length;n<o;n++){const r=e[n].type;r==="inline"?i+=this.renderInline(e[n].children,t,u):typeof a[r]<"u"?i+=a[r](e,n,t,u,this):i+=this.renderToken(e,n,t,u)}return i};function Z(){this.__rules__=[],this.__cache__=null}Z.prototype.__find__=function(e){for(let t=0;t<this.__rules__.length;t++)if(this.__rules__[t].name===e)return t;return-1};Z.prototype.__compile__=function(){const e=this,t=[""];e.__rules__.forEach(function(u){u.enabled&&u.alt.forEach(function(i){t.indexOf(i)<0&&t.push(i)})}),e.__cache__={},t.forEach(function(u){e.__cache__[u]=[],e.__rules__.forEach(function(i){i.enabled&&(u&&i.alt.indexOf(u)<0||e.__cache__[u].push(i.fn))})})};Z.prototype.at=function(e,t,u){const i=this.__find__(e),a=u||{};if(i===-1)throw new Error("Parser rule not found: "+e);this.__rules__[i].fn=t,this.__rules__[i].alt=a.alt||[],this.__cache__=null};Z.prototype.before=function(e,t,u,i){const a=this.__find__(e),n=i||{};if(a===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(a,0,{name:t,enabled:!0,fn:u,alt:n.alt||[]}),this.__cache__=null};Z.prototype.after=function(e,t,u,i){const a=this.__find__(e),n=i||{};if(a===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(a+1,0,{name:t,enabled:!0,fn:u,alt:n.alt||[]}),this.__cache__=null};Z.prototype.push=function(e,t,u){const i=u||{};this.__rules__.push({name:e,enabled:!0,fn:t,alt:i.alt||[]}),this.__cache__=null};Z.prototype.enable=function(e,t){Array.isArray(e)||(e=[e]);const u=[];return e.forEach(function(i){const a=this.__find__(i);if(a<0){if(t)return;throw new Error("Rules manager: invalid rule name "+i)}this.__rules__[a].enabled=!0,u.push(i)},this),this.__cache__=null,u};Z.prototype.enableOnly=function(e,t){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(u){u.enabled=!1}),this.enable(e,t)};Z.prototype.disable=function(e,t){Array.isArray(e)||(e=[e]);const u=[];return e.forEach(function(i){const a=this.__find__(i);if(a<0){if(t)return;throw new Error("Rules manager: invalid rule name "+i)}this.__rules__[a].enabled=!1,u.push(i)},this),this.__cache__=null,u};Z.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};function K(e,t,u){this.type=e,this.tag=t,this.attrs=null,this.map=null,this.nesting=u,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}K.prototype.attrIndex=function(t){if(!this.attrs)return-1;const u=this.attrs;for(let i=0,a=u.length;i<a;i++)if(u[i][0]===t)return i;return-1};K.prototype.attrPush=function(t){this.attrs?this.attrs.push(t):this.attrs=[t]};K.prototype.attrSet=function(t,u){const i=this.attrIndex(t),a=[t,u];i<0?this.attrPush(a):this.attrs[i]=a};K.prototype.attrGet=function(t){const u=this.attrIndex(t);let i=null;return u>=0&&(i=this.attrs[u][1]),i};K.prototype.attrJoin=function(t,u){const i=this.attrIndex(t);i<0?this.attrPush([t,u]):this.attrs[i][1]=this.attrs[i][1]+" "+u};function _n(e,t,u){this.src=e,this.env=u,this.tokens=[],this.inlineMode=!1,this.md=t}_n.prototype.Token=K;const Sa=/\r\n?|\n/g,Ta=/\0/g;function Fa(e){let t;t=e.src.replace(Sa,`
`),t=t.replace(Ta,"�"),e.src=t}function Ia(e){let t;e.inlineMode?(t=new e.Token("inline","",0),t.content=e.src,t.map=[0,1],t.children=[],e.tokens.push(t)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}function Pa(e){const t=e.tokens;for(let u=0,i=t.length;u<i;u++){const a=t[u];a.type==="inline"&&e.md.inline.parse(a.content,e.md,e.env,a.children)}}function Ra(e){return/^<a[>\s]/i.test(e)}function Ma(e){return/^<\/a\s*>/i.test(e)}function La(e){const t=e.tokens;if(e.md.options.linkify)for(let u=0,i=t.length;u<i;u++){if(t[u].type!=="inline"||!e.md.linkify.pretest(t[u].content))continue;let a=t[u].children,n=0;for(let o=a.length-1;o>=0;o--){const r=a[o];if(r.type==="link_close"){for(o--;a[o].level!==r.level&&a[o].type!=="link_open";)o--;continue}if(r.type==="html_inline"&&(Ra(r.content)&&n>0&&n--,Ma(r.content)&&n++),!(n>0)&&r.type==="text"&&e.md.linkify.test(r.content)){const s=r.content;let c=e.md.linkify.match(s);const d=[];let f=r.level,b=0;c.length>0&&c[0].index===0&&o>0&&a[o-1].type==="text_special"&&(c=c.slice(1));for(let p=0;p<c.length;p++){const h=c[p].url,C=e.md.normalizeLink(h);if(!e.md.validateLink(C))continue;let E=c[p].text;c[p].schema?c[p].schema==="mailto:"&&!/^mailto:/i.test(E)?E=e.md.normalizeLinkText("mailto:"+E).replace(/^mailto:/,""):E=e.md.normalizeLinkText(E):E=e.md.normalizeLinkText("http://"+E).replace(/^http:\/\//,"");const I=c[p].index;if(I>b){const w=new e.Token("text","",0);w.content=s.slice(b,I),w.level=f,d.push(w)}const _=new e.Token("link_open","a",1);_.attrs=[["href",C]],_.level=f++,_.markup="linkify",_.info="auto",d.push(_);const A=new e.Token("text","",0);A.content=E,A.level=f,d.push(A);const k=new e.Token("link_close","a",-1);k.level=--f,k.markup="linkify",k.info="auto",d.push(k),b=c[p].lastIndex}if(b<s.length){const p=new e.Token("text","",0);p.content=s.slice(b),p.level=f,d.push(p)}t[u].children=a=yn(a,o,d)}}}}const wn=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,Oa=/\((c|tm|r)\)/i,za=/\((c|tm|r)\)/ig,Na={c:"©",r:"®",tm:"™"};function ja(e,t){return Na[t.toLowerCase()]}function Ba(e){let t=0;for(let u=e.length-1;u>=0;u--){const i=e[u];i.type==="text"&&!t&&(i.content=i.content.replace(za,ja)),i.type==="link_open"&&i.info==="auto"&&t--,i.type==="link_close"&&i.info==="auto"&&t++}}function qa(e){let t=0;for(let u=e.length-1;u>=0;u--){const i=e[u];i.type==="text"&&!t&&wn.test(i.content)&&(i.content=i.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1—").replace(/(^|\s)--(?=\s|$)/mg,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1–")),i.type==="link_open"&&i.info==="auto"&&t--,i.type==="link_close"&&i.info==="auto"&&t++}}function Wa(e){let t;if(e.md.options.typographer)for(t=e.tokens.length-1;t>=0;t--)e.tokens[t].type==="inline"&&(Oa.test(e.tokens[t].content)&&Ba(e.tokens[t].children),wn.test(e.tokens[t].content)&&qa(e.tokens[t].children))}const Ua=/['"]/,Qu=/['"]/g,Zu="’";function ct(e,t,u){return e.slice(0,t)+u+e.slice(t+1)}function Ha(e,t){let u;const i=[];for(let a=0;a<e.length;a++){const n=e[a],o=e[a].level;for(u=i.length-1;u>=0&&!(i[u].level<=o);u--);if(i.length=u+1,n.type!=="text")continue;let r=n.content,s=0,c=r.length;e:for(;s<c;){Qu.lastIndex=s;const d=Qu.exec(r);if(!d)break;let f=!0,b=!0;s=d.index+1;const p=d[0]==="'";let h=32;if(d.index-1>=0)h=r.charCodeAt(d.index-1);else for(u=a-1;u>=0&&!(e[u].type==="softbreak"||e[u].type==="hardbreak");u--)if(e[u].content){h=e[u].content.charCodeAt(e[u].content.length-1);break}let C=32;if(s<c)C=r.charCodeAt(s);else for(u=a+1;u<e.length&&!(e[u].type==="softbreak"||e[u].type==="hardbreak");u++)if(e[u].content){C=e[u].content.charCodeAt(0);break}const E=Ge(h)||He(String.fromCharCode(h)),I=Ge(C)||He(String.fromCharCode(C)),_=Ue(h),A=Ue(C);if(A?f=!1:I&&(_||E||(f=!1)),_?b=!1:E&&(A||I||(b=!1)),C===34&&d[0]==='"'&&h>=48&&h<=57&&(b=f=!1),f&&b&&(f=E,b=I),!f&&!b){p&&(n.content=ct(n.content,d.index,Zu));continue}if(b)for(u=i.length-1;u>=0;u--){let k=i[u];if(i[u].level<o)break;if(k.single===p&&i[u].level===o){k=i[u];let w,v;p?(w=t.md.options.quotes[2],v=t.md.options.quotes[3]):(w=t.md.options.quotes[0],v=t.md.options.quotes[1]),n.content=ct(n.content,d.index,v),e[k.token].content=ct(e[k.token].content,k.pos,w),s+=v.length-1,k.token===a&&(s+=w.length-1),r=n.content,c=r.length,i.length=u;continue e}}f?i.push({token:a,pos:d.index,single:p,level:o}):b&&p&&(n.content=ct(n.content,d.index,Zu))}}}function Ga(e){if(e.md.options.typographer)for(let t=e.tokens.length-1;t>=0;t--)e.tokens[t].type!=="inline"||!Ua.test(e.tokens[t].content)||Ha(e.tokens[t].children,e)}function $a(e){let t,u;const i=e.tokens,a=i.length;for(let n=0;n<a;n++){if(i[n].type!=="inline")continue;const o=i[n].children,r=o.length;for(t=0;t<r;t++)o[t].type==="text_special"&&(o[t].type="text");for(t=u=0;t<r;t++)o[t].type==="text"&&t+1<r&&o[t+1].type==="text"?o[t+1].content=o[t].content+o[t+1].content:(t!==u&&(o[u]=o[t]),u++);t!==u&&(o.length=u)}}const Nt=[["normalize",Fa],["block",Ia],["inline",Pa],["linkify",La],["replacements",Wa],["smartquotes",Ga],["text_join",$a]];function eu(){this.ruler=new Z;for(let e=0;e<Nt.length;e++)this.ruler.push(Nt[e][0],Nt[e][1])}eu.prototype.process=function(e){const t=this.ruler.getRules("");for(let u=0,i=t.length;u<i;u++)t[u](e)};eu.prototype.State=_n;function re(e,t,u,i){this.src=e,this.md=t,this.env=u,this.tokens=i,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0;const a=this.src;for(let n=0,o=0,r=0,s=0,c=a.length,d=!1;o<c;o++){const f=a.charCodeAt(o);if(!d)if(R(f)){r++,f===9?s+=4-s%4:s++;continue}else d=!0;(f===10||o===c-1)&&(f!==10&&o++,this.bMarks.push(n),this.eMarks.push(o),this.tShift.push(r),this.sCount.push(s),this.bsCount.push(0),d=!1,r=0,s=0,n=o+1)}this.bMarks.push(a.length),this.eMarks.push(a.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}re.prototype.push=function(e,t,u){const i=new K(e,t,u);return i.block=!0,u<0&&this.level--,i.level=this.level,u>0&&this.level++,this.tokens.push(i),i};re.prototype.isEmpty=function(t){return this.bMarks[t]+this.tShift[t]>=this.eMarks[t]};re.prototype.skipEmptyLines=function(t){for(let u=this.lineMax;t<u&&!(this.bMarks[t]+this.tShift[t]<this.eMarks[t]);t++);return t};re.prototype.skipSpaces=function(t){for(let u=this.src.length;t<u;t++){const i=this.src.charCodeAt(t);if(!R(i))break}return t};re.prototype.skipSpacesBack=function(t,u){if(t<=u)return t;for(;t>u;)if(!R(this.src.charCodeAt(--t)))return t+1;return t};re.prototype.skipChars=function(t,u){for(let i=this.src.length;t<i&&this.src.charCodeAt(t)===u;t++);return t};re.prototype.skipCharsBack=function(t,u,i){if(t<=i)return t;for(;t>i;)if(u!==this.src.charCodeAt(--t))return t+1;return t};re.prototype.getLines=function(t,u,i,a){if(t>=u)return"";const n=new Array(u-t);for(let o=0,r=t;r<u;r++,o++){let s=0;const c=this.bMarks[r];let d=c,f;for(r+1<u||a?f=this.eMarks[r]+1:f=this.eMarks[r];d<f&&s<i;){const b=this.src.charCodeAt(d);if(R(b))b===9?s+=4-(s+this.bsCount[r])%4:s++;else if(d-c<this.tShift[r])s++;else break;d++}s>i?n[o]=new Array(s-i+1).join(" ")+this.src.slice(d,f):n[o]=this.src.slice(d,f)}return n.join("")};re.prototype.Token=K;const Va=65536;function jt(e,t){const u=e.bMarks[t]+e.tShift[t],i=e.eMarks[t];return e.src.slice(u,i)}function Yu(e){const t=[],u=e.length;let i=0,a=e.charCodeAt(i),n=!1,o=0,r="";for(;i<u;)a===124&&(n?(r+=e.substring(o,i-1),o=i):(t.push(r+e.substring(o,i)),r="",o=i+1)),n=a===92,i++,a=e.charCodeAt(i);return t.push(r+e.substring(o)),t}function Qa(e,t,u,i){if(t+2>u)return!1;let a=t+1;if(e.sCount[a]<e.blkIndent||e.sCount[a]-e.blkIndent>=4)return!1;let n=e.bMarks[a]+e.tShift[a];if(n>=e.eMarks[a])return!1;const o=e.src.charCodeAt(n++);if(o!==124&&o!==45&&o!==58||n>=e.eMarks[a])return!1;const r=e.src.charCodeAt(n++);if(r!==124&&r!==45&&r!==58&&!R(r)||o===45&&R(r))return!1;for(;n<e.eMarks[a];){const k=e.src.charCodeAt(n);if(k!==124&&k!==45&&k!==58&&!R(k))return!1;n++}let s=jt(e,t+1),c=s.split("|");const d=[];for(let k=0;k<c.length;k++){const w=c[k].trim();if(!w){if(k===0||k===c.length-1)continue;return!1}if(!/^:?-+:?$/.test(w))return!1;w.charCodeAt(w.length-1)===58?d.push(w.charCodeAt(0)===58?"center":"right"):w.charCodeAt(0)===58?d.push("left"):d.push("")}if(s=jt(e,t).trim(),s.indexOf("|")===-1||e.sCount[t]-e.blkIndent>=4)return!1;c=Yu(s),c.length&&c[0]===""&&c.shift(),c.length&&c[c.length-1]===""&&c.pop();const f=c.length;if(f===0||f!==d.length)return!1;if(i)return!0;const b=e.parentType;e.parentType="table";const p=e.md.block.ruler.getRules("blockquote"),h=e.push("table_open","table",1),C=[t,0];h.map=C;const E=e.push("thead_open","thead",1);E.map=[t,t+1];const I=e.push("tr_open","tr",1);I.map=[t,t+1];for(let k=0;k<c.length;k++){const w=e.push("th_open","th",1);d[k]&&(w.attrs=[["style","text-align:"+d[k]]]);const v=e.push("inline","",0);v.content=c[k].trim(),v.children=[],e.push("th_close","th",-1)}e.push("tr_close","tr",-1),e.push("thead_close","thead",-1);let _,A=0;for(a=t+2;a<u&&!(e.sCount[a]<e.blkIndent);a++){let k=!1;for(let v=0,L=p.length;v<L;v++)if(p[v](e,a,u,!0)){k=!0;break}if(k||(s=jt(e,a).trim(),!s)||e.sCount[a]-e.blkIndent>=4||(c=Yu(s),c.length&&c[0]===""&&c.shift(),c.length&&c[c.length-1]===""&&c.pop(),A+=f-c.length,A>Va))break;if(a===t+2){const v=e.push("tbody_open","tbody",1);v.map=_=[t+2,0]}const w=e.push("tr_open","tr",1);w.map=[a,a+1];for(let v=0;v<f;v++){const L=e.push("td_open","td",1);d[v]&&(L.attrs=[["style","text-align:"+d[v]]]);const P=e.push("inline","",0);P.content=c[v]?c[v].trim():"",P.children=[],e.push("td_close","td",-1)}e.push("tr_close","tr",-1)}return _&&(e.push("tbody_close","tbody",-1),_[1]=a),e.push("table_close","table",-1),C[1]=a,e.parentType=b,e.line=a,!0}function Za(e,t,u){if(e.sCount[t]-e.blkIndent<4)return!1;let i=t+1,a=i;for(;i<u;){if(e.isEmpty(i)){i++;continue}if(e.sCount[i]-e.blkIndent>=4){i++,a=i;continue}break}e.line=a;const n=e.push("code_block","code",0);return n.content=e.getLines(t,a,4+e.blkIndent,!1)+`
`,n.map=[t,e.line],!0}function Ya(e,t,u,i){let a=e.bMarks[t]+e.tShift[t],n=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||a+3>n)return!1;const o=e.src.charCodeAt(a);if(o!==126&&o!==96)return!1;let r=a;a=e.skipChars(a,o);let s=a-r;if(s<3)return!1;const c=e.src.slice(r,a),d=e.src.slice(a,n);if(o===96&&d.indexOf(String.fromCharCode(o))>=0)return!1;if(i)return!0;let f=t,b=!1;for(;f++,!(f>=u||(a=r=e.bMarks[f]+e.tShift[f],n=e.eMarks[f],a<n&&e.sCount[f]<e.blkIndent));)if(e.src.charCodeAt(a)===o&&!(e.sCount[f]-e.blkIndent>=4)&&(a=e.skipChars(a,o),!(a-r<s)&&(a=e.skipSpaces(a),!(a<n)))){b=!0;break}s=e.sCount[t],e.line=f+(b?1:0);const p=e.push("fence","code",0);return p.info=d,p.content=e.getLines(t+1,f,s,!0),p.markup=c,p.map=[t,e.line],!0}function Ja(e,t,u,i){let a=e.bMarks[t]+e.tShift[t],n=e.eMarks[t];const o=e.lineMax;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(a)!==62)return!1;if(i)return!0;const r=[],s=[],c=[],d=[],f=e.md.block.ruler.getRules("blockquote"),b=e.parentType;e.parentType="blockquote";let p=!1,h;for(h=t;h<u;h++){const A=e.sCount[h]<e.blkIndent;if(a=e.bMarks[h]+e.tShift[h],n=e.eMarks[h],a>=n)break;if(e.src.charCodeAt(a++)===62&&!A){let w=e.sCount[h]+1,v,L;e.src.charCodeAt(a)===32?(a++,w++,L=!1,v=!0):e.src.charCodeAt(a)===9?(v=!0,(e.bsCount[h]+w)%4===3?(a++,w++,L=!1):L=!0):v=!1;let P=w;for(r.push(e.bMarks[h]),e.bMarks[h]=a;a<n;){const ee=e.src.charCodeAt(a);if(R(ee))ee===9?P+=4-(P+e.bsCount[h]+(L?1:0))%4:P++;else break;a++}p=a>=n,s.push(e.bsCount[h]),e.bsCount[h]=e.sCount[h]+1+(v?1:0),c.push(e.sCount[h]),e.sCount[h]=P-w,d.push(e.tShift[h]),e.tShift[h]=a-e.bMarks[h];continue}if(p)break;let k=!1;for(let w=0,v=f.length;w<v;w++)if(f[w](e,h,u,!0)){k=!0;break}if(k){e.lineMax=h,e.blkIndent!==0&&(r.push(e.bMarks[h]),s.push(e.bsCount[h]),d.push(e.tShift[h]),c.push(e.sCount[h]),e.sCount[h]-=e.blkIndent);break}r.push(e.bMarks[h]),s.push(e.bsCount[h]),d.push(e.tShift[h]),c.push(e.sCount[h]),e.sCount[h]=-1}const C=e.blkIndent;e.blkIndent=0;const E=e.push("blockquote_open","blockquote",1);E.markup=">";const I=[t,0];E.map=I,e.md.block.tokenize(e,t,h);const _=e.push("blockquote_close","blockquote",-1);_.markup=">",e.lineMax=o,e.parentType=b,I[1]=e.line;for(let A=0;A<d.length;A++)e.bMarks[A+t]=r[A],e.tShift[A+t]=d[A],e.sCount[A+t]=c[A],e.bsCount[A+t]=s[A];return e.blkIndent=C,!0}function Xa(e,t,u,i){const a=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let n=e.bMarks[t]+e.tShift[t];const o=e.src.charCodeAt(n++);if(o!==42&&o!==45&&o!==95)return!1;let r=1;for(;n<a;){const c=e.src.charCodeAt(n++);if(c!==o&&!R(c))return!1;c===o&&r++}if(r<3)return!1;if(i)return!0;e.line=t+1;const s=e.push("hr","hr",0);return s.map=[t,e.line],s.markup=Array(r+1).join(String.fromCharCode(o)),!0}function Ju(e,t){const u=e.eMarks[t];let i=e.bMarks[t]+e.tShift[t];const a=e.src.charCodeAt(i++);if(a!==42&&a!==45&&a!==43)return-1;if(i<u){const n=e.src.charCodeAt(i);if(!R(n))return-1}return i}function Xu(e,t){const u=e.bMarks[t]+e.tShift[t],i=e.eMarks[t];let a=u;if(a+1>=i)return-1;let n=e.src.charCodeAt(a++);if(n<48||n>57)return-1;for(;;){if(a>=i)return-1;if(n=e.src.charCodeAt(a++),n>=48&&n<=57){if(a-u>=10)return-1;continue}if(n===41||n===46)break;return-1}return a<i&&(n=e.src.charCodeAt(a),!R(n))?-1:a}function Ka(e,t){const u=e.level+2;for(let i=t+2,a=e.tokens.length-2;i<a;i++)e.tokens[i].level===u&&e.tokens[i].type==="paragraph_open"&&(e.tokens[i+2].hidden=!0,e.tokens[i].hidden=!0,i+=2)}function er(e,t,u,i){let a,n,o,r,s=t,c=!0;if(e.sCount[s]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[s]-e.listIndent>=4&&e.sCount[s]<e.blkIndent)return!1;let d=!1;i&&e.parentType==="paragraph"&&e.sCount[s]>=e.blkIndent&&(d=!0);let f,b,p;if((p=Xu(e,s))>=0){if(f=!0,o=e.bMarks[s]+e.tShift[s],b=Number(e.src.slice(o,p-1)),d&&b!==1)return!1}else if((p=Ju(e,s))>=0)f=!1;else return!1;if(d&&e.skipSpaces(p)>=e.eMarks[s])return!1;if(i)return!0;const h=e.src.charCodeAt(p-1),C=e.tokens.length;f?(r=e.push("ordered_list_open","ol",1),b!==1&&(r.attrs=[["start",b]])):r=e.push("bullet_list_open","ul",1);const E=[s,0];r.map=E,r.markup=String.fromCharCode(h);let I=!1;const _=e.md.block.ruler.getRules("list"),A=e.parentType;for(e.parentType="list";s<u;){n=p,a=e.eMarks[s];const k=e.sCount[s]+p-(e.bMarks[s]+e.tShift[s]);let w=k;for(;n<a;){const te=e.src.charCodeAt(n);if(te===9)w+=4-(w+e.bsCount[s])%4;else if(te===32)w++;else break;n++}const v=n;let L;v>=a?L=1:L=w-k,L>4&&(L=1);const P=k+L;r=e.push("list_item_open","li",1),r.markup=String.fromCharCode(h);const ee=[s,0];r.map=ee,f&&(r.info=e.src.slice(o,p-1));const D=e.tight,Pe=e.tShift[s],X=e.sCount[s],me=e.listIndent;if(e.listIndent=e.blkIndent,e.blkIndent=P,e.tight=!0,e.tShift[s]=v-e.bMarks[s],e.sCount[s]=w,v>=a&&e.isEmpty(s+1)?e.line=Math.min(e.line+2,u):e.md.block.tokenize(e,s,u,!0),(!e.tight||I)&&(c=!1),I=e.line-s>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=me,e.tShift[s]=Pe,e.sCount[s]=X,e.tight=D,r=e.push("list_item_close","li",-1),r.markup=String.fromCharCode(h),s=e.line,ee[1]=s,s>=u||e.sCount[s]<e.blkIndent||e.sCount[s]-e.blkIndent>=4)break;let Re=!1;for(let te=0,Me=_.length;te<Me;te++)if(_[te](e,s,u,!0)){Re=!0;break}if(Re)break;if(f){if(p=Xu(e,s),p<0)break;o=e.bMarks[s]+e.tShift[s]}else if(p=Ju(e,s),p<0)break;if(h!==e.src.charCodeAt(p-1))break}return f?r=e.push("ordered_list_close","ol",-1):r=e.push("bullet_list_close","ul",-1),r.markup=String.fromCharCode(h),E[1]=s,e.line=s,e.parentType=A,c&&Ka(e,C),!0}function tr(e,t,u,i){let a=e.bMarks[t]+e.tShift[t],n=e.eMarks[t],o=t+1;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(a)!==91)return!1;function r(_){const A=e.lineMax;if(_>=A||e.isEmpty(_))return null;let k=!1;if(e.sCount[_]-e.blkIndent>3&&(k=!0),e.sCount[_]<0&&(k=!0),!k){const L=e.md.block.ruler.getRules("reference"),P=e.parentType;e.parentType="reference";let ee=!1;for(let D=0,Pe=L.length;D<Pe;D++)if(L[D](e,_,A,!0)){ee=!0;break}if(e.parentType=P,ee)return null}const w=e.bMarks[_]+e.tShift[_],v=e.eMarks[_];return e.src.slice(w,v+1)}let s=e.src.slice(a,n+1);n=s.length;let c=-1;for(a=1;a<n;a++){const _=s.charCodeAt(a);if(_===91)return!1;if(_===93){c=a;break}else if(_===10){const A=r(o);A!==null&&(s+=A,n=s.length,o++)}else if(_===92&&(a++,a<n&&s.charCodeAt(a)===10)){const A=r(o);A!==null&&(s+=A,n=s.length,o++)}}if(c<0||s.charCodeAt(c+1)!==58)return!1;for(a=c+2;a<n;a++){const _=s.charCodeAt(a);if(_===10){const A=r(o);A!==null&&(s+=A,n=s.length,o++)}else if(!R(_))break}const d=e.md.helpers.parseLinkDestination(s,a,n);if(!d.ok)return!1;const f=e.md.normalizeLink(d.str);if(!e.md.validateLink(f))return!1;a=d.pos;const b=a,p=o,h=a;for(;a<n;a++){const _=s.charCodeAt(a);if(_===10){const A=r(o);A!==null&&(s+=A,n=s.length,o++)}else if(!R(_))break}let C=e.md.helpers.parseLinkTitle(s,a,n);for(;C.can_continue;){const _=r(o);if(_===null)break;s+=_,a=n,n=s.length,o++,C=e.md.helpers.parseLinkTitle(s,a,n,C)}let E;for(a<n&&h!==a&&C.ok?(E=C.str,a=C.pos):(E="",a=b,o=p);a<n;){const _=s.charCodeAt(a);if(!R(_))break;a++}if(a<n&&s.charCodeAt(a)!==10&&E)for(E="",a=b,o=p;a<n;){const _=s.charCodeAt(a);if(!R(_))break;a++}if(a<n&&s.charCodeAt(a)!==10)return!1;const I=bt(s.slice(1,c));return I?(i||(typeof e.env.references>"u"&&(e.env.references={}),typeof e.env.references[I]>"u"&&(e.env.references[I]={title:E,href:f}),e.line=o),!0):!1}const ur=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],nr="[a-zA-Z_:][a-zA-Z0-9:._-]*",ir="[^\"'=<>`\\x00-\\x20]+",ar="'[^']*'",rr='"[^"]*"',or="(?:"+ir+"|"+ar+"|"+rr+")",sr="(?:\\s+"+nr+"(?:\\s*=\\s*"+or+")?)",kn="<[A-Za-z][A-Za-z0-9\\-]*"+sr+"*\\s*\\/?>",An="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",cr="<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->",lr="<[?][\\s\\S]*?[?]>",dr="<![A-Za-z][^>]*>",fr="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",hr=new RegExp("^(?:"+kn+"|"+An+"|"+cr+"|"+lr+"|"+dr+"|"+fr+")"),pr=new RegExp("^(?:"+kn+"|"+An+")"),Ce=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+ur.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(pr.source+"\\s*$"),/^$/,!1]];function mr(e,t,u,i){let a=e.bMarks[t]+e.tShift[t],n=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(a)!==60)return!1;let o=e.src.slice(a,n),r=0;for(;r<Ce.length&&!Ce[r][0].test(o);r++);if(r===Ce.length)return!1;if(i)return Ce[r][2];let s=t+1;if(!Ce[r][1].test(o)){for(;s<u&&!(e.sCount[s]<e.blkIndent);s++)if(a=e.bMarks[s]+e.tShift[s],n=e.eMarks[s],o=e.src.slice(a,n),Ce[r][1].test(o)){o.length!==0&&s++;break}}e.line=s;const c=e.push("html_block","",0);return c.map=[t,s],c.content=e.getLines(t,s,e.blkIndent,!0),!0}function br(e,t,u,i){let a=e.bMarks[t]+e.tShift[t],n=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let o=e.src.charCodeAt(a);if(o!==35||a>=n)return!1;let r=1;for(o=e.src.charCodeAt(++a);o===35&&a<n&&r<=6;)r++,o=e.src.charCodeAt(++a);if(r>6||a<n&&!R(o))return!1;if(i)return!0;n=e.skipSpacesBack(n,a);const s=e.skipCharsBack(n,35,a);s>a&&R(e.src.charCodeAt(s-1))&&(n=s),e.line=t+1;const c=e.push("heading_open","h"+String(r),1);c.markup="########".slice(0,r),c.map=[t,e.line];const d=e.push("inline","",0);d.content=e.src.slice(a,n).trim(),d.map=[t,e.line],d.children=[];const f=e.push("heading_close","h"+String(r),-1);return f.markup="########".slice(0,r),!0}function gr(e,t,u){const i=e.md.block.ruler.getRules("paragraph");if(e.sCount[t]-e.blkIndent>=4)return!1;const a=e.parentType;e.parentType="paragraph";let n=0,o,r=t+1;for(;r<u&&!e.isEmpty(r);r++){if(e.sCount[r]-e.blkIndent>3)continue;if(e.sCount[r]>=e.blkIndent){let p=e.bMarks[r]+e.tShift[r];const h=e.eMarks[r];if(p<h&&(o=e.src.charCodeAt(p),(o===45||o===61)&&(p=e.skipChars(p,o),p=e.skipSpaces(p),p>=h))){n=o===61?1:2;break}}if(e.sCount[r]<0)continue;let b=!1;for(let p=0,h=i.length;p<h;p++)if(i[p](e,r,u,!0)){b=!0;break}if(b)break}if(!n)return!1;const s=e.getLines(t,r,e.blkIndent,!1).trim();e.line=r+1;const c=e.push("heading_open","h"+String(n),1);c.markup=String.fromCharCode(o),c.map=[t,e.line];const d=e.push("inline","",0);d.content=s,d.map=[t,e.line-1],d.children=[];const f=e.push("heading_close","h"+String(n),-1);return f.markup=String.fromCharCode(o),e.parentType=a,!0}function yr(e,t,u){const i=e.md.block.ruler.getRules("paragraph"),a=e.parentType;let n=t+1;for(e.parentType="paragraph";n<u&&!e.isEmpty(n);n++){if(e.sCount[n]-e.blkIndent>3||e.sCount[n]<0)continue;let c=!1;for(let d=0,f=i.length;d<f;d++)if(i[d](e,n,u,!0)){c=!0;break}if(c)break}const o=e.getLines(t,n,e.blkIndent,!1).trim();e.line=n;const r=e.push("paragraph_open","p",1);r.map=[t,e.line];const s=e.push("inline","",0);return s.content=o,s.map=[t,e.line],s.children=[],e.push("paragraph_close","p",-1),e.parentType=a,!0}const lt=[["table",Qa,["paragraph","reference"]],["code",Za],["fence",Ya,["paragraph","reference","blockquote","list"]],["blockquote",Ja,["paragraph","reference","blockquote","list"]],["hr",Xa,["paragraph","reference","blockquote","list"]],["list",er,["paragraph","reference","blockquote"]],["reference",tr],["html_block",mr,["paragraph","reference","blockquote"]],["heading",br,["paragraph","reference","blockquote"]],["lheading",gr],["paragraph",yr]];function gt(){this.ruler=new Z;for(let e=0;e<lt.length;e++)this.ruler.push(lt[e][0],lt[e][1],{alt:(lt[e][2]||[]).slice()})}gt.prototype.tokenize=function(e,t,u){const i=this.ruler.getRules(""),a=i.length,n=e.md.options.maxNesting;let o=t,r=!1;for(;o<u&&(e.line=o=e.skipEmptyLines(o),!(o>=u||e.sCount[o]<e.blkIndent));){if(e.level>=n){e.line=u;break}const s=e.line;let c=!1;for(let d=0;d<a;d++)if(c=i[d](e,o,u,!1),c){if(s>=e.line)throw new Error("block rule didn't increment state.line");break}if(!c)throw new Error("none of the block rules matched");e.tight=!r,e.isEmpty(e.line-1)&&(r=!0),o=e.line,o<u&&e.isEmpty(o)&&(r=!0,o++,e.line=o)}};gt.prototype.parse=function(e,t,u,i){if(!e)return;const a=new this.State(e,t,u,i);this.tokenize(a,a.line,a.lineMax)};gt.prototype.State=re;function Ze(e,t,u,i){this.src=e,this.env=u,this.md=t,this.tokens=i,this.tokens_meta=Array(i.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}Ze.prototype.pushPending=function(){const e=new K("text","",0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending="",e};Ze.prototype.push=function(e,t,u){this.pending&&this.pushPending();const i=new K(e,t,u);let a=null;return u<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),i.level=this.level,u>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],a={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(i),this.tokens_meta.push(a),i};Ze.prototype.scanDelims=function(e,t){const u=this.posMax,i=this.src.charCodeAt(e),a=e>0?this.src.charCodeAt(e-1):32;let n=e;for(;n<u&&this.src.charCodeAt(n)===i;)n++;const o=n-e,r=n<u?this.src.charCodeAt(n):32,s=Ge(a)||He(String.fromCharCode(a)),c=Ge(r)||He(String.fromCharCode(r)),d=Ue(a),f=Ue(r),b=!f&&(!c||d||s),p=!d&&(!s||f||c);return{can_open:b&&(t||!p||s),can_close:p&&(t||!b||c),length:o}};Ze.prototype.Token=K;function xr(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function _r(e,t){let u=e.pos;for(;u<e.posMax&&!xr(e.src.charCodeAt(u));)u++;return u===e.pos?!1:(t||(e.pending+=e.src.slice(e.pos,u)),e.pos=u,!0)}const wr=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function kr(e,t){if(!e.md.options.linkify||e.linkLevel>0)return!1;const u=e.pos,i=e.posMax;if(u+3>i||e.src.charCodeAt(u)!==58||e.src.charCodeAt(u+1)!==47||e.src.charCodeAt(u+2)!==47)return!1;const a=e.pending.match(wr);if(!a)return!1;const n=a[1],o=e.md.linkify.matchAtStart(e.src.slice(u-n.length));if(!o)return!1;let r=o.url;if(r.length<=n.length)return!1;r=r.replace(/\*+$/,"");const s=e.md.normalizeLink(r);if(!e.md.validateLink(s))return!1;if(!t){e.pending=e.pending.slice(0,-n.length);const c=e.push("link_open","a",1);c.attrs=[["href",s]],c.markup="linkify",c.info="auto";const d=e.push("text","",0);d.content=e.md.normalizeLinkText(r);const f=e.push("link_close","a",-1);f.markup="linkify",f.info="auto"}return e.pos+=r.length-n.length,!0}function Ar(e,t){let u=e.pos;if(e.src.charCodeAt(u)!==10)return!1;const i=e.pending.length-1,a=e.posMax;if(!t)if(i>=0&&e.pending.charCodeAt(i)===32)if(i>=1&&e.pending.charCodeAt(i-1)===32){let n=i-1;for(;n>=1&&e.pending.charCodeAt(n-1)===32;)n--;e.pending=e.pending.slice(0,n),e.push("hardbreak","br",0)}else e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0);else e.push("softbreak","br",0);for(u++;u<a&&R(e.src.charCodeAt(u));)u++;return e.pos=u,!0}const tu=[];for(let e=0;e<256;e++)tu.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e){tu[e.charCodeAt(0)]=1});function vr(e,t){let u=e.pos;const i=e.posMax;if(e.src.charCodeAt(u)!==92||(u++,u>=i))return!1;let a=e.src.charCodeAt(u);if(a===10){for(t||e.push("hardbreak","br",0),u++;u<i&&(a=e.src.charCodeAt(u),!!R(a));)u++;return e.pos=u,!0}let n=e.src[u];if(a>=55296&&a<=56319&&u+1<i){const r=e.src.charCodeAt(u+1);r>=56320&&r<=57343&&(n+=e.src[u+1],u++)}const o="\\"+n;if(!t){const r=e.push("text_special","",0);a<256&&tu[a]!==0?r.content=n:r.content=o,r.markup=o,r.info="escape"}return e.pos=u+1,!0}function Cr(e,t){let u=e.pos;if(e.src.charCodeAt(u)!==96)return!1;const a=u;u++;const n=e.posMax;for(;u<n&&e.src.charCodeAt(u)===96;)u++;const o=e.src.slice(a,u),r=o.length;if(e.backticksScanned&&(e.backticks[r]||0)<=a)return t||(e.pending+=o),e.pos+=r,!0;let s=u,c;for(;(c=e.src.indexOf("`",s))!==-1;){for(s=c+1;s<n&&e.src.charCodeAt(s)===96;)s++;const d=s-c;if(d===r){if(!t){const f=e.push("code_inline","code",0);f.markup=o,f.content=e.src.slice(u,c).replace(/\n/g," ").replace(/^ (.+) $/,"$1")}return e.pos=s,!0}e.backticks[d]=c}return e.backticksScanned=!0,t||(e.pending+=o),e.pos+=r,!0}function Er(e,t){const u=e.pos,i=e.src.charCodeAt(u);if(t||i!==126)return!1;const a=e.scanDelims(e.pos,!0);let n=a.length;const o=String.fromCharCode(i);if(n<2)return!1;let r;n%2&&(r=e.push("text","",0),r.content=o,n--);for(let s=0;s<n;s+=2)r=e.push("text","",0),r.content=o+o,e.delimiters.push({marker:i,length:0,token:e.tokens.length-1,end:-1,open:a.can_open,close:a.can_close});return e.pos+=a.length,!0}function Ku(e,t){let u;const i=[],a=t.length;for(let n=0;n<a;n++){const o=t[n];if(o.marker!==126||o.end===-1)continue;const r=t[o.end];u=e.tokens[o.token],u.type="s_open",u.tag="s",u.nesting=1,u.markup="~~",u.content="",u=e.tokens[r.token],u.type="s_close",u.tag="s",u.nesting=-1,u.markup="~~",u.content="",e.tokens[r.token-1].type==="text"&&e.tokens[r.token-1].content==="~"&&i.push(r.token-1)}for(;i.length;){const n=i.pop();let o=n+1;for(;o<e.tokens.length&&e.tokens[o].type==="s_close";)o++;o--,n!==o&&(u=e.tokens[o],e.tokens[o]=e.tokens[n],e.tokens[n]=u)}}function Dr(e){const t=e.tokens_meta,u=e.tokens_meta.length;Ku(e,e.delimiters);for(let i=0;i<u;i++)t[i]&&t[i].delimiters&&Ku(e,t[i].delimiters)}const vn={tokenize:Er,postProcess:Dr};function Sr(e,t){const u=e.pos,i=e.src.charCodeAt(u);if(t||i!==95&&i!==42)return!1;const a=e.scanDelims(e.pos,i===42);for(let n=0;n<a.length;n++){const o=e.push("text","",0);o.content=String.fromCharCode(i),e.delimiters.push({marker:i,length:a.length,token:e.tokens.length-1,end:-1,open:a.can_open,close:a.can_close})}return e.pos+=a.length,!0}function en(e,t){const u=t.length;for(let i=u-1;i>=0;i--){const a=t[i];if(a.marker!==95&&a.marker!==42||a.end===-1)continue;const n=t[a.end],o=i>0&&t[i-1].end===a.end+1&&t[i-1].marker===a.marker&&t[i-1].token===a.token-1&&t[a.end+1].token===n.token+1,r=String.fromCharCode(a.marker),s=e.tokens[a.token];s.type=o?"strong_open":"em_open",s.tag=o?"strong":"em",s.nesting=1,s.markup=o?r+r:r,s.content="";const c=e.tokens[n.token];c.type=o?"strong_close":"em_close",c.tag=o?"strong":"em",c.nesting=-1,c.markup=o?r+r:r,c.content="",o&&(e.tokens[t[i-1].token].content="",e.tokens[t[a.end+1].token].content="",i--)}}function Tr(e){const t=e.tokens_meta,u=e.tokens_meta.length;en(e,e.delimiters);for(let i=0;i<u;i++)t[i]&&t[i].delimiters&&en(e,t[i].delimiters)}const Cn={tokenize:Sr,postProcess:Tr};function Fr(e,t){let u,i,a,n,o="",r="",s=e.pos,c=!0;if(e.src.charCodeAt(e.pos)!==91)return!1;const d=e.pos,f=e.posMax,b=e.pos+1,p=e.md.helpers.parseLinkLabel(e,e.pos,!0);if(p<0)return!1;let h=p+1;if(h<f&&e.src.charCodeAt(h)===40){for(c=!1,h++;h<f&&(u=e.src.charCodeAt(h),!(!R(u)&&u!==10));h++);if(h>=f)return!1;if(s=h,a=e.md.helpers.parseLinkDestination(e.src,h,e.posMax),a.ok){for(o=e.md.normalizeLink(a.str),e.md.validateLink(o)?h=a.pos:o="",s=h;h<f&&(u=e.src.charCodeAt(h),!(!R(u)&&u!==10));h++);if(a=e.md.helpers.parseLinkTitle(e.src,h,e.posMax),h<f&&s!==h&&a.ok)for(r=a.str,h=a.pos;h<f&&(u=e.src.charCodeAt(h),!(!R(u)&&u!==10));h++);}(h>=f||e.src.charCodeAt(h)!==41)&&(c=!0),h++}if(c){if(typeof e.env.references>"u")return!1;if(h<f&&e.src.charCodeAt(h)===91?(s=h+1,h=e.md.helpers.parseLinkLabel(e,h),h>=0?i=e.src.slice(s,h++):h=p+1):h=p+1,i||(i=e.src.slice(b,p)),n=e.env.references[bt(i)],!n)return e.pos=d,!1;o=n.href,r=n.title}if(!t){e.pos=b,e.posMax=p;const C=e.push("link_open","a",1),E=[["href",o]];C.attrs=E,r&&E.push(["title",r]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,e.push("link_close","a",-1)}return e.pos=h,e.posMax=f,!0}function Ir(e,t){let u,i,a,n,o,r,s,c,d="";const f=e.pos,b=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91)return!1;const p=e.pos+2,h=e.md.helpers.parseLinkLabel(e,e.pos+1,!1);if(h<0)return!1;if(n=h+1,n<b&&e.src.charCodeAt(n)===40){for(n++;n<b&&(u=e.src.charCodeAt(n),!(!R(u)&&u!==10));n++);if(n>=b)return!1;for(c=n,r=e.md.helpers.parseLinkDestination(e.src,n,e.posMax),r.ok&&(d=e.md.normalizeLink(r.str),e.md.validateLink(d)?n=r.pos:d=""),c=n;n<b&&(u=e.src.charCodeAt(n),!(!R(u)&&u!==10));n++);if(r=e.md.helpers.parseLinkTitle(e.src,n,e.posMax),n<b&&c!==n&&r.ok)for(s=r.str,n=r.pos;n<b&&(u=e.src.charCodeAt(n),!(!R(u)&&u!==10));n++);else s="";if(n>=b||e.src.charCodeAt(n)!==41)return e.pos=f,!1;n++}else{if(typeof e.env.references>"u")return!1;if(n<b&&e.src.charCodeAt(n)===91?(c=n+1,n=e.md.helpers.parseLinkLabel(e,n),n>=0?a=e.src.slice(c,n++):n=h+1):n=h+1,a||(a=e.src.slice(p,h)),o=e.env.references[bt(a)],!o)return e.pos=f,!1;d=o.href,s=o.title}if(!t){i=e.src.slice(p,h);const C=[];e.md.inline.parse(i,e.md,e.env,C);const E=e.push("image","img",0),I=[["src",d],["alt",""]];E.attrs=I,E.children=C,E.content=i,s&&I.push(["title",s])}return e.pos=n,e.posMax=b,!0}const Pr=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,Rr=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function Mr(e,t){let u=e.pos;if(e.src.charCodeAt(u)!==60)return!1;const i=e.pos,a=e.posMax;for(;;){if(++u>=a)return!1;const o=e.src.charCodeAt(u);if(o===60)return!1;if(o===62)break}const n=e.src.slice(i+1,u);if(Rr.test(n)){const o=e.md.normalizeLink(n);if(!e.md.validateLink(o))return!1;if(!t){const r=e.push("link_open","a",1);r.attrs=[["href",o]],r.markup="autolink",r.info="auto";const s=e.push("text","",0);s.content=e.md.normalizeLinkText(n);const c=e.push("link_close","a",-1);c.markup="autolink",c.info="auto"}return e.pos+=n.length+2,!0}if(Pr.test(n)){const o=e.md.normalizeLink("mailto:"+n);if(!e.md.validateLink(o))return!1;if(!t){const r=e.push("link_open","a",1);r.attrs=[["href",o]],r.markup="autolink",r.info="auto";const s=e.push("text","",0);s.content=e.md.normalizeLinkText(n);const c=e.push("link_close","a",-1);c.markup="autolink",c.info="auto"}return e.pos+=n.length+2,!0}return!1}function Lr(e){return/^<a[>\s]/i.test(e)}function Or(e){return/^<\/a\s*>/i.test(e)}function zr(e){const t=e|32;return t>=97&&t<=122}function Nr(e,t){if(!e.md.options.html)return!1;const u=e.posMax,i=e.pos;if(e.src.charCodeAt(i)!==60||i+2>=u)return!1;const a=e.src.charCodeAt(i+1);if(a!==33&&a!==63&&a!==47&&!zr(a))return!1;const n=e.src.slice(i).match(hr);if(!n)return!1;if(!t){const o=e.push("html_inline","",0);o.content=n[0],Lr(o.content)&&e.linkLevel++,Or(o.content)&&e.linkLevel--}return e.pos+=n[0].length,!0}const jr=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,Br=/^&([a-z][a-z0-9]{1,31});/i;function qr(e,t){const u=e.pos,i=e.posMax;if(e.src.charCodeAt(u)!==38||u+1>=i)return!1;if(e.src.charCodeAt(u+1)===35){const n=e.src.slice(u).match(jr);if(n){if(!t){const o=n[1][0].toLowerCase()==="x"?parseInt(n[1].slice(1),16):parseInt(n[1],10),r=e.push("text_special","",0);r.content=Kt(o)?ft(o):ft(65533),r.markup=n[0],r.info="entity"}return e.pos+=n[0].length,!0}}else{const n=e.src.slice(u).match(Br);if(n){const o=gn(n[0]);if(o!==n[0]){if(!t){const r=e.push("text_special","",0);r.content=o,r.markup=n[0],r.info="entity"}return e.pos+=n[0].length,!0}}}return!1}function tn(e){const t={},u=e.length;if(!u)return;let i=0,a=-2;const n=[];for(let o=0;o<u;o++){const r=e[o];if(n.push(0),(e[i].marker!==r.marker||a!==r.token-1)&&(i=o),a=r.token,r.length=r.length||0,!r.close)continue;t.hasOwnProperty(r.marker)||(t[r.marker]=[-1,-1,-1,-1,-1,-1]);const s=t[r.marker][(r.open?3:0)+r.length%3];let c=i-n[i]-1,d=c;for(;c>s;c-=n[c]+1){const f=e[c];if(f.marker===r.marker&&f.open&&f.end<0){let b=!1;if((f.close||r.open)&&(f.length+r.length)%3===0&&(f.length%3!==0||r.length%3!==0)&&(b=!0),!b){const p=c>0&&!e[c-1].open?n[c-1]+1:0;n[o]=o-c+p,n[c]=p,r.open=!1,f.end=o,f.close=!1,d=-1,a=-2;break}}}d!==-1&&(t[r.marker][(r.open?3:0)+(r.length||0)%3]=d)}}function Wr(e){const t=e.tokens_meta,u=e.tokens_meta.length;tn(e.delimiters);for(let i=0;i<u;i++)t[i]&&t[i].delimiters&&tn(t[i].delimiters)}function Ur(e){let t,u,i=0;const a=e.tokens,n=e.tokens.length;for(t=u=0;t<n;t++)a[t].nesting<0&&i--,a[t].level=i,a[t].nesting>0&&i++,a[t].type==="text"&&t+1<n&&a[t+1].type==="text"?a[t+1].content=a[t].content+a[t+1].content:(t!==u&&(a[u]=a[t]),u++);t!==u&&(a.length=u)}const Bt=[["text",_r],["linkify",kr],["newline",Ar],["escape",vr],["backticks",Cr],["strikethrough",vn.tokenize],["emphasis",Cn.tokenize],["link",Fr],["image",Ir],["autolink",Mr],["html_inline",Nr],["entity",qr]],qt=[["balance_pairs",Wr],["strikethrough",vn.postProcess],["emphasis",Cn.postProcess],["fragments_join",Ur]];function Ye(){this.ruler=new Z;for(let e=0;e<Bt.length;e++)this.ruler.push(Bt[e][0],Bt[e][1]);this.ruler2=new Z;for(let e=0;e<qt.length;e++)this.ruler2.push(qt[e][0],qt[e][1])}Ye.prototype.skipToken=function(e){const t=e.pos,u=this.ruler.getRules(""),i=u.length,a=e.md.options.maxNesting,n=e.cache;if(typeof n[t]<"u"){e.pos=n[t];return}let o=!1;if(e.level<a){for(let r=0;r<i;r++)if(e.level++,o=u[r](e,!0),e.level--,o){if(t>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}else e.pos=e.posMax;o||e.pos++,n[t]=e.pos};Ye.prototype.tokenize=function(e){const t=this.ruler.getRules(""),u=t.length,i=e.posMax,a=e.md.options.maxNesting;for(;e.pos<i;){const n=e.pos;let o=!1;if(e.level<a){for(let r=0;r<u;r++)if(o=t[r](e,!1),o){if(n>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}if(o){if(e.pos>=i)break;continue}e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()};Ye.prototype.parse=function(e,t,u,i){const a=new this.State(e,t,u,i);this.tokenize(a);const n=this.ruler2.getRules(""),o=n.length;for(let r=0;r<o;r++)n[r](a)};Ye.prototype.State=Ze;function Hr(e){const t={};e=e||{},t.src_Any=fn.source,t.src_Cc=hn.source,t.src_Z=mn.source,t.src_P=Jt.source,t.src_ZPCc=[t.src_Z,t.src_P,t.src_Cc].join("|"),t.src_ZCc=[t.src_Z,t.src_Cc].join("|");const u="[><｜]";return t.src_pseudo_letter="(?:(?!"+u+"|"+t.src_ZPCc+")"+t.src_Any+")",t.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",t.src_auth="(?:(?:(?!"+t.src_ZCc+"|[@/\\[\\]()]).)+@)?",t.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",t.src_host_terminator="(?=$|"+u+"|"+t.src_ZPCc+")(?!"+(e["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+t.src_ZPCc+"))",t.src_path="(?:[/?#](?:(?!"+t.src_ZCc+"|"+u+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+t.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+t.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+t.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+t.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+t.src_ZCc+"|[']).)+\\'|\\'(?="+t.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+t.src_ZCc+"|[.]|$)|"+(e["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+t.src_ZCc+"|$)|;(?!"+t.src_ZCc+"|$)|\\!+(?!"+t.src_ZCc+"|[!]|$)|\\?(?!"+t.src_ZCc+"|[?]|$))+|\\/)?",t.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',t.src_xn="xn--[a-z0-9\\-]{1,59}",t.src_domain_root="(?:"+t.src_xn+"|"+t.src_pseudo_letter+"{1,63})",t.src_domain="(?:"+t.src_xn+"|(?:"+t.src_pseudo_letter+")|(?:"+t.src_pseudo_letter+"(?:-|"+t.src_pseudo_letter+"){0,61}"+t.src_pseudo_letter+"))",t.src_host="(?:(?:(?:(?:"+t.src_domain+")\\.)*"+t.src_domain+"))",t.tpl_host_fuzzy="(?:"+t.src_ip4+"|(?:(?:(?:"+t.src_domain+")\\.)+(?:%TLDS%)))",t.tpl_host_no_ip_fuzzy="(?:(?:(?:"+t.src_domain+")\\.)+(?:%TLDS%))",t.src_host_strict=t.src_host+t.src_host_terminator,t.tpl_host_fuzzy_strict=t.tpl_host_fuzzy+t.src_host_terminator,t.src_host_port_strict=t.src_host+t.src_port+t.src_host_terminator,t.tpl_host_port_fuzzy_strict=t.tpl_host_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_port_no_ip_fuzzy_strict=t.tpl_host_no_ip_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+t.src_ZPCc+"|>|$))",t.tpl_email_fuzzy="(^|"+u+'|"|\\(|'+t.src_ZCc+")("+t.src_email_name+"@"+t.tpl_host_fuzzy_strict+")",t.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_fuzzy_strict+t.src_path+")",t.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_no_ip_fuzzy_strict+t.src_path+")",t}function Vt(e){return Array.prototype.slice.call(arguments,1).forEach(function(u){u&&Object.keys(u).forEach(function(i){e[i]=u[i]})}),e}function yt(e){return Object.prototype.toString.call(e)}function Gr(e){return yt(e)==="[object String]"}function $r(e){return yt(e)==="[object Object]"}function Vr(e){return yt(e)==="[object RegExp]"}function un(e){return yt(e)==="[object Function]"}function Qr(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}const En={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function Zr(e){return Object.keys(e||{}).reduce(function(t,u){return t||En.hasOwnProperty(u)},!1)}const Yr={"http:":{validate:function(e,t,u){const i=e.slice(t);return u.re.http||(u.re.http=new RegExp("^\\/\\/"+u.re.src_auth+u.re.src_host_port_strict+u.re.src_path,"i")),u.re.http.test(i)?i.match(u.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(e,t,u){const i=e.slice(t);return u.re.no_http||(u.re.no_http=new RegExp("^"+u.re.src_auth+"(?:localhost|(?:(?:"+u.re.src_domain+")\\.)+"+u.re.src_domain_root+")"+u.re.src_port+u.re.src_host_terminator+u.re.src_path,"i")),u.re.no_http.test(i)?t>=3&&e[t-3]===":"||t>=3&&e[t-3]==="/"?0:i.match(u.re.no_http)[0].length:0}},"mailto:":{validate:function(e,t,u){const i=e.slice(t);return u.re.mailto||(u.re.mailto=new RegExp("^"+u.re.src_email_name+"@"+u.re.src_host_strict,"i")),u.re.mailto.test(i)?i.match(u.re.mailto)[0].length:0}}},Jr="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",Xr="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function Kr(e){e.__index__=-1,e.__text_cache__=""}function eo(e){return function(t,u){const i=t.slice(u);return e.test(i)?i.match(e)[0].length:0}}function nn(){return function(e,t){t.normalize(e)}}function ht(e){const t=e.re=Hr(e.__opts__),u=e.__tlds__.slice();e.onCompile(),e.__tlds_replaced__||u.push(Jr),u.push(t.src_xn),t.src_tlds=u.join("|");function i(r){return r.replace("%TLDS%",t.src_tlds)}t.email_fuzzy=RegExp(i(t.tpl_email_fuzzy),"i"),t.link_fuzzy=RegExp(i(t.tpl_link_fuzzy),"i"),t.link_no_ip_fuzzy=RegExp(i(t.tpl_link_no_ip_fuzzy),"i"),t.host_fuzzy_test=RegExp(i(t.tpl_host_fuzzy_test),"i");const a=[];e.__compiled__={};function n(r,s){throw new Error('(LinkifyIt) Invalid schema "'+r+'": '+s)}Object.keys(e.__schemas__).forEach(function(r){const s=e.__schemas__[r];if(s===null)return;const c={validate:null,link:null};if(e.__compiled__[r]=c,$r(s)){Vr(s.validate)?c.validate=eo(s.validate):un(s.validate)?c.validate=s.validate:n(r,s),un(s.normalize)?c.normalize=s.normalize:s.normalize?n(r,s):c.normalize=nn();return}if(Gr(s)){a.push(r);return}n(r,s)}),a.forEach(function(r){e.__compiled__[e.__schemas__[r]]&&(e.__compiled__[r].validate=e.__compiled__[e.__schemas__[r]].validate,e.__compiled__[r].normalize=e.__compiled__[e.__schemas__[r]].normalize)}),e.__compiled__[""]={validate:null,normalize:nn()};const o=Object.keys(e.__compiled__).filter(function(r){return r.length>0&&e.__compiled__[r]}).map(Qr).join("|");e.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+t.src_ZPCc+"))("+o+")","i"),e.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+t.src_ZPCc+"))("+o+")","ig"),e.re.schema_at_start=RegExp("^"+e.re.schema_search.source,"i"),e.re.pretest=RegExp("("+e.re.schema_test.source+")|("+e.re.host_fuzzy_test.source+")|@","i"),Kr(e)}function to(e,t){const u=e.__index__,i=e.__last_index__,a=e.__text_cache__.slice(u,i);this.schema=e.__schema__.toLowerCase(),this.index=u+t,this.lastIndex=i+t,this.raw=a,this.text=a,this.url=a}function Qt(e,t){const u=new to(e,t);return e.__compiled__[u.schema].normalize(u,e),u}function Y(e,t){if(!(this instanceof Y))return new Y(e,t);t||Zr(e)&&(t=e,e={}),this.__opts__=Vt({},En,t),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=Vt({},Yr,e),this.__compiled__={},this.__tlds__=Xr,this.__tlds_replaced__=!1,this.re={},ht(this)}Y.prototype.add=function(t,u){return this.__schemas__[t]=u,ht(this),this};Y.prototype.set=function(t){return this.__opts__=Vt(this.__opts__,t),this};Y.prototype.test=function(t){if(this.__text_cache__=t,this.__index__=-1,!t.length)return!1;let u,i,a,n,o,r,s,c,d;if(this.re.schema_test.test(t)){for(s=this.re.schema_search,s.lastIndex=0;(u=s.exec(t))!==null;)if(n=this.testSchemaAt(t,u[2],s.lastIndex),n){this.__schema__=u[2],this.__index__=u.index+u[1].length,this.__last_index__=u.index+u[0].length+n;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(c=t.search(this.re.host_fuzzy_test),c>=0&&(this.__index__<0||c<this.__index__)&&(i=t.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(o=i.index+i[1].length,(this.__index__<0||o<this.__index__)&&(this.__schema__="",this.__index__=o,this.__last_index__=i.index+i[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(d=t.indexOf("@"),d>=0&&(a=t.match(this.re.email_fuzzy))!==null&&(o=a.index+a[1].length,r=a.index+a[0].length,(this.__index__<0||o<this.__index__||o===this.__index__&&r>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=o,this.__last_index__=r))),this.__index__>=0};Y.prototype.pretest=function(t){return this.re.pretest.test(t)};Y.prototype.testSchemaAt=function(t,u,i){return this.__compiled__[u.toLowerCase()]?this.__compiled__[u.toLowerCase()].validate(t,i,this):0};Y.prototype.match=function(t){const u=[];let i=0;this.__index__>=0&&this.__text_cache__===t&&(u.push(Qt(this,i)),i=this.__last_index__);let a=i?t.slice(i):t;for(;this.test(a);)u.push(Qt(this,i)),a=a.slice(this.__last_index__),i+=this.__last_index__;return u.length?u:null};Y.prototype.matchAtStart=function(t){if(this.__text_cache__=t,this.__index__=-1,!t.length)return null;const u=this.re.schema_at_start.exec(t);if(!u)return null;const i=this.testSchemaAt(t,u[2],u[0].length);return i?(this.__schema__=u[2],this.__index__=u.index+u[1].length,this.__last_index__=u.index+u[0].length+i,Qt(this,0)):null};Y.prototype.tlds=function(t,u){return t=Array.isArray(t)?t:[t],u?(this.__tlds__=this.__tlds__.concat(t).sort().filter(function(i,a,n){return i!==n[a-1]}).reverse(),ht(this),this):(this.__tlds__=t.slice(),this.__tlds_replaced__=!0,ht(this),this)};Y.prototype.normalize=function(t){t.schema||(t.url="http://"+t.url),t.schema==="mailto:"&&!/^mailto:/i.test(t.url)&&(t.url="mailto:"+t.url)};Y.prototype.onCompile=function(){};const Se=2147483647,ne=36,uu=1,$e=26,uo=38,no=700,Dn=72,Sn=128,Tn="-",io=/^xn--/,ao=/[^\0-\x7F]/,ro=/[\x2E\u3002\uFF0E\uFF61]/g,oo={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},Wt=ne-uu,ie=Math.floor,Ut=String.fromCharCode;function de(e){throw new RangeError(oo[e])}function so(e,t){const u=[];let i=e.length;for(;i--;)u[i]=t(e[i]);return u}function Fn(e,t){const u=e.split("@");let i="";u.length>1&&(i=u[0]+"@",e=u[1]),e=e.replace(ro,".");const a=e.split("."),n=so(a,t).join(".");return i+n}function In(e){const t=[];let u=0;const i=e.length;for(;u<i;){const a=e.charCodeAt(u++);if(a>=55296&&a<=56319&&u<i){const n=e.charCodeAt(u++);(n&64512)==56320?t.push(((a&1023)<<10)+(n&1023)+65536):(t.push(a),u--)}else t.push(a)}return t}const co=e=>String.fromCodePoint(...e),lo=function(e){return e>=48&&e<58?26+(e-48):e>=65&&e<91?e-65:e>=97&&e<123?e-97:ne},an=function(e,t){return e+22+75*(e<26)-((t!=0)<<5)},Pn=function(e,t,u){let i=0;for(e=u?ie(e/no):e>>1,e+=ie(e/t);e>Wt*$e>>1;i+=ne)e=ie(e/Wt);return ie(i+(Wt+1)*e/(e+uo))},Rn=function(e){const t=[],u=e.length;let i=0,a=Sn,n=Dn,o=e.lastIndexOf(Tn);o<0&&(o=0);for(let r=0;r<o;++r)e.charCodeAt(r)>=128&&de("not-basic"),t.push(e.charCodeAt(r));for(let r=o>0?o+1:0;r<u;){const s=i;for(let d=1,f=ne;;f+=ne){r>=u&&de("invalid-input");const b=lo(e.charCodeAt(r++));b>=ne&&de("invalid-input"),b>ie((Se-i)/d)&&de("overflow"),i+=b*d;const p=f<=n?uu:f>=n+$e?$e:f-n;if(b<p)break;const h=ne-p;d>ie(Se/h)&&de("overflow"),d*=h}const c=t.length+1;n=Pn(i-s,c,s==0),ie(i/c)>Se-a&&de("overflow"),a+=ie(i/c),i%=c,t.splice(i++,0,a)}return String.fromCodePoint(...t)},Mn=function(e){const t=[];e=In(e);const u=e.length;let i=Sn,a=0,n=Dn;for(const s of e)s<128&&t.push(Ut(s));const o=t.length;let r=o;for(o&&t.push(Tn);r<u;){let s=Se;for(const d of e)d>=i&&d<s&&(s=d);const c=r+1;s-i>ie((Se-a)/c)&&de("overflow"),a+=(s-i)*c,i=s;for(const d of e)if(d<i&&++a>Se&&de("overflow"),d===i){let f=a;for(let b=ne;;b+=ne){const p=b<=n?uu:b>=n+$e?$e:b-n;if(f<p)break;const h=f-p,C=ne-p;t.push(Ut(an(p+h%C,0))),f=ie(h/C)}t.push(Ut(an(f,0))),n=Pn(a,c,r===o),a=0,++r}++a,++i}return t.join("")},fo=function(e){return Fn(e,function(t){return io.test(t)?Rn(t.slice(4).toLowerCase()):t})},ho=function(e){return Fn(e,function(t){return ao.test(t)?"xn--"+Mn(t):t})},Ln={version:"2.3.1",ucs2:{decode:In,encode:co},decode:Rn,encode:Mn,toASCII:ho,toUnicode:fo},po={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},mo={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},bo={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}},go={default:po,zero:mo,commonmark:bo},yo=/^(vbscript|javascript|file|data):/,xo=/^data:image\/(gif|png|jpeg|webp);/;function _o(e){const t=e.trim().toLowerCase();return yo.test(t)?xo.test(t):!0}const On=["http:","https:","mailto:"];function wo(e){const t=Yt(e,!0);if(t.hostname&&(!t.protocol||On.indexOf(t.protocol)>=0))try{t.hostname=Ln.toASCII(t.hostname)}catch{}return Qe(Zt(t))}function ko(e){const t=Yt(e,!0);if(t.hostname&&(!t.protocol||On.indexOf(t.protocol)>=0))try{t.hostname=Ln.toUnicode(t.hostname)}catch{}return Te(Zt(t),Te.defaultChars+"%")}function J(e,t){if(!(this instanceof J))return new J(e,t);t||Xt(e)||(t=e||{},e="default"),this.inline=new Ye,this.block=new gt,this.core=new eu,this.renderer=new Ie,this.linkify=new Y,this.validateLink=_o,this.normalizeLink=wo,this.normalizeLinkText=ko,this.utils=Aa,this.helpers=mt({},Da),this.options={},this.configure(e),t&&this.set(t)}J.prototype.set=function(e){return mt(this.options,e),this};J.prototype.configure=function(e){const t=this;if(Xt(e)){const u=e;if(e=go[u],!e)throw new Error('Wrong `markdown-it` preset "'+u+'", check name')}if(!e)throw new Error("Wrong `markdown-it` preset, can't be empty");return e.options&&t.set(e.options),e.components&&Object.keys(e.components).forEach(function(u){e.components[u].rules&&t[u].ruler.enableOnly(e.components[u].rules),e.components[u].rules2&&t[u].ruler2.enableOnly(e.components[u].rules2)}),this};J.prototype.enable=function(e,t){let u=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(a){u=u.concat(this[a].ruler.enable(e,!0))},this),u=u.concat(this.inline.ruler2.enable(e,!0));const i=e.filter(function(a){return u.indexOf(a)<0});if(i.length&&!t)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+i);return this};J.prototype.disable=function(e,t){let u=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(a){u=u.concat(this[a].ruler.disable(e,!0))},this),u=u.concat(this.inline.ruler2.disable(e,!0));const i=e.filter(function(a){return u.indexOf(a)<0});if(i.length&&!t)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+i);return this};J.prototype.use=function(e){const t=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,t),this};J.prototype.parse=function(e,t){if(typeof e!="string")throw new Error("Input data should be a String");const u=new this.core.State(e,this,t);return this.core.process(u),u.tokens};J.prototype.render=function(e,t){return t=t||{},this.renderer.render(this.parse(e,t),this.options,t)};J.prototype.parseInline=function(e,t){const u=new this.core.State(e,this,t);return u.inlineMode=!0,this.core.process(u),u.tokens};J.prototype.renderInline=function(e,t){return t=t||{},this.renderer.render(this.parseInline(e,t),this.options,t)};function Ao(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}/*! @license DOMPurify 3.2.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.6/LICENSE */var Ht,rn;function on(){if(rn)return Ht;rn=1;const{entries:e,setPrototypeOf:t,isFrozen:u,getPrototypeOf:i,getOwnPropertyDescriptor:a}=Object;let{freeze:n,seal:o,create:r}=Object,{apply:s,construct:c}=typeof Reflect<"u"&&Reflect;n||(n=function(y){return y}),o||(o=function(y){return y}),s||(s=function(y,F,T){return y.apply(F,T)}),c||(c=function(y,F){return new y(...F)});const d=P(Array.prototype.forEach),f=P(Array.prototype.lastIndexOf),b=P(Array.prototype.pop),p=P(Array.prototype.push),h=P(Array.prototype.splice),C=P(String.prototype.toLowerCase),E=P(String.prototype.toString),I=P(String.prototype.match),_=P(String.prototype.replace),A=P(String.prototype.indexOf),k=P(String.prototype.trim),w=P(Object.prototype.hasOwnProperty),v=P(RegExp.prototype.test),L=ee(TypeError);function P(S){return function(y){y instanceof RegExp&&(y.lastIndex=0);for(var F=arguments.length,T=new Array(F>1?F-1:0),U=1;U<F;U++)T[U-1]=arguments[U];return s(S,y,T)}}function ee(S){return function(){for(var y=arguments.length,F=new Array(y),T=0;T<y;T++)F[T]=arguments[T];return c(S,F)}}function D(S,y){let F=arguments.length>2&&arguments[2]!==void 0?arguments[2]:C;t&&t(S,null);let T=y.length;for(;T--;){let U=y[T];if(typeof U=="string"){const oe=F(U);oe!==U&&(u(y)||(y[T]=oe),U=oe)}S[U]=!0}return S}function Pe(S){for(let y=0;y<S.length;y++)w(S,y)||(S[y]=null);return S}function X(S){const y=r(null);for(const[F,T]of e(S))w(S,F)&&(Array.isArray(T)?y[F]=Pe(T):T&&typeof T=="object"&&T.constructor===Object?y[F]=X(T):y[F]=T);return y}function me(S,y){for(;S!==null;){const T=a(S,y);if(T){if(T.get)return P(T.get);if(typeof T.value=="function")return P(T.value)}S=i(S)}function F(){return null}return F}const Re=n(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),te=n(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Me=n(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),zn=n(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),xt=n(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Nn=n(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),nu=n(["#text"]),iu=n(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),_t=n(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),au=n(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Je=n(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),jn=o(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Bn=o(/<%[\w\W]*|[\w\W]*%>/gm),qn=o(/\$\{[\w\W]*/gm),Wn=o(/^data-[\-\w.\u00B7-\uFFFF]+$/),Un=o(/^aria-[\-\w]+$/),ru=o(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Hn=o(/^(?:\w+script|data):/i),Gn=o(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),ou=o(/^html$/i),$n=o(/^[a-z][.\w]*(-[.\w]+)+$/i);var su=Object.freeze({__proto__:null,ARIA_ATTR:Un,ATTR_WHITESPACE:Gn,CUSTOM_ELEMENT:$n,DATA_ATTR:Wn,DOCTYPE_NAME:ou,ERB_EXPR:Bn,IS_ALLOWED_URI:ru,IS_SCRIPT_OR_DATA:Hn,MUSTACHE_EXPR:jn,TMPLIT_EXPR:qn});const Le={element:1,text:3,progressingInstruction:7,comment:8,document:9},Vn=function(){return typeof window>"u"?null:window},Qn=function(y,F){if(typeof y!="object"||typeof y.createPolicy!="function")return null;let T=null;const U="data-tt-policy-suffix";F&&F.hasAttribute(U)&&(T=F.getAttribute(U));const oe="dompurify"+(T?"#"+T:"");try{return y.createPolicy(oe,{createHTML(ge){return ge},createScriptURL(ge){return ge}})}catch{return console.warn("TrustedTypes policy "+oe+" could not be created."),null}},cu=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function lu(){let S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Vn();const y=x=>lu(x);if(y.version="3.2.6",y.removed=[],!S||!S.document||S.document.nodeType!==Le.document||!S.Element)return y.isSupported=!1,y;let{document:F}=S;const T=F,U=T.currentScript,{DocumentFragment:oe,HTMLTemplateElement:ge,Node:wt,Element:du,NodeFilter:Oe,NamedNodeMap:Yn=S.NamedNodeMap||S.MozNamedAttrMap,HTMLFormElement:Jn,DOMParser:Xn,trustedTypes:Xe}=S,ze=du.prototype,Kn=me(ze,"cloneNode"),ei=me(ze,"remove"),ti=me(ze,"nextSibling"),ui=me(ze,"childNodes"),Ke=me(ze,"parentNode");if(typeof ge=="function"){const x=F.createElement("template");x.content&&x.content.ownerDocument&&(F=x.content.ownerDocument)}let $,Ne="";const{implementation:kt,createNodeIterator:ni,createDocumentFragment:ii,getElementsByTagName:ai}=F,{importNode:ri}=T;let V=cu();y.isSupported=typeof e=="function"&&typeof Ke=="function"&&kt&&kt.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:At,ERB_EXPR:vt,TMPLIT_EXPR:Ct,DATA_ATTR:oi,ARIA_ATTR:si,IS_SCRIPT_OR_DATA:ci,ATTR_WHITESPACE:fu,CUSTOM_ELEMENT:li}=su;let{IS_ALLOWED_URI:hu}=su,N=null;const pu=D({},[...Re,...te,...Me,...xt,...nu]);let W=null;const mu=D({},[...iu,..._t,...au,...Je]);let O=Object.seal(r(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),je=null,Et=null,bu=!0,Dt=!0,gu=!1,yu=!0,ye=!1,et=!0,be=!1,St=!1,Tt=!1,xe=!1,tt=!1,ut=!1,xu=!0,_u=!1;const di="user-content-";let Ft=!0,Be=!1,_e={},we=null;const wu=D({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let ku=null;const Au=D({},["audio","video","img","source","image","track"]);let It=null;const vu=D({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),nt="http://www.w3.org/1998/Math/MathML",it="http://www.w3.org/2000/svg",se="http://www.w3.org/1999/xhtml";let ke=se,Pt=!1,Rt=null;const fi=D({},[nt,it,se],E);let at=D({},["mi","mo","mn","ms","mtext"]),rt=D({},["annotation-xml"]);const hi=D({},["title","style","font","a","script"]);let qe=null;const pi=["application/xhtml+xml","text/html"],mi="text/html";let j=null,Ae=null;const bi=F.createElement("form"),Cu=function(l){return l instanceof RegExp||l instanceof Function},Mt=function(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Ae&&Ae===l)){if((!l||typeof l!="object")&&(l={}),l=X(l),qe=pi.indexOf(l.PARSER_MEDIA_TYPE)===-1?mi:l.PARSER_MEDIA_TYPE,j=qe==="application/xhtml+xml"?E:C,N=w(l,"ALLOWED_TAGS")?D({},l.ALLOWED_TAGS,j):pu,W=w(l,"ALLOWED_ATTR")?D({},l.ALLOWED_ATTR,j):mu,Rt=w(l,"ALLOWED_NAMESPACES")?D({},l.ALLOWED_NAMESPACES,E):fi,It=w(l,"ADD_URI_SAFE_ATTR")?D(X(vu),l.ADD_URI_SAFE_ATTR,j):vu,ku=w(l,"ADD_DATA_URI_TAGS")?D(X(Au),l.ADD_DATA_URI_TAGS,j):Au,we=w(l,"FORBID_CONTENTS")?D({},l.FORBID_CONTENTS,j):wu,je=w(l,"FORBID_TAGS")?D({},l.FORBID_TAGS,j):X({}),Et=w(l,"FORBID_ATTR")?D({},l.FORBID_ATTR,j):X({}),_e=w(l,"USE_PROFILES")?l.USE_PROFILES:!1,bu=l.ALLOW_ARIA_ATTR!==!1,Dt=l.ALLOW_DATA_ATTR!==!1,gu=l.ALLOW_UNKNOWN_PROTOCOLS||!1,yu=l.ALLOW_SELF_CLOSE_IN_ATTR!==!1,ye=l.SAFE_FOR_TEMPLATES||!1,et=l.SAFE_FOR_XML!==!1,be=l.WHOLE_DOCUMENT||!1,xe=l.RETURN_DOM||!1,tt=l.RETURN_DOM_FRAGMENT||!1,ut=l.RETURN_TRUSTED_TYPE||!1,Tt=l.FORCE_BODY||!1,xu=l.SANITIZE_DOM!==!1,_u=l.SANITIZE_NAMED_PROPS||!1,Ft=l.KEEP_CONTENT!==!1,Be=l.IN_PLACE||!1,hu=l.ALLOWED_URI_REGEXP||ru,ke=l.NAMESPACE||se,at=l.MATHML_TEXT_INTEGRATION_POINTS||at,rt=l.HTML_INTEGRATION_POINTS||rt,O=l.CUSTOM_ELEMENT_HANDLING||{},l.CUSTOM_ELEMENT_HANDLING&&Cu(l.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(O.tagNameCheck=l.CUSTOM_ELEMENT_HANDLING.tagNameCheck),l.CUSTOM_ELEMENT_HANDLING&&Cu(l.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(O.attributeNameCheck=l.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),l.CUSTOM_ELEMENT_HANDLING&&typeof l.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(O.allowCustomizedBuiltInElements=l.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),ye&&(Dt=!1),tt&&(xe=!0),_e&&(N=D({},nu),W=[],_e.html===!0&&(D(N,Re),D(W,iu)),_e.svg===!0&&(D(N,te),D(W,_t),D(W,Je)),_e.svgFilters===!0&&(D(N,Me),D(W,_t),D(W,Je)),_e.mathMl===!0&&(D(N,xt),D(W,au),D(W,Je))),l.ADD_TAGS&&(N===pu&&(N=X(N)),D(N,l.ADD_TAGS,j)),l.ADD_ATTR&&(W===mu&&(W=X(W)),D(W,l.ADD_ATTR,j)),l.ADD_URI_SAFE_ATTR&&D(It,l.ADD_URI_SAFE_ATTR,j),l.FORBID_CONTENTS&&(we===wu&&(we=X(we)),D(we,l.FORBID_CONTENTS,j)),Ft&&(N["#text"]=!0),be&&D(N,["html","head","body"]),N.table&&(D(N,["tbody"]),delete je.tbody),l.TRUSTED_TYPES_POLICY){if(typeof l.TRUSTED_TYPES_POLICY.createHTML!="function")throw L('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof l.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw L('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');$=l.TRUSTED_TYPES_POLICY,Ne=$.createHTML("")}else $===void 0&&($=Qn(Xe,U)),$!==null&&typeof Ne=="string"&&(Ne=$.createHTML(""));n&&n(l),Ae=l}},Eu=D({},[...te,...Me,...zn]),Du=D({},[...xt,...Nn]),gi=function(l){let m=Ke(l);(!m||!m.tagName)&&(m={namespaceURI:ke,tagName:"template"});const g=C(l.tagName),M=C(m.tagName);return Rt[l.namespaceURI]?l.namespaceURI===it?m.namespaceURI===se?g==="svg":m.namespaceURI===nt?g==="svg"&&(M==="annotation-xml"||at[M]):!!Eu[g]:l.namespaceURI===nt?m.namespaceURI===se?g==="math":m.namespaceURI===it?g==="math"&&rt[M]:!!Du[g]:l.namespaceURI===se?m.namespaceURI===it&&!rt[M]||m.namespaceURI===nt&&!at[M]?!1:!Du[g]&&(hi[g]||!Eu[g]):!!(qe==="application/xhtml+xml"&&Rt[l.namespaceURI]):!1},ue=function(l){p(y.removed,{element:l});try{Ke(l).removeChild(l)}catch{ei(l)}},ve=function(l,m){try{p(y.removed,{attribute:m.getAttributeNode(l),from:m})}catch{p(y.removed,{attribute:null,from:m})}if(m.removeAttribute(l),l==="is")if(xe||tt)try{ue(m)}catch{}else try{m.setAttribute(l,"")}catch{}},Su=function(l){let m=null,g=null;if(Tt)l="<remove></remove>"+l;else{const z=I(l,/^[\r\n\t ]+/);g=z&&z[0]}qe==="application/xhtml+xml"&&ke===se&&(l='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+l+"</body></html>");const M=$?$.createHTML(l):l;if(ke===se)try{m=new Xn().parseFromString(M,qe)}catch{}if(!m||!m.documentElement){m=kt.createDocument(ke,"template",null);try{m.documentElement.innerHTML=Pt?Ne:M}catch{}}const H=m.body||m.documentElement;return l&&g&&H.insertBefore(F.createTextNode(g),H.childNodes[0]||null),ke===se?ai.call(m,be?"html":"body")[0]:be?m.documentElement:H},Tu=function(l){return ni.call(l.ownerDocument||l,l,Oe.SHOW_ELEMENT|Oe.SHOW_COMMENT|Oe.SHOW_TEXT|Oe.SHOW_PROCESSING_INSTRUCTION|Oe.SHOW_CDATA_SECTION,null)},Lt=function(l){return l instanceof Jn&&(typeof l.nodeName!="string"||typeof l.textContent!="string"||typeof l.removeChild!="function"||!(l.attributes instanceof Yn)||typeof l.removeAttribute!="function"||typeof l.setAttribute!="function"||typeof l.namespaceURI!="string"||typeof l.insertBefore!="function"||typeof l.hasChildNodes!="function")},Fu=function(l){return typeof wt=="function"&&l instanceof wt};function ce(x,l,m){d(x,g=>{g.call(y,l,m,Ae)})}const Iu=function(l){let m=null;if(ce(V.beforeSanitizeElements,l,null),Lt(l))return ue(l),!0;const g=j(l.nodeName);if(ce(V.uponSanitizeElement,l,{tagName:g,allowedTags:N}),et&&l.hasChildNodes()&&!Fu(l.firstElementChild)&&v(/<[/\w!]/g,l.innerHTML)&&v(/<[/\w!]/g,l.textContent)||l.nodeType===Le.progressingInstruction||et&&l.nodeType===Le.comment&&v(/<[/\w]/g,l.data))return ue(l),!0;if(!N[g]||je[g]){if(!je[g]&&Ru(g)&&(O.tagNameCheck instanceof RegExp&&v(O.tagNameCheck,g)||O.tagNameCheck instanceof Function&&O.tagNameCheck(g)))return!1;if(Ft&&!we[g]){const M=Ke(l)||l.parentNode,H=ui(l)||l.childNodes;if(H&&M){const z=H.length;for(let Q=z-1;Q>=0;--Q){const le=Kn(H[Q],!0);le.__removalCount=(l.__removalCount||0)+1,M.insertBefore(le,ti(l))}}}return ue(l),!0}return l instanceof du&&!gi(l)||(g==="noscript"||g==="noembed"||g==="noframes")&&v(/<\/no(script|embed|frames)/i,l.innerHTML)?(ue(l),!0):(ye&&l.nodeType===Le.text&&(m=l.textContent,d([At,vt,Ct],M=>{m=_(m,M," ")}),l.textContent!==m&&(p(y.removed,{element:l.cloneNode()}),l.textContent=m)),ce(V.afterSanitizeElements,l,null),!1)},Pu=function(l,m,g){if(xu&&(m==="id"||m==="name")&&(g in F||g in bi))return!1;if(!(Dt&&!Et[m]&&v(oi,m))){if(!(bu&&v(si,m))){if(!W[m]||Et[m]){if(!(Ru(l)&&(O.tagNameCheck instanceof RegExp&&v(O.tagNameCheck,l)||O.tagNameCheck instanceof Function&&O.tagNameCheck(l))&&(O.attributeNameCheck instanceof RegExp&&v(O.attributeNameCheck,m)||O.attributeNameCheck instanceof Function&&O.attributeNameCheck(m))||m==="is"&&O.allowCustomizedBuiltInElements&&(O.tagNameCheck instanceof RegExp&&v(O.tagNameCheck,g)||O.tagNameCheck instanceof Function&&O.tagNameCheck(g))))return!1}else if(!It[m]){if(!v(hu,_(g,fu,""))){if(!((m==="src"||m==="xlink:href"||m==="href")&&l!=="script"&&A(g,"data:")===0&&ku[l])){if(!(gu&&!v(ci,_(g,fu,"")))){if(g)return!1}}}}}}return!0},Ru=function(l){return l!=="annotation-xml"&&I(l,li)},Mu=function(l){ce(V.beforeSanitizeAttributes,l,null);const{attributes:m}=l;if(!m||Lt(l))return;const g={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:W,forceKeepAttr:void 0};let M=m.length;for(;M--;){const H=m[M],{name:z,namespaceURI:Q,value:le}=H,We=j(z),Ot=le;let G=z==="value"?Ot:k(Ot);if(g.attrName=We,g.attrValue=G,g.keepAttr=!0,g.forceKeepAttr=void 0,ce(V.uponSanitizeAttribute,l,g),G=g.attrValue,_u&&(We==="id"||We==="name")&&(ve(z,l),G=di+G),et&&v(/((--!?|])>)|<\/(style|title)/i,G)){ve(z,l);continue}if(g.forceKeepAttr)continue;if(!g.keepAttr){ve(z,l);continue}if(!yu&&v(/\/>/i,G)){ve(z,l);continue}ye&&d([At,vt,Ct],Ou=>{G=_(G,Ou," ")});const Lu=j(l.nodeName);if(!Pu(Lu,We,G)){ve(z,l);continue}if($&&typeof Xe=="object"&&typeof Xe.getAttributeType=="function"&&!Q)switch(Xe.getAttributeType(Lu,We)){case"TrustedHTML":{G=$.createHTML(G);break}case"TrustedScriptURL":{G=$.createScriptURL(G);break}}if(G!==Ot)try{Q?l.setAttributeNS(Q,z,G):l.setAttribute(z,G),Lt(l)?ue(l):b(y.removed)}catch{ve(z,l)}}ce(V.afterSanitizeAttributes,l,null)},yi=function x(l){let m=null;const g=Tu(l);for(ce(V.beforeSanitizeShadowDOM,l,null);m=g.nextNode();)ce(V.uponSanitizeShadowNode,m,null),Iu(m),Mu(m),m.content instanceof oe&&x(m.content);ce(V.afterSanitizeShadowDOM,l,null)};return y.sanitize=function(x){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},m=null,g=null,M=null,H=null;if(Pt=!x,Pt&&(x="<!-->"),typeof x!="string"&&!Fu(x))if(typeof x.toString=="function"){if(x=x.toString(),typeof x!="string")throw L("dirty is not a string, aborting")}else throw L("toString is not a function");if(!y.isSupported)return x;if(St||Mt(l),y.removed=[],typeof x=="string"&&(Be=!1),Be){if(x.nodeName){const le=j(x.nodeName);if(!N[le]||je[le])throw L("root node is forbidden and cannot be sanitized in-place")}}else if(x instanceof wt)m=Su("<!---->"),g=m.ownerDocument.importNode(x,!0),g.nodeType===Le.element&&g.nodeName==="BODY"||g.nodeName==="HTML"?m=g:m.appendChild(g);else{if(!xe&&!ye&&!be&&x.indexOf("<")===-1)return $&&ut?$.createHTML(x):x;if(m=Su(x),!m)return xe?null:ut?Ne:""}m&&Tt&&ue(m.firstChild);const z=Tu(Be?x:m);for(;M=z.nextNode();)Iu(M),Mu(M),M.content instanceof oe&&yi(M.content);if(Be)return x;if(xe){if(tt)for(H=ii.call(m.ownerDocument);m.firstChild;)H.appendChild(m.firstChild);else H=m;return(W.shadowroot||W.shadowrootmode)&&(H=ri.call(T,H,!0)),H}let Q=be?m.outerHTML:m.innerHTML;return be&&N["!doctype"]&&m.ownerDocument&&m.ownerDocument.doctype&&m.ownerDocument.doctype.name&&v(ou,m.ownerDocument.doctype.name)&&(Q="<!DOCTYPE "+m.ownerDocument.doctype.name+`>
`+Q),ye&&d([At,vt,Ct],le=>{Q=_(Q,le," ")}),$&&ut?$.createHTML(Q):Q},y.setConfig=function(){let x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Mt(x),St=!0},y.clearConfig=function(){Ae=null,St=!1},y.isValidAttribute=function(x,l,m){Ae||Mt({});const g=j(x),M=j(l);return Pu(g,M,m)},y.addHook=function(x,l){typeof l=="function"&&p(V[x],l)},y.removeHook=function(x,l){if(l!==void 0){const m=f(V[x],l);return m===-1?void 0:h(V[x],m,1)[0]}return b(V[x])},y.removeHooks=function(x){V[x]=[]},y.removeAllHooks=function(){V=cu()},y}var Zn=lu();return Ht=Zn,Ht}var Gt,sn;function vo(){return sn||(sn=1,Gt=window.DOMPurify||(window.DOMPurify=on().default||on())),Gt}var Co=vo();const Eo=Ao(Co);function Do(e,t){ln(t,!0);const i=Object.fromEntries(Object.entries(Object.assign({"/src/lib/assets/crochetMS/crochetMS_component_api_layer.svg":Mi,"/src/lib/assets/crochetMS/crochetMS_container_crochet_management_system.svg":Li,"/src/lib/assets/crochetMS/crochetMS_system_context.svg":Oi,"/src/lib/assets/viridi_achievements.png":Ti})).map(([c,d])=>[c.replace("/src/lib/assets/",""),d])),a=new J({linkify:!0,typographer:!0});a.renderer.rules.image=(c,d,f,b,p)=>{const h=c[d],C=h.attrIndex("src");if(!h.attrs)return p.renderToken(c,d,f);const E=h.attrs[C][1];if(i[E])h.attrs[C][1]=i[E];else throw new Error(`Invalid image path for ${E}`);return p.renderToken(c,d,f)};const n=a.render(t.content),o=Eo.sanitize(n);var r=Di(),s=Si(r);Ri(s,()=>o),Ve(e,r),dn()}const So=`# Crochet Management System (System Design Documentation)

## Overview of Crochet Management System

### Scope of the System

The system is designed for crochet enthusiasts to manage yarn inventory, track projects, store crochet patterns, and monitor associated costs. Users will be able to:

- Organize and search for yarns based on attributes (weight, fiber content, etc.).
- Track crochet projects, including costs based on yarn usage.
- Store digital crochet patterns, add annotations, and print them.
- Use financial calculators to compare yarn prices and calculate project costs.

#### Out of scope

E-commerce integrations for yarn purchasing and mobile app development in the initial phase.

#### Key Features

- **Yarn Management**: Add, edit, and categorize yarns by various attributes (e.g., weight, fiber, price).
- **Project Management**: Track progress and costs based on yarn usage.
- **Pattern Management**: Store and manage digital crochet patterns.
- **Financial Calculators**: Calculate yarn cost per 100 meter, and project total cost based on yarn usage.
- **Offline Support**: View and edit inventory, projects, and patterns while offline. Data sync when back online.

### Assumptions

- **Primary Users**: Crochet enthusiasts.
- **User Input**: Users manually input yarn, project, pattern, and cost details.
- **Access**: Primarily via desktop browsers.
- **Offline Functionality**: Basic functionalities will work offline, with data syncing upon reconnection.

### Constraints

- **Technology Agnostic**: No preference for specific technologies initially.
- **Device Usage**: Primarily desktop; mobile not prioritized.
- **Offline Support**: Basic offline functionality required, with auto-sync upon reconnection.
- **Performance**: The system should perform well for small-scale users but allow for growth. No immediate need for large-scale optimizations.
- **Data Security**: Users will store personal project data. Sensitive data like payment info is not included, but basic encryption and security best practices must be followed.
- **Financial Compliance**: There's no need to comply with financial regulations since the system is for personal use.
- **Scalability**: The architecture should accommodate easy scaling for future growth (e.g., mobile apps, e-commerce integration).
- **Usability**: The system should be intuitive for non-technical users with a focus on easy data entry and manipulation.

## System Requirements

### Functional Requirements

#### Yarn Management

- **Must Have**
  - Users can add, edit, and delete yarns with attributes (weight, fiber, price in a chosen currency, etc.).
  - Yarns are categorized by attributes (weight, fiber content, price, etc.).
  - Users can search and filter yarns by attributes.

#### Project Management

- **Must Have**
  - Users can create, edit, and delete crochet projects.
  - Project costs are calculated automatically based on yarn usage and associated prices.
- **Could Have**
  - Users can track progress of each project through predefined stages (e.g., "In Progress," "Completed").

#### Pattern Management

- **Must Have**
  - Users can upload and organize crochet patterns.
  - Patterns can be stored as text, image, and other common formats (e.g., PDF, PNG).
- **Could Have**
  - Users can annotate patterns and print them.

#### Financial Calculators

- **Must Have**
  - Users can compare the total cost of different yarns for a project based on price and amount.
- **Should Have**
  - A calculator should help users determine price per 100 meters based on skein length and price.
- **Could Have**
  - Users can export financial calculations as a PDF or CSV file.

#### Offline Support

- **Must Have**
  - Basic offline functionality should allow viewing and editing of yarn, project, and pattern data.
  - Offline changes automatically sync when user reconnects.
- **Should Have**
  - Basic search and filtering should work offline.

#### Data Syncing

- **Must Have**
  - When online, the system automatically syncs any changes made offline.
  - Users can resolve conflicts through a side-by-side comparison of local changes and server data.

### Non-Functional Requirements

#### Usability

The system should have an intuitive, user-friendly interface with a focus on simplicity for data entry and data manipulation.

#### Performance

- The system should efficiently handle large data sets (e.g., hundreds of yarns or projects) without significant performance loss.
- Sync operations should happen smoothly, with minimal delay when switching between online and offline modes.

#### Availability

- The system should be available 99.9% of the time during online use, excluding maintenance windows.
- Core features should always be available offline.

#### Security

- The system must use encryption for data transmission and stored user data.
- Authentication is required for accessing personal inventories and projects.

#### Scalability

- The system architecture must allow easy scalability in the future (e.g., more users, e-commerce integrations, mobile app).

#### Data Storage and Backup

- User data should be backed up regularly to prevent loss.
- Offline data should be stored locally and must be recoverable in case of issues during syncing.

## Use Cases

### Use Case 1: Manage Yarn Inventory

- **Actors**: User
- **Pre-conditions**:
  - The user is logged into the system.
  - The user has yarn inventory available or is adding new yarns.
- **Main Flow**:
  1. The user accesses the yarn inventory page.
  2. The user can add a new yarn by inputting details such as name, weight, fiber content, and price.
  3. The user can edit or delete existing yarns.
  4. The user can search or filter the inventory by yarn attributes (e.g., fiber content, weight).
- **Post-conditions**:
  - Updated yarn inventory reflects changes made by the user.

### Use Case 2: Manage Crochet Projects

- **Actors**: User
- **Pre-conditions**:
  - The user is logged into the system.
  - The user has yarns available in their inventory.
- **Main Flow**:
  1. The user navigates to the crochet projects section.
  2. The user creates a new project by entering a project name and selecting the yarn(s) to be used.
  3. The system automatically calculates the project cost based on the yarn selected and its associated price.
  4. The user can update the project progress by entering a percentage or selecting a predefined stage (e.g., “In Progress”).
  5. The user can edit or delete the project at any time.
- **Post-conditions**: Project data is saved, and yarn usage costs are automatically updated.

### Use Case 3: Upload and Organize Crochet Patterns

- **Actors**: User
- **Pre-conditions**:
  - The user is logged into the system.
- **Main Flow**:
  1. The user navigates to the pattern storage section.
  2. The user uploads a pattern file (PDF, JPEG, PNG, etc.).
  3. The user can add notes or annotations to the pattern.
  4. The user can organize patterns into folders or categories.
  5. The user can print patterns, with the option to include or exclude annotations.
- **Post-conditions**: Pattern is uploaded and stored with optional annotations.

### Use Case 4: Financial Calculators for Yarn and Project Costs

- **Actors**: User
- **Pre-conditions**:
  - The user is logged into the system.
  - The user has yarns in their inventory and projects defined.
- **Main Flow**:
  1. The user accesses the financial calculator from a project page.
  2. The user selects yarns and enters the required yarn quantity for the project.
  3. The system calculates and displays the total project cost.
  4. The user can calculate the price per 100 meters of yarn by entering the skein length and price.
  5. The user can save or export the calculation results as a PDF or CSV file.
- **Post-conditions**: Financial data is calculated, with an option to save/export.

### Use Case 5: Offline Mode

- **Actors**: User
- **Pre-conditions**:
  - The user is logged into the system and working in offline mode with previously synced data available.
- **Main Flow**:
  1. The user adds, edits, or deletes yarns, projects, or patterns while offline.
  2. The system saves these changes locally.
  3. The system alerts the user that full functionality (e.g., search and filter) may not be available offline.
- **Post-conditions**: Offline changes are saved locally and ready for syncing when connectivity is restored.

### Use Case 6: Sync Data after Reconnecting Online

- **Actors**: User
- **Pre-conditions**:
  - The user has made changes while in offline mode.
  - The user has reconnected to the internet.
- **Main Flow**:
  1. The system detects the restored connection and automatically begins syncing offline changes to the server.
  2. If sync conflicts are detected, the system notifies the user and presents a conflict resolution dialog.
  3. The user selects whether to keep their offline changes or revert to server data.
  4. The system completes the sync and provides a summary of synced changes.
- **Post-conditions**: All offline changes are synced with the server, and any conflicts are resolved.

## Scalability Considerations

The system is designed to support future growth while maintaining high performance for both read-heavy and write-heavy operations. Initially, the architecture will handle a small to moderate number of users, but it must scale effectively as the user base and data volume grow. Below are the strategies for scaling various system components using AWS infrastructure to handle the increasing read and write loads.

### Horizontal and Vertical Scaling

- **Vertical Scaling**: In the initial stages, the system will use Amazon EC2 instances for the web application and API layers. To handle early load increases, vertical scaling (adding CPU and memory to the instances) will be implemented. This approach works well for early growth and simplifies setup.
- **Horizontal Scaling**: As the user base grows, horizontal scaling will be achieved through AWS Auto Scaling. This will automatically add or remove EC2 instances based on CPU, memory, or traffic metrics. Horizontal scaling will ensure that the system can distribute both read and write operations efficiently across multiple instances.

### Database Scalability

The system's database (PostgreSQL) will need to support both read-heavy and write-heavy workloads, especially as users frequently update project details and retrieve large datasets like yarn or pattern information.

- **Initial Setup**: Amazon RDS for PostgreSQL will be used as the database backend. In the early stages, the database will run on a single node with optimizations for both reads and writes, including proper indexing on searchable fields (yarn attributes, project status, etc.) and query optimization for cost-related calculations.
- **Future Scalability**:
  - **Read Replicas**: To handle increasing read-heavy operations (e.g., users frequently searching and filtering yarns or viewing project details), read replicas will be deployed. RDS Read Replicas will offload read operations from the primary database, improving performance for users fetching data.
  - **Write-Optimized Instances**: For write-heavy workloads (e.g., adding new yarns, updating projects, and syncing offline changes), the database will be optimized for faster write operations by using scalable storage options that support high I/O throughput. The system will prioritize configurations that allow for rapid data writes, such as increasing instance sizes, using storage types optimized for frequent read/write operations, and adjusting I/O capacity to meet growing demands.
  - **Sharding**: If the database reaches a point where vertical scaling is insufficient, sharding will be introduced. Data can be partitioned, for example, by user ID or project category to distribute both read and write loads across multiple database nodes.
  - **Caching**: For frequently accessed, read-heavy data like yarn attributes and pattern files, a distributed cache using Amazon ElastiCache (Redis) will be introduced. This will store commonly requested data in memory to reduce database load and improve response times.

### Web Application Scalability

The Web Application serves as the user interface, allowing users to manage yarn inventory, projects, and patterns. As the number of users increases, the Web Application must be able to handle more concurrent connections and traffic, ensuring responsiveness and availability.

- **Initial Setup**:
  - **Horizontal Scaling**: The Web Application will be deployed on AWS EC2 instances behind an Elastic Load Balancer (ELB). As the user base grows, additional EC2 instances can be automatically added or removed based on traffic patterns using AWS Auto Scaling. This ensures that the application can handle increased traffic without sacrificing performance.
- **Future Scalability**:
  - **CDN for Static Assets**: Static assets (e.g., HTML, CSS, JavaScript) will be distributed using a Content Delivery Network (CDN) like AWS CloudFront. This ensures faster delivery of assets by caching them closer to users, reducing latency and improving load times, especially for geographically dispersed users.
  - **Serverless Options**: For further scaling and reducing maintenance overhead, parts of the web application could be migrated to serverless platforms like AWS Amplify or AWS Lambda. This would allow the system to scale automatically without needing to manage underlying server infrastructure, particularly for handling spikes in user activity.

### API Layer Scalability

The API layer, built with Node.js and Express, must handle both read-heavy and write-heavy traffic as users interact with the system, especially when fetching patterns, updating projects, and performing financial calculations.

- **Initial Setup**: The API will run on Amazon EC2 instances, and Elastic Load Balancing (ELB) will be used to distribute incoming API requests across multiple instances, ensuring that both read and write operations are handled efficiently.
- **Future Scalability**:
  - **Load Balancing for Read/Write Separation**: In the future, separate load balancers and EC2 instance groups can be used to optimize for read-heavy and write-heavy traffic. API requests for fetching yarns and patterns (read-heavy) can be routed to instances optimized for reads, while updates to projects and patterns (write-heavy) can be directed to instances optimized for writes.
  - **Microservices for Scalability**: As the system evolves, the monolithic API can be refactored into microservices using AWS Lambda for serverless execution or containerized with Amazon ECS. Each service (e.g., yarn management, project management) can be scaled independently based on specific workload patterns (e.g., project management might be more write-heavy, while pattern viewing is more read-heavy).

### File Storage Scalability

The system stores unstructured data, like crochet pattern files, in AWS S3, which is well-suited for scaling file storage as user uploads grow. S3 can easily handle both read-heavy and write-heavy operations. With its virtually unlimited storage capacity, S3 can scale seamlessly with the system's growth.

### Monitoring and Auto-scaling

- **Monitoring**: Monitoring will be performed using Amazon CloudWatch, which will track key metrics (e.g., database read/write performance, API request times, cache hit/miss rates). Alerts will be set up to notify the team if performance bottlenecks arise, allowing for proactive scaling or adjustments.
- **Auto-scaling**: The system will use AWS Auto Scaling to dynamically adjust the number of EC2 instances based on real-time metrics such as CPU utilization, memory usage, and traffic patterns. This allows the system to scale automatically during periods of high read or write traffic, maintaining performance and availability.

## Performance and Optimizations

The system is designed to maintain high performance as it scales, ensuring efficient data retrieval, smooth user interactions, and fast syncing of data. Below are the key performance strategies and optimization.

### Database Optimization

#### Indexing

Indexing will be applied to frequently queried fields such as yarn attributes (e.g., weight, fiber content) and project statuses. By creating indexes on these fields, the system can quickly locate relevant data without scanning the entire table, significantly speeding up search and filtering operations, especially as the dataset grows. Indexing is particularly crucial for ensuring that queries return results efficiently, even with large inventories or projects.

In addition to speeding up common queries, indexes will be carefully managed to balance read and write performance. While indexing enhances read operations, it can slightly slow down write operations (e.g., adding new yarn entries), so only the most frequently queried fields will be indexed to maintain overall performance.

#### Query Optimization

Complex queries, such as calculating total yarn costs for projects, will be optimized to avoid performance bottlenecks like full table scans. Techniques like query caching will be implemented to store the results of frequently executed queries, reducing the need to recompute them.

### Caching for Faster Data Retrieval

#### Server-Side Data Caching

Server-side caching is used to store frequently accessed data, such as yarn inventory and project details, in memory to improve retrieval speeds and reduce the load on the database. This is especially beneficial for read-heavy operations like searching yarns or viewing projects, as it significantly reduces latency and improves overall system performance.

#### Client-Side Caching

Client-side caching is handled by service workers, which cache static resources such as HTML, CSS, and JavaScript in the user's browser. This enables faster page loads, as these assets are retrieved from the local cache rather than re-fetched from the server on every visit. Additionally, this supports offline functionality, allowing users to interact with cached data and static assets even when they are not connected to the internet.

### Efficient Data Syncing

To optimize the synchronization process when users reconnect after working offline, the system employs incremental syncing and batching sync operations, which work in tandem to reduce sync time and server load.

Incremental syncing identifies changes made offline and syncs only those differences with the server, minimizing data transfer and speeding up the sync process.

Batching then groups these changes into a smaller number of API requests, lowering latency and reducing the number of calls made to the server. For example, related changes like yarn updates or project modifications are combined into a single request, rather than sending each change separately.

Together, these techniques ensure that only necessary data is synced and that it is sent efficiently, providing a faster, smoother user experience.

## Security Considerations

Although the system doesn't handle sensitive financial or personal data, basic security measures are in place to protect user data and ensure the system operates reliably.

### Authentication and Authorization

- **JWT for Authentication**: The system will use JSON Web Tokens (JWT) to authenticate users. This ensures that only authorized users can access and modify their own data (e.g., yarn inventory, projects).

### Data Encryption

- **Encryption at Rest**: Although the data is not highly sensitive, all user data (e.g., yarn information, project details) stored in the database and file storage will be encrypted at rest using standard encryption methods. This ensures that even if unauthorized access to the storage occurs, the data remains protected.
- **Encryption in Transit**: All communication between the client and the server will be secured using TLS (Transport Layer Security), ensuring that data exchanged over the network is protected from eavesdropping or tampering.

### Input Validation

- **Server-Side Validation**: User input will be validated on both the client and server side to prevent common security vulnerabilities such as SQL Injection and Cross-Site Scripting (XSS).

### Basic Rate Limiting

Rate limiting sets a cap on the number of API requests a client (user, device, or IP) can make over a specific period (e.g., 100 requests per minute). If a client exceeds this limit, further requests are either blocked or delayed until the rate limit resets.

To prevent abuse, the system will implement basic rate limiting on API endpoints, ensuring that no single user can overwhelm the system with excessive requests.

## High-Level Architecture

The architecture of the Crochet Management System is described using the [C4 model](https://c4model.com/). This model provides a clear and structured way to visualize the system at multiple levels:

1. **System Context**: Shows how the user interacts with the Crochet Management System through the Web Application.
2. **Container**: Breaks down the system into containers, including the Web Application, API Layer, Database, and File Storage.
3. **Component**: Provides a detailed look at the components within the API Layer, such as the Yarn API, Pattern API, Project API, and Calculator API, and how they interact with the Database and File Storage.

This layered approach to the architecture ensures that each component has a clear responsibility, promoting modularity, scalability, and maintainability.

### C4 Model Level 1: System Context View

The User interacts with the Crochet Management System through a Web Application running in the browser to manage yarns, patterns, and projects.

![Component - API layer](crochetMS/crochetMS_system_context.svg)

### C4 Model Level 2: Container View

The Container View breaks down the system into its major components and describes how they communicate. In this system, we have the following containers:

![Component - API layer](crochetMS/crochetMS_container_crochet_management_system.svg)

#### Web Application (Browser)

The client-side application through which the user interacts with the system. It provides the interface for users to manage yarns, patterns, and projects. The Web Application uses Local Storage to cache unsynced changes (e.g., new yarns or project updates) when the user is offline.

#### API Layer

The API layer serves as the intermediary between the web application and the backend services. The Web Application sends requests to the API Layer, which handles business logic and interacts with the Database and File Storage for data storage and retrieval.

#### Database (Relational Database)

A relational database that stores yarn, pattern, and project data in dedicated tables. It supports complex queries and operations via the API layer and is optimized for performance with indexing and query optimization techniques.

#### File Storage (Cloud Storage)

Unstructured data such as pattern charts and project images are stored in cloud storage, providing scalability and reliable access for large files.

#### Local Storage (Client-Side Storage)

Temporarily stores unsynced data while the user is offline. When the user reconnects, this data is synced with the backend to ensure consistency across all devices.

### C4 Model Level 3: Component View

#### API Layer

The API layer handles all business logic and serves as the intermediary between the web application and the backend services. It is composed of multiple components that handle various aspects of the system:

- **Yarn API**: Handles CRUD operations for managing yarn data.
- **Pattern API**: Manages pattern data and interacts with cloud storage for storing and retrieving pattern charts.
- **Project API**: Manages project data, including progress tracking and project images stored in the cloud.
- **Calculator API**: Performs cost calculations based on yarn usage and project progress.

The API Layer communicates with both the database and file storage containers to retrieve or update data as necessary. This division of responsibilities ensures modularity and maintainability.

![Component - API layer](crochetMS/crochetMS_component_api_layer.svg)

#### Database

Main tables:

- Yarn
- Pattern
- Project

## Technical Choices

### ADR #1: Choosing React as the Frontend Framework

#### Title

Choosing React as the Frontend Framework for an Offline-First Web Application

#### Status

Accepted

#### Context

The system is designed for crochet enthusiasts to manage yarn inventory, track projects, store crochet patterns, and monitor associated costs. The application must support offline functionality, allowing users to view, modify, and sync their data when they regain an internet connection. It must also be user-friendly for non-technical users, handle a moderate amount of data without performance degradation, and be easy to extend and maintain over time. Additionally, we need a solution that supports reusable components.

#### Decision Drivers

The following key drivers influenced the decision:

- **Offline Support**: The frontend must support Progressive Web Application (PWA) capabilities, including service workers for caching and background sync, to ensure smooth offline functionality.
- **Component Reusability**: A component-based architecture is essential to simplify UI development and ensure scalability, allowing for the reuse of components like yarn cards, project forms, and pattern uploads.
- **Performance**: The system should handle a moderate number of yarns and projects (hundreds of entries) without noticeable performance degradation.
- **State Management**: Efficient state management is required to manage unsynced changes made while offline, ensuring smooth transitions between offline and online states.
- **Ecosystem**: The library should have a robust ecosystem, including tools for routing, form handling, state management, and offline support.
- **Team Expertise**: The development team has prior experience with React, reducing the learning curve and minimizing the risks of adopting a new technology.

#### Alternative Options Considered

- **Vue.js**: Rejected due to its smaller ecosystem compared to React, particularly for advanced state management and offline-first capabilities. While Vue is simpler, it may not provide the same long-term flexibility as React for scaling the project.
- **Angular**: Rejected because of its complexity and heavier framework size, which is not necessary for a project of this size. Angular would introduce a steep learning curve and increase development time due to its strict architecture and advanced tooling.
- **Svelte**: Rejected due to its smaller and less mature ecosystem. While Svelte is simple and performant, it lacks the deep ecosystem support needed for a production-ready offline-first application, particularly in terms of PWA and state management features.

#### Decision

We decided to use **React** as the frontend framework.

#### Rationale

React was chosen because it directly satisfies the key decision drivers:

- **Offline Support**: React has excellent PWA support, which is critical for implementing offline capabilities. With React, we can easily integrate service workers to handle caching and background syncing, meeting the requirement for a seamless offline-first experience.
- **Component Reusability**: React's component-based architecture allows us to build modular, reusable components, such as yarn cards and project forms. This will streamline development and help us scale the system while maintaining a clean, modular codebase.
- **Performance**: React's virtual DOM enables efficient UI rendering, even with large datasets like hundreds of yarns or projects. This ensures that the system can handle the required data volume without noticeable performance degradation.
- **State Management**: While React alone does not include built-in state management, it integrates well with libraries like Redux, providing the flexibility to handle offline/online state transitions. This allows us to efficiently manage unsynced data and smooth transitions.
- **Ecosystem**: React's mature and extensive ecosystem provides the tools needed for routing, form handling, and state management. This robust ecosystem is essential for building a production-ready offline-first web application.
- **Team Expertise**: The team has significant experience with React, reducing the learning curve and development risks. This allows for faster implementation and reduces the need for additional training.

#### Consequences

##### Positive

- **Faster Development**: Leveraging React's component-based architecture and the team's existing experience will allow for rapid development and deployment, reducing the overall project timeline.
- **Reduced Maintenance Overhead**: The reusability of React components will simplify future maintenance, allowing easy updates and modifications without affecting the entire system, leading to long-term sustainability.

##### Negative

- **Complexity in state management**: While React is flexible, managing state (especially offline/online transitions) may require additional libraries like Redux, which can add complexity to the codebase.
- **Bundle size concerns**: As React applications grow, bundle size can become an issue. We may need to optimize the build process to ensure that performance remains acceptable, especially for users with slow connections.

#### Conclusion

- In the context of **building an offline-first web application**,
- facing **the need for component reusability, offline support, and a robust ecosystem**,
- we decided to use **React**,
- and neglected **Vue.js, Angular, and Svelte**,
- to achieve **faster development, easier maintenance, and a better user experience**,
- accepting **the trade-offs of potential complexity in state management and bundle size concerns**.

### ADR #2: Choosing Node.js with Express for the Backend (API Layer)

#### Title

Choosing Node.js with Express for the Backend of the Offline-First Web Application

#### Status

Accepted

#### Context

The system is an offline-first web application designed for managing crochet projects, yarn inventory, and crochet patterns. Users will need to be able to work seamlessly while offline and have their data synchronized when they reconnect to the internet. The backend must provide a scalable API to handle requests for yarn, project, and pattern data, support file uploads (e.g., crochet pattern PDFs and images), and manage business logic, such as calculating project costs.

Additionally, the backend must integrate with cloud services (e.g., AWS S3 for file storage) and handle asynchronous tasks, such as syncing offline data when the user reconnects. Given the team's expertise in JavaScript, a solution that minimizes the learning curve and development time while offering high performance for handling I/O-bound operations is crucial. The ability to scale the system in the future is also important, as the application may grow in terms of user base and data volume.

#### Decision Drivers

The following key drivers influenced our decision-making process for the backend:

- **Performance and Scalability**: The backend must handle multiple concurrent users efficiently and scale as the system grows. It must be capable of handling tasks like data synchronization, API requests for yarn and project data, and file uploads (patterns).
- **Developer Efficiency and Familiarity**: The development team has significant experience with JavaScript and Node.js. This reduces the time and complexity of development, minimizing risks associated with adopting unfamiliar technologies.
- **RESTful API Support**: The backend needs to support simple and efficient creation of RESTful APIs to handle CRUD operations for yarns, projects, patterns, and calculations.
- **Cloud Integration**: The system must integrate smoothly with cloud services like AWS S3 for file storage and PostgreSQL for structured data. This ensures scalability and the ability to offload certain tasks (like file management) to external services.
- **Maintainability**: The system should be easy to maintain, with a clean and modular structure. The backend should be flexible and adaptable, supporting future growth with minimal refactoring.
- **Authentication**: The backend must support lightweight, stateless user authentication, likely using JWT for securing user access to their inventory and projects.

#### Alternative Options Considered

Those options were rejected:

- **Python with Flask**: Flask was considered because of its simplicity and flexibility for building small, RESTful APIs. However, it is synchronous by default, requiring additional configuration to handle concurrent requests efficiently, which would increase complexity. For this reason, Node.js with its non-blocking I/O architecture was preferred for better handling of multiple concurrent requests.
- **Python with Django**: While Django is a powerful full-stack framework with built-in features like an ORM and user management, it was rejected due to its added complexity and heavier architecture, which is unnecessary for this project. The project only requires a lightweight backend for RESTful APIs, making Express a better fit.
- **Ruby on Rails**: Rails was considered for its productivity features and built-in functionality, but it was rejected due to concerns about its performance for handling I/O-bound tasks and the team's unfamiliarity with Ruby. Using Rails would introduce a steep learning curve and increase development time.

#### Decision

We decided to use Node.js with Express as the backend framework for building the RESTful API and handling the I/O-bound operations of the offline-first web application.

#### Rationale

Node.js with Express was chosen because it meets the project's key requirements:

- **Performance and Scalability**: Node.js is well-suited for handling I/O-bound tasks, such as serving API requests and managing data synchronization, which are key needs for this system. Its event-driven, non-blocking architecture ensures that the backend can handle multiple concurrent requests efficiently.
- **Developer Efficiency and Familiarity**: The development team is already proficient in JavaScript and Node.js, reducing the risk of delays or errors in the development process. This familiarity allows the team to focus on building core features quickly and efficiently.
- **RESTful API Support**: Express is a lightweight and flexible framework that allows for fast and straightforward creation of RESTful APIs. This makes it ideal for managing CRUD operations for yarns, projects, and patterns.
- **Cloud Integration**: Node.js has strong support for integrating with cloud services like AWS S3 (for file storage) and PostgreSQL (for structured data), which aligns with our need for scalable, external storage and database solutions.
- **Maintainability**: Express's minimalist design provides flexibility and simplicity, ensuring that the backend is modular and easy to maintain. This supports future scalability and adaptability as the project grows.
- **Authentication**: Node.js works seamlessly with JWT for stateless authentication, providing secure access to user-specific data while keeping the authentication system lightweight.

#### Consequences

##### Positive

- **Efficient I/O Handling**: Node.js's non-blocking, asynchronous nature ensures the backend can efficiently handle I/O-bound tasks such as data synchronization, database queries, and file uploads, which are core operations in this project.
- **Developer Productivity**: The team's familiarity with JavaScript and Node.js reduces onboarding time and allows for faster development, decreasing the overall development risk and ensuring that the team can focus on delivering functionality rather than learning new technologies.
- **Simple API Development**: Express simplifies the creation of RESTful APIs, making it easy to implement CRUD operations for yarns, projects, and patterns, while keeping the codebase maintainable and scalable.
- **Cloud Integration**: Node.js integrates seamlessly with AWS S3 for file storage and PostgreSQL for database management, ensuring that we can scale the storage and database requirements of the system as the user base grows.
- **Maintainability**: The minimalistic nature of Express allows for a modular backend design, which is easy to maintain and extend as the system grows. This also ensures that future requirements, such as new API endpoints or business logic, can be added with minimal refactoring.
- **Stateless Authentication**: Using JWT for authentication ensures lightweight, secure, and scalable access control for users, fitting well with the stateless nature of Node.js and enabling easy scaling.

##### Negative

- **Single-threaded Limitations**: While Node.js handles I/O-bound tasks well, it may struggle with CPU-intensive tasks due to its single-threaded nature. However, this is mitigated because the system's primary operations are I/O-bound (e.g., API requests, file handling), so performance bottlenecks are unlikely.
- **Middleware Complexity**: While Express is lightweight and flexible, it requires additional middleware to handle common backend tasks such as authentication (e.g., JWT), file uploads (e.g., Multer), and error handling. This can introduce complexity, but the wide availability of libraries in the Node.js ecosystem mitigates this challenge.

##### Subsequent ADRs

- A future ADR will be needed to choose the database schema and define the relationships between yarns, projects, and patterns.
- Another ADR may be required to choose a deployment strategy (e.g., containers, serverless) for the Node.js backend.

#### Conclusion

- In the context of **building a performant and scalable backend for an offline-first web application**,
- facing **the need for efficient handling of I/O-bound operations and seamless integration with cloud services**,
- we decided to use **Node.js with Express**,
- and neglected **Python with Flask or Django**,
- to achieve **developer efficiency, scalable API support, and cloud service integration**,
- accepting **the trade-off of potential complexity in middleware and single-threaded performance limitations for CPU-bound tasks**.

### ADR #3: Choosing PostgreSQL as the Database

#### Title

Choosing PostgreSQL as the Database for the Offline-First Web Application

#### Status

Accepted

#### Context

The system will manage data for yarn inventory, crochet projects, and patterns, all of which require structured data storage. Users will need to filter, search, and organize their data based on various attributes (e.g., yarn weight, fiber content, project status). The database must be able to handle structured relationships between these entities and support complex queries such as joins and filtering by multiple criteria. In addition, the system must be scalable to support future growth, with efficient querying and data integrity.

The database will be accessed via a RESTful API, and its performance must remain consistent as the user base and data volume grow. The database should also integrate seamlessly with cloud services for backup, recovery, and scalability.

#### Decision Drivers

The following key drivers influenced the decision-making process for the database:

- **Relational Data Model**: The system needs a robust relational model to manage relationships between yarn, projects, and patterns, allowing for complex queries and data integrity through features like foreign keys and constraints.
- **Structured Query Support**: The database must support complex queries, such as filtering yarns by attributes and calculating project costs, while ensuring efficient performance even as the dataset grows.
- **Scalability**: The database should allow for easy scaling, both vertically (adding more resources to a single server) and horizontally (distributing data across multiple servers), as the application grows.
- **Full-Text Search**: Efficient full-text search capabilities are needed to enable users to search for patterns or yarns based on keywords or attributes.
- **Backup and Durability**: The database should offer reliable backup, recovery, and high durability to ensure user data is protected.
- **Team Familiarity**: The team has experience with relational databases like PostgreSQL, reducing the learning curve and ensuring that the team can implement the system efficiently.

#### Alternative Options Considered

Those options were rejected:

- **SQLite**: Rejected due to its limitations in handling concurrent users and large datasets. SQLite is file-based and best suited for smaller, single-user applications. Since our system requires scalability and the ability to handle multiple users simultaneously, PostgreSQL's client-server architecture is a better fit.
- **NoSQL (e.g., MongoDB)**: Rejected because the project requires complex relationships between entities, which are best modeled using a relational database. NoSQL databases are more suitable for unstructured or semi-structured data and do not natively support the complex querying and relationship constraints that PostgreSQL provides.

#### Decision

We decided to use PostgreSQL as the database for the offline-first web application. PostgreSQL's robust relational model, support for complex queries, scalability, and full-text search capabilities make it the best choice for the system's data management needs.

#### Rationale

PostgreSQL was chosen because it satisfies the key requirements for managing structured data and supporting the application's long-term scalability:

- **Relational Data Model**: PostgreSQL's strong relational model, including support for foreign keys, constraints, and joins, ensures that we can effectively model the relationships between yarns, projects, and patterns. This will allow for consistent, structured data handling and integrity.
- **Structured Query Support**: PostgreSQL provides powerful query capabilities, allowing the system to handle complex queries, such as filtering yarns by multiple attributes and performing cost calculations for projects.
- **Scalability**: PostgreSQL is designed to scale both vertically and horizontally, which ensures that the database can handle increased user demand and data growth over time.
- **Full-Text Search**: PostgreSQL offers built-in full-text search capabilities, which will be useful for enabling users to search patterns and yarns efficiently.
- **Backup and Durability**: PostgreSQL provides robust backup and recovery options, ensuring that user data is secure and easily recoverable in case of failures.
- **Team Familiarity**: The development team has prior experience working with PostgreSQL, minimizing the learning curve and development risk while ensuring efficient implementation.

#### Consequences

##### Positive

- **Efficient Structured Data Handling**: PostgreSQL's relational model and support for complex queries will enable efficient management of yarn, project, and pattern data, ensuring data integrity and high performance even with growing datasets.
- **Scalable Architecture**: PostgreSQL's ability to scale both vertically and horizontally ensures that the system can grow as the user base increases, without compromising performance.
- **Advanced Query Capabilities**: The system will benefit from PostgreSQL's powerful query features, including full-text search, which will allow users to perform complex filtering and searches on their data.
- **Durability and Reliability**: PostgreSQL provides high durability and reliability, including automatic backups and robust recovery options, ensuring that user data is always protected.

##### Negative

- **More Complex Setup Compared to SQLite**: PostgreSQL requires more setup and maintenance than SQLite, particularly in terms of server configuration and management. However, this is mitigated by its scalability and the team's familiarity with PostgreSQL.
- **Overhead for Smaller Projects**: PostgreSQL's full-featured architecture may introduce unnecessary overhead if the system remains small. However, the system is expected to grow over time, and PostgreSQL is better suited for handling long-term scalability needs.

#### Conclusion

- In the context of **building a scalable, relational database for managing structured data**,
- facing **the need for complex queries, data integrity, and future scalability**,
- we decided to use **PostgreSQL**,
- and neglected **SQLite**,
- to achieve **efficient data handling, full-text search, and scalability**,
- accepting **the trade-off of increased setup complexity compared to simpler databases like SQLite**.

### ADR #4: Choosing AWS S3 for File Storage

#### Title

Choosing AWS S3 for File Storage in the Offline-First Web Application

#### Status

Accepted

#### Context

The system allows users to upload and store crochet patterns, which can be in various formats such as PDFs or images. These patterns must be securely stored, easily retrievable, and scalable as the number of users and files grows. The storage solution must handle potentially large file sizes while ensuring that the files are backed up and available when needed.

Additionally, the file storage system should integrate with the backend API, allowing users to upload files and retrieve them as part of their project workflows. Security is also a key concern, with file access limited to authenticated users. The system should scale seamlessly with increasing data while remaining cost-effective.

#### Decision Drivers

The following key drivers influenced the decision-making process for file storage:

- **Scalability**: The system needs to support increasing amounts of unstructured data as the user base grows. The file storage solution should scale efficiently, with no limitations on the number of files or total storage space.
- **Cost Efficiency**: The storage solution should be cost-effective, particularly for a growing system that may store thousands of files in the future. Pay-as-you-go pricing is preferred to avoid over-provisioning.
- **Backup and Durability**: The files must be backed up and available with a high degree of durability to prevent data loss.
- **Secure Access**: Users' pattern files should only be accessible to authenticated users, and file transfers must be encrypted. Temporary file access (e.g., via pre-signed URLs) should be supported.
- **Ease of Integration**: The storage system must integrate easily with the backend (Node.js with Express), allowing for smooth file uploads, retrieval, and management.
- **Performance**: The system should offer fast file retrieval and upload speeds, particularly for users with large pattern files.

#### Alternative Options Considered

Those options were rejected:

- **Azure Blob Storage**: Rejected because, while it offers similar capabilities to AWS S3, the project does not currently use the Azure ecosystem, and the team has more experience with AWS. Switching to Azure would require additional learning and setup costs.
- **Google Cloud Storage**: Rejected for similar reasons as Azure Blob Storage. The team is already more familiar with AWS services, and adopting Google Cloud Storage would introduce additional overhead in terms of learning and configuration.

#### Decision

We decided to use AWS S3 as the file storage solution for storing and managing unstructured data, such as crochet patterns (PDFs, images).

#### Rationale

AWS S3 was chosen because it meets the system's core requirements for file storage:

- **Scalability**: AWS S3 is designed to scale automatically with no limits on the number of files or storage capacity, making it an ideal solution for a growing user base and increasing amounts of data.
- **Cost Efficiency**: S3 offers a pay-as-you-go pricing model, which is cost-effective for smaller projects while allowing for easy scaling as the system grows. This flexibility ensures that we don't over-provision or incur unnecessary costs.
- **Backup and Durability**: AWS S3 provides 99.999999999% (11 nines) durability by replicating data across multiple availability zones, ensuring that files are highly durable and recoverable in the event of hardware failure.
- **Secure Access**: S3 integrates with AWS Identity and Access Management (IAM) to control access to files. It also supports pre-signed URLs, which allow for temporary access to files, ensuring that only authenticated users can retrieve pattern files.
- **Ease of Integration**: AWS S3 integrates easily with Node.js via the AWS SDK, allowing us to handle file uploads, retrieval, and management with minimal effort. It also integrates with other AWS services we may adopt in the future.
- **Performance**: S3 provides fast, reliable access to files, with options like S3 Transfer Acceleration to further enhance performance for users uploading large files from remote locations.

#### Consequences

##### Positive

- **Scalability without Maintenance**: AWS S3 scales automatically as more pattern files are uploaded, requiring no intervention or maintenance. This frees up the development team from needing to manage or adjust storage capacity as the system grows.
- **Pay-as-you-go Model**: The cost structure of AWS S3 ensures that we only pay for the storage we use, which is cost-efficient at the beginning and will remain flexible as the storage needs increase.
- **Built-in Redundancy and Backup**: AWS S3 ensures that data is replicated across multiple locations, providing durability and protection against data loss. This reduces the need for the team to implement their own backup solution.
- **Simple Integration with Backend**: The AWS SDK makes it easy to handle file uploads and retrievals through the existing Node.js backend, simplifying the development effort.

##### Negative

- **AWS-specific Configuration and IAM Management**: Configuring access control and security using AWS IAM roles and policies requires some additional setup. While these features are powerful, managing them can introduce complexity, especially for fine-tuning permissions.
- **Potential Cost Increases**: While the pay-as-you-go model is beneficial initially, costs could increase significantly as the number of users and the amount of stored files grows, especially if not carefully monitored.

#### Conclusion

- In the context of **storing and managing large amounts of unstructured data for an offline-first web application**,
- facing **the need for scalable, durable, and cost-effective file storage**,
- we decided to use **AWS S3**,
- and neglected **Azure Blob Storage and Google Cloud Storage**,
- to achieve **automatic scalability, secure access control, and easy cloud integration**,
- accepting **the trade-off of potential vendor lock-in and additional AWS-specific configuration**.

### ADR #5: Choosing Workbox for Offline Support

#### Title

Choosing Workbox for Offline Support

#### Status

Accepted

#### Context

The web application requires offline functionality so that users can manage yarn inventory, projects, and crochet patterns without an internet connection. Users need to view and edit their data while offline, and these changes should automatically sync with the server once the user reconnects.

The offline functionality must allow for:

- **Caching static assets** (HTML, CSS, JS) to enable the app to load when offline.
- **Storing data locally** so that users can access and modify yarn, project, and pattern data offline.
- **Data synchronization**: Any changes made while offline must sync automatically with the server once the user reconnects, ensuring consistency between offline and online states.

#### Decision Drivers

The following key drivers influenced the decision-making process for offline support:

- **Seamless User Experience**: Users should be able to work offline without interruptions, with automatic syncing once they reconnect to the internet.
- **Efficient Caching and Data Storage**: The system needs to cache static assets and store dynamic data locally so users can access and modify it even when offline.
- **Automatic Data Syncing**: Offline changes must sync automatically with the server once the user reconnects, without manual intervention.

#### Alternative Options Considered

This option was rejected:

- **Custom Service Worker Implementation**: Rejected because implementing a custom solution for caching, background sync, and offline storage requires more effort and maintenance. Workbox simplifies these tasks with minimal configuration.

#### Decision

We decided to use Workbox to implement offline support.

#### Rationale

Workbox was chosen because it directly addresses the key requirements for offline support, offering a unified solution for caching and background synchronization:

- **Seamless User Experience**: Workbox enables smooth offline functionality by caching static assets and API responses, ensuring users can load and interact with the application even without an internet connection. This aligns with the requirement for uninterrupted offline workflows.
- **Efficient Caching and Data Storage**: Workbox simplifies caching strategies, enabling efficient use of service workers to store static assets and API responses. It also works seamlessly with various offline data storage solutions, ensuring that structured data like yarns and projects can be stored and accessed while offline, meeting the need for robust local data availability.
- **Automatic Data Syncing**: Workbox simplifies the integration of the Background Sync API, which allows any changes made while offline to be synced with the server when the user reconnects. This reduces the need for manual syncing and ensures that the application remains consistent between offline and online states.

#### Consequences

##### Positive

- **Reduced Manual Intervention**: By automating the caching of assets and data, as well as syncing changes when the user reconnects, the system reduces the need for manual interventions in both development and user actions.
- **Simplified Maintenance**: Workbox's encapsulation of service workers, caching, and background sync reduces the complexity of building and maintaining custom solutions, making the system easier to support and extend in the future.

##### Negative

- **Initial Complexity in Setup**: Setting up service workers, managing offline data storage, and integrating the Background Sync API requires careful configuration, especially for ensuring consistent offline-to-online transitions.

#### Conclusion

- In the context of **providing offline support for a web application**,
- facing **the need for seamless user experience, efficient caching, and automatic data synchronization**,
- we decided to use **Workbox**,
- and neglected **custom service worker implementation**,
- to achieve **reduced manual intervention, and simplified maintenance**,
- accepting **the trade-offs of initial setup complexity**.

### ADR #6: Choosing Last Write Wins (LWW) for Conflict Resolution

#### Title

Choosing Last Write Wins (LWW) for Conflict Resolution with Optional User-Assisted Resolution

#### Status

Accepted

#### Context

The application allows users to work offline and make changes to their data, such as yarn inventory or crochet projects. When the user reconnects to the internet, these offline changes need to be synced with the server. However, conflicts may arise if the user on another device has updated the same data while offline.

The system must automatically resolve such conflicts when syncing, but the solution should be simple to implement and maintain while ensuring consistency. However, in some cases, users may wish to have more control over how their data conflicts are resolved.

#### Decision Drivers

The following key drivers influenced the decision-making process for conflict resolution:

- **Simplicity**: The conflict resolution strategy should be easy to implement and maintain without introducing unnecessary complexity.
- **Consistency**: The system must ensure that conflicting changes are resolved in a consistent and predictable manner.
- **Automated Resolution**: For most cases, conflicts should be resolved automatically by the system to avoid overwhelming users with manual conflict resolution tasks.
- **User Control**: In critical scenarios, users may prefer to have control over which version of their data is kept, especially for important project details.

#### Alternative Options Considered

- **Manual Conflict Resolution**: This option would involve asking users to manually resolve conflicts by choosing between conflicting versions of data. This was rejected because it introduces unnecessary complexity for users and could slow down workflows. However, this approach could be selectively applied for critical data, offering more flexibility.
- **Versioning**: This strategy creates a version history for each change, allowing the system or the user to resolve conflicts by comparing different versions of the data. While this offers granular control and safety, it was rejected for this phase due to its complexity and the overhead it introduces in terms of storage and version management.
- **Merging Changes**: This option attempts to combine changes from different versions, requiring sophisticated logic to identify conflicts and merge data. While powerful, this was rejected due to the added complexity and potential for unexpected behavior in a system where conflicts are relatively rare and simple.

#### Decision

We decided to implement Last Write Wins (LWW) as the primary conflict resolution strategy, combined with optional user-assisted conflict resolution for critical cases. LWW resolves conflicts by overwriting the previous data with the most recent update based on a timestamp. However, for certain sensitive data (e.g., project milestones or financial calculations), the system will allow users to manually resolve conflicts when needed.

#### Rationale

The Last Write Wins (LWW) strategy was chosen because it satisfies the project's key requirements of simplicity and consistency, while the introduction of optional user-assisted resolution for key scenarios provides a safety net for handling more sensitive data.

- **Simplicity**: LWW is a straightforward solution that requires minimal development effort. By simply comparing timestamps of conflicting data and accepting the most recent update, implementation remains lightweight and easy to manage.
- **Consistency**: LWW ensures that data remains consistent across the system after conflicts are resolved, preventing duplicate or outdated information. Since most data in the system (e.g., yarn inventory) is not highly sensitive, automated resolution fits well.
- **Automated Resolution**: For most data, users are not required to take action. The system handles conflicts automatically, allowing for a smooth and uninterrupted user experience.
- **User Control for Critical Data**: For key data elements (e.g., completed project stages, financial records), users will have the option to manually resolve conflicts when reconnecting to the internet. This provides flexibility without complicating the system for less important data.

#### Consequences

##### Positive

- **Lower Risk of User Confusion**: For the majority of data, LWW resolves conflicts automatically, reducing the chance that users will encounter confusing conflict resolution workflows. For critical data, the user-assisted option ensures that data loss is minimized where it matters most.
- **Reduced Development Time**: Implementing LWW requires less development effort than more complex strategies like versioning or merging. This allows the project to focus on core functionalities without getting bogged down by conflict resolution complexities.
- **Predictable Behavior**: The LWW approach provides consistent and predictable behavior, making it easier for both users and developers to understand how conflicts are resolved. With the option to allow manual resolution for critical data, users retain control where needed.
- **Scalability**: The simplicity of LWW makes it easy to scale as the system grows, allowing for conflict resolution to remain efficient even as the number of users and devices increases.

##### Negative

- **Potential Data Loss in LWW**: In scenarios where LWW is applied, older changes may be overwritten without user input. However, by restricting manual conflict resolution to key scenarios, the system mitigates the risk of data loss for important data.
- **Additional Complexity for User-Assisted Resolution**: Introducing optional manual conflict resolution adds a bit of complexity in terms of development and user experience. However, this complexity is limited to a subset of critical data, balancing user control with system automation.

#### Conclusion

- In the context of **providing conflict resolution for an offline-first web application**,
- facing **the need for simplicity, consistency, automated resolution, and user control in critical scenarios**,
- we decided to use **Last Write Wins (LWW)** for the majority of data with **optional user-assisted conflict resolution** for critical data,
- and neglected **manual conflict resolution, versioning, and merging changes**,
- to achieve **reduced user confusion, predictable behavior, scalability, and data safety**,
- accepting **the trade-offs of potential data loss for non-critical data under LWW** and **additional complexity for manual resolution in key cases**.

### ADR #7: Choosing a Distributed Architecture

#### Title

Choosing a Distributed Architecture

#### Status

Accepted

#### Context

The system is designed for crochet enthusiasts to manage yarn inventory, track projects, store crochet patterns, and monitor associated costs. The current scope targets a small number of users, but the system must be able to scale as new features are added, third-party integrations are introduced, and the user base grows over time.

To ensure long-term flexibility, scalability, and ease of introducing new components or integrations, the choice of architecture must balance initial simplicity with the ability to evolve and grow over time.

#### Decision Drivers

The following key factors influence the architecture decision:

- **Scalability**: The architecture must allow for scaling as the user base grows and as different components of the system (e.g., yarn management, project management) require more resources.
- **Future Integrations**: The system may need to support third-party services (e.g., yarn price APIs, pattern repositories) and new features in the future. The architecture must accommodate these integrations with minimal disruption.
- **Cost Efficiency**: The system should remain cost-effective at its current scale while providing a clear path for handling increased operational complexity as it grows.
- **Maintainability**: The architecture should make it easy to manage, update, and debug individual components of the system.

#### Alternative Options Considered

- **Monolithic Architecture**: A monolithic approach bundles all components into a single deployment unit, simplifying early development and deployment. However, it was rejected because it introduces scalability limitations, as the entire application would need to be deployed or scaled as a single unit. This would also make future integrations more complex and require greater refactoring efforts as the system grows.

#### Decision

We decided to adopt a distributed architecture, beginning with a modular approach where individual services (e.g., yarn management, project management) are designed as independent components. Initially, these services may be deployed together, but the architecture will allow for gradual decoupling into independent deployment units as the system grows.

#### Rationale

The distributed architecture was chosen because it best supports the system's long-term goals of scalability, flexibility, and independent service management:

- **Scalability**: As the user base grows or new features are introduced, services can be scaled independently without affecting other components.
- **Future-Proofing**: Distributed architecture supports the integration of third-party services and new features more easily, without needing a complete system overhaul.
- **Modular Evolution**: Starting with loosely coupled services within a distributed system allows for future migration to a microservices approach, but without the complexity and overhead of full microservices from the start.

#### Consequences

##### Positive

- **Easier Maintenance Over Time**: The modular structure will make it easier to manage, update, and debug individual components without affecting the entire system. This will reduce the long-term technical debt associated with the system's evolution.
- **Faster Time to Market for New Features**: The ability to independently develop, update, and deploy different parts of the system will allow faster iteration and deployment of new features or services without requiring full redeployments of the entire system.
- **Improved Resource Allocation**: Independent scaling of components means resources can be allocated efficiently based on the actual usage patterns of different parts of the system (e.g., scaling the yarn management service separately from the project tracking service).
- **Better User Experience**: Updates and changes to specific services can be made with minimal or no downtime, providing a smoother and more reliable user experience.

##### Negative

- **Initial Complexity**: While not as complex as full microservices, distributed architecture introduces some complexity in managing communication between services and ensuring consistency.
- **Potential Overhead for Small Scale**: In the early stages, with a small user base, the overhead of managing distributed services may add unnecessary complexity compared to a monolithic architecture.

#### Subsequent ADRs

- A future ADR may define the specific strategies for managing communication between distributed services, such as choosing between REST APIs, message queues, or event-driven communication.

#### Conclusion

- In the context of **designing a scalable and flexible system for a small but growing user base**,
- facing **the need for long-term scalability, support for future integrations, and maintainability**,
- we decided to use a **distributed architecture**,
- and neglected **monolithic architecture**,
- to achieve **flexibility, scalability, and modular development**,
- accepting **the trade-off of initial complexity and potential overhead for managing distributed services in the early stages**.

### ADR #8: Choosing a Third-Party Authentication Service

- In the context of **building a cost-effective and scalable web application with user authentication**,
- facing **the need for strong security, minimal development effort, and future scalability**,
- we decided to use **third-party authentication services**,
- and neglected **building custom authentication system**,
- to achieve **faster implementation, robust security features, and long-term scalability**,
- accepting **the trade-off of potential vendor lock-in and ongoing service costs**.

### ADR #9: Choosing an Automated Cloud Backups

- In the context of **ensuring data reliability and recovery for user-uploaded files and database records**,
- facing **the need for scalable, cost-effective, and low-maintenance backup solutions**,
- we decided for **using automated cloud backups**,
- and neglected **manual backup processes**,
- to achieve **automated, reliable backups with minimal ongoing maintenance and easy recovery**,
- accepting **the trade-off of potential vendor lock-in and ongoing service costs**.

## Appendix

### Structurizr diagram

[Structurizr](https://structurizr.com/) diagram code for Crochet Management System:

\`\`\`
workspace {
  model {
    user = person "Crocheter" {
      description "Crocheting Enthusiast"
    }

    crochetApp = softwareSystem "Crochet Management System" {
      webApp = container "Web Application" {
        technology "TypeScript, React"
        description "Allows users to manage yarns, patterns, and projects"
        tags "Web Browser"
      }

      api = container "API Layer" {
        technology "Node.js, Express.js"
        description "Exposes CRUD operations for managing yarns, patterns, and projects"

        patternAPI = component "Pattern API" {
          technology "Node.js, Express.js"
          description "Manages pattern-related data"
        }
        projectAPI = component "Project API" {
          technology "Node.js, Express.js"
          description "Manages project-related data"
        }
        yarnAPI = component "Yarn API" {
          technology "Node.js, Express.js"
          description "Manages yarn-related data"
        }
        calculatorAPI = component "Calculator API" {
          technology "Node.js, Express.js"
          description "Handles logic for project cost and yarn price calculations"
        }
      }

      database = container "Database" {
        technology "PostgreSQL"
        description "Stores yarns, patterns, and projects"
        tags "Database"

        yarnTable = component "Yarn table"
        patternTable = component "Pattern table"
        projectTable = component "Project table"
      }

      fileStorage = container "File Storage" {
        technology "AWS S3"
        description "Stores pattern charts and project images"
      }

      localStorage = container "Local Storage" {
        technology "Workbox"
        description "Temporarily stores unsynced data while offline"
      }
    }

    user -> webApp "Manages yarns, patterns, and projects"
    webApp -> api "Makes API calls" "JSON/HTTPS"
    webApp -> localStorage "Stores local unsynced data"

    api -> database "Reads from and writes to" "SQL"
    yarnAPI -> database "Reads from and writes to" "SQL"
    patternAPI -> database "Reads from and writes to" "SQL"
    projectAPI -> database "Reads from and writes to" "SQL"
    calculatorAPI -> database "Reads from and writes to" "SQL"
    patternAPI -> fileStorage "Stores and retrieves pattern charts"
    projectAPI -> fileStorage "Stores and retrieves project images"
  }

  views {
    theme default

    systemContext crochetApp {
      include *
      autolayout
      title "[System Context] Crochet Management System"
    }

    container crochetApp {
      include *
      autolayout lr
      title "[Container] Crochet Management System"
    }

    component api {
      include *
      autolayout
      title "[Component] API Layer"
    }

    component database {
      include *
      autolayout
      title "[Component] Database"
    }

    styles {
      element "External" {
        background grey
      }
      element "Web Browser" {
        shape WebBrowser
      }
      element "Database" {
        shape Cylinder
      }
    }

    properties {
      structurizr.softwareSystemBoundaries true
      c4plantuml.stdlib false
    }
  }
}
\`\`\`
`;var To=pt('<article class="default"><!></article>');function Fo(e,t){var u=To(),i=Ee(u);Do(i,{get content(){return So}}),De(u),Ve(e,u)}var Io=pt('<p class="text-center"><small><strong>(╯°□°）╯︵ ┻━┻</strong></small></p>');function Po(e){var t=Io();Ve(e,t)}var Ro=pt('<p class="text-center green"><small><strong>(ヘ･_･)ヘ┳━┳</strong></small></p>');function Mo(e){var t=Ro();Ve(e,t)}var Lo=pt(`<article class="default"><h1>Engineering the Intangible:<br/>The Essential Handbook for Engineers Who
    Refuse to Lose Their Minds While Navigating a World Where the Only Certainty
    Is That Your Stack Will Never Stop Changing</h1> <section><p class="text-center"><small> </small></p> <section id="toc"></section> <section><h2>Summary</h2> <p>The <i>Engineering the Intangible</i> project emerged from my own experience
        as a software engineer, when I realized the importance of balancing rapidly
        changing technical skills with lasting human abilities. In a world where
        technology quickly becomes outdated, skills like effective communication
        and adaptability are crucial for long-term success.</p> <p>This insight made me see a gap: many existing resources are either too
        generic, overly complex, or not well-suited for the analytical mindset
        of technical professionals. <i>Engineering the Intangible</i> aims to fill
        this gap by offering an approach tailored specifically for engineers and
        tech professionals. My aim is to create a tool that's easy to access and
        use, helping people improve their job performance while also fostering their
        personal growth.</p> <p>This project is my way of providing a straightforward and intuitive
        resource that supports the continuous development of these essential,
        intangible skills. By focusing on these competencies, it helps
        individuals grow both professionally and personally in a constantly
        changing world.</p></section> <section><h2>Introduction</h2> <p>The <i>Engineering the Intangible</i> project was born to tackle a challenge
        every engineer faces: the need to stay up-to-date with rapidly changing technologies
        while also building the soft skills that are crucial for career growth. Unlike
        many existing resources that can be too generic, overly complex, or aimed
        at those with a background in psychology, this project takes a straightforward
        approach tailored to the analytical mindset of engineers.</p> <p>The goal is to create an accessible tool that not only boosts job
        performance but also supports overall personal development in all areas
        of life. By focusing on mastering timeless competencies, this project
        aims to help you sustain long-term success and continuous growth.</p></section> <section><h2>Problem</h2> <p>In the rapidly changing IT world, where new technologies mushroom,
        certain core competencies—such as adaptability and effective
        communication—remain essential. Mastering these skills not only ensures
        your long-term career success but also makes daily work life more
        satisfying.</p> <p>While technical skills can quickly become outdated, these timeless
        competencies provide a stable foundation, helping you stay adaptable and
        valuable no matter how the industry changes.</p> <!></section> <section><h2>Motivation Behind the Project</h2> <p>This project is born from my own experience in the IT field, where I saw
        a growing need to develop non-technical skills alongside technical
        expertise. Even though there are resources out there discussing these
        competencies, I found a lack of options that specifically cater to the
        unique needs of technical professionals.</p> <p>To fill this gap, I have developed a straightforward approach to foster
        these timeless competencies. My goal is to create a tool that is:</p> <ul><li><b>Simple</b><br/> Fits into busy schedule without being overwhelming.</li> <li><b>Easy to Use</b><br/> Requires no prior expertise in psychology or HR.</li> <li><b>Plug-and-Play</b><br/> Ready for immediate use with minimal setup.</li> <li><b>Flexible</b><br/> Useful for both professional and personal development.</li></ul></section> <section><h2>Theoretical Foundation</h2> <p>The <i>Engineering the Intangible</i> project draws on established competency
        models, particularly those by Spencer & Spencer (1993), who define competencies
        as the "underlying characteristics of an individual related to effective
        and superior performance." These characteristics include deeper qualities
        such as motives, traits, and self-concept, which are crucial for long-term
        success, especially in fields where technical skills can quickly become outdated.</p> <p>As statistician George Box famously said, <q>All models are wrong, but some are useful.</q> This project embraces that idea, offering a framework that, while not perfect,
        is designed to be practical and adaptable across various professional contexts.</p></section> <section><h3>Selected Bibliography</h3> <ul><li>Lucia, A. D., & Lepsinger, R. (1999). <cite>The art and science of competency models: Pinpointing critical
            success factors in organizations</cite>. Jossey-Bass/Pfeiffer.</li> <li>McClelland, D.C. (1987). <cite>Human motivation</cite>. Cambridge:
          Cambridge University Press.</li> <li>Spencer, L. M., & Spencer, S. M. (1993). <cite>Competence at work: Models for superior performance</cite>. Wiley.</li></ul></section> <section><h2>Goal of the Project</h2> <p>The primary goal of this project is to develop a structured, accessible
        approach for tracking and enhancing intangible skills, especially for
        those who lack formal training in psychology or human resources. This
        tool is intended to support self-improvement in both your professional
        and personal life.</p></section> <section><h2>Target Audience</h2> <p>While this framework is developed from a software engineer's
        perspective, its focus on timeless competencies makes it relevant to
        anyone looking to grow personally and professionally, no matter where
        they are in their career—whether they're just starting out, stepping
        into leadership, or navigating new challenges in a constantly changing
        world.</p> <p>For junior engineers, the need to acquire extensive technical skills can
        be overwhelming, and the importance of non-technical skills is
        frequently overlooked or underestimated. This tool helps them develop
        these broader skills, which are crucial for comprehensive growth.
        Mid-career professionals transitioning into leadership roles will also
        find this framework valuable, as these intangible competencies become
        increasingly critical.</p></section> <section><h2>Key Use Cases</h2> <ul><li><b>Interview Preparation</b><br/>Strengthen key competencies to
          better articulate your skills and experience.</li> <li><b>Ongoing Personal Development</b><br/>Plan your career growth by
          strategically building the soft skills you need.</li></ul> <p>For example, a software engineer preparing for an interview could use
        this tool to identify and enhance relevant non-technical skills, helping
        them develop clear, concise narratives to share during the interview.</p> <p>Similarly, a mid-career software engineer aiming to switch into a
        managerial role might use this framework to strategically plan their
        skill development, making their transition smoother and more effective.</p></section> <section><h2>Benefits</h2> <ul><li><b>Increased Self-Awareness</b><br/> Understand your strengths and areas for improvement, accelerating your
          career progress and boosting job satisfaction.</li> <li><b>Objective Measurement</b><br/> Track your growth over time using a clear, structured approach, helping
          you achieve both short-term and long-term goals.</li> <li><b>Gap Identification</b><br/> Proactively address skill gaps to prepare for future challenges, keeping
          you competitive in your field.</li> <li><b>Well-Rounded Growth</b><br/> Improve your effectiveness in all areas of life and enhance your ability
          to adapt to new roles and responsibilities.</li></ul></section> <!></section></article>`);function Oo(e,t){ln(t,!0),Ii(()=>{Fi(2);const{hash:d}=document.location,f=d&&document.getElementById(d.slice(1));f&&f.scrollIntoView()});var u=Lo(),i=st(Ee(u),2),a=Ee(i),n=Ee(a),o=Ee(n);De(n),De(a);var r=st(a,8),s=st(Ee(r),6);Po(s),De(r);var c=st(r,16);Mo(c),De(i),De(u),cn(()=>Pi(o,`${t.project.started??""} – Present (Research Phase)`)),Ve(e,u),dn()}const Uo={name:"Natalia Pospieszyńska",role:"Backend Software Engineer",location:{city:"Trutnov",region:"Hradec Králové",country:"Czechia",icon:"fa-solid fa-location-dot",mapUrl:"https://en.mapy.cz/turisticka?source=dist&id=36&ds=1&x=15.8373076&y=50.5704668&z=10"},contact:{linkedin:{href:"https://www.linkedin.com/in/nataliapospieszynska/",displayValue:"/nataliapospieszynska",faIconClass:"fa-brands fa-linkedin"},github:{href:"https://github.com/burczan",displayValue:"/burczan",faIconClass:"fa-brands fa-github"},web:{href:"https://burczan.github.io/me/",displayValue:"burczan.github.io/me",faIconClass:"fa-solid fa-globe"}}},Ho=[{school:"Polish Naval Academy",city:"Gdynia",country:"Poland",field:"Cybersecurity",degree:"Postgraduate studies",dateRange:"2019–2020",website:"https://www.amw.gdynia.pl"},{school:"Adam Mickiewicz University",city:"Poznań",country:"Poland",field:"Philosophy",subfield:"Social Communication",degree:"Master studies",dateRange:"2013–2016",website:"https://amu.edu.pl/"},{school:"Post-Secondary Vocational School",city:"Poznań",country:"Poland",field:"Sound Engineering",degree:"Technician",dateRange:"2011–2013"},{school:"Adam Mickiewicz University",city:"Poznań",country:"Poland",field:"Instructional Technology",degree:"Bachelor's degree",dateRange:"2010–2013",website:"https://amu.edu.pl/"}],Go=[{role:"Backend Software Engineer",company:"Capbase",startDate:"04/2021",endDate:"07/2022",description:["Implemented and enhanced several product features in TypeScript, Node.js, and React, improving user experience and addressing customer feedback.","Developed and optimized an internal API with Express.js and AWS, enabling seamless data integration and improving internal workflows.","Diagnosed and resolved technical issues, improving application stability and ensuring smooth performance.","Wrote and maintained comprehensive unit and integration tests, leading to high code quality and fewer bugs in production."],descriptionShortened:["Implemented and enhanced several product features in TypeScript, Node.js, and React.","Developed and optimized an internal API with Express.js and AWS.","Diagnosed and resolved technical issues.","Wrote and maintained comprehensive unit and integration tests."],technologies:["AWS","Bash","Express.js","Linux","Node.js","React","TypeScript"]},{role:"Frontend Software Engineer",company:"Beta District",startDate:"12/2019",endDate:"08/2020",description:["Developed reusable components in React and TypeScript, improving code consistency and speeding up the development process for future features.","Implemented unit and integration tests using Jest and React Testing Library, ensuring high code reliability and significantly reducing bug occurrences."],descriptionShortened:["Developed reusable components in React and TypeScript for a newly created frontend.","Implemented unit and integration tests using Jest and React Testing Library."],technologies:["GraphQL","JavaScript","React","Redux","TypeScript","Unit testing"]},{role:"Software Test Engineer",company:"Beta District",startDate:"01/2019",endDate:"11/2019",description:["Remotely mentored a QA specialist, introducing programming and test automation practices, which enhanced the team's testing efficiency and technical capabilities.","Developed and maintained automated tests in JavaScript and Ruby, improving test coverage and helping ensure consistent product quality throughout the release cycle.","Contributed to frontend development by implementing basic functionalities in React, supporting the timely delivery of key features alongside the development team."],descriptionShortened:["Remotely mentored QA specialist.","Developed and maintained automated tests in JavaScript and Ruby.","Contributed to frontend development by implementing basic functionalities in React."],technologies:["API testing","JavaScript","React","Ruby","Test automation"]},{role:"QA Specialist",company:"Beta District",startDate:"02/2018",endDate:"12/2018",description:["Conducted manual functional and API testing using Burp Suite and Postman, ensuring reliability and preventing major issues before deployment to production.","Collaborated closely with developers to implement new functionalities, providing critical feedback that improved product quality and streamlined the development process.","Learned and applied test automation using JavaScript and Ruby, contributing to enhanced test coverage and overall improvement in the team's testing process.","Performed post-release production environment testing using manual testing techniques, identifying and resolving issues that maintained system stability and reliability."],descriptionShortened:["Conducted manual functional and API testing using Burp Suite and Postman.","Collaborated closely with developers to implement new features.","Performed production environment testing after each release."],technologies:["API testing","Burp Suite","JavaScript","Manual testing","Ruby","Test automation"]},{role:"Junior QA Specialist",company:"Beta District",startDate:"04/2017",endDate:"01/2018",description:["Performed manual testing to identify and document defects, ensuring high-quality software products and preventing critical issues before release.","Proposed and implemented more efficient testing procedures, streamlining the process and reducing test execution time.","Actively identified and reported bugs, suggesting improvements that contributed to enhancing the overall quality and performance of software projects.","Actively learned new concepts and techniques in manual and API testing, applying these insights to improve the team's testing effectiveness and product quality."],descriptionShortened:["Performed manual testing to identify and document defects.","Proposed and implemented more efficient testing procedures.","Suggested improvements to projects by finding and reporting bugs.","Actively learned new concepts and techniques in software testing."],technologies:["API testing","Manual testing"]},{role:"Instructional Designer",company:"LLidero",startDate:"05/2014",endDate:"06/2016",description:["Designed and developed educational courses tailored to various learner needs, applying instructional design principles and pedagogical techniques to create effective learning experiences.","Set clear learning goals and objectives for each course, ensuring alignment with educational standards and learner outcomes.","Conducted thorough testing of courses, demonstrating strong attention to detail to identify and resolve any issues, ensuring the quality and effectiveness of instructional materials.","Collaborated with subject matter experts to gather content and ensure accuracy, integrating their expertise into the course design to enhance the learning experience."],descriptionShortened:["Designed and developed educational courses tailored to various learner needs.","Set clear learning goals and objectives for each course.","Collaborated with subject matter experts to gather content and ensure accuracy."]}],$o=[{name:"Mathematics",description:"Uncovering the hidden order and underlying patterns that govern the universe."},{name:"Philosophy",description:"Searching the meaning behind the order and chaos that mathematics reveals."},{name:"Psychology",description:"Exploring the complexities of human thought, mirroring the pursuit of order amid the chaos revealed by mathematics and questioned by philosophy."},{name:"Theoretical Computer Science",description:"Investigating the limits of computation, where chaos, order, and meaning intersect in the search for knowledge."}],Vo={programmingLanguages:{display:"Programming Languages",skills:["JavaScript","TypeScript","Ruby","Bash"]},frontendDevelopment:{display:"Frontend Development",skills:["React","Svelte","Vanilla JS","HTML","CSS","Tailwind"]},backendDevelopment:{display:"Backend Development & Databases",skills:["Node.js","Express.js","REST API","GraphQL","SQL","NoSQL","AWS DynamoDB","PostgreSQL"]},cloudPlatforms:{display:"Cloud Platforms",skills:["Amazon Web Services (AWS)"]},systemDesignArchitecture:{display:"System Design & Architecture",skills:["Distributed Systems","System Architecture","Microservices","Serverless"]},diagrammingDocumentation:{display:"Diagramming & Technical Documentation",skills:["PlantUML","Structurizr","Graphviz","TikZ","LaTeX"]},softwareEngineering:{display:"Software Engineering",skills:["Algorithms and Data Structures","Code Review","Debugging","Software Craftsmanship (KISS, DRY, YAGNI, etc.)"]},testingAutomation:{display:"Testing & Automation",skills:["API Testing (Postman)","Jest","Puppeteer","Security Testing (Burp Suite)","Test Automation (Frontend/Backend)","Unit Testing"]},versionControlCollaboration:{display:"Version Control & Collaboration",skills:["Git","GitHub","Linear","Obsidian"]},operatingSystems:{display:"Operating Systems",skills:["Linux"]}},Qo=["Adaptability","Analytical skills","Asking questions","Attention to detail","Collaboration","Continuous learning","Critical thinking","Growth mindset","Mentoring","Open-mindedness","Openness to feedback","Persistence","Problem solving","Remote working","Resilience","Self-motivation"],Zo=[{slug:"crochet-management-system",title:"Crochet Management System Design",shortTitle:"Crochet Management System Design",started:"09/2024",ended:"09/2024",component:Fo},{slug:"engineering-intangible",title:"Engineering the Intangible: The Essential Handbook for Engineers Who Refuse to Lose Their Minds While Navigating a World Where the Only Certainty Is That Your Stack Will Never Stop Changing",shortTitle:"Engineering the Intangible",started:"07/2024",ended:"Present (Research Phase)",component:Oo}],Yo=[{title:"Assumptions in System Design: Avoiding the Hidden Traps",abstract:"In system design, assumptions—whether explicit or hidden—play a crucial role in shaping the success and stability of complex systems. However, when left unchecked, especially when influenced by cognitive biases, these assumptions can lead to serious risks and system failures. This article takes a closer look at the challenge of identifying and managing hidden assumptions that can impact performance, scalability, and reliability. Traditional methods like cross-team reviews and standard testing often miss these implicit assumptions until they create critical issues. To help mitigate these risks, this article presents practical strategies such as scenario planning, designing for failure, and validating assumptions through thorough testing. A real-world example—the failure of NASA's Mars Climate Orbiter—highlights the importance of these practices. A simple, unexamined assumption about units of measurement led to a 125 million mission loss. By proactively managing assumptions, teams can reduce errors, improve communication, and build systems that are far more resilient and reliable.",comment:"This article is an introduction to a series on assumptions in system design, covering topics such as managing technical, security, and business assumptions, mitigating cognitive biases, and best practices for validating assumptions throughout the system lifecycle.",started:"10/2024",ended:"10/2024",pdfFileName:"assumptions_in_system_design.pdf"}],Jo=[{language:"Polish",level:"Native proficiency"},{language:"English",level:"Full professional proficiency"},{language:"Czech",level:"Professional working proficiency"},{language:"Spanish",level:"Elementary proficiency"}],Xo={contact:"fa-solid fa-address-book",education:"fa-solid fa-user-graduate",experience:"fa-solid fa-person-digging",externalLink:"fa-solid fa-link",headline:"fa-solid fa-code",projects:"fa-solid fa-person-walking-luggage",softSkills:"fa-solid fa-people-pulling",spokenLanguages:"fa-solid fa-language"};export{Qo as a,Uo as b,Go as c,Yo as d,Ho as e,Xo as f,$o as i,Zo as p,Jo as s,Vo as t};
