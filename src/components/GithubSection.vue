<template>
  <div class="github-content flex justify-center items-center min-h-[200px] w-full">
    <div class="github-info max-w-md text-center">
      <q-btn
        href="https://github.com/dai-workspace"
        target="_blank"
        rel="noopener noreferrer"
        color="dark"
        class="q-px-lg q-py-sm"
        unelevated
        rounded
        icon="code"
        label="GitHub Profile"
        :style="{
          background: 'linear-gradient(45deg, #24292e, #2f363d)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.3s ease'
        }"
        @mouseover="$event.target.style.transform = 'translateY(-2px)'"
        @mouseleave="$event.target.style.transform = 'translateY(0)'"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  section: {
    id: string;
    title: string;
    theme: {
      primary: string;
      secondary: string;
      accent: string;
    };
  };
}>();
</script>

<style scoped>
.github-content {
  padding: 2rem;
}

.github-info {
  background-color: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style> 