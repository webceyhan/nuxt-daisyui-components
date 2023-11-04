<script lang="ts">
export const SIZE_CLASS_MAP = {
  xs: "textarea-xs",
  sm: "textarea-sm",
  md: undefined, // default
  lg: "textarea-lg",
};

export const COLOR_CLASS_MAP = {
  default: undefined, // default
  primary: "textarea-primary",
  secondary: "textarea-secondary",
  accent: "textarea-accent",
  info: "textarea-info",
  success: "textarea-success",
  warning: "textarea-warning",
  error: "textarea-error",
  ghost: "textarea-ghost",
};
</script>

<script setup lang="ts">
export interface Props {
  modelValue?: string;
  placeholder?: string;
  size?: keyof typeof SIZE_CLASS_MAP;
  color?: keyof typeof COLOR_CLASS_MAP;
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
