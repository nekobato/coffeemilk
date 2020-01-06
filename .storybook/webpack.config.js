module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.ts$/,
    use: [
      {
        loader: "ts-loader"
      }
    ]
  });

  config.module.rules.push({
    test: /\.(post)?css$/,
    use: [
      {
        loader: "style-loader"
      },
      {
        loader: "css-loader",
        options: {
          modules: true
        }
      },
      {
        loader: "postcss-loader"
      }
    ]
  });

  config.resolve.extensions.push(".ts", ".postcss");

  return config;
};
