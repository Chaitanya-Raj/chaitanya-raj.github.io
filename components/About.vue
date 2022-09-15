<template>
  <section
    id="about"
    class="min-h-min m-4 space-x-4 bg-gradient-to-r from-white to-transparent items-center justify-start lg:px-32 px-10 py-4 min-h-[calc(100vh-32px)] lg:flex-row flex flex-col my-8 space-y-10"
  >
    <!-- TODO: Find a better image -->
    <!-- TODO: Write an interesting bio -->

    <div class="flex items-center justify-center mx-10">
      <nuxt-img src="headshot.webp" alt="" class="shadow-lg" placeholder />
    </div>
    <div class="flex flex-col space-y-5 max-w-[800px]">
      <h2 class="font-display text-5xl">Who Am I?</h2>
      <div class="font-body md:text-xl flex flex-col space-y-4">
        <p>
          Hi, I'm Chaitanya. I'm a web developer from New Delhi and a CS alumni
          of the University of Delhi. I have experience with front-end
          development in React/Vue, back-end development in Node.js, web design
          in Figma and have also dabbled a bit in Python, bash scripting,
          CyberSecurity, CTFs and Data Science.
        </p>
        <p>
          I love playing
          <a
            href="https://lichess.org/@/ChaitanyaRaj"
            target="_blank"
            rel="noopener noreferrer"
            class="highlight"
            >Chess</a
          >
          and
          <a
            href="https://www.goodreads.com/user/show/97716082-chaitanya"
            target="_blank"
            rel="noopener noreferrer"
            class="highlight"
            >reading any books</a
          >
          that I can lay my hands on. I'm currently learning UI Design and Figma
          in my spare time.
        </p>
        <p>
          I also love listening to
          <a
            href="https://open.spotify.com/artist/3pc0bOVB5whxmD50W79wwO"
            target="_blank"
            rel="noopener noreferrer"
            class="highlight"
            >keshi</a
          >
          . He's my second favorite recording artist after lofi chillhop beats
          to study/relax to ;)
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>
