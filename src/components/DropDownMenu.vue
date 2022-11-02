<template>
  <main>
    <div>
      <button
        @click="toogleMenu()"
        class="flex hover:bg-gray-400 rounded-full overflow-hidden w-10 lg:inline-flex"
      >
        <ChevronDownIcon />
      </button>
    </div>

    <div v-show="visible" class="flex flex-row-reverse lg:flex-row">
      <div
        class="flex flex-col bg-white w-3/5 md:w-2/5 lg:w-1/5 border-4 border-indigo-300 rounded px-1 pb-2 absolute -mt-2 mr-4 lg:mr-0"
      >
        <FilterFormModal :coin_id="coin_id" @closeDropDown="toogleMenu()">
          <div
            class="flex mt-1 py-2 rounded-lg w-full place-content-start bg-blue-50 stroke-gray-400 text-gray-400 hover:bg-blue-100 hover:text-gray-600 hover:stroke-gray-600"
          >
            <div class="flex-row inline-flex">
              <div class="rounded-full overflow-hidden w-5 mx-2 self-center">
                <CalendarDaysIcon />
              </div>
              <div class="self-center">
                <p class="font-bold text-sm">Filter Price per Date.</p>
              </div>
            </div>
          </div>
        </FilterFormModal>
        <div
          class="flex mt-1 py-2 rounded-lg w-full place-content-start bg-blue-50 stroke-gray-400 text-gray-400 hover:bg-blue-100 hover:text-gray-600 hover:stroke-gray-600"
          @click="clearFilters()"
        >
          <div class="flex-row inline-flex">
            <div class="rounded-full overflow-hidden w-5 mx-2 self-center">
              <XMarkIcon />
            </div>
            <div class="self-center">
              <p class="font-bold text-sm">Remove Filters.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  ChevronDownIcon,
  CalendarDaysIcon,
  XMarkIcon,
} from "@heroicons/vue/20/solid";
import FilterFormModal from "@/components/FilterFormModal.vue";
import { mapMutations, mapActions } from "vuex";

export default defineComponent({
  name: "DropDownMenu",
  props: { coin_id: String },
  components: { ChevronDownIcon, CalendarDaysIcon, XMarkIcon, FilterFormModal },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    ...mapMutations(["removeFilter"]),
    ...mapActions(["catchCoinValue"]),

    toogleMenu() {
      this.visible = !this.visible;
    },
    clearFilters() {
      this.removeFilter(this.coin_id);
      this.catchCoinValue();
      this.toogleMenu();
    },
  },
});
</script>

<style scoped lang="scss"></style>
