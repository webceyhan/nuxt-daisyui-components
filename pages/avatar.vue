<script setup lang="ts">
const props = [
  {
    name: "online",
    type: "boolean",
    description: "shows a green dot as online indicator",
  },
  {
    name: "offline",
    type: "boolean",
    description: "shows a gray dot as offline indicator",
  },
  {
    name: "placeholder",
    type: "boolean",
    description: "to show some letters as avatar placeholder",
  },
];

const slots = [
  { name: "default", description: "Content of avatar" },
  { name: "indicator", description: "Content of indicator" },
];
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Avatar</h1>

    <p>
      Avatars are used to show a thumbnail representation of an individual or business in
      the interface.
    </p>

    <component-props-table :props="props" />
    <component-slots-table :slots="slots" />

    <component-preview>
      <template #title>Avatar in custom sizes</template>

      <ui-avatar v-for="size of ['w-32', 'w-20', 'w-16', 'w-8']">
        <div :class="[size, 'rounded']">
          <img src="/img/avatar.jpg" />
        </div>
      </ui-avatar>
    </component-preview>

    <component-preview>
      <template #title>Avatar rounded</template>

      <ui-avatar v-for="roundSize of ['rounded', 'rounded-xl', 'rounded-full']">
        <div :class="['w-24', roundSize]">
          <img src="/img/avatar.jpg" />
        </div>
      </ui-avatar>
    </component-preview>

    <component-preview>
      <template #title>Avatar with mask</template>

      <ui-avatar v-for="maskType of ['mask-squircle', 'mask-hexagon', 'mask-triangle']">
        <div :class="['w-24 mask', maskType]">
          <img src="/img/avatar.jpg" />
        </div>
      </ui-avatar>
    </component-preview>

    <component-preview>
      <template #title>Avatar group</template>

      <ui-avatar-group class="-space-x-6">
        <ui-avatar v-for="i of [1, 2, 3, 4]">
          <div class="w-12">
            <img src="/img/avatar.jpg" />
          </div>
        </ui-avatar>
      </ui-avatar-group>
    </component-preview>

    <component-preview>
      <template #title>Avatar group with counter</template>

      <ui-avatar-group class="-space-x-6">
        <ui-avatar v-for="i of [1, 2, 3]">
          <div class="w-12">
            <img src="/img/avatar.jpg" />
          </div>
        </ui-avatar>
        <ui-avatar placeholder>
          <div class="w-12 bg-neutral-focus text-neutral-content">
            <span>+99</span>
          </div>
        </ui-avatar>
      </ui-avatar-group>
    </component-preview>

    <component-preview>
      <template #title>Avatar with ring</template>

      <ui-avatar>
        <div
          class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
        >
          <img src="/img/avatar.jpg" />
        </div>
      </ui-avatar>
    </component-preview>

    <component-preview>
      <template #title>Avatar with presence indicator</template>

      <ui-avatar
        v-for="(presence, i) of [{ online: true }, { offline: true }]"
        v-bind="presence"
      >
        <div class="w-24 rounded-full">
          <img src="/img/avatar.jpg" />
        </div>
      </ui-avatar>
    </component-preview>

    <component-preview>
      <template #title>Avatar placeholder</template>

      <ui-avatar placeholder>
        <div class="bg-neutral-focus text-neutral-content rounded-full w-24">
          <span class="text-3xl">K</span>
        </div>
      </ui-avatar>

      <ui-avatar online placeholder>
        <div class="bg-neutral-focus text-neutral-content rounded-full w-16">
          <span class="text-xl">JO</span>
        </div>
      </ui-avatar>

      <ui-avatar placeholder>
        <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
          <span>MX</span>
        </div>
      </ui-avatar>

      <ui-avatar placeholder>
        <div class="bg-neutral-focus text-neutral-content rounded-full w-8">
          <span class="text-xs">AA</span>
        </div>
      </ui-avatar>
    </component-preview>
  </div>
</template>
