# vw + rem 适配移动端

vw + rem 适配移动端，不需要 js 动态设置 html font-size， 支持设置容器的最小最大宽度。

```scss
// 设计稿宽度
$designWidth: 375;
// 设定 1rem = 100px
$blocks: 100;

html {
    // 计算规则：
    // 100vw / 375px = 0.2666667vw，即 0.2666667vw = 1px = 0.2666667%
    // 为便于换算，设定 1rem = 100px, 即 26.66667vw = 100px = 1rem = 26.66667%
    // 也就是 375px = (375px / 100px)rem
    font-size: calc(100vw / $designWidth * $blocks) !important;
}
```

核心文件 [flexible.scss](https://github.com/zhuanglong/rem-vw-layout/blob/master/src/design/flexible/flexible.scss)

## 使用

在 global 中引入

```
@import './flexible/flexible.scss';

// 移动端自适应，可覆盖变量
// $designWidth: 750;
@include rootFontSize();
```

在 main.js 引入行内样式转换方法

```
import './design/flexible/flexible';
import { createApp } from 'vue'

const app = createApp(App)

// 挂载全局变量
app.config.globalProperties.$px2rem = window.flexible.px2rem

app.mount('#app')
```

```
// script 中使用
import { getCurrentInstance } from 'vue'
const { $px2rem } = getCurrentInstance().appContext.config.globalProperties
console.log($px2rem(30))

// template 中使用
<h1 :style="{ fontSize: $px2rem(30) }">{{ msg }}</h1>
```

## 参考

- [细说移动端 经典的REM布局 与 新秀VW布局](https://www.cnblogs.com/imwtr/p/9648233.html)
- [一行css代码轻松实现前端响应式布局（vw+rem）](https://www.cnblogs.com/hz-blog/p/one_css_flexible_layout_vw_rem.html)
