<script lang="ts">
import { ClassMap, Size } from "./types";

export const KBD_SIZE_CLASS_MAP: ClassMap<Size> = {
  xs: "kbd-xs",
  sm: "kbd-sm",
  md: undefined, // default
  lg: "kbd-lg",
};
</script>

<script setup lang="ts">
interface Props {
  size?: Size;
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
