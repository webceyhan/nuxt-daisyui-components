<script setup lang="ts"></script>

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

    <component-preview>
      <template #title>Info color</template>

      <ui-alert color="info">
        <ui-icon name="info-circle" />
        <span>New software update available.</span>
      </ui-alert>
    </component-preview>

    <component-preview>
      <template #title>Success color</template>

      <ui-alert color="success">
        <ui-icon name="check-circle" />
        <span>Your purchase has been confirmed!</span>
      </ui-alert>
    </component-preview>

    <component-preview>
      <template #title>Warning color</template>

      <ui-alert color="warning">
        <ui-icon name="exclamation-triangle" />
        <span>Warning: Invalid email address!</span>
      </ui-alert>
    </component-preview>

    <component-preview>
      <template #title>Error color</template>

      <ui-alert color="error">
        <ui-icon name="x-circle" />
        <span>Error! Task failed successfully.</span>
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
