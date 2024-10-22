<script setup>
// Navigation for the user portal, desktop & mobile view


</script>

<template>
  <div class="container grid-container my-4 px-2">

      <div class="l-item active" id="up-1">Profile</div>
      <div class="l-item" id="up-2">Reports</div>
      <div class="l-item" id="up-3">Badges</div>
      <div class="l-item" id="up-4">Milestones</div>
      <div class="l-item" id="up-5">Community</div>

  </div>


</template>

<style scoped>
.grid-container {
  overflow-x: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.l-item {
  text-align: center;
  background-color: white;
  border: 2px solid #36ba24;
  color: black;
  margin-right: 0.125em;
  margin-left: 0.125em;
  padding: 0.25em 0.25em;
  margin-bottom: 0.5em;
  border-radius: 0.5em;
}

.active {
  background-color: #36ba24;
  color: white;
}

</style>