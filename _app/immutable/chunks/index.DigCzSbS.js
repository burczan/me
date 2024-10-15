import{s as xt,n as _e,o as Ci}from"./scheduler.UCFHsqob.js";import{S as _t,i as wt,H as Ei,y as sn,G as Di,g as kt,d as ce,e as N,k as mu,c as z,a as Be,l as bu,u as Ke,m as gu,n as yu,o as xu,p as _u,q as K,s as Z,t as cn,f as Y,b as ln,h as P,j as Si}from"./index.jfv8FCq7.js";import{v as Ti,g as Fi}from"./generateToC.BdFYRwfi.js";const Ii=""+new URL("../assets/crochetMS_component_api_layer.D9xFDxDP.svg",import.meta.url).href,Pi=""+new URL("../assets/crochetMS_container_crochet_management_system.BKvRjGry.svg",import.meta.url).href,Ri=""+new URL("../assets/crochetMS_system_context.DtlamE4W.svg",import.meta.url).href,dn={};function Li(e){let t=dn[e];if(t)return t;t=dn[e]=[];for(let u=0;u<128;u++){const n=String.fromCharCode(u);t.push(n)}for(let u=0;u<e.length;u++){const n=e.charCodeAt(u);t[n]="%"+("0"+n.toString(16).toUpperCase()).slice(-2)}return t}function tt(e,t){typeof t!="string"&&(t=tt.defaultChars);const u=Li(t);return e.replace(/(%[a-f0-9]{2})+/gi,function(n){let a="";for(let i=0,o=n.length;i<o;i+=3){const r=parseInt(n.slice(i+1,i+3),16);if(r<128){a+=u[r];continue}if((r&224)===192&&i+3<o){const s=parseInt(n.slice(i+4,i+6),16);if((s&192)===128){const c=r<<6&1984|s&63;c<128?a+="��":a+=String.fromCharCode(c),i+=3;continue}}if((r&240)===224&&i+6<o){const s=parseInt(n.slice(i+4,i+6),16),c=parseInt(n.slice(i+7,i+9),16);if((s&192)===128&&(c&192)===128){const d=r<<12&61440|s<<6&4032|c&63;d<2048||d>=55296&&d<=57343?a+="���":a+=String.fromCharCode(d),i+=6;continue}}if((r&248)===240&&i+9<o){const s=parseInt(n.slice(i+4,i+6),16),c=parseInt(n.slice(i+7,i+9),16),d=parseInt(n.slice(i+10,i+12),16);if((s&192)===128&&(c&192)===128&&(d&192)===128){let h=r<<18&1835008|s<<12&258048|c<<6&4032|d&63;h<65536||h>1114111?a+="����":(h-=65536,a+=String.fromCharCode(55296+(h>>10),56320+(h&1023))),i+=9;continue}}a+="�"}return a})}tt.defaultChars=";/?:@&=+$,#";tt.componentChars="";const fn={};function Mi(e){let t=fn[e];if(t)return t;t=fn[e]=[];for(let u=0;u<128;u++){const n=String.fromCharCode(u);/^[0-9a-z]$/i.test(n)?t.push(n):t.push("%"+("0"+u.toString(16).toUpperCase()).slice(-2))}for(let u=0;u<e.length;u++)t[e.charCodeAt(u)]=e[u];return t}function vt(e,t,u){typeof t!="string"&&(u=t,t=vt.defaultChars),typeof u>"u"&&(u=!0);const n=Mi(t);let a="";for(let i=0,o=e.length;i<o;i++){const r=e.charCodeAt(i);if(u&&r===37&&i+2<o&&/^[0-9a-f]{2}$/i.test(e.slice(i+1,i+3))){a+=e.slice(i,i+3),i+=2;continue}if(r<128){a+=n[r];continue}if(r>=55296&&r<=57343){if(r>=55296&&r<=56319&&i+1<o){const s=e.charCodeAt(i+1);if(s>=56320&&s<=57343){a+=encodeURIComponent(e[i]+e[i+1]),i++;continue}}a+="%EF%BF%BD";continue}a+=encodeURIComponent(e[i])}return a}vt.defaultChars=";/?:@&=+$,-_.!~*'()#";vt.componentChars="-_.!~*'()";function Au(e){let t="";return t+=e.protocol||"",t+=e.slashes?"//":"",t+=e.auth?e.auth+"@":"",e.hostname&&e.hostname.indexOf(":")!==-1?t+="["+e.hostname+"]":t+=e.hostname||"",t+=e.port?":"+e.port:"",t+=e.pathname||"",t+=e.search||"",t+=e.hash||"",t}function jt(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}const Oi=/^([a-z0-9.+-]+:)/i,Ni=/:[0-9]*$/,zi=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,ji=["<",">",'"',"`"," ","\r",`
`,"	"],qi=["{","}","|","\\","^","`"].concat(ji),Bi=["'"].concat(qi),hn=["%","/","?",";","#"].concat(Bi),pn=["/","?","#"],Wi=255,mn=/^[+a-z0-9A-Z_-]{0,63}$/,Ui=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,bn={javascript:!0,"javascript:":!0},gn={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function Cu(e,t){if(e&&e instanceof jt)return e;const u=new jt;return u.parse(e,t),u}jt.prototype.parse=function(e,t){let u,n,a,i=e;if(i=i.trim(),!t&&e.split("#").length===1){const c=zi.exec(i);if(c)return this.pathname=c[1],c[2]&&(this.search=c[2]),this}let o=Oi.exec(i);if(o&&(o=o[0],u=o.toLowerCase(),this.protocol=o,i=i.substr(o.length)),(t||o||i.match(/^\/\/[^@\/]+@[^@\/]+/))&&(a=i.substr(0,2)==="//",a&&!(o&&bn[o])&&(i=i.substr(2),this.slashes=!0)),!bn[o]&&(a||o&&!gn[o])){let c=-1;for(let f=0;f<pn.length;f++)n=i.indexOf(pn[f]),n!==-1&&(c===-1||n<c)&&(c=n);let d,h;c===-1?h=i.lastIndexOf("@"):h=i.lastIndexOf("@",c),h!==-1&&(d=i.slice(0,h),i=i.slice(h+1),this.auth=d),c=-1;for(let f=0;f<hn.length;f++)n=i.indexOf(hn[f]),n!==-1&&(c===-1||n<c)&&(c=n);c===-1&&(c=i.length),i[c-1]===":"&&c--;const b=i.slice(0,c);i=i.slice(c),this.parseHost(b),this.hostname=this.hostname||"";const p=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!p){const f=this.hostname.split(/\./);for(let E=0,D=f.length;E<D;E++){const F=f[E];if(F&&!F.match(mn)){let k="";for(let A=0,g=F.length;A<g;A++)F.charCodeAt(A)>127?k+="x":k+=F[A];if(!k.match(mn)){const A=f.slice(0,E),g=f.slice(E+1),x=F.match(Ui);x&&(A.push(x[1]),g.unshift(x[2])),g.length&&(i=g.join(".")+i),this.hostname=A.join(".");break}}}}this.hostname.length>Wi&&(this.hostname=""),p&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}const r=i.indexOf("#");r!==-1&&(this.hash=i.substr(r),i=i.slice(0,r));const s=i.indexOf("?");return s!==-1&&(this.search=i.substr(s),i=i.slice(0,s)),i&&(this.pathname=i),gn[u]&&this.hostname&&!this.pathname&&(this.pathname=""),this};jt.prototype.parseHost=function(e){let t=Ni.exec(e);t&&(t=t[0],t!==":"&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)};const Hi=Object.freeze(Object.defineProperty({__proto__:null,decode:tt,encode:vt,format:Au,parse:Cu},Symbol.toStringTag,{value:"Module"})),In=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,Pn=/[\0-\x1F\x7F-\x9F]/,$i=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,Eu=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,Rn=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,Ln=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,Gi=Object.freeze(Object.defineProperty({__proto__:null,Any:In,Cc:Pn,Cf:$i,P:Eu,S:Rn,Z:Ln},Symbol.toStringTag,{value:"Module"})),Vi=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(e=>e.charCodeAt(0))),Qi=new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(e=>e.charCodeAt(0)));var ou;const Zi=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),Yi=(ou=String.fromCodePoint)!==null&&ou!==void 0?ou:function(e){let t="";return e>65535&&(e-=65536,t+=String.fromCharCode(e>>>10&1023|55296),e=56320|e&1023),t+=String.fromCharCode(e),t};function Ji(e){var t;return e>=55296&&e<=57343||e>1114111?65533:(t=Zi.get(e))!==null&&t!==void 0?t:e}var H;(function(e){e[e.NUM=35]="NUM",e[e.SEMI=59]="SEMI",e[e.EQUALS=61]="EQUALS",e[e.ZERO=48]="ZERO",e[e.NINE=57]="NINE",e[e.LOWER_A=97]="LOWER_A",e[e.LOWER_F=102]="LOWER_F",e[e.LOWER_X=120]="LOWER_X",e[e.LOWER_Z=122]="LOWER_Z",e[e.UPPER_A=65]="UPPER_A",e[e.UPPER_F=70]="UPPER_F",e[e.UPPER_Z=90]="UPPER_Z"})(H||(H={}));const Xi=32;var Oe;(function(e){e[e.VALUE_LENGTH=49152]="VALUE_LENGTH",e[e.BRANCH_LENGTH=16256]="BRANCH_LENGTH",e[e.JUMP_TABLE=127]="JUMP_TABLE"})(Oe||(Oe={}));function wu(e){return e>=H.ZERO&&e<=H.NINE}function Ki(e){return e>=H.UPPER_A&&e<=H.UPPER_F||e>=H.LOWER_A&&e<=H.LOWER_F}function ea(e){return e>=H.UPPER_A&&e<=H.UPPER_Z||e>=H.LOWER_A&&e<=H.LOWER_Z||wu(e)}function ta(e){return e===H.EQUALS||ea(e)}var U;(function(e){e[e.EntityStart=0]="EntityStart",e[e.NumericStart=1]="NumericStart",e[e.NumericDecimal=2]="NumericDecimal",e[e.NumericHex=3]="NumericHex",e[e.NamedEntity=4]="NamedEntity"})(U||(U={}));var Me;(function(e){e[e.Legacy=0]="Legacy",e[e.Strict=1]="Strict",e[e.Attribute=2]="Attribute"})(Me||(Me={}));class ua{constructor(t,u,n){this.decodeTree=t,this.emitCodePoint=u,this.errors=n,this.state=U.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=Me.Strict}startEntity(t){this.decodeMode=t,this.state=U.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(t,u){switch(this.state){case U.EntityStart:return t.charCodeAt(u)===H.NUM?(this.state=U.NumericStart,this.consumed+=1,this.stateNumericStart(t,u+1)):(this.state=U.NamedEntity,this.stateNamedEntity(t,u));case U.NumericStart:return this.stateNumericStart(t,u);case U.NumericDecimal:return this.stateNumericDecimal(t,u);case U.NumericHex:return this.stateNumericHex(t,u);case U.NamedEntity:return this.stateNamedEntity(t,u)}}stateNumericStart(t,u){return u>=t.length?-1:(t.charCodeAt(u)|Xi)===H.LOWER_X?(this.state=U.NumericHex,this.consumed+=1,this.stateNumericHex(t,u+1)):(this.state=U.NumericDecimal,this.stateNumericDecimal(t,u))}addToNumericResult(t,u,n,a){if(u!==n){const i=n-u;this.result=this.result*Math.pow(a,i)+parseInt(t.substr(u,i),a),this.consumed+=i}}stateNumericHex(t,u){const n=u;for(;u<t.length;){const a=t.charCodeAt(u);if(wu(a)||Ki(a))u+=1;else return this.addToNumericResult(t,n,u,16),this.emitNumericEntity(a,3)}return this.addToNumericResult(t,n,u,16),-1}stateNumericDecimal(t,u){const n=u;for(;u<t.length;){const a=t.charCodeAt(u);if(wu(a))u+=1;else return this.addToNumericResult(t,n,u,10),this.emitNumericEntity(a,2)}return this.addToNumericResult(t,n,u,10),-1}emitNumericEntity(t,u){var n;if(this.consumed<=u)return(n=this.errors)===null||n===void 0||n.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(t===H.SEMI)this.consumed+=1;else if(this.decodeMode===Me.Strict)return 0;return this.emitCodePoint(Ji(this.result),this.consumed),this.errors&&(t!==H.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(t,u){const{decodeTree:n}=this;let a=n[this.treeIndex],i=(a&Oe.VALUE_LENGTH)>>14;for(;u<t.length;u++,this.excess++){const o=t.charCodeAt(u);if(this.treeIndex=na(n,a,this.treeIndex+Math.max(1,i),o),this.treeIndex<0)return this.result===0||this.decodeMode===Me.Attribute&&(i===0||ta(o))?0:this.emitNotTerminatedNamedEntity();if(a=n[this.treeIndex],i=(a&Oe.VALUE_LENGTH)>>14,i!==0){if(o===H.SEMI)return this.emitNamedEntityData(this.treeIndex,i,this.consumed+this.excess);this.decodeMode!==Me.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var t;const{result:u,decodeTree:n}=this,a=(n[u]&Oe.VALUE_LENGTH)>>14;return this.emitNamedEntityData(u,a,this.consumed),(t=this.errors)===null||t===void 0||t.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(t,u,n){const{decodeTree:a}=this;return this.emitCodePoint(u===1?a[t]&~Oe.VALUE_LENGTH:a[t+1],n),u===3&&this.emitCodePoint(a[t+2],n),n}end(){var t;switch(this.state){case U.NamedEntity:return this.result!==0&&(this.decodeMode!==Me.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case U.NumericDecimal:return this.emitNumericEntity(0,2);case U.NumericHex:return this.emitNumericEntity(0,3);case U.NumericStart:return(t=this.errors)===null||t===void 0||t.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case U.EntityStart:return 0}}}function Mn(e){let t="";const u=new ua(e,n=>t+=Yi(n));return function(a,i){let o=0,r=0;for(;(r=a.indexOf("&",r))>=0;){t+=a.slice(o,r),u.startEntity(i);const c=u.write(a,r+1);if(c<0){o=r+u.end();break}o=r+c,r=c===0?o+1:o}const s=t+a.slice(o);return t="",s}}function na(e,t,u,n){const a=(t&Oe.BRANCH_LENGTH)>>7,i=t&Oe.JUMP_TABLE;if(a===0)return i!==0&&n===i?u:-1;if(i){const s=n-i;return s<0||s>=a?-1:e[u+s]-1}let o=u,r=o+a-1;for(;o<=r;){const s=o+r>>>1,c=e[s];if(c<n)o=s+1;else if(c>n)r=s-1;else return e[s+a]}return-1}const ia=Mn(Vi);Mn(Qi);function On(e,t=Me.Legacy){return ia(e,t)}function aa(e){return Object.prototype.toString.call(e)}function Du(e){return aa(e)==="[object String]"}const ra=Object.prototype.hasOwnProperty;function oa(e,t){return ra.call(e,t)}function Wt(e){return Array.prototype.slice.call(arguments,1).forEach(function(u){if(u){if(typeof u!="object")throw new TypeError(u+"must be object");Object.keys(u).forEach(function(n){e[n]=u[n]})}}),e}function Nn(e,t,u){return[].concat(e.slice(0,t),u,e.slice(t+1))}function Su(e){return!(e>=55296&&e<=57343||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534||e>=0&&e<=8||e===11||e>=14&&e<=31||e>=127&&e<=159||e>1114111)}function qt(e){if(e>65535){e-=65536;const t=55296+(e>>10),u=56320+(e&1023);return String.fromCharCode(t,u)}return String.fromCharCode(e)}const zn=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,sa=/&([a-z#][a-z0-9]{1,31});/gi,ca=new RegExp(zn.source+"|"+sa.source,"gi"),la=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function da(e,t){if(t.charCodeAt(0)===35&&la.test(t)){const n=t[1].toLowerCase()==="x"?parseInt(t.slice(2),16):parseInt(t.slice(1),10);return Su(n)?qt(n):e}const u=On(e);return u!==e?u:e}function fa(e){return e.indexOf("\\")<0?e:e.replace(zn,"$1")}function ut(e){return e.indexOf("\\")<0&&e.indexOf("&")<0?e:e.replace(ca,function(t,u,n){return u||da(t,n)})}const ha=/[&<>"]/,pa=/[&<>"]/g,ma={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function ba(e){return ma[e]}function Ne(e){return ha.test(e)?e.replace(pa,ba):e}const ga=/[.?*+^$[\]\\(){}|-]/g;function ya(e){return e.replace(ga,"\\$&")}function O(e){switch(e){case 9:case 32:return!0}return!1}function mt(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function bt(e){return Eu.test(e)||Rn.test(e)}function gt(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function Ut(e){return e=e.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(e=e.replace(/ẞ/g,"ß")),e.toLowerCase().toUpperCase()}const xa={mdurl:Hi,ucmicro:Gi},_a=Object.freeze(Object.defineProperty({__proto__:null,arrayReplaceAt:Nn,assign:Wt,escapeHtml:Ne,escapeRE:ya,fromCodePoint:qt,has:oa,isMdAsciiPunct:gt,isPunctChar:bt,isSpace:O,isString:Du,isValidEntityCode:Su,isWhiteSpace:mt,lib:xa,normalizeReference:Ut,unescapeAll:ut,unescapeMd:fa},Symbol.toStringTag,{value:"Module"}));function wa(e,t,u){let n,a,i,o;const r=e.posMax,s=e.pos;for(e.pos=t+1,n=1;e.pos<r;){if(i=e.src.charCodeAt(e.pos),i===93&&(n--,n===0)){a=!0;break}if(o=e.pos,e.md.inline.skipToken(e),i===91){if(o===e.pos-1)n++;else if(u)return e.pos=s,-1}}let c=-1;return a&&(c=e.pos),e.pos=s,c}function ka(e,t,u){let n,a=t;const i={ok:!1,pos:0,str:""};if(e.charCodeAt(a)===60){for(a++;a<u;){if(n=e.charCodeAt(a),n===10||n===60)return i;if(n===62)return i.pos=a+1,i.str=ut(e.slice(t+1,a)),i.ok=!0,i;if(n===92&&a+1<u){a+=2;continue}a++}return i}let o=0;for(;a<u&&(n=e.charCodeAt(a),!(n===32||n<32||n===127));){if(n===92&&a+1<u){if(e.charCodeAt(a+1)===32)break;a+=2;continue}if(n===40&&(o++,o>32))return i;if(n===41){if(o===0)break;o--}a++}return t===a||o!==0||(i.str=ut(e.slice(t,a)),i.pos=a,i.ok=!0),i}function va(e,t,u,n){let a,i=t;const o={ok:!1,can_continue:!1,pos:0,str:"",marker:0};if(n)o.str=n.str,o.marker=n.marker;else{if(i>=u)return o;let r=e.charCodeAt(i);if(r!==34&&r!==39&&r!==40)return o;t++,i++,r===40&&(r=41),o.marker=r}for(;i<u;){if(a=e.charCodeAt(i),a===o.marker)return o.pos=i+1,o.str+=ut(e.slice(t,i)),o.ok=!0,o;if(a===40&&o.marker===41)return o;a===92&&i+1<u&&i++,i++}return o.can_continue=!0,o.str+=ut(e.slice(t,i)),o}const Aa=Object.freeze(Object.defineProperty({__proto__:null,parseLinkDestination:ka,parseLinkLabel:wa,parseLinkTitle:va},Symbol.toStringTag,{value:"Module"})),we={};we.code_inline=function(e,t,u,n,a){const i=e[t];return"<code"+a.renderAttrs(i)+">"+Ne(i.content)+"</code>"};we.code_block=function(e,t,u,n,a){const i=e[t];return"<pre"+a.renderAttrs(i)+"><code>"+Ne(e[t].content)+`</code></pre>
`};we.fence=function(e,t,u,n,a){const i=e[t],o=i.info?ut(i.info).trim():"";let r="",s="";if(o){const d=o.split(/(\s+)/g);r=d[0],s=d.slice(2).join("")}let c;if(u.highlight?c=u.highlight(i.content,r,s)||Ne(i.content):c=Ne(i.content),c.indexOf("<pre")===0)return c+`
`;if(o){const d=i.attrIndex("class"),h=i.attrs?i.attrs.slice():[];d<0?h.push(["class",u.langPrefix+r]):(h[d]=h[d].slice(),h[d][1]+=" "+u.langPrefix+r);const b={attrs:h};return`<pre><code${a.renderAttrs(b)}>${c}</code></pre>
`}return`<pre><code${a.renderAttrs(i)}>${c}</code></pre>
`};we.image=function(e,t,u,n,a){const i=e[t];return i.attrs[i.attrIndex("alt")][1]=a.renderInlineAsText(i.children,u,n),a.renderToken(e,t,u)};we.hardbreak=function(e,t,u){return u.xhtmlOut?`<br />
`:`<br>
`};we.softbreak=function(e,t,u){return u.breaks?u.xhtmlOut?`<br />
`:`<br>
`:`
`};we.text=function(e,t){return Ne(e[t].content)};we.html_block=function(e,t){return e[t].content};we.html_inline=function(e,t){return e[t].content};function nt(){this.rules=Wt({},we)}nt.prototype.renderAttrs=function(t){let u,n,a;if(!t.attrs)return"";for(a="",u=0,n=t.attrs.length;u<n;u++)a+=" "+Ne(t.attrs[u][0])+'="'+Ne(t.attrs[u][1])+'"';return a};nt.prototype.renderToken=function(t,u,n){const a=t[u];let i="";if(a.hidden)return"";a.block&&a.nesting!==-1&&u&&t[u-1].hidden&&(i+=`
`),i+=(a.nesting===-1?"</":"<")+a.tag,i+=this.renderAttrs(a),a.nesting===0&&n.xhtmlOut&&(i+=" /");let o=!1;if(a.block&&(o=!0,a.nesting===1&&u+1<t.length)){const r=t[u+1];(r.type==="inline"||r.hidden||r.nesting===-1&&r.tag===a.tag)&&(o=!1)}return i+=o?`>
`:">",i};nt.prototype.renderInline=function(e,t,u){let n="";const a=this.rules;for(let i=0,o=e.length;i<o;i++){const r=e[i].type;typeof a[r]<"u"?n+=a[r](e,i,t,u,this):n+=this.renderToken(e,i,t)}return n};nt.prototype.renderInlineAsText=function(e,t,u){let n="";for(let a=0,i=e.length;a<i;a++)switch(e[a].type){case"text":n+=e[a].content;break;case"image":n+=this.renderInlineAsText(e[a].children,t,u);break;case"html_inline":case"html_block":n+=e[a].content;break;case"softbreak":case"hardbreak":n+=`
`;break}return n};nt.prototype.render=function(e,t,u){let n="";const a=this.rules;for(let i=0,o=e.length;i<o;i++){const r=e[i].type;r==="inline"?n+=this.renderInline(e[i].children,t,u):typeof a[r]<"u"?n+=a[r](e,i,t,u,this):n+=this.renderToken(e,i,t,u)}return n};function ue(){this.__rules__=[],this.__cache__=null}ue.prototype.__find__=function(e){for(let t=0;t<this.__rules__.length;t++)if(this.__rules__[t].name===e)return t;return-1};ue.prototype.__compile__=function(){const e=this,t=[""];e.__rules__.forEach(function(u){u.enabled&&u.alt.forEach(function(n){t.indexOf(n)<0&&t.push(n)})}),e.__cache__={},t.forEach(function(u){e.__cache__[u]=[],e.__rules__.forEach(function(n){n.enabled&&(u&&n.alt.indexOf(u)<0||e.__cache__[u].push(n.fn))})})};ue.prototype.at=function(e,t,u){const n=this.__find__(e),a=u||{};if(n===-1)throw new Error("Parser rule not found: "+e);this.__rules__[n].fn=t,this.__rules__[n].alt=a.alt||[],this.__cache__=null};ue.prototype.before=function(e,t,u,n){const a=this.__find__(e),i=n||{};if(a===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(a,0,{name:t,enabled:!0,fn:u,alt:i.alt||[]}),this.__cache__=null};ue.prototype.after=function(e,t,u,n){const a=this.__find__(e),i=n||{};if(a===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(a+1,0,{name:t,enabled:!0,fn:u,alt:i.alt||[]}),this.__cache__=null};ue.prototype.push=function(e,t,u){const n=u||{};this.__rules__.push({name:e,enabled:!0,fn:t,alt:n.alt||[]}),this.__cache__=null};ue.prototype.enable=function(e,t){Array.isArray(e)||(e=[e]);const u=[];return e.forEach(function(n){const a=this.__find__(n);if(a<0){if(t)return;throw new Error("Rules manager: invalid rule name "+n)}this.__rules__[a].enabled=!0,u.push(n)},this),this.__cache__=null,u};ue.prototype.enableOnly=function(e,t){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(u){u.enabled=!1}),this.enable(e,t)};ue.prototype.disable=function(e,t){Array.isArray(e)||(e=[e]);const u=[];return e.forEach(function(n){const a=this.__find__(n);if(a<0){if(t)return;throw new Error("Rules manager: invalid rule name "+n)}this.__rules__[a].enabled=!1,u.push(n)},this),this.__cache__=null,u};ue.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};function fe(e,t,u){this.type=e,this.tag=t,this.attrs=null,this.map=null,this.nesting=u,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}fe.prototype.attrIndex=function(t){if(!this.attrs)return-1;const u=this.attrs;for(let n=0,a=u.length;n<a;n++)if(u[n][0]===t)return n;return-1};fe.prototype.attrPush=function(t){this.attrs?this.attrs.push(t):this.attrs=[t]};fe.prototype.attrSet=function(t,u){const n=this.attrIndex(t),a=[t,u];n<0?this.attrPush(a):this.attrs[n]=a};fe.prototype.attrGet=function(t){const u=this.attrIndex(t);let n=null;return u>=0&&(n=this.attrs[u][1]),n};fe.prototype.attrJoin=function(t,u){const n=this.attrIndex(t);n<0?this.attrPush([t,u]):this.attrs[n][1]=this.attrs[n][1]+" "+u};function jn(e,t,u){this.src=e,this.env=u,this.tokens=[],this.inlineMode=!1,this.md=t}jn.prototype.Token=fe;const Ca=/\r\n?|\n/g,Ea=/\0/g;function Da(e){let t;t=e.src.replace(Ca,`
`),t=t.replace(Ea,"�"),e.src=t}function Sa(e){let t;e.inlineMode?(t=new e.Token("inline","",0),t.content=e.src,t.map=[0,1],t.children=[],e.tokens.push(t)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}function Ta(e){const t=e.tokens;for(let u=0,n=t.length;u<n;u++){const a=t[u];a.type==="inline"&&e.md.inline.parse(a.content,e.md,e.env,a.children)}}function Fa(e){return/^<a[>\s]/i.test(e)}function Ia(e){return/^<\/a\s*>/i.test(e)}function Pa(e){const t=e.tokens;if(e.md.options.linkify)for(let u=0,n=t.length;u<n;u++){if(t[u].type!=="inline"||!e.md.linkify.pretest(t[u].content))continue;let a=t[u].children,i=0;for(let o=a.length-1;o>=0;o--){const r=a[o];if(r.type==="link_close"){for(o--;a[o].level!==r.level&&a[o].type!=="link_open";)o--;continue}if(r.type==="html_inline"&&(Fa(r.content)&&i>0&&i--,Ia(r.content)&&i++),!(i>0)&&r.type==="text"&&e.md.linkify.test(r.content)){const s=r.content;let c=e.md.linkify.match(s);const d=[];let h=r.level,b=0;c.length>0&&c[0].index===0&&o>0&&a[o-1].type==="text_special"&&(c=c.slice(1));for(let p=0;p<c.length;p++){const f=c[p].url,E=e.md.normalizeLink(f);if(!e.md.validateLink(E))continue;let D=c[p].text;c[p].schema?c[p].schema==="mailto:"&&!/^mailto:/i.test(D)?D=e.md.normalizeLinkText("mailto:"+D).replace(/^mailto:/,""):D=e.md.normalizeLinkText(D):D=e.md.normalizeLinkText("http://"+D).replace(/^http:\/\//,"");const F=c[p].index;if(F>b){const x=new e.Token("text","",0);x.content=s.slice(b,F),x.level=h,d.push(x)}const k=new e.Token("link_open","a",1);k.attrs=[["href",E]],k.level=h++,k.markup="linkify",k.info="auto",d.push(k);const A=new e.Token("text","",0);A.content=D,A.level=h,d.push(A);const g=new e.Token("link_close","a",-1);g.level=--h,g.markup="linkify",g.info="auto",d.push(g),b=c[p].lastIndex}if(b<s.length){const p=new e.Token("text","",0);p.content=s.slice(b),p.level=h,d.push(p)}t[u].children=a=Nn(a,o,d)}}}}const qn=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,Ra=/\((c|tm|r)\)/i,La=/\((c|tm|r)\)/ig,Ma={c:"©",r:"®",tm:"™"};function Oa(e,t){return Ma[t.toLowerCase()]}function Na(e){let t=0;for(let u=e.length-1;u>=0;u--){const n=e[u];n.type==="text"&&!t&&(n.content=n.content.replace(La,Oa)),n.type==="link_open"&&n.info==="auto"&&t--,n.type==="link_close"&&n.info==="auto"&&t++}}function za(e){let t=0;for(let u=e.length-1;u>=0;u--){const n=e[u];n.type==="text"&&!t&&qn.test(n.content)&&(n.content=n.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1—").replace(/(^|\s)--(?=\s|$)/mg,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1–")),n.type==="link_open"&&n.info==="auto"&&t--,n.type==="link_close"&&n.info==="auto"&&t++}}function ja(e){let t;if(e.md.options.typographer)for(t=e.tokens.length-1;t>=0;t--)e.tokens[t].type==="inline"&&(Ra.test(e.tokens[t].content)&&Na(e.tokens[t].children),qn.test(e.tokens[t].content)&&za(e.tokens[t].children))}const qa=/['"]/,yn=/['"]/g,xn="’";function Nt(e,t,u){return e.slice(0,t)+u+e.slice(t+1)}function Ba(e,t){let u;const n=[];for(let a=0;a<e.length;a++){const i=e[a],o=e[a].level;for(u=n.length-1;u>=0&&!(n[u].level<=o);u--);if(n.length=u+1,i.type!=="text")continue;let r=i.content,s=0,c=r.length;e:for(;s<c;){yn.lastIndex=s;const d=yn.exec(r);if(!d)break;let h=!0,b=!0;s=d.index+1;const p=d[0]==="'";let f=32;if(d.index-1>=0)f=r.charCodeAt(d.index-1);else for(u=a-1;u>=0&&!(e[u].type==="softbreak"||e[u].type==="hardbreak");u--)if(e[u].content){f=e[u].content.charCodeAt(e[u].content.length-1);break}let E=32;if(s<c)E=r.charCodeAt(s);else for(u=a+1;u<e.length&&!(e[u].type==="softbreak"||e[u].type==="hardbreak");u++)if(e[u].content){E=e[u].content.charCodeAt(0);break}const D=gt(f)||bt(String.fromCharCode(f)),F=gt(E)||bt(String.fromCharCode(E)),k=mt(f),A=mt(E);if(A?h=!1:F&&(k||D||(h=!1)),k?b=!1:D&&(A||F||(b=!1)),E===34&&d[0]==='"'&&f>=48&&f<=57&&(b=h=!1),h&&b&&(h=D,b=F),!h&&!b){p&&(i.content=Nt(i.content,d.index,xn));continue}if(b)for(u=n.length-1;u>=0;u--){let g=n[u];if(n[u].level<o)break;if(g.single===p&&n[u].level===o){g=n[u];let x,C;p?(x=t.md.options.quotes[2],C=t.md.options.quotes[3]):(x=t.md.options.quotes[0],C=t.md.options.quotes[1]),i.content=Nt(i.content,d.index,C),e[g.token].content=Nt(e[g.token].content,g.pos,x),s+=C.length-1,g.token===a&&(s+=x.length-1),r=i.content,c=r.length,n.length=u;continue e}}h?n.push({token:a,pos:d.index,single:p,level:o}):b&&p&&(i.content=Nt(i.content,d.index,xn))}}}function Wa(e){if(e.md.options.typographer)for(let t=e.tokens.length-1;t>=0;t--)e.tokens[t].type!=="inline"||!qa.test(e.tokens[t].content)||Ba(e.tokens[t].children,e)}function Ua(e){let t,u;const n=e.tokens,a=n.length;for(let i=0;i<a;i++){if(n[i].type!=="inline")continue;const o=n[i].children,r=o.length;for(t=0;t<r;t++)o[t].type==="text_special"&&(o[t].type="text");for(t=u=0;t<r;t++)o[t].type==="text"&&t+1<r&&o[t+1].type==="text"?o[t+1].content=o[t].content+o[t+1].content:(t!==u&&(o[u]=o[t]),u++);t!==u&&(o.length=u)}}const su=[["normalize",Da],["block",Sa],["inline",Ta],["linkify",Pa],["replacements",ja],["smartquotes",Wa],["text_join",Ua]];function Tu(){this.ruler=new ue;for(let e=0;e<su.length;e++)this.ruler.push(su[e][0],su[e][1])}Tu.prototype.process=function(e){const t=this.ruler.getRules("");for(let u=0,n=t.length;u<n;u++)t[u](e)};Tu.prototype.State=jn;function ke(e,t,u,n){this.src=e,this.md=t,this.env=u,this.tokens=n,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0;const a=this.src;for(let i=0,o=0,r=0,s=0,c=a.length,d=!1;o<c;o++){const h=a.charCodeAt(o);if(!d)if(O(h)){r++,h===9?s+=4-s%4:s++;continue}else d=!0;(h===10||o===c-1)&&(h!==10&&o++,this.bMarks.push(i),this.eMarks.push(o),this.tShift.push(r),this.sCount.push(s),this.bsCount.push(0),d=!1,r=0,s=0,i=o+1)}this.bMarks.push(a.length),this.eMarks.push(a.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}ke.prototype.push=function(e,t,u){const n=new fe(e,t,u);return n.block=!0,u<0&&this.level--,n.level=this.level,u>0&&this.level++,this.tokens.push(n),n};ke.prototype.isEmpty=function(t){return this.bMarks[t]+this.tShift[t]>=this.eMarks[t]};ke.prototype.skipEmptyLines=function(t){for(let u=this.lineMax;t<u&&!(this.bMarks[t]+this.tShift[t]<this.eMarks[t]);t++);return t};ke.prototype.skipSpaces=function(t){for(let u=this.src.length;t<u;t++){const n=this.src.charCodeAt(t);if(!O(n))break}return t};ke.prototype.skipSpacesBack=function(t,u){if(t<=u)return t;for(;t>u;)if(!O(this.src.charCodeAt(--t)))return t+1;return t};ke.prototype.skipChars=function(t,u){for(let n=this.src.length;t<n&&this.src.charCodeAt(t)===u;t++);return t};ke.prototype.skipCharsBack=function(t,u,n){if(t<=n)return t;for(;t>n;)if(u!==this.src.charCodeAt(--t))return t+1;return t};ke.prototype.getLines=function(t,u,n,a){if(t>=u)return"";const i=new Array(u-t);for(let o=0,r=t;r<u;r++,o++){let s=0;const c=this.bMarks[r];let d=c,h;for(r+1<u||a?h=this.eMarks[r]+1:h=this.eMarks[r];d<h&&s<n;){const b=this.src.charCodeAt(d);if(O(b))b===9?s+=4-(s+this.bsCount[r])%4:s++;else if(d-c<this.tShift[r])s++;else break;d++}s>n?i[o]=new Array(s-n+1).join(" ")+this.src.slice(d,h):i[o]=this.src.slice(d,h)}return i.join("")};ke.prototype.Token=fe;const Ha=65536;function cu(e,t){const u=e.bMarks[t]+e.tShift[t],n=e.eMarks[t];return e.src.slice(u,n)}function _n(e){const t=[],u=e.length;let n=0,a=e.charCodeAt(n),i=!1,o=0,r="";for(;n<u;)a===124&&(i?(r+=e.substring(o,n-1),o=n):(t.push(r+e.substring(o,n)),r="",o=n+1)),i=a===92,n++,a=e.charCodeAt(n);return t.push(r+e.substring(o)),t}function $a(e,t,u,n){if(t+2>u)return!1;let a=t+1;if(e.sCount[a]<e.blkIndent||e.sCount[a]-e.blkIndent>=4)return!1;let i=e.bMarks[a]+e.tShift[a];if(i>=e.eMarks[a])return!1;const o=e.src.charCodeAt(i++);if(o!==124&&o!==45&&o!==58||i>=e.eMarks[a])return!1;const r=e.src.charCodeAt(i++);if(r!==124&&r!==45&&r!==58&&!O(r)||o===45&&O(r))return!1;for(;i<e.eMarks[a];){const g=e.src.charCodeAt(i);if(g!==124&&g!==45&&g!==58&&!O(g))return!1;i++}let s=cu(e,t+1),c=s.split("|");const d=[];for(let g=0;g<c.length;g++){const x=c[g].trim();if(!x){if(g===0||g===c.length-1)continue;return!1}if(!/^:?-+:?$/.test(x))return!1;x.charCodeAt(x.length-1)===58?d.push(x.charCodeAt(0)===58?"center":"right"):x.charCodeAt(0)===58?d.push("left"):d.push("")}if(s=cu(e,t).trim(),s.indexOf("|")===-1||e.sCount[t]-e.blkIndent>=4)return!1;c=_n(s),c.length&&c[0]===""&&c.shift(),c.length&&c[c.length-1]===""&&c.pop();const h=c.length;if(h===0||h!==d.length)return!1;if(n)return!0;const b=e.parentType;e.parentType="table";const p=e.md.block.ruler.getRules("blockquote"),f=e.push("table_open","table",1),E=[t,0];f.map=E;const D=e.push("thead_open","thead",1);D.map=[t,t+1];const F=e.push("tr_open","tr",1);F.map=[t,t+1];for(let g=0;g<c.length;g++){const x=e.push("th_open","th",1);d[g]&&(x.attrs=[["style","text-align:"+d[g]]]);const C=e.push("inline","",0);C.content=c[g].trim(),C.children=[],e.push("th_close","th",-1)}e.push("tr_close","tr",-1),e.push("thead_close","thead",-1);let k,A=0;for(a=t+2;a<u&&!(e.sCount[a]<e.blkIndent);a++){let g=!1;for(let C=0,L=p.length;C<L;C++)if(p[C](e,a,u,!0)){g=!0;break}if(g||(s=cu(e,a).trim(),!s)||e.sCount[a]-e.blkIndent>=4||(c=_n(s),c.length&&c[0]===""&&c.shift(),c.length&&c[c.length-1]===""&&c.pop(),A+=h-c.length,A>Ha))break;if(a===t+2){const C=e.push("tbody_open","tbody",1);C.map=k=[t+2,0]}const x=e.push("tr_open","tr",1);x.map=[a,a+1];for(let C=0;C<h;C++){const L=e.push("td_open","td",1);d[C]&&(L.attrs=[["style","text-align:"+d[C]]]);const R=e.push("inline","",0);R.content=c[C]?c[C].trim():"",R.children=[],e.push("td_close","td",-1)}e.push("tr_close","tr",-1)}return k&&(e.push("tbody_close","tbody",-1),k[1]=a),e.push("table_close","table",-1),E[1]=a,e.parentType=b,e.line=a,!0}function Ga(e,t,u){if(e.sCount[t]-e.blkIndent<4)return!1;let n=t+1,a=n;for(;n<u;){if(e.isEmpty(n)){n++;continue}if(e.sCount[n]-e.blkIndent>=4){n++,a=n;continue}break}e.line=a;const i=e.push("code_block","code",0);return i.content=e.getLines(t,a,4+e.blkIndent,!1)+`
`,i.map=[t,e.line],!0}function Va(e,t,u,n){let a=e.bMarks[t]+e.tShift[t],i=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||a+3>i)return!1;const o=e.src.charCodeAt(a);if(o!==126&&o!==96)return!1;let r=a;a=e.skipChars(a,o);let s=a-r;if(s<3)return!1;const c=e.src.slice(r,a),d=e.src.slice(a,i);if(o===96&&d.indexOf(String.fromCharCode(o))>=0)return!1;if(n)return!0;let h=t,b=!1;for(;h++,!(h>=u||(a=r=e.bMarks[h]+e.tShift[h],i=e.eMarks[h],a<i&&e.sCount[h]<e.blkIndent));)if(e.src.charCodeAt(a)===o&&!(e.sCount[h]-e.blkIndent>=4)&&(a=e.skipChars(a,o),!(a-r<s)&&(a=e.skipSpaces(a),!(a<i)))){b=!0;break}s=e.sCount[t],e.line=h+(b?1:0);const p=e.push("fence","code",0);return p.info=d,p.content=e.getLines(t+1,h,s,!0),p.markup=c,p.map=[t,e.line],!0}function Qa(e,t,u,n){let a=e.bMarks[t]+e.tShift[t],i=e.eMarks[t];const o=e.lineMax;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(a)!==62)return!1;if(n)return!0;const r=[],s=[],c=[],d=[],h=e.md.block.ruler.getRules("blockquote"),b=e.parentType;e.parentType="blockquote";let p=!1,f;for(f=t;f<u;f++){const A=e.sCount[f]<e.blkIndent;if(a=e.bMarks[f]+e.tShift[f],i=e.eMarks[f],a>=i)break;if(e.src.charCodeAt(a++)===62&&!A){let x=e.sCount[f]+1,C,L;e.src.charCodeAt(a)===32?(a++,x++,L=!1,C=!0):e.src.charCodeAt(a)===9?(C=!0,(e.bsCount[f]+x)%4===3?(a++,x++,L=!1):L=!0):C=!1;let R=x;for(r.push(e.bMarks[f]),e.bMarks[f]=a;a<i;){const ne=e.src.charCodeAt(a);if(O(ne))ne===9?R+=4-(R+e.bsCount[f]+(L?1:0))%4:R++;else break;a++}p=a>=i,s.push(e.bsCount[f]),e.bsCount[f]=e.sCount[f]+1+(C?1:0),c.push(e.sCount[f]),e.sCount[f]=R-x,d.push(e.tShift[f]),e.tShift[f]=a-e.bMarks[f];continue}if(p)break;let g=!1;for(let x=0,C=h.length;x<C;x++)if(h[x](e,f,u,!0)){g=!0;break}if(g){e.lineMax=f,e.blkIndent!==0&&(r.push(e.bMarks[f]),s.push(e.bsCount[f]),d.push(e.tShift[f]),c.push(e.sCount[f]),e.sCount[f]-=e.blkIndent);break}r.push(e.bMarks[f]),s.push(e.bsCount[f]),d.push(e.tShift[f]),c.push(e.sCount[f]),e.sCount[f]=-1}const E=e.blkIndent;e.blkIndent=0;const D=e.push("blockquote_open","blockquote",1);D.markup=">";const F=[t,0];D.map=F,e.md.block.tokenize(e,t,f);const k=e.push("blockquote_close","blockquote",-1);k.markup=">",e.lineMax=o,e.parentType=b,F[1]=e.line;for(let A=0;A<d.length;A++)e.bMarks[A+t]=r[A],e.tShift[A+t]=d[A],e.sCount[A+t]=c[A],e.bsCount[A+t]=s[A];return e.blkIndent=E,!0}function Za(e,t,u,n){const a=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let i=e.bMarks[t]+e.tShift[t];const o=e.src.charCodeAt(i++);if(o!==42&&o!==45&&o!==95)return!1;let r=1;for(;i<a;){const c=e.src.charCodeAt(i++);if(c!==o&&!O(c))return!1;c===o&&r++}if(r<3)return!1;if(n)return!0;e.line=t+1;const s=e.push("hr","hr",0);return s.map=[t,e.line],s.markup=Array(r+1).join(String.fromCharCode(o)),!0}function wn(e,t){const u=e.eMarks[t];let n=e.bMarks[t]+e.tShift[t];const a=e.src.charCodeAt(n++);if(a!==42&&a!==45&&a!==43)return-1;if(n<u){const i=e.src.charCodeAt(n);if(!O(i))return-1}return n}function kn(e,t){const u=e.bMarks[t]+e.tShift[t],n=e.eMarks[t];let a=u;if(a+1>=n)return-1;let i=e.src.charCodeAt(a++);if(i<48||i>57)return-1;for(;;){if(a>=n)return-1;if(i=e.src.charCodeAt(a++),i>=48&&i<=57){if(a-u>=10)return-1;continue}if(i===41||i===46)break;return-1}return a<n&&(i=e.src.charCodeAt(a),!O(i))?-1:a}function Ya(e,t){const u=e.level+2;for(let n=t+2,a=e.tokens.length-2;n<a;n++)e.tokens[n].level===u&&e.tokens[n].type==="paragraph_open"&&(e.tokens[n+2].hidden=!0,e.tokens[n].hidden=!0,n+=2)}function Ja(e,t,u,n){let a,i,o,r,s=t,c=!0;if(e.sCount[s]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[s]-e.listIndent>=4&&e.sCount[s]<e.blkIndent)return!1;let d=!1;n&&e.parentType==="paragraph"&&e.sCount[s]>=e.blkIndent&&(d=!0);let h,b,p;if((p=kn(e,s))>=0){if(h=!0,o=e.bMarks[s]+e.tShift[s],b=Number(e.src.slice(o,p-1)),d&&b!==1)return!1}else if((p=wn(e,s))>=0)h=!1;else return!1;if(d&&e.skipSpaces(p)>=e.eMarks[s])return!1;if(n)return!0;const f=e.src.charCodeAt(p-1),E=e.tokens.length;h?(r=e.push("ordered_list_open","ol",1),b!==1&&(r.attrs=[["start",b]])):r=e.push("bullet_list_open","ul",1);const D=[s,0];r.map=D,r.markup=String.fromCharCode(f);let F=!1;const k=e.md.block.ruler.getRules("list"),A=e.parentType;for(e.parentType="list";s<u;){i=p,a=e.eMarks[s];const g=e.sCount[s]+p-(e.bMarks[s]+e.tShift[s]);let x=g;for(;i<a;){const ee=e.src.charCodeAt(i);if(ee===9)x+=4-(x+e.bsCount[s])%4;else if(ee===32)x++;else break;i++}const C=i;let L;C>=a?L=1:L=x-g,L>4&&(L=1);const R=g+L;r=e.push("list_item_open","li",1),r.markup=String.fromCharCode(f);const ne=[s,0];r.map=ne,h&&(r.info=e.src.slice(o,p-1));const S=e.tight,re=e.tShift[s],oe=e.sCount[s],de=e.listIndent;if(e.listIndent=e.blkIndent,e.blkIndent=R,e.tight=!0,e.tShift[s]=C-e.bMarks[s],e.sCount[s]=x,C>=a&&e.isEmpty(s+1)?e.line=Math.min(e.line+2,u):e.md.block.tokenize(e,s,u,!0),(!e.tight||F)&&(c=!1),F=e.line-s>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=de,e.tShift[s]=re,e.sCount[s]=oe,e.tight=S,r=e.push("list_item_close","li",-1),r.markup=String.fromCharCode(f),s=e.line,ne[1]=s,s>=u||e.sCount[s]<e.blkIndent||e.sCount[s]-e.blkIndent>=4)break;let ie=!1;for(let ee=0,se=k.length;ee<se;ee++)if(k[ee](e,s,u,!0)){ie=!0;break}if(ie)break;if(h){if(p=kn(e,s),p<0)break;o=e.bMarks[s]+e.tShift[s]}else if(p=wn(e,s),p<0)break;if(f!==e.src.charCodeAt(p-1))break}return h?r=e.push("ordered_list_close","ol",-1):r=e.push("bullet_list_close","ul",-1),r.markup=String.fromCharCode(f),D[1]=s,e.line=s,e.parentType=A,c&&Ya(e,E),!0}function Xa(e,t,u,n){let a=e.bMarks[t]+e.tShift[t],i=e.eMarks[t],o=t+1;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(a)!==91)return!1;function r(k){const A=e.lineMax;if(k>=A||e.isEmpty(k))return null;let g=!1;if(e.sCount[k]-e.blkIndent>3&&(g=!0),e.sCount[k]<0&&(g=!0),!g){const L=e.md.block.ruler.getRules("reference"),R=e.parentType;e.parentType="reference";let ne=!1;for(let S=0,re=L.length;S<re;S++)if(L[S](e,k,A,!0)){ne=!0;break}if(e.parentType=R,ne)return null}const x=e.bMarks[k]+e.tShift[k],C=e.eMarks[k];return e.src.slice(x,C+1)}let s=e.src.slice(a,i+1);i=s.length;let c=-1;for(a=1;a<i;a++){const k=s.charCodeAt(a);if(k===91)return!1;if(k===93){c=a;break}else if(k===10){const A=r(o);A!==null&&(s+=A,i=s.length,o++)}else if(k===92&&(a++,a<i&&s.charCodeAt(a)===10)){const A=r(o);A!==null&&(s+=A,i=s.length,o++)}}if(c<0||s.charCodeAt(c+1)!==58)return!1;for(a=c+2;a<i;a++){const k=s.charCodeAt(a);if(k===10){const A=r(o);A!==null&&(s+=A,i=s.length,o++)}else if(!O(k))break}const d=e.md.helpers.parseLinkDestination(s,a,i);if(!d.ok)return!1;const h=e.md.normalizeLink(d.str);if(!e.md.validateLink(h))return!1;a=d.pos;const b=a,p=o,f=a;for(;a<i;a++){const k=s.charCodeAt(a);if(k===10){const A=r(o);A!==null&&(s+=A,i=s.length,o++)}else if(!O(k))break}let E=e.md.helpers.parseLinkTitle(s,a,i);for(;E.can_continue;){const k=r(o);if(k===null)break;s+=k,a=i,i=s.length,o++,E=e.md.helpers.parseLinkTitle(s,a,i,E)}let D;for(a<i&&f!==a&&E.ok?(D=E.str,a=E.pos):(D="",a=b,o=p);a<i;){const k=s.charCodeAt(a);if(!O(k))break;a++}if(a<i&&s.charCodeAt(a)!==10&&D)for(D="",a=b,o=p;a<i;){const k=s.charCodeAt(a);if(!O(k))break;a++}if(a<i&&s.charCodeAt(a)!==10)return!1;const F=Ut(s.slice(1,c));return F?(n||(typeof e.env.references>"u"&&(e.env.references={}),typeof e.env.references[F]>"u"&&(e.env.references[F]={title:D,href:h}),e.line=o),!0):!1}const Ka=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],er="[a-zA-Z_:][a-zA-Z0-9:._-]*",tr="[^\"'=<>`\\x00-\\x20]+",ur="'[^']*'",nr='"[^"]*"',ir="(?:"+tr+"|"+ur+"|"+nr+")",ar="(?:\\s+"+er+"(?:\\s*=\\s*"+ir+")?)",Bn="<[A-Za-z][A-Za-z0-9\\-]*"+ar+"*\\s*\\/?>",Wn="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",rr="<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->",or="<[?][\\s\\S]*?[?]>",sr="<![A-Za-z][^>]*>",cr="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",lr=new RegExp("^(?:"+Bn+"|"+Wn+"|"+rr+"|"+or+"|"+sr+"|"+cr+")"),dr=new RegExp("^(?:"+Bn+"|"+Wn+")"),Xe=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+Ka.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(dr.source+"\\s*$"),/^$/,!1]];function fr(e,t,u,n){let a=e.bMarks[t]+e.tShift[t],i=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(a)!==60)return!1;let o=e.src.slice(a,i),r=0;for(;r<Xe.length&&!Xe[r][0].test(o);r++);if(r===Xe.length)return!1;if(n)return Xe[r][2];let s=t+1;if(!Xe[r][1].test(o)){for(;s<u&&!(e.sCount[s]<e.blkIndent);s++)if(a=e.bMarks[s]+e.tShift[s],i=e.eMarks[s],o=e.src.slice(a,i),Xe[r][1].test(o)){o.length!==0&&s++;break}}e.line=s;const c=e.push("html_block","",0);return c.map=[t,s],c.content=e.getLines(t,s,e.blkIndent,!0),!0}function hr(e,t,u,n){let a=e.bMarks[t]+e.tShift[t],i=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let o=e.src.charCodeAt(a);if(o!==35||a>=i)return!1;let r=1;for(o=e.src.charCodeAt(++a);o===35&&a<i&&r<=6;)r++,o=e.src.charCodeAt(++a);if(r>6||a<i&&!O(o))return!1;if(n)return!0;i=e.skipSpacesBack(i,a);const s=e.skipCharsBack(i,35,a);s>a&&O(e.src.charCodeAt(s-1))&&(i=s),e.line=t+1;const c=e.push("heading_open","h"+String(r),1);c.markup="########".slice(0,r),c.map=[t,e.line];const d=e.push("inline","",0);d.content=e.src.slice(a,i).trim(),d.map=[t,e.line],d.children=[];const h=e.push("heading_close","h"+String(r),-1);return h.markup="########".slice(0,r),!0}function pr(e,t,u){const n=e.md.block.ruler.getRules("paragraph");if(e.sCount[t]-e.blkIndent>=4)return!1;const a=e.parentType;e.parentType="paragraph";let i=0,o,r=t+1;for(;r<u&&!e.isEmpty(r);r++){if(e.sCount[r]-e.blkIndent>3)continue;if(e.sCount[r]>=e.blkIndent){let p=e.bMarks[r]+e.tShift[r];const f=e.eMarks[r];if(p<f&&(o=e.src.charCodeAt(p),(o===45||o===61)&&(p=e.skipChars(p,o),p=e.skipSpaces(p),p>=f))){i=o===61?1:2;break}}if(e.sCount[r]<0)continue;let b=!1;for(let p=0,f=n.length;p<f;p++)if(n[p](e,r,u,!0)){b=!0;break}if(b)break}if(!i)return!1;const s=e.getLines(t,r,e.blkIndent,!1).trim();e.line=r+1;const c=e.push("heading_open","h"+String(i),1);c.markup=String.fromCharCode(o),c.map=[t,e.line];const d=e.push("inline","",0);d.content=s,d.map=[t,e.line-1],d.children=[];const h=e.push("heading_close","h"+String(i),-1);return h.markup=String.fromCharCode(o),e.parentType=a,!0}function mr(e,t,u){const n=e.md.block.ruler.getRules("paragraph"),a=e.parentType;let i=t+1;for(e.parentType="paragraph";i<u&&!e.isEmpty(i);i++){if(e.sCount[i]-e.blkIndent>3||e.sCount[i]<0)continue;let c=!1;for(let d=0,h=n.length;d<h;d++)if(n[d](e,i,u,!0)){c=!0;break}if(c)break}const o=e.getLines(t,i,e.blkIndent,!1).trim();e.line=i;const r=e.push("paragraph_open","p",1);r.map=[t,e.line];const s=e.push("inline","",0);return s.content=o,s.map=[t,e.line],s.children=[],e.push("paragraph_close","p",-1),e.parentType=a,!0}const zt=[["table",$a,["paragraph","reference"]],["code",Ga],["fence",Va,["paragraph","reference","blockquote","list"]],["blockquote",Qa,["paragraph","reference","blockquote","list"]],["hr",Za,["paragraph","reference","blockquote","list"]],["list",Ja,["paragraph","reference","blockquote"]],["reference",Xa],["html_block",fr,["paragraph","reference","blockquote"]],["heading",hr,["paragraph","reference","blockquote"]],["lheading",pr],["paragraph",mr]];function Ht(){this.ruler=new ue;for(let e=0;e<zt.length;e++)this.ruler.push(zt[e][0],zt[e][1],{alt:(zt[e][2]||[]).slice()})}Ht.prototype.tokenize=function(e,t,u){const n=this.ruler.getRules(""),a=n.length,i=e.md.options.maxNesting;let o=t,r=!1;for(;o<u&&(e.line=o=e.skipEmptyLines(o),!(o>=u||e.sCount[o]<e.blkIndent));){if(e.level>=i){e.line=u;break}const s=e.line;let c=!1;for(let d=0;d<a;d++)if(c=n[d](e,o,u,!1),c){if(s>=e.line)throw new Error("block rule didn't increment state.line");break}if(!c)throw new Error("none of the block rules matched");e.tight=!r,e.isEmpty(e.line-1)&&(r=!0),o=e.line,o<u&&e.isEmpty(o)&&(r=!0,o++,e.line=o)}};Ht.prototype.parse=function(e,t,u,n){if(!e)return;const a=new this.State(e,t,u,n);this.tokenize(a,a.line,a.lineMax)};Ht.prototype.State=ke;function At(e,t,u,n){this.src=e,this.env=u,this.md=t,this.tokens=n,this.tokens_meta=Array(n.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}At.prototype.pushPending=function(){const e=new fe("text","",0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending="",e};At.prototype.push=function(e,t,u){this.pending&&this.pushPending();const n=new fe(e,t,u);let a=null;return u<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),n.level=this.level,u>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],a={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(n),this.tokens_meta.push(a),n};At.prototype.scanDelims=function(e,t){const u=this.posMax,n=this.src.charCodeAt(e),a=e>0?this.src.charCodeAt(e-1):32;let i=e;for(;i<u&&this.src.charCodeAt(i)===n;)i++;const o=i-e,r=i<u?this.src.charCodeAt(i):32,s=gt(a)||bt(String.fromCharCode(a)),c=gt(r)||bt(String.fromCharCode(r)),d=mt(a),h=mt(r),b=!h&&(!c||d||s),p=!d&&(!s||h||c);return{can_open:b&&(t||!p||s),can_close:p&&(t||!b||c),length:o}};At.prototype.Token=fe;function br(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function gr(e,t){let u=e.pos;for(;u<e.posMax&&!br(e.src.charCodeAt(u));)u++;return u===e.pos?!1:(t||(e.pending+=e.src.slice(e.pos,u)),e.pos=u,!0)}const yr=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function xr(e,t){if(!e.md.options.linkify||e.linkLevel>0)return!1;const u=e.pos,n=e.posMax;if(u+3>n||e.src.charCodeAt(u)!==58||e.src.charCodeAt(u+1)!==47||e.src.charCodeAt(u+2)!==47)return!1;const a=e.pending.match(yr);if(!a)return!1;const i=a[1],o=e.md.linkify.matchAtStart(e.src.slice(u-i.length));if(!o)return!1;let r=o.url;if(r.length<=i.length)return!1;r=r.replace(/\*+$/,"");const s=e.md.normalizeLink(r);if(!e.md.validateLink(s))return!1;if(!t){e.pending=e.pending.slice(0,-i.length);const c=e.push("link_open","a",1);c.attrs=[["href",s]],c.markup="linkify",c.info="auto";const d=e.push("text","",0);d.content=e.md.normalizeLinkText(r);const h=e.push("link_close","a",-1);h.markup="linkify",h.info="auto"}return e.pos+=r.length-i.length,!0}function _r(e,t){let u=e.pos;if(e.src.charCodeAt(u)!==10)return!1;const n=e.pending.length-1,a=e.posMax;if(!t)if(n>=0&&e.pending.charCodeAt(n)===32)if(n>=1&&e.pending.charCodeAt(n-1)===32){let i=n-1;for(;i>=1&&e.pending.charCodeAt(i-1)===32;)i--;e.pending=e.pending.slice(0,i),e.push("hardbreak","br",0)}else e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0);else e.push("softbreak","br",0);for(u++;u<a&&O(e.src.charCodeAt(u));)u++;return e.pos=u,!0}const Fu=[];for(let e=0;e<256;e++)Fu.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e){Fu[e.charCodeAt(0)]=1});function wr(e,t){let u=e.pos;const n=e.posMax;if(e.src.charCodeAt(u)!==92||(u++,u>=n))return!1;let a=e.src.charCodeAt(u);if(a===10){for(t||e.push("hardbreak","br",0),u++;u<n&&(a=e.src.charCodeAt(u),!!O(a));)u++;return e.pos=u,!0}let i=e.src[u];if(a>=55296&&a<=56319&&u+1<n){const r=e.src.charCodeAt(u+1);r>=56320&&r<=57343&&(i+=e.src[u+1],u++)}const o="\\"+i;if(!t){const r=e.push("text_special","",0);a<256&&Fu[a]!==0?r.content=i:r.content=o,r.markup=o,r.info="escape"}return e.pos=u+1,!0}function kr(e,t){let u=e.pos;if(e.src.charCodeAt(u)!==96)return!1;const a=u;u++;const i=e.posMax;for(;u<i&&e.src.charCodeAt(u)===96;)u++;const o=e.src.slice(a,u),r=o.length;if(e.backticksScanned&&(e.backticks[r]||0)<=a)return t||(e.pending+=o),e.pos+=r,!0;let s=u,c;for(;(c=e.src.indexOf("`",s))!==-1;){for(s=c+1;s<i&&e.src.charCodeAt(s)===96;)s++;const d=s-c;if(d===r){if(!t){const h=e.push("code_inline","code",0);h.markup=o,h.content=e.src.slice(u,c).replace(/\n/g," ").replace(/^ (.+) $/,"$1")}return e.pos=s,!0}e.backticks[d]=c}return e.backticksScanned=!0,t||(e.pending+=o),e.pos+=r,!0}function vr(e,t){const u=e.pos,n=e.src.charCodeAt(u);if(t||n!==126)return!1;const a=e.scanDelims(e.pos,!0);let i=a.length;const o=String.fromCharCode(n);if(i<2)return!1;let r;i%2&&(r=e.push("text","",0),r.content=o,i--);for(let s=0;s<i;s+=2)r=e.push("text","",0),r.content=o+o,e.delimiters.push({marker:n,length:0,token:e.tokens.length-1,end:-1,open:a.can_open,close:a.can_close});return e.pos+=a.length,!0}function vn(e,t){let u;const n=[],a=t.length;for(let i=0;i<a;i++){const o=t[i];if(o.marker!==126||o.end===-1)continue;const r=t[o.end];u=e.tokens[o.token],u.type="s_open",u.tag="s",u.nesting=1,u.markup="~~",u.content="",u=e.tokens[r.token],u.type="s_close",u.tag="s",u.nesting=-1,u.markup="~~",u.content="",e.tokens[r.token-1].type==="text"&&e.tokens[r.token-1].content==="~"&&n.push(r.token-1)}for(;n.length;){const i=n.pop();let o=i+1;for(;o<e.tokens.length&&e.tokens[o].type==="s_close";)o++;o--,i!==o&&(u=e.tokens[o],e.tokens[o]=e.tokens[i],e.tokens[i]=u)}}function Ar(e){const t=e.tokens_meta,u=e.tokens_meta.length;vn(e,e.delimiters);for(let n=0;n<u;n++)t[n]&&t[n].delimiters&&vn(e,t[n].delimiters)}const Un={tokenize:vr,postProcess:Ar};function Cr(e,t){const u=e.pos,n=e.src.charCodeAt(u);if(t||n!==95&&n!==42)return!1;const a=e.scanDelims(e.pos,n===42);for(let i=0;i<a.length;i++){const o=e.push("text","",0);o.content=String.fromCharCode(n),e.delimiters.push({marker:n,length:a.length,token:e.tokens.length-1,end:-1,open:a.can_open,close:a.can_close})}return e.pos+=a.length,!0}function An(e,t){const u=t.length;for(let n=u-1;n>=0;n--){const a=t[n];if(a.marker!==95&&a.marker!==42||a.end===-1)continue;const i=t[a.end],o=n>0&&t[n-1].end===a.end+1&&t[n-1].marker===a.marker&&t[n-1].token===a.token-1&&t[a.end+1].token===i.token+1,r=String.fromCharCode(a.marker),s=e.tokens[a.token];s.type=o?"strong_open":"em_open",s.tag=o?"strong":"em",s.nesting=1,s.markup=o?r+r:r,s.content="";const c=e.tokens[i.token];c.type=o?"strong_close":"em_close",c.tag=o?"strong":"em",c.nesting=-1,c.markup=o?r+r:r,c.content="",o&&(e.tokens[t[n-1].token].content="",e.tokens[t[a.end+1].token].content="",n--)}}function Er(e){const t=e.tokens_meta,u=e.tokens_meta.length;An(e,e.delimiters);for(let n=0;n<u;n++)t[n]&&t[n].delimiters&&An(e,t[n].delimiters)}const Hn={tokenize:Cr,postProcess:Er};function Dr(e,t){let u,n,a,i,o="",r="",s=e.pos,c=!0;if(e.src.charCodeAt(e.pos)!==91)return!1;const d=e.pos,h=e.posMax,b=e.pos+1,p=e.md.helpers.parseLinkLabel(e,e.pos,!0);if(p<0)return!1;let f=p+1;if(f<h&&e.src.charCodeAt(f)===40){for(c=!1,f++;f<h&&(u=e.src.charCodeAt(f),!(!O(u)&&u!==10));f++);if(f>=h)return!1;if(s=f,a=e.md.helpers.parseLinkDestination(e.src,f,e.posMax),a.ok){for(o=e.md.normalizeLink(a.str),e.md.validateLink(o)?f=a.pos:o="",s=f;f<h&&(u=e.src.charCodeAt(f),!(!O(u)&&u!==10));f++);if(a=e.md.helpers.parseLinkTitle(e.src,f,e.posMax),f<h&&s!==f&&a.ok)for(r=a.str,f=a.pos;f<h&&(u=e.src.charCodeAt(f),!(!O(u)&&u!==10));f++);}(f>=h||e.src.charCodeAt(f)!==41)&&(c=!0),f++}if(c){if(typeof e.env.references>"u")return!1;if(f<h&&e.src.charCodeAt(f)===91?(s=f+1,f=e.md.helpers.parseLinkLabel(e,f),f>=0?n=e.src.slice(s,f++):f=p+1):f=p+1,n||(n=e.src.slice(b,p)),i=e.env.references[Ut(n)],!i)return e.pos=d,!1;o=i.href,r=i.title}if(!t){e.pos=b,e.posMax=p;const E=e.push("link_open","a",1),D=[["href",o]];E.attrs=D,r&&D.push(["title",r]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,e.push("link_close","a",-1)}return e.pos=f,e.posMax=h,!0}function Sr(e,t){let u,n,a,i,o,r,s,c,d="";const h=e.pos,b=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91)return!1;const p=e.pos+2,f=e.md.helpers.parseLinkLabel(e,e.pos+1,!1);if(f<0)return!1;if(i=f+1,i<b&&e.src.charCodeAt(i)===40){for(i++;i<b&&(u=e.src.charCodeAt(i),!(!O(u)&&u!==10));i++);if(i>=b)return!1;for(c=i,r=e.md.helpers.parseLinkDestination(e.src,i,e.posMax),r.ok&&(d=e.md.normalizeLink(r.str),e.md.validateLink(d)?i=r.pos:d=""),c=i;i<b&&(u=e.src.charCodeAt(i),!(!O(u)&&u!==10));i++);if(r=e.md.helpers.parseLinkTitle(e.src,i,e.posMax),i<b&&c!==i&&r.ok)for(s=r.str,i=r.pos;i<b&&(u=e.src.charCodeAt(i),!(!O(u)&&u!==10));i++);else s="";if(i>=b||e.src.charCodeAt(i)!==41)return e.pos=h,!1;i++}else{if(typeof e.env.references>"u")return!1;if(i<b&&e.src.charCodeAt(i)===91?(c=i+1,i=e.md.helpers.parseLinkLabel(e,i),i>=0?a=e.src.slice(c,i++):i=f+1):i=f+1,a||(a=e.src.slice(p,f)),o=e.env.references[Ut(a)],!o)return e.pos=h,!1;d=o.href,s=o.title}if(!t){n=e.src.slice(p,f);const E=[];e.md.inline.parse(n,e.md,e.env,E);const D=e.push("image","img",0),F=[["src",d],["alt",""]];D.attrs=F,D.children=E,D.content=n,s&&F.push(["title",s])}return e.pos=i,e.posMax=b,!0}const Tr=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,Fr=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function Ir(e,t){let u=e.pos;if(e.src.charCodeAt(u)!==60)return!1;const n=e.pos,a=e.posMax;for(;;){if(++u>=a)return!1;const o=e.src.charCodeAt(u);if(o===60)return!1;if(o===62)break}const i=e.src.slice(n+1,u);if(Fr.test(i)){const o=e.md.normalizeLink(i);if(!e.md.validateLink(o))return!1;if(!t){const r=e.push("link_open","a",1);r.attrs=[["href",o]],r.markup="autolink",r.info="auto";const s=e.push("text","",0);s.content=e.md.normalizeLinkText(i);const c=e.push("link_close","a",-1);c.markup="autolink",c.info="auto"}return e.pos+=i.length+2,!0}if(Tr.test(i)){const o=e.md.normalizeLink("mailto:"+i);if(!e.md.validateLink(o))return!1;if(!t){const r=e.push("link_open","a",1);r.attrs=[["href",o]],r.markup="autolink",r.info="auto";const s=e.push("text","",0);s.content=e.md.normalizeLinkText(i);const c=e.push("link_close","a",-1);c.markup="autolink",c.info="auto"}return e.pos+=i.length+2,!0}return!1}function Pr(e){return/^<a[>\s]/i.test(e)}function Rr(e){return/^<\/a\s*>/i.test(e)}function Lr(e){const t=e|32;return t>=97&&t<=122}function Mr(e,t){if(!e.md.options.html)return!1;const u=e.posMax,n=e.pos;if(e.src.charCodeAt(n)!==60||n+2>=u)return!1;const a=e.src.charCodeAt(n+1);if(a!==33&&a!==63&&a!==47&&!Lr(a))return!1;const i=e.src.slice(n).match(lr);if(!i)return!1;if(!t){const o=e.push("html_inline","",0);o.content=i[0],Pr(o.content)&&e.linkLevel++,Rr(o.content)&&e.linkLevel--}return e.pos+=i[0].length,!0}const Or=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,Nr=/^&([a-z][a-z0-9]{1,31});/i;function zr(e,t){const u=e.pos,n=e.posMax;if(e.src.charCodeAt(u)!==38||u+1>=n)return!1;if(e.src.charCodeAt(u+1)===35){const i=e.src.slice(u).match(Or);if(i){if(!t){const o=i[1][0].toLowerCase()==="x"?parseInt(i[1].slice(1),16):parseInt(i[1],10),r=e.push("text_special","",0);r.content=Su(o)?qt(o):qt(65533),r.markup=i[0],r.info="entity"}return e.pos+=i[0].length,!0}}else{const i=e.src.slice(u).match(Nr);if(i){const o=On(i[0]);if(o!==i[0]){if(!t){const r=e.push("text_special","",0);r.content=o,r.markup=i[0],r.info="entity"}return e.pos+=i[0].length,!0}}}return!1}function Cn(e){const t={},u=e.length;if(!u)return;let n=0,a=-2;const i=[];for(let o=0;o<u;o++){const r=e[o];if(i.push(0),(e[n].marker!==r.marker||a!==r.token-1)&&(n=o),a=r.token,r.length=r.length||0,!r.close)continue;t.hasOwnProperty(r.marker)||(t[r.marker]=[-1,-1,-1,-1,-1,-1]);const s=t[r.marker][(r.open?3:0)+r.length%3];let c=n-i[n]-1,d=c;for(;c>s;c-=i[c]+1){const h=e[c];if(h.marker===r.marker&&h.open&&h.end<0){let b=!1;if((h.close||r.open)&&(h.length+r.length)%3===0&&(h.length%3!==0||r.length%3!==0)&&(b=!0),!b){const p=c>0&&!e[c-1].open?i[c-1]+1:0;i[o]=o-c+p,i[c]=p,r.open=!1,h.end=o,h.close=!1,d=-1,a=-2;break}}}d!==-1&&(t[r.marker][(r.open?3:0)+(r.length||0)%3]=d)}}function jr(e){const t=e.tokens_meta,u=e.tokens_meta.length;Cn(e.delimiters);for(let n=0;n<u;n++)t[n]&&t[n].delimiters&&Cn(t[n].delimiters)}function qr(e){let t,u,n=0;const a=e.tokens,i=e.tokens.length;for(t=u=0;t<i;t++)a[t].nesting<0&&n--,a[t].level=n,a[t].nesting>0&&n++,a[t].type==="text"&&t+1<i&&a[t+1].type==="text"?a[t+1].content=a[t].content+a[t+1].content:(t!==u&&(a[u]=a[t]),u++);t!==u&&(a.length=u)}const lu=[["text",gr],["linkify",xr],["newline",_r],["escape",wr],["backticks",kr],["strikethrough",Un.tokenize],["emphasis",Hn.tokenize],["link",Dr],["image",Sr],["autolink",Ir],["html_inline",Mr],["entity",zr]],du=[["balance_pairs",jr],["strikethrough",Un.postProcess],["emphasis",Hn.postProcess],["fragments_join",qr]];function Ct(){this.ruler=new ue;for(let e=0;e<lu.length;e++)this.ruler.push(lu[e][0],lu[e][1]);this.ruler2=new ue;for(let e=0;e<du.length;e++)this.ruler2.push(du[e][0],du[e][1])}Ct.prototype.skipToken=function(e){const t=e.pos,u=this.ruler.getRules(""),n=u.length,a=e.md.options.maxNesting,i=e.cache;if(typeof i[t]<"u"){e.pos=i[t];return}let o=!1;if(e.level<a){for(let r=0;r<n;r++)if(e.level++,o=u[r](e,!0),e.level--,o){if(t>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}else e.pos=e.posMax;o||e.pos++,i[t]=e.pos};Ct.prototype.tokenize=function(e){const t=this.ruler.getRules(""),u=t.length,n=e.posMax,a=e.md.options.maxNesting;for(;e.pos<n;){const i=e.pos;let o=!1;if(e.level<a){for(let r=0;r<u;r++)if(o=t[r](e,!1),o){if(i>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}if(o){if(e.pos>=n)break;continue}e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()};Ct.prototype.parse=function(e,t,u,n){const a=new this.State(e,t,u,n);this.tokenize(a);const i=this.ruler2.getRules(""),o=i.length;for(let r=0;r<o;r++)i[r](a)};Ct.prototype.State=At;function Br(e){const t={};e=e||{},t.src_Any=In.source,t.src_Cc=Pn.source,t.src_Z=Ln.source,t.src_P=Eu.source,t.src_ZPCc=[t.src_Z,t.src_P,t.src_Cc].join("|"),t.src_ZCc=[t.src_Z,t.src_Cc].join("|");const u="[><｜]";return t.src_pseudo_letter="(?:(?!"+u+"|"+t.src_ZPCc+")"+t.src_Any+")",t.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",t.src_auth="(?:(?:(?!"+t.src_ZCc+"|[@/\\[\\]()]).)+@)?",t.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",t.src_host_terminator="(?=$|"+u+"|"+t.src_ZPCc+")(?!"+(e["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+t.src_ZPCc+"))",t.src_path="(?:[/?#](?:(?!"+t.src_ZCc+"|"+u+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+t.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+t.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+t.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+t.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+t.src_ZCc+"|[']).)+\\'|\\'(?="+t.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+t.src_ZCc+"|[.]|$)|"+(e["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+t.src_ZCc+"|$)|;(?!"+t.src_ZCc+"|$)|\\!+(?!"+t.src_ZCc+"|[!]|$)|\\?(?!"+t.src_ZCc+"|[?]|$))+|\\/)?",t.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',t.src_xn="xn--[a-z0-9\\-]{1,59}",t.src_domain_root="(?:"+t.src_xn+"|"+t.src_pseudo_letter+"{1,63})",t.src_domain="(?:"+t.src_xn+"|(?:"+t.src_pseudo_letter+")|(?:"+t.src_pseudo_letter+"(?:-|"+t.src_pseudo_letter+"){0,61}"+t.src_pseudo_letter+"))",t.src_host="(?:(?:(?:(?:"+t.src_domain+")\\.)*"+t.src_domain+"))",t.tpl_host_fuzzy="(?:"+t.src_ip4+"|(?:(?:(?:"+t.src_domain+")\\.)+(?:%TLDS%)))",t.tpl_host_no_ip_fuzzy="(?:(?:(?:"+t.src_domain+")\\.)+(?:%TLDS%))",t.src_host_strict=t.src_host+t.src_host_terminator,t.tpl_host_fuzzy_strict=t.tpl_host_fuzzy+t.src_host_terminator,t.src_host_port_strict=t.src_host+t.src_port+t.src_host_terminator,t.tpl_host_port_fuzzy_strict=t.tpl_host_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_port_no_ip_fuzzy_strict=t.tpl_host_no_ip_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+t.src_ZPCc+"|>|$))",t.tpl_email_fuzzy="(^|"+u+'|"|\\(|'+t.src_ZCc+")("+t.src_email_name+"@"+t.tpl_host_fuzzy_strict+")",t.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_fuzzy_strict+t.src_path+")",t.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_no_ip_fuzzy_strict+t.src_path+")",t}function ku(e){return Array.prototype.slice.call(arguments,1).forEach(function(u){u&&Object.keys(u).forEach(function(n){e[n]=u[n]})}),e}function $t(e){return Object.prototype.toString.call(e)}function Wr(e){return $t(e)==="[object String]"}function Ur(e){return $t(e)==="[object Object]"}function Hr(e){return $t(e)==="[object RegExp]"}function En(e){return $t(e)==="[object Function]"}function $r(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}const $n={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function Gr(e){return Object.keys(e||{}).reduce(function(t,u){return t||$n.hasOwnProperty(u)},!1)}const Vr={"http:":{validate:function(e,t,u){const n=e.slice(t);return u.re.http||(u.re.http=new RegExp("^\\/\\/"+u.re.src_auth+u.re.src_host_port_strict+u.re.src_path,"i")),u.re.http.test(n)?n.match(u.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(e,t,u){const n=e.slice(t);return u.re.no_http||(u.re.no_http=new RegExp("^"+u.re.src_auth+"(?:localhost|(?:(?:"+u.re.src_domain+")\\.)+"+u.re.src_domain_root+")"+u.re.src_port+u.re.src_host_terminator+u.re.src_path,"i")),u.re.no_http.test(n)?t>=3&&e[t-3]===":"||t>=3&&e[t-3]==="/"?0:n.match(u.re.no_http)[0].length:0}},"mailto:":{validate:function(e,t,u){const n=e.slice(t);return u.re.mailto||(u.re.mailto=new RegExp("^"+u.re.src_email_name+"@"+u.re.src_host_strict,"i")),u.re.mailto.test(n)?n.match(u.re.mailto)[0].length:0}}},Qr="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",Zr="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function Yr(e){e.__index__=-1,e.__text_cache__=""}function Jr(e){return function(t,u){const n=t.slice(u);return e.test(n)?n.match(e)[0].length:0}}function Dn(){return function(e,t){t.normalize(e)}}function Bt(e){const t=e.re=Br(e.__opts__),u=e.__tlds__.slice();e.onCompile(),e.__tlds_replaced__||u.push(Qr),u.push(t.src_xn),t.src_tlds=u.join("|");function n(r){return r.replace("%TLDS%",t.src_tlds)}t.email_fuzzy=RegExp(n(t.tpl_email_fuzzy),"i"),t.link_fuzzy=RegExp(n(t.tpl_link_fuzzy),"i"),t.link_no_ip_fuzzy=RegExp(n(t.tpl_link_no_ip_fuzzy),"i"),t.host_fuzzy_test=RegExp(n(t.tpl_host_fuzzy_test),"i");const a=[];e.__compiled__={};function i(r,s){throw new Error('(LinkifyIt) Invalid schema "'+r+'": '+s)}Object.keys(e.__schemas__).forEach(function(r){const s=e.__schemas__[r];if(s===null)return;const c={validate:null,link:null};if(e.__compiled__[r]=c,Ur(s)){Hr(s.validate)?c.validate=Jr(s.validate):En(s.validate)?c.validate=s.validate:i(r,s),En(s.normalize)?c.normalize=s.normalize:s.normalize?i(r,s):c.normalize=Dn();return}if(Wr(s)){a.push(r);return}i(r,s)}),a.forEach(function(r){e.__compiled__[e.__schemas__[r]]&&(e.__compiled__[r].validate=e.__compiled__[e.__schemas__[r]].validate,e.__compiled__[r].normalize=e.__compiled__[e.__schemas__[r]].normalize)}),e.__compiled__[""]={validate:null,normalize:Dn()};const o=Object.keys(e.__compiled__).filter(function(r){return r.length>0&&e.__compiled__[r]}).map($r).join("|");e.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+t.src_ZPCc+"))("+o+")","i"),e.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+t.src_ZPCc+"))("+o+")","ig"),e.re.schema_at_start=RegExp("^"+e.re.schema_search.source,"i"),e.re.pretest=RegExp("("+e.re.schema_test.source+")|("+e.re.host_fuzzy_test.source+")|@","i"),Yr(e)}function Xr(e,t){const u=e.__index__,n=e.__last_index__,a=e.__text_cache__.slice(u,n);this.schema=e.__schema__.toLowerCase(),this.index=u+t,this.lastIndex=n+t,this.raw=a,this.text=a,this.url=a}function vu(e,t){const u=new Xr(e,t);return e.__compiled__[u.schema].normalize(u,e),u}function ae(e,t){if(!(this instanceof ae))return new ae(e,t);t||Gr(e)&&(t=e,e={}),this.__opts__=ku({},$n,t),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=ku({},Vr,e),this.__compiled__={},this.__tlds__=Zr,this.__tlds_replaced__=!1,this.re={},Bt(this)}ae.prototype.add=function(t,u){return this.__schemas__[t]=u,Bt(this),this};ae.prototype.set=function(t){return this.__opts__=ku(this.__opts__,t),this};ae.prototype.test=function(t){if(this.__text_cache__=t,this.__index__=-1,!t.length)return!1;let u,n,a,i,o,r,s,c,d;if(this.re.schema_test.test(t)){for(s=this.re.schema_search,s.lastIndex=0;(u=s.exec(t))!==null;)if(i=this.testSchemaAt(t,u[2],s.lastIndex),i){this.__schema__=u[2],this.__index__=u.index+u[1].length,this.__last_index__=u.index+u[0].length+i;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(c=t.search(this.re.host_fuzzy_test),c>=0&&(this.__index__<0||c<this.__index__)&&(n=t.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(o=n.index+n[1].length,(this.__index__<0||o<this.__index__)&&(this.__schema__="",this.__index__=o,this.__last_index__=n.index+n[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(d=t.indexOf("@"),d>=0&&(a=t.match(this.re.email_fuzzy))!==null&&(o=a.index+a[1].length,r=a.index+a[0].length,(this.__index__<0||o<this.__index__||o===this.__index__&&r>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=o,this.__last_index__=r))),this.__index__>=0};ae.prototype.pretest=function(t){return this.re.pretest.test(t)};ae.prototype.testSchemaAt=function(t,u,n){return this.__compiled__[u.toLowerCase()]?this.__compiled__[u.toLowerCase()].validate(t,n,this):0};ae.prototype.match=function(t){const u=[];let n=0;this.__index__>=0&&this.__text_cache__===t&&(u.push(vu(this,n)),n=this.__last_index__);let a=n?t.slice(n):t;for(;this.test(a);)u.push(vu(this,n)),a=a.slice(this.__last_index__),n+=this.__last_index__;return u.length?u:null};ae.prototype.matchAtStart=function(t){if(this.__text_cache__=t,this.__index__=-1,!t.length)return null;const u=this.re.schema_at_start.exec(t);if(!u)return null;const n=this.testSchemaAt(t,u[2],u[0].length);return n?(this.__schema__=u[2],this.__index__=u.index+u[1].length,this.__last_index__=u.index+u[0].length+n,vu(this,0)):null};ae.prototype.tlds=function(t,u){return t=Array.isArray(t)?t:[t],u?(this.__tlds__=this.__tlds__.concat(t).sort().filter(function(n,a,i){return n!==i[a-1]}).reverse(),Bt(this),this):(this.__tlds__=t.slice(),this.__tlds_replaced__=!0,Bt(this),this)};ae.prototype.normalize=function(t){t.schema||(t.url="http://"+t.url),t.schema==="mailto:"&&!/^mailto:/i.test(t.url)&&(t.url="mailto:"+t.url)};ae.prototype.onCompile=function(){};const et=2147483647,ye=36,Iu=1,yt=26,Kr=38,eo=700,Gn=72,Vn=128,Qn="-",to=/^xn--/,uo=/[^\0-\x7F]/,no=/[\x2E\u3002\uFF0E\uFF61]/g,io={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},fu=ye-Iu,xe=Math.floor,hu=String.fromCharCode;function Le(e){throw new RangeError(io[e])}function ao(e,t){const u=[];let n=e.length;for(;n--;)u[n]=t(e[n]);return u}function Zn(e,t){const u=e.split("@");let n="";u.length>1&&(n=u[0]+"@",e=u[1]),e=e.replace(no,".");const a=e.split("."),i=ao(a,t).join(".");return n+i}function Yn(e){const t=[];let u=0;const n=e.length;for(;u<n;){const a=e.charCodeAt(u++);if(a>=55296&&a<=56319&&u<n){const i=e.charCodeAt(u++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),u--)}else t.push(a)}return t}const ro=e=>String.fromCodePoint(...e),oo=function(e){return e>=48&&e<58?26+(e-48):e>=65&&e<91?e-65:e>=97&&e<123?e-97:ye},Sn=function(e,t){return e+22+75*(e<26)-((t!=0)<<5)},Jn=function(e,t,u){let n=0;for(e=u?xe(e/eo):e>>1,e+=xe(e/t);e>fu*yt>>1;n+=ye)e=xe(e/fu);return xe(n+(fu+1)*e/(e+Kr))},Xn=function(e){const t=[],u=e.length;let n=0,a=Vn,i=Gn,o=e.lastIndexOf(Qn);o<0&&(o=0);for(let r=0;r<o;++r)e.charCodeAt(r)>=128&&Le("not-basic"),t.push(e.charCodeAt(r));for(let r=o>0?o+1:0;r<u;){const s=n;for(let d=1,h=ye;;h+=ye){r>=u&&Le("invalid-input");const b=oo(e.charCodeAt(r++));b>=ye&&Le("invalid-input"),b>xe((et-n)/d)&&Le("overflow"),n+=b*d;const p=h<=i?Iu:h>=i+yt?yt:h-i;if(b<p)break;const f=ye-p;d>xe(et/f)&&Le("overflow"),d*=f}const c=t.length+1;i=Jn(n-s,c,s==0),xe(n/c)>et-a&&Le("overflow"),a+=xe(n/c),n%=c,t.splice(n++,0,a)}return String.fromCodePoint(...t)},Kn=function(e){const t=[];e=Yn(e);const u=e.length;let n=Vn,a=0,i=Gn;for(const s of e)s<128&&t.push(hu(s));const o=t.length;let r=o;for(o&&t.push(Qn);r<u;){let s=et;for(const d of e)d>=n&&d<s&&(s=d);const c=r+1;s-n>xe((et-a)/c)&&Le("overflow"),a+=(s-n)*c,n=s;for(const d of e)if(d<n&&++a>et&&Le("overflow"),d===n){let h=a;for(let b=ye;;b+=ye){const p=b<=i?Iu:b>=i+yt?yt:b-i;if(h<p)break;const f=h-p,E=ye-p;t.push(hu(Sn(p+f%E,0))),h=xe(f/E)}t.push(hu(Sn(h,0))),i=Jn(a,c,r===o),a=0,++r}++a,++n}return t.join("")},so=function(e){return Zn(e,function(t){return to.test(t)?Xn(t.slice(4).toLowerCase()):t})},co=function(e){return Zn(e,function(t){return uo.test(t)?"xn--"+Kn(t):t})},ei={version:"2.3.1",ucs2:{decode:Yn,encode:ro},decode:Xn,encode:Kn,toASCII:co,toUnicode:so},lo={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},fo={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},ho={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}},po={default:lo,zero:fo,commonmark:ho},mo=/^(vbscript|javascript|file|data):/,bo=/^data:image\/(gif|png|jpeg|webp);/;function go(e){const t=e.trim().toLowerCase();return mo.test(t)?bo.test(t):!0}const ti=["http:","https:","mailto:"];function yo(e){const t=Cu(e,!0);if(t.hostname&&(!t.protocol||ti.indexOf(t.protocol)>=0))try{t.hostname=ei.toASCII(t.hostname)}catch{}return vt(Au(t))}function xo(e){const t=Cu(e,!0);if(t.hostname&&(!t.protocol||ti.indexOf(t.protocol)>=0))try{t.hostname=ei.toUnicode(t.hostname)}catch{}return tt(Au(t),tt.defaultChars+"%")}function le(e,t){if(!(this instanceof le))return new le(e,t);t||Du(e)||(t=e||{},e="default"),this.inline=new Ct,this.block=new Ht,this.core=new Tu,this.renderer=new nt,this.linkify=new ae,this.validateLink=go,this.normalizeLink=yo,this.normalizeLinkText=xo,this.utils=_a,this.helpers=Wt({},Aa),this.options={},this.configure(e),t&&this.set(t)}le.prototype.set=function(e){return Wt(this.options,e),this};le.prototype.configure=function(e){const t=this;if(Du(e)){const u=e;if(e=po[u],!e)throw new Error('Wrong `markdown-it` preset "'+u+'", check name')}if(!e)throw new Error("Wrong `markdown-it` preset, can't be empty");return e.options&&t.set(e.options),e.components&&Object.keys(e.components).forEach(function(u){e.components[u].rules&&t[u].ruler.enableOnly(e.components[u].rules),e.components[u].rules2&&t[u].ruler2.enableOnly(e.components[u].rules2)}),this};le.prototype.enable=function(e,t){let u=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(a){u=u.concat(this[a].ruler.enable(e,!0))},this),u=u.concat(this.inline.ruler2.enable(e,!0));const n=e.filter(function(a){return u.indexOf(a)<0});if(n.length&&!t)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+n);return this};le.prototype.disable=function(e,t){let u=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(a){u=u.concat(this[a].ruler.disable(e,!0))},this),u=u.concat(this.inline.ruler2.disable(e,!0));const n=e.filter(function(a){return u.indexOf(a)<0});if(n.length&&!t)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+n);return this};le.prototype.use=function(e){const t=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,t),this};le.prototype.parse=function(e,t){if(typeof e!="string")throw new Error("Input data should be a String");const u=new this.core.State(e,this,t);return this.core.process(u),u.tokens};le.prototype.render=function(e,t){return t=t||{},this.renderer.render(this.parse(e,t),this.options,t)};le.prototype.parseInline=function(e,t){const u=new this.core.State(e,this,t);return u.inlineMode=!0,this.core.process(u),u.tokens};le.prototype.renderInline=function(e,t){return t=t||{},this.renderer.render(this.parseInline(e,t),this.options,t)};var _o=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function wo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var pu={exports:{}};/*! @license DOMPurify 3.1.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.7/LICENSE */var Tn;function Fn(){return Tn||(Tn=1,function(e,t){(function(u,n){e.exports=n()})(_o,function(){const{entries:u,setPrototypeOf:n,isFrozen:a,getPrototypeOf:i,getOwnPropertyDescriptor:o}=Object;let{freeze:r,seal:s,create:c}=Object,{apply:d,construct:h}=typeof Reflect<"u"&&Reflect;r||(r=function(w){return w}),s||(s=function(w){return w}),d||(d=function(w,I,T){return w.apply(I,T)}),h||(h=function(w,I){return new w(...I)});const b=R(Array.prototype.forEach),p=R(Array.prototype.pop),f=R(Array.prototype.push),E=R(String.prototype.toLowerCase),D=R(String.prototype.toString),F=R(String.prototype.match),k=R(String.prototype.replace),A=R(String.prototype.indexOf),g=R(String.prototype.trim),x=R(Object.prototype.hasOwnProperty),C=R(RegExp.prototype.test),L=ne(TypeError);function R(y){return function(w){for(var I=arguments.length,T=new Array(I>1?I-1:0),V=1;V<I;V++)T[V-1]=arguments[V];return d(y,w,T)}}function ne(y){return function(){for(var w=arguments.length,I=new Array(w),T=0;T<w;T++)I[T]=arguments[T];return h(y,I)}}function S(y,w){let I=arguments.length>2&&arguments[2]!==void 0?arguments[2]:E;n&&n(y,null);let T=w.length;for(;T--;){let V=w[T];if(typeof V=="string"){const Ce=I(V);Ce!==V&&(a(w)||(w[T]=Ce),V=Ce)}y[V]=!0}return y}function re(y){for(let w=0;w<y.length;w++)x(y,w)||(y[w]=null);return y}function oe(y){const w=c(null);for(const[I,T]of u(y))x(y,I)&&(Array.isArray(T)?w[I]=re(T):T&&typeof T=="object"&&T.constructor===Object?w[I]=oe(T):w[I]=T);return w}function de(y,w){for(;y!==null;){const T=o(y,w);if(T){if(T.get)return R(T.get);if(typeof T.value=="function")return R(T.value)}y=i(y)}function I(){return null}return I}const ie=r(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),ee=r(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),se=r(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Et=r(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),ze=r(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Se=r(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),it=r(["#text"]),We=r(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),he=r(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),at=r(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Te=r(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Fe=s(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Dt=s(/<%[\w\W]*|[\w\W]*%>/gm),rt=s(/\${[\w\W]*}/gm),Ie=s(/^data-[\-\w.\u00B7-\uFFFF]/),St=s(/^aria-[\-\w]+$/),Ue=s(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Pe=s(/^(?:\w+script|data):/i),Tt=s(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),He=s(/^html$/i),Re=s(/^[a-z][.\w]*(-[.\w]+)+$/i);var ot=Object.freeze({__proto__:null,MUSTACHE_EXPR:Fe,ERB_EXPR:Dt,TMPLIT_EXPR:rt,DATA_ATTR:Ie,ARIA_ATTR:St,IS_ALLOWED_URI:Ue,IS_SCRIPT_OR_DATA:Pe,ATTR_WHITESPACE:Tt,DOCTYPE_NAME:He,CUSTOM_ELEMENT:Re});const ve={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},Ae=function(){return typeof window>"u"?null:window},je=function(w,I){if(typeof w!="object"||typeof w.createPolicy!="function")return null;let T=null;const V="data-tt-policy-suffix";I&&I.hasAttribute(V)&&(T=I.getAttribute(V));const Ce="dompurify"+(T?"#"+T:"");try{return w.createPolicy(Ce,{createHTML($e){return $e},createScriptURL($e){return $e}})}catch{return console.warn("TrustedTypes policy "+Ce+" could not be created."),null}};function G(){let y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Ae();const w=v=>G(v);if(w.version="3.1.7",w.removed=[],!y||!y.document||y.document.nodeType!==ve.document)return w.isSupported=!1,w;let{document:I}=y;const T=I,V=T.currentScript,{DocumentFragment:Ce,HTMLTemplateElement:$e,Node:Gt,Element:Pu,NodeFilter:st,NamedNodeMap:ui=y.NamedNodeMap||y.MozNamedAttrMap,HTMLFormElement:ni,DOMParser:ii,trustedTypes:Ft}=y,ct=Pu.prototype,ai=de(ct,"cloneNode"),ri=de(ct,"remove"),oi=de(ct,"nextSibling"),si=de(ct,"childNodes"),It=de(ct,"parentNode");if(typeof $e=="function"){const v=I.createElement("template");v.content&&v.content.ownerDocument&&(I=v.content.ownerDocument)}let J,lt="";const{implementation:Vt,createNodeIterator:ci,createDocumentFragment:li,getElementsByTagName:di}=I,{importNode:fi}=T;let me={};w.isSupported=typeof u=="function"&&typeof It=="function"&&Vt&&Vt.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:Qt,ERB_EXPR:Zt,TMPLIT_EXPR:Yt,DATA_ATTR:hi,ARIA_ATTR:pi,IS_SCRIPT_OR_DATA:mi,ATTR_WHITESPACE:Ru,CUSTOM_ELEMENT:bi}=ot;let{IS_ALLOWED_URI:Lu}=ot,q=null;const Mu=S({},[...ie,...ee,...se,...ze,...it]);let B=null;const Ou=S({},[...We,...he,...at,...Te]);let j=Object.seal(c(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),dt=null,Jt=null,Nu=!0,Xt=!0,zu=!1,ju=!0,Ge=!1,Kt=!0,qe=!1,eu=!1,tu=!1,Ve=!1,Pt=!1,Rt=!1,qu=!0,Bu=!1;const gi="user-content-";let uu=!0,ft=!1,Qe={},Ze=null;const Wu=S({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Uu=null;const Hu=S({},["audio","video","img","source","image","track"]);let nu=null;const $u=S({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Lt="http://www.w3.org/1998/Math/MathML",Mt="http://www.w3.org/2000/svg",Ee="http://www.w3.org/1999/xhtml";let Ye=Ee,iu=!1,au=null;const yi=S({},[Lt,Mt,Ee],D);let ht=null;const xi=["application/xhtml+xml","text/html"],_i="text/html";let W=null,Je=null;const wi=I.createElement("form"),Gu=function(l){return l instanceof RegExp||l instanceof Function},ru=function(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Je&&Je===l)){if((!l||typeof l!="object")&&(l={}),l=oe(l),ht=xi.indexOf(l.PARSER_MEDIA_TYPE)===-1?_i:l.PARSER_MEDIA_TYPE,W=ht==="application/xhtml+xml"?D:E,q=x(l,"ALLOWED_TAGS")?S({},l.ALLOWED_TAGS,W):Mu,B=x(l,"ALLOWED_ATTR")?S({},l.ALLOWED_ATTR,W):Ou,au=x(l,"ALLOWED_NAMESPACES")?S({},l.ALLOWED_NAMESPACES,D):yi,nu=x(l,"ADD_URI_SAFE_ATTR")?S(oe($u),l.ADD_URI_SAFE_ATTR,W):$u,Uu=x(l,"ADD_DATA_URI_TAGS")?S(oe(Hu),l.ADD_DATA_URI_TAGS,W):Hu,Ze=x(l,"FORBID_CONTENTS")?S({},l.FORBID_CONTENTS,W):Wu,dt=x(l,"FORBID_TAGS")?S({},l.FORBID_TAGS,W):{},Jt=x(l,"FORBID_ATTR")?S({},l.FORBID_ATTR,W):{},Qe=x(l,"USE_PROFILES")?l.USE_PROFILES:!1,Nu=l.ALLOW_ARIA_ATTR!==!1,Xt=l.ALLOW_DATA_ATTR!==!1,zu=l.ALLOW_UNKNOWN_PROTOCOLS||!1,ju=l.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Ge=l.SAFE_FOR_TEMPLATES||!1,Kt=l.SAFE_FOR_XML!==!1,qe=l.WHOLE_DOCUMENT||!1,Ve=l.RETURN_DOM||!1,Pt=l.RETURN_DOM_FRAGMENT||!1,Rt=l.RETURN_TRUSTED_TYPE||!1,tu=l.FORCE_BODY||!1,qu=l.SANITIZE_DOM!==!1,Bu=l.SANITIZE_NAMED_PROPS||!1,uu=l.KEEP_CONTENT!==!1,ft=l.IN_PLACE||!1,Lu=l.ALLOWED_URI_REGEXP||Ue,Ye=l.NAMESPACE||Ee,j=l.CUSTOM_ELEMENT_HANDLING||{},l.CUSTOM_ELEMENT_HANDLING&&Gu(l.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(j.tagNameCheck=l.CUSTOM_ELEMENT_HANDLING.tagNameCheck),l.CUSTOM_ELEMENT_HANDLING&&Gu(l.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(j.attributeNameCheck=l.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),l.CUSTOM_ELEMENT_HANDLING&&typeof l.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(j.allowCustomizedBuiltInElements=l.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Ge&&(Xt=!1),Pt&&(Ve=!0),Qe&&(q=S({},it),B=[],Qe.html===!0&&(S(q,ie),S(B,We)),Qe.svg===!0&&(S(q,ee),S(B,he),S(B,Te)),Qe.svgFilters===!0&&(S(q,se),S(B,he),S(B,Te)),Qe.mathMl===!0&&(S(q,ze),S(B,at),S(B,Te))),l.ADD_TAGS&&(q===Mu&&(q=oe(q)),S(q,l.ADD_TAGS,W)),l.ADD_ATTR&&(B===Ou&&(B=oe(B)),S(B,l.ADD_ATTR,W)),l.ADD_URI_SAFE_ATTR&&S(nu,l.ADD_URI_SAFE_ATTR,W),l.FORBID_CONTENTS&&(Ze===Wu&&(Ze=oe(Ze)),S(Ze,l.FORBID_CONTENTS,W)),uu&&(q["#text"]=!0),qe&&S(q,["html","head","body"]),q.table&&(S(q,["tbody"]),delete dt.tbody),l.TRUSTED_TYPES_POLICY){if(typeof l.TRUSTED_TYPES_POLICY.createHTML!="function")throw L('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof l.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw L('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');J=l.TRUSTED_TYPES_POLICY,lt=J.createHTML("")}else J===void 0&&(J=je(Ft,V)),J!==null&&typeof lt=="string"&&(lt=J.createHTML(""));r&&r(l),Je=l}},Vu=S({},["mi","mo","mn","ms","mtext"]),Qu=S({},["annotation-xml"]),ki=S({},["title","style","font","a","script"]),Zu=S({},[...ee,...se,...Et]),Yu=S({},[...ze,...Se]),vi=function(l){let m=It(l);(!m||!m.tagName)&&(m={namespaceURI:Ye,tagName:"template"});const _=E(l.tagName),M=E(m.tagName);return au[l.namespaceURI]?l.namespaceURI===Mt?m.namespaceURI===Ee?_==="svg":m.namespaceURI===Lt?_==="svg"&&(M==="annotation-xml"||Vu[M]):!!Zu[_]:l.namespaceURI===Lt?m.namespaceURI===Ee?_==="math":m.namespaceURI===Mt?_==="math"&&Qu[M]:!!Yu[_]:l.namespaceURI===Ee?m.namespaceURI===Mt&&!Qu[M]||m.namespaceURI===Lt&&!Vu[M]?!1:!Yu[_]&&(ki[_]||!Zu[_]):!!(ht==="application/xhtml+xml"&&au[l.namespaceURI]):!1},be=function(l){f(w.removed,{element:l});try{It(l).removeChild(l)}catch{ri(l)}},Ot=function(l,m){try{f(w.removed,{attribute:m.getAttributeNode(l),from:m})}catch{f(w.removed,{attribute:null,from:m})}if(m.removeAttribute(l),l==="is"&&!B[l])if(Ve||Pt)try{be(m)}catch{}else try{m.setAttribute(l,"")}catch{}},Ju=function(l){let m=null,_=null;if(tu)l="<remove></remove>"+l;else{const $=F(l,/^[\r\n\t ]+/);_=$&&$[0]}ht==="application/xhtml+xml"&&Ye===Ee&&(l='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+l+"</body></html>");const M=J?J.createHTML(l):l;if(Ye===Ee)try{m=new ii().parseFromString(M,ht)}catch{}if(!m||!m.documentElement){m=Vt.createDocument(Ye,"template",null);try{m.documentElement.innerHTML=iu?lt:M}catch{}}const Q=m.body||m.documentElement;return l&&_&&Q.insertBefore(I.createTextNode(_),Q.childNodes[0]||null),Ye===Ee?di.call(m,qe?"html":"body")[0]:qe?m.documentElement:Q},Xu=function(l){return ci.call(l.ownerDocument||l,l,st.SHOW_ELEMENT|st.SHOW_COMMENT|st.SHOW_TEXT|st.SHOW_PROCESSING_INSTRUCTION|st.SHOW_CDATA_SECTION,null)},Ku=function(l){return l instanceof ni&&(typeof l.nodeName!="string"||typeof l.textContent!="string"||typeof l.removeChild!="function"||!(l.attributes instanceof ui)||typeof l.removeAttribute!="function"||typeof l.setAttribute!="function"||typeof l.namespaceURI!="string"||typeof l.insertBefore!="function"||typeof l.hasChildNodes!="function")},en=function(l){return typeof Gt=="function"&&l instanceof Gt},De=function(l,m,_){me[l]&&b(me[l],M=>{M.call(w,m,_,Je)})},tn=function(l){let m=null;if(De("beforeSanitizeElements",l,null),Ku(l))return be(l),!0;const _=W(l.nodeName);if(De("uponSanitizeElement",l,{tagName:_,allowedTags:q}),l.hasChildNodes()&&!en(l.firstElementChild)&&C(/<[/\w]/g,l.innerHTML)&&C(/<[/\w]/g,l.textContent)||l.nodeType===ve.progressingInstruction||Kt&&l.nodeType===ve.comment&&C(/<[/\w]/g,l.data))return be(l),!0;if(!q[_]||dt[_]){if(!dt[_]&&nn(_)&&(j.tagNameCheck instanceof RegExp&&C(j.tagNameCheck,_)||j.tagNameCheck instanceof Function&&j.tagNameCheck(_)))return!1;if(uu&&!Ze[_]){const M=It(l)||l.parentNode,Q=si(l)||l.childNodes;if(Q&&M){const $=Q.length;for(let te=$-1;te>=0;--te){const ge=ai(Q[te],!0);ge.__removalCount=(l.__removalCount||0)+1,M.insertBefore(ge,oi(l))}}}return be(l),!0}return l instanceof Pu&&!vi(l)||(_==="noscript"||_==="noembed"||_==="noframes")&&C(/<\/no(script|embed|frames)/i,l.innerHTML)?(be(l),!0):(Ge&&l.nodeType===ve.text&&(m=l.textContent,b([Qt,Zt,Yt],M=>{m=k(m,M," ")}),l.textContent!==m&&(f(w.removed,{element:l.cloneNode()}),l.textContent=m)),De("afterSanitizeElements",l,null),!1)},un=function(l,m,_){if(qu&&(m==="id"||m==="name")&&(_ in I||_ in wi))return!1;if(!(Xt&&!Jt[m]&&C(hi,m))){if(!(Nu&&C(pi,m))){if(!B[m]||Jt[m]){if(!(nn(l)&&(j.tagNameCheck instanceof RegExp&&C(j.tagNameCheck,l)||j.tagNameCheck instanceof Function&&j.tagNameCheck(l))&&(j.attributeNameCheck instanceof RegExp&&C(j.attributeNameCheck,m)||j.attributeNameCheck instanceof Function&&j.attributeNameCheck(m))||m==="is"&&j.allowCustomizedBuiltInElements&&(j.tagNameCheck instanceof RegExp&&C(j.tagNameCheck,_)||j.tagNameCheck instanceof Function&&j.tagNameCheck(_))))return!1}else if(!nu[m]){if(!C(Lu,k(_,Ru,""))){if(!((m==="src"||m==="xlink:href"||m==="href")&&l!=="script"&&A(_,"data:")===0&&Uu[l])){if(!(zu&&!C(mi,k(_,Ru,"")))){if(_)return!1}}}}}}return!0},nn=function(l){return l!=="annotation-xml"&&F(l,bi)},an=function(l){De("beforeSanitizeAttributes",l,null);const{attributes:m}=l;if(!m)return;const _={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:B};let M=m.length;for(;M--;){const Q=m[M],{name:$,namespaceURI:te,value:ge}=Q,pt=W($);let X=$==="value"?ge:g(ge);if(_.attrName=pt,_.attrValue=X,_.keepAttr=!0,_.forceKeepAttr=void 0,De("uponSanitizeAttribute",l,_),X=_.attrValue,_.forceKeepAttr||(Ot($,l),!_.keepAttr))continue;if(!ju&&C(/\/>/i,X)){Ot($,l);continue}Ge&&b([Qt,Zt,Yt],on=>{X=k(X,on," ")});const rn=W(l.nodeName);if(un(rn,pt,X)){if(Bu&&(pt==="id"||pt==="name")&&(Ot($,l),X=gi+X),Kt&&C(/((--!?|])>)|<\/(style|title)/i,X)){Ot($,l);continue}if(J&&typeof Ft=="object"&&typeof Ft.getAttributeType=="function"&&!te)switch(Ft.getAttributeType(rn,pt)){case"TrustedHTML":{X=J.createHTML(X);break}case"TrustedScriptURL":{X=J.createScriptURL(X);break}}try{te?l.setAttributeNS(te,$,X):l.setAttribute($,X),Ku(l)?be(l):p(w.removed)}catch{}}}De("afterSanitizeAttributes",l,null)},Ai=function v(l){let m=null;const _=Xu(l);for(De("beforeSanitizeShadowDOM",l,null);m=_.nextNode();)De("uponSanitizeShadowNode",m,null),!tn(m)&&(m.content instanceof Ce&&v(m.content),an(m));De("afterSanitizeShadowDOM",l,null)};return w.sanitize=function(v){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},m=null,_=null,M=null,Q=null;if(iu=!v,iu&&(v="<!-->"),typeof v!="string"&&!en(v))if(typeof v.toString=="function"){if(v=v.toString(),typeof v!="string")throw L("dirty is not a string, aborting")}else throw L("toString is not a function");if(!w.isSupported)return v;if(eu||ru(l),w.removed=[],typeof v=="string"&&(ft=!1),ft){if(v.nodeName){const ge=W(v.nodeName);if(!q[ge]||dt[ge])throw L("root node is forbidden and cannot be sanitized in-place")}}else if(v instanceof Gt)m=Ju("<!---->"),_=m.ownerDocument.importNode(v,!0),_.nodeType===ve.element&&_.nodeName==="BODY"||_.nodeName==="HTML"?m=_:m.appendChild(_);else{if(!Ve&&!Ge&&!qe&&v.indexOf("<")===-1)return J&&Rt?J.createHTML(v):v;if(m=Ju(v),!m)return Ve?null:Rt?lt:""}m&&tu&&be(m.firstChild);const $=Xu(ft?v:m);for(;M=$.nextNode();)tn(M)||(M.content instanceof Ce&&Ai(M.content),an(M));if(ft)return v;if(Ve){if(Pt)for(Q=li.call(m.ownerDocument);m.firstChild;)Q.appendChild(m.firstChild);else Q=m;return(B.shadowroot||B.shadowrootmode)&&(Q=fi.call(T,Q,!0)),Q}let te=qe?m.outerHTML:m.innerHTML;return qe&&q["!doctype"]&&m.ownerDocument&&m.ownerDocument.doctype&&m.ownerDocument.doctype.name&&C(He,m.ownerDocument.doctype.name)&&(te="<!DOCTYPE "+m.ownerDocument.doctype.name+`>
`+te),Ge&&b([Qt,Zt,Yt],ge=>{te=k(te,ge," ")}),J&&Rt?J.createHTML(te):te},w.setConfig=function(){let v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};ru(v),eu=!0},w.clearConfig=function(){Je=null,eu=!1},w.isValidAttribute=function(v,l,m){Je||ru({});const _=W(v),M=W(l);return un(_,M,m)},w.addHook=function(v,l){typeof l=="function"&&(me[v]=me[v]||[],f(me[v],l))},w.removeHook=function(v){if(me[v])return p(me[v])},w.removeHooks=function(v){me[v]&&(me[v]=[])},w.removeAllHooks=function(){me={}},w}var pe=G();return pe})}(pu)),pu.exports}var ko=window.DOMPurify||(window.DOMPurify=Fn().default||Fn());const vo=wo(ko);function Ao(e){let t,u;return{c(){t=new Ei(!1),u=sn(),this.h()},l(n){t=Di(n,!1),u=sn(),this.h()},h(){t.a=u},m(n,a){t.m(e[0],n,a),kt(n,u,a)},p:_e,i:_e,o:_e,d(n){n&&(ce(u),t.d())}}}function Co(e,t,u){let{content:n}=t;const i=Object.fromEntries(Object.entries(Object.assign({"/src/lib/assets/crochetMS/crochetMS_component_api_layer.svg":Ii,"/src/lib/assets/crochetMS/crochetMS_container_crochet_management_system.svg":Pi,"/src/lib/assets/crochetMS/crochetMS_system_context.svg":Ri,"/src/lib/assets/viridi_achievements.png":Ti})).map(([c,d])=>[c.replace("/src/lib/assets/",""),d])),o=new le({linkify:!0,typographer:!0});o.renderer.rules.image=(c,d,h,b,p)=>{const f=c[d],E=f.attrIndex("src");if(!f.attrs)return p.renderToken(c,d,h);const D=f.attrs[E][1];if(i[D])f.attrs[E][1]=i[D];else throw new Error(`Invalid image path for ${D}`);return p.renderToken(c,d,h)};const r=o.render(n),s=vo.sanitize(r);return e.$$set=c=>{"content"in c&&u(1,n=c.content)},[s,n]}class Eo extends _t{constructor(t){super(),wt(this,t,Co,Ao,xt,{content:1})}}const Do=`# Crochet Management System (System Design Documentation)

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
`;function So(e){let t,u,n;return u=new Eo({props:{content:Do}}),{c(){t=N("article"),mu(u.$$.fragment),this.h()},l(a){t=z(a,"ARTICLE",{class:!0});var i=Be(t);bu(u.$$.fragment,i),i.forEach(ce),this.h()},h(){Ke(t,"class","default")},m(a,i){kt(a,t,i),gu(u,t,null),n=!0},p:_e,i(a){n||(yu(u.$$.fragment,a),n=!0)},o(a){xu(u.$$.fragment,a),n=!1},d(a){a&&ce(t),_u(u)}}}class To extends _t{constructor(t){super(),wt(this,t,null,So,xt,{})}}function Fo(e){let t,u="<small><strong>(╯°□°）╯︵ ┻━┻</strong></small>";return{c(){t=N("p"),t.innerHTML=u,this.h()},l(n){t=z(n,"P",{class:!0,"data-svelte-h":!0}),K(t)!=="svelte-6cg12i"&&(t.innerHTML=u),this.h()},h(){Ke(t,"class","text-center")},m(n,a){kt(n,t,a)},p:_e,i:_e,o:_e,d(n){n&&ce(t)}}}class Io extends _t{constructor(t){super(),wt(this,t,null,Fo,xt,{})}}function Po(e){let t,u="<small><strong>(ヘ･_･)ヘ┳━┳</strong></small>";return{c(){t=N("p"),t.innerHTML=u,this.h()},l(n){t=z(n,"P",{class:!0,"data-svelte-h":!0}),K(t)!=="svelte-klt78m"&&(t.innerHTML=u),this.h()},h(){Ke(t,"class","text-center green")},m(n,a){kt(n,t,a)},p:_e,i:_e,o:_e,d(n){n&&ce(t)}}}class Ro extends _t{constructor(t){super(),wt(this,t,null,Po,xt,{})}}function Lo(e){let t,u,n=`Engineering the Intangible:<br/>The Essential Handbook for Engineers Who
    Refuse to Lose Their Minds While Navigating a World Where the Only Certainty
    Is That Your Stack Will Never Stop Changing`,a,i,o,r,s=e[0].started+"",c,d,h,b,p,f,E=`<h2>Summary</h2> <p>The <i>Engineering the Intangible</i> project emerged from my own experience
        as a software engineer, when I realized the importance of balancing rapidly
        changing technical skills with lasting human abilities. In a world where
        technology quickly becomes outdated, skills like effective communication
        and adaptability are crucial for long-term success.</p> <p>This insight made me see a gap: many existing resources are either too
        generic, overly complex, or not well-suited for the analytical mindset
        of technical professionals. <i>Engineering the Intangible</i> aims to fill
        this gap by offering an approach tailored specifically for engineers and
        tech professionals. My aim is to create a tool that&#39;s easy to access and
        use, helping people improve their job performance while also fostering their
        personal growth.</p> <p>This project is my way of providing a straightforward and intuitive
        resource that supports the continuous development of these essential,
        intangible skills. By focusing on these competencies, it helps
        individuals grow both professionally and personally in a constantly
        changing world.</p>`,D,F,k=`<h2>Introduction</h2> <p>The <i>Engineering the Intangible</i> project was born to tackle a challenge
        every engineer faces: the need to stay up-to-date with rapidly changing technologies
        while also building the soft skills that are crucial for career growth. Unlike
        many existing resources that can be too generic, overly complex, or aimed
        at those with a background in psychology, this project takes a straightforward
        approach tailored to the analytical mindset of engineers.</p> <p>The goal is to create an accessible tool that not only boosts job
        performance but also supports overall personal development in all areas
        of life. By focusing on mastering timeless competencies, this project
        aims to help you sustain long-term success and continuous growth.</p>`,A,g,x,C="Problem",L,R,ne=`In the rapidly changing IT world, where new technologies mushroom,
        certain core competencies—such as adaptability and effective
        communication—remain essential. Mastering these skills not only ensures
        your long-term career success but also makes daily work life more
        satisfying.`,S,re,oe=`While technical skills can quickly become outdated, these timeless
        competencies provide a stable foundation, helping you stay adaptable and
        valuable no matter how the industry changes.`,de,ie,ee,se,Et=`<h2>Motivation Behind the Project</h2> <p>This project is born from my own experience in the IT field, where I saw
        a growing need to develop non-technical skills alongside technical
        expertise. Even though there are resources out there discussing these
        competencies, I found a lack of options that specifically cater to the
        unique needs of technical professionals.</p> <p>To fill this gap, I have developed a straightforward approach to foster
        these timeless competencies. My goal is to create a tool that is:</p> <ul><li><b>Simple</b><br/>
          Fits into busy schedule without being overwhelming.</li> <li><b>Easy to Use</b><br/>
          Requires no prior expertise in psychology or HR.</li> <li><b>Plug-and-Play</b><br/>
          Ready for immediate use with minimal setup.</li> <li><b>Flexible</b><br/>
          Useful for both professional and personal development.</li></ul>`,ze,Se,it=`<h2>Theoretical Foundation</h2> <p>The <i>Engineering the Intangible</i> project draws on established competency
        models, particularly those by Spencer &amp; Spencer (1993), who define competencies
        as the &quot;underlying characteristics of an individual related to effective
        and superior performance.&quot; These characteristics include deeper qualities
        such as motives, traits, and self-concept, which are crucial for long-term
        success, especially in fields where technical skills can quickly become outdated.</p> <p>As statistician George Box famously said, <q>All models are wrong, but some are useful.</q> This project embraces that idea, offering a framework that, while not perfect,
        is designed to be practical and adaptable across various professional contexts.</p>`,We,he,at=`<h3>Selected Bibliography</h3> <ul><li>Lucia, A. D., &amp; Lepsinger, R. (1999). <cite>The art and science of competency models: Pinpointing critical
            success factors in organizations</cite>. Jossey-Bass/Pfeiffer.</li> <li>McClelland, D.C. (1987). <cite>Human motivation</cite>. Cambridge:
          Cambridge University Press.</li> <li>Spencer, L. M., &amp; Spencer, S. M. (1993). <cite>Competence at work: Models for superior performance</cite>. Wiley.</li></ul>`,Te,Fe,Dt=`<h2>Goal of the Project</h2> <p>The primary goal of this project is to develop a structured, accessible
        approach for tracking and enhancing intangible skills, especially for
        those who lack formal training in psychology or human resources. This
        tool is intended to support self-improvement in both your professional
        and personal life.</p>`,rt,Ie,St=`<h2>Target Audience</h2> <p>While this framework is developed from a software engineer&#39;s
        perspective, its focus on timeless competencies makes it relevant to
        anyone looking to grow personally and professionally, no matter where
        they are in their career—whether they&#39;re just starting out, stepping
        into leadership, or navigating new challenges in a constantly changing
        world.</p> <p>For junior engineers, the need to acquire extensive technical skills can
        be overwhelming, and the importance of non-technical skills is
        frequently overlooked or underestimated. This tool helps them develop
        these broader skills, which are crucial for comprehensive growth.
        Mid-career professionals transitioning into leadership roles will also
        find this framework valuable, as these intangible competencies become
        increasingly critical.</p>`,Ue,Pe,Tt=`<h2>Key Use Cases</h2> <ul><li><b>Interview Preparation</b><br/>Strengthen key competencies to
          better articulate your skills and experience.</li> <li><b>Ongoing Personal Development</b><br/>Plan your career growth by
          strategically building the soft skills you need.</li></ul> <p>For example, a software engineer preparing for an interview could use
        this tool to identify and enhance relevant non-technical skills, helping
        them develop clear, concise narratives to share during the interview.</p> <p>Similarly, a mid-career software engineer aiming to switch into a
        managerial role might use this framework to strategically plan their
        skill development, making their transition smoother and more effective.</p>`,He,Re,ot=`<h2>Benefits</h2> <ul><li><b>Increased Self-Awareness</b><br/>
          Understand your strengths and areas for improvement, accelerating your
          career progress and boosting job satisfaction.</li> <li><b>Objective Measurement</b><br/>
          Track your growth over time using a clear, structured approach, helping
          you achieve both short-term and long-term goals.</li> <li><b>Gap Identification</b><br/>
          Proactively address skill gaps to prepare for future challenges, keeping
          you competitive in your field.</li> <li><b>Well-Rounded Growth</b><br/>
          Improve your effectiveness in all areas of life and enhance your ability
          to adapt to new roles and responsibilities.</li></ul>`,ve,Ae,je;return ie=new Io({}),Ae=new Ro({}),{c(){t=N("article"),u=N("h1"),u.innerHTML=n,a=Z(),i=N("section"),o=N("p"),r=N("small"),c=cn(s),d=cn(" – Present (Research Phase)"),h=Z(),b=N("section"),p=Z(),f=N("section"),f.innerHTML=E,D=Z(),F=N("section"),F.innerHTML=k,A=Z(),g=N("section"),x=N("h2"),x.textContent=C,L=Z(),R=N("p"),R.textContent=ne,S=Z(),re=N("p"),re.textContent=oe,de=Z(),mu(ie.$$.fragment),ee=Z(),se=N("section"),se.innerHTML=Et,ze=Z(),Se=N("section"),Se.innerHTML=it,We=Z(),he=N("section"),he.innerHTML=at,Te=Z(),Fe=N("section"),Fe.innerHTML=Dt,rt=Z(),Ie=N("section"),Ie.innerHTML=St,Ue=Z(),Pe=N("section"),Pe.innerHTML=Tt,He=Z(),Re=N("section"),Re.innerHTML=ot,ve=Z(),mu(Ae.$$.fragment),this.h()},l(G){t=z(G,"ARTICLE",{class:!0});var pe=Be(t);u=z(pe,"H1",{"data-svelte-h":!0}),K(u)!=="svelte-1rkr81p"&&(u.innerHTML=n),a=Y(pe),i=z(pe,"SECTION",{});var y=Be(i);o=z(y,"P",{class:!0});var w=Be(o);r=z(w,"SMALL",{});var I=Be(r);c=ln(I,s),d=ln(I," – Present (Research Phase)"),I.forEach(ce),w.forEach(ce),h=Y(y),b=z(y,"SECTION",{id:!0}),Be(b).forEach(ce),p=Y(y),f=z(y,"SECTION",{"data-svelte-h":!0}),K(f)!=="svelte-gq59rf"&&(f.innerHTML=E),D=Y(y),F=z(y,"SECTION",{"data-svelte-h":!0}),K(F)!=="svelte-jnel82"&&(F.innerHTML=k),A=Y(y),g=z(y,"SECTION",{});var T=Be(g);x=z(T,"H2",{"data-svelte-h":!0}),K(x)!=="svelte-1mheau3"&&(x.textContent=C),L=Y(T),R=z(T,"P",{"data-svelte-h":!0}),K(R)!=="svelte-dz5iuq"&&(R.textContent=ne),S=Y(T),re=z(T,"P",{"data-svelte-h":!0}),K(re)!=="svelte-g5omnv"&&(re.textContent=oe),de=Y(T),bu(ie.$$.fragment,T),T.forEach(ce),ee=Y(y),se=z(y,"SECTION",{"data-svelte-h":!0}),K(se)!=="svelte-1s76kue"&&(se.innerHTML=Et),ze=Y(y),Se=z(y,"SECTION",{"data-svelte-h":!0}),K(Se)!=="svelte-1nfbf9w"&&(Se.innerHTML=it),We=Y(y),he=z(y,"SECTION",{"data-svelte-h":!0}),K(he)!=="svelte-11k7l1l"&&(he.innerHTML=at),Te=Y(y),Fe=z(y,"SECTION",{"data-svelte-h":!0}),K(Fe)!=="svelte-1jfa7te"&&(Fe.innerHTML=Dt),rt=Y(y),Ie=z(y,"SECTION",{"data-svelte-h":!0}),K(Ie)!=="svelte-1955bhu"&&(Ie.innerHTML=St),Ue=Y(y),Pe=z(y,"SECTION",{"data-svelte-h":!0}),K(Pe)!=="svelte-1a4dx6e"&&(Pe.innerHTML=Tt),He=Y(y),Re=z(y,"SECTION",{"data-svelte-h":!0}),K(Re)!=="svelte-14emubr"&&(Re.innerHTML=ot),ve=Y(y),bu(Ae.$$.fragment,y),y.forEach(ce),pe.forEach(ce),this.h()},h(){Ke(o,"class","text-center"),Ke(b,"id","toc"),Ke(t,"class","default")},m(G,pe){kt(G,t,pe),P(t,u),P(t,a),P(t,i),P(i,o),P(o,r),P(r,c),P(r,d),P(i,h),P(i,b),P(i,p),P(i,f),P(i,D),P(i,F),P(i,A),P(i,g),P(g,x),P(g,L),P(g,R),P(g,S),P(g,re),P(g,de),gu(ie,g,null),P(i,ee),P(i,se),P(i,ze),P(i,Se),P(i,We),P(i,he),P(i,Te),P(i,Fe),P(i,rt),P(i,Ie),P(i,Ue),P(i,Pe),P(i,He),P(i,Re),P(i,ve),gu(Ae,i,null),je=!0},p(G,[pe]){(!je||pe&1)&&s!==(s=G[0].started+"")&&Si(c,s)},i(G){je||(yu(ie.$$.fragment,G),yu(Ae.$$.fragment,G),je=!0)},o(G){xu(ie.$$.fragment,G),xu(Ae.$$.fragment,G),je=!1},d(G){G&&ce(t),_u(ie),_u(Ae)}}}function Mo(e,t,u){let{project:n}=t;return Ci(()=>{Fi(2);const{hash:a}=document.location,i=a&&document.getElementById(a.slice(1));i&&i.scrollIntoView()}),e.$$set=a=>{"project"in a&&u(0,n=a.project)},[n]}class Oo extends _t{constructor(t){super(),wt(this,t,Mo,Lo,xt,{project:0})}}const qo={name:"Natalia Pospieszyńska",role:"Backend Software Engineer",location:{city:"Trutnov",region:"Hradec Králové",country:"Czechia",icon:"fa-solid fa-location-dot",mapUrl:"https://en.mapy.cz/turisticka?source=dist&id=36&ds=1&x=15.8373076&y=50.5704668&z=10"},contact:{linkedin:{href:"https://www.linkedin.com/in/nataliapospieszynska/",displayValue:"/nataliapospieszynska",faIconClass:"fa-brands fa-linkedin"},github:{href:"https://github.com/burczan",displayValue:"/burczan",faIconClass:"fa-brands fa-github"},web:{href:"https://burczan.github.io/me/",displayValue:"burczan.github.io/me",faIconClass:"fa-solid fa-globe"}}},Bo=[{school:"Polish Naval Academy",city:"Gdynia",country:"Poland",field:"Cybersecurity",degree:"Postgraduate studies",dateRange:"2019–2020",website:"https://www.amw.gdynia.pl"},{school:"Adam Mickiewicz University",city:"Poznań",country:"Poland",field:"Philosophy",subfield:"Social Communication",degree:"Master studies",dateRange:"2013–2016",website:"https://amu.edu.pl/"},{school:"Post-Secondary Vocational School",city:"Poznań",country:"Poland",field:"Sound Engineering",degree:"Technician",dateRange:"2011–2013"},{school:"Adam Mickiewicz University",city:"Poznań",country:"Poland",field:"Instructional Technology",degree:"Bachelor's degree",dateRange:"2010–2013",website:"https://amu.edu.pl/"}],Wo=[{role:"Backend Software Engineer",company:"Capbase",startDate:"04/2021",endDate:"07/2022",description:["Implemented and enhanced several product features in TypeScript, Node.js, and React, improving user experience and addressing customer feedback.","Developed and optimized an internal API with Express.js and AWS, enabling seamless data integration and improving internal workflows.","Diagnosed and resolved technical issues, improving application stability and ensuring smooth performance.","Wrote and maintained comprehensive unit and integration tests, leading to high code quality and fewer bugs in production."],descriptionShortened:["Implemented and enhanced several product features in TypeScript, Node.js, and React.","Developed and optimized an internal API with Express.js and AWS.","Diagnosed and resolved technical issues.","Wrote and maintained comprehensive unit and integration tests."],technologies:["AWS","Bash","Express.js","Linux","Node.js","React","TypeScript"]},{role:"Frontend Software Engineer",company:"Beta District",startDate:"12/2019",endDate:"08/2020",description:["Developed reusable components in React and TypeScript, improving code consistency and speeding up the development process for future features.","Implemented unit and integration tests using Jest and React Testing Library, ensuring high code reliability and significantly reducing bug occurrences."],descriptionShortened:["Developed reusable components in React and TypeScript for a newly created frontend.","Implemented unit and integration tests using Jest and React Testing Library."],technologies:["GraphQL","JavaScript","React","Redux","TypeScript","Unit testing"]},{role:"Software Test Engineer",company:"Beta District",startDate:"01/2019",endDate:"11/2019",description:["Remotely mentored a QA specialist, introducing programming and test automation practices, which enhanced the team's testing efficiency and technical capabilities.","Developed and maintained automated tests in JavaScript and Ruby, improving test coverage and helping ensure consistent product quality throughout the release cycle.","Contributed to frontend development by implementing basic functionalities in React, supporting the timely delivery of key features alongside the development team."],descriptionShortened:["Remotely mentored QA specialist.","Developed and maintained automated tests in JavaScript and Ruby.","Contributed to frontend development by implementing basic functionalities in React."],technologies:["API testing","JavaScript","React","Ruby","Test automation"]},{role:"QA Specialist",company:"Beta District",startDate:"02/2018",endDate:"12/2018",description:["Conducted manual functional and API testing using Burp Suite and Postman, ensuring reliability and preventing major issues before deployment to production.","Collaborated closely with developers to implement new functionalities, providing critical feedback that improved product quality and streamlined the development process.","Learned and applied test automation using JavaScript and Ruby, contributing to enhanced test coverage and overall improvement in the team's testing process.","Performed post-release production environment testing using manual testing techniques, identifying and resolving issues that maintained system stability and reliability."],descriptionShortened:["Conducted manual functional and API testing using Burp Suite and Postman.","Collaborated closely with developers to implement new features.","Performed production environment testing after each release."],technologies:["API testing","Burp Suite","JavaScript","Manual testing","Ruby","Test automation"]},{role:"Junior QA Specialist",company:"Beta District",startDate:"04/2017",endDate:"01/2018",description:["Performed manual testing to identify and document defects, ensuring high-quality software products and preventing critical issues before release.","Proposed and implemented more efficient testing procedures, streamlining the process and reducing test execution time.","Actively identified and reported bugs, suggesting improvements that contributed to enhancing the overall quality and performance of software projects.","Actively learned new concepts and techniques in manual and API testing, applying these insights to improve the team's testing effectiveness and product quality."],descriptionShortened:["Performed manual testing to identify and document defects.","Proposed and implemented more efficient testing procedures.","Suggested improvements to projects by finding and reporting bugs.","Actively learned new concepts and techniques in software testing."],technologies:["API testing","Manual testing"]},{role:"Instructional Designer",company:"LLidero",startDate:"05/2014",endDate:"06/2016",description:["Designed and developed educational courses tailored to various learner needs, applying instructional design principles and pedagogical techniques to create effective learning experiences.","Set clear learning goals and objectives for each course, ensuring alignment with educational standards and learner outcomes.","Conducted thorough testing of courses, demonstrating strong attention to detail to identify and resolve any issues, ensuring the quality and effectiveness of instructional materials.","Collaborated with subject matter experts to gather content and ensure accuracy, integrating their expertise into the course design to enhance the learning experience."],descriptionShortened:["Designed and developed educational courses tailored to various learner needs.","Set clear learning goals and objectives for each course.","Collaborated with subject matter experts to gather content and ensure accuracy."]}],Uo=[{name:"Mathematics",description:"Uncovering the hidden order and underlying patterns that govern the universe."},{name:"Philosophy",description:"Searching the meaning behind the order and chaos that mathematics reveals."},{name:"Psychology",description:"Exploring the complexities of human thought, mirroring the pursuit of order amid the chaos revealed by mathematics and questioned by philosophy."},{name:"Theoretical Computer Science",description:"Investigating the limits of computation, where chaos, order, and meaning intersect in the search for knowledge."}],Ho={programmingLanguages:{display:"Programming Languages",skills:["JavaScript","TypeScript","Ruby","Bash"]},frontendDevelopment:{display:"Frontend Development",skills:["React","Svelte","Vanilla JS","HTML","CSS","Tailwind"]},backendDevelopment:{display:"Backend Development & Databases",skills:["Node.js","Express.js","REST API","GraphQL","SQL","NoSQL","AWS DynamoDB","PostgreSQL"]},cloudPlatforms:{display:"Cloud Platforms",skills:["Amazon Web Services (AWS)"]},systemDesignArchitecture:{display:"System Design & Architecture",skills:["Distributed Systems","System Architecture","Microservices","Serverless"]},diagrammingDocumentation:{display:"Diagramming & Technical Documentation",skills:["PlantUML","Structurizr","Graphviz","TikZ","LaTeX"]},softwareEngineering:{display:"Software Engineering",skills:["Algorithms and Data Structures","Code Review","Debugging","Software Craftsmanship (KISS, DRY, YAGNI, etc.)"]},testingAutomation:{display:"Testing & Automation",skills:["API Testing (Postman)","Jest","Puppeteer","Security Testing (Burp Suite)","Test Automation (Frontend/Backend)","Unit Testing"]},versionControlCollaboration:{display:"Version Control & Collaboration",skills:["Git","GitHub","Linear","Obsidian"]},operatingSystems:{display:"Operating Systems",skills:["Linux"]}},$o=["Adaptability","Analytical skills","Asking questions","Attention to detail","Collaboration","Continuous learning","Critical thinking","Growth mindset","Mentoring","Open-mindedness","Openness to feedback","Persistence","Problem solving","Remote working","Resilience","Self-motivation"],Go=[{slug:"crochet-management-system",title:"Crochet Management System Design",shortTitle:"Crochet Management System Design",started:"09/2024",ended:"09/2024",component:To},{slug:"engineering-intangible",title:"Engineering the Intangible: The Essential Handbook for Engineers Who Refuse to Lose Their Minds While Navigating a World Where the Only Certainty Is That Your Stack Will Never Stop Changing",shortTitle:"Engineering the Intangible",started:"07/2024",ended:"Present (Research Phase)",component:Oo}],Vo=[{title:"Assumptions in System Design: Avoiding the Hidden Traps",abstract:"In system design, assumptions—whether explicit or hidden—play a crucial role in shaping the success and stability of complex systems. However, when left unchecked, especially when influenced by cognitive biases, these assumptions can lead to serious risks and system failures. This article takes a closer look at the challenge of identifying and managing hidden assumptions that can impact performance, scalability, and reliability. Traditional methods like cross-team reviews and standard testing often miss these implicit assumptions until they create critical issues. To help mitigate these risks, this article presents practical strategies such as scenario planning, designing for failure, and validating assumptions through thorough testing. A real-world example—the failure of NASA's Mars Climate Orbiter—highlights the importance of these practices. A simple, unexamined assumption about units of measurement led to a 125 million mission loss. By proactively managing assumptions, teams can reduce errors, improve communication, and build systems that are far more resilient and reliable.",comment:"This article is an introduction to a series on assumptions in system design, covering topics such as managing technical, security, and business assumptions, mitigating cognitive biases, and best practices for validating assumptions throughout the system lifecycle.",started:"10/2024",ended:"10/2024",pdfFileName:"assumptions_in_system_design.pdf"}],Qo=[{language:"Polish",level:"Native proficiency"},{language:"English",level:"Full professional proficiency"},{language:"Czech",level:"Professional working proficiency"},{language:"Spanish",level:"Elementary proficiency"}],Zo={aboutMe:"fa-solid fa-ghost",contact:"fa-solid fa-address-book",education:"fa-solid fa-user-graduate",experience:"fa-solid fa-person-digging",externalLink:"fa-solid fa-link",favourite:"fa-solid fa-heart",futureTechstack:"fa-solid fa-book-open-reader",generalInterests:"fa-solid fa-book-open-reader",headline:"fa-solid fa-code",projects:"fa-solid fa-person-walking-luggage",softSkills:"fa-solid fa-people-pulling",spokenLanguages:"fa-solid fa-language",summary:"fa-solid fa-user-pen",technologies:"fa-solid fa-user-astronaut"};export{Qo as a,qo as b,Wo as c,Vo as d,Bo as e,Zo as f,Uo as i,Go as p,$o as s,Ho as t};
