<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import HoverButton from '@/components/buttons/HoverButton.vue'

interface ExtraOptionButtonProps {
  title: string
  options: string[]
}

const props: ExtraOptionButtonProps = defineProps<ExtraOptionButtonProps>()
</script>

<template>
  <Menu as="div" class="relative inline-block text-left w-full">
    <div>
      <button type="button" class="row shape-size base-color border animation base-font">
        <div class="px-4 py-2 w-full text-center hover:bg-gray-200">
          {{ props.title }}
        </div>
        <MenuButton class="flex items-center px-2 justify-center hover:bg-gray-200">
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
        </MenuButton>
      </button>
    </div>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems class="absolute right-0 z-10 w-full origin-top-cente rounded-md">
        <div class="pr-10 pt-1" v-for="option in props.options" :key="option">
          <MenuItem>
            <HoverButton :title="option" class="block" />
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
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
