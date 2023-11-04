<script lang="ts">
export const SNAP_CLASS_MAP = {
  start: undefined, // default
  center: "carousel-center",
  end: "carousel-end",
};
</script>

<script setup lang="ts">
export interface Props {
  snap?: keyof typeof SNAP_CLASS_MAP;
  vertical?: boolean;
}

withDefaults(defineProps<Props>(), {
  snap: "start",
});
</script>

<template>
  <div
    :class="[
      'carousel',
      SNAP_CLASS_MAP[snap],
      {
        'carousel-vertical': vertical,
      },
    ]"
  >
    <slot />
  </div>
</template>
