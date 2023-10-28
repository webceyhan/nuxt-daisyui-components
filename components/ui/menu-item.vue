<script setup lang="ts">
interface Props {
  label?: string;
  href?: string;
  active?: boolean;
  disabled?: boolean;
  asTitle?: boolean;
}

defineProps<Props>();
</script>

<template>
  <li v-if="asTitle">
    <h2 class="menu-title">
      <slot> {{ label }} </slot>
    </h2>
  </li>

  <li v-else :class="{ disabled }">
    <a :href="href" :class="{ active }">
      <slot> {{ label }} </slot>
    </a>
  </li>
</template>
