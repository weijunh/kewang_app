<template>
  <div class="leftguide">
    
    <a href="javascript:;" :class="{on:iscur === index}" v-for="(value, index) in guidelist" :key="index" @mouseenter="iscur = index, setobj( value.obj)">
      <span>{{value.name}}</span>
    </a>
  </div>
</template>
<script>
import PubSub from 'pubsub-js'
export default {
  name:'LeftGuide',
  props:{
    guidelist:{
      type:Object
    }
  },
  data(){
    return{
      // rightShowObj:'',
      iscur: 0,
      
    }
  },
  methods:{
    goto(path) {
      // 判断,如果当前路由组件对应的path(地址)和传入进来的地址不一致,则进行替换并跳转
      if (this.$route.path !== path) {
        this.$router.replace(path)
      }
    },
    setobj( obj){
      
      // this.rightShowObj = obj
      PubSub.publish('rightShowObj', obj);
      
    }
    
  },
  mounted(){
    // 初始化数据传一次数据
    // PubSub.publish('rightShowObj', this.rightShowObj);
    //
    // this.setobj( obj)
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scope>
.leftguide
  display flex
  flex-direction column
  justify-content center
  align-items center
  a
    display flex
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
      
</style>