<script lang="ts">
export const ALIGNMENT_CLASS_MAP = {
  start: "indicator-start",
  center: "indicator-center",
  end: undefined, // default
};

export const VERTICAL_ALIGNMENT_CLASS_MAP = {
  top: undefined, // default
  middle: "indicator-middle",
  bottom: "indicator-bottom",
};
</script>

<script setup lang="ts">
export interface Props {
  itemClass?: string;
  alignment?: keyof typeof ALIGNMENT_CLASS_MAP;
  verticalAlignment?: keyof typeof VERTICAL_ALIGNMENT_CLASS_MAP;
}

withDefaults(defineProps<Props>(), {
  alignment: "end",
  verticalAlignment: "top",
});
</script>

<template>
  <div class="indicator">
    <!-- item -->
    <span
      class="indicator-item"
      :class="[
        ALIGNMENT_CLASS_MAP[alignment],
        VERTICAL_ALIGNMENT_CLASS_MAP[verticalAlignment],
        itemClass,
      ]"
    >
      <slot name="item" />
    </span>

    <!-- content -->
    <slot />
  </div>
</template>
