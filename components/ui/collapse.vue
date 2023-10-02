<script lang="ts">
import { ClassMap } from "./types";

type Indicator = "none" | "arrow" | "plus";

const INDICATOR_CLASS_MAP: ClassMap<Indicator> = {
  none: undefined, // default
  arrow: "collapse-arrow",
  plus: "collapse-plus",
};
</script>

<script setup lang="ts">
interface Props {
  open?: boolean;
  toggle?: boolean;
  indicator?: Indicator;
}

withDefaults(defineProps<Props>(), {
  open: undefined,
  indicator: "none",
});
</script>

<template>
  <div
    tabindex="0"
    :class="[
      'collapse bg-base-200',
      INDICATOR_CLASS_MAP[indicator],
      {
        // force open/close when toggle is not active
        'collapse-open': !toggle && open === true,
        'collapse-close': !toggle && open === false,
      },
    ]"
  >
    <!-- internal toggle -->
    <input v-if="toggle" type="checkbox" class="toggle" :checked="open" />

    <!-- title -->
    <div class="collapse-title text-xl font-medium">
      <slot name="title" />
    </div>

    <!-- content -->
    <div class="collapse-content">
      <slot />
    </div>
  </div>
</template>
