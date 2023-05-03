<script setup>
import { useTestStore } from '@/stores/useTestStore.js'

const testStore = useTestStore()
</script>

<template>
  <div v-for="(item, index) in testStore.test" :key="index" >
      <the-button/>
      home
      {{ item.name }}
  </div>
</template>
