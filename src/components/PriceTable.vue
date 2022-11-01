<template>
  <main class="container">
    <div class="flex flex-col">
      <div class="overflow-x-auto">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden flex flex-row place-content-center">
            <div
              class="border-4 border-indigo-500/75 rounded-lg sm:w-full lg:w-3/5"
            >
              <table class="min-w-full table-auto">
                <thead class="bg-indigo-300">
                  <tr class="pl-4">
                    <th scope="col"></th>
                    <th
                      scope="col"
                      class="text-sm font-small text-gray-900 py-4 text-left"
                    >
                      PRICE (BRL)
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-small text-gray-900 py-4 text-left"
                    >
                      PRICE (USD)
                    </th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <!-- Table Body -->
                  <tr
                    class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 text-left"
                    v-for="coin in coins_data"
                    :key="coin.id"
                  >
                    <td
                      class="whitespace-nowrap text-sm font-medium text-gray-900 text-left pl-4"
                    >
                      {{ coin.data.name }} (<b>{{
                        coin.data.symbol.toUpperCase()
                      }}</b
                      >)
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light pl-2 py-4 whitespace-nowrap text-left"
                    >
                      R${{
                        parseFloat(coin.price.brl).toLocaleString("pt-br", {
                          style: "decimal",
                          minimumFractionDigits: 2,
                        })
                      }}
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light pl-2 py-4 whitespace-nowrap text-left pl-4"
                    >
                      ${{
                        parseFloat(coin.price.usd).toLocaleString("pt-br", {
                          style: "decimal",
                          minimumFractionDigits: 2,
                        })
                      }}
                    </td>
                    <td class="pr-4"><ChevronDownIcon /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import { mapState } from "vuex";

export default defineComponent({
  name: "PriceTable",
  components: { ChevronDownIcon },

  computed: mapState(["coins_data"]),
});
</script>

<style scoped lang="scss"></style>
