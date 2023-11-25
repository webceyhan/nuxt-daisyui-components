<script setup lang="ts">
import type { Size } from "../types";

export type Animation = "spinner" | "dots" | "ring" | "ball" | "bars" | "infinity";

/**
 * DaisyUI classes to be included in the bundle!
 *
 * Size:
 * - loading-xs
 * - loading-sm
 * - loading-md // default
 * - loading-lg
 *
 * Animation:
 * - loading-spinner // default
 * - loading-dots
 * - loading-ring
 * - loading-ball
 * - loading-bars
 * - loading-infinity
 */
export interface Props {
  size?: Size;
  animation?: Animation;
}

withDefaults(defineProps<Props>(), {
  animation: "spinner",
});
</script>

<template>
  <span
    :class="[
      'loading',
      {
        [`loading-${size}`]: size,
        [`loading-${animation}`]: animation,
      },
    ]"
  />
</template>
