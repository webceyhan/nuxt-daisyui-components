<script lang="ts">
import { ClassMap, Color, Size } from "./types";

type CheckboxColor = Exclude<Color, "neutral" | "ghost">;

const SIZE_CLASS_MAP: ClassMap<Size> = {
  xs: "checkbox-xs",
  sm: "checkbox-sm",
  md: undefined, // default
  lg: "checkbox-lg",
};

const COLOR_CLASS_MAP: ClassMap<CheckboxColor> = {
  default: undefined, // default
  primary: "checkbox-primary",
  secondary: "checkbox-secondary",
  accent: "checkbox-accent",
  info: "checkbox-info",
  success: "checkbox-success",
  warning: "checkbox-warning",
  error: "checkbox-error",
};
</script>

<script setup lang="ts">
interface Props {
  size?: Size;
  color?: CheckboxColor;
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
    :class="['checkbox', SIZE_CLASS_MAP[size], COLOR_CLASS_MAP[color]]"
    @change="$emit('update:checked', ($event.target as HTMLInputElement).checked)"
    :checked="checked"
    :disabled="disabled"
  />
</template>
