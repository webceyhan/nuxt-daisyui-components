<script setup lang="ts">
import type { Size } from "../types";

/**
 * DaisyUI classes to be included in the bundle!
 *
 * Size:
 * - table-xs
 * - table-sm
 * - table-md // default
 * - table-lg
 */
export interface Props {
  size?: Size;
  zebra?: boolean;
  pinRows?: boolean;
  pinCols?: boolean;
}

defineProps<Props>();
</script>

<template>
  <table
    :class="[
      'table',
      {
        [`table-${size}`]: size,
        'table-zebra': zebra,
        'table-pin-rows': pinRows,
        'table-pin-cols': pinCols,
      },
    ]"
  >
    <slot />
  </table>
</template>
