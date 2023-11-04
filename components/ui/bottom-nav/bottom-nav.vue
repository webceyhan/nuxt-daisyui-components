<script lang="ts">
export const BOTTOM_NAV_SIZE_CLASS_MAP = {
  xs: "btm-nav-xs",
  sm: "btm-nav-sm",
  md: undefined, // default
  lg: "btm-nav-lg",
};
</script>

<script setup lang="ts">
export interface Props {
  size?: keyof typeof BOTTOM_NAV_SIZE_CLASS_MAP;
}

withDefaults(defineProps<Props>(), {
  size: "md",
});
</script>

<template>
  <div :class="['btm-nav', BOTTOM_NAV_SIZE_CLASS_MAP[size]]">
    <slot />
  </div>
</template>
