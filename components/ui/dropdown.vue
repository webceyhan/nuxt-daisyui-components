<script lang="ts">
import { ClassMap, Position } from "./types";

const POSITION_CLASS_MAP: ClassMap<Position> = {
  top: "dropdown-top",
  bottom: "dropdown-bottom",
  left: "dropdown-left",
  right: "dropdown-right",
};
</script>

<script setup lang="ts">
interface Props {
  label?: string;
  open?: boolean;
  hover?: boolean;
  position?: Position;
  alignToEnd?: boolean;
}

withDefaults(defineProps<Props>(), {
  position: "bottom",
});
</script>

<template>
  <div
    :class="[
      'dropdown',
      POSITION_CLASS_MAP[position],
      {
        'dropdown-open': open,
        'dropdown-hover': hover,
        'dropdown-end': alignToEnd,
      },
    ]"
  >
    <!-- trigger button -->
    <slot name="trigger">
      <label tabindex="0" class="btn m-1 space-x-2">
        {{ label }}
        <ui-icon name="chevron-down" />
      </label>
    </slot>

    <!-- dropdown content -->
    <ul
      tabindex="0"
      class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
    >
      <slot />
    </ul>
  </div>
</template>
