export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  // router: {
  //   base: "/minimal-portfolio/",
  // },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Chaitanya Raj",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Fullstack Web Developer and UI Designer based in New Delhi.",
      },
      {
        hid: "og-image",
        property: "og:image",
        content: "/headshot.webp",
      },
      {
        hid: "og-description",
        name: "og:description",
        content: "Fullstack Web Developer and UI Designer based in New Delhi.",
      },
      {
        hid: "og-url",
        name: "og:url",
        content: "https://chaitanyaraj.dev",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Mulish:wght@400;700;900&family=Nunito+Sans&display=swap",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
