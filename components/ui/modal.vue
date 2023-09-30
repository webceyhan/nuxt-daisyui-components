<script lang="ts">
import { ClassMap } from "./types";

type Alignment = "top" | "middle" | "bottom";

const ALIGNMENT_CLASS_MAP: ClassMap<Alignment> = {
  top: "modal-top",
  middle: undefined, // default
  bottom: "modal-bottom",
};
</script>

<script setup lang="ts">
interface Props {
  class?: string;
  open?: boolean;
  backdrop?: boolean;
  dismissable?: boolean;
  alignment?: Alignment;
}

defineEmits(["update:open"]);

withDefaults(defineProps<Props>(), {
  alignment: "middle",
});
</script>

<template>
  <dialog
    :open="open"
    :class="['modal', ALIGNMENT_CLASS_MAP[alignment]]"
    @close="$emit('update:open', false)"
  >
    <div class="modal-box" :class="class">
      <!-- top close button -->
      <form v-if="dismissable" method="dialog" novalidate>
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>

      <!-- title -->
      <h3 class="font-bold text-lg">
        <slot name="title" />
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
