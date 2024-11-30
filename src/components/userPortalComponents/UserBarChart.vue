<script setup>
	import { ref, onMounted } from "vue";
	import { Bar } from "vue-chartjs";
	import {
		Chart as ChartJS,
		Title,
		Tooltip,
		Legend,
		BarElement,
		CategoryScale,
		LinearScale,
	} from "chart.js";
	import axios from "axios";
	// Register necessary Chart.js components
	ChartJS.register(
		Title,
		Tooltip,
		Legend,
		BarElement,
		CategoryScale,
		LinearScale
	);

	const user_id = JSON.parse(sessionStorage.getItem("user_id"));
	const chartData = ref({
		labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
		datasets: [
			{
				label: "Recycling",
				backgroundColor: "#0C2A77",
				borderColor: "black",
				borderWidth: 1,
				data: [0, 0, 0, 0],
				barThickness: 10,
			},
			{
				label: "General Waste",
				backgroundColor: "#585858",
				borderColor: "black",
				borderWidth: 1,
				data: [0, 0, 0, 0],
				barThickness: 10,
			},
			{
				label: "Organic",
				backgroundColor: "#36BA24",
				borderColor: "black",
				borderWidth: 1,
				data: [0, 0, 0, 0],
				barThickness: 10,
			},
		],
	});

	onMounted(async () => {
		if (user_id) {
			try {
				const response = await axios.get(
					`72.145.1.73:8080/CI4-EcoTrack/public/monthlyData/${user_id}`,
					{ headers: { "Content-Type": "application/json" } }
				);
				console.log("Response Data:", JSON.stringify(response.data, null, 2));
				const apiData = response.data.data;
				if (!apiData) {
					console.error("API Data is undefined or null:", apiData);
					return;
				}

				// Define array of arrays
				const recycling = [0, 0, 0, 0];
				const general = [0, 0, 0, 0];
				const organic = [0, 0, 0, 0];
				const parsedWeeks = Object.keys(apiData);

				//  iterate through the array key and add data to arrays
				parsedWeeks.forEach((week, index) => {
					const weekData = apiData[week];
					if (!weekData) {
						console.error(
							`Week data for week ${week} is undefined or null:`,
							weekData
						);
						return; // display no data if the user does h=not have any waste events logged
					}
					// Add the data to matching arrays. 0 is no data exists for the array
					recycling[index] =
						weekData.recycling !== undefined ? weekData.recycling : 0;
					general[index] =
						weekData.general !== undefined ? weekData.general : 0;
					organic[index] =
						weekData.organic !== undefined ? weekData.organic : 0;
				});

				// Populate chart
				chartData.value = {
					labels: chartData.value.labels,
					datasets: [
						{
							label: "Recycling",
							backgroundColor: "#0C2A77",
							borderColor: "black",
							borderWidth: 1,
							data: recycling,
							barThickness: 10,
						},
						{
							label: "General Waste",
							backgroundColor: "#585858",
							borderColor: "black",
							borderWidth: 1,
							data: general,
							barThickness: 10,
						},
						{
							label: "Organic",
							backgroundColor: "#36BA24",
							borderColor: "black",
							borderWidth: 1,
							data: organic,
							barThickness: 10,
						},
					],
				};
				console.log("Processed Chart Data: ", chartData.value.datasets);
			} catch (e) {
				console.error("Error fetching data:", e.response ? e.response.data : e);
			}
		}
	});

	const chartOptions = ref({
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: { display: true },
			title: { display: true, text: "Monthly Waste Data" },
		},
	});
</script>

<template>
	<div class="bar-container h-[400px]">
		<Bar
			:data="chartData"
			:options="chartOptions" />
	</div>
</template>

<style scoped>
	.bar-container {
		position: relative;
		width: 20em;
	}

	@media (min-width: 1024px) {
		.bar-container {
			width: 40em;
			margin: auto;
		}
	}
</style>
