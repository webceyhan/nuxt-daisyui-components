<script lang="ts">
import { Alignment, ClassMap } from "./types";

export const NAVBAR_ALIGNMENT_CLASS_MAP: ClassMap<Alignment> = {
  start: "navbar-start",
  center: "navbar-center",
  end: "navbar-end",
};
</script>

<script setup lang="ts">
interface Props {
  alignment?: Alignment;
}

withDefaults(defineProps<Props>(), {
  alignment: "start",
});
</script>

<template>
  <div :class="[NAVBAR_ALIGNMENT_CLASS_MAP[alignment]]">
    <slot />
  </div>
</template>
