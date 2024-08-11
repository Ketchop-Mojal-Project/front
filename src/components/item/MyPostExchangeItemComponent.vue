<template>
  <h3 v-if="!item">작성한 글이 존재하지 않습니다.</h3>
  <li
    v-else
    data-v-0f448764=""
    data-v-fbeed1e4=""
    class="feed-item"
    @click="routeTo"
  >
    <router-link
      :to="{ name: 'expostdetail', params: { id: this.item.postIdx } }"
      data-v-0f448764=""
      href=""
      class=""
      data-testid="soomgo-life-feed-item"
    >
      <p
        data-v-746dd3c0=""
        data-v-0f448764=""
        data-testid="soomgo-life-topic-name"
        class="topic-name legacy-typography interface-description gray-500 text-align-left"
      >
        <!-- eslint-disable -->
        <span>{{ item.giveCategory }} > </span>
        <span></span>
        <span>{{ item.giveBtmCategory }}</span>
        <span> <-> </span>
        <span>{{ item.takeCategory }} > </span>
        <span></span>
        <span>{{ item.takeBtmCategory }}</span>
      </p>
      <div data-v-0f448764="" class="feed-content">
        <div data-v-0f448764="">
          <section data-v-0f448764="" class="item-wrapper">
            <h3
              data-v-746dd3c0=""
              data-v-0f448764=""
              class="legacy-typography headline-subhead5 gray-900 text-align-left"
            >
              {{ item.title }}
            </h3>
            <p
              data-v-746dd3c0=""
              data-v-0f448764=""
              class="content legacy-typography interface-body2 gray-500 text-align-left"
            >
              {{ item.contents }}
            </p>
          </section>
        </div>
        <img
          v-if="item.img"
          data-v-0f448764=""
          alt="5C046547-E746-49F3-8AC2-9C7AE17EB3DA.jpg"
          data-src="https://static.cdn.soomgo.com/upload/media/119fd583-9016-4ca8-a1fd-1d8603be8d51.jpg?h=80&amp;w=80&amp;webp=1"
          src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          lazy="loading"
        />
      </div>
      <!---->
      <div>
        <div v-if="item.status === false">
          <p
            data-v-746dd3c0=""
            data-v-0f448764=""
            class="sub-information legacy-typography interface-description gray-500 text-align-left"
          >
            교환진행중
          </p>
        </div>
        <div v-else>
          <p
            data-v-746dd3c0=""
            data-v-0f448764=""
            class="sub-information legacy-typography interface-description gray-500 text-align-left"
          >
            교환마감
          </p>
        </div>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "MyPostExchangeItemComponent",
  data() {
    return {
      isExist: false,
    };
  },
  methods: {
    isItemExist() {},
  },
  props: {
    item: { Object },
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

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

img,
svg {
  vertical-align: middle;
}
img {
  border-style: none;
}
p {
  margin-top: 0;
  margin-bottom: 1rem;
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
.h3,
h3 {
  font-size: 1.75rem;
  line-height: 2.625rem;
  font-weight: 400;
  letter-spacing: -0.03125rem;
}

.feed-item[data-v-0f448764] {
  padding: 1.25rem 0.5rem;
  cursor: pointer;
  border-bottom: 0.0625rem solid #f4f4f4;
}
.feed-item .topic-name[data-v-0f448764] {
  margin-bottom: 0.5rem;
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
.feed-item .feed-content[data-v-0f448764] {
  display: flex;
  margin-bottom: 0.75rem;
}
.feed-item .feed-content > div[data-v-0f448764] {
  flex: 1;
  padding-right: 1rem;
}
.feed-item .feed-content > img[data-v-0f448764] {
  width: 5rem;
  height: 5rem;
  border: 0.0625rem solid #f4f4f4;
  border-radius: 8px;
}
.feed-item .sub-information[data-v-0f448764] {
  margin-bottom: 0;
  font-size: 0.875rem;
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

.legacy-typography.gray-900[data-v-746dd3c0] {
  color: #2d2d2d;
}
.feed-item h3[data-v-0f448764] {
  display: -webkit-box;
  max-height: 1.57em;
  line-height: 1.57;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 0.25rem;
  font-weight: 500;
}
.headline-subhead5[data-v-746dd3c0] {
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.57143;
  letter-spacing: -0.01875rem;
}
.feed-item .content[data-v-0f448764] {
  display: -webkit-box;
  max-height: 3.14em;
  line-height: 1.57;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 0.625rem;
}

.legacy-typography.gray-500[data-v-746dd3c0] {
  color: #888;
}
.interface-body2[data-v-746dd3c0] {
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.57143;
  letter-spacing: -0.01875rem;
}

.feed-footer[data-v-0f448764] {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>

<style scoped>
/* @import "../../../css/118.css";
@import "../../../css/index.css";
@import "../../../css/130.css";
@import "../../../css/291.css";
@import "../../../css/554.css";
@import "../../../css/563.css";
@import "../../../css/565.css";
@import "../../../css/571.css"; */
</style>