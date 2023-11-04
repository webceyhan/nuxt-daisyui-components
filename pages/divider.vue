<script setup lang="ts">

const props = [
  {
    name: "horizontal",
    type: "boolean",
    description: "Whether the divider is horizontal or vertical",
  },
];

const slots = [
  { name: "default", description: "Content of button" }
];

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Divider</h1>

    <p>Divider will be used to separate content vertically or horizontally.</p>

    <component-props-table :props="props" />
    <component-slots-table :slots="slots" />

    <component-preview>
      <template #title>Divider </template>

      <div class="flex flex-col w-full border-opacity-50">
        <div class="grid h-20 card bg-base-300 rounded-box place-items-center">
          content
        </div>
        <ui-divider>OR</ui-divider>
        <div class="grid h-20 card bg-base-300 rounded-box place-items-center">
          content
        </div>
      </div>
    </component-preview>

    <component-preview>
      <template #title>Divider horizontal</template>

      <div class="flex w-full">
        <div class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
          content
        </div>
        <ui-divider horizontal>OR</ui-divider>
        <div class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
          content
        </div>
      </div>
    </component-preview>

    <component-preview>
      <template #title>Divider with no text</template>

      <div class="flex flex-col w-full border-opacity-50">
        <div class="grid h-20 card bg-base-300 rounded-box place-items-center">
          content
        </div>
        <ui-divider />
        <div class="grid h-20 card bg-base-300 rounded-box place-items-center">
          content
        </div>
      </div>
    </component-preview>

    <component-preview>
      <template #title>responsive (lg:divider-horizontal)</template>

      <div class="flex flex-col w-full lg:flex-row">
        <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
          content
        </div>
        <ui-divider class="lg:divider-horizontal">OR</ui-divider>
        <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
          content
        </div>
      </div>
    </component-preview>
  </div>
</template>
