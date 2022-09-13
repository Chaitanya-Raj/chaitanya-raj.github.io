<template>
  <div class="">
    <Landing />
    <Projects />
    <About />
    <Contact />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Landing from "~/components/Landing.vue";
import Projects from "~/components/Projects.vue";
import About from "~/components/About.vue";

export default Vue.extend({
  name: "IndexPage",
  components: { Landing, Projects, About },
});
</script>
