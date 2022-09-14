<template>
  <section
    class="bg-lavender flex flex-col min-h-[calc(100vh-32px)] lg:px-32 m-4 px-10"
  >
    <Header />
    <Hero />
  </section>
</template>

<script>
import Header from "./Header.vue";
import Hero from "./Hero.vue";
export default { components: { Header, Hero } };
</script>
