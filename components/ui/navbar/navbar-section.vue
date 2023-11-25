<script setup lang="ts">
import type { Alignment } from "../types";

/**
 * DaisyUI classes to be included in the bundle!
 *
 * Alignment:
 * - navbar-start // default
 * - navbar-center
 * - navbar-end
 */
export interface Props {
  alignment?: Alignment;
}

withDefaults(defineProps<Props>(), {
  alignment: "start",
});
</script>

<template>
  <div
    :class="[
      {
        [`navbar-${alignment}`]: alignment,
      },
    ]"
  >
    <slot />
  </div>
</template>
