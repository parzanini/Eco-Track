<template>
  <footer class="px-20 py-24 bg-lime-900 max-md:px-5">
    <div class="flex gap-5 max-md:flex-col">
      <nav class="flex flex-col w-[18%] max-md:ml-0 max-md:w-full">
        <div class="flex flex-col items-start text-lg text-white max-md:mt-10">
          <h2 class="self-stretch text-xl rotate-[3.1996798622706754e-17rad]">Administration</h2>
          <router-link to = "" class="mt-5 rotate-[3.1996798622706754e-17rad]">About Us</router-link>
          <router-link to = "" class="mt-6 rotate-[3.1996798622706754e-17rad]">Privacy Policy</router-link>
          <router-link to = "" class="mt-5 rotate-[5.551115123125783e-17rad]">Administrator</router-link>
        </div>
      </nav>
      <nav class="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
        <div class="flex flex-col grow items-start text-lg text-white max-md:mt-10">
          <h2 class="text-xl rotate-[3.1996798622706754e-17rad]">Useful Links</h2>
          <router-link to = "" class="mt-5 rotate-[3.1996798622706754e-17rad]">About Us</router-link>
          <router-link to = "" class="mt-6 rotate-[3.1996798622706754e-17rad]">Recycling Guidelines</router-link>
          <router-link to = "" class="self-stretch mt-5 rotate-[5.551115123125783e-17rad]">Frequently Asked Questions</router-link>
        </div>
      </nav>
      <section class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
        <div class="flex gap-10 self-stretch my-auto max-md:mt-10">
          <router-link to=""> <img loading="lazy" src="/imgs/logo/Facebook%20Footer%20Logo.png" alt="Company Logo 1" class="object-contain shrink-0 max-w-full aspect-square w-[100px]" /> </router-link>
          <router-link to=""> <img loading="lazy" src="/imgs/logo/X%20Footer%20Logo.png" alt="Company Logo 2" class="object-contain shrink-0 max-w-full aspect-square w-[100px]" /> </router-link>
          <router-link to=""> <img loading="lazy" src="/imgs/logo/Recycling%20Footer%20Logo.png" alt="Company Logo 3" class="object-contain shrink-0 max-w-full aspect-square w-[100px]" /> </router-link>
        </div>
      </section>
    </div>
  </footer>
</template>

<style scoped>
builder-component {
  max-width: none !important;
}
</style>
<script setup lang="ts">
</script>