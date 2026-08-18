import{$ as e,B as t,C as n,E as r,G as i,H as a,I as o,J as s,T as c,V as l,Y as u,it as d,j as f,nt as p,r as m,rt as h,w as g,y as _}from"./Cj26qYkI.js";import"./xihTtKlq.js";import{n as v,t as y}from"./C2y4Jups.js";import"./BBx6Ur_f.js";var ee=``+new URL(`../assets/crochetMS_component_api_layer.D9xFDxDP.svg`,import.meta.url).href,te=``+new URL(`../assets/crochetMS_container_crochet_management_system.BKvRjGry.svg`,import.meta.url).href,ne=``+new URL(`../assets/crochetMS_system_context.DtlamE4W.svg`,import.meta.url).href,re={};function ie(e){let t=re[e];if(t)return t;t=re[e]=[];for(let e=0;e<128;e++){let n=String.fromCharCode(e);t.push(n)}for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t[r]=`%`+(`0`+r.toString(16).toUpperCase()).slice(-2)}return t}function b(e,t){typeof t!=`string`&&(t=b.defaultChars);let n=ie(t);return e.replace(/(%[a-f0-9]{2})+/gi,function(e){let t=``;for(let r=0,i=e.length;r<i;r+=3){let a=parseInt(e.slice(r+1,r+3),16);if(a<128){t+=n[a];continue}if((a&224)==192&&r+3<i){let n=parseInt(e.slice(r+4,r+6),16);if((n&192)==128){let e=a<<6&1984|n&63;t+=e<128?`��`:String.fromCharCode(e),r+=3;continue}}if((a&240)==224&&r+6<i){let n=parseInt(e.slice(r+4,r+6),16),i=parseInt(e.slice(r+7,r+9),16);if((n&192)==128&&(i&192)==128){let e=a<<12&61440|n<<6&4032|i&63;t+=e<2048||e>=55296&&e<=57343?`���`:String.fromCharCode(e),r+=6;continue}}if((a&248)==240&&r+9<i){let n=parseInt(e.slice(r+4,r+6),16),i=parseInt(e.slice(r+7,r+9),16),o=parseInt(e.slice(r+10,r+12),16);if((n&192)==128&&(i&192)==128&&(o&192)==128){let e=a<<18&1835008|n<<12&258048|i<<6&4032|o&63;e<65536||e>1114111?t+=`����`:(e-=65536,t+=String.fromCharCode(55296+(e>>10),56320+(e&1023))),r+=9;continue}}t+=`�`}return t})}b.defaultChars=`;/?:@&=+$,#`,b.componentChars=``;var ae={};function oe(e){let t=ae[e];if(t)return t;t=ae[e]=[];for(let e=0;e<128;e++){let n=String.fromCharCode(e);/^[0-9a-z]$/i.test(n)?t.push(n):t.push(`%`+(`0`+e.toString(16).toUpperCase()).slice(-2))}for(let n=0;n<e.length;n++)t[e.charCodeAt(n)]=e[n];return t}function x(e,t,n){typeof t!=`string`&&(n=t,t=x.defaultChars),n===void 0&&(n=!0);let r=oe(t),i=``;for(let t=0,a=e.length;t<a;t++){let o=e.charCodeAt(t);if(n&&o===37&&t+2<a&&/^[0-9a-f]{2}$/i.test(e.slice(t+1,t+3))){i+=e.slice(t,t+3),t+=2;continue}if(o<128){i+=r[o];continue}if(o>=55296&&o<=57343){if(o>=55296&&o<=56319&&t+1<a){let n=e.charCodeAt(t+1);if(n>=56320&&n<=57343){i+=encodeURIComponent(e[t]+e[t+1]),t++;continue}}i+=`%EF%BF%BD`;continue}i+=encodeURIComponent(e[t])}return i}x.defaultChars=`;/?:@&=+$,-_.!~*'()#`,x.componentChars=`-_.!~*'()`;function se(e){let t=``;return t+=e.protocol||``,t+=e.slashes?`//`:``,t+=e.auth?e.auth+`@`:``,e.hostname&&e.hostname.indexOf(`:`)!==-1?t+=`[`+e.hostname+`]`:t+=e.hostname||``,t+=e.port?`:`+e.port:``,t+=e.pathname||``,t+=e.search||``,t+=e.hash||``,t}function ce(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}var le=/^([a-z0-9.+-]+:)/i,ue=/:[0-9]*$/,de=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,fe=[`%`,`/`,`?`,`;`,`#`,`'`,`{`,`}`,`|`,`\\`,`^`,"`",`<`,`>`,`"`,"`",` `,`\r`,`
`,`	`],S=[`/`,`?`,`#`],C=255,w=/^[+a-z0-9A-Z_-]{0,63}$/,pe=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,T={javascript:!0,"javascript:":!0},me={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function E(e,t){if(e&&e instanceof ce)return e;let n=new ce;return n.parse(e,t),n}ce.prototype.parse=function(e,t){let n,r,i,a=e;if(a=a.trim(),!t&&e.split(`#`).length===1){let e=de.exec(a);if(e)return this.pathname=e[1],e[2]&&(this.search=e[2]),this}let o=le.exec(a);if(o&&(o=o[0],n=o.toLowerCase(),this.protocol=o,a=a.substr(o.length)),(t||o||a.match(/^\/\/[^@\/]+@[^@\/]+/))&&(i=a.substr(0,2)===`//`,i&&!(o&&T[o])&&(a=a.substr(2),this.slashes=!0)),!T[o]&&(i||o&&!me[o])){let e=-1;for(let t=0;t<S.length;t++)r=a.indexOf(S[t]),r!==-1&&(e===-1||r<e)&&(e=r);let t,n;n=e===-1?a.lastIndexOf(`@`):a.lastIndexOf(`@`,e),n!==-1&&(t=a.slice(0,n),a=a.slice(n+1),this.auth=t),e=-1;for(let t=0;t<fe.length;t++)r=a.indexOf(fe[t]),r!==-1&&(e===-1||r<e)&&(e=r);e===-1&&(e=a.length),a[e-1]===`:`&&e--;let i=a.slice(0,e);a=a.slice(e),this.parseHost(i),this.hostname=this.hostname||``;let o=this.hostname[0]===`[`&&this.hostname[this.hostname.length-1]===`]`;if(!o){let e=this.hostname.split(/\./);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n&&!n.match(w)){let r=``;for(let e=0,t=n.length;e<t;e++)n.charCodeAt(e)>127?r+=`x`:r+=n[e];if(!r.match(w)){let r=e.slice(0,t),i=e.slice(t+1),o=n.match(pe);o&&(r.push(o[1]),i.unshift(o[2])),i.length&&(a=i.join(`.`)+a),this.hostname=r.join(`.`);break}}}}this.hostname.length>C&&(this.hostname=``),o&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}let s=a.indexOf(`#`);s!==-1&&(this.hash=a.substr(s),a=a.slice(0,s));let c=a.indexOf(`?`);return c!==-1&&(this.search=a.substr(c),a=a.slice(0,c)),a&&(this.pathname=a),me[n]&&this.hostname&&!this.pathname&&(this.pathname=``),this},ce.prototype.parseHost=function(e){let t=ue.exec(e);t&&(t=t[0],t!==`:`&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)};var D=h({decode:()=>b,encode:()=>x,format:()=>se,parse:()=>E}),O=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,he=/[\0-\x1F\x7F-\x9F]/,k=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,ge=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,_e=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,ve=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,ye=h({Any:()=>O,Cc:()=>he,Cf:()=>k,P:()=>ge,S:()=>_e,Z:()=>ve}),be=new Uint16Array(`ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻\xA0ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌`.split(``).map(e=>e.charCodeAt(0))),xe=new Uint16Array(`Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢`.split(``).map(e=>e.charCodeAt(0))),Se=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),Ce=String.fromCodePoint??function(e){let t=``;return e>65535&&(e-=65536,t+=String.fromCharCode(e>>>10&1023|55296),e=56320|e&1023),t+=String.fromCharCode(e),t};function we(e){return e>=55296&&e<=57343||e>1114111?65533:Se.get(e)??e}var A;(function(e){e[e.NUM=35]=`NUM`,e[e.SEMI=59]=`SEMI`,e[e.EQUALS=61]=`EQUALS`,e[e.ZERO=48]=`ZERO`,e[e.NINE=57]=`NINE`,e[e.LOWER_A=97]=`LOWER_A`,e[e.LOWER_F=102]=`LOWER_F`,e[e.LOWER_X=120]=`LOWER_X`,e[e.LOWER_Z=122]=`LOWER_Z`,e[e.UPPER_A=65]=`UPPER_A`,e[e.UPPER_F=70]=`UPPER_F`,e[e.UPPER_Z=90]=`UPPER_Z`})(A||={});var Te=32,j;(function(e){e[e.VALUE_LENGTH=49152]=`VALUE_LENGTH`,e[e.BRANCH_LENGTH=16256]=`BRANCH_LENGTH`,e[e.JUMP_TABLE=127]=`JUMP_TABLE`})(j||={});function Ee(e){return e>=A.ZERO&&e<=A.NINE}function De(e){return e>=A.UPPER_A&&e<=A.UPPER_F||e>=A.LOWER_A&&e<=A.LOWER_F}function Oe(e){return e>=A.UPPER_A&&e<=A.UPPER_Z||e>=A.LOWER_A&&e<=A.LOWER_Z||Ee(e)}function ke(e){return e===A.EQUALS||Oe(e)}var M;(function(e){e[e.EntityStart=0]=`EntityStart`,e[e.NumericStart=1]=`NumericStart`,e[e.NumericDecimal=2]=`NumericDecimal`,e[e.NumericHex=3]=`NumericHex`,e[e.NamedEntity=4]=`NamedEntity`})(M||={});var N;(function(e){e[e.Legacy=0]=`Legacy`,e[e.Strict=1]=`Strict`,e[e.Attribute=2]=`Attribute`})(N||={});var Ae=class{constructor(e,t,n){this.decodeTree=e,this.emitCodePoint=t,this.errors=n,this.state=M.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=N.Strict}startEntity(e){this.decodeMode=e,this.state=M.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(e,t){switch(this.state){case M.EntityStart:return e.charCodeAt(t)===A.NUM?(this.state=M.NumericStart,this.consumed+=1,this.stateNumericStart(e,t+1)):(this.state=M.NamedEntity,this.stateNamedEntity(e,t));case M.NumericStart:return this.stateNumericStart(e,t);case M.NumericDecimal:return this.stateNumericDecimal(e,t);case M.NumericHex:return this.stateNumericHex(e,t);case M.NamedEntity:return this.stateNamedEntity(e,t)}}stateNumericStart(e,t){return t>=e.length?-1:(e.charCodeAt(t)|Te)===A.LOWER_X?(this.state=M.NumericHex,this.consumed+=1,this.stateNumericHex(e,t+1)):(this.state=M.NumericDecimal,this.stateNumericDecimal(e,t))}addToNumericResult(e,t,n,r){if(t!==n){let i=n-t;this.result=this.result*r**+i+parseInt(e.substr(t,i),r),this.consumed+=i}}stateNumericHex(e,t){let n=t;for(;t<e.length;){let r=e.charCodeAt(t);if(Ee(r)||De(r))t+=1;else return this.addToNumericResult(e,n,t,16),this.emitNumericEntity(r,3)}return this.addToNumericResult(e,n,t,16),-1}stateNumericDecimal(e,t){let n=t;for(;t<e.length;){let r=e.charCodeAt(t);if(Ee(r))t+=1;else return this.addToNumericResult(e,n,t,10),this.emitNumericEntity(r,2)}return this.addToNumericResult(e,n,t,10),-1}emitNumericEntity(e,t){var n;if(this.consumed<=t)return(n=this.errors)==null||n.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(e===A.SEMI)this.consumed+=1;else if(this.decodeMode===N.Strict)return 0;return this.emitCodePoint(we(this.result),this.consumed),this.errors&&(e!==A.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(e,t){let{decodeTree:n}=this,r=n[this.treeIndex],i=(r&j.VALUE_LENGTH)>>14;for(;t<e.length;t++,this.excess++){let a=e.charCodeAt(t);if(this.treeIndex=Me(n,r,this.treeIndex+Math.max(1,i),a),this.treeIndex<0)return this.result===0||this.decodeMode===N.Attribute&&(i===0||ke(a))?0:this.emitNotTerminatedNamedEntity();if(r=n[this.treeIndex],i=(r&j.VALUE_LENGTH)>>14,i!==0){if(a===A.SEMI)return this.emitNamedEntityData(this.treeIndex,i,this.consumed+this.excess);this.decodeMode!==N.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var e;let{result:t,decodeTree:n}=this,r=(n[t]&j.VALUE_LENGTH)>>14;return this.emitNamedEntityData(t,r,this.consumed),(e=this.errors)==null||e.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(e,t,n){let{decodeTree:r}=this;return this.emitCodePoint(t===1?r[e]&~j.VALUE_LENGTH:r[e+1],n),t===3&&this.emitCodePoint(r[e+2],n),n}end(){var e;switch(this.state){case M.NamedEntity:return this.result!==0&&(this.decodeMode!==N.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case M.NumericDecimal:return this.emitNumericEntity(0,2);case M.NumericHex:return this.emitNumericEntity(0,3);case M.NumericStart:return(e=this.errors)==null||e.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case M.EntityStart:return 0}}};function je(e){let t=``,n=new Ae(e,e=>t+=Ce(e));return function(e,r){let i=0,a=0;for(;(a=e.indexOf(`&`,a))>=0;){t+=e.slice(i,a),n.startEntity(r);let o=n.write(e,a+1);if(o<0){i=a+n.end();break}i=a+o,a=o===0?i+1:i}let o=t+e.slice(i);return t=``,o}}function Me(e,t,n,r){let i=(t&j.BRANCH_LENGTH)>>7,a=t&j.JUMP_TABLE;if(i===0)return a!==0&&r===a?n:-1;if(a){let t=r-a;return t<0||t>=i?-1:e[n+t]-1}let o=n,s=o+i-1;for(;o<=s;){let t=o+s>>>1,n=e[t];if(n<r)o=t+1;else if(n>r)s=t-1;else return e[t+i]}return-1}var Ne=je(be);je(xe);function Pe(e,t=N.Legacy){return Ne(e,t)}function Fe(e){return Ne(e,N.Strict)}var Ie=h({arrayReplaceAt:()=>F,asciiTrim:()=>st,assign:()=>Be,escapeHtml:()=>Qe,escapeRE:()=>et,fromCodePoint:()=>I,has:()=>ze,isMdAsciiPunct:()=>it,isPunctChar:()=>nt,isPunctCharCode:()=>rt,isSpace:()=>L,isString:()=>P,isValidEntityCode:()=>Ve,isWhiteSpace:()=>tt,lib:()=>ct,normalizeReference:()=>at,unescapeAll:()=>qe,unescapeMd:()=>Ke});function Le(e){return Object.prototype.toString.call(e)}function P(e){return Le(e)===`[object String]`}var Re=Object.prototype.hasOwnProperty;function ze(e,t){return Re.call(e,t)}function Be(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){if(t){if(typeof t!=`object`)throw TypeError(t+`must be object`);Object.keys(t).forEach(function(n){e[n]=t[n]})}}),e}function F(e,t,n){return[].concat(e.slice(0,t),n,e.slice(t+1))}function Ve(e){return!(e>=55296&&e<=57343||e>=64976&&e<=65007||(e&65535)==65535||(e&65535)==65534||e>=0&&e<=8||e===11||e>=14&&e<=31||e>=127&&e<=159||e>1114111)}function I(e){if(e>65535){e-=65536;let t=55296+(e>>10),n=56320+(e&1023);return String.fromCharCode(t,n)}return String.fromCharCode(e)}var He=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,Ue=RegExp(He.source+`|&([a-z#][a-z0-9]{1,31});`,`gi`),We=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function Ge(e,t){if(t.charCodeAt(0)===35&&We.test(t)){let n=t[1].toLowerCase()===`x`?parseInt(t.slice(2),16):parseInt(t.slice(1),10);return Ve(n)?I(n):e}let n=Pe(e);return n===e?e:n}function Ke(e){return e.indexOf(`\\`)<0?e:e.replace(He,`$1`)}function qe(e){return e.indexOf(`\\`)<0&&e.indexOf(`&`)<0?e:e.replace(Ue,function(e,t,n){return t||Ge(e,n)})}var Je=/[&<>"]/,Ye=/[&<>"]/g,Xe={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`};function Ze(e){return Xe[e]}function Qe(e){return Je.test(e)?e.replace(Ye,Ze):e}var $e=/[.?*+^$[\]\\(){}|-]/g;function et(e){return e.replace($e,`\\$&`)}function L(e){switch(e){case 9:case 32:return!0}return!1}function tt(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function nt(e){return ge.test(e)||_e.test(e)}function rt(e){return nt(I(e))}function it(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function at(e){return e=e.trim().replace(/\s+/g,` `),e.toLowerCase().toUpperCase()}function ot(e){return e===32||e===9||e===10||e===13}function st(e){let t=0;for(;t<e.length&&ot(e.charCodeAt(t));t++);let n=e.length-1;for(;n>=t&&ot(e.charCodeAt(n));n--);return e.slice(t,n+1)}var ct={mdurl:D,ucmicro:ye};function lt(e,t,n){let r,i,a,o,s=e.posMax,c=e.pos;for(e.pos=t+1,r=1;e.pos<s;){if(a=e.src.charCodeAt(e.pos),a===93&&(r--,r===0)){i=!0;break}if(o=e.pos,e.md.inline.skipToken(e),a===91){if(o===e.pos-1)r++;else if(n)return e.pos=c,-1}}let l=-1;return i&&(l=e.pos),e.pos=c,l}function R(e,t,n){let r,i=t,a={ok:!1,pos:0,str:``};if(e.charCodeAt(i)===60){for(i++;i<n;){if(r=e.charCodeAt(i),r===10||r===60)return a;if(r===62)return a.pos=i+1,a.str=qe(e.slice(t+1,i)),a.ok=!0,a;if(r===92&&i+1<n){i+=2;continue}i++}return a}let o=0;for(;i<n&&(r=e.charCodeAt(i),!(r===32||r<32||r===127));){if(r===92&&i+1<n){if(e.charCodeAt(i+1)===32)break;i+=2;continue}if(r===40&&(o++,o>32))return a;if(r===41){if(o===0)break;o--}i++}return t===i||o!==0?a:(a.str=qe(e.slice(t,i)),a.pos=i,a.ok=!0,a)}function ut(e,t,n,r){let i,a=t,o={ok:!1,can_continue:!1,pos:0,str:``,marker:0};if(r)o.str=r.str,o.marker=r.marker;else{if(a>=n)return o;let r=e.charCodeAt(a);if(r!==34&&r!==39&&r!==40)return o;t++,a++,r===40&&(r=41),o.marker=r}for(;a<n;){if(i=e.charCodeAt(a),i===o.marker)return o.pos=a+1,o.str+=qe(e.slice(t,a)),o.ok=!0,o;if(i===40&&o.marker===41)return o;i===92&&a+1<n&&a++,a++}return o.can_continue=!0,o.str+=qe(e.slice(t,a)),o}var z=h({parseLinkDestination:()=>R,parseLinkLabel:()=>lt,parseLinkTitle:()=>ut}),B={};B.code_inline=function(e,t,n,r,i){let a=e[t];return`<code`+i.renderAttrs(a)+`>`+Qe(a.content)+`</code>`},B.code_block=function(e,t,n,r,i){let a=e[t];return`<pre`+i.renderAttrs(a)+`><code>`+Qe(e[t].content)+`</code></pre>
`},B.fence=function(e,t,n,r,i){let a=e[t],o=a.info?qe(a.info).trim():``,s=``,c=``;if(o){let e=o.split(/(\s+)/g);s=e[0],c=e.slice(2).join(``)}let l;if(l=n.highlight&&n.highlight(a.content,s,c)||Qe(a.content),l.indexOf(`<pre`)===0)return l+`
`;if(o){let e=a.attrIndex(`class`),t=a.attrs?a.attrs.slice():[];e<0?t.push([`class`,n.langPrefix+s]):(t[e]=t[e].slice(),t[e][1]+=` `+n.langPrefix+s);let r={attrs:t};return`<pre><code${i.renderAttrs(r)}>${l}</code></pre>\n`}return`<pre><code${i.renderAttrs(a)}>${l}</code></pre>\n`},B.image=function(e,t,n,r,i){let a=e[t];return a.attrs[a.attrIndex(`alt`)][1]=i.renderInlineAsText(a.children,n,r),i.renderToken(e,t,n)},B.hardbreak=function(e,t,n){return n.xhtmlOut?`<br />
`:`<br>
`},B.softbreak=function(e,t,n){return n.breaks?n.xhtmlOut?`<br />
`:`<br>
`:`
`},B.text=function(e,t){return Qe(e[t].content)},B.html_block=function(e,t){return e[t].content},B.html_inline=function(e,t){return e[t].content};function V(){this.rules=Be({},B)}V.prototype.renderAttrs=function(e){let t,n,r;if(!e.attrs)return``;for(r=``,t=0,n=e.attrs.length;t<n;t++)r+=` `+Qe(e.attrs[t][0])+`="`+Qe(e.attrs[t][1])+`"`;return r},V.prototype.renderToken=function(e,t,n){let r=e[t],i=``;if(r.hidden)return``;r.block&&r.nesting!==-1&&t&&e[t-1].hidden&&(i+=`
`),i+=(r.nesting===-1?`</`:`<`)+r.tag,i+=this.renderAttrs(r),r.nesting===0&&n.xhtmlOut&&(i+=` /`);let a=!1;if(r.block&&(a=!0,r.nesting===1&&t+1<e.length)){let n=e[t+1];(n.type===`inline`||n.hidden||n.nesting===-1&&n.tag===r.tag)&&(a=!1)}return i+=a?`>
`:`>`,i},V.prototype.renderInline=function(e,t,n){let r=``,i=this.rules;for(let a=0,o=e.length;a<o;a++){let o=e[a].type;i[o]===void 0?r+=this.renderToken(e,a,t):r+=i[o](e,a,t,n,this)}return r},V.prototype.renderInlineAsText=function(e,t,n){let r=``;for(let i=0,a=e.length;i<a;i++)switch(e[i].type){case`text`:r+=e[i].content;break;case`image`:r+=this.renderInlineAsText(e[i].children,t,n);break;case`html_inline`:case`html_block`:r+=e[i].content;break;case`softbreak`:case`hardbreak`:r+=`
`}return r},V.prototype.render=function(e,t,n){let r=``,i=this.rules;for(let a=0,o=e.length;a<o;a++){let o=e[a].type;o===`inline`?r+=this.renderInline(e[a].children,t,n):i[o]===void 0?r+=this.renderToken(e,a,t,n):r+=i[o](e,a,t,n,this)}return r};function H(){this.__rules__=[],this.__cache__=null}H.prototype.__find__=function(e){for(let t=0;t<this.__rules__.length;t++)if(this.__rules__[t].name===e)return t;return-1},H.prototype.__compile__=function(){let e=this,t=[``];e.__rules__.forEach(function(e){e.enabled&&e.alt.forEach(function(e){t.indexOf(e)<0&&t.push(e)})}),e.__cache__={},t.forEach(function(t){e.__cache__[t]=[],e.__rules__.forEach(function(n){n.enabled&&(t&&n.alt.indexOf(t)<0||e.__cache__[t].push(n.fn))})})},H.prototype.at=function(e,t,n){let r=this.__find__(e),i=n||{};if(r===-1)throw Error(`Parser rule not found: `+e);this.__rules__[r].fn=t,this.__rules__[r].alt=i.alt||[],this.__cache__=null},H.prototype.before=function(e,t,n,r){let i=this.__find__(e),a=r||{};if(i===-1)throw Error(`Parser rule not found: `+e);this.__rules__.splice(i,0,{name:t,enabled:!0,fn:n,alt:a.alt||[]}),this.__cache__=null},H.prototype.after=function(e,t,n,r){let i=this.__find__(e),a=r||{};if(i===-1)throw Error(`Parser rule not found: `+e);this.__rules__.splice(i+1,0,{name:t,enabled:!0,fn:n,alt:a.alt||[]}),this.__cache__=null},H.prototype.push=function(e,t,n){let r=n||{};this.__rules__.push({name:e,enabled:!0,fn:t,alt:r.alt||[]}),this.__cache__=null},H.prototype.enable=function(e,t){Array.isArray(e)||(e=[e]);let n=[];return e.forEach(function(e){let r=this.__find__(e);if(r<0){if(t)return;throw Error(`Rules manager: invalid rule name `+e)}this.__rules__[r].enabled=!0,n.push(e)},this),this.__cache__=null,n},H.prototype.enableOnly=function(e,t){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(e){e.enabled=!1}),this.enable(e,t)},H.prototype.disable=function(e,t){Array.isArray(e)||(e=[e]);let n=[];return e.forEach(function(e){let r=this.__find__(e);if(r<0){if(t)return;throw Error(`Rules manager: invalid rule name `+e)}this.__rules__[r].enabled=!1,n.push(e)},this),this.__cache__=null,n},H.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};function U(e,t,n){this.type=e,this.tag=t,this.attrs=null,this.map=null,this.nesting=n,this.level=0,this.children=null,this.content=``,this.markup=``,this.info=``,this.meta=null,this.block=!1,this.hidden=!1}U.prototype.attrIndex=function(e){if(!this.attrs)return-1;let t=this.attrs;for(let n=0,r=t.length;n<r;n++)if(t[n][0]===e)return n;return-1},U.prototype.attrPush=function(e){this.attrs?this.attrs.push(e):this.attrs=[e]},U.prototype.attrSet=function(e,t){let n=this.attrIndex(e),r=[e,t];n<0?this.attrPush(r):this.attrs[n]=r},U.prototype.attrGet=function(e){let t=this.attrIndex(e),n=null;return t>=0&&(n=this.attrs[t][1]),n},U.prototype.attrJoin=function(e,t){let n=this.attrIndex(e);n<0?this.attrPush([e,t]):this.attrs[n][1]=this.attrs[n][1]+` `+t};function W(e,t,n){this.src=e,this.env=n,this.tokens=[],this.inlineMode=!1,this.md=t}W.prototype.Token=U;var dt=/\r\n?|\n/g,ft=/\0/g;function pt(e){let t;t=e.src.replace(dt,`
`),t=t.replace(ft,`�`),e.src=t}function mt(e){let t;e.inlineMode?(t=new e.Token(`inline`,``,0),t.content=e.src,t.map=[0,1],t.children=[],e.tokens.push(t)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}function ht(e){let t=e.tokens;for(let n=0,r=t.length;n<r;n++){let r=t[n];r.type===`inline`&&e.md.inline.parse(r.content,e.md,e.env,r.children)}}function gt(e){return/^<a[>\s]/i.test(e)}function _t(e){return/^<\/a\s*>/i.test(e)}function vt(e){let t=e.tokens;if(e.md.options.linkify)for(let n=0,r=t.length;n<r;n++){if(t[n].type!==`inline`||!e.md.linkify.pretest(t[n].content))continue;let r=t[n].children,i=0;for(let a=r.length-1;a>=0;a--){let o=r[a];if(o.type===`link_close`){for(a--;r[a].level!==o.level&&r[a].type!==`link_open`;)a--;continue}if(o.type===`html_inline`&&(gt(o.content)&&i>0&&i--,_t(o.content)&&i++),!(i>0)&&o.type===`text`&&e.md.linkify.test(o.content)){let i=o.content,s=e.md.linkify.match(i),c=[],l=o.level,u=0;s.length>0&&s[0].index===0&&a>0&&r[a-1].type===`text_special`&&(s=s.slice(1));for(let t=0;t<s.length;t++){let n=s[t].url,r=e.md.normalizeLink(n);if(!e.md.validateLink(r))continue;let a=s[t].text;a=s[t].schema?s[t].schema===`mailto:`&&!/^mailto:/i.test(a)?e.md.normalizeLinkText(`mailto:`+a).replace(/^mailto:/,``):e.md.normalizeLinkText(a):e.md.normalizeLinkText(`http://`+a).replace(/^http:\/\//,``);let o=s[t].index;if(o>u){let t=new e.Token(`text`,``,0);t.content=i.slice(u,o),t.level=l,c.push(t)}let d=new e.Token(`link_open`,`a`,1);d.attrs=[[`href`,r]],d.level=l++,d.markup=`linkify`,d.info=`auto`,c.push(d);let f=new e.Token(`text`,``,0);f.content=a,f.level=l,c.push(f);let p=new e.Token(`link_close`,`a`,-1);p.level=--l,p.markup=`linkify`,p.info=`auto`,c.push(p),u=s[t].lastIndex}if(u<i.length){let t=new e.Token(`text`,``,0);t.content=i.slice(u),t.level=l,c.push(t)}t[n].children=r=F(r,a,c)}}}}var yt=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,bt=/\((c|tm|r)\)/i,xt=/\((c|tm|r)\)/gi,St={c:`©`,r:`®`,tm:`™`};function Ct(e,t){return St[t.toLowerCase()]}function wt(e){let t=0;for(let n=e.length-1;n>=0;n--){let r=e[n];r.type===`text`&&!t&&(r.content=r.content.replace(xt,Ct)),r.type===`link_open`&&r.info===`auto`&&t--,r.type===`link_close`&&r.info===`auto`&&t++}}function Tt(e){let t=0;for(let n=e.length-1;n>=0;n--){let r=e[n];r.type===`text`&&!t&&yt.test(r.content)&&(r.content=r.content.replace(/\+-/g,`±`).replace(/\.{2,}/g,`…`).replace(/([?!])…/g,`$1..`).replace(/([?!]){4,}/g,`$1$1$1`).replace(/,{2,}/g,`,`).replace(/(^|[^-])---(?=[^-]|$)/gm,`$1—`).replace(/(^|\s)--(?=\s|$)/gm,`$1–`).replace(/(^|[^-\s])--(?=[^-\s]|$)/gm,`$1–`)),r.type===`link_open`&&r.info===`auto`&&t--,r.type===`link_close`&&r.info===`auto`&&t++}}function Et(e){let t;if(e.md.options.typographer)for(t=e.tokens.length-1;t>=0;t--)e.tokens[t].type===`inline`&&(bt.test(e.tokens[t].content)&&wt(e.tokens[t].children),yt.test(e.tokens[t].content)&&Tt(e.tokens[t].children))}var Dt=/['"]/,Ot=/['"]/g,kt=`’`;function G(e,t,n,r){e[t]||(e[t]=[]),e[t].push({pos:n,ch:r})}function K(e,t){let n=``,r=0;t.sort((e,t)=>e.pos-t.pos);for(let i=0;i<t.length;i++){let a=t[i];n+=e.slice(r,a.pos)+a.ch,r=a.pos+1}return n+e.slice(r)}function At(e,t){let n,r=[],i={};for(let a=0;a<e.length;a++){let o=e[a],s=e[a].level;for(n=r.length-1;n>=0&&!(r[n].level<=s);n--);if(r.length=n+1,o.type!==`text`)continue;let c=o.content,l=0,u=c.length;OUTER:for(;l<u;){Ot.lastIndex=l;let o=Ot.exec(c);if(!o)break;let d=!0,f=!0;l=o.index+1;let p=o[0]===`'`,m=32;if(o.index-1>=0)m=c.charCodeAt(o.index-1);else for(n=a-1;n>=0&&e[n].type!==`softbreak`&&e[n].type!==`hardbreak`;n--)if(e[n].content){m=e[n].content.charCodeAt(e[n].content.length-1);break}let h=32;if(l<u)h=c.charCodeAt(l);else for(n=a+1;n<e.length&&e[n].type!==`softbreak`&&e[n].type!==`hardbreak`;n++)if(e[n].content){h=e[n].content.charCodeAt(0);break}let g=it(m)||rt(m),_=it(h)||rt(h),v=tt(m),y=tt(h);if(y?d=!1:_&&(v||g||(d=!1)),v?f=!1:g&&(y||_||(f=!1)),h===34&&o[0]===`"`&&m>=48&&m<=57&&(f=d=!1),d&&f&&(d=g,f=_),!d&&!f){p&&G(i,a,o.index,kt);continue}if(f)for(n=r.length-1;n>=0;n--){let e=r[n];if(r[n].level<s)break;if(e.single===p&&r[n].level===s){e=r[n];let s,c;p?(s=t.md.options.quotes[2],c=t.md.options.quotes[3]):(s=t.md.options.quotes[0],c=t.md.options.quotes[1]),G(i,a,o.index,c),G(i,e.token,e.pos,s),r.length=n;continue OUTER}}d?r.push({token:a,pos:o.index,single:p,level:s}):f&&p&&G(i,a,o.index,kt)}}Object.keys(i).forEach(function(t){e[t].content=K(e[t].content,i[t])})}function jt(e){if(e.md.options.typographer)for(let t=e.tokens.length-1;t>=0;t--)e.tokens[t].type!==`inline`||!Dt.test(e.tokens[t].content)||At(e.tokens[t].children,e)}function Mt(e){let t,n,r=e.tokens,i=r.length;for(let e=0;e<i;e++){if(r[e].type!==`inline`)continue;let i=r[e].children,a=i.length;for(t=0;t<a;t++)i[t].type===`text_special`&&(i[t].type=`text`);for(t=n=0;t<a;t++)i[t].type===`text`&&t+1<a&&i[t+1].type===`text`?i[t+1].content=i[t].content+i[t+1].content:(t!==n&&(i[n]=i[t]),n++);t!==n&&(i.length=n)}}var Nt=[[`normalize`,pt],[`block`,mt],[`inline`,ht],[`linkify`,vt],[`replacements`,Et],[`smartquotes`,jt],[`text_join`,Mt]];function Pt(){this.ruler=new H;for(let e=0;e<Nt.length;e++)this.ruler.push(Nt[e][0],Nt[e][1])}Pt.prototype.process=function(e){let t=this.ruler.getRules(``);for(let n=0,r=t.length;n<r;n++)t[n](e)},Pt.prototype.State=W;function q(e,t,n,r){this.src=e,this.md=t,this.env=n,this.tokens=r,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType=`root`,this.level=0;let i=this.src;for(let e=0,t=0,n=0,r=0,a=i.length,o=!1;t<a;t++){let s=i.charCodeAt(t);if(!o){if(L(s)){n++,s===9?r+=4-r%4:r++;continue}o=!0}(s===10||t===a-1)&&(s!==10&&t++,this.bMarks.push(e),this.eMarks.push(t),this.tShift.push(n),this.sCount.push(r),this.bsCount.push(0),o=!1,n=0,r=0,e=t+1)}this.bMarks.push(i.length),this.eMarks.push(i.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}q.prototype.push=function(e,t,n){let r=new U(e,t,n);return r.block=!0,n<0&&this.level--,r.level=this.level,n>0&&this.level++,this.tokens.push(r),r},q.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]},q.prototype.skipEmptyLines=function(e){for(let t=this.lineMax;e<t&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e},q.prototype.skipSpaces=function(e){for(let t=this.src.length;e<t&&L(this.src.charCodeAt(e));e++);return e},q.prototype.skipSpacesBack=function(e,t){if(e<=t)return e;for(;e>t;)if(!L(this.src.charCodeAt(--e)))return e+1;return e},q.prototype.skipChars=function(e,t){for(let n=this.src.length;e<n&&this.src.charCodeAt(e)===t;e++);return e},q.prototype.skipCharsBack=function(e,t,n){if(e<=n)return e;for(;e>n;)if(t!==this.src.charCodeAt(--e))return e+1;return e},q.prototype.getLines=function(e,t,n,r){if(e>=t)return``;let i=Array(t-e);for(let a=0,o=e;o<t;o++,a++){let e=0,s=this.bMarks[o],c=s,l;for(l=o+1<t||r?this.eMarks[o]+1:this.eMarks[o];c<l&&e<n;){let t=this.src.charCodeAt(c);if(L(t))t===9?e+=4-(e+this.bsCount[o])%4:e++;else if(c-s<this.tShift[o])e++;else break;c++}e>n?i[a]=Array(e-n+1).join(` `)+this.src.slice(c,l):i[a]=this.src.slice(c,l)}return i.join(``)},q.prototype.Token=U;var Ft=65536;function J(e,t){let n=e.bMarks[t]+e.tShift[t],r=e.eMarks[t];return e.src.slice(n,r)}function It(e){let t=[],n=e.length,r=0,i=e.charCodeAt(r),a=!1,o=0,s=``;for(;r<n;)i===124&&(a?(s+=e.substring(o,r-1),o=r):(t.push(s+e.substring(o,r)),s=``,o=r+1)),a=i===92,r++,i=e.charCodeAt(r);return t.push(s+e.substring(o)),t}function Lt(e,t,n,r){if(t+2>n)return!1;let i=t+1;if(e.sCount[i]<e.blkIndent||e.sCount[i]-e.blkIndent>=4)return!1;let a=e.bMarks[i]+e.tShift[i];if(a>=e.eMarks[i])return!1;let o=e.src.charCodeAt(a++);if(o!==124&&o!==45&&o!==58||a>=e.eMarks[i])return!1;let s=e.src.charCodeAt(a++);if(s!==124&&s!==45&&s!==58&&!L(s)||o===45&&L(s))return!1;for(;a<e.eMarks[i];){let t=e.src.charCodeAt(a);if(t!==124&&t!==45&&t!==58&&!L(t))return!1;a++}let c=J(e,t+1),l=c.split(`|`),u=[];for(let e=0;e<l.length;e++){let t=l[e].trim();if(!t){if(e===0||e===l.length-1)continue;return!1}if(!/^:?-+:?$/.test(t))return!1;t.charCodeAt(t.length-1)===58?u.push(t.charCodeAt(0)===58?`center`:`right`):t.charCodeAt(0)===58?u.push(`left`):u.push(``)}if(c=J(e,t).trim(),c.indexOf(`|`)===-1||e.sCount[t]-e.blkIndent>=4)return!1;l=It(c),l.length&&l[0]===``&&l.shift(),l.length&&l[l.length-1]===``&&l.pop();let d=l.length;if(d===0||d!==u.length)return!1;if(r)return!0;let f=e.parentType;e.parentType=`table`;let p=e.md.block.ruler.getRules(`blockquote`),m=e.push(`table_open`,`table`,1),h=[t,0];m.map=h;let g=e.push(`thead_open`,`thead`,1);g.map=[t,t+1];let _=e.push(`tr_open`,`tr`,1);_.map=[t,t+1];for(let t=0;t<l.length;t++){let n=e.push(`th_open`,`th`,1);u[t]&&(n.attrs=[[`style`,`text-align:`+u[t]]]);let r=e.push(`inline`,``,0);r.content=l[t].trim(),r.children=[],e.push(`th_close`,`th`,-1)}e.push(`tr_close`,`tr`,-1),e.push(`thead_close`,`thead`,-1);let v,y=0;for(i=t+2;i<n&&!(e.sCount[i]<e.blkIndent);i++){let r=!1;for(let t=0,a=p.length;t<a;t++)if(p[t](e,i,n,!0)){r=!0;break}if(r||(c=J(e,i).trim(),!c)||e.sCount[i]-e.blkIndent>=4||(l=It(c),l.length&&l[0]===``&&l.shift(),l.length&&l[l.length-1]===``&&l.pop(),y+=d-l.length,y>Ft))break;if(i===t+2){let n=e.push(`tbody_open`,`tbody`,1);n.map=v=[t+2,0]}let a=e.push(`tr_open`,`tr`,1);a.map=[i,i+1];for(let t=0;t<d;t++){let n=e.push(`td_open`,`td`,1);u[t]&&(n.attrs=[[`style`,`text-align:`+u[t]]]);let r=e.push(`inline`,``,0);r.content=l[t]?l[t].trim():``,r.children=[],e.push(`td_close`,`td`,-1)}e.push(`tr_close`,`tr`,-1)}return v&&(e.push(`tbody_close`,`tbody`,-1),v[1]=i),e.push(`table_close`,`table`,-1),h[1]=i,e.parentType=f,e.line=i,!0}function Rt(e,t,n){if(e.sCount[t]-e.blkIndent<4)return!1;let r=t+1,i=r;for(;r<n;){if(e.isEmpty(r)){r++;continue}if(e.sCount[r]-e.blkIndent>=4){r++,i=r;continue}break}e.line=i;let a=e.push(`code_block`,`code`,0);return a.content=e.getLines(t,i,4+e.blkIndent,!1)+`
`,a.map=[t,e.line],!0}function zt(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||i+3>a)return!1;let o=e.src.charCodeAt(i);if(o!==126&&o!==96)return!1;let s=i;i=e.skipChars(i,o);let c=i-s;if(c<3)return!1;let l=e.src.slice(s,i),u=e.src.slice(i,a);if(o===96&&u.indexOf(String.fromCharCode(o))>=0)return!1;if(r)return!0;let d=t,f=!1;for(;d++,!(d>=n||(i=s=e.bMarks[d]+e.tShift[d],a=e.eMarks[d],i<a&&e.sCount[d]<e.blkIndent));)if(e.src.charCodeAt(i)===o&&!(e.sCount[d]-e.blkIndent>=4)&&(i=e.skipChars(i,o),!(i-s<c)&&(i=e.skipSpaces(i),!(i<a)))){f=!0;break}c=e.sCount[t],e.line=d+ +!!f;let p=e.push(`fence`,`code`,0);return p.info=u,p.content=e.getLines(t+1,d,c,!0),p.markup=l,p.map=[t,e.line],!0}function Bt(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t],o=e.lineMax;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(i)!==62)return!1;if(r)return!0;let s=[],c=[],l=[],u=[],d=e.md.block.ruler.getRules(`blockquote`),f=e.parentType;e.parentType=`blockquote`;let p=!1,m;for(m=t;m<n;m++){let t=e.sCount[m]<e.blkIndent;if(i=e.bMarks[m]+e.tShift[m],a=e.eMarks[m],i>=a)break;if(e.src.charCodeAt(i++)===62&&!t){let t=e.sCount[m]+1,n,r;e.src.charCodeAt(i)===32?(i++,t++,r=!1,n=!0):e.src.charCodeAt(i)===9?(n=!0,(e.bsCount[m]+t)%4==3?(i++,t++,r=!1):r=!0):n=!1;let o=t;for(s.push(e.bMarks[m]),e.bMarks[m]=i;i<a;){let t=e.src.charCodeAt(i);if(L(t))t===9?o+=4-(o+e.bsCount[m]+ +!!r)%4:o++;else break;i++}p=i>=a,c.push(e.bsCount[m]),e.bsCount[m]=e.sCount[m]+1+ +!!n,l.push(e.sCount[m]),e.sCount[m]=o-t,u.push(e.tShift[m]),e.tShift[m]=i-e.bMarks[m];continue}if(p)break;let r=!1;for(let t=0,i=d.length;t<i;t++)if(d[t](e,m,n,!0)){r=!0;break}if(r){e.lineMax=m,e.blkIndent!==0&&(s.push(e.bMarks[m]),c.push(e.bsCount[m]),u.push(e.tShift[m]),l.push(e.sCount[m]),e.sCount[m]-=e.blkIndent);break}s.push(e.bMarks[m]),c.push(e.bsCount[m]),u.push(e.tShift[m]),l.push(e.sCount[m]),e.sCount[m]=-1}let h=e.blkIndent;e.blkIndent=0;let g=e.push(`blockquote_open`,`blockquote`,1);g.markup=`>`;let _=[t,0];g.map=_,e.md.block.tokenize(e,t,m);let v=e.push(`blockquote_close`,`blockquote`,-1);v.markup=`>`,e.lineMax=o,e.parentType=f,_[1]=e.line;for(let n=0;n<u.length;n++)e.bMarks[n+t]=s[n],e.tShift[n+t]=u[n],e.sCount[n+t]=l[n],e.bsCount[n+t]=c[n];return e.blkIndent=h,!0}function Vt(e,t,n,r){let i=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let a=e.bMarks[t]+e.tShift[t],o=e.src.charCodeAt(a++);if(o!==42&&o!==45&&o!==95)return!1;let s=1;for(;a<i;){let t=e.src.charCodeAt(a++);if(t!==o&&!L(t))return!1;t===o&&s++}if(s<3)return!1;if(r)return!0;e.line=t+1;let c=e.push(`hr`,`hr`,0);return c.map=[t,e.line],c.markup=Array(s+1).join(String.fromCharCode(o)),!0}function Ht(e,t){let n=e.eMarks[t],r=e.bMarks[t]+e.tShift[t],i=e.src.charCodeAt(r++);return i!==42&&i!==45&&i!==43||r<n&&!L(e.src.charCodeAt(r))?-1:r}function Ut(e,t){let n=e.bMarks[t]+e.tShift[t],r=e.eMarks[t],i=n;if(i+1>=r)return-1;let a=e.src.charCodeAt(i++);if(a<48||a>57)return-1;for(;;){if(i>=r)return-1;if(a=e.src.charCodeAt(i++),a>=48&&a<=57){if(i-n>=10)return-1;continue}if(a===41||a===46)break;return-1}return i<r&&(a=e.src.charCodeAt(i),!L(a))?-1:i}function Wt(e,t){let n=e.level+2;for(let r=t+2,i=e.tokens.length-2;r<i;r++)e.tokens[r].level===n&&e.tokens[r].type===`paragraph_open`&&(e.tokens[r+2].hidden=!0,e.tokens[r].hidden=!0,r+=2)}function Gt(e,t,n,r){let i,a,o,s,c=t,l=!0;if(e.sCount[c]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[c]-e.listIndent>=4&&e.sCount[c]<e.blkIndent)return!1;let u=!1;r&&e.parentType===`paragraph`&&e.sCount[c]>=e.blkIndent&&(u=!0);let d,f,p;if((p=Ut(e,c))>=0){if(d=!0,o=e.bMarks[c]+e.tShift[c],f=Number(e.src.slice(o,p-1)),u&&f!==1)return!1}else if((p=Ht(e,c))>=0)d=!1;else return!1;if(u&&e.skipSpaces(p)>=e.eMarks[c])return!1;if(r)return!0;let m=e.src.charCodeAt(p-1),h=e.tokens.length;d?(s=e.push(`ordered_list_open`,`ol`,1),f!==1&&(s.attrs=[[`start`,f]])):s=e.push(`bullet_list_open`,`ul`,1);let g=[c,0];s.map=g,s.markup=String.fromCharCode(m);let _=!1,v=e.md.block.ruler.getRules(`list`),y=e.parentType;for(e.parentType=`list`;c<n;){a=p,i=e.eMarks[c];let t=e.sCount[c]+p-(e.bMarks[c]+e.tShift[c]),r=t;for(;a<i;){let t=e.src.charCodeAt(a);if(t===9)r+=4-(r+e.bsCount[c])%4;else if(t===32)r++;else break;a++}let u=a,f;f=u>=i?1:r-t,f>4&&(f=1);let h=t+f;s=e.push(`list_item_open`,`li`,1),s.markup=String.fromCharCode(m);let g=[c,0];s.map=g,d&&(s.info=e.src.slice(o,p-1));let y=e.tight,ee=e.tShift[c],te=e.sCount[c],ne=e.listIndent;if(e.listIndent=e.blkIndent,e.blkIndent=h,e.tight=!0,e.tShift[c]=u-e.bMarks[c],e.sCount[c]=r,u>=i&&e.isEmpty(c+1)?e.line=Math.min(e.line+2,n):e.md.block.tokenize(e,c,n,!0),(!e.tight||_)&&(l=!1),_=e.line-c>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=ne,e.tShift[c]=ee,e.sCount[c]=te,e.tight=y,s=e.push(`list_item_close`,`li`,-1),s.markup=String.fromCharCode(m),c=e.line,g[1]=c,c>=n||e.sCount[c]<e.blkIndent||e.sCount[c]-e.blkIndent>=4)break;let re=!1;for(let t=0,r=v.length;t<r;t++)if(v[t](e,c,n,!0)){re=!0;break}if(re)break;if(d){if(p=Ut(e,c),p<0)break;o=e.bMarks[c]+e.tShift[c]}else if(p=Ht(e,c),p<0)break;if(m!==e.src.charCodeAt(p-1))break}return s=d?e.push(`ordered_list_close`,`ol`,-1):e.push(`bullet_list_close`,`ul`,-1),s.markup=String.fromCharCode(m),g[1]=c,e.line=c,e.parentType=y,l&&Wt(e,h),!0}function Kt(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t],o=t+1;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(i)!==91)return!1;function s(t){let n=e.lineMax;if(t>=n||e.isEmpty(t))return null;let r=!1;if(e.sCount[t]-e.blkIndent>3&&(r=!0),e.sCount[t]<0&&(r=!0),!r){let r=e.md.block.ruler.getRules(`reference`),i=e.parentType;e.parentType=`reference`;let a=!1;for(let i=0,o=r.length;i<o;i++)if(r[i](e,t,n,!0)){a=!0;break}if(e.parentType=i,a)return null}let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];return e.src.slice(i,a+1)}let c=e.src.slice(i,a+1);a=c.length;let l=-1;for(i=1;i<a;i++){let e=c.charCodeAt(i);if(e===91)return!1;if(e===93){l=i;break}if(e===10){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}else if(e===92&&(i++,i<a&&c.charCodeAt(i)===10)){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}}if(l<0||c.charCodeAt(l+1)!==58)return!1;for(i=l+2;i<a;i++){let e=c.charCodeAt(i);if(e===10){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}else if(!L(e))break}let u=e.md.helpers.parseLinkDestination(c,i,a);if(!u.ok)return!1;let d=e.md.normalizeLink(u.str);if(!e.md.validateLink(d))return!1;i=u.pos;let f=i,p=o,m=i;for(;i<a;i++){let e=c.charCodeAt(i);if(e===10){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}else if(!L(e))break}let h=e.md.helpers.parseLinkTitle(c,i,a);for(;h.can_continue;){let t=s(o);if(t===null)break;c+=t,i=a,a=c.length,o++,h=e.md.helpers.parseLinkTitle(c,i,a,h)}let g;for(i<a&&m!==i&&h.ok?(g=h.str,i=h.pos):(g=``,i=f,o=p);i<a&&L(c.charCodeAt(i));)i++;if(i<a&&c.charCodeAt(i)!==10&&g)for(g=``,i=f,o=p;i<a&&L(c.charCodeAt(i));)i++;if(i<a&&c.charCodeAt(i)!==10)return!1;let _=at(c.slice(1,l));return _?r?!0:(e.env.references===void 0&&(e.env.references={}),e.env.references[_]===void 0&&(e.env.references[_]={title:g,href:d}),e.line=o,!0):!1}var Y=`address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul`.split(`.`),qt=RegExp(`^(?:<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^"'=<>\`\\x00-\\x20]+|'[^']*'|"[^"]*"))?)*\\s*\\/?>|<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>|<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->|<[?][\\s\\S]*?[?]>|<![A-Za-z][^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)`),Jt=RegExp(`^(?:<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^"'=<>\`\\x00-\\x20]+|'[^']*'|"[^"]*"))?)*\\s*\\/?>|<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>)`),Yt=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[RegExp(`^</?(`+Y.join(`|`)+`)(?=(\\s|/?>|$))`,`i`),/^$/,!0],[RegExp(Jt.source+`\\s*$`),/^$/,!1]];function Xt(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(i)!==60)return!1;let o=e.src.slice(i,a),s=0;for(;s<Yt.length&&!Yt[s][0].test(o);s++);if(s===Yt.length)return!1;if(r)return Yt[s][2];let c=t+1,l=Yt[s][1].test(``);if(!Yt[s][1].test(o)){for(;c<n&&!(e.sCount[c]<e.blkIndent&&(l||!e.isEmpty(c)));c++)if(i=e.bMarks[c]+e.tShift[c],a=e.eMarks[c],o=e.src.slice(i,a),Yt[s][1].test(o)){o.length!==0&&c++;break}}e.line=c;let u=e.push(`html_block`,``,0);return u.map=[t,c],u.content=e.getLines(t,c,e.blkIndent,!0),!0}function Zt(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let o=e.src.charCodeAt(i);if(o!==35||i>=a)return!1;let s=1;for(o=e.src.charCodeAt(++i);o===35&&i<a&&s<=6;)s++,o=e.src.charCodeAt(++i);if(s>6||i<a&&!L(o))return!1;if(r)return!0;a=e.skipSpacesBack(a,i);let c=e.skipCharsBack(a,35,i);c>i&&L(e.src.charCodeAt(c-1))&&(a=c),e.line=t+1;let l=e.push(`heading_open`,`h`+String(s),1);l.markup=`########`.slice(0,s),l.map=[t,e.line];let u=e.push(`inline`,``,0);u.content=st(e.src.slice(i,a)),u.map=[t,e.line],u.children=[];let d=e.push(`heading_close`,`h`+String(s),-1);return d.markup=`########`.slice(0,s),!0}function Qt(e,t,n){let r=e.md.block.ruler.getRules(`paragraph`);if(e.sCount[t]-e.blkIndent>=4)return!1;let i=e.parentType;e.parentType=`paragraph`;let a=0,o,s=t+1;for(;s<n&&!e.isEmpty(s);s++){if(e.sCount[s]-e.blkIndent>3)continue;if(e.sCount[s]>=e.blkIndent){let t=e.bMarks[s]+e.tShift[s],n=e.eMarks[s];if(t<n&&(o=e.src.charCodeAt(t),(o===45||o===61)&&(t=e.skipChars(t,o),t=e.skipSpaces(t),t>=n))){a=o===61?1:2;break}}if(e.sCount[s]<0)continue;let t=!1;for(let i=0,a=r.length;i<a;i++)if(r[i](e,s,n,!0)){t=!0;break}if(t)break}if(!a)return e.parentType=i,!1;let c=st(e.getLines(t,s,e.blkIndent,!1));e.line=s+1;let l=e.push(`heading_open`,`h`+String(a),1);l.markup=String.fromCharCode(o),l.map=[t,e.line];let u=e.push(`inline`,``,0);u.content=c,u.map=[t,e.line-1],u.children=[];let d=e.push(`heading_close`,`h`+String(a),-1);return d.markup=String.fromCharCode(o),e.parentType=i,!0}function $t(e,t,n){let r=e.md.block.ruler.getRules(`paragraph`),i=e.parentType,a=t+1;for(e.parentType=`paragraph`;a<n&&!e.isEmpty(a);a++){if(e.sCount[a]-e.blkIndent>3||e.sCount[a]<0)continue;let t=!1;for(let i=0,o=r.length;i<o;i++)if(r[i](e,a,n,!0)){t=!0;break}if(t)break}let o=st(e.getLines(t,a,e.blkIndent,!1));e.line=a;let s=e.push(`paragraph_open`,`p`,1);s.map=[t,e.line];let c=e.push(`inline`,``,0);return c.content=o,c.map=[t,e.line],c.children=[],e.push(`paragraph_close`,`p`,-1),e.parentType=i,!0}var en=[[`table`,Lt,[`paragraph`,`reference`]],[`code`,Rt],[`fence`,zt,[`paragraph`,`reference`,`blockquote`,`list`]],[`blockquote`,Bt,[`paragraph`,`reference`,`blockquote`,`list`]],[`hr`,Vt,[`paragraph`,`reference`,`blockquote`,`list`]],[`list`,Gt,[`paragraph`,`reference`,`blockquote`]],[`reference`,Kt],[`html_block`,Xt,[`paragraph`,`reference`,`blockquote`]],[`heading`,Zt,[`paragraph`,`reference`,`blockquote`]],[`lheading`,Qt],[`paragraph`,$t]];function tn(){this.ruler=new H;for(let e=0;e<en.length;e++)this.ruler.push(en[e][0],en[e][1],{alt:(en[e][2]||[]).slice()})}tn.prototype.tokenize=function(e,t,n){let r=this.ruler.getRules(``),i=r.length,a=e.md.options.maxNesting,o=t,s=!1;for(;o<n&&(e.line=o=e.skipEmptyLines(o),!(o>=n||e.sCount[o]<e.blkIndent));){if(e.level>=a){e.line=n;break}let t=e.line,c=!1;for(let a=0;a<i;a++)if(c=r[a](e,o,n,!1),c){if(t>=e.line)throw Error(`block rule didn't increment state.line`);break}if(!c)throw Error(`none of the block rules matched`);e.tight=!s,e.isEmpty(e.line-1)&&(s=!0),o=e.line,o<n&&e.isEmpty(o)&&(s=!0,o++,e.line=o)}},tn.prototype.parse=function(e,t,n,r){if(!e)return;let i=new this.State(e,t,n,r);this.tokenize(i,i.line,i.lineMax)},tn.prototype.State=q;function nn(e,t,n,r){this.src=e,this.env=n,this.md=t,this.tokens=r,this.tokens_meta=Array(r.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending=``,this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}nn.prototype.pushPending=function(){let e=new U(`text`,``,0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending=``,e},nn.prototype.push=function(e,t,n){this.pending&&this.pushPending();let r=new U(e,t,n),i=null;return n<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),r.level=this.level,n>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],i={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(r),this.tokens_meta.push(i),r},nn.prototype.scanDelims=function(e,t){let n=this.posMax,r=this.src.charCodeAt(e),i;if(e===0)i=32;else if(e===1)i=this.src.charCodeAt(0),(i&63488)==55296&&(i=65533);else if(i=this.src.charCodeAt(e-1),(i&64512)==56320){let t=this.src.charCodeAt(e-2);i=(t&64512)==55296?65536+(t-55296<<10)+(i-56320):65533}else(i&64512)==55296&&(i=65533);let a=e;for(;a<n&&this.src.charCodeAt(a)===r;)a++;let o=a-e,s=a<n?this.src.charCodeAt(a):32;if((s&64512)==55296){let e=this.src.charCodeAt(a+1);s=(e&64512)==56320?65536+(s-55296<<10)+(e-56320):65533}else(s&64512)==56320&&(s=65533);let c=it(i)||rt(i),l=it(s)||rt(s),u=tt(i),d=tt(s),f=!d&&(!l||u||c),p=!u&&(!c||d||l);return{can_open:f&&(t||!p||c),can_close:p&&(t||!f||l),length:o}},nn.prototype.Token=U;function rn(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function an(e,t){let n=e.pos;for(;n<e.posMax&&!rn(e.src.charCodeAt(n));)n++;return n!==e.pos&&(t||(e.pending+=e.src.slice(e.pos,n)),e.pos=n,!0)}var on=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function sn(e,t){if(!e.md.options.linkify||e.linkLevel>0)return!1;let n=e.pos,r=e.posMax;if(n+3>r||e.src.charCodeAt(n)!==58||e.src.charCodeAt(n+1)!==47||e.src.charCodeAt(n+2)!==47)return!1;let i=e.pending.match(on);if(!i)return!1;let a=i[1],o=e.md.linkify.matchAtStart(e.src.slice(n-a.length));if(!o)return!1;let s=o.url;if(s.length<=a.length)return!1;let c=s.length;for(;c>0&&s.charCodeAt(c-1)===42;)c--;c!==s.length&&(s=s.slice(0,c));let l=e.md.normalizeLink(s);if(!e.md.validateLink(l))return!1;if(!t){e.pending=e.pending.slice(0,-a.length);let t=e.push(`link_open`,`a`,1);t.attrs=[[`href`,l]],t.markup=`linkify`,t.info=`auto`;let n=e.push(`text`,``,0);n.content=e.md.normalizeLinkText(s);let r=e.push(`link_close`,`a`,-1);r.markup=`linkify`,r.info=`auto`}return e.pos+=s.length-a.length,!0}function cn(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==10)return!1;let r=e.pending.length-1,i=e.posMax;if(!t){if(r>=0&&e.pending.charCodeAt(r)===32){if(r>=1&&e.pending.charCodeAt(r-1)===32){let t=r-1;for(;t>=1&&e.pending.charCodeAt(t-1)===32;)t--;e.pending=e.pending.slice(0,t),e.push(`hardbreak`,`br`,0)}else e.pending=e.pending.slice(0,-1),e.push(`softbreak`,`br`,0)}else e.push(`softbreak`,`br`,0)}for(n++;n<i&&L(e.src.charCodeAt(n));)n++;return e.pos=n,!0}var ln=[];for(let e=0;e<256;e++)ln.push(0);`\\!"#$%&'()*+,./:;<=>?@[]^_\`{|}~-`.split(``).forEach(function(e){ln[e.charCodeAt(0)]=1});function un(e,t){let n=e.pos,r=e.posMax;if(e.src.charCodeAt(n)!==92||(n++,n>=r))return!1;let i=e.src.charCodeAt(n);if(i===10){for(t||e.push(`hardbreak`,`br`,0),n++;n<r&&(i=e.src.charCodeAt(n),L(i));)n++;return e.pos=n,!0}if(i===32){if(!t){let t=e.push(`text_special`,``,0);t.content=`\\`,t.markup=`\\`,t.info=`escape`}return e.pos=n,!0}let a=e.src[n];if(i>=55296&&i<=56319&&n+1<r){let t=e.src.charCodeAt(n+1);t>=56320&&t<=57343&&(a+=e.src[n+1],n++)}let o=`\\`+a;if(!t){let t=e.push(`text_special`,``,0);t.content=i<256&&ln[i]!==0?a:o,t.markup=o,t.info=`escape`}return e.pos=n+1,!0}function dn(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==96)return!1;let r=n;n++;let i=e.posMax;for(;n<i&&e.src.charCodeAt(n)===96;)n++;let a=e.src.slice(r,n),o=a.length;if(e.backticksScanned&&(e.backticks[o]||0)<=r)return t||(e.pending+=a),e.pos+=o,!0;let s=n,c;for(;(c=e.src.indexOf("`",s))!==-1;){for(s=c+1;s<i&&e.src.charCodeAt(s)===96;)s++;let r=s-c;if(r===o){if(!t){let t=e.push(`code_inline`,`code`,0);t.markup=a,t.content=e.src.slice(n,c).replace(/\n/g,` `).replace(/^ (.+) $/,`$1`)}return e.pos=s,!0}e.backticks[r]=c}return e.backticksScanned=!0,t||(e.pending+=a),e.pos+=o,!0}function fn(e,t){let n=e.pos,r=e.src.charCodeAt(n);if(t||r!==126)return!1;let i=e.scanDelims(e.pos,!0),a=i.length,o=String.fromCharCode(r);if(a<2)return!1;let s;a%2&&(s=e.push(`text`,``,0),s.content=o,a--);for(let t=0;t<a;t+=2)s=e.push(`text`,``,0),s.content=o+o,e.delimiters.push({marker:r,length:0,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close});return e.pos+=i.length,!0}function pn(e,t){let n,r=[],i=t.length;for(let a=0;a<i;a++){let i=t[a];if(i.marker!==126||i.end===-1)continue;let o=t[i.end];n=e.tokens[i.token],n.type=`s_open`,n.tag=`s`,n.nesting=1,n.markup=`~~`,n.content=``,n=e.tokens[o.token],n.type=`s_close`,n.tag=`s`,n.nesting=-1,n.markup=`~~`,n.content=``,e.tokens[o.token-1].type===`text`&&e.tokens[o.token-1].content===`~`&&r.push(o.token-1)}for(;r.length;){let t=r.pop(),i=t+1;for(;i<e.tokens.length&&e.tokens[i].type===`s_close`;)i++;i--,t!==i&&(n=e.tokens[i],e.tokens[i]=e.tokens[t],e.tokens[t]=n)}}function mn(e){let t=e.tokens_meta,n=e.tokens_meta.length;pn(e,e.delimiters);for(let r=0;r<n;r++)t[r]&&t[r].delimiters&&pn(e,t[r].delimiters)}var hn={tokenize:fn,postProcess:mn};function gn(e,t){let n=e.pos,r=e.src.charCodeAt(n);if(t||r!==95&&r!==42)return!1;let i=e.scanDelims(e.pos,r===42);for(let t=0;t<i.length;t++){let t=e.push(`text`,``,0);t.content=String.fromCharCode(r),e.delimiters.push({marker:r,length:i.length,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close})}return e.pos+=i.length,!0}function X(e,t){let n=t.length;for(let r=n-1;r>=0;r--){let n=t[r];if(n.marker!==95&&n.marker!==42||n.end===-1)continue;let i=t[n.end],a=r>0&&t[r-1].end===n.end+1&&t[r-1].marker===n.marker&&t[r-1].token===n.token-1&&t[n.end+1].token===i.token+1,o=String.fromCharCode(n.marker),s=e.tokens[n.token];s.type=a?`strong_open`:`em_open`,s.tag=a?`strong`:`em`,s.nesting=1,s.markup=a?o+o:o,s.content=``;let c=e.tokens[i.token];c.type=a?`strong_close`:`em_close`,c.tag=a?`strong`:`em`,c.nesting=-1,c.markup=a?o+o:o,c.content=``,a&&(e.tokens[t[r-1].token].content=``,e.tokens[t[n.end+1].token].content=``,r--)}}function _n(e){let t=e.tokens_meta,n=e.tokens_meta.length;X(e,e.delimiters);for(let r=0;r<n;r++)t[r]&&t[r].delimiters&&X(e,t[r].delimiters)}var vn={tokenize:gn,postProcess:_n};function yn(e,t){let n,r,i,a,o=``,s=``,c=e.pos,l=!0;if(e.src.charCodeAt(e.pos)!==91)return!1;let u=e.pos,d=e.posMax,f=e.pos+1,p=e.md.helpers.parseLinkLabel(e,e.pos,!0);if(p<0)return!1;let m=p+1;if(m<d&&e.src.charCodeAt(m)===40){for(l=!1,m++;m<d&&(n=e.src.charCodeAt(m),!(!L(n)&&n!==10));m++);if(m>=d)return!1;if(c=m,i=e.md.helpers.parseLinkDestination(e.src,m,e.posMax),i.ok){for(o=e.md.normalizeLink(i.str),e.md.validateLink(o)?m=i.pos:o=``,c=m;m<d&&(n=e.src.charCodeAt(m),!(!L(n)&&n!==10));m++);if(i=e.md.helpers.parseLinkTitle(e.src,m,e.posMax),m<d&&c!==m&&i.ok)for(s=i.str,m=i.pos;m<d&&(n=e.src.charCodeAt(m),!(!L(n)&&n!==10));m++);}(m>=d||e.src.charCodeAt(m)!==41)&&(l=!0),m++}if(l){if(e.env.references===void 0)return!1;if(m<d&&e.src.charCodeAt(m)===91?(c=m+1,m=e.md.helpers.parseLinkLabel(e,m),m>=0?r=e.src.slice(c,m++):m=p+1):m=p+1,r||=e.src.slice(f,p),a=e.env.references[at(r)],!a)return e.pos=u,!1;o=a.href,s=a.title}if(!t){e.pos=f,e.posMax=p;let t=e.push(`link_open`,`a`,1),n=[[`href`,o]];t.attrs=n,s&&n.push([`title`,s]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,e.push(`link_close`,`a`,-1)}return e.pos=m,e.posMax=d,!0}function bn(e,t){let n,r,i,a,o,s,c,l,u=``,d=e.pos,f=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91)return!1;let p=e.pos+2,m=e.md.helpers.parseLinkLabel(e,e.pos+1,!1);if(m<0)return!1;if(a=m+1,a<f&&e.src.charCodeAt(a)===40){for(a++;a<f&&(n=e.src.charCodeAt(a),!(!L(n)&&n!==10));a++);if(a>=f)return!1;for(l=a,s=e.md.helpers.parseLinkDestination(e.src,a,e.posMax),s.ok&&(u=e.md.normalizeLink(s.str),e.md.validateLink(u)?a=s.pos:u=``),l=a;a<f&&(n=e.src.charCodeAt(a),!(!L(n)&&n!==10));a++);if(s=e.md.helpers.parseLinkTitle(e.src,a,e.posMax),a<f&&l!==a&&s.ok)for(c=s.str,a=s.pos;a<f&&(n=e.src.charCodeAt(a),!(!L(n)&&n!==10));a++);else c=``;if(a>=f||e.src.charCodeAt(a)!==41)return e.pos=d,!1;a++}else{if(e.env.references===void 0)return!1;if(a<f&&e.src.charCodeAt(a)===91?(l=a+1,a=e.md.helpers.parseLinkLabel(e,a),a>=0?i=e.src.slice(l,a++):a=m+1):a=m+1,i||=e.src.slice(p,m),o=e.env.references[at(i)],!o)return e.pos=d,!1;u=o.href,c=o.title}if(!t){r=e.src.slice(p,m);let t=[];e.md.inline.parse(r,e.md,e.env,t);let n=e.push(`image`,`img`,0),i=[[`src`,u],[`alt`,``]];n.attrs=i,n.children=t,n.content=r,c&&i.push([`title`,c])}return e.pos=a,e.posMax=f,!0}var xn=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,Sn=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function Cn(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==60)return!1;let r=e.pos,i=e.posMax;for(;;){if(++n>=i)return!1;let t=e.src.charCodeAt(n);if(t===60)return!1;if(t===62)break}let a=e.src.slice(r+1,n);if(Sn.test(a)){let n=e.md.normalizeLink(a);if(!e.md.validateLink(n))return!1;if(!t){let t=e.push(`link_open`,`a`,1);t.attrs=[[`href`,n]],t.markup=`autolink`,t.info=`auto`;let r=e.push(`text`,``,0);r.content=e.md.normalizeLinkText(a);let i=e.push(`link_close`,`a`,-1);i.markup=`autolink`,i.info=`auto`}return e.pos+=a.length+2,!0}if(xn.test(a)){let n=e.md.normalizeLink(`mailto:`+a);if(!e.md.validateLink(n))return!1;if(!t){let t=e.push(`link_open`,`a`,1);t.attrs=[[`href`,n]],t.markup=`autolink`,t.info=`auto`;let r=e.push(`text`,``,0);r.content=e.md.normalizeLinkText(a);let i=e.push(`link_close`,`a`,-1);i.markup=`autolink`,i.info=`auto`}return e.pos+=a.length+2,!0}return!1}function wn(e){return/^<a[>\s]/i.test(e)}function Tn(e){return/^<\/a\s*>/i.test(e)}function En(e){let t=e|32;return t>=97&&t<=122}function Dn(e,t){if(!e.md.options.html)return!1;let n=e.posMax,r=e.pos;if(e.src.charCodeAt(r)!==60||r+2>=n)return!1;let i=e.src.charCodeAt(r+1);if(i!==33&&i!==63&&i!==47&&!En(i))return!1;let a=e.src.slice(r).match(qt);if(!a)return!1;if(!t){let t=e.push(`html_inline`,``,0);t.content=a[0],wn(t.content)&&e.linkLevel++,Tn(t.content)&&e.linkLevel--}return e.pos+=a[0].length,!0}var On=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,kn=/^&([a-z][a-z0-9]{1,31});/i;function An(e,t){let n=e.pos,r=e.posMax;if(e.src.charCodeAt(n)!==38||n+1>=r)return!1;if(e.src.charCodeAt(n+1)===35){let r=e.src.slice(n).match(On);if(r){if(!t){let t=r[1][0].toLowerCase()===`x`?parseInt(r[1].slice(1),16):parseInt(r[1],10),n=e.push(`text_special`,``,0);n.content=Ve(t)?I(t):I(65533),n.markup=r[0],n.info=`entity`}return e.pos+=r[0].length,!0}}else{let r=e.src.slice(n).match(kn);if(r){let n=Fe(r[0]);if(n!==r[0]){if(!t){let t=e.push(`text_special`,``,0);t.content=n,t.markup=r[0],t.info=`entity`}return e.pos+=r[0].length,!0}}}return!1}function jn(e){let t={},n=e.length;if(!n)return;let r=0,i=-2,a=[];for(let o=0;o<n;o++){let n=e[o];if(a.push(0),(e[r].marker!==n.marker||i!==n.token-1)&&(r=o),i=n.token,n.length=n.length||0,!n.close)continue;t.hasOwnProperty(n.marker)||(t[n.marker]=[-1,-1,-1,-1,-1,-1]);let s=t[n.marker][(n.open?3:0)+n.length%3],c=r-a[r]-1,l=c;for(;c>s;c-=a[c]+1){let t=e[c];if(t.marker===n.marker&&t.open&&t.end<0){let r=!1;if((t.close||n.open)&&(t.length+n.length)%3==0&&(t.length%3!=0||n.length%3!=0)&&(r=!0),!r){let r=c>0&&!e[c-1].open?a[c-1]+1:0;a[o]=o-c+r,a[c]=r,n.open=!1,t.end=o,t.close=!1,l=-1,i=-2;break}}}l!==-1&&(t[n.marker][(n.open?3:0)+(n.length||0)%3]=l)}}function Mn(e){let t=e.tokens_meta,n=e.tokens_meta.length;jn(e.delimiters);for(let e=0;e<n;e++)t[e]&&t[e].delimiters&&jn(t[e].delimiters)}function Nn(e){let t,n,r=0,i=e.tokens,a=e.tokens.length;for(t=n=0;t<a;t++)i[t].nesting<0&&r--,i[t].level=r,i[t].nesting>0&&r++,i[t].type===`text`&&t+1<a&&i[t+1].type===`text`?i[t+1].content=i[t].content+i[t+1].content:(t!==n&&(i[n]=i[t]),n++);t!==n&&(i.length=n)}var Pn=[[`text`,an],[`linkify`,sn],[`newline`,cn],[`escape`,un],[`backticks`,dn],[`strikethrough`,hn.tokenize],[`emphasis`,vn.tokenize],[`link`,yn],[`image`,bn],[`autolink`,Cn],[`html_inline`,Dn],[`entity`,An]],Fn=[[`balance_pairs`,Mn],[`strikethrough`,hn.postProcess],[`emphasis`,vn.postProcess],[`fragments_join`,Nn]];function In(){this.ruler=new H;for(let e=0;e<Pn.length;e++)this.ruler.push(Pn[e][0],Pn[e][1]);this.ruler2=new H;for(let e=0;e<Fn.length;e++)this.ruler2.push(Fn[e][0],Fn[e][1])}In.prototype.skipToken=function(e){let t=e.pos,n=this.ruler.getRules(``),r=n.length,i=e.md.options.maxNesting,a=e.cache;if(a[t]!==void 0){e.pos=a[t];return}let o=!1;if(e.level<i){for(let i=0;i<r;i++)if(e.level++,o=n[i](e,!0),e.level--,o){if(t>=e.pos)throw Error(`inline rule didn't increment state.pos`);break}}else e.pos=e.posMax;o||e.pos++,a[t]=e.pos},In.prototype.tokenize=function(e){let t=this.ruler.getRules(``),n=t.length,r=e.posMax,i=e.md.options.maxNesting;for(;e.pos<r;){let a=e.pos,o=!1;if(e.level<i){for(let r=0;r<n;r++)if(o=t[r](e,!1),o){if(a>=e.pos)throw Error(`inline rule didn't increment state.pos`);break}}if(o){if(e.pos>=r)break;continue}e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()},In.prototype.parse=function(e,t,n,r){let i=new this.State(e,t,n,r);this.tokenize(i);let a=this.ruler2.getRules(``),o=a.length;for(let e=0;e<o;e++)a[e](i)},In.prototype.State=nn;function Ln(e){let t={};e||={},t.src_Any=O.source,t.src_Cc=he.source,t.src_Z=ve.source,t.src_P=ge.source,t.src_ZPCc=[t.src_Z,t.src_P,t.src_Cc].join(`|`),t.src_ZCc=[t.src_Z,t.src_Cc].join(`|`);let n=`[><｜]`;return t.src_pseudo_letter=`(?:(?!${n}|${t.src_ZPCc})${t.src_Any})`,t.src_ip4=`(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)`,t.src_auth=`(?:(?:(?!${t.src_ZCc}|[@/\\[\\]()]).){1,50}@)?`,t.src_port=`(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?`,t.src_host_terminator=`(?=$|${n}|${t.src_ZPCc})(?!${e[`---`]?`-(?!--)|`:`-|`}_|:\\d|\\.-|\\.(?!$|${t.src_ZPCc}))`,t.src_path=`(?:[/?#](?:(?!${t.src_ZCc}|${n}|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!${t.src_ZCc}|\\]).)*\\]|\\((?:(?!${t.src_ZCc}|[)]).)*\\)|\\{(?:(?!${t.src_ZCc}|[}]).)*\\}|\\"(?:(?!${t.src_ZCc}|["]).)+\\"|\\'(?:(?!${t.src_ZCc}|[']).)+\\'|\\'(?=${t.src_pseudo_letter}|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!${t.src_ZCc}|[.]|$)|`+(e[`---`]?`\\-(?!--(?:[^-]|$))(?:-*)|`:`\\-+|`)+`,(?!${t.src_ZCc}|$)|;(?!${t.src_ZCc}|$)|\\!+(?!${t.src_ZCc}|[!]|$)|\\?(?!${t.src_ZCc}|[?]|$))+|\\/)?`,t.src_email_name=`[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]{0,63}`,t.src_xn=`xn--[a-z0-9\\-]{1,59}`,t.src_domain_root=`(?:`+t.src_xn+`|${t.src_pseudo_letter}{1,63})`,t.src_domain=`(?:`+t.src_xn+`|(?:${t.src_pseudo_letter})|(?:${t.src_pseudo_letter}(?:-|${t.src_pseudo_letter}){0,61}${t.src_pseudo_letter}))`,t.src_host=`(?:(?:(?:(?:${t.src_domain})\\.)*${t.src_domain}))`,t.tpl_host_fuzzy=`(?:`+t.src_ip4+`|(?:(?:(?:${t.src_domain})\\.)+(?:%TLDS%)))`,t.tpl_host_no_ip_fuzzy=`(?:(?:(?:${t.src_domain})\\.)+(?:%TLDS%))`,t.src_host_strict=t.src_host+t.src_host_terminator,t.tpl_host_fuzzy_strict=t.tpl_host_fuzzy+t.src_host_terminator,t.src_host_port_strict=t.src_host+t.src_port+t.src_host_terminator,t.tpl_host_port_fuzzy_strict=t.tpl_host_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_port_no_ip_fuzzy_strict=t.tpl_host_no_ip_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_fuzzy_test=`localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:${t.src_ZPCc}|>|$))`,t.tpl_email_fuzzy=`(^|${n}|"|\\(|${t.src_ZCc})(${t.src_email_name}@${t.tpl_host_fuzzy_strict})`,t.tpl_link_fuzzy=`(^|(?![.:/\\-_@])(?:[$+<=>^\`|\uff5c]|${t.src_ZPCc}))((?![$+<=>^\`|\uff5c])${t.tpl_host_port_fuzzy_strict}${t.src_path})`,t.tpl_link_no_ip_fuzzy=`(^|(?![.:/\\-_@])(?:[$+<=>^\`|\uff5c]|${t.src_ZPCc}))((?![$+<=>^\`|\uff5c])${t.tpl_host_port_no_ip_fuzzy_strict}${t.src_path})`,t}function Rn(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){t&&Object.keys(t).forEach(function(n){e[n]=t[n]})}),e}function zn(e){return Object.prototype.toString.call(e)}function Bn(e){return zn(e)===`[object String]`}function Vn(e){return zn(e)===`[object Object]`}function Hn(e){return zn(e)===`[object RegExp]`}function Un(e){return zn(e)===`[object Function]`}function Wn(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,`\\$&`)}var Gn={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function Kn(e){return Object.keys(e||{}).reduce(function(e,t){return e||Gn.hasOwnProperty(t)},!1)}var qn={"http:":{validate:function(e,t,n){let r=e.slice(t);return n.re.http||(n.re.http=RegExp(`^\\/\\/${n.re.src_auth}${n.re.src_host_port_strict}${n.re.src_path}`,`i`)),n.re.http.test(r)?r.match(n.re.http)[0].length:0}},"https:":`http:`,"ftp:":`http:`,"//":{validate:function(e,t,n){let r=e.slice(t);return n.re.no_http||(n.re.no_http=RegExp(`^`+n.re.src_auth+`(?:localhost|(?:(?:${n.re.src_domain})\\.)+${n.re.src_domain_root})`+n.re.src_port+n.re.src_host_terminator+n.re.src_path,`i`)),n.re.no_http.test(r)?t>=3&&e[t-3]===`:`||t>=3&&e[t-3]===`/`?0:r.match(n.re.no_http)[0].length:0}},"mailto:":{validate:function(e,t,n){let r=e.slice(t);return n.re.mailto||(n.re.mailto=RegExp(`^${n.re.src_email_name}@${n.re.src_host_strict}`,`i`)),n.re.mailto.test(r)?r.match(n.re.mailto)[0].length:0}}},Jn=`a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]`,Yn=`biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф`.split(`|`);function Xn(e){return function(t,n){let r=t.slice(n);return e.test(r)?r.match(e)[0].length:0}}function Zn(){return function(e,t){t.normalize(e)}}function Qn(e){let t=e.re=Ln(e.__opts__),n=e.__tlds__.slice();e.onCompile(),e.__tlds_replaced__||n.push(Jn),n.push(t.src_xn),t.src_tlds=n.join(`|`);function r(e){return e.replace(`%TLDS%`,t.src_tlds)}t.email_fuzzy=RegExp(r(t.tpl_email_fuzzy),`i`),t.email_fuzzy_global=RegExp(r(t.tpl_email_fuzzy),`ig`),t.link_fuzzy=RegExp(r(t.tpl_link_fuzzy),`i`),t.link_fuzzy_global=RegExp(r(t.tpl_link_fuzzy),`ig`),t.link_no_ip_fuzzy=RegExp(r(t.tpl_link_no_ip_fuzzy),`i`),t.link_no_ip_fuzzy_global=RegExp(r(t.tpl_link_no_ip_fuzzy),`ig`),t.host_fuzzy_test=RegExp(r(t.tpl_host_fuzzy_test),`i`);let i=[];e.__compiled__={};function a(e,t){throw Error(`(LinkifyIt) Invalid schema "${e}": ${t}`)}Object.keys(e.__schemas__).forEach(function(t){let n=e.__schemas__[t];if(n===null)return;let r={validate:null,link:null};if(e.__compiled__[t]=r,Vn(n)){Hn(n.validate)?r.validate=Xn(n.validate):Un(n.validate)?r.validate=n.validate:a(t,n),Un(n.normalize)?r.normalize=n.normalize:n.normalize?a(t,n):r.normalize=Zn();return}if(Bn(n)){i.push(t);return}a(t,n)}),i.forEach(function(t){e.__compiled__[e.__schemas__[t]]&&(e.__compiled__[t].validate=e.__compiled__[e.__schemas__[t]].validate,e.__compiled__[t].normalize=e.__compiled__[e.__schemas__[t]].normalize)}),e.__compiled__[``]={validate:null,normalize:Zn()};let o=Object.keys(e.__compiled__).filter(function(t){return t.length>0&&e.__compiled__[t]}).map(Wn).join(`|`);e.re.schema_test=RegExp(`(^|(?!_)(?:[><\uff5c]|${t.src_ZPCc}))(${o})`,`i`),e.re.schema_search=RegExp(`(^|(?!_)(?:[><\uff5c]|${t.src_ZPCc}))(${o})`,`ig`),e.re.schema_at_start=RegExp(`^${e.re.schema_search.source}`,`i`),e.re.pretest=RegExp(`(${e.re.schema_test.source})|(${e.re.host_fuzzy_test.source})|@`,`i`)}function $n(e,t,n,r){let i=e.slice(n,r);this.schema=t.toLowerCase(),this.index=n,this.lastIndex=r,this.raw=i,this.text=i,this.url=i}function Z(e,t){if(!(this instanceof Z))return new Z(e,t);t||Kn(e)&&(t=e,e={}),this.__opts__=Rn({},Gn,t),this.__schemas__=Rn({},qn,e),this.__compiled__={},this.__tlds__=Yn,this.__tlds_replaced__=!1,this.re={},Qn(this)}Z.prototype.add=function(e,t){return this.__schemas__[e]=t,Qn(this),this},Z.prototype.set=function(e){return this.__opts__=Rn(this.__opts__,e),this},Z.prototype.test=function(e){if(!e.length)return!1;let t,n;if(this.re.schema_test.test(e)){for(n=this.re.schema_search,n.lastIndex=0;(t=n.exec(e))!==null;)if(this.testSchemaAt(e,t[2],n.lastIndex))return!0}return!!(this.__opts__.fuzzyLink&&this.__compiled__[`http:`]&&e.search(this.re.host_fuzzy_test)>=0&&e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy)!==null||this.__opts__.fuzzyEmail&&this.__compiled__[`mailto:`]&&e.indexOf(`@`)>=0&&e.match(this.re.email_fuzzy)!==null)},Z.prototype.pretest=function(e){return this.re.pretest.test(e)},Z.prototype.testSchemaAt=function(e,t,n){return this.__compiled__[t.toLowerCase()]?this.__compiled__[t.toLowerCase()].validate(e,n,this):0},Z.prototype.match=function(e){let t=[],n=[],r=[],i=[],a,o,s;function c(e,t){return e?t?e.index===t.index?e.lastIndex>=t.lastIndex?e:t:e.index<t.index?e:t:e:t}if(!e.length)return null;if(this.re.schema_test.test(e))for(s=this.re.schema_search,s.lastIndex=0;(a=s.exec(e))!==null;)o=this.testSchemaAt(e,a[2],s.lastIndex),o&&n.push({schema:a[2],index:a.index+a[1].length,lastIndex:a.index+a[0].length+o});if(this.__opts__.fuzzyLink&&this.__compiled__[`http:`])for(s=this.__opts__.fuzzyIP?this.re.link_fuzzy_global:this.re.link_no_ip_fuzzy_global,s.lastIndex=0;(a=s.exec(e))!==null;)r.push({schema:``,index:a.index+a[1].length,lastIndex:a.index+a[0].length});if(this.__opts__.fuzzyEmail&&this.__compiled__[`mailto:`])for(s=this.re.email_fuzzy_global,s.lastIndex=0;(a=s.exec(e))!==null;)i.push({schema:`mailto:`,index:a.index+a[1].length,lastIndex:a.index+a[0].length});let l=[0,0,0],u=0;for(;;){let a=[n[l[0]],i[l[1]],r[l[2]]],o=c(c(a[0],a[1]),a[2]);if(!o)break;if(o===a[0]?l[0]++:o===a[1]?l[1]++:l[2]++,o.index<u)continue;let s=new $n(e,o.schema,o.index,o.lastIndex);this.__compiled__[s.schema].normalize(s,this),t.push(s),u=o.lastIndex}return t.length?t:null},Z.prototype.matchAtStart=function(e){if(!e.length)return null;let t=this.re.schema_at_start.exec(e);if(!t)return null;let n=this.testSchemaAt(e,t[2],t[0].length);if(!n)return null;let r=new $n(e,t[2],t.index+t[1].length,t.index+t[0].length+n);return this.__compiled__[r.schema].normalize(r,this),r},Z.prototype.tlds=function(e,t){return e=Array.isArray(e)?e:[e],t?(this.__tlds__=this.__tlds__.concat(e).sort().filter(function(e,t,n){return e!==n[t-1]}).reverse(),Qn(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,Qn(this),this)},Z.prototype.normalize=function(e){e.schema||(e.url=`http://${e.url}`),e.schema===`mailto:`&&!/^mailto:/i.test(e.url)&&(e.url=`mailto:${e.url}`)},Z.prototype.onCompile=function(){};var er=2147483647,tr=36,nr=1,rr=26,ir=38,ar=700,or=72,sr=128,cr=`-`,lr=/^xn--/,ur=/[^\0-\x7F]/,dr=/[\x2E\u3002\uFF0E\uFF61]/g,fr={overflow:`Overflow: input needs wider integers to process`,"not-basic":`Illegal input >= 0x80 (not a basic code point)`,"invalid-input":`Invalid input`},pr=35,Q=Math.floor,mr=String.fromCharCode;function hr(e){throw RangeError(fr[e])}function gr(e,t){let n=[],r=e.length;for(;r--;)n[r]=t(e[r]);return n}function _r(e,t){let n=e.split(`@`),r=``;n.length>1&&(r=n[0]+`@`,e=n[1]),e=e.replace(dr,`.`);let i=gr(e.split(`.`),t).join(`.`);return r+i}function vr(e){let t=[],n=0,r=e.length;for(;n<r;){let i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){let r=e.charCodeAt(n++);(r&64512)==56320?t.push(((i&1023)<<10)+(r&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}var yr=e=>String.fromCodePoint(...e),br=function(e){return e>=48&&e<58?26+(e-48):e>=65&&e<91?e-65:e>=97&&e<123?e-97:tr},xr=function(e,t){return e+22+75*(e<26)-((t!=0)<<5)},Sr=function(e,t,n){let r=0;for(e=n?Q(e/ar):e>>1,e+=Q(e/t);e>455;r+=tr)e=Q(e/pr);return Q(r+36*e/(e+ir))},Cr=function(e){let t=[],n=e.length,r=0,i=sr,a=or,o=e.lastIndexOf(cr);o<0&&(o=0);for(let n=0;n<o;++n)e.charCodeAt(n)>=128&&hr(`not-basic`),t.push(e.charCodeAt(n));for(let s=o>0?o+1:0;s<n;){let o=r;for(let t=1,i=tr;;i+=tr){s>=n&&hr(`invalid-input`);let o=br(e.charCodeAt(s++));o>=tr&&hr(`invalid-input`),o>Q((er-r)/t)&&hr(`overflow`),r+=o*t;let c=i<=a?nr:i>=a+rr?rr:i-a;if(o<c)break;let l=tr-c;t>Q(er/l)&&hr(`overflow`),t*=l}let c=t.length+1;a=Sr(r-o,c,o==0),Q(r/c)>er-i&&hr(`overflow`),i+=Q(r/c),r%=c,t.splice(r++,0,i)}return String.fromCodePoint(...t)},wr=function(e){let t=[];e=vr(e);let n=e.length,r=sr,i=0,a=or;for(let n of e)n<128&&t.push(mr(n));let o=t.length,s=o;for(o&&t.push(cr);s<n;){let n=er;for(let t of e)t>=r&&t<n&&(n=t);let c=s+1;n-r>Q((er-i)/c)&&hr(`overflow`),i+=(n-r)*c,r=n;for(let n of e)if(n<r&&++i>er&&hr(`overflow`),n===r){let e=i;for(let n=tr;;n+=tr){let r=n<=a?nr:n>=a+rr?rr:n-a;if(e<r)break;let i=e-r,o=tr-r;t.push(mr(xr(r+i%o,0))),e=Q(i/o)}t.push(mr(xr(e,0))),a=Sr(i,c,s===o),i=0,++s}++i,++r}return t.join(``)},Tr={version:`2.3.1`,ucs2:{decode:vr,encode:yr},decode:Cr,encode:wr,toASCII:function(e){return _r(e,function(e){return ur.test(e)?`xn--`+wr(e):e})},toUnicode:function(e){return _r(e,function(e){return lr.test(e)?Cr(e.slice(4).toLowerCase()):e})}},Er={default:{options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:`language-`,linkify:!1,typographer:!1,quotes:`“”‘’`,highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},zero:{options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:`language-`,linkify:!1,typographer:!1,quotes:`“”‘’`,highlight:null,maxNesting:20},components:{core:{rules:[`normalize`,`block`,`inline`,`text_join`]},block:{rules:[`paragraph`]},inline:{rules:[`text`],rules2:[`balance_pairs`,`fragments_join`]}}},commonmark:{options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:`language-`,linkify:!1,typographer:!1,quotes:`“”‘’`,highlight:null,maxNesting:20},components:{core:{rules:[`normalize`,`block`,`inline`,`text_join`]},block:{rules:[`blockquote`,`code`,`fence`,`heading`,`hr`,`html_block`,`lheading`,`list`,`reference`,`paragraph`]},inline:{rules:[`autolink`,`backticks`,`emphasis`,`entity`,`escape`,`html_inline`,`image`,`link`,`newline`,`text`],rules2:[`balance_pairs`,`emphasis`,`fragments_join`]}}}},Dr=/^(vbscript|javascript|file|data):/,Or=/^data:image\/(gif|png|jpeg|webp);/;function kr(e){let t=e.trim().toLowerCase();return!Dr.test(t)||Or.test(t)}var Ar=[`http:`,`https:`,`mailto:`];function jr(e){let t=E(e,!0);if(t.hostname&&(!t.protocol||Ar.indexOf(t.protocol)>=0))try{t.hostname=Tr.toASCII(t.hostname)}catch{}return x(se(t))}function Mr(e){let t=E(e,!0);if(t.hostname&&(!t.protocol||Ar.indexOf(t.protocol)>=0))try{t.hostname=Tr.toUnicode(t.hostname)}catch{}return b(se(t),b.defaultChars+`%`)}function $(e,t){if(!(this instanceof $))return new $(e,t);t||P(e)||(t=e||{},e=`default`),this.inline=new In,this.block=new tn,this.core=new Pt,this.renderer=new V,this.linkify=new Z,this.validateLink=kr,this.normalizeLink=jr,this.normalizeLinkText=Mr,this.utils=Ie,this.helpers=Be({},z),this.options={},this.configure(e),t&&this.set(t)}$.prototype.set=function(e){return Be(this.options,e),this},$.prototype.configure=function(e){let t=this;if(P(e)){let t=e;if(e=Er[t],!e)throw Error('Wrong `markdown-it` preset "'+t+`", check name`)}if(!e)throw Error("Wrong `markdown-it` preset, can't be empty");return e.options&&t.set(e.options),e.components&&Object.keys(e.components).forEach(function(n){e.components[n].rules&&t[n].ruler.enableOnly(e.components[n].rules),e.components[n].rules2&&t[n].ruler2.enableOnly(e.components[n].rules2)}),this},$.prototype.enable=function(e,t){let n=[];Array.isArray(e)||(e=[e]),[`core`,`block`,`inline`].forEach(function(t){n=n.concat(this[t].ruler.enable(e,!0))},this),n=n.concat(this.inline.ruler2.enable(e,!0));let r=e.filter(function(e){return n.indexOf(e)<0});if(r.length&&!t)throw Error(`MarkdownIt. Failed to enable unknown rule(s): `+r);return this},$.prototype.disable=function(e,t){let n=[];Array.isArray(e)||(e=[e]),[`core`,`block`,`inline`].forEach(function(t){n=n.concat(this[t].ruler.disable(e,!0))},this),n=n.concat(this.inline.ruler2.disable(e,!0));let r=e.filter(function(e){return n.indexOf(e)<0});if(r.length&&!t)throw Error(`MarkdownIt. Failed to disable unknown rule(s): `+r);return this},$.prototype.use=function(e){let t=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,t),this},$.prototype.parse=function(e,t){if(typeof e!=`string`)throw Error(`Input data should be a String`);let n=new this.core.State(e,this,t);return this.core.process(n),n.tokens},$.prototype.render=function(e,t){return t||={},this.renderer.render(this.parse(e,t),this.options,t)},$.prototype.parseInline=function(e,t){let n=new this.core.State(e,this,t);return n.inlineMode=!0,this.core.process(n),n.tokens},$.prototype.renderInline=function(e,t){return t||={},this.renderer.render(this.parseInline(e,t),this.options,t)};var Nr=p(((e,t)=>{function n(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function r(e){if(Array.isArray(e))return e}function i(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function a(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function o(e,t){return r(e)||i(e,t)||s(e,t)||a()}function s(e,t){if(e){if(typeof e==`string`)return n(e,t);var r={}.toString.call(e).slice(8,-1);return r===`Object`&&e.constructor&&(r=e.constructor.name),r===`Map`||r===`Set`?Array.from(e):r===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}var c=Object.entries,l=Object.setPrototypeOf,u=Object.isFrozen,d=Object.getPrototypeOf,f=Object.getOwnPropertyDescriptor,p=Object.freeze,m=Object.seal,h=Object.create,g=typeof Reflect<`u`&&Reflect,_=g.apply,v=g.construct;p||=function(e){return e},m||=function(e){return e},_||=function(e,t){var n=[...arguments].slice(2);return e.apply(t,n)},v||=function(e){return new e(...[...arguments].slice(1))};var y=T(Array.prototype.forEach),ee=T(Array.prototype.lastIndexOf),te=T(Array.prototype.pop),ne=T(Array.prototype.push),re=T(Array.prototype.splice),ie=Array.isArray,b=T(String.prototype.toLowerCase),ae=T(String.prototype.toString),oe=T(String.prototype.match),x=T(String.prototype.replace),se=T(String.prototype.indexOf),ce=T(String.prototype.trim),le=T(Number.prototype.toString),ue=T(Boolean.prototype.toString),de=typeof BigInt>`u`?null:T(BigInt.prototype.toString),fe=typeof Symbol>`u`?null:T(Symbol.prototype.toString),S=T(Object.prototype.hasOwnProperty),C=T(Object.prototype.toString),w=T(RegExp.prototype.test),pe=me(TypeError);function T(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);var n=[...arguments].slice(1);return _(e,t,n)}}function me(e){return function(){return v(e,[...arguments])}}function E(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:b;if(l&&l(e,null),!ie(t))return e;let r=t.length;for(;r--;){let i=t[r];if(typeof i==`string`){let e=n(i);e!==i&&(u(t)||(t[r]=e),i=e)}e[i]=!0}return e}function D(e){for(let t=0;t<e.length;t++)S(e,t)||(e[t]=null);return e}function O(e){let t=h(null);for(let r of c(e)){var n=o(r,2);let i=n[0],a=n[1];S(e,i)&&(t[i]=ie(a)?D(a):a&&typeof a==`object`&&a.constructor===Object?O(a):a)}return t}function he(e){switch(typeof e){case`string`:return e;case`number`:return le(e);case`boolean`:return ue(e);case`bigint`:return de?de(e):`0`;case`symbol`:return fe?fe(e):`Symbol()`;case`undefined`:return C(e);case`function`:case`object`:{if(e===null)return C(e);let t=e,n=k(t,`toString`);if(typeof n==`function`){let e=n(t);return typeof e==`string`?e:C(e)}return C(e)}default:return C(e)}}function k(e,t){for(;e!==null;){let n=f(e,t);if(n){if(n.get)return T(n.get);if(typeof n.value==`function`)return T(n.value)}e=d(e)}function n(){return null}return n}function ge(e){try{return w(e,``),!0}catch{return!1}}var _e=p(`a.abbr.acronym.address.area.article.aside.audio.b.bdi.bdo.big.blink.blockquote.body.br.button.canvas.caption.center.cite.code.col.colgroup.content.data.datalist.dd.decorator.del.details.dfn.dialog.dir.div.dl.dt.element.em.fieldset.figcaption.figure.font.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.img.input.ins.kbd.label.legend.li.main.map.mark.marquee.menu.menuitem.meter.nav.nobr.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.shadow.slot.small.source.spacer.span.strike.strong.style.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.track.tt.u.ul.var.video.wbr`.split(`.`)),ve=p(`svg.a.altglyph.altglyphdef.altglyphitem.animatecolor.animatemotion.animatetransform.circle.clippath.defs.desc.ellipse.enterkeyhint.exportparts.filter.font.g.glyph.glyphref.hkern.image.inputmode.line.lineargradient.marker.mask.metadata.mpath.part.path.pattern.polygon.polyline.radialgradient.rect.stop.style.switch.symbol.text.textpath.title.tref.tspan.view.vkern`.split(`.`)),ye=p([`feBlend`,`feColorMatrix`,`feComponentTransfer`,`feComposite`,`feConvolveMatrix`,`feDiffuseLighting`,`feDisplacementMap`,`feDistantLight`,`feDropShadow`,`feFlood`,`feFuncA`,`feFuncB`,`feFuncG`,`feFuncR`,`feGaussianBlur`,`feImage`,`feMerge`,`feMergeNode`,`feMorphology`,`feOffset`,`fePointLight`,`feSpecularLighting`,`feSpotLight`,`feTile`,`feTurbulence`]),be=p([`animate`,`color-profile`,`cursor`,`discard`,`font-face`,`font-face-format`,`font-face-name`,`font-face-src`,`font-face-uri`,`foreignobject`,`hatch`,`hatchpath`,`mesh`,`meshgradient`,`meshpatch`,`meshrow`,`missing-glyph`,`script`,`set`,`solidcolor`,`unknown`,`use`]),xe=p(`math.menclose.merror.mfenced.mfrac.mglyph.mi.mlabeledtr.mmultiscripts.mn.mo.mover.mpadded.mphantom.mroot.mrow.ms.mspace.msqrt.mstyle.msub.msup.msubsup.mtable.mtd.mtext.mtr.munder.munderover.mprescripts`.split(`.`)),Se=p([`maction`,`maligngroup`,`malignmark`,`mlongdiv`,`mscarries`,`mscarry`,`msgroup`,`mstack`,`msline`,`msrow`,`semantics`,`annotation`,`annotation-xml`,`mprescripts`,`none`]),Ce=p([`#text`]),we=p(`accept.action.align.alt.autocapitalize.autocomplete.autopictureinpicture.autoplay.background.bgcolor.border.capture.cellpadding.cellspacing.checked.cite.class.clear.color.cols.colspan.command.commandfor.controls.controlslist.coords.crossorigin.datetime.decoding.default.dir.disabled.disablepictureinpicture.disableremoteplayback.download.draggable.enctype.enterkeyhint.exportparts.face.for.headers.height.hidden.high.href.hreflang.id.inert.inputmode.integrity.ismap.kind.label.lang.list.loading.loop.low.max.maxlength.media.method.min.minlength.multiple.muted.name.nonce.noshade.novalidate.nowrap.open.optimum.part.pattern.placeholder.playsinline.popover.popovertarget.popovertargetaction.poster.preload.pubdate.radiogroup.readonly.rel.required.rev.reversed.role.rows.rowspan.spellcheck.scope.selected.shape.size.sizes.slot.span.srclang.start.src.srcset.step.style.summary.tabindex.title.translate.type.usemap.valign.value.width.wrap.xmlns`.split(`.`)),A=p(`accent-height.accumulate.additive.alignment-baseline.amplitude.ascent.attributename.attributetype.azimuth.basefrequency.baseline-shift.begin.bias.by.class.clip.clippathunits.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.cx.cy.d.dx.dy.diffuseconstant.direction.display.divisor.dominant-baseline.dur.edgemode.elevation.end.exponent.fill.fill-opacity.fill-rule.filter.filterunits.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.fx.fy.g1.g2.glyph-name.glyphref.gradientunits.gradienttransform.height.href.id.image-rendering.in.in2.intercept.k.k1.k2.k3.k4.kerning.keypoints.keysplines.keytimes.lang.lengthadjust.letter-spacing.kernelmatrix.kernelunitlength.lighting-color.local.marker-end.marker-mid.marker-start.markerheight.markerunits.markerwidth.maskcontentunits.maskunits.max.mask.mask-type.media.method.mode.min.name.numoctaves.offset.operator.opacity.order.orient.orientation.origin.overflow.paint-order.path.pathlength.patterncontentunits.patterntransform.patternunits.points.preservealpha.preserveaspectratio.primitiveunits.r.rx.ry.radius.refx.refy.repeatcount.repeatdur.restart.result.rotate.scale.seed.shape-rendering.slope.specularconstant.specularexponent.spreadmethod.startoffset.stddeviation.stitchtiles.stop-color.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke.stroke-width.style.surfacescale.systemlanguage.tabindex.tablevalues.targetx.targety.transform.transform-origin.text-anchor.text-decoration.text-orientation.text-rendering.textlength.type.u1.u2.unicode.values.viewbox.visibility.version.vert-adv-y.vert-origin-x.vert-origin-y.width.word-spacing.wrap.writing-mode.xchannelselector.ychannelselector.x.x1.x2.xmlns.y.y1.y2.z.zoomandpan`.split(`.`)),Te=p(`accent.accentunder.align.bevelled.close.columnalign.columnlines.columnspacing.columnspan.denomalign.depth.dir.display.displaystyle.encoding.fence.frame.height.href.id.largeop.length.linethickness.lquote.lspace.mathbackground.mathcolor.mathsize.mathvariant.maxsize.minsize.movablelimits.notation.numalign.open.rowalign.rowlines.rowspacing.rowspan.rspace.rquote.scriptlevel.scriptminsize.scriptsizemultiplier.selection.separator.separators.stretchy.subscriptshift.supscriptshift.symmetric.voffset.width.xmlns`.split(`.`)),j=p([`xlink:href`,`xml:id`,`xlink:title`,`xml:space`,`xmlns:xlink`]),Ee=m(/{{[\w\W]*|^[\w\W]*}}/g),De=m(/<%[\w\W]*|^[\w\W]*%>/g),Oe=m(/\${[\w\W]*/g),ke=m(/^data-[\-\w.\u00B7-\uFFFF]+$/),M=m(/^aria-[\-\w]+$/),N=m(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Ae=m(/^(?:\w+script|data):/i),je=m(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Me=m(/^html$/i),Ne=m(/^[a-z][.\w]*(-[.\w]+)+$/i),Pe=m(/<[/\w!]/g),Fe=m(/<[/\w]/g),Ie=m(/<\/no(script|embed|frames)/i),Le=m(/\/>/i),P={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,processingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},Re=function(){return typeof window>`u`?null:window},ze=function(e,t){if(typeof e!=`object`||typeof e.createPolicy!=`function`)return null;let n=null,r=`data-tt-policy-suffix`;t&&t.hasAttribute(r)&&(n=t.getAttribute(r));let i=`dompurify`+(n?`#`+n:``);try{return e.createPolicy(i,{createHTML(e){return e},createScriptURL(e){return e}})}catch{return console.warn(`TrustedTypes policy `+i+` could not be created.`),null}},Be=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},F=function(e,t,n,r){return S(e,t)&&ie(e[t])?E(r.base?O(r.base):{},e[t],r.transform):n};function Ve(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Re(),t=e=>Ve(e);if(t.version=`3.4.13`,t.removed=[],!e||!e.document||e.document.nodeType!==P.document||!e.Element)return t.isSupported=!1,t;let n=e.document,r=n,i=r.currentScript;e.DocumentFragment;let a=e.HTMLTemplateElement,o=e.Node,s=e.Element,l=e.NodeFilter;e.NamedNodeMap===void 0&&(e.NamedNodeMap||e.MozNamedAttrMap),e.HTMLFormElement;let u=e.DOMParser,d=e.trustedTypes,f=s.prototype,g=k(f,`cloneNode`),_=k(f,`remove`),v=k(f,`nextSibling`),le=k(f,`childNodes`),ue=k(f,`parentNode`),de=k(f,`shadowRoot`),fe=k(f,`attributes`),C=o&&o.prototype?k(o.prototype,`nodeType`):null,T=o&&o.prototype?k(o.prototype,`nodeName`):null,me=o&&o.prototype?k(o.prototype,`ownerDocument`):null;if(typeof a==`function`){let e=n.createElement(`template`);e.content&&e.content.ownerDocument&&(n=e.content.ownerDocument)}let D,I=``,He,Ue=!1,We=0,Ge=function(){if(We>0)throw pe(`A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.`)},Ke=function(e){Ge(),We++;try{return D.createHTML(e)}finally{We--}},qe=function(e){Ge(),We++;try{return D.createScriptURL(e)}finally{We--}},Je=function(){return Ue||=(He=ze(d,i),!0),He},Ye=n,Xe=Ye.implementation,Ze=Ye.createNodeIterator,Qe=Ye.createDocumentFragment,$e=Ye.getElementsByTagName,et=r.importNode,L=Be();t.isSupported=typeof c==`function`&&typeof ue==`function`&&Xe&&Xe.createHTMLDocument!==void 0;let tt=Ee,nt=De,rt=Oe,it=ke,at=M,ot=Ae,st=je,ct=Ne,lt=N,R=null,ut=E({},[..._e,...ve,...ye,...xe,...Ce]),z=null,B=E({},[...we,...A,...Te,...j]),V=Object.seal(h(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),H=null,U=null,W=Object.seal(h(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}})),dt=!0,ft=!0,pt=!1,mt=!0,ht=!1,gt=!0,_t=!1,vt=!1,yt=null,bt=null,xt=!1,St=!1,Ct=!1,wt=!1,Tt=!0,Et=!1,Dt=`user-content-`,Ot=!0,kt=!1,G={},K=null,At=E({},`annotation-xml.audio.colgroup.desc.foreignobject.head.iframe.math.mi.mn.mo.ms.mtext.noembed.noframes.noscript.plaintext.script.selectedcontent.style.svg.template.thead.title.video.xmp`.split(`.`)),jt=null,Mt=E({},[`audio`,`video`,`img`,`source`,`image`,`track`]),Nt=null,Pt=E({},[`alt`,`class`,`for`,`id`,`label`,`name`,`pattern`,`placeholder`,`role`,`summary`,`title`,`value`,`style`,`xmlns`]),q=`http://www.w3.org/1998/Math/MathML`,Ft=`http://www.w3.org/2000/svg`,J=`http://www.w3.org/1999/xhtml`,It=J,Lt=!1,Rt=null,zt=E({},[q,Ft,J],ae),Bt=p([`mi`,`mo`,`mn`,`ms`,`mtext`]),Vt=E({},Bt),Ht=p([`annotation-xml`]),Ut=E({},Ht),Wt=E({},[`title`,`style`,`font`,`a`,`script`]),Gt=null,Kt=[`application/xhtml+xml`,`text/html`],Y=null,qt=null,Jt=n.createElement(`form`),Yt=function(e){return e instanceof RegExp||e instanceof Function},Xt=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(qt&&qt===e)return;(!e||typeof e!=`object`)&&(e={}),e=O(e),Gt=Kt.indexOf(e.PARSER_MEDIA_TYPE)===-1?`text/html`:e.PARSER_MEDIA_TYPE,Y=Gt===`application/xhtml+xml`?ae:b,R=F(e,`ALLOWED_TAGS`,ut,{transform:Y}),z=F(e,`ALLOWED_ATTR`,B,{transform:Y}),Rt=F(e,`ALLOWED_NAMESPACES`,zt,{transform:ae}),Nt=F(e,`ADD_URI_SAFE_ATTR`,Pt,{transform:Y,base:Pt}),jt=F(e,`ADD_DATA_URI_TAGS`,Mt,{transform:Y,base:Mt}),K=F(e,`FORBID_CONTENTS`,At,{transform:Y}),H=F(e,`FORBID_TAGS`,O({}),{transform:Y}),U=F(e,`FORBID_ATTR`,O({}),{transform:Y}),G=S(e,`USE_PROFILES`)?e.USE_PROFILES&&typeof e.USE_PROFILES==`object`?O(e.USE_PROFILES):e.USE_PROFILES:!1,dt=e.ALLOW_ARIA_ATTR!==!1,ft=e.ALLOW_DATA_ATTR!==!1,pt=e.ALLOW_UNKNOWN_PROTOCOLS||!1,mt=e.ALLOW_SELF_CLOSE_IN_ATTR!==!1,ht=e.SAFE_FOR_TEMPLATES||!1,gt=e.SAFE_FOR_XML!==!1,_t=e.WHOLE_DOCUMENT||!1,St=e.RETURN_DOM||!1,Ct=e.RETURN_DOM_FRAGMENT||!1,wt=e.RETURN_TRUSTED_TYPE||!1,xt=e.FORCE_BODY||!1,Tt=e.SANITIZE_DOM!==!1,Et=e.SANITIZE_NAMED_PROPS||!1,Ot=e.KEEP_CONTENT!==!1,kt=e.IN_PLACE||!1,lt=ge(e.ALLOWED_URI_REGEXP)?e.ALLOWED_URI_REGEXP:N,It=typeof e.NAMESPACE==`string`?e.NAMESPACE:J,Vt=S(e,`MATHML_TEXT_INTEGRATION_POINTS`)&&e.MATHML_TEXT_INTEGRATION_POINTS&&typeof e.MATHML_TEXT_INTEGRATION_POINTS==`object`?O(e.MATHML_TEXT_INTEGRATION_POINTS):E({},Bt),Ut=S(e,`HTML_INTEGRATION_POINTS`)&&e.HTML_INTEGRATION_POINTS&&typeof e.HTML_INTEGRATION_POINTS==`object`?O(e.HTML_INTEGRATION_POINTS):E({},Ht);let t=S(e,`CUSTOM_ELEMENT_HANDLING`)&&e.CUSTOM_ELEMENT_HANDLING&&typeof e.CUSTOM_ELEMENT_HANDLING==`object`?O(e.CUSTOM_ELEMENT_HANDLING):h(null);if(V=h(null),S(t,`tagNameCheck`)&&Yt(t.tagNameCheck)&&(V.tagNameCheck=t.tagNameCheck),S(t,`attributeNameCheck`)&&Yt(t.attributeNameCheck)&&(V.attributeNameCheck=t.attributeNameCheck),S(t,`allowCustomizedBuiltInElements`)&&typeof t.allowCustomizedBuiltInElements==`boolean`&&(V.allowCustomizedBuiltInElements=t.allowCustomizedBuiltInElements),m(V),ht&&(ft=!1),Ct&&(St=!0),G&&(R=E({},Ce),z=h(null),G.html===!0&&(E(R,_e),E(z,we)),G.svg===!0&&(E(R,ve),E(z,A),E(z,j)),G.svgFilters===!0&&(E(R,ye),E(z,A),E(z,j)),G.mathMl===!0&&(E(R,xe),E(z,Te),E(z,j))),W.tagCheck=null,W.attributeCheck=null,S(e,`ADD_TAGS`)&&(typeof e.ADD_TAGS==`function`?W.tagCheck=e.ADD_TAGS:ie(e.ADD_TAGS)&&(R===ut&&(R=O(R)),E(R,e.ADD_TAGS,Y))),S(e,`ADD_ATTR`)&&(typeof e.ADD_ATTR==`function`?W.attributeCheck=e.ADD_ATTR:ie(e.ADD_ATTR)&&(z===B&&(z=O(z)),E(z,e.ADD_ATTR,Y))),S(e,`ADD_URI_SAFE_ATTR`)&&ie(e.ADD_URI_SAFE_ATTR)&&E(Nt,e.ADD_URI_SAFE_ATTR,Y),S(e,`FORBID_CONTENTS`)&&ie(e.FORBID_CONTENTS)&&(K===At&&(K=O(K)),E(K,e.FORBID_CONTENTS,Y)),S(e,`ADD_FORBID_CONTENTS`)&&ie(e.ADD_FORBID_CONTENTS)&&(K===At&&(K=O(K)),E(K,e.ADD_FORBID_CONTENTS,Y)),Ot&&(R[`#text`]=!0),_t&&E(R,[`html`,`head`,`body`]),R.table&&(E(R,[`tbody`]),delete H.tbody),e.TRUSTED_TYPES_POLICY){if(typeof e.TRUSTED_TYPES_POLICY.createHTML!=`function`)throw pe(`TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.`);if(typeof e.TRUSTED_TYPES_POLICY.createScriptURL!=`function`)throw pe(`TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.`);let t=D;D=e.TRUSTED_TYPES_POLICY;try{I=Ke(``)}catch(e){throw D=t,e}}else e.TRUSTED_TYPES_POLICY===null?(D=void 0,I=``):(D===void 0&&(D=Je()),D&&typeof I==`string`&&(I=Ke(``)));p&&p(e),qt=e},Zt=E({},[...ve,...ye,...be]),Qt=E({},[...xe,...Se]),$t=function(e,t,n){return t.namespaceURI===J?e===`svg`:t.namespaceURI===q?e===`svg`&&(n===`annotation-xml`||Vt[n]):!!Zt[e]},en=function(e,t,n){return t.namespaceURI===J?e===`math`:t.namespaceURI===Ft?e===`math`&&Ut[n]:!!Qt[e]},tn=function(e,t,n){return t.namespaceURI===Ft&&!Ut[n]||t.namespaceURI===q&&!Vt[n]?!1:!Qt[e]&&(Wt[e]||!Zt[e])},nn=function(e){let t=ue(e);(!t||!t.tagName)&&(t={namespaceURI:It,tagName:`template`});let n=b(e.tagName),r=b(t.tagName);return Rt[e.namespaceURI]?e.namespaceURI===Ft?$t(n,t,r):e.namespaceURI===q?en(n,t,r):e.namespaceURI===J?tn(n,t,r):!!(Gt===`application/xhtml+xml`&&Rt[e.namespaceURI]):!1},rn=function(e){ne(t.removed,{element:e});try{ue(e).removeChild(e)}catch{if(_(e),!ue(e))throw pe(`a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place`)}},an=function(e){cn(e);let t=le(e);if(t){let e=[];y(t,t=>{ne(e,t)}),y(e,e=>{try{_(e)}catch{}})}let n=fe(e);if(n)for(let t=n.length-1;t>=0;--t){let r=n[t],i=r&&r.name;if(typeof i==`string`)try{e.removeAttribute(i)}catch{}}},on=function(e,n){try{ne(t.removed,{attribute:n.getAttributeNode(e),from:n})}catch{ne(t.removed,{attribute:null,from:n})}if(n.removeAttribute(e),e===`is`){if(St||Ct)try{rn(n)}catch{}else try{n.setAttribute(e,``)}catch{}}},sn=function(e){let t=fe(e);if(t)for(let n=t.length-1;n>=0;--n){let r=t[n],i=r&&r.name;if(!(typeof i!=`string`||z[Y(i)]))try{e.removeAttribute(i)}catch{}}},cn=function(e){let t=[e];for(;t.length>0;){let e=t.pop();(C?C(e):e.nodeType)===P.element&&sn(e);let n=le(e);if(n)for(let e=n.length-1;e>=0;--e)t.push(n[e])}},ln=function(e){if(!gt)return;let t=[e];for(;t.length>0;){let e=t.pop(),n=C?C(e):e.nodeType;if(n===P.processingInstruction||n===P.comment&&w(Fe,e.data)){try{_(e)}catch{}continue}if(n===P.element){let t=e,n=Y(T?T(e):e.nodeName);try{t.hasAttribute&&t.hasAttribute(`patchsrc`)&&t.removeAttribute(`patchsrc`),t.hasAttribute&&t.hasAttribute(`for`)&&n!==`label`&&n!==`output`&&t.removeAttribute(`for`)}catch{}}let r=le(e);if(r)for(let e=r.length-1;e>=0;--e)t.push(r[e])}},un=function(e){let t=null,r=null;if(xt)e=`<remove></remove>`+e;else{let t=oe(e,/^[\r\n\t ]+/);r=t&&t[0]}Gt===`application/xhtml+xml`&&It===J&&(e=`<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>`+e+`</body></html>`);let i=D?Ke(e):e;if(It===J)try{t=new u().parseFromString(i,Gt)}catch{}if(!t||!t.documentElement){t=Xe.createDocument(It,`template`,null);try{t.documentElement.innerHTML=Lt?I:i}catch{}}let a=t.body||t.documentElement;return e&&r&&a.insertBefore(n.createTextNode(r),a.childNodes[0]||null),It===J?$e.call(t,_t?`html`:`body`)[0]:_t?t.documentElement:a},dn=function(e){let t=me?me(e):e.ownerDocument;return Ze.call(t||e,e,l.SHOW_ELEMENT|l.SHOW_COMMENT|l.SHOW_TEXT|l.SHOW_PROCESSING_INSTRUCTION|l.SHOW_CDATA_SECTION,null)},fn=function(e){return e=x(e,tt,` `),e=x(e,nt,` `),e=x(e,rt,` `),e},pn=function(e){e.normalize();let t=me?me(e):e.ownerDocument,n=Ze.call(t||e,e,l.SHOW_TEXT|l.SHOW_COMMENT|l.SHOW_CDATA_SECTION|l.SHOW_PROCESSING_INSTRUCTION,null),r=n.nextNode();for(;r;)r.data=fn(r.data),r=n.nextNode();let i=e.querySelectorAll?.call(e,`template`);i&&y(i,e=>{hn(e.content)&&pn(e.content)})},mn=function(e){let t=T?T(e):null;return typeof t!=`string`||Y(t)!==`form`?!1:typeof e.nodeName!=`string`||typeof e.textContent!=`string`||typeof e.removeChild!=`function`||e.attributes!==fe(e)||typeof e.removeAttribute!=`function`||typeof e.setAttribute!=`function`||typeof e.namespaceURI!=`string`||typeof e.insertBefore!=`function`||typeof e.hasChildNodes!=`function`||e.nodeType!==C(e)||e.childNodes!==le(e)},hn=function(e){if(!C||typeof e!=`object`||!e)return!1;try{return C(e)===P.documentFragment}catch{return!1}},gn=function(e){if(!C||typeof e!=`object`||!e)return!1;try{return typeof C(e)==`number`}catch{return!1}};function X(e,n,r){e.length!==0&&y(e,e=>{e.call(t,n,r,qt)})}let _n=function(e,t){return!!(gt&&e.hasChildNodes()&&!gn(e.firstElementChild)&&w(Pe,e.textContent)&&w(Pe,e.innerHTML)||gt&&e.namespaceURI===J&&t===`style`&&gn(e.firstElementChild)||e.nodeType===P.processingInstruction||gt&&e.nodeType===P.comment&&w(Fe,e.data))},vn=function(e,t,n){if(!H[t]&&Cn(t)&&(V.tagNameCheck instanceof RegExp&&w(V.tagNameCheck,t)||V.tagNameCheck instanceof Function&&V.tagNameCheck(t)))return!1;if(Ot&&!K[t]){let t=ue(e),r=le(e);if(r&&t){let i=r.length;for(let a=i-1;a>=0;--a){let i=e===n?g(r[a],!0):r[a];t.insertBefore(i,v(e))}}}return rn(e),!0},yn=function(e,t,n,r){return e.length===0?t:t===n||t===r?O(t):t},bn=function(e,n){if(X(L.beforeSanitizeElements,e,null),e!==n&&ue(e)===null)return kt&&cn(e),!0;if(mn(e))return rn(e),!0;let r=Y(T?T(e):e.nodeName);if(R=yn(L.uponSanitizeElement,R,ut,yt),X(L.uponSanitizeElement,e,{tagName:r,allowedTags:R}),e!==n&&ue(e)===null)return kt&&cn(e),!0;if(_n(e,r))return rn(e),!0;if(H[r]||!(W.tagCheck instanceof Function&&W.tagCheck(r))&&!R[r]){let t=vn(e,r,n);return t===!1&&X(L.afterSanitizeElements,e,null),t}if((C?C(e):e.nodeType)===P.element&&!nn(e)||(r===`noscript`||r===`noembed`||r===`noframes`)&&w(Ie,e.innerHTML))return rn(e),!0;if(ht&&e.nodeType===P.text){let n=fn(e.textContent);e.textContent!==n&&(ne(t.removed,{element:e.cloneNode()}),e.textContent=n)}return X(L.afterSanitizeElements,e,null),!1},xn=function(e,t,r){if(U[t]||gt&&t===`patchsrc`||gt&&t===`for`&&e!==`label`&&e!==`output`||Tt&&(t===`id`||t===`name`)&&(r in n||r in Jt))return!1;let i=z[t]||W.attributeCheck instanceof Function&&W.attributeCheck(t,e);if(!(ft&&w(it,t))&&!(dt&&w(at,t))){if(!i){if(!(Cn(e)&&(V.tagNameCheck instanceof RegExp&&w(V.tagNameCheck,e)||V.tagNameCheck instanceof Function&&V.tagNameCheck(e))&&(V.attributeNameCheck instanceof RegExp&&w(V.attributeNameCheck,t)||V.attributeNameCheck instanceof Function&&V.attributeNameCheck(t,e))||t===`is`&&V.allowCustomizedBuiltInElements&&(V.tagNameCheck instanceof RegExp&&w(V.tagNameCheck,r)||V.tagNameCheck instanceof Function&&V.tagNameCheck(r))))return!1}else if(!Nt[t]&&!w(lt,x(r,st,``))&&!((t===`src`||t===`xlink:href`||t===`href`)&&e!==`script`&&se(r,`data:`)===0&&jt[e])&&!(pt&&!w(ot,x(r,st,``)))&&r)return!1}return!0},Sn=E({},[`annotation-xml`,`color-profile`,`font-face`,`font-face-format`,`font-face-name`,`font-face-src`,`font-face-uri`,`missing-glyph`]),Cn=function(e){return!Sn[b(e)]&&w(ct,e)},wn=function(e,t,n,r){if(D&&typeof d==`object`&&typeof d.getAttributeType==`function`&&!n)switch(d.getAttributeType(e,t)){case`TrustedHTML`:return Ke(r);case`TrustedScriptURL`:return qe(r)}return r},Tn=function(e,n,r,i){try{r?e.setAttributeNS(r,n,i):e.setAttribute(n,i),mn(e)?rn(e):te(t.removed)}catch{on(n,e)}},En=function(e){X(L.beforeSanitizeAttributes,e,null);let t=e.attributes;if(!t||mn(e))return;z=yn(L.uponSanitizeAttribute,z,B,bt);let n={attrName:``,attrValue:``,keepAttr:!0,allowedAttributes:z,forceKeepAttr:void 0},r=t.length,i=Y(e.nodeName);for(;r--;){let a=t[r],o=a.name,s=a.namespaceURI,c=a.value,l=Y(o),u=c,d=o===`value`?u:ce(u);if(n.attrName=l,n.attrValue=d,n.keepAttr=!0,n.forceKeepAttr=void 0,X(L.uponSanitizeAttribute,e,n),d=n.attrValue,Et&&(l===`id`||l===`name`)&&se(d,Dt)!==0&&(on(o,e),d=Dt+d),gt&&w(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,d)){on(o,e);continue}if(l===`attributename`&&oe(d,`href`)){on(o,e);continue}if(!n.forceKeepAttr){if(!n.keepAttr){on(o,e);continue}if(!mt&&w(Le,d)){on(o,e);continue}if(ht&&(d=fn(d)),!xn(i,l,d)){on(o,e);continue}d=wn(i,l,s,d),d!==u&&Tn(e,o,s,d)}}X(L.afterSanitizeAttributes,e,null)},Dn=function(e){let t=null,n=dn(e);for(X(L.beforeSanitizeShadowDOM,e,null);t=n.nextNode();)if(X(L.uponSanitizeShadowNode,t,null),bn(t,e),En(t),hn(t.content)&&Dn(t.content),(C?C(t):t.nodeType)===P.element){let e=de(t);hn(e)&&(On(e),Dn(e))}X(L.afterSanitizeShadowDOM,e,null)},On=function(e){let t=[{node:e,shadow:null}];for(;t.length>0;){let e=t.pop();if(e.shadow){Dn(e.shadow);continue}let n=e.node,r=(C?C(n):n.nodeType)===P.element,i=le(n);if(i)for(let e=i.length-1;e>=0;--e)t.push({node:i[e],shadow:null});if(r){let e=T?T(n):null;if(typeof e==`string`&&Y(e)===`template`){let e=n.content;hn(e)&&t.push({node:e,shadow:null})}}if(r){let e=de(n);hn(e)&&t.push({node:null,shadow:e},{node:e,shadow:null})}}};return t.sanitize=function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=null,a=null,o=null,s=null;if(Lt=!e,Lt&&(e=`<!-->`),typeof e!=`string`&&!gn(e)&&(e=he(e),typeof e!=`string`))throw pe(`dirty is not a string, aborting`);if(!t.isSupported)return e;vt?(R=yt,z=bt):Xt(n),(L.uponSanitizeElement.length>0||L.uponSanitizeAttribute.length>0)&&(R=O(R)),L.uponSanitizeAttribute.length>0&&(z=O(z)),t.removed=[];let c=kt&&typeof e!=`string`&&gn(e);if(c){ln(e);let t=T?T(e):e.nodeName;if(typeof t==`string`){let n=Y(t);if(!R[n]||H[n])throw an(e),pe(`root node is forbidden and cannot be sanitized in-place`)}if(mn(e))throw an(e),pe(`root node is clobbered and cannot be sanitized in-place`);try{On(e)}catch(t){throw an(e),t}}else if(gn(e))i=un(`<!---->`),a=i.ownerDocument.importNode(e,!0),a.nodeType===P.element&&a.nodeName===`BODY`||a.nodeName===`HTML`?i=a:i.appendChild(a),On(a);else{if(!St&&!ht&&!_t&&e.indexOf(`<`)===-1)return D&&wt?Ke(e):e;if(i=un(e),!i)return St?null:wt?I:``}i&&xt&&rn(i.firstChild);let l=c?e:i;try{let e=dn(l);for(;o=e.nextNode();)bn(o,l),En(o),hn(o.content)&&Dn(o.content)}catch(n){throw c&&(an(e),y(t.removed,e=>{e.element&&cn(e.element)})),n}if(c)return y(t.removed,e=>{e.element&&cn(e.element)}),ht&&pn(e),e;if(St){if(ht&&pn(i),Ct)for(s=Qe.call(i.ownerDocument);i.firstChild;)s.appendChild(i.firstChild);else s=i;return(z.shadowroot||z.shadowrootmode)&&(s=et.call(r,s,!0)),s}let u=_t?i.outerHTML:i.innerHTML;return _t&&R[`!doctype`]&&i.ownerDocument&&i.ownerDocument.doctype&&i.ownerDocument.doctype.name&&w(Me,i.ownerDocument.doctype.name)&&(u=`<!DOCTYPE `+i.ownerDocument.doctype.name+`>
`+u),ht&&(u=fn(u)),D&&wt?Ke(u):u},t.setConfig=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Xt(e),vt=!0,yt=R,bt=z},t.clearConfig=function(){qt=null,vt=!1,yt=null,bt=null,D=He,I=``},t.isValidAttribute=function(e,t,n){qt||Xt({});let r=Y(e),i=Y(t);return xn(r,i,n)},t.addHook=function(e,t){typeof t==`function`&&S(L,e)&&ne(L[e],t)},t.removeHook=function(e,t){if(S(L,e)){if(t!==void 0){let n=ee(L[e],t);return n===-1?void 0:re(L[e],n,1)[0]}return te(L[e])}},t.removeHooks=function(e){S(L,e)&&(L[e]=[])},t.removeAllHooks=function(){L=Be()},t}t.exports=Ve()})),Pr=d(p(((e,t)=>{t.exports=self.DOMPurify||(self.DOMPurify=Nr().default||Nr())}))());function Fr(e,t){u(t,!0);let n=Object.fromEntries(Object.entries(Object.assign({"/src/lib/assets/crochetMS/crochetMS_component_api_layer.svg":ee,"/src/lib/assets/crochetMS/crochetMS_container_crochet_management_system.svg":te,"/src/lib/assets/crochetMS/crochetMS_system_context.svg":ne,"/src/lib/assets/viridi_achievements.png":v})).map(([e,t])=>[e.replace(`/src/lib/assets/`,``),t])),r=new $({linkify:!0,typographer:!0});r.renderer.rules.image=(e,t,r,i,a)=>{let o=e[t],s=o.attrIndex(`src`);if(!o.attrs)return a.renderToken(e,t,r);let c=o.attrs[s][1];if(n[c])o.attrs[s][1]=n[c];else throw Error(`Invalid image path for ${c}`);return a.renderToken(e,t,r)};let a=i(()=>r.render(t.content)),o=i(()=>Pr.default.sanitize(f(a)));var d=c(),p=l(d);_(p,()=>f(o)),g(e,d),s()}var Ir=`# Crochet Management System (System Design Documentation)

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
`,Lr=r(`<article class="default"><!></article>`);function Rr(n,r){var i=Lr();Fr(t(i),{get content(){return Ir}}),e(i),g(n,i)}var zr=r(`<p class="text-center"><small><strong>(╯°□°）╯︵ ┻━┻</strong></small></p>`);function Br(e){var t=zr();g(e,t)}var Vr=r(`<p class="text-center green"><small><strong>(ヘ･_･)ヘ┳━┳</strong></small></p>`);function Hr(e){var t=Vr();g(e,t)}var Ur=r(`<article class="default"><h1>Engineering the Intangible:<br/>The Essential Handbook for Engineers Who
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
          to adapt to new roles and responsibilities.</li></ul></section> <!></section></article>`);function Wr(r,i){u(i,!0),m(()=>{y(2);let{hash:e}=document.location,t=e&&document.getElementById(e.slice(1));t&&t.scrollIntoView()});var c=Ur(),l=a(t(c),2),d=t(l),f=t(d),p=t(f);e(f),e(d);var h=a(d,8);Br(a(t(h),6),{}),e(h),Hr(a(h,16),{}),e(l),e(c),o(()=>n(p,`${i.project.started??``} – Present (Research Phase)`)),g(r,c),s()}var Gr={name:`Natalia Pospieszyńska`,role:`Backend Software Engineer`,location:{city:`Trutnov`,region:`Hradec Králové`,country:`Czechia`,icon:`fa-solid fa-location-dot`,mapUrl:`https://en.mapy.cz/turisticka?source=dist&id=36&ds=1&x=15.8373076&y=50.5704668&z=10`},contact:{linkedin:{href:`https://www.linkedin.com/in/nataliapospieszynska/`,displayValue:`/nataliapospieszynska`,faIconClass:`fa-brands fa-linkedin`},github:{href:`https://github.com/burczan`,displayValue:`/burczan`,faIconClass:`fa-brands fa-github`},web:{href:`https://burczan.github.io/me/`,displayValue:`burczan.github.io/me`,faIconClass:`fa-solid fa-globe`}}},Kr=[{school:`Polish Naval Academy`,city:`Gdynia`,country:`Poland`,field:`Cybersecurity`,degree:`Postgraduate studies`,dateRange:`2019–2020`,website:`https://www.amw.gdynia.pl`},{school:`Adam Mickiewicz University`,city:`Poznań`,country:`Poland`,field:`Philosophy`,subfield:`Social Communication`,degree:`Master studies`,dateRange:`2013–2016`,website:`https://amu.edu.pl/`},{school:`Post-Secondary Vocational School`,city:`Poznań`,country:`Poland`,field:`Sound Engineering`,degree:`Technician`,dateRange:`2011–2013`},{school:`Adam Mickiewicz University`,city:`Poznań`,country:`Poland`,field:`Instructional Technology`,degree:`Bachelor's degree`,dateRange:`2010–2013`,website:`https://amu.edu.pl/`}],qr=[{role:`Backend Software Engineer`,company:`Capbase`,startDate:`04/2021`,endDate:`07/2022`,description:[`Implemented and enhanced several product features in TypeScript, Node.js, and React, improving user experience and addressing customer feedback.`,`Developed and optimized an internal API with Express.js and AWS, enabling seamless data integration and improving internal workflows.`,`Diagnosed and resolved technical issues, improving application stability and ensuring smooth performance.`,`Wrote and maintained comprehensive unit and integration tests, leading to high code quality and fewer bugs in production.`],descriptionShortened:[`Implemented and enhanced several product features in TypeScript, Node.js, and React.`,`Developed and optimized an internal API with Express.js and AWS.`,`Diagnosed and resolved technical issues.`,`Wrote and maintained comprehensive unit and integration tests.`],technologies:[`AWS`,`Bash`,`Express.js`,`Linux`,`Node.js`,`React`,`TypeScript`]},{role:`Frontend Software Engineer`,company:`Beta District`,startDate:`12/2019`,endDate:`08/2020`,description:[`Developed reusable components in React and TypeScript, improving code consistency and speeding up the development process for future features.`,`Implemented unit and integration tests using Jest and React Testing Library, ensuring high code reliability and significantly reducing bug occurrences.`],descriptionShortened:[`Developed reusable components in React and TypeScript for a newly created frontend.`,`Implemented unit and integration tests using Jest and React Testing Library.`],technologies:[`GraphQL`,`JavaScript`,`React`,`Redux`,`TypeScript`,`Unit testing`]},{role:`Software Test Engineer`,company:`Beta District`,startDate:`01/2019`,endDate:`11/2019`,description:[`Remotely mentored a QA specialist, introducing programming and test automation practices, which enhanced the team's testing efficiency and technical capabilities.`,`Developed and maintained automated tests in JavaScript and Ruby, improving test coverage and helping ensure consistent product quality throughout the release cycle.`,`Contributed to frontend development by implementing basic functionalities in React, supporting the timely delivery of key features alongside the development team.`],descriptionShortened:[`Remotely mentored QA specialist.`,`Developed and maintained automated tests in JavaScript and Ruby.`,`Contributed to frontend development by implementing basic functionalities in React.`],technologies:[`API testing`,`JavaScript`,`React`,`Ruby`,`Test automation`]},{role:`QA Specialist`,company:`Beta District`,startDate:`02/2018`,endDate:`12/2018`,description:[`Conducted manual functional and API testing using Burp Suite and Postman, ensuring reliability and preventing major issues before deployment to production.`,`Collaborated closely with developers to implement new functionalities, providing critical feedback that improved product quality and streamlined the development process.`,`Learned and applied test automation using JavaScript and Ruby, contributing to enhanced test coverage and overall improvement in the team's testing process.`,`Performed post-release production environment testing using manual testing techniques, identifying and resolving issues that maintained system stability and reliability.`],descriptionShortened:[`Conducted manual functional and API testing using Burp Suite and Postman.`,`Collaborated closely with developers to implement new features.`,`Performed production environment testing after each release.`],technologies:[`API testing`,`Burp Suite`,`JavaScript`,`Manual testing`,`Ruby`,`Test automation`]},{role:`Junior QA Specialist`,company:`Beta District`,startDate:`04/2017`,endDate:`01/2018`,description:[`Performed manual testing to identify and document defects, ensuring high-quality software products and preventing critical issues before release.`,`Proposed and implemented more efficient testing procedures, streamlining the process and reducing test execution time.`,`Actively identified and reported bugs, suggesting improvements that contributed to enhancing the overall quality and performance of software projects.`,`Actively learned new concepts and techniques in manual and API testing, applying these insights to improve the team's testing effectiveness and product quality.`],descriptionShortened:[`Performed manual testing to identify and document defects.`,`Proposed and implemented more efficient testing procedures.`,`Suggested improvements to projects by finding and reporting bugs.`,`Actively learned new concepts and techniques in software testing.`],technologies:[`API testing`,`Manual testing`]},{role:`Instructional Designer`,company:`LLidero`,startDate:`05/2014`,endDate:`06/2016`,description:[`Designed and developed educational courses tailored to various learner needs, applying instructional design principles and pedagogical techniques to create effective learning experiences.`,`Set clear learning goals and objectives for each course, ensuring alignment with educational standards and learner outcomes.`,`Conducted thorough testing of courses, demonstrating strong attention to detail to identify and resolve any issues, ensuring the quality and effectiveness of instructional materials.`,`Collaborated with subject matter experts to gather content and ensure accuracy, integrating their expertise into the course design to enhance the learning experience.`],descriptionShortened:[`Designed and developed educational courses tailored to various learner needs.`,`Set clear learning goals and objectives for each course.`,`Collaborated with subject matter experts to gather content and ensure accuracy.`]}],Jr=[{name:`Mathematics`,description:`Uncovering the hidden order and underlying patterns that govern the universe.`},{name:`Philosophy`,description:`Searching the meaning behind the order and chaos that mathematics reveals.`},{name:`Psychology`,description:`Exploring the complexities of human thought, mirroring the pursuit of order amid the chaos revealed by mathematics and questioned by philosophy.`},{name:`Theoretical Computer Science`,description:`Investigating the limits of computation, where chaos, order, and meaning intersect in the search for knowledge.`}],Yr={programmingLanguages:{display:`Programming Languages`,skills:[`JavaScript`,`TypeScript`,`Ruby`,`Bash`]},frontendDevelopment:{display:`Frontend Development`,skills:[`React`,`Svelte`,`Vanilla JS`,`HTML`,`CSS`,`Tailwind`]},backendDevelopment:{display:`Backend Development & Databases`,skills:[`Node.js`,`Express.js`,`REST API`,`GraphQL`,`SQL`,`NoSQL`,`AWS DynamoDB`,`PostgreSQL`]},cloudPlatforms:{display:`Cloud Platforms`,skills:[`Amazon Web Services (AWS)`]},systemDesignArchitecture:{display:`System Design & Architecture`,skills:[`Distributed Systems`,`System Architecture`,`Microservices`,`Serverless`]},diagrammingDocumentation:{display:`Diagramming & Technical Documentation`,skills:[`PlantUML`,`Structurizr`,`Graphviz`,`TikZ`,`LaTeX`]},softwareEngineering:{display:`Software Engineering`,skills:[`Algorithms and Data Structures`,`Code Review`,`Debugging`,`Software Craftsmanship (KISS, DRY, YAGNI, etc.)`]},testingAutomation:{display:`Testing & Automation`,skills:[`API Testing (Postman)`,`Jest`,`Puppeteer`,`Security Testing (Burp Suite)`,`Test Automation (Frontend/Backend)`,`Unit Testing`]},versionControlCollaboration:{display:`Version Control & Collaboration`,skills:[`Git`,`GitHub`,`Linear`,`Obsidian`]},operatingSystems:{display:`Operating Systems`,skills:[`Linux`]}},Xr=[`Adaptability`,`Analytical skills`,`Asking questions`,`Attention to detail`,`Collaboration`,`Continuous learning`,`Critical thinking`,`Growth mindset`,`Mentoring`,`Open-mindedness`,`Openness to feedback`,`Persistence`,`Problem solving`,`Remote working`,`Resilience`,`Self-motivation`],Zr=[{slug:`crochet-management-system`,title:`Crochet Management System Design`,shortTitle:`Crochet Management System Design`,started:`09/2024`,ended:`09/2024`,component:Rr},{slug:`engineering-intangible`,title:`Engineering the Intangible: The Essential Handbook for Engineers Who Refuse to Lose Their Minds While Navigating a World Where the Only Certainty Is That Your Stack Will Never Stop Changing`,shortTitle:`Engineering the Intangible`,started:`07/2024`,ended:`Present (Research Phase)`,component:Wr}],Qr=[{title:`Assumptions in System Design: Avoiding the Hidden Traps`,abstract:`In system design, assumptions—whether explicit or hidden—play a crucial role in shaping the success and stability of complex systems. However, when left unchecked, especially when influenced by cognitive biases, these assumptions can lead to serious risks and system failures. This article takes a closer look at the challenge of identifying and managing hidden assumptions that can impact performance, scalability, and reliability. Traditional methods like cross-team reviews and standard testing often miss these implicit assumptions until they create critical issues. To help mitigate these risks, this article presents practical strategies such as scenario planning, designing for failure, and validating assumptions through thorough testing. A real-world example—the failure of NASA's Mars Climate Orbiter—highlights the importance of these practices. A simple, unexamined assumption about units of measurement led to a 125 million mission loss. By proactively managing assumptions, teams can reduce errors, improve communication, and build systems that are far more resilient and reliable.`,comment:`This article is an introduction to a series on assumptions in system design, covering topics such as managing technical, security, and business assumptions, mitigating cognitive biases, and best practices for validating assumptions throughout the system lifecycle.`,started:`10/2024`,ended:`10/2024`,pdfFileName:`assumptions_in_system_design.pdf`}],$r=[{language:`Polish`,level:`Native proficiency`},{language:`English`,level:`Full professional proficiency`},{language:`Czech`,level:`Professional working proficiency`},{language:`Spanish`,level:`Elementary proficiency`}],ei={aboutMe:`fa-solid fa-ghost`,contact:`fa-solid fa-address-book`,education:`fa-solid fa-user-graduate`,experience:`fa-solid fa-person-digging`,externalLink:`fa-solid fa-link`,favourite:`fa-solid fa-heart`,futureTechstack:`fa-solid fa-book-open-reader`,generalInterests:`fa-solid fa-book-open-reader`,headline:`fa-solid fa-code`,projects:`fa-solid fa-person-walking-luggage`,softSkills:`fa-solid fa-people-pulling`,spokenLanguages:`fa-solid fa-language`,summary:`fa-solid fa-user-pen`,technologies:`fa-solid fa-user-astronaut`};export{ei as a,Xr as c,qr as i,$r as l,Qr as n,Jr as o,Kr as r,Zr as s,Gr as t,Yr as u};