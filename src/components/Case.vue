<template>
  <section class="pt-20 pb-32 bg-white" id="kasus">
    <div class="px-20 mx-auto max-w-6xl">
      <h2 class="mb-1 text-3xl font-extrabold leading-tight text-gray-900">
        Kasus Di indonesia
      </h2>
      <p class="mb-10 text-lg text-gray-500">Update terakhir {{ update }}</p>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-16 lg:gap-x-24 gap-y-20"
        data-aos="fade-up"
        data-aos-duration="1800"
      >
        <div>
          <div
            class="flex items-center justify-center w-12 h-12 mb-4 text-red-600 bg-red-100 rounded-full"
          >
            <img
              src="../assets/illustration/Coronavirus.svg"
              class="iconkasus"
            />
          </div>
          <h3
            class="mb-2 text-base font-semibold leading-tight text-gray-900 lg:text-lg"
          >
            Kasus positif
          </h3>
          <h1
            class="mb-2 text-base font-bold leading-tight text-gray-600 lg:text-lg kasus"
          >
            {{ numberFormat(positif) }}
          </h1>
        </div>

        <div>
          <div
            class="flex items-center justify-center w-12 h-12 mb-4 text-green-600 bg-green-100 rounded-full"
          >
            <img
              src="../assets/illustration/Protection.svg"
              class="iconkasus"
            />
          </div>
          <h3
            class="mb-2 text-base font-semibold leading-tight text-gray-900 lg:text-lg"
          >
            Kasus sembuh
          </h3>
          <h1
            class="mb-2 text-base font-bold leading-tight text-gray-600 lg:text-lg kasus"
          >
            {{ numberFormat(sembuh) }}
          </h1>
        </div>

        <div>
          <div
            class="flex items-center justify-center w-12 h-12 mb-4 text-blue-600 bg-gray-300 rounded-full"
          >
            <img src="../assets/illustration/Death.svg" class="iconkasus" />
          </div>
          <h3
            class="mb-2 text-base font-semibold leading-tight text-gray-900 lg:text-lg"
          >
            Kasus meninggal
          </h3>
          <h1
            class="mb-2 text-base font-bold leading-tight text-gray-600 lg:text-lg kasus"
          >
            {{ numberFormat(meninggal) }}
          </h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default {
  methods: {
    numberFormat(number) {
      return number.toLocaleString("id-ID")
    }
  },
  data() {
    return {
      positif: null,
      meninggal: null,
      sembuh: null,
      update: null
    };
  },
  mounted() {
    Vue.axios
      .get("https://covid19.mathdro.id/api/countries/ID")
      .then(response => {
        this.positif = response.data.confirmed.value;
        this.sembuh = response.data.recovered.value;
        this.meninggal = response.data.deaths.value;
        this.update = response.data.lastUpdate;
      });
  }
};
</script>
<style scoped>
.kasus {
  font-size: 2.5rem;
}
.iconkasus {
  width: 28px;
  height: 28px;
}
</style>
