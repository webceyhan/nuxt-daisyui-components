<script lang="ts">
import { ClassMap, StateColor } from "../types";

export type AlertColor = "default" | StateColor;

export const ALERT_COLOR_CLASS_MAP: ClassMap<AlertColor> = {
  default: undefined, // default
  info: "alert-info",
  success: "alert-success",
  warning: "alert-warning",
  error: "alert-error",
};
</script>

<script setup lang="ts">
interface Props {
  color?: AlertColor;
}

withDefaults(defineProps<Props>(), {
  color: "default",
});
</script>

<template>
  <div :class="['alert', ALERT_COLOR_CLASS_MAP[color]]">
    <slot />
  </div>
</template>
