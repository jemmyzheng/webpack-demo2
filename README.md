# 前端开发文档

## 一，技术栈

1. [react >15.x](https://facebook.github.io/react)	"Javascript库"
2. [webpack](https://webpack.github.io/)	"模块加载及打包"
3. [ant-design >2.x](https://ant.design/) "UI组件库及设计语言"
4. [node >4.6](https://nodejs.org/en/)  "开发语言环境"

## 二，项目文件结构
### 1, 主体结构
```shell
├── .babelrc                # Babel配置文件
├── .editorconfig           # 编辑器通用配置
├── .eslintrc               # eslint 编码规范检测规则
├── README.md               # 本文档
├── config                  # webpack配置文件库（由webpack.config.js调用）
├── dist                    # 编译，打包后输出目录
├── mockApi                 # 本地开发模拟接口配置文件库
├── package.json            # npm配置信息，项目依赖关系均在此文件内
├── server.js               # 本地开发服务器启动文件
├── src                     # 业务源码目录
├── tests                   # 业务源码测试代码目录
└── webpack.config.js       # webpack启动配置文件
```
### 2, 业务源码结构
 ```shell
.src
  ├── assets                # 公共资源目录（图片，字体等）
  ├── components            # 组件目录
  ├── entries               # 入口文件目录
  ├── layouts               # 页面布局及公共样式目录
  ├── pages                 # 页面文件目录
  ├── routes                # 路由文件目录
  ├── service               # fetch异步调用目录
  └── views                 # html模版目录
 ```
> 说明：<br>
> 1，入口文件目录，页面文件目录及路由文件目录具有一定的关联性，即一个入口文件对应一个路由文件,一个路由文件对应一个页面文件 。<br>
> 2, service目录用来存放所有的与服务器端异步请求的方法，该处的文件组织形式，根据后端接口文档来编写。

#### 2.1 组件结构
```shell
.components
  ├── Login                 # 组件名称，名称使用帕斯卡命名
  │   ├── Login.jsx         # 组件jsx文件，文件名称保持一致
  │   └── Login.less        # 组件样式文件，文件名称保持一致
  └── 其它组件....
```
### 3, webpack配置
```shell
.config
  ├── base.js               # 基础配置
  ├── defaultOpt.js         # 默认配置，定义了默认插件，入口文件，Module
  ├── dev.js                # 在基础配置的基础上，设置webpack-dev-server,配置模块热加载
  └── dist.js               # 在基础配置的基础上，增加编译打包的相关配置
```
> 说明：<br>
> package.json 已经配置的script命令
```shell
-> npm run clean             # 清除dist目录下所有文件
-> npm run serve             # 启动本地开发服务器
-> npm run start             # 同上
-> npm run dist              # 编译，打包，压缩源码并输出html，js，css文件至dist目录
-> npm run lint              # 代码规范检查
```

## 三，编码规范
### 1, Javascript版本
Javascript采用ES6版本及ES7阶段2以上的特性。
### 2, Javascript及React编码规范
上述编码规范参见[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)及[Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)。
### 3, CSS编码规范
未定

## 四，测试要求
未定
