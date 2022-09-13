<template>
  <div class="">
    <Landing />
    <Projects />
    <About />
    <Contact />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Landing from "~/components/Landing.vue";
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
  components: { Landing, Projects, About },
});
</script>
