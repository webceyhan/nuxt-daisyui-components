<script setup lang="ts">
import type { Size } from "../types";

/**
 * DaisyUI classes to be included in the bundle!
 *
 * Size:
 * - menu-xs
 * - menu-sm
 * - menu-md // default
 * - menu-lg
 */
export interface Props {
  size?: Size;
  horizontal?: boolean;
}

const props = defineProps<Props>();

provide("menu", props);
</script>

<template>
  <ul
    :class="[
      'menu',
      {
        [`menu-${size}`]: size,
        'menu-horizontal': horizontal,
      },
      // pre-styling
      'bg-base-200 rounded-box',
    ]"
  >
    <slot />
  </ul>
</template>
