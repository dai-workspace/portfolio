<script setup lang="ts">
import { ref, computed } from 'vue';
import Navigation from './components/Navigation.vue';
import Section from './components/Section.vue';
import RadarChart from './components/RadarChart.vue';

// 状態管理
const currentSection = ref(0);
const isAnimating = ref(false);

// 定数
const ANIMATION_DURATION = 500;
const BACKGROUND_ANGLE_RANGE = 90;
const BACKGROUND_OPACITY_RANGE = 0.1;

// フォント設定
const fonts = {
  title: 'WDXL Lubrifont JP N',
  body: 'WDXL Lubrifont JP N'
};

// セクション定義
const sections = [
  {
    id: 'aboutMe',
    title: 'About Me',
    content: `
      <div class="about-content">
        <div class="profile-info">
          <h3>名前</h3>
          <p>あなたの名前</p>
          <br>
          <h3>自己紹介</h3>
          <p>未経験の技術に対しても積極的に調査・適応しながら取り組む姿勢を評価され、技術共有や実装指導なども担ってまいりました。これまで電力会社様や交通系企業様向けの業務用Webアプリケーション開発に携わり、JavaEE（JSP・Servlet）を中心としたバックエンド、jQuery等を用いたフロントエンドの動的な実装も経験しております。また、開発リーダーとして進捗・課題管理や技術指導を行い、認識齟齬を防ぐための積極的なコミュニケーションを重視したマネジメントにも取り組んできました。</p>
        </div>
      </div>
    `,
    icon: 'person',
    theme: {
      primary: '#1a1a2e',
      secondary: '#16213e',
      accent: '#0f3460'
    }
  },
  {
    id: 'skills',
    title: 'Skills',
    content: '',
    icon: 'psychology',
    theme: {
      primary: '#1b262c',
      secondary: '#0f4c75',
      accent: '#3282b8'
    }
  },
  {
    id: 'projects',
    title: 'Projects',
    content: 'Coming Soon...',
    icon: 'rocket_launch',
    theme: {
      primary: '#1c1c1c',
      secondary: '#2c3e50',
      accent: '#34495e'
    }
  },
  {
    id: 'github',
    title: 'GitHub',
    content: 'Coming Soon...',
    icon: 'code',
    theme: {
      primary: '#1a1a1a',
      secondary: '#2d3436',
      accent: '#636e72'
    }
  }
];

// セクション切り替え
const changeSection = (targetIndex: number) => {
  if (isAnimating.value) return;
  
  isAnimating.value = true;
  currentSection.value = targetIndex;
  
  setTimeout(() => {
    isAnimating.value = false;
  }, ANIMATION_DURATION);
};

// 背景スタイルの計算
const backgroundStyle = computed(() => {
  const currentTheme = sections[currentSection.value].theme;
  const progress = currentSection.value / (sections.length - 1);
  
  return {
    background: `
      linear-gradient(
        135deg,
        ${currentTheme.primary} 0%,
        ${currentTheme.secondary} 50%,
        ${currentTheme.accent} 100%
      )
    `,
    backgroundSize: '200% 200%',
    backgroundPosition: `${progress * 100}% ${progress * 100}%`,
    transition: `all ${ANIMATION_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)`
  };
});
</script>

<template>
  <div class="sections-container">
    <!-- 背景 -->
    <div class="background" :style="backgroundStyle" />

    <!-- ナビゲーション -->
    <Navigation
      :sections="sections"
      :current-section="currentSection"
      :is-animating="isAnimating"
      @change="changeSection"
    />

    <!-- セクション -->
    <main>
      <Section
        v-for="(section, index) in sections"
        :key="section.id"
        :section="section"
        :is-active="currentSection === index"
        :fonts="fonts"
      />
    </main>
  </div>
</template>