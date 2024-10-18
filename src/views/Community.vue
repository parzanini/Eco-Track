<script setup>

</script>

<template>

  <div class="container flex-col align-center">

<h1 class="heading">Community Page</h1>

<!--    container for card display and leaderboard-->
    <div class="container">

<!--    Large card display container -->
    <div class="container my-4">
<!--first card-->
      <div class="card cardGold border-2 rounded-md mx-2 flex-row p-3">
        <img src="/imgs/badges/cil_badgegold.png" alt="golden badge" class="badge">

        <div class="card-body mx-4 ">
        <h2>Gary.oconnor94</h2>
          <h3>Current Achievement</h3>
        </div>

        <div class="card-body2 pl-4">
          <h3>Current Streak: 100 Days</h3>
          <h3>Best Streak: 100 Days</h3>
        </div>
      </div>

<!--      second card-->
      <div class="card cardSilver border-2 rounded-md my-1 mx-2 flex-row p-3">
        <img src="/imgs/badges/cil_badgesilver.png" alt="silver badge" class="badge">

        <div class="card-body mx-4 ">
          <h2>Gary.oconnor94</h2>
          <h3>Current Achievement</h3>
        </div>

        <div class="card-body2 pl-4">
          <h3>Current Streak: 100 Days</h3>
          <h3>Best Streak: 100 Days</h3>
        </div>
      </div>

<!--      third card-->
      <div class="card cardBronze border-2 rounded-md my-1 mx-2 flex-row p-3">
        <img src="/imgs/badges/cil_badgebronze.png" alt="bronze badge" class="badge">

        <div class="card-body mx-4 ">
          <h2>Gary.oconnor94</h2>
          <h3>Current Achievement</h3>
        </div>

        <div class="card-body2 pl-4">
          <h3>Current Streak: 100 Days</h3>
          <h3>Best Streak: 100 Days</h3>
        </div>
      </div>
    </div>

      <hr class="mx-4" />
<!--    Leader board, table display -->
    <div class="container flex flex-col">
      <h2 class="text-center mb-1">Leaderboard</h2>

<!--      table of members, limit to 50 best -->
      <table class="mb-4 mx-1">
        <thead>
        <tr>
          <th>Rank</th>
          <th>Current Badge</th>
          <th class="text-start">Username</th>
          <th class="text-start">Current Streak</th>
          <th class="text-start">Best Streak</th>
        </tr>
        </thead>

        <tbody>
        <tr>
          <td class="text-center">1</td>
          <td class="flex justify-center"><img src="/imgs/badges/cil_badgegold-thumbnail.png" alt="gold badge" class="badgeThumbnail"></td>
          <td class="text-start">Gary.oconnor94</td>
          <td class="text-start">98 Days</td>
          <td class="text-start">156 Days</td>
        </tr>
        </tbody>
      </table>
    </div>
    </div>
  </div>

</template>

<style scoped>
tbody {
  font-size: 0.5em;
}
.badgeThumbnail {
  width: 1em;
}
.heading {
  font-size: 1.25em;
  text-align: center;
}

.badge {
  width: 35px;
  height: 35px;
}

.card {
  display: flex;
  flex-grow: 1;
  font-size: 0.5em;
  align-items: center;
}
.cardGold {
  background-color: rgba(254, 199, 0, 0.2);
  border-color: #fec700;
}
.cardSilver {
  background-color: rgba(193, 193, 193, 0.2);
  border-color: #979797;
}
.cardBronze {
  border-color: #955900;
  background-color: rgba(149, 89, 0, 0.2);
}
.card-body2 {
  border-left: 1px solid black;
}
hr {
  border-color: #218907;
}
thead {
  color: #218907;
  font-size: 0.5em;
}
tr {
  border-bottom: 1px solid black;
}

//TODO desktop rules
</style>