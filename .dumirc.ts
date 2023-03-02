// more config: https://d.umijs.org/config
import { defineConfig } from 'dumi';

const isProdSite =
  // 不是预览模式 同时是生产环境
  process.env.PREVIEW !== '1' && process.env.NODE_ENV === 'production';

export default defineConfig({
  themeConfig: {
    logo: false,
  },
  outputPath: '.doc',
  exportStatic: {},
  base: isProdSite ? '/ant-color-panel/' : '/',
  publicPath: isProdSite ? '/ant-color-panel/' : '/',
  hash: true,
});
