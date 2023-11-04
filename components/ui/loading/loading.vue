<script lang="ts">
export const LOADING_SIZE_CLASS_MAP = {
  xs: "loading-xs",
  sm: "loading-sm",
  md: undefined, // default
  lg: "loading-lg",
};

export const LOADING_ANIMATION_CLASS_MAP = {
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
  size?: keyof typeof LOADING_SIZE_CLASS_MAP;
  animation?: keyof typeof LOADING_ANIMATION_CLASS_MAP;
}

withDefaults(defineProps<Props>(), {
  size: "md",
  animation: "spinner",
});
</script>

<template>
  <span
    :class="[
      'loading',
      LOADING_SIZE_CLASS_MAP[size],
      LOADING_ANIMATION_CLASS_MAP[animation],
    ]"
  />
</template>
