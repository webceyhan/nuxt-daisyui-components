<script setup lang="ts">
import type { Alignment, VerticalAlignment } from "../types";

/**
 * DaisyUI classes to be included in the bundle!
 *
 * Alignment:
 * - toast-start
 * - toast-center
 * - toast-end // default
 *
 * Vertical Alignment:
 * - toast-top
 * - toast-middle
 * - toast-bottom // default
 */
export interface Props {
  alignment?: Alignment;
  verticalAlignment?: VerticalAlignment;
}

defineProps<Props>();
</script>

<template>
  <div
    :class="[
      'toast',
      {
        [`toast-${alignment}`]: alignment,
        [`toast-${verticalAlignment}`]: verticalAlignment,
      },
    ]"
  >
    <slot />
  </div>
</template>
