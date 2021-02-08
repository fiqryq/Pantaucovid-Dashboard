<template>
  <section
    class="w-full pt-5 pb-8 overflow-hidden bg-black bg-cover lg:pb-32 p-10"
  >
    <div class="px-20 mx-auto max-w-6xl">
      <h2 class="mb-1 text-3xl font-extrabold leading-tight text-white">
        KASUS DI <span class="text-red-600"> INDONESIA </span>
      </h2>
      <p class="mb-10 text-lg text-white">
        sumber data: Mathdroid covid-19 AP ( {{ update }} )
      </p>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-16 lg:gap-x-24 gap-y-20"
      >
        <div>
          <h3
            class="mb-2 text-base font-semibold leading-tight text-gray-300 lg:text-lg"
          >
            Kasus positif
          </h3>
          <h1
            class="mb-2 text-base font-bold leading-tight text-yellow-600 lg:text-lg kasus"
          >
            {{ numberFormat(positif) }}
          </h1>
        </div>

        <div>
          <h3
            class="mb-2 text-base font-semibold leading-tight text-gray-300 lg:text-lg"
          >
            Kasus sembuh
          </h3>
          <h1
            class="mb-2 text-base font-bold leading-tight text-green-600 lg:text-lg kasus"
          >
            {{ numberFormat(sembuh) }}
          </h1>
        </div>

        <div>
          <h3
            class="mb-2 text-base font-semibold leading-tight text-gray-300 lg:text-lg"
          >
            Kasus meninggal
          </h3>
          <h1
            class="mb-2 text-base font-bold leading-tight text-red-600 lg:text-lg kasus"
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
import common from "@/util/common.js";

Vue.use(VueAxios, axios);
const url = "https://covid19.mathdro.id/api/countries/ID";

export default {
  methods: {
    numberFormat(number) {
      return number.toLocaleString("id-ID");
    }
  },
  data() {
    return {
      positif: 0,
      meninggal: 0,
      sembuh: 0,
      update: null
    };
  },
  mounted() {
    Vue.axios.get(url).then(response => {
      this.positif = response.data.confirmed.value;
      this.sembuh = response.data.recovered.value;
      this.meninggal = response.data.deaths.value;
      this.update = common.convertStrDateToPattern(
        response.data.lastUpdate,
        "LLLL ",
        "id-ID"
      );
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
