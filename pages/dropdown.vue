<script setup lang="ts">
import { BRAND_COLORS, POSITIONS } from "~/constants";

const spacings = {
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

    <component-preview>
      <template #title>Dropdown with/without label</template>

      <ui-dropdown class="mb-32">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ui-dropdown>

      <ui-dropdown class="mb-32" label="with label">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ui-dropdown>

      <ui-dropdown class="mb-32" label="no indicator" icon-end="none">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ui-dropdown>
    </component-preview>

    <component-preview>
      <template #title>Dropdown with colors</template>

      <ui-dropdown
        v-for="color of BRAND_COLORS"
        :label="color"
        :color="color"
        class="mb-32"
      >
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ui-dropdown>
    </component-preview>

    <h3 class="text-2xl">Positions</h3>

    <component-preview v-for="position of POSITIONS">
      <template #title>Dropdown {{ position }}</template>

      <ui-dropdown :class="spacings[position]" label="click" :position="position">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ui-dropdown>

      <ui-dropdown
        :class="spacings[position]"
        :position="position"
        label="align to end"
        align-to-end
      >
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ui-dropdown>
    </component-preview>

    <component-preview>
      <template #title>Dropdown on hover</template>

      <ui-dropdown class="mb-32" label="hover" hover>
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ui-dropdown>
    </component-preview>

    <component-preview>
      <template #title>Force open</template>

      <ui-dropdown class="mb-32" label="button" open>
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ui-dropdown>
    </component-preview>
  </div>
</template>
