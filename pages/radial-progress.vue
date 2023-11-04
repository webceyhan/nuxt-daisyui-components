<script setup lang="ts">
import { TEXT_COLORS } from "~/constants";

const props = [
  {
    name: "value",
    type: "number",
    description: "Value of progress",
  },
  {
    name: "size",
    type: "string",
    description: "Size of progress. default: 4rem",
  },
  {
    name: "thickness",
    type: "string",
    description: "Thickness of progress. default: 10% of size",
  },
];

const slots = [{ name: "default", description: "Content of radial progress" }];

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////

const values = [0, 20, 60, 80, 100];
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Radial progress</h1>

    <p>
      Radial progress can be used to show the progress of a task or to show the passing of
      time.
    </p>

    <component-props-table :props="props" />
    <component-slots-table :slots="slots" />

    <component-preview>
      <template #title> Radial progress </template>

      <ui-radial-progress :value="70" />
    </component-preview>

    <component-preview>
      <template #title> Different values</template>

      <ui-radial-progress v-for="value of values" :value="value" />
    </component-preview>

    <component-preview>
      <template #title> Colors </template>

      <ui-radial-progress v-for="color of TEXT_COLORS" :value="70" :class="color" />
    </component-preview>

    <component-preview>
      <template #title> With background color and border </template>

      <ui-radial-progress
        :value="70"
        class="bg-primary text-primary-content border-4 border-primary"
      />
    </component-preview>

    <component-preview>
      <template #title> Custom size and custom thickness </template>

      <ui-radial-progress :value="70" size="12rem" thickness="2px" />
      <ui-radial-progress :value="70" size="12rem" thickness="2rem" />
    </component-preview>
  </div>
</template>
