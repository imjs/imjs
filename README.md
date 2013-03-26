imjs
======================
imjsは便利で小さな単機能の集合体です。  
かゆいところに手が届く、そんなライブラリを目指して生まれました。

デモ
------
http://imjs.github.com/imjs/demo/

使いかた
------
imjsは誰でも簡単に、jsの知識がなくても使うことができます。

まずライブラリを読み込みます。

    <script type="text/javascript" src="imjs.js"></script>

そしてあらかじめ決められたクラスをつける、これだけです。

    <div class="imjs-facebook"></div>

機能一覧
------
imjsで提供される機能の一覧です。  
各機能にはパラメーターを変更できるものもあり、あなたの要望に柔軟に応えます。

### boxheights - ボックスの高さを揃える
内容量が一定でない、複数のボックスの高さを揃えます。  

#### クラス名
boxheights

#### 使いかた
ふたつの指定方法があります。

* 対象の要素すべてにクラスをつける

        <ul>
          <li class="imjs-boxheights">あいうえお</li>
          <li class="imjs-boxheights">あい<br />うえお</li>
          <li class="imjs-boxheights">あ<br />い<br />う<br />え<br />お</li>
        </ul>

* 親要素にクラスをつける

    data-children属性をtrueにすることで、直接の子要素を対象とします。

        <ul class="imjs-boxheights" data-children="true">
          <li>あいうえお</li>
          <li>あい<br />うえお</li>
          <li>あ<br />い<br />う<br />え<br />お</li>
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


### redirect - リダイレクト
デバイスのタイプに応じて指定されたURLをリダイレクトする。（デバイスのタイプとはスマートフォン、タブレット、PC）

#### クラス名
redirect

#### 使いかた

* ステップ 1：`<head>` タグの中にライブラリを読み込む事をすすめる。
      
        <head>
          ...
          <script type="text/javascript" src="imjs.js"></script>
          ... ...
        </head>

* ステップ 2：`<html>` タグにクラスをつける。

        <html class="imjs-redirect">

* ステップ 3：属性 `data-target` でターゲットデイバスを指定。

        <html data-target="sp" class="imjs-redirect">
  + sp : スマートフォン（例：iPhone, Android, Windows Phone）
  + tablet : タブレット（例：iPad, Android Tablet）
  + pc : PC（スマートフォンとタブレット以外のデイバス）

* ステップ 4：属性 `data-url` でURLを指定。
        
        <!-- URL -->
        <html data-target="sp" data-url="http://www.imjp.co.jp" class="imjs-redirect">
        <!-- 絶対パス -->
        <html data-target="sp" data-url="/sp" class="imjs-redirect">

#### 同時に複数のデイバスを指定
        
        <!-- スマートフォンとタブレット -->
        <html data-target="sp tablet" class="imjs-redirect">
        <!-- タブレットとPC -->
        <html data-target="tablet pc" class="imjs-redirect">


### rollover - マウスオーバー
マウスのカーソルを画像のうえに移動した時にオーバー画像を表示させる

#### クラス名
rollover

#### 使いかた
ふたつの指定方法があります。

* 対象の要素すべてにクラスをつける

        <ul>
          <li><a href="#"><img class="imjs-rollover" src="img/top_menu01.jpg" width="105" height="98" alt="" /></a></li>
          <li><a href="#"><img class="imjs-rollover" src="img/top_menu02.jpg" width="105" height="98" alt="" /></a></li>
          <li><a href="#"><img class="imjs-rollover" src="img/top_menu03.jpg" width="105" height="98" alt="" /></a></li>
        </ul>

* 上位要素にクラスをつける

        <ul class="imjs-rollover">
          <li><a href="#"><img src="img/top_menu01.jpg" width="105" height="98" alt="" /></a></li>
          <li><a href="#"><img src="img/top_menu02.jpg" width="105" height="98" alt="" /></a></li>
          <li><a href="#"><img src="img/top_menu03.jpg" width="105" height="98" alt="" /></a></li>
        </ul>

#### 重複に追加する事が可能 `class="imjs-rollover"`
上位要素と対象要素は同時にクラスを追加でも大丈夫です。

### SNS Button - ソーシャルボタン
HTMLに`<div class="imjs-facebook"></div>`を追加ばかりでFacebookのいいねボタンを実現できる。それ以外、Twitterボタン，中国に人気があるWeiboと日本に人気があるmixiができる。


#### Facebook - **いいね** ボタン
  
##### クラス名
facebook

##### 使い方
    
        <li class="imjs-facebook"></li>
  
  オプションを指定することで表示をカスタマイズできます。

  + data-href —— シェアリンクを指定
  
    現在ページのURLはデフォルトの値です。
        
        <li class="imjs-facebook" data-href="http://www.imjp.co.jp"></li>
  
  + data-width —— 幅を指定
  
    100pxはデフォルトの値。

        <li class="imjs-facebook" data-width="200"></li>

  + data-height —— 縦を指定

    22pxはデフォルトの値。

        <li class="imjs-facebook" data-height="50"></li>

  + data-count —— カウントを表示

    デフォルトでカウントを表示する `data-count` 属性の値は`none` を指定されて非表示。

        <li class="imjs-facebook" data-count="none"></li>

  + data-layout —— レイアウトを指定

     `button_count` はデフォルトの値。
        
        <!-- デフォルト -->
        <li class="imjs-facebook" data-layout="button_count"></li>

        <!-- ボタンの右側に文言とプロフィールを表示 -->
        <li class="imjs-facebook" data-layout="standard"></li>
        
        <!-- ボタンの上にカウントを表示 -->
        <li class="imjs-facebook" data-layout="box_count"></li>

#### Twitter - **ツイート** ボタン  

##### クラス名
twitter

##### 使い方

        <li class="imjs-twitter"></li>

  オプションを指定することで表示をカスタマイズできます。

  + data-url —— シェアリンクを指定

    現在ページのURLはデフォルトの値です。

        <li class="imjs-twitter" data-url="http://www.imjp.co.jp"></li>

  + data-width —— 幅を指定

    ツイートのデフォルトの幅。

        <li class="imjs-twitter" data-width="100"></li>

  + data-text —— シェアの内容

    空はデフォルトです。

        <li class="imjs-twitter" data-text="こんにちは世界"></li>

  + data-hashtags —— トピックとキーワード

    空はデフォルトです。

        <li class="imjs-twitter" data-hashtags="正解"></li>

  + data-count —— カウントを表示

    デフォルトでカウントを表示する `data-count` 属性の値は`none` を指定されて非表示。

        <li class="imjs-twitter" data-count="none"></li>

  
#### mixi - **チェック** ボタン
  
##### クラス名
  mixi

##### 使い方

        <li class="imjs-mixi"></li>

  オプションを指定することで表示をカスタマイズできます。

  + data-url —— シェアリンクを指定

    現在ページのURLはデフォルトの値です。

        <li class="imjs-mixi" data-url="http://www.imjp.co.jp"></li>

#### Weibo - **ウェイボーにシェア** ボタン
  
##### クラス名
  weibo

##### 使い方

        <li class="imjs-weibo"></li>

  オプションを指定することで表示をカスタマイズできます。
  
  + data-type —— タイプを指定
    
    デフォルトのタイプが `icon` です。
        
        <!-- デフォルト -->
        <li class="imjs-weibo" data-type="icon"></li>

        <!-- 文言をつけるボタン -->
        <li class="imjs-weibo" data-type="button"></li>

  + data-size —— ボタンのお大きさを指定

    デフォルトの大きさが  `small` です。

        <!-- ミドル -->
        <li class="imjs-weibo" data-size="middle"></li>

        <!-- ビッグ -->
        <li class="imjs-weibo" data-size="big"></li>

  + data-count —— カウントを表示

    デフォルトでカウントを表示する `data-count` 属性の値は`none` を指定されて非表示。

        <li class="imjs-weibo" data-count="none"></li>

### biggerLink - aタグの親要素をクリッカブルにする。
aタグの親要素をクリッカブルにして、クリッカブルエリアを広げます。

#### クラス名
biggerLink

#### 使いかた

    <div class="imjs-biggerLink">
      <h2>imjs-biggerLink</h2>
      <p>Ubuntu is the world's favourite free operating system, with more than 20 million people preferring it to commercial alternatives.</p>
      <p><a href="http://www.ubuntu.com/ubuntu">target&nbsp;&nbsp;self&nbsp;&nbsp;&rsaquo;</a></p>
    </div>

オプションで指定したクラスをCSSで編集することで、ホバーのスタイルを変更できます。

    .hover{
      background: #d5e8f5;
    }
    .hover a{
      text-decoration: none;
    }

#### オプション
太字はデフォルト値です。
+   `hoverClass`
    ホバーした時に付与されるクラス名  
    **hover**

### addClassToTable - TABLEのTRタグにクラスを追加する。
TABLEのTRタグに奇数、偶数に分けてデフォルトもしくは、指定したクラスを追加します。

#### クラス名
addClass

#### 使いかた

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

オプションで指定したクラスをCSSで編集することで、奇数行、偶数行のスタイルを変更できます。

    .even{
      background-color: #FFF;
    }
    .odd{
      background-color: #000;
    }

#### オプション
太字はデフォルト値です。
+   data-even
    偶数行に追加するクラス名
    **even**
+   data-odd
    奇数行に追加するクラス名
    **odd**

### addClassToList - UL、OLのLIタグにクラスを追加する。
UL、OLのLIタグに奇数、偶数に分けてデフォルトもしくは、指定したクラスを追加します。

#### クラス名
addClass

#### 使いかた

    <ul class="imjs-addClass" data-even="even" data-odd="odd">
    	<li>a01</li>
    	<li>a02</li>
   	<li>a03</li>
   	<li>a04</li>
    </ul>

オプションで指定したクラスをCSSで編集することで、奇数行、偶数行のスタイルを変更できます。

    .even{
      background-color: #FFF;
    }
    .odd{
      background-color: #000;
    }

#### オプション
太字はデフォルト値です。
+   data-even
    偶数行に追加するクラス名
    **even**
+   data-odd
    奇数行に追加するクラス名
    **odd**

