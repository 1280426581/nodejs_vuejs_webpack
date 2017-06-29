<template lang="html">
	<div id="userreg">
		<header>
      <strong>注 册</strong>
    </header>
    <div class="content">
      <form  id="login" name="form">
      用户名: <input type="text" name="user" id="loginuser"><br>
      密码: <input type="password" name="password" id="loginpass">
      确认密码:<input type="password" name="password1"  id="loginpass">
      <input @click="fn()"  value="注 册" class="loginbtn" type="button">
    </form>
    </div>
	</div>
</template>
<script>
export default {
  methods:{
  	fn(){
  		//this.$store.dispatch('showLoading');
  		if(form.user.value==0){
            alert('请填写用户名')
          }else if(form.password.value==0){
            alert('请填写密码')
          }else if(form.password.value!=form.password1.value){
            alert('两次密码不一致！');
          }else{
            var user=form.user.value;
            var password=form.password.value;
            console.log('用户名:',user,'密码:',password);
            this.$http.post('/userreg', {
            user: user,
            password: password
            },{}).then((response) => {
              console.log(response.data);
              if(response.data.code=="1"){
                alert(response.data.msg);
              }else if(response.data.code=="2"){
                var user=response.data.user;
                alert(response.data.msg+','+user+'请登录');
                this.$router.push({ path: '/login'});
              }
            })




      }
  	}
  }
}
</script>

<style lang="css">
</style>
