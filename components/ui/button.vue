<script lang="ts">
import { ClassMap, Color, Size } from "./types";

type ButtonColor = Color | "link";

const SIZE_CLASS_MAP: ClassMap<Size> = {
  xs: "btn-xs",
  sm: "btn-sm",
  md: undefined, // default
  lg: "btn-lg",
};

const COLOR_CLASS_MAP: ClassMap<ButtonColor> = {
  default: undefined, // default
  neutral: "btn-neutral",
  primary: "btn-primary",
  secondary: "btn-secondary",
  accent: "btn-accent",
  ghost: "btn-ghost",
  info: "btn-info",
  success: "btn-success",
  warning: "btn-warning",
  error: "btn-error",
  link: "btn-link",
};
</script>

<script setup lang="ts">
interface Props {
  size?: Size;
  color?: ButtonColor;
  outline?: boolean;
  active?: boolean;
  wide?: boolean;
  square?: boolean;
  circle?: boolean;
  block?: boolean;
}

withDefaults(defineProps<Props>(), {
  size: "md",
  color: "default",
});
</script>

<template>
  <button
    :class="[
      'btn',
      SIZE_CLASS_MAP[size],
      COLOR_CLASS_MAP[color],
      {
        'btn-outline': outline,
        'btn-active': active,
        'btn-wide': wide,
        'btn-block': block,
        'btn-square': square,
        'btn-circle': circle,
      },
    ]"
  >
    <slot />
  </button>
</template>
