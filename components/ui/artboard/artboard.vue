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
  "phone-1": ["320", "568"],
  "phone-2": ["375", "667"],
  "phone-3": ["414", "736"],
  "phone-4": ["375", "812"],
  "phone-5": ["414", "896"],
  "phone-6": ["320", "1024"],
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
    <slot>
      <span v-if="horizontal">
        {{ DIMENSION_MAP[size].reverse().join(" x ") }}
      </span>

      <span v-else>
        {{ DIMENSION_MAP[size].join(" x ") }}
      </span>
    </slot>
  </div>
</template>
