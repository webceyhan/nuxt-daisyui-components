<script setup lang="ts">
interface Props {
  props: {
    name: string;
    type: string;
    values?: string[];
    description?: string;
  }[];
}

defineProps<Props>();
</script>

<template>
  <div class="not-prose relative mb-10 mt-6 max-h-[25rem] overflow-x-auto">
    <table class="table-xs md:table-sm table-pin-rows table w-full">
      <thead>
        <tr class="border-b-0">
          <th
            class="bg-base-200 rounded-l-box flex items-center gap-2 normal-case lg:py-3"
          >
            <span>Prop name</span>
          </th>
          <th class="bg-base-200 normal-case lg:py-3">Type</th>
          <th class="bg-base-200 rounded-r-box lg:py-3"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="prop of props">
          <th class="w-3/12 font-normal">
            <span class="whitespace-nowrap font-mono lowercase">
              {{ prop.name }}
            </span>
          </th>
          <td class="w-1/12">
            <div class="tooltip cursor-help" :data-tip="prop.description">
              <span class="badge badge-sm badge-outline w-24 whitespace-nowrap">
                {{ prop.type }}
              </span>
            </div>
          </td>
          <td class="w-8/12 min-w-[20rem]">
            {{ prop.description }}

            <div class="space-x-1">
              <span v-for="value of prop.values" class="kbd kbd-xs">
                {{ value }}
              </span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div
      class="bg-base-100 pointer-events-none sticky bottom-0 -mt-6 flex h-16 [mask-image:linear-gradient(transparent,#000000)]"
    ></div>
  </div>
</template>
