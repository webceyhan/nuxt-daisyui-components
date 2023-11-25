<script setup lang="ts">
import { DESCRIPTIONS, COLORS, SIZES, SHAPES } from "~/data/button";

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Button</h1>

    <p>Buttons allow the user to take actions or make choices.</p>

    <component-description v-for="desc of DESCRIPTIONS" v-bind="desc" />

    <component-preview>
      <template #title>Button</template>

      <ui-button>Button</ui-button>
      <ui-button label="With label" />
      <ui-button label="With icon" icon="pen" />
      <ui-button label="With loading" loading />
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
