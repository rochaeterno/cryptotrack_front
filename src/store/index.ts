import { createStore } from "vuex";

export default createStore({
  state: {
    coins_data: [
      {
        id: "bitcoin",
        data: {
          name: "Bitcoin",
          symbol: "btc",
          image: {
            thumb:
              "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579",
            small:
              "https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579",
            large:
              "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
          },
        },
        price: {},
        filter: {},
      },
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
        filter: {},
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
        filter: {},
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
        filter: {},
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
        filter: {},
      },
    ],
  },
  getters: {},
  mutations: {
    updateData(state, data) {
      state.coins_data.map((coin) => {
        if (Object.values(coin.filter).length == 0) {
          coin.price = data.payload?.[coin.id];
        }
      });
    },
    filterCoin(state, data) {
      state.coins_data.map((coin) => {
        if (coin.id == data.payload.id) {
          coin.price = {
            brl: data.payload.market_data.current_price.brl,
            usd: data.payload.market_data.current_price.usd,
          };
          coin.filter = data.payload.filter;
        }
      });
    },
    removeFilter(state, id) {
      state.coins_data.map((coin) => {
        if (coin.id == id) {
          coin.filter = {};
        }
      });
    },
  },
  actions: {
    async catchCoinValue({ commit, state }) {
      let suported_coins = String(state.coins_data[0].id);
      for (let index = 1; index < state.coins_data.length; index++) {
        if (state.coins_data.length > 1 && index == 1) {
          suported_coins += "%2C";
        }
        suported_coins += state.coins_data[index].id + "%2C";
      }
      const api_url = `https://api.coingecko.com/api/v3/simple/price?ids=${suported_coins}&vs_currencies=usd%2Cbrl&precision=6`;

      const data = await fetch(api_url).then((response) => {
        return response.json();
      });

      commit("updateData", {
        payload: data,
      });
    },

    async catchCoinByDate({ commit }, filter) {
      try {
        const api_url = `https://api.coingecko.com/api/v3/coins/${filter.id}/history?date=${filter.date}&localization=false`;
        const data = await fetch(api_url).then((response) => {
          return response.json();
        });

        data.filter = { date: filter.date };
        commit("filterCoin", {
          payload: data,
        });
      } catch (error) {
        return error;
      }
    },
  },
  modules: {},
});
