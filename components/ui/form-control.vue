<script setup lang="ts">
export interface Props {
  label?: string;
  alt?: string;
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
      <label v-if="label" class="label">
        <span class="label-text">{{ label }}</span>
      </label>
      <slot />
      <label v-if="alt" class="label">
        <span class="label-text-alt">{{ alt }}</span>
      </label>
    </template>
  </div>
</template>
