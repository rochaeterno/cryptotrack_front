<template>
  <main>
    <div class="table-card">
      <table class="price-table">
        <!-- Table Header -->
        <tr class="table-header">
          <th class="collumn-title"></th>
          <th class="collumn-title">price (BRL)</th>
          <th class="collumn-title">price (USD)</th>
          <th class="collumn-title"></th>
        </tr>

        <!-- Table Body -->
        <tr class="table-row">
          <td>Dacxi (DACXI)</td>
          <td>R$0.00222252</td>
          <td>$0.00222252</td>
          <td></td>
        </tr>

        <tr class="table-row">
          <td>Ethereum (ETH)</td>
          <td>R$0.00222252</td>
          <td>$0.00222252</td>
          <td></td>
        </tr>

        <tr class="table-row">
          <td>Cosmos Hub (ATOM)</td>
          <td>R$0.00222252</td>
          <td>$0.00222252</td>
          <td></td>
        </tr>

        <tr class="table-row">
          <td>Terra (LUNA)</td>
          <td>R$0.00222252</td>
          <td>$0.00222252</td>
          <td></td>
        </tr>
      </table>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PriceTable",
});
</script>

<style scoped lang="scss">
.table-row:nth-child(even) {
  background-color: #f8f8f8;
}

.table-row:nth-child(odd) {
  background-color: white;
}
</style>
