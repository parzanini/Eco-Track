<template>
  <footer class="sm:px-16 sm:py-20 px-4 py-6 bg-green-700 sm:max-md:px-5">

    <!-- Desktop View -->
    <div class="desktop-footer flex gap-5 max-md:flex-col">
      <nav class="flex flex-col max-md:ml-0 max-md:w-full sm:flex-1">
        <div class="flex flex-col items-start text-lg text-white max-md:mt-10">
          <h2 class="self-stretch text-xl">Administration</h2>
          <router-link to = "" class="mt-5 hover:text-blue-500">About Us</router-link>
          <router-link to = "" class="mt-6 hover:text-blue-500">Privacy Policy</router-link>
          <router-link to = "" class="mt-5 hover:text-blue-500">Administrator</router-link>
        </div>
      </nav>
      <nav class="flex flex-col ml-5 max-md:ml-0 max-md:w-full sm:flex-1">
        <div class="flex flex-col grow items-start text-lg text-white max-md:mt-10">
          <h2 class="text-xl">Useful Links</h2>
          <router-link to = "" class="mt-5 hover:text-blue-500">About Us</router-link>
          <router-link to = "" class="mt-6 hover:text-blue-500">Recycling Guidelines</router-link>
          <router-link to = "" class="self-stretch mt-5 hover:text-blue-500">Frequently Asked Questions</router-link>
        </div>
      </nav>
      <section class="flex flex-col ml-5 max-md:ml-0 max-md:w-full sm:flex-1">
        <div class="flex gap-10 self-stretch my-auto max-md:mt-10">
          <router-link to="">
            <img
                loading="lazy"
                src="/imgs/logo/Facebook%20Footer%20Logo.png"
                alt="Company Logo 1"
                class="object-contain shrink-0 max-w-full aspect-square sm:w-[120px]"
            />
          </router-link>
          <router-link to="">
            <img loading="lazy"
                 src="/imgs/logo/X%20Footer%20Logo.png"
                 alt="Company Logo 2"
                 class="object-contain shrink-0 max-w-full aspect-square sm:w-[120px]"
            />
          </router-link>
          <router-link to="">
            <img loading="lazy"
                 src="/imgs/logo/Recycling%20Footer%20Logo.png"
                 alt="Company Logo 3"
                 class="object-contain shrink-0 max-w-full aspect-square sm:w-[120px]"
            />
          </router-link>
        </div>
      </section>
    </div>

    <!-- Mobile View -->
    <div class="mobile-footer flex max-md:flex-col">
      <section class="flex justify-center">
        <!-- Admin Links -->
        <nav class="flex flex-col text-center justify-center max-md:ml-0 max-md:w-full">
          <div class="flex flex-col justify-center items-center text-white">
            <h2 class="text-xl self-stretch">Administration</h2>
            <router-link to = "" class="text-sm mt-2 hover:text-blue-500">About Us</router-link>
            <router-link to = "" class="text-sm mt-2 hover:text-blue-500">Privacy Policy</router-link>
            <router-link to = "" class="text-sm mt-2 hover:text-blue-500">Administrator</router-link>
          </div>
        </nav>
        <!-- Useful Links -->
        <nav class="flex flex-col text-center justify-center ml-5 max-md:ml-0 max-md:w-full">
          <div class="flex flex-col grow items-center text-white">
            <h2 class="text-xl">Useful Links</h2>
            <router-link to = "" class="text-sm mt-2 hover:text-blue-500">About Us</router-link>
            <router-link to = "" class="text-sm mt-2 hover:text-blue-500">Recycling Guidelines</router-link>
            <router-link to = "" class="text-sm mt-2 self-stretch hover:text-blue-500">Frequently Asked Questions</router-link>
          </div>
        </nav>
      </section>
      <!-- Logo Links -->
      <section class="flex flex-col items-center ml-5 max-md:ml-0 max-md:w-full">
        <div class="flex gap-10 justify-between w-full max-md:mt-5">
          <router-link to="" class="flex justify-center flex-1">
            <img
                loading="lazy"
                src="/imgs/logo/Facebook%20Footer%20Logo.png"
                alt="Company Logo 1"
                class="object-contain max-w-full aspect-square w-[70px]"
            />
          </router-link>
          <router-link to="" class="flex justify-center flex-1">
            <img
                loading="lazy"
                src="/imgs/logo/X%20Footer%20Logo.png"
                alt="Company Logo 2"
                class="object-contain max-w-full aspect-square w-[70px]"
            />
          </router-link>
          <router-link to="" class="flex justify-center flex-1">
            <img
                loading="lazy"
                src="/imgs/logo/Recycling%20Footer%20Logo.png"
                alt="Company Logo 3"
                class="object-contain max-w-full aspect-square w-[70px]"
            />
          </router-link>
        </div>
      </section>
    </div>
  </footer>
</template>

<style scoped>
/* Media queries for responsive styling */
.desktop-footer {
  display: flex; /* Show desktop navbar */
}

.mobile-footer {
  display: none; /* Hide mobile navbar by default */
}

/* Show mobile navbar on smaller screens */
@media (max-width: 768px) {
  .desktop-footer {
    display: none; /* Hide desktop navbar on mobile */
  }
  .mobile-footer {
    display: flex; /* Show mobile navbar on mobile */
  }
}
</style>
<script setup lang="ts">


</script>