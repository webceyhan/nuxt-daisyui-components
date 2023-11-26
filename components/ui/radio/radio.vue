<script setup lang="ts">
import type { Color, Size } from "../types";

/**
 * DaisyUI classes to be included in the bundle!
 *
 * Size:
 * - radio-xs
 * - radio-sm
 * - radio-md // default
 * - radio-lg
 *
 * Color:
 * - radio-primary
 * - radio-secondary
 * - radio-accent
 * - radio-info
 * - radio-success
 * - radio-warning
 * - radio-error
 */
export interface Props {
  name?: string;
  value?: string;
  modelValue?: string;
  size?: Size;
  color?: Color;
  checked?: boolean;
  disabled?: boolean;
}

const emit = defineEmits(["update:checked", "update:modelValue"]);

const props = defineProps<Props>();

const isChecked = computed(() => {
  return props.modelValue === props.value ?? props.checked;
});

function onChange(event: Event) {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
  emit("update:checked", target.checked);
}
</script>

<template>
  <input
    type="radio"
    :class="[
      'radio',
      {
        [`radio-${size}`]: size,
        [`radio-${color}`]: color,
      },
    ]"
    v-bind="{ name, value, checked: isChecked, disabled }"
    @change="onChange"
  />
</template>
