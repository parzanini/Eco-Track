<!--Date Created: 24/10/2024-->
<!--Author: K00288477 Gary O'Connor-->

<script setup>
import UserBarChart from "@/components/userPortalComponents/UserBarChart.vue";
import UserPieChart from "@/components/userPortalComponents/UserPieChart.vue";
</script>

<template>
  <div class="container flex flex-col items-center graph-container">
    <div class="flex-1"><UserBarChart class="justify-center"/></div>
    <div class="flex-1"><UserPieChart /></div>

  </div>
  <hr class="mx-4 my-4 w-full border-t border-black" />
  <div class="container text-center ur-container">
    <h2 class="font-semibold">User Waste Management Report</h2>
    <ol>
      <li>Date range: 01/10/2024 - 01/11/2024</li>
      <li>Username: gary.oconnor94</li>
      <li class="font-semibold ml-2 mt-2">Waste Details</li>
      <li class="ml-2">Total Waste events logged: 55</li>
      <li class="ml-2">Recycling: 60%</li>
      <li class="ml-2">General Waste: 30%</li>
      <li class="ml-2">Organic Waste: 10%</li>
    </ol>
    <button type="submit" class="px-16 py-1 my-5 text-white bg-blue-700 rounded-3xl">
      Download
    </button>
  </div>
</template>

<style scoped>


@media (min-width: 1024px){
  .graph-container {
    display: flex;
    flex-direction: row;
  }
  .ur-container {
    text-align: start;
  }
}

</style>
