<script lang="ts">
import { ClassMap, Color, Size } from "../types";

export type TextInputColor = Color | "ghost";

export const TEXT_INPUT_SIZE_CLASS_MAP: ClassMap<Size> = {
  xs: "input-xs",
  sm: "input-sm",
  md: undefined, // default
  lg: "input-lg",
};

export const TEXT_INPUT_COLOR_CLASS_MAP: ClassMap<TextInputColor> = {
  default: undefined, // default
  primary: "input-primary",
  secondary: "input-secondary",
  accent: "input-accent",
  info: "input-info",
  success: "input-success",
  warning: "input-warning",
  error: "input-error",
  ghost: "input-ghost",
};
</script>

<script setup lang="ts">
interface Props {
  modelValue?: string;
  size?: Size;
  placeholder?: string;
  color?: TextInputColor;
  bordered?: boolean;
  disabled?: boolean;
}

defineEmits(["update:modelValue"]);

withDefaults(defineProps<Props>(), {
  size: "md",
  color: "default",
});
</script>

<template>
  <input
    type="text"
    :class="[
      'input',
      TEXT_INPUT_SIZE_CLASS_MAP[size],
      TEXT_INPUT_COLOR_CLASS_MAP[color],
      {
        'input-bordered': bordered,
      },
    ]"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="disabled"
  />
</template>
