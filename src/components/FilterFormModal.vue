<template>
  <div @click="ToogleVisibility()"><slot /></div>
  <div
    class="flex place-content-center fixed w-full h-full top-0 left-0 bg-gray-500/50"
    v-show="visible"
  >
    <div
      class="flex flex-col place-self-center bg-white w-1/2 h-1/2 rounded-lg"
    >
      tewste
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FilterFormModal",
  props: { coin_id: String },
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
