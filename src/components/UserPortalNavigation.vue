<!--Date Created: 22/10/2024       -->
<!--Author: K00288477 Gary O'Connor       -->

<script setup>
	// Navigation for the user portal, desktop & mobile view
	// function to append the active class to the clicked div

	const emit = defineEmits(["update-tab"]);

	function portalNavigationManager(id) {
		// iterate through the nav items
		const listItems = document.querySelectorAll(".l-item");
		const navId = document.getElementById(id);

		listItems.forEach((item) => {
			item.classList.remove("active");
		});

		// target the selected list item, append the active class
		navId.classList.add("active");

		// Emit the tab ID to the parent
		emit("update-tab", id);
	}
</script>

<template>
	<div class="container grid-container66 px-2">
		<h1 class="heading font-semibold text-start text-[#ffffff] mb-1">
			User Portal
		</h1>
		<div
			class="l-item active"
			id="up-1"
			@click="portalNavigationManager('up-1')">
			Profile
		</div>
		<div
			class="l-item"
			id="up-2"
			@click="portalNavigationManager('up-2')">
			Reports
		</div>
		<!--      <div class="l-item" id="up-3" @click="portalNavigationManager('up-3')">Badges</div>-->
		<!--      <div class="l-item" id="up-4" @click="portalNavigationManager('up-4')">Milestones</div>-->
		<!--      <div class="l-item" id="up-5" @click="portalNavigationManager('up-5')">Community</div>-->
		<div
			class="l-item"
			id="up-6"
			@click="portalNavigationManager('up-6')">
			Delete Account
		</div>
	</div>
</template>

<style scoped>
	.heading {
		display: none;
	}
	.grid-container66 {
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
	.l-item:hover {
		cursor: pointer;
	}
	.active {
		background-color: #36ba24;
		color: white;
	}

	/* desktop styles */
	@media (min-width: 1024px) {
		.heading {
			display: block;
		}
		.grid-container66 {
			background-color: #36ba24;
			grid-template-columns: 1fr;
			padding-top: 0.5em;
			margin-bottom: 0;
		}
		.l-item {
			text-align: start;
			border-radius: 5em;
			padding-left: 1em;
			background-color: #36ba24;
			color: white;
		}
		.l-item:hover {
			background-color: #29981a;
		}
		.active {
			background-color: #29981a;
		}
	}
</style>
