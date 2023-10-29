<script lang="ts">
import { ClassMap, Size } from "../types";

export const MENU_SIZE_CLASS_MAP: ClassMap<Size> = {
  xs: "menu-xs",
  sm: "menu-sm",
  md: undefined, // default
  lg: "menu-lg",
};

export interface MenuProps {
  size?: Size;
  horizontal?: boolean;
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<MenuProps>(), {
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
