<script setup lang="ts">
import { COLOR_CLASS_MAP, SIZE_CLASS_MAP } from "~/components/ui/toggle/toggle.vue";

const SIZES: any[] = Object.keys(SIZE_CLASS_MAP);
const COLORS: any[] = Object.keys(COLOR_CLASS_MAP);

const props = [
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
    name: "checked",
    type: "boolean",
    description: "Whether the input is checked or not",
  },
  {
    name: "disabled",
    type: "boolean",
    description: "Whether the input is disabled or not",
  },
];

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////

const checked = ref(true);
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Toggle</h1>

    <p>Toggle is a checkbox that is styled to look like a switch button.</p>

    <component-props-table :props="props" />
    <!-- <component-slots-table :slots="slots" /> -->

    <component-preview>
      <template #title>Toggle</template>

      <ui-toggle v-model:checked="checked" />
    </component-preview>

    <component-preview>
      <template #title>With form-control</template>

      <ui-form-control label="Remember me" inline>
        <ui-toggle v-model:checked="checked" />
      </ui-form-control>
    </component-preview>

    <component-preview>
      <template #title> Sizes</template>

      <div class="flex flex-col items-center gap-2">
        <ui-toggle v-for="size of SIZES" :size="size" checked />
      </div>
    </component-preview>

    <component-preview>
      <template #title>Colors </template>

      <div class="flex flex-col items-center gap-2">
        <ui-form-control v-for="color of COLORS" label="Remember me" inline>
          <ui-toggle :color="color" v-model:checked="checked" />
        </ui-form-control>
      </div>
    </component-preview>

    <component-preview>
      <template #title>Disabled</template>

      <ui-toggle disabled />
    </component-preview>

    <component-preview>
      <template #title>Disabled and checked</template>

      <ui-toggle disabled checked />
    </component-preview>

    <component-preview>
      <template #title>Indeterminate</template>

      <ui-toggle indeterminate />
    </component-preview>
  </div>
</template>
