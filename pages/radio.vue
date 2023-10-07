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

const sizeValue = ref("md");
const colorValue = ref("red");
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Radio</h1>

    <p>Radio buttons allow the user to select one option from a set.</p>

    <component-preview>
      <template #title>Radio</template>

      <ui-radio
        name="radio-flags"
        v-for="(flag, i) of [true, false]"
        :key="i"
        :checked="flag"
      />
    </component-preview>

    <component-preview v-for="color of colors" :key="color">
      <template #title>
        <span class="capitalize"> {{ color }} </span> color
      </template>

      <ui-radio
        v-for="(checked, i) of [true, false]"
        :key="i"
        :name="`radio-${color}`"
        :checked="checked"
        :color="color"
      />
    </component-preview>

    <component-preview>
      <template #title> Sizes</template>

      <div class="flex flex-col items-center gap-2">
        <ui-radio
          v-for="size of sizes"
          name="radio-sizes"
          :key="size"
          :size="size"
          :value="size"
          v-model="sizeValue"
        />
      </div>

      <p class="p-10">{{ sizeValue }}</p>
    </component-preview>

    <component-preview>
      <template #title>Disabled</template>

      <ui-radio disabled />
    </component-preview>

    <component-preview>
      <template #title>With label and form-control and custom colors!</template>

      <div class="flex flex-col w-52">
        <ui-form-control
          v-for="label of ['red', 'blue']"
          :key="label"
          :label="`${label} pill`"
          inline
        >
          <ui-radio
            name="radio-with-label"
            :class="{
              'checked:bg-red-500': label === 'red',
              'checked:bg-blue-500': label === 'blue',
            }"
            :value="label"
            v-model="colorValue"
          />
        </ui-form-control>
      </div>

      <p class="p-10">{{ colorValue }}</p>
    </component-preview>
  </div>
</template>
