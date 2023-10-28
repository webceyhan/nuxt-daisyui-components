<script setup lang="ts">
import { MenuProps } from "./menu.vue";

interface Props {
  label?: string;
  href?: string;
  icon?: string;
  tooltip?: string;
  active?: boolean;
  disabled?: boolean;
}

defineProps<Props>();

const menu = inject<MenuProps>("menu");
</script>

<template>
  <li :class="{ disabled }">
    <a
      :href="href"
      :data-tip="tooltip"
      :class="{
        active,
        tooltip,
        'tooltip-right': tooltip && !menu?.horizontal,
      }"
    >
      <slot>
        <ui-icon v-if="icon" :name="icon" />

        <span v-if="label">{{ label }}</span>
      </slot>
    </a>
  </li>
</template>
