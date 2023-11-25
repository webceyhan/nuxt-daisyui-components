<script setup lang="ts">
import type { Color } from "../types";

/**
 * DaisyUI classes to be included in the bundle!
 *
 * Color:
 * - progress-primary
 * - progress-secondary
 * - progress-accent
 * - progress-info
 * - progress-success
 * - progress-warning
 * - progress-error
 *
 * Text Color: (for radial progress)
 * - text-primary
 * - text-secondary
 * - text-accent
 * - text-info
 * - text-success
 * - text-warning
 * - text-error
 */
export interface Props {
  value?: number;
  max?: number;
  size?: string;
  thickness?: string;
  color?: Color;
  radial?: boolean;
}

withDefaults(defineProps<Props>(), {
  value: 0,
  max: 100,
});
</script>

<template>
  <div
    v-if="radial"
    :class="[
      'radial-progress',
      {
        [`text-${color}`]: color,
      },
    ]"
    :style="{
      '--value': value,
      '--size': size,
      '--thickness': thickness,
    }"
  >
    {{ value }}%
  </div>

  <progress
    v-else
    :class="[
      'progress',
      {
        [`progress-${color}`]: color,
      },
    ]"
    :value="value"
    :max="max"
  />
</template>
