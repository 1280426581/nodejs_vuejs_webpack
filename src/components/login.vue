<template lang="html">
  <div id="loginView">
    <header>
      <strong>登 陆</strong>
    </header>
    <div class="content">
      <form  id="login" name="form">
      用户名: <input type="text" name="user" id="loginuser"><br>
      密码: <input type="password" name="password" id="loginpass">
      <input @click="fn()" value="登 陆" class="loginbtn" type="button">
      <a href="/userreg" class="userreg"  >注 册</a>
    </form>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    fn(){
      if(form.user.value==0){
        alert('用户名不能为空！')
      }else if(form.password.value==0){
        alert('密码不能为空')
      }else {
        var user=form.user.value;
        var password=form.password.value;
        console.log('用户名:',user,'密码:',password);
        this.$http.post('/login', {
        user: user,
        password: password
        },{}).then((response) => {
          console.log(response.data);
          if(response.data.code=="1"||response.data.code=="3"){
            alert(response.data.msg);
          }else if(response.data.code=="2"){
            var user=response.data.user;
            alert(response.data.msg+',欢迎'+user);
            // this.$store.dispatch('logined');
            this.$router.push({ path: '/user'});
          }
        })
      }
    }
  }
}
</script>

<style lang="css">
</style>