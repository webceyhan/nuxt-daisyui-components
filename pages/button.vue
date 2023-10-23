<script setup lang="ts">
import {
  BRAND_COLORS,
  BRAND_COLORS_WITH_NEUTRAL_AND_GHOST,
  SHAPES,
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
      <template #title>Shapes</template>

      <div v-for="shape of SHAPES" class="flex flex-col gap-3 m-5">
        {{ shape }}

        <ui-button icon="x" class="text-2xl" :shape="shape" />
        <ui-button icon="x" class="text-2xl" :shape="shape" outline />
      </div>
    </component-preview>

    <component-preview>
      <template #title>Wide</template>

      <ui-button label="wide" wide />
    </component-preview>

    <component-preview>
      <template #title>Block</template>

      <ui-button label="block button" block />
    </component-preview>
  </div>
</template>
