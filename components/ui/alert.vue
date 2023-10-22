<script lang="ts">
import { ClassMap, StateColor } from "./types";

type AlertColor = "default" | StateColor;

const COLOR_CLASS_MAP: ClassMap<AlertColor> = {
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
  <div :class="['alert', COLOR_CLASS_MAP[color]]">
    <slot />
  </div>
</template>
