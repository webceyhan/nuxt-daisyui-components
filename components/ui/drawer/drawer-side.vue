<script setup lang="ts">
const id = inject<string>("drawer-id", "drawer-0");
</script>

<template>
  <aside class="drawer-side">
    <label :for="id" class="drawer-overlay" />
    <slot />
  </aside>
</template>
