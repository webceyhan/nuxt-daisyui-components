<script lang="ts">
import { ClassMap, Position } from "./types";
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
  color?: ButtonColor;
  position?: Position;
  open?: boolean;
  hover?: boolean;
  alignToEnd?: boolean;
}

withDefaults(defineProps<Props>(), {
  iconEnd: "chevron-down",
  position: "bottom",
});
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
      <ui-button v-bind="{ label, icon, iconEnd, color }" />
    </slot>

    <!-- dropdown content -->
    <ui-menu tabindex="0" class="dropdown-content w-56 z-[1] shadow">
      <slot />
    </ui-menu>
  </div>
</template>
