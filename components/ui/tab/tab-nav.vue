<script setup lang="ts">
import type { Size } from "../types";

/**
 * DaisyUI classes to be included in the bundle!
 *
 * Size:
 * - tabs-xs
 * - tabs-sm
 * - tabs-md // default
 * - tabs-lg
 */
export interface Props {
  size?: Size;
  boxed?: boolean;
  bordered?: boolean;
  lifted?: boolean;
}

defineProps<Props>();
</script>

<template>
  <div
    role="tablist"
    :class="[
      'tabs',
      {
        [`tabs-${size}`]: size,
        'tabs-boxed': boxed,
        'tabs-bordered': bordered,
        'tabs-lifted': lifted,
      },
    ]"
  >
    <slot />
  </div>
</template>
