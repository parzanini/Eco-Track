<script setup></script>

<template>
	<!-- Hero Section -->
	<div class="hero_image">
		<div class="hero-text">
			<h1 class="text-center text-2xl p-2">
				EcoTrack - Waste Management Solution
			</h1>
			<router-link
				to="/user-waste-form"
				class="bg-[#0047ff] rounded-md p-3 text-center hero-link"
				><button>Use Our Waste Tracker</button></router-link
			>
		</div>
	</div>

	<!--Portal section-->
	<div class="portal-container flex flex-col m-4">
		<div
			class="user-portal mb-4 flex-1 flex flex-col bg-green-100 p-4 rounded-lg shadow-lg border-2 border-double border-black text-black text-center">
			<router-link to="/user-portal">
				<img
					src="../../public/imgs/headerimg/user%20login.png"
					alt="user portal"
					class="mx-auto mb-4" />
				<h3 class="text-xl font-bold mb-2">User Portal</h3>
				<p>
					View your profile, current badges, and streaks, and generate detailed
					reports.
				</p>
			</router-link>
		</div>

		<div
			class="user-portal mb-4 flex-1 bg-green-100 p-4 rounded-lg shadow-lg border-2 border-double border-black text-black text-center">
			<router-link to="">
				<img
					src="../../public/imgs/headerimg/orginaizationPortal.png"
					alt=" login"
					class="mx-auto mb-4" />
				<h3 class="text-xl font-bold mb-2">Organisation Portal</h3>
				<p>
					View your Companies profile, current badges, and streaks, and generate
					detailed reports.
				</p>
			</router-link>
		</div>
	</div>
</template>

<style scoped>
	.hero_image {
		background: url("../../public/imgs/headerimg/hero-image-mobile.jpg");
		background-image: cover;
		position: relative;
		height: 25em;
		background-size: cover;
		max-width: 100%;
	}
	.hero-text {
		position: absolute;
		bottom: -245px;
		left: 50%;
		transform: translateX(-50%);
		width: 100%;
		height: 100%;
		color: white;
	}
	.hero-text h1 {
		padding: 0.5rem;

		background-color: rgba(27, 101, 17, 0.5);
	}
	.hero-link {
		display: block;
		width: 60%;
		margin: auto;
	}

	/* Desktop styling */
	@media (min-width: 1024px) {
		.hero_image {
			background: url("../../public/imgs/headerimg/hero-image.jpg");
			position: relative;
			height: 50em;
			background-size: cover;
			max-width: 100%;
		}
		.hero-text {
			bottom: -20px;
			left: 22%;
			transform: translateX(-50%);
			width: 40%;
			height: 100%;
			color: white;
		}
		.hero-text h1 {
			text-align: start;
			padding-top: 1rem;
			padding-bottom: 2rem;
			background-color: rgba(0, 0, 0, 0.5);
			font-size: 2rem;
			margin-bottom: 0.5rem;
		}
		.hero-link {
			margin: 0;
			padding-top: 1rem;
			padding-right: 1rem;
			width: 15rem;
		}

		.portal-container {
			flex-direction: row;
			flex-wrap: wrap;
			width: 60%;
			margin: 1em auto auto;
		}
		.user-portal {
			margin-left: 1em;
			margin-right: 1em;
		}
	}
</style>
