<script setup lang="ts">
import { COLOR_CLASS_MAP, POSITION_CLASS_MAP } from "~/components/ui/tooltip/tooltip.vue";

const COLORS: any[] = Object.keys(COLOR_CLASS_MAP);
const POSITIONS: any[] = Object.keys(POSITION_CLASS_MAP);

const props = [
  {
    name: "as",
    type: "string",
    description: "The element to render",
  },
  {
    name: "text",
    type: "string",
    description: "The text to show in the tooltip",
  },
  {
    name: "color",
    type: "string",
    values: COLORS,
  },
  {
    name: "position",
    type: "string",
    values: POSITIONS,
  },
  {
    name: "open",
    type: "boolean",
    description: "Whether the tooltip should be open",
  },
];

const slots = [
  {
    name: "default",
    description: "Content of the tooltip",
  },
];

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Tooltip</h1>

    <p>Tooltip can be used to show a message when hovering over an element.</p>

    <component-description name="tooltip" :props="props" :slots="slots" />

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
