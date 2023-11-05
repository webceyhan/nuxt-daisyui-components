<script setup lang="ts">
import { TEXT_SIZES } from "~/constants";
import { COLOR_CLASS_MAP, SIZE_CLASS_MAP } from "~/components/ui/badge/badge.vue";

const SIZES: any[] = Object.keys(SIZE_CLASS_MAP);
const COLORS: any[] = Object.keys(COLOR_CLASS_MAP);

const props = [
  {
    name: "label",
    type: "string",
    description: "Label of badge",
  },
  {
    name: "size",
    type: "string",
    values: SIZES,
  },
  {
    name: "color",
    type: "string",
    values: COLORS,
  },
  {
    name: "ghost",
    type: "boolean",
    description: "No background",
  },
  {
    name: "outline",
    type: "boolean",
    description: "Transparent badge with colored border",
  },
];

const slots = [
  {
    name: "default",
    description: "Content of button",
  },
];

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Badge</h1>

    <p>Badges are used to inform the user of the status of specific data.</p>

    <component-props-table :props="props" />
    <component-slots-table :slots="slots" />

    <component-preview>
      <template #title>Badge</template>

      <ui-badge>Badge</ui-badge>

      <ui-badge label="With label" />

      <ui-badge>
        <ui-icon name="info-circle" class="me-2" />
        With icon
      </ui-badge>
    </component-preview>

    <component-preview>
      <template #title>Sizes</template>

      <ui-badge v-for="size of SIZES" label="987,654" :size="size" />
    </component-preview>

    <component-preview>
      <template #title>Colors</template>

      <ui-badge v-for="color of COLORS" :label="color" :color="color" />
    </component-preview>

    <component-preview>
      <template #title>Outlined</template>

      <ui-badge v-for="(color, i) of COLORS" :label="color" :color="color" outline />
    </component-preview>

    <component-preview>
      <template #title>Ghost (no background)</template>

      <ui-badge label="ghost badge" ghost />
    </component-preview>

    <component-preview>
      <template #title>Empty badge</template>

      <ui-badge v-for="size of SIZES" :size="size" color="primary" />
    </component-preview>

    <component-preview>
      <template #title>Badge in a text</template>

      <div class="flex flex-col items-center">
        <h2 v-for="(size, i) of SIZES" :class="TEXT_SIZES[i]">
          Heading
          <ui-badge label="NEW" :size="size" color="primary" />
        </h2>
      </div>
    </component-preview>

    <component-preview>
      <template #title>Badge in a button</template>
      <ui-button>
        Inbox
        <ui-badge label="+99" />
      </ui-button>

      <ui-button>
        Inbox
        <ui-badge label="+99" color="secondary" />
      </ui-button>
    </component-preview>
  </div>
</template>
