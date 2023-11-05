<script setup lang="ts">
import { SIZE_CLASS_MAP } from "~/components/ui/tab/tab.vue";

const SIZES: any[] = Object.keys(SIZE_CLASS_MAP);

const props = [
  {
    name: "boxed",
    type: "boolean",
    description: "Whether the tabs should be boxed",
  },
];

const slots = [
  {
    name: "default",
    description: "Content of the tabs",
  },
];

const itemProps = [
  {
    name: "size",
    type: "Size",
    values: SIZES,
  },
  {
    name: "active",
    type: "boolean",
    description: "Whether the tab is active",
  },
  {
    name: "lifted",
    type: "boolean",
    description: "Whether the tab is lifted",
  },
  {
    name: "bordered",
    type: "boolean",
    description: "Whether the tab is bordered",
  },
  {
    name: "disabled",
    type: "boolean",
    description: "Whether the tab is disabled",
  },
];

const itemSlots = [
  { name: "default", description: "Content of the tab" },
  { name: "indicator", description: "Indicator of the tab" },
];

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////

const links = [
  { label: "Tab 1", active: false },
  { label: "Tab 2", active: true },
  { label: "Tab 3", active: false },
];
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Tabs</h1>

    <p>Tabs can be used to show a list of links in a tabbed format.</p>

    <component-props-table :props="props" />
    <component-slots-table :slots="slots" />

    <h3 class="text-lg font-bold">Tab Item</h3>
    <component-props-table :props="itemProps" />
    <component-slots-table :slots="itemSlots" />

    <component-preview>
      <template #title>Tabs</template>

      <ui-tab-nav>
        <ui-tab v-for="link of links" :active="link.active">{{ link.label }}</ui-tab>
      </ui-tab-nav>
    </component-preview>

    <component-preview>
      <template #title>Sizes</template>

      <div class="flex flex-col items-center gap-3">
        <ui-tab-nav v-for="size of SIZES">
          <ui-tab v-for="link of links" :active="link.active" lifted :size="size">
            {{ size }}
          </ui-tab>
        </ui-tab-nav>
      </div>
    </component-preview>

    <component-preview>
      <template #title>Bordered</template>

      <ui-tab-nav>
        <ui-tab v-for="link of links" :active="link.active" bordered>{{
          link.label
        }}</ui-tab>
      </ui-tab-nav>
    </component-preview>

    <component-preview>
      <template #title>Lifted</template>

      <ui-tab-nav>
        <ui-tab v-for="link of links" :active="link.active" lifted>{{
          link.label
        }}</ui-tab>
      </ui-tab-nav>
    </component-preview>

    <component-preview>
      <template #title>Boxed</template>

      <ui-tab-nav boxed>
        <ui-tab v-for="link of links" :active="link.active">{{ link.label }}</ui-tab>
      </ui-tab-nav>
    </component-preview>
  </div>
</template>
