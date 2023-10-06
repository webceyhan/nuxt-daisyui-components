<script setup lang="ts">
const colors: any[] = [
  "primary",
  "secondary",
  "accent",
  "info",
  "success",
  "warning",
  "error",
];

const sizes: any[] = ["xs", "sm", "md", "lg"];

const checked = ref(true);
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Checkbox</h1>

    <p>Checkboxes are used to select or deselect a value.</p>

    <component-preview>
      <template #title>Checkbox</template>

      <ui-checkbox v-model:checked="checked" />
      {{ checked }}
    </component-preview>

    <component-preview>
      <template #title>With label and form-control</template>

      <ui-form-control label="Remember me">
        <ui-checkbox v-model:checked="checked" />
      </ui-form-control>
    </component-preview>

    <component-preview v-for="color of colors" :key="color">
      <template #title>
        <span class="capitalize"> {{ color }} </span> color
      </template>

      <ui-form-control label="Remember me">
        <ui-checkbox :color="color" v-model:checked="checked" />
      </ui-form-control>
    </component-preview>

    <component-preview>
      <template #title> Sizes</template>

      <div class="flex flex-col items-center gap-2">
        <ui-checkbox v-for="size of sizes" :key="size" :size="size" checked />
      </div>
    </component-preview>

    <component-preview>
      <template #title>Disabled</template>

      <ui-checkbox disabled />
    </component-preview>

    <component-preview>
      <template #title>Disabled and checked</template>

      <ui-checkbox disabled checked />
    </component-preview>

    <component-preview>
      <template #title>Indeterminate</template>

      <ui-checkbox indeterminate />
    </component-preview>
  </div>
</template>
