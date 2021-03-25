<template>
  <div class="tab-list">
    <div class="tab-item day-week-tab-item" :class="{ 'tab-ac': selectedIndex == 1 }"
    @click="changeIndex(1)">
      <div class="tab-item-box">
        <img
          src="../assets/images/light-tab-day.png"
          alt=""
          class="tab-item-icn-a"
          v-show="selectedIndex==1"
        />
        <img
          src="../assets/images/light-tab-day-a.png"
          alt=""
          class="tab-item-icn-b"
          v-show="selectedIndex!=1"
        />
        <div class="tab-text" :class="{ 'tab-text-ac': selectedIndex == 1 }">日视图</div>
      </div>
    </div>
    <div class="tab-item day-week-tab-item" :class="{ 'tab-ac': selectedIndex == 2}"
    @click="changeIndex(2)">
      <div class="tab-item-box">
        <img
          src="../assets/images/light-tab-week.png"
          alt=""
          class="tab-item-icn-a"
          v-show="selectedIndex==2"
        />
        <img
          src="../assets/images/light-tab-week-a.png"
          alt=""
          class="tab-item-icn-b"
          v-show="selectedIndex!=2"
        />
        <div class="tab-text" :class="{ 'tab-text-ac': selectedIndex == 2 }">周视图</div>
      </div>
    </div>
  </div>
  <!-- <div class="tab-list">
    <div
      class="tab-item"
      :class="{ 'tab-ac': selectedIndex == 1 }"
      @click="changeIndex(1)"
    >
      <div class="tab-item-box">
        <img src="../assets/images/tab-day.png" alt="" class="tab-item-icn-a" v-show="selectedIndex==1"/>
        <img src="../assets/images/tab-day-a.png" alt="" class="tab-item-icn-b" v-show="selectedIndex!=1"/>
        <div class="tab-text" :class="{ 'tab-text-ac': selectedIndex == 1 }">日视图</div>
      </div>
    </div>
    <div
      class="tab-item"
      :class="{ 'tab-ac': selectedIndex == 2 }"
      @click="changeIndex(2)"
    >
      <div class="tab-item-box">
        <img src="../assets/images/tab-week.png" alt="" class="tab-item-icn-a" v-show="selectedIndex==2"/>
        <img src="../assets/images/tab-week-a.png" alt="" class="tab-item-icn-b" v-show="selectedIndex!=2"/>
        <div class="tab-text" :class="{ 'tab-text-ac': selectedIndex == 2 }">周视图</div>
      </div> 
      </div>
    <div
      class="tab-item"
      :class="{ 'tab-ac': selectedIndex == 3 }"
      @click="changeIndex(3)"
    >
      <div class="tab-item-box">
        <img src="../assets/images/tab-subjective.png" alt="" class="tab-item-icn-a" v-show="selectedIndex==3"/>
        <img
          src="../assets/images/tab-subjective-a.png"
          alt=""
          class="tab-item-icn-b"
          v-show="selectedIndex!=3"
        />
        <div class="tab-text" :class="{ 'tab-text-ac': selectedIndex == 3 }">主观视图</div>
      </div>
    </div>
  </div> -->
</template>

<script>
export default {
  name: "tab-list",
  data() {
    return {
      selectedIndex: 1,
    };
  },
  methods: {
    changeIndex(index) {
      this.selectedIndex = index;
      if (index == 1) {
        this.$router.push({ path: "/" });
      }
      if (index == 2) {
        this.$router.push({ path: "/week" });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab-list{
    display: flex;
    height: 32px;
    justify-content:space-between;
    margin: 0px 10px;
}
.tab-item{
    height: 30px;
    border: 1px solid #82b5ff;
    background-color: #4db1ff;
    width: 31%;
}
/*day-week*/
.day-week-tab-item{
    height: 30px;
    border: 1px solid #82b5ff;
    background-color: #4db1ff;
    width: 48%;
}
.tab-ac{
    background-color: #fff;
    border: 1px solid #82b5ff;
    color: #1676fe;
}
.tab-item-box{
    width: 65%;
    margin: 0 auto;
    height: 30px;
}
.tab-item-icn-a{
    display: block;
    height: 14px;
    width: 14px;
    margin-top: 8px;
    float: left;
}
.tab-item-icn-b{
    display: block;
    height: 14px;
    width: 14px;
    margin-top: 8px;
    float: left;
}
.tab-text{
    height: 30px;
    line-height: 30px;
    color: #fff;
    font-size: 14px;
    float: right;
    text-align: right;
    font-weight: bolder;
}
.tab-text-ac{
    color: #1676fe;
}
</style>
