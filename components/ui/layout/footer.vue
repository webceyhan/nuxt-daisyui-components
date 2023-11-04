<script setup lang="ts">
export interface Props {
  center?: boolean;
}

defineProps<Props>();
</script>

<template>
  <footer :class="['footer', { 'footer-center': center }]">
    <slot />
  </footer>
</template>
