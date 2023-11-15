<script setup lang="ts">
export interface Props {
  online?: boolean;
  offline?: boolean;
  placeholder?: boolean;
}

defineProps<Props>();
</script>

<template>
  <div
    :class="[
      'avatar',
      {
        online,
        offline,
        placeholder,
        indicator: !!$slots.indicator,
      },
    ]"
  >
    <span v-if="$slots.indicator" class="indicator-item">
      <slot name="indicator" />
    </span>

    <slot />
  </div>
</template>
