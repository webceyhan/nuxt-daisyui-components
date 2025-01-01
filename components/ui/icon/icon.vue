<script lang="ts">
import IconsSvg from "~/assets/icons.svg";
import type { Size } from "../types";

const SIZES: Record<Size, string> = {
  xs: "size-3",
  sm: "size-4",
  md: "size-5",
  lg: "size-6",
};
</script>

<script setup lang="ts">
export interface Props {
  name: string;
  size?: Size;
}

withDefaults(defineProps<Props>(), {
  size: "md",
});
</script>

<template>
  <svg :class="['fill-current', SIZES[size]]">
    <use :xlink:href="`${IconsSvg}#${name}`" />
  </svg>
</template>
