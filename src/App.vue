<template>
  <mainContainer>
    <template v-slot:header>
      <Header />
    </template>
    <router-view />
    <template v-slot:footer>
      <Footer />
    </template>
  </mainContainer>
</template>

<script>
import mainContainer from "@/components/slots/mainContainer.vue";

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer/Footer.vue";

export default {
  components: {
    Header,
    Footer,
    mainContainer,
  },
  methods: {
  },
};
</script>
