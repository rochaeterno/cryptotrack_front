<template>
  <main class="flex place-content-center">
    <PriceTable />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PriceTable from "@/components/PriceTable.vue";
import { mapActions } from "vuex";

export default defineComponent({
  name: "DashboardView",
  components: { PriceTable },
  mounted() {
    this.updateCoinsValues();
  },
  methods: {
    ...mapActions(["catchCoinValue"]),

    updateCoinsValues() {
      this.catchCoinValue();
      setTimeout(() => {
        this.updateCoinsValues();
      }, 60000);
    },
  },
});
</script>

<style scoped lang="scss"></style>
