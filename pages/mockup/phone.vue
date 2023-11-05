<script setup lang="ts">
const slots = [
  {
    name: "default",
    description: "Content of phone mockup",
  },
];

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Phone mockup</h1>

    <p>Phone mockup shows a mockup of an iPhone.</p>

    <component-description name="mockup-phone" :slots="slots" />

    <component-preview>
      <template #title> iPhone mockup</template>

      <ui-mockup-phone />
    </component-preview>

    <component-preview>
      <template #title> With color</template>

      <ui-mockup-phone class="border-primary" />
    </component-preview>
  </div>
</template>
