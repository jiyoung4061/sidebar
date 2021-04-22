<template>
  <router-view></router-view>
</template>
<script>

export default {
  name: 'App'
}
</script>
<style lang="css">
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap');

body {
  font-family: "Noto Sans KR", sans-serif;
  margin:0px;
}
body #content {
  /* background-color: #f8f8f8; */
    margin-left: 260px;
  }
body .title {
  font-size: 26px;
  letter-spacing: -1px;
  line-height: 40px;
  color: #0b6ad5;
  font-weight: bold;
  margin-right: 50px;
}
body .title-wrapper {
    padding: 41px;
}
body .addContainer {
  border: 1px solid #0b6ad5;
  background-color: #d6e9ff;
  width: 25px;
  height: 25px;
  display: inline-block;
  text-align: center;
}
body .table1-head-title {
    text-align:center;
    vertical-align: middle;
    height: 40px;
    background-color: #f6f7fb;
  }
body .table1-head-title th {
    font-size : 13px;
    letter-spacing: -1px;
    color: #5e6872;
  }
body .table1-body{
      overflow:scroll;
      text-align: center;
      background-color: #eff4f8;
      height: 50px;
      vertical-align: middle;
  }
body .table1-body td {
    font-size: 14px;
    letter-spacing: 0px;
    color: #999999;
  }
</style>
