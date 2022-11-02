<template>
  <main>
    <div>
      <button
        @click="openMenu(coin_id)"
        class="flex hover:bg-gray-400 rounded-full overflow-hidden w-10 lg:inline-flex"
      >
        <ChevronDownIcon />
      </button>
    </div>

    <div
      v-show="visible"
      class="bg-white w-1/5 border-4 border-indigo-300 rounded px-1 pb-2 absolute -mt-2 ml-4"
    >
      <FilterFormModal :coin_id="coin_id">
        <div
          class="flex mt-1 py-2 rounded-lg w-full place-content-start bg-blue-50 stroke-gray-400 text-gray-400 hover:bg-blue-100 hover:text-gray-600 hover:stroke-gray-600"
        >
          <div class="flex-row inline-flex">
            <div class="rounded-full overflow-hidden w-5 mx-2 self-center">
              <CalendarDaysIcon />
            </div>
            <div class="self-center">
              <p class="font-bold text-sm">Filtrar por data e hora.</p>
            </div>
          </div>
        </div>
      </FilterFormModal>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ChevronDownIcon, CalendarDaysIcon } from "@heroicons/vue/20/solid";
import FilterFormModal from "@/components/FilterFormModal.vue";

export default defineComponent({
  name: "DropDownMenu",
  props: { coin_id: String },
  components: { ChevronDownIcon, CalendarDaysIcon, FilterFormModal },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    openMenu(coin_id: number) {
      this.visible = !this.visible;
      // console.log(coin_id);
    },
  },
});
</script>

<style scoped lang="scss"></style>
