<script setup lang="ts">
const brandColors: any[] = ["primary", "secondary", "accent"];
const stateColors: any[] = ["info", "success", "warning", "error"];

const sizes: any[] = ["xs", "sm", "md", "lg"];

const checked = ref(true);
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Toggle</h1>

    <p>Toggle is a checkbox that is styled to look like a switch button.</p>

    <component-preview>
      <template #title>Toggle</template>

      <ui-toggle v-model:checked="checked" />
    </component-preview>

    <component-preview>
      <template #title>With label and form-control</template>

      <ui-form-control label="Remember me" inline>
        <ui-toggle v-model:checked="checked" />
      </ui-form-control>
    </component-preview>

    <component-preview>
      <template #title> Checkboxes with brand colors </template>

      <div class="flex flex-col items-center gap-2">
        <ui-form-control v-for="(color, i) of brandColors" label="Remember me" inline>
          <ui-toggle :color="color" v-model:checked="checked" />
        </ui-form-control>
      </div>
    </component-preview>

    <component-preview>
      <template #title> Checkboxes with state colors </template>

      <div class="flex flex-col items-center gap-2">
        <ui-form-control v-for="(color, i) of stateColors" label="Remember me" inline>
          <ui-toggle :color="color" v-model:checked="checked" />
        </ui-form-control>
      </div>
    </component-preview>

    <component-preview>
      <template #title> Sizes</template>

      <div class="flex flex-col items-center gap-2">
        <ui-toggle v-for="size of sizes" :key="size" :size="size" checked />
      </div>
    </component-preview>

    <component-preview>
      <template #title>Disabled</template>

      <ui-toggle disabled />
    </component-preview>

    <component-preview>
      <template #title>Disabled and checked</template>

      <ui-toggle disabled checked />
    </component-preview>

    <component-preview>
      <template #title>Indeterminate</template>

      <ui-toggle indeterminate />
    </component-preview>
  </div>
</template>
