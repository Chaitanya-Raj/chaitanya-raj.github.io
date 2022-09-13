<template>
  <div class="flex my-5 space-x-4">
    <div class="flex flex-col justify-center">
      <h2 class="font-display text-5xl">{{ project.title }}</h2>
      <p class="font-body flex flex-col space-y-4 text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corrupti
        nam magni, doloremque dignissimos qui, aperiam sapiente voluptatibus,
        ratione quia fugit! Earum, consectetur. Sunt eius, voluptas voluptatum
        odio minima cum.
      </p>
    </div>
    <div class="max-w-3xl">
      <img src="/aria-oslo.png" alt="" />
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

<style></style>
