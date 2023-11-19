<script setup lang="ts">
import { DESCRIPTIONS } from "~/data/stack";

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Stack</h1>

    <p>Stack visually puts elements on top of each other.</p>

    <component-description v-for="desc of DESCRIPTIONS" v-bind="desc" />

    <component-preview>
      <template #title>3 divs without stack</template>

      <div>
        <div
          class="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center"
        >
          1
        </div>
        <div
          class="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center"
        >
          2
        </div>
        <div
          class="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center"
        >
          3
        </div>
      </div>
    </component-preview>

    <component-preview>
      <template #title>3 divs with stack</template>

      <ui-stack class="mb-4">
        <div
          class="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center"
        >
          1
        </div>
        <div
          class="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center"
        >
          2
        </div>
        <div
          class="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center"
        >
          3
        </div>
      </ui-stack>
    </component-preview>

    <component-preview>
      <template #title>stacked images</template>

      <ui-stack class="mb-4">
        <img v-for="i in 3" :src="`/img/caro${i}.jpeg`" class="rounded w-28" />
      </ui-stack>
    </component-preview>

    <component-preview>
      <template #title>stacked cards</template>

      <ui-stack class="mb-4">
        <div
          v-for="i in 3"
          class="text-center border border-base-content card w-36 bg-base-100"
        >
          <div class="card-body">A</div>
        </div>
      </ui-stack>
    </component-preview>

    <component-preview>
      <template #title>stacked cards with shadow</template>

      <ui-stack class="mb-4">
        <div
          v-for="shadow of ['shadow-md', 'shadow', 'shadow-sm']"
          class="text-center w-36 card bg-base-200"
          :class="shadow"
        >
          <div class="card-body">A</div>
        </div>
      </ui-stack>
    </component-preview>

    <component-preview>
      <template #title>stacked cards with color</template>

      <ui-stack class="mb-4">
        <div
          v-for="shadow of ['shadow-md', 'shadow', 'shadow-sm']"
          class="card bg-primary text-primary-content"
          :class="shadow"
        >
          <div class="card-body">
            <h2 class="card-title">Notification 1</h2>
            <p>You have 3 unread messages. Tap here to see.</p>
          </div>
        </div>
      </ui-stack>
    </component-preview>
  </div>
</template>
