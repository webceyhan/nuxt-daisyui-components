<script setup lang="ts">
import type { ColorWithNeural } from "../types";

/**
 * DaisyUI classes to be included in the bundle!
 *
 * Color:
 * - link-neutral
 * - link-primary
 * - link-secondary
 * - link-accent
 * - link-info
 * - link-success
 * - link-warning
 * - link-error
 */
export interface Props {
  color?: ColorWithNeural;
  hover?: boolean;
}

defineProps<Props>();
</script>

<template>
  <a
    :class="[
      'link',
      {
        [`link-${color}`]: color,
        'link-hover': hover,
      },
    ]"
  >
    <slot />
  </a>
</template>
