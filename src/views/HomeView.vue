<script setup lang="ts">
import DownloadButtons from '@/features/DownloadButtons.vue'
import FeaturesList from '@/features/FeaturesList.vue'

const publicPath: string = import.meta.env.VITE_BASE_URL

let appMocks = [
  publicPath + `/img/app_mock_1.webp`,
  publicPath + `/img/app_mock_2.webp`,
  publicPath + `/img/app_mock_3.webp`,
  publicPath + `/img/app_mock_4.webp`
]
</script>

<template>
  <main>
    <div
      class="bg-[--main-background-color] h-screen w-screen flex items-center justify-center"
    ></div>
  </main>
</template>

<style scoped></style>
