<script lang="ts">
let index = 0;
</script>

<script setup lang="ts">
export interface Props {
  id?: string;
  open?: boolean;
  alignEnd?: boolean;
}

const props = defineProps<Props>();

const id = props.id ?? `drawer-${index++}`;

provide("drawer-id", id);
</script>

<template>
  <div
    :class="[
      'drawer',
      {
        'drawer-open': open,
        'drawer-end': alignEnd,
      },
    ]"
  >
    <!-- toggle -->
    <input :id="id" type="checkbox" class="drawer-toggle" />

    <slot />
  </div>
</template>
