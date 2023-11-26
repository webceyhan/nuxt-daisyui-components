<script setup lang="ts">
import { DESCRIPTIONS, COLORS, POSITIONS } from "./_data";

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Tooltip</h1>

    <p>Tooltip can be used to show a message when hovering over an element.</p>

    <component-description v-for="desc of DESCRIPTIONS" v-bind="desc" />

    <component-preview>
      <template #title>Tooltip</template>

      <div class="my-6">
        <ui-tooltip text="hello">
          <ui-button>Hover me</ui-button>
        </ui-tooltip>
      </div>
    </component-preview>

    <component-preview>
      <template #title> Colors </template>

      <div v-for="color of COLORS" class="m-6">
        <ui-tooltip text="hello" :color="color" open>
          <ui-button :color="color">{{ color }}</ui-button>
        </ui-tooltip>
      </div>
    </component-preview>

    <h3 class="text-2xl">Positions</h3>

    <component-preview v-for="position of POSITIONS">
      <template #title>
        <span class="capitalize">{{ position }}</span>
      </template>

      <div class="my-6">
        <ui-tooltip text="hello" :position="position" open>
          <ui-button>{{ position }}</ui-button>
        </ui-tooltip>
      </div>
    </component-preview>

    <component-preview>
      <template #title>Force open</template>

      <div class="my-6">
        <ui-tooltip text="hello" open>
          <ui-button>Force open</ui-button>
        </ui-tooltip>
      </div>
    </component-preview>
  </div>
</template>
