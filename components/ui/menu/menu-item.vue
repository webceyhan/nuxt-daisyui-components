<script setup lang="ts">
import type { Props as MenuProps } from "./menu.vue";

export interface Props {
  label?: string;
  href?: string;
  icon?: string;
  badge?: string;
  target?: string;
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
      :target="target"
      :data-tip="tooltip"
      :class="{
        active,
        tooltip,
        'tooltip-right': tooltip && !menu?.horizontal,
      }"
    >
      <slot>
        <slot name="icon">
          <ui-icon v-if="icon" :name="icon" />
        </slot>

        <slot name="label">
          <span v-if="label">{{ label }}</span>
        </slot>

        <slot name="badge">
          <ui-badge v-if="badge" :label="badge" color="primary" />
        </slot>
      </slot>
    </a>
  </li>
</template>
