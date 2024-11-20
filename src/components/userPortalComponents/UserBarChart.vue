<script setup>
import { ref, onMounted } from 'vue';
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import axios from "axios";
// Register necessary Chart.js components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);


const user_id = JSON.parse(sessionStorage.getItem('user_id'));
onMounted( async ()=> {
if(user_id){
      try {
        const response = await axios.get(`http://localhost/CI4-EcoTrack/public/monthlyData/${user_id}`,
            { headers: { "Content-Type": "application/json" } }
        );

        // TODO: Populate Bar Charts with response data


      }catch (e){
        console.error("Error fetching data:", e.response ? e.response.data : e);
      }
    }
})

const chartData = ref({
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
  datasets: [
    {
      label: 'Recycling',
      backgroundColor: '#0C2A77',
      borderColor: 'black',
      borderWidth: 1,
      data: [65, 59, 80, 81],
      barThickness: 10
    },
    {
      label: 'General Waste',
      backgroundColor: '#585858',
      borderColor: 'black',
      borderWidth: 1,
      data: [20, 35, 10, 40],
      barThickness: 10
    },
    {
      label: 'Organic',
      backgroundColor: '#36BA24',
      borderColor: 'black',
      borderWidth: 1,
      data: [40, 59, 30, 55],
      barThickness: 10
    },
  ],
});

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: true },
    title: { display: true, text: 'Monthly Waste Data' },
  },
});
</script>

<template>
  <div class="bar-container h-[400px]">
    <Bar :data="chartData" :options="chartOptions" />
  </div>

</template>

<style scoped>
.bar-container{
  position: relative;
  width: 20em;
}

@media (min-width: 1024px){
  .bar-container{
    width: 40em;
    margin: auto;
  }
}

</style>
