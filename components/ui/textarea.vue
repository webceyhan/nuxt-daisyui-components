<script lang="ts">
import { ClassMap, Color, Size } from "./types";

type InputColor = Exclude<Color, "neutral">;

const SIZE_CLASS_MAP: ClassMap<Size> = {
  xs: "textarea-xs",
  sm: "textarea-sm",
  md: undefined, // default
  lg: "textarea-lg",
};

const COLOR_CLASS_MAP: ClassMap<InputColor> = {
  default: undefined, // default
  primary: "textarea-primary",
  secondary: "textarea-secondary",
  accent: "textarea-accent",
  ghost: "textarea-ghost",
  info: "textarea-info",
  success: "textarea-success",
  warning: "textarea-warning",
  error: "textarea-error",
};
</script>

<script setup lang="ts">
interface Props {
  modelValue?: string;
  placeholder?: string;
  size?: Size;
  color?: InputColor;
  bordered?: boolean;
  disabled?: boolean;
}

const emit = defineEmits(["update:modelValue"]);

const props = withDefaults(defineProps<Props>(), {
  size: "md",
  color: "default",
});

const valueProxy = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <textarea
    :class="[
      'textarea',
      SIZE_CLASS_MAP[size],
      COLOR_CLASS_MAP[color],
      {
        'textarea-bordered': bordered,
      },
    ]"
    :placeholder="placeholder"
    :disabled="disabled"
    v-model="valueProxy"
  />
</template>
