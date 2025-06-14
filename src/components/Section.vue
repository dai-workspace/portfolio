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

const sectionStyle = computed(() => ({
  fontFamily: props.fonts.body
}));

const isSkillsSection = computed(() => props.section.id === 'skills');
</script>

<template>
  <section 
    class="section"
    :class="{ 'active': isActive }"
  >
    <div class="section-content">
      <h2 :style="{ fontFamily: fonts.title }">{{ section.title }}</h2>
      <div :style="{ fontFamily: fonts.body }" v-if="isSkillsSection" class="skills-content">
        <RadarChart
          title="プログラミング言語"
          :data="{
            labels: ['Java', 'JavaScript', 'TypeScript', 'SQL', 'Python'],
            values: [90, 85, 80, 75, 70]
          }"
        />
        <RadarChart
          title="フレームワーク"
          :data="{
            labels: ['Spring Boot', 'Vue.js', 'jQuery', 'React', 'Angular'],
            values: [85, 80, 90, 75, 70]
          }"
        />
        <RadarChart
          title="インフラ/ツール"
          :data="{
            labels: ['Git', 'Docker', 'AWS', 'Jenkins', 'Kubernetes'],
            values: [85, 70, 65, 75, 60]
          }"
        />
      </div>
      <div v-else v-html="section.content" :style="sectionStyle"></div>
    </div>
  </section>
</template>

<style scoped>
.section {
  height: 100vh;
  width: 100%;
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  pointer-events: none;
  z-index: 2;
}

.section.active {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.section-content {
  max-width: 800px;
  width: 90%;
  padding: 2rem;
  text-align: center;
  background-color: rgba(18, 18, 18, 0.85);
  border-radius: 12px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  margin: 0 auto;
  margin-top: 80px;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.section-content:hover {
  background-color: rgba(18, 18, 18, 0.9);
  transform: translateY(-2px);
  box-shadow: 0 6px 40px rgba(0, 0, 0, 0.4);
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #fff;
  font-weight: 300;
  letter-spacing: 0.05em;
  line-height: 1.4;
}

div {
  color: #fff;
}

/* Skills セクションのスタイル */
.skills-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  overflow-y: auto;
  max-height: calc(100vh - 300px);
}

.skills-content::-webkit-scrollbar {
  width: 8px;
}

.skills-content::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

.skills-content::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
}

.skills-content::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.3);
}

@media (max-width: 768px) {
  .section-content {
    margin-top: 100px;
    padding: 1.5rem;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  .skills-content {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0.5rem;
    max-height: calc(100vh - 250px);
  }
}
</style> 