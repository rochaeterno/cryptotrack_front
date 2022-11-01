import { createStore } from "vuex";

export default createStore({
  state: {
    coins_data: [
      { id: "dacxi", data: {}, price: {} },
      { id: "ethereum", data: {}, price: {} },
      { id: "cosmos", data: {}, price: {} },
      { id: "terra-luna-2", data: {}, price: {} },
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
