<template>
  <div class="stat">
    <!-- figure -->
    <div v-if="$slots.figure" class="stat-figure">
      <slot name="figure" />
    </div>

    <!-- title -->
    <div v-if="$slots.title" class="stat-title">
      <slot name="title" />
    </div>

    <!-- value -->
    <div class="stat-value">
      <slot />
    </div>

    <!-- subtitle -->
    <div v-if="$slots.subtitle" class="stat-title">
      <slot name="subtitle" />
    </div>

    <!-- description -->
    <div v-if="$slots.desc" class="stat-desc">
      <slot name="desc" />
    </div>

    <!-- actions -->
    <div v-if="$slots.actions" class="stat-actions">
      <slot name="actions" />
    </div>
  </div>
</template>
