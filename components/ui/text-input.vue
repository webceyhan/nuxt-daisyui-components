<script lang="ts">
import { ClassMap, Color, Size } from "./types";

type InputColor = Exclude<Color, "neutral">;

const SIZE_CLASS_MAP: ClassMap<Size> = {
  xs: "input-xs",
  sm: "input-sm",
  md: undefined, // default
  lg: "input-lg",
};

const COLOR_CLASS_MAP: ClassMap<InputColor> = {
  default: undefined, // default
  primary: "input-primary",
  secondary: "input-secondary",
  accent: "input-accent",
  ghost: "input-ghost",
  info: "input-info",
  success: "input-success",
  warning: "input-warning",
  error: "input-error",
};
</script>

<script setup lang="ts">
interface Props {
  modelValue?: string;
  size?: Size;
  placeholder?: string;
  color?: InputColor;
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
      SIZE_CLASS_MAP[size],
      COLOR_CLASS_MAP[color],
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
