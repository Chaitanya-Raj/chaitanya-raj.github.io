<template>
  <section
    id="contact"
    class="bg-lavender flex min-h-[calc(100vh-32px)] lg:px-32 m-4 px-10 shadow-lg items-center justify-center"
  >
    <div class="flex flex-col items-center flex-1">
      <h1 class="font-display mb-5 text-5xl">Get In Touch</h1>
      <form
        action="https://formspree.io/f/xknejgor"
        method="POST"
        class="flex flex-col py-4 space-y-4 border-b border-black"
      >
        <label>
          <input
            type="email"
            name="name"
            class="px-4 py-2"
            placeholder="Name"
          />
        </label>
        <label>
          <input
            type="email"
            name="email"
            class="px-4 py-2"
            placeholder="Email"
          />
        </label>
        <label>
          <textarea
            name="message"
            placeholder="Message"
            class="px-4 py-2 resize-none"
          ></textarea>
        </label>
        <!-- your other form fields go here -->
        <button
          type="submit"
          class="font-button px-6 py-4 text-lg text-white bg-black"
        >
          Send
        </button>
      </form>
      <div class="social flex justify-end flex-1 mt-6 space-x-4 text-4xl">
        <a
          href="https://github.com/Chaitanya-Raj"
          class="hover:scale-105 transition-all"
        >
          <font-awesome-icon icon="fa-brands fa-github fa-3x" />
        </a>

        <a
          href="https://www.linkedin.com/in/chaitanya-raj-4b3285187/"
          class="hover:scale-105 transition-all"
        >
          <font-awesome-icon icon="fa-brands fa-linkedin fa-3x" />
        </a>

        <a
          href="https://www.instagram.com/_chaitanya.raj/"
          class="hover:scale-105 transition-all"
        >
          <font-awesome-icon icon="fa-brands fa-instagram fa-3x" />
        </a>

        <a
          href="https://twitter.com/0xClef"
          class="hover:scale-105 transition-all"
        >
          <font-awesome-icon icon="fa-brands fa-twitter fa-3x" />
        </a>

        <a
          href="mailto:chaitanyarajdixit@gmail.com"
          class="hover:scale-105 transition-all"
        >
          <font-awesome-icon icon="fa-solid fa-envelope fa-3x" />
        </a>

        <a
          href="static/Chaitanya-Raj.pdf"
          target="_blank"
          class="hover:scale-105 transition-all"
        >
          <font-awesome-icon icon="fa-solid fa-file-alt fa-3x" />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>
