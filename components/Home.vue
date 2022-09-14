<template>
  <section
    id="home"
    class="bg-lavender flex flex-col min-h-[calc(100vh-32px)] lg:px-32 m-4 px-10 shadow-lg"
  >
    <Header />
    <Hero />
  </section>
</template>

<script>
import Hero from "./Hero.vue";
import Header from "./Header.vue";
export default { components: { Hero, Header } };
</script>
