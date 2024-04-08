<script lang="ts" setup>
import ExtraOptionButton from '@/components/buttons/ExtraOptionButton.vue'
import SecondaryButton from '@/components/buttons/SecondaryButton.vue'
import Logo from '@/components/Logo.vue'
</script>

<template>
  <div class="flex flex-col items-center justify-center mx-4">
    <div class="base-font title-text text-[51px]">{{ $t('title.first') }}</div>
    <div class="base-font title-text text-[37px]">{{ $t('title.second') }}</div>

    <Logo class="p-10 h-[30%]" />

    <ExtraOptionButton
      :title="$t('button.downloadRuStore')"
      :options="[$t('button.directDownload')]"
    />
    <div class="m-6"></div>
    <SecondaryButton :title="$t('button.useWeb')" />
  </div>
</template>

<style scoped>
.title-text {
  @apply text-center text-[--main-white-color] font-light;
}
</style>
