<script setup lang="ts">
export interface Props {
  horizontal?: boolean;
}

defineProps<Props>();
</script>

<template>
  <div :class="['divider', { 'divider-horizontal': horizontal }]">
    <slot />
  </div>
</template>
