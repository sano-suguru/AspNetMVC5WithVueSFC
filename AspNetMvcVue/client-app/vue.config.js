module.exports = {
  outputDir: "../Content/Cart/List",
  publicPath: "/Content/Cart/List/",
  filenameHashing: false,
  configureWebpack: {
    output: {
      devtoolModuleFilenameTemplate: "[absolute-resource-path]",
      devtoolFallbackModuleFilenameTemplate: "[absolute-resource-path]?[hash]"
    }
  }
};
