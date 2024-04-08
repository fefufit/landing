<script setup lang="ts">
import ImageViewer from '@/components/ImageViewer.vue'

interface ImageListProps {
  appMocks: string[] , 
  paddingTop: number 
}

const props: ImageListProps = defineProps<ImageListProps>()
</script>

<template>
  <div class="image-list">
    <div :style="'padding-top: ' + props.paddingTop + 'px;'"></div>
    <ImageViewer v-for="appMock in props.appMocks" :src="appMock" class="py-5 h-4/5" />
  </div>
</template>

<style scoped>
.image-list {
  @apply h-full overflow-y-auto px-6;
}

.image-list::-webkit-scrollbar {
  display: none;
}
</style>
