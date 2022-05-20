<template>
  <div class="container">
    <van-row class="left">
      <van-col span="5" class="left left1">
        <div class="leftlogo">公司logo</div>
        <div class="leftlogo"><img :src="scimg" />生产任务</div>
        <div class="leftlogo"><img :src="zjimg" />质检任务</div>
        <div class="leftlogo"><img :src="ckimg" />仓库管理</div>
      </van-col>
      <van-col span="19">
        <div class="leftlogo">
          <van-search
            v-model="searchvalue"
            shape="round"
            placeholder="请输入搜索搜索条件"
            style="    width: 100%;
             height: 100%;"
          />
        </div>
        <div class="itemrit" @click="goScinfo">
          <van-row class="left">
            <van-col class="left yixiada" span="4"
              ><div class="yixiadadiv">已下达</div></van-col
            >
            <van-col class="left renwu" span="10">
              <div>任务编号:2004495858869</div>
              <div>产品名称:xxxxxx</div>
              <div>任务失效状态:新任务</div>
              <div>计划开始时间:2022/3/5</div></van-col
            >
            <van-col class="left renwu" span="10">
              <div>计划生产数量:200张</div>
              <div>规格型号:7mm x 400mm</div>
              <div>期限:2022/3/5</div>
              <div>计划结束时间:2022/3/5</div></van-col
            >
          </van-row>
        </div>
        <div class="itemrit" @click="goScinfo">
          <van-row class="left">
            <van-col class="left yixiada" span="4"
              ><div class="sczdiv">生产中</div></van-col
            >
            <van-col class="left renwu" span="10">
              <div>任务编号:2004495858869</div>
              <div>产品名称:xxxxxx</div>
              <div>任务失效状态:新任务</div>
              <div>计划开始时间:2022/3/5</div></van-col
            >
            <van-col class="left renwu" span="10">
              <div>计划生产数量:200张</div>
              <div>规格型号:7mm x 400mm</div>
              <div>期限:2022/3/5</div>
              <div>计划结束时间:2022/3/5</div></van-col
            >
          </van-row>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { Button, Tabbar, TabbarItem, Swipe, SwipeItem } from "vant";
import { mapActions, mapMutations, mapState } from "vuex"; // createNamespacedHelpers
import FooterTabbar from "components/FooterTabbar";
import img from "assets/webpack.png";
import scimg from "assets/u47.png";
import zjimg from "assets/u43.png";
import ckimg from "assets/u44.png";
// const { mapActions } = createNamespacedHelpers('test') // 可使用这种方式直接获得test模板

export default {
  name: "home",
  components: {
    [Button.name]: Button,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    FooterTabbar
  },
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
      ],
      iconList: [
        "dashboard",
        "example",
        "eye-open",
        "eye",
        "form",
        "link",
        "nested",
        "password",
        "table",
        "tree",
        "user",
        "404"
      ]
    };
  },

  computed: {
    ...mapState({
      loading: state => state["@@loading"].effects["test/onePlusAsync"]
    })
  },
  methods: {
    add() {
      this.onePlusAsync(this.value);
    },
    goScinfo() {
      this.$router.push("/scinfo");
    },
    addOne() {
      this.onePlus(1);
    },
    // ...mapActions('home', ['initData', 'plusPage', 'initPage']),
    ...mapActions({
      onePlusAsync: "test/onePlusAsync"
    }),
    ...mapMutations({
      onePlus: "test/onePlus",
      logout: "user/LOGOUT"
    })
  }
};
</script>
<style lang="scss" scoped>
.container {
  height: auto;
  width: 100%;
  // padding-bottom: 50px;
  .left {
    height: 100%;
  }
  .left1 {
    border-right: 1px solid rgba(121, 121, 121, 1);
    border-left: 1px solid rgba(121, 121, 121, 1);
  }
  .leftlogo {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    height: 78px;
    border-bottom: 1px solid rgba(121, 121, 121, 1);
    img {
      width: 25px;
      height: 25px;
      margin-right: 5px;
    }
  }
  .itemrit {
    height: 90px;
    border-top: 1px solid rgba(121, 121, 121, 1);
    border-bottom: 1px solid rgba(121, 121, 121, 1);
    margin-bottom: 10px;
    .yixiada {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      .yixiadadiv {
        color: #1989fa;
        font-weight: 600;
      }
      .sczdiv {
        color: #07c160;
        font-weight: 600;
      }
    }
    .renwu {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      font-size: 12px;
    }
  }
}
</style>
