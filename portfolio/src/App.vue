<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-dark">
      <q-toolbar>
        <q-toolbar-title>
          Portfolio
        </q-toolbar-title>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-dark"
    >
      <q-list>
        <q-item-label header>Navigation</q-item-label>
        <q-item
          v-for="section in sections"
          :key="section.id"
          clickable
          v-ripple
          :active="currentSection === section.id"
          @click="currentSection = section.id"
        >
          <q-item-section avatar>
            <q-icon :name="section.icon" />
          </q-item-section>
          <q-item-section>
            {{ section.title }}
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <q-page class="q-pa-md">
        <transition
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
        >
          <component
            :is="currentSectionComponent"
            :section="currentSectionData"
            :is-active="true"
            :fonts="fonts"
          />
        </transition>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import Section from './components/Section.vue';

const leftDrawerOpen = ref(false);
const currentSection = ref('aboutMe');

const sections = [
  { id: 'aboutMe', title: 'About Me', icon: 'person' },
  { id: 'skills', title: 'Skills', icon: 'code' },
  { id: 'projects', title: 'Projects', icon: 'work' },
  { id: 'contact', title: 'Contact', icon: 'mail' }
];

const fonts = {
  title: 'Noto Sans JP',
  body: 'Noto Sans JP'
};

const currentSectionData = computed(() => ({
  id: currentSection.value,
  title: sections.find(s => s.id === currentSection.value)?.title || '',
  content: 'コンテンツがここに入ります',
  theme: {
    primary: '#1976D2',
    secondary: '#26A69A',
    accent: '#9C27B0'
  }
}));

const currentSectionComponent = computed(() => Section);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<style lang="scss">
body {
  background-color: $dark;
  color: white;
}

.q-page {
  min-height: 100vh;
}
</style> 