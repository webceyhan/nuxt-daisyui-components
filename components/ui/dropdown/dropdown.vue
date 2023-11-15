<script setup lang="ts">
import { ColorWithNeural, Position, Size } from "~/types";

/**
 * DaisyUI classes to be included in the bundle!
 *
 * Position:
 * - dropdown-top
 * - dropdown-bottom // default
 * - dropdown-left
 * - dropdown-right
 */
export interface Props {
  label?: string;
  icon?: string;
  size?: Size;
  color?: ColorWithNeural;
  position?: Position;
  outline?: boolean;
  open?: boolean;
  hover?: boolean;
  disabled?: boolean;
  alignToEnd?: boolean;
  noIndicator?: boolean;
}

defineProps<Props>();

const close = () => {
  (document.activeElement as HTMLElement)?.blur();
};
</script>

<template>
  <div
    :class="[
      'dropdown',
      {
        [`dropdown-${position}`]: position,
        'dropdown-open': open,
        'dropdown-hover': hover,
        'dropdown-end': alignToEnd,
      },
    ]"
  >
    <!-- trigger button -->
    <slot name="trigger">
      <ui-button v-bind="{ label, icon, color, size, outline, disabled }">
        <ui-icon v-if="!noIndicator" name="chevron-down" />
      </ui-button>
    </slot>

    <!-- dropdown content -->
    <ui-menu
      tabindex="0"
      class="dropdown-content w-56 z-[1] shadow"
      :size="size"
      @click.native="close"
    >
      <slot />
    </ui-menu>
  </div>
</template>
