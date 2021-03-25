<template>
    <div class="view-item">
        <choiceDate></choiceDate>
    </div>
</template>
<script>
import { getDay } from "../api/api.js";
import choiceDate from "@/components/choice-date.vue";
export default {
    name: "day-view",
    components: {
      choiceDate
    },
    data: function () {
        return {
            data: "",
        };
    },
    created: async function () {
        let res = await getDay("2020-12-14", "18611347662");
        this.data = res.data.data;
        console.log(this.data);
    },
};
</script>
<style scoped>
.view-item{
    padding: 0px 10px;
}
</style>