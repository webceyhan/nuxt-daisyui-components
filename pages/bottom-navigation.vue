<script setup lang="ts">
const items = [
  { label: "Home", icon: "house" },
  { label: "Warnings", icon: "info-circle", active: true },
  { label: "Statics", icon: "reception-4" },
];

const sizes: any[] = ["xs", "sm", "md", "lg"];

const brandColors = ["text-primary", "text-secondary", "text-accent"];
const stateColors = ["text-info", "text-success", "text-warning", "text-error"];

const customColors = [
  "bg-pink-200 text-pink-600",
  "bg-blue-200 text-blue-600 border-blue-600",
  "bg-teal-200 text-teal-600",
];
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Bottom navigation</h1>

    <p>Bottom navigation bar allows navigation between primary screens.</p>

    <component-preview>
      <template #title>Bottom Navigation</template>

      <ui-bottom-nav class="relative">
        <ui-bottom-nav-item
          v-for="item of items"
          :icon="item.icon"
          :active="item.active"
        />
      </ui-bottom-nav>
    </component-preview>

    <component-preview>
      <template #title>Bottom Navigation with brand colors</template>

      <ui-bottom-nav class="relative" v-for="color of brandColors">
        <ui-bottom-nav-item
          v-for="item of items"
          :icon="item.icon"
          :active="item.active"
          :class="color"
        />
      </ui-bottom-nav>
    </component-preview>

    <component-preview>
      <template #title>Bottom Navigation with state colors</template>

      <ui-bottom-nav class="relative" v-for="color of stateColors">
        <ui-bottom-nav-item
          v-for="item of items"
          :icon="item.icon"
          :active="item.active"
          :class="color"
        />
      </ui-bottom-nav>
    </component-preview>

    <component-preview>
      <template #title>With title</template>

      <ui-bottom-nav class="relative">
        <ui-bottom-nav-item
          v-for="item of items"
          :icon="item.icon"
          :active="item.active"
          :label="item.label"
        />
      </ui-bottom-nav>
    </component-preview>

    <component-preview>
      <template #title>With custom colors</template>

      <ui-bottom-nav class="relative">
        <ui-bottom-nav-item
          v-for="(item, i) of items"
          :icon="item.icon"
          :active="item.active"
          :label="item.label"
          :class="customColors[i]"
        />
      </ui-bottom-nav>
    </component-preview>

    <component-preview>
      <template #title>Sizes</template>

      <ui-bottom-nav class="relative" v-for="size of sizes" :size="size">
        <ui-bottom-nav-item
          v-for="item of items"
          :icon="item.icon"
          :active="item.active"
        />
      </ui-bottom-nav>
    </component-preview>

    <component-preview>
      <template #title>Disabled button</template>

      <ui-bottom-nav class="relative">
        <ui-bottom-nav-item
          v-for="item of items"
          :icon="item.icon"
          :disabled="item.active"
        />
      </ui-bottom-nav>
    </component-preview>
  </div>
</template>
