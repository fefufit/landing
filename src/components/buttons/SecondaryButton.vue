<script setup lang="ts">
interface SecondaryButtonProps {
  title: string
}

const props: SecondaryButtonProps = defineProps<SecondaryButtonProps>()
</script>

<template>
  <button class="shape-size base-color border animation base-font">
    <span class="relative z-10"> {{ props.title }}</span>
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
  @apply transition-all before:absolute before:h-0 before:w-0 before:rounded-full;
  @apply before:bg-[--main-white-color] before:duration-500 before:ease-out hover:before:h-screen;
  @apply hover:before:w-screen hover:text-[--main-background-color] hover:shadow-2xl;
}
</style>
