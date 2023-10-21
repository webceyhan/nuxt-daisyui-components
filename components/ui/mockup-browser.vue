<template>
  <div class="mockup-browser">
    <div class="mockup-browser-toolbar">
      <slot name="toolbar">
        <div class="input">
          <slot name="input"> https://daisyui.com </slot>
        </div>
      </slot>
    </div>

    <slot>
      <div class="flex justify-center px-4 py-16 border-t border-base-200">Hello!</div>
    </slot>
  </div>
</template>
