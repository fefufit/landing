<script setup lang="ts">
import DownloadButtons from '@/features/DownloadButtons.vue'
import FeaturesList from '@/features/FeaturesList.vue'
import ImageList from '@/features/ImageList.vue'

const publicPath: string = import.meta.env.VITE_BASE_URL

let appMocks = [
  publicPath + `/img/app_mock_1.webp`,
  publicPath + `/img/app_mock_2.webp`,
  publicPath + `/img/app_mock_6.webp`,
  publicPath + `/img/app_mock_7.webp`,
]
</script>

<template>
  <main>
    <div class="bg-[--main-background-color] h-screen w-screen flex items-center justify-center">
      <FeaturesList class="features-list" />
      <DownloadButtons />
      <ImageList :app-mocks="appMocks.slice(0,2)" :padding-top="20" class="image-list-primary" />
      <ImageList :app-mocks="appMocks.slice(2, 4)" :padding-top="0" class="image-list-secondary"/>
    </div>
  </main>
</template>

<style scoped>

@media screen and (max-width: 1100px){
    .image-list-secondary{
      display: none !important;
    }
}

@media screen and (max-width: 700px){
  .image-list-primary{
    display: none !important;
  }
}

@media screen and (max-width: 500px){
  .features-list{
    display: none !important;
  }
}


</style>
