<script setup lang="ts">
interface Props {
  label?: string;
  inline?: boolean;
}

defineProps<Props>();
</script>

<template>
  <div class="form-control">
    <!-- inline (checkbox, radio..) -->
    <label v-if="inline" class="label cursor-pointer space-x-2">
      <span v-if="label" class="label-text">{{ label }}</span>
      <slot />
    </label>

    <!-- block (input, textarea, select..) -->
    <template v-else>
      <label class="label">
        <span v-if="label" class="label-text">{{ label }}</span>
      </label>
      <slot />
    </template>
  </div>
</template>
