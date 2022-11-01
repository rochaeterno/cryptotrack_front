import { createStore } from "vuex";

export default createStore({
  state: {
    coins_data: [
      {
        id: "dacxi",
        data: {
          name: "Dacxi",
          symbol: "dacxi",
          image: {
            thumb:
              "https://assets.coingecko.com/coins/images/4466/thumb/dacxi.png?1639042471",
            small:
              "https://assets.coingecko.com/coins/images/4466/small/dacxi.png?1639042471",
            large:
              "https://assets.coingecko.com/coins/images/4466/large/dacxi.png?1639042471",
          },
        },
        price: {},
      },
      {
        id: "ethereum",
        data: {
          name: "Ethereum",
          symbol: "eth",
          image: {
            thumb:
              "https://assets.coingecko.com/coins/images/279/thumb/ethereum.png?1595348880",
            small:
              "https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880",
            large:
              "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
          },
        },
        price: {},
      },
      {
        id: "cosmos",
        data: {
          name: "Cosmos Hub",
          symbol: "atom",
          image: {
            thumb:
              "https://assets.coingecko.com/coins/images/1481/thumb/cosmos_hub.png?1555657960",
            small:
              "https://assets.coingecko.com/coins/images/1481/small/cosmos_hub.png?1555657960",
            large:
              "https://assets.coingecko.com/coins/images/1481/large/cosmos_hub.png?1555657960",
          },
        },
        price: {},
      },
      {
        id: "terra-luna-2",
        data: {
          name: "Terra",
          symbol: "luna",
          image: {
            thumb:
              "https://assets.coingecko.com/coins/images/25767/thumb/01_Luna_color.png?1653556122",
            small:
              "https://assets.coingecko.com/coins/images/25767/small/01_Luna_color.png?1653556122",
            large:
              "https://assets.coingecko.com/coins/images/25767/large/01_Luna_color.png?1653556122",
          },
        },
        price: {},
      },
    ],
  },
  getters: {},
  mutations: {
    updateData(state, data) {
      state.coins_data.map((coin) => {
        coin.price = data.payload?.[coin.id];
      });
    },
  },
  actions: {
    async catchCoinValue({ commit }) {
      const api_url =
        "https://api.coingecko.com/api/v3/simple/price?ids=dacxi%2Cethereum%2Ccosmos%2Cterra-luna-2&vs_currencies=usd%2Cbrl";

      const data = await fetch(api_url).then((response) => {
        return response.json();
      });

      commit("updateData", {
        payload: data,
      });
    },
  },
  modules: {},
});
