<script lang="ts">
import "bootstrap-icons/font/bootstrap-icons.min.css";
</script>

<script setup lang="ts">
export interface Props {
  name: string;
}

defineProps<Props>();
</script>

<template>
  <i :class="['bi', `bi-${name}`]" />
</template>
