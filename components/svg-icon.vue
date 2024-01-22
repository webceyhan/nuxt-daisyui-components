<script setup lang="ts">
interface Props {
  name: string;
}

defineProps<Props>();
</script>

<template>
  <svg class="fill-current stroke-current">
    <use :xlink:href="`/icons.svg#icon-${name}`" />
  </svg>
</template>
