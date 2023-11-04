<script lang="ts">
export const SIZE_CLASS_MAP = {
  xs: "select-xs",
  sm: "select-sm",
  md: undefined, // default
  lg: "select-lg",
};

export const COLOR_CLASS_MAP = {
  default: undefined, // default
  primary: "select-primary",
  secondary: "select-secondary",
  accent: "select-accent",
  info: "select-info",
  success: "select-success",
  warning: "select-warning",
  error: "select-error",
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
  <select
    :class="[
      'select w-full',
      SIZE_CLASS_MAP[size],
      COLOR_CLASS_MAP[color],
      {
        'select-ghost': ghost,
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
