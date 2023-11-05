<script setup lang="ts">
import { COLOR_CLASS_MAP } from "~/components/ui/progress/progress.vue";

const COLORS: any[] = Object.keys(COLOR_CLASS_MAP);

const props = [
  {
    name: "value",
    type: "number",
    description: "Value of progress",
  },
  {
    name: "max",
    type: "number",
    description: "Maximum value of progress",
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
  {
    name: "color",
    type: "string",
    values: COLORS,
  },
  {
    name: "radial",
    type: "boolean",
    description: "Whether to use radial progress",
  },
];

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////

const steps = [0, 10, 40, 70, 100];
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Progress</h1>

    <p>
      Progress bar can be used to show the progress of a task or to show the passing of
      time.
    </p>

    <component-props-table :props="props" />
    <!-- <component-slots-table :slots="slots" /> -->

    <component-preview>
      <template #title> Default </template>

      <div class="flex flex-col gap-2 items-center">
        <ui-progress v-for="value of steps" class="w-56" :value="value" />
      </div>
    </component-preview>

    <component-preview>
      <template #title> Radial</template>

      <ui-progress v-for="value of steps" :value="value" radial />
    </component-preview>

    <component-preview>
      <template #title> Radial with custom size and thickness </template>

      <ui-progress :value="70" size="12rem" thickness="2px" radial />
      <ui-progress :value="70" size="12rem" thickness="2rem" radial />
    </component-preview>

    <component-preview>
      <template #title> Colors </template>

      <div v-for="color of COLORS" class="flex justify-center w-full">
        <ui-progress class="w-56" :value="75" :color="color" />
      </div>
    </component-preview>

    <component-preview>
      <template #title> Colors for radial </template>

      <ui-progress v-for="color of COLORS" :value="75" :color="color" radial />
    </component-preview>

    <component-preview>
      <template #title> Radial with background color and border </template>

      <ui-progress
        :value="70"
        class="bg-primary text-primary-content border-4 border-primary"
        radial
      />
    </component-preview>
  </div>
</template>
