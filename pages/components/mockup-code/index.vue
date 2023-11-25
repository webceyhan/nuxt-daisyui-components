<script setup lang="ts">
import { DESCRIPTIONS } from "./_data";

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Code mockup</h1>

    <p>
      Code mockup is used to show a block of code in a box that looks like a code editor.
    </p>

    <component-description v-for="desc of DESCRIPTIONS" v-bind="desc" />

    <component-preview>
      <template #title>mockup code with line prefix</template>

      <ui-mockup-code />
    </component-preview>

    <component-preview>
      <template #title>Multi line</template>

      <ui-mockup-code>
        <pre data-prefix="$"><code>npm i daisyui</code></pre>
        <pre data-prefix=">" class="text-warning"><code>installing...</code></pre>
        <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
      </ui-mockup-code>
    </component-preview>

    <component-preview>
      <template #title>Highlighted line</template>

      <ui-mockup-code>
        <pre data-prefix="1"><code>npm i daisyui</code></pre>
        <pre data-prefix="2"><code>installing...</code></pre>
        <pre
          data-prefix="3"
          class="bg-warning text-warning-content"
        ><code>Error!</code></pre>
      </ui-mockup-code>
    </component-preview>

    <component-preview>
      <template #title>Long line will scroll</template>

      <ui-mockup-code>
        <pre
          data-prefix="~"
        ><code>Magnam dolore beatae necessitatibus nemopsum itaque sit. Et porro quae qui et et dolore ratione.</code></pre>
      </ui-mockup-code>
    </component-preview>

    <component-preview>
      <template #title>Without prefix</template>

      <ui-mockup-code>
        <pre><code>without prefix</code></pre>
      </ui-mockup-code>
    </component-preview>

    <component-preview>
      <template #title>With color</template>

      <ui-mockup-code class="bg-primary text-primary-content">
        <pre><code>can be any color!</code></pre>
      </ui-mockup-code>
    </component-preview>
  </div>
</template>
