<script setup lang="ts">
import {
  BRAND_COLORS,
  BRAND_COLORS_WITH_NEUTRAL_AND_GHOST,
  SIZES,
  STATE_COLORS,
  STATE_ICONS,
} from "~/constants";
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Button</h1>

    <p>Buttons allow the user to take actions or make choices.</p>

    <component-preview>
      <template #title>Button</template>

      <ui-button>Button</ui-button>
      <ui-button label="With Label" />
      <ui-button label="With Icon" icon="pen" />
    </component-preview>

    <component-preview>
      <template #title>Buttons with brand colors</template>

      <ui-button
        v-for="color of BRAND_COLORS_WITH_NEUTRAL_AND_GHOST"
        :label="color"
        :color="color"
      />
    </component-preview>

    <component-preview>
      <template #title>Active buttons</template>

      <ui-button
        v-for="color of BRAND_COLORS_WITH_NEUTRAL_AND_GHOST"
        :label="color"
        :color="color"
        active
      />
    </component-preview>

    <component-preview>
      <template #title>Buttons with state colors</template>

      <ui-button v-for="color of STATE_COLORS" :label="color" :color="color" />
    </component-preview>

    <component-preview>
      <template #title>Outline buttons</template>

      <ui-button v-for="color of BRAND_COLORS" :label="color" :color="color" outline />
    </component-preview>

    <component-preview>
      <template #title>Outline buttons with state colors</template>

      <ui-button
        v-for="(color, i) of STATE_COLORS"
        :label="color"
        :color="color"
        :icon="STATE_ICONS[i]"
        outline
      />
    </component-preview>

    <component-preview>
      <template #title>Button sizes</template>

      <ui-button v-for="size of SIZES" :label="size" :size="size" />
    </component-preview>

    <component-preview>
      <template #title>Wide button</template>

      <ui-button label="wide" wide />
    </component-preview>

    <component-preview>
      <template #title>Buttons with different HTML tags</template>

      <a role="button" class="btn">Link</a>
      <ui-button type="submit" class="btn">Button</ui-button>
      <input type="button" value="Input" class="btn" />
      <input type="submit" value="Submit" class="btn" />
      <input type="radio" aria-label="Radio" class="btn" />
      <input type="checkbox" aria-label="Checkbox" class="btn" />
      <input type="reset" value="Reset" class="btn" />
    </component-preview>

    <component-preview>
      <template #title>Disabled buttons</template>

      <ui-button disabled>Disabled using attribute</ui-button>
    </component-preview>

    <component-preview>
      <template #title>Square button</template>

      <ui-button icon="x" class="text-2xl" square />
      <ui-button icon="x" class="text-2xl" square outline />
    </component-preview>

    <component-preview>
      <template #title>Circle button</template>

      <ui-button icon="x" class="text-2xl" circle />
      <ui-button icon="x" class="text-2xl" circle outline />
    </component-preview>

    <component-preview>
      <template #title>Button block</template>

      <ui-button label="block" block />
    </component-preview>
  </div>
</template>
