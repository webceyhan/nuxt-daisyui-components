<script setup lang="ts">
const mainColors: any[] = ["default", "primary", "secondary", "accent"];
const brandColors: any[] = [...mainColors, "neutral", "ghost"];
const stateColors: any[] = ["info", "success", "warning", "error"];

const sizes: { label: string; value: string }[] = [
  { value: "lg", label: "large" },
  { value: "md", label: "normal" },
  { value: "sm", label: "small" },
  { value: "xs", label: "tiny" },
];
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Badge</h1>

    <p>Badges are used to inform the user of the status of specific data.</p>

    <component-preview>
      <template #title>Badge</template>

      <ui-badge>Badge</ui-badge>
    </component-preview>

    <component-preview>
      <template #title>Badge with brand icons</template>

      <ui-badge v-for="(color, i) of brandColors" :key="i" v-bind="{ color }">
        {{ color }}
      </ui-badge>
    </component-preview>

    <component-preview>
      <template #title>Outline badge</template>

      <ui-badge v-for="(color, i) of mainColors" :key="i" v-bind="{ color }" outline>
        {{ color }}
      </ui-badge>
    </component-preview>

    <component-preview>
      <template #title>Badge sizes</template>

      <ui-badge v-for="(size, i) of sizes" :key="i" :size="size.value">
        987,654
      </ui-badge>
    </component-preview>

    <component-preview>
      <template #title>Empty badge</template>

      <ui-badge v-for="(size, i) of sizes" :key="i" :size="size.value" color="primary" />
    </component-preview>

    <component-preview>
      <template #title>Badge with state colors</template>

      <ui-badge
        v-for="(color, i) of stateColors"
        :key="i"
        v-bind="{ color }"
        class="gap-2"
      >
        <ui-icon name="x" />
        {{ color }}
      </ui-badge>
    </component-preview>

    <component-preview>
      <template #title>Badge in a text</template>

      <div class="flex flex-col items-center">
        <h2 class="text-xl">Heading <ui-badge size="lg">NEW</ui-badge></h2>
        <h3 class="text-lg">Heading <ui-badge size="md">NEW</ui-badge></h3>
        <h4 class="text-base">Heading <ui-badge size="sm">NEW</ui-badge></h4>
        <h5 class="text-sm">Heading <ui-badge size="xs">NEW</ui-badge></h5>
      </div>
    </component-preview>

    <component-preview>
      <template #title>Badge in a button</template>
      <ui-button>
        Inbox
        <ui-badge>+99</ui-badge>
      </ui-button>

      <ui-button class="btn">
        Inbox
        <ui-badge color="secondary">+99</ui-badge>
      </ui-button>
    </component-preview>
  </div>
</template>
