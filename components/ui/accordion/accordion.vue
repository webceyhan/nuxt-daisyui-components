<script setup lang="ts">
import type { Indicator } from "../collapse/collapse.vue";

export interface Props {
  name?: string;
  indicator?: Indicator;
  open?: boolean;
}

defineProps<Props>();
</script>

<template>
  <div
    :class="[
      'collapse bg-base-200',
      {
        [`collapse-${indicator}`]: indicator,
      },
    ]"
  >
    <!-- internal toggle -->
    <input type="radio" :name="name" :checked="open" />

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
