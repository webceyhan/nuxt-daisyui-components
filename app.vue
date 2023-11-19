<template>
  <ui-drawer id="app-drawer" class="lg:drawer-open" aside-class="z-40">
    <template #aside>
      <div class="bg-base-100 min-h-screen w-80">
        <!-- logo -->
        <daisyui-logo class="sticky top-0 z-20" />

        <div class="h-4" />

        <!-- navigation -->
        <component-menu />
      </div>
    </template>

    <div
      class="bg-base-100 text-base-content sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 shadow-sm"
    >
      <nav class="navbar w-full">
        <div class="flex flex-1 md:gap-1 lg:gap-2">
          <!-- drawer toggle -->
          <label
            for="app-drawer"
            class="btn btn-square btn-ghost drawer-button lg:hidden"
          >
            <svg
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>

          <!-- logo -->
          <daisyui-logo class="lg:hidden" />
        </div>

        <div class="flex-0">
          <span
            class="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]"
            data-tip="GitHub"
          >
            <div class="flex-none items-center">
              <a
                aria-label="Github"
                target="_blank"
                href="https://github.com/webceyhan/nuxt-daisy-demo"
                rel="noopener, noreferrer"
                class="btn btn-ghost drawer-button btn-square normal-case"
              >
                <ui-icon name="github" class="text-2xl" />
              </a>
            </div>
          </span>
        </div>
      </nav>
    </div>

    <!-- main content -->
    <main class="w-full max-w-4xl px-6 pb-16 xl:pr-2">
      <div class="h-4" />
      <NuxtPage />
    </main>
  </ui-drawer>
</template>
