<script lang="ts">
import { ClassMap, Mask } from "./types";

export const MASK_CLASS_MAP: ClassMap<Mask> = {
  squircle: "mask-squircle",
  heart: "mask-heart",
  hexagon: "mask-hexagon",
  "hexagon-2": "mask-hexagon-2",
  decagon: "mask-decagon",
  pentagon: "mask-pentagon",
  diamond: "mask-diamond",
  square: "mask-square",
  circle: "mask-circle",
  parallelogram: "mask-parallelogram",
  "parallelogram-2": "mask-parallelogram-2",
  "parallelogram-3": "mask-parallelogram-3",
  "parallelogram-4": "mask-parallelogram-4",
  star: "mask-star",
  "star-2": "mask-star-2",
  triangle: "mask-triangle",
  "triangle-2": "mask-triangle-2",
  "triangle-3": "mask-triangle-3",
  "triangle-4": "mask-triangle-4",
};
</script>

<script setup lang="ts">
interface Props {
  shape?: Mask;
  firstHalf?: boolean;
  lastHalf?: boolean;
}

withDefaults(defineProps<Props>(), {
  shape: "squircle",
});
</script>

<template>
  <div
    :class="[
      'mask',
      MASK_CLASS_MAP[shape],
      {
        'mask-half-1': firstHalf,
        'mask-half-2': lastHalf,
      },
    ]"
  >
    <slot />
  </div>
</template>
