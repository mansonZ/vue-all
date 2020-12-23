<template>
  
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Day</router-link> |
      <router-link to="/week">Week</router-link>|
      <router-link to="/month">Month</router-link>
    </div> -->
    <TabList></TabList>
    <router-view/>
  </div>
</template>
<script>
import TabList from '@/components/tab-list.vue'
export default {
  name: 'app',
  components: {
    TabList
  }
}
</script>
<style>

</style>
