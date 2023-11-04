<script lang="ts">
import { SHAPE_CLASS_MAP } from "../layout/mask.vue";

export const SIZE_CLASS_MAP = {
  xs: "rating-xs",
  sm: "rating-sm",
  md: undefined, // default
  lg: "rating-lg",
};

let count = 0;
</script>

<script setup lang="ts">
export interface Props {
  value?: number;
  modelValue?: number;
  max?: number;
  size?: keyof typeof SIZE_CLASS_MAP;
  mask?: keyof typeof SHAPE_CLASS_MAP;
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
      :class="['mask', SHAPE_CLASS_MAP[mask], itemClass, itemClasses?.[i - 1]]"
      @change="$emit('update:modelValue', i)"
    />
  </div>
</template>
