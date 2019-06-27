<template>
  <div class="hello">
      <h1>我是信息页</h1>
      <button @click="jia">add</button>
      <button @click="test">test</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg:""
    }
  },
  mounted(){
    // this.$apis.mockTest()
    this.$apis.mockLogin().then((res)=>{
      console.log(res);
    })

     this.$apis.mockTest().then((res)=>{
      console.log(res);
    })

    // console.log(this.$store.state.name)
    //  var data={
    //           v: '1559785164172',
    //           c: 'Index',
    //           m: 'GetBannerList',
    //           Type: '2',
    //           City: '上海'
    //         };
    // this.$apis.GetBannerList(data).then((res)=>{
    //     console.log(res);
    // })
  },
  methods:{
    jia(){
      // console.log()
      // 调用mutations里面同步方法的方法,使用commit
      this.$store.commit("add");
    },
    test(){
      // 调用actions里面异步方法的方法,使用dispatch
       this.$store.dispatch("add");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


.box{
  width:100%;
  height:r(48*2);
  background:red;
}

</style>


