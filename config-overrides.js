// eslint-disable-next-line no-undef
module.exports = function override(config)  {
  config.module.rules.push(
    {
      enforce: 'pre',
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
      options: {
        failOnError: true,
      },
    },
  );
  return config;
};