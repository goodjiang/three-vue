<template>
    <div>
        <mt-header title="地址管理" style="background:#fff;border-bottom:1px solid #bbb;height:6vh;color:#101010">  
                <mt-button icon="back" slot="left" @click="btn1()"></mt-button>
            <mt-button slot="right" @click="addUser()">保存</mt-button>
        </mt-header>

        <mt-field  placeholder="收件人姓名" type="email" v-model="obj.email1" style="border-bottom:1px solid #bbb;"></mt-field>
        <mt-field  placeholder="联系手机" type="email" v-model="obj.email2" style="border-bottom:1px solid #bbb;"></mt-field>
        <mt-field  placeholder="省/市/县（区）" type="email" v-model="obj.email3" style="border-bottom:1px solid #bbb;"></mt-field>
        <mt-field  placeholder="请填写详细地址，街道/楼宇号/门牌等信息" type="email" v-model="obj.email4" style="border-bottom:1px solid #bbb;"></mt-field>
    </div>
</template>
<script>
export default {
  name: "Addadress",
  data() {
    return {
      arr: [],
      obj: {}
    };
  },
  methods: {
    btn1() {
      this.$router.go(-1);
    },
    addUser() {
      this.$store.dispatch("addUser", {
        email1: this.obj.email1,
        email2: this.obj.email2,
        email3: this.obj.email3,
        email4: this.obj.email4
      });
      this.$router.go(-1)
    }
  },

  computed: {
    users() {
      return this.$store.getters.allUsers;
    }
  }
};
</script>
<style scoped="">
</style>
