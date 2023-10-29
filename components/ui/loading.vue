<script lang="ts">
import { ClassMap, Size } from "./types";

export type LoadingAnimation = "spinner" | "dots" | "ring" | "ball" | "bars" | "infinity";

export const LOADING_SIZE_CLASS_MAP: ClassMap<Size> = {
  xs: "loading-xs",
  sm: "loading-sm",
  md: undefined, // default
  lg: "loading-lg",
};

export const LOADING_ANIMATION_CLASS_MAP: ClassMap<LoadingAnimation> = {
  spinner: "loading-spinner", // default
  dots: "loading-dots",
  ring: "loading-ring",
  ball: "loading-ball",
  bars: "loading-bars",
  infinity: "loading-infinity",
};
</script>

<script setup lang="ts">
interface Props {
  size?: Size;
  animation?: LoadingAnimation;
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
