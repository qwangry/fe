export const data = {
  "key": "v-54334156",
  "path": "/About/book.html",
  "title": "关于本网站",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1612187610000,
    "contributors": [
      {
        "name": "johanazhu",
        "email": "t511069160@qq.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "About/book.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
