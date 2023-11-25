<script setup lang="ts">
import type { Color, Size } from "../types";

/**
 * DaisyUI classes to be included in the bundle!
 *
 * Size:
 * - range-xs
 * - range-sm
 * - range-md // default
 * - range-lg
 *
 * Color:
 * - range-primary
 * - range-secondary
 * - range-accent
 * - range-info
 * - range-success
 * - range-warning
 * - range-error
 */
export interface Props {
  min?: string | number;
  max?: string | number;
  step?: string | number;
  value?: string | number;
  modelValue?: string | number;
  size?: Size;
  color?: Color;
  disabled?: boolean;
}

defineEmits(["update:modelValue"]);

defineProps<Props>();
</script>

<template>
  <input
    type="range"
    :class="[
      'range',
      {
        [`range-${size}`]: size,
        [`range-${color}`]: color,
        // patch default disabled style
        'cursor-not-allowed': disabled,
      },
    ]"
    v-bind="{ value, min, max, step, disabled }"
    @change="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>
