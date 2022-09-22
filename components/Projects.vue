<template>
  <section
    id="projects"
    class="flex flex-col min-h-[calc(100vh-32px)] space-y-20 my-16 py-4"
  >
    <Project
      v-for="project in projects"
      :key="project.title"
      :project="project"
      class="even:flex-col lg:even:flex-row-reverse lg:even:space-x-reverse"
    />
  </section>
</template>

<script>
import Project from "./Project.vue";
export default {
  components: { Project },
  data() {
    return {
      projects: [
        {
          title: "Nuxttube",
          description: "A clone of the Youtube Frontend made with NuxtJS 2.",
          preview: "/nuxt-tube.png",
          source: "https://github.com/Chaitanya-Raj/youtube-nuxt",
          deployed: "https://chaitanya-raj.github.io/youtube-nuxt",
          tags: ["NuxtJS", "VueJs", "TailwindCSS"],
        },
        {
          title: "Amazon",
          description: "A clone of Amazon made with React under the hood.",
          preview: "amazon-clone.png",
          source: "https://github.com/Chaitanya-Raj/amazon-clone",
          deployed: "https://clone-c36a5.web.app/",
          tags: ["ReactJS", "CSS3"],
        },
        {
          title: "Chatroom",
          description:
            "A simple anonymous chatroom which remembers nothing. Live in the moment ;)",
          preview: "chatroom.png",
          source: "https://github.com/Chaitanya-Raj/chatroom",
          deployed: "https://thawing-brushlands-22272.herokuapp.com/",
          tags: ["ReactJS", "WebSockets"],
        },
        {
          title: "Github Timeline",
          description: "Shows a timeline of a users activities on Github.",
          preview: "github-timeline.png",
          source: "https://github.com/Chaitanya-Raj/timeline",
          deployed: "https://chaitanya-raj.github.io/timeline",
          tags: ["ReactJs", "GraphQL"],
        },
        {
          title: "Password Generator",
          description:
            "A password generator for the times when you need a secure password quickly.",
          preview: "password-generator.png",
          source: "https://github.com/Chaitanya-Raj/password-generator",
          deployed: "https://chaitanya-raj.github.io/password-generator",
          tags: ["ReactJS"],
        },
        {
          title: "Aria Oslo",
          description: "A concept portfolio site for a ficitonal client.",
          preview: "aria-oslo.png",
          source: "https://github.com/Chaitanya-Raj/aria-oslo",
          deployed: "https://chaitanya-raj.github.io/aria-oslo",
          tags: ["HTML5", "CSS3", "JavaScript", "Figma"],
        },
        // {
        //   title: "AM Studio",
        //   description: "lalalalala",
        //   preview: "am-studio.png",
        //   source: "https://github.com/Chaitanya-Raj/am-studio",
        //   deployed: "https://chaitanya-raj.github.io/am-studio",
        // },
        // {
        //   title: "Vincent Schwartz",
        //   description: "lalalalala",
        //   preview: "/vincent-schwartz.png",
        //   source: "https://github.com/Chaitanya-Raj/vincent-schwartz",
        // },
      ],
    };
  },
};
</script>
