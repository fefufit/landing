<script setup lang="ts">
import AndroidLogo from '../icons/AndroidLogo.vue'

interface PrimaryButtonProps {
  title: string
  onClick: () => void
  extraTitle: string
  extraOnClick: () => void
}

const props: PrimaryButtonProps = defineProps<PrimaryButtonProps>()
</script>

<template>
  <div class="flex flex-row w-full">
    <button class="shape-size base-color border base-font flex-grow-4" @click="props.onClick">
      {{ props.title }}
    </button>
    <div class="m-2"></div>
    <button class="flex-grow-1 base-color base-font shape-size" @click="props.extraOnClick">{{ props.extraTitle }}</button>
  </div>
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

.flex-grow-4 {
  flex: 4;
}

.flex-grow-1 {
  flex: 1;
}
</style>
