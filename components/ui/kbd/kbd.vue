<script lang="ts">
export const KBD_SIZE_CLASS_MAP = {
  xs: "kbd-xs",
  sm: "kbd-sm",
  md: undefined, // default
  lg: "kbd-lg",
};
</script>

<script setup lang="ts">
export interface Props {
  size?: keyof typeof KBD_SIZE_CLASS_MAP;
}

withDefaults(defineProps<Props>(), {
  size: "md",
});
</script>

<template>
  <kbd :class="['kbd', KBD_SIZE_CLASS_MAP[size]]">
    <slot />
  </kbd>
</template>
