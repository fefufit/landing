<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref } from 'vue'

const featuresListRef = ref()

const features = reactive([
  { text: 'feature.info' },
  { text: 'feature.booking' },
  { text: 'feature.purchase' }
])

onMounted(() => {
  const intervalId = setInterval(() => {
    if (featuresListRef.value) {
      featuresListRef.value.scrollTop += 1
    }

    // TODO: remove this -150 shit
    if (
      featuresListRef.value.scrollTop + featuresListRef.value.clientHeight >=
      featuresListRef.value.scrollHeight - 150
    ) {
      features.push(features[features.length - 3])
    }
  }, 10)

  onUnmounted(() => {
    clearInterval(intervalId)
  })
})
</script>

<template>
  <div class="features-list mx-10" ref="featuresListRef">
    <p v-for="(feature, index) in features" :key="index" class="base-font feature">
      {{ $t(feature.text) }}
    </p>
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
