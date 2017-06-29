<template lang="html">
  <div id="follow">
    <header>
      <strong>新 闻</strong>
    </header>
    <div class="content">
      <div class="news">
        <ul>
          <li v-for="(item,index) in arrList">
            <div class="img">
              <img src="../../static/images/img_2.jpg" alt="">
            </div>
              <!-- <a href=""><div class="title">
                <div class="maintitle">
                  {{index}},{{item.title}}
                </div>
                <div class="subtitle">
                  {{item.time}}  作者：{{item.author}}
                </div>
              </div>
            </a> -->
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
export default {
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
</style>
