<script setup lang="ts">
const sizes: any[] = ["xs", "sm", "md", "lg"];
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Pagination</h1>

    <p>
      Pagination is a group of buttons that allow the user to navigate between a set of
      related content.
    </p>

    <component-preview>
      <template #title>Pagination with an active button</template>

      <ui-join>
        <ui-button v-for="i in 4" :active="i == 2">{{ i }}</ui-button>
      </ui-join>
    </component-preview>

    <component-preview>
      <template #title>Sizes</template>

      <div class="flex flex-col gap-2 items-center">
        <ui-join v-for="size of sizes">
          <ui-button v-for="i in 4" :size="size" :active="i == 2">{{ i }}</ui-button>
        </ui-join>
      </div>
    </component-preview>

    <component-preview>
      <template #title>With a disabled button</template>

      <ui-join>
        <ui-button v-for="i of [1, 2, '...', 99, 100]" :disabled="i == '...'">{{
          i
        }}</ui-button>
      </ui-join>
    </component-preview>

    <component-preview>
      <template #title>Extra small buttons</template>

      <ui-join>
        <ui-button v-for="i of ['«', 'Page 22', '»']">{{ i }}</ui-button>
      </ui-join>
    </component-preview>

    <component-preview>
      <template #title>Nex/Prev outline buttons with equal width</template>

      <ui-join class="grid grid-cols-2">
        <ui-button v-for="i of ['Previous', 'Next']" outline>{{ i }}</ui-button>
      </ui-join>
    </component-preview>

    <component-preview>
      <template #title>Using radio inputs</template>

      <ui-join>
        <input
          v-for="i in 4"
          class="btn btn-square p-5"
          type="radio"
          name="options"
          :aria-label="i + ''"
          :checked="i == 1"
        />
      </ui-join>
    </component-preview>
  </div>
</template>
