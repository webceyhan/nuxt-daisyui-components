<script lang="ts">
import { ClassMap, Color } from "./types";

type LinkColor = Exclude<Color, "ghost">;

const COLOR_CLASS_MAP: ClassMap<LinkColor> = {
  default: undefined, // default
  neutral: "link-neutral",
  primary: "link-primary",
  secondary: "link-secondary",
  accent: "link-accent",
  info: "link-info",
  success: "link-success",
  warning: "link-warning",
  error: "link-error",
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
