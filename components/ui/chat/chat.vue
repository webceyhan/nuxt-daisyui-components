<script lang="ts">
export const ALIGNMENT_CLASS_MAP = {
  start: "chat-start",
  end: "chat-end",
};

export const COLOR_CLASS_MAP = {
  default: undefined, // default
  primary: "chat-bubble-primary",
  secondary: "chat-bubble-secondary",
  accent: "chat-bubble-accent",
  info: "chat-bubble-info",
  success: "chat-bubble-success",
  warning: "chat-bubble-warning",
  error: "chat-bubble-error",
};
</script>

<script setup lang="ts">
export interface Props {
  color?: keyof typeof COLOR_CLASS_MAP;
  alignment?: keyof typeof ALIGNMENT_CLASS_MAP;
}

withDefaults(defineProps<Props>(), {
  color: "default",
  alignment: "start",
});
</script>

<template>
  <div :class="['chat', ALIGNMENT_CLASS_MAP[alignment]]">
    <!-- avatar -->
    <div v-if="$slots.avatar" class="chat-image avatar">
      <slot name="avatar" />
    </div>

    <!-- header -->
    <div v-if="$slots.header" class="chat-header">
      <slot name="header" />
    </div>

    <!-- bubble -->
    <div :class="['chat-bubble', COLOR_CLASS_MAP[color]]">
      <slot />
    </div>

    <!-- footer -->
    <div v-if="$slots.footer" class="chat-footer">
      <slot name="footer" />
    </div>
  </div>
</template>
