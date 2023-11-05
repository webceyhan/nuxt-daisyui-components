<script setup lang="ts">
import { COLOR_CLASS_MAP } from "~/components/ui/alert/alert.vue";

const COLORS: any[] = Object.keys(COLOR_CLASS_MAP);

const props = [
  {
    name: "title",
    type: "string",
    description: "Title of alert",
  },
  {
    name: "message",
    type: "string",
    description: "Message of alert",
  },
  {
    name: "icon",
    type: "string",
    description: "Icon name",
  },
  {
    name: "color",
    type: "string",
    values: COLORS,
  },
];

const slots = [
  {
    name: "default",
    description: "Content of alert",
  },
  {
    name: "icon",
    description: "Icon content of alert",
  },
  {
    name: "actions",
    description: "Actions content of alert",
  },
];

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////

const statefulAlerts: any[] = [
  {
    color: "info",
    icon: "info-circle",
    message: "New software update available.",
  },
  {
    color: "success",
    icon: "check-circle",
    message: "Your purchase has been confirmed!",
  },
  {
    color: "warning",
    icon: "exclamation-triangle",
    message: "Warning: Invalid email address!",
  },
  {
    color: "error",
    icon: "x-circle",
    message: "Error! Task failed successfully.",
  },
];
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Alert</h1>

    <p>Alert informs users about important events.</p>

    <component-props-table :props="props" />
    <component-slots-table :slots="slots" />

    <component-preview>
      <template #title>Alert</template>

      <ui-alert icon="info-circle" message="12 unread messages. Tap to see." />
    </component-preview>

    <component-preview>
      <template #title>Colors</template>

      <ui-alert v-for="state of statefulAlerts" v-bind="state" />
    </component-preview>

    <component-preview>
      <template #title>With buttons</template>

      <ui-alert icon="info-circle">
        we use cookies for no reason.
        <template #actions>
          <ui-button label="deny" size="sm" />
          <ui-button label="accept" color="primary" size="sm" />
        </template>
      </ui-alert>
    </component-preview>

    <component-preview>
      <template #title>With title and description</template>

      <ui-alert
        icon="info-circle"
        title="New message!"
        message="You have 1 unread message"
      >
        <template #actions>
          <ui-button label="See" size="sm" />
        </template>
      </ui-alert>
    </component-preview>
  </div>
</template>
