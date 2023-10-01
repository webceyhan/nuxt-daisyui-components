<script lang="ts">
import { ClassMap } from "./types";

type Snap = "start" | "center" | "end";

const SNAP_CLASS_MAP: ClassMap<Snap> = {
  start: undefined,
  center: "carousel-center",
  end: "carousel-end",
};
</script>

<script setup lang="ts">
interface Props {
  snap?: Snap;
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
