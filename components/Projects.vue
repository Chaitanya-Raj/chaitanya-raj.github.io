<template>
  <section
    class="flex flex-col px-32 m-4 space-y-4 min-h-[calc(100vh-32px)] justify-center"
  >
    <Project
      v-for="project in projects"
      :key="project.title"
      :project="project"
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
          title: "Aria Oslo",
          description: "lalalalala",
          preview: "/aria-oslo.png",
        },
        {
          title: "AM Studio",
          description: "lalalalala",
          preview: "/am-studio.png",
        },
      ],
    };
  },
};
</script>

<style></style>
