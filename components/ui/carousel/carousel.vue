<script setup lang="ts">
import type { Alignment } from "../types";

/**
 * DaisyUI classes to be included in the bundle!
 *
 * Snap:
 * - carousel-start // default
 * - carousel-center
 * - carousel-end
 */
export interface Props {
  snap?: Alignment;
  vertical?: boolean;
}

defineProps<Props>();
</script>

<template>
  <div
    :class="[
      'carousel',
      {
        [`carousel-${snap}`]: snap,
        'carousel-vertical': vertical,
      },
    ]"
  >
    <slot />
  </div>
</template>
