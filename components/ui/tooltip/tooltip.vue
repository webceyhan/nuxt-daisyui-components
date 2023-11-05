<script lang="ts">
export const COLOR_CLASS_MAP = {
  default: undefined, // default
  primary: "tooltip-primary",
  secondary: "tooltip-secondary",
  accent: "tooltip-accent",
  info: "tooltip-info",
  success: "tooltip-success",
  warning: "tooltip-warning",
  error: "tooltip-error",
};

export const POSITION_CLASS_MAP = {
  top: undefined, // default
  bottom: "tooltip-bottom",
  left: "tooltip-left",
  right: "tooltip-right",
};

// interface Bindings {
//   text?: string;
//   open?: boolean;
//   color?: keyof typeof COLOR_CLASS_MAP;
//   position?: keyof typeof POSITION_CLASS_MAP;
// }

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
//   el.classList.add(COLOR_CLASS_MAP[color ?? "default"]);
//   el.classList.add(POSITION_CLASS_MAP[position ?? "top"]);
//   open && el.classList.add("tooltip-open");
// });
</script>

<script setup lang="ts">
export interface Props {
  as?: string;
  text: string;
  open?: boolean;
  color?: keyof typeof COLOR_CLASS_MAP;
  position?: keyof typeof POSITION_CLASS_MAP;
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
      COLOR_CLASS_MAP[color],
      POSITION_CLASS_MAP[position],
      {
        'tooltip-open': open,
      },
    ]"
    :data-tip="text"
  >
    <slot />
  </component>
</template>
