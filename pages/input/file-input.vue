<script setup lang="ts">
import {
  COLOR_CLASS_MAP,
  SIZE_CLASS_MAP,
} from "~/components/ui/file-input/file-input.vue";

const SIZES: any[] = Object.keys(SIZE_CLASS_MAP);
const COLORS: any[] = Object.keys(COLOR_CLASS_MAP);

const props = [
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
    name: "ghost",
    type: "boolean",
    description: "No background",
  },
  {
    name: "bordered",
    type: "boolean",
    description: "Whether the checkbox has a border or not",
  },
  {
    name: "disabled",
    type: "boolean",
    description: "Whether the checkbox is disabled or not",
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
      <template #title>With form-control</template>

      <ui-form-control label="Pick a file" alt="alt label">
        <ui-file-input bordered />
      </ui-form-control>
    </component-preview>

    <component-preview>
      <template #title> Sizes</template>

      <div class="flex flex-col items-center gap-2">
        <ui-file-input v-for="size of SIZES" :size="size" bordered />
      </div>
    </component-preview>

    <component-preview>
      <template #title> Colors </template>

      <ui-file-input v-for="color of COLORS" :color="color" class="my-2" bordered />
    </component-preview>

    <component-preview>
      <template #title>Ghost (no background)</template>

      <ui-file-input ghost />
    </component-preview>

    <component-preview>
      <template #title>Bordered</template>

      <ui-file-input bordered />
    </component-preview>

    <component-preview>
      <template #title>Disabled</template>

      <ui-file-input disabled />
    </component-preview>
  </div>
</template>
