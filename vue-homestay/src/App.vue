<template>
  <div>
    <div class="row">
      <Banner/>
    </div>
    <div>
      <!-- 指定组件的呈现位置 -->
      <router-view></router-view> 
    </div>
  </div>
</template>

<script>
import Banner from './components/Banner'
// import Room from './components/Banner/Room'
export default {
  name: 'App',
  components:{Banner}
}
</script>

