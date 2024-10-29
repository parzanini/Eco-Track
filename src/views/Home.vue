<script setup>

</script>
<template>
	<div>


    <!-- Hero Section -->
    <div class="hero_image">
      <div class="hero-text">
<!--        <a href= "#login"><button>Use Our Waste Tracker</button></a>-->
<!--      link to waste logger-->
        <router-link to="/user-waste-form" class="userWasteForm">Use Our Waste Tracker</router-link>
      </div>
    </div>

    <!-- login Section -->
    <div class="grid-container">

      <router-link to="/user-portal"><div class="portal user-portal">
        <img src="../../public/imgs/headerimg/user%20login.png" alt="user login">
        <h3 class="module-title">User Portal</h3>
        <p>View your profile, current badges, and streaks, and generate detailed reports.</p>
      </div>
      </router-link>
      <a href="sign-up.html"><div class="portal organization-portal">
        <img src="../../public/imgs/headerimg/orginaizationPortal.png" alt="user login">
        <h3 class="module-title">Organization Portal</h3>
        <p>View your profile, current badges, and streaks, and generate detailed reports.</p>
      </div>
      </a>
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

* {
  box-sizing: border-box;
}


.hero_image {
  /*background-image: url("../../public/imgs/headerimg/headerIMG.png"); error, please fix paths  */
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding: 100px 0;
}

.hero-text {
  text-align: left;
  position: absolute;
  top: 70%;
  left: 10%;
  transform: translate(-50%, -50%);
  color: white;
}

.hero-text .userWasteForm {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 10px 25px;
  color: white;
  background-color: rgba(0, 71, 255, 1);
  text-align: center;
  cursor: pointer;
  border-radius: 12px;
}


.hero-text button:hover {
  background-color: #555;
  color: white;
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

.portal {
  color: black;
  background-color: rgba(231, 247, 229, 1);
  padding: 1em;
  border-radius: 8px;
  box-shadow: 0 0 1em grey;
  border: 1px double black;

}

a {
  text-decoration: none;
}

@media  screen and (min-width: 992px) /*desktop */ {
  .grid-container {
    grid-template-columns: auto auto;
  }

}
</style>
