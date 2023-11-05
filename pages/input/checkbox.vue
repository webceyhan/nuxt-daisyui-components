<script setup lang="ts">
import { COLOR_CLASS_MAP, SIZE_CLASS_MAP } from "~/components/ui/input/checkbox.vue";

const SIZES: any[] = Object.keys(SIZE_CLASS_MAP);
const COLORS: any[] = Object.keys(COLOR_CLASS_MAP);

const props = [
  {
    name: "color",
    type: "string",
    values: COLORS,
  },
  {
    name: "size",
    type: "string",
    values: SIZES,
  },
  {
    name: "checked",
    type: "boolean",
    description: "Whether the checkbox is checked or not",
  },
  {
    name: "disabled",
    type: "boolean",
    description: "Whether the checkbox is disabled or not",
  },
];

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////

const checked = ref(true);
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Checkbox</h1>

    <p>Checkboxes are used to select or deselect a value.</p>

    <component-props-table :props="props" />
    <!-- <component-slots-table :slots="slots" /> -->

    <component-preview>
      <template #title>Checkbox</template>

      <ui-checkbox v-model:checked="checked" />
      {{ checked }}
    </component-preview>

    <component-preview>
      <template #title>With form-control</template>

      <ui-form-control label="Remember me" inline>
        <ui-checkbox v-model:checked="checked" />
      </ui-form-control>
    </component-preview>

    <component-preview>
      <template #title> Sizes</template>

      <div class="flex flex-col items-center gap-2">
        <ui-checkbox v-for="size of SIZES" :size="size" checked />
      </div>
    </component-preview>

    <component-preview>
      <template #title> Colors </template>
      <div class="flex flex-col">
        <ui-form-control v-for="color of COLORS" :label="color" inline>
          <ui-checkbox :color="color" v-model:checked="checked" />
        </ui-form-control>
      </div>
    </component-preview>

    <component-preview>
      <template #title>Disabled</template>

      <ui-checkbox disabled />
    </component-preview>

    <component-preview>
      <template #title>Disabled and checked</template>

      <ui-checkbox disabled checked />
    </component-preview>

    <component-preview>
      <template #title>Indeterminate</template>

      <ui-checkbox indeterminate />
    </component-preview>
  </div>
</template>
