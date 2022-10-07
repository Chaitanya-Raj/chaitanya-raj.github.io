<template>
  <section
    id="contact"
    class="bg-lavender flex min-h-[calc(100vh-32px)] lg:px-32 m-4 px-10 shadow-lg items-center justify-center rounded"
  >
    <div class="flex flex-col items-center flex-1">
      <h1 class="font-display md:text-5xl mb-3 text-3xl">Get In Touch</h1>
      <p class="font-body md:text-xl max-w-sm mb-8 text-lg text-center">
        Contact me below and I’ll try to get back to you as soon as I can.
      </p>
      <form
        action="https://formspree.io/f/xknejgor"
        method="POST"
        class="flex flex-col 2xl:w-[50%] md:w-[80%] w-full space-y-4 text-xl"
      >
        <input
          type="text"
          name="name"
          class="form-control bg-clip-padding margin block px-4 py-2 m-0 text-xl font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded"
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          class="form-control bg-clip-padding block px-4 py-2 m-0 text-xl font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded"
          placeholder="Email"
        />
        <textarea
          name="message"
          placeholder="Message"
          class="form-control bg-clip-padding block h-48 px-4 py-2 m-0 text-xl font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded resize-none"
        ></textarea>
        <button
          type="submit"
          class="font-button hover:scale-105 hover:shadow-xl px-6 py-4 text-xl text-white transition-all bg-black rounded shadow-lg"
        >
          Send
        </button>
      </form>
      <p class="font-body my-6 text-2xl font-bold">or</p>
      <p
        class="font-body md:text-xl pb-6 mb-6 text-lg text-center border-b border-black"
      >
        you can email me at

        <a href="mailto:chaitanyarajdixit@gmail.com" class="highlight">
          chaitanyarajdixit@gmail.com
        </a>
      </p>
      <div
        class="social md:text-5xl flex justify-end flex-1 space-x-4 text-4xl"
      >
        <a
          href="https://github.com/Chaitanya-Raj"
          class="hover:scale-110 transition-all"
          title="github"
        >
          <font-awesome-icon icon="fa-brands fa-github fa-3x" />
        </a>

        <a
          href="https://www.linkedin.com/in/chaitanyarajdixit/"
          class="hover:scale-110 transition-all"
          title="linkedin"
        >
          <font-awesome-icon icon="fa-brands fa-linkedin fa-3x" />
        </a>

        <a
          href="https://www.instagram.com/_chaitanya.raj/"
          class="hover:scale-110 transition-all"
          title="instagram"
        >
          <font-awesome-icon icon="fa-brands fa-instagram fa-3x" />
        </a>

        <a
          href="https://twitter.com/0xClef"
          class="hover:scale-110 transition-all"
          title="twitter"
        >
          <font-awesome-icon icon="fa-brands fa-twitter fa-3x" />
        </a>

        <!-- <a
          href="mailto:chaitanyarajdixit@gmail.com"
          class="hover:scale-110 transition-all"
          title="email"
        >
          <font-awesome-icon icon="fa-solid fa-envelope fa-3x" />
        </a> -->

        <a
          href="Chaitanya-Raj.pdf"
          target="_blank"
          class="hover:scale-110 transition-all"
          title="resume"
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
