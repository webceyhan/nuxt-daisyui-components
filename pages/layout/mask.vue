<script setup lang="ts">
const props = [
  {
    name: "shape",
    type: "Mask",
    description: "Shape of the mask",
  },
  {
    name: "first-half",
    type: "boolean",
    description: "Display only the first half of the mask",
  },
  {
    name: "last-half",
    type: "boolean",
    description: "Display only the last half of the mask",
  },
];

const slots = [
  {
    name: "default",
    description: "Content of the mask",
  },
];

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////

const shapes = [
  "squircle",
  "heart",
  "hexagon",
  "hexagon-2",
  "decagon",
  "pentagon",
  "diamond",
  "square",
  "circle",
  "parallelogram",
  "parallelogram-2",
  "parallelogram-3",
  "parallelogram-4",
  "star",
  "star-2",
  "triangle",
  "triangle-2",
  "triangle-3",
  "triangle-4",
];
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Mask</h1>

    <p>Mask crops the content of the element to common shapes.</p>

    <component-description name="mask" :props="props" :slots="slots" />

    <component-preview v-for="shape of shapes">
      <template #title>{{ shape }}</template>

      <ui-mask :shape="(shape as any)">
        <img src="/img/heart.jpg" alt="heart" />
      </ui-mask>
    </component-preview>

    <component-preview>
      <template #title>First half</template>

      <ui-mask shape="circle" first-half>
        <img src="/img/heart.jpg" alt="heart" />
      </ui-mask>
    </component-preview>

    <component-preview>
      <template #title>Last half</template>

      <ui-mask shape="circle" last-half>
        <img src="/img/heart.jpg" alt="heart" />
      </ui-mask>
    </component-preview>
  </div>
</template>
