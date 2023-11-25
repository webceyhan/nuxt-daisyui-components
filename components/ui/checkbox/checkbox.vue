<script setup lang="ts">
import type { Color, Size } from "../types";

/**
 * DaisyUI classes to be included in the bundle!
 *
 * Size:
 * - checkbox-xs
 * - checkbox-sm
 * - checkbox-md // default
 * - checkbox-lg
 *
 * Color:
 * - checkbox-primary
 * - checkbox-secondary
 * - checkbox-accent
 * - checkbox-info
 * - checkbox-success
 * - checkbox-warning
 * - checkbox-error
 */
export interface Props {
  size?: Size;
  color?: Color;
  checked?: boolean;
  disabled?: boolean;
}

defineEmits(["update:checked"]);

defineProps<Props>();
</script>

<template>
  <input
    type="checkbox"
    :class="[
      'checkbox',
      {
        [`checkbox-${size}`]: size,
        [`checkbox-${color}`]: color,
      },
    ]"
    @change="$emit('update:checked', ($event.target as HTMLInputElement).checked)"
    :checked="checked"
    :disabled="disabled"
  />
</template>
