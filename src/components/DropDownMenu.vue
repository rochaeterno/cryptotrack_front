<template>
  <div>
    <button
      @click="openMenu(coin_id)"
      class="flex hover:bg-gray-400 rounded-full overflow-hidden w-10 lg:inline-flex"
    >
      <ChevronDownIcon />
    </button>
  </div>

  <div
    v-show="usersToggle"
    class="bg-white w-1/5 border-4 border-indigo-300 rounded px-1 pb-2 absolute -mt-2 ml-4"
  >
    <button
      class="flex mt-1 py-2 rounded-lg w-full bg-blue-50 hover:bg-blue-100 place-content-start"
    >
      <div class="flex-row inline-flex">
        <div class="rounded-full overflow-hidden w-5 mx-2 self-center">
          <CalendarDaysIcon class="stroke-gray-400" />
        </div>
        <div class="self-center">
          <p class="text-gray-400 font-bold text-sm">
            Filtrar por data e hora.
          </p>
        </div>
      </div>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ChevronDownIcon, CalendarDaysIcon } from "@heroicons/vue/20/solid";

export default defineComponent({
  name: "DropDownMenu",
  props: { coin_id: String },
  components: { ChevronDownIcon, CalendarDaysIcon },
  data() {
    return {
      usersToggle: false,
    };
  },
  methods: {
    openMenu(coin_id: number) {
      this.usersToggle = !this.usersToggle;
      // console.log(coin_id);
    },
  },
});
</script>

<style scoped lang="scss"></style>
