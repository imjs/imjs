imjs
======================
imjs是一个方便实用的轻量级JS库。目的在于为您的前端开发提供无微不至的帮助。


使用方法
------
即使没有JS基础，也可以简单的使用imjs。

首先，在HTML中嵌入imjs，如下。

    <script type="text/javascript" src="imjs.js"></script>

然后，只需在HTML标签上添加期望功能的class名称，如下。

    <div class="imjs-facebook"></div>

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

#### グルーピング
ページ内に、高さを揃えたいボックスのグループが複数ある場合、data-group属性を追加してグルーピングを行います。  
なお、何も指定しない場合のグループは **_** です。

    <ul class="box imjs-boxheights" data-group="second" data-children="true">
      <li>あああああ</li>
      <li>いいいいい</li>
      <li>う<br />うううう</li>
    </ul>

### label - IE8以下でlabelタグのバグを回避する
IE8以下ではlabelタグに問題があります。  
label内に画像がある場合、それをクリックしても何も起こらず、さらにIE6ではlabelのクリック自体が機能しません。  
これらのバグを回避し、他のブラウザと同じように機能するようにします。

#### クラス名
label

#### 使いかた
ふたつの指定方法があります。

* 対象の要素すべてにクラスをつける

        <ul>
          <li><label class="imjs-label"><input type="checkbox" />あああああ</label></li>
          <li><label class="imjs-label"><input type="checkbox" />いいいいい</label></li>
          <li><label class="imjs-label"><input type="checkbox" /><img src="icon.gif" />ううううう</label></li>
        </ul>

* 上位要素にクラスをつける

    data-descendant属性をtrueにすることで、下位要素を対象とします。

        <ul class="imjs-label" data-descendant="true">
          <li><label class="imjs-label"><input type="checkbox" />あああああ</label></li>
          <li><label class="imjs-label"><input type="checkbox" />いいいいい</label></li>
          <li><label class="imjs-label"><input type="checkbox" /><img src="icon.gif" />ううううう</label></li>
        </ul>

### popup - リンクを小窓で開く
指定したリンクを小窓で開くようにします。

#### クラス名
popup

#### 使いかた

    <a href="http://www.imjp.co.jp" target="popupwin" class="imjs-popup">ポップアップで開く</a>

オプションを指定することで表示をカスタマイズできます。

    <a href="http://www.imjp.co.jp" target="popupwin" class="imjs-popup" data-width="1000" data-height="700">1000x700で開く</a>

#### オプション
太字はデフォルト値です。
+   `width`
    小窓の幅  
    **500**

+   `height`
    小窓の高さ  
    **500**

+   `options`
    window.open()のオプション  
    **,menubar=no,toolbar=no,location=yes,status=yes,resizable=yes,scrollbars=yes**

### smootScroll - スムーススクロール
ページ内リンクをスムースにスクロールさせます。


#### クラス名
scroll

#### 使いかた

* 対象のaタグにクラスを付ける。

        <a href="#page_top" class="imjs-scroll">ページの先頭へ</a>

#### オプション
太字はデフォルト値です。
+   `speed`
    移動時間(単位:ms)  
    **500**

+   `offset`
    停止位置の対象要素からの差分(単位:px)  
    **20**

+   `easing`
    スクロールのイージング関数  
    指定できる値はlinear,swing  
    **swing**

#### オプションの指定方法
ふたつの指定方法があります。

* imjs.confを書き換える

  別記

* 各aタグのdata属性で指定

  指定した要素のみimjs.confの値を上書きできます。

  data-[オプション名]

        <a href="#page_top" class="imjs-scroll" data-speed="800" data-offset="0" data-easing="linear">ページの先頭へ</a>


### redirect - 页面跳转
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
  
  + data-href - 设置分享链接

        <li class="imjs-facebook" data-href="http://www.imjp.co.jp"></li>
  
  + data-width - 设置按钮宽度
  
    默认宽度为100px，属性值格式：数字。

        <li class="imjs-facebook" data-width="200"></li>

  + data-height - 设置按钮高度

        <li class="imjs-facebook" data-height="50"></li>

  + data-count - 设置是否显示计数

        <li class="imjs-facebook" data-count="none"></li>

  + data-layout - 设置显示类型


##### Twitter - **Tweet** 按钮
  
##### mixi - **チェック** 按钮
  
##### Weibo - **分享到微博** 按钮
