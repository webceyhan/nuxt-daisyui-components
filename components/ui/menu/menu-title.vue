<script setup lang="ts">
export interface Props {
  label?: string;
}

defineProps<Props>();
</script>

<template>
  <li>
    <h2 class="menu-title">
      <slot> {{ label }} </slot>
    </h2>
  </li>
</template>
