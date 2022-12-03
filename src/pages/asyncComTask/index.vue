<template>
  <div>
    <cards></cards>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

const cards = defineAsyncComponent(() => import('../cards/index.vue'))
</script>

<style></style>
