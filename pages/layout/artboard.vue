<script setup lang="ts">
import { SIZE_CLASS_MAP } from "~/components/ui/layout/artboard.vue";

const SIZES: any[] = Object.keys(SIZE_CLASS_MAP);

const props = [
  {
    name: "size",
    type: "string",
    values: SIZES,
  },
  {
    name: "horizontal",
    type: "boolean",
    description: "Shows horizontal view",
  },
];

const slots = [
  {
    name: "default",
    description: "Content of artboard",
  },
];

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Artboard</h1>

    <p>
      Artboard provides fixed size container to display a demo content on mobile size.
    </p>

    <component-props-table :props="props" />
    <component-slots-table :slots="slots" />

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
