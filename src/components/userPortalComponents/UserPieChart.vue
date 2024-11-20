<!-- PieChart.vue -->

<script setup>
import {onMounted, ref} from 'vue';
import { Pie } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import axios from "axios";

// Register necessary Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement);


onMounted(async() => {
  const user_id = JSON.parse(sessionStorage.getItem('user_id'));

  if(user_id){
    try {
      const response = await axios.get(`http://localhost/CI4-EcoTrack/public/totalData/${user_id}`,
          { headers: { "Content-Type": "application/json" } }
      );
      const apiData = response.data.chartData;
      console.log('Api data:', response.data.chartData)

      chartData.value.datasets[0].data = [
        apiData.recycling,
        apiData.general,
        apiData.organic
      ];

      console.log('recycling: ', apiData.recycling);

    } catch (e) {
      console.error("Error fetching data:", e.response ? e.response.data : e);
    }
  }
})

const chartData = ref({
  labels: ['Recycling', 'General Waste', 'Organic Waste'],
  datasets: [
    {
      label: 'Waste Distribution',
      backgroundColor: ['#0C2A77', '#585858', '#36BA24'],
      data: [12,4,4], // set initial data to 0
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
      text: 'Total Waste Distribution',
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
