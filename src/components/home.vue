<template lang="html">
  <div id="home">
      <header>
        <strong>YLW BLOG</strong>
      </header>
      <div class="content">
        <div class="banner">
            <!-- <div class="swiper-slide">
              <img src="../../static/images/img_1.jpg" alt="">
              <div class="text-box">
                    <p>刘德华11 / 文</p>
                </div>
            </div>
            <div class="swiper-slide"><img src="../../static/images/img_2.jpg" alt="">
              <div class="text-box">
                    <p>刘德华11 / 文</p>
                </div></div>
            <div class="swiper-slide"><img src="../../static/images/img_3.jpg" alt="">
              <div class="text-box">
                    <p>刘德华11 / 文</p>
                </div></div>
          </div>
          <div class="swiper-scrollbar"></div> -->
          <slider  animation="fade" :interval="3000" :speed="1000" width="100%" height="168px">
            <slider-item :on-click="test">
              <img src="../../static/images/img_1.jpg" alt="" class="bannerjpg">
            </slider-item>
            <slider-item :on-click="test">
              <img src="../../static/images/img_2.jpg" alt="" class="bannerjpg">
            </slider-item>
            <slider-item :on-click="test">
              <img src="../../static/images/img_3.jpg" alt="" class="bannerjpg">
            </slider-item>
          </slider>
      </div>
        <div class="news">
          <ul>
            <li v-for="(item,index) in arrList">
              <div class="img">
                <img src="../../static/images/img_1.jpg" alt="">
              </div>
              <router-link :to="'/newsshow/'+item.ID">
                <div class="title">
                <div class="maintitle">
                  {{index}},{{item.title}}
                </div>
                <div class="subtitle">
                  {{item.time}}  作者：{{item.author}}
                </div>
                </div>
              </router-link>

            </li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
import { Slider, SliderItem } from 'vue-easy-slider';
export default {
  components: {
    Slider,
    SliderItem
  },
  data(){
    return {
      arrList:[]
    }
  },
  mounted(){
    //获取数据
    this.fetchData();
  },
  methods:{
    test () {console.log(1)},
    fetchData(){
        var _this=this;
        this.$http.get('/get_news').then(function(res){
          console.log('请求的数据:',res.data);
          _this.arrList=res.data;
          console.log('把数据给arrlist:',_this.arrList);
        }).catch(function(error){
          console.log('home',error);
        });
    }
  }
}
</script>

<style lang="css">
.indicators {
    position: absolute;
    bottom: 5px !important;
    z-index: 999;
}
.bannerjpg{
  width: 100%;
}
</style>
