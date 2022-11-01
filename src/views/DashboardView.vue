<template>
  <main>
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
    },
  },
});
</script>

<style scoped lang="scss"></style>
