<script lang="ts">
import { ClassMap, Color } from "./types";

const COLOR_CLASS_MAP: ClassMap<Color> = {
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
interface Props {
  value?: number;
  max?: number;
  color?: Color;
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
