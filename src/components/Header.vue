<template>
  <header class="flex flex-col text-2xl font-bold text-center text-black whitespace-nowrap">
    <nav class="flex flex-wrap gap-5 justify-between py-3 pr-14 pl-5 w-full bg-white max-md:pr-5 max-md:max-w-full">
      <img loading="lazy" src="/imgs/logo/EcoTrack%20Logo.png" alt="Company Logo" class="object-contain shrink-0 max-w-full aspect-[1.64] w-[229px]" />
      <div class="flex flex-wrap gap-10 items-center my-auto max-md:max-w-full">
        <router-link to = "/" class="grow self-stretch my-auto hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" tabindex="0">HOME</router-link>
        <router-link to = "/about" class="self-stretch my-auto hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" tabindex="0">ABOUT</router-link>
        <router-link to = "/education" class="self-stretch my-auto basis-auto hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" tabindex="0">EDUCATION</router-link>
        <router-link to = "/community" class="self-stretch my-auto basis-auto hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" tabindex="0">COMMUNITY</router-link>
        <router-link to = "/contact" class="self-stretch my-auto basis-auto hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" tabindex="0">CONTACT</router-link>
        <router-link to = "" > <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/9c239a7e1e7d405d806ceb4b5f549b4f/8fe20ae067fbba3a570985a523316d5b6168e6601d6eec4a70bbd73b0dcdf6ba?apiKey=9c239a7e1e7d405d806ceb4b5f549b4f&" alt="" class="object-contain shrink-0 self-stretch aspect-[1.05] w-[45px]" /> </router-link>
      </div>
    </nav>
  </header>
</template>

<style scoped>
builder-component {
  max-width: none !important;
}
</style>
<script setup lang="ts">
</script>