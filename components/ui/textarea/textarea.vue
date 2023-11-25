<script setup lang="ts">
import type { Color, Size } from "../types";

/**
 * DaisyUI classes to be included in the bundle!
 *
 * Size:
 * - textarea-xs
 * - textarea-sm
 * - textarea-md // default
 * - textarea-lg
 *
 * Color:
 * - textarea-primary
 * - textarea-secondary
 * - textarea-accent
 * - textarea-info
 * - textarea-success
 * - textarea-warning
 * - textarea-error
 */
export interface Props {
  modelValue?: string;
  size?: Size;
  color?: Color;
  ghost?: boolean;
  bordered?: boolean;
  disabled?: boolean;
}

const emit = defineEmits(["update:modelValue"]);

const props = defineProps<Props>();

const valueProxy = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <textarea
    :class="[
      'textarea',
      {
        [`textarea-${size}`]: size,
        [`textarea-${color}`]: color,
        'textarea-ghost': ghost,
        'textarea-bordered': bordered,
      },
    ]"
    :disabled="disabled"
    v-model="valueProxy"
  />
</template>
