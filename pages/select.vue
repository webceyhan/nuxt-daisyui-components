<script setup lang="ts">
import { COLORS, SIZES } from "~/constants";

const props = [
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
    name: "modelValue",
    type: "string",
    description: "Value of the input",
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

const slots = [{ name: "default", description: "Content for options" }];

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////

const options: string[] = ["Homer", "Marge", "Bart", "Lisa", "Maggie"];
const selected = ref(undefined);

const selectedFruit = ref(undefined);
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Select</h1>

    <p>Select is used to pick a value from a list of options.</p>

    <component-props-table :props="props" />
    <component-slots-table :slots="slots" />

    <component-preview>
      <template #title>Select</template>

      <ui-select v-model="selected">
        <option disabled selected>Pick your favorite Simpson</option>
        <option v-for="option of options" :value="option">
          {{ option }}
        </option>
      </ui-select>

      {{ selected }}
    </component-preview>

    <component-preview>
      <template #title>Select with border</template>

      <ui-select bordered>
        <option disabled selected>Who shot first?</option>
        <option>Han Solo</option>
        <option>Greedo</option>
      </ui-select>
    </component-preview>

    <component-preview>
      <template #title>Ghost (no background)</template>

      <ui-select color="ghost">
        <option disabled selected>Pick the best JS framework</option>
        <option>Svelte</option>
        <option>Vue</option>
        <option>React</option>
      </ui-select>
    </component-preview>

    <component-preview>
      <template #title>With form-control and labels</template>

      <ui-form-control
        class="w-full"
        label="Pick the best fantasy franchise"
        alt="Alt label"
      >
        <ui-select bordered>
          <option disabled selected>Pick one</option>
          <option>Star Wars</option>
          <option>Harry Potter</option>
          <option>Lord of the Rings</option>
          <option>Planet of the Apes</option>
          <option>Star Trek</option>
        </ui-select>
      </ui-form-control>
    </component-preview>

    <component-preview v-for="color of COLORS">
      <template #title>
        <span class="capitalize"> {{ color }} </span> color
      </template>

      <ui-select :color="color">
        <option disabled selected>What is the best TV show?</option>
        <option>Game of Thrones</option>
        <option>Lost</option>
        <option>Breaking Bad</option>
        <option>Walking Dead</option>
      </ui-select>
    </component-preview>

    <component-preview>
      <template #title> Sizes</template>

      <div class="flex flex-col w-full items-center gap-2">
        <ui-select v-for="size of SIZES" :size="size" bordered v-model="selectedFruit">
          <option disabled selected>{{ size }}</option>
          <option v-for="opt of ['apple', 'orange', 'tomato']" :value="opt">
            {{ size }} {{ opt }}
          </option>
        </ui-select>
      </div>
    </component-preview>

    <component-preview>
      <template #title>Disabled</template>

      <ui-select disabled>
        <option>You can't touch this</option>
      </ui-select>
    </component-preview>
  </div>
</template>
