<script setup lang="ts">
interface Props {
  vertical?: boolean;
}

defineProps<Props>();
</script>

<template>
  <ul :class="['steps', { 'steps-vertical': vertical }]">
    <slot />
  </ul>
</template>
