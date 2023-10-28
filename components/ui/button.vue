<script lang="ts">
import { ClassMap, Color, Size, Shape } from "./types";

export type ButtonColor = Color | "neutral" | "ghost";

const SIZE_CLASS_MAP: ClassMap<Size> = {
  xs: "btn-xs",
  sm: "btn-sm",
  md: undefined, // default
  lg: "btn-lg",
};

const COLOR_CLASS_MAP: ClassMap<ButtonColor> = {
  default: undefined, // default
  primary: "btn-primary",
  secondary: "btn-secondary",
  accent: "btn-accent",
  info: "btn-info",
  success: "btn-success",
  warning: "btn-warning",
  error: "btn-error",
  neutral: "btn-neutral",
  ghost: "btn-ghost",
};

const SHAPE_CLASS_MAP: ClassMap<Shape> = {
  rectangle: undefined, // default
  square: "btn-square",
  circle: "btn-circle",
};
</script>

<script setup lang="ts">
interface Props {
  label?: string;
  href?: string;
  icon?: string;
  iconEnd?: string;
  size?: Size;
  shape?: Shape;
  color?: ButtonColor;
  outline?: boolean;
  active?: boolean;
  wide?: boolean;
  block?: boolean;
}

withDefaults(defineProps<Props>(), {
  size: "md",
  color: "default",
  shape: "rectangle",
});
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :role="href ? 'button' : undefined"
    :href="href"
    :class="[
      'btn',
      SIZE_CLASS_MAP[size],
      SHAPE_CLASS_MAP[shape],
      COLOR_CLASS_MAP[color],
      {
        'btn-outline': outline,
        'btn-active': active,
        'btn-wide': wide,
        'btn-block': block,
      },
    ]"
  >
    <slot>
      <ui-icon v-if="icon" :name="icon" class="text-[1.2em]" />

      <span v-if="label">{{ label }}</span>

      <ui-icon v-if="iconEnd" :name="iconEnd" class="text-[1.2em]" />
    </slot>
  </component>
</template>
