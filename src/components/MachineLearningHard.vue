<template>
  <div class="animate__animated animate__fadeIn root">
    <body class="typora-export os-windows">
      <div id="write" class="">
        <h2>
          <a name="3-线性回归问题" class="md-header-anchor"></a
          ><span>3 线性回归问题</span>
        </h2>
        <hr />
        <p><span>出题人:邢锦源</span></p>
        <p><span>QQ:407234512（欢迎提问与交流）</span></p>
        <hr />
        <h3>
          <a name="31-引入" class="md-header-anchor"></a><span>3.1 引入:</span>
        </h3>
        <hr />
        <p>
          <span
            >现在你要正式进入机器学习的代码实践环节了,下面先来进行线性回归的学习吧.线性回归既是你迈入机器学习的第一个阶梯,也是今后机器学习方向的基础.相信你通过一个月的努力,一定能有所收获.</span
          >
        </p>
        <hr />
        <h3>
          <a name="32-题目" class="md-header-anchor"></a><span>3.2 题目：</span>
        </h3>
        <hr />
        <h4>
          <a name="321-基础要求" class="md-header-anchor"></a
          ><span>3.2.1 基础要求</span>
        </h4>
        <ol start="">
          <li>
            <span
              >调用sklearn库的线性回归模型完成训练,
              找到一条使得mse最小的直线.</span
            >
          </li>
          <li>
            <span
              >请自己创建一个简单的数据集,
              并在不调用任何线性回归库的情况下实现线性回归运算(即自己编写线性回归模型),
              如下图:</span
            >
          </li>
        </ol>
        <p><img src="../assets/3.2.1.png" referrerpolicy="no-referrer" /></p>
        <hr />
        <h4>
          <a name="322-进阶要求" class="md-header-anchor"></a
          ><span>3.2.2 进阶要求</span>
        </h4>
        <ol start="">
          <li>
            <span
              >使用sklearn库中的波士顿房价数据集,
              分别用岭回归和梯度下降进行线性回归来预测房价,
              并对两种方式进行比较.</span
            >
          </li>
        </ol>
        <hr />
        <h3>
          <a name="33-相关资料" class="md-header-anchor"></a
          ><span>3.3 相关资料</span>
        </h3>
        <hr />
        <h4>
          <a name="331-数据集连接" class="md-header-anchor" href="https://pan.baidu.com/s/1b8Ci3Cl7ItTFgMNqdzqE4Q"></a
          ><span>3.3.1 数据集链接</span>
        </h4>
        <p>
          <span>数据集链接:</span><span> </span><span> </span
          ><a
            href="https://pan.baidu.com/s/1b8Ci3Cl7ItTFgMNqdzqE4Q"
            target="_blank"
            class="url"
            >https://pan.baidu.com/s/1b8Ci3Cl7ItTFgMNqdzqE4Q</a
          ><span> </span>
        </p>
        <p><span>提取码: ruab </span></p>
        <hr />
        <h4>
          <a name="332-学习资料" class="md-header-anchor"></a
          ><span>3.3.2 学习资料:</span>
        </h4>
        <ol start="">
          <li><span>sklearn库学习</span></li>
        </ol>
        <ol start="2">
          <li>
            <span
              >AI算法工程师经典面试题目之线性回归（总负责人出品，记得关注+一键三连呐）</span
            >
          </li>
        </ol>
        <hr />
        <p>&nbsp;</p>
        <h2>
          <a name="4-逻辑回归完成二分类问题" class="md-header-anchor"></a
          ><span>4 逻辑回归完成二分类问题</span>
        </h2>
        <hr />
        <p><span>出题人：陈昊</span></p>
        <p><span>QQ：3077677727（欢迎提问与交流）</span></p>
        <hr />
        <h3>
          <a name="41-引入" class="md-header-anchor"></a><span>4.1 引入：</span>
        </h3>
        <hr />
        <p>
          <span
            >在线性回归问题中，有一类场景较为特殊，即对概率的预测。在这种场景中，概率可以用于解决分类问题，模型的输出是输入样本属于某个类别的概率。比如钰涵学姐在沙软学习一年后面临方向选择，她可能选择的是网安方向，也可能是嵌入式方向，还可能这两个方向都不是，由此可以看出分类问题的特殊之处在于：输出要有明确的取值范围[0,
            1]和物理意义(概率)。由于分类问题在人工智能场景中有着丰富的应用，因此被抓出来进行了专门的处理与优化。</span
          >
        </p>
        <hr />
        <h3>
          <a name="42-题目" class="md-header-anchor"></a><span>4.2 题目</span>
        </h3>
        <hr />
        <h4>
          <a name="421-基础要求" class="md-header-anchor"></a
          ><span>4.2.1 基础要求：</span>
        </h4>
        <ol start="">
          <li>
            <span
              >在python中安装numpy、pandas、matplotlib、sklearn库并简单了解其应用方式，为后续的数据处理、图像绘制、模型导入做准备；</span
            >
          </li>
          <li>
            <span
              >读入给出的数据点和其对应的类别(给的数据中每一行的三个数据分别为横坐标、纵坐标和其对应的类别)，使用matplotlib库绘制出散点图，可以参考下图：(能画出来就行，不一定要做出下图效果)</span
            >
          </li>
        </ol>
        <p><img src="../assets/4.2.1.png" /></p>
        <ol start="3">
          <li>
            <span
              >调库进行逻辑回归分类，输出拟合效果最佳的直线(即输出斜率k和截距b)，最好将输出的直线在图中一并展示，便于直观判断结果准确性。</span
            >
          </li>
        </ol>
        <hr />
        <h4>
          <a name="422-进阶要求不要求一定做出来" class="md-header-anchor"></a
          ><span>4.2.2 进阶要求：(不要求一定做出来)</span>
        </h4>
        <ol start="">
          <li>
            <span
              >现在你已经能调库完成逻辑回归的二分类啦，我们也提出进阶要求：不调用库函数，自主编写逻辑回归的代码，并使用梯度下降法完成“山顶”到“山谷”的过程(最小化损失函数)，最后输出最优直线。</span
            >
          </li>
        </ol>
        <hr />
        <h3>
          <a name="43-相关资料" class="md-header-anchor"></a
          ><span>4.3 相关资料</span>
        </h3>
        <hr />
        <h4>
          <a name="431-数据集链接" class="md-header-anchor"></a
          ><span>4.3.1 数据集链接：</span>
        </h4>
        <p>
          <span>链接:</span><span> </span><span> </span
          ><a
            href="https://pan.baidu.com/s/1X0oKmfm2SdcQLq3NBNNo8A"
            target="_blank"
            class="url"
            >https://pan.baidu.com/s/1X0oKmfm2SdcQLq3NBNNo8A</a
          ><span> </span>
        </p>
        <p><span>提取码: 8421</span></p>
        <hr />
        <h4><a name="tips" class="md-header-anchor"></a><span>Tips：</span></h4>
        <ol start="">
          <li>
            <p>
              <span
                >学习逻辑回归前可以先去了解构造损失函数的常见两种方法：极大似然函数构造和平方损失函数构造。其推导过程可以跟着网上资料一起写一遍，对于大一萌新来说可能在矩阵和微分方面有些陌生(放心以后都会学的)，其他方面都基本是高中的导数(你们应该比大二大三的学长熟)，如果这些理解较困难可以先跳过，拿最后的化简结果自行做梯度下降也是很棒的。(提示：我推出来好像是极大似然法构造出来的损失函数更为简单)</span
              >
            </p>
          </li>
          <li>
            <p>
              <span
                >在很多python的项目中，耗时最多的往往不是模型的搭建，而是对于数据集的制作与处理，本题中已经提供了数据集，但是在数据集的处理中想必同学们会遇到一些难题，所以这里也需要同学们对于python的基础操作有深入认识，推荐一个我非常喜欢使用的函数replace()；还有就是如果对于矩阵的操作不熟练可以尝试将矩阵转化为多维列表解决，最后再将列表转化为矩阵。</span
              >
            </p>
          </li>
          <li>
            <p>
              <span
                >善于运用网络进行机器学习方向的学习，现在基础的机器学习技术已经得到了充分发展，但是要把知识转化为自己的才是硬道理。在推荐的书籍中，《西瓜书》的话偏理论，有着大量的数学推理，是公认的机器学习必备神书，对于数学公式情有独钟的可以在其中发现新天地。</span
              >
            </p>
          </li>
          <li>
            <p>
              <span
                >学校里面涉及到机器学习的课程较少(大一下期杨珊老师的PYTHON图像识别课程推荐一下，对于机器学习有感兴趣的同学在那个课上可以学到很多)，所以对于机器学习的研究其实主要靠自己，由此可见兴趣是很好的驱动力。比如我暑假的时候曾经妄想做个模型来预测股票“试试”，用了有时序序列的RNN和LSTM等高端模型，一通胡乱操作后得出惊人的结论：财富自由触手可及！(然而这个模型完全是根据过去预测过去，往后预测一天都行不通)但是这样的乐趣仍然是无限的，希望同学们也能用兴趣驱动知识增长。</span
              >
            </p>
            <p><span>放张图给大家康康我当时有多兴奋：</span></p>
            <p><img src="../assets/4.3.1.png" /></p>
          </li>
        </ol>
        <blockquote><hr /></blockquote>
        <p>&nbsp;</p>
        <h2>
          <a name="5-链时代招新附加题" class="md-header-anchor"></a
          ><span>5 链时代招新附加题</span>
        </h2>
        <hr />
        <p><span>QQ：1611773856（欢迎提问与交流）</span></p>
        <hr />
        <h3>
          <a name="51-引入" class="md-header-anchor"></a><span>5.1 引入</span>
        </h3>
        <hr />
        <p>
          <span
            >可能在此之前你已经简单了解过卷积层和CNN，接下来你将使用多重卷积层，搭建一个经典的DCNN（深度卷积网络），训练它并使用它实现简单的图像识别</span
          >
        </p>
        <hr />
        <h3>
          <a name="52-题目" class="md-header-anchor"></a><span>5.2 题目：</span>
        </h3>
        <hr />
        <p>
          <strong><span>神经网络搭建</span></strong>
        </p>
        <ul>
          <li>
            <p>
              <span
                >本题需要你使用相关框架，复现轻量级的深度卷积网络-MobileNet（V1-V3架构任选其一)</span
              >
            </p>
          </li>
          <li>
            <p>
              <span
                >训练数据集推荐选用CelebA数据集，测试集推荐LFW数据集，请对数据进行合适的预处理（裁剪，缩放等）</span
              >
            </p>
          </li>
          <li>
            <p><span>提示：</span></p>
            <ul>
              <li>
                <p>
                  <span
                    >由于CelebA数据集的存储方式，使得它的提取在使用某些方法时更加方便</span
                  >
                </p>
              </li>
              <li>
                <p>
                  <span
                    >由于网络过深，lable维度过高时训练困难，选取其中10个类别进行训练即可</span
                  >
                </p>
              </li>
              <li>
                <p><span>关于损失函数，或许存在更好的形式等着你发掘</span></p>
              </li>
              <li>
                <p><span>网络收敛过慢时，建议自定义optimizer</span></p>
              </li>
              <li>
                <p><span>如果有能力建议阅读原论文：</span></p>
                <p>
                  <span>mobilenet-v1：</span
                  ><a href="https://arxiv.org/pdf/1704.04861.pdf"
                    ><span>https://arxiv.org/pdf/1704.04861.pdf</span></a
                  >
                </p>
                <p>
                  <span>mobilenet-v2：</span
                  ><a href="https://arxiv.org/abs/1801.04381"
                    ><span>https://arxiv.org/abs/1801.04381</span></a
                  >
                </p>
                <p>
                  <span>mobilenet-v3：</span
                  ><a href="https://arxiv.org/pdf/1905.02244.pdf"
                    ><span>https://arxiv.org/pdf/1905.02244.pdf</span></a
                  >
                  <strong
                    ><span
                      >学有余力的请阅读论文原文，并提交markdown形式论文理解</span
                    ></strong
                  >
                </p>
              </li>
            </ul>
          </li>
        </ul>
        <hr />
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