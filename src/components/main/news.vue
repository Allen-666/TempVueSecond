<template>
  <div class="hello">
      <h1>我是新闻页</h1>
      <button @click="test">调用</button>
      <router-link to="/news/childCom">子路由</router-link>
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  },
  mounted(){
   
  },
  methods:{
    test(){
      this.$eventHub.$emit("sub",{name:"Msea"})
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


