(window.webpackJsonp=window.webpackJsonp||[]).push([[9,2,3,4,5,6,7,8],{272:function(t,e,n){"use strict";n.r(e);var l={},o=n(36),component=Object(o.a)(l,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("header",{staticClass:"md:flex-row flex flex-col items-center justify-between pt-8"},[e("a",{attrs:{href:"#home"}},[e("img",{attrs:{src:"logo.svg",alt:"Chaitanya Raj Logo"}})]),t._v(" "),e("nav",{staticClass:"font-body md:pt-0 flex items-center pt-4 space-x-4 font-bold"},[e("a",{staticClass:"highlight",attrs:{href:"#projects"}},[t._v("my work")]),t._v(" "),e("a",{staticClass:"highlight",attrs:{href:"#about"}},[t._v("about me")]),t._v(" "),e("a",{staticClass:"highlight",attrs:{href:"#contact"}},[t._v("get in touch")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(272).default})},273:function(t,e,n){"use strict";n.r(e);var l={},o=n(36),component=Object(o.a)(l,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"lg:py-32 flex flex-col items-start justify-center flex-1 max-w-3xl py-10"},[e("h1",{staticClass:"font-display lg:text-6xl text-4xl"},[t._v("\n    Hi, I’m Chaitanya, Web Developer and UI/UX Designer\n  ")]),t._v(" "),e("p",{staticClass:"font-body mt-6 mb-16 text-lg"},[t._v("\n    I design and build beautiful websites for businesses around the globe. If\n    you need a modern and powerful website, send me an email. If we are a good\n    fit, I will give you a time and cost estimate.\n  ")]),t._v(" "),e("a",{staticClass:"hover:scale-105 relative transition-all shadow-lg",attrs:{href:"#projects"}},[e("button",{staticClass:"font-button relative z-10 px-6 py-4 text-lg text-white bg-black"},[t._v("\n      see my work\n    ")]),t._v(" "),e("div",{staticClass:"-bottom-4 -right-4 font-button absolute px-6 py-4 text-lg text-white border-4 border-white shadow-lg opacity-50"},[t._v("\n      see my work\n    ")])])])}],!1,null,null,null);e.default=component.exports},274:function(t,e,n){"use strict";n.r(e);var l={props:{project:Object}},o=n(36),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"lg:flex-row lg:px-32 lg:space-x-10 flex flex-col px-10 m-4 space-y-8"},[e("div",{staticClass:"flex items-center justify-center max-w-4xl"},[e("a",{attrs:{href:t.project.deployed}},[e("nuxt-img",{staticClass:"hover:scale-105 hover:shadow-xl transition-all shadow-lg",attrs:{src:t.project.preview,alt:"Project Preview",placeholder:""}})],1)]),t._v(" "),e("div",{staticClass:"flex flex-col items-start justify-center"},[e("p",{staticClass:"font-body font-bold text-gray-400 uppercase"},[t._v("concept")]),t._v(" "),e("a",{staticClass:"highlight",attrs:{href:t.project.source}},[e("h2",{staticClass:"font-display md:text-5xl mt-2 text-4xl"},[t._v("\n        "+t._s(t.project.title)+"\n      ")])]),t._v(" "),e("p",{staticClass:"font-body mt-6 text-xl"},[t._v("\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corrupti\n      nam magni, doloremque dignissimos qui, aperiam sapiente voluptatibus,\n      ratione quia fugit! Earum, consectetur. Sunt eius, voluptas voluptatum\n      odio minima cum.\n    ")]),t._v(" "),e("p",{staticClass:"font-body mt-2 text-xl"},[t._v("\n      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, nemo.\n      Commodi, quidem officiis laudantium qui adipisci placeat amet quas culpa\n      reiciendis ipsam eaque suscipit velit maiores hic eveniet rerum animi.\n    ")])])])}),[],!1,null,null,null);e.default=component.exports},275:function(t,e,n){"use strict";n.r(e);var l=n(273),o=n(272),r={components:{Hero:l.default,Header:o.default}},c=n(36),component=Object(c.a)(r,(function(){var t=this._self._c;return t("section",{staticClass:"bg-lavender flex flex-col min-h-[calc(100vh-32px)] lg:px-32 m-4 px-10 shadow-lg",attrs:{id:"home"}},[t("Header"),this._v(" "),t("Hero")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(272).default,Hero:n(273).default})},276:function(t,e,n){"use strict";n.r(e);var l={components:{Project:n(274).default},data:function(){return{projects:[{title:"Aria Oslo",description:"lalalalala",preview:"aria-oslo.png",source:"https://github.com/Chaitanya-Raj/aria-oslo",deployed:"https://chaitanya-raj.github.io/aria-oslo"},{title:"AM Studio",description:"lalalalala",preview:"am-studio.png",source:"https://github.com/Chaitanya-Raj/am-studio",deployed:"https://chaitanya-raj.github.io/am-studio"}]}}},o=n(36),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"flex flex-col min-h-[calc(100vh-32px)] space-y-20 my-16 py-4",attrs:{id:"projects"}},t._l(t.projects,(function(t){return e("Project",{key:t.title,staticClass:"even:flex-col lg:even:flex-row-reverse lg:even:space-x-reverse",attrs:{project:t}})})),1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Project:n(274).default})},277:function(t,e,n){"use strict";n.r(e);var l={},o=n(36),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"min-h-min m-4 space-x-4 bg-gradient-to-r from-white to-transparent items-center justify-start lg:px-32 px-10 py-4 min-h-[calc(100vh-32px)] lg:flex-row flex flex-col my-8 space-y-10",attrs:{id:"about"}},[e("div",{staticClass:"flex items-center justify-center mx-10"},[e("nuxt-img",{staticClass:"shadow-lg",attrs:{src:"headshot.webp",alt:"",placeholder:""}})],1),t._v(" "),t._m(0)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col space-y-5 max-w-[800px]"},[e("h2",{staticClass:"font-display text-5xl"},[t._v("Who Am I?")]),t._v(" "),e("div",{staticClass:"font-body flex flex-col space-y-4 text-xl"},[e("p",[t._v("\n        Hi, I'm Chaitanya. I'm a web developer from New Delhi and a CS alumni\n        of the University of Delhi. I have experience with front-end\n        development in React/Vue, back-end development in Node.js, web design\n        in Figma and have also dabbled a bit in Python, bash scripting,\n        CyberSecurity, CTFs and Data Science.\n      ")]),t._v(" "),e("p",[t._v("\n        I love playing\n        "),e("a",{staticClass:"highlight",attrs:{href:"https://lichess.org/@/ChaitanyaRaj",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chess")]),t._v("\n        and\n        "),e("a",{staticClass:"highlight",attrs:{href:"https://www.goodreads.com/user/show/97716082-chaitanya",target:"_blank",rel:"noopener noreferrer"}},[t._v("reading any books")]),t._v("\n        that I can lay my hands on. I'm currently learning UI Design and Figma\n        in my spare time.\n      ")]),t._v(" "),e("p",[t._v("\n        I also love listening to\n        "),e("a",{staticClass:"highlight",attrs:{href:"https://open.spotify.com/artist/3pc0bOVB5whxmD50W79wwO",target:"_blank",rel:"noopener noreferrer"}},[t._v("keshi")]),t._v("\n        . He's my second favorite recording artist after lofi chillhop beats\n        to study/relax to ;)\n      ")])])])}],!1,null,null,null);e.default=component.exports},279:function(t,e,n){var content=n(285);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(91).default)("375e78f7",content,!0,{sourceMap:!1})},280:function(t,e,n){"use strict";n.r(e);var l={},o=n(36),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"bg-lavender flex min-h-[calc(100vh-32px)] lg:px-32 m-4 px-10 shadow-lg items-center justify-center",attrs:{id:"contact"}},[e("div",{staticClass:"flex flex-col items-center flex-1"},[e("h1",{staticClass:"font-display md:text-5xl mb-3 text-3xl"},[t._v("Get In Touch")]),t._v(" "),e("p",{staticClass:"font-body md:text-xl max-w-sm mb-8 text-lg text-center"},[t._v("\n      Contact me below and I’ll try to get back to you within one business day\n    ")]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"social md:text-5xl flex justify-end flex-1 mt-8 space-x-4 text-4xl"},[e("a",{staticClass:"hover:scale-110 transition-all",attrs:{href:"https://github.com/Chaitanya-Raj"}},[e("font-awesome-icon",{attrs:{icon:"fa-brands fa-github fa-3x"}})],1),t._v(" "),e("a",{staticClass:"hover:scale-110 transition-all",attrs:{href:"https://www.linkedin.com/in/chaitanya-raj-4b3285187/"}},[e("font-awesome-icon",{attrs:{icon:"fa-brands fa-linkedin fa-3x"}})],1),t._v(" "),e("a",{staticClass:"hover:scale-110 transition-all",attrs:{href:"https://www.instagram.com/_chaitanya.raj/"}},[e("font-awesome-icon",{attrs:{icon:"fa-brands fa-instagram fa-3x"}})],1),t._v(" "),e("a",{staticClass:"hover:scale-110 transition-all",attrs:{href:"https://twitter.com/0xClef"}},[e("font-awesome-icon",{attrs:{icon:"fa-brands fa-twitter fa-3x"}})],1),t._v(" "),e("a",{staticClass:"hover:scale-110 transition-all",attrs:{href:"mailto:chaitanyarajdixit@gmail.com"}},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-envelope fa-3x"}})],1),t._v(" "),e("a",{staticClass:"hover:scale-110 transition-all",attrs:{href:"static/Chaitanya-Raj.pdf",target:"_blank"}},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-file-alt fa-3x"}})],1)])])])}),[function(){var t=this,e=t._self._c;return e("form",{staticClass:"flex flex-col 2xl:w-[50%] md:w-[80%] w-full pb-10 space-y-4 text-xl border-b border-black",attrs:{action:"https://formspree.io/f/xknejgor",method:"POST"}},[e("input",{staticClass:"form-control bg-clip-padding margin block px-4 py-2 m-0 text-xl font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded",attrs:{type:"text",name:"name",placeholder:"Name"}}),t._v(" "),e("input",{staticClass:"form-control bg-clip-padding block px-4 py-2 m-0 text-xl font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded",attrs:{type:"email",name:"email",placeholder:"Email"}}),t._v(" "),e("textarea",{staticClass:"form-control bg-clip-padding block h-48 px-4 py-2 m-0 text-xl font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded resize-none",attrs:{name:"message",placeholder:"Message"}}),t._v(" "),e("button",{staticClass:"font-button hover:scale-105 hover:shadow-xl px-6 py-4 text-xl text-white transition-all bg-black shadow-lg",attrs:{type:"submit"}},[t._v("\n        Send\n      ")])])}],!1,null,null,null);e.default=component.exports},284:function(t,e,n){"use strict";n(279)},285:function(t,e,n){var l=n(90)((function(i){return i[1]}));l.push([t.i,"html{scroll-behavior:smooth}.highlight{color:#000;text-decoration:none;background-position-y:0;background-image:linear-gradient(transparent,#a8b4ff 80%);transition:background .5s ease;background-size:auto 175%;padding:0 4px}a:hover{background-position-y:100%}",""]),l.locals={},t.exports=l},291:function(t,e,n){"use strict";n.r(e);var l=n(1),o=n(275),r=n(276),c=n(277),f=n(278),d=n(281),h=n(282),m=n(283);f.c.add(h.d,h.b,h.c,h.a,m.a,m.b),l.a.component("font-awesome-icon",d.a);var x=l.a.extend({name:"IndexPage",components:{Home:o.default,Projects:r.default,About:c.default}}),v=(n(284),n(36)),component=Object(v.a)(x,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("Home"),t._v(" "),e("Projects"),t._v(" "),e("About"),t._v(" "),e("Contact")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Home:n(275).default,Projects:n(276).default,About:n(277).default,Contact:n(280).default})}}]);