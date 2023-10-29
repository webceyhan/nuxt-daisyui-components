<script setup lang="ts">
interface Props {
  boxed?: boolean;
}

defineProps<Props>();
</script>

<template>
  <button :class="['tabs', { 'tabs-boxed': boxed }]">
    <slot />
  </button>
</template>
