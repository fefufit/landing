<script setup lang="ts">
interface ExtraOptionButtonProps {
  title: string
  options: string[]
}

const props: ExtraOptionButtonProps = defineProps<ExtraOptionButtonProps>()
</script>

<template>
  <button class="row shape-size base-color border animation base-font">
    <div class="w-6 h-6"></div>
    <div class="px-4 py-2">
      {{ props.title }}
    </div>
      <div class="flex items-center justify-center hover:bg-gray-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    
  </button>
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
