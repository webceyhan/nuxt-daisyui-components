<script setup lang="ts">
import { DESCRIPTIONS, COLORS } from "~/data/link";

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Link</h1>

    <p>Link adds the missing underline style to links.</p>

    <component-description v-for="desc of DESCRIPTIONS" v-bind="desc" />

    <component-preview>
      <template #title>Link</template>

      <ui-link>I'm a simple link</ui-link>
    </component-preview>

    <component-preview>
      <template #title>Link</template>

      <p>
        Tailwind CSS resets the style of links by default.
        <br />
        Add "link" class to make it look like a
        <ui-link>normal link</ui-link> again.
      </p>
    </component-preview>

    <component-preview>
      <template #title>Colors</template>

      <div class="flex flex-col gap-2">
        <ui-link v-for="color of COLORS" :color="color">I'm a simple link</ui-link>
      </div>
    </component-preview>

    <component-preview>
      <template #title>Show underline only on hover</template>

      <ui-link hover>I'm a simple link</ui-link>
    </component-preview>
  </div>
</template>
