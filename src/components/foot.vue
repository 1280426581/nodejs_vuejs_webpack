<template lang="html">
  <div id="foot">
    <footer>
      <ul id="footlib">
        <!-- <li class="shouye active">
          <a href="index.html" class="red">
            <i class="fa fa-home "></i><br class="show"> 首页
          </a>
        </li>
        <li class="shouye ">
          <a href="news.html">
            <i class="fa fa-rocket "></i><br class="show"> 新闻
          </a>
        </li>
        <li class="shouye ">
          <a href="search.html">
            <i class="fa fa-search "></i><br class="show"> 查询
          </a>
        </li>
        <li class="shouye ">
          <a href="user.html">
            <i class="fa fa-user "></i><br class="show"> 用户
          </a>
        </li> -->
        <router-link to='/home' tag='li' active-class=" active" class="shouye">
          <a href="javascript:;" >
            <i class="fa fa-home "></i><br class="show"> 首页
          </a>
        </router-link>
        <router-link to='/follow' tag='li' active-class=" active" class="shouye">
          <a href="javascript:;">
            <i class="fa fa-rocket "></i><br class="show"> 新闻
          </a>
        </router-link>
        <router-link to='/search' tag='li' active-class="  active" class="shouye">
          <a href="search.html">
            <i class="fa fa-search "></i><br class="show"> 查询
          </a>
        </router-link>
        <router-link to='/user' tag='li' active-class=" active" class="shouye">
          <a href="user.html">
            <i class="fa fa-user "></i><br class="show"> 用户
          </a>
        </router-link>

      </ul>
    </footer>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
