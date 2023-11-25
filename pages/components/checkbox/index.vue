<script setup lang="ts">
import { DESCRIPTIONS, COLORS, SIZES } from "~/data/checkbox";

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////

const checked = ref(true);
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Checkbox</h1>

    <p>Checkboxes are used to select or deselect a value.</p>

    <component-description v-for="desc of DESCRIPTIONS" v-bind="desc" />

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
