<script setup lang="ts">
const positions: any[] = ["top", "bottom", "left", "right"];
const colors: any[] = [
  "primary",
  "secondary",
  "accent",
  "info",
  "success",
  "warning",
  "error",
];
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Tooltip</h1>

    <p>Tooltip can be used to show a message when hovering over an element.</p>

    <component-preview>
      <template #title>Tooltip</template>

      <div class="my-6">
        <ui-tooltip value="hello">
          <ui-button>Hover me</ui-button>
        </ui-tooltip>
      </div>
    </component-preview>

    <component-preview>
      <template #title>Force open</template>

      <div class="my-6">
        <ui-tooltip value="hello" open>
          <ui-button>Force open</ui-button>
        </ui-tooltip>
      </div>
    </component-preview>

    <h3 class="text-2xl">Positions</h3>

    <component-preview v-for="position of positions" :key="position">
      <template #title>
        <span class="capitalize">{{ position }}</span>
      </template>

      <div class="my-6">
        <ui-tooltip value="hello" :position="position" open>
          <ui-button>{{ position }}</ui-button>
        </ui-tooltip>
      </div>
    </component-preview>

    <component-preview v-for="color of colors" :key="color">
      <template #title>
        <span class="capitalize">{{ color }}</span> color
      </template>

      <div class="my-6">
        <ui-tooltip value="hello" :color="color" open>
          <ui-button :color="color">{{ color }}</ui-button>
        </ui-tooltip>
      </div>
    </component-preview>
  </div>
</template>
