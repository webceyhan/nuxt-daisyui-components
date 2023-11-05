<script lang="ts">
export const SIZE_CLASS_MAP = {
  xs: "range-xs",
  sm: "range-sm",
  md: undefined, // default
  lg: "range-lg",
};

export const COLOR_CLASS_MAP = {
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
export interface Props {
  min?: string | number;
  max?: string | number;
  step?: string | number;
  value?: string | number;
  modelValue?: string | number;
  size?: keyof typeof SIZE_CLASS_MAP;
  color?: keyof typeof COLOR_CLASS_MAP;
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
