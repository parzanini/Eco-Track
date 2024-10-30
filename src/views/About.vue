<script setup>
</script>
<template>
	<div>
    <div class="grid-container">

      <div>
        <img src="/imgs/aboutPageImgs/gruopPic.png" alt="EcoTrack Team">
      </div>

      <div >
        <h2 class="module-title">About Us</h2>
        <p>Welcome to EcoTrack Management System, our aim is to educate and engage users by making waste management real and actionable.</p>
        <p>We recognize that many people want to do their part but often lack the resources, motivation, or knowledge to do so effectively.</p>
        <p>Eco Track will encourage users to adopt more sustainable practices, such as reducing plastic use or composting organic waste.</p>
        <p>By providing users with the tools to track, manage, and reduce waste, EcoTrack aims to promote a culture of sustainability that benefits not only individuals and communities but also the planet as a whole.</p>
      </div>


      <div>
        <h2 class="module-title">What we provide</h2>
        <p><strong>Waste Logging and Tracking:</strong>
          Easily record your waste generation, categorize it by type (plastic, organic, glass, etc.), and track how much of it is recyclable.</p>

        <p><strong>Goal Setting and Progress Tracking:</strong>
          Set personalized goals for waste reduction and recycling, and receive real-time feedback on your progress.</p>

        <p> <strong>Detailed Reports and Visual Analytics:</strong>
          Access visual reports that break down your waste habits, helping you identify areas for improvement.</p>

        <p><strong>Community Engagement:</strong>
          Participate in challenges and leaderboards to foster friendly competition and collective responsibility.</p>

        <p><strong>Gamification and Rewards:</strong>
          Earn badges, points, and rewards for achieving sustainability milestones and share your achievements with your community.</p>

      </div>

      <div>
        <img src="/imgs/aboutPageImgs/Eco%20US.jpg" alt="Eco Us Illustration">
      </div>



    </div>
	</div>
</template>

<style scoped>
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
* {
  box-sizing: border-box;
}

img {
  max-width: 100%;
}
.grid-container {
  padding: 1em;
  margin: auto;
  width: 90%;
  grid-gap: 1em;
  display: grid;
  grid-template-columns: auto;
}
.module-title {
  font-size: 1.5em;
  color: black;
  font-weight: bold;
  /*				text-decoration: underline;*/
}

@media  screen and (min-width: 992px) /*desktop */ {

  /*      .grid-container {grid-template-columns: auto auto auto; }*/
  .grid-container {grid-template-columns: auto auto; }
}

</style>
