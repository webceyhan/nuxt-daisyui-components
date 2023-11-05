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

// this is for radial progress
const TEXT_COLOR_CLASS_MAP = {
  default: undefined, // default
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  error: "text-error",
};
</script>

<script setup lang="ts">
export interface Props {
  value?: number;
  max?: number;
  size?: string;
  thickness?: string;
  color?: keyof typeof COLOR_CLASS_MAP;
  radial?: boolean;
}

withDefaults(defineProps<Props>(), {
  value: 0,
  max: 100,
  color: "default",
});
</script>

<template>
  <div
    v-if="radial"
    :class="['radial-progress', TEXT_COLOR_CLASS_MAP[color]]"
    :style="{
      '--value': value,
      '--size': size,
      '--thickness': thickness,
    }"
  >
    {{ value }}%
  </div>

  <progress
    v-else
    :class="['progress', COLOR_CLASS_MAP[color]]"
    :value="value"
    :max="max"
  />
</template>
