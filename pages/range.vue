<script setup lang="ts">
import { COLORS, SIZES } from "~/constants";

const props = [
  {
    name: "min",
    type: "string",
    description: "Minimum value",
  },
  {
    name: "max",
    type: "string",
    description: "Maximum value",
  },
  {
    name: "step",
    type: "string",
    description: "Step value",
  },
  {
    name: "modelValue",
    type: "string",
    description: "Value of the input",
  },
  {
    name: "size",
    type: "string",
    values: SIZES,
  },
  {
    name: "color",
    type: "string",
    values: COLORS,
  },
  {
    name: "disabled",
    type: "boolean",
    description: "Whether the range is disabled or not",
  },
];

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Range slider</h1>

    <p>Range slider is used to select a value by sliding a handle.</p>

    <component-props-table :props="props" />
    <!-- <component-slots-table :slots="slots" /> -->

    <component-preview>
      <template #title>Range</template>

      <ui-range value="40" />
    </component-preview>

    <component-preview>
      <template #title>With steps and measure</template>

      <ui-range value="25" step="25" />
      <div class="w-full flex justify-between text-xs px-2">
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
      </div>
    </component-preview>

    <component-preview v-for="color of COLORS">
      <template #title>
        <span class="capitalize"> {{ color }} </span> color
      </template>

      <ui-range :color="color" value="40" />
    </component-preview>

    <component-preview>
      <template #title> Sizes</template>

      <div class="flex flex-col w-full items-center gap-4">
        <ui-range v-for="(size, i) of SIZES" :size="size" :value="40 + i * 10" />
      </div>
    </component-preview>

    <component-preview>
      <template #title>Disabled</template>

      <ui-range value="40" disabled />
    </component-preview>
  </div>
</template>
