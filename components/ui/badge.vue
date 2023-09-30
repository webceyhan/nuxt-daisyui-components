<script lang="ts">
import { ClassMap, Color, Size } from "./types";

const SIZE_CLASS_MAP: ClassMap<Size> = {
  xs: "badge-xs",
  sm: "badge-sm",
  md: undefined, // default
  lg: "badge-lg",
};

const COLOR_CLASS_MAP: ClassMap<Color> = {
  default: undefined, // default
  neutral: "badge-neutral",
  primary: "badge-primary",
  secondary: "badge-secondary",
  accent: "badge-accent",
  ghost: "badge-ghost",
  info: "badge-info",
  success: "badge-success",
  warning: "badge-warning",
  error: "badge-error",
};
</script>

<script setup lang="ts">
interface Props {
  size?: Size;
  color?: Color;
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
