<script lang="ts">
import { ClassMap, Color } from "./types";

type ChatAlign = "start" | "end";

type ChatColor = Exclude<Color, "neutral" | "ghost">;

const ALIGN_MAP: ClassMap<ChatAlign> = {
  start: "chat-start",
  end: "chat-end",
};

const COLOR_CLASS_MAP: ClassMap<ChatColor> = {
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
  align?: ChatAlign;
  color?: ChatColor;
}

withDefaults(defineProps<Props>(), {
  align: "start",
  color: "default",
});
</script>

<template>
  <div :class="['chat', ALIGN_MAP[align]]">
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
