<script lang="ts" setup>
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'
import SecondaryButton from '@/components/buttons/SecondaryButton.vue'
import Logo from '@/components/icons/AppLogo.vue'

const directDownloadUrl: string = import.meta.env.VITE_DIRECT_DOWNLOAD_APP_URL
const downloadRuStoreUrl: string = import.meta.env.VITE_DOWNLOAD_APP_URL
const openWebUrl: string = import.meta.env.VITE_WEB_APP_URL

function directDownload() {
  window.open(directDownloadUrl, '_self')
}

function downloadIos() {
  window.open("https://apps.apple.com/app/fefufit/id6503181216", '_self')
}

function openWebApp() {
  window.open(openWebUrl, '_self')
}

function isIOS() {
  if(/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
     return true
   } else {
     return false
   }
}

</script>

<template>
  <div class="flex flex-col items-center justify-center mx-4">
    <div class="base-font title-text text-[51px]">{{ $t('title.first') }}</div>
    <div class="base-font title-text text-[37px]">{{ $t('title.second') }}</div>

    <Logo class="p-10 h-[30%]" />

    <PrimaryButton :title="$t('button.directDownload')" :onClick="directDownload"  v-if="!isIOS()"/>
    <div class="m-1" v-if="!isIOS()"></div>
    
    <PrimaryButton :title="$t('button.downloadForiPhone')" :onClick="downloadIos" v-if="isIOS()" />
    <div class="m-1" v-if="isIOS()"></div>
    <SecondaryButton :title="$t('button.useWeb')" :onClick="openWebApp" />
    <div class="m-1"></div>
    <a class="text-[--main-white-color]" :href="downloadRuStoreUrl">
      {{ $t('button.downloadRuStore') }}
    </a>
  </div>
</template>

<style scoped>
.title-text {
  @apply text-center text-[--main-white-color] font-light;
}
</style>
