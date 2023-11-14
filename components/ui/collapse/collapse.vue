<script setup lang="ts">
/**
 * DaisyUI classes to be included in the bundle!
 *
 * Indicator:
 * - collapse-arrow
 * - collapse-plus
 */
export type Indicator = "arrow" | "plus";

export interface Props {
  open?: boolean;
  toggle?: boolean;
  indicator?: Indicator;
}

defineProps<Props>();
</script>

<template>
  <div
    tabindex="0"
    :class="[
      'collapse bg-base-200',
      {
        // force open when toggle is not active
        'collapse-open': open && !toggle,
        [`collapse-${indicator}`]: indicator,
      },
    ]"
  >
    <!-- internal toggle -->
    <input v-if="toggle" type="checkbox" :checked="open" />

    <!-- title -->
    <div class="collapse-title text-xl font-medium">
      <slot name="title" />
    </div>

    <!-- content -->
    <div class="collapse-content">
      <slot />
    </div>
  </div>
</template>
