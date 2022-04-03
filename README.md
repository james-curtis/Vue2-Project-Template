# Vue2-Project-Template

该模板规范大部分参考SmartAdmin

http://smartadmin.1024lab.net/views/1.x/standard/front.html

目录结构有所改变

```
top
 ├── public
 │   ├── favicon.ico
 │   └── index.html
 ├── src
 │   ├── api                                # 所有api接口
 │   ├── assets                             # 静态资源
 │   │   └── logo.png
 │   ├── biz                                # 业务层，类似后端的service，biz
 │   ├── components                         # 公用组件
 │   │   ├── HelloWorld.vue
 │   │   └── icons
 │   │       ├── icons.vue
 │   │       └── index.js
 │   ├── config                             # 配置信息
 │   │   └── index.js
 │   ├── constants                          # 常量信息，项目所有Enum, 全局常量等
 │   │   ├── index.js
 │   │   └── table-page.js
 │   ├── datas                              # 模拟数据，临时存放
 │   ├── directives                         # 自定义指令
 │   ├── entity                             # 实体，类似后端的实体，也称model层
 │   ├── filters                            # 过滤器，全局工具
 │   ├── lib                                # 外部引用的插件存放及修改文件
 │   │   └── http.js                        # Axios的封装
 │   ├── mock                               # 模拟接口，临时存放
 │   ├── router                             # 路由，统一管理
 │   │   ├── index.js
 │   │   └── module
 │   ├── store                              # vuex, 统一管理
 │   │   ├── index.js
 │   │   └── module
 │   ├── style                              # 影响全局的样式表
 │   │   ├── element-ui-reset.scss          # element-ui重设样式
 │   │   ├── element-variables.scss         # element-ui自定义主题的变量
 │   │   ├── global.scss                    # 全局样式表
 │   │   └── variables.scss                 # 常用的scss常量；原则上颜色都必须定义在此
 │   ├── views                              # 视图目录
 │   │   ├── AboutView.vue
 │   │   └── HomeView.vue
 │   ├── App.vue
 │   └── main.js
 ├── .editorconfig                          # 编辑器设置
 ├── .env.development                       # 开发环境（dev,用于本地开发，连接开发环境的api）
 ├── .env.local                             # 本地环境（local,用于本地开发，连接本地api）
 ├── .env.prod                              # 生产环境（prod, 生产环境）
 ├── .env.sit                               # 测试环境（sit，测试人员测试）
 ├── .eslintrc.js
 ├── .gitignore
 ├── babel.config.js
 ├── jsconfig.json
 ├── package-lock.json
 ├── package.json
 ├── README.md
 ├── vue.config.js
 └── yarn.lock
```



