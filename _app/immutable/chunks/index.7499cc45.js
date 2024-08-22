import{s as T,n as B}from"./scheduler.44f0c9fa.js";import{S as j,i as M,k as C,s as b,e as g,l as x,f as $,c as h,B as y,n as P,g as p,o as S,p as k,d as l,q as L,t as I,a as A,b as z,h as R,j as H}from"./index.38696491.js";import{L as D}from"./List.06927d60.js";function U(u){let e,i=u[0].status+"",n;return{c(){e=g("li"),n=I(i)},l(a){e=h(a,"LI",{});var s=A(e);n=z(s,i),s.forEach(l)},m(a,s){p(a,e,s),R(e,n)},p(a,s){s&1&&i!==(i=a[0].status+"")&&H(n,i)},d(a){a&&l(e)}}}function J(u){let e,i=`generating <a href="https://plantuml.com/" rel="noopener" target="_blank">PlantUML</a>
    diagrams.`,n,a,s="diagrams' storage and retrieval.",r,d,o=`HTML &lt;--&gt; <a href="https://prismjs.com/" rel="noopener" target="_blank">Prism</a>
    conversion.`;return{c(){e=g("li"),e.innerHTML=i,n=b(),a=g("li"),a.textContent=s,r=b(),d=g("li"),d.innerHTML=o},l(t){e=h(t,"LI",{"data-svelte-h":!0}),y(e)!=="svelte-tn1atf"&&(e.innerHTML=i),n=$(t),a=h(t,"LI",{"data-svelte-h":!0}),y(a)!=="svelte-8ecb9n"&&(a.textContent=s),r=$(t),d=h(t,"LI",{"data-svelte-h":!0}),y(d)!=="svelte-5kmjes"&&(d.innerHTML=o)},m(t,c){p(t,e,c),p(t,n,c),p(t,a,c),p(t,r,c),p(t,d,c)},p:B,d(t){t&&(l(e),l(n),l(a),l(r),l(d))}}}function N(u){let e,i,n,a=`Custom scripts (TypeScript) and styling (Sass) for <a href="https://apps.ankiweb.net/" rel="noopener" target="_blank">Anki</a>
  flashcards.`,s,r,d="CLI tools (Node/TypeScript) for",o,t,c,v,m=`<button type="button" class="nes-btn is-disabled"><i class="nes-icon github-square is-small"></i>
    Private repository</button>`,_;return e=new D({props:{caption:"Status",showMarkers:!1,$$slots:{default:[U]},$$scope:{ctx:u}}}),t=new D({props:{$$slots:{default:[J]},$$scope:{ctx:u}}}),{c(){C(e.$$.fragment),i=b(),n=g("p"),n.innerHTML=a,s=b(),r=g("p"),r.textContent=d,o=b(),C(t.$$.fragment),c=b(),v=g("p"),v.innerHTML=m},l(f){x(e.$$.fragment,f),i=$(f),n=h(f,"P",{"data-svelte-h":!0}),y(n)!=="svelte-sbaycm"&&(n.innerHTML=a),s=$(f),r=h(f,"P",{"data-svelte-h":!0}),y(r)!=="svelte-39gd3j"&&(r.textContent=d),o=$(f),x(t.$$.fragment,f),c=$(f),v=h(f,"P",{"data-svelte-h":!0}),y(v)!=="svelte-1ff7x8g"&&(v.innerHTML=m)},m(f,w){P(e,f,w),p(f,i,w),p(f,n,w),p(f,s,w),p(f,r,w),p(f,o,w),P(t,f,w),p(f,c,w),p(f,v,w),_=!0},p(f,[w]){const q={};w&3&&(q.$$scope={dirty:w,ctx:f}),e.$set(q);const E={};w&2&&(E.$$scope={dirty:w,ctx:f}),t.$set(E)},i(f){_||(S(e.$$.fragment,f),S(t.$$.fragment,f),_=!0)},o(f){k(e.$$.fragment,f),k(t.$$.fragment,f),_=!1},d(f){f&&(l(i),l(n),l(s),l(r),l(o),l(c),l(v)),L(e,f),L(t,f)}}}function W(u,e,i){let{project:n}=e;return u.$$set=a=>{"project"in a&&i(0,n=a.project)},[n]}class V extends j{constructor(e){super(),M(this,e,W,N,T,{project:0})}}function Q(u){let e,i=u[0].status+"",n;return{c(){e=g("li"),n=I(i)},l(a){e=h(a,"LI",{});var s=A(e);n=z(s,i),s.forEach(l)},m(a,s){p(a,e,s),R(e,n)},p(a,s){s&1&&i!==(i=a[0].status+"")&&H(n,i)},d(a){a&&l(e)}}}function G(u){let e,i="Database of crochet patterns.",n,a,s="Database of yarns.",r,d,o="Various tools and calculators for patterns/projects/yarns management.";return{c(){e=g("li"),e.textContent=i,n=b(),a=g("li"),a.textContent=s,r=b(),d=g("li"),d.textContent=o},l(t){e=h(t,"LI",{"data-svelte-h":!0}),y(e)!=="svelte-proamt"&&(e.textContent=i),n=$(t),a=h(t,"LI",{"data-svelte-h":!0}),y(a)!=="svelte-10yx669"&&(a.textContent=s),r=$(t),d=h(t,"LI",{"data-svelte-h":!0}),y(d)!=="svelte-1u3u7ym"&&(d.textContent=o)},m(t,c){p(t,e,c),p(t,n,c),p(t,a,c),p(t,r,c),p(t,d,c)},p:B,d(t){t&&(l(e),l(n),l(a),l(r),l(d))}}}function O(u){let e,i,n,a,s,r=`<button type="button" class="nes-btn is-disabled"><i class="nes-icon github-square is-small"></i>
    Private repository</button>`,d;return e=new D({props:{caption:"Status",showMarkers:!1,$$slots:{default:[Q]},$$scope:{ctx:u}}}),n=new D({props:{$$slots:{default:[G]},$$scope:{ctx:u}}}),{c(){C(e.$$.fragment),i=b(),C(n.$$.fragment),a=b(),s=g("p"),s.innerHTML=r},l(o){x(e.$$.fragment,o),i=$(o),x(n.$$.fragment,o),a=$(o),s=h(o,"P",{"data-svelte-h":!0}),y(s)!=="svelte-1ff7x8g"&&(s.innerHTML=r)},m(o,t){P(e,o,t),p(o,i,t),P(n,o,t),p(o,a,t),p(o,s,t),d=!0},p(o,[t]){const c={};t&3&&(c.$$scope={dirty:t,ctx:o}),e.$set(c);const v={};t&2&&(v.$$scope={dirty:t,ctx:o}),n.$set(v)},i(o){d||(S(e.$$.fragment,o),S(n.$$.fragment,o),d=!0)},o(o){k(e.$$.fragment,o),k(n.$$.fragment,o),d=!1},d(o){o&&(l(i),l(a),l(s)),L(e,o),L(n,o)}}}function F(u,e,i){let{project:n}=e;return u.$$set=a=>{"project"in a&&i(0,n=a.project)},[n]}class K extends j{constructor(e){super(),M(this,e,F,O,T,{project:0})}}function X(u){let e,i=u[0].status+"",n;return{c(){e=g("li"),n=I(i)},l(a){e=h(a,"LI",{});var s=A(e);n=z(s,i),s.forEach(l)},m(a,s){p(a,e,s),R(e,n)},p(a,s){s&1&&i!==(i=a[0].status+"")&&H(n,i)},d(a){a&&l(e)}}}function Y(u){let e,i,n,a="Prepare for behavioral interviews like a pro.",s,r,d=`<button type="button" class="nes-btn is-disabled"><i class="nes-icon github-square is-small"></i>
    Public soon</button>`,o;return e=new D({props:{caption:"Status",showMarkers:!1,$$slots:{default:[X]},$$scope:{ctx:u}}}),{c(){C(e.$$.fragment),i=b(),n=g("p"),n.textContent=a,s=b(),r=g("p"),r.innerHTML=d},l(t){x(e.$$.fragment,t),i=$(t),n=h(t,"P",{"data-svelte-h":!0}),y(n)!=="svelte-1cy67pe"&&(n.textContent=a),s=$(t),r=h(t,"P",{"data-svelte-h":!0}),y(r)!=="svelte-liw4it"&&(r.innerHTML=d)},m(t,c){P(e,t,c),p(t,i,c),p(t,n,c),p(t,s,c),p(t,r,c),o=!0},p(t,[c]){const v={};c&3&&(v.$$scope={dirty:c,ctx:t}),e.$set(v)},i(t){o||(S(e.$$.fragment,t),o=!0)},o(t){k(e.$$.fragment,t),o=!1},d(t){t&&(l(i),l(n),l(s),l(r)),L(e,t)}}}function Z(u,e,i){let{project:n}=e;return u.$$set=a=>{"project"in a&&i(0,n=a.project)},[n]}class ee extends j{constructor(e){super(),M(this,e,Z,Y,T,{project:0})}}function te(u){let e,i=u[0].status+"",n;return{c(){e=g("li"),n=I(i)},l(a){e=h(a,"LI",{});var s=A(e);n=z(s,i),s.forEach(l)},m(a,s){p(a,e,s),R(e,n)},p(a,s){s&1&&i!==(i=a[0].status+"")&&H(n,i)},d(a){a&&l(e)}}}function ne(u){let e,i,n,a='Easy management of <a href="https://plantuml.com/" rel="noopener" target="_blank">PlantUML</a> diagrams.',s,r,d='<a href="https://github.com/burczan/plantuml-is-your-friend" rel="noopener" target="_blank"><button type="button" class="nes-btn"><i class="nes-icon github-square is-small"></i></button></a>',o;return e=new D({props:{caption:"Status",showMarkers:!1,$$slots:{default:[te]},$$scope:{ctx:u}}}),{c(){C(e.$$.fragment),i=b(),n=g("p"),n.innerHTML=a,s=b(),r=g("p"),r.innerHTML=d},l(t){x(e.$$.fragment,t),i=$(t),n=h(t,"P",{"data-svelte-h":!0}),y(n)!=="svelte-umzvhf"&&(n.innerHTML=a),s=$(t),r=h(t,"P",{"data-svelte-h":!0}),y(r)!=="svelte-1lw9kh1"&&(r.innerHTML=d)},m(t,c){P(e,t,c),p(t,i,c),p(t,n,c),p(t,s,c),p(t,r,c),o=!0},p(t,[c]){const v={};c&3&&(v.$$scope={dirty:c,ctx:t}),e.$set(v)},i(t){o||(S(e.$$.fragment,t),o=!0)},o(t){k(e.$$.fragment,t),o=!1},d(t){t&&(l(i),l(n),l(s),l(r)),L(e,t)}}}function ae(u,e,i){let{project:n}=e;return u.$$set=a=>{"project"in a&&i(0,n=a.project)},[n]}class ie extends j{constructor(e){super(),M(this,e,ae,ne,T,{project:0})}}function se(u){let e,i=u[0].status+"",n;return{c(){e=g("li"),n=I(i)},l(a){e=h(a,"LI",{});var s=A(e);n=z(s,i),s.forEach(l)},m(a,s){p(a,e,s),R(e,n)},p(a,s){s&1&&i!==(i=a[0].status+"")&&H(n,i)},d(a){a&&l(e)}}}function oe(u){let e,i,n,a=`Compare price of two toilet paper rolls depending on amount of layers and
  leafs.`,s,r,d=`<a href="https://github.com/burczan/toiper" rel="noopener" target="_blank"><button type="button" class="nes-btn"><i class="nes-icon github-square is-small"></i>
      Python CLI version</button></a> <a href="https://github.com/burczan/toiper-react" rel="noopener" target="_blank"><button type="button" class="nes-btn"><i class="nes-icon github-square is-small"></i>
      React GUI version</button></a>`,o;return e=new D({props:{caption:"Status",showMarkers:!1,$$slots:{default:[se]},$$scope:{ctx:u}}}),{c(){C(e.$$.fragment),i=b(),n=g("p"),n.textContent=a,s=b(),r=g("p"),r.innerHTML=d},l(t){x(e.$$.fragment,t),i=$(t),n=h(t,"P",{"data-svelte-h":!0}),y(n)!=="svelte-1sah0lg"&&(n.textContent=a),s=$(t),r=h(t,"P",{"data-svelte-h":!0}),y(r)!=="svelte-1o6qsbs"&&(r.innerHTML=d)},m(t,c){P(e,t,c),p(t,i,c),p(t,n,c),p(t,s,c),p(t,r,c),o=!0},p(t,[c]){const v={};c&3&&(v.$$scope={dirty:c,ctx:t}),e.$set(v)},i(t){o||(S(e.$$.fragment,t),o=!0)},o(t){k(e.$$.fragment,t),o=!1},d(t){t&&(l(i),l(n),l(s),l(r)),L(e,t)}}}function re(u,e,i){let{project:n}=e;return u.$$set=a=>{"project"in a&&i(0,n=a.project)},[n]}class le extends j{constructor(e){super(),M(this,e,re,oe,T,{project:0})}}function ce(u){let e,i=u[0].status+"",n;return{c(){e=g("li"),n=I(i)},l(a){e=h(a,"LI",{});var s=A(e);n=z(s,i),s.forEach(l)},m(a,s){p(a,e,s),R(e,n)},p(a,s){s&1&&i!==(i=a[0].status+"")&&H(n,i)},d(a){a&&l(e)}}}function ue(u){let e,i,n,a=`Display pressure values from last 4 hours for Liberec station and warn if
  change can be dangerous.`,s,r,d='Data source: <a href="https://www.chmi.cz/" rel="noopener" target="_blank">Český hydrometeorologický ústav</a>.',o,t,c='<a href="https://github.com/burczan/under-pressure" rel="noopener" target="_blank"><button type="button" class="nes-btn"><i class="nes-icon github-square is-small"></i></button></a>',v;return e=new D({props:{caption:"Status",showMarkers:!1,$$slots:{default:[ce]},$$scope:{ctx:u}}}),{c(){C(e.$$.fragment),i=b(),n=g("p"),n.textContent=a,s=b(),r=g("p"),r.innerHTML=d,o=b(),t=g("p"),t.innerHTML=c},l(m){x(e.$$.fragment,m),i=$(m),n=h(m,"P",{"data-svelte-h":!0}),y(n)!=="svelte-3b8b9s"&&(n.textContent=a),s=$(m),r=h(m,"P",{"data-svelte-h":!0}),y(r)!=="svelte-9vokzh"&&(r.innerHTML=d),o=$(m),t=h(m,"P",{"data-svelte-h":!0}),y(t)!=="svelte-1xz8e3o"&&(t.innerHTML=c)},m(m,_){P(e,m,_),p(m,i,_),p(m,n,_),p(m,s,_),p(m,r,_),p(m,o,_),p(m,t,_),v=!0},p(m,[_]){const f={};_&3&&(f.$$scope={dirty:_,ctx:m}),e.$set(f)},i(m){v||(S(e.$$.fragment,m),v=!0)},o(m){k(e.$$.fragment,m),v=!1},d(m){m&&(l(i),l(n),l(s),l(r),l(o),l(t)),L(e,m)}}}function pe(u,e,i){let{project:n}=e;return u.$$set=a=>{"project"in a&&i(0,n=a.project)},[n]}class de extends j{constructor(e){super(),M(this,e,pe,ue,T,{project:0})}}const he={name:"Natalia Pospieszyńska",role:"Software Engineer",location:{city:"Trutnov",region:"Hradec Králové",country:"Czechia",icon:"fa-solid fa-location-dot",mapUrl:"https://en.mapy.cz/turisticka?source=dist&id=36&ds=1&x=15.8373076&y=50.5704668&z=10"},contact:{linkedin:{href:"https://www.linkedin.com/in/nataliapospieszynska/",displayValue:"/nataliapospieszynska",faIconClass:"fa-brands fa-linkedin"},github:{href:"https://github.com/burczan",displayValue:"/burczan",faIconClass:"fa-brands fa-github"},web:{href:"https://burczan.github.io/me/",displayValue:"burczan.github.io/me",faIconClass:"fa-solid fa-globe"}}},ve=[{school:"Polish Naval Academy",city:"Gdynia",country:"Poland",field:"Cybersecurity",degree:"Postgraduate studies",dateRange:"2019–2020",website:"https://www.amw.gdynia.pl"},{school:"Adam Mickiewicz University",city:"Poznań",country:"Poland",field:"Philosophy",subfield:"Social Communication",degree:"Master studies",dateRange:"2013–2016",website:"https://amu.edu.pl/"},{school:"Post-Secondary Vocational School",city:"Poznań",country:"Poland",field:"Sound Engineering",degree:"Technician",dateRange:"2011–2013"},{school:"Adam Mickiewicz University",city:"Poznań",country:"Poland",field:"Instructional Technology",degree:"Bachelor's degree",dateRange:"2010–2013",website:"https://amu.edu.pl/"}],be=[{role:"Backend Engineer",company:"Capbase",startDate:"04/2021",endDate:"07/2022",description:["Implemented and enhanced new product features in TypeScript, Node.js and React, improving user experience and addressing customer feedback.","Developed and optimized an internal API with Express.js and AWS, enabling seamless data integration.","Diagnosed and resolved technical issues, improving application stability.","Wrote and maintained comprehensive unit and integration tests, ensuring high code quality and bugs reduction."],descriptionShortened:["Implemented and enhanced new features in TypeScript, Node.js and React.","Developed and optimized an internal API with Express.js and AWS.","Diagnosed and resolved technical issues.","Wrote and maintained comprehensive unit and integration tests."],technologies:["AWS","Bash","Express.js","Linux","Node.js","React","TypeScript"]},{role:"Frontend Engineer",company:"Beta District",startDate:"12/2019",endDate:"08/2020",description:["Developed reusable components in React and TypeScript for a newly created frontend, ensuring consistency and efficiency across the application.","Implemented unit and integration tests using Jest and React Testing Library, improving code reliability and reducing bugs."],descriptionShortened:["Developed reusable components in React and TypeScript for a newly created frontend.","Implemented unit and integration tests using Jest and React Testing Library."],technologies:["GraphQL","JavaScript","React","Redux","TypeScript","Unit testing"]},{role:"Test Engineer",company:"Beta District",startDate:"01/2019",endDate:"11/2019",description:["Remotely mentored QA specialist, introducing her to programming and test automation practices, enhancing the team's technical capabilities.","Developed and maintained various automated tests in JavaScript and Ruby, improving test coverage and ensuring product quality.","Contributed to frontend development by implementing basic functionalities in React, supporting the development team in delivering features."],descriptionShortened:["Remotely mentored QA specialist.","Developed and maintained automated tests in JavaScript and Ruby.","Contributed to frontend development by implementing basic functionalities in React."],technologies:["API testing","JavaScript","React","Ruby","Test automation"]},{role:"QA Specialist",company:"Beta District",startDate:"02/2018",endDate:"12/2018",description:["Conducted manual functional and API testing using Burp Suite and Postman, ensuring the reliability and accuracy of software features before deployment.","Collaborated closely with developers to implement new functionalities, providing critical feedback during the development process to enhance product quality and ensure seamless integration of new features.","Learned and applied test automation using JavaScript and Ruby, developing my skills in writing automated tests and contributing to the overall improvement of the testing process.","Performed production environment testing after each release, using manual testing techniques to identify and resolve post-deployment issues, maintaining system stability."],descriptionShortened:["Conducted manual functional and API testing using Burp Suite and Postman.","Collaborated closely with developers to implement new features.","Developing my skills in writing automated tests.","Performed production environment testing after each release."],technologies:["API testing","Burp Suite","JavaScript","Manual testing","Ruby","Test automation"]},{role:"Junior QA Specialist",company:"Beta District",startDate:"04/2017",endDate:"01/2018",description:["Performed manual testing to identify and document defects, ensuring the quality of software products before release.","Proposed and implemented more efficient testing procedures, streamlining the testing process and reducing the time needed for test execution.","Suggested improvements to projects by actively finding and reporting bugs, contributing to the overall enhancement of software quality.","Actively learned new concepts and techniques in software testing, expanding my knowledge of manual and API testing, and applying these insights to improve testing effectiveness."],descriptionShortened:["Performed manual testing to identify and document defects.","Proposed and implemented more efficient testing procedures.","Suggested improvements to projects by finding and reporting bugs.","Actively learned new concepts and techniques in software testing."],technologies:["API testing","Manual testing"]},{role:"Instructional Designer",company:"LLidero",startDate:"05/2014",endDate:"06/2016",description:["Designed and developed educational courses tailored to various learner needs, applying instructional design principles and pedagogical techniques to create effective learning experiences.","Set clear learning goals and objectives for each course, ensuring alignment with educational standards and learner outcomes.","Conducted thorough testing of courses, demonstrating strong attention to detail to identify and resolve any issues, ensuring the quality and effectiveness of instructional materials.","Collaborated with subject matter experts to gather content and ensure accuracy, integrating their expertise into the course design to enhance the learning experience."],descriptionShortened:["Designed and developed educational courses tailored to various learner needs.","Set clear learning goals and objectives for each course.","Conducted thorough testing of courses.","Collaborated with subject matter experts to gather content and ensure accuracy."]}],$e=["Algorithms and Data Structures","Artificial Intelligence","Blockchain","Crocheting","Data Science","Databases","DevOps","Distributed Systems","Mathematics","Resilience Engineering","Security"],ye=["Analytical skills","Asking questions","Attention to detail","Continuous learning","Growth mindset","Mentoring","Open-mindedness","Openness to feedback","Persistence","Problem solving","Remote working","Resilience","Self-motivation"],_e=["AWS","Bash","JavaScript","Linux","Node.js","React","Svelte","TypeScript"],we=[{title:"Anki Scripts",shortDescription:"Scripts and styling for Anki flashcards.",status:"Maintained/active development.",repository:{private:!0},component:V},{title:"Crocheting Admin Tools",shortDescription:"Personal database of yarns and crochet patterns. Various tools and calculators for patterns/projects/yarns management.",status:"Maintained/active development.",repository:{private:!0},component:K},{title:"Intraview",shortDescription:"Prepare for behavioral interviews like a pro.",status:"Active development.",repository:{private:!0,github:"Public soon"},component:ee},{title:"PlantUML-is-your-friend",shortDescription:"Easy management of PlantUML diagrams.",status:"Maintained/active development.",repository:{private:!1,github:"https://github.com/burczan/plantuml-is-your-friend"},component:ie},{title:"Toiper",shortDescription:"Compare price of two toilet paper rolls depending on amount of layers and leafs.",status:"Current versions deprecated. Working on improved comparison algorithm.",repository:{private:!1,github:"https://github.com/burczan/toiper"},component:le},{title:"Under Pressure",shortDescription:"Display pressure values from last 4 hours for Liberec station and warn if change can be dangerous.",status:"Deprecated.",repository:{private:!1,github:"https://github.com/burczan/under-pressure"},component:de}],Ce=[{language:"Polish",level:"Native proficiency"},{language:"English",level:"Full professional proficiency"},{language:"Czech",level:"Limited working proficiency"}],xe={contact:"fa-solid fa-address-book",education:"fa-solid fa-graduation-cap",experience:"fa-solid fa-person-digging",favourite:"fa-solid fa-heart",futureTechstack:"fa-solid fa-book-open-reader",generalInterests:"fa-solid fa-brain",headline:"fa-solid fa-code",softSkills:"fa-solid fa-people-pulling",spokenLanguages:"fa-solid fa-language",summary:"fa-solid fa-user-pen",technologies:"fa-solid fa-gears"};export{he as a,be as b,ye as c,ve as e,xe as f,$e as g,we as p,Ce as s,_e as t};
