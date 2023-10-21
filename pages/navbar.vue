<script setup lang="ts">
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
          <ui-menu class="px-1" horizontal>
            <ui-menu-item>
              <a>Link</a>
            </ui-menu-item>

            <ui-menu-item title="Parent" collapsible>
              <ul class="p-2 bg-base-100">
                <ui-menu-item v-for="i in 2">
                  <a>Link {{ i }}</a>
                </ui-menu-item>
              </ul>
            </ui-menu-item>
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
              <label tabindex="0" class="btn btn-ghost btn-circle">
                <ui-avatar>
                  <div class="w-10 rounded-full">
                    <img src="/img/avatar.jpg" alt="avatar" />
                  </div>
                </ui-avatar>
              </label>
            </template>

            <li>
              <a class="justify-between">
                Profile
                <ui-badge color="primary">New</ui-badge>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
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
              <label tabindex="0" class="btn btn-ghost btn-circle">
                <ui-avatar>
                  <div class="w-10 rounded-full">
                    <img src="/img/avatar.jpg" alt="avatar" />
                  </div>
                </ui-avatar>
              </label>
            </template>

            <li>
              <a class="justify-between">
                Profile
                <ui-badge color="primary">New</ui-badge>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
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
              <label tabindex="0" class="btn btn-ghost btn-circle">
                <ui-icon name="list" />
              </label>
            </template>

            <li><a>Homepage</a></li>
            <li><a>Portfolio</a></li>
            <li><a>About</a></li>
          </ui-dropdown>
        </ui-navbar-section>

        <ui-navbar-section alignment="center">
          <ui-button color="ghost" class="normal-case text-xl">daisyUI</ui-button>
        </ui-navbar-section>

        <ui-navbar-section alignment="end">
          <ui-button color="ghost" circle>
            <ui-icon name="search" />
          </ui-button>

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
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <ui-icon name="list" />
            </label>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul class="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <ui-button color="ghost" class="normal-case text-xl">daisyUI</ui-button>
        </ui-navbar-section>

        <ui-navbar-section alignment="center" class="hidden lg:flex">
          <ui-menu class="px-1" horizontal>
            <ui-menu-item><a>Item 1</a></ui-menu-item>
            <ui-menu-item tabindex="0" title="Parent" collapsible>
              <ul class="p-2">
                <ui-menu-item><a>Submenu 1</a></ui-menu-item>
                <ui-menu-item><a>Submenu 2</a></ui-menu-item>
              </ul>
            </ui-menu-item>
            <li><a>Item 3</a></li>
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
