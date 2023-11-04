<script lang="ts">
export const RADIO_SIZE_CLASS_MAP = {
  xs: "radio-xs",
  sm: "radio-sm",
  md: undefined, // default
  lg: "radio-lg",
};

export const RADIO_COLOR_CLASS_MAP = {
  default: undefined, // default
  primary: "radio-primary",
  secondary: "radio-secondary",
  accent: "radio-accent",
  info: "radio-info",
  success: "radio-success",
  warning: "radio-warning",
  error: "radio-error",
};
</script>

<script setup lang="ts">
export interface Props {
  name?: string;
  value?: string;
  modelValue?: string;
  size?: keyof typeof RADIO_SIZE_CLASS_MAP;
  color?: keyof typeof RADIO_COLOR_CLASS_MAP;
  checked?: boolean;
  disabled?: boolean;
}

const emit = defineEmits(["update:checked", "update:modelValue"]);

const props = withDefaults(defineProps<Props>(), {
  size: "md",
  color: "default",
});

const isChecked = computed(() => {
  return props.modelValue === props.value ?? props.checked;
});

function onChange(event: Event) {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
  emit("update:checked", target.checked);
}
</script>

<template>
  <input
    type="radio"
    :class="['radio', RADIO_SIZE_CLASS_MAP[size], RADIO_COLOR_CLASS_MAP[color]]"
    v-bind="{ name, value, checked: isChecked, disabled }"
    @change="onChange"
  />
</template>
