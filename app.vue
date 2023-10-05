<script setup lang="ts">
const menus = [
  {
    title: "Actions",
    icon: "cursor-fill",
    iconClass: "text-fuchsia-600",
    links: [
      { label: "Button", href: "/button" },
      { label: "Dropdown", href: "/dropdown" },
      { label: "Modal", href: "/modal" },
      { label: "Swap", href: "/swap" },
    ],
  },
  {
    title: "Data display",
    icon: "window",
    iconClass: "text-teal-600",
    links: [
      { label: "Accordion", href: "/accordion" },
      { label: "Alert", href: "/alert" },
      { label: "Avatar", href: "/avatar" },
      { label: "Badge", href: "/badge" },
      { label: "Card", href: "/card" },
      { label: "Carousel", href: "/carousel" },
      { label: "Chat bubble", href: "/chat" },
      { label: "Collapse", href: "/collapse" },
      { label: "Countdown", href: "/countdown" },
      { label: "Kbd", href: "/kbd" },
      { label: "Loading", href: "/loading" },
      { label: "Progress", href: "/progress" },
      { label: "Radial progress", href: "/radial-progress" },
      { label: "Stat", href: "/stat" },
      { label: "Table", href: "/table" },
      // { label: "Tooltip", href: "/tooltip" },
    ],
  },
  {
    title: "Data input",
    icon: "pencil-square",
    iconClass: "text-rose-600",
    links: [
      // { label: "Checkbox", href: "/checkbox" },
      // { label: "File input", href: "/file-input" },
      // { label: "Radio", href: "/radio" },
      // { label: "Range", href: "/range" },
      // { label: "Rating", href: "/rating" },
      // { label: "Select", href: "/select" },
      // { label: "Text input", href: "/text-input" },
      // { label: "Textarea", href: "/textarea" },
      // { label: "Toggle", href: "/toggle" },
    ],
  },
  {
    title: "Layout",
    icon: "grid-fill",
    iconClass: "text-blue-600",
    links: [
      // { label: "Artboard", href: "/artboard" },
      // { label: "Divider", href: "/divider" },
      // { label: "Drawer", href: "/drawer" },
      // { label: "Footer", href: "/footer" },
      // { label: "Hero", href: "/hero" },
      // { label: "Indicator", href: "/indicator" },
      // { label: "Join", href: "/join" },
      // { label: "Mask", href: "/mask" },
      // { label: "Stack", href: "/stack" },
      // { label: "Toast", href: "/toast" },
    ],
  },
  {
    title: "Navigation",
    icon: "link-45deg",
    iconClass: "text-cyan-600",
    links: [
      // { label: "Breadcrumbs", href: "/breadcrumbs" },
      // { label: "Bottom navigation", href: "/bottom-navigation" },
      // { label: "Link", href: "/link" },
      // { label: "Menu", href: "/menu" },
      // { label: "Navbar", href: "/navbar" },
      // { label: "Pagination", href: "/pagination" },
      // { label: "Steps", href: "/steps" },
      // { label: "Tab", href: "/tab" },
    ],
  },
  {
    title: "Mockup",
    icon: "phone",
    iconClass: "text-lime-600",
    links: [
      // { label: "Browser", href: "/browser" },
      // { label: "Code", href: "/code" },
      // { label: "Phone", href: "/phone" },
      // { label: "Window", href: "/window" },
    ],
  },
];
</script>

<template>
  <div class="container flex my-10 gap-10">
    <!-- sidebar -->
    <aside class="bg-base-100 w-80">
      <!-- logo -->
      <div
        class="flex bg-base-100 sticky top-0 z-20 items-center gap-2 bg-opacity-90 px-4 py-2 backdrop-blur"
      >
        <NuxtLink href="/" class="flex-0 btn btn-ghost px-2">
          <svg
            width="32"
            height="32"
            viewBox="0 0 415 415"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="82.5"
              y="290"
              width="250"
              height="125"
              rx="62.5"
              fill="#1AD1A5"
            ></rect>
            <circle cx="207.5" cy="135" r="130" fill="black" fill-opacity=".3"></circle>
            <circle cx="207.5" cy="135" r="125" fill="white"></circle>
            <circle cx="207.5" cy="135" r="56" fill="#FF9903"></circle>
          </svg>
          <div class="font-title inline-flex text-lg md:text-2xl">
            <span class="lowercase">daisy</span>
            <span class="uppercase text-[#1AD1A5]">UI</span>
          </div>
        </NuxtLink>

        <i class="text-lg font-serif opacity-50">for Nuxt</i>
      </div>

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
    </aside>

    <!-- main content -->
    <main class="flex-1 w-full max-w-4xl flex-grow">
      <NuxtPage />
    </main>
  </div>
</template>
