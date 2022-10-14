<template>
  <div class="animate__animated animate__fadeIn root">
    <body class="typora-export os-windows">
      <div id="write" class="">
        <h4>
          <a name="part3理解协议并和服务端通信" class="md-header-anchor"></a
          ><span>part3:理解协议，并和服务端通信</span>
        </h4>
        <h5>
          <a name="本题要求你手撸一个数据包" class="md-header-anchor"></a
          ><span>本题要求你手撸一个数据包</span>
        </h5>
        <blockquote>
          <p>
            <span
              >既然我们和服务端是通过数据包交流的，也就是我们想说的内容都是被封装到数据包里的，我们可以通过程序，工具(工具本质也是一个程序)，浏览器(实际上浏览器内核也是一个程序)对数据进行封装。只要封装后的数据包满足协议的要求，就可以被服务端解析</span
            >
          </p>
          <p><span>别害怕。假设现在有一个自定义的协议。他的规范为</span></p>
          <pre
            spellcheck="false"
            class="md-fences md-end-block ty-contain-cm modeLoaded"
            lang=""
          ><div class="CodeMirror cm-s-inner CodeMirror-wrap" lang=""><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 0px; left: 8px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation" style=""><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">$n (n为一个1~9的数字)</span></pre></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">*a后面跟着a个字符</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">*b后面跟着b个字符</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">*c后面跟着c个字符</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">...</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">其中，*的数量为n个。</span></pre></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 136px;"></div><div class="CodeMirror-gutters" style="display: none; height: 136px;"></div></div></div></pre>
          <p>
            <a href="http://116.205.165.101:8080/question1/goto3"
              ><span>第三题！</span></a
            >
          </p>
          <p>
            <span
              >你需要在这个页面对你要输入的数据进行手动封装，要求是服务器可以解析你所手动封装的字符串。</span
            >
          </p>
          <p><span>举个例子</span></p>
          <pre
            spellcheck="false"
            class="md-fences md-end-block ty-contain-cm modeLoaded"
            lang=""
          ><div class="CodeMirror cm-s-inner CodeMirror-wrap" lang=""><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 0px; left: 8px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation"><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">$4*11年仅三岁的国王毫无畏惧*9大家好啊，我是电棍*10这把得拿下啊，看我的*8走位，走位，走位</span></pre></div></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 23px;"></div><div class="CodeMirror-gutters" style="display: none; height: 23px;"></div></div></div></pre>
          <p>
            <span
              >当你把这段话放到输入框并发送到服务器时，服务器会根据我们协议的格式对其进行拆包。</span
            >
          </p>
          <p>
            <span>首先服务器发现$4 意味着你接下来要给服务器发送4行文字。</span>
          </p>
          <p>
            <span>第一行</span><code>*11年仅三岁的国王毫无畏惧</code
            ><span>
              表示第一行文字由
              &quot;年仅三岁的国王毫无畏惧&quot;这11个字符组成</span
            >
          </p>
          <p>
            <span>第二行</span><code>*9大家好啊，我是电棍</code
            ><span>
              表示第二行文字由&quot;大家好啊，我是电棍&quot;这9个字符组成</span
            >
          </p>
          <p><span>以此类推。</span></p>
        </blockquote>
        <h5>
          <a
            name="你需要使用协议自己封装出几行你想说的话写出你封装的数据包并把服务器展示的页面进行截图"
            class="md-header-anchor"
          ></a
          ><span
            >你需要使用协议，自己封装出几行你想说的话，写出你封装的数据包，并把服务器展示的页面进行截图。</span
          >
        </h5>
        <ul>
          <li>
            <span
              >如果输入的协议不符合规范，会导致报告错误的信息或者直接显示错误的结果。</span
            >
          </li>
        </ul>
        <h5>
          <a name="拓展qq机器人的原理" class="md-header-anchor"></a
          ><span>拓展：qq机器人的原理</span>
        </h5>
        <p>
          <span
            >我们发现，只要有一个客户端，可以按照协议的格式，封装数据包，这个数据包就可以被服务器识别，用于真正的通讯上。</span
          >
        </p>
        <p>
          <span
            >所以，一般情况下服务器发现合法的数据包就会处理，而不在乎发数据包的是谁。如果发数据包的是一个程序呢？这就是qq机器人的原理、qq机器人会根据qq的OICQ协议封装数据包，发送给服务器。</span
          >
        </p>
        <p>
          <span
            >至于qq机器人的作者们是如何了解OICQ协议的。应该是真的C语言大佬把qq给逆向了，看到了qq发送数据的一些代码，掌握了qq客户端是如何封装数据包的。</span
          >
        </p>
        <h4>
          <a name="part4协议有哪些不足可以改正" class="md-header-anchor"></a
          ><span>part4:协议有哪些不足，可以改正</span>
        </h4>
        <blockquote>
          <p>
            <span
              >基于part3，我们定义了一个简单的协议，并要求你手动完成封装。那我们这个协议有什么不足呢？</span
            >
          </p>
        </blockquote>
        <h5>
          <a name="本题要求你-n73" class="md-header-anchor"></a
          ><span>本题要求你</span>
        </h5>
        <ul>
          <li>
            <span>我们在封装数据的时候，加入了大量控制字符，比如</span
            ><code>$</code><span>用于指示这个数据一共有多少段，</span
            ><code>*</code
            ><span
              >表示每有多少字符。这些控制符号是必要的吗，如果必要，请你说明可以应用于什么场景下。我们直接把要发送的数据一股脑发过去不好吗</span
            >
          </li>
          <li>
            <span
              >如果你的数据本身就由数字开头，或者含有$或者*这些符号，服务器会正确解析吗。</span
            >
          </li>
        </ul>
        <p><span>提示</span></p>
        <ul>
          <li>
            <span
              >这道题服务器解析数据包，对于空白字符采取的方法时直接舍弃。</span
            >
          </li>
          <li>
            <span
              >在数据包的传输过程中，往往有MTU这个概念，也就是一个数据包最多可以携带多少数据。你可以根据这个角度看看控制长度的控制符号的必要性</span
            >
          </li>
          <li>
            <span
              >我们这个协议其实就是阉割版的redis的协议的一个指令的包装方式。</span
            >
          </li>
        </ul>
        <p>
          <img
            src="../assets/image-20221014141557257.png"
            referrerpolicy="no-referrer"
            alt="image-20221014141557257"
          />
        </p>
        <blockquote>
          <p>
            <span
              >你可以看下，redis的设计里，是怎么把控制字段和数据分离开的吗。</span
            >
          </p>
        </blockquote>
        <h5>
          <a
            name="这道题只需要说明下自己的理解尽力而为就可以"
            class="md-header-anchor"
          ></a
          ><span>这道题只需要说明下自己的理解，尽力而为就可以。</span>
        </h5>
        <h4>
          <a name="part5伪造协议并用于攻击" class="md-header-anchor"></a
          ><span>part5:&quot;伪造协议并用于攻击&quot;</span>
        </h4>
        <blockquote>
          <p>
            <span
              >还是基于协议数据包可以自行构造这个特性，能自行构造就意味着可以伪造，很多常见的网络攻击就是基于伪造数据包发生的。</span
            >
          </p>
          <p>
            <span
              >只要我发送的数据包符合协议，就会被服务器解析。如果我们把一些垃圾代码放入到了数据包里，会发生什么呢？</span
            >
          </p>
        </blockquote>
        <p>
          <code>&lt;script&gt;alert(&quot;xxxx&quot;);&lt;/script&gt;</code
          ><span>
            这段代码会被浏览器内核解析，并执行。执行结果就是在窗口上弹一个框。</span
          >
        </p>
        <p>
          <span
            >这种把js代码直接提交上去，而服务器又没有经过过滤，导致如果有人点了携带js代码的url。或者点击了攻击者构造的页面(提交时会携带POST表单数据发送到服务器)，就是xss攻击。</span
          >
        </p>
        <h5>
          <a name="你的任务是-n97" class="md-header-anchor"></a
          ><span>你的任务是</span>
        </h5>
        <p>
          <span
            >还是基于第三题，尝试通过第三题的协议规范，把这段代码进行封装，然后交给服务器执行，弹框的内容随意。你需要把触发了弹窗的代码以及弹窗的页面截图提交。</span
          >
        </p>
        <h4>
          <a name="附加题ip地址的四种变化" class="md-header-anchor"></a
          ><span>附加题：ip地址的四种变化</span>
        </h4>
        <p><span>茴香豆有几种写法</span></p>
        <h5>
          <a name="变化一" class="md-header-anchor"></a><span>变化一</span>
        </h5>
        <p><span>打开命令行，输入ipconfig可以查看你当前的ip地址。</span></p>
        <p>
          <span
            >你可以把打开后，并执行指令的页面截图，并指出你的ip地址，子网掩码，默认网关都是什么</span
          >
        </p>
        <h5>
          <a name="变化二" class="md-header-anchor"></a><span>变化二</span>
        </h5>
        <p>
          <span
            >如果你寝室有路由器，查看ipconfig，看看你的ip地址是什么。然后访问问题1的页面，看看ipconfig显示的地址和服务器端显示的ip地址是不是一样的，如果不是，为什么？</span
          >
        </p>
        <p>
          <span
            >如果寝室没有路由器，可以连接校园网的UESTC-WIFI-GUEST这个wifi。重复上面的步骤</span
          >
        </p>
        <ul>
          <li><span>提示，自行学习NAT,并谈谈你的理解</span></li>
        </ul>
        <h5>
          <a name="变化三" class="md-header-anchor"></a><span>变化三</span>
        </h5>
        <pre
          spellcheck="false"
          class="md-fences md-end-block ty-contain-cm modeLoaded"
          lang=""
        ><div class="CodeMirror cm-s-inner CodeMirror-wrap" lang=""><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 0px; left: 8px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation"><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">ipconfig /release</span></pre></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">ipconfig /renew</span></pre></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 45px;"></div><div class="CodeMirror-gutters" style="display: none; height: 45px;"></div></div></div></pre>
        <p>
          <span
            >连接校园网，在运行上面两个指令前访问一下问题1的页面，运行后再访问一下问题1的页面，看看ip地址有没有发生变化</span
          >
        </p>
        <ul>
          <li><span>提示，自行学习DHCP 并谈谈你的理解</span></li>
        </ul>
        <h5>
          <a name="变化四" class="md-header-anchor"></a><span>变化四</span>
        </h5>
        <p><span>这个前提有点难搞。要求你有一个http代理。</span></p>
        <p>
          <span
            >如果你有加速器，或者vpn，或者单纯的http代理，可以在连接代理的前提下，访问问题1的页面，看看你本机ip和服务器显示的ip是不是同一个</span
          >
        </p>
        <ul>
          <li>
            <span
              >提示，有可能ip不变，这个原因可能是你的代理不是全局代理，也就是如果选择了绕过某些ip，数据包是会直接绕过代理的，校园网的那个vpn就是只对访问校园网资源进行代理</span
            >
          </li>
          <li>
            <span>学习一下关于网络代理的知识，说说使用代理能带来什么好处</span>
          </li>
        </ul>
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
  border-radius: 3%;
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