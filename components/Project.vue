<template>
  <div
    class="lg:flex-row lg:px-32 lg:space-x-10 md:px-10 flex flex-col px-4 m-4 space-y-8"
  >
    <div class="flex items-center justify-center max-w-4xl">
      <a :href="project.deployed">
        <nuxt-img
          :src="project.preview"
          alt="Project Preview"
          placeholder
          class="hover:shadow-xl hover:scale-110 lg:scale-100 lg:hover:scale-105 transition-all scale-105 shadow-lg"
        />
      </a>
    </div>
    <div class="flex flex-col items-start justify-center">
      <p class="font-body font-bold text-gray-400 uppercase">concept</p>
      <a :href="project.source" class="highlight">
        <h2 class="font-display md:text-5xl mt-2 text-4xl">
          {{ project.title }}
        </h2>
      </a>
      <!-- TODO: write better descriptions -->
      <p class="font-body md:text-xl mt-6">
        {{ project.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: Object,
  },
};
</script>
