<template>
  <div class="about">

    <Header/>

    <h1>This is an about page</h1>
    <div class="new-con">
      <h1>看不见的完美硬币 ：细节的负担</h1>
      <h2>创新公司皮克斯的启示</h2>
      <p class="p-img"><img src="../assets/img/logo1.png" alt="图书" width="200"/></p>
      <p><em>细节从来都是个好东西，完美的细节往往给我们赢得商业上的胜利。</em></p>
      <p><em>但是，在皮克斯，这一家满是完美主义设计师的企业里，细节竟然成了负担。</em></p>
      <p><em>怎么打造完美的细节？又怎么赢得商业上的利益。皮克斯总裁艾德·卡特姆为我们解答。</em></p>
      <p><strong>看不见的完美硬币：细节的负担</strong></p>
      <p>在皮克斯，每一部电影都是商业与艺术的双赢。不管这些电影是艺术作品，还是商品，细节都是至关重要的，是决定成败的关键。人们似乎也听过许多关于细节的胜利的故事，但是在皮克斯，设计师们一个个都是完美主义者，细节显然成了皮克斯的负担。这样的太过于重视细节，往往会伤害到企业该有的效率，最终伤害企业的根本。在完美细节和企业应有的效率面前，艾德·卡特姆做出了明智的决策。</p>
      <p>皮克斯有一个现象，被我们的制片人叫作“看不见的完美硬币（the perfect coin）”，这个词指代的是皮克斯制作人员对细节的精益求精。有时候，被我们的制片人凯瑟琳•萨拉菲安称为“床头柜上一枚没人会注意到的硬币”这样的细节，也会引得我们的工作人员花上几天甚至数周的时间悉心打磨。凯瑟琳是《怪兽电力公司》一片的制作人员，影片中有一幕戏可以形象地向我们阐释到底什么是“看不见的完美硬币”。在这幕戏中，好奇的小布第一次来到麦克和萨里的公寓，还在蹒跚学步的小婴儿四处探索起来。两个怪物想要制止她，而她还是一步步走到了两摞高高堆起的CD旁，“别乱动！”麦克大喊起来，可是小女孩还是从90多张CD盒摞成的“高塔”底部抽出一张， CD全部倒塌散落在了地板上。麦克抱怨道：“哎，那些CD都是按字母顺序排列好的！”小女孩摇摇摆摆地走开了。这幕场景前后不到3秒钟，观众们只能够看到几个CD盒而已，但皮克斯的制作人员不仅为每一个CD盒制作了封面，还使用了可计算物体在运动时渲染效果变化的着色器。</p>
    </div><br>

    <Footer/>

  </div>
</template>
<script>
// @ is an alias to /src
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'


export default
{
  name: 'Home',
  components: {Header,Footer}
}
</script>
<style>
.new-con{
  width: 800px;
  border: 1px solid red;
  margin: 50px auto 0;
  padding: 25px 30px;
}
h1{
  font-size: 24px;
  color: #333;
  font-family: "宋体",serif;
  text-align: center;
}
h2{
  font-size: 20px;
  color: #999;
  text-align: center;
  line-height: 30px;
}

p{
  text-indent: 2em;
  color: #333;
  font-size: 14px;
  font-family: "楷体",serif;
}

.time{
  font-size: 12px;
  text-align: center;
  line-height: 30px;
}

.second{
  color: red;
}

.p-img{
  text-align: center;
}

</style>