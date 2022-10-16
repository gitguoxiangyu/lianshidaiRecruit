<template>
  <div class="animate__animated animate__fadeIn root">
    <body class="typora-export os-windows">
      <div id="write" class="">
        <h2>
          <a name="c语言算法题" class="md-header-anchor"></a
          ><span>C语言算法题</span>
        </h2>
        
        <h3>
          <a name="4-hash算法" class="md-header-anchor"></a
          ><span>4 hash算法</span>
        </h3>
        <p>
          <span
            >第三年咯，小明的苹果收获颇丰，购买小明苹果的客人也非常的多，但小明却很苦恼，购买苹果的人太多了，他快要分不清哪些人购买了多少苹果了，所以他想创建一个能够搜索的列表，通过输入客户的名字就可以找到客户购买的苹果数量，可惜，他不会操纵电脑，为此，他专门求助了万能的你，希望你可以帮助他解决个问题。</span
          >
        </p>
        <p><span>输入：第一行 一个数n 代表客人的数量</span></p>
        <p>
          <span> </span
          ><span
            >第2—n+1行 每行一个字符串 代表客人的名字 一个数字x
            代表客人购买的苹果的数量</span
          >
        </p>
        <p><span> </span><span>第n+2行 一个数q 代表查询的次数</span></p>
        <p>
          <span> </span
          ><span>第n+3—n+2+q行 每行一个字符串 代表要查询的客人的名字</span>
        </p>
        <p><span>输出：q行 每一行输出客人购买的苹果的个数</span></p>
        <p><span>样例：</span></p>
        <pre
          spellcheck="false"
          class="md-fences md-end-block ty-contain-cm modeLoaded"
          lang=""
        ><div class="CodeMirror cm-s-inner CodeMirror-wrap" lang=""><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 0px; left: 8px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation" style=""><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">3</span></pre></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">Tom 10</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">Tim 11</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">Dingkai 999</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">2</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">Dingkai</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">Tin</span></pre></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 159px;"></div><div class="CodeMirror-gutters" style="display: none; height: 159px;"></div></div></div></pre>
        <p><span>答案：</span></p>
        <pre
          spellcheck="false"
          class="md-fences md-end-block ty-contain-cm modeLoaded"
          lang=""
        ><div class="CodeMirror cm-s-inner CodeMirror-wrap" lang=""><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 0px; left: 8px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation"><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">999</span></pre></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">0</span></pre></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 45px;"></div><div class="CodeMirror-gutters" style="display: none; height: 45px;"></div></div></div></pre>
        <p><span>数据范围：</span></p>
        <p><span>0&lt;n&lt;100, 0&lt;q&lt;100, 0&lt;x&lt;1000</span></p>
        <p>
          <span
            >P.S.有些根本没有买过苹果的人可能会来问小明他买的苹果的个数，请&quot;亲切地&quot;告诉他
            0.</span
          >
        </p>
        <p>
          <span
            >提示：hash算法是将一个字符串通过一些方式转化为一个数字的方法，请注意尽可能不要让不同的字符串转化为同一个数字。（无法绝对做到）</span
          >
        </p>
        <p>&nbsp;</p>
        <h3>
          <a name="5-括号串" class="md-header-anchor"></a><span>5 括号串</span>
        </h3>
        <p>
          <span
            >众所周知，小明不仅种植着苹果树，他还种植着另一种树——括号树，这一天，小明从括号树上摘下了一串括号，他突发奇想，想看看这些括号是否合法，但是他看着长长的括号串，陷入了沉思，于是他打算向你求助，在他长达5个小时的夸赞下，你终于决定帮助他。</span
          >
        </p>
        <p>
          <span
            >解释：对于合法的括号串，括号应有前括号和后括号，并且括号内的括号们也应当是合法的。</span
          >
        </p>
        <p><span>合法括号：</span></p>
        <pre
          spellcheck="false"
          class="md-fences md-end-block ty-contain-cm modeLoaded"
          lang=""
        ><div class="CodeMirror cm-s-inner CodeMirror-wrap" lang=""><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 0px; left: 8px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation"><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">()  ({})([{}]) &nbsp; ({}[])</span></pre></div></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 23px;"></div><div class="CodeMirror-gutters" style="display: none; height: 23px;"></div></div></div></pre>
        <p><span>不合法括号：</span></p>
        <pre
          spellcheck="false"
          class="md-fences md-end-block ty-contain-cm modeLoaded"
          lang=""
        ><div class="CodeMirror cm-s-inner CodeMirror-wrap" lang=""><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 0px; left: 8px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation"><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">( &nbsp; ({)} &nbsp;  (){ &nbsp;  ({)</span></pre></div></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 23px;"></div><div class="CodeMirror-gutters" style="display: none; height: 23px;"></div></div></div></pre>
        <p><span>输入：第一行 一个数字n 代表括号串的个数</span></p>
        <p><span> </span><span>第2—n+1 行 一个字符串 表示括号串</span></p>
        <p><span>输出：n行 依次输出括号串是否合法 是则输出Y 否则输出N</span></p>
        <p><span>样例：</span></p>
        <pre
          spellcheck="false"
          class="md-fences md-end-block ty-contain-cm modeLoaded"
          lang=""
        ><div class="CodeMirror cm-s-inner CodeMirror-wrap" lang=""><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 0px; left: 8px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation"><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">3</span></pre></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">()</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">({}[]){[()()]()})</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">{({[]})[{}()]([{}][])</span></pre></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 91px;"></div><div class="CodeMirror-gutters" style="display: none; height: 91px;"></div></div></div></pre>
        <p><span>答案：</span></p>
        <pre
          spellcheck="false"
          class="md-fences md-end-block ty-contain-cm modeLoaded"
          lang=""
        ><div class="CodeMirror cm-s-inner CodeMirror-wrap" lang=""><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 0px; left: 8px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation"><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">Y</span></pre></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">N</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">N</span></pre></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 68px;"></div><div class="CodeMirror-gutters" style="display: none; height: 68px;"></div></div></div></pre>
        <p><span>数据范围：</span></p>
        <p><span>0&lt;n&lt;100, 字符串长度不超过100；</span></p>
        <p><span>提示：使用栈这种数据结构可以很轻松解决</span></p>
        <p>&nbsp;</p>
        <h3>
          <a name="6-一笔画问题" class="md-header-anchor"></a
          ><span>6 一笔画问题</span>
        </h3>
        <p>
          <span
            >时代进步，科技发展，小明也开始使用网购啦！当然，他是商家。第四年的他已经接收到了足够多的订单了，他现在要将苹果送到各个客户的家中，看着这些客户的地址，小明将客户的地址和它们之间的路画了出来，为了刷微信步数，他想要把每一条路都走一次，却不重复走每一条路。小明弱弱的CPU无法处理这样的问题，这一次，他抱着你的大腿痛哭，希望你能帮助他看看这样的图能否一笔画，你无奈的摇了摇头，还是选择</span
          ><del><span>原谅</span></del
          ><span>帮助了他。</span>
        </p>
        <p>
          <span
            >对于一张图，我们将给出每一条边，和他们连接的点，每一个点我们都将给予他们编号，编号是从1到x的连续整数。</span
          >
        </p>
        <p>
          <span
            >（注意：所有点都一定会和其他的某个点相连接。）</span
          >
        </p>
        <p><span>输入：第一行 一个数n 表示n条边</span></p>
        <p><span> </span><span>第2—n+1行 给出这条边连接的两个点u，v</span></p>
        <p><span>输出：一个字符 如果可以一笔画 则输出Y 否则N</span></p>
        <p><span>样例：</span></p>
        <pre
          spellcheck="false"
          class="md-fences md-end-block ty-contain-cm modeLoaded"
          lang=""
        ><div class="CodeMirror cm-s-inner CodeMirror-wrap" lang=""><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 0px; left: 8px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation" style=""><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">4</span></pre></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">1 2</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">2 3</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">3 4</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">4 1</span></pre></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 113px;"></div><div class="CodeMirror-gutters" style="display: none; height: 113px;"></div></div></div></pre>
        <p><span>答案：</span></p>
        <pre
          spellcheck="false"
          class="md-fences md-end-block ty-contain-cm modeLoaded"
          lang=""
        ><div class="CodeMirror cm-s-inner CodeMirror-wrap" lang=""><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 0px; left: 8px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation"><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">Y</span></pre></div></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 23px;"></div><div class="CodeMirror-gutters" style="display: none; height: 23px;"></div></div></div></pre>
        <p><span>数据范围：</span></p>
        <p><span>0&lt;n&lt;100</span></p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>

      </div>
    </body>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* 附加css */
* {
  text-align: left;
}
.root {
  background-color: rgb(226, 226, 226) !important;
  padding: 0px 30px;
}
html {
  overflow-x: initial !important;
}
:root {
  --bg-color: #ffffff;
  --text-color: #333333;
  --select-text-bg-color: #b5d6fc;
  --select-text-font-color: auto;
  --monospace: "Lucida Console", Consolas, "Courier", monospace;
}
html {
  font-size: 14px;
  background-color: var(--bg-color);
  color: var(--text-color);
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}
body {
  background-color: white !important;
  margin: 0px;
  padding: 0px;
  height: auto;
  bottom: 0px;
  top: 0px;
  left: 0px;
  right: 0px;
  font-size: 1rem;
  line-height: 1.42857;
  overflow-x: hidden;
  background: inherit;
  position: relative;
  top: -60px;
  border-radius: 1%;
  tab-size: 4;
}
iframe {
  margin: auto;
}
a.url {
  word-break: break-all;
}
a:active,
a:hover {
  outline: 0px;
}
.in-text-selection,
::selection {
  text-shadow: none;
  background: var(--select-text-bg-color);
  color: var(--select-text-font-color);
}
#write {
  margin: 0px auto;
  height: auto;
  width: inherit;
  word-break: normal;
  overflow-wrap: break-word;
  position: relative;
  white-space: normal;
  overflow-x: visible;
  padding-top: 40px;
}
#write.first-line-indent p {
  text-indent: 2em;
}
#write.first-line-indent li p,
#write.first-line-indent p * {
  text-indent: 0px;
}
#write.first-line-indent li {
  margin-left: 2em;
}
.for-image #write {
  padding-left: 8px;
  padding-right: 8px;
}
body.typora-export {
  padding-left: 30px;
  padding-right: 30px;
}
.typora-export .footnote-line,
.typora-export li,
.typora-export p {
  white-space: pre-wrap;
}
@media screen and (max-width: 500px) {
  body.typora-export {
    padding-left: 0px;
    padding-right: 0px;
  }
  #write {
    padding-left: 20px;
    padding-right: 20px;
  }
  .CodeMirror-sizer {
    margin-left: 0px !important;
  }
  .CodeMirror-gutters {
    display: none !important;
  }
}
#write li > figure:last-child {
  margin-bottom: 0.5rem;
}
#write ol,
#write ul {
  position: relative;
}
img {
  max-width: 100%;
  vertical-align: middle;
  image-orientation: from-image;
}
button,
input,
select,
textarea {
  color: inherit;
  font: inherit;
}
input[type="checkbox"],
input[type="radio"] {
  line-height: normal;
  padding: 0px;
}
*,
::after,
::before {
  box-sizing: border-box;
}
#write h1,
#write h2,
#write h3,
#write h4,
#write h5,
#write h6,
#write p,
#write pre {
  width: inherit;
}
#write h1,
#write h2,
#write h3,
#write h4,
#write h5,
#write h6,
#write p {
  position: relative;
}
p {
  line-height: inherit;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  break-after: avoid-page;
  break-inside: avoid;
  orphans: 4;
}
p {
  orphans: 4;
}
h1 {
  font-size: 2rem;
}
h2 {
  font-size: 1.8rem;
}
h3 {
  font-size: 1.6rem;
}
h4 {
  font-size: 1.4rem;
}
h5 {
  font-size: 1.2rem;
}
h6 {
  font-size: 1rem;
}
.md-math-block,
.md-rawblock,
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.hidden {
  display: none;
}
.md-blockmeta {
  color: rgb(204, 204, 204);
  font-weight: 700;
  font-style: italic;
}
a {
  cursor: pointer;
}
sup.md-footnote {
  padding: 2px 4px;
  background-color: rgba(238, 238, 238, 0.7);
  color: rgb(85, 85, 85);
  border-radius: 4px;
  cursor: pointer;
}
sup.md-footnote a,
sup.md-footnote a:hover {
  color: inherit;
  text-transform: inherit;
  text-decoration: inherit;
}
#write input[type="checkbox"] {
  cursor: pointer;
  width: inherit;
  height: inherit;
}
figure {
  overflow-x: auto;
  margin: 1.2em 0px;
  max-width: calc(100% + 16px);
  padding: 0px;
}
figure > table {
  margin: 0px;
}
tr {
  break-inside: avoid;
  break-after: auto;
}
thead {
  display: table-header-group;
}
table {
  border-collapse: collapse;
  border-spacing: 0px;
  width: 100%;
  overflow: auto;
  break-inside: auto;
  text-align: left;
}
table.md-table td {
  min-width: 32px;
}
.CodeMirror-gutters {
  border-right: 0px;
  background-color: inherit;
}
.CodeMirror-linenumber {
  user-select: none;
}
.CodeMirror {
  text-align: left;
}
.CodeMirror-placeholder {
  opacity: 0.3;
}
.CodeMirror pre {
  padding: 0px 4px;
}
.CodeMirror-lines {
  padding: 0px;
}
div.hr:focus {
  cursor: none;
}
#write pre {
  white-space: pre-wrap;
}
#write.fences-no-line-wrapping pre {
  white-space: pre;
}
#write pre.ty-contain-cm {
  white-space: normal;
}
.CodeMirror-gutters {
  margin-right: 4px;
}
.md-fences {
  font-size: 0.9rem;
  display: block;
  break-inside: avoid;
  text-align: left;
  overflow: visible;
  white-space: pre;
  background: inherit;
  position: relative !important;
}
.md-diagram-panel {
  width: 100%;
  margin-top: 10px;
  text-align: center;
  padding-top: 0px;
  padding-bottom: 8px;
  overflow-x: auto;
}
#write .md-fences.mock-cm {
  white-space: pre-wrap;
}
.md-fences.md-fences-with-lineno {
  padding-left: 0px;
}
#write.fences-no-line-wrapping .md-fences.mock-cm {
  white-space: pre;
  overflow-x: auto;
}
.md-fences.mock-cm.md-fences-with-lineno {
  padding-left: 8px;
}
.CodeMirror-line,
twitterwidget {
  break-inside: avoid;
}
.footnotes {
  opacity: 0.8;
  font-size: 0.9rem;
  margin-top: 1em;
  margin-bottom: 1em;
}
.footnotes + .footnotes {
  margin-top: 0px;
}
.md-reset {
  margin: 0px;
  padding: 0px;
  border: 0px;
  outline: 0px;
  vertical-align: top;
  background: 0px 0px;
  text-decoration: none;
  text-shadow: none;
  float: none;
  position: static;
  width: auto;
  height: auto;
  white-space: nowrap;
  cursor: inherit;
  -webkit-tap-highlight-color: transparent;
  line-height: normal;
  font-weight: 400;
  text-align: left;
  box-sizing: content-box;
  direction: ltr;
}
li div {
  padding-top: 0px;
}
blockquote {
  margin: 1rem 0px;
}
li .mathjax-block,
li p {
  margin: 0.5rem 0px;
}
li {
  margin: 0px;
  position: relative;
}
blockquote > :last-child {
  margin-bottom: 0px;
}
blockquote > :first-child,
li > :first-child {
  margin-top: 0px;
}
.footnotes-area {
  color: rgb(136, 136, 136);
  margin-top: 0.714rem;
  padding-bottom: 0.143rem;
  white-space: normal;
}
#write .footnote-line {
  white-space: pre-wrap;
}
@media print {
  body,
  html {
    border: 1px solid transparent;
    height: 99%;
    break-after: avoid;
    break-before: avoid;
    font-variant-ligatures: no-common-ligatures;
  }
  #write {
    margin-top: 0px;
    padding-top: 0px;
    border-color: transparent !important;
  }
  .typora-export * {
    -webkit-print-color-adjust: exact;
  }
  html.blink-to-pdf {
    font-size: 13px;
  }
  .typora-export #write {
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 0px;
    break-after: avoid;
  }
  .typora-export #write::after {
    height: 0px;
  }
  .is-mac table {
    break-inside: avoid;
  }
}
.footnote-line {
  margin-top: 0.714em;
  font-size: 0.7em;
}
a img,
img a {
  cursor: pointer;
}
pre.md-meta-block {
  font-size: 0.8rem;
  min-height: 0.8rem;
  white-space: pre-wrap;
  background: rgb(204, 204, 204);
  display: block;
  overflow-x: hidden;
}
p > .md-image:only-child:not(.md-img-error) img,
p > img:only-child {
  display: block;
  margin: auto;
}
#write.first-line-indent p > .md-image:only-child:not(.md-img-error) img {
  left: -2em;
  position: relative;
}
p > .md-image:only-child {
  display: inline-block;
  width: 100%;
}
#write .MathJax_Display {
  margin: 0.8em 0px 0px;
}
.md-math-block {
  width: 100%;
}
.md-math-block:not(:empty)::after {
  display: none;
}
[contenteditable="true"]:active,
[contenteditable="true"]:focus,
[contenteditable="false"]:active,
[contenteditable="false"]:focus {
  outline: 0px;
  box-shadow: none;
}
.md-task-list-item {
  position: relative;
  list-style-type: none;
}
.task-list-item.md-task-list-item {
  padding-left: 0px;
}
.md-task-list-item > input {
  position: absolute;
  top: 0px;
  left: 0px;
  margin-left: -1.2em;
  margin-top: calc(1em - 10px);
  border: none;
}
.math {
  font-size: 1rem;
}
.md-toc {
  min-height: 3.58rem;
  position: relative;
  font-size: 0.9rem;
  border-radius: 10px;
}
.md-toc-content {
  position: relative;
  margin-left: 0px;
}
.md-toc-content::after,
.md-toc::after {
  display: none;
}
.md-toc-item {
  display: block;
  color: rgb(65, 131, 196);
}
.md-toc-item a {
  text-decoration: none;
}
.md-toc-inner:hover {
  text-decoration: underline;
}
.md-toc-inner {
  display: inline-block;
  cursor: pointer;
}
.md-toc-h1 .md-toc-inner {
  margin-left: 0px;
  font-weight: 700;
}
.md-toc-h2 .md-toc-inner {
  margin-left: 2em;
}
.md-toc-h3 .md-toc-inner {
  margin-left: 4em;
}
.md-toc-h4 .md-toc-inner {
  margin-left: 6em;
}
.md-toc-h5 .md-toc-inner {
  margin-left: 8em;
}
.md-toc-h6 .md-toc-inner {
  margin-left: 10em;
}
@media screen and (max-width: 48em) {
  .md-toc-h3 .md-toc-inner {
    margin-left: 3.5em;
  }
  .md-toc-h4 .md-toc-inner {
    margin-left: 5em;
  }
  .md-toc-h5 .md-toc-inner {
    margin-left: 6.5em;
  }
  .md-toc-h6 .md-toc-inner {
    margin-left: 8em;
  }
}
a.md-toc-inner {
  font-size: inherit;
  font-style: inherit;
  font-weight: inherit;
  line-height: inherit;
}
.footnote-line a:not(.reversefootnote) {
  color: inherit;
}
.md-attr {
  display: none;
}
.md-fn-count::after {
  content: ".";
}
code,
pre,
samp,
tt {
  font-family: var(--monospace);
}
kbd {
  margin: 0px 0.1em;
  padding: 0.1em 0.6em;
  font-size: 0.8em;
  color: rgb(36, 39, 41);
  background: rgb(255, 255, 255);
  border: 1px solid rgb(173, 179, 185);
  border-radius: 3px;
  box-shadow: rgba(12, 13, 14, 0.2) 0px 1px 0px,
    rgb(255, 255, 255) 0px 0px 0px 2px inset;
  white-space: nowrap;
  vertical-align: middle;
}
.md-comment {
  color: rgb(162, 127, 3);
  opacity: 0.8;
  font-family: var(--monospace);
}
code {
  text-align: left;
  vertical-align: initial;
}
a.md-print-anchor {
  white-space: pre !important;
  border-width: initial !important;
  border-style: none !important;
  border-color: initial !important;
  display: inline-block !important;
  position: absolute !important;
  width: 1px !important;
  right: 0px !important;
  outline: 0px !important;
  background: 0px 0px !important;
  text-decoration: initial !important;
  text-shadow: initial !important;
}
.md-inline-math .MathJax_SVG .noError {
  display: none !important;
}
.html-for-mac .inline-math-svg .MathJax_SVG {
  vertical-align: 0.2px;
}
.md-math-block .MathJax_SVG_Display {
  text-align: center;
  margin: 0px;
  position: relative;
  text-indent: 0px;
  max-width: none;
  max-height: none;
  min-height: 0px;
  min-width: 100%;
  width: auto;
  overflow-y: hidden;
  display: block !important;
}
.MathJax_SVG_Display,
.md-inline-math .MathJax_SVG_Display {
  width: auto;
  margin: inherit;
  display: inline-block !important;
}
.MathJax_SVG .MJX-monospace {
  font-family: var(--monospace);
}
.MathJax_SVG .MJX-sans-serif {
  font-family: sans-serif;
}
.MathJax_SVG {
  display: inline;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  zoom: 90%;
  text-indent: 0px;
  text-align: left;
  text-transform: none;
  letter-spacing: normal;
  word-spacing: normal;
  overflow-wrap: normal;
  white-space: nowrap;
  float: none;
  direction: ltr;
  max-width: none;
  max-height: none;
  min-width: 0px;
  min-height: 0px;
  border: 0px;
  padding: 0px;
  margin: 0px;
}
.MathJax_SVG * {
  transition: none 0s ease 0s;
}
.MathJax_SVG_Display svg {
  vertical-align: middle !important;
  margin-bottom: 0px !important;
  margin-top: 0px !important;
}
.os-windows.monocolor-emoji .md-emoji {
  font-family: "Segoe UI Symbol", sans-serif;
}
.md-diagram-panel > svg {
  max-width: 100%;
}
[lang="flow"] svg,
[lang="mermaid"] svg {
  max-width: 100%;
  height: auto;
}
[lang="mermaid"] .node text {
  font-size: 1rem;
}
table tr th {
  border-bottom: 0px;
}
video {
  max-width: 100%;
  display: block;
  margin: 0px auto;
}
iframe {
  max-width: 100%;
  width: 100%;
  border: none;
}
.highlight td,
.highlight tr {
  border: 0px;
}
svg[id^="mermaidChart"] {
  line-height: 1em;
}
mark {
  background: rgb(255, 255, 0);
  color: rgb(0, 0, 0);
}
.md-html-inline .md-plain,
.md-html-inline strong,
mark .md-inline-math,
mark strong {
  color: inherit;
}
mark .md-meta {
  color: rgb(0, 0, 0);
  opacity: 0.3 !important;
}

.CodeMirror {
  height: auto;
}
.CodeMirror.cm-s-inner {
  background: inherit;
}
.CodeMirror-scroll {
  overflow: auto hidden;
  z-index: 3;
}
.CodeMirror-gutter-filler,
.CodeMirror-scrollbar-filler {
  background-color: rgb(255, 255, 255);
}
.CodeMirror-gutters {
  border-right: 1px solid rgb(221, 221, 221);
  background: inherit;
  white-space: nowrap;
}
.CodeMirror-linenumber {
  padding: 0px 3px 0px 5px;
  text-align: right;
  color: rgb(153, 153, 153);
}
.cm-s-inner .cm-keyword {
  color: rgb(119, 0, 136);
}
.cm-s-inner .cm-atom,
.cm-s-inner.cm-atom {
  color: rgb(34, 17, 153);
}
.cm-s-inner .cm-number {
  color: rgb(17, 102, 68);
}
.cm-s-inner .cm-def {
  color: rgb(0, 0, 255);
}
.cm-s-inner .cm-variable {
  color: rgb(0, 0, 0);
}
.cm-s-inner .cm-variable-2 {
  color: rgb(0, 85, 170);
}
.cm-s-inner .cm-variable-3 {
  color: rgb(0, 136, 85);
}
.cm-s-inner .cm-string {
  color: rgb(170, 17, 17);
}
.cm-s-inner .cm-property {
  color: rgb(0, 0, 0);
}
.cm-s-inner .cm-operator {
  color: rgb(152, 26, 26);
}
.cm-s-inner .cm-comment,
.cm-s-inner.cm-comment {
  color: rgb(170, 85, 0);
}
.cm-s-inner .cm-string-2 {
  color: rgb(255, 85, 0);
}
.cm-s-inner .cm-meta {
  color: rgb(85, 85, 85);
}
.cm-s-inner .cm-qualifier {
  color: rgb(85, 85, 85);
}
.cm-s-inner .cm-builtin {
  color: rgb(51, 0, 170);
}
.cm-s-inner .cm-bracket {
  color: rgb(153, 153, 119);
}
.cm-s-inner .cm-tag {
  color: rgb(17, 119, 0);
}
.cm-s-inner .cm-attribute {
  color: rgb(0, 0, 204);
}
.cm-s-inner .cm-header,
.cm-s-inner.cm-header {
  color: rgb(0, 0, 255);
}
.cm-s-inner .cm-quote,
.cm-s-inner.cm-quote {
  color: rgb(0, 153, 0);
}
.cm-s-inner .cm-hr,
.cm-s-inner.cm-hr {
  color: rgb(153, 153, 153);
}
.cm-s-inner .cm-link,
.cm-s-inner.cm-link {
  color: rgb(0, 0, 204);
}
.cm-negative {
  color: rgb(221, 68, 68);
}
.cm-positive {
  color: rgb(34, 153, 34);
}
.cm-header,
.cm-strong {
  font-weight: 700;
}
.cm-del {
  text-decoration: line-through;
}
.cm-em {
  font-style: italic;
}
.cm-link {
  text-decoration: underline;
}
.cm-error {
  color: red;
}
.cm-invalidchar {
  color: red;
}
.cm-constant {
  color: rgb(38, 139, 210);
}
.cm-defined {
  color: rgb(181, 137, 0);
}
div.CodeMirror span.CodeMirror-matchingbracket {
  color: rgb(0, 255, 0);
}
div.CodeMirror span.CodeMirror-nonmatchingbracket {
  color: rgb(255, 34, 34);
}
.cm-s-inner .CodeMirror-activeline-background {
  background: inherit;
}
.CodeMirror {
  position: relative;
  overflow: hidden;
}
.CodeMirror-scroll {
  height: 100%;
  outline: 0px;
  position: relative;
  box-sizing: content-box;
  background: inherit;
}
.CodeMirror-sizer {
  position: relative;
}
.CodeMirror-gutter-filler,
.CodeMirror-hscrollbar,
.CodeMirror-scrollbar-filler,
.CodeMirror-vscrollbar {
  position: absolute;
  z-index: 6;
  display: none;
}
.CodeMirror-vscrollbar {
  right: 0px;
  top: 0px;
  overflow: hidden;
}
.CodeMirror-hscrollbar {
  bottom: 0px;
  left: 0px;
  overflow: hidden;
}
.CodeMirror-scrollbar-filler {
  right: 0px;
  bottom: 0px;
}
.CodeMirror-gutter-filler {
  left: 0px;
  bottom: 0px;
}
.CodeMirror-gutters {
  position: absolute;
  left: 0px;
  top: 0px;
  padding-bottom: 30px;
  z-index: 3;
}
.CodeMirror-gutter {
  white-space: normal;
  height: 100%;
  box-sizing: content-box;
  padding-bottom: 30px;
  margin-bottom: -32px;
  display: inline-block;
}
.CodeMirror-gutter-wrapper {
  position: absolute;
  z-index: 4;
  background: 0px 0px !important;
  border: none !important;
}
.CodeMirror-gutter-background {
  position: absolute;
  top: 0px;
  bottom: 0px;
  z-index: 4;
}
.CodeMirror-gutter-elt {
  position: absolute;
  cursor: default;
  z-index: 4;
}
.CodeMirror-lines {
  cursor: text;
}
.CodeMirror pre {
  border-radius: 0px;
  border-width: 0px;
  background: 0px 0px;
  font-family: inherit;
  font-size: inherit;
  margin: 0px;
  white-space: pre;
  overflow-wrap: normal;
  color: inherit;
  z-index: 2;
  position: relative;
  overflow: visible;
}
.CodeMirror-wrap pre {
  overflow-wrap: break-word;
  white-space: pre-wrap;
  word-break: normal;
}
.CodeMirror-code pre {
  border-right: 30px solid transparent;
  width: fit-content;
}
.CodeMirror-wrap .CodeMirror-code pre {
  border-right: none;
  width: auto;
}
.CodeMirror-linebackground {
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  z-index: 0;
}
.CodeMirror-linewidget {
  position: relative;
  z-index: 2;
  overflow: auto;
}
.CodeMirror-wrap .CodeMirror-scroll {
  overflow-x: hidden;
}
.CodeMirror-measure {
  position: absolute;
  width: 100%;
  height: 0px;
  overflow: hidden;
  visibility: hidden;
}
.CodeMirror-measure pre {
  position: static;
}
.CodeMirror div.CodeMirror-cursor {
  position: absolute;
  visibility: hidden;
  border-right: none;
  width: 0px;
}
.CodeMirror div.CodeMirror-cursor {
  visibility: hidden;
}
.CodeMirror-focused div.CodeMirror-cursor {
  visibility: inherit;
}
.cm-searching {
  background: rgba(255, 255, 0, 0.4);
}
@media print {
  .CodeMirror div.CodeMirror-cursor {
    visibility: hidden;
  }
}

:root {
  --side-bar-bg-color: #fafafa;
  --control-text-color: #777;
}

/* @include-when-export url(https://fonts.loli.net/css?family=Open+Sans:400italic,700italic,700,400&subset=latin,latin-ext); */

/* open-sans-regular - latin-ext_latin */
/* open-sans-italic - latin-ext_latin */
/* open-sans-700 - latin-ext_latin */
/* open-sans-700italic - latin-ext_latin */
html {
  font-size: 16px;
}

body {
  font-family: "Open Sans", "Clear Sans", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  color: rgb(51, 51, 51);
  line-height: 1.6;
}

#write {
  max-width: 860px;
  margin: 0 auto;
  padding: 30px;
  padding-bottom: 100px;
}

@media only screen and (min-width: 1400px) {
  #write {
    max-width: 1024px;
  }
}

@media only screen and (min-width: 1800px) {
  #write {
    max-width: 1200px;
  }
}

#write > ul:first-child,
#write > ol:first-child {
  margin-top: 30px;
}

a {
  color: #4183c4;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  position: relative;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-weight: bold;
  line-height: 1.4;
  cursor: text;
}
h1:hover a.anchor,
h2:hover a.anchor,
h3:hover a.anchor,
h4:hover a.anchor,
h5:hover a.anchor,
h6:hover a.anchor {
  text-decoration: none;
}
h1 tt,
h1 code {
  font-size: inherit;
}
h2 tt,
h2 code {
  font-size: inherit;
}
h3 tt,
h3 code {
  font-size: inherit;
}
h4 tt,
h4 code {
  font-size: inherit;
}
h5 tt,
h5 code {
  font-size: inherit;
}
h6 tt,
h6 code {
  font-size: inherit;
}
h1 {
  padding-bottom: 0.3em;
  font-size: 2.25em;
  line-height: 1.2;
  border-bottom: 1px solid #eee;
}
h2 {
  padding-bottom: 0.3em;
  font-size: 1.75em;
  line-height: 1.225;
  border-bottom: 1px solid #eee;
}
h3 {
  font-size: 1.5em;
  line-height: 1.43;
}
h4 {
  font-size: 1.25em;
}
h5 {
  font-size: 1em;
}
h6 {
  font-size: 1em;
  color: #777;
}
p,
blockquote,
ul,
ol,
dl,
table {
  margin: 0.8em 0;
}
li > ol,
li > ul {
  margin: 0 0;
}
hr {
  height: 2px;
  padding: 0;
  margin: 16px 0;
  background-color: #e7e7e7;
  border: 0 none;
  overflow: hidden;
  box-sizing: content-box;
}

li p.first {
  display: inline-block;
}
ul,
ol {
  padding-left: 30px;
}
ul:first-child,
ol:first-child {
  margin-top: 0;
}
ul:last-child,
ol:last-child {
  margin-bottom: 0;
}
blockquote {
  border-left: 4px solid #dfe2e5;
  padding: 0 15px;
  color: #777777;
}
blockquote blockquote {
  padding-right: 0;
}
table {
  padding: 0;
  word-break: initial;
}
table tr {
  border-top: 1px solid #dfe2e5;
  margin: 0;
  padding: 0;
}
table tr:nth-child(2n),
thead {
  background-color: #f8f8f8;
}
table tr th {
  font-weight: bold;
  border: 1px solid #dfe2e5;
  border-bottom: 0;
  margin: 0;
  padding: 6px 13px;
}
table tr td {
  border: 1px solid #dfe2e5;
  margin: 0;
  padding: 6px 13px;
}
table tr th:first-child,
table tr td:first-child {
  margin-top: 0;
}
table tr th:last-child,
table tr td:last-child {
  margin-bottom: 0;
}

.CodeMirror-lines {
  padding-left: 4px;
}

.code-tooltip {
  box-shadow: 0 1px 1px 0 rgba(0, 28, 36, 0.3);
  border-top: 1px solid #eef2f2;
}

.md-fences,
code,
tt {
  border: 1px solid #e7eaed;
  background-color: #f8f8f8;
  border-radius: 3px;
  padding: 0;
  padding: 2px 4px 0px 4px;
  font-size: 0.9em;
}

code {
  background-color: #f3f4f4;
  padding: 0 2px 0 2px;
}

.md-fences {
  margin-bottom: 15px;
  margin-top: 15px;
  padding-top: 8px;
  padding-bottom: 6px;
}

.md-task-list-item > input {
  margin-left: -1.3em;
}

@media print {
  html {
    font-size: 13px;
  }
  table,
  pre {
    page-break-inside: avoid;
  }
  pre {
    word-wrap: break-word;
  }
}

.md-fences {
  background-color: #f8f8f8;
}
#write pre.md-meta-block {
  padding: 1rem;
  font-size: 85%;
  line-height: 1.45;
  background-color: #f7f7f7;
  border: 0;
  border-radius: 3px;
  color: #777777;
  margin-top: 0 !important;
}

.mathjax-block > .code-tooltip {
  bottom: 0.375rem;
}

.md-mathjax-midline {
  background: #fafafa;
}

#write > h3.md-focus:before {
  left: -1.5625rem;
  top: 0.375rem;
}
#write > h4.md-focus:before {
  left: -1.5625rem;
  top: 0.285714286rem;
}
#write > h5.md-focus:before {
  left: -1.5625rem;
  top: 0.285714286rem;
}
#write > h6.md-focus:before {
  left: -1.5625rem;
  top: 0.285714286rem;
}
.md-image > .md-meta {
  /*border: 1px solid #ddd;*/
  border-radius: 3px;
  padding: 2px 0px 0px 4px;
  font-size: 0.9em;
  color: inherit;
}

.md-tag {
  color: #a7a7a7;
  opacity: 1;
}

.md-toc {
  margin-top: 20px;
  padding-bottom: 20px;
}

.sidebar-tabs {
  border-bottom: none;
}

#typora-quick-open {
  border: 1px solid #ddd;
  background-color: #f8f8f8;
}

#typora-quick-open-item {
  background-color: #fafafa;
  border-color: #fefefe #e5e5e5 #e5e5e5 #eee;
  border-style: solid;
  border-width: 1px;
}

/** focus mode */
.on-focus-mode blockquote {
  border-left-color: rgba(85, 85, 85, 0.12);
}

header,
.context-menu,
.megamenu-content,
footer {
  font-family: "Segoe UI", "Arial", sans-serif;
}

.file-node-content:hover .file-node-icon,
.file-node-content:hover .file-node-open-state {
  visibility: visible;
}

.mac-seamless-mode #typora-sidebar {
  background-color: #fafafa;
  background-color: var(--side-bar-bg-color);
}

.md-lang {
  color: #b4654d;
}

.html-for-mac .context-menu {
  --item-hover-bg-color: #e6f0fe;
}

#md-notification .btn {
  border: 0;
}

.dropdown-menu .divider {
  border-color: #e5e5e5;
}

.ty-preferences .window-content {
  background-color: #fafafa;
}

.ty-preferences .nav-group-item.active {
  color: white;
  background: #999;
}
</style>