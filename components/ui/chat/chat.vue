<script lang="ts">
import { Alignment, ClassMap, Color } from "../types";

export type ChatAlignment = Exclude<Alignment, "center">;

export const CHAT_ALIGNMENT_CLASS_MAP: ClassMap<ChatAlignment> = {
  start: "chat-start",
  end: "chat-end",
};

export const CHAT_COLOR_CLASS_MAP: ClassMap<Color> = {
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
interface Props {
  color?: Color;
  alignment?: ChatAlignment;
}

withDefaults(defineProps<Props>(), {
  alignment: "start",
  color: "default",
});
</script>

<template>
  <div :class="['chat', CHAT_ALIGNMENT_CLASS_MAP[alignment]]">
    <!-- avatar -->
    <div v-if="$slots.avatar" class="chat-image avatar">
      <slot name="avatar" />
    </div>

    <!-- header -->
    <div v-if="$slots.header" class="chat-header">
      <slot name="header" />
    </div>

    <!-- bubble -->
    <div :class="['chat-bubble', CHAT_COLOR_CLASS_MAP[color]]">
      <slot />
    </div>

    <!-- footer -->
    <div v-if="$slots.footer" class="chat-footer">
      <slot name="footer" />
    </div>
  </div>
</template>
