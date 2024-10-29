<!-- PieChart.vue -->

<script setup>
import { ref } from 'vue';
import { Pie } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement);

const chartData = ref({
  labels: ['Recycling', 'General Waste', 'Organic Waste'],
  datasets: [
    {
      label: 'Waste Distribution',
      backgroundColor: ['#0C2A77', '#585858', '#36BA24'],
      data: [300, 150, 100], // data for each category
    },
  ],
});

const chartOptions = ref({
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top',
    },
    title: {
      display: true,
      text: 'Waste Distribution by Category',
    },
  },
});
</script>
<template>
  <div class="chart-container">
    <Pie :data="chartData" :options="chartOptions" />
  </div>
</template>

<style scoped>
.chart-container {
  width: 20em;
  height: 20em;
  margin: auto;
}
</style>
