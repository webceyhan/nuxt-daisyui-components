<script setup lang="ts">
import { Size } from "~/types";

/**
 * DaisyUI classes to be included in the bundle!
 *
 * Size:
 * - tab-xs
 * - tab-sm
 * - tab-md // default
 * - tab-lg
 */
export interface Props {
  size?: Size;
  active?: boolean;
  lifted?: boolean;
  bordered?: boolean;
  disabled?: boolean;
}

defineProps<Props>();
</script>

<template>
  <a
    :class="[
      'tab',
      {
        [`tab-${size}`]: size,
        'tab-active': active,
        'tab-lifted': lifted,
        'tab-bordered': bordered,
        'tab-disabled': disabled,
        indicator: !!$slots.indicator,
      },
    ]"
  >
    <span v-if="$slots.indicator" class="indicator-item">
      <slot name="indicator" />
    </span>

    <slot />
  </a>
</template>
