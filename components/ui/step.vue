<script lang="ts">
import { ClassMap, Color } from "./types";

type StepColor = Color | "neutral";

const COLOR_CLASS_MAP: ClassMap<StepColor> = {
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
interface Props {
  color?: StepColor;
}

withDefaults(defineProps<Props>(), {
  color: "default",
});
</script>

<template>
  <li :class="['step', COLOR_CLASS_MAP[color]]">
    <slot />
  </li>
</template>
