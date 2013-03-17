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
imjsで提供される機能を説明します。  
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
ページ内に、高さを揃えたいボックスのグループが複数ある場合、data-group属性を追加して、グルーピングを行います。  
なお、何も指定しない場合のグループは「_」です。

    <ul class="box imjs-boxheights" data-group="second" data-children="true">
      <li>あああああ</li>
      <li>いいいいい</li>
      <li>う<br />うううう</li>
    </ul>

### label - IE8以下でlabelタグのバグを回避する
IE8以下ではlabelタグに問題があります。  
label内に画像がある場合、それをクリックしても何も起こらず、それどころかIE6ではlabelのクリック自体が機能しません。
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

オプションを指定することで表示を制御できます。

    <a href="http://www.imjp.co.jp" target="popupwin" class="imjs-popup" data-width="1000" data-height="700">1000x700で開く</a>

#### オプション
太字はデフォルト値。
+   `width`
    小窓の幅  
    **500**

+   `height`
    小窓の高さ  
    **500**

+   `options`
    window.open()のオプション  
    **,menubar=no,toolbar=no,location=yes,status=yes,resizable=yes,scrollbars=yes**
