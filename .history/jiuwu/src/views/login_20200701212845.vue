<template>
  <div class="login">
    <div class="close">
      <van-icon name="cross" />
    </div>
    <div class="hello">
      <span>Hello</span>
      <p>欢迎来到95分闲置交易平台</p>
    </div>
    <!-- 输入手机号 -->
    <div class="input">
      <van-field
        @input="shuru"
        v-model="tel"
        clearable
        type="tel"
        label="+ 86"
        placeholder="请输入手机号码"
      />
      <van-cell-group>
        <van-field @input="inputSms" v-model="sms" center clearable placeholder="请输入短信验证码">
          <template #button>
            <van-button
              @click="sendcode"
              :disabled="codejinyong"
              color="white"
              size="small"
              type="primary"
            >
              <span ref="code" class="sendCode" v-text="text"></span>
            </van-button>
          </template>
        </van-field>
      </van-cell-group>
    </div>
    <!-- 登录按钮 -->
    <div class="login_btn">
      <van-button type="primary" :disabled="disable" block>登录</van-button>
      <br />
      <van-button @click="zhezhaoceng" color="white" size="small" type="primary">
        <span class="sendCode">收不到验证码？</span>
      </van-button>
    </div>
        <!-- 遮罩层 -->
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper" @click.stop>
        <div class="block" />
      </div>
    </van-overlay>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "login",
  data() {
    return {
        
      sms: "",
      tel: "",
      disable: true,
      text: "发送验证码",
      codejinyong: false
    };
  },
  methods: {
    ...mapMutations(["change"]),
    shuru(value) {
      if (this.tel.length == 0) {
        this.$refs.code.className = "sendCode";
      } else {
        this.$refs.code.className = "avtive";
      }
    },
    inputSms() {
      if (this.sms.length == 6) {
        this.disable = false;
      }
    },
    sendcode() {
      if (this.tel.length != 11) {
        this.$toast("请输入正确的手机号码");
        return;
      }
      this.codejinyong = true;
      let time = 10;
      let timer = setInterval(() => {
        this.text = time + "s后重新发送";
        time--;
        if (time == -1) {
          this.codejinyong = false;
          clearInterval(timer);
          this.text = "发送验证码";
        }
      }, 1000);
    }
  },
  mounted() {
    this.$store.commit("change", false);
  }
};
</script>

<style scoped>
.login_btn {
  padding: 2vh 0;
  text-align: center;
}
.avtive {
  color: #53a364;
}
.sendCode {
  color: #999;
}
.input /deep/.van-field__control {
  padding-left: 2vw;
}
.input /deep/ .van-field__label {
  width: 10vw;
  border-right: 1px solid #ccc;
}
.input {
  padding: 3vh 0;
}
.hello > p {
  font-size: 20px;
  color: black;
  font-weight: 600;
}
.hello > span {
  color: black;
  font-size: 40px;
  font-weight: 700;
}
.hello {
  padding: 4vh 0;
}
.close {
  color: #cccccc;
  font-size: 22px;
}
.login {
  padding: 3vh 4vw;
}
</style>