<script setup lang="ts">
import type { Color, Alignment } from "../types";

/**
 * DaisyUI classes to be included in the bundle!
 *
 * Color:
 * - divider-primary
 * - divider-secondary
 * - divider-accent
 * - divider-info
 * - divider-success
 * - divider-warning
 * - divider-error
 *
 * Alignment:
 * - divider-start
 * - divider-center // default
 * - divider-end
 */
export interface Props {
  color?: Color;
  alignment?: Alignment;
  horizontal?: boolean;
}

defineProps<Props>();
</script>

<template>
  <div
    :class="[
      'divider',
      {
        [`divider-${color}`]: color,
        [`divider-${alignment}`]: alignment,
        'divider-horizontal': horizontal,
      },
    ]"
  >
    <slot />
  </div>
</template>
