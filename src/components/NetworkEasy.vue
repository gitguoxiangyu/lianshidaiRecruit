<template>
  <div class="animate__animated animate__fadeIn root">
    <body class="typora-export os-windows">
      <div id="write" class="">
        <h5>
          <a name="网络协议初探" class="md-header-anchor"></a
          ><span>网络协议初探</span>
        </h5>
        <p>
          <span
            >有了互联网，
            我们可以随意的在网上冲浪。我们显示上两个人在qq聊天，其实是我们的端系统（手机，PC端）把我们要输入的内容（可能是一个文字，一张图片，甚至一个红包），用一定的手段进行封装，然后发送到服务器（虽然表面上看上去，你的私聊好像是直接和人建立了一个连接通道，实际上，需要经过服务器）。服务器那边自然有进行解封装的工具。</span
          >
        </p>
        <p>
          <span>所以，</span
          ><strong
            ><span
              >只要我们按照服务器制定的规范发送一个数据，这个数据就会被服务器识别</span
            ></strong
          ><span>。</span>
        </p>
        <p>
          <span
            >那么这个规范是什么呢？其实就是网络协议。网络协议就像是一门语言。指定了
            客户端Client和服务端Server进行通信的一套规则。当然网络协议现在还在不断的完善甚至升级，本题旨在用一种和现实语言类比的方式，带你了解一下网络协议。</span
          >
        </p>
        <p>&nbsp;</p>
        <h4>
          <a name="part1http入门" class="md-header-anchor"></a
          ><span>part1:http入门</span>
        </h4>
        <p>
          <a href="http://116.205.165.101:8080/question1/1"
            ><span>问题1</span></a
          >
        </p>
        <p>
          <span
            >上面这个链接，你肯定再熟悉不过了。但是你了解过这个东西每一部分都代表什么含义吗</span
          >
        </p>
        <h5>
          <a name="本题要求你" class="md-header-anchor"></a
          ><span>本题要求你</span>
        </h5>
        <ol start="">
          <li>
            <span
              >自行查阅url的相关知识，知道一个url的大概构成。以及我们的主机，如何定位到目标资源的</span
            >
          </li>
          <li>
            <span
              >我们可以用一个三元组描述全局唯一的一个资源，(ip地址，端口号，资源路径)。能说说在url里，这三元组都体现在什么地方吗。</span
            >
          </li>
        </ol>
        <p>
          <span
            >因此，有了url就可以访问到全局唯一的资源，在本题中，你所访问到的资源，就是一个简单的html页面。</span
          >
        </p>
        <h4>
          <a name="part2http客户端" class="md-header-anchor"></a
          ><span>part2:http客户端</span>
        </h4>
        <p>
          <span
            >我们的信息如何传递给服务器呢？假如我在qq里发了一句话叫&quot;hello,world!&quot;,想发给远在另一方的小明。我们知道，想实现这个功能，必须先把信息发送给服务器，然后由服务器转发给小明。</span
          >
        </p>
        <p>
          <span
            >在这里，我们充当的角色就是一个客户端。那么我们想把数据发给小明，总不能去腾讯服务器下面大喊&quot;请把&#39;hello,world!&#39;发送给小明&quot;吧。因此协议的重要性就体现出来了，我们在和小明私聊时，当在文本框输入&quot;hello,world!&quot;，并按下发送时，qq客户端会自动帮我们把数据按照协议的格式进行封装。需要封装的内容肯定不止我们输入的内容，</span
          ><strong
            ><span
              >会把协议需要的控制信息，以及要发送的对象都封装到一个数据包里</span
            ></strong
          ><span
            >，在服务器收到这个数据包时，对数据进行解封装，发现了数据包是要发送给小明的，于是进行就把数据包转发给小明。</span
          >
        </p>
        <p>
          <img
            src="../assets/image-20221014133612341.png"
            referrerpolicy="no-referrer"
            alt="image-20221014133612341"
          />
        </p>
        <p>
          <span
            >可以看下，我们发送的一句话，传输的时候，并不是一个字符串，而是一个经过包装后的数据包。只不过我们传输的内容(payload)也被封装在里面。qq就采取OICQ数据的格式。我们可以看到在数据包里，有对方的qq号码，这是必然的，如果没有这个字段，服务器怎么知道这个数据包要转发给谁呢（OICQ是工作在UDP上的，这种协议不会建立端到端的连接）？</span
          >
        </p>
        <hr />
        <p><span>所以你大概了解了网络协议在端对端通信的意义了吧。</span></p>
        <p>
          <span
            >我们的http协议同理，当你输入一个url并按下回车键时，就会发送出去一个http数据包。我们知道，这个数据包一定是被封装后的，谁对数据进行了封装呢，很容易想到是浏览器帮你做的。所以，你作为一个客户端，浏览器帮你完成了数据的封装，所以浏览器也叫做你的用户代理(User-Agent)，毕竟我们如果想浏览一个网页，总不能每发送一个请求，就自己手写一个数据包吧。这些封装的工作都是由用户代理完成的。</span
          >
        </p>
        <p>
          <span
            >然而我们常见的通信方式就是使用浏览器发送数据包，有没有别的途径呢。你可能早早就听说过网络爬虫，也就是python程序(实际上其他语言只要提供了对http协议进行封装的API，都可以称之为爬虫程序)。这里为你介绍一款工具，curl。</span
          >
        </p>
        <p>
          <span
            >在windows系统打开终端页面(同时按下win键和r键，会弹出一个窗口，在窗口里输入cmd。就可以看到终端页面)。你的windows系统应该是自带curl工具的。</span
          >
        </p>
        <p>
          <a href="https://www.ruanyifeng.com/blog/2019/09/curl-reference.html"
            ><span>curl 的用法指南 - 阮一峰的网络日志 (ruanyifeng.com)</span></a
          >
        </p>
        <h5>
          <a name="你的任务是" class="md-header-anchor"></a
          ><span>你的任务是</span>
        </h5>
        <ol start="">
          <li>
            <span
              >在命令行使用curl访问第一题的url，看看此时的User-Agent变成了什么？</span
            >
          </li>
          <li>
            <code>curl 116.205.165.101:8080/question1/2</code
            ><span>
              使用curl访问这个页面，看看终端上的信息是什么。再用浏览器访问一下，再次看看返回的页面内容是什么。你可以使用curl，并在终端上显示&quot;你好鸭~~&quot;这个返回值吗。</span
            >
          </li>
        </ol>
        <p>
          <span
            >提示：既然这么多软件/工具都可以完成对http协议的封装，有什么字段可以显示这个报文具体是由什么封装的吗？</span
          >
        </p>
        <p><span>qq机器人</span></p>
        
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