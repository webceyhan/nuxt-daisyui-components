<script lang="ts">
let count = 0;
</script>

<script setup lang="ts">
export interface Props {
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
    <aside :class="['drawer-side', asideClass]">
      <label :for="id" class="drawer-overlay" />
      <slot name="aside" />
    </aside>
  </div>
</template>
