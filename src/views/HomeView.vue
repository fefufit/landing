<script setup lang="ts">
import PrimaryButton from '@/components/PrimaryButton.vue'
import SecondaryButton from '@/components/SecondaryButton.vue'
import ExtraOptionButton from '@/components/ExtraOptionButton.vue'
</script>

<template>
  <main>
    <div
      class="bg-[--main-background-color] h-screen w-screen flex items-center justify-center p-10"
    >
      <SecondaryButton title="Hello World"></SecondaryButton>
      <div class="w-10"></div>
      <PrimaryButton title="Hello World" />
      <div class="w-10"></div>
      <ExtraOptionButton title="Hello World" :options="[]" />
    </div>
  </main>
</template>

<style scoped></style>
