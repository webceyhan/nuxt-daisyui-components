<script setup lang="ts">
import { ALIGNMENTS, VERTICAL_ALIGNMENTS } from "~/constants";

const props = [
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

const slots = [{ name: "default", description: "Content of toast" }];

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////

const positions = [
  {
    label: "toast-top toast-start",
    alignment: "start",
    verticalAlignment: "top",
  },
  {
    label: "toast-top toast-center",
    alignment: "center",
    verticalAlignment: "top",
  },
  {
    label: "toast-top toast-end (default)",
    alignment: "end",
    verticalAlignment: "top",
  },
  {
    label: "toast-middle toast-start",
    alignment: "start",
    verticalAlignment: "middle",
  },
  {
    label: "toast-middle toast-center",
    alignment: "center",
    verticalAlignment: "middle",
  },
  {
    label: "toast-middle toast-end (default)",
    alignment: "end",
    verticalAlignment: "middle",
  },
  {
    label: "toast-bottom (default) toast-start",
    alignment: "start",
    verticalAlignment: "bottom",
  },
  {
    label: "toast-bottom (default) toast-center",
    alignment: "center",
    verticalAlignment: "bottom",
  },
  {
    label: "toast-bottom (default) toast-end (default)",
    alignment: "end",
    verticalAlignment: "bottom",
  },
];
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Toast</h1>

    <p>Toast is a wrapper to stack elements, positioned on the corner of page.</p>

    <component-props-table :props="props" />
    <component-slots-table :slots="slots" />

    <component-preview>
      <template #title>toast with alert inside</template>

      <div class="w-full h-64 relative">
        <ui-toast class="absolute">
          <ui-alert color="info"> New message arrived. </ui-alert>
        </ui-toast>
      </div>
    </component-preview>

    <component-preview v-for="position of positions">
      <template #title>{{ position.label }}</template>

      <div class="w-full h-64 relative">
        <ui-toast
          class="absolute"
          :alignment="(position.alignment as any)"
          :vertical-alignment="(position.verticalAlignment as any)"
        >
          <ui-alert color="info">
            <span>New mail arrived.</span>
          </ui-alert>
          <ui-alert color="success">
            <span>Message sent successfully.</span>
          </ui-alert>
        </ui-toast>
      </div>
    </component-preview>
  </div>
</template>
