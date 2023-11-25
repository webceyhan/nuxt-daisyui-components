<script setup lang="ts">
import type { Color, Size } from "../types";

/**
 * DaisyUI classes to be included in the bundle!
 *
 * Size:
 * - toggle-xs
 * - toggle-sm
 * - toggle-md // default
 * - toggle-lg
 *
 * Color:
 * - toggle-primary
 * - toggle-secondary
 * - toggle-accent
 * - toggle-info
 * - toggle-success
 * - toggle-warning
 * - toggle-error
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
      'toggle',
      {
        [`toggle-${size}`]: size,
        [`toggle-${color}`]: color,
      },
    ]"
    @change="$emit('update:checked', ($event.target as HTMLInputElement).checked)"
    :checked="checked"
    :disabled="disabled"
  />
</template>
