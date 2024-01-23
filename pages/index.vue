<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-xl space-y-4">
        <h1 class="text-5xl font-bold">Welcome to Demo!</h1>

        <p class="py-6">
          This is a demo page of
          <a href="https://daisyui.com/" class="link" target="_blank">daisyUI</a>
          components written in
          <a href="https://vuejs.org/" class="link" target="_blank">Vue.js</a>
          for
          <a href="https://nuxt.com/" class="link" target="_blank">Nuxt</a>

          <br />
          <br />

          You can easily copy & paste each component to your project. There is no need to
          install any additional dependencies except
          <a href="https://tailwindcss.com/" class="link" target="_blank">Tailwind CSS</a>
          and daisyUI.
        </p>

        <div class="mockup-code text-left">
          <pre data-prefix="$"><code>npm install -D @nuxtjs/tailwindcss</code></pre>
        </div>

        <div class="mockup-code text-left">
          <pre data-prefix="$"><code>npm install -D daisyui@latest</code></pre>
        </div>

        <br />

        <NuxtLink href="/components/button" class="btn btn-primary">Get Started</NuxtLink>
      </div>
    </div>
  </div>
</template>
