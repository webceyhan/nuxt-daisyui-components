<script setup lang="ts">
export interface Props {
  title?: string;
  href?: string;
  icon?: string;
  open?: boolean;
  collapsible?: boolean;
}

defineProps<Props>();
</script>

<template>
  <li>
    <details v-if="collapsible" :open="open">
      <summary>
        <slot name="icon">
          <ui-icon v-if="icon" :name="icon" />
        </slot>

        <slot name="title"> {{ title }} </slot>
      </summary>

      <ul>
        <slot />
      </ul>
    </details>

    <template v-else>
      <a v-if="href" :href="href">{{ title }}</a>

      <h2 v-else-if="title" class="menu-title">
        <slot name="title"> {{ title }} </slot>
      </h2>

      <ul>
        <slot />
      </ul>
    </template>
  </li>
</template>
