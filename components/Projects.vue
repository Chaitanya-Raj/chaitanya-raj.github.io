<template>
  <section class="flex flex-col space-y-4">
    <Project v-for="index in 4" :key="index" />
  </section>
</template>

<script>
import Project from "./Project.vue";
export default { components: { Project } };
</script>

<style></style>
