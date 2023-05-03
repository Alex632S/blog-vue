<script setup>
import { useTestStore } from '@/stores/useTestStore.js'
import LayoutMain from "@/components/layouts/LayoutMain.vue";

const testStore = useTestStore()
</script>

<template>
  <layout-main />
  <div v-for="(item, index) in testStore.test" :key="index" >
      <the-button/>
      home
      {{ item.name }}
  </div>
</template>
