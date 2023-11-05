<script setup lang="ts">
import { TEXT_COLORS } from "~/constants";
import { SIZE_CLASS_MAP } from "~/components/ui/bottom-nav/bottom-nav.vue";

const SIZES: any[] = Object.keys(SIZE_CLASS_MAP);

const props = [
  {
    name: "size",
    type: "string",
    values: SIZES,
  },
];

const slots = [
  {
    name: "default",
    description: "Content of navigation",
  },
];

const itemProps = [
  {
    name: "label",
    type: "string",
    description: "Label text",
  },
  {
    name: "icon",
    type: "string",
    description: "Icon name",
  },
  {
    name: "active",
    type: "boolean",
    description: "Active state",
  },
  {
    name: "disabled",
    type: "boolean",
    description: "Disabled state",
  },
];

const itemSlots = [
  {
    name: "default",
    description: "Content of navigation item",
  },
];

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////

const items = [
  { label: "Home", icon: "house" },
  { label: "Warnings", icon: "info-circle", active: true },
  { label: "Statics", icon: "reception-4" },
];

const customColors = [
  "bg-pink-200 text-pink-600",
  "bg-blue-200 text-blue-600 border-blue-600",
  "bg-teal-200 text-teal-600",
];
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Bottom navigation</h1>

    <p>Bottom navigation bar allows navigation between primary screens.</p>

    <component-description name="bottom-nav" :props="props" />
    <component-description name="bottom-nav-item" :props="itemProps" />

    <component-preview>
      <template #title>Bottom Navigation</template>

      <ui-bottom-nav class="relative">
        <ui-bottom-nav-item
          v-for="item of items"
          :icon="item.icon"
          :active="item.active"
        />
      </ui-bottom-nav>
    </component-preview>

    <component-preview>
      <template #title>With title</template>

      <ui-bottom-nav class="relative">
        <ui-bottom-nav-item
          v-for="item of items"
          :icon="item.icon"
          :active="item.active"
          :label="item.label"
        />
      </ui-bottom-nav>
    </component-preview>

    <component-preview>
      <template #title>Sizes</template>

      <ui-bottom-nav class="relative" v-for="size of SIZES" :size="size">
        <ui-bottom-nav-item
          v-for="item of items"
          :icon="item.icon"
          :active="item.active"
        />
      </ui-bottom-nav>
    </component-preview>

    <component-preview>
      <template #title>With colors</template>

      <ui-bottom-nav class="relative" v-for="color of TEXT_COLORS">
        <ui-bottom-nav-item
          v-for="item of items"
          :icon="item.icon"
          :active="item.active"
          :class="color"
        />
      </ui-bottom-nav>
    </component-preview>

    <component-preview>
      <template #title>With custom colors</template>

      <ui-bottom-nav class="relative">
        <ui-bottom-nav-item
          v-for="(item, i) of items"
          :icon="item.icon"
          :active="item.active"
          :label="item.label"
          :class="customColors[i]"
        />
      </ui-bottom-nav>
    </component-preview>

    <component-preview>
      <template #title>Disabled</template>

      <ui-bottom-nav class="relative">
        <ui-bottom-nav-item
          v-for="item of items"
          :icon="item.icon"
          :disabled="item.active"
        />
      </ui-bottom-nav>
    </component-preview>
  </div>
</template>
