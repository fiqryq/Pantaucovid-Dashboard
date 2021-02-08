<template>
  <div id="app">
    <div class="heroes">
      <Heroes />
    </div>
    <div class="case">
      <Case />
    </div>
    <div class="vaksin">
      <Vaksin />
    </div>
    <div class="edu">
      <Edu />
    </div>
    <div class="footer">
      <Footer />
    </div>
    <router-view />
  </div>
</template>
<script>
import Heroes from "./components/Heroes.vue";
import Vaksin from "./components/Vaksin.vue";
import Case from "./components/Case.vue";
import Edu from "./components/Edu.vue";
import Footer from "./components/Footer";
export default {
  components: {
    Heroes,
    Vaksin,
    Case,
    Edu,
    Footer
  }
};
</script>
