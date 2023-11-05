<script setup lang="ts">
const menus = [
  {
    title: "Actions",
    icon: "cursor-fill",
    iconClass: "text-fuchsia-600",
    links: [
      { label: "Button", href: "/actions/button" },
      { label: "Dropdown", href: "/actions/dropdown" },
      { label: "Modal", href: "/actions/modal" },
      { label: "Swap", href: "/actions/swap" },
    ],
  },
  {
    title: "Data display",
    icon: "window",
    iconClass: "text-teal-600",
    links: [
      { label: "Accordion", href: "/data/accordion" },
      { label: "Alert", href: "/data/alert" },
      { label: "Avatar", href: "/data/avatar" },
      { label: "Badge", href: "/data/badge" },
      { label: "Card", href: "/data/card" },
      { label: "Carousel", href: "/data/carousel" },
      { label: "Chat bubble", href: "/data/chat" },
      { label: "Collapse", href: "/data/collapse" },
      { label: "Countdown", href: "/data/countdown" },
      { label: "Kbd", href: "/data/kbd" },
      { label: "Loading", href: "/data/loading" },
      { label: "Progress", href: "/data/progress" },
      { label: "Radial progress", href: "/data/radial-progress" },
      { label: "Stat", href: "/data/stat" },
      { label: "Table", href: "/data/table" },
      { label: "Tooltip", href: "/data/tooltip" },
    ],
  },
  {
    title: "Data input",
    icon: "pencil-square",
    iconClass: "text-rose-600",
    links: [
      { label: "Checkbox", href: "/input/checkbox" },
      { label: "File input", href: "/input/file-input" },
      { label: "Radio", href: "/input/radio" },
      { label: "Range", href: "/input/range" },
      { label: "Rating", href: "/input/rating" },
      { label: "Select", href: "/input/select" },
      { label: "Text input", href: "/input/text-input" },
      { label: "Textarea", href: "/input/textarea" },
      { label: "Toggle", href: "/input/toggle" },
    ],
  },
  {
    title: "Layout",
    icon: "grid-fill",
    iconClass: "text-blue-600",
    links: [
      { label: "Artboard", href: "/artboard" },
      { label: "Divider", href: "/divider" },
      { label: "Drawer", href: "/drawer" },
      { label: "Footer", href: "/footer" },
      { label: "Hero", href: "/hero" },
      { label: "Indicator", href: "/indicator" },
      { label: "Join", href: "/join" },
      { label: "Mask", href: "/mask" },
      { label: "Stack", href: "/stack" },
      { label: "Toast", href: "/toast" },
      { label: "Form Control", href: "/form-control" },
    ],
  },
  {
    title: "Navigation",
    icon: "link-45deg",
    iconClass: "text-cyan-600",
    links: [
      { label: "Breadcrumbs", href: "/navigation/breadcrumbs" },
      { label: "Bottom navigation", href: "/navigation/bottom-navigation" },
      { label: "Link", href: "/navigation/link" },
      { label: "Menu", href: "/navigation/menu" },
      { label: "Navbar", href: "/navigation/navbar" },
      { label: "Pagination", href: "/navigation/pagination" },
      { label: "Steps", href: "/navigation/steps" },
      { label: "Tab", href: "/navigation/tab" },
    ],
  },
  {
    title: "Mockup",
    icon: "phone",
    iconClass: "text-lime-600",
    links: [
      { label: "Browser", href: "/mockup/browser" },
      { label: "Code", href: "/mockup/code" },
      { label: "Phone", href: "/mockup/phone" },
      { label: "Window", href: "/mockup/window" },
    ],
  },
];
</script>

<template>
  <ui-drawer id="app-drawer" class="lg:drawer-open" aside-class="z-40">
    <template #aside>
      <div class="bg-base-100 w-80">
        <!-- logo -->
        <daisyui-logo class="sticky top-0 z-20" />

        <!-- navigation -->
        <ul v-for="(menu, i) of menus" :key="i" class="menu menu-md px-4 py-0">
          <!-- divider -->
          <li />

          <!-- menu title -->
          <li class="menu-title flex flex-row items-center gap-4">
            <ui-icon :name="menu.icon" :class="['text-lg', menu.iconClass]" />
            <span>{{ menu.title }}</span>
          </li>

          <!-- menu links -->
          <li v-for="(link, i) of menu.links" :key="i">
            <NuxtLink :href="link.href" active-class="active">
              <span>{{ link.label }}</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </template>

    <div
      class="bg-base-100 text-base-content sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 shadow-sm"
    >
      <nav class="navbar w-full">
        <!-- drawer toggle -->
        <label for="app-drawer" class="btn btn-square btn-ghost drawer-button lg:hidden">
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
      </nav>
    </div>

    <!-- main content -->
    <main class="w-full max-w-4xl px-6 pb-16 xl:pr-2">
      <NuxtPage />
    </main>
  </ui-drawer>
</template>
