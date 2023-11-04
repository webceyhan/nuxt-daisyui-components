<script lang="ts">
export const MENU_SIZE_CLASS_MAP = {
  xs: "menu-xs",
  sm: "menu-sm",
  md: undefined, // default
  lg: "menu-lg",
};
</script>

<script setup lang="ts">
export interface Props {
  size?: keyof typeof MENU_SIZE_CLASS_MAP;
  horizontal?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  size: "md",
  color: "default",
});

provide("menu", props);
</script>

<template>
  <ul
    :class="[
      'menu',
      MENU_SIZE_CLASS_MAP[size],
      {
        'menu-horizontal': horizontal,
      },
      // pre-styling
      'bg-base-200 rounded-box',
    ]"
  >
    <slot />
  </ul>
</template>
