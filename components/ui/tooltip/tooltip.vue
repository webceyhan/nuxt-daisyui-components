<script setup lang="ts">
import type { Color, Position } from "../types";

/**
 * DaisyUI classes to be included in the bundle!
 *
 * Color:
 * - tooltip-primary
 * - tooltip-secondary
 * - tooltip-accent
 * - tooltip-info
 * - tooltip-success
 * - tooltip-warning
 * - tooltip-error
 *
 * Position:
 * - tooltip-top // default
 * - tooltip-bottom
 * - tooltip-left
 * - tooltip-right
 */
export interface Props {
  as?: string;
  text: string;
  open?: boolean;
  color?: Color;
  position?: Position;
}

withDefaults(defineProps<Props>(), {
  as: "div",
});
</script>

<template>
  <component
    :is="as"
    :class="[
      'tooltip',
      {
        [`tooltip-${color}`]: color,
        [`tooltip-${position}`]: position,
        'tooltip-open': open,
      },
    ]"
    :data-tip="text"
  >
    <slot />
  </component>
</template>
