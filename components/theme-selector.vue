<script setup lang="ts">
const { active, change, THEMES } = useTheme();
</script>

<template>
  <ui-dropdown align-to-end>
    <template #trigger>
      <ui-button ghost>
        <svg
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="h-5 w-5 stroke-current md:hidden"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          ></path>
        </svg>
        <span class="hidden md:inline">Theme</span>
        <ui-icon name="chevron-down" class="hidden sm:inline-block" />
      </ui-button>
    </template>

    <li v-for="theme of THEMES">
      <a @click="change(theme)" class="block rounded-lg p-1">
        <span
          :data-theme="theme"
          class="bg-base-100 text-base-content grid grid-cols-5 grid-rows-3 rounded-lg"
        >
          <span
            class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
          >
            <ui-icon name="check-lg" :class="{ invisible: theme !== active }" />

            <span class="flex-grow text-sm">{{ theme }}</span>
            <span class="flex h-full shrink-0 flex-wrap gap-1">
              <span class="bg-primary w-2 rounded" />
              <span class="bg-secondary w-2 rounded" />
              <span class="bg-accent w-2 rounded" />
              <span class="bg-neutral w-2 rounded" />
            </span>
          </span>
        </span>
      </a>
    </li>

    <ui-menu-item
      label="More themes"
      icon="palette"
      target="_blank"
      href="https://daisyui.com/docs/themes"
    />
  </ui-dropdown>
</template>
