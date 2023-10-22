<script lang="ts">
import { ClassMap, Color, Size } from "./types";

type BadgeColor = Color | "neutral" | "ghost";

const SIZE_CLASS_MAP: ClassMap<Size> = {
  xs: "badge-xs",
  sm: "badge-sm",
  md: undefined, // default
  lg: "badge-lg",
};

const COLOR_CLASS_MAP: ClassMap<BadgeColor> = {
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
      SIZE_CLASS_MAP[size],
      COLOR_CLASS_MAP[color],
      {
        'badge-outline': outline,
      },
    ]"
  >
    <slot />
  </span>
</template>
