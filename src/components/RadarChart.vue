<script setup lang="ts">
import { Radar } from 'vue-chartjs';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const props = defineProps<{
  title: string;
  data: {
    labels: string[];
    values: number[];
  };
}>();

const chartData = {
  labels: props.data.labels,
  datasets: [
    {
      label: props.title,
      data: props.data.values,
      backgroundColor: 'rgba(50, 130, 184, 0.2)',
      borderColor: 'rgba(50, 130, 184, 1)',
      borderWidth: 2,
      pointBackgroundColor: 'rgba(50, 130, 184, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(50, 130, 184, 1)'
    }
  ]
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    r: {
      min: 0,
      max: 100,
      ticks: {
        display: false
      },
      angleLines: {
        color: 'rgba(255, 255, 255, 0.1)'
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.1)'
      },
      pointLabels: {
        color: 'rgba(255, 255, 255, 0.95)',
        font: {
          size: 13,
        },
      }
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
};
</script>

<template>
  <div class="radar-chart-container">
    <h3>{{ title }}</h3>
    <div class="chart-wrapper">
      <Radar :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>

<style scoped>
.radar-chart-container {
  width: 20vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  background-color: rgba(18, 18, 18, 0.5);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.radar-chart-container:hover {
  background-color: rgba(18, 18, 18, 0.7);
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

h3 {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1.5rem;
  font-weight: 500;
  text-align: center;
}

.chart-wrapper {
  width: 100%;
  position: relative;
  margin: 0 auto;
}

@media (max-width: 768px) {
  h3 {
    font-size: 1.3rem;
  }

  .radar-chart-container {
    width: 73vw;
    height: 55vh;
  }
}
</style>