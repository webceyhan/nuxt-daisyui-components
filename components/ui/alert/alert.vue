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
  icon?: string;
  title?: string;
  message?: string;
  color?: AlertColor;
}

const props = withDefaults(defineProps<Props>(), {
  color: "default",
});

const iconClasses = computed(() => ({
  "text-3xl": props.title,
  "text-info": props.color === "default",
}));
</script>

<template>
  <div :class="['alert', ALERT_COLOR_CLASS_MAP[color]]">
    <slot name="icon">
      <ui-icon v-if="icon" :name="icon" :class="iconClasses" />
    </slot>

    <div v-if="title">
      <h3 class="font-bold">{{ title }}</h3>
      <p class="text-xs">{{ message }}</p>
    </div>

    <template v-else>
      <slot>{{ message }}</slot>
    </template>

    <div v-if="$slots.actions">
      <slot name="actions" />
    </div>
  </div>
</template>
