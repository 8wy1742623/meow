## 上下翻页
自用的手机浏览器，辅助翻页工具。

应用环境：安卓版yandex浏览器，TamperMonkey（油猴扩展）
语言：js
参考：greasyfork.org 上搜‘翻页’，筛选的几个脚本。

### 需求：
实现uc手机浏览器上的翻页按钮。

### todo：
[] 按钮
    [x] 出现按钮样式
    [] 改变位置（按住拖动，并保存配置）
[] 可翻页
    [x] 翻页
    [] 平滑移动

### 方案
翻页方式
``` js
scrollTo(0, document.documentElement.clientHeight)
```