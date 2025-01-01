<script setup lang="ts">
import type { StateColor } from "../types";

/**
 * DaisyUI classes to be included in the bundle!
 *
 * Color:
 * - alert-info
 * - alert-success
 * - alert-warning
 * - alert-error
 */
export interface Props {
  icon?: string;
  title?: string;
  message?: string;
  color?: StateColor;
}

defineProps<Props>();
</script>

<template>
  <div
    :class="[
      'alert',
      {
        [`alert-${color}`]: color,
      },
    ]"
  >
    <slot name="icon">
      <ui-icon v-if="icon" :name="icon" :class="{ 'text-info': !color }" />
    </slot>

    <div v-if="title">
      <h3 class="font-bold">{{ title }}</h3>
      <p class="text-xs">{{ message }}</p>
    </div>

    <template v-else>
      <slot>{{ message }}</slot>
    </template>

    <div v-if="$slots.actions">
      <slot name="actions" />
    </div>
  </div>
</template>
