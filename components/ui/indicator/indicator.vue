<script setup lang="ts">
import type { Alignment, VerticalAlignment } from "../types";

/**
 * DaisyUI classes to be included in the bundle!
 *
 * Alignment:
 * - indicator-start
 * - indicator-center
 * - indicator-end // default
 *
 * Vertical Alignment:
 * - indicator-top // default
 * - indicator-middle
 * - indicator-bottom
 */
export interface Props {
  itemClass?: string;
  alignment?: Alignment;
  verticalAlignment?: VerticalAlignment;
}

defineProps<Props>();
</script>

<template>
  <div class="indicator">
    <!-- item -->
    <span
      class="indicator-item"
      :class="[
        {
          [`indicator-${alignment}`]: alignment,
          [`indicator-${verticalAlignment}`]: verticalAlignment,
        },
        itemClass,
      ]"
    >
      <slot name="item" />
    </span>

    <!-- content -->
    <slot />
  </div>
</template>
