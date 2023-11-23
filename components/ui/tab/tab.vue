<script setup lang="ts">
export interface Props {
  active?: boolean;
  disabled?: boolean;
}

defineProps<Props>();
</script>

<template>
  <a
    role="tab"
    :class="[
      'tab',
      {
        'tab-active': active,
        'tab-disabled': disabled,
        indicator: !!$slots.indicator,
      },
    ]"
  >
    <span v-if="$slots.indicator" class="indicator-item">
      <slot name="indicator" />
    </span>

    <slot />
  </a>
</template>
