<template>
  <div>
    <Home />
    <Projects />
    <About />
    <Contact />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Home from "~/components/Home.vue";
import Projects from "~/components/Projects.vue";
import About from "~/components/About.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
/* import specific icons */
import { faEnvelope, faFileAlt } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
  faEnvelope,
  faFileAlt
);

/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);

export default Vue.extend({
  name: "IndexPage",
  components: { Home, Projects, About },
});
</script>

<style>
html {
  scroll-behavior: smooth;
  background: #f8f8ff;
}

/* .highlight {
  font-weight: bolder;
  background: linear-gradient(
      104deg,
      rgba(130, 149, 255, 0) 0.9%,
      rgba(130, 255, 173, 1.25) 2.4%,
      rgba(132, 130, 255, 0.5) 5.8%,
      rgba(138, 130, 255, 0.1) 93%,
      rgba(130, 138, 255, 0.7) 96%,
      rgba(130, 255, 1732, 0) 98%
    ),
    linear-gradient(
      183deg,
      rgba(130, 153, 255, 0) 0%,
      rgba(143, 130, 255, 0.3) 7.9%,
      rgba(130, 143, 255, 0) 15%
    );
  padding: 0 13.7px;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
  margin: 0;
  border-radius: 7.5px;
  text-shadow: -12px 12px 9.8px rgba(132, 130, 255, 0.7),
    21px -18.1px 7.3px rgba(255, 255, 255, 1),
    -18.1px -27.3px 30px rgba(255, 255, 255, 1);
} */

/* .highlight {
  margin: 0 -0.4em;
  padding: 0.1em 0.4em;
  border-radius: 0.8em 0.3em;
  background: transparent;
  background-image: linear-gradient(
    to right,
    rgba(17, 0, 255, 0.1),
    rgba(111, 0, 255, 0.342) 4%,
    rgba(68, 0, 255, 0.3)
  );
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
} */

/* .highlight {
  font-style: normal;
  border-radius: 1em 0 1em 0;
  text-shadow: 1px 1px 1px #fff;
  background-image: linear-gradient(
    -100deg,
    rgba(169, 150, 255, 0.15),
    rgba(173, 150, 255, 0.8) 100%,
    rgba(187, 150, 255, 0.25)
  ); */

.highlight {
  color: black;
  text-decoration: none;
  background-position-y: -0%;
  background-image: linear-gradient(transparent, rgba(168, 180, 255, 1) 80%);
  transition: background 500ms ease;
  background-size: auto 175%;
  padding: 0 4px;
  border-radius: 4px;
}

a:hover {
  background-position-y: 100%;
}
</style>
