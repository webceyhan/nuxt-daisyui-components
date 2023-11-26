<script setup lang="ts">
import { DESCRIPTIONS, INDICATORS } from "./_data";

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Accordion</h1>

    <p>
      Accordion is used for showing and hiding content but only one item can stay open at
      a time.
    </p>

    <component-description v-for="desc of DESCRIPTIONS" v-bind="desc" />

    <component-preview>
      <template #title>Accordion using radio inputs</template>

      <ui-accordion name="my-accordion-1" v-for="i in 3" :open="i == 1">
        <template #title>Click to open this one and close others</template>
        <p>hello</p>
      </ui-accordion>
    </component-preview>

    <component-preview v-for="indicator of INDICATORS.slice(1)">
      <template #title>With {{ indicator }} indicator</template>

      <ui-accordion
        :name="`my-accordion-${indicator}`"
        v-for="i in 3"
        :indicator="indicator"
        :open="i == 1"
      >
        <template #title>Click to open this one and close others</template>
        <p>hello</p>
      </ui-accordion>
    </component-preview>

    <component-preview>
      <template #title>Using Accordion and Join together</template>
      <template #description>
        to join the items together and handle border radius automatically
      </template>

      <ui-join class="w-full" vertical>
        <ui-accordion v-for="i in 3" name="my-accordion-4" indicator="arrow">
          <template #title>Click to open this one and close others</template>
          <p>hello</p>
        </ui-accordion>
      </ui-join>
    </component-preview>
  </div>
</template>
