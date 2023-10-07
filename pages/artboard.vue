<script setup lang="ts"></script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Artboard</h1>

    <p>
      Artboard provides fixed size container to display a demo content on mobile size.
    </p>

    <component-preview v-for="i in 6" :key="i">
      <template #title>Artboard size {{ i }}</template>

      <ui-artboard :size="`phone-${i}`" />
    </component-preview>

    <component-preview v-for="i in 6" :key="i">
      <template #title>Artboard horizontal size {{ i }}</template>

      <ui-artboard :size="`phone-${i}`" horizontal />
    </component-preview>
  </div>
</template>
