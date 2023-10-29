<script lang="ts">
import { Alignment, ClassMap, VerticalAlignment } from "./types";

export const TOAST_ALIGNMENT_CLASS_MAP: ClassMap<Alignment> = {
  start: "toast-start",
  center: "toast-center",
  end: undefined, // default
};

export const TOAST_VERTICAL_ALIGNMENT_CLASS_MAP: ClassMap<VerticalAlignment> = {
  top: "toast-top",
  middle: "toast-middle",
  bottom: undefined, // default
};
</script>

<script setup lang="ts">
interface Props {
  alignment?: Alignment;
  verticalAlignment?: VerticalAlignment;
}

withDefaults(defineProps<Props>(), {
  alignment: "end",
  verticalAlignment: "bottom",
});
</script>

<template>
  <div
    :class="[
      'toast',
      TOAST_ALIGNMENT_CLASS_MAP[alignment],
      TOAST_VERTICAL_ALIGNMENT_CLASS_MAP[verticalAlignment],
    ]"
  >
    <slot />
  </div>
</template>
