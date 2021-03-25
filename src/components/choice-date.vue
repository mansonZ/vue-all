<!--  -->
<template>
    <div class="date-choice">
        <div class="month-box">
            <div class="pre-day">
                <img
                    src="../assets/images/pre-week.png"
                    alt=""
                />
            </div>
            <el-date-picker v-model="date" type="date" value-format="yyyy-MM-dd" placeholder="选择日期" style="
                    width: 64%;
                    float: left;
                    text-align: center;
                    background-color: #ffffff;
                    color: #575757;
                    height: 40px;
                    line-height: 40px;
                    border-radius: 0px;
                    text-align:center;
                ">
            </el-date-picker>            
            <div class="next-day">
                <img
                    src="../assets/images/next-week.png"
                    alt=""
                />
            </div>
        </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { mapGetters, mapMutations } from 'vuex';
// import { getDay } from "../api/api.js";
export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
        return {
            date: "",
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {
        date:async function(val){
            this.changeDate(val);
            // let res = await getDay(val, this.$store.state.defaultPhone);            
        }
    },
    //方法集合
    methods: {
        ...mapMutations([
            'changeDate'
        ]),
        ...mapGetters([

        ])
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
        var nowDate = new Date();
        var year = nowDate.getFullYear();
        var month = nowDate.getMonth() + 1;
        if (month < 10) {
            month = "0" + month;
        }
        var day = nowDate.getDate();
        if (day < 10) {
            day = "0" + day;
        }
        var today = year + "-" + month + "-" + day;
        this.date = today;
        this.changeDate(today);
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {},
    beforeCreate() {}, //生命周期 - 创建之前
    beforeMount() {}, //生命周期 - 挂载之前
    beforeUpdate() {
        console.log(this.date)
    }, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
/* //@import url(); 引入公共css类 */
.date-choice{
    height: 40px;
    margin: 10px auto;
    padding: 8px;
    background-color: #fff;
    border-radius: 10px;
}
.pre-day{
    height: 40px;
    width: 18%;
    float: left;
    background-color: #1676fe;
    border-radius: 4px 0px 0px 4px;
}
.pre-day img{
    display: block;
    height: 14px;
    margin: 13px auto;
}
.next-day{
    height: 40px;
    width: 18%;
    float: left;
    background-color: #1676fe;
    border-radius: 0px 4px 4px 0px;
}
.next-day img{
    display: block;
    height: 14px;
    margin: 13px auto;
}
</style>