const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/advanced-pet/" : "",
  chainWebpack: (config) => {
    config.module
      .rule("svg")
      .test("/.svg$/")
      .include.add(() => {
        return [path.resolve(__dirname, "./assets/svgs")];
      })
      .end()
      .use("html-loader")
      .loader("html-loader");
  },
  // chainWebpack: (config) => {
  //   config.module.rule("images").set("parser", {
  //     dataUrlCondition: {
  //       maxSize: -1, // 4KiB
  //     },
  //   });
  // },
});
