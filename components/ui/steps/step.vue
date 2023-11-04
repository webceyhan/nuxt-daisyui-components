<script lang="ts">
export const STEP_COLOR_CLASS_MAP = {
  default: undefined, // default
  primary: "step-primary",
  secondary: "step-secondary",
  accent: "step-accent",
  info: "step-info",
  success: "step-success",
  warning: "step-warning",
  error: "step-error",
  neutral: "step-neutral",
};
</script>

<script setup lang="ts">
export interface Props {
  color?: keyof typeof STEP_COLOR_CLASS_MAP;
}

withDefaults(defineProps<Props>(), {
  color: "default",
});
</script>

<template>
  <li :class="['step', STEP_COLOR_CLASS_MAP[color]]">
    <slot />
  </li>
</template>
