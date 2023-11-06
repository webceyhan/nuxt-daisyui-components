<script setup lang="ts">
import { DESCRIPTIONS, SIZES } from "~/data/artboard";

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Artboard</h1>

    <p>
      Artboard provides fixed size container to display a demo content on mobile size.
    </p>

    <component-description v-for="desc of DESCRIPTIONS" v-bind="desc" />

    <component-preview v-for="size of SIZES">
      <template #title>Artboard size {{ size }}</template>

      <ui-artboard :size="size" />
    </component-preview>

    <component-preview v-for="size of SIZES">
      <template #title>Artboard horizontal size {{ size }}</template>

      <ui-artboard :size="size" horizontal />
    </component-preview>
  </div>
</template>
