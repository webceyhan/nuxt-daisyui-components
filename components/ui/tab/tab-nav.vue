<script setup lang="ts">
export interface Props {
  boxed?: boolean;
}

defineProps<Props>();
</script>

<template>
  <div :class="['tabs', { 'tabs-boxed': boxed }]">
    <slot />
  </div>
</template>
