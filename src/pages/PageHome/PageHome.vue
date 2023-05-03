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

<style lang="scss">
  .v-application {
    width: 100vw;
    height: 100vh;
    background-color: $background-dd;
  }
</style>