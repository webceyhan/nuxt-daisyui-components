<script setup lang="ts">
const props = [
  {
    name: "label",
    type: "string",
    description: "Label text",
  },
  {
    name: "alt",
    type: "string",
    description: "Alternative label text",
  },
  {
    name: "inline",
    type: "boolean",
    description: "Display label and input inline",
  },
];

const slots = [
  {
    name: "default",
    description: "Content of form control",
  },
];

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////

const value = ref("");
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Form Control</h1>

    <p>
      Form control is a wrapper component for form elements like input, textarea, select,
      checkbox, radio, etc.
    </p>

    <component-description name="form-control" :props="props" :slots="slots" />

    <component-preview>
      <template #title>With Text Input</template>

      <ui-form-control label="What is your name?" alt="Alt label" class="w-full">
        <ui-text-input v-model="value" class="w-full" bordered />
      </ui-form-control>
    </component-preview>

    <component-preview>
      <template #title>With Checkbox as inline</template>

      <ui-form-control label="Remember me" inline>
        <ui-checkbox />
      </ui-form-control>
    </component-preview>

    <component-preview>
      <template #title>With Radio as inline</template>

      <div class="flex flex-col w-52">
        <ui-form-control v-for="i of 2" :label="`item ${i}`" inline>
          <ui-radio name="radio-with-label" />
        </ui-form-control>
      </div>
    </component-preview>
  </div>
</template>
