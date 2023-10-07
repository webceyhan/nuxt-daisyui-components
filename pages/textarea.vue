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

const value = ref("");
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Textarea</h1>

    <p>Textarea allows users to enter text in multiple lines.</p>

    <component-preview>
      <template #title>Textarea</template>

      <ui-textarea v-model="value" placeholder="Bio" class="w-full" />
    </component-preview>

    <component-preview>
      <template #title>Textarea with border</template>

      <ui-textarea v-model="value" placeholder="Bio" class="w-full" bordered />
    </component-preview>

    <component-preview>
      <template #title>Ghost (no background)</template>

      <ui-textarea v-model="value" placeholder="Bio" class="w-full" color="ghost" />
    </component-preview>

    <component-preview>
      <template #title>With form-control and labels</template>

      <ui-form-control label="Your bio" alt="Alt label" class="w-full">
        <ui-textarea v-model="value" class="w-full" bordered />
      </ui-form-control>
    </component-preview>

    <component-preview v-for="color of colors" :key="color">
      <template #title>
        <span class="capitalize"> {{ color }} </span> color
      </template>

      <ui-textarea :color="color" v-model="value" placeholder="Bio" class="w-full" />
    </component-preview>

    <component-preview>
      <template #title> Sizes</template>

      <div class="flex flex-col w-full items-center gap-2">
        <ui-textarea
          v-for="size of sizes"
          :key="size"
          :size="size"
          class="w-full"
          v-model="value"
          placeholder="Bio"
          bordered
        />
      </div>
    </component-preview>

    <component-preview>
      <template #title>Disabled</template>

      <ui-textarea placeholder="You can't touch this" class="w-full" disabled />
    </component-preview>
  </div>
</template>
