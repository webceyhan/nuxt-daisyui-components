<script lang="ts">
import { ClassMap, Size, Mask } from "./types";

const SIZE_CLASS_MAP: ClassMap<Size> = {
  xs: "rating-xs",
  sm: "rating-sm",
  md: undefined, // default
  lg: "rating-lg",
};

const MASK_CLASS_MAP: ClassMap<Mask> = {
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

let count = 0;
</script>

<script setup lang="ts">
interface Props {
  value?: number;
  modelValue?: number;
  max?: number;
  size?: Size;
  mask?: Mask;
  disabled?: boolean;
  itemClass?: string;
  itemClasses?: string[];
}

defineEmits(["update:modelValue"]);

withDefaults(defineProps<Props>(), {
  max: 5,
  size: "md",
  mask: "star",
});

const name = `rating-${count++}`;
</script>

<template>
  <div :class="['rating', SIZE_CLASS_MAP[size]]">
    <input
      type="radio"
      v-for="i in max"
      :key="i"
      :name="name"
      :checked="i === (modelValue ?? value)"
      :disabled="disabled"
      :class="['mask', MASK_CLASS_MAP[mask], itemClass, itemClasses?.[i - 1]]"
      @change="$emit('update:modelValue', i)"
    />
  </div>
</template>
