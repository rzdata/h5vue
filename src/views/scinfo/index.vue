<template>
  <div>
    <van-nav-bar title="生产信息表" left-arrow @click-left="onClickLeft" />
  </div>
</template>
<script>
export default {
  name: "scinfo",

  data() {
    return {
      img,
      scimg,
      zjimg,
      ckimg,
      value: 1,
      searchvalue: "",
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ]
    };
  },

  computed: {},
  methods: {
    onClickLeft() {
      this.$router.push("/");
    }
  }
};
</script>
