const CracoLessPlugin = require('craco-less')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#E14A48',
              '@border-radius-base': '4px',
              '@tabs-card-head-background': '#E14A48',
              '@tabs-active-color': '#fff',
              '@tabs-card-active-color': '#fff',
              '@tabs-ink-bar-color': '#E14A48',
              '@tabs-ink-bar-color': '#E14A48',
              '@tabs-highlight-color': '#E14A48',
              '@tabs-card-tab-active-border-top': '2px solid #E14A48',
              '@input-bg': '#e1dfde',
              '@input-placeholder-color': '#8e8b8a',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
