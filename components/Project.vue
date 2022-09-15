<template>
  <div class="lg:flex-row flex flex-col space-y-8">
    <div
      class="flex items-center justify-center px-4 lg:max-w-[calc(50%)] lg:px-0"
    >
      <!-- TODO: Make width of all images equal -->
      <!-- TODO: Add link to the deployed site -->
      <!-- TODO: Add hover effect -->
      <nuxt-img
        :src="project.preview"
        alt="Project Preview"
        placeholder
        class="shadow-lg"
      />
    </div>
    <div class="lg:px-32 flex flex-col items-start justify-center px-10">
      <p class="font-body font-bold text-gray-400 uppercase">concept</p>
      <a :href="project.source" class="highlight">
        <h2 class="font-display mt-2 text-5xl">{{ project.title }}</h2>
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
