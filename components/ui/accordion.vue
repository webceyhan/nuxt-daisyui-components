<script lang="ts">
import { ClassMap } from "./types";

type Icon = "none" | "arrow" | "plus";

const ICON_CLASS_MAP: ClassMap<Icon> = {
  none: undefined, // default
  arrow: "collapse-arrow",
  plus: "collapse-plus",
};
</script>

<script setup lang="ts">
interface Props {
  name?: string;
  open?: boolean;
  icon?: Icon;
}

withDefaults(defineProps<Props>(), {
  icon: "none",
});
</script>

<template>
  <div :class="['collapse bg-base-200', ICON_CLASS_MAP[icon]]">
    <!-- internal toggle -->
    <input type="radio" :name="name" :checked="open" />

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
