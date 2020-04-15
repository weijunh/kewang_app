<template>
  <div class="rightshow">
    <p>{{rightshowinfo.title || "关于科旺"}}</p>
    <img :src="imgUrl" alt="">
    <p>{{rightshowinfo.desc || "我们围绕客户需求，并基于强大的研发能力和售前、售后服务能力向客户提供品类齐全、国内智能化水平超卓的充电桩/站产品和电动汽车能源解决方案。"}}</p>
  </div>
</template>


<script>
import PubSub from 'pubsub-js'
import imgUrl from '../../assets/lejiekewang.jpg'
export default {
  name: 'RightShow',
  data(){
    return{
      rightshowinfo:'',
      imgUrl
    }
  },
  mounted(){
    
    PubSub.subscribe('realice_kewang_rightShowObj', (msg, data) => {
      
      this.rightshowinfo = data
      
    })
    
  },
  destroyed(){
    
  }
}
</script>


<style lang="stylus" rel="stylesheet/stylus">
</style>