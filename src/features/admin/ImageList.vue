<script setup lang="ts">
import ImageViewer from '@/components/ImageViewer.vue'
import { onMounted, onUnmounted, reactive, ref } from 'vue'

interface ImageListProps {
  appMocks: string[]
  paddingTop: number
  scrollSpeed: number
}

const props: ImageListProps = defineProps<ImageListProps>()

const imageListRef = ref()

const images = reactive(props.appMocks.map((appMock) => ({ src: appMock })))

onMounted(() => {
  const intervalId = setInterval(() => {
    if (imageListRef.value) {
      imageListRef.value.scrollTop += 1
    }

    // TODO: remove this -150 shit
    if (
      imageListRef.value.scrollTop + imageListRef.value.clientHeight >=
      imageListRef.value.scrollHeight - 150
    ) {
      images.push(images[images.length - 2])
    }
  }, props.scrollSpeed)

  onUnmounted(() => {
    clearInterval(intervalId)
  })
})
</script>

<template>
  <div class="image-list" ref="imageListRef">
    <div :style="'padding-top: ' + props.paddingTop + 'px;'"></div>
    <ImageViewer v-for="image in images" :src="image.src" :key="image.src" class="my-4" />
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
