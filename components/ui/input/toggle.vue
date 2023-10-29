<script lang="ts">
import { ClassMap, Color, Size } from "../types";

export const TOGGLE_SIZE_CLASS_MAP: ClassMap<Size> = {
  xs: "toggle-xs",
  sm: "toggle-sm",
  md: undefined, // default
  lg: "toggle-lg",
};

export const TOGGLE_COLOR_CLASS_MAP: ClassMap<Color> = {
  default: undefined, // default
  primary: "toggle-primary",
  secondary: "toggle-secondary",
  accent: "toggle-accent",
  info: "toggle-info",
  success: "toggle-success",
  warning: "toggle-warning",
  error: "toggle-error",
};
</script>

<script setup lang="ts">
interface Props {
  size?: Size;
  color?: Color;
  checked?: boolean;
  disabled?: boolean;
}

defineEmits(["update:checked"]);

withDefaults(defineProps<Props>(), {
  size: "md",
  color: "default",
});
</script>

<template>
  <input
    type="checkbox"
    :class="['toggle', TOGGLE_SIZE_CLASS_MAP[size], TOGGLE_COLOR_CLASS_MAP[color]]"
    @change="$emit('update:checked', ($event.target as HTMLInputElement).checked)"
    :checked="checked"
    :disabled="disabled"
  />
</template>
