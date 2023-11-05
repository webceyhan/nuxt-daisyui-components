<script lang="ts">
export const SIZE_CLASS_MAP = {
  xs: "loading-xs",
  sm: "loading-sm",
  md: undefined, // default
  lg: "loading-lg",
};

export const ANIMATION_CLASS_MAP = {
  spinner: "loading-spinner", // default
  dots: "loading-dots",
  ring: "loading-ring",
  ball: "loading-ball",
  bars: "loading-bars",
  infinity: "loading-infinity",
};
</script>

<script setup lang="ts">
export interface Props {
  size?: keyof typeof SIZE_CLASS_MAP;
  animation?: keyof typeof ANIMATION_CLASS_MAP;
}

withDefaults(defineProps<Props>(), {
  size: "md",
  animation: "spinner",
});
</script>

<template>
  <span :class="['loading', SIZE_CLASS_MAP[size], ANIMATION_CLASS_MAP[animation]]" />
</template>
