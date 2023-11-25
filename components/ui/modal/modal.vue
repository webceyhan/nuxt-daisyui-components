<script setup lang="ts">
import type { VerticalAlignment } from "../types";

/**
 * DaisyUI classes to be included in the bundle!
 *
 * VerticalAlignment:
 * - modal-top
 * - modal-middle // default
 * - modal-bottom
 */
export interface Props {
  title?: string;
  class?: string;
  open?: boolean;
  backdrop?: boolean;
  dismissable?: boolean;
  verticalAlignment?: VerticalAlignment;
}

defineEmits(["update:open"]);

const props = defineProps<Props>();
</script>

<template>
  <dialog
    :open="open"
    :class="[
      'modal',
      {
        [`modal-${verticalAlignment}`]: verticalAlignment,
      },
    ]"
    @close="$emit('update:open', false)"
  >
    <div :class="['modal-box', props.class]">
      <!-- top close button -->
      <form v-if="dismissable" method="dialog" novalidate>
        <ui-button
          class="absolute right-2 top-2"
          shape="circle"
          icon="x-lg"
          size="sm"
          ghost
        />
      </form>

      <!-- title -->
      <h3 class="font-bold text-lg">
        <slot name="title"> {{ title }} </slot>
      </h3>

      <!-- content -->
      <div class="py-4">
        <slot />
      </div>

      <!-- actions -->
      <div v-if="$slots.actions" class="modal-action">
        <form method="dialog" novalidate>
          <slot name="actions" />
        </form>
      </div>
    </div>

    <!-- backdrop -->
    <form v-if="backdrop" method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>
