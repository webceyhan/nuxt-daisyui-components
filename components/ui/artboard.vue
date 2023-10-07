<script lang="ts">
import { ClassMap } from "./types";

type Size = "phone-1" | "phone-2" | "phone-3" | "phone-4" | "phone-5" | "phone-6";

const SIZE_CLASS_MAP: ClassMap<Size> = {
  "phone-1": "phone-1",
  "phone-2": "phone-2",
  "phone-3": "phone-3",
  "phone-4": "phone-4",
  "phone-5": "phone-5",
  "phone-6": "phone-6",
};

const DIMENSION_MAP: Record<Size, string> = {
  "phone-1": "320x568",
  "phone-2": "375x667",
  "phone-3": "414x736",
  "phone-4": "375x812",
  "phone-5": "414x896",
  "phone-6": "320x1024",
};
</script>

<script setup lang="ts">
interface Props {
  size?: Size;
  horizontal?: boolean;
}

withDefaults(defineProps<Props>(), {
  size: "phone-1",
});
</script>

<template>
  <div :class="['artboard artboard-demo', SIZE_CLASS_MAP[size], {
    'artboard-horizontal': horizontal,
  }]">
    <slot>{{ DIMENSION_MAP[size] }}</slot>
  </div>
</template>
