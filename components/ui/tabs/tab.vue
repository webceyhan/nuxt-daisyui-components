<script lang="ts">
export const SIZE_CLASS_MAP = {
  xs: "tab-xs",
  sm: "tab-sm",
  md: undefined, // default
  lg: "tab-lg",
};
</script>

<script setup lang="ts">
export interface Props {
  size?: keyof typeof SIZE_CLASS_MAP;
  active?: boolean;
  lifted?: boolean;
  bordered?: boolean;
  disabled?: boolean;
}

withDefaults(defineProps<Props>(), {
  size: "md",
});
</script>

<template>
  <button
    :class="[
      'tab',
      SIZE_CLASS_MAP[size],
      {
        'tab-active': active,
        'tab-lifted': lifted,
        'tab-bordered': bordered,
        'tab-disabled': disabled,
        indicator: !!$slots.indicator,
      },
    ]"
  >
    <span v-if="$slots.indicator" class="indicator-item">
      <slot name="indicator" />
    </span>

    <slot />
  </button>
</template>
