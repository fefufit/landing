<script setup lang="ts">
const publicPath: string = import.meta.env.VITE_BASE_URL

let logoPath = publicPath + '/logo.svg'
</script>

<template>
  <img alt="" :src="logoPath" class="aspect-square" />
</template>
