<script lang="ts">
import { ClassMap, Size, Mask } from "../types";
import { MASK_CLASS_MAP } from "../layout/mask.vue";

export const RATING_SIZE_CLASS_MAP: ClassMap<Size> = {
  xs: "rating-xs",
  sm: "rating-sm",
  md: undefined, // default
  lg: "rating-lg",
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
  <div :class="['rating', RATING_SIZE_CLASS_MAP[size]]">
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
