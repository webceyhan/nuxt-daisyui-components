<script setup lang="ts">
import { SIZES, TEXT_COLORS } from "~/constants";

const animations: any[] = ["spinner", "dots", "ring", "ball", "bars", "infinity"];
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Loading</h1>

    <p>Loading shows an animation to indicate that something is loading.</p>

    <component-preview v-for="animation of animations">
      <template #title>Loading {{ animation }}</template>

      <ui-loading v-for="size of SIZES" v-bind="{ animation, size }" />
    </component-preview>

    <component-preview>
      <template #title>Loading with colors</template>

      <ui-loading v-for="color of TEXT_COLORS" :class="color" />
    </component-preview>
  </div>
</template>
