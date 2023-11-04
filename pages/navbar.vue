<script setup lang="ts">
import { ALIGNMENTS } from "~/constants";

const slots = [{ name: "default", description: "Content of navbar" }];

const sectionProps = [
  {
    name: "alignment",
    type: "string",
    values: ALIGNMENTS,
  },
];

const sectionSlots = [{ name: "default", description: "Content of navbar section" }];

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////

const colors = [
  "bg-neutral text-neutral-content",
  "bg-base-300",
  "bg-primary text-primary-content",
];
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Navbar</h1>

    <p>Navbar is used to show a navigation bar on the top of the page.</p>

    <!-- <component-props-table :props="props" /> -->
    <component-slots-table :slots="slots" />

    <h3 class="text-lg font-bold">Navbar section</h3>
    <component-props-table :props="sectionProps" />
    <component-slots-table :slots="sectionSlots" />

    <component-preview>
      <template #title>Navbar with title only</template>

      <ui-navbar class="bg-base-100 shadow-xl rounded-box">
        <ui-button color="ghost" class="normal-case text-xl">daisyUI</ui-button>
      </ui-navbar>
    </component-preview>

    <component-preview>
      <template #title>Navbar with title and icon</template>

      <ui-navbar class="bg-base-100 shadow-xl rounded-box">
        <div class="flex-1">
          <ui-button color="ghost" class="normal-case text-xl">daisyUI</ui-button>
        </div>

        <div class="flex-none">
          <ui-button color="ghost" square>
            <ui-icon name="three-dots" />
          </ui-button>
        </div>
      </ui-navbar>
    </component-preview>

    <component-preview>
      <template #title>Navbar with icon at start and end</template>

      <ui-navbar class="bg-base-100 shadow-xl rounded-box">
        <div class="flex-none">
          <ui-button color="ghost" square>
            <ui-icon name="list" />
          </ui-button>
        </div>

        <div class="flex-1">
          <ui-button color="ghost" class="normal-case text-xl">daisyUI</ui-button>
        </div>

        <div class="flex-none">
          <ui-button color="ghost" square>
            <ui-icon name="three-dots" />
          </ui-button>
        </div>
      </ui-navbar>
    </component-preview>

    <component-preview>
      <template #title>Navbar with menu and submenu</template>

      <ui-navbar class="bg-base-100 mb-32 shadow-xl rounded-box">
        <div class="flex-1">
          <ui-button color="ghost" class="normal-case text-xl">daisyUI</ui-button>
        </div>

        <div class="flex-none">
          <ui-menu class="!bg-transparent px-1" horizontal>
            <ui-menu-item label="Link" />

            <ui-menu-sub title="Parent" collapsible>
              <ui-menu-item v-for="i in 2" :label="`Link ${i}`" />
            </ui-menu-sub>
          </ui-menu>
        </div>
      </ui-navbar>
    </component-preview>

    <component-preview>
      <template #title>Navbar with search input and dropdown</template>

      <ui-navbar class="bg-base-100 mb-32 shadow-xl rounded-box">
        <div class="flex-1">
          <ui-button color="ghost" class="normal-case text-xl">daisyUI</ui-button>
        </div>

        <div class="flex-none gap-2">
          <div class="form-control">
            <input
              type="text"
              placeholder="Search"
              class="input input-bordered w-24 md:w-auto"
            />
          </div>

          <ui-dropdown align-to-end>
            <template #trigger>
              <ui-button tabindex="0" color="ghost" shape="circle">
                <ui-avatar>
                  <div class="w-10 rounded-full">
                    <img src="/img/avatar.jpg" alt="avatar" />
                  </div>
                </ui-avatar>
              </ui-button>
            </template>

            <ui-menu-item label="Profile" badge="New" />
            <ui-menu-item label="Settings" />
            <ui-menu-item label="Logout" />
          </ui-dropdown>
        </div>
      </ui-navbar>
    </component-preview>

    <component-preview>
      <template #title>Navbar with icon, indicator and dropdown</template>

      <ui-navbar class="bg-base-100 mb-32 shadow-xl rounded-box">
        <div class="flex-1">
          <ui-button color="ghost" class="normal-case text-xl">daisyUI</ui-button>
        </div>

        <div class="flex-none gap-2">
          <ui-dropdown align-to-end>
            <template #trigger>
              <label tabindex="0" class="btn btn-ghost btn-circle">
                <ui-indicator>
                  <template #item>
                    <ui-badge size="sm">8</ui-badge>
                  </template>
                  <ui-icon name="cart" />
                </ui-indicator>
              </label>
            </template>

            <ui-card tabindex="0" compact>
              <span class="font-bold text-lg">8 Items</span>
              <span class="text-info">Subtotal: $999</span>

              <template #actions>
                <ui-button color="primary" block>View cart</ui-button>
              </template>
            </ui-card>
          </ui-dropdown>

          <ui-dropdown align-to-end>
            <template #trigger>
              <ui-button tabindex="0" color="ghost" shape="circle">
                <ui-avatar>
                  <div class="w-10 rounded-full">
                    <img src="/img/avatar.jpg" alt="avatar" />
                  </div>
                </ui-avatar>
              </ui-button>
            </template>

            <ui-menu-item label="Profile" badge="New" />
            <ui-menu-item label="Settings" />
            <ui-menu-item label="Logout" />
          </ui-dropdown>
        </div>
      </ui-navbar>
    </component-preview>

    <component-preview>
      <template #title>Navbar with dropdown, center logo and icon</template>

      <ui-navbar class="bg-base-100 mb-40 shadow-xl rounded-box">
        <ui-navbar-section>
          <ui-dropdown>
            <template #trigger>
              <ui-button tabindex="0" color="ghost" icon="list" shape="circle" />
            </template>

            <ui-menu-item label="Homepage" />
            <ui-menu-item label="Portfolio" />
            <ui-menu-item label="About" />
          </ui-dropdown>
        </ui-navbar-section>

        <ui-navbar-section alignment="center">
          <ui-button label="daisyUI" color="ghost" class="normal-case text-xl" />
        </ui-navbar-section>

        <ui-navbar-section alignment="end">
          <ui-button color="ghost" icon="search" circle />

          <ui-button color="ghost" circle>
            <ui-indicator>
              <template #item>
                <ui-badge color="primary" size="xs" />
              </template>
              <ui-icon name="bell" />
            </ui-indicator>
          </ui-button>
        </ui-navbar-section>
      </ui-navbar>
    </component-preview>

    <component-preview>
      <template #title>
        responsive (dropdown menu on small screen, center menu on large screen)
      </template>
      <template #description>Resize screen to see changes</template>

      <ui-navbar class="bg-base-100 mb-48 shadow-xl rounded-box">
        <ui-navbar-section>
          <ui-dropdown>
            <template #trigger>
              <ui-button
                tabindex="0"
                color="ghost"
                icon="list"
                shape="circle"
                class="lg:hidden"
              />
            </template>

            <ui-menu-item label="Item 1" />
            <ui-menu-sub title="Parent">
              <ui-menu-item label="Submenu 1" />
              <ui-menu-item label="Submenu 2" />
            </ui-menu-sub>
            <ui-menu-item label="Item 3" />
          </ui-dropdown>
          <ui-button color="ghost" class="normal-case text-xl">daisyUI</ui-button>
        </ui-navbar-section>

        <ui-navbar-section alignment="center" class="hidden lg:flex">
          <ui-menu tabindex="0" class="!bg-transparent px-1" horizontal>
            <ui-menu-item label="Item 1" />
            <ui-menu-sub title="Parent" collapsible>
              <ui-menu-item label="Submenu 1" class="w-52" />
              <ui-menu-item label="Submenu 2" class="w-52" />
            </ui-menu-sub>
            <ui-menu-item label="Item 3" />
          </ui-menu>
        </ui-navbar-section>

        <ui-navbar-section alignment="end">
          <ui-button>Button</ui-button>
        </ui-navbar-section>
      </ui-navbar>
    </component-preview>

    <component-preview>
      <template #title>Navbar with colors</template>

      <ui-navbar v-for="color of colors" :class="[color, 'rounded-box']">
        <ui-button color="ghost" class="normal-case text-xl">daisyUI</ui-button>
      </ui-navbar>
    </component-preview>
  </div>
</template>
