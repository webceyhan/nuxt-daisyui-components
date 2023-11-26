<script setup lang="ts">
import type { Size } from "../types";

/**
 * DaisyUI classes to be included in the bundle!
 *
 * Size:
 * - btm-nav-xs
 * - btm-nav-sm
 * - btm-nav-md // default
 * - btm-nav-lg
 */
export interface Props {
  size?: Size;
}

defineProps<Props>();
</script>

<template>
  <div
    :class="[
      'btm-nav',
      {
        [`btm-nav-${size}`]: size,
      },
    ]"
  >
    <slot />
  </div>
</template>
