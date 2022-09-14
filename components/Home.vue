<template>
  <section
    id="home"
    class="bg-lavender flex flex-col min-h-[calc(100vh-92px)] lg:min-h-[calc(100vh-120px)] lg:px-32 m-4 px-10 shadow-lg"
  >
    <Hero />
  </section>
</template>

<script>
import Hero from "./Hero.vue";
export default { components: { Hero } };
</script>
