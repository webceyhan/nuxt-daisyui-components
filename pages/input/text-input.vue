<script setup lang="ts">
import {
  COLOR_CLASS_MAP,
  SIZE_CLASS_MAP,
} from "~/components/ui/text-input/text-input.vue";

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
    description: "Whether the input has a border or not",
  },
  {
    name: "disabled",
    type: "boolean",
    description: "Whether the input is disabled or not",
  },
];

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////

const value = ref("");
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Text Input</h1>

    <p>Text Input is a simple input field.</p>

    <component-description name="text-input" :props="props" />

    <component-preview>
      <template #title>Text input</template>

      <ui-text-input v-model="value" placeholder="Type here" class="w-full" />
    </component-preview>

    <component-preview>
      <template #title>With form-control and labels</template>

      <ui-form-control label="What is your name?" alt="Alt label" class="w-full">
        <ui-text-input v-model="value" class="w-full" bordered />
      </ui-form-control>
    </component-preview>

    <component-preview>
      <template #title> Sizes</template>

      <div class="flex flex-col w-full items-center gap-2">
        <ui-text-input
          v-for="size of SIZES"
          :size="size"
          class="w-full"
          v-model="value"
          placeholder="Type here"
          bordered
        />
      </div>
    </component-preview>

    <component-preview>
      <template #title> Colors </template>

      <ui-text-input
        v-for="color of COLORS"
        :color="color"
        v-model="value"
        :placeholder="color"
        class="w-full my-2"
      />
    </component-preview>

    <component-preview>
      <template #title>Ghost (no background)</template>

      <ui-text-input v-model="value" placeholder="Type here" class="w-full" ghost />
    </component-preview>

    <component-preview>
      <template #title>Bordered</template>

      <ui-text-input v-model="value" placeholder="Type here" class="w-full" bordered />
    </component-preview>

    <component-preview>
      <template #title>Disabled</template>

      <ui-text-input placeholder="You can't touch this" class="w-full" disabled />
    </component-preview>
  </div>
</template>
