imjs
======================
imjs是一个方便实用的轻量级JS库。目的在于为您的前端开发提供无微不至的帮助。

Demo
----
http://imjs.github.com/imjs/demo/

使用方法
------
即使没有JS基础，也可以简单的使用imjs。

首先，在HTML中嵌入imjs，如下。

    <script type="text/javascript" src="imjs.js"></script>

然后，只需在HTML标签上添加期望功能的class名称，如下。

    <div class="imjs-facebook"></div>


功能列表
-------
+ boxheights - 对齐块级元素的行高
+ label - 修复IE6~IE8下 `label` 标签内嵌套图片的bug
+ popup - 弹出窗口
+ smoothScroll - 平滑滚动
+ redirect - 页面重定向
+ rollover - 鼠标悬浮
+ SNS Button - 社交网站分享按钮
  - facebook
  - twitter
  - weibo （新浪微博）
  - mixi （日本人气社交网站）
+ biggerLink - 增大型链接
+ addClassToTable - 为 `table` 的 `tr` 标签添加 `class`
+ addClassToList - 为 `ul` `ol`的 `li` 子标签添加 `class`


功能介绍
------
imjs所提供的功能介绍。
imjs实现了用户自定义标签属性功能，使您可以更加灵活的使用。

### boxheights - 对齐块级元素的行高
处在同一行的块级元素高度不相同时，利用此功能对齐元素行高。

#### class名
boxheights

#### 使用方法
两种设置方法：

* 方法一：为每个対象元素添加class，如下：

        <ul>
          <li class="imjs-boxheights">块级元素一</li>
          <li class="imjs-boxheights">块级元素二<br />二二二二</li>
          <li class="imjs-boxheights">块级元素三<br />三<br />四<br />五<br />六</li>
        </ul>

* 方法二：为对象元素的父元素添加class，如下：

    data-children属性值设为true时，第一层子元素将进行对齐操作。

        <ul class="imjs-boxheights" data-children="true">
          <li>块级元素一</li>
          <li>块级元素二<br />二二二二</li>
          <li>块级元素三<br />三<br />四<br />五<br />六</li>
        </ul>

#### data-group
HTML内多次出现对齐行高时，添加 `data-group` 属性可以使指定组的行高向其中最高一组的行高对齐。

    <ul class="box imjs-boxheights" data-group="second" data-children="true">
      <li>块级元素一</li>
      <li>块级元素二<br />二二二二</li>
      <li>块级元素三<br />三<br />四<br />五<br />六</li>
    </ul>

### label - 修复IE6~IE8下 `label` 标签内嵌套图片的bug
IE8以下ではlabelタグに問題があります。  
label内に画像がある場合、それをクリックしても何も起こらず、さらにIE6ではlabelのクリック自体が機能しません。  
これらのバグを回避し、他のブラウザと同じように機能するようにします。

#### class名
label

#### 使用方法
两种设置方法：

* 方法一：为每个対象元素添加class，如下：

        <ul>
          <li><label class="imjs-label"><input type="checkbox" />一一一一</label></li>
          <li><label class="imjs-label"><input type="checkbox" />二二二二</label></li>
          <li><label class="imjs-label"><input type="checkbox" /><img src="icon.gif" />三三三三</label></li>
        </ul>

* 方法二：为对象元素的父元素添加class，如下：

    当 `data-descendant` 属性为true时、子元素将拥有此功能。

        <ul class="imjs-label" data-descendant="true">
          <li><label><input type="checkbox" />一一一一</label></li>
          <li><label><input type="checkbox" />二二二二</label></li>
          <li><label><input type="checkbox" /><img src="icon.gif" />三三三三</label></li>
        </ul>

### popup - 弹出窗口
链接以弹出窗口的形式显示。

#### class名
popup

#### 使用方法

    <a href="http://www.imjp.co.jp" target="popupwin" class="imjs-popup">点击-弹出窗口</a>

设定参数实现自定义弹出窗口

    <a href="http://www.imjp.co.jp" target="popupwin" class="imjs-popup" data-width="1000" data-height="700">1000x700で開く</a>

#### option
默认为粗体字。

+   `width`
    窗口宽度  
    **500**

+   `height`
    窗口高度  
    **500**

+   `options`
    window.open()选项  
    **,menubar=no,toolbar=no,location=yes,status=yes,resizable=yes,scrollbars=yes**

### smoothScroll - 平滑滚动
点击页内链接，平滑滚动到指定锚点。

#### class名
scroll

#### 使用方法

* 为 `a` 标签添加class

        <a href="#page_top" class="imjs-scroll">页首へ</a>

#### option
默认为粗体字。
+   `speed`
    移动时间(单位:ms)  
    **500**

+   `offset`
    距离链接锚点的距离(单位:px)  
    **20**

+   `easing`
    指定easing参数
    目前为止imjs实现了linear,swing  
    **swing**

#### option
共有两个选项：

* 在JS文件中对imjs.conf进行配置

  说明在JS文件中

* 自定义 `a` 标签的data属性

  自定义data属性将覆盖imjs.conf的默认设置。

  data-[option名]

        <a href="#page_top" class="imjs-scroll" data-speed="800" data-offset="0" data-easing="linear">首页へ</a>


### redirect - 页面重定向
根据设备类型（智能手机，平板电脑，个人电脑）进行跳转设置，匹配时跳转到指定链接页面。

#### class名
imjs-redirect

#### 使用方法

* 第一步：推荐在`<head>`标签内靠前的位置声明imjs文件：
      
        <head>
          ...
          <script type="text/javascript" src="imjs.js"></script>
          ... ...
        </head>

* 第二步：为`<html>`元素添加class，如下：

        <html class="imjs-redirect">

* 第三步：指定跳转目标设备类型`data-target`，如下：

        <html data-target="sp" class="imjs-redirect">
  + sp : 智能手机（如：iPhone, Android, Windows Phone）
  + tablet : 平板电脑（如：iPad, Android Tablet）
  + pc : 个人电脑（智能手机，平板电脑以外的设备）

* 第四步：指定跳转地址`data-url`，如下：
        
        <!-- URL -->
        <html data-target="sp" data-url="http://www.imjp.co.jp" class="imjs-redirect">
        <!-- 绝对路径 -->
        <html data-target="sp" data-url="/sp" class="imjs-redirect">

#### 指定多个目标设备
可以根据需求，同时指定多个目标设备
        
        <!-- 当智能手机与平板电脑时，跳转 -->
        <html data-target="sp tablet" class="imjs-redirect">
        <!-- 当个人电脑与平板电脑时，跳转 -->
        <html data-target="tablet pc" class="imjs-redirect">


### rollover - 鼠标悬浮
鼠标悬浮在图像上时，图像切换为与之对应的悬浮图片

#### class名
imjs-rollover

#### 使用方法
两种设置方法：

* 方法一：为每个图像元素添加class，如下：

        <ul>
          <li><a href="#"><img class="imjs-rollover" src="img/top_menu01.jpg" width="105" height="98" alt="" /></a></li>
          <li><a href="#"><img class="imjs-rollover" src="img/top_menu02.jpg" width="105" height="98" alt="" /></a></li>
          <li><a href="#"><img class="imjs-rollover" src="img/top_menu03.jpg" width="105" height="98" alt="" /></a></li>
        </ul>

* 方法二：为父级或祖先元素添加class，如下：

        <ul class="imjs-rollover">
          <li><a href="#"><img src="img/top_menu01.jpg" width="105" height="98" alt="" /></a></li>
          <li><a href="#"><img src="img/top_menu02.jpg" width="105" height="98" alt="" /></a></li>
          <li><a href="#"><img src="img/top_menu03.jpg" width="105" height="98" alt="" /></a></li>
        </ul>

#### 允许重复添加 `class="imjs-rollover"`
即使父元素与子元素同时添加class，也不会产生冲突。如果希望`div`内全部`img`元素实现鼠标悬浮功能时，只需在此`div`元素上进行声明。

### SNS Button - 社交网站分享按钮
只需在HTML中添加`<div class="imjs-facebook"></div>`标签，即可实现Facebook分享按钮。除Facebook按钮之外，还有Twitter的推送按钮，中国拥有两亿活跃用户的微博分享按钮，以及日本人气社交网站Mixi的分享按钮。

#### class名
- imjs-facebook
- imjs-twitter
- imjs-mixi
- imjs-weibo

#### 使用方法

##### Facebook - **攒** 按钮
  简洁写法：
    
        <!-- 默认当前页面URL，默认宽度100px，默认高度22px，默认显示计数，默认为button类型 -->
        <li class="imjs-facebook"></li>
  
  属性说明：

  + data-href —— 设置分享链接

    默认当前页面URL，属性值格式：正确链接。

        <li class="imjs-facebook" data-href="http://www.imjp.co.jp"></li>
  
  + data-width —— 设置按钮宽度
  
    默认宽度为100px，属性值格式：数字。

        <li class="imjs-facebook" data-width="200"></li>

  + data-height —— 设置按钮高度

    默认高度为22px，属性值格式：数字。

        <li class="imjs-facebook" data-height="50"></li>

  + data-count —— 设置是否显示计数

    默认为显示计数，属性值格式：字符串，当属性值为 `none` 时，不显示计数。

        <li class="imjs-facebook" data-count="none"></li>

  + data-layout —— 设置显示类型

    默认为 `button_count` 类型，属性值格式：字符串。
        
        <!-- 默认类型 -->
        <li class="imjs-facebook" data-layout="button_count"></li>

        <!-- 在按钮右侧显示文字与用户头像 -->
        <li class="imjs-facebook" data-layout="standard"></li>
        
        <!-- 在按钮上方显示计数 -->
        <li class="imjs-facebook" data-layout="box_count"></li>

##### Twitter - **Tweet** 按钮

  简洁写法：

        <!-- 默认当前页面URL，默认显示计数，默认情况下为twitter自定义宽度，无文本以及无关键字 -->
        <li class="imjs-twitter"></li>

  属性说明：

  + data-url —— 设置分享链接

    默认当前页面URL，属性值格式：正确链接。

        <li class="imjs-twitter" data-url="http://www.imjp.co.jp"></li>

  + data-width —— 设置按钮宽度

    默认为twitter自定义宽度，属性值格式：数字。

        <li class="imjs-twitter" data-width="100"></li>

  + data-text —— 设置分享内容

    默认为空，属性值格式：字符串。

        <li class="imjs-twitter" data-text="世界，你好！"></li>

  + data-hashtags —— 设置分享主题或关键字

    默认为空，属性值格式：字符串。

        <li class="imjs-twitter" data-hashtags="幸福"></li>

  + data-count —— 设置是否显示计数

    默认为显示计数，属性值格式：字符串，当属性值为 `none` 时，不显示计数。

        <li class="imjs-twitter" data-count="none"></li>

  
##### mixi - **チェック** 按钮
  
  简洁写法：

        <!-- 默认当前页面URL -->
        <li class="imjs-mixi"></li>

  属性说明：

  + data-url —— 设置分享链接

    默认当前页面URL，属性值格式：正确链接。

        <li class="imjs-mixi" data-url="http://www.imjp.co.jp"></li>

##### Weibo - **分享到微博** 按钮
  
  简洁写法：

        <!-- 默认当前页面URL -->
        <li class="imjs-weibo"></li>

  属性说明：
  
  + data-type —— 设置显示类型
    
    默认为 `icon` 类型，属性值格式：字符串。
        
        <!-- 默认类型 -->
        <li class="imjs-weibo" data-type="icon"></li>

        <!-- 带有文字的按钮 -->
        <li class="imjs-weibo" data-type="button"></li>

  + data-size —— 设置按钮大小

    默认为 `small` 小图标，属性值格式：字符串。

        <!-- 中图标 -->
        <li class="imjs-weibo" data-size="middle"></li>

        <!-- 大图标 -->
        <li class="imjs-weibo" data-size="big"></li>

  + data-count —— 设置是否显示计数

    默认为显示计数，属性值格式：字符串，当属性值为 `none` 时，不显示计数。

        <li class="imjs-weibo" data-count="none"></li>

### biggerLink - 增大型链接
为增大链接的可点击范围，点击 `a` 标签父元素时同样跳转到标签链接。

#### class名
biggerLink

#### 使用方法

    <div class="imjs-biggerLink">
      <h2>imjs-biggerLink</h2>
      <p>Ubuntu is the world's favourite free operating system, with more than 20 million people preferring it to commercial alternatives.</p>
      <p><a href="http://www.ubuntu.com/ubuntu">target&nbsp;&nbsp;self&nbsp;&nbsp;&rsaquo;</a></p>
    </div>

在CSS文件中为JS生成的class添加样式。


    .hover{
      background: #d5e8f5;
    }
    .hover a{
      text-decoration: none;
    }

#### option
+   `hoverClass`
    鼠标悬浮于元素之上时添加class名  
    **hover**

### addClassToTable - 为 `table` 的 `tr` 标签添加 `class`
默认为table的奇数行和偶数行tr标签添加class名。可自定义class名。

#### class名
addClass

#### 使用方法

    <table class="imjs-addClass" data-even="even" data-odd="odd">
      <tr>
          <td>a01</td>
          <td>a02</td>
          <td>a03</td>
      </tr>
      <tr>
          <td>b01</td>
          <td>b02</td>
          <td>b03</td>
      </tr>
      <tr>
          <td>c01</td>
          <td>c02</td>
          <td>c03</td>
      </tr>
      <tr>
          <td>d01</td>
          <td>d02</td>
          <td>d03</td>
      </tr>
  </table>

在CSS文件中为JS生成的class添加样式。改变奇数行偶数行的样式，如下：
    .even{
      background-color: #FFF;
    }
    .odd{
      background-color: #000;
    }

#### option
粗体字为默认值。
+   data-even
    指定偶数行class名
    **even**
+   data-odd
    指定奇数行class名
    **odd**

### addClassToList - 为 `ul` `ol`的 `li` 子标签添加 `class`
默认为 `ul` `ol`的奇数行和偶数行 `li` 子标签添加class名。可自定义class名。

#### class名
addClass

#### 使用方法

    <ul class="imjs-addClass" data-even="even" data-odd="odd">
      <li>a01</li>
      <li>a02</li>
      <li>a03</li>
      <li>a04</li>
    </ul>

在CSS文件中为JS生成的class添加样式。改变奇数行偶数行的样式，如下：

    .even{
      background-color: #FFF;
    }
    .odd{
      background-color: #000;
    }

#### option
粗体字为默认值。
+   data-even
    指定偶数行class名。
    **even**
+   data-odd
    指定奇数行class名
    **odd**

