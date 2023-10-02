<script setup lang="ts">
const colors: any[] = [
  "default",
  "primary",
  "secondary",
  "accent",
  "info",
  "success",
  "warning",
  "error",
];

const steps = [0, 10, 40, 70, 100];
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Progress</h1>

    <p>
      Progress bar can be used to show the progress of a task or to show the passing of
      time.
    </p>

    <component-preview v-for="color of colors">
      <template #title> {{ color }} color </template>

      <div class="flex flex-col gap-2 items-center">
        <ui-progress
          class="w-56"
          v-for="value of steps"
          :key="value"
          v-bind="{ value, color }"
        />
      </div>
    </component-preview>
  </div>
</template>
