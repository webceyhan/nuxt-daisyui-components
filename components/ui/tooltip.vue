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
  as?: string;
  text: string;
  open?: boolean;
  color?: Color;
  position?: Position;
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
