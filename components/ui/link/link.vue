<script lang="ts">
export const LINK_COLOR_CLASS_MAP = {
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
export interface Props {
  color?: keyof typeof LINK_COLOR_CLASS_MAP;
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
      LINK_COLOR_CLASS_MAP[color],
      {
        'link-hover': hover,
      },
    ]"
  >
    <slot />
  </a>
</template>
