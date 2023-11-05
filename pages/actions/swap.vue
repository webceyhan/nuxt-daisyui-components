<script setup lang="ts">
const props = [
  {
    name: "modelValue",
    description: "Whether the swap is on or off",
    type: "string",
  },
  {
    name: "flip",
    description: "Flip the swap effect",
    type: "boolean",
  },
  {
    name: "rotate",
    description: "Rotate the swap effect",
    type: "boolean",
  },
];

const slots = [
  {
    name: "on",
    description: "Content for the on state",
  },
  {
    name: "off",
    description: "Content for the off state",
  },
];

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////

const swap1 = ref(false);
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Swap</h1>

    <p>
      Swap allows you to toggle the visibility of two elements using a checkbox or a class
      name.
    </p>

    <component-description name="swap" :props="props" :slots="slots" />

    <component-preview>
      <template #title>Swap text</template>

      <ui-swap v-model="swap1" />
    </component-preview>

    <component-preview>
      <template #title>Swap volume icons</template>

      <ui-swap v-model="swap1">
        <template #on>
          <ui-icon name="volume-up" class="text-4xl" />
        </template>

        <template #off>
          <ui-icon name="volume-mute" class="text-4xl" />
        </template>
      </ui-swap>
    </component-preview>

    <component-preview>
      <template #title>Swap icons with rotate effect</template>

      <ui-swap v-model="swap1" rotate>
        <template #on>
          <ui-icon name="sun-fill" class="text-4xl" />
        </template>

        <template #off>
          <ui-icon name="moon-stars-fill" class="text-4xl" />
        </template>
      </ui-swap>
    </component-preview>

    <component-preview>
      <template #title>Hamburger button</template>

      <ui-button circle>
        <ui-swap v-model="swap1" rotate>
          <template #on>
            <ui-icon name="list" class="text-4xl" />
          </template>

          <template #off>
            <ui-icon name="x" class="text-4xl" />
          </template>
        </ui-swap>
      </ui-button>
    </component-preview>

    <component-preview>
      <template #title>Swap icons with flip effect</template>

      <ui-swap v-model="swap1" class="text-9xl" flip>
        <template #on>😈</template>
        <template #off>😇</template>
      </ui-swap>
    </component-preview>
  </div>
</template>
