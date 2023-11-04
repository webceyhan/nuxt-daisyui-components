<script setup lang="ts">
export interface Props {
  value: number;
  size?: string;
  thickness?: string;
}

withDefaults(defineProps<Props>(), {
  value: 0,
});
</script>

<template>
  <div
    class="radial-progress"
    :style="{
      '--value': value,
      '--size': size,
      '--thickness': thickness,
    }"
  >
    <slot>{{ value }}%</slot>
  </div>
</template>
