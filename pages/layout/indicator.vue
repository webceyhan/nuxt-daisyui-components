<script setup lang="ts">
import {
  ALIGNMENT_CLASS_MAP,
  VERTICAL_ALIGNMENT_CLASS_MAP,
} from "~/components/ui/layout/indicator.vue";

const ALIGNMENTS: any[] = Object.keys(ALIGNMENT_CLASS_MAP);
const VERTICAL_ALIGNMENTS: any[] = Object.keys(VERTICAL_ALIGNMENT_CLASS_MAP);

const props = [
  {
    name: "item-class",
    type: "string",
    description: "Class for the indicator item",
  },
  {
    name: "alignment",
    type: "string",

    values: ALIGNMENTS,
  },
  {
    name: "vertical-alignment",
    type: "string",
    values: VERTICAL_ALIGNMENTS,
  },
];

const slots = [
  {
    name: "default",
    description: "Content of indicator",
  },
  {
    name: "item",
    description: "Content of indicator item",
  },
];

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////

const positions = [
  {
    label: "indicator-top (default) indicator-start",
    alignment: "start",
    verticalAlignment: "top",
  },
  {
    label: "indicator-top (default) indicator-center",
    alignment: "center",
    verticalAlignment: "top",
  },
  {
    label: "indicator-top (default) indicator-end (default)",
    alignment: "end",
    verticalAlignment: "top",
  },
  {
    label: "indicator-middle indicator-start",
    alignment: "start",
    verticalAlignment: "middle",
  },
  {
    label: "indicator-middle indicator-center",
    alignment: "center",
    verticalAlignment: "middle",
  },
  {
    label: "indicator-middle indicator-end (default)",
    alignment: "end",
    verticalAlignment: "middle",
  },
  {
    label: "indicator-bottom indicator-start",
    alignment: "start",
    verticalAlignment: "bottom",
  },
  {
    label: "indicator-bottom indicator-center",
    alignment: "center",
    verticalAlignment: "bottom",
  },
  {
    label: "indicator-bottom indicator-end (default)",
    alignment: "end",
    verticalAlignment: "bottom",
  },
];
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Indicator</h1>

    <p>Indicators are used to place an element on the corner of another element.</p>

    <component-props-table :props="props" />
    <component-slots-table :slots="slots" />

    <component-preview>
      <template #title>Empty badge as indicator</template>

      <ui-indicator>
        <template #item>
          <ui-badge color="secondary" />
        </template>
        <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
      </ui-indicator>
    </component-preview>

    <component-preview>
      <template #title>Badge as indicator</template>

      <ui-indicator>
        <template #item>
          <ui-badge color="primary">new</ui-badge>
        </template>
        <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
      </ui-indicator>
    </component-preview>

    <component-preview>
      <template #title>for button</template>

      <ui-indicator>
        <template #item>
          <ui-badge color="secondary">99+</ui-badge>
        </template>
        <button class="btn">inbox</button>
      </ui-indicator>
    </component-preview>

    <component-preview>
      <template #title>for tab</template>

      <ui-tabs>
        <ui-tab lifted>Messages</ui-tab>
        <ui-tab lifted active>
          <template #indicator>
            <ui-badge>8</ui-badge>
          </template>
          Notifications
        </ui-tab>
        <ui-tab lifted>Requests</ui-tab>
      </ui-tabs>
    </component-preview>

    <component-preview>
      <template #title>for avatar</template>

      <ui-avatar>
        <template #indicator>
          <ui-badge color="secondary">typing…</ui-badge>
        </template>

        <div class="w-20 h-20 rounded-lg">
          <img src="/img/avatar.jpg" />
        </div>
      </ui-avatar>
    </component-preview>

    <component-preview>
      <template #title>for an input</template>

      <ui-indicator>
        <template #item>
          <ui-badge>Required</ui-badge>
        </template>

        <input
          type="text"
          placeholder="Your email address"
          class="input input-bordered"
        />
      </ui-indicator>
    </component-preview>

    <component-preview>
      <template #title>A button as an indicator for a card</template>

      <ui-indicator vertical-alignment="bottom" class="my-6 mx-10">
        <template #item>
          <ui-button color="primary">Apply</ui-button>
        </template>

        <ui-card class="border">
          <template #title>Job Title</template>
          <p>Rerum reiciendis beatae tenetur excepturi</p>
        </ui-card>
      </ui-indicator>
    </component-preview>

    <component-preview>
      <template #title>in center of an image</template>

      <ui-indicator alignment="center" vertical-alignment="middle">
        <template #item>
          <ui-badge color="secondary">Uploading Image...</ui-badge>
        </template>

        <img src="/img/shoe.jpg" class="rounded" />
      </ui-indicator>
    </component-preview>

    <component-preview v-for="position of positions">
      <template #title>{{ position.label }}</template>

      <ui-indicator
        :alignment="(position.alignment as any)"
        :vertical-alignment="(position.verticalAlignment as any)"
      >
        <template #item>
          <ui-badge color="secondary" />
        </template>
        <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
      </ui-indicator>
    </component-preview>

    <component-preview>
      <template #title>multiple indicators</template>

      <div class="indicator">
        <span
          v-for="position of positions"
          :class="[
            'indicator-item badge badge-secondary',
            {
              'indicator-start': position.alignment === 'start',
              'indicator-center': position.alignment === 'center',
              'indicator-end': position.alignment === 'end',
              //
              'indicator-top': position.verticalAlignment === 'top',
              'indicator-middle': position.verticalAlignment === 'middle',
              'indicator-bottom': position.verticalAlignment === 'bottom',
            },
          ]"
        >
          {{ position.verticalAlignment }} + {{ position.alignment }}
        </span>

        <div class="grid w-60 h-32 bg-base-300 place-items-center">content</div>
      </div>
    </component-preview>

    <component-preview>
      <template #title>Responsive</template>
      <template #description> changes position based on resolution </template>

      <div class="indicator">
        <span
          class="indicator-item indicator-start sm:indicator-middle md:indicator-bottom lg:indicator-center xl:indicator-end badge badge-secondary"
        ></span>
        <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
      </div>
    </component-preview>
  </div>
</template>
