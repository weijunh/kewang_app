<template>
  <div id="app">
    <div class="header">
      <img class="logo_img" src="../src/assets/k_logo.jpg" alt="logo" title="科旺集团">
      <ul class="header_nav">
        <li>
          <router-link to="/solution">解决方案和服务</router-link>
          <span class="triangle"></span>
          <!-- <div class="showcontent">
            <ShowImg :human_resources = human_resources />
          </div> -->
        </li>

        <li>
          <router-link to="/about">产品展示</router-link>
          <span class="triangle"></span>
          <!-- <div class="showcontent">
            
          </div> -->
        </li>

        <li>
          <router-link to="/">技术支持</router-link>
          <span class="triangle"></span>
          <div class="showcontent">
            <LeftGuide :guidelist = tecnical_support  />
            
          </div>
        </li>

        <li>
          <router-link to="/">了解科旺</router-link>
          <span class="triangle"></span>
          <!-- <div class="showcontent">
            <LeftGuide :guidelist=realize_kewang  />
          
          </div> -->
        </li>

        <li>
          <router-link to="/">关于我们</router-link>
          <span class="triangle"></span>
          <!-- <div class="showcontent">
            <LeftGuide class="left" />
            
          </div> -->
        </li>

        <li>
          <router-link to="/">人力资源</router-link>
          <span class="triangle"></span>
          <!-- <div class="showcontent">
            <LeftGuide class="left" />
            
          </div> -->
        </li>

        <li>
          <router-link to="/">联系我们</router-link>
          <span class="triangle"></span>
          <!-- <div class="showcontent">
            <LeftGuide class="left" />
            
          </div> -->
        </li>

        <li>
          <router-link to="/">招商加盟</router-link>
          <span class="triangle"></span>
          <!-- <div class="showcontent">
            <LeftGuide class="left" />
        
          </div> -->
        </li>
      </ul>

      <div class="header_right">
        <el-button class="btn_changelanguage" plain>English</el-button>
        <el-button class="btn_yys_login" type="primary" @click="yys_login">运营商登录</el-button>
      </div>
      
    </div>
    <router-view />
    <Foot/>
  </div>
</template>

<script>
import Vue from 'vue'
import LeftGuide from './pages/LeftGuide/LeftGuide.vue'
import ShowImg from './components/ShowImg/ShowImg.vue'
import Foot from './components/Foot/Foot.vue'

import data from './mock/data.json'
import {  Button, Tabs,TabPane,Tag,} from 'element-ui';

Vue.use(Button)
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Tag);

export default {
  name: "app",
  components: {
    LeftGuide,
    ShowImg,
    Foot
  },
  data () {
    return {
      realize_kewang: data.realize_kewang,
      tecnical_support: data.tecnical_support,
      human_resources: data.show_img
    }
  },
  methods: {
    yys_login(){
      window.location.href = 'http://platform.niuniu-energy.com/Login.html'
    }
  },
  mounted () {

  }
}
</script>


<style lang="stylus" scope>
#app
  .header
    width 100%
    height 60px
    line-height 60px
    font-size 15px
    display flex
    justify-content space-around
    align-items center
    background-color #111318
    position fixed
    top 0px
    left 0px
    z-index 9999
    .logo_img
      width 120px
    .header_nav
      height 100%
      display flex
      justify-content center
      align-items center
      li
        text-align center
        height 100%
        position relative
        margin 0 10px
        &:hover
          .triangle
            display block
          .showcontent
            display block
        a
          color #fff
        .triangle
          display none
          position absolute
          left 50%
          bottom 0px
          transform translateX(-50%)
          width 0px
          height 0px
          border-width 10px
          border-style solid dashed dashed dashed
          border-color transparent transparent #ffffff transparent
        .showcontent
          display none
          width 900px
          background-color #fff
          position absolute
          top 100%
          left 50%
          transform translateX(-50%)
          box-shadow 0 0 5px black
          
    .header_right
      .btn_changelanguage
        height 35px
        border-radius 8px
        background-color #000
        color #fff
      .btn_yys_login
        height 35px
</style>
