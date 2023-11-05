<script setup lang="ts">
export interface Props {
  vertical?: boolean;
}

defineProps<Props>();
</script>

<template>
  <div :class="['stats', { 'stats-vertical': vertical }]">
    <slot />
  </div>
</template>
