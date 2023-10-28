<script setup lang="ts">
import { SIZES } from "~/constants";

const items = [
  { label: "Home", icon: "house" },
  { label: "Warnings", icon: "info-circle", active: true },
  { label: "Statics", icon: "reception-4" },
];

const megeMenu = [
  {
    title: "Solutions",
    children: [
      { title: "Design" },
      { title: "Development" },
      { title: "Hosting" },
      { title: "Domain register" },
    ],
  },
  {
    title: "Enterprise",
    children: [
      { title: "CRM software" },
      { title: "Marketing management" },
      { title: "Security" },
      { title: "Consulting" },
    ],
  },
  {
    title: "Products",
    children: [
      { title: "UI Kit" },
      { title: "Wordpress themes" },
      { title: "Wordpress plugins" },
      {
        title: "Open source",
        children: [
          { title: "Auth management system" },
          { title: "VScode theme" },
          { title: "Color picker app" },
        ],
      },
    ],
  },
  {
    title: "Company",
    children: [
      { title: "About us" },
      { title: "Contact us" },
      { title: "Privacy policy" },
      { title: "Press kit" },
    ],
  },
];
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Menu</h1>

    <p>Menu is used to display a list of links vertically or horizontally.</p>

    <component-preview>
      <template #title>Menu</template>

      <ui-menu class="bg-base-200 w-56 rounded-box">
        <ui-menu-item v-for="i in 3" :label="`Item ${i}`" />
      </ui-menu>
    </component-preview>

    <component-preview>
      <template #title>
        Responsive: vertical on small screen, horizontal on large screen
      </template>

      <ui-menu class="bg-base-200 rounded-box lg:menu-horizontal">
        <ui-menu-item v-for="i in 3" :label="`Item ${i}`" />
      </ui-menu>
    </component-preview>

    <component-preview>
      <template #title>Menu with icon only</template>

      <ui-menu class="bg-base-200 rounded-box">
        <ui-menu-item v-for="item of items" :icon="item.icon" />
      </ui-menu>
    </component-preview>

    <component-preview>
      <template #title>Menu with icon only (horizontal)</template>

      <ui-menu class="bg-base-200 rounded-box" horizontal>
        <ui-menu-item v-for="item of items" :icon="item.icon" />
      </ui-menu>
    </component-preview>

    <component-preview>
      <template #title>Menu with icon only with tooltip</template>

      <ui-menu class="bg-base-200 rounded-box">
        <ui-menu-item v-for="item of items" :icon="item.icon" :tooltip="item.label" />
      </ui-menu>
    </component-preview>

    <component-preview>
      <template #title>Menu with icon only (horizontal) with tooltip</template>

      <ui-menu class="bg-base-200 rounded-box mt-6" horizontal>
        <ui-menu-item v-for="item of items" :icon="item.icon" :tooltip="item.label" />
      </ui-menu>
    </component-preview>

    <component-preview>
      <template #title>Menu sizes</template>

      <div class="flex flex-col gap-4">
        <ui-menu v-for="size of SIZES" class="bg-base-200 w-56 rounded-box" :size="size">
          <ui-menu-item v-for="i in 2"> {{ size }} Item {{ i }} </ui-menu-item>
        </ui-menu>
      </div>
    </component-preview>

    <component-preview>
      <template #title>Menu with disabled items</template>

      <ui-menu class="bg-base-200 w-56 rounded-box">
        <ui-menu-item v-for="i in 3" :disabled="i > 1">
          {{ i > 1 ? "disabled" : "enabled" }} item
        </ui-menu-item>
      </ui-menu>
    </component-preview>

    <component-preview>
      <template #title>Menu with icons</template>

      <ui-menu class="bg-base-200 w-56 rounded-box">
        <ui-menu-item
          v-for="(item, i) of items"
          :label="`Item ${i + 1}`"
          :icon="item.icon"
        />
      </ui-menu>
    </component-preview>

    <component-preview>
      <template #title>Menu with icons and badge (responsive)</template>

      <ui-menu class="bg-base-200 rounded-box lg:menu-horizontal w-64">
        <ui-menu-item icon="house" label="Inbox" badge="99+" />
        <ui-menu-item icon="info-circle" label="Updates">
          <template #badge>
            <ui-badge label="NEW" color="warning" />
          </template>
        </ui-menu-item>
        <ui-menu-item label="Stats">
          <template #badge>
            <ui-badge color="info" size="xs" />
          </template>
        </ui-menu-item>
      </ui-menu>
    </component-preview>

    <component-preview>
      <template #title>Menu without padding and border radius</template>

      <ui-menu class="bg-base-200 w-56 p-0 [&_li>*]:rounded-none">
        <ui-menu-item v-for="i in 3" :label="`item ${i}`" />
      </ui-menu>
    </component-preview>

    <component-preview>
      <template #title>Menu with title</template>

      <ui-menu class="bg-base-200 w-56 rounded-box">
        <ui-menu-title label="Title" />
        <ui-menu-item v-for="i in 3" :label="`item ${i}`" />
      </ui-menu>
    </component-preview>

    <component-preview>
      <template #title>Menu with title as parent</template>

      <ui-menu class="bg-base-200 w-56 rounded-box">
        <ui-menu-sub title="Title">
          <ui-menu-item v-for="i in 3" :label="`item ${i}`" />
        </ui-menu-sub>
      </ui-menu>
    </component-preview>

    <component-preview>
      <template #title>submenu</template>

      <ui-menu class="bg-base-200 w-56 rounded-box">
        <ui-menu-item label="Item 1" />

        <ui-menu-item label="Parent" />
        <ui-menu-sub>
          <ui-menu-item v-for="i in 2" :label="`level 2 item ${i}`" />

          <ui-menu-item label="Parent" />
          <ui-menu-sub>
            <ui-menu-item v-for="i in 2" :label="`level 3 item ${i}`" />
          </ui-menu-sub>
        </ui-menu-sub>

        <ui-menu-item label="Item 3" />
      </ui-menu>
    </component-preview>

    <component-preview>
      <template #title>Collapsible submenu</template>

      <ui-menu class="bg-base-200 w-56 rounded-box">
        <ui-menu-item label="Item 1" />

        <ui-menu-sub title="Parent" collapsible open>
          <ui-menu-item v-for="i in 2" :label="`level 2 item ${i}`" />

          <ui-menu-sub title="Parent" collapsible open>
            <ui-menu-item v-for="i in 2" :label="`level 3 item ${i}`" />
          </ui-menu-sub>
        </ui-menu-sub>

        <ui-menu-item label="Item 3" />
      </ui-menu>
    </component-preview>

    <component-preview>
      <template #title>File tree</template>

      <ui-menu class="bg-base-200 rounded-lg max-w-xs w-full">
        <ui-menu-item icon="file-pdf" label="resume.pdf" />

        <ui-menu-sub title="My Files" icon="folder" collapsible open>
          <ui-menu-item
            v-for="i in 2"
            icon="file-earmark"
            :label="`Project-final-${i}.psd`"
          />

          <ui-menu-sub title="Images" icon="folder" collapsible open>
            <ui-menu-item v-for="i in 2" icon="image" :label="`Screenshot${i}.png`" />

            <ui-menu-sub label="Others" icon="folder" collapsible open>
              <ui-menu-item icon="image" label="Screenshot3.png" />
            </ui-menu-sub>
          </ui-menu-sub>
        </ui-menu-sub>

        <ui-menu-item icon="file-pdf" label="reports-final-2.pdf" />
      </ui-menu>
    </component-preview>

    <component-preview>
      <template #title>Menu with active item</template>

      <ui-menu class="bg-base-200 w-56 rounded-box">
        <ui-menu-item v-for="i in 3" :label="`Item ${i}`" :active="i == 2" />
      </ui-menu>
    </component-preview>

    <component-preview>
      <template #title>Horizontal menu</template>

      <ui-menu class="bg-base-200 rounded-box" horizontal>
        <ui-menu-item v-for="i in 3" :label="`Item ${i}`" :active="i == 2" />
      </ui-menu>
    </component-preview>

    <component-preview>
      <template #title>Horizontal submenu</template>

      <ui-menu class="bg-base-200 rounded-box" horizontal>
        <ui-menu-item label="Item 1" />

        <ui-menu-sub title="Parent">
          <ui-menu-item v-for="i in 2" :label="`level 2 item ${i}`" />
        </ui-menu-sub>

        <ui-menu-item label="Item 3" />
      </ui-menu>
    </component-preview>

    <component-preview>
      <template #title>Mega menu with submenu (responsive)</template>

      <ui-menu class="xl:menu-horizontal lg:min-w-max bg-base-200 rounded-box">
        <ui-menu-sub v-for="item of megeMenu" :title="item.title" href="#">
          <template v-if="item.children">
            <ui-menu-sub v-for="child of item.children" :title="child.title" href="#">
              <ui-menu-item v-for="child2 of child.children" :label="child2.title" />
            </ui-menu-sub>
          </template>
          <ui-menu-item v-else :label="item.title" />
        </ui-menu-sub>
      </ui-menu>
    </component-preview>

    <component-preview>
      <template #title>Collapsible with submenu (responsive)</template>

      <ui-menu class="lg:menu-horizontal bg-base-200 rounded-box lg:mb-64">
        <ui-menu-item label="Item 1" />

        <ui-menu-sub title="Parent item" collapsible open>
          <ui-menu-item v-for="i in 2" :label="`level 2 item ${i}`" />

          <ui-menu-sub title="Parent" collapsible open>
            <ui-menu-item v-for="i in 2" :label="`level 3 item ${i}`" />
          </ui-menu-sub>
        </ui-menu-sub>

        <ui-menu-item label="Item 3" />
      </ui-menu>
    </component-preview>
  </div>
</template>
