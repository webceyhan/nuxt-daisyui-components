<script lang="ts">
import { ClassMap, Color, Size } from "../types";

export type BadgeColor = Color | "neutral" | "ghost";

export const BADGE_SIZE_CLASS_MAP: ClassMap<Size> = {
  xs: "badge-xs",
  sm: "badge-sm",
  md: undefined, // default
  lg: "badge-lg",
};

export const BADGE_COLOR_CLASS_MAP: ClassMap<BadgeColor> = {
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
interface Props {
  label?: string;
  size?: Size;
  color?: BadgeColor;
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
      BADGE_SIZE_CLASS_MAP[size],
      BADGE_COLOR_CLASS_MAP[color],
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
