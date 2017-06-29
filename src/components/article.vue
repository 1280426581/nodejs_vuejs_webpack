<template lang="html">
<div id="articleView">
	<header>
      <strong>添加文章</strong>
    </header>
    <div class="content">
      <form id="login" action="/article" method="post" enctype="multipart/form-data" name="form">
      文章标题: <input type="text" name="title" id="loginuser"><br>
      内容: <textarea name="content" rows="12" cols="18" id="article"></textarea>
      文章大图: <div href="" id="articleimg" ><input type="file" name="src" accept="image/*" id="articlefile"></div>
      <input @click="fn()" value="提 交" class="loginbtn" type="button">
    </form>
    </div>
</div>
</template>
<script>
	export default {

		methods:{
			fn(){
				if(form.title.value==0){
            alert('请输入标题');
          }else if(form.content.value==0){
            alert('请输入内容');
          }else if(form.src.value==0){
            alert('请选择图片');
          }else{
        //     var content=form.content.value;
        //     content=content.replace(/\n/g,'<br/>');//用正则语句来替换\n为<br/>;
        //     form.content.value=content;
        //     var _this=this;
        //     var title=form.title.value;
        // 	var src=form.src.value;
      		// this.$http.post('/aritcle',{
      		// 	title:title,
      		// 	src:src,
      		// 	content:content
      		// }).then(function(res){
      		// 	console.log('请求的数据:',res.data);
      		// 	 alert(res.data.msg);
      		// 	 _this.$router.push({ path: '/user'});
      		// }).catch(function(error){
        //  	 console.log('home',error);
        // 	});
        	form.submit();
            alert('发布成功！')
          }
			}
		}
	}
</script>
<style>

</style>