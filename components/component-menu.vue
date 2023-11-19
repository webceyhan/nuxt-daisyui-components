<script setup lang="ts">
type Menu = {
  title: string;
  icon: string;
  links: {
    label: string;
    href: string;
  }[];
};

const MENU_DEFINITIONS: Record<string, Menu> = {
  actions: {
    title: "Actions",
    icon: "cursor-fill",
    links: [],
  },
  data: {
    title: "Data display",
    icon: "window",
    links: [],
  },
  navigation: {
    title: "Navigation",
    icon: "link-45deg",
    links: [],
  },
  feedback: {
    title: "Feedback",
    icon: "chat-square-dots",
    links: [],
  },
  input: {
    title: "Data input",
    icon: "pencil-square",
    links: [],
  },
  layout: {
    title: "Layout",
    icon: "grid-fill",
    links: [],
  },
  mockup: {
    title: "Mockup",
    icon: "phone",
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
      label: pageName.replace(/-/g, " "),
      href: path,
    });
  });

const activeMenuName = computed(() => {
  return useRouter().currentRoute.value.path.split("/")[1];
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
          <ui-icon :name="menu.icon" class="text-lg" />
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
