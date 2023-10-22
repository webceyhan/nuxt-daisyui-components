<script lang="ts">
import { ClassMap, Color, Position } from "./types";

const COLOR_CLASS_MAP: ClassMap<Color> = {
  default: undefined, // default
  primary: "tooltip-primary",
  secondary: "tooltip-secondary",
  accent: "tooltip-accent",
  info: "tooltip-info",
  success: "tooltip-success",
  warning: "tooltip-warning",
  error: "tooltip-error",
};

const POSITION_CLASS_MAP: ClassMap<Position> = {
  top: undefined, // default
  bottom: "tooltip-bottom",
  left: "tooltip-left",
  right: "tooltip-right",
};
</script>

<script setup lang="ts">
interface Props {
  value: string;
  open?: boolean;
  color?: Color;
  position?: Position;
}

withDefaults(defineProps<Props>(), {
  color: "default",
  position: "top",
});
</script>

<template>
  <div
    :class="[
      'tooltip',
      COLOR_CLASS_MAP[color],
      POSITION_CLASS_MAP[position],
      {
        'tooltip-open': open,
      },
    ]"
    :data-tip="value"
  >
    <slot />
  </div>
</template>
