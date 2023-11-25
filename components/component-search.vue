<script setup lang="ts">
import { PAGES } from "~/constants";

const query = ref("");
const searchInput = ref<HTMLInputElement>(null!);

const results = computed(() => {
  if (!query.value) return [];
  const term = query.value.toLowerCase();

  return PAGES.filter(({ tags }) => tags.includes(term)).slice(0, 5);
});

const onSelect = (label: string) => {
  query.value = label;
  (document.activeElement as HTMLElement)?.blur();
};

onMounted(() => {
  // add key binding to focus search box ctrl+k or command+k on mac
  window.addEventListener("keydown", (e) => {
    if (e.key === "k" && (e.ctrlKey || e.metaKey)) {
      searchInput.value?.focus();
      e.preventDefault();
    }
  });
});
</script>

<template>
  <div class="dropdown">
    <label class="searchbox relative w-full">
      <ui-icon
        name="search"
        class="pointer-events-none absolute z-10 my-1.5 ms-3.5 stroke-current opacity-60 text-base-content"
      />

      <input
        ref="searchInput"
        name="search"
        type="search"
        class="input w-full h-9 pl-10 rounded-[.5rem]"
        placeholder="Search…"
        spellcheck="false"
        autocomplete="off"
        v-model="query"
      />

      <div
        class="pointer-events-none absolute end-10 top-1.5 gap-1 opacity-50 rtl:flex-row-reverse hidden lg:flex"
      >
        <kbd class="kbd kbd-sm">⌘</kbd>
        <kbd class="kbd kbd-sm">K</kbd>
      </div>
    </label>

    <ul
      tabindex="0"
      class="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-full mt-3 lg:mt-10"
      v-if="results.length > 0"
    >
      <li v-for="link of results">
        <NuxtLink :href="link.href" active-class="active" @click="onSelect(link.name)">
          <span class="capitalize">{{ link.name }}</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
