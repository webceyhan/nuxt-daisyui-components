<script lang="ts">
import { ClassMap, Size } from "./types";

const SIZE_CLASS_MAP: ClassMap<Size> = {
  xs: "table-xs",
  sm: "table-sm",
  md: undefined, // default
  lg: "table-lg",
};
</script>

<script setup lang="ts">
interface Props {
  size?: Size;
  zebra?: boolean;
  pinRows?: boolean;
  pinCols?: boolean;
}

withDefaults(defineProps<Props>(), {
  size: "md",
});
</script>

<template>
  <table
    :class="[
      'table',
      SIZE_CLASS_MAP[size],
      {
        'table-zebra': zebra,
        'table-pin-rows': pinRows,
        'table-pin-cols': pinCols,
      },
    ]"
  >
    <slot />
  </table>
</template>
