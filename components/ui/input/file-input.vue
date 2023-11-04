<script lang="ts">
export const SIZE_CLASS_MAP = {
  xs: "file-input-xs",
  sm: "file-input-sm",
  md: undefined, // default
  lg: "file-input-lg",
};

export const COLOR_CLASS_MAP = {
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
export interface Props {
  size?: keyof typeof SIZE_CLASS_MAP;
  color?: keyof typeof COLOR_CLASS_MAP;
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
      SIZE_CLASS_MAP[size],
      COLOR_CLASS_MAP[color],
      {
        'file-input-bordered': bordered,
      },
    ]"
    :value="modelValue"
    :disabled="disabled"
    @input=" $emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>
