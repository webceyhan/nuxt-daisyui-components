<template>
  <div class="flex items-center gap-2 px-4 py-2 backdrop-blur">
    <NuxtLink href="/" class="flex-0 btn btn-ghost px-2">
      <svg
        width="32"
        height="32"
        viewBox="0 0 415 415"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="82.5" y="290" width="250" height="125" rx="62.5" fill="#1AD1A5"></rect>
        <circle cx="207.5" cy="135" r="130" fill="black" fill-opacity=".3"></circle>
        <circle cx="207.5" cy="135" r="125" fill="white"></circle>
        <circle cx="207.5" cy="135" r="56" fill="#FF9903"></circle>
      </svg>
      <div class="font-title inline-flex text-lg md:text-2xl">
        <span class="lowercase">daisy</span>
        <span class="uppercase text-[#1AD1A5]">UI</span>
      </div>
    </NuxtLink>

    <i class="text-lg font-serif opacity-50">for Nuxt</i>
  </div>
</template>

<style scoped>
.font-title {
  font-family: Figtree, Noto Sans JP, Noto Sans, Vazirmatn, sans-serif;
}
</style>
