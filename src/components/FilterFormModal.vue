<template>
  <div @click="ToogleVisibility()"><slot /></div>
  <div
    class="flex place-content-center fixed w-full h-full top-0 left-0 bg-gray-500/50"
    v-show="visible"
  >
    <div
      class="flex flex-col place-self-center bg-white w-4/5 md:w-1/2 lg:w-2/6 min-h-min rounded-lg"
    >
      <div class="w-full flex flex-row place-content-end">
        <button class="close-button" @click="ToogleVisibility()">
          <div
            class="rounded-full overflow-hidden w-7 mx-2 mt-2 self-center bg-indigo-300 hover:bg-indigo-500"
          >
            <XMarkIcon class="stroke-indigo-900" />
          </div>
        </button>
      </div>
      <form class="w-full py-5 px-5">
        <div class="flex flex-wrap mb-6">
          <div class="w-full px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Data
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="DD/MM/YYYY"
            />
            <p class="text-red-500 text-xs italic invisible">
              Please fill this field with a valida value.
            </p>
          </div>
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Hora
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="HH:MM"
            />
            <p class="text-red-500 text-xs italic invisible">
              Please fill this field with a valida value.
            </p>
          </div>
        </div>

        <!-- footer buttons -->
        <div class="flex flex-row place-content-end">
          <a
            class="inline-block align-baseline font-bold text-sm text-indigo-500 hover:text-indigo-800"
            href="#"
          >
            Verify Price
          </a>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { XMarkIcon } from "@heroicons/vue/20/solid";

export default defineComponent({
  name: "FilterFormModal",
  props: { coin_id: String },
  components: { XMarkIcon },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    ToogleVisibility() {
      this.visible = !this.visible;
    },
  },
});
</script>
