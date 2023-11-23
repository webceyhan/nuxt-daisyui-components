<script setup lang="ts">
export interface Props {
  label: string;
}

defineProps<Props>();
</script>

<template>
  <input role="tab" type="radio" class="tab" :aria-label="label" />
</template>
