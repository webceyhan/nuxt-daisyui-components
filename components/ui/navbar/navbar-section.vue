<script lang="ts">
export const NAVBAR_ALIGNMENT_CLASS_MAP = {
  start: "navbar-start",
  center: "navbar-center",
  end: "navbar-end",
};
</script>

<script setup lang="ts">
export interface Props {
  alignment?: keyof typeof NAVBAR_ALIGNMENT_CLASS_MAP;
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
