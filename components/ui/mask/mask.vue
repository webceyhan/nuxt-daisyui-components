<script setup lang="ts">
import type { Mask } from "../types";

/**
 * DaisyUI classes to be included in the bundle!
 *
 * Shape:
 * - mask-squircle // default
 * - mask-heart
 * - mask-hexagon
 * - mask-hexagon-2
 * - mask-decagon
 * - mask-pentagon
 * - mask-diamond
 * - mask-square
 * - mask-circle
 * - mask-parallelogram
 * - mask-parallelogram-2
 * - mask-parallelogram-3
 * - mask-parallelogram-4
 * - mask-star
 * - mask-star-2
 * - mask-triangle
 * - mask-triangle-2
 * - mask-triangle-3
 * - mask-triangle-4
 */
export interface Props {
  shape?: Mask;
  firstHalf?: boolean;
  lastHalf?: boolean;
}

withDefaults(defineProps<Props>(), {
  shape: "squircle",
});
</script>

<template>
  <div
    :class="[
      'mask',
      {
        [`mask-${shape}`]: shape,
        'mask-half-1': firstHalf,
        'mask-half-2': lastHalf,
      },
    ]"
  >
    <slot />
  </div>
</template>
