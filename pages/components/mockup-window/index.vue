<script setup lang="ts">
import { DESCRIPTIONS } from "./_data";

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Window mockup</h1>

    <p>Window mockup shows a box that looks like an operating system window.</p>

    <component-description v-for="desc of DESCRIPTIONS" v-bind="desc" />

    <component-preview>
      <template #title>window mockup with border</template>

      <ui-mockup-window class="border border-base-300 w-full" />
    </component-preview>

    <component-preview>
      <template #title>window mockup with background color</template>

      <ui-mockup-window class="border bg-base-300 w-full" />
    </component-preview>
  </div>
</template>
