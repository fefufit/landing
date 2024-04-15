<script lang="ts" setup>
interface ImageViewerProps {
  src: string
}

const props: ImageViewerProps = defineProps<ImageViewerProps>()
</script>

<template>
  <img :src="props.src" class="object-contain rounded-3xl" />
</template>
