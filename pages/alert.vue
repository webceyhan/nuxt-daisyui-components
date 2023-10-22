<script setup lang="ts">
import { STATE_COLORS } from "~/constants";

const stateContents = [
  { icon: "info-cirle", text: "New software update available." },
  { icon: "check-circle", text: "Your purchase has been confirmed!" },
  { icon: "exclamation-triangle", text: "Warning: Invalid email address!" },
  { icon: "x-circle", text: "Error! Task failed successfully." },
];
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Alert</h1>

    <p>Alert informs users about important events.</p>

    <component-preview>
      <template #title>Alert</template>

      <ui-alert>
        <ui-icon name="info-circle" class="text-info" />
        <span>12 unread messages. Tap to see.</span>
      </ui-alert>
    </component-preview>

    <component-preview v-for="(color, i) of STATE_COLORS">
      <template #title>{{ color }} color</template>

      <ui-alert :color="color">
        <ui-icon :name="stateContents[i].text" />
        <span>{{ stateContents[i].text }}</span>
      </ui-alert>
    </component-preview>

    <component-preview>
      <template #title>Alert with buttons</template>

      <ui-alert>
        <ui-icon name="info-circle" class="text-info" />
        <span>we use cookies for no reason.</span>
        <div>
          <ui-button size="sm">Deny</ui-button>
          <ui-button color="primary" size="sm">Accept</ui-button>
        </div>
      </ui-alert>
    </component-preview>

    <component-preview>
      <template #title>Alert with title and description</template>

      <ui-alert>
        <ui-icon name="info-circle" class="text-info" />
        <div>
          <h3 class="font-bold">New message!</h3>
          <div class="text-xs">You have 1 unread message</div>
        </div>
        <ui-button size="sm">See</ui-button>
      </ui-alert>
    </component-preview>
  </div>
</template>
