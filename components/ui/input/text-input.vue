<script lang="ts">
export const SIZE_CLASS_MAP = {
  xs: "input-xs",
  sm: "input-sm",
  md: undefined, // default
  lg: "input-lg",
};

export const COLOR_CLASS_MAP = {
  default: undefined, // default
  primary: "input-primary",
  secondary: "input-secondary",
  accent: "input-accent",
  info: "input-info",
  success: "input-success",
  warning: "input-warning",
  error: "input-error",
};
</script>

<script setup lang="ts">
export interface Props {
  modelValue?: string;
  size?: keyof typeof SIZE_CLASS_MAP;
  color?: keyof typeof COLOR_CLASS_MAP;
  ghost?: boolean;
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
        'input-ghost': ghost,
        'input-bordered': bordered,
      },
    ]"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    :value="modelValue"
    :disabled="disabled"
  />
</template>
