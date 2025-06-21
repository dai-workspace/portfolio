<script setup lang="ts">
import { ref, computed } from 'vue';
import Navigation from './components/Navigation.vue';
import Section from './components/Section.vue';
import GithubSection from './components/GithubSection.vue';

// セクションの型定義
interface SectionTheme {
  primary: string;
  secondary: string;
  accent: string;
}

interface Section {
  id: string;
  title: string;
  content?: string;
  component?: string;
  icon: string;
  theme: SectionTheme;
}

// 状態管理
const currentSection = ref(0);
const isAnimating = ref(false);

// 定数
const ANIMATION_DURATION = 500;

// セクション定義
const sections: Section[] = [
  {
    id: 'aboutMe',
    title: 'About Me',
    content: `
      <div class="about-content">
        <div class="profile-info">
          <p>
            未経験の技術への積極性と適応力
            <br>
            経験のない技術を用いた業務に携わらせていただいた際、自身で調査を行いながら作業をすることができ、各技術の特性を理解しつつ進める姿勢があります。
            積極性や適応力を評価していただき、プロジェクトメンバーへの技術共有や、実装指導を行う役割も担っておりました。
            <br><br>
            開発リーダーの経験
            <br>
            開発リーダーとしてプロジェクトに携わり、技術指導や進捗管理、課題管理を行った経験があります。
            マネジメントする上で、メンバー内で認識の齟齬をできるだけ減らせるよう、コミュニケーションを活発にとることを心掛けつつ業務に携わることができます。
            <br><br>
            自己研鑽として個人開発
            <br>
            新しい技術のインプットを目的とし、日々個人開発を行い技術理解に努めています。気になる技術や面白そうな技術があれば積極的に触れることを心掛けております。
          </p>
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
    content: '',
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

// 現在のセクションコンポーネントを取得
const currentSectionComponent = computed(() => {
  const section = sections[currentSection.value];
  if (section.component === 'github-section') {
    return GithubSection;
  }
  return Section;
});

// 現在のセクションデータを取得
const currentSectionData = computed(() => sections[currentSection.value]);

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
    <Navigation :sections="sections" :current-section="currentSection" :is-animating="isAnimating"
      @change="changeSection" />

    <!-- セクション -->
    <main>
      <Section v-for="(section, index) in sections" :key="section.id" :section="section"
        :is-active="currentSection === index" />
    </main>
  </div>
</template>