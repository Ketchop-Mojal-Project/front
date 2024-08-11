<template>
  <article
    data-v-fbeed1e4=""
    data-v-05cd076e=""
    class="community-feed-list"
    topic-id="all"
  >
    <div
      data-v-71844fb9=""
      data-v-74db39ba=""
      data-v-4b40be3a=""
      class="observer-container"
    >
      <!-- 제목 및 글쓰기 버튼 -->
      <section
        data-v-74db39ba=""
        data-v-71844fb9=""
        data-observe="community-header"
        class="community-header"
        id="community-header"
      >
        <!-------------------------------------제목---------------------------------------------->
        <h3
          data-v-74db39ba=""
          data-v-71844fb9=""
          data-testid="community-main"
          class="community-title2"
        >
          총 {{ this.sharePostStore.shareListAll.length }} 개의 글
        </h3>
        <!---------------------------------- 글쓰기 버튼------------------------------------------>
        <div data-v-74db39ba="" data-v-71844fb9="">
          <div data-v-32970c25="" class="write-button-desktop">
            <!--------------------------------------- 글쓰기버튼 & 클릭시 리스트 --------------------------------------------->
            <div
              data-v-32970c25=""
              class="dropdown b-dropdown btn-group"
              id="__BVID__410"
            >
              <button
                aria-haspopup="true"
                aria-expanded="false"
                type="button"
                class="btn dropdown-toggle btn-primary"
                id="__BVID__410__BV_toggle_"
                @click="toggle"
              >
                전체
              </button>
              <ul
                role="menu"
                tabindex="-1"
                class="dropdown-menu dropdown-menu-right show"
                aria-labelledby="__BVID__410__BV_toggle_"
                style="
                  position: absolute;
                  will-change: transform;
                  top: 0px;
                  left: 0px;
                  transform: translate3d(-200px, 44px, 0px);
                "
                v-if="active"
              >
                <li data-v-32970c25="" role="presentation">
                  <a
                    role="menuitem"
                    href="/writeExchange"
                    target="_self"
                    class="dropdown-item"
                  >
                    <div data-v-32970c25="" class="dropdown-menu-item">
                      <div data-v-32970c25="" class="dropdown-menu-item-text">
                        <span
                          data-v-746dd3c0=""
                          data-v-32970c25=""
                          class="legacy-typography headline-subhead5 gray-900 text-align-left"
                          >나눔 중인 글</span
                        ><span
                          data-v-746dd3c0=""
                          data-v-32970c25=""
                          class="legacy-typography interface-description gray-500 text-align-left"
                        ></span>
                      </div>
                      <i data-v-32970c25="" class="dropdown-menu-item-icon"></i>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
    <ul data-v-fbeed1e4="" class="feed-list">
      <MyPostShareItemComponent
        v-for="items in this.sharePostStore.shareListAll"
        :key="items.postIdx"
        :item="items"
        @click="getSharePostDetail"
      >
      </MyPostShareItemComponent>

      <div
        v-if="this.sharePostStore.shareListAll.length == 0"
        class="item-none"
      >
        해당 카테고리 글이 존재하지 않습니다
      </div>
      <div>
          <p v-if="this.sharePostStore.hasMore" style="text-align: center; cursor: pointer">
            <span @click="loadData">더보기 ></span>
          </p>
      </div>
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
import { mapStores } from "pinia";
import { useCategoryStore } from "../../store/useCategoryStore";
import { useSharePostStore } from "@/store/useSharePostStore";
import MyPostShareItemComponent from "@/components/item/MyPostShareItemComponent.vue";

export default {
  name: "SharePostListComponent",
  components: {
    MyPostShareItemComponent,
  },
  data() {
    return {
      active: false,
      postLength: 0,
      itemidx: 0,
    };
  },
  computed: {
    ...mapStores(useCategoryStore),
    ...mapStores(useSharePostStore),
  },
  created() {
    this.itemidx = this.$route.params.id;
  },
  mounted() {
    this.loadData();
  },
  methods: {
    toggle() {
      this.active = !this.active;
    },
    async loadData() {
      await this.sharePostStore.getShareListAll(
        this.sharePostStore.currentPage,
        this.sharePostStore.pageSize
      );
    },
    async getSharePostDetail() {
      await this.sharePostStore.getSharePost(this.itemidx);
      console.log(this.sharePostStore.sharePost);
    },
  },
};
</script>

<style scoped>
* {
  word-break: break-word;
}

*,
:after,
:before {
  box-sizing: border-box;
}
article,
aside,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section {
  /* display: block; */
}

ul {
  padding: 0;
}
dl,
ol,
ul {
  margin-top: 0;
}
address,
dl,
ol,
ul {
  margin-bottom: 1rem;
}

.legacy-typography.gray-900[data-v-746dd3c0] {
  color: #2d2d2d;
}

.legacy-typography.gray-500[data-v-746dd3c0] {
  color: #888;
}

.interface-description[data-v-746dd3c0] {
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.0125rem;
}

article,
aside,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section {
  display: block;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

.h1,
.h2,
h1,
h2 {
  font-weight: 400;
}
.h1,
h1 {
  font-size: 2.5rem;
  line-height: 3.75rem;
  letter-spacing: -0.04375rem;
}

#app[data-is-loaded="true"],
#app[data-is-loaded="true"] #app-body,
#app[data-is-loaded="true"] #app-header,
#app[data-is-loaded="true"] #app-sticky-nav {
  opacity: 0;
}

#app #app-body {
  height: 100%;
  position: relative;
  flex-grow: 1;
}

#app #app-body,
#app #app-header {
  transition: opacity 0.3s ease-in;
}

ul {
  padding: 0;
}

dl,
ol,
ul {
  margin-top: 0;
}

address,
dl,
ol,
ul {
  margin-bottom: 1rem;
}

ul li {
  list-style: none;
}

a,
a:hover {
  text-decoration: none;
}

a {
  color: #323232;
  background-color: transparent;
}

.write-button-desktop
  .b-dropdown[data-v-32970c25]
  .dropdown-menu
  .dropdown-item {
  padding: 0;
}

.community-container[data-v-c05eb1ae] {
  max-width: 100%;
}

@media (min-width: 992px) {
  .container,
  .container-lg,
  .container-md,
  .container-sm {
    max-width: 60rem;
  }
}

@media (min-width: 768px) {
  .container,
  .container-md,
  .container-sm {
    max-width: 45rem;
  }
}

@media (min-width: 576px) {
  .container,
  .container-sm {
    max-width: 33.75rem;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 60rem;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 45rem;
  }
}

@media (min-width: 576px) {
  .container {
    max-width: 33.75rem;
  }
}

.container {
  width: 100%;
  padding-right: 0.9375rem;
  padding-left: 0.9375rem;
  margin-right: auto;
  margin-left: auto;
}

@media (max-width: 991.98px) {
  .community-layout[data-v-4b40be3a] {
    flex-direction: column;
  }
}

@media (max-width: 991.98px) {
  .community[data-v-4b40be3a] {
    width: 100%;
  }
}

.community-layout[data-v-4b40be3a] {
  display: flex;
  flex-direction: row;
}

.soomgo-life-container[data-v-0352d1b6] {
  width: 60.625rem;
  max-width: 100%;
  height: 100%;
}

.soomgo-life-container[data-v-0352d1b6][data-v-45ac653f] {
  width: 60.625rem;
  max-width: 100%;
  height: 100%;
  margin: auto;
}

.community[data-v-4b40be3a] {
  width: 60.625rem;
  padding-bottom: 5rem;
  margin: auto;
}

/*************************************** 글쓰기버튼 이랑 제목 **********************************************/
.community-header[data-v-74db39ba] {
  display: flex;
  justify-content: space-between;
  padding-top: 3.125rem;
  margin-bottom: 2.5rem;
  align-items: flex-end;
}

.community-header .community-title[data-v-74db39ba] {
  font-size: 2.125rem;
  font-weight: 500;
  line-height: normal;
  letter-spacing: normal;
  margin: 0;
  color: #323232;
}

.btn-group,
.btn-group-vertical {
  position: relative;
  display: inline-flex;
  vertical-align: middle;
}

.dropdown,
.dropleft,
.dropright,
.dropup {
  position: relative;
}

.write-button-desktop .b-dropdown[data-v-32970c25] button.btn.dropdown-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7.5rem;
  height: 2.75rem;
  background-color: #00c7ae;
  border: none;
  border-radius: 6px;
}

.write-button-desktop
  .b-dropdown[data-v-32970c25]
  button.btn.dropdown-toggle:after {
  width: 1.125rem;
  height: 1.125rem;
  margin-left: 0.25rem;
  border: 0;
  background-image: url(https://assets.cdn.soomgo.com/icons/icon-board-create.svg);
  background-size: cover;
  background-repeat: no-repeat;
}

.btn-group-vertical > .btn,
.btn-group > .btn {
  position: relative;
  flex: 1 1 auto;
}

[type="button"]:not(:disabled),
[type="reset"]:not(:disabled),
[type="submit"]:not(:disabled),
button:not(:disabled) {
  cursor: pointer;
}

.btn {
  font-weight: 500;
  transition: opacity 0.2s ease-in-out;
}

.dropdown-toggle {
  white-space: nowrap;
}

.dropdown-toggle:after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}

.btn-primary {
  color: #fff;
  background-color: #5f5f5f;
  border-color: #5f5f5f;
}

.btn {
  display: inline-block;
  font-weight: 400;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 0.0625rem solid transparent;
  padding: 0.6875rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

[type="button"],
[type="reset"],
[type="submit"],
button {
  -webkit-appearance: button;
}

button,
select {
  text-transform: none;
}

button,
input {
  overflow: visible;
}

button,
input,
optgroup,
select,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

button {
  border-radius: 0;
}

/* @media (max-width: 991.98px) {
  .write-button-desktop
    .b-dropdown[data-v-32970c25]
    button.btn.dropdown-toggle {
    display: none;
  }
} */

.write-button-desktop .b-dropdown[data-v-32970c25] button.btn.dropdown-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5.5rem;
  height: 2rem;
  background-color: #5f5f5f;
  border: none;
  border-radius: 6px;
}

.write-button-desktop .b-dropdown[data-v-32970c25] .dropdown-menu {
  width: 20rem;
  padding: 0.5rem 0;
  margin-top: 0.875rem;
  text-align: center;
  border: 0.0625rem solid #e1e1e1;
}

.dropdown-menu-right {
  right: 0;
  left: auto;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #323232;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 0.0625rem solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
}

.dropdown-menu.show {
  display: block;
}

.dropdown-menu[x-placement^="bottom"],
.dropdown-menu[x-placement^="left"],
.dropdown-menu[x-placement^="right"],
.dropdown-menu[x-placement^="top"] {
  right: auto;
  bottom: auto;
}

.dropdown-menu-right {
  right: 0;
  left: auto;
}

.dropdown-item {
  display: block;
  width: 100%;
  padding: 0.25rem 1.5rem;
  clear: both;
  font-weight: 400;
  color: #323232;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
}

.write-button-desktop
  .b-dropdown[data-v-32970c25]
  .dropdown-menu
  .dropdown-item {
  padding: 0;
}

.write-button-desktop .dropdown-menu-item[data-v-32970c25] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.875rem 1.25rem;
}

.write-button-desktop .dropdown-menu-item-text[data-v-32970c25] {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: flex-start;
}

.headline-subhead5[data-v-746dd3c0] {
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.57143;
  letter-spacing: -0.01875rem;
}

/***********************************************  community layout ********************************************************/
.community-layout[data-v-4b40be3a] {
  display: flex;
  flex-direction: row;
}

@media (max-width: 991.98px) {
  .community-layout[data-v-4b40be3a] {
    flex-direction: column;
  }
}
/************************************** community content layout***************************************************/

.community-feed-list[data-v-fbeed1e4] {
  padding: 0 0 5rem;
}

@media (min-width: 768px) {
  .community-content-layout[data-v-05cd076e] {
    width: 37.5rem;
    padding-top: 0;
    margin-left: 5.3125rem;
  }
}
</style>

<!-- <style scoped>
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
.write-button-desktop
  .b-dropdown[data-v-32970c25]
  .dropdown-menu
  .dropdown-item {
  padding: 0;
}

.write-button-desktop .b-dropdown[data-v-32970c25] button.btn.dropdown-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5.5rem;
  height: 1.75rem;
  border: 1px solid black;
  border-radius: 6px;
}
.write-button-desktop
  .b-dropdown[data-v-32970c25]
  button.btn.dropdown-toggle:after {
  width: 1.125rem;
  height: 1.125rem;
  margin-left: 0.25rem;
  border: 0;
  background-image: url(https://assets.cdn.soomgo.com/icons/icon-board-create.svg);
  background-size: cover;
  background-repeat: no-repeat;
}

#btn-flex {
  display: flex;
  flex-direction: row;
}

.btn-group-vertical > .btn,
.btn-group > .btn {
  position: relative;
  flex: 1 1 auto;
}

.btn-group-vertical > .btn,
.btn-group > .btn {
  position: relative;
  flex: 1 1 auto;
}

[type="button"]:not(:disabled),
[type="reset"]:not(:disabled),
[type="submit"]:not(:disabled),
button:not(:disabled) {
  cursor: pointer;
}

.btn {
  font-weight: 500;
  transition: opacity 0.2s ease-in-out;
}

.dropdown-toggle {
  white-space: nowrap;
}

.dropdown-toggle:after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}

.write-button-desktop .b-dropdown[data-v-32970c25] button.btn.dropdown-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5.5rem;
  height: 1.75rem;
  background-color: #00c7ae;
  border: none;
  border-radius: 6px;
}

.write-button-desktop .b-dropdown[data-v-32970c25] .dropdown-menu {
  width: 20rem;
  padding: 0.5rem 0;
  margin-top: 0.875rem;
  text-align: center;
  border: 0.0625rem solid #e1e1e1;
}

.dropdown-menu-right {
  right: 0;
  left: auto;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #323232;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 0.0625rem solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
}

.dropdown-menu.show {
  display: block;
}

.dropdown-menu[x-placement^="bottom"],
.dropdown-menu[x-placement^="left"],
.dropdown-menu[x-placement^="right"],
.dropdown-menu[x-placement^="top"] {
  right: auto;
  bottom: auto;
}

.dropdown-menu-right {
  right: 0;
  left: auto;
}

.dropdown-item {
  display: block;
  width: 100%;
  padding: 0.25rem 1.5rem;
  clear: both;
  font-weight: 400;
  color: #323232;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
}

.write-button-desktop
  .b-dropdown[data-v-32970c25]
  .dropdown-menu
  .dropdown-item {
  padding: 0;
}

.write-button-desktop .dropdown-menu-item[data-v-32970c25] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.875rem 1.25rem;
}

.write-button-desktop .dropdown-menu-item-text[data-v-32970c25] {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: flex-start;
}

/*************************************** 글쓰기버튼 이랑 제목 **********************************************/
.community-header[data-v-74db39ba][data-v-6ceead60] {
  display: flex;
  justify-content: space-between;
  padding-top: 3.125rem;
  margin-bottom: 2.5rem;
  align-items: center;
}

/* .community-title[data-v-74db39ba] {
  font-size: medium;
  font-weight: 900;
} */
</style> -->