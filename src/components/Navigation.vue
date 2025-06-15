<script setup lang="ts">
defineProps<{
  sections: Array<{
    id: string;
    title: string;
    icon: string;
  }>;
  currentSection: number;
  isAnimating: boolean;
}>();

const emit = defineEmits<{
  (e: 'change', index: number): void;
}>();
</script>

<template>
  <nav class="nav-icons">
    <button v-for="(section, index) in sections" :key="section.id" class="nav-icon"
      :class="{ 'active': currentSection === index }" @click="emit('change', index)" :disabled="isAnimating"
      :aria-label="section.title">
      <span class="material-icons">{{ section.icon }}</span>
    </button>
  </nav>
</template>

<style scoped>
.nav-icons {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 20px;
  z-index: 3;
}

.nav-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-icon:hover:not(:disabled) {
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.nav-icon.active {
  background-color: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.2);
  color: #fff;
  transform: translateY(-2px);
}

.nav-icon:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.nav-icon .material-icons {
  font-size: 24px;
}

/* タブレット */
@media (max-width: 1024px) {
  .nav-icons {
    gap: 15px;
  }

  .nav-icon {
    width: 45px;
    height: 45px;
  }

  .nav-icon .material-icons {
    font-size: 22px;
  }
}

/* モバイル */
@media (max-width: 768px) {
  .nav-icons {
    gap: 12px;
  }

  .nav-icon {
    width: 40px;
    height: 40px;
  }

  .nav-icon .material-icons {
    font-size: 20px;
  }
}

/* 小さいモバイル */
@media (max-width: 480px) {
  .nav-icons {
    gap: 10px;
  }

  .nav-icon {
    width: 35px;
    height: 35px;
  }

  .nav-icon .material-icons {
    font-size: 18px;
  }
}
</style>