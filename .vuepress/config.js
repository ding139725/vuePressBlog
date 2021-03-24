module.exports = {
  "title": "大雄博客",
  "description": "这是一个小菜鸟的博客",
  "dest": "public",
  "base": "vuePressBlog",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "博客首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "面试题积累",
        "icon": "reco-message",
        "items": [
          {
            "text": "CSS",
            "link": "/docs/css/"
          },
          {
            "text": "HTML",
            "link": "/docs/html/"
          }
        ]
      },
      {
        "text": "关于我",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/ding139725",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/html/": [
        "语义化好处",
        "link和@import"
      ],
      "/docs/css/": [
        "什么是BFC"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": [
        {
          "location": 2,
          "text": "Category"
        },
        {
          "location": 1,
          "text": "123"
        }
      ],
      "tag": {
        "location": 3,
        "text": "分类标签"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "daxiong",
    "authorAvatar": "/avatar.jpg",
    "record": "xxxx",
    "startYear": "2017"
  },
  "markdown": {
    "lineNumbers": true
  }
}