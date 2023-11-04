<script setup lang="ts">
import { LOADING_ANIMATION_CLASS_MAP } from "~/components/ui/loading/loading.vue";
import { SIZES, TEXT_COLORS } from "~/constants";

const ANIMATIONS = Object.keys(LOADING_ANIMATION_CLASS_MAP);

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

const animations: any[] = ANIMATIONS;
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Loading</h1>

    <p>Loading shows an animation to indicate that something is loading.</p>

    <component-props-table :props="props" />
    <!-- <component-slots-table :slots="slots" /> -->

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
