<script setup lang="ts">
const { activeGroupName, PAGES_BY_GROUP } = useMenu();
</script>

<template>
  <div class="px-4 py-0">
    <details
      v-for="group of PAGES_BY_GROUP"
      class="collapse collapse-arrow"
      :open="group.name == activeGroupName"
    >
      <!-- title -->
      <summary class="collapse-title min-h-0 py-2">
        <div class="flex items-center">
          <ui-icon :name="group.icon" />
          <span class="menu-title">{{ group.name }}</span>
        </div>
      </summary>

      <!-- links -->
      <div class="collapse-content">
        <ul class="menu menu-md py-0 pr-0">
          <li>
            <ul class="m-0">
              <li v-for="link of group.items">
                <NuxtLink :href="link.href" active-class="active">
                  <span>{{ link.name }}</span>
                  <span v-if="link.badge" class="badge badge-sm font-mono">
                    {{ link.badge }}
                  </span>
                </NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </details>
  </div>
</template>
