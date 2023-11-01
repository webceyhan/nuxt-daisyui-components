<script setup lang="ts">
interface Props {
  horizontal?: boolean;
}

defineProps<Props>();
</script>

<template>
  <div :class="['divider', { 'divider-horizontal': horizontal }]">
    <slot />
  </div>
</template>
