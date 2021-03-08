import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// tailwind
import "tailwindcss/tailwind.css";

// Vuesax
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css";
Vue.use(Vuesax, {
  // options here
});

// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";
// Smooth scroll
import vueSmoothScroll from "vue2-smooth-scroll";
Vue.use(vueSmoothScroll);

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init();
  },
  router,
  render: (h) => h(App),
}).$mount("#app");
