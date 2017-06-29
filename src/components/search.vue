<template lang="html">
  <div id="search">
    <header>
      <strong>查 询</strong>
    </header>
    <div class="content" >
        <form name="form">
        <div class="search" >
        <i class="fa fa-search "></i>
        <input type="search" name="searchtext" value="" placeholder="YLW NEWS" class="searchtext" onkeydown="if(event.keyCode==13){return false;}">
        <a class="searchbtn" @click="fn()">搜索</a>
         </div>
        </form>
      <ul class="timenews">
        <span v-show="arrList==0?false:true">搜索内容</span>
        <!-- <li><a href="">爆料！这软件分分钟读取你的苹果帐号密码</a></li>
        <li><a href="">京东重磅服务：刘强东女儿只吃这里的食品</a></li>
        <li><a href="">5000块入会！崔永元开卖非转基因食品</a></li> -->
        <li v-for="(item,index) in arrList">
          <a href="">{{item.title}}</a>
        </li>
      </ul>

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
  methods:{
    fn(){
      if(form.searchtext.value==0){
        alert('搜索内容不能为空！');
      }else{
        var _this=this;
        var searchtext=form.searchtext.value;
        this.$http.post('/search',{
          searchtext:searchtext
        }).then(function(res){
        console.log('请求的数据:',res.data);
        _this.arrList=res.data;
        }).catch(function(error){
            console.log('search',error);
        });
      }
      
    }
  }
}
</script>

<style lang="css">
.searchtext {
  display: block;
  width:100%;
  height: 4rem;
  background: #eeeeee;
  border-radius: 0.4rem;
  padding-left: 3.5rem;
  font-size: 1.8rem;
}
.searchbtn{
  position: absolute;
  height: 4rem;
  width: 6rem;
  font-size: 1.6rem;
  border-left: 1px solid #fff;
  right: 0px;
  top: 0px;
  z-index: 9999;
  line-height: 4rem;
  text-align: center;
}
</style>
