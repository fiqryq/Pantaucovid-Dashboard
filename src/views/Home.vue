<template>
  <div class="container px-4 py-10 mx-auto" itemid="#" itemscope>
    <div class="w-full mx-auto mb-5 text-left md:w-3/4 lg:w-1/2">
      <!-- Title -->
      <div class="title pb-3">
        <h1 class="text-4xl font-extrabold leading-snug tracking-tight mb-2">
          Covid Dashboard
        </h1>
        <div class="bg-gray-100 w-full mx-auto  items-center rounded-xl p-5">
          <p class="text-gray-800 pb-2">
            COVID-19 (coronavirus disease 2019) adalah penyakit yang disebabkan
            oleh jenis coronavirus baru yaitu Sars-CoV-2, yang dilaporkan
            pertama kali di Wuhan Tiongkok pada tanggal 31 Desember 2019.
          </p>
          <a href="http://www.padk.kemkes.go.id/" class="text-gray-400 pb-2">
            Sumber data : http://www.padk.kemkes.go.id/
          </a>
        </div>
      </div>

      <div class="statistik">
        <!-- Title -->
        <h2
          class="text-2xl font-extrabold leading-snug tracking-tight mb-2 mt-3"
        >
          Kasus covid indonesia
        </h2>
        <a
          href="https://covid19.mathdro.id/api/countries/ID"
          class="text-gray-500 pb-2"
        >
          sumber data: Mathdroid covid-19 API ( {{ update }} )
        </a>
        <!-- Grid -->
        <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
          <!-- Item One -->
          <div
            class="metric-card border border-gray-200 dark:border-gray-800 rounded p-4 max-w-72 w-full"
          >
            <div class="flex items-center text-gray-900 dark:text-gray-100">
              Kasus positif
            </div>
            <p
              class="mt-2 text-3xl font-bold spacing-sm text-yellow-600 dark:text-white"
            >
              {{ numberFormat(positif) }}
            </p>
          </div>
          <!-- Item Two -->
          <div
            class="metric-card border border-gray-200 dark:border-gray-800 rounded p-4 max-w-72 w-full"
          >
            <div class="flex items-center text-gray-900 dark:text-gray-100">
              Kasus sembuh
            </div>
            <p
              class="mt-2 text-3xl font-bold spacing-sm text-green-600 dark:text-white"
            >
              {{ numberFormat(sembuh) }}
            </p>
          </div>
          <!-- End Item Two -->
          <!-- Item Three -->
          <div
            class="metric-card border border-gray-200 dark:border-gray-800 rounded p-4 w-full"
          >
            <div class="flex items-center text-gray-900 dark:text-gray-100">
              Kasus Meninggal
            </div>
            <p
              class="mt-2 text-3xl font-bold spacing-sm  text-red-600 dark:text-white"
            >
              {{ numberFormat(meninggal) }}
            </p>
          </div>
        </div>
      </div>
      <!-- Table Vaksin -->
      <div class="vaksin mb-4 mt-6">
        <!-- Title -->
        <div class="title mb-3">
          <h2
            class="text-2xl font-extrabold leading-snug tracking-tight mb-2 mt-3"
          >
            Data vaksin indonesia
          </h2>
          <a href="https://www.kemkes.go.id/" class="text-gray-400 pb-">
            Sumber data : https://www.kemkes.go.id/
          </a>
        </div>

        <!-- Vaksin -->
        <div
          class="metric-card border bg-yellow-300 border-gray-200 dark:border-gray-800 rounded p-4 w-full"
        >
          <h1 class="text-center">Maintenance</h1>
        </div>
      </div>
      <!-- Pantaucovid bot -->

      <a
        class="mb-2"
        href="https://discord.com/oauth2/authorize?client_id=804315303801520218&scope=bot"
        ><div
          class="flex items-center border border-gray-200 dark:border-gray-800 rounded p-4"
        >
          <div class="h-8 w-8 ml-2 mr-4">
            <img
              class="h-8 w-8 min-w-sm text-gray-900 dark:text-gray-100"
              src="../assets/logobot.svg"
              alt=""
            />
          </div>
          <!-- Bot -->
          <div>
            <h4
              class="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100"
            >
              Pantaucovid discord bot
            </h4>
            <p class="leading-5 text-gray-700 dark:text-gray-300">
              invite bot Pantaucovid untuk mendapatkan informasi seputar covid19
              di discord.
            </p>
          </div>
        </div></a
      >
      <!-- Footer -->
      <Footer />
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Footer from "../components/Footer.vue";
import common from "@/util/common.js";

const url = "https://covid19.mathdro.id/api/countries/ID";
export default {
  components: {
    Footer
  },
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
    axios.get(url).then(response => {
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
<style scoped></style>
