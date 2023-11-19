<script setup lang="ts">
type Menu = {
  title: string;
  icon: string;
  iconClass: string;
  links: {
    label: string;
    href: string;
  }[];
};

const MENU_DEFINITIONS: Record<string, Menu> = {
  actions: {
    title: "Actions",
    icon: "cursor-fill",
    iconClass: "text-fuchsia-600",
    links: [],
  },
  data: {
    title: "Data display",
    icon: "window",
    iconClass: "text-teal-600",
    links: [],
  },
  input: {
    title: "Data input",
    icon: "pencil-square",
    iconClass: "text-rose-600",
    links: [],
  },
  layout: {
    title: "Layout",
    icon: "grid-fill",
    iconClass: "text-blue-600",
    links: [],
  },
  navigation: {
    title: "Navigation",
    icon: "link-45deg",
    iconClass: "text-cyan-600",
    links: [],
  },
  mockup: {
    title: "Mockup",
    icon: "phone",
    iconClass: "text-lime-600",
    links: [],
  },
};

// populate the menu links
useRouter()
  .getRoutes()
  .forEach(({ path }) => {
    // skip the root path
    if (path === "/") return;

    // split the path into menu and page names
    const [menuName, pageName] = path.split("/").slice(1);

    MENU_DEFINITIONS[menuName].links.push({
      label: pageName,
      href: path,
    });
  });
</script>

<template>
  <details v-for="menu of MENU_DEFINITIONS" class="collapse collapse-arrow">
    <!-- title -->
    <summary class="collapse-title border-t border-neutral">
      <div class="flex items-center gap-4">
        <ui-icon :name="menu.icon" :class="['text-lg', menu.iconClass]" />
        <span>{{ menu.title }}</span>
      </div>
    </summary>

    <!-- links -->
    <div class="collapse-content">
      <ul class="menu menu-md px-4 py-0">
        <li v-for="link of menu.links">
          <NuxtLink :href="link.href" active-class="active">
            <span class="capitalize">{{ link.label }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </details>
</template>
