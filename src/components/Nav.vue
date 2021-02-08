<template>
  <section
    class="fixed block w-full py-6 leading-10 text-center text-indigo-900 bg-black  md:py-8 z-50"
  >
    <div class="w-full px-6 mx-auto leading-10 text-center md:px-8 max-w-7xl">
      <div
        class="box-border flex flex-wrap items-center justify-between -mx-4 text-indigo-900"
      >
        <div
          class="relative flex items-center w-auto px-4 leading-10 lg:flex-grow-0 lg:flex-shrink-0 lg:text-left"
        >
          <a
            href="#_"
            class="box-border inline-block font-sans text-2xl font-bold text-left text-white no-underline bg-transparent cursor-pointer focus:no-underline"
          >
            tails.
          </a>
        </div>
        <div
          class="left-0 z-0 flex justify-start w-full px-4 mt-2 font-medium leading-10 md:mt-0 md:justify-center md:absolute md:flex-grow-0 md:text-left lg:text-center"
        >
          <a
            href="#_"
            class="box-border inline-block mr-4 text-center text-gray-300 no-underline bg-transparent cursor-pointer hover:text-gray-200 focus:no-underline"
          >
            Home
          </a>
          <a
            href="#_"
            class="box-border inline-block mr-4 text-center text-gray-300 no-underline bg-transparent cursor-pointer hover:text-gray-200 focus:no-underline"
          >
            Features
          </a>
          <a
            href="#_"
            class="box-border inline-block mr-4 text-center text-gray-300 no-underline bg-transparent cursor-pointer hover:text-gray-200 focus:no-underline"
          >
            Pricing
          </a>
          <a
            href="#_"
            class="box-border inline-block mr-4 text-center text-gray-300 no-underline bg-transparent cursor-pointer hover:text-gray-200 focus:no-underline"
          >
            About
          </a>
        </div>
        <div
          class="relative flex items-center px-4 mt-2 font-medium leading-10 md:flex-grow-0 md:flex-shrink-0 md:mt-0 md:text-right lg:flex-grow-0 lg:flex-shrink-0"
        >
          <a
            href="#_"
            class="box-border inline-block h-10 px-4 mr-3 text-right text-gray-200 no-underline bg-gray-800 rounded-lg cursor-pointer md:mr-0 md:bg-transparent hover:text-white focus:no-underline"
          >
            Login
          </a>
          <a
            href="#_"
            class="box-border inline-flex items-center h-10 px-4 text-base text-center text-gray-100 no-underline align-middle bg-gray-800 rounded-lg cursor-pointer select-none hover:bg-gray-50 hover:text-gray-900 focus:shadow-xs focus:no-underline"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    active: "guide"
  })
};
</script>
