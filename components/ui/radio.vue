<script lang="ts">
import { ClassMap, Color, Size } from "./types";

type RadioColor = Exclude<Color, "neutral" | "ghost">;

const SIZE_CLASS_MAP: ClassMap<Size> = {
  xs: "radio-xs",
  sm: "radio-sm",
  md: undefined, // default
  lg: "radio-lg",
};

const COLOR_CLASS_MAP: ClassMap<RadioColor> = {
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
interface Props {
  name?: string;
  value?: string;
  modelValue?: string;
  size?: Size;
  color?: RadioColor;
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
    :class="['radio', SIZE_CLASS_MAP[size], COLOR_CLASS_MAP[color]]"
    v-bind="{ name, value, checked: isChecked, disabled }"
    @change="onChange"
  />
</template>
