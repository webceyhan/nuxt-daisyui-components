<script setup lang="ts">
import type { ColorWithNeural } from "../types";

/**
 * DaisyUI classes to be included in the bundle!
 *
 * Color:
 * - step-neutral
 * - step-primary
 * - step-secondary
 * - step-accent
 * - step-info
 * - step-success
 * - step-warning
 * - step-error
 */
export interface Props {
  color?: ColorWithNeural;
}

defineProps<Props>();
</script>

<template>
  <li
    :class="[
      'step',
      {
        [`step-${color}`]: color,
      },
    ]"
  >
    <slot />
  </li>
</template>
