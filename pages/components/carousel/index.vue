<script setup lang="ts">
import { DESCRIPTIONS, SNAPS } from "./_data";

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////

const items = [1, 2, 3, 4, 5, 6, 7];
const wideItems = [1, 2, 3, 4];
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Carousel</h1>

    <p>Carousel show images or content in a scrollable area.</p>

    <component-description v-for="desc of DESCRIPTIONS" v-bind="desc" />

    <component-preview v-for="snap of SNAPS">
      <template #title>Snap to {{ snap }}</template>

      <ui-carousel :snap="snap" class="rounded-box">
        <ui-carousel-item v-for="item of items">
          <img :src="`/img/caro${item}.jpeg`" alt="Burger" />
        </ui-carousel-item>
      </ui-carousel>
    </component-preview>

    <component-preview>
      <template #title>Carousel with full width items</template>

      <ui-carousel class="w-64 rounded-box">
        <ui-carousel-item v-for="item of items" class="w-full">
          <img :src="`/img/caro${item}.jpeg`" alt="Burger" class="w-full" />
        </ui-carousel-item>
      </ui-carousel>
    </component-preview>

    <component-preview>
      <template #title>Vertical carousel</template>

      <ui-carousel class="h-96 rounded-box" vertical>
        <ui-carousel-item v-for="item of items" class="h-full">
          <img :src="`/img/caro${item}.jpeg`" alt="Burger" />
        </ui-carousel-item>
      </ui-carousel>
    </component-preview>

    <component-preview>
      <template #title>Carousel with half width items</template>

      <ui-carousel class="w-96 rounded-box">
        <ui-carousel-item v-for="item of items" class="w-1/2">
          <img :src="`/img/caro${item}.jpeg`" alt="Burger" class="w-full" />
        </ui-carousel-item>
      </ui-carousel>
    </component-preview>

    <component-preview>
      <template #title>Full-bleed carousel</template>

      <ui-carousel snap="center" class="max-w-md p-4 space-x-4 bg-neutral rounded-box">
        <ui-carousel-item v-for="item of items">
          <img :src="`/img/caro${item}.jpeg`" alt="Burger" class="rounded-box" />
        </ui-carousel-item>
      </ui-carousel>
    </component-preview>

    <component-preview>
      <template #title>Carousel with indicator buttons</template>
      <template #description>
        This slider works with anchor links so the browser will snap vertically to the
        image when you click buttons.
      </template>

      <ui-carousel class="w-full">
        <ui-carousel-item v-for="id of wideItems" :id="`item${id}`">
          <img :src="`/img/caro-wide${id}.jpeg`" class="w-full" />
        </ui-carousel-item>
      </ui-carousel>

      <div class="flex justify-center w-full py-2 gap-2">
        <a v-for="id of wideItems" :href="`#item${id}`" class="btn btn-xs">
          {{ id }}
        </a>
      </div>
    </component-preview>

    <component-preview>
      <template #title>Carousel with next/prev buttons</template>
      <template #description>
        This slider works with anchor links so the browser will snap vertically to the
        image when you click buttons.
      </template>

      <ui-carousel class="w-full">
        <ui-carousel-item
          v-for="id of wideItems"
          :id="`slide${id}`"
          class="relative w-full"
        >
          <img :src="`/img/caro-wide${id}.jpeg`" class="w-full" />

          <!-- navigation buttons -->
          <div
            class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
          >
            <a :href="`#slide${id - 1}`" class="btn btn-circle">❮</a>
            <a :href="`#slide${id + 1}`" class="btn btn-circle">❯</a>
          </div>
        </ui-carousel-item>
      </ui-carousel>
    </component-preview>
  </div>
</template>
