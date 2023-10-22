<script lang="ts">
import { ClassMap, Color, Size } from "./types";

const SIZE_CLASS_MAP: ClassMap<Size> = {
  xs: "range-xs",
  sm: "range-sm",
  md: undefined, // default
  lg: "range-lg",
};

const COLOR_CLASS_MAP: ClassMap<Color> = {
  default: undefined, // default
  primary: "range-primary",
  secondary: "range-secondary",
  accent: "range-accent",
  info: "range-info",
  success: "range-success",
  warning: "range-warning",
  error: "range-error",
};
</script>

<script setup lang="ts">
interface Props {
  min?: string | number;
  max?: string | number;
  step?: string | number;
  value?: string | number;
  modelValue?: string | number;
  size?: Size;
  color?: Color;
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
    type="range"
    :class="[
      'range',
      SIZE_CLASS_MAP[size],
      COLOR_CLASS_MAP[color],
      {
        // patch default disabled style
        'cursor-not-allowed': disabled,
      },
    ]"
    v-bind="{ value, min, max, step, disabled }"
    @change="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>
