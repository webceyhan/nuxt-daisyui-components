<script setup lang="ts">
import { DESCRIPTIONS, COLORS, SIZES } from "./_data";

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Range slider</h1>

    <p>Range slider is used to select a value by sliding a handle.</p>

    <component-description v-for="desc of DESCRIPTIONS" v-bind="desc" />

    <component-preview>
      <template #title>Range</template>

      <ui-range value="40" />
    </component-preview>

    <component-preview>
      <template #title>With steps and measure</template>

      <ui-range value="25" step="25" />
      <div class="w-full flex justify-between text-xs px-2">
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
      </div>
    </component-preview>

    <component-preview>
      <template #title> Sizes</template>

      <div class="flex flex-col w-full items-center gap-4">
        <ui-range v-for="(size, i) of SIZES" :size="size" :value="40 + i * 10" />
      </div>
    </component-preview>

    <component-preview>
      <template #title> Colors </template>

      <ui-range v-for="color of COLORS" :color="color" value="40" class="my-2" />
    </component-preview>

    <component-preview>
      <template #title>Disabled</template>

      <ui-range value="40" disabled />
    </component-preview>
  </div>
</template>
