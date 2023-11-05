<script setup lang="ts">
import { COLOR_CLASS_MAP, SIZE_CLASS_MAP } from "~/components/ui/radio/radio.vue";

const SIZES: any[] = Object.keys(SIZE_CLASS_MAP);
const COLORS: any[] = Object.keys(COLOR_CLASS_MAP);

const props = [
  {
    name: "modelValue",
    type: "string",
    description: "Value of the radio button",
  },
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
    name: "checked",
    type: "boolean",
    description: "Whether the radio button is checked or not",
  },
  {
    name: "disabled",
    type: "boolean",
    description: "Whether the radio button is disabled or not",
  },
];

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////

const sizeValue = ref("md");
const colorValue = ref("red");
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Radio</h1>

    <p>Radio buttons allow the user to select one option from a set.</p>

    <component-description name="radio" :props="props" />

    <component-preview>
      <template #title>Radio</template>

      <ui-radio name="radio-flags" v-for="(flag, i) of [true, false]" :checked="flag" />
    </component-preview>

    <component-preview>
      <template #title>With form-control</template>

      <div class="flex flex-col w-52">
        <ui-form-control v-for="i in 2" :label="`label ${i}`" inline>
          <ui-radio name="radio-with-label" :value="`${i}`" v-model="colorValue" />
        </ui-form-control>
      </div>

      <p class="p-10">{{ colorValue }}</p>
    </component-preview>

    <component-preview>
      <template #title> Sizes</template>

      <div class="flex flex-col items-center gap-2">
        <ui-radio
          v-for="size of SIZES"
          name="radio-sizes"
          :size="size"
          :value="size"
          v-model="sizeValue"
        />
      </div>

      <p class="p-10">{{ sizeValue }}</p>
    </component-preview>

    <component-preview>
      <template #title> Colors </template>

      <div class="flex flex-col items-center gap-2" v-for="color of COLORS">
        <ui-radio
          v-for="(checked, i) of [true, false]"
          :name="`radio-${color}`"
          :checked="checked"
          :color="color"
        />
      </div>
    </component-preview>

    <component-preview>
      <template #title>Disabled</template>

      <ui-radio disabled />
    </component-preview>
  </div>
</template>
