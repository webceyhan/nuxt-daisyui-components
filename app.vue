<script setup lang="ts">
const menus = [
  {
    title: "Actions",
    links: [
      { label: "Button", href: "/button" },
      { label: "Dropdown", href: "/dropdown" },
      { label: "Modal", href: "/modal" },
      { label: "Swap", href: "/swap" },
    ],
  },
  {
    title: "Data display",
    links: [
      { label: "Accordion", href: "/accordion" },
      { label: "Alert", href: "/alert" },
      // { label: "Avatar", href: "/avatar" },
      { label: "Badge", href: "/badge" },
      // { label: "Card", href: "/card" },
      // { label: "Carousel", href: "/carousel" },
      // { label: "Chat bubble", href: "/chat-bubble" },
      // { label: "Collapse", href: "/collapse" },
      // { label: "Countdown", href: "/countdown" },
      // { label: "Kbd", href: "/kbd" },
      // { label: "Loading", href: "/loading" },
      // { label: "Progress", href: "/progress" },
      // { label: "Radial progress", href: "/radial-progress" },
      // { label: "Stat", href: "/stat" },
      // { label: "Table", href: "/table" },
      // { label: "Tooltip", href: "/tooltip" },
    ],
  },
  {
    title: "Data input",
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
      <ul v-for="(menu, i) of menus" :key="i" class="menu menu-md px-4 py-0">
        <!-- menu title -->
        <li class="menu-title flex flex-row gap-4">
          <span>{{ menu.title }}</span>
        </li>

        <!-- menu links -->
        <li v-for="(link, i) of menu.links" :key="i">
          <NuxtLink :href="link.href">
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
