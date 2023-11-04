<script setup lang="ts">
import { COLORS, SIZES } from "~/constants";

const props = [
  {
    name: "modelValue",
    type: "string",
    description: "Value of the input",
  },
  {
    name: "placeholder",
    type: "string",
    description: "Placeholder text",
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
    description: "Whether the textarea has a border or not",
  },
  {
    name: "disabled",
    type: "boolean",
    description: "Whether the textarea is disabled or not",
  },
];

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////

const value = ref("");
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Textarea</h1>

    <p>Textarea allows users to enter text in multiple lines.</p>

    <component-props-table :props="props" />
    <!-- <component-slots-table :slots="slots" /> -->

    <component-preview>
      <template #title>Textarea</template>

      <ui-textarea v-model="value" placeholder="Bio" class="w-full" />
    </component-preview>

    <component-preview>
      <template #title>With form-control and labels</template>

      <ui-form-control label="Your bio" alt="Alt label" class="w-full">
        <ui-textarea v-model="value" class="w-full" bordered />
      </ui-form-control>
    </component-preview>

    <component-preview>
      <template #title> Sizes</template>

      <div class="flex flex-col w-full items-center gap-2">
        <ui-textarea
          v-for="size of SIZES"
          :size="size"
          class="w-full"
          v-model="value"
          placeholder="Bio"
          bordered
        />
      </div>
    </component-preview>

    <component-preview>
      <template #title> Colors </template>

      <ui-textarea
        v-for="color of COLORS"
        :color="color"
        v-model="value"
        :placeholder="color"
        class="w-full my-2"
      />
    </component-preview>

    <component-preview>
      <template #title>Ghost (no background)</template>

      <ui-textarea v-model="value" placeholder="Bio" class="w-full" ghost />
    </component-preview>

    <component-preview>
      <template #title>Bordered</template>

      <ui-textarea v-model="value" placeholder="Bio" class="w-full" bordered />
    </component-preview>

    <component-preview>
      <template #title>Disabled</template>

      <ui-textarea placeholder="You can't touch this" class="w-full" disabled />
    </component-preview>
  </div>
</template>
