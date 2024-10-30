
<script setup>
</script>

<template>
  <div>

    <!-- Hero Section -->
    <div class="relative h-[500px] bg-cover bg-center py-24" style="background-image: url('../../public/imgs/headerimg/headerIMG.png');">
      <div class="absolute top-[70%] left-[10%] transform -translate-x-1/2 -translate-y-1/2 text-white">
        <router-link to="/user-waste-form" class="inline-block px-6 py-3 bg-blue-700 text-white text-center rounded-lg hover:bg-blue-500 transition-colors duration-300">
          Use Our Waste Tracker
        </router-link>
      </div>
    </div>

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