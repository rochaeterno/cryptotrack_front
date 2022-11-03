const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});
// module.exports = {
//   publicPath:
//     process.env.NODE_ENV === "production" ? "/cryptotrack_front/" : "/",
// };
module.exports = {
  publicPath: "/cryptotrack/",
};
