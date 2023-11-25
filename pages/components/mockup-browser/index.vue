<script setup lang="ts">
import { DESCRIPTIONS } from "./_data";

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Browser mockup</h1>

    <p>Browser mockup shows a box that looks like a browser window.</p>

    <component-description v-for="desc of DESCRIPTIONS" v-bind="desc" />

    <component-preview>
      <template #title>browser mockup with border</template>

      <ui-mockup-browser class="border border-base-300 w-full" />
    </component-preview>

    <component-preview>
      <template #title>browser mockup with background color</template>

      <ui-mockup-browser class="border bg-base-300 w-full" />
    </component-preview>
  </div>
</template>
