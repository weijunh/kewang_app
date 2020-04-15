<template>
  <div class="showimg">
    <ul class="showimg_ul">
      <li class="showimg_li" v-for="(value , index ) in human_resources" :key="index">
        <img :src="imgUrl" alt="图片" >
        <span>{{value.desc}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import imgUrl from '../../assets/renli.jpg'

export default {
  name: 'showimg',
  props:{
    human_resources:{
      type: Array
    }
  },
  data(){
    return{
      imgUrl
    }
  },
  methods:{

  },
  mounted(){

  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scope>
.showimg
  .showimg_ul
    overflow hidden
    .showimg_li
      float left
      display flex
      flex-direction column
      justify-content center
      align-items center
      margin-top 10px !important 
</style>