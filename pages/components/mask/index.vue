<script setup lang="ts">
import { DESCRIPTIONS, SHAPES } from "./_data";

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Mask</h1>

    <p>Mask crops the content of the element to common shapes.</p>

    <component-description v-for="desc of DESCRIPTIONS" v-bind="desc" />

    <component-preview v-for="shape of SHAPES">
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
