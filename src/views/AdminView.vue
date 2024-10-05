<script setup lang="ts">
import AdminDownloadButtons from '@/features/admin/AdminDownloadButtons.vue'
import AdminFeaturesList from '@/features/admin/AdminFeaturesList.vue'
import ImageList from '@/features/ImageList.vue'

const publicPath: string = import.meta.env.VITE_BASE_URL

let appMocks = [
  publicPath + `/img/app_mock_1.webp`,
  publicPath + `/img/app_mock_2.webp`,
  publicPath + `/img/app_mock_6.webp`,
  publicPath + `/img/app_mock_7.webp`
]
</script>

<template>
  <main>
    <div
      class="bg-[--main-admin-color] w-screen flex items-center justify-evenly"
      style="height: 100dvh"
    >
      <AdminFeaturesList class="features-list" />
      <AdminDownloadButtons />
      <div class="flex flex-row" style="height: 100dvh">
        <ImageList
          :app-mocks="appMocks.slice(0, 2)"
          :padding-top="50"
          :scroll-speed="5"
          class="image-list-primary"
          style="width: 300px"
        />
        <ImageList
          :app-mocks="appMocks.slice(2, 4)"
          :padding-top="0"
          :scroll-speed="8"
          class="image-list-secondary"
          style="width: 300px"
        />
      </div>
    </div>
  </main>
</template>

<style scoped>
@media screen and (max-width: 1100px) {
  .image-list-secondary {
    display: none !important;
  }
}

@media screen and (max-width: 700px) {
  .image-list-primary {
    display: none !important;
  }
}

@media screen and (max-width: 500px) {
  .features-list {
    display: none !important;
  }
}
</style>
