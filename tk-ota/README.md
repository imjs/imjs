imjs
======================
imjsは便利で小さな単機能の集合体です。  
かゆいところに手が届く、そんなライブラリを目指して生まれました。

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