<template>
  <div class="person">
      <div class="nav"> 
        <div class="settings">
            <van-icon name="setting-o" /><van-icon name="bell" />
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"person"
}
</script>

<style scoped>
.settings{
  
}
.nav{
  width: 100%;
  height: 40vh;
  background: url(../../public/image/person_bg.jpg) center center no-repeat;
  background-size: 100% 100%;
}
div{
  box-sizing: border-box;
}
</style>