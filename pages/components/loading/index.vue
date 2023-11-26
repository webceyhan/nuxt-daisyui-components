<script setup lang="ts">
import { TEXT_COLORS } from "~/constants";
import { DESCRIPTIONS, ANIMATIONS, SIZES } from "./_data";

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Loading</h1>

    <p>Loading shows an animation to indicate that something is loading.</p>

    <component-description v-for="desc of DESCRIPTIONS" v-bind="desc" />

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
