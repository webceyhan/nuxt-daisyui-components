<script setup lang="ts">
import type { Color, Size } from "../types";

/**
 * DaisyUI classes to be included in the bundle!
 *
 * Size:
 * - select-xs
 * - select-sm
 * - select-md // default
 * - select-lg
 *
 * Color:
 * - select-primary
 * - select-secondary
 * - select-accent
 * - select-info
 * - select-success
 * - select-warning
 * - select-error
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
  <select
    :class="[
      'select w-full',
      {
        [`select-${size}`]: size,
        [`select-${color}`]: color,
        'select-ghost': ghost,
        'select-bordered': bordered,
      },
    ]"
    @change="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    :value="modelValue"
    :disabled="disabled"
  >
    <slot />
  </select>
</template>
