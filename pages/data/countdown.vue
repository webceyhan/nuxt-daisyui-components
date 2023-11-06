<script setup lang="ts">
import { DESCRIPTIONS } from "~/data/countdown";

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////

const value = ref(60);

onMounted(() => {
  setInterval(() => value.value--, 1000);
});
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Countdown</h1>

    <p>Countdown gives you a transition effect of changing numbers.</p>

    <br />

    <component-description v-for="desc of DESCRIPTIONS" v-bind="desc" />

    <component-preview>
      <template #title>Countdown</template>

      <ui-countdown :value="value" />
    </component-preview>

    <component-preview>
      <template #title>Large text</template>

      <ui-countdown :value="value" class="font-mono text-6xl" />
    </component-preview>

    <component-preview>
      <template #title>Clock countdown</template>

      <ui-countdown class="font-mono text-2xl">
        <span style="--value: 10" />
        <span style="--value: 24" />m <span :style="{ '--value': value }" />s
      </ui-countdown>
    </component-preview>

    <component-preview>
      <template #title>Clock countdown with colons</template>

      <ui-countdown class="font-mono text-2xl">
        <span style="--value: 10" />: <span style="--value: 24" />:
        <span :style="{ '--value': value }" />
      </ui-countdown>
    </component-preview>

    <component-preview>
      <template #title>Large text with labels</template>

      <div class="flex gap-5">
        <div><ui-countdown :value="15" class="font-mono text-4xl" />days</div>
        <div><ui-countdown :value="10" class="font-mono text-4xl" />hours</div>
        <div><ui-countdown :value="24" class="font-mono text-4xl" />min</div>
        <div><ui-countdown :value="value" class="font-mono text-4xl" />sec</div>
      </div>
    </component-preview>

    <component-preview>
      <template #title>Large text with labels under</template>

      <div class="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div class="flex flex-col">
          <ui-countdown :value="15" class="font-mono text-4xl" />days
        </div>
        <div class="flex flex-col">
          <ui-countdown :value="10" class="font-mono text-4xl" />hours
        </div>
        <div class="flex flex-col">
          <ui-countdown :value="24" class="font-mono text-4xl" />min
        </div>
        <div class="flex flex-col">
          <ui-countdown :value="value" class="font-mono text-4xl" />sec
        </div>
      </div>
    </component-preview>

    <component-preview>
      <template #title>In boxes</template>

      <div class="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <ui-countdown :value="15" class="font-mono text-5xl" />days
        </div>
        <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <ui-countdown :value="10" class="font-mono text-5xl" />hours
        </div>
        <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <ui-countdown :value="24" class="font-mono text-5xl" />min
        </div>
        <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <ui-countdown :value="value" class="font-mono text-5xl" />sec
        </div>
      </div>
    </component-preview>
  </div>
</template>
