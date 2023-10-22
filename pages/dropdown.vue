<script setup lang="ts">
import { BRAND_COLORS } from "~/constants";
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
    </component-preview>

    <component-preview>
      <template #title>Dropdown with colors</template>

      <ui-dropdown class="mb-32" v-for="color of BRAND_COLORS">
        <template #trigger>
          <ui-button :color="color">{{ color }}</ui-button>
        </template>

        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ui-dropdown>
    </component-preview>

    <h3 class="text-2xl">Positions</h3>

    <component-preview>
      <template #title>Dropdown bottom</template>

      <ui-dropdown class="mb-32" label="click">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ui-dropdown>

      <ui-dropdown class="mb-32" label="align to end" align-to-end>
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ui-dropdown>
    </component-preview>

    <component-preview>
      <template #title>Dropdown top</template>

      <ui-dropdown class="mt-32" position="top" label="click">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ui-dropdown>

      <ui-dropdown class="mt-32" position="top" label="align to end" align-to-end>
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ui-dropdown>
    </component-preview>

    <component-preview>
      <template #title>Dropdown left</template>

      <ui-dropdown class="mb-16" position="left" label="click">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ui-dropdown>

      <ui-dropdown class="mt-16" position="left" label="align to end" align-to-end>
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ui-dropdown>
    </component-preview>

    <component-preview>
      <template #title>Dropdown right</template>

      <ui-dropdown class="mb-16" position="right" label="click">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ui-dropdown>

      <ui-dropdown class="mt-16" position="right" label="align to end" align-to-end>
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
