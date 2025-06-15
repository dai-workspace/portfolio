<template>
  <div class="section-container">
    <q-card class="section-card" :class="{ 'active': isActive }">
      <q-card-section>
        <div class="text-h4 text-center q-mb-md" :style="{ fontFamily: fonts.title }">
          {{ section.title }}
        </div>
      </q-card-section>

      <q-card-section v-if="isSkillsSection">
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-4" v-for="(chart, index) in skillCharts" :key="index">
            <q-card class="skill-card">
              <q-card-section>
                <div class="text-h6 text-center q-mb-md">{{ chart.title }}</div>
                <RadarChart :title="chart.title" :data="chart.data" />
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-card-section>

      <q-card-section v-else>
        <div class="text-body1" :style="{ fontFamily: fonts.body }" v-html="section.content"></div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import RadarChart from './RadarChart.vue';

const props = defineProps<{
  section: {
    id: string;
    title: string;
    content: string;
    theme: {
      primary: string;
      secondary: string;
      accent: string;
    };
  };
  isActive: boolean;
  fonts: {
    title: string;
    body: string;
  };
}>();

const isSkillsSection = computed(() => props.section.id === 'skills');

const skillCharts = [
  {
    title: 'プログラミング言語',
    data: {
      labels: ['Java', 'JavaScript', 'TypeScript', 'SQL', 'Python'],
      values: [90, 85, 80, 75, 70]
    }
  },
  {
    title: 'フレームワーク',
    data: {
      labels: ['Spring Boot', 'Vue.js', 'jQuery', 'React', 'Angular'],
      values: [85, 80, 90, 75, 70]
    }
  },
  {
    title: 'インフラ/ツール',
    data: {
      labels: ['Git', 'Docker', 'AWS', 'Jenkins', 'Kubernetes'],
      values: [85, 70, 65, 75, 60]
    }
  }
];
</script>

<style lang="scss">
.section-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.section-card {
  width: 100%;
  max-width: 1200px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &.active {
    transform: translateY(0);
    opacity: 1;
  }
}

.skill-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  height: 100%;
}
</style> 