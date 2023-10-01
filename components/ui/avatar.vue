<script setup lang="ts">
interface Props {
  online?: boolean;
  offline?: boolean;
  placeholder?: boolean;
}

defineProps<Props>();
</script>

<template>
  <div :class="['avatar', { online, offline, placeholder }]">
    <slot />
  </div>
</template>
