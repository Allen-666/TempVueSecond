<template>
  <div class="hello">
    <ul>
        <li v-for="item in routePath">
          <router-link :to="item.path">{{item.name}}</router-link>
        </li>
    </ul>
    <div>
      总价:{{$store.getters.count}}
      数量:{{$store.state.num}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      routePath: [
        {name:'信息页',path:"/info"},
        {name:'新闻页',path:"/news"},
        {name:'测试页',path:"/test"}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>


