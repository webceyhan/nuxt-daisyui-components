<script setup lang="ts">
import { DESCRIPTIONS, SIZES, COLORS, POSITIONS } from "~/data/dropdown";

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

    <component-description v-for="desc of DESCRIPTIONS" v-bind="desc" />

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
