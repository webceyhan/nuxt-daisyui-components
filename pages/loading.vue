<script setup lang="ts">
const animations: any[] = ["spinner", "dots", "ring", "ball", "bars", "infinity"];

const sizes: any[] = ["lg", "md", "sm", "xs"];

const colors: any[] = [
  "text-primary",
  "text-secondary",
  "text-accent",
  "text-neutral",
  "text-info",
  "text-success",
  "text-warning",
  "text-error",
];
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Loading</h1>

    <p>Loading shows an animation to indicate that something is loading.</p>

    <component-preview v-for="animation of animations">
      <template #title>Loading {{ animation }}</template>

      <ui-loading v-for="size of sizes" :key="size" v-bind="{ animation, size }" />
    </component-preview>

    <component-preview>
      <template #title>Loading with colors</template>

      <ui-loading v-for="color of colors" :key="color" :class="color" />
    </component-preview>
  </div>
</template>
