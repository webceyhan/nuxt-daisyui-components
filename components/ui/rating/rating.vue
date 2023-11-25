<script lang="ts">
let count = 0;
</script>

<script setup lang="ts">
import type { Mask, Size } from "../types";

/**
 * DaisyUI classes to be included in the bundle!
 *
 * Size:
 * - rating-xs
 * - rating-sm
 * - rating-md // default
 * - rating-lg
 */
export interface Props {
  modelValue?: number;
  value?: number;
  max?: number;
  itemClass?: string;
  itemClasses?: string[];
  mask?: Mask;
  size?: Size;
  disabled?: boolean;
}

defineEmits(["update:modelValue"]);

withDefaults(defineProps<Props>(), {
  max: 5,
  mask: "star",
});

const name = `rating-${count++}`;
</script>

<template>
  <div
    :class="[
      'rating',
      {
        [`rating-${size}`]: size,
      },
    ]"
  >
    <input
      type="radio"
      v-for="i in max"
      :key="i"
      :name="name"
      :checked="i === (modelValue ?? value)"
      :disabled="disabled"
      :class="[
        'mask',
        {
          [`mask-${mask}`]: mask,
        },
        itemClass,
        itemClasses?.[i - 1],
      ]"
      @change="$emit('update:modelValue', i)"
    />
  </div>
</template>
