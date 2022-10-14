<template>

<div class="main animate__animated animate__fadeOut">
    <div class="bg-image">
      <div class="nav-top">
        <!-- <div class="studio-title">链时代工作室</div>
        <div class="nav-button-box">
          <div class="text-wrapper_1">HOME</div>
          <div class="text-wrapper_1">About&nbsp;Us</div>
          <div class="text-wrapper_1">Honors</div>
          <div class="text-wrapper_1">Join&nbsp;Us</div>
        </div> -->
      </div>
    <div class="studio animate__fadeInDown animate__animated animate__slow">链时代工作室</div>
    <div class="welcome-title animate__fadeInDown animate__animated animate__slower">Welcome&nbsp;to&nbsp;join&nbsp;us</div>
    </div>
    <div class="bg-main">
    </div>
    <div class="main-introduction">
      <div class="square">
          <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
          </ul>
        </div>
        <div class="circle">
          <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
          </ul>
        </div>
      <div class="home">
        <div class="home-title1 animate__fadeInDown animate__slow animate__animated animate__delay-1s">链时代</div>
        <div class="home-title2 animate__fadeInDown animate__slower animate__animated animate__delay-2s">创造你的时代！</div>
        <div class="home-wrapper flex-row justify-between">
          <div class="home-photo"></div>
          <div class="home-text-wrapper">
            <span class="home-paragraph animate__fadeInDown animate__slower animate__animated animate__delay-3s">创新改变时代，<br/>技术创造未来<br /></span>
            <!-- <button class="home-button flex-col" @click="onClick_1">
              <span class="home-button-text">招新网站</span>
            </button> -->
          </div>
        </div>
      </div>
      <div class="About-us">
        <div class="ab-who">
          <div class="ab-who-title">我们是谁？</div>
          <span class="ab-who-introduction">
            链时代工作室&nbsp;由主攻量子网络安全方向的王老师和现已直博北大的邱学长共同创建，成立于2017年，是软件学院最年轻的工作室之一。经过五年不断地壮大，有许多优秀的学长学姐走出链时代，走出成电，在各自的专业领域发光发热。工作室17级—21级现任成员约有80人，其中多人去国内外顶尖大学进修，亦有多人拿到阿里、百度、华为、字节跳动等互联网大厂的offer。
          </span>
        </div>
        <img src='../assets/discuss.jpg' referrerpolicy="no-referrer" class="ab-who-photo"/>
        <div class="ab-what">
          我们的研究方向？
        </div>
        <div class="group_6 flex-col justify-between">
          <div class="box_5 flex-row justify-between">
            <img
              class="image_1"
              referrerpolicy="no-referrer"
              src="../assets/block-chain-logo.jpg"
            />
            <div class="text_12">区块链技术</div>
          </div>
          <div class="box_6 flex-row justify-between">
            <img
              class="image_2"
              referrerpolicy="no-referrer"
              src="../assets/machine-learning-logo.png"
            />
            <div class="text_13">机器学习</div>
          </div>
          <div class="image-text_1 flex-row justify-between">
            <img
              class="image_3"
              referrerpolicy="no-referrer"
              src="../assets/web-logo.jpg"
            />
            <div class="text-group_2">Web前端/后端</div>
          </div>
        </div>
        <img src='../assets/speech.jpg' referrerpolicy="no-referrer" class="ab-what-photo"/>
      </div>
      <div class="honors">
        <div class="group_8 flex-row justify-between">
          <div class="text_14">荣誉墙</div>
          <img
            class="icon_1"
            referrerpolicy="no-referrer"
            src="../assets/cup.png"
          />
        </div>
        <span class="text_15">“天地转，光阴迫，一万年太久，只争朝夕。”</span>
        <div class="group_9 flex-row justify-between">
          <div class="fame_wrapper">
            <div class="section_1 flex-col">
              <br />
              <div class="text_16">2022年</div> 
              <br />
              <ul>
                <li>计算机软件著作权×2</li>
                <li>大学生创新创业训练计划项目国家级立项</li>
                <li>中国高校计算机大赛微信小程序应用开发赛国家三等奖</li>
                <li>中国高校计算机大赛网络技术挑战赛国家三等奖</li>
                <li>中国大学生服务外包创新创业大赛国家三等奖</li>
                <li>“挑战杯”大学生创业计划竞赛四川省金奖</li>
                <li>四川省计算机作品赛特等奖</li>
                <li>中国大学生服务外包创新创业大赛西南赛区一等奖</li>
                <li>中国高校计算机大赛微信小程序应用开发赛西南赛区一等奖</li>
                <li>中国大学生计算机设计大赛四川省一等奖</li>
              </ul>
            </div>
            <div class="section_2 flex-col">
              <br />
              <div class="text_17">2021年</div>
              <br />
              <ul>
                <li>中国大学生计算机设计大赛国家二等奖</li>
                <li>中国大学生计算机设计大赛四川省一等奖</li>
                <li>中国国际“互联网+”创新创业大赛四川省一等奖</li>
                <li>蓝桥杯全国软件和信息技术专业人才大赛四川省二等奖</li>
                <li>全国大学生电子商务“创新、创意及创业”挑战赛四川省三等奖</li>
              </ul>
            </div>
            <div class="section_3 flex-col">
              <br />
              <div class="text_18">2020年</div>
              <br />
              <ul>
                <li>全国大学生信息安全竞赛国家二等奖</li>
                <li>中国大学生计算机设计大赛国家三等奖</li>
                <li>蓝桥杯全国软件和信息技术专业人才大赛四川省二等奖</li>
                <li>中国高校计算机大赛微信小程序应用开发赛西南赛区三等奖</li>
                <li>四川省计算机作品赛四川省三等奖</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="join-us">
        <div class="text_19">加入链时代！</div>
        <div class="paragraph_2">
        在这里寻找兴趣，自由发展：<br />·两周一次的不同方向技术栈分享组会<br />·大量培养资料、文档、论文<br />·项目内推，比赛培训，保研、实习经验分享<br />·独立宽敞的工位，自由包容的气氛<br />·不定时的团建活动<br />·......
        </div>
        <img src="../assets/qr-code.png" class="qr-code" />
        <!-- <div class="text-wrapper_6">
          <span class="text_20">点击</span> <span class="text_21">招新网站</span>
          <span class="text_22">，来了解更多招新信息</span>
        </div> -->
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-button-box">
          <div class="text-wrapper_2">HOME</div>
          <div class="text-wrapper_2">About&nbsp;Us</div>
          <div class="text-wrapper_2">Honors</div>
          <div class="text-wrapper_2">Join&nbsp;Us</div>
      </div>
      <div class="bottom-text">
          Block-Chain&nbsp;Studio&nbsp;||&nbsp;Developed&nbsp;by&nbsp;vue3
      </div>
    </div>
</div>

</template>

<script>
import 'animate.css';
export default {
  name: "Index",
}
// let section_1 = document.getElementsByClassName("section_1");
// let section_2 = document.getElementsByClassName("section_2");
// let section_3 = document.getElementsByClassName("section_3");

</script>

<style scoped>
html {
  perspective: 800px;
}

.main {
  background-color: rgba(255, 255, 255, 1);
  position: absolute;
  top: 80px;
  width: 100%;
  overflow: hidden;
    /* 渐变背景 */
  background: linear-gradient(125deg,#2c3e50,#27ae60,#2980b9,#e74c3c,#8e44ad);
  /* 指定背景图像的大小 */
  background-size: 500%;
  /* 执行动画：动画名 时长 线性的 无限次播放 */
  animation: bgAnimation 15s linear infinite;
}
@keyframes bgAnimation {
    0%{
        background-position: 0% 50%;
    }
    50%{
        background-position: 100% 50%;
    }
    100%{
        background-position: 0% 50%;
    }
}

.bg-image {
  width: 100%;
  height: 756px;
  background: url(../assets/logo.png)
    100% no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
  /* 背景图片始终在最下层 */
  z-index: 0;
}

.nav-top {
  width: 1690px;
  height: 90px;
  overflow: hidden;
}

.studio-title {
  width: 200px;
  height: 40px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 30px;
  float: left;
  font-family: Source Han Sans CN-Heavy;
  text-align: left;
  white-space: nowrap;
  line-height: 36px;
  margin: 25px 0 0 200px;
}

.nav-button-box {
  height: 40px;
  width: 400px;
  margin: 25px 0 0 1060px;
  display: flex;
  justify-content: space-evenly;
}

.text-wrapper_1 {
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  font-family: Source Han Sans CN-Bold;
  /* text-decoration: underline; */
  text-align: center;
  white-space: nowrap;
  line-height: 29px;
  margin: 4px 0 0 4px;
}

.studio {
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 72px;
  font-family: YRDZST-Bold;
  text-align: left;
  white-space: nowrap;
  line-height: 100px;
  margin: 102px 0 0 200px;
}

.welcome-title {
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 36px;
  font-family: YRDZST-Bold;
  text-align: left;
  white-space: nowrap;
  line-height: 60px;
  margin: 20px 0 0 200px;
}

.bg-main {
  position: relative;
  width: 100%;
  height: 2466px;
  overflow: hidden;
  /* 背景始终在最底层 */
  z-index: 0;
}

.main-introduction {
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.4);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px 10px 0px 0px;
  width: 92%;
  /* height: 2725px; */
  top: 684px;
  left: 4%;
  position: absolute;
  z-index: 1;
}

.home {
  width: 100%;
  height: 660px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  text-align: left;
  position: relative;
}
.home-title1{
  width: 600px;
  height: 140px;
  overflow-wrap: break-word;
  color: rgba(61, 61, 61, 1);
  font-size: 90px;
  font-family: HelloFont WenYiHei-Regular;
  text-align: center;
  white-space: nowrap;
  line-height: 133px;
  margin: 0px auto;
}
.home-title2 {
  width: 720px;
  height: 100px;
  overflow-wrap: break-word;
  color: rgba(61, 61, 61, 1);
  font-size: 70px;
  font-family: HelloFont WenYiHei-Regular;
  text-align: left;
  white-space: nowrap;
  line-height: 80px;
  margin: 0 0 0 34vw;
}

.home-wrapper {
  width: 1085px;
  height: 401px;
  margin: 4px 0 0 265px;
  display: flex;
}
.home-photo {
  background-color: rgba(216, 216, 216, 1);
  width: 538px;
  height: 401px;
  z-index: 1;
}
.home-text-wrapper {
  width: 380px;
  height: 300px;
  margin-top: 76px;
  margin-left: 140px;
}
.home-paragraph {
  width: 380px;
  height: 91px;
  overflow-wrap: break-word;
  color: rgba(61, 61, 61, 1);
  font-size: 36px;
  font-family: HelloFont WenYiHei-Regular;
  line-height: 44px;
  z-index: 1;
}

.home-button {
  background-color: rgba(41, 183, 203, 1);
  border-radius: 6px;
  height: 50px;
  width: 120px;
  margin: 70px 0 0 160px;
  border: none;
}
.home-button-text {
  width: 120px;
  height: 43px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  font-family: Source Han Serif CN-SemiBold;
  text-align: left;
  white-space: nowrap;
  line-height: 43px;
}

.About-us {
  width: 100%;
  height: 765px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  position: relative;
}
.ab-who {
  position: absolute;
  top: 50px;
  width: 480px;
  height: 250px;
  text-align: left;
  left: 280px;
}
.ab-who-title {
  width: 310px;
  height: 60px;
  overflow-wrap: break-word;
  color: rgba(61, 61, 61, 1);
  font-size: 36px;
  font-family: Source Han Sans CN-Bold;
  text-align: left;
  line-height: 52px;
}
.ab-who-introduction {
  width: 480px;
  height: 170px;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 18px;
  font-family: Source Han Sans CN-Regular;
  line-height: 22px;
  margin-top: -19px;
}
.ab-who-photo {
  position: absolute;
  background-color: rgba(216, 216, 216, 1);
  width: 470px;
  height: 310px;
  left: 850px;
  top: 30px;
}
.ab-what {
  width: 288px;
  height: 55px;
  overflow-wrap: break-word;
  color: rgba(61, 61, 61, 1);
  font-size: 36px;
  font-family: Source Han Sans CN-Bold;
  text-align: left;
  white-space: nowrap;
  line-height: 52px;
  margin-top: 44px;
  position: absolute;
  left: 280px;
  top: 310px;
}



.group_6 {
  width: 282px;
  height: 296px;
  position: absolute;
  left: 270px;
  top: 420px;
  text-align: left;
}
.box_5 {
  width: 207px;
  height: 88px;
  margin-left: 48px;
}
.image_1 {
  width: 100px;
  height: 88px;
}
.text_12 {
  width: 90px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 18px;
  font-family: Source Han Sans CN-Regular;
  white-space: nowrap;
  line-height: 22px;
  margin-top: 25px;
  position: absolute;
  top: 6px;
  left: 160px;
}
.box_6 {
  width: 203px;
  height: 80px;
  margin-top: 24px;
}
.image_2 {
  width: 160px;
  height: 80px;
}
.text_13 {
  width: 72px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(61, 61, 61, 1);
  font-size: 18px;
  font-family: Source Han Sans CN-Regular;
  white-space: nowrap;
  line-height: 22px;
  margin-top: 26px;
  position: absolute;
  left: 145px;
  top: 115px;
}
.image-text_1 {
  width: 234px;
  height: 80px;
  margin: 24px 0 0 48px;
}
.image_3 {
  width: 108px;
  height: 80px;
}
.text-group_2 {
  width: 117px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(61, 61, 61, 1);
  font-size: 18px;
  font-family: Source Han Sans CN-Regular;
  white-space: nowrap;
  line-height: 22px;
  margin-top: 24px;
  position: absolute;
  top: 220px;
  left: 155px;
}

.ab-what-photo {
  position: absolute;
  background-color: rgba(216, 216, 216, 1);
  width: 470px;
  left: 690px;
  top: 380px;
}

.honors {
  width: 100%;
  height: 650px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  position: relative;
}



.group_8 {
  width: 175px;
  height: 54px;
  margin: 60px 0 0 700px;
}
.text_14 {
  width: 110px;
  height: 54px;
  overflow-wrap: break-word;
  color: rgba(61, 61, 61, 1);
  font-size: 36px;
  font-family: Source Han Sans CN-Bold;
  text-align: left;
  white-space: nowrap;
  line-height: 52px;
  float: left;
}
.icon_1 {
  width: 50px;
  height: 50px;
  margin-top: 2px;
  float: right;
}
.text_15 {
  width: 380px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(61, 61, 61, 0.8);
  font-size: 18px;
  font-family: Source Han Sans CN-Regular;
  white-space: nowrap;
  line-height: 22px;
  margin: 6px 0 0 -20px;
}

.text-wrapper_5 {
  width: 1004px;
  height: 39px;
  margin: 73px 0 0 260px;
}
.text_16 {
  width: 94px;
  height: 34px;
  overflow-wrap: break-word;
  color: rgba(61, 61, 61, 1);
  font-size: 28px;
  font-family: Source Han Sans CN-Bold;
  white-space: nowrap;
  line-height: 34px;
  margin: 0 auto;
}
.text_17 {
  width: 94px;
  height: 34px;
  overflow-wrap: break-word;
  color: rgba(61, 61, 61, 1);
  font-size: 28px;
  font-family: Source Han Sans CN-Bold;
  white-space: nowrap;
  line-height: 34px;
  margin: 0 auto;
}
.text_18 {
  width: 94px;
  height: 34px;
  overflow-wrap: break-word;
  color: rgba(61, 61, 61, 1);
  font-size: 28px;
  font-family: Source Han Sans CN-Bold;
  white-space: nowrap;
  line-height: 34px;
  margin: 0 auto;
}

.group_9 {
  width: 1200px;
  height: 480px;
  margin: 6px 0 0 200px;
}
.fame_wrapper {
  width: 100%;
  height: 480px;
  display: flex;
  text-align: left;
  justify-content: space-between;
  text-align: left;
  margin-top: 75px;
}
/* .fame_wrapper ul li {
  list-style: none;
} */
.section_1 {
  width: 340px;
  height: 480px;
  transition: 1s;
  box-shadow: 18px 18px 30px rgba(0,0,0,.1),-18px -18px 30px rgba(255,255,255,1);
  border-radius: 20px;
}
.section_1 ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.section_1:hover {
  transform: translateY(-20px);
}
.section_2 {
  width: 340px;
  height: 480px;
  transition: 1s;
  box-shadow: 18px 18px 30px rgba(0,0,0,.1),-18px -18px 30px rgba(255,255,255,1);
  border-radius: 20px;
}
.section_2 ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.section_2:hover {
  transform: translateY(-20px);
}
.section_3 {
  width: 340px;
  height: 480px;
  transition: 1s;
  box-shadow: 18px 18px 30px rgba(0,0,0,.1),-18px -18px 30px rgba(255,255,255,1);
  border-radius: 20px;
}
.section_3 ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.section_3:hover {
  transform: translateY(-20px);
}
.join-us {
  width: 100%;
  height: 400px;
  text-align: left;
  overflow: hidden;
}

.qr-code {
  width: 230px;
  position: absolute;
  left: 1020px;
  bottom: 50px;
}



.text_19 {
  width: 216px;
  height: 52px;
  overflow-wrap: break-word;
  color: rgba(61, 61, 61, 1);
  font-size: 36px;
  font-family: Source Han Sans CN-Bold;
  white-space: nowrap;
  line-height: 52px;
  margin: 29px 0 0 690px;
}
.paragraph_2 {
  width: 500px;
  height: 220px;
  overflow-wrap: break-word;
  color: rgba(61, 61, 61, 1);
  font-size: 24px;
  font-family: Source Han Sans CN-Regular;
  text-align: left;
  line-height: 29px;
  margin: 28px 0 0 300px;
}

.text-wrapper_6 {
  width: 384px;
  height: 29px;
  overflow-wrap: break-word;
  font-size: 0;
  font-family: Source Han Sans CN-Regular;
  text-align: left;
  white-space: nowrap;
  line-height: 29px;
  margin: 0 0 32px 800px;
}
.text_20 {
  width: 384px;
  height: 29px;
  overflow-wrap: break-word;
  color: rgba(61.00000016391277, 61.00000016391277, 61.00000016391277, 1);
  font-size: 24px;
  font-family: Source Han Sans CN-Regular;
  text-align: left;
  white-space: nowrap;
  line-height: 29px;
}
.text_21 {
  width: 384px;
  height: 29px;
  overflow-wrap: break-word;
  color: rgba(0, 136.00000709295273, 199.0000033378601, 1);
  font-size: 24px;
  font-family: Source Han Sans CN-Regular;
  text-align: left;
  white-space: nowrap;
  line-height: 29px;
}
.text_22 {
  width: 384px;
  height: 29px;
  overflow-wrap: break-word;
  color: rgba(61.00000016391277, 61.00000016391277, 61.00000016391277, 1);
  font-size: 24px;
  font-family: Source Han Sans CN-Regular;
  text-align: left;
  white-space: nowrap;
  line-height: 29px;
}

.bottom {
  background-color: rgba(33, 119, 184, 1);
  width: 1590px;
  height: 100px;
  margin: -1px 0 0 50px;
  overflow: hidden;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.4);
}
.bottom-button-box {
  height: 40px;
  width: 400px;
  margin: 35px 0 0 160px;
  display: flex;
  justify-content: space-evenly;
  position: absolute;
}
.text-wrapper_2 {
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  font-family: Source Han Sans CN-Bold;
  /* text-decoration: underline; */
  text-align: center;
  white-space: nowrap;
  line-height: 29px;
  margin: 4px 0 0 4px;
}
.bottom-text {
  width: 415px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  font-family: Source Han Sans CN-Bold;
  text-align: left;
  white-space: nowrap;
  line-height: 29px;
  margin: 40px 151px 0 564px;
  float: right;
}



.square ul li{
    position: absolute;
    border: 2px solid #2f90b9;
    /* background-color: rgb(60, 0, 255); */
    width: 20px;
    height: 20px;
    list-style: none;
    opacity: 0;
    z-index: 0;
}
.circle ul li{
    position: absolute;
    border: 2px solid #2f90b9;
    /* background-color: rgb(60, 0, 255); */
    width: 20px;
    height: 20px;
    list-style: none;
    opacity: 0;
    z-index: 0;
}
.square li{
    top: 60vh;
    left: 60vw;
    /* 执行动画：动画名 时长 线性的 无限次播放 */
    animation: square 10s linear infinite;
}
.square li:nth-child(2){
    top: 50vh;
    left: 10vw;
    /* 设置动画延迟时间 */
    animation-delay: 2s;
}
.square li:nth-child(3){
    top: 50vh;
    left: 85vw;
    /* 设置动画延迟时间 */
    animation-delay: 4s;
}
.square li:nth-child(4){
    top: 10vh;
    left: 70vw;
    /* 设置动画延迟时间 */
    animation-delay: 6s;
}
.square li:nth-child(5){
    top: 10vh;
    left: 10vw;
    /* 设置动画延迟时间 */
    animation-delay: 8s;
}
.circle li{
    bottom: 0;
    left: 15vw;
    /* 执行动画 */
    animation: circle 10s linear infinite;
}
.circle li:nth-child(2){
    left: 35vw;
    /* 设置动画延迟时间 */
    animation-delay: 2s;
}
.circle li:nth-child(3){
    left: 55vw;
    /* 设置动画延迟时间 */
    animation-delay: 6s;
}
.circle li:nth-child(4){
    left: 75vw;
    /* 设置动画延迟时间 */
    animation-delay: 4s;
}
.circle li:nth-child(5){
    left: 90vw;
    /* 设置动画延迟时间 */
    animation-delay: 8s;
}

/* 定义动画 */
@keyframes square {
    0%{
        transform: scale(0) rotateY(0deg);
        opacity: 1;
    }
    100%{
        transform: scale(5) rotateY(1000deg);
        opacity: 0;
    }
}
@keyframes circle {
    0%{
        transform: scale(0) rotateY(0deg);
        opacity: 1;
        bottom: 0;
        border-radius: 0;
    }
    100%{
        transform: scale(5) rotateY(1000deg);
        opacity: 0;
        bottom: 200vh;
        border-radius: 50%;
    }
}
</style>