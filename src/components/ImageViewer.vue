<script lang="ts" setup>
interface ImageViewerProps {
  src: string
}

const props: ImageViewerProps = defineProps<ImageViewerProps>()
</script>

<template>
  <div class="h-full">
    <img
      :src="props.src"
      class="h-full object-cover transition-all duration-500 hover:scale-110 rounded-md"
    />
  </div>
</template>
@click="openImage"
