<script setup lang="ts">
interface SecondaryButtonProps {
  title: string
  onClick: () => void
}

const props: SecondaryButtonProps = defineProps<SecondaryButtonProps>()
</script>

<template>
  <button class="shape-size base-color border animation base-font" @click="props.onClick">
    {{ props.title }}
  </button>
</template>

<style scoped>
.shape-size {
  @apply flex relative items-center justify-center overflow-hidden;
  @apply w-full px-4 py-2 rounded-md;
}

.base-color {
  @apply bg-[--main-background-color] text-[--main-white-color];
}

.border {
  @apply border-2 border-[--main-white-color];
}

.animation {
  @apply transition-all before:duration-500 hover:bg-[--main-white-color]  hover:text-[--main-background-color];
}
</style>
