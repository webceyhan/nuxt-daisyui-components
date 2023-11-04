<script lang="ts">
export const SIZE_CLASS_MAP = {
  xs: "toggle-xs",
  sm: "toggle-sm",
  md: undefined, // default
  lg: "toggle-lg",
};

export const COLOR_CLASS_MAP = {
  default: undefined, // default
  primary: "toggle-primary",
  secondary: "toggle-secondary",
  accent: "toggle-accent",
  info: "toggle-info",
  success: "toggle-success",
  warning: "toggle-warning",
  error: "toggle-error",
};
</script>

<script setup lang="ts">
export interface Props {
  size?: keyof typeof SIZE_CLASS_MAP;
  color?: keyof typeof COLOR_CLASS_MAP;
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
    :class="['toggle', SIZE_CLASS_MAP[size], COLOR_CLASS_MAP[color]]"
    @change="$emit('update:checked', ($event.target as HTMLInputElement).checked)"
    :checked="checked"
    :disabled="disabled"
  />
</template>
