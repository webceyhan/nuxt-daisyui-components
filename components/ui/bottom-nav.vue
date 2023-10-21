<script lang="ts">
import { ClassMap, Size } from "./types";

const SIZE_CLASS_MAP: ClassMap<Size> = {
  xs: "btm-nav-xs",
  sm: "btm-nav-sm",
  md: undefined, // default
  lg: "btm-nav-lg",
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
  <div :class="['btm-nav', SIZE_CLASS_MAP[size]]">
    <slot />
  </div>
</template>
