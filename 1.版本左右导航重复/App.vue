<template>
  <div id="app">
    <div class="header">
      <img src="../src/assets/k_logo.jpg" alt="logo" title="科旺集团">
      <ul class="header_nav">
        <li>
          <router-link to="/">解决方案和服务</router-link>
          <span class="triangle"></span>
          <div class="showcontent">
            <LeftGuide class="left"/>
            <RightShow/>
          </div>
        </li>

        <li>
          <router-link to="/about">产品展示</router-link>
          <span class="triangle"></span>
          <div class="showcontent">
            <LeftGuide class="left"/>
            <RightShow/>
          </div>
        </li>

        <li>
          <router-link to="/">技术支持</router-link>
          <span class="triangle"></span>
          <div class="showcontent">
            <tec_support_LeftGuide :guidelist=tecnical_support class="left"/>
            <tec_support_RightShow/>
          </div>
        </li>

        <li>
          <router-link to="/">了解科旺</router-link>
          <span class="triangle"></span>
          <div class="showcontent">
            <realice_kewang_LeftGuide :guidelist=realize_kewang  class="left"/>
            <realice_kewang_RightShow />
          </div>
        </li>

        <li>
          <router-link to="/">关于我们</router-link>
          <span class="triangle"></span>
          <div class="showcontent">
            <LeftGuide class="left"/>
            <RightShow/>
          </div>
        </li>

        <li>
          <router-link to="/">人力资源</router-link>
          <span class="triangle"></span>
          <div class="showcontent">
            <LeftGuide class="left"/>
            <RightShow/>
          </div>
        </li>

        <li>
          <router-link to="/">联系我们</router-link>
          <span class="triangle"></span>
          <div class="showcontent">
            <LeftGuide class="left"/>
            <RightShow/>
          </div>
        </li>

        <li>
          <router-link to="/">招商加盟</router-link>
          <span class="triangle"></span>
          <div class="showcontent">
            <LeftGuide class="left"/>
            <RightShow/>
          </div>
        </li>
      </ul>

      <div class="header_right">
        <el-button class="btn_changelanguage" plain>English</el-button>
        <el-button class="btn_yys_login" type="primary">运营商登录</el-button>
      </div>

    </div>
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue'
import LeftGuide from './pages/LeftGuide/LeftGuide.vue'
import RightShow from './pages/RightShow/RightShow.vue'
// 导入技术支持左右展示
import tec_support_LeftGuide from './pages/LeftGuide/tec_support_LeftGuide.vue'
import tec_support_RightShow from './pages/RightShow/tec_support_RightShow.vue'
// 导入了解科旺左右展示
import realice_kewang_LeftGuide from './pages/LeftGuide/realice_kewang_LeftGuide.vue'
import realice_kewang_RightShow from './pages/RightShow/realice_kewang_RightShow.vue'


import data from './mock/data.json'
import { Button } from 'element-ui';

Vue.use(Button)


export default {
  name: "app",
  components: {
    LeftGuide,
    RightShow,
    tec_support_LeftGuide,
    tec_support_RightShow,
    realice_kewang_LeftGuide,
    realice_kewang_RightShow
  },
  data(){
    return{
      realize_kewang:data.realize_kewang,
      tecnical_support: data.tecnical_support

    }
  },
  methods: {
  
  },
  mounted(){
    
  }
}
</script>


<style lang="stylus" scope>
#app
  text-align center
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
          height 400px
          background-color #fff
          position absolute
          top 100%
          left 50%
          transform translateX(-50%)
          box-shadow 0 0 5px black
          .left
            background-color #F7F7F7
            float left
            width 200px
            height 100%
          ul
            float left
            width 200px
            height 100%
            li
              height 40px
              line-height 40px
              margin 0 10px
            &.left
              background-color #F7F7F7
              .left_cur
                color blue
            &.center
              .center_li
                display none
              .center_li_cur
                display block
                .center_ul
                  .center_ul_li_cur
                    color blue
            &.right
              .right_li
                display none
                text-align left
              .right_li_cur
                display block
                p
                  width 400px
                  font-size 12px
                  margin 0px 8px
              
    .header_right
      .btn_changelanguage
        height 35px
        border-radius 8px
        background-color #000
        color #fff
      .btn_yys_login
        height 35px
</style>
