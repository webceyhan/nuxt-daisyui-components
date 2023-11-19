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

const activeMenuName = computed(() => {
  const { path } = useRouter().currentRoute.value;
  return path.split("/")[1] ?? "actions";
});
</script>

<template>
  <div class="px-4 py-0">
    <details
      v-for="(menu, name) of MENU_DEFINITIONS"
      class="collapse collapse-arrow"
      :open="name == activeMenuName"
    >
      <!-- title -->
      <summary class="collapse-title min-h-0 py-2">
        <div class="flex items-center">
          <ui-icon :name="menu.icon" :class="['text-lg', menu.iconClass]" />
          <span class="menu-title">{{ menu.title }}</span>
        </div>
      </summary>

      <!-- links -->
      <div class="collapse-content">
        <ul class="menu menu-md py-0">
          <li>
            <ul class="m-0">
              <li v-for="link of menu.links">
                <NuxtLink :href="link.href" active-class="active">
                  <span class="capitalize">{{ link.label }}</span>
                </NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </details>
  </div>
</template>
