<template>
  <div id="app">
    <div id="nav">
      <Nav />
    </div>
    <div class="heroes">
      <Heroes />
    </div>
    <div class="case">
      <Case />
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
import Nav from "./components/Nav.vue";
import Heroes from "./components/Heroes.vue";
import Case from "./components/Case.vue";
import Edu from "./components/Edu.vue";
import Footer from "./components/Footer";
export default {
  components: {
    Nav,
    Heroes,
    Case,
    Edu,
    Footer
  }
};
</script>
