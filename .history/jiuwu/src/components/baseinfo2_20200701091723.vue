<template>
  <div class="baseinfo2">
    <div class="cate_nav">
      <van-icon @click="fanhui" class="fanhui" name="arrow-left" />基本信息
    </div>
    <div class="step">
      <van-steps :active="active">
        <van-step>h5</van-step>
        <van-step></van-step>
        <van-step></van-step>
        <van-step></van-step>
        <van-step></van-step>
        <van-step></van-step>
      </van-steps>
    </div>
    <div class="nextBtn">
      <van-button @click="next" type="primary" block>{{btn_text}}</van-button>
    </div>
  </div>
</template>


  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "baseinfo2",
  data() {
    return {
      btn_text: "下一步（1/6）",
      active: 0
    };
  },
  methods: {
    ...mapMutations(["change"]),
    fanhui() {
      if (this.active == 0) {
        this.$router.go(-1);
        this.$store.commit("change", true);
      }else{
        this.active--
        this.btn_text = `下一步(${this.active + 1}/6)`; 
      }
    },
    next() {
      this.active++;
      if (this.active == 5) {
        this.btn_text = "提交";
      } else {
        this.btn_text = `下一步(${this.active + 1}/6)`;
      }
    }
  },
  mounted() {
    this.$store.commit("change", false);
  }
};
</script>

<style scoped>
.nextBtn {
  width: 100%;
  position: fixed;
  bottom: 2vh;
  padding: 0 4vw;
}
.van-steps--horizontal {
  padding: 0;
}
.step{
  padding: 0 2vw ;
}
div {
  box-sizing: border-box;
}
</style>