<script setup lang="ts">
interface PrimaryButtonProps {
  title: string
  onClick: () => void
}

const props: PrimaryButtonProps = defineProps<PrimaryButtonProps>()
</script>

<template>
  <button class="shape-size base-color border base-font" @click="props.onClick">
    {{ props.title }}
  </button>
</template>

<style scoped>
.shape-size {
  @apply w-full px-4 py-2 rounded-md shadow-2xl;
}

.base-color {
  @apply bg-[--main-white-color] text-[--main-background-color];
}

.border {
  @apply border-2 border-[--main-white-color];
}

.animation {
  @apply transform transition-all duration-500 ease-in-out hover:scale-105;
}
</style>
