
### 目录结构：
|
|- public
|   |- mock
        |- products: 与产品相关的mock数据
|
|- src
    |- components: 存放展示型React组件（通用型的组件）
    |       |- Header.js
    |               |- index.js
    |               |- style.css
    |
    |- containers: 存放容器型React组件
    |       |- App
    |           |- index.js: App React组件
    |           |- style。css
    |       |- Home
    |           |- index.js: Home React组件
    |           |- style.css
    |           |- components: 对于Home组件所需要的展示型组件
    |
    |- redux: duck模式
    |       |- module: redux模块
    |       |- middleware 
    |
    |- utils: 常用工具类
    |- images