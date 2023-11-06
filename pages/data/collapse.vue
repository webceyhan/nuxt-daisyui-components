<script setup lang="ts">
import { DESCRIPTIONS, INDICATORS } from "~/data/collapse";

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Collapse</h1>

    <p>Collapse is used for showing and hiding content.</p>

    <component-description v-for="desc of DESCRIPTIONS" v-bind="desc" />

    <component-preview>
      <template #title>Collapse with focus</template>
      <template #description>
        This collapse works with focus. When div loses focus, it gets closed
      </template>

      <ui-collapse>
        <template #title>Focus me to see content</template>
        <p>tabindex="0" attribute is necessary to make the div focusable</p>
      </ui-collapse>
    </component-preview>

    <component-preview>
      <template #title>Collapse with checkbox</template>
      <template #description>
        This collapse works with checkbox instead of focus. It needs to get clicked again
        to get closed.
      </template>

      <ui-collapse toggle open>
        <template #title>Click me to show/hide content</template>
        <p>hello</p>
      </ui-collapse>
    </component-preview>

    <component-preview>
      <template #title>With border and background color</template>

      <ui-collapse class="border border-base-300">
        <template #title>Focus me to see content</template>
        <p>tabindex="0" attribute is necessary to make the div focusable</p>
      </ui-collapse>
    </component-preview>

    <component-preview v-for="indicator of INDICATORS">
      <template #title>Collapse with {{ indicator }} indicator</template>

      <ui-collapse :indicator="indicator">
        <template #title>Focus me to see content</template>
        <p>tabindex="0" attribute is necessary to make the div focusable</p>
      </ui-collapse>
    </component-preview>

    <component-preview>
      <template #title>Force open</template>

      <ui-collapse open>
        <template #title>I have collapse-open class</template>
        <p>tabindex="0" attribute is necessary to make the div focusable</p>
      </ui-collapse>
    </component-preview>

    <component-preview>
      <template #title>Force close</template>

      <ui-collapse :open="false">
        <template #title>I have collapse-close class</template>
        <p>tabindex="0" attribute is necessary to make the div focusable</p>
      </ui-collapse>
    </component-preview>

    <component-preview>
      <template #title>Custom colors for collapse that works with focus</template>
      <template #description>
        Use Tailwind CSS `group` and `group-focus` utilities to apply style when parent
        div is focused
      </template>

      <ui-collapse
        class="bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content"
      >
        <template #title>Focus me to see content</template>
        <p>tabindex="0" attribute is necessary to make the div focusable</p>
      </ui-collapse>
    </component-preview>

    <component-preview>
      <template #title>Custom colors for collapse that works with checkbox</template>
      <template #description>
        Use Tailwind CSS `peer` and `peer-checked` utilities to apply style when sibling
        checkbox is checked
      </template>

      <ui-collapse
        class="bg-primary text-primary-content toggle-checked:bg-secondary toggle-checked:text-secondary-content"
      >
        <template #title>Click me to show/hide content</template>
        <p>tabindex="0" attribute is necessary to make the div focusable</p>
      </ui-collapse>
    </component-preview>
  </div>
</template>
