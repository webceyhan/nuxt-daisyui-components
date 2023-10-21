<script setup lang="ts">
const mainColors = ["neutral", "primary", "secondary", "accent"];
const stateColors = ["info", "success", "warning", "error"];
const colors: any[] = [...mainColors, ...stateColors];
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Link</h1>

    <p>Link adds the missing underline style to links.</p>

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

    <component-preview v-for="color of colors">
      <template #title>{{ color }} color</template>

      <ui-link :color="color">I'm a simple link</ui-link>
    </component-preview>

    <component-preview>
      <template #title>Show underline only on hover</template>

      <ui-link hover>I'm a simple link</ui-link>
    </component-preview>
  </div>
</template>
