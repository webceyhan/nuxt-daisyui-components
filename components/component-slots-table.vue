<script setup lang="ts">
interface Props {
  slots: {
    name: string;
    props?: string[];
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
            <span>Slot name</span>
          </th>
          <th class="bg-base-200 rounded-r-box lg:py-3"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="slot of slots">
          <th class="w-3/12 font-normal">
            <span class="whitespace-nowrap font-mono lowercase">
              {{ slot.name }}
            </span>
          </th>
          <td class="w-8/12 min-w-[20rem]">
            {{ slot.description }}

            <div class="space-x-1">
              <span v-for="prop of slot.props" class="kbd kbd-xs">
                {{ prop }}
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
