<script lang="ts">
let count = 0;
</script>

<script setup lang="ts">
interface Props {
  id?: string;
  asideClass?: string;
  alignEnd?: boolean;
}

withDefaults(defineProps<Props>(), {
  id: `drawer-${count++}`,
});
</script>

<template>
  <div :class="['drawer', {
    'drawer-end': alignEnd,
  }]">
    <!-- toggle -->
    <input :id="id" type="checkbox" class="drawer-toggle" />

    <!-- content -->
    <div class="drawer-content">
      <slot>
        <label :for="id" class="btn drawer-button">Open</label>
      </slot>
    </div>

    <!-- aside -->
    <aside :class="['drawer-side h-full', asideClass]">
      <label :for="id" class="drawer-overlay" />
      <slot name="sidebar" />
    </aside>
  </div>
</template>
