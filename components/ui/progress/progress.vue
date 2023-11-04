<script lang="ts">
export const COLOR_CLASS_MAP = {
  default: undefined, // default
  primary: "progress-primary",
  secondary: "progress-secondary",
  accent: "progress-accent",
  info: "progress-info",
  success: "progress-success",
  warning: "progress-warning",
  error: "progress-error",
};
</script>

<script setup lang="ts">
export interface Props {
  value?: number;
  max?: number;
  color?: keyof typeof COLOR_CLASS_MAP;
}

withDefaults(defineProps<Props>(), {
  value: 0,
  max: 100,
  color: "default",
});
</script>

<template>
  <progress :class="['progress', COLOR_CLASS_MAP[color]]" :value="value" :max="max" />
</template>
