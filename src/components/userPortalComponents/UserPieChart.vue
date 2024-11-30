<!-- PieChart.vue -->

<script setup>
	import { onMounted, ref } from "vue";
	import { Pie } from "vue-chartjs";
	import {
		Chart as ChartJS,
		Title,
		Tooltip,
		Legend,
		ArcElement,
	} from "chart.js";
	import axios from "axios";
	// Register necessary Chart.js components
	ChartJS.register(Title, Tooltip, Legend, ArcElement);

	const chartData = ref({
		labels: ["Recycling", "General Waste", "Organic Waste"],
		datasets: [
			{
				label: "Waste Distribution",
				backgroundColor: ["#0C2A77", "#585858", "#36BA24"],
				data: [0, 0, 0], // set initial data to 0
			},
		],
	});

	const chartOptions = ref({
		responsive: true,
		plugins: {
			legend: {
				display: true,
				position: "top",
			},
			title: {
				display: true,
				text: "Total Waste Distribution",
			},
		},
	});

	onMounted(async () => {
		const user_id = JSON.parse(sessionStorage.getItem("user_id"));
		if (user_id) {
			try {
				const response = await axios.get(
					`http://72.145.1.73:8080/CI4-EcoTrack/public/totalData/${user_id}`,
					{ headers: { "Content-Type": "application/json" } }
				);

				if (response.data.chartData) {
					const apiData = response.data.chartData;

					const recycling = apiData.recycling;
					const general = apiData.general;
					const organic = apiData.organic;
					// redefine chart Data values
					chartData.value = {
						labels: chartData.value.labels,
						datasets: [
							{
								label: chartData.value.datasets[0].label,
								backgroundColor: chartData.value.datasets[0].backgroundColor,
								data: [recycling, general, organic],
							},
						],
					};

					chartData.value.datasets[0].data = [recycling, general, organic];
				} else {
					console.error("Unexpected data format:", response.data);
				}

				// console.log("Api data: ",apiData);
				console.log("Processed Chart Data: ", chartData.value.datasets[0].data);
			} catch (e) {
				console.error("Error fetching data:", e.response ? e.response.data : e);
			}
		}
	});
</script>
<template>
	<div class="chart-container">
		<Pie
			:data="chartData"
			:options="chartOptions" />
	</div>
</template>

<style scoped>
	.chart-container {
		width: 20em;
		height: 20em;
		margin: auto;
	}
</style>
