<template>
  <div>
    计算前<input type="text" v-model="this.$store.state.count">
    计算后<input type="text" v-model="this.$store.getters.getStateCount ">
    <input type="button" @click="add" value="+">
    <input type="button" @click="reduce" value="-">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'PageOne',
  data () {
    return {
      msg: 'PageOne'
    }
  },
  methods:{
    add(){
      this.$store.dispatch('addFun')
      // this.$store.commit('add')
    },
    reduce(){
      this.$store.dispatch('reducetionFun')
      // this.$store.commit('reducetion')
    }
  },
  mounted:function(){
    // console.log( this.$store.getters.getStateCount )
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
