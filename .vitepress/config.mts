import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "bashDocs",
  description: "A bash Docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '使用方法', link: '/doc' }
    ],

    sidebar: [
      {
        text: '使用方法',
        items: [
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dong-dong6/bash' }
    ]
  }
})
