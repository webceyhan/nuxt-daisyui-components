<script lang="ts">
export const ALIGNMENT_CLASS_MAP = {
  start: "navbar-start", // default
  center: "navbar-center",
  end: "navbar-end",
};
</script>

<script setup lang="ts">
export interface Props {
  alignment?: keyof typeof ALIGNMENT_CLASS_MAP;
}

withDefaults(defineProps<Props>(), {
  alignment: "start",
});
</script>

<template>
  <div :class="[ALIGNMENT_CLASS_MAP[alignment]]">
    <slot />
  </div>
</template>
