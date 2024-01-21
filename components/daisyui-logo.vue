<template>
  <div class="flex items-center gap-2 md:px-4 py-2 backdrop-blur">
    <NuxtLink href="/" class="flex-0 btn btn-ghost gap-1 px-2 md:gap-2">
      <svg
        class="h-6 w-6 md:h-8 md:w-8"
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
      <span class="font-title text-base-content text-lg md:text-2xl">daisyUI</span>
    </NuxtLink>

    <i class="text-sm md:text-lg font-serif opacity-50">for Nuxt</i>
  </div>
</template>

<style scoped>
.font-title {
  font-family: Figtree, Noto Sans JP, Noto Sans, Vazirmatn, sans-serif;
}
</style>
