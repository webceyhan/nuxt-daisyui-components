<script lang="ts">
import type { Size } from "../types";

const SIZE_CLASS_MAP: Record<Size, string> = {
  xs: "phone-1",
  sm: "phone-2",
  md: "phone-3", // default
  lg: "phone-4",
};

const DIMENSION_MAP: Record<Size, number[]> = {
  xs: [320, 568],
  sm: [375, 667],
  md: [414, 736], // default
  lg: [375, 812],
};
</script>

<script setup lang="ts">
/**
 * DaisyUI classes to be included in the bundle!
 *
 * Size:
 * - phone-1
 * - phone-2
 * - phone-3
 * - phone-4
 * - phone-5
 * - phone-6
 */
export interface Props {
  size?: Size;
  horizontal?: boolean;
}

withDefaults(defineProps<Props>(), {
  size: "md",
});
</script>

<template>
  <div
    :class="[
      'artboard artboard-demo',
      SIZE_CLASS_MAP[size],
      {
        'artboard-horizontal': horizontal,
      },
    ]"
  >
    <slot>
      <span v-if="horizontal">
        {{ DIMENSION_MAP[size].reverse().join(" x ") }}
      </span>

      <span v-else>
        {{ DIMENSION_MAP[size].join(" x ") }}
      </span>
    </slot>
  </div>
</template>
