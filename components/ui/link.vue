<script lang="ts">
import { ClassMap, Color } from "./types";

type LinkColor = Color | "neutral";

const COLOR_CLASS_MAP: ClassMap<LinkColor> = {
  default: undefined, // default
  primary: "link-primary",
  secondary: "link-secondary",
  accent: "link-accent",
  info: "link-info",
  success: "link-success",
  warning: "link-warning",
  error: "link-error",
  neutral: "link-neutral",
};
</script>

<script setup lang="ts">
interface Props {
  color?: LinkColor;
  hover?: boolean;
}

withDefaults(defineProps<Props>(), {
  color: "default",
});
</script>

<template>
  <a
    :class="[
      'link',
      COLOR_CLASS_MAP[color],
      {
        'link-hover': hover,
      },
    ]"
  >
    <slot />
  </a>
</template>
