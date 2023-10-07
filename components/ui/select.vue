<script lang="ts">
import { ClassMap, Color, Size } from "./types";

type SelectColor = Exclude<Color, "neutral">;

const SIZE_CLASS_MAP: ClassMap<Size> = {
  xs: "select-xs",
  sm: "select-sm",
  md: undefined, // default
  lg: "select-lg",
};

const COLOR_CLASS_MAP: ClassMap<SelectColor> = {
  default: undefined, // default
  primary: "select-primary",
  secondary: "select-secondary",
  accent: "select-accent",
  ghost: "select-ghost",
  info: "select-info",
  success: "select-success",
  warning: "select-warning",
  error: "select-error",
};
</script>

<script setup lang="ts">
interface Props {
  size?: Size;
  color?: SelectColor;
  modelValue?: string;
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
  <select
    :class="[
      'select w-full',
      SIZE_CLASS_MAP[size],
      COLOR_CLASS_MAP[color],
      {
        'select-bordered': bordered,
      },
    ]"
    @change="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    :value="modelValue"
    :disabled="disabled"
  >
    <slot />
  </select>
</template>
