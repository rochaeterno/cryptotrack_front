<template>
  <main class="container">
    <div class="flex flex-col">
      <div class="overflow-x-hidden">
        <div class="py-2 inline-block w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden flex flex-row place-content-center">
            <div
              class="border-4 border-indigo-500/75 rounded-lg w-full lg:w-3/5 overflow-hidden"
            >
              <table class="min-w-full table-auto">
                <thead class="bg-indigo-300 text-gray-6700">
                  <tr class="pl-4">
                    <th scope="col"></th>
                    <th scope="col" class="text-sm font-small py-4 text-left">
                      <p class="hidden md:inline">PRICE(BRL)</p>
                      <p class="inline md:hidden">PRICE</p>
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-small py-4 text-left hidden md:table-cell"
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
                      <p
                        v-if="coin.filter.date"
                        class="absolute text-red-500 text-xs italic -mt-4"
                      >
                        Filtered to day {{ coin.filter?.date }}.
                      </p>
                      {{ coin.data.name }} (<b>{{
                        coin.data.symbol.toUpperCase()
                      }}</b
                      >)
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light pl-2 py-4 whitespace-nowrap text-left"
                    >
                      <div class="hidden md:inline">
                        R${{
                          parseFloat(coin.price.brl).toLocaleString("pt-br", {
                            style: "decimal",
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 6,
                          })
                        }}
                      </div>
                      <div class="flex md:hidden flex-col">
                        <div>
                          <b class="font-bold">BRL:</b> R${{
                            parseFloat(coin.price.brl).toLocaleString("pt-br", {
                              style: "decimal",
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 6,
                            })
                          }}
                        </div>
                        <div>
                          <b class="font-bold">USD:</b> ${{
                            parseFloat(coin.price.usd).toLocaleString("pt-br", {
                              style: "decimal",
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 6,
                            })
                          }}
                        </div>
                      </div>
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light pl-2 py-4 whitespace-nowrap text-left pl-4 hidden md:table-cell"
                    >
                      ${{
                        parseFloat(coin.price.usd).toLocaleString("pt-br", {
                          style: "decimal",
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 6,
                        })
                      }}
                    </td>
                    <td class="pr-4">
                      <DropDownMenu :coin_id="coin.id" />
                    </td>
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
import { mapState } from "vuex";
import DropDownMenu from "@/components/DropDownMenu.vue";

export default defineComponent({
  name: "PriceTable",
  computed: mapState(["coins_data"]),
  components: {
    DropDownMenu,
  },
});
</script>

<style scoped lang="scss"></style>
