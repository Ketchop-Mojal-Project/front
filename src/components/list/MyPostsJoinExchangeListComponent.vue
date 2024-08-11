<template>
  <article
    data-v-fbeed1e4=""
    data-v-05cd076e=""
    class="community-feed-list"
    topic-id="all"
  >
    <h3 style="padding-bottom: 30px">내가 참여한 글목록</h3>

    <h4>교환글</h4>
    <ul data-v-fbeed1e4="" class="feed-list">
      <MyPostExchangeItemComponent
        v-for="items in this.myPostStore.myJoinExchangeListAll"
        :key="items.postIdx"
        :item="items"
      >
      </MyPostExchangeItemComponent>
      <div
        v-if="this.myPostStore.myJoinExchangeListAll.length == 0"
        class="item-none"
      >
        참여한 글이 존재하지 않습니다
      </div>
      <a
        v-if="this.myPostStore.myJoinExchangeListAll.length !== 0"
        href="/myPostExchange.html"
      >
        <p style="text-align: center; cursor: pointer">
          <span>더보기 ></span>
        </p>
      </a>
    </ul>

    <div data-v-68994f89="" data-v-fbeed1e4="">
      <div data-v-fbeed1e4="" data-v-68994f89=""></div>
      <div data-v-71844fb9="" data-v-68994f89="" class="observer-container">
        <div
          data-v-71844fb9=""
          id="observer-6395c2fb-ea91-4460-b969-a48ae2b0b2b1"
        ></div>
      </div>
    </div>
  </article>
</template>

<script>
import MyPostExchangeItemComponent from "@/components/item/MyPostExchangeItemComponent.vue";
import { useMyPostStore } from "@/store/useMyPostStore";
import { mapStores } from "pinia";

export default {
  name: "MyPostsJoinExchangeListComponent",
  components: {
    MyPostExchangeItemComponent,
  },
  data() {
    return {
      token: "",
      email: "",
      password: "",
      active: false,
      share: false,
      exchange: false,
    };
  },
  computed: {
    ...mapStores(useMyPostStore),
  },
  created() {
    this.getMyExchangedList();
  },
  methods: {
    async getMyExchangedList() {
      await this.myPostStore.getMyJoinExchangeListAll();
    },
  },
};
</script>

<style scoped>
.feed-list[data-v-fbeed1e4] {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding-bottom: 20px;
}
.item-none {
  display: -webkit-box;
  max-height: 3.14em;
  line-height: 1.57;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0 auto;
  padding: 50px 0;
  font-size: 20px;
  color: #b5b5b5;
}
</style>