<script lang="ts">
import { ClassMap, Position, Size } from "./types";
import { ButtonColor } from "./button.vue";

const POSITION_CLASS_MAP: ClassMap<Position> = {
  top: "dropdown-top",
  bottom: undefined, // default
  left: "dropdown-left",
  right: "dropdown-right",
};
</script>

<script setup lang="ts">
interface Props {
  label?: string;
  icon?: string;
  iconEnd?: string;
  size?: Size;
  color?: ButtonColor;
  position?: Position;
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
      POSITION_CLASS_MAP[position],
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
