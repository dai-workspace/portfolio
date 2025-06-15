<template>
  <div class="card">
    <h3 class="text-xl font-light mb-4 text-center">{{ title }}</h3>
    <div class="chart-container">
      <Radar :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
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

const chartData = computed(() => ({
  labels: props.data.labels,
  datasets: [
    {
      label: 'スキルレベル',
      data: props.data.values,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderColor: 'rgba(255, 255, 255, 0.5)',
      borderWidth: 2,
      pointBackgroundColor: 'rgba(255, 255, 255, 0.8)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255, 255, 255, 0.8)'
    }
  ]
}));

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    r: {
      angleLines: {
        color: 'rgba(255, 255, 255, 0.2)'
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.1)'
      },
      pointLabels: {
        color: 'rgba(255, 255, 255, 0.8)'
      },
      ticks: {
        color: 'rgba(255, 255, 255, 0.5)',
        backdropColor: 'transparent'
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

<style lang="scss">
.chart-container {
  height: 300px;
  width: 100%;
}
</style> 