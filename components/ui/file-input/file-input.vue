<script setup lang="ts">
import type { Color, Size } from "../types";

/**
 * DaisyUI classes to be included in the bundle!
 *
 * Size:
 * - file-input-xs
 * - file-input-sm
 * - file-input-md // default
 * - file-input-lg
 *
 * Color:
 * - file-input-primary
 * - file-input-secondary
 * - file-input-accent
 * - file-input-info
 * - file-input-success
 * - file-input-warning
 * - file-input-error
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
    type="file"
    :class="[
      'file-input w-full',
      {
        [`file-input-${size}`]: size,
        [`file-input-${color}`]: color,
        'file-input-ghost': ghost,
        'file-input-bordered': bordered,
      },
    ]"
    :value="modelValue"
    :disabled="disabled"
    @input=" $emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>
