<script setup lang="ts">
import { DESCRIPTIONS, INDICATORS } from "./_data";

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////
const FOCUS_TITLE = "Focus me to see content";
const TOGGLE_TITLE = "Click me to toggle content";
const ACCORDION_TITLE = "Click to open this one and close others";

const CONTENT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. " +
  "Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. " +
  "Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.";
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Collapse</h1>

    <p>Collapse is used for showing and hiding content.</p>

    <component-description v-for="desc of DESCRIPTIONS" v-bind="desc" />

    <component-preview>
      <template #title>With focus (default)</template>
      <template #description>
        This collapse works with focus. When div loses focus, it gets closed
      </template>

      <ui-collapse :title="FOCUS_TITLE">
        <p>{{ CONTENT }}</p>
      </ui-collapse>
    </component-preview>

    <component-preview>
      <template #title>With toggle</template>
      <template #description>
        This collapse works with checkbox instead of focus. It needs to get clicked again
        to get closed.
      </template>

      <ui-collapse :title="TOGGLE_TITLE" toggle>
        <p>{{ CONTENT }}</p>
      </ui-collapse>
    </component-preview>

    <component-preview>
      <template #title>With icon</template>
      <template #description>
        This collapse contains and icon at start of the title.
      </template>

      <ui-collapse icon="exclamation-circle" :title="FOCUS_TITLE">
        <p>{{ CONTENT }}</p>
      </ui-collapse>
    </component-preview>

    <component-preview>
      <template #title>With indicators</template>

      <ui-collapse
        v-for="indicator of INDICATORS"
        :title="`${FOCUS_TITLE} with ${indicator} indicator`"
        :indicator="indicator"
      >
        <p>{{ CONTENT }}</p>
      </ui-collapse>
    </component-preview>

    <component-preview>
      <template #title>Force open</template>

      <ui-collapse title="I always stay open" open>
        <p>{{ CONTENT }}</p>
      </ui-collapse>
    </component-preview>

    <component-preview>
      <template #title>Accordion</template>
      <template #description>
        Toggle content but only one item can stay open at a time by setting `name` prop.
      </template>

      <div class="space-y-2">
        <ui-collapse v-for="n in 2" name="my-accordion-1" :title="ACCORDION_TITLE">
          <p>{{ CONTENT }}</p>
        </ui-collapse>
      </div>
    </component-preview>

    <component-preview>
      <template #title>Accordion with Join wrapper</template>
      <template #description>
        Join the items together and handle border radius automatically
      </template>

      <ui-join class="w-full" vertical>
        <ui-collapse v-for="n in 2" :title="ACCORDION_TITLE">
          <p>{{ CONTENT }}</p>
        </ui-collapse>
      </ui-join>
    </component-preview>

    <component-preview>
      <template #title>Custom colors with focus</template>
      <template #description>
        Use Tailwind CSS `group` and `group-focus` utilities to apply style when parent
        div is focused
      </template>

      <ui-collapse
        class="bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content"
        :title="FOCUS_TITLE"
      >
        <p>{{ CONTENT }}</p>
      </ui-collapse>
    </component-preview>

    <component-preview>
      <template #title>Custom colors with toggle</template>
      <template #description>
        Use Tailwind CSS `peer` and `peer-checked` utilities to apply style when sibling
        checkbox is checked
      </template>

      <ui-collapse
        class="bg-primary text-primary-content toggle-checked:bg-secondary toggle-checked:text-secondary-content"
        :title="TOGGLE_TITLE"
        toggle
      >
        <p>{{ CONTENT }}</p>
      </ui-collapse>
    </component-preview>
  </div>
</template>
