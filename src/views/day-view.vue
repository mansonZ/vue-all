<template>
    <div class="view-item">
        <choiceDate></choiceDate>
    </div>
</template>
<script>
import choiceDate from "@/components/choice-date.vue";
export default {
    name: "day-view",
    components: {
      choiceDate
    },
    data() {
        return {
            data: "",
        };
    },
    created() {

    },
};
</script>
<style scoped>
.view-item{
    padding: 0px 10px;
}
</style>