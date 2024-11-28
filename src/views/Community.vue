<script setup>

<<<<<<< Updated upstream
||||||| Stash base
import Header from "@/components/Header.vue";
=======
import Header from "@/components/Header.vue";
import axios from "axios";

import{ ref, onMounted } from "vue";

//stores all users for the leaderbaord
const leaderboard = ref([]);
const topThree = ref([]);

//function to get data
const getUsers = async () => {
  try{
    const response = await axios.get("http://localhost/CI4-EcoTrack/public/populateTheLeaderboard", {
  headers: {
    "Content-Type": "application/json", 
  },
});
    //parse json response
    const data = response.data;

    leaderboard.value = data;
    

    //get data
    const topUsers = [];
    data.forEach((oauth_users, index) => {
      if(index < 3){
        topUsers.push(oauth_users);
      }
    });

    topThree.value = topUsers;

  } catch(error){
    console.error("Error getting users", error);
  }
};
onMounted(()=>{
  getUsers();
});

>>>>>>> Stashed changes
</script>

<template>

  <div class="container flex-col align-center body">

<h1 class="heading">Community Page</h1>

<!--    container for card display and leaderboard-->
    <div  class="container">

<!--    Large card display container -->
    <div v-for="(oauth_users, index) in topThree" :key="oauth_users.username" 
    class="container my-4">
<!--first card-->
      <div :class="[
      'card', 
      oauth_users.rank === '1' ? 'cardGold' : 
      oauth_users.rank === '2' ? 'cardSilver' : 
      oauth_users.rank === '3' ? 'cardBronze' : '', 
      'border-2', 'rounded-md', 'mx-2', 'flex-row', 'p-3']">
        <img :src="oauth_users.rank === '1' ? '/imgs/badges/cil_badgegold.png' : 
                oauth_users.rank === '2' ? '/imgs/badges/cil_badgesilver.png' : 
                '/imgs/badges/cil_badgebronze.png'" 
         :alt="`${oauth_users.username}'s badge`" 
         class="badge">

        <div class="card-body mx-4 ">
        <h2>{{oauth_users.username}}</h2>
          <h3>Current Achievement</h3>
        </div>

        <div class="card-body2 pl-4">
          <h3>Score: {{oauth_users.wasteLogScore}}</h3>
          <h3>Best Streak: 100 Days</h3>
        </div>
      </div>
</div>
<!--      second card-->
      <!-- <div class="card cardSilver border-2 rounded-md my-1 mx-2 flex-row p-3">
        <img src="/imgs/badges/cil_badgesilver.png" alt="silver badge" class="badge">

        <div class="card-body mx-4 ">
          <h2>{{oauth_users.username}}</h2>
          <h3>Current Achievement</h3>
        </div>

        <div class="card-body2 pl-4">
          <h3>Score: {{oauth_users.wasteLogScore}}</h3>
          <h3>Best Streak: N/A</h3>
        </div>
      </div> -->

<!--      third card-->
      <!-- <div class="card cardBronze border-2 rounded-md my-1 mx-2 flex-row p-3">
        <img src="/imgs/badges/cil_badgebronze.png" alt="bronze badge" class="badge">

        <div class="card-body mx-4 ">
          <h2>{{oauth_users.username}}</h2>
          <h3>Current Achievement</h3>
        </div>

        <div class="card-body2 pl-4">
          <h3>Score: {{oauth_users.wasteLogScore}}</h3>
          <h3>Best Streak: N/A</h3>
        </div>
      </div>
    </div> -->

      <hr class="mx-4" />
<!--    Leader board, table display -->
    <div class="container flex flex-col leaderboard">
      <h2 class="text-center mb-1">Leaderboard</h2>

<!--      table of members, limit to 50 best -->
      <table class="mb-4 mx-1">
        <thead>
        <tr >
          <th>Rank</th>
          <th>Current Badge</th>
          <th class="text-start">Username</th>
          <th class="text-start">Score</th>
          <th class="text-start">Best Streak</th>
        </tr>
        </thead>

        <tbody>
<<<<<<< Updated upstream
        <tr>
          <td class="text-center">1</td>
          <td class="flex justify-center"><img src="/imgs/badges/cil_badgegold-thumbnail.png" alt="gold badge" class="badgeThumbnail"></td>
          <td class="text-start">Gary.oconnor94</td>
          <td class="text-start">98 Days</td>
          <td class="text-start">156 Days</td>
||||||| Stash base
        <tr>
          <td class="text-center">1</td>
          <td class="flex justify-center my-1"><img src="/imgs/badges/cil_badgegold-thumbnail.png" alt="gold badge" class="badgeThumbnail"></td>
          <td class="text-start">Gary.oconnor94</td>
          <td class="text-start">98 Days</td>
          <td class="text-start">156 Days</td>
=======
        <tr v-for="oauth_users in leaderboard" :key="oauth_users.username">
          <td class="text-center">{{ oauth_users.rank }}</td>
          <td class="flex justify-center my-1">
            <img :src="oauth_users.rank === '1' ? '/imgs/badges/cil_badgegold-thumbnail.png' : 
                    oauth_users.rank === '2' ? '/imgs/badges/cil_badgesilver-thumbnail.png' : 
                    '/imgs/badges/cil_badgebronze-thumbnail.png'" 
             :alt="`${oauth_users.username}'s badge`" 
             class="badgeThumbnail"></td>
          <td class="text-start">{{ oauth_users.username }}</td>
          <td class="text-start">{{oauth_users.wasteLogScore}}</td>
          <td class="text-start">100 Days</td>
        </tr>
        <!-- <tr>
          <td class="text-center">{{ oauth_users.rank }}</td>
          <td class="flex justify-center my-1"><img src="/imgs/badges/cil_badgegold-thumbnail.png" alt="gold badge" class="badgeThumbnail"></td>
          <td class="text-start">{{ oauth_users.username }}</td>
          <td class="text-start">{{oauth_users.wasteLogScore}}</td>
          <td class="text-start">N/A</td>
>>>>>>> Stashed changes
        </tr>
<<<<<<< Updated upstream
||||||| Stash base
        <tr>
          <td class="text-center">2</td>
          <td class="flex justify-center my-1"><img src="/imgs/badges/cil_badgegold-thumbnail.png" alt="gold badge" class="badgeThumbnail"></td>
          <td class="text-start">skye.riley02</td>
          <td class="text-start">77 Days</td>
          <td class="text-start">89 Days</td>
        </tr>
        <tr>
          <td class="text-center">3</td>
          <td class="flex justify-center my-1"><img src="/imgs/badges/cil_badgesilver-thumbnail.png" alt="gold badge" class="badgeThumbnail"></td>
          <td class="text-start">sweeney_Todd17</td>
          <td class="text-start">44 Days</td>
          <td class="text-start">44 Days</td>
        </tr>
        <tr>
          <td class="text-center">4</td>
          <td class="flex justify-center my-1"><img src="/imgs/badges/cil_badgesilver-thumbnail.png" alt="gold badge" class="badgeThumbnail"></td>
          <td class="text-start">Derrick.trotter66</td>
          <td class="text-start">41 Days</td>
          <td class="text-start">110 Days</td>
        </tr>
        <tr>
          <td class="text-center">5</td>
          <td class="flex justify-center my-1"><img src="/imgs/badges/cil_badgebronze-thumbnail.png" alt="gold badge" class="badgeThumbnail"></td>
          <td class="text-start">Jaina_Proudmore11</td>
          <td class="text-start">30 Days</td>
          <td class="text-start">111 Days</td>
        </tr>

=======
        <tr>
          <td class="text-center">{{ oauth_users.rank }}</td>
          <td class="flex justify-center my-1"><img src="/imgs/badges/cil_badgesilver-thumbnail.png" alt="gold badge" class="badgeThumbnail"></td>
          <td class="text-start">{{ oauth_users.username }}</td>
          <td class="text-start">{{oauth_users.wasteLogScore}}</td>
          <td class="text-start">N/A</td>
        </tr>
        <tr>
          <td class="text-center">{{ oauth_users.rank }}</td>
          <td class="flex justify-center my-1"><img src="/imgs/badges/cil_badgesilver-thumbnail.png" alt="gold badge" class="badgeThumbnail"></td>
          <td class="text-start">{{ oauth_users.username }}</td>
          <td class="text-start">{{oauth_users.wasteLogScore}}</td>
          <td class="text-start">N/A</td>
        </tr>
        <tr>
          <td class="text-center">{{ oauth_users.rank }}</td>
          <td class="flex justify-center my-1"><img src="/imgs/badges/cil_badgebronze-thumbnail.png" alt="gold badge" class="badgeThumbnail"></td>
          <td class="text-start">{{ oauth_users.username }}</td>
          <td class="text-start">{{oauth_users.wasteLogScore}}</td>
          <td class="text-start">N/A</td>
        </tr> -->

>>>>>>> Stashed changes
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
.card-body {
  display: flex;
  flex-direction: column;
  flex: 1; /* Allow this section to grow */
  border-right: 1px solid black;
}
.card-body2 {
  display: flex;
  flex-direction: column;
  flex:1;
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

/* rules for Desktop view, min width 1024 */
@media (min-width: 1024px) {
  .body {
    width: 60%;
    margin: auto auto 3em;
  }
  .badge {
    width: 5em;
    height: 5em;
  }
  .card{
    font-size: 1.25em;
    border-radius: 1.5em;
    margin-bottom: 1em;
  }
  .card-body {
    margin-left: 5em;
  }
  .leaderboard {
    font-size: 1.5em;
  }
  .badgeThumbnail {
    width: 2em;
  }

}

</style>