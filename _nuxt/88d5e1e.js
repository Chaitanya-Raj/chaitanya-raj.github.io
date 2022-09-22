(window.webpackJsonp=window.webpackJsonp||[]).push([[9,2,3,4,5,6,7,8],{270:function(t,e,o){"use strict";o.r(e);var n={},r=o(36),component=Object(r.a)(n,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("header",{staticClass:"md:flex flex-row items-center justify-between hidden pt-8"},[e("a",{attrs:{href:"#home"}},[e("img",{attrs:{src:"logo.svg",alt:"Chaitanya Raj Logo"}})]),t._v(" "),e("nav",{staticClass:"font-body md:pt-0 flex items-center pt-4 space-x-4 font-bold"},[e("a",{staticClass:"highlight",attrs:{href:"#projects"}},[t._v("my work")]),t._v(" "),e("a",{staticClass:"highlight",attrs:{href:"#about"}},[t._v("about me")]),t._v(" "),e("a",{staticClass:"highlight",attrs:{href:"#contact"}},[t._v("get in touch")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:o(270).default})},271:function(t,e,o){"use strict";o.r(e);var n={},r=o(36),component=Object(r.a)(n,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"lg:py-32 flex flex-col items-start justify-center flex-1 max-w-3xl py-10"},[e("h1",{staticClass:"font-display lg:text-6xl text-4xl"},[t._v("\n    Hi, I’m Chaitanya, Web Developer and UI/UX Designer\n  ")]),t._v(" "),e("p",{staticClass:"font-body mt-6 mb-16 text-lg"},[t._v("\n    I'm a web developer from New Delhi and a CS alumni of the University of\n    Delhi. I have worked with React (NextJS) / Vue (NuxtJS) for front-end\n    development, Node.js, Webflow for no-code dev and Figma for web design.\n    "),e("br"),t._v("\n    I write sometimes.\n  ")]),t._v(" "),e("a",{staticClass:"hover:scale-105 relative transition-all shadow-lg",attrs:{href:"#projects"}},[e("button",{staticClass:"font-button relative z-10 px-6 py-4 text-lg text-white bg-black"},[t._v("\n      see my work\n    ")]),t._v(" "),e("div",{staticClass:"-bottom-4 -right-4 font-button absolute px-6 py-4 text-lg text-white border-4 border-white shadow-lg opacity-50"},[t._v("\n      see my work\n    ")])])])}],!1,null,null,null);e.default=component.exports},272:function(t,e,o){"use strict";o.r(e);o(22),o(49);var n={props:{project:Object}},r=o(36),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"lg:flex-row lg:px-32 lg:space-x-10 md:px-10 flex flex-col px-4 m-4 space-y-8"},[e("div",{staticClass:"flex items-center justify-center max-w-4xl"},[e("a",{attrs:{href:t.project.deployed}},[e("nuxt-img",{staticClass:"hover:shadow-xl hover:scale-110 lg:scale-100 lg:hover:scale-105 transition-all scale-105 shadow-lg",attrs:{src:t.project.preview,alt:"Project Preview",placeholder:""}})],1)]),t._v(" "),e("div",{staticClass:"flex flex-col items-start justify-center"},[e("p",{staticClass:"font-body font-bold text-gray-400 uppercase"},[t._v("concept")]),t._v(" "),e("a",{staticClass:"highlight",attrs:{href:t.project.source}},[e("h2",{staticClass:"font-display md:text-5xl mt-2 text-4xl"},[t._v("\n        "+t._s(t.project.title)+"\n      ")])]),t._v(" "),e("p",{staticClass:"font-body md:text-xl mt-6"},[t._v("\n      "+t._s(t.project.description)+"\n    ")])])])}),[],!1,null,null,null);e.default=component.exports},273:function(t,e,o){"use strict";o.r(e);var n=o(271),r=o(270),l={components:{Hero:n.default,Header:r.default}},c=o(36),component=Object(c.a)(l,(function(){var t=this._self._c;return t("section",{staticClass:"bg-lavender flex flex-col min-h-[calc(100vh-32px)] lg:px-32 m-4 px-10 shadow-lg",attrs:{id:"home"}},[t("Header"),this._v(" "),t("Hero")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:o(270).default,Hero:o(271).default})},274:function(t,e,o){"use strict";o.r(e);var n={components:{Project:o(272).default},data:function(){return{projects:[{title:"Nuxttube",description:"A clone of the Youtube Frontend made with NuxtJS 2.",preview:"/nuxt-tube.png",source:"https://github.com/Chaitanya-Raj/youtube-nuxt",deployed:"https://chaitanya-raj.github.io/youtube-nuxt"},{title:"Amazon",description:"A clone of Amazon made with React under the hood.",preview:"amazon-clone.png",source:"https://github.com/Chaitanya-Raj/amazon-clone",deployed:"clone-c36a5.web.app/"},{title:"Chatroom",description:"A simple anonymous chatroom which remembers nothing. Live in the moment ;)",preview:"chatroom.png",source:"https://github.com/Chaitanya-Raj/chatroom",deployed:"https://thawing-brushlands-22272.herokuapp.com/"},{title:"Github Timeline",description:"Shows a timeline of a users activities on Github.",preview:"github-timeline.png",source:"https://github.com/Chaitanya-Raj/timeline",deployed:"https://chaitanya-raj.github.io/timeline"},{title:"Password Generator",description:"A password generator for the times when you need a secure password quickly.",preview:"password-generator.png",source:"https://github.com/Chaitanya-Raj/password-generator",deployed:"https://chaitanya-raj.github.io/password-generator"},{title:"Aria Oslo",description:"A concept portfolio site for a ficitonal client.",preview:"aria-oslo.png",source:"https://github.com/Chaitanya-Raj/aria-oslo",deployed:"https://chaitanya-raj.github.io/aria-oslo"}]}}},r=o(36),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"flex flex-col min-h-[calc(100vh-32px)] space-y-20 my-16 py-4",attrs:{id:"projects"}},t._l(t.projects,(function(t){return e("Project",{key:t.title,staticClass:"even:flex-col lg:even:flex-row-reverse lg:even:space-x-reverse",attrs:{project:t}})})),1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Project:o(272).default})},275:function(t,e,o){"use strict";o.r(e);var n={},r=o(36),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"min-h-min m-4 space-x-4 bg-gradient-to-r from-white to-transparent items-center justify-start lg:px-32 md:px-10 px-4 py-4 min-h-[calc(100vh-32px)] lg:flex-row flex flex-col my-8 space-y-10 lg:space-x-10",attrs:{id:"about"}},[e("div",{staticClass:"flex items-center justify-center"},[e("nuxt-img",{staticClass:"shadow-lg",attrs:{src:"headshot.webp",alt:"",placeholder:""}})],1),t._v(" "),t._m(0)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col space-y-5 max-w-[800px]"},[e("h2",{staticClass:"font-display text-5xl"},[t._v("Who Am I?")]),t._v(" "),e("div",{staticClass:"font-body md:text-xl flex flex-col space-y-4"},[e("p",[t._v("\n        Hi, I'm Chaitanya. I'm a web developer from New Delhi and a CS alumni\n        of the University of Delhi. I have experience with front-end\n        development in React/Vue, back-end development in Node.js, web design\n        in Figma and have also dabbled a bit in Python, bash scripting,\n        CyberSecurity, CTFs and Data Science.\n      ")]),t._v(" "),e("p",[t._v("\n        I love playing\n        "),e("a",{staticClass:"highlight",attrs:{href:"https://lichess.org/@/ChaitanyaRaj",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chess")]),t._v("\n        and\n        "),e("a",{staticClass:"highlight",attrs:{href:"https://www.goodreads.com/user/show/97716082-chaitanya",target:"_blank",rel:"noopener noreferrer"}},[t._v("reading any books")]),t._v("\n        that I can lay my hands on. I'm currently learning UI Design and Figma\n        in my spare time.\n      ")]),t._v(" "),e("p",[t._v("\n        I also love listening to\n        "),e("a",{staticClass:"highlight",attrs:{href:"https://open.spotify.com/artist/3pc0bOVB5whxmD50W79wwO",target:"_blank",rel:"noopener noreferrer"}},[t._v("keshi")]),t._v("\n        . He's my second favorite recording artist after lofi chillhop beats\n        to study/relax to ;)\n      ")])])])}],!1,null,null,null);e.default=component.exports},277:function(t,e,o){var content=o(283);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(116).default)("375e78f7",content,!0,{sourceMap:!1})},278:function(t,e,o){"use strict";o.r(e);var n={},r=o(36),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"bg-lavender flex min-h-[calc(100vh-32px)] lg:px-32 m-4 px-10 shadow-lg items-center justify-center",attrs:{id:"contact"}},[e("div",{staticClass:"flex flex-col items-center flex-1"},[e("h1",{staticClass:"font-display md:text-5xl mb-3 text-3xl"},[t._v("Get In Touch")]),t._v(" "),e("p",{staticClass:"font-body md:text-xl max-w-sm mb-8 text-lg text-center"},[t._v("\n      Contact me below and I’ll try to get back to you within one business day\n    ")]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"social md:text-5xl flex justify-end flex-1 mt-8 space-x-4 text-4xl"},[e("a",{staticClass:"hover:scale-110 transition-all",attrs:{href:"https://github.com/Chaitanya-Raj"}},[e("font-awesome-icon",{attrs:{icon:"fa-brands fa-github fa-3x"}})],1),t._v(" "),e("a",{staticClass:"hover:scale-110 transition-all",attrs:{href:"https://www.linkedin.com/in/chaitanya-raj-4b3285187/"}},[e("font-awesome-icon",{attrs:{icon:"fa-brands fa-linkedin fa-3x"}})],1),t._v(" "),e("a",{staticClass:"hover:scale-110 transition-all",attrs:{href:"https://www.instagram.com/_chaitanya.raj/"}},[e("font-awesome-icon",{attrs:{icon:"fa-brands fa-instagram fa-3x"}})],1),t._v(" "),e("a",{staticClass:"hover:scale-110 transition-all",attrs:{href:"https://twitter.com/0xClef"}},[e("font-awesome-icon",{attrs:{icon:"fa-brands fa-twitter fa-3x"}})],1),t._v(" "),e("a",{staticClass:"hover:scale-110 transition-all",attrs:{href:"mailto:chaitanyarajdixit@gmail.com"}},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-envelope fa-3x"}})],1),t._v(" "),e("a",{staticClass:"hover:scale-110 transition-all",attrs:{href:"static/Chaitanya-Raj.pdf",target:"_blank"}},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-file-alt fa-3x"}})],1)])])])}),[function(){var t=this,e=t._self._c;return e("form",{staticClass:"flex flex-col 2xl:w-[50%] md:w-[80%] w-full pb-10 space-y-4 text-xl border-b border-black",attrs:{action:"https://formspree.io/f/xknejgor",method:"POST"}},[e("input",{staticClass:"form-control bg-clip-padding margin block px-4 py-2 m-0 text-xl font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded",attrs:{type:"text",name:"name",placeholder:"Name"}}),t._v(" "),e("input",{staticClass:"form-control bg-clip-padding block px-4 py-2 m-0 text-xl font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded",attrs:{type:"email",name:"email",placeholder:"Email"}}),t._v(" "),e("textarea",{staticClass:"form-control bg-clip-padding block h-48 px-4 py-2 m-0 text-xl font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded resize-none",attrs:{name:"message",placeholder:"Message"}}),t._v(" "),e("button",{staticClass:"font-button hover:scale-105 hover:shadow-xl px-6 py-4 text-xl text-white transition-all bg-black shadow-lg",attrs:{type:"submit"}},[t._v("\n        Send\n      ")])])}],!1,null,null,null);e.default=component.exports},282:function(t,e,o){"use strict";o(277)},283:function(t,e,o){var n=o(115)((function(i){return i[1]}));n.push([t.i,"html{scroll-behavior:smooth}.highlight{color:#000;text-decoration:none;background-position-y:0;background-image:linear-gradient(transparent,#a8b4ff 80%);transition:background .5s ease;background-size:auto 175%;padding:0 4px}a:hover{background-position-y:100%}",""]),n.locals={},t.exports=n},289:function(t,e,o){"use strict";o.r(e);var n=o(1),r=o(273),l=o(274),c=o(275),h=o(276),d=o(279),f=o(280),m=o(281);h.c.add(f.d,f.b,f.c,f.a,m.a,m.b),n.a.component("font-awesome-icon",d.a);var x=n.a.extend({name:"IndexPage",components:{Home:r.default,Projects:l.default,About:c.default}}),v=(o(282),o(36)),component=Object(v.a)(x,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("Home"),t._v(" "),e("Projects"),t._v(" "),e("About"),t._v(" "),e("Contact")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Home:o(273).default,Projects:o(274).default,About:o(275).default,Contact:o(278).default})}}]);