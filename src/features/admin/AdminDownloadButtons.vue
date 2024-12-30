<script lang="ts" setup>
import PrimaryButton from './PrimaryButton.vue'
import SecondaryButton from './SecondaryButton.vue'
import Logo from '@/components/icons/AppLogo.vue'

const downloadForAndroidUrl: string = import.meta.env.VITE_DIRECT_DOWNLOAD_APP_ADMIN_URL
const downloadRuStoreUrl: string = import.meta.env.VITE_DOWNLOAD_APP_URL
const openWebUrl: string = import.meta.env.VITE_WEB_APP_URL

function downloadForAndroid() {
  window.open(downloadForAndroidUrl, '_self')
}

function openWebApp() {
  window.open('https://fefufit.ru/admin/app', '_self')
}
</script>

<template>
  <div class="flex flex-col items-center justify-center mx-4">
    <div class="base-font title-text text-[51px]">{{ $t('title.first') }}</div>
    <div class="base-font title-text text-[37px]">{{ $t('title.second') }}</div>

    <Logo class="p-10 h-[30%]" />

    <PrimaryButton :title="$t('button.downloadForAndroid')" :onClick="downloadForAndroid" />
    <div class="m-1"></div>
    <SecondaryButton :title="$t('button.useWeb')" :onClick="openWebApp" />
  </div>
</template>

<style scoped>
.title-text {
  @apply text-center text-[--main-white-color] font-light;
}
</style>
