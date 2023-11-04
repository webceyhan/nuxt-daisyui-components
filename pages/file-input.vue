<script setup lang="ts">
import { COLORS, SIZES } from "~/constants";

const props = [
  {
    name: "color",
    type: "string",
    values: COLORS,
  },
  {
    name: "size",
    type: "string",
    values: SIZES,
  },
  {
    name: "modelValue",
    type: "string",
    description: "Value of the input",
  },
  {
    name: "disabled",
    type: "boolean",
    description: "Whether the checkbox is disabled or not",
  },
  {
    name: "bordered",
    type: "boolean",
    description: "Whether the checkbox has a border or not",
  },
];

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////

const value = ref("");
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">File Input</h1>

    <p>File Input is a an input field for uploading files.</p>

    <component-props-table :props="props" />
    <!-- <component-slots-table :slots="slots" /> -->

    <component-preview>
      <template #title>File input</template>

      <ui-file-input v-model="value" />
      <p class="text-xs text-base-content/50">{{ value }}</p>
    </component-preview>

    <component-preview>
      <template #title>File input with border</template>

      <ui-file-input bordered />
    </component-preview>

    <component-preview>
      <template #title>Ghost (no background)</template>

      <ui-file-input color="ghost" />
    </component-preview>

    <component-preview>
      <template #title>With form-control and labels</template>

      <ui-form-control label="Pick a file" alt="alt label">
        <ui-file-input bordered />
      </ui-form-control>
    </component-preview>

    <component-preview v-for="color of COLORS">
      <template #title>
        <span class="capitalize"> {{ color }} </span> color
      </template>

      <ui-file-input :color="color" bordered />
    </component-preview>

    <component-preview>
      <template #title> Sizes</template>

      <div class="flex flex-col items-center gap-2">
        <ui-file-input v-for="size of SIZES" :size="size" bordered />
      </div>
    </component-preview>

    <component-preview>
      <template #title>Disabled</template>

      <ui-file-input disabled />
    </component-preview>
  </div>
</template>
