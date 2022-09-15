<template>
  <div
    class="lg:flex-row lg:px-32 lg:space-x-10 flex flex-col px-10 m-4 space-y-8"
  >
    <div class="flex items-center justify-center max-w-4xl">
      <a :href="project.deployed">
        <nuxt-img
          :src="project.preview"
          alt="Project Preview"
          placeholder
          class="hover:scale-105 hover:shadow-xl transition-all shadow-lg"
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
      <p class="font-body mt-6 text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corrupti
        nam magni, doloremque dignissimos qui, aperiam sapiente voluptatibus,
        ratione quia fugit! Earum, consectetur. Sunt eius, voluptas voluptatum
        odio minima cum.
      </p>
      <p class="font-body mt-2 text-xl">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, nemo.
        Commodi, quidem officiis laudantium qui adipisci placeat amet quas culpa
        reiciendis ipsam eaque suscipit velit maiores hic eveniet rerum animi.
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
