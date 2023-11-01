<script setup lang="ts">
import { STATE_COLORS } from "~/constants";

const props = [
  { name: "icon", type: "string", description: "Icon name" },
  { name: "title", type: "string", description: "Title of alert" },
  { name: "message", type: "string", description: "Message of alert" },
  { name: "color", type: "string", values: STATE_COLORS },
];

const slots = [
  { name: "default", description: "Content of alert" },
  { name: "icon", description: "Icon content of alert" },
  { name: "actions", description: "Actions content of alert" },
];

const statefulAlerts = [
  { icon: "info-circle", message: "New software update available." },
  { icon: "check-circle", message: "Your purchase has been confirmed!" },
  { icon: "exclamation-triangle", message: "Warning: Invalid email address!" },
  { icon: "x-circle", message: "Error! Task failed successfully." },
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

      <ui-alert
        v-for="(color, i) of STATE_COLORS"
        v-bind="{ ...statefulAlerts[i], color }"
      />
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
