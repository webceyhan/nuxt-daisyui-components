<script lang="ts">
export const TABLE_SIZE_CLASS_MAP = {
  xs: "table-xs",
  sm: "table-sm",
  md: undefined, // default
  lg: "table-lg",
};
</script>

<script setup lang="ts">
export interface Props {
  size?: keyof typeof TABLE_SIZE_CLASS_MAP;
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
      TABLE_SIZE_CLASS_MAP[size],
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
