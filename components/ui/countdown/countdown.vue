<script setup lang="ts">
interface Props {
  value?: number;
}

defineProps<Props>();
</script>

<template>
  <span class="countdown">
    <slot>
      <span :style="{ '--value': value }" />
    </slot>
  </span>
</template>
