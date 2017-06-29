<template lang="html">
  <div id="newsshow">
    <div class="newsreturn">
      <a href="javascript:window.history.go(-1);">
      <div class="houtui">
        <i class="fa fa-chevron-left"> 后退</i>
      </div>
      </a>
      <span>{{articleData.id}}{{articleData.title}}</span>
      <div class="huifu">
        <i class="fa fa-pencil  fa-fw
        "> 回复</i>
      </div>
    </div>

    <div class="content">
      <div class="newsbody" v-html="articleData.content">
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      articleData:{}
    }
  },
  mounted(){
    var reg=/\/newsshow\/(\d+)/;
    var id=this.$route.path.match(reg)[1];
    console.log(this.$route.path);
    //获取数据
    this.fetchData(id);
  },
  methods:{
    fetchData(id){
        var _this=this;
        this.$http.post('/newsshow',{
          id:id
        }).then(function(res){
          console.log('请求的数据:',res.data[0]);
          _this.articleData=res.data[0];
          console.log('把数据给articleData:',_this.articleData);
        }).catch(function(error){
          console.log('home',error);
        });
    }
  }
}
</script>

<style lang="css">
</style>
