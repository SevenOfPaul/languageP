import nextra from 'nextra'
import withRspack from "next-rspack";
import  webpack  from 'webpack'
import dayjs from 'dayjs'
const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx'
})

export default withRspack(
  withNextra({
    // experimental: {
    //   turbo: {},
    // },
    webpack: (config, { isServer }) => {
      config.experiments = {
        ...config.experiments,
        asyncWebAssembly: true,
      };

      config.module.rules.push({
        test: /\.wasm$/,
        type: "webassembly/async",
      });
      config.plugins = [
        ...config.plugins,
        new webpack.DefinePlugin({
          _time_: JSON.stringify(dayjs().format("YYYY-MM-DD")),
        }),
      ];
      return config;
    },
  })
);