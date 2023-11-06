<script setup lang="ts">
import { DESCRIPTIONS, COLORS, SIZES } from "~/data/file-input";

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////

const value = ref("");
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">File Input</h1>

    <p>File Input is a an input field for uploading files.</p>

    <component-description v-for="desc of DESCRIPTIONS" v-bind="desc" />

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
