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
      <div class="bg-base-300 rounded-b-box rounded-tr-box relative overflow-x-auto">
        <div
          class="preview border-base-300 bg-base-100 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4"
        >
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.preview {
  background-image: repeating-linear-gradient(
    45deg,
    hsl(var(--b1)),
    hsl(var(--b1)) 13px,
    hsl(var(--b2)) 13px,
    hsl(var(--b2)) 14px
  );
}
</style>
