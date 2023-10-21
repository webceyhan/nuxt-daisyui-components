<script lang="ts">
import { Alignment, ClassMap, VerticalAlignment } from "./types";

const ALIGNMENT_CLASS_MAP: ClassMap<Alignment> = {
  start: "toast-start",
  center: "toast-center",
  end: "toast-end",
};

const VERTICAL_ALIGNMENT_CLASS_MAP: ClassMap<VerticalAlignment> = {
  top: "toast-top",
  middle: "toast-middle",
  bottom: "toast-bottom",
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
      ALIGNMENT_CLASS_MAP[alignment],
      VERTICAL_ALIGNMENT_CLASS_MAP[verticalAlignment],
    ]"
  >
    <slot />
  </div>
</template>
