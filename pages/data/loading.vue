<script setup lang="ts">
import { TEXT_COLORS } from "~/constants";
import { ANIMATION_CLASS_MAP, SIZE_CLASS_MAP } from "~/components/ui/loading/loading.vue";

const SIZES: any[] = Object.keys(SIZE_CLASS_MAP);
const ANIMATIONS: any[] = Object.keys(ANIMATION_CLASS_MAP);

const props = [
  {
    name: "size",
    type: "string",
    values: SIZES,
  },
  {
    name: "animation",
    type: "string",
    values: ANIMATIONS,
  },
];

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Loading</h1>

    <p>Loading shows an animation to indicate that something is loading.</p>

    <component-description name="loading" :props="props" />

    <component-preview v-for="animation of ANIMATIONS">
      <template #title>Loading {{ animation }}</template>

      <ui-loading v-for="size of SIZES" v-bind="{ animation, size }" />
    </component-preview>

    <component-preview>
      <template #title>Loading with colors</template>

      <ui-loading v-for="color of TEXT_COLORS" :class="color" />
    </component-preview>
  </div>
</template>
