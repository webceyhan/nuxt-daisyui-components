<script lang="ts">
export const SIZE_CLASS_MAP = {
  xs: "btn-xs",
  sm: "btn-sm",
  md: undefined, // default
  lg: "btn-lg",
};

export const COLOR_CLASS_MAP = {
  default: undefined, // default
  neutral: "btn-neutral",
  primary: "btn-primary",
  secondary: "btn-secondary",
  accent: "btn-accent",
  info: "btn-info",
  success: "btn-success",
  warning: "btn-warning",
  error: "btn-error",
};

export const SHAPE_CLASS_MAP = {
  rectangle: undefined, // default
  square: "btn-square",
  circle: "btn-circle",
};
</script>

<script setup lang="ts">
export interface Props {
  label?: string;
  href?: string;
  icon?: string;
  size?: keyof typeof SIZE_CLASS_MAP;
  shape?: keyof typeof SHAPE_CLASS_MAP;
  color?: keyof typeof COLOR_CLASS_MAP;
  ghost?: boolean;
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
        'btn-ghost': ghost,
        'btn-outline': outline,
        'btn-active': active,
        'btn-wide': wide,
        'btn-block': block,
      },
    ]"
  >
    <ui-icon v-if="icon" :name="icon" class="text-[1.2em]" />

    <span v-if="label">{{ label }}</span>
    <slot />
  </component>
</template>
