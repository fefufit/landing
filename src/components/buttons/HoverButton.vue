<script setup lang="ts">
interface HoverButtonProps {
  title: string
}

const props: HoverButtonProps = defineProps<HoverButtonProps>()
</script>

<template>
  <div class="w-full">
    <button type="button" class="row shape-size base-color border base-font">
      <div class="px-4 py-2 w-full text-center hover:bg-gray-200">
        {{ props.title }}
      </div>
    </button>
  </div>
</template>

<style scoped>
.row {
  @apply flex items-stretch justify-between flex-row;
}

.shape-size {
  @apply w-full  rounded-md shadow-2xl;
}

.base-color {
  @apply bg-[--main-white-color] text-[--main-background-color];
}

.border {
  @apply border-2 border-[--main-white-color];
}
</style>
