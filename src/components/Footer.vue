<template>
  <footer class="bg-green-700 p-6">
    <!-- Desktop View -->
    <div class="flex w-full md:justify-between flex-wrap md:p-3 p-1">
      <div class="flex flex-col md:w-2/5 w-1/2">
        <p class="text-xl text-white text-center md:text-left">
          Administration
        </p>
        <router-link
          to=""
          class="mt-2 hover:text-blue-500 text-white text-center md:text-left"
          >About Us</router-link
        >
        <router-link
          to=""
          class="mt-2 hover:text-blue-500 text-white text-center md:text-left"
          >Privacy Policy</router-link
        >
        <router-link
          to=""
          class="mt-2 hover:text-blue-500 text-white text-center md:text-left"
          >Administrator</router-link
        >
      </div>
      <div class="flex flex-col md:w-2/5 w-1/2">
        <p class="text-xl text-white text-center md:text-left">Useful Links</p>
        <router-link
          to=""
          class="mt-2 hover:text-blue-500 text-white text-center md:text-left"
          >About Us</router-link
        >
        <router-link
          to=""
          class="mt-2 hover:text-blue-500 text-white text-center md:text-left"
          >Recycling Guidelines</router-link
        >
        <router-link
          to=""
          class="self-stretch mt-2 hover:text-blue-500 text-white text-center md:text-left"
          >Frequently Asked Questions</router-link
        >
      </div>
      <div
        class="flex flex-row md:w-1/5 justify-center my-auto w-full mt-4 md:mt-0"
      >
        <div class="w-full flex justify-center md:justify-between">
          <router-link to="" class="p-2">
            <img
              loading="lazy"
              src="/imgs/logo/Facebook-Logo.png"
              alt="Company Logo 1"
              class=""
            />
          </router-link>
          <router-link to="" class="p-2">
            <img
              loading="lazy"
              src="/imgs/logo/X-Logo.png"
              alt="Company Logo 2"
              class=""
            />
          </router-link>
          <router-link to="" class="p-2">
            <img
              loading="lazy"
              src="/imgs/logo/Recycling-Logo.png"
              alt="Company Logo 3"
              class=""
            />
          </router-link>
        </div>
      </div>
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
<script setup lang="ts"></script>
