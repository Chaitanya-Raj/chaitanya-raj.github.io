<template>
  <div class="flex my-8">
    <div class="flex flex-col items-start justify-center">
      <a :href="project.source">
        <h2 class="font-display text-5xl">{{ project.title }}</h2>
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
    <nuxt-img
      :src="project.preview"
      class="max-w-3xl mx-10"
      alt="Project Preview"
    />
  </div>
</template>

<script>
export default {
  props: {
    project: Object,
  },
};
</script>

<style></style>
