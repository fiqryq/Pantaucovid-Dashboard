<template>
  <section class="w-full py-10 mx-auto bg-black">
    <div class="max-w-5xl px-12 mx-auto xl:px-12">
      <h1
        class="text-xl text-white font-bold text-left md:text-3xl md:text-center"
      >
        INFO VAKSIN <span class="text-red-600"> INDONESIA </span>
      </h1>
      <p
        class="max-w-md mx-auto text-base text-gray-500 mt-4 text-md text-center"
      >
        sumber data : www.kemkes.go.id
      </p>
      <div class="container mx-auto px-4">
        <div>
          <h2 class="text-2xl font-semibold leading-tight">Users</h2>
        </div>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div
            class="inline-block min-w-full shadow rounded-lg overflow-hidden"
          >
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    Total Sasaran Vaksin
                  </th>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    Sasaran Vaksinasi SDMK*
                  </th>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    Registrasi Ulang
                  </th>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    Vaksin-1
                  </th>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    Vaksin-2
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-md"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ totalsasaran }}
                    </p>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-md"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ sasaransdmk }}
                    </p>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-md"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ regisulang }}
                    </p>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-md"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ vaksin1 }}
                    </p>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-md"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ vaksin2 }}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
const url = "https://pantaucovidvaksin.netlify.app/.netlify/functions/index";

export default {
  data() {
    return {
      totalsasaran: 0,
      sasaransdmk: 0,
      regisulang: 0,
      vaksin1: 0,
      vaksin2: 0
    };
  },
  mounted() {
    Vue.axios.get(url).then(response => {
      this.totalsasaran = response.data[0].value;
      this.sasaransdmk = response.data[1].value;
      this.regisulang = response.data[2].value;
      this.vaksin1 = response.data[3].value;
      this.vaksin2 = response.data[2].value;
    });
  }
};
</script>
