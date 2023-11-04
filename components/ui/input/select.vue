<script lang="ts">
export const SELECT_SIZE_CLASS_MAP = {
  xs: "select-xs",
  sm: "select-sm",
  md: undefined, // default
  lg: "select-lg",
};

export const SELECT_COLOR_CLASS_MAP = {
  default: undefined, // default
  primary: "select-primary",
  secondary: "select-secondary",
  accent: "select-accent",
  info: "select-info",
  success: "select-success",
  warning: "select-warning",
  error: "select-error",
  ghost: "select-ghost",
};
</script>

<script setup lang="ts">
export interface Props {
  size?: keyof typeof SELECT_SIZE_CLASS_MAP;
  color?: keyof typeof SELECT_COLOR_CLASS_MAP;
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
      SELECT_SIZE_CLASS_MAP[size],
      SELECT_COLOR_CLASS_MAP[color],
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
