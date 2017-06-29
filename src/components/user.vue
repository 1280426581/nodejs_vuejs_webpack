<template lang="html">
  <div id="user">
    <header>
      <strong>用 户</strong>
    </header>
    <div class="content">
      <!-- 头像 -->
    <div class="headimg">
      <img src="../../static/images/img_1.jpg" alt="">
    </div>
    <!-- 用户名 -->
    <div class="username">{{arrList.user}}</div>
    <!-- 收藏 -->
    <div class="username">我的文章</div>
    <!-- 写文章 -->
    <button type="button" name="button" class="textarticle" onclick="location='/article'" >写文章</button>
    <!-- 退出 -->
    <a @click="logout()" class="logoutbtn" >退出登录</a>
    </div>
  </div>
</template>

<script>
import {mapGetters,matpActions} from 'vuex';
export default {
  computed:mapGetters([
    'headerShow',
    'loading',
    'login'
  ]),
  data(){
    return {
      arrList:[]
    }
  },
  mounted(){
    //获取数据
    this.fn();
  },
  methods:{
    fn(){
        var _this=this;
        this.$http.post('/get_username').then(function(res){
          console.log('请求的数据:',res.data);
          // console.log('login状态:',_this.$store.state.login);
          // if(res.data.code=="1"||_this.$store.state.login==false){
            if(res.data.code=="1"){
            alert("请重新登陆");
            _this.$router.push({ path: '/login'});
          }else if(res.data.code=="2"){
            _this.arrList=res.data;
          }
        }).catch(function(error){
          console.log('home',error);
        });
    },
    logout(){
      var _this=this;
      this.$http.post('/logout').then(function(res){
        // _this.$store.dispatch('logout');
        console.log('请求的数据:',res.data);
        alert(res.data.msg);
        _this.$router.push({ path: '/login'});
      }).catch(function(error){
          console.log('home',error);
        });
    }
  }
}
</script>

<style lang="css">
</style>
