<script setup lang="ts">
const sizes: any[] = ["xs", "sm", "md", "lg"];

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
        <ui-menu-item v-for="i in 3">
          <a>Item {{ i }}</a>
        </ui-menu-item>
      </ui-menu>
    </component-preview>

    <component-preview>
      <template #title>
        Responsive: vertical on small screen, horizontal on large screen
      </template>

      <ui-menu class="bg-base-200 rounded-box lg:menu-horizontal">
        <ui-menu-item v-for="i in 3">
          <a>Item {{ i }}</a>
        </ui-menu-item>
      </ui-menu>
    </component-preview>

    <component-preview>
      <template #title>Menu with icon only</template>

      <ui-menu class="bg-base-200 rounded-box">
        <ui-menu-item v-for="item of items">
          <a>
            <ui-icon :name="item.icon" />
          </a>
        </ui-menu-item>
      </ui-menu>
    </component-preview>

    <component-preview>
      <template #title>Menu with icon only (horizontal)</template>

      <ui-menu class="bg-base-200 rounded-box" horizontal>
        <ui-menu-item v-for="item of items">
          <a>
            <ui-icon :name="item.icon" />
          </a>
        </ui-menu-item>
      </ui-menu>
    </component-preview>

    <component-preview>
      <template #title>Menu with icon only with tooltip</template>

      <ui-menu class="bg-base-200 rounded-box">
        <ui-menu-item v-for="item of items">
          <a class="tooltip tooltip-right" :data-tip="item.label">
            <ui-icon :name="item.icon" />
          </a>
        </ui-menu-item>
      </ui-menu>
    </component-preview>

    <component-preview>
      <template #title>Menu with icon only (horizontal) with tooltip</template>

      <ui-menu class="bg-base-200 rounded-box mt-6" horizontal>
        <ui-menu-item v-for="item of items">
          <a class="tooltip" :data-tip="item.label">
            <ui-icon :name="item.icon" />
          </a>
        </ui-menu-item>
      </ui-menu>
    </component-preview>

    <component-preview>
      <template #title>Menu sizes</template>

      <div class="flex flex-col gap-4">
        <ui-menu v-for="size of sizes" class="bg-base-200 w-56 rounded-box" :size="size">
          <ui-menu-item v-for="i in 2">
            <a>{{ size }} Item {{ i }}</a>
          </ui-menu-item>
        </ui-menu>
      </div>
    </component-preview>

    <component-preview>
      <template #title>Menu with disabled items</template>

      <ui-menu class="bg-base-200 w-56 rounded-box">
        <ui-menu-item v-for="i in 3" :disabled="i > 1">
          <a> {{ i > 1 ? "disabled" : "enabled" }} item</a>
        </ui-menu-item>
      </ui-menu>
    </component-preview>

    <component-preview>
      <template #title>Menu with icons</template>

      <ui-menu class="bg-base-200 w-56 rounded-box">
        <ui-menu-item v-for="(item, i) of items">
          <a>
            <ui-icon :name="item.icon" />
            Item {{ i + 1 }}
          </a>
        </ui-menu-item>
      </ui-menu>
    </component-preview>

    <component-preview>
      <template #title>Menu with icons and badge</template>

      <ui-menu class="bg-base-200 rounded-box">
        <ui-menu-item>
          <a>
            <ui-icon name="house" />
            Inbox
            <ui-badge>99+</ui-badge>
          </a>
          <a>
            <ui-icon name="info-circle" />
            Updates
            <ui-badge color="warning">NEW</ui-badge>
          </a>
          <a>
            Stats
            <ui-badge color="info" size="xs" />
          </a>
        </ui-menu-item>
      </ui-menu>
    </component-preview>

    <component-preview>
      <template #title>Menu without padding and border radius</template>

      <ui-menu class="bg-base-200 w-56 p-0 [&_li>*]:rounded-none">
        <ui-menu-item v-for="i in 3">
          <a> Item {{ i }}</a>
        </ui-menu-item>
      </ui-menu>
    </component-preview>

    <component-preview>
      <template #title>Menu with title</template>

      <ui-menu class="bg-base-200 w-56 rounded-box">
        <ui-menu-item title="Title" />
        <ui-menu-item v-for="i in 3">
          <a> Item {{ i }}</a>
        </ui-menu-item>
      </ui-menu>
    </component-preview>

    <component-preview>
      <template #title>Menu with title as parent</template>

      <ui-menu class="bg-base-200 w-56 rounded-box">
        <ui-menu-item title="Title">
          <ul>
            <ui-menu-item v-for="i in 3">
              <a> Item {{ i }}</a>
            </ui-menu-item>
          </ul>
        </ui-menu-item>
      </ui-menu>
    </component-preview>

    <component-preview>
      <template #title>submenu</template>

      <ui-menu class="bg-base-200 w-56 rounded-box">
        <ui-menu-item>
          <a>Item 1</a>
        </ui-menu-item>

        <ui-menu-item>
          <a>Parent</a>

          <ul>
            <ui-menu-item v-for="i in 2">
              <a> level 2 item {{ i }}</a>
            </ui-menu-item>

            <ui-menu-item>
              <a>Parent</a>
              <ul>
                <ui-menu-item v-for="i in 2">
                  <a> level 3 item {{ i }}</a>
                </ui-menu-item>
              </ul>
            </ui-menu-item>
          </ul>
        </ui-menu-item>

        <ui-menu-item>
          <a>Item 3</a>
        </ui-menu-item>
      </ui-menu>
    </component-preview>

    <component-preview>
      <template #title>Collapsible submenu</template>

      <ui-menu class="bg-base-200 w-56 rounded-box">
        <ui-menu-item>
          <a>Item 1</a>
        </ui-menu-item>

        <ui-menu-item title="Parent" collapsible open>
          <ul>
            <ui-menu-item v-for="i in 2">
              <a> level 2 item {{ i }}</a>
            </ui-menu-item>

            <ui-menu-item title="Parent" collapsible open>
              <ul>
                <ui-menu-item v-for="i in 2">
                  <a> level 3 item {{ i }}</a>
                </ui-menu-item>
              </ul>
            </ui-menu-item>
          </ul>
        </ui-menu-item>

        <ui-menu-item>
          <a>Item 3</a>
        </ui-menu-item>
      </ui-menu>
    </component-preview>

    <component-preview>
      <template #title>File tree</template>

      <ui-menu class="bg-base-200 rounded-lg max-w-xs w-full">
        <ui-menu-item>
          <a>
            <ui-icon name="file-pdf" />
            resume.pdf
          </a>
        </ui-menu-item>

        <ui-menu-item collapsible open>
          <template #title>
            <ui-icon name="folder" />
            My Files
          </template>

          <ul>
            <ui-menu-item v-for="i in 2">
              <a>
                <ui-icon name="file-earmark" />
                Project-final-{{ i }}.psd
              </a>
            </ui-menu-item>

            <ui-menu-item collapsible open>
              <template #title>
                <ui-icon name="folder" />
                Images
              </template>

              <ul>
                <ui-menu-item v-for="i in 2">
                  <a>
                    <ui-icon name="image" />
                    Screenshot{{ i }}.png
                  </a>
                </ui-menu-item>

                <ui-menu-item collapsible open>
                  <template #title>
                    <ui-icon name="folder" />
                    Others
                  </template>

                  <ul>
                    <ui-menu-item>
                      <a>
                        <ui-icon name="image" />
                        Screenshot3.png
                      </a>
                    </ui-menu-item>
                  </ul>
                </ui-menu-item>
              </ul>
            </ui-menu-item>
          </ul>
        </ui-menu-item>

        <ui-menu-item>
          <a>
            <ui-icon name="file-pdf" />
            reports-final-2.pdf
          </a>
        </ui-menu-item>
      </ui-menu>
    </component-preview>

    <component-preview>
      <template #title>Menu with active item</template>

      <ui-menu class="bg-base-200 w-56 rounded-box">
        <ui-menu-item v-for="i in 3">
          <a :class="{ active: i == 2 }">Item {{ i }}</a>
        </ui-menu-item>
      </ui-menu>
    </component-preview>

    <component-preview>
      <template #title>Horizontal menu</template>

      <ui-menu class="bg-base-200 rounded-box" horizontal>
        <ui-menu-item v-for="i in 3">
          <a>Item {{ i }}</a>
        </ui-menu-item>
      </ui-menu>
    </component-preview>

    <component-preview>
      <template #title>Horizontal submenu</template>

      <ui-menu class="bg-base-200 rounded-box" horizontal>
        <ui-menu-item>
          <a>Item 1</a>
        </ui-menu-item>

        <ui-menu-item>
          <a>Parent</a>
          <ul>
            <ui-menu-item v-for="i in 2">
              <a>level 2 item {{ i }}</a>
            </ui-menu-item>
          </ul>
        </ui-menu-item>

        <ui-menu-item>
          <a>Item 3</a>
        </ui-menu-item>
      </ui-menu>
    </component-preview>

    <component-preview>
      <template #title>Mega menu with submenu (responsive)</template>

      <ui-menu class="xl:menu-horizontal lg:min-w-max bg-base-200 rounded-box">
        <ui-menu-item v-for="item of megeMenu">
          <a>{{ item.title }}</a>

          <ul>
            <ui-menu-item v-for="child of item.children">
              <a>{{ child.title }}</a>

              <ul>
                <ui-menu-item v-for="child2 of child.children">
                  <a>{{ child2.title }}</a>
                </ui-menu-item>
              </ul>
            </ui-menu-item>
          </ul>
        </ui-menu-item>
      </ui-menu>
    </component-preview>

    <component-preview>
      <template #title>Collapsible with submenu (responsive)</template>

      <ui-menu class="lg:menu-horizontal bg-base-200 rounded-box lg:mb-64">
        <ui-menu-item>
          <a>Item 1</a>
        </ui-menu-item>

        <ui-menu-item title="Parent item" collapsible open>
          <ul>
            <ui-menu-item><a>level 2 item 1</a></ui-menu-item>
            <ui-menu-item><a>level 2 item 2</a></ui-menu-item>
            <ui-menu-item title="Parent" collapsible open>
              <ul>
                <li><a>item 1</a></li>
                <li><a>item 2</a></li>
              </ul>
            </ui-menu-item>
          </ul>
        </ui-menu-item>

        <ui-menu-item>
          <a>Item 3</a>
        </ui-menu-item>
      </ui-menu>
    </component-preview>
  </div>
</template>
