<script lang="ts">
import { ClassMap, Size } from "./types";

const SIZE_CLASS_MAP: ClassMap<Size> = {
  xs: "menu-xs",
  sm: "menu-sm",
  md: undefined, // default
  lg: "menu-lg",
};
</script>

<script setup lang="ts">
interface Props {
  size?: Size;
  horizontal?: boolean;
}

withDefaults(defineProps<Props>(), {
  size: "md",
  color: "default",
});
</script>

<template>
  <ul
    :class="[
      'menu',
      SIZE_CLASS_MAP[size],
      {
        'menu-horizontal': horizontal,
      },
    ]"
  >
    <slot />
  </ul>
</template>
