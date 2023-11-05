<script setup lang="ts">
import {
  COLOR_CLASS_MAP,
  SIZE_CLASS_MAP,
  SHAPE_CLASS_MAP,
} from "~/components/ui/button/button.vue";

const SIZES: any[] = Object.keys(SIZE_CLASS_MAP);
const SHAPES: any[] = Object.keys(SHAPE_CLASS_MAP);
const COLORS: any[] = Object.keys(COLOR_CLASS_MAP);

const props = [
  {
    name: "label",
    type: "string",
    description: "Label of button",
  },
  {
    name: "href",
    type: "string",
    description: "Url of button to render as link",
  },
  {
    name: "icon",
    type: "string",
    description: "Icon at start of button",
  },
  {
    name: "icon-end",
    type: "string",
    description: "Icon at end of button",
  },
  {
    name: "size",
    type: "string",
    values: SIZES,
  },
  {
    name: "shape",
    type: "string",
    values: SHAPES,
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
    description: "Transparent button with colored border",
  },
  {
    name: "active",
    type: "boolean",
    description: "Force button to show active state",
  },
  {
    name: "wide",
    type: "boolean",
    description: "Wide button (more horizontal padding)",
  },
  {
    name: "block",
    type: "boolean",
    description: "Full width button",
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
    <h1 class="text-4xl font-bold mb-8">Button</h1>

    <p>Buttons allow the user to take actions or make choices.</p>

    <component-props-table :props="props" />
    <component-slots-table :slots="slots" />

    <component-preview>
      <template #title>Button</template>

      <ui-button>Button</ui-button>
      <ui-button label="With Label" />
      <ui-button label="With Icon" icon="pen" />
      <ui-button label="With Icon End" icon-end="pen" />
    </component-preview>

    <component-preview>
      <template #title>Sizes</template>

      <ui-button v-for="size of SIZES" :label="size" :size="size" />
    </component-preview>

    <component-preview>
      <template #title>Shapes</template>

      <div v-for="shape of SHAPES" class="flex flex-col gap-3 m-5">
        {{ shape }}

        <ui-button icon="x" class="text-2xl" :shape="shape" />
        <ui-button icon="x" class="text-2xl" :shape="shape" outline />
      </div>
    </component-preview>

    <component-preview>
      <template #title>Colors</template>

      <ui-button v-for="color of COLORS" :label="color" :color="color" />
    </component-preview>

    <component-preview>
      <template #title>Outlined</template>

      <ui-button v-for="(color, i) of COLORS" :label="color" :color="color" outline />
    </component-preview>

    <component-preview>
      <template #title>Active</template>

      <ui-button v-for="color of COLORS" :label="color" :color="color" active />
    </component-preview>

    <component-preview>
      <template #title>Ghost (no background)</template>

      <ui-button label="ghost button" ghost />
    </component-preview>

    <component-preview>
      <template #title>Disabled</template>

      <ui-button disabled>Disabled using attribute</ui-button>
    </component-preview>

    <component-preview>
      <template #title>Wide</template>

      <ui-button label="wide" wide />
    </component-preview>

    <component-preview>
      <template #title>Block</template>

      <ui-button label="block button" block />
    </component-preview>

    <component-preview>
      <template #title>With different HTML tags</template>

      <ui-button href="#" label="link" />
      <ui-button type="submit" label="submit" />
      <ui-button type="reset" label="reset" />
      <input type="radio" aria-label="radio" class="btn" />
      <input type="checkbox" aria-label="checkbox" class="btn" />
    </component-preview>
  </div>
</template>
