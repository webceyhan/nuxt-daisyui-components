<script setup lang="ts">
import type { ColorWithNeural, Size } from "../types";

/**
 * DaisyUI classes to be included in the bundle!
 *
 * Size:
 * - badge-xs
 * - badge-sm
 * - badge-md // default
 * - badge-lg
 *
 * Color:
 * - badge-neutral
 * - badge-primary
 * - badge-secondary
 * - badge-accent
 * - badge-info
 * - badge-success
 * - badge-warning
 * - badge-error
 */
export interface Props {
  label?: string;
  size?: Size;
  color?: ColorWithNeural;
  ghost?: boolean;
  outline?: boolean;
}

defineProps<Props>();
</script>

<template>
  <span
    :class="[
      'badge',
      {
        [`badge-${size}`]: size,
        [`badge-${color}`]: color,
        'badge-ghost': ghost,
        'badge-outline': outline,
      },
    ]"
  >
    <slot>
      {{ label }}
    </slot>
  </span>
</template>
