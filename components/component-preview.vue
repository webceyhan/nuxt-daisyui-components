<script setup lang="ts">
interface Props {
  withBackground?: boolean;
}

defineProps<Props>();
</script>

<template>
  <div class="text-base-content my-6 lg:my-12">
    <!-- title -->
    <h4 class="pb-2 text-sm font-bold">
      <span class="opacity-20 mr-1">#</span>
      <slot name="title" />
    </h4>

    <!-- description -->
    <div class="pb-2 text-xs opacity-70">
      <slot name="description" />
    </div>

    <!-- preview -->
    <div class="grid">
      <div class="bg-base-300 border border-base-300 rounded-box relative overflow-x-auto">
        <div
          class="flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden p-4"
          :class="{
            'preview-pattern': !withBackground,
            'preview-background': withBackground,
          }"
        >
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.preview-pattern {
  background-image: repeating-linear-gradient(
    45deg,
    hsl(var(--b1)),
    hsl(var(--b1)) 13px,
    hsl(var(--b2)) 13px,
    hsl(var(--b2)) 14px
  );
}

.preview-background {
  background-image: url("/img/preview-bg.jpg");
  background-position: top center;
}
</style>
