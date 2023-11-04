<script lang="ts">
export const TOAST_ALIGNMENT_CLASS_MAP = {
  start: "toast-start",
  center: "toast-center",
  end: undefined, // default
};

export const TOAST_VERTICAL_ALIGNMENT_CLASS_MAP = {
  top: "toast-top",
  middle: "toast-middle",
  bottom: undefined, // default
};
</script>

<script setup lang="ts">
export interface Props {
  alignment?: keyof typeof TOAST_ALIGNMENT_CLASS_MAP;
  verticalAlignment?: keyof typeof TOAST_VERTICAL_ALIGNMENT_CLASS_MAP;
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
      TOAST_ALIGNMENT_CLASS_MAP[alignment],
      TOAST_VERTICAL_ALIGNMENT_CLASS_MAP[verticalAlignment],
    ]"
  >
    <slot />
  </div>
</template>
