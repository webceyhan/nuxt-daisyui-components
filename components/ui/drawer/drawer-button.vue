<script setup lang="ts">
const id = inject<string>("drawer-id", "drawer-0");
</script>

<template>
  <label :for="id" class="btn drawer-button">
    <slot> Open </slot>
  </label>
</template>
