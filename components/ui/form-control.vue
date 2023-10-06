<script setup lang="ts">
interface Props {
  label?: string;
}

defineProps<Props>();
</script>

<template>
  <div class="form-control">
    <label class="label cursor-pointer space-x-2">
      <span v-if="label" class="label-text">{{ label }}</span>
      <slot />
    </label>
  </div>
</template>
