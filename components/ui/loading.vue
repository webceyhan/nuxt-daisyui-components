<script lang="ts">
import { ClassMap, Size } from "./types";

type Animation = "spinner" | "dots" | "ring" | "ball" | "bars" | "infinity";

const SIZE_CLASS_MAP: ClassMap<Size> = {
  xs: "loading-xs",
  sm: "loading-sm",
  md: undefined, // default
  lg: "loading-lg",
};

const ANIMATION_CLASS_MAP: ClassMap<Animation> = {
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
  animation?: Animation;
}

withDefaults(defineProps<Props>(), {
  size: "md",
  animation: "spinner",
});
</script>

<template>
  <span :class="['loading', SIZE_CLASS_MAP[size], ANIMATION_CLASS_MAP[animation]]" />
</template>
