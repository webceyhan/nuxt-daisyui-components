<script setup lang="ts">
interface Props {
  ghost?: boolean;
}

defineProps<Props>();

const id = inject<string>("drawer-id", "drawer-0");
</script>

<template>
  <label
    :for="id"
    :class="[
      'btn drawer-button',
      {
        'btn-ghost': ghost,
        'btn-square': !$slots.default,
      },
    ]"
  >
    <slot>
      <ui-icon name="list" size="lg" />
    </slot>
  </label>
</template>
