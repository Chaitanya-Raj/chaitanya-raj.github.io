<template>
  <section
    id="projects"
    class="flex flex-col min-h-[calc(100vh-32px)] space-y-20 my-16 py-4"
  >
    <Project
      v-for="project in projects"
      :key="project.title"
      :project="project"
      class="even:flex-col lg:even:flex-row-reverse"
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
          title: "Amazon Clone",
          description: "lalalalala",
          preview: "/amazon-clone.png",
          source: "https://github.com/Chaitanya-Raj/amazon-clone",
        },
        {
          title: "Github Timeline",
          description: "lalalalala",
          preview: "/github-timeline.png",
          source: "https://github.com/Chaitanya-Raj/timeline",
        },
        {
          title: "Chatroom",
          description: "lalalalala",
          preview: "/chatroom.png",
          source: "https://github.com/Chaitanya-Raj/chatroom",
        },
        {
          title: "Password Generator",
          description: "lalalalala",
          preview: "/password-generator.png",
          source: "https://github.com/Chaitanya-Raj/password-generator",
        },
        {
          title: "Aria Oslo",
          description: "lalalalala",
          preview: "/aria-oslo.png",
          source: "https://github.com/Chaitanya-Raj/aria-oslo",
        },
        {
          title: "AM Studio",
          description: "lalalalala",
          preview: "/am-studio.png",
          source: "https://github.com/Chaitanya-Raj/am-studio",
        },
        {
          title: "Vincent Schwartz",
          description: "lalalalala",
          preview: "/vincent-schwartz.png",
          source: "https://github.com/Chaitanya-Raj/vincent-schwartz",
        },
      ],
    };
  },
};
</script>
