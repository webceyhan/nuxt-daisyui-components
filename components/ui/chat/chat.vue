<script setup lang="ts">
import type { Alignment, Color } from "../types";

/**
 * DaisyUI classes to be included in the bundle!
 *
 * Alignment:
 * - chat-start // default
 * - chat-end
 * - chat-center
 *
 * Color:
 * - chat-bubble-primary
 * - chat-bubble-secondary
 * - chat-bubble-accent
 * - chat-bubble-info
 * - chat-bubble-success
 * - chat-bubble-warning
 * - chat-bubble-error
 */
export interface Props {
  color?: Color;
  alignment?: Alignment;
}

withDefaults(defineProps<Props>(), {
  alignment: "start",
});
</script>

<template>
  <div
    :class="[
      'chat',
      {
        [`chat-${alignment}`]: alignment,
      },
    ]"
  >
    <!-- avatar -->
    <div v-if="$slots.avatar" class="chat-image avatar">
      <slot name="avatar" />
    </div>

    <!-- header -->
    <div v-if="$slots.header" class="chat-header">
      <slot name="header" />
    </div>

    <!-- bubble -->
    <div
      :class="[
        'chat-bubble',
        {
          [`chat-bubble-${color}`]: color,
        },
      ]"
    >
      <slot />
    </div>

    <!-- footer -->
    <div v-if="$slots.footer" class="chat-footer">
      <slot name="footer" />
    </div>
  </div>
</template>
