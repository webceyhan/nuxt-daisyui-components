<script setup lang="ts">
const props = [
  {
    name: "vertical",
    type: "boolean",
    description: "Display items vertically",
  },
];

const slots = [{ name: "default", description: "Content of the group" }];

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Join</h1>

    <p>
      Join is a container for grouping multiple items, it can be used to group buttons,
      inputs, or any other element. Join applies border radius to the first and last item.
      Join can be used to create a horizontal or vertical list of items.
    </p>

    <component-props-table :props="props" />
    <component-slots-table :slots="slots" />

    <component-preview>
      <template #title>Join</template>

      <ui-join>
        <ui-button v-for="i in 3">Button</ui-button>
      </ui-join>
    </component-preview>

    <component-preview>
      <template #title>Group items vertically</template>

      <ui-join vertical>
        <ui-button v-for="i in 3">Button</ui-button>
      </ui-join>
    </component-preview>

    <component-preview>
      <template #title
        >Responsive: it's vertical on small screen and horizontal on large
        screen</template
      >

      <ui-join vertical class="lg:join-horizontal">
        <ui-button v-for="i in 3">Button</ui-button>
      </ui-join>
    </component-preview>

    <component-preview>
      <template #title>With extra elements in the group</template>
      <template #description
        >Even if join-item is not a direct child of the group, it still gets the
        style</template
      >

      <ui-join>
        <input class="input input-bordered" placeholder="Search" />

        <select class="select select-bordered">
          <option disabled selected>Filter</option>
          <option>Sci-fi</option>
          <option>Drama</option>
          <option>Action</option>
        </select>

        <div class="indicator">
          <span class="indicator-item badge badge-secondary">new</span>
          <button class="btn">Search</button>
        </div>
      </ui-join>
    </component-preview>

    <component-preview>
      <template #title>Custom border radius</template>

      <ui-join>
        <input class="input input-bordered" placeholder="Email" />
        <ui-button class="rounded-r-full">Subscribe</ui-button>
      </ui-join>
    </component-preview>

    <component-preview>
      <template #title>Join</template>

      <ui-join>
        <input
          v-for="i in 3"
          class="btn"
          name="options"
          type="radio"
          :aria-label="`Radio ${i}`"
        />
      </ui-join>
    </component-preview>
  </div>
</template>
