<script lang="ts">
export const SIZE_CLASS_MAP = {
  xs: "kbd-xs",
  sm: "kbd-sm",
  md: undefined, // default
  lg: "kbd-lg",
};
</script>

<script setup lang="ts">
export interface Props {
  size?: keyof typeof SIZE_CLASS_MAP;
}

withDefaults(defineProps<Props>(), {
  size: "md",
});
</script>

<template>
  <kbd :class="['kbd', SIZE_CLASS_MAP[size]]">
    <slot />
  </kbd>
</template>
