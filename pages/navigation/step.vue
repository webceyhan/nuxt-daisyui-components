<script setup lang="ts">
import { DESCRIPTIONS, COLORS } from "~/data/step";

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////

const steps: any[] = [
  { label: "Register", color: "primary" },
  { label: "Choose plan", color: "primary" },
  { label: "Purchase" },
  { label: "Receive Product" },
];

const stepsWithContent = ["?", "!", "✓", "x", "*", "", "●"];

const stepsWithCustomColors: any[] = [
  { label: "Fly to moon", color: "info" },
  { label: "Shrink the moon", color: "info" },
  { label: "Grab the moon", color: "info" },
  { label: "Sit on toilet", color: "error", content: "?" },
];

const scrollableColors: any = {
  2: "secondary",
  3: "secondary",
  4: "secondary",
  6: "accent",
  7: "accent",
  9: "error",
  10: "error",
  13: "warning",
  14: "warning",
  16: "neutral",
  17: "neutral",
  18: "neutral",
  19: "neutral",
  20: "neutral",
  21: "neutral",
  22: "neutral",
  23: "neutral",
  24: "neutral",
};
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Steps</h1>

    <p>Steps can be used to show a list of steps in a process.</p>

    <component-description v-for="desc of DESCRIPTIONS" v-bind="desc" />

    <component-preview>
      <template #title>Horizontal</template>

      <ui-step-group>
        <ui-step v-for="step of steps" :color="step.color">
          {{ step.label }}
        </ui-step>
      </ui-step-group>
    </component-preview>

    <component-preview>
      <template #title>Vertical</template>

      <ui-step-group vertical>
        <ui-step v-for="step of steps" :color="step.color">
          {{ step.label }}
        </ui-step>
      </ui-step-group>
    </component-preview>

    <component-preview>
      <template #title>
        responsive (vertical on small screen, horizontal on large screen)
      </template>

      <ui-step-group class="lg:steps-horizontal" vertical>
        <ui-step v-for="step of steps" :color="step.color">
          {{ step.label }}
        </ui-step>
      </ui-step-group>
    </component-preview>

    <component-preview>
      <template #title>With data-content</template>

      <ui-step-group>
        <ui-step
          v-for="(step, i) of stepsWithContent"
          :data-content="step"
          color="neutral"
        >
          Step {{ i }}
        </ui-step>
      </ui-step-group>
    </component-preview>

    <component-preview>
      <template #title>Custom colors</template>

      <ui-step-group>
        <ui-step
          v-for="step of stepsWithCustomColors"
          :data-content="step.content"
          :color="step.color"
        >
          {{ step.label }}
        </ui-step>
      </ui-step-group>
    </component-preview>

    <component-preview>
      <template #title>With scrollable wrapper</template>

      <ui-step-group>
        <ui-step v-for="i in 24" :color="scrollableColors[i]">
          {{ i == 1 ? "start" : i == 24 ? "end" : i }}
        </ui-step>
      </ui-step-group>
    </component-preview>
  </div>
</template>
