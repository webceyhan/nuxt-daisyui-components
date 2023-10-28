<script setup lang="ts">
interface Props {
  label?: string;
  href?: string;
  icon?: string;
  active?: boolean;
  disabled?: boolean;
}

defineProps<Props>();
</script>

<template>
  <li :class="{ disabled }">
    <a :href="href" :class="{ active }">
      <slot>
        <ui-icon v-if="icon" :name="icon" />

        <span v-if="label">{{ label }}</span>
      </slot>
    </a>
  </li>
</template>
