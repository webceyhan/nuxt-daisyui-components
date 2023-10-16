<script setup lang="ts"></script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Hero</h1>

    <p>
      Hero is a component for displaying a large box or image with a title and
      description.
    </p>

    <component-preview>
      <template #title>Centered hero</template>

      <ui-hero class="min-h-[30rem] rounded bg-base-200 text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Hello there</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
            exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <ui-button color="primary">Get Started</ui-button>
        </div>
      </ui-hero>
    </component-preview>

    <component-preview>
      <template #title>Hero with figure</template>

      <ui-hero
        class="min-h-[30rem] rounded bg-base-200"
        content-class="flex-col lg:flex-row"
      >
        <img src="img/spiderman.jpg" class="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 class="text-5xl font-bold">Box Office News!</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
            exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <ui-button color="primary">Get Started</ui-button>
        </div>
      </ui-hero>
    </component-preview>

    <component-preview>
      <template #title>Hero with figure but reverse order</template>

      <ui-hero
        class="min-h-[30rem] rounded bg-base-200"
        content-class="flex-col lg:flex-row-reverse"
      >
        <img src="img/spiderman.jpg" class="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 class="text-5xl font-bold">Box Office News!</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
            exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <ui-button color="primary">Get Started</ui-button>
        </div>
      </ui-hero>
    </component-preview>

    <component-preview>
      <template #title>HHero with form</template>

      <ui-hero
        class="min-h-[30rem] bg-base-200"
        content-class="flex-col lg:flex-row-reverse"
      >
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">Login now!</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
            exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                class="input input-bordered"
                required
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                class="input input-bordered"
                required
              />
              <label class="label">
                <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </ui-hero>
    </component-preview>

    <component-preview>
      <template #title>Hero with overlay image</template>

      <ui-hero
        class="min-h-[30rem] rounded"
        overlay-url="img/caro-wide1.jpeg"
        overlay-class="bg-opacity-60"
        content-class="text-center text-neutral-content"
      >
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
          <p class="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
            exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </ui-hero>
    </component-preview>
  </div>
</template>
