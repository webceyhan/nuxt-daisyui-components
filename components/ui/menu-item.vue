<script setup lang="ts">
interface Props {
  title?: string;
  open?: boolean;
  disabled?: boolean;
  collapsible?: boolean;
}

withDefaults(defineProps<Props>(), {
  open: true,
});
</script>

<template>
  <li :class="[{ disabled }]">
    <details v-if="collapsible" :open="open">
      <summary>
        <slot name="title"> {{ title }} </slot>
      </summary>
      <slot />
    </details>

    <template v-else>
      <h2 v-if="title" class="menu-title">{{ title }}</h2>
      <slot />
    </template>
  </li>
</template>
