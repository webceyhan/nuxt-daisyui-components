<script setup lang="ts">
import {
  BRAND_COLORS,
  BRAND_COLORS_WITH_NEUTRAL_AND_GHOST,
  SIZES,
  STATE_COLORS,
  STATE_ICONS,
  TEXT_SIZES,
} from "~/constants";
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Badge</h1>

    <p>Badges are used to inform the user of the status of specific data.</p>

    <component-preview>
      <template #title>Badge</template>

      <ui-badge>Badge</ui-badge>
      <ui-badge label="With Label" />
    </component-preview>

    <component-preview>
      <template #title>Badge with brand colors</template>

      <ui-badge
        v-for="color of BRAND_COLORS_WITH_NEUTRAL_AND_GHOST"
        :label="color"
        :color="color"
      />
    </component-preview>

    <component-preview>
      <template #title>Outline badge</template>

      <ui-badge v-for="color of BRAND_COLORS" :label="color" :color="color" outline />
    </component-preview>

    <component-preview>
      <template #title>Badge sizes</template>

      <ui-badge v-for="size of SIZES" label="987,654" :size="size" />
    </component-preview>

    <component-preview>
      <template #title>Empty badge</template>

      <ui-badge v-for="size of SIZES" :size="size" color="primary" />
    </component-preview>

    <component-preview>
      <template #title>Badge with state colors</template>

      <ui-badge v-for="(color, i) of STATE_COLORS" :color="color" class="gap-1">
        <ui-icon :name="STATE_ICONS[i]" />
        {{ color }}
      </ui-badge>
    </component-preview>

    <component-preview>
      <template #title>Badge in a text</template>

      <div class="flex flex-col items-center">
        <h2 v-for="(size, i) of SIZES" :class="TEXT_SIZES[i]">
          Heading
          <ui-badge label="NEW" :size="size" color="primary" />
        </h2>
      </div>
    </component-preview>

    <component-preview>
      <template #title>Badge in a button</template>
      <ui-button>
        Inbox
        <ui-badge label="+99" />
      </ui-button>

      <ui-button>
        Inbox
        <ui-badge label="+99" color="secondary" />
      </ui-button>
    </component-preview>
  </div>
</template>
