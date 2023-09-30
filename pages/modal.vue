<script setup lang="ts">
const showModel1 = ref(false);
const showModel2 = ref(false);
const showModel3 = ref(false);
const showModel4 = ref(false);
const showModel5 = ref(false);
const showModel6 = ref(false);
const showModel7 = ref(false);

const alignments = ["top", "middle", "bottom"];
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Modal</h1>

    <p>Modal is used to show a dialog or a box when you click a button.</p>

    <component-preview>
      <template #title>Dialog modal</template>

      <ui-button @click="showModel1 = true">open modal</ui-button>

      <ui-modal v-model:open="showModel1">
        <template #title>Hello!</template>
        <p>Press ESC key or click the button below to close</p>
        <template #actions>
          <ui-button>close</ui-button>
        </template>
      </ui-modal>
    </component-preview>

    <component-preview>
      <template #title>Dialog modal, closes when clicked outside</template>
      <template #description>
        there a second form with 'backdrop' modifier and it covers the screen so we can
        close the modal when clicked outside
      </template>

      <ui-button @click="showModel2 = true">open modal</ui-button>

      <ui-modal v-model:open="showModel2" backdrop>
        <template #title>Hello!</template>
        <p>Press ESC key or click the button below to close</p>
      </ui-modal>
    </component-preview>

    <component-preview>
      <template #title>Dialog modal with a close button at corner</template>

      <ui-button @click="showModel3 = true">open modal</ui-button>

      <ui-modal v-model:open="showModel3" dismissable>
        <template #title>Hello!</template>
        <p>Press ESC key or click the button below to close</p>
      </ui-modal>
    </component-preview>

    <component-preview>
      <template #title>Dialog modal with custom width</template>
      <template #description>
        You can use any w-* and max-w-* utility class to customize the width
      </template>

      <ui-button @click="showModel4 = true">open modal</ui-button>

      <ui-modal v-model:open="showModel4" class="w-11/12 max-w-5xl">
        <template #title>Hello!</template>
        <p>Press ESC key or click the button below to close</p>
        <template #actions>
          <ui-button>close</ui-button>
        </template>
      </ui-modal>
    </component-preview>

    <component-preview>
      <template #title>Vertical alignments</template>

      <ui-button @click="showModel5 = true">align top</ui-button>

      <ui-modal v-model:open="showModel5" alignment="top" backdrop>
        <template #title>Hello!</template>
        <p>Press ESC key or click the button below to close</p>
      </ui-modal>

      <ui-button @click="showModel6 = true">align middle</ui-button>

      <ui-modal v-model:open="showModel6" alignment="middle" backdrop>
        <template #title>Hello!</template>
        <p>Press ESC key or click the button below to close</p>
      </ui-modal>

      <ui-button @click="showModel7 = true">align bottom</ui-button>

      <ui-modal v-model:open="showModel7" alignment="bottom" backdrop>
        <template #title>Hello!</template>
        <p>Press ESC key or click the button below to close</p>
      </ui-modal>
    </component-preview>
  </div>
</template>
