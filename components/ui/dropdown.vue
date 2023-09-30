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
      <label tabindex="0" class="btn m-1">
        <svg
          class="inline w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          ></path>
        </svg>
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
