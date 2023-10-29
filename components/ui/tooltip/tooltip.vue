<script lang="ts">
import { ClassMap, Color, Position } from "../types";

export const TOOLTIP_COLOR_CLASS_MAP: ClassMap<Color> = {
  default: undefined, // default
  primary: "tooltip-primary",
  secondary: "tooltip-secondary",
  accent: "tooltip-accent",
  info: "tooltip-info",
  success: "tooltip-success",
  warning: "tooltip-warning",
  error: "tooltip-error",
};

export const TOOLTIP_POSITION_CLASS_MAP: ClassMap<Position> = {
  top: undefined, // default
  bottom: "tooltip-bottom",
  left: "tooltip-left",
  right: "tooltip-right",
};

interface Bindings {
  text?: string;
  open?: boolean;
  color?: Color;
  position?: Position;
}

// not working because it's not auto registered
// you should put it inside a plugin /  module
//
//
// useNuxtApp().vueApp.directive("tooltip", (el, binding) => {
//   // this will be called for both `mounted` and `updated`
//   const { open, color, position, text } = binding.value as Bindings;

//   // if no text, remove tooltip
//   if (!text) return;

//   el.setAttribute("data-tip", text);
//   el.classList.add("tooltip");
//   el.classList.add(TOOLTIP_COLOR_CLASS_MAP[color ?? "default"]);
//   el.classList.add(TOOLTIP_POSITION_CLASS_MAP[position ?? "top"]);
//   open && el.classList.add("tooltip-open");
// });
</script>

<script setup lang="ts">
interface Props {
  as?: string;
  text: string;
  open?: boolean;
  color?: Color;
  position?: Position;
}

withDefaults(defineProps<Props>(), {
  as: "div",
  color: "default",
  position: "top",
});
</script>

<template>
  <component
    :is="as"
    :class="[
      'tooltip',
      TOOLTIP_COLOR_CLASS_MAP[color],
      TOOLTIP_POSITION_CLASS_MAP[position],
      {
        'tooltip-open': open,
      },
    ]"
    :data-tip="text"
  >
    <slot />
  </component>
</template>
