<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const featuresListRef = ref()

onMounted(() => {
  const intervalId = setInterval(() => {
    if (featuresListRef.value) {
      featuresListRef.value.scrollTop += 1
    }
  }, 10)

  onUnmounted(() => {
    clearInterval(intervalId)
  })
})
</script>

<template>
  <div class="features-list mx-10" ref="featuresListRef">
    <p class="base-font feature">{{ $t('feature.info') }}</p>

    <p class="base-font feature">{{ $t('feature.booking') }}</p>

    <p class="base-font feature">{{ $t('feature.purchase') }}</p>
  </div>
</template>

<style scoped>
.features-list {
  @apply h-full overflow-y-auto border-x border-[--main-white-color] px-6;
}

.features-list::-webkit-scrollbar {
  display: none;
}

.feature {
  @apply text-[--main-white-color] text-[24px] font-extralight transform rotate-180 py-5;
  writing-mode: vertical-lr;
}
</style>
