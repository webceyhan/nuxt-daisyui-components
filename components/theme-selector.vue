<script setup lang="ts">
const { active, change, THEMES } = useTheme();
</script>

<template>
  <ui-dropdown label="Theme" align-to-end ghost>
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
