<template>
  <div>
    <h1>{{ count1 }}</h1>
     <!-- <h1>{{ getStateCount }}</h1> -->
    <router-view></router-view>
  </div>
</template>

<script>
import {mapState,mapActions,mapGetters} from 'vuex';
export default {
  name: 'PageTwo',
  data () {
    return {
      msg: 'PageTwo'
    }
  },
  computed:{
    ...mapState({
      count1:state=>state.count
    })
  },
  mounted(){
    
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
