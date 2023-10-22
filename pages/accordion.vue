<script setup lang="ts"></script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Accordion</h1>

    <p>
      Accordion is used for showing and hiding content but only one item can stay open at
      a time.
    </p>

    <component-preview>
      <template #title>Accordion using radio inputs</template>

      <ui-accordion name="my-accordion-1" v-for="i of [1, 2, 3]" :open="i < 2">
        <template #title>Click to open this one and close others</template>
        <p>hello</p>
      </ui-accordion>
    </component-preview>

    <component-preview>
      <template #title>Accordion with arrow icon</template>

      <ui-accordion
        name="my-accordion-2"
        v-for="i of [1, 2, 3]"
        icon="arrow"
        :open="i < 2"
      >
        <template #title>Click to open this one and close others</template>
        <p>hello</p>
      </ui-accordion>
    </component-preview>

    <component-preview>
      <template #title>Accordion with plus/minus icon</template>

      <ui-accordion
        name="my-accordion-3"
        v-for="i of [1, 2, 3]"
        icon="plus"
        :open="i < 2"
      >
        <template #title>Click to open this one and close others</template>
        <p>hello</p>
      </ui-accordion>
    </component-preview>

    <component-preview>
      <template #title>Using Accordion and Join together</template>
      <template #description>
        to join the items together and handle border radius automatically
      </template>

      <div class="join join-vertical w-full">
        <ui-accordion
          v-for="i of [1, 2, 3]"
          name="my-accordion-4"
          class="join-item"
          icon="arrow"
        >
          <template #title>Click to open this one and close others</template>
          <p>hello</p>
        </ui-accordion>
      </div>
    </component-preview>
  </div>
</template>
