<template>
  <div class="about">
    <h1>This is an day page{{data}}</h1>
  </div>
</template>
<script>
import {getDay} from '../api/api.js'
export default {
  name: 'day-view',
  data:function(){
    return {
      data:''
    }
  },
  created: async function () {
    let res = await getDay('2020-12-14','18611347662');
    this.data=res.data.data
    console.log(this.data);
  }

  
}
</script>