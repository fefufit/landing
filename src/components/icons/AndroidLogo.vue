<script setup lang="ts">
const publicPath: string = import.meta.env.VITE_BASE_URL

let logoPath = publicPath + '/android.svg'
</script>

<template>
  <img :src="logoPath" class="w-24 h-24s" />
</template>
