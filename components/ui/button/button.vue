<script lang="ts">
export const BUTTON_SIZE_CLASS_MAP = {
  xs: "btn-xs",
  sm: "btn-sm",
  md: undefined, // default
  lg: "btn-lg",
};

export const BUTTON_COLOR_CLASS_MAP = {
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

export const BUTTON_SHAPE_CLASS_MAP = {
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
  iconEnd?: string;
  size?: keyof typeof BUTTON_SIZE_CLASS_MAP;
  shape?: keyof typeof BUTTON_SHAPE_CLASS_MAP;
  color?: keyof typeof BUTTON_COLOR_CLASS_MAP;
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
      BUTTON_SIZE_CLASS_MAP[size],
      BUTTON_SHAPE_CLASS_MAP[shape],
      BUTTON_COLOR_CLASS_MAP[color],
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
