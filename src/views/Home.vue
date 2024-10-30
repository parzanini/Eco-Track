
<script setup>
</script>

<template>
  <div>

    <!-- Hero Section -->
    <section class="flex relative flex-col items-start px-20 pt-96 pb-11 w-full text-3xl text-center text-white min-h-[584px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
      <img loading="lazy" src="/imgs/headerimg/headerIMG.png" alt="Background image" class="object-cover absolute inset-0 size-full" />
      <router-link to="/user-waste-form" class="relative px-12 py-6 max-w-full bg-blue-700 rounded-xl w-[293px] max-md:px-5">
        Use Our Waste Tracker
      </router-link>
    </section>

    <!-- Login Section -->
    <div class="grid gap-4 p-4 w-[90%] mx-auto lg:grid-cols-2">
      <router-link to="/user-portal" class="portal bg-green-100 p-4 rounded-lg shadow-lg border-2 border-double border-black text-black text-center">
        <img src="../../public/imgs/headerimg/user%20login.png" alt="user login" class="mx-auto mb-4" />
        <h3 class="text-xl font-bold mb-2">User Portal</h3>
        <p>View your profile, current badges, and streaks, and generate detailed reports.</p>
      </router-link>

      <a href="sign-up.html" class="portal bg-green-100 p-4 rounded-lg shadow-lg border-2 border-double border-black text-black text-center">
        <img src="../../public/imgs/headerimg/orginaizationPortal.png" alt="organization login" class="mx-auto mb-4" />
        <h3 class="text-xl font-bold mb-2">Organization Portal</h3>
        <p>View your profile, current badges, and streaks, and generate detailed reports.</p>
      </a>
    </div>

  </div>
</template>

<style scoped>
/* Custom CSS if needed */
</style>