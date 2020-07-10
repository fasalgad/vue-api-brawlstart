<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  created(){
    console.log(process)
    console.log(this.$apiBrawl,this.$apiBrawl.get('/players/%2322GRUGYYL'))
  }
}
</script>
