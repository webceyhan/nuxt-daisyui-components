<script lang="ts">
import { ClassMap, StateColor } from "./types";

const COLOR_CLASS_MAP: ClassMap<StateColor> = {
  default: undefined, // default
  info: "alert-info",
  success: "alert-success",
  warning: "alert-warning",
  error: "alert-error",
};
</script>

<script setup lang="ts">
interface Props {
  color?: StateColor;
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
