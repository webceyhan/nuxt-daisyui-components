<script setup lang="ts">
import { COLLAPSE_INDICATOR_CLASS_MAP } from "./collapse.vue";

export interface Props {
  name?: string;
  open?: boolean;
  indicator?: keyof typeof COLLAPSE_INDICATOR_CLASS_MAP;
}

withDefaults(defineProps<Props>(), {
  indicator: "none",
});
</script>

<template>
  <div :class="['collapse bg-base-200', COLLAPSE_INDICATOR_CLASS_MAP[indicator]]">
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
