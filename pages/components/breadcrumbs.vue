<script setup lang="ts">
import { DESCRIPTIONS } from "~/data/breadcrumbs";

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Breadcrumbs</h1>

    <p>Breadcrumbs helps users to navigate through the website.</p>

    <component-description v-for="desc of DESCRIPTIONS" v-bind="desc" />

    <component-preview>
      <template #title>Breadcrumbs</template>

      <ui-breadcrumbs>
        <a>Home</a>
        <a>Documents</a>
        <span>Add Document</span>
      </ui-breadcrumbs>
    </component-preview>

    <component-preview>
      <template #title>With icons</template>

      <ui-breadcrumbs>
        <a> <ui-icon name="folder" class="me-2" /> Home </a>
        <a> <ui-icon name="folder" class="me-2" /> Documents </a>
        <span> <ui-icon name="file-plus" class="me-2" /> Add Document </span>
      </ui-breadcrumbs>
    </component-preview>

    <component-preview>
      <template #title>With max-width</template>
      <template #description>
        If you set max-width or the list gets larger than the container it will scroll
      </template>

      <ui-breadcrumbs class="max-w-xs text-sm">
        <span v-for="i in 5">Long text {{ i }}</span>
      </ui-breadcrumbs>
    </component-preview>
  </div>
</template>
