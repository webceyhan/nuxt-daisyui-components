<template>
  <Head>
    <link
      media="screen and (min-width: 520px)"
      href="https://fonts.googleapis.com/css2?family=Figtree:wght@300;900&amp;family=Noto+Sans+JP:wght@300;900&amp;family=Noto+Sans:wght@300;900&amp;family=Vazirmatn:wght@300;900&amp;display=swap"
      rel="stylesheet"
    />
  </Head>

  <ui-drawer class="lg:drawer-open">
    <ui-drawer-side class="overflow-y-scroll z-40">
      <div class="bg-base-100 min-h-screen w-80">
        <!-- logo -->
        <daisyui-logo class="max-lg:hidden sticky top-0 z-20" />

        <!-- search -->
        <div class="lg:hidden sticky top-0 z-20 w-full px-6 py-4 bg-base-100">
          <component-search class="w-full" />
        </div>

        <div class="h-4" />

        <!-- navigation -->
        <component-menu />
      </div>
    </ui-drawer-side>

    <ui-drawer-content>
      <div
        class="bg-base-100 text-base-content sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 shadow-sm"
      >
        <nav class="navbar w-full">
          <div class="flex flex-1 md:gap-1 lg:gap-2">
            <ui-drawer-button class="btn-square btn-ghost lg:hidden">
              <svg-icon name="menu-toggle" class="h-5 w-5 md:h-6 md:w-6" />
            </ui-drawer-button>

            <!-- logo -->
            <daisyui-logo class="lg:hidden" />

            <component-search class="hidden w-full max-w-sm lg:flex" />
          </div>

          <div class="flex-0">
            <theme-selector />

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
    </ui-drawer-content>
  </ui-drawer>
</template>

<style>
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  /*background: rgba(0, 0, 0, 0.1);*/
  border-radius: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(86, 86, 86, 0.3);
  border-radius: 5px;
}
</style>
