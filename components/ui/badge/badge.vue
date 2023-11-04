<script lang="ts">
export const SIZE_CLASS_MAP = {
  xs: "badge-xs",
  sm: "badge-sm",
  md: undefined, // default
  lg: "badge-lg",
};

export const COLOR_CLASS_MAP = {
  default: undefined, // default
  primary: "badge-primary",
  secondary: "badge-secondary",
  accent: "badge-accent",
  info: "badge-info",
  success: "badge-success",
  warning: "badge-warning",
  error: "badge-error",
  neutral: "badge-neutral",
  ghost: "badge-ghost",
};
</script>

<script setup lang="ts">
export interface Props {
  label?: string;
  size?: keyof typeof SIZE_CLASS_MAP;
  color?: keyof typeof COLOR_CLASS_MAP;
  outline?: boolean;
}

withDefaults(defineProps<Props>(), {
  size: "md",
  color: "default",
});
</script>

<template>
  <span
    :class="[
      'badge',
      SIZE_CLASS_MAP[size],
      COLOR_CLASS_MAP[color],
      {
        'badge-outline': outline,
      },
    ]"
  >
    <slot>
      {{ label }}
    </slot>
  </span>
</template>
