<script lang="ts">
import { Alignment, ClassMap } from "./types";

const SNAP_CLASS_MAP: ClassMap<Alignment> = {
  start: undefined,
  center: "carousel-center",
  end: "carousel-end",
};
</script>

<script setup lang="ts">
interface Props {
  snap?: Alignment;
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
