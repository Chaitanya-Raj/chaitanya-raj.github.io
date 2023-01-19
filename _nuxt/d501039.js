(window.webpackJsonp=window.webpackJsonp||[]).push([[9,2,3,4,5,6,7,8],{270:function(t,e,n){"use strict";n.r(e);var o={},r=n(36),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"md:flex flex-row items-center justify-between hidden pt-8"},[e("a",{attrs:{href:"#home"}},[e("nuxt-img",{attrs:{src:"logo.svg",alt:"Chaitanya Raj Logo",placeholder:""}})],1),t._v(" "),t._m(0)])}),[function(){var t=this,e=t._self._c;return e("nav",{staticClass:"font-body md:pt-0 flex items-center pt-4 space-x-4 font-bold"},[e("a",{staticClass:"highlight",attrs:{href:"#projects"}},[t._v("my work")]),t._v(" "),e("a",{staticClass:"highlight",attrs:{href:"#about"}},[t._v("about me")]),t._v(" "),e("a",{staticClass:"highlight",attrs:{href:"https://blog.chaitanyaraj.dev/"}},[t._v("my blog")]),t._v(" "),e("a",{staticClass:"highlight",attrs:{href:"#contact"}},[t._v("get in touch")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(270).default})},271:function(t,e,n){"use strict";n.r(e);var o={},r=n(36),component=Object(r.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"lg:py-32 flex flex-col items-start justify-center flex-1 py-10"},[e("h1",{staticClass:"font-display lg:text-6xl max-w-4xl text-4xl"},[t._v("\n    Hi, I’m Chaitanya, Web Developer and UI Designer\n  ")]),t._v(" "),e("p",{staticClass:"font-body max-w-[735px] mt-6 mb-16 text-lg"},[t._v("\n    I'm a fullstack web developer from New Delhi and a CS alumni of the\n    University of Delhi. I have worked with React (NextJS) / Vue (NuxtJS) for\n    front-end dev, Node.js for back-end, Webflow for no-code dev and Figma for\n    web design.\n    "),e("br"),t._v("\n    I write sometimes.\n  ")]),t._v(" "),e("a",{staticClass:"hover:scale-105 relative transition-all shadow-lg",attrs:{href:"#projects"}},[e("button",{staticClass:"font-button relative z-10 px-6 py-4 text-lg text-white bg-black rounded"},[t._v("\n      see my work\n    ")]),t._v(" "),e("div",{staticClass:"-bottom-4 -right-4 font-button absolute px-6 py-4 text-lg text-white border-4 border-white rounded shadow-lg opacity-50"},[t._v("\n      see my work\n    ")])])])}],!1,null,null,null);e.default=component.exports},272:function(t,e,n){"use strict";n.r(e);n(22),n(49);var o={props:{project:Object}},r=n(36),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"lg:flex-row lg:px-32 lg:space-x-10 md:px-10 flex flex-col px-4 m-4 space-y-8"},[e("div",{staticClass:"flex items-center justify-center max-w-4xl"},[e("a",{attrs:{href:t.project.deployed}},[e("nuxt-img",{staticClass:"hover:shadow-xl hover:scale-110 lg:scale-100 lg:hover:scale-105 transition-all scale-105 rounded shadow-lg",attrs:{src:t.project.preview,alt:"Project Preview"}})],1)]),t._v(" "),e("div",{staticClass:"flex flex-col items-start justify-center w-full"},[e("p",{staticClass:"font-body font-bold tracking-widest text-gray-500 uppercase"},[t._v("\n      concept\n    ")]),t._v(" "),e("a",{staticClass:"highlight",attrs:{href:t.project.source}},[e("h2",{staticClass:"font-display md:text-5xl mt-2 text-4xl"},[t._v("\n        "+t._s(t.project.title)+"\n      ")])]),t._v(" "),e("div",{staticClass:"flex gap-2 mt-4"},t._l(t.project.tags,(function(n){return e("span",{key:n,staticClass:"bg-lavender px-4 py-1 text-xs font-medium text-gray-700 rounded"},[t._v(t._s(n))])})),0),t._v(" "),e("p",{staticClass:"font-body md:text-xl mt-5"},[t._v("\n      "+t._s(t.project.description)+"\n    ")])])])}),[],!1,null,null,null);e.default=component.exports},273:function(t,e,n){"use strict";n.r(e);var o=n(271),r=n(270),l={components:{Hero:o.default,Header:r.default}},c=n(36),component=Object(c.a)(l,(function(){var t=this._self._c;return t("section",{staticClass:"bg-lavender flex flex-col min-h-[calc(100vh-32px)] lg:px-32 m-4 px-10 shadow-lg rounded",attrs:{id:"home"}},[t("Header"),this._v(" "),t("Hero")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(270).default,Hero:n(271).default})},274:function(t,e,n){"use strict";n.r(e);var o={components:{Project:n(272).default},data:function(){return{projects:[{title:"Nuxttube",description:"A responsive clone of the Youtube homepage made with Nuxt. Uses TailwindCSS for styling. Inspiration taken my personal youtube feed :)",preview:"/nuxt-tube.webp",source:"https://github.com/Chaitanya-Raj/youtube-nuxt",deployed:"https://chaitanya-raj.github.io/youtube-nuxt",tags:["Nuxt","Vue","TailwindCSS"]},{title:"Amazon",description:"A clone of Amazon made with React and Firebase under the hood. Uses stripe as the payment backend. Features the login, cart and checkout functionalities. ",preview:"amazon-clone.webp",source:"https://github.com/Chaitanya-Raj/amazon-clone",deployed:"https://clone-c36a5.web.app/",tags:["React","Firebase","Stripe"]},{title:"Chatroom",description:"A simple anonymous chatroom which remembers nothing. Live in the moment ;)",preview:"chatroom.webp",source:"https://github.com/Chaitanya-Raj/chatroom",deployed:"https://thawing-brushlands-22272.herokuapp.com/",tags:["React","Express","NodeJS","WebSocket"]},{title:"Github Timeline",description:"Shows a timeline of a users  recent activities on Github. Uses GraphQL to fetch only the data that is required, no more no less.",preview:"github-timeline.webp",source:"https://github.com/Chaitanya-Raj/timeline",deployed:"https://chaitanya-raj.github.io/timeline",tags:["React","GraphQL"]},{title:"Password Generator",description:"A password generator for the times when you need a secure password quick and aren't in the mood of using a variation of firstname1234.",preview:"password-generator.webp",source:"https://github.com/Chaitanya-Raj/password-generator",deployed:"https://chaitanya-raj.github.io/password-generator",tags:["React"]},{title:"Aria Oslo",description:"A concept portfolio site for a ficitonal client. A 3 page static site made entirely with HTML and CSS.",preview:"aria-oslo.webp",source:"https://github.com/Chaitanya-Raj/aria-oslo",deployed:"https://chaitanya-raj.github.io/aria-oslo",tags:["HTML5","CSS3","Figma"]}]}}},r=n(36),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"flex flex-col min-h-[calc(100vh-32px)] space-y-20 my-16 py-4",attrs:{id:"projects"}},t._l(t.projects,(function(t){return e("Project",{key:t.title,staticClass:"even:flex-col lg:even:flex-row-reverse lg:even:space-x-reverse",attrs:{project:t}})})),1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Project:n(272).default})},275:function(t,e,n){"use strict";n.r(e);var o={},r=n(36),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"min-h-min m-4 space-x-4 items-center justify-start lg:px-32 md:px-10 px-4 py-4 min-h-[calc(100vh-32px)] lg:flex-row flex flex-col my-8 space-y-10 lg:space-x-10",attrs:{id:"about"}},[e("div",{staticClass:"flex items-center justify-center"},[e("nuxt-img",{staticClass:"rounded shadow-lg",attrs:{src:"headshot.webp",alt:"chaitanya's headshot"}})],1),t._v(" "),t._m(0)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col space-y-5 max-w-[800px]"},[e("h2",{staticClass:"font-display text-5xl"},[t._v("Who Am I?")]),t._v(" "),e("div",{staticClass:"font-body md:text-xl flex flex-col space-y-4"},[e("p",[t._v("\n        Hi, I'm Chaitanya. I'm a web developer from New Delhi and a CS alumni\n        of the University of Delhi. I have a wide variety of interests,\n        ranging from Web Dev, Design, CyberSecurity and AI/ML to History,\n        Geopolitics, Psychology, Linguistics and Art.\n      ")]),t._v(" "),e("p",[t._v("\n        I love to learn new things. Curiosity is the prime motivator for me.\n        If I find something that catches my eye, well, I'll be in my room\n        tinkering with it for the next few weeks.\n      ")]),t._v(" "),e("p",[t._v("\n        I love playing\n        "),e("a",{staticClass:"highlight",attrs:{href:"https://lichess.org/@/ChaitanyaRaj",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chess")]),t._v("\n        and reading any\n        "),e("a",{staticClass:"highlight",attrs:{href:"https://www.goodreads.com/user/show/97716082-chaitanya",target:"_blank",rel:"noopener noreferrer"}},[t._v("books")]),t._v("\n        that I can lay my hands on. I'm especially interested in Sci-Fi and\n        non-fiction that can provide me a new perspective to look at the world\n        through. I'm currently learning UI Design and Figma in my spare time.\n      ")]),t._v(" "),e("p",[t._v("\n        I also love listening to\n        "),e("a",{staticClass:"highlight",attrs:{href:"https://open.spotify.com/artist/2FwDTncULUnmANIh7qKa5z",target:"_blank",rel:"noopener noreferrer"}},[t._v("FKJ")]),t._v("\n        . He's my second favorite recording artist after lofi chillhop beats\n        to study/relax to ;)\n      ")])])])}],!1,null,null,null);e.default=component.exports},277:function(t,e,n){var content=n(283);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(116).default)("ad3c3318",content,!0,{sourceMap:!1})},278:function(t,e,n){"use strict";n.r(e);var o={},r=n(36),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"bg-lavender flex min-h-[calc(100vh-32px)] lg:px-32 m-4 px-10 shadow-lg items-center justify-center rounded",attrs:{id:"contact"}},[e("div",{staticClass:"flex flex-col items-center flex-1"},[e("h1",{staticClass:"font-display md:text-5xl mb-3 text-3xl"},[t._v("Get In Touch")]),t._v(" "),e("p",{staticClass:"font-body md:text-xl max-w-sm mb-8 text-lg text-center"},[t._v("\n      Contact me below and I’ll try to get back to you as soon as I can.\n    ")]),t._v(" "),t._m(0),t._v(" "),e("p",{staticClass:"font-body my-6 text-2xl font-bold"},[t._v("or")]),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"social md:text-5xl flex justify-end flex-1 space-x-4 text-4xl"},[e("a",{staticClass:"hover:scale-110 transition-all",attrs:{href:"https://github.com/Chaitanya-Raj",title:"github"}},[e("font-awesome-icon",{attrs:{icon:"fa-brands fa-github fa-3x"}})],1),t._v(" "),e("a",{staticClass:"hover:scale-110 transition-all",attrs:{href:"https://www.linkedin.com/in/chaitanyarajdixit/",title:"linkedin"}},[e("font-awesome-icon",{attrs:{icon:"fa-brands fa-linkedin fa-3x"}})],1),t._v(" "),e("a",{staticClass:"hover:scale-110 transition-all",attrs:{href:"https://www.instagram.com/_chaitanya.raj/",title:"instagram"}},[e("font-awesome-icon",{attrs:{icon:"fa-brands fa-instagram fa-3x"}})],1),t._v(" "),e("a",{staticClass:"hover:scale-110 transition-all",attrs:{href:"https://twitter.com/0xClef",title:"twitter"}},[e("font-awesome-icon",{attrs:{icon:"fa-brands fa-twitter fa-3x"}})],1),t._v(" "),e("a",{staticClass:"hover:scale-110 transition-all",attrs:{href:"Chaitanya-Raj.pdf",target:"_blank",title:"resume"}},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-file-alt fa-3x"}})],1)])])])}),[function(){var t=this,e=t._self._c;return e("form",{staticClass:"flex flex-col 2xl:w-[50%] md:w-[80%] w-full space-y-4 text-xl",attrs:{action:"https://formspree.io/f/xknejgor",method:"POST"}},[e("input",{staticClass:"form-control bg-clip-padding margin block px-4 py-2 m-0 text-xl font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded",attrs:{type:"text",name:"name",placeholder:"Name"}}),t._v(" "),e("input",{staticClass:"form-control bg-clip-padding block px-4 py-2 m-0 text-xl font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded",attrs:{type:"email",name:"email",placeholder:"Email"}}),t._v(" "),e("textarea",{staticClass:"form-control bg-clip-padding block h-48 px-4 py-2 m-0 text-xl font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded resize-none",attrs:{name:"message",placeholder:"Message"}}),t._v(" "),e("button",{staticClass:"font-button hover:scale-105 hover:shadow-xl px-6 py-4 text-xl text-white transition-all bg-black rounded shadow-lg",attrs:{type:"submit"}},[t._v("\n        Send\n      ")])])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"font-body md:text-xl pb-6 mb-6 text-lg text-center border-b border-black"},[t._v("\n      you can email me at\n\n      "),e("a",{staticClass:"highlight",attrs:{href:"mailto:chaitanyarajdixit@gmail.com"}},[t._v("\n        chaitanyarajdixit@gmail.com\n      ")])])}],!1,null,null,null);e.default=component.exports},282:function(t,e,n){"use strict";n(277)},283:function(t,e,n){var o=n(115)((function(i){return i[1]}));o.push([t.i,"html{scroll-behavior:smooth;background:#f8f8ff}.highlight{color:#000;text-decoration:none;background-position-y:0;background-image:linear-gradient(transparent,#a8b4ff 80%);transition:background .5s ease;background-size:auto 175%;padding:0 4px;border-radius:4px}a:hover{background-position-y:100%}",""]),o.locals={},t.exports=o},289:function(t,e,n){"use strict";n.r(e);var o=n(1),r=n(273),l=n(274),c=n(275),d=n(276),h=n(279),f=n(280),m=n(281);d.c.add(f.d,f.b,f.c,f.a,m.a,m.b),o.a.component("font-awesome-icon",h.a);var x=o.a.extend({name:"IndexPage",components:{Home:r.default,Projects:l.default,About:c.default}}),v=(n(282),n(36)),component=Object(v.a)(x,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("Home"),t._v(" "),e("Projects"),t._v(" "),e("About"),t._v(" "),e("Contact")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Home:n(273).default,Projects:n(274).default,About:n(275).default,Contact:n(278).default})}}]);