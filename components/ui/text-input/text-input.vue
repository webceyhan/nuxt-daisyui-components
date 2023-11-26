<script setup lang="ts">
import type { Color, Size } from "../types";

/**
 * DaisyUI classes to be included in the bundle!
 *
 * Size:
 * - input-xs
 * - input-sm
 * - input-md // default
 * - input-lg
 *
 * Color:
 * - input-primary
 * - input-secondary
 * - input-accent
 * - input-info
 * - input-success
 * - input-warning
 * - input-error
 */
export interface Props {
  modelValue?: string;
  size?: Size;
  color?: Color;
  ghost?: boolean;
  bordered?: boolean;
  disabled?: boolean;
}

defineEmits(["update:modelValue"]);

defineProps<Props>();
</script>

<template>
  <input
    type="text"
    :class="[
      'input',
      {
        [`input-${size}`]: size,
        [`input-${color}`]: color,
        'input-ghost': ghost,
        'input-bordered': bordered,
      },
    ]"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    :value="modelValue"
    :disabled="disabled"
  />
</template>
