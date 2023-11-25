<script setup lang="ts">
import { DESCRIPTIONS, COLORS, ALIGNMENTS } from "~/data/divider";

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Divider</h1>

    <p>Divider will be used to separate content vertically or horizontally.</p>

    <component-description v-for="desc of DESCRIPTIONS" v-bind="desc" />

    <component-preview>
      <template #title>Divider </template>

      <div class="flex flex-col w-full border-opacity-50">
        <div class="grid h-20 card bg-base-300 rounded-box place-items-center">
          content
        </div>
        <ui-divider>OR</ui-divider>
        <div class="grid h-20 card bg-base-300 rounded-box place-items-center">
          content
        </div>
      </div>
    </component-preview>

    <component-preview>
      <template #title> Colors </template>

      <div class="flex flex-col w-full">
        <ui-divider v-for="color of COLORS" :color="color">
          {{ color }}
        </ui-divider>
      </div>
    </component-preview>

    <component-preview>
      <template #title> Text Alignments </template>

      <div class="flex flex-col w-full">
        <ui-divider v-for="alignment of ALIGNMENTS" :alignment="alignment">
          {{ alignment }}
        </ui-divider>
      </div>
    </component-preview>

    <component-preview>
      <template #title>Horizontal</template>

      <div class="flex w-full">
        <div class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
          content
        </div>
        <ui-divider horizontal>OR</ui-divider>
        <div class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
          content
        </div>
      </div>
    </component-preview>

    <component-preview>
      <template #title>Horizontal Text Alignments</template>

      <div class="flex w-full justify-center h-52">
        <ui-divider v-for="alignment of ALIGNMENTS" :alignment="alignment" horizontal>
          {{ alignment }}
        </ui-divider>
      </div>
    </component-preview>

    <component-preview>
      <template #title>With no text</template>

      <div class="flex flex-col w-full border-opacity-50">
        <div class="grid h-20 card bg-base-300 rounded-box place-items-center">
          content
        </div>
        <ui-divider />
        <div class="grid h-20 card bg-base-300 rounded-box place-items-center">
          content
        </div>
      </div>
    </component-preview>

    <component-preview>
      <template #title>responsive (lg:divider-horizontal)</template>

      <div class="flex flex-col w-full lg:flex-row">
        <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
          content
        </div>
        <ui-divider class="lg:divider-horizontal">OR</ui-divider>
        <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
          content
        </div>
      </div>
    </component-preview>
  </div>
</template>
