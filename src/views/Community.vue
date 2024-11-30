<!--Date Created: 17/10/2024-->
<!--Author: K00288477 Gary O'Connor-->
<script setup>
	import { onMounted, ref } from "vue";
	import axios from "axios";

	const users = ref([]); // array to store users
	// ref to store the top 3 users
	const first = ref("");
	const second = ref("");
	const third = ref("");
	const isLoading = ref(false); // used to display loading spinner

	onMounted(async () => {
		// set loading to true
		isLoading.value = true;
		// Api Call
		const response = await axios.get(
			`https://72.145.1.73:8080/CI4-EcoTrack/public/getLeaderBoard`,
			{
				headers: { "Content-Type": "application/json" },
			}
		);
		// store data in users ref
		users.value = response.data.data;

		// get the top 3 users
		first.value = users.value[0];
		second.value = users.value[1];
		third.value = users.value[2];

		// set loading to false
		isLoading.value = false;
	});
</script>
<template>
	<div class="container flex-col align-center body">
		<h1 class="heading">Community Page</h1>

		<!--    container for card display and leaderboard-->
		<div class="container">
			<!--    Large card display container -->
			<div class="container my-4">
				<!--first card-->
				<div class="card cardGold border-2 rounded-md mx-2 flex-row p-3">
					<img
						src="/imgs/badges/cil_badgegold.png"
						alt="golden badge"
						class="badge" />

					<div class="card-body mx-4">
						<!--          username -->
						<h2 class="text-lg">{{ first.username }}</h2>
					</div>

					<div class="card-body2 pl-4">
						<!--          waste log score-->
						<h3 class="text-lg">Current Score: {{ first.wasteLogScore }}</h3>
					</div>
				</div>
			</div>

			<!--      second card-->
			<div class="card cardSilver border-2 rounded-md my-1 mx-2 flex-row p-3">
				<img
					src="/imgs/badges/cil_badgesilver.png"
					alt="silver badge"
					class="badge" />

				<div class="card-body mx-4">
					<!--          username -->
					<h2 class="text-lg">{{ second.username }}</h2>
				</div>

				<div class="card-body2 pl-4">
					<!--          waste log score-->
					<h3 class="text-lg">Current Score: {{ third.wasteLogScore }}</h3>
				</div>
			</div>
		</div>

		<!--      third card-->
		<div class="card cardBronze border-2 rounded-md my-1 mx-2 flex-row p-3">
			<img
				src="/imgs/badges/cil_badgebronze.png"
				alt="bronze badge"
				class="badge" />

			<div class="card-body mx-4">
				<!--          username -->
				<h2 class="text-lg">{{ third.username }}</h2>
			</div>

			<div class="card-body2 pl-4">
				<!--          waste log score-->
				<h3 class="text-lg">Current Score: {{ third.wasteLogScore }}</h3>
			</div>
		</div>
	</div>

	<hr class="mx-4" />
	<!--    Leader board, table display -->
	<div class="container flex flex-col leaderboard h-[20em] overflow-y-scroll">
		<h2 class="text-center mb-1">Leaderboard</h2>

		<div
			v-if="isLoading"
			class="flex flex-row justify-center align-middle pt-10">
			<h1 class="mt-2 mr-4 text-2xl">Loading...</h1>
			<div
				class="w-12 h-12 border-4 border-gray-300 border-t-4 border-t-green-500 rounded-full animate-spin"></div>
		</div>
		<!--      table of members, limit to 50 best -->
		<table
			v-if="!isLoading"
			class="mb-10 mx-1 text-2xl">
			<thead>
				<tr>
					<th>Rank</th>
					<th>Current Badge</th>
					<th class="text-start">Username</th>
					<th class="text-start">Score</th>
					<th class="text-start">Best Streak</th>
				</tr>
			</thead>
			<!--        Loop through the users ref. Use the index to display rank-->
			<!--        using boolean to display leaderboard. Only show when populated-->
			<tbody
				v-for="(user, index) in users"
				:key="user.user_id">
				<tr>
					<td class="text-center">{{ index + 1 }}</td>
					<td class="flex justify-center my-1">
						<!--            set the badge based on the wasteLogScore-->
						<img
							v-if="user.wasteLogScore > 15"
							src="/imgs/badges/cil_badgegold-thumbnail.png"
							alt="gold badge"
							class="badgeThumbnail" />
						<img
							v-if="user.wasteLogScore < 15 && user.wasteLogScore > 10"
							src="/imgs/badges/cil_badgesilver-thumbnail.png"
							alt="silver badge"
							class="badgeThumbnail" />
						<img
							v-if="user.wasteLogScore < 10"
							src="/imgs/badges/cil_badgebronze-thumbnail.png"
							alt="bronze badge"
							class="badgeThumbnail" />
					</td>
					<td class="text-start">{{ user.username }}</td>
					<td class="text-start">{{ user.wasteLogScore }}</td>
					<td class="text-start">156 Days</td>
				</tr>
			</tbody>
		</table>
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
		flex: 1;
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
		.card {
			font-size: 1.25em;
			border-radius: 1.5em;
			margin-bottom: 1em;
		}
		.card-body {
			margin-left: 5em;
		}
		.leaderboard {
			width: 90%;
			margin: auto;
			font-size: 1.5em;
			height: 30em;
			overflow-y: scroll;
		}
		.badgeThumbnail {
			width: 2em;
		}
		table {
			font-size: 1.875rem /* 30px */;
			line-height: 2.25rem /* 36px */;
		}
	}
</style>
