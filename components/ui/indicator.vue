<script lang="ts">
import { Alignment, ClassMap, VerticalAlignment } from "./types";

export const INDICATOR_ALIGNMENT_CLASS_MAP: ClassMap<Alignment> = {
  start: "indicator-start",
  center: "indicator-center",
  end: undefined, // default
};

export const INDICATOR_VERTICAL_ALIGNMENT_CLASS_MAP: ClassMap<VerticalAlignment> = {
  top: undefined, // default
  middle: "indicator-middle",
  bottom: "indicator-bottom",
};
</script>

<script setup lang="ts">
interface Props {
  itemClass?: string;
  alignment?: Alignment;
  verticalAlignment?: VerticalAlignment;
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
        INDICATOR_ALIGNMENT_CLASS_MAP[alignment],
        INDICATOR_VERTICAL_ALIGNMENT_CLASS_MAP[verticalAlignment],
        itemClass,
      ]"
    >
      <slot name="item" />
    </span>

    <!-- content -->
    <slot />
  </div>
</template>
