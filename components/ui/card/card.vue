<script setup lang="ts">
export interface Props {
  bodyClass?: string;
  compact?: boolean;
  coverOverlay?: boolean;
  coverAside?: boolean;
}

defineProps<Props>();
</script>

<template>
  <div
    :class="[
      'card',
      {
        'image-full': coverOverlay,
        'card-compact': compact,
        'card-side': coverAside,
      },
    ]"
  >
    <!-- cover -->
    <figure v-if="$slots.cover">
      <slot name="cover" />
    </figure>

    <!-- body -->
    <div :class="['card-body', bodyClass]">
      <!-- title -->
      <h2 v-if="$slots.title" class="card-title">
        <slot name="title" />
      </h2>

      <!-- content -->
      <slot />

      <!-- actions -->
      <div v-if="$slots.actions" class="card-actions justify-end">
        <slot name="actions" />
      </div>
    </div>

    <!-- cover bottom -->
    <figure v-if="$slots['cover-bottom']">
      <slot name="cover-bottom" />
    </figure>
  </div>
</template>
