<script setup lang="ts">
import type { ColorWithNeural, Size } from "../types";

/**
 * DaisyUI classes to be included in the bundle!
 *
 * Size:
 * - btn-xs
 * - btn-sm
 * - btn-md // default
 * - btn-lg
 *
 * Color:
 * - btn-neutral
 * - btn-primary
 * - btn-secondary
 * - btn-accent
 * - btn-info
 * - btn-success
 * - btn-warning
 * - btn-error
 *
 * Shape:
 * - btn-square
 * - btn-circle
 */
export type Shape = 'square' | 'circle';
 
export interface Props {
  label?: string;
  href?: string;
  icon?: string;
  size?: Size;
  shape?: Shape;
  color?: ColorWithNeural;
  ghost?: boolean;
  outline?: boolean;
  active?: boolean;
  wide?: boolean;
  block?: boolean;
  loading?: boolean;
}

defineProps<Props>();
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :role="href ? 'button' : undefined"
    :href="href"
    :class="[
      'btn',
      {
        [`btn-${size}`]: size,
        [`btn-${shape}`]: shape,
        [`btn-${color}`]: color,
        'btn-ghost': ghost,
        'btn-outline': outline,
        'btn-active': active,
        'btn-wide': wide,
        'btn-block': block,
      },
    ]"
  >
    <ui-loading v-if="loading" />

    <ui-icon v-if="icon" :name="icon" class="text-[1.2em]" />

    <span v-if="label">{{ label }}</span>
    <slot />
  </component>
</template>
