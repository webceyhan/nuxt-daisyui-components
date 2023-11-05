<script lang="ts">
export const SIZE_CLASS_MAP = {
  "phone-1": "phone-1",
  "phone-2": "phone-2",
  "phone-3": "phone-3",
  "phone-4": "phone-4",
  "phone-5": "phone-5",
  "phone-6": "phone-6",
};

export const DIMENSION_MAP = {
  "phone-1": "320x568",
  "phone-2": "375x667",
  "phone-3": "414x736",
  "phone-4": "375x812",
  "phone-5": "414x896",
  "phone-6": "320x1024",
};
</script>

<script setup lang="ts">
export interface Props {
  size?: keyof typeof SIZE_CLASS_MAP;
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
      SIZE_CLASS_MAP[size],
      {
        'artboard-horizontal': horizontal,
      },
    ]"
  >
    <slot>{{ DIMENSION_MAP[size] }}</slot>
  </div>
</template>
