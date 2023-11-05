<script setup lang="ts">
export interface Props {
  flip?: boolean;
  rotate?: boolean;
  modelValue?: boolean;
}

defineEmits(["update:modelValue"]);

defineProps<Props>();
</script>

<template>
  <label
    :class="[
      'swap',
      {
        'swap-flip': flip,
        'swap-rotate': rotate,
      },
    ]"
  >
    <input
      type="checkbox"
      :checked="modelValue"
      @change="$emit('update:modelValue', !modelValue)"
    />

    <div class="swap-on">
      <slot name="on">ON</slot>
    </div>

    <div class="swap-off">
      <slot name="off"> OFF</slot>
    </div>
  </label>
</template>
