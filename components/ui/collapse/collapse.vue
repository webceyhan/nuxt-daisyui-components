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
  title?: string;
  icon?: string;
  name?: string;
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
        // force open when toggle is not provided
        'collapse-open': open && !toggle && !name,
        [`collapse-${indicator}`]: indicator,
      },
    ]"
  >
    <!-- accordion toggle -->
    <input v-if="name" type="radio" :name="name" :checked="open" />

    <!-- collapse toggle -->
    <input v-else-if="toggle" type="checkbox" :checked="open" />

    <!-- title -->
    <div class="collapse-title text-xl font-medium">
      <slot name="title">
        <ui-icon v-if="icon" :name="icon" class="mr-2" />
        {{ title }}
      </slot>
    </div>

    <!-- content -->
    <div class="collapse-content">
      <slot />
    </div>
  </div>
</template>
