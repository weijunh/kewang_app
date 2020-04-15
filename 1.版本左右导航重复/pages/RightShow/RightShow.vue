<template>
  <div class="rightshow">
    <p>{{rightshowinfo.title || "功能强大的运营商平台"}}</p>
    <img :src="imgUrl" alt="">
    <p>{{rightshowinfo.desc || "智充针对运营商需求细化运营机制，与充电桩设备进行实时双向通信，向设备发送远程控制指令、接受设备上报的实时数据，并完成对充电设备、充电流程的远程控制。"}}</p>
  </div>
</template>


<script>
import PubSub from 'pubsub-js'
import imgUrl from '../../assets/office.75b42.jpg'
export default {
  name: 'RightShow',
  data(){
    return{
      rightshowinfo:'',
      imgUrl
    }
  },
  mounted(){
    
    PubSub.subscribe('rightShowObj', (msg, data) => {
      
      this.rightshowinfo = data
      
    })
    
  },
  destroyed(){
    
  }
}
</script>


<style lang="stylus" rel="stylesheet/stylus">
</style>