<script lang="ts">
export const CHECKBOX_SIZE_CLASS_MAP = {
  xs: "checkbox-xs",
  sm: "checkbox-sm",
  md: undefined, // default
  lg: "checkbox-lg",
};

export const CHECKBOX_COLOR_CLASS_MAP = {
  default: undefined, // default
  primary: "checkbox-primary",
  secondary: "checkbox-secondary",
  accent: "checkbox-accent",
  info: "checkbox-info",
  success: "checkbox-success",
  warning: "checkbox-warning",
  error: "checkbox-error",
};
</script>

<script setup lang="ts">
export interface Props {
  size?: keyof typeof CHECKBOX_SIZE_CLASS_MAP;
  color?: keyof typeof CHECKBOX_COLOR_CLASS_MAP;
  checked?: boolean;
  disabled?: boolean;
}

defineEmits(["update:checked"]);

withDefaults(defineProps<Props>(), {
  size: "md",
  color: "default",
});
</script>

<template>
  <input
    type="checkbox"
    :class="['checkbox', CHECKBOX_SIZE_CLASS_MAP[size], CHECKBOX_COLOR_CLASS_MAP[color]]"
    @change="$emit('update:checked', ($event.target as HTMLInputElement).checked)"
    :checked="checked"
    :disabled="disabled"
  />
</template>
