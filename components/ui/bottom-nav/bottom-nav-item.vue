<script setup lang="ts">
export interface Props {
  label?: string;
  icon?: string;
  active?: boolean;
  disabled?: boolean;
}

defineProps<Props>();
</script>

<template>
  <button :class="{ active }" :disabled="disabled">
    <slot>
      <ui-icon v-if="icon" :name="icon" />
    </slot>

    <span v-if="label" class="btm-nav-label">{{ label }}</span>
  </button>
</template>
