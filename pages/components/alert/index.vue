<script setup lang="ts">
import { DESCRIPTIONS, COLORS } from "~/data/alert";

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

    <component-description v-for="desc of DESCRIPTIONS" v-bind="desc" />

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
