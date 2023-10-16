<script setup lang="ts">
const sizes = [
  { value: "xs", label: "Tiny" },
  { value: "sm", label: "Small" },
  { value: "md", label: "Normal" },
  { value: "lg", label: "Large" },
];

const links = [
  { label: "Tab 1", active: false },
  { label: "Tab 2", active: true },
  { label: "Tab 3", active: false },
];
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Tabs</h1>

    <p>Tabs can be used to show a list of links in a tabbed format.</p>

    <component-preview>
      <template #title>Tabs</template>

      <ui-tabs>
        <ui-tab v-for="link of links" :active="link.active">{{ link.label }}</ui-tab>
      </ui-tabs>
    </component-preview>

    <component-preview>
      <template #title>Bordered</template>

      <ui-tabs>
        <ui-tab v-for="link of links" :active="link.active" bordered>{{
          link.label
        }}</ui-tab>
      </ui-tabs>
    </component-preview>

    <component-preview>
      <template #title>Lifted</template>

      <ui-tabs>
        <ui-tab v-for="link of links" :active="link.active" lifted>{{
          link.label
        }}</ui-tab>
      </ui-tabs>
    </component-preview>

    <component-preview>
      <template #title>Boxed</template>

      <ui-tabs boxed>
        <ui-tab v-for="link of links" :active="link.active">{{ link.label }}</ui-tab>
      </ui-tabs>
    </component-preview>

    <component-preview>
      <template #title>Sizes</template>

      <div class="flex flex-col items-center gap-3">
        <ui-tabs v-for="size of sizes">
          <ui-tab v-for="link of links" :active="link.active" lifted>{{
            size.label
          }}</ui-tab>
        </ui-tabs>
      </div>
    </component-preview>
  </div>
</template>
