<script setup lang="ts">
import { DESCRIPTIONS, VERTICAL_ALIGNMENTS } from "./_data";

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////

const showModel1 = ref(false);
const showModel2 = ref(false);
const showModel3 = ref(false);
const showModel4 = ref(false);

const verticalAlignedModels = reactive({
  top: false,
  middle: false,
  bottom: false,
} as any);
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Modal</h1>

    <p>Modal is used to show a dialog or a box when you click a button.</p>

    <component-description v-for="desc of DESCRIPTIONS" v-bind="desc" />

    <component-preview>
      <template #title>Dialog modal</template>

      <ui-button @click="showModel1 = true" label="open modal" />

      <ui-modal v-model:open="showModel1" title="Hello!">
        <p>Press ESC key or click the button below to close</p>

        <template #actions>
          <ui-button label="close" />
        </template>
      </ui-modal>
    </component-preview>

    <component-preview>
      <template #title>Dialog modal, closes when clicked outside</template>
      <template #description>
        there a second form with 'backdrop' modifier and it covers the screen so we can
        close the modal when clicked outside
      </template>

      <ui-button @click="showModel2 = true" label="open modal" />

      <ui-modal v-model:open="showModel2" title="Hello!" backdrop>
        <p>Press ESC key or click the button below to close</p>
      </ui-modal>
    </component-preview>

    <component-preview>
      <template #title>Dialog modal with a close button at corner</template>

      <ui-button @click="showModel3 = true" label="open modal" />

      <ui-modal v-model:open="showModel3" title="Hello!" dismissable>
        <p>Press ESC key or click the button below to close</p>
      </ui-modal>
    </component-preview>

    <component-preview>
      <template #title>Dialog modal with custom width</template>
      <template #description>
        You can use any w-* and max-w-* utility class to customize the width
      </template>

      <ui-button @click="showModel4 = true" label="open modal" />

      <ui-modal v-model:open="showModel4" title="Hello!" class="w-11/12 max-w-5xl">
        <p>Press ESC key or click the button below to close</p>

        <template #actions>
          <ui-button label="close" />
        </template>
      </ui-modal>
    </component-preview>

    <component-preview>
      <template #title>Vertical alignments</template>

      <template v-for="alignment of VERTICAL_ALIGNMENTS">
        <ui-button :label="alignment" @click="verticalAlignedModels[alignment] = true" />

        <ui-modal
          title="Hello!"
          v-model:open="verticalAlignedModels[alignment]"
          :vertical-alignment="alignment"
          backdrop
        >
          <p>Press ESC key or click the button below to close</p>
        </ui-modal>
      </template>
    </component-preview>
  </div>
</template>
