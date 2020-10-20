<template>
    <div class="page-modal">
        <div class="modal-box">
            <div class="id-text">
                <input type="text" placeholder="请输入电话号">
            </div>
            <div class="sure-sub">确定</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'modal',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-modal{
    width: 100%;
    height: 100%;
    background-color: #145376;
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 200;
}
.modal-box{
    width: 80%;
    padding: 10px;
    margin: 200px auto;
    border-radius: 8px;
    background-color: #38bc8b;
}
.id-text input{
    height: 40px;
    display: block;
    width: 100%;
    border-radius: 8px;
    border: none;
    font-size: 16px;
    margin:10px 0px;
}
.sure-sub{
    height: 40px;
    line-height: 40px;
    width: 80%;
    text-align: center;
    font-size: 18px;
    font-weight: bolder;
    border-radius: 8px;
    background-color: aqua;
    margin:0px auto;
    color: #666;
}
</style>
