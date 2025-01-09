const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  title: "demo",
  description: 'vdoing博客主题模板',
  base: '/demo/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  plugins: [
    [
      "vuepress-plugin-vssue-global",
      {
        platform: "github",
        title: "[Comment]<%- frontmatter.title %>",
        needComments: true,
        // 其他的 Vssue 配置
        autoCreateIssue: true,
        clientId: "Ov23liJJBwVF5w9wxoSI",
        clientSecret: "4325be3bc823609007d87b78b9d0035e9c46edac",
        owner: "Janzhou1020",
        repo: "demo",
      },
    ],
  ],
  themeConfig,
}