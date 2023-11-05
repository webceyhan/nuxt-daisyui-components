<script setup lang="ts">
import { SIZE_CLASS_MAP } from "~/components/ui/input/rating.vue";

const SIZES: any[] = Object.keys(SIZE_CLASS_MAP);

const props = [
  {
    name: "modelValue",
    type: "number",
    description: "Value of the rating",
  },
  {
    name: "max",
    type: "number",
    description: "Maximum value",
  },
  {
    name: "mask",
    type: "string",
    description: "Mask to use for the rating",
  },
  {
    name: "itemClass",
    type: "string",
    description: "Class to apply to each item",
  },
  {
    name: "itemClasses",
    type: "string[]",
    description: "Classes to apply to each item",
  },
  {
    name: "size",
    type: "string",
    values: SIZES,
  },
  {
    name: "disabled",
    type: "boolean",
    description: "Whether the rating is disabled or not",
  },
];

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////

const value = ref(3);
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Rating</h1>

    <p>Rating is a set of radio buttons that allow the user to rate something.</p>

    <component-props-table :props="props" />
    <!-- <component-slots-table :slots="slots" /> -->

    <component-preview>
      <template #title>Rating</template>

      <ui-rating v-model="value" />
    </component-preview>

    <component-preview>
      <template #title>mask-star-2 with warning color</template>

      <ui-rating v-model="value" mask="star-2" item-class="bg-orange-400" />
    </component-preview>

    <component-preview>
      <template #title>mask-heart with multiple colors</template>

      <ui-rating
        v-model="value"
        mask="heart"
        class="gap-1"
        :item-classes="[
          'bg-red-400',
          'bg-orange-400',
          'bg-yellow-400',
          'bg-lime-400',
          'bg-green-400',
        ]"
      />
    </component-preview>

    <component-preview>
      <template #title>mask-star-2 with green-500 color</template>

      <ui-rating v-model="value" mask="star-2" item-class="bg-green-500" />
    </component-preview>

    <component-preview>
      <template #title> Sizes</template>

      <div class="flex flex-col items-center gap-2">
        <ui-rating
          v-for="size of SIZES"
          :size="size"
          :value="2"
          mask="star-2"
          item-class="bg-orange-400"
        />
      </div>
    </component-preview>

    <component-preview>
      <template #title> with `rating-hidden`</template>
      <template #description>
        <p>
          `rating-hidden` is a hidden radio at the start to allow uses remove their
          rating.
        </p>

        <p class="text-2xl text-error">To be implemented!</p>
      </template>

      <div class="rating rating-lg">
        <input type="radio" name="rating-9" class="rating-hidden" />
        <input type="radio" name="rating-9" class="mask mask-star-2" />
        <input type="radio" name="rating-9" class="mask mask-star-2" checked />
        <input type="radio" name="rating-9" class="mask mask-star-2" />
        <input type="radio" name="rating-9" class="mask mask-star-2" />
        <input type="radio" name="rating-9" class="mask mask-star-2" />
      </div>
    </component-preview>

    <component-preview>
      <template #title>half stars</template>

      <template #description>
        <p class="text-2xl text-error">To be implemented!</p>
      </template>

      <div class="rating rating-lg rating-half">
        <input type="radio" name="rating-10" class="rating-hidden" />
        <input
          type="radio"
          name="rating-10"
          class="bg-green-500 mask mask-star-2 mask-half-1"
        />
        <input
          type="radio"
          name="rating-10"
          class="bg-green-500 mask mask-star-2 mask-half-2"
        />
        <input
          type="radio"
          name="rating-10"
          class="bg-green-500 mask mask-star-2 mask-half-1"
          checked
        />
        <input
          type="radio"
          name="rating-10"
          class="bg-green-500 mask mask-star-2 mask-half-2"
        />
        <input
          type="radio"
          name="rating-10"
          class="bg-green-500 mask mask-star-2 mask-half-1"
        />
        <input
          type="radio"
          name="rating-10"
          class="bg-green-500 mask mask-star-2 mask-half-2"
        />
        <input
          type="radio"
          name="rating-10"
          class="bg-green-500 mask mask-star-2 mask-half-1"
        />
        <input
          type="radio"
          name="rating-10"
          class="bg-green-500 mask mask-star-2 mask-half-2"
        />
        <input
          type="radio"
          name="rating-10"
          class="bg-green-500 mask mask-star-2 mask-half-1"
        />
        <input
          type="radio"
          name="rating-10"
          class="bg-green-500 mask mask-star-2 mask-half-2"
        />
      </div>
    </component-preview>
  </div>
</template>
