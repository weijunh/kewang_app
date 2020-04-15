<template>
  <div class="guide_show">
    <div class="leftguide">
      <a href="javascript:;" :class="{on:iscur === index}" v-for="(value, index) in guidelist" :key="index" @mouseenter="iscur = index, setobj( value.obj)">
        <span>{{value.name}}</span>
      </a>
    </div>
    <ul class="rightshow">
      <li v-for="(value, index) in guidelist" :key="index" :class="{on: iscur === index}">
        <p>{{ value.obj.title}}</p>
        <img :src="imgUrl" alt="图片展示">
        <p>{{ value.obj.desc }}</p>
      </li>
    </ul>
  </div>

</template>

<script>
import PubSub from 'pubsub-js'
import imgUrl from '../../assets/office.75b42.jpg'
export default {
  name: 'LeftGuide',
  props: {
    guidelist: {
      type: Array
    }
  },
  data () {
    return {
      // rightShowObj:'',
      iscur: 0,
      imgUrl
    }
  },
  methods: {
    setobj (obj) {
      // this.rightShowObj = obj
      // PubSub.publish('rightShowObj', this.iscur);
    }
  },
  mounted () {
    // 初始化数据传一次数据
    // PubSub.publish('rightShowObj', this.rightShowObj);
    // this.setobj( obj)
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scope>
.guide_show
  display flex
  .leftguide
    display flex
    flex 1
    flex-direction column
    justify-content center
    align-items center
    background-color #F7F7F7
    a
      display inline-block
      height 20px
      line-height 20px
      text-align center
      margin 5px
      &.on
        span
          color blue
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        color #000
  .rightshow
    flex 3
    box-sizing border-box
    margin 10px 20px
    li
      display none
      &.on
        display block
      p
        text-align left
        font-size 14px
        line-height 20px
</style>