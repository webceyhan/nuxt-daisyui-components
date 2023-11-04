<script lang="ts">
export const CAROUSEL_SNAP_CLASS_MAP = {
  start: undefined, // default
  center: "carousel-center",
  end: "carousel-end",
};
</script>

<script setup lang="ts">
export interface Props {
  snap?: keyof typeof CAROUSEL_SNAP_CLASS_MAP;
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
      CAROUSEL_SNAP_CLASS_MAP[snap],
      {
        'carousel-vertical': vertical,
      },
    ]"
  >
    <slot />
  </div>
</template>
