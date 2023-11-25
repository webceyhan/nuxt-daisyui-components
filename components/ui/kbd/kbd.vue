<script setup lang="ts">
import type { Size } from "../types";

/**
 * DaisyUI classes to be included in the bundle!
 *
 * Size:
 * - kbd-xs
 * - kbd-sm
 * - kbd-md // default
 * - kbd-lg
 */
export interface Props {
  size?: Size;
}

defineProps<Props>();
</script>

<template>
  <kbd
    :class="[
      'kbd',
      {
        [`kbd-${size}`]: size,
      },
    ]"
  >
    <slot />
  </kbd>
</template>
