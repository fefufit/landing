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

function downloadRuStore() {
  window.open(downloadRuStoreUrl, '_self')
}

function downloadIos() {
  window.open('https://apps.apple.com/app/fefufit/id6503181216', '_self')
}

function openWebApp() {
  window.open(openWebUrl, '_self')
}

function isIOS() {
  if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    return true
  } else {
    return false
  }
}
</script>

<template>
  <div class="bg-[--main-background-color] scroll">
    <div class="p-4 flex flex-col items-center justify-center">
      <div class="base-font title-text text-[51px]">{{ $t('title.first') }}</div>
      <div class="base-font title-text text-[37px]">{{ $t('title.second') }}</div>

      <Logo class="p-10 h-[30%]" />

      <PrimaryButton :title="$t('button.directDownload')" :onClick="downloadRuStore" />

      <div class="m-2"></div>

      <PrimaryButton :title="$t('button.downloadForiPhone')" :onClick="downloadIos" />

      <div class="m-2"></div>

      <a class="text-[--main-white-color]" :href="openWebUrl">
        {{ $t('button.useWeb') }}
      </a>
      <div class="m-1"></div>
    </div>
  </div>
</template>

<style scoped>
.title-text {
  @apply text-center text-[--main-white-color] font-light;
}

@media screen and (max-height: 730px) {
  .scroll {
    @apply overflow-y-auto  h-full;
  }

  .scroll::-webkit-scrollbar {
    display: none;
  }
}
</style>
