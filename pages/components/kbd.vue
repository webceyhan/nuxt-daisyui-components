<script setup lang="ts">
import { DESCRIPTIONS } from "~/data/kbd";

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////

const sizes: any[] = ["lg", "md", "sm", "xs"];

const keyboard = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m", "/"],
];
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Kbd</h1>

    <p>Kbd is used to display keyboard shortcuts.</p>

    <component-description v-for="desc of DESCRIPTIONS" v-bind="desc" />

    <component-preview>
      <template #title>Kbd</template>

      <ui-kbd>A</ui-kbd>
    </component-preview>

    <component-preview>
      <template #title>Kbd sizes</template>

      <ui-kbd v-for="(size, i) of sizes" :size="size"> Shift </ui-kbd>
    </component-preview>

    <component-preview>
      <template #title>In Text</template>

      Press <ui-kbd size="sm">F</ui-kbd> to pay respects.
    </component-preview>

    <component-preview>
      <template #title>Key combination</template>

      <ui-kbd>ctrl</ui-kbd>
      +
      <ui-kbd>shift</ui-kbd>
      +
      <ui-kbd>del</ui-kbd>
    </component-preview>

    <component-preview>
      <template #title>Function Keys</template>

      <ui-kbd>⌘</ui-kbd>
      <ui-kbd>⌥</ui-kbd>
      <ui-kbd>⇧</ui-kbd>
      <ui-kbd>⌃</ui-kbd>
    </component-preview>

    <component-preview>
      <template #title>A full keyboard</template>

      <div v-for="(row, i) of keyboard" class="flex justify-center gap-1 my-1 w-full">
        <ui-kbd v-for="k of row">
          {{ k }}
        </ui-kbd>
      </div>
    </component-preview>

    <component-preview>
      <template #title>Arrow Keys</template>

      <div class="flex justify-center w-full">
        <ui-kbd>▲</ui-kbd>
      </div>
      <div class="flex justify-center gap-12 w-full">
        <ui-kbd>◀︎</ui-kbd>
        <ui-kbd>▶︎</ui-kbd>
      </div>
      <div class="flex justify-center w-full">
        <ui-kbd>▼</ui-kbd>
      </div>
    </component-preview>
  </div>
</template>
