<script setup lang="ts">
export interface Props {
  overlayUrl?: string;
  overlayClass?: string;
  contentClass?: string;
}

defineProps<Props>();
</script>

<template>
  <div
    class="hero"
    :style="{
      backgroundImage: overlayUrl ? `url(${overlayUrl})` : undefined,
    }"
  >
    <div v-if="overlayUrl" class="hero-overlay" :class="overlayClass" />
    <div class="hero-content" :class="contentClass">
      <slot />
    </div>
  </div>
</template>
