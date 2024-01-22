<script setup lang="ts">
import { DESCRIPTIONS } from "./_data";

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Drawer</h1>

    <p>
      Drawer is a grid layout that can show/hide a sidebar on the left or right side of
      the page.
    </p>

    <component-description v-for="desc of DESCRIPTIONS" v-bind="desc" />

    <component-preview>
      <template #title>Drawer </template>

      <ui-drawer class="h-56" aside-class="absolute h-full">
        <template #aside>
          <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
          </ul>
        </template>
      </ui-drawer>
    </component-preview>

    <component-preview>
      <template #title>Responsive </template>

      <ui-drawer id="drawer-2" class="h-56 lg:drawer-open" aside-class="absolute h-full">
        <label for="drawer-2" class="btn lg:hidden">Open</label>

        <template #aside>
          <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
          </ul>
        </template>
      </ui-drawer>
    </component-preview>

    <component-preview>
      <template #title>Navbar menu for desktop + sidebar drawer for mobile </template>
      <template #description> Change screen size to show/hide menu </template>

      <ui-drawer id="drawer-3" class="h-56" aside-class="absolute h-full">
        <!-- Navbar -->
        <div class="w-full navbar bg-base-300">
          <div class="flex-none">
            <label for="drawer-3" class="btn btn-square btn-ghost">
              <svg-icon name="menu-toggle" class="w-6 h-6" />
            </label>
          </div>
          <div class="flex-1 px-2 mx-2">Navbar Title</div>
          <div class="flex-none hidden lg:block">
            <ul class="menu menu-horizontal">
              <!-- Navbar menu content here -->
              <li><a>Navbar Item 1</a></li>
              <li><a>Navbar Item 2</a></li>
            </ul>
          </div>
        </div>

        <!-- Page content here -->
        <div class="flex justify-center items-center flex-grow py-10">Content</div>

        <template #aside>
          <ul class="menu p-4 w-80 min-h-full bg-base-200">
            <!-- Sidebar content here -->
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
          </ul>
        </template>
      </ui-drawer>
    </component-preview>

    <component-preview>
      <template #title>Drawer that opens from right side of page </template>

      <ui-drawer
        id="drawer-4"
        class="h-56"
        aside-class="absolute h-full ml-[-54rem] w-[stretch]"
        align-end
      >
        <label for="drawer-4" class="btn">Open</label>

        <template #aside>
          <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
          </ul>
        </template>
      </ui-drawer>
    </component-preview>
  </div>
</template>
