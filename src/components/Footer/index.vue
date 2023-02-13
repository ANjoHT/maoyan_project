<template>
  <div class="footer">
    <p class="friendly-links">
      关于猫眼 :
      <router-link to="/" class="link-red"> 关于我们</router-link>
      <span class="iconfont icon-vertical_line"></span>
      <router-link to="/" class="link-red">董事会成员</router-link>
      <span class="iconfont icon-vertical_line"></span>
      <router-link to="/" class="link-red">投资者关系</router-link>

      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;友情链接 :
      <router-link to="/" class="link-red"> 美团网</router-link>
      <span class="iconfont icon-vertical_line"></span>
      <router-link to="/" class="link-red">格瓦拉</router-link>
      <span class="iconfont icon-vertical_line"></span>
      <router-link to="/" class="link-red">美团下载</router-link>
      <span class="iconfont icon-vertical_line"></span>
      <router-link to="/" class="link-red">欢喜首映</router-link>
    </p>
    <p class="friendly-links">
      商务合作邮箱：v@maoyan.com 客服电话：10105335
      违法和不良信息/涉未成年人有害信息举报电话：4006018900
    </p>
    <p class="friendly-links">
      用户举报/涉未成年人有害信息举报邮箱：tousujubao@meituan.com
      舞弊线索举报邮箱：wubijubao@maoyan.com
    </p>
    <p class="friendly-links">
      <router-link to="/" class="link">
        中华人民共和国增值电信业务经营许可证 京B2-2019035
      </router-link>
      <span class="iconfont icon-vertical_line"></span>
      <router-link to="/" class="link">
        营业性演出许可证 京演（机构）（2019）4094号
      </router-link>
    </p>
    <p class="friendly-links">
      <router-link to="/" class="link">
        广播电视节目制作经营许可证 （京）字第08478号
      </router-link>
      <span class="iconfont icon-vertical_line"></span>
      <router-link to="/" class="link">
        网络文化经营许可证 京网文（2022）1334-041号
      </router-link>
    </p>
    <p class="friendly-links">
      <router-link to="/" class="link">
        艺术品经营单位备案证明 京东艺（2022）0095号
      </router-link>
    </p>
    <p class="friendly-links">
      <router-link to="/" class="link">猫眼用户服务协议 </router-link>
      <span class="iconfont icon-vertical_line"></span>
      <router-link to="/" class="link">猫眼平台交易规则总则 </router-link>
      <span class="iconfont icon-vertical_line"></span>
      <router-link to="/" class="link">隐私政策 </router-link>
    </p>
    <p class="friendly-links">
      <router-link to="/" class="link">京公网安备 11010102003232号</router-link>
      <span class="iconfont icon-vertical_line"></span>
      <router-link to="/" class="link">京ICP备16022489号-1</router-link>
    </p>
    <p class="friendly-links">北京猫眼文化传媒有限公司</p>
    <p class="friendly-links">© <span>2023</span> 猫眼电影 www.maoyan.com</p>
    <div class="certificate">
      <router-link to="/">
        <img src="@/assets/images/trademark01.png" alt="" />
      </router-link>
      <router-link to="/">
        <img src="@/assets/images/trademark02.png" alt="" />
      </router-link>
      <router-link to="/">
        <img src="@/assets/images/trademark03.png" alt="" />
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Footer",
};
</script>

<script lang="ts" setup>
import {} from "vue";
</script>

<style lang="less" scoped>
.footer {
  width: 100%;
  min-width: 1200px;
  background-color: #262426;
  margin-top: 82px;
  padding: 56px 0;
  font-size: 14px;
  color: #ccc;
}
.friendly-links {
  text-align: center;
  line-height: 22px;
}
.link-red {
  color: @primary-color;
}
.link {
  color: #ccc;
}
.certificate {
  margin: 20px auto 0;
  width: 400px;
  display: flex;
  justify-content: space-around;
}
.icon-vertical_line {
  margin: 0 7px;
  color: #ccc !important;
}
</style>
