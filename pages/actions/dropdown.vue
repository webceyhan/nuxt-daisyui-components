<script setup lang="ts">
import { COLOR_CLASS_MAP, SIZE_CLASS_MAP } from "~/components/ui/button/button.vue";
import { POSITION_CLASS_MAP } from "~/components/ui/dropdown/dropdown.vue";

const SIZES: any[] = Object.keys(SIZE_CLASS_MAP);
const COLORS: any[] = Object.keys(COLOR_CLASS_MAP);
const POSITIONS: any[] = Object.keys(POSITION_CLASS_MAP);

const props = [
  {
    name: "label",
    type: "string",
    description: "Label of dropdown trigger",
  },
  {
    name: "icon",
    type: "string",
    description: "Icon at start of dropdown trigger",
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
    name: "outline",
    type: "boolean",
    description: "Transparent trigger button with colored border",
  },
  {
    name: "position",
    type: "string",
    values: POSITIONS,
  },
  {
    name: "open",
    type: "boolean",
    description: "Force open",
  },
  {
    name: "hover",
    type: "boolean",
    description: "Opens on hover too",
  },
  {
    name: "disabled",
    type: "boolean",
    description: "Disable dropdown trigger",
  },
  {
    name: "align-to-end",
    type: "boolean",
    description: "Aligns to end",
  },
  {
    name: "no-indicator",
    type: "boolean",
    description: "No indicator icon",
  },
];

const slots = [
  {
    name: "default",
    description: "Content of menu",
  },
  {
    name: "trigger",
    description: "Trigger button",
  },
];

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////

const spacings: any = {
  top: "mt-32",
  bottom: "mb-32",
  right: "my-16 mr-16",
  left: "my-16 ml-16",
};
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Dropdown</h1>

    <p>Dropdown can open a menu or any other element when the button is clicked.</p>

    <component-description name="dropdown" :props="props" :slots="slots" />

    <component-preview>
      <template #title>Dropdown</template>

      <ui-dropdown class="mb-32">
        <ui-menu-item v-for="i in 2" :label="`Item ${i}`" />
      </ui-dropdown>

      <ui-dropdown class="mb-32" label="with label">
        <ui-menu-item v-for="i in 2" :label="`Item ${i}`" />
      </ui-dropdown>

      <ui-dropdown class="mb-32" label="with icon" icon="house">
        <ui-menu-item v-for="i in 2" :label="`Item ${i}`" icon="pen" />
      </ui-dropdown>

      <ui-dropdown class="mb-32" label="no indicator" no-indicator>
        <ui-menu-item v-for="i in 2" :label="`Item ${i}`" />
      </ui-dropdown>
    </component-preview>

    <component-preview>
      <template #title>Sizes</template>

      <ui-dropdown v-for="size of SIZES" :label="size" :size="size" class="mb-32">
        <ui-menu-item v-for="i in 2" :label="`Item ${i}`" />
      </ui-dropdown>
    </component-preview>

    <component-preview>
      <template #title>Colors</template>

      <ui-dropdown v-for="color of COLORS" :label="color" :color="color" class="mb-20">
        <ui-menu-item v-for="i in 2" :label="`Item ${i}`" />
      </ui-dropdown>
    </component-preview>

    <component-preview>
      <template #title>Outlined</template>

      <ui-dropdown
        v-for="color of COLORS"
        :label="color"
        :color="color"
        class="mb-20"
        outline
      >
        <ui-menu-item v-for="i in 2" :label="`Item ${i}`" />
      </ui-dropdown>
    </component-preview>

    <h3 class="text-2xl">Positions</h3>

    <component-preview v-for="position of POSITIONS">
      <template #title>Dropdown {{ position }}</template>

      <ui-dropdown :class="spacings[position]" label="click" :position="position">
        <ui-menu-item v-for="i in 2" :label="`Item ${i}`" />
      </ui-dropdown>

      <ui-dropdown
        :class="spacings[position]"
        :position="position"
        label="align to end"
        align-to-end
      >
        <ui-menu-item v-for="i in 2" :label="`Item ${i}`" />
      </ui-dropdown>
    </component-preview>

    <component-preview>
      <template #title>Force open</template>

      <ui-dropdown class="mb-32" label="button" open>
        <ui-menu-item v-for="i in 2" :label="`Item ${i}`" />
      </ui-dropdown>
    </component-preview>

    <component-preview>
      <template #title>Hoverable</template>

      <ui-dropdown class="mb-32" label="hover" hover>
        <ui-menu-item v-for="i in 2" :label="`Item ${i}`" />
      </ui-dropdown>
    </component-preview>

    <component-preview>
      <template #title>Disabled</template>

      <ui-dropdown label="Disabled using attribute" class="mb-20" disabled>
        <ui-menu-item v-for="i in 2" :label="`Item ${i}`" />
      </ui-dropdown>
    </component-preview>
  </div>
</template>
