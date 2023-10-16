<script lang="ts">
import { ClassMap, Size } from "./types";

const SIZE_CLASS_MAP: ClassMap<Size> = {
  xs: "tab-xs",
  sm: "tab-sm",
  md: undefined, // default
  lg: "tab-lg",
};
</script>

<script setup lang="ts">
interface Props {
  size?: Size;
  active?: boolean;
  lifted?: boolean;
  bordered?: boolean;
  disabled?: boolean;
}

withDefaults(defineProps<Props>(), {
  size: "md",
});
</script>

<template>
  <button
    :class="[
      'tab',
      SIZE_CLASS_MAP[size],
      {
        'tab-active': active,
        'tab-lifted': lifted,
        'tab-bordered': bordered,
        'tab-disabled': disabled,
      },
    ]"
  >
    <slot />
  </button>
</template>
