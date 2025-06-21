<script setup lang="ts">
import { computed } from 'vue';
import RadarChart from './RadarChart.vue';

const props = defineProps<{
  section: {
    id: string;
    title: string;
    content?: string;
    component?: string;
    theme: {
      primary: string;
      secondary: string;
      accent: string;
    };
  };
  isActive: boolean;
}>();

const isSkillsSection = computed(() => props.section.id === 'skills');
const isAboutMeSection = computed(() => props.section.id === 'aboutMe');
const isGithubSection = computed(() => props.section.id === 'github');
</script>

<template>
  <section class="section" :class="{
    'active': isActive,
    'about-me-section': isAboutMeSection
  }">
    <h2>{{ section.title }}</h2>
    <div v-if="isSkillsSection" class="skills-content">
      <RadarChart title="プログラミング言語" :data="{
        labels: ['Java', 'JavaScript', 'TypeScript', 'SQL', 'Python'],
        values: [75, 90, 80, 80, 85]
      }" />
      <RadarChart title="フレームワーク" :data="{
        labels: ['Spring Boot', 'Vue.js', 'jQuery', 'React', 'Flask'],
        values: [70, 60, 90, 85, 90]
      }" />
      <RadarChart title="インフラ/ツール" :data="{
        labels: ['Git', 'Docker', 'Azure', 'Jenkins', 'Kubernetes'],
        values: [85, 80, 75, 75, 80]
      }" />
    </div>
    <q-card-section v-else-if="isGithubSection">
      <div class="github-content flex justify-center items-center min-h-[200px] w-full">
        <a href="https://github.com/dai-workspace" target="_blank" rel="noopener noreferrer" class="github-button">
          <span class="material-icons">code</span>
          <span>GitHub Profile</span>
        </a>
      </div>
    </q-card-section>
    <div v-else v-html="section.content" class="content"></div>
  </section>
</template>

<style scoped>
.section {
  height: 100vh;
  width: 100%;
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  pointer-events: none;
  z-index: 2;
  padding: 2rem;
}

.section.active {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.about-me-section {
  background-color: rgba(255, 255, 255, 0.03);
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #fff;
  font-weight: 300;
  letter-spacing: 0.05em;
  line-height: 1.4;
  text-align: center;
}

.content {
  color: #fff;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  font-size: 1.2rem;
}

/* Skills セクションのスタイル */
.skills-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 2rem;
  width: 100%;
  max-width: 1400px;
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

/* タブレット */
@media (max-width: 1024px) {
  .section {
    padding: 1.75rem;
  }

  h2 {
    font-size: 2.25rem;
  }

  .skills-content {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    max-width: 900px;
    padding: 1.5rem;
    max-height: calc(100vh - 280px);
  }
}

/* モバイル */
@media (max-width: 768px) {
  .section {
    padding: 1.5rem;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1.25rem;
  }

  .skills-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1rem;
    max-width: 400px;
    max-height: calc(100vh - 250px);
  }
}

/* 小さいモバイル */
@media (max-width: 480px) {
  .section {
    padding: 1.25rem;
  }

  h2 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }

  .skills-content {
    padding: 0.75rem;
    max-width: 300px;
    max-height: calc(100vh - 220px);
  }
}

.github-content {
  padding: 2rem;
}

.github-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(45deg, #24292e, #2f363d);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.github-button:hover {
  transform: translateY(-2px);
  background: linear-gradient(45deg, #2f363d, #24292e);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.github-button .material-icons {
  font-size: 1.2rem;
}
</style>