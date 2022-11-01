<template>
  <main>
    <PriceTable />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PriceTable from "@/components/PriceTable.vue";

export default defineComponent({
  name: "DashboardView",
  components: { PriceTable },
});
</script>

<style scoped lang="scss"></style>
