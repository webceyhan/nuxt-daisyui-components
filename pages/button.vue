<script setup lang="ts">
import {
  BRAND_COLORS,
  BRAND_COLORS_WITH_NEUTRAL_AND_GHOST,
  SIZES,
  STATE_COLORS,
} from "~/constants";

// for buttons only
const BRAND_COLORS_FOR_BUTTON: any[] = [...BRAND_COLORS_WITH_NEUTRAL_AND_GHOST, "link"];
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Button</h1>

    <p>Buttons allow the user to take actions or make choices.</p>

    <component-preview>
      <template #title>Button</template>

      <ui-button>Button</ui-button>
    </component-preview>

    <component-preview>
      <template #title>Buttons with brand colors</template>

      <ui-button v-for="color of BRAND_COLORS_FOR_BUTTON" :color="color">
        {{ color ?? "default" }}
      </ui-button>
    </component-preview>

    <component-preview>
      <template #title>Active buttons</template>

      <ui-button v-for="color of BRAND_COLORS_FOR_BUTTON" :color="color" active>
        {{ color ?? "default" }}
      </ui-button>
    </component-preview>

    <component-preview>
      <template #title>Buttons with state colors</template>

      <ui-button v-for="color of STATE_COLORS" :color="color">
        {{ color }}
      </ui-button>
    </component-preview>

    <component-preview>
      <template #title>Outline buttons</template>

      <ui-button v-for="color of BRAND_COLORS" :color="color" outline>
        {{ color ?? "default" }}
      </ui-button>
    </component-preview>

    <component-preview>
      <template #title>Outline buttons with state colors</template>

      <ui-button v-for="color of STATE_COLORS" :color="color" outline>
        {{ color }}
      </ui-button>
    </component-preview>

    <component-preview>
      <template #title>Button sizes</template>

      <ui-button v-for="size of SIZES" :size="size">
        {{ size }}
      </ui-button>
    </component-preview>

    <component-preview>
      <template #title>Wide button</template>

      <ui-button wide>Wide</ui-button>
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

      <ui-button square>
        <ui-icon name="x" class="text-3xl" />
      </ui-button>
      <ui-button square outline>
        <ui-icon name="x" class="text-3xl" />
      </ui-button>
    </component-preview>

    <component-preview>
      <template #title>Circle button</template>

      <ui-button circle>
        <ui-icon name="x" class="text-3xl" />
      </ui-button>
      <ui-button circle outline>
        <ui-icon name="x" class="text-3xl" />
      </ui-button>
    </component-preview>

    <component-preview>
      <template #title>Button block</template>

      <ui-button block>block</ui-button>
    </component-preview>
  </div>
</template>
