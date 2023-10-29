<script lang="ts">
import { ClassMap } from "../types";

export type ArtboardSize =
  | "phone-1"
  | "phone-2"
  | "phone-3"
  | "phone-4"
  | "phone-5"
  | "phone-6";

export const ARTBOARD_SIZE_CLASS_MAP: ClassMap<ArtboardSize> = {
  "phone-1": "phone-1",
  "phone-2": "phone-2",
  "phone-3": "phone-3",
  "phone-4": "phone-4",
  "phone-5": "phone-5",
  "phone-6": "phone-6",
};

export const ARTBOARD_DIMENSION_MAP: Record<ArtboardSize, string> = {
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
  size?: ArtboardSize;
  horizontal?: boolean;
}

withDefaults(defineProps<Props>(), {
  size: "phone-1",
});
</script>

<template>
  <div
    :class="[
      'artboard artboard-demo',
      ARTBOARD_SIZE_CLASS_MAP[size],
      {
        'artboard-horizontal': horizontal,
      },
    ]"
  >
    <slot>{{ ARTBOARD_DIMENSION_MAP[size] }}</slot>
  </div>
</template>
