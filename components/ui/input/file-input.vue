<script lang="ts">
import { ClassMap, Color, Size } from "../types";

export type FileInputColor = Color | "ghost";

export const FILE_INPUT_SIZE_CLASS_MAP: ClassMap<Size> = {
  xs: "file-input-xs",
  sm: "file-input-sm",
  md: undefined, // default
  lg: "file-input-lg",
};

export const FILE_INPUT_COLOR_CLASS_MAP: ClassMap<FileInputColor> = {
  default: undefined, // default
  primary: "file-input-primary",
  secondary: "file-input-secondary",
  accent: "file-input-accent",
  info: "file-input-info",
  success: "file-input-success",
  warning: "file-input-warning",
  error: "file-input-error",
  ghost: "file-input-ghost",
};
</script>

<script setup lang="ts">
interface Props {
  size?: Size;
  color?: FileInputColor;
  modelValue?: string;
  disabled?: boolean;
  bordered?: boolean;
}

defineEmits(["update:modelValue"]);

withDefaults(defineProps<Props>(), {
  size: "md",
  color: "default",
});
</script>

<template>
  <input
    type="file"
    :class="[
      'file-input w-full',
      FILE_INPUT_SIZE_CLASS_MAP[size],
      FILE_INPUT_COLOR_CLASS_MAP[color],
      {
        'file-input-bordered': bordered,
      },
    ]"
    :value="modelValue"
    :disabled="disabled"
    @input=" $emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>
