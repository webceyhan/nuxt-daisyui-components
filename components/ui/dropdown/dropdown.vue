<script lang="ts">
import { Props as ButtonProps } from "../button/button.vue";

export const DROPDOWN_POSITION_CLASS_MAP = {
  top: "dropdown-top",
  bottom: undefined, // default
  left: "dropdown-left",
  right: "dropdown-right",
};
</script>

<script setup lang="ts">
export interface Props {
  label?: string;
  icon?: string;
  iconEnd?: string;
  size?: ButtonProps["size"];
  color?: ButtonProps["color"];
  position?: keyof typeof DROPDOWN_POSITION_CLASS_MAP;
  outline?: boolean;
  open?: boolean;
  hover?: boolean;
  disabled?: boolean;
  alignToEnd?: boolean;
}

withDefaults(defineProps<Props>(), {
  iconEnd: "chevron-down",
  position: "bottom",
});

const close = () => {
  (document.activeElement as HTMLElement)?.blur();
};
</script>

<template>
  <div
    :class="[
      'dropdown',
      DROPDOWN_POSITION_CLASS_MAP[position],
      {
        'dropdown-open': open,
        'dropdown-hover': hover,
        'dropdown-end': alignToEnd,
      },
    ]"
  >
    <!-- trigger button -->
    <slot name="trigger">
      <ui-button v-bind="{ label, icon, iconEnd, color, size, outline, disabled }" />
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
