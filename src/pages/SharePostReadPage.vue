<template>
  <!-- body -> div, + class=bbodyy, html -> template -->
  <div class="bbodyy" id="app-body">
    <div data-v-c05eb1ae="" class="community-container container">
      <div data-v-0352d1b6="" data-v-c05eb1ae="" class="soomgo-life-container">
        <section
          data-v-614fb5f0=""
          data-v-0352d1b6=""
          class="post-detail-container"
          postslug="66a9c15f44d1077388ba7cd5-학원-화이트보드-설치하려고-하는데-카테고리-어디로-"
          style=""
        >
          <div
            data-v-1c31fdd0=""
            data-v-614fb5f0=""
            class="soomgo-life-post-detail"
          >
            <div data-v-27cb0b18="" data-v-1c31fdd0="" class="post-header">
              <!---->
              <div
                data-v-0ec9cb3e=""
                data-v-27cb0b18=""
                class="post-category-subject"
              >
                <ol data-v-0ec9cb3e="" class="category-breadcrumb list-inline">
                  <li data-v-0ec9cb3e="" class="category-breadcrumb-item">
                    <a
                      data-v-0ec9cb3e=""
                      href="/community/soomgo-life/?from=breadcrumb"
                      class="breadcrumb-item"
                      data-testid="soomgo-life-home-breadcrumb"
                    >
                      <span
                        data-v-746dd3c0=""
                        data-v-0ec9cb3e=""
                        class="legacy-typography interface-body2 gray-400 text-align-left"
                        >글 종류</span
                      >
                    </a>
                  </li>
                  <p data-v-0ec9cb3e="" class="breadcrumb-divider"></p>
                  <li data-v-0ec9cb3e="" class="category-breadcrumb-item">
                    <a
                      data-v-0ec9cb3e=""
                      href="/community/soomgo-life/ask-provider?from=breadcrumb"
                      class="breadcrumb-item"
                    >
                      <span
                        data-v-746dd3c0=""
                        data-v-0ec9cb3e=""
                        class="legacy-typography interface-body2 gray-400 text-align-left"
                        >{{ this.sharePostStore.sharePost.postType }}</span
                      >
                    </a>
                  </li>
                </ol>
              </div>
              <div
                data-v-a9bcd63a=""
                data-v-27cb0b18=""
                class="post-header-title-wrapper has-service"
              >
                <p data-v-a9bcd63a="" class="post-service-name">
                  {{ this.sharePostStore.sharePost.category }} >
                  {{ this.sharePostStore.sharePost.btmCategory }}
                </p>
                <h1
                  data-v-746dd3c0=""
                  data-v-a9bcd63a=""
                  data-testid="soomgo-life-post-title"
                  class="post-header-title legacy-typography display-display3 gray-900 text-align-left"
                >
                  {{ this.sharePostStore.sharePost.title }}
                </h1>
                <p data-v-a9bcd63a="" class="post-address-info">
                  총 모집 인원
                  {{ this.sharePostStore.sharePost.currentEnrollment }}/ 현재
                  모집인원 : {{ this.sharePostStore.sharePost.capacity }}명
                </p>
              </div>
              <div
                data-v-5bbf4b7a=""
                data-v-27cb0b18=""
                class="user-profile-bar-container"
              >
                <div
                  data-v-5bbf4b7a=""
                  class="ambassador-badge"
                  style="display: none"
                >
                  <span
                    data-v-0d243f1a=""
                    data-v-5bbf4b7a=""
                    class="sg-icon-v1 fill"
                    style="
                      width: 0.875rem;
                      height: 0.875rem;
                      --svg-color: #00c7ae;
                    "
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.5164 2.38426C12.7028 1.49089 11.2972 1.49089 10.4835 2.38426L9.43731 3.53309C9.02613 3.98459 8.43514 4.22939 7.82512 4.20088L6.27298 4.12834C5.06596 4.07193 4.07199 5.0659 4.1284 6.2729L4.20094 7.82506C4.22945 8.43507 3.98466 9.02607 3.53315 9.43725L2.38432 10.4835C1.49095 11.2971 1.49095 12.7027 2.38432 13.5164L3.53315 14.5626C3.98466 14.9738 4.22945 15.5648 4.20094 16.1749L4.1284 17.727C4.07199 18.9339 5.06596 19.928 6.27297 19.8716L7.82512 19.799C8.43514 19.7705 9.02613 20.0152 9.43731 20.4668L10.4835 21.6156C11.2972 22.509 12.7028 22.509 13.5164 21.6156L14.5627 20.4668C14.9738 20.0152 15.5648 19.7705 16.1749 19.799L17.727 19.8716C18.934 19.928 19.928 18.9339 19.8716 17.727L19.799 16.1749C19.7705 15.5648 20.0153 14.9738 20.4668 14.5626L21.6156 13.5164C22.5091 12.7027 22.5091 11.2971 21.6156 10.4835L20.4668 9.43725C20.0153 9.02607 19.7705 8.43507 19.799 7.82506L19.8716 6.27291C19.928 5.0659 18.934 4.07193 17.727 4.12834L16.1749 4.20088C15.5648 4.22939 14.9738 3.98459 14.5627 3.53309L13.5164 2.38426ZM16.1503 10.5633C16.494 10.2197 16.494 9.66261 16.1503 9.31899C15.8067 8.97537 15.2496 8.97537 14.906 9.31899L10.8238 13.4012L9.0938 11.6712C8.75019 11.3276 8.19307 11.3276 7.84945 11.6712C7.50583 12.0148 7.50583 12.5719 7.84945 12.9155L10.2016 15.2677C10.3666 15.4327 10.5904 15.5254 10.8238 15.5254C11.0572 15.5254 11.281 15.4327 11.446 15.2677L16.1503 10.5633Z"
                        fill="black"
                      ></path>
                    </svg>
                  </span>
                  명예고수
                </div>
                <div
                  data-v-71844fb9=""
                  data-v-5bbf4b7a=""
                  class="observer-container"
                >
                  <div
                    data-v-5bbf4b7a=""
                    data-v-71844fb9=""
                    class="user-profile-wrapper"
                  >
                    <div
                      data-v-5bbf4b7a=""
                      data-v-71844fb9=""
                      class="user-profile-area"
                    >
                      <img
                        data-v-5bbf4b7a=""
                        data-v-71844fb9=""
                        alt="최유정 "
                        class="profile-image"
                        data-src="https://static.cdn.soomgo.com/upload/profile-default/soomgo_155.jpg?webp=1"
                        src="https://static.cdn.soomgo.com/upload/profile-default/soomgo_155.jpg?webp=1"
                        lazy="loaded"
                      />
                      <div
                        data-v-5bbf4b7a=""
                        data-v-71844fb9=""
                        class="profile-post-info"
                      >
                        <span
                          data-v-746dd3c0=""
                          data-v-5bbf4b7a=""
                          class="user-name legacy-typography headline-subhead5 gray-900 text-align-left"
                          data-v-71844fb9=""
                          >{{ this.sharePostStore.sharePost.author }}</span
                        >
                        <span
                          data-v-746dd3c0=""
                          data-v-5bbf4b7a=""
                          class="post-created-at legacy-typography interface-description gray-900 text-align-left"
                          data-v-71844fb9=""
                          >44분 전 · 조회 15</span
                        >
                      </div>
                    </div>
                    <div
                      data-v-5bbf4b7a=""
                      data-v-71844fb9=""
                      class="post-actions"
                    >
                      <!-- <Countdown
                        :initialHours="this.sharePostStore.sharePost.deadline"
                        @countdown-finished="handleCountdownFinished"
                      /> -->
                      <button
                        v-if="this.sharePostStore.sharePost.status === false"
                        @click="routeToShare"
                        style="
                          border: 1px solid #116ed5;
                          background: linear-gradient(65deg, #b69ce5, #0066d5);
                          color: #fff;
                          border-radius: 10px;
                          padding: 5px 10px;
                          cursor: pointer;
                        "
                      >
                        나눔신청
                      </button>
                      <button
                        v-else
                        disabled
                        style="
                          border: 1px solid #d3d9e0;
                          background-color: #d3d9e0;
                          color: #fff;
                          border-radius: 10px;
                          padding: 5px 10px;
                        "
                        class="attendbtn"
                      >
                        나눔마감
                      </button>
                      <img
                        data-v-5bbf4b7a=""
                        data-v-71844fb9=""
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMC43NyAxNS4xNzRjLjM3IDAgLjY3NS4yNzYuNzIzLjYzNGwuMDA3LjA5OXY1Ljg2YzAgLjM3MS0uMjc1LjY3OC0uNjMyLjcyNmwtLjA5OS4wMDdIMy4yMzFhLjczMi43MzIgMCAwIDEtLjcyNC0uNjMzbC0uMDA3LS4xdi01Ljg2YS43MzIuNzMyIDAgMCAxIDEuNDU1LS4xbC4wMDcuMXY1LjEyOGgxNi4wNzZ2LTUuMTI4YzAtLjM3LjI3NS0uNjc3LjYzMi0uNzI2bC4xLS4wMDd6TTEyLjQxMiAxLjYyOGwuMDkuMDcyIDYuMzc3IDYuMDVhLjczNC43MzQgMCAwIDEgLjAyOCAxLjAzNi43My43MyAwIDAgMS0uOTQ5LjA5OGwtLjA4NC0uMDY5LTUuMTQ1LTQuODgxdjExLjk3M2EuNzMyLjczMiAwIDAgMS0xLjQ1NC4xbC0uMDA3LS4xVjMuOTMzTDYuMTI1IDguODE1YS43My43MyAwIDAgMS0uOTUzLjA0NWwtLjA4LS4wNzRhLjczNC43MzQgMCAwIDEtLjA0NS0uOTU1bC4wNzMtLjA4IDYuMzc4LTYuMDUuMDQ2LS4wMzlhLjczNC43MzQgMCAwIDEgLjAxNC0uMDFsLS4wNi4wNDhhLjczLjczIDAgMCAxIC4yMTMtLjE0Yy4wMDUgMCAuMDA5LS4wMDIuMDEzLS4wMDRhLjcyNC43MjQgMCAwIDEgLjY5LjA3MnoiIGZpbGw9IiMyRDJEMkQiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K"
                        alt="공유하기"
                        class="icon"
                      />
                      <div
                        data-v-5bbf4b7a=""
                        class="dropdown b-dropdown btn-group"
                        data-v-71844fb9=""
                        id="__BVID__2354"
                      >
                        <!---->
                        <button
                          aria-haspopup="true"
                          aria-expanded="false"
                          type="button"
                          class="btn dropdown-toggle btn-secondary"
                          id="__BVID__2354__BV_toggle_"
                        ></button>
                        <ul
                          role="menu"
                          tabindex="-1"
                          class="dropdown-menu dropdown-menu-right"
                          aria-labelledby="__BVID__2354__BV_toggle_"
                        >
                          <li data-v-5bbf4b7a="" role="presentation">
                            <a
                              role="menuitem"
                              href="#"
                              target="_self"
                              class="dropdown-item"
                              >게시글 신고하기</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!---->
                </div>
                <!---->
                <div
                  data-v-5bbf4b7a=""
                  class="v-portal"
                  style="display: none"
                ></div>
              </div>
            </div>
            <hr data-v-1c31fdd0="" class="hr-divider" />
            <div data-v-e21cd7d0="" data-v-1c31fdd0="" class="body-container">
              <div data-v-e21cd7d0="" class="body-contents">
                <p
                  data-v-746dd3c0=""
                  data-v-e21cd7d0=""
                  class="text legacy-typography interface-body1 gray-900 text-align-left"
                >
                  <span data-v-e21cd7d0="" data-v-746dd3c0=""
                    >{{ this.sharePostStore.sharePost.contents }}
                  </span>
                </p>
              </div>
              <!---->
              <!---->
            </div>
            <div data-v-0a24800e="" data-v-1c31fdd0="" class="post-react-state">
              <div
                data-v-0a24800e=""
                data-testid="soomgo-life-like-button"
                class="post-react-item like-btn"
              >
                <svg
                  data-v-eec0a5dc=""
                  data-v-0a24800e=""
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="prisma-icon secondary"
                  category="toggle"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 9.91273C8 9.55024 8.09852 9.19456 8.28501 8.88373L11.785 3.0504C12.8286 1.31102 15.5 2.05095 15.5 4.07939V8.35876C15.5 8.91104 15.9477 9.35876 16.5 9.35876H20.3415C21.6724 9.35876 22.632 10.6343 22.2632 11.9131L19.9555 19.9131C19.7085 20.7692 18.9249 21.3588 18.0338 21.3588H10C8.89543 21.3588 8 20.4633 8 19.3588V9.91273ZM20.8219 11.4973L18.5142 19.4973C18.4525 19.7114 18.2566 19.8588 18.0338 19.8588H10C9.72386 19.8588 9.5 19.6349 9.5 19.3588V9.91273C9.5 9.8221 9.52463 9.73318 9.57125 9.65548L13.0713 3.82214C13.1544 3.6835 13.2427 3.62915 13.3156 3.60284C13.4013 3.57184 13.514 3.56443 13.6335 3.59753C13.753 3.63063 13.8457 3.69493 13.9033 3.76565C13.9522 3.82568 14 3.91771 14 4.07939V8.35876C14 9.73947 15.1193 10.8588 16.5 10.8588H20.3415C20.6742 10.8588 20.9142 11.1777 20.8219 11.4973Z"
                    fill="black"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2 11.3588C2 10.2542 2.89543 9.35876 4 9.35876H6C6.55228 9.35876 7 9.80648 7 10.3588V20.3588C7 20.911 6.55228 21.3588 6 21.3588H4C2.89543 21.3588 2 20.4633 2 19.3588V11.3588ZM4 10.8588H5.5V19.8588H4C3.72386 19.8588 3.5 19.6349 3.5 19.3588V11.3588C3.5 11.0826 3.72386 10.8588 4 10.8588Z"
                    fill="black"
                  ></path>
                </svg>
                <span data-v-0a24800e="">
                  좋아요
                  <!---->
                </span>
              </div>
              <div data-v-0a24800e="" class="post-react-item">
                <svg
                  data-v-eec0a5dc=""
                  data-v-0a24800e=""
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="prisma-icon secondary"
                  category="communication"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.71529 19.2553C9.03754 19.0828 9.41171 19.0339 9.76748 19.1177C10.4796 19.2856 11.2273 19.3754 12 19.3754C17.0678 19.3754 21 15.5596 21 11.0627C21 6.56576 17.0678 2.75001 12 2.75001C6.93216 2.75001 3 6.56576 3 11.0627C3 12.9498 3.68004 14.6963 4.8439 16.1032C4.96208 16.246 5.08526 16.3854 5.21324 16.521C5.47597 16.7994 5.62232 17.1677 5.62232 17.5505V20.9111L8.71529 19.2553ZM3.68814 17.0593C2.31628 15.401 1.5 13.3209 1.5 11.0627C1.5 5.64329 6.20101 1.25 12 1.25C17.799 1.25 22.5 5.64329 22.5 11.0627C22.5 16.4821 17.799 20.8754 12 20.8754C11.1109 20.8754 10.2477 20.7721 9.42325 20.5777L5.5943 22.6276C4.92814 22.9842 4.12232 22.5016 4.12232 21.746V17.5505C3.97206 17.3913 3.82724 17.2275 3.68814 17.0593ZM7.00059 12.6C7.77378 12.6 8.40059 11.9732 8.40059 11.2C8.40059 10.4269 7.77378 9.80005 7.00059 9.80005C6.22739 9.80005 5.60059 10.4269 5.60059 11.2C5.60059 11.9732 6.22739 12.6 7.00059 12.6ZM13.4006 11.2C13.4006 11.9732 12.7738 12.6 12.0006 12.6C11.2274 12.6 10.6006 11.9732 10.6006 11.2C10.6006 10.4269 11.2274 9.80005 12.0006 9.80005C12.7738 9.80005 13.4006 10.4269 13.4006 11.2ZM17.0006 12.6C17.7738 12.6 18.4006 11.9732 18.4006 11.2C18.4006 10.4269 17.7738 9.80005 17.0006 9.80005C16.2274 9.80005 15.6006 10.4269 15.6006 11.2C15.6006 11.9732 16.2274 12.6 17.0006 12.6Z"
                    fill="black"
                  ></path>
                </svg>
                <span data-v-0a24800e="">
                  댓글
                  <span data-v-0a24800e="" class="action-count">1</span>
                </span>
              </div>
            </div>
            <hr data-v-1c31fdd0="" class="hr-divider wide-divider" />

            <!--인기 고수 추천 (나중에 혹시 우리도 좋은 나눔자 넣을까봐 냄김..)-->
            <!-- 
                        <section data-v-231efbf4="" data-v-1c31fdd0="" class="popular-provider">
                            <div data-v-231efbf4="" class="popular-provider-heading">
                                <div data-v-231efbf4="">
                                    <h2 data-v-746dd3c0="" data-v-231efbf4=""
                                        class="service-name legacy-typography headline-subhead2 gray-900 text-align-left">
                                        ‘유리 제작 및 시공’</h2>
                                    <h2 data-v-746dd3c0="" data-v-231efbf4=""
                                        class="legacy-typography headline-subhead2 gray-900 text-align-left">인기 고수 추천
                                    </h2>
                                </div>
                                <a data-v-231efbf4=""
                                    href="/search/pro/%EC%9C%A0%EB%A6%AC-%EC%A0%9C%EC%9E%91%EB%B0%8F%EC%8B%9C%EA%B3%B5/address/%ED%99%88-%EB%A6%AC%EB%B9%99--%EB%AC%B8-%EC%B0%BD%EB%AC%B8/review_count?from=community_body_ad"
                                    class="">전체보기</a>
                            </div>
                            <div data-v-3d1a4f76="" data-v-55917fe8="" data-v-231efbf4="" dir="ltr"
                                class="d-none d-md-block slick-slider slick-initialized">
                                <button data-v-21137603="" data-v-3d1a4f76="" type="button" data-role="none"
                                    class="slick-arrow slick-prev slick-disabled" style="display: block;">Previous
                                </button>
                                <div data-v-3d1a4f76="" class="slick-list">
                                    <div data-v-e4caeaf8="" data-v-3d1a4f76="" class="slick-track"
                                        style="width: 2400px; opacity: 1; transform: translate3d(0px, 0px, 0px);">
                                        <div data-v-e4caeaf8="" tabindex="-1" data-index="0" aria-hidden="false"
                                            class="slick-slide slick-active slick-current"
                                            style="outline: none; width: 300px;">
                                            <div data-v-e4caeaf8="">
                                                <section data-v-6652d5db="" data-v-231efbf4=""
                                                    class="popular-provider-card" tabindex="-1" data-v-e4caeaf8=""
                                                    style="width: 100%; display: inline-block;">
                                                    <a data-v-6652d5db=""
                                                        href="/profile/users/9623442?from=community_body_ad" class="">
                                                        <div data-v-6652d5db="" class="profile-container">
                                                            <div data-v-29d5164e="" data-v-6652d5db=""
                                                                class="user-profile-picture profile-image">
                                                                <div data-v-29d5164e="" data-name="image" class=""
                                                                    data-src="https://static.cdn.soomgo.com/upload/profile/93a2934e-43f9-4225-a9e1-10808fe0e21b.jpg?webp=1&amp;h=320&amp;w=320"
                                                                    lazy="loaded"
                                                                    style="background-image: url(&quot;https://static.cdn.soomgo.com/upload/profile/93a2934e-43f9-4225-a9e1-10808fe0e21b.jpg?webp=1&amp;h=320&amp;w=320&quot;);">
                                                                </div>
                                                            </div>
                                                            <div data-v-6652d5db="" class="profile-info">
                                                                <h3 data-v-6652d5db="" class="profile-title">친절한유리가게
                                                                </h3>
                                                                <div data-v-6652d5db="" class="profile-subtitle">
                                                                    <span data-v-6652d5db="">인천광역시 부평구</span>
                                                                    ·
                                                                    <span data-v-6652d5db="">경력 22년</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div data-v-6652d5db="" class="review-container">
                                                            <div data-v-6652d5db="" class="pro-rate">
                                                                <span data-v-0d243f1a="" data-v-6652d5db=""
                                                                    class="sg-icon-v1 fill"
                                                                    style="width: 0.875rem; height: 0.875rem; --svg-color: #FFCE21;">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24"
                                                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M12.105 1.87122C11.7914 1.87122 11.4853 1.96773 11.2284 2.14766C10.975 2.32515 10.7815 2.57534 10.6734 2.86504L8.61423 8.05029L8.60808 8.06632C8.60618 8.07144 8.60283 8.0759 8.59843 8.07915C8.59404 8.0824 8.5888 8.08428 8.58334 8.0846L3.04706 8.44117C1.61138 8.5344 1.12102 10.3313 2.16552 11.2001L2.16648 11.2009L6.40277 14.7343L6.40523 14.7364C6.41476 14.7442 6.42187 14.7546 6.42574 14.7664C6.42952 14.7778 6.42985 14.791 6.4271 14.8027L5.16262 19.7857C4.79476 21.227 6.35038 22.529 7.69736 21.6729L7.69831 21.6723L12.095 18.8881C12.098 18.8862 12.1015 18.8852 12.105 18.8852C12.1086 18.8852 12.1125 18.8865 12.1155 18.8884L16.8405 21.8884L16.8424 21.8896C18.0703 22.6641 19.4818 21.4869 19.1506 20.1797L17.7827 14.8018C17.78 14.7901 17.7806 14.7778 17.7843 14.7664C17.7882 14.7546 17.7953 14.7442 17.8048 14.7364L22.0436 11.2009L22.0445 11.2001C23.089 10.3313 22.5983 8.53437 21.1626 8.44115L15.6314 8.08488L15.6267 8.08461C15.6213 8.0843 15.616 8.0824 15.6116 8.07915C15.6072 8.0759 15.6039 8.07144 15.602 8.06632L15.5958 8.05029L13.5367 2.86504C13.4286 2.57534 13.2351 2.32515 12.9816 2.14766C12.7247 1.96773 12.4187 1.87122 12.105 1.87122Z"
                                                                            fill="black"></path>
                                                                    </svg>
                                                                </span>
                                                                5
                                                            </div>
                                                            <p data-v-6652d5db="" class="review-comment">“만족합니다. 근데 이걸
                                                                떠나서 이 분 굉장히 좋으신 분이라 비용 조금 더 주더라도 이 분한테 맡기고 싶을 정도네요~ 오랜만에
                                                                거래처보다 더 좋은 분 만난 거 같아 돈 아깝지가 않네요. 리뷰 써 달라는 말도 없이 가시는데...
                                                                솔직히 리뷰 5점만점임에도 채팅상담에서 이미 별로인 사람들 보면 리뷰의 의미가 없다고 생각했지만 이
                                                                분은 어쩔 수 없이 5점 만점인듯합니다. 유리 맡기실 일 있으면 이 분한테 맡기세요.”</p>
                                                        </div>
                                                    </a>
                                                </section>
                                            </div>
                                        </div>
                                        <div data-v-e4caeaf8="" tabindex="-1" data-index="1" aria-hidden="false"
                                            class="slick-slide slick-active" style="outline: none; width: 300px;">
                                            <div data-v-e4caeaf8="">
                                                <section data-v-6652d5db="" data-v-231efbf4=""
                                                    class="popular-provider-card" tabindex="-1" data-v-e4caeaf8=""
                                                    style="width: 100%; display: inline-block;">
                                                    <a data-v-6652d5db=""
                                                        href="/profile/users/3295186?from=community_body_ad" class="">
                                                        <div data-v-6652d5db="" class="profile-container">
                                                            <div data-v-29d5164e="" data-v-6652d5db=""
                                                                class="user-profile-picture profile-image">
                                                                <div data-v-29d5164e="" data-name="image" class=""
                                                                    data-src="https://static.cdn.soomgo.com/upload/profile/757255b3-70f2-44f7-b9da-61c059b77fe7.jpg?webp=1&amp;h=320&amp;w=320"
                                                                    lazy="loaded"
                                                                    style="background-image: url(&quot;https://static.cdn.soomgo.com/upload/profile/757255b3-70f2-44f7-b9da-61c059b77fe7.jpg?webp=1&amp;h=320&amp;w=320&quot;);">
                                                                </div>
                                                            </div>
                                                            <div data-v-6652d5db="" class="profile-info">
                                                                <h3 data-v-6652d5db="" class="profile-title">서진</h3>
                                                                <div data-v-6652d5db="" class="profile-subtitle">
                                                                    <span data-v-6652d5db="">대구광역시 서구</span>
                                                                    ·
                                                                    <span data-v-6652d5db="">경력 35년</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div data-v-6652d5db="" class="review-container">
                                                            <div data-v-6652d5db="" class="pro-rate">
                                                                <span data-v-0d243f1a="" data-v-6652d5db=""
                                                                    class="sg-icon-v1 fill"
                                                                    style="width: 0.875rem; height: 0.875rem; --svg-color: #FFCE21;">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24"
                                                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M12.105 1.87122C11.7914 1.87122 11.4853 1.96773 11.2284 2.14766C10.975 2.32515 10.7815 2.57534 10.6734 2.86504L8.61423 8.05029L8.60808 8.06632C8.60618 8.07144 8.60283 8.0759 8.59843 8.07915C8.59404 8.0824 8.5888 8.08428 8.58334 8.0846L3.04706 8.44117C1.61138 8.5344 1.12102 10.3313 2.16552 11.2001L2.16648 11.2009L6.40277 14.7343L6.40523 14.7364C6.41476 14.7442 6.42187 14.7546 6.42574 14.7664C6.42952 14.7778 6.42985 14.791 6.4271 14.8027L5.16262 19.7857C4.79476 21.227 6.35038 22.529 7.69736 21.6729L7.69831 21.6723L12.095 18.8881C12.098 18.8862 12.1015 18.8852 12.105 18.8852C12.1086 18.8852 12.1125 18.8865 12.1155 18.8884L16.8405 21.8884L16.8424 21.8896C18.0703 22.6641 19.4818 21.4869 19.1506 20.1797L17.7827 14.8018C17.78 14.7901 17.7806 14.7778 17.7843 14.7664C17.7882 14.7546 17.7953 14.7442 17.8048 14.7364L22.0436 11.2009L22.0445 11.2001C23.089 10.3313 22.5983 8.53437 21.1626 8.44115L15.6314 8.08488L15.6267 8.08461C15.6213 8.0843 15.616 8.0824 15.6116 8.07915C15.6072 8.0759 15.6039 8.07144 15.602 8.06632L15.5958 8.05029L13.5367 2.86504C13.4286 2.57534 13.2351 2.32515 12.9816 2.14766C12.7247 1.96773 12.4187 1.87122 12.105 1.87122Z"
                                                                            fill="black"></path>
                                                                    </svg>
                                                                </span>
                                                                5
                                                            </div>
                                                            <p data-v-6652d5db="" class="review-comment">“몇 달 전부터 시간 약속을
                                                                하고선 취소하는 바람에 사장님께 여러번 죄송하다며 양해를 구했지만 늘 "언제든지 같이 시간
                                                                맞춰보입시다 사모님 시간 되실때 언제든지 전화주이소" 저 정말 감동했어요😢 오늘 시간이 딱 맞아
                                                                사장님 뵈었는데 이거는 ..상관없는 이야기지만 최강동안 이세요ㅜㅋ 들어오실 때부터 남다른 실력과
                                                                미소로 무장하셔서 찐어른이십니다. 인생사 이야기에서 부터 오늘 실리콘도 감동이지만 여러모로 배울점이
                                                                많으신 어른이셨어요 앞으로도 건강히 오래도록 인생 즐기시면서 행복하게 사셨으면 하는 진심인 제
                                                                마음입니디^^ 아ㅡ그리고 실리콘은 당연히 만족 대만족이구요 다른 부분까지 알아서 면밀히 잘 살피셔서
                                                                서비스 해주시고 깔끔하게 잘 마무리 했어요 다시 한번 감사드리고 다음에 꼭 식사대접 할께요🙏 다시
                                                                뵙고 싶은분👍👍”

                                                            </p>
                                                        </div>
                                                    </a>
                                                </section>
                                            </div>
                                        </div>
                                        <div data-v-e4caeaf8="" tabindex="-1" data-index="2" aria-hidden="true"
                                            class="slick-slide" style="outline: none; width: 300px;">
                                            <div data-v-e4caeaf8="">
                                                <section data-v-6652d5db="" data-v-231efbf4=""
                                                    class="popular-provider-card" tabindex="-1" data-v-e4caeaf8=""
                                                    style="width: 100%; display: inline-block;">
                                                    <a data-v-6652d5db=""
                                                        href="/profile/users/1866527?from=community_body_ad" class="">
                                                        <div data-v-6652d5db="" class="profile-container">
                                                            <div data-v-29d5164e="" data-v-6652d5db=""
                                                                class="user-profile-picture profile-image">
                                                                <div data-v-29d5164e="" data-name="image" class=""
                                                                    data-src="https://static.cdn.soomgo.com/upload/profile/a0f06808-5485-42a3-8568-e1ef3eb77bdf.jpg?webp=1&amp;h=320&amp;w=320"
                                                                    lazy="loaded"
                                                                    style="background-image: url(&quot;https://static.cdn.soomgo.com/upload/profile/a0f06808-5485-42a3-8568-e1ef3eb77bdf.jpg?webp=1&amp;h=320&amp;w=320&quot;);">
                                                                </div>
                                                            </div>
                                                            <div data-v-6652d5db="" class="profile-info">
                                                                <h3 data-v-6652d5db="" class="profile-title">
                                                                    서진창호금속×전기공사설비</h3>
                                                                <div data-v-6652d5db="" class="profile-subtitle">
                                                                    <span data-v-6652d5db="">경남 창원시</span>
                                                                    ·
                                                                    <span data-v-6652d5db="">경력 12년</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div data-v-6652d5db="" class="review-container">
                                                            <div data-v-6652d5db="" class="pro-rate">
                                                                <span data-v-0d243f1a="" data-v-6652d5db=""
                                                                    class="sg-icon-v1 fill"
                                                                    style="width: 0.875rem; height: 0.875rem; --svg-color: #FFCE21;">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24"
                                                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M12.105 1.87122C11.7914 1.87122 11.4853 1.96773 11.2284 2.14766C10.975 2.32515 10.7815 2.57534 10.6734 2.86504L8.61423 8.05029L8.60808 8.06632C8.60618 8.07144 8.60283 8.0759 8.59843 8.07915C8.59404 8.0824 8.5888 8.08428 8.58334 8.0846L3.04706 8.44117C1.61138 8.5344 1.12102 10.3313 2.16552 11.2001L2.16648 11.2009L6.40277 14.7343L6.40523 14.7364C6.41476 14.7442 6.42187 14.7546 6.42574 14.7664C6.42952 14.7778 6.42985 14.791 6.4271 14.8027L5.16262 19.7857C4.79476 21.227 6.35038 22.529 7.69736 21.6729L7.69831 21.6723L12.095 18.8881C12.098 18.8862 12.1015 18.8852 12.105 18.8852C12.1086 18.8852 12.1125 18.8865 12.1155 18.8884L16.8405 21.8884L16.8424 21.8896C18.0703 22.6641 19.4818 21.4869 19.1506 20.1797L17.7827 14.8018C17.78 14.7901 17.7806 14.7778 17.7843 14.7664C17.7882 14.7546 17.7953 14.7442 17.8048 14.7364L22.0436 11.2009L22.0445 11.2001C23.089 10.3313 22.5983 8.53437 21.1626 8.44115L15.6314 8.08488L15.6267 8.08461C15.6213 8.0843 15.616 8.0824 15.6116 8.07915C15.6072 8.0759 15.6039 8.07144 15.602 8.06632L15.5958 8.05029L13.5367 2.86504C13.4286 2.57534 13.2351 2.32515 12.9816 2.14766C12.7247 1.96773 12.4187 1.87122 12.105 1.87122Z"
                                                                            fill="black"></path>
                                                                    </svg>
                                                                </span>
                                                                5
                                                            </div>
                                                            <p data-v-6652d5db="" class="review-comment">“이사온집 복층 테라스쪽으로
                                                                보일러 배관 구멍이 없어 위험한 상황이였는데 맘은 급하고 여기저기 알아봐도 이중창 구멍 못뚫는다~밖에
                                                                실리콘 못쏜다~등등 여러곳에서 못한다고 한걸 해내시네요~
                                                                친절하시구 꼼꼼하시구 당일 오셔서 보시곤 바로 공장가셔서 만들어와서 설치,실리콘 마무리까지 깔끔하게
                                                                해주셔서 너무 감사해요~~
                                                                보일러배관 땜에 혹여나 직실할수 있다고 위험하니
                                                                문열어둬야 해서 춥고~
                                                                천정엔 이슬이 맻히고~
                                                                혹여나 직실할수 있다고 위험하다 ~ㅠㅠ 누전+질식+동파+가스비폭탄 등등 해결해 주셔서 고맙습니다~~
                                                                역시 숨은고수는 고수시네요!!
                                                                이제 보일러 연통만 밖으로 빼서 연결하면 안심하고 아이들과 따뜻한겨울 보낼수 있겠네요~
                                                                보일러쪽에서 연통 연결을 담주로 예약잡아서 화나지만..;;;
                                                                원인의 시작이 보일러 연통 작업이였으니..3주간 애먹;;눙물..
                                                                암튼 숨고사장님 덕에 큰일하나 해결했어요!! 진심너무 감사하고 번창하세요!!!!”
                                                            </p>
                                                        </div>
                                                    </a>
                                                </section>
                                            </div>
                                        </div>
                                        <div data-v-e4caeaf8="" tabindex="-1" data-index="3" aria-hidden="true"
                                            class="slick-slide" style="outline: none; width: 300px;">
                                            <div data-v-e4caeaf8="">
                                                <section data-v-6652d5db="" data-v-231efbf4=""
                                                    class="popular-provider-card" tabindex="-1" data-v-e4caeaf8=""
                                                    style="width: 100%; display: inline-block;">
                                                    <a data-v-6652d5db=""
                                                        href="/profile/users/9879135?from=community_body_ad" class="">
                                                        <div data-v-6652d5db="" class="profile-container">
                                                            <div data-v-29d5164e="" data-v-6652d5db=""
                                                                class="user-profile-picture profile-image">
                                                                <div data-v-29d5164e="" data-name="image" class=""
                                                                    data-src="https://static.cdn.soomgo.com/upload/profile/ac0e4abd-1025-42fa-90ff-5bf1c0180449.jpg?webp=1&amp;h=320&amp;w=320"
                                                                    lazy="loaded"
                                                                    style="background-image: url(&quot;https://static.cdn.soomgo.com/upload/profile/ac0e4abd-1025-42fa-90ff-5bf1c0180449.jpg?webp=1&amp;h=320&amp;w=320&quot;);">
                                                                </div>
                                                            </div>
                                                            <div data-v-6652d5db="" class="profile-info">
                                                                <h3 data-v-6652d5db="" class="profile-title">박성훈</h3>
                                                                <div data-v-6652d5db="" class="profile-subtitle">
                                                                    <span data-v-6652d5db="">대전 대덕구</span>
                                                                    ·
                                                                    <span data-v-6652d5db="">경력 30년</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div data-v-6652d5db="" class="review-container">
                                                            <div data-v-6652d5db="" class="pro-rate">
                                                                <span data-v-0d243f1a="" data-v-6652d5db=""
                                                                    class="sg-icon-v1 fill"
                                                                    style="width: 0.875rem; height: 0.875rem; --svg-color: #FFCE21;">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24"
                                                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M12.105 1.87122C11.7914 1.87122 11.4853 1.96773 11.2284 2.14766C10.975 2.32515 10.7815 2.57534 10.6734 2.86504L8.61423 8.05029L8.60808 8.06632C8.60618 8.07144 8.60283 8.0759 8.59843 8.07915C8.59404 8.0824 8.5888 8.08428 8.58334 8.0846L3.04706 8.44117C1.61138 8.5344 1.12102 10.3313 2.16552 11.2001L2.16648 11.2009L6.40277 14.7343L6.40523 14.7364C6.41476 14.7442 6.42187 14.7546 6.42574 14.7664C6.42952 14.7778 6.42985 14.791 6.4271 14.8027L5.16262 19.7857C4.79476 21.227 6.35038 22.529 7.69736 21.6729L7.69831 21.6723L12.095 18.8881C12.098 18.8862 12.1015 18.8852 12.105 18.8852C12.1086 18.8852 12.1125 18.8865 12.1155 18.8884L16.8405 21.8884L16.8424 21.8896C18.0703 22.6641 19.4818 21.4869 19.1506 20.1797L17.7827 14.8018C17.78 14.7901 17.7806 14.7778 17.7843 14.7664C17.7882 14.7546 17.7953 14.7442 17.8048 14.7364L22.0436 11.2009L22.0445 11.2001C23.089 10.3313 22.5983 8.53437 21.1626 8.44115L15.6314 8.08488L15.6267 8.08461C15.6213 8.0843 15.616 8.0824 15.6116 8.07915C15.6072 8.0759 15.6039 8.07144 15.602 8.06632L15.5958 8.05029L13.5367 2.86504C13.4286 2.57534 13.2351 2.32515 12.9816 2.14766C12.7247 1.96773 12.4187 1.87122 12.105 1.87122Z"
                                                                            fill="black"></path>
                                                                    </svg>
                                                                </span>
                                                                4.9
                                                            </div>
                                                            <p data-v-6652d5db="" class="review-comment">“문의부터 견적, 시공까지
                                                                일사천리였습니다. 친절한 상담은 물론 가격까지 착했어요.”
                                                            </p>
                                                        </div>
                                                    </a>
                                                </section>
                                            </div>
                                        </div>
                                        <div data-v-e4caeaf8="" tabindex="-1" data-index="4" aria-hidden="true"
                                            class="slick-slide" style="outline: none; width: 300px;">
                                            <div data-v-e4caeaf8="">
                                                <section data-v-6652d5db="" data-v-231efbf4=""
                                                    class="popular-provider-card" tabindex="-1" data-v-e4caeaf8=""
                                                    style="width: 100%; display: inline-block;">
                                                    <a data-v-6652d5db=""
                                                        href="/profile/users/5291165?from=community_body_ad" class="">
                                                        <div data-v-6652d5db="" class="profile-container">
                                                            <div data-v-29d5164e="" data-v-6652d5db=""
                                                                class="user-profile-picture profile-image">
                                                                <div data-v-29d5164e="" data-name="image" class=""
                                                                    data-src="https://static.cdn.soomgo.com/upload/profile/2efccecb-4202-4ec9-91d2-a92da74d54f0.jpg?webp=1&amp;h=320&amp;w=320"
                                                                    lazy="loaded"
                                                                    style="background-image: url(&quot;https://static.cdn.soomgo.com/upload/profile/2efccecb-4202-4ec9-91d2-a92da74d54f0.jpg?webp=1&amp;h=320&amp;w=320&quot;);">
                                                                </div>
                                                            </div>
                                                            <div data-v-6652d5db="" class="profile-info">
                                                                <h3 data-v-6652d5db="" class="profile-title">대창윈도우</h3>
                                                                <div data-v-6652d5db="" class="profile-subtitle">
                                                                    <span data-v-6652d5db="">제주특별자치도 제주시</span>
                                                                    ·
                                                                    <span data-v-6652d5db="">경력 22년</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div data-v-6652d5db="" class="review-container">
                                                            <div data-v-6652d5db="" class="pro-rate">
                                                                <span data-v-0d243f1a="" data-v-6652d5db=""
                                                                    class="sg-icon-v1 fill"
                                                                    style="width: 0.875rem; height: 0.875rem; --svg-color: #FFCE21;">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24"
                                                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M12.105 1.87122C11.7914 1.87122 11.4853 1.96773 11.2284 2.14766C10.975 2.32515 10.7815 2.57534 10.6734 2.86504L8.61423 8.05029L8.60808 8.06632C8.60618 8.07144 8.60283 8.0759 8.59843 8.07915C8.59404 8.0824 8.5888 8.08428 8.58334 8.0846L3.04706 8.44117C1.61138 8.5344 1.12102 10.3313 2.16552 11.2001L2.16648 11.2009L6.40277 14.7343L6.40523 14.7364C6.41476 14.7442 6.42187 14.7546 6.42574 14.7664C6.42952 14.7778 6.42985 14.791 6.4271 14.8027L5.16262 19.7857C4.79476 21.227 6.35038 22.529 7.69736 21.6729L7.69831 21.6723L12.095 18.8881C12.098 18.8862 12.1015 18.8852 12.105 18.8852C12.1086 18.8852 12.1125 18.8865 12.1155 18.8884L16.8405 21.8884L16.8424 21.8896C18.0703 22.6641 19.4818 21.4869 19.1506 20.1797L17.7827 14.8018C17.78 14.7901 17.7806 14.7778 17.7843 14.7664C17.7882 14.7546 17.7953 14.7442 17.8048 14.7364L22.0436 11.2009L22.0445 11.2001C23.089 10.3313 22.5983 8.53437 21.1626 8.44115L15.6314 8.08488L15.6267 8.08461C15.6213 8.0843 15.616 8.0824 15.6116 8.07915C15.6072 8.0759 15.6039 8.07144 15.602 8.06632L15.5958 8.05029L13.5367 2.86504C13.4286 2.57534 13.2351 2.32515 12.9816 2.14766C12.7247 1.96773 12.4187 1.87122 12.105 1.87122Z"
                                                                            fill="black"></path>
                                                                    </svg>
                                                                </span>
                                                                4.9
                                                            </div>
                                                            <p data-v-6652d5db="" class="review-comment">
                                                                “급한 마음에 촉박하게 요청드렸는데도 방문해주시고 매우 친절하고 솔직하게 지금 필요한것과 필요치
                                                                않은것을 체크해주셨습니다. 시공도 매우 꼼꼼하시고 좋았어요! 감사합니다!”
                                                            </p>
                                                        </div>
                                                    </a>
                                                </section>
                                            </div>
                                        </div>
                                        <div data-v-e4caeaf8="" tabindex="-1" data-index="5" aria-hidden="true"
                                            class="slick-slide" style="outline: none; width: 300px;">
                                            <div data-v-e4caeaf8="">
                                                <section data-v-6652d5db="" data-v-231efbf4=""
                                                    class="popular-provider-card" tabindex="-1" data-v-e4caeaf8=""
                                                    style="width: 100%; display: inline-block;">
                                                    <a data-v-6652d5db=""
                                                        href="/profile/users/2530607?from=community_body_ad" class="">
                                                        <div data-v-6652d5db="" class="profile-container">
                                                            <div data-v-29d5164e="" data-v-6652d5db=""
                                                                class="user-profile-picture profile-image">
                                                                <div data-v-29d5164e="" data-name="image" class=""
                                                                    data-src="https://static.cdn.soomgo.com/upload/profile/98ace1d5-560b-45e0-939e-6224666911dd.JPG?webp=1&amp;h=320&amp;w=320"
                                                                    lazy="loaded"
                                                                    style="background-image: url(&quot;https://static.cdn.soomgo.com/upload/profile/98ace1d5-560b-45e0-939e-6224666911dd.JPG?webp=1&amp;h=320&amp;w=320&quot;);">
                                                                </div>
                                                            </div>
                                                            <div data-v-6652d5db="" class="profile-info">
                                                                <h3 data-v-6652d5db="" class="profile-title">우주글라스(김범수)
                                                                </h3>
                                                                <div data-v-6652d5db="" class="profile-subtitle">
                                                                    <span data-v-6652d5db="">경기도 용인시</span>
                                                                    ·
                                                                    <span data-v-6652d5db="">경력 23년</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div data-v-6652d5db="" class="review-container">
                                                            <div data-v-6652d5db="" class="pro-rate">
                                                                <span data-v-0d243f1a="" data-v-6652d5db=""
                                                                    class="sg-icon-v1 fill"
                                                                    style="width: 0.875rem; height: 0.875rem; --svg-color: #FFCE21;">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24"
                                                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M12.105 1.87122C11.7914 1.87122 11.4853 1.96773 11.2284 2.14766C10.975 2.32515 10.7815 2.57534 10.6734 2.86504L8.61423 8.05029L8.60808 8.06632C8.60618 8.07144 8.60283 8.0759 8.59843 8.07915C8.59404 8.0824 8.5888 8.08428 8.58334 8.0846L3.04706 8.44117C1.61138 8.5344 1.12102 10.3313 2.16552 11.2001L2.16648 11.2009L6.40277 14.7343L6.40523 14.7364C6.41476 14.7442 6.42187 14.7546 6.42574 14.7664C6.42952 14.7778 6.42985 14.791 6.4271 14.8027L5.16262 19.7857C4.79476 21.227 6.35038 22.529 7.69736 21.6729L7.69831 21.6723L12.095 18.8881C12.098 18.8862 12.1015 18.8852 12.105 18.8852C12.1086 18.8852 12.1125 18.8865 12.1155 18.8884L16.8405 21.8884L16.8424 21.8896C18.0703 22.6641 19.4818 21.4869 19.1506 20.1797L17.7827 14.8018C17.78 14.7901 17.7806 14.7778 17.7843 14.7664C17.7882 14.7546 17.7953 14.7442 17.8048 14.7364L22.0436 11.2009L22.0445 11.2001C23.089 10.3313 22.5983 8.53437 21.1626 8.44115L15.6314 8.08488L15.6267 8.08461C15.6213 8.0843 15.616 8.0824 15.6116 8.07915C15.6072 8.0759 15.6039 8.07144 15.602 8.06632L15.5958 8.05029L13.5367 2.86504C13.4286 2.57534 13.2351 2.32515 12.9816 2.14766C12.7247 1.96773 12.4187 1.87122 12.105 1.87122Z"
                                                                            fill="black"></path>
                                                                    </svg>
                                                                </span>
                                                                4.9
                                                            </div>
                                                            <p data-v-6652d5db="" class="review-comment">
                                                                “사실 가격은 다른 고수분들과 작업까지 진행을 안했으니 최저가인지는 알수없지만,
                                                                전 합리적이라고 생각합니다.
                                                                저희집은 30층이고 거실 큰창 2개를 교체해서 난이도 최상이니까요
                                                                사장님이 직접오셔서 견적하사며 설명도 자세히 해주고, 마무리도 완벽하고 기분이가 최고입니다”
                                                            </p>
                                                        </div>
                                                    </a>
                                                </section>
                                            </div>
                                        </div>
                                        <div data-v-e4caeaf8="" tabindex="-1" data-index="6" aria-hidden="true"
                                            class="slick-slide" style="outline: none; width: 300px;">
                                            <div data-v-e4caeaf8="">
                                                <section data-v-6652d5db="" data-v-231efbf4=""
                                                    class="popular-provider-card" tabindex="-1" data-v-e4caeaf8=""
                                                    style="width: 100%; display: inline-block;">
                                                    <a data-v-6652d5db=""
                                                        href="/profile/users/1181910?from=community_body_ad" class="">
                                                        <div data-v-6652d5db="" class="profile-container">
                                                            <div data-v-29d5164e="" data-v-6652d5db=""
                                                                class="user-profile-picture profile-image">
                                                                <div data-v-29d5164e="" data-name="image" class=""
                                                                    data-src="https://static.cdn.soomgo.com/upload/profile/2b206da5-a387-4b63-944f-e001b3589ee2.jpg?webp=1&amp;h=320&amp;w=320"
                                                                    lazy="loading"
                                                                    style="background-image: url(&quot;data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA3MiA3MiI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYSIgZD0iTTAgMGg3MnY3MkgweiIvPgogICAgICAgIDxwYXRoIGlkPSJjIiBkPSJNMCAwaDcydjcySDB6Ii8+CiAgICA8L2RlZnM+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj4KICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYSIvPgogICAgICAgIDwvbWFzaz4KICAgICAgICA8ZyBtYXNrPSJ1cmwoI2IpIj4KICAgICAgICAgICAgPG1hc2sgaWQ9ImQiIGZpbGw9IiNmZmYiPgogICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYyIvPgogICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iI0YyRjJGMiIgeGxpbms6aHJlZj0iI2MiLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI0UxRTFFMSIgZD0iTTcwLjY3NyA2Ny4wMzJjLS45NTEtMi44NDQtMi42NzQtNS43MTItNS4yMTUtNy4zODEtNC44OS0zLjIzNi0xMC41ODctNC45NjItMTYuMDk1LTYuODEtMS4zMjktLjQ2NS0yLjY4LS45Ny0zLjg5My0xLjY5LTEuMDg1LS42NDMtMS40OTItMS45Ni0xLjc0My0zLjExNy0uMTEyLS42MTItLjE4LTEuMjQtLjIxNS0xLjg1NyAzLjk5NC01LjQ0OCA2LjY0NC0xNC4zNCA2LjY0NC0yMS42M0M1MC4xNiAxMy4xNzIgNDMuNzEyIDEwIDM1Ljc2IDEwYy03Ljk1NCAwLTE0LjQgMy4xNjYtMTQuNCAxNC41NDMgMCA3LjU1MSAyLjg0IDE2LjgxNCA3LjA3NSAyMi4xOTUtLjAzOS40MjQtLjA5Ljg1LS4xNjYgMS4yNzItLjI1MiAxLjE1Ny0uNjU5IDIuNDUtMS43NDIgMy4wOTItMS4yMTYuNzItMi41NjYgMS4xNzctMy44OTUgMS42NC01LjUwOSAxLjg0OS0xMS4yMDYgMy40NzgtMTYuMDk0IDYuNzE0LTIuNTQyIDEuNjctNC4yNjQgNC43MzItNS4yMTQgNy41NzZDLjM0NiA2OS45ODItLjA1NCA3My42MzguMDA2IDc2LjZoNzEuOTg4Yy4wNi0yLjk2Mi0uMzQtNi42MTctMS4zMTctOS41Njh6IiBtYXNrPSJ1cmwoI2QpIi8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K&quot;);">
                                                                </div>
                                                            </div>
                                                            <div data-v-6652d5db="" class="profile-info">
                                                                <h3 data-v-6652d5db="" class="profile-title">3S도어
                                                                    ⭐️(자동문,강화도어 설치수리서비스)⭐️</h3>
                                                                <div data-v-6652d5db="" class="profile-subtitle">
                                                                    <span data-v-6652d5db="">경기도 부천시</span>
                                                                    ·
                                                                    <span data-v-6652d5db="">경력 8년</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div data-v-6652d5db="" class="review-container">
                                                            <div data-v-6652d5db="" class="pro-rate">
                                                                <span data-v-0d243f1a="" data-v-6652d5db=""
                                                                    class="sg-icon-v1 fill"
                                                                    style="width: 0.875rem; height: 0.875rem; --svg-color: #FFCE21;">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24"
                                                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M12.105 1.87122C11.7914 1.87122 11.4853 1.96773 11.2284 2.14766C10.975 2.32515 10.7815 2.57534 10.6734 2.86504L8.61423 8.05029L8.60808 8.06632C8.60618 8.07144 8.60283 8.0759 8.59843 8.07915C8.59404 8.0824 8.5888 8.08428 8.58334 8.0846L3.04706 8.44117C1.61138 8.5344 1.12102 10.3313 2.16552 11.2001L2.16648 11.2009L6.40277 14.7343L6.40523 14.7364C6.41476 14.7442 6.42187 14.7546 6.42574 14.7664C6.42952 14.7778 6.42985 14.791 6.4271 14.8027L5.16262 19.7857C4.79476 21.227 6.35038 22.529 7.69736 21.6729L7.69831 21.6723L12.095 18.8881C12.098 18.8862 12.1015 18.8852 12.105 18.8852C12.1086 18.8852 12.1125 18.8865 12.1155 18.8884L16.8405 21.8884L16.8424 21.8896C18.0703 22.6641 19.4818 21.4869 19.1506 20.1797L17.7827 14.8018C17.78 14.7901 17.7806 14.7778 17.7843 14.7664C17.7882 14.7546 17.7953 14.7442 17.8048 14.7364L22.0436 11.2009L22.0445 11.2001C23.089 10.3313 22.5983 8.53437 21.1626 8.44115L15.6314 8.08488L15.6267 8.08461C15.6213 8.0843 15.616 8.0824 15.6116 8.07915C15.6072 8.0759 15.6039 8.07144 15.602 8.06632L15.5958 8.05029L13.5367 2.86504C13.4286 2.57534 13.2351 2.32515 12.9816 2.14766C12.7247 1.96773 12.4187 1.87122 12.105 1.87122Z"
                                                                            fill="black"></path>
                                                                    </svg>
                                                                </span>
                                                                4.9
                                                            </div>
                                                            <p data-v-6652d5db="" class="review-comment">
                                                                “친절하시고 완성도가 만족스러워요^^
                                                                마무리도 깔끔히 해주시고 감사합니다”
                                                            </p>
                                                        </div>
                                                    </a>
                                                </section>
                                            </div>
                                        </div>
                                        <div data-v-e4caeaf8="" tabindex="-1" data-index="7" aria-hidden="true"
                                            class="slick-slide" style="outline: none; width: 300px;">
                                            <div data-v-e4caeaf8="">
                                                <section data-v-6652d5db="" data-v-231efbf4=""
                                                    class="popular-provider-card" tabindex="-1" data-v-e4caeaf8=""
                                                    style="width: 100%; display: inline-block;">
                                                    <a data-v-6652d5db=""
                                                        href="/profile/users/7562389?from=community_body_ad" class="">
                                                        <div data-v-6652d5db="" class="profile-container">
                                                            <div data-v-29d5164e="" data-v-6652d5db=""
                                                                class="user-profile-picture profile-image">
                                                                <div data-v-29d5164e="" data-name="image" class=""
                                                                    data-src="https://static.cdn.soomgo.com/upload/profile/a11b532f-ec2d-42b3-92e1-e004c1a06b2f.jpg?webp=1&amp;h=320&amp;w=320"
                                                                    lazy="loading"
                                                                    style="background-image: url(&quot;data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA3MiA3MiI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYSIgZD0iTTAgMGg3MnY3MkgweiIvPgogICAgICAgIDxwYXRoIGlkPSJjIiBkPSJNMCAwaDcydjcySDB6Ii8+CiAgICA8L2RlZnM+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj4KICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYSIvPgogICAgICAgIDwvbWFzaz4KICAgICAgICA8ZyBtYXNrPSJ1cmwoI2IpIj4KICAgICAgICAgICAgPG1hc2sgaWQ9ImQiIGZpbGw9IiNmZmYiPgogICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYyIvPgogICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iI0YyRjJGMiIgeGxpbms6aHJlZj0iI2MiLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI0UxRTFFMSIgZD0iTTcwLjY3NyA2Ny4wMzJjLS45NTEtMi44NDQtMi42NzQtNS43MTItNS4yMTUtNy4zODEtNC44OS0zLjIzNi0xMC41ODctNC45NjItMTYuMDk1LTYuODEtMS4zMjktLjQ2NS0yLjY4LS45Ny0zLjg5My0xLjY5LTEuMDg1LS42NDMtMS40OTItMS45Ni0xLjc0My0zLjExNy0uMTEyLS42MTItLjE4LTEuMjQtLjIxNS0xLjg1NyAzLjk5NC01LjQ0OCA2LjY0NC0xNC4zNCA2LjY0NC0yMS42M0M1MC4xNiAxMy4xNzIgNDMuNzEyIDEwIDM1Ljc2IDEwYy03Ljk1NCAwLTE0LjQgMy4xNjYtMTQuNCAxNC41NDMgMCA3LjU1MSAyLjg0IDE2LjgxNCA3LjA3NSAyMi4xOTUtLjAzOS40MjQtLjA5Ljg1LS4xNjYgMS4yNzItLjI1MiAxLjE1Ny0uNjU5IDIuNDUtMS43NDIgMy4wOTItMS4yMTYuNzItMi41NjYgMS4xNzctMy44OTUgMS42NC01LjUwOSAxLjg0OS0xMS4yMDYgMy40NzgtMTYuMDk0IDYuNzE0LTIuNTQyIDEuNjctNC4yNjQgNC43MzItNS4yMTQgNy41NzZDLjM0NiA2OS45ODItLjA1NCA3My42MzguMDA2IDc2LjZoNzEuOTg4Yy4wNi0yLjk2Mi0uMzQtNi42MTctMS4zMTctOS41Njh6IiBtYXNrPSJ1cmwoI2QpIi8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K&quot;);">
                                                                </div>
                                                            </div>
                                                            <div data-v-6652d5db="" class="profile-info">
                                                                <h3 data-v-6652d5db="" class="profile-title">가나 유리 샷시
                                                                </h3>
                                                                <div data-v-6652d5db="" class="profile-subtitle">
                                                                    <span data-v-6652d5db="">울산광역시 중구</span>
                                                                    ·
                                                                    <span data-v-6652d5db="">경력 30년</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div data-v-6652d5db="" class="review-container">
                                                            <div data-v-6652d5db="" class="pro-rate">
                                                                <span data-v-0d243f1a="" data-v-6652d5db=""
                                                                    class="sg-icon-v1 fill"
                                                                    style="width: 0.875rem; height: 0.875rem; --svg-color: #FFCE21;">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24"
                                                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M12.105 1.87122C11.7914 1.87122 11.4853 1.96773 11.2284 2.14766C10.975 2.32515 10.7815 2.57534 10.6734 2.86504L8.61423 8.05029L8.60808 8.06632C8.60618 8.07144 8.60283 8.0759 8.59843 8.07915C8.59404 8.0824 8.5888 8.08428 8.58334 8.0846L3.04706 8.44117C1.61138 8.5344 1.12102 10.3313 2.16552 11.2001L2.16648 11.2009L6.40277 14.7343L6.40523 14.7364C6.41476 14.7442 6.42187 14.7546 6.42574 14.7664C6.42952 14.7778 6.42985 14.791 6.4271 14.8027L5.16262 19.7857C4.79476 21.227 6.35038 22.529 7.69736 21.6729L7.69831 21.6723L12.095 18.8881C12.098 18.8862 12.1015 18.8852 12.105 18.8852C12.1086 18.8852 12.1125 18.8865 12.1155 18.8884L16.8405 21.8884L16.8424 21.8896C18.0703 22.6641 19.4818 21.4869 19.1506 20.1797L17.7827 14.8018C17.78 14.7901 17.7806 14.7778 17.7843 14.7664C17.7882 14.7546 17.7953 14.7442 17.8048 14.7364L22.0436 11.2009L22.0445 11.2001C23.089 10.3313 22.5983 8.53437 21.1626 8.44115L15.6314 8.08488L15.6267 8.08461C15.6213 8.0843 15.616 8.0824 15.6116 8.07915C15.6072 8.0759 15.6039 8.07144 15.602 8.06632L15.5958 8.05029L13.5367 2.86504C13.4286 2.57534 13.2351 2.32515 12.9816 2.14766C12.7247 1.96773 12.4187 1.87122 12.105 1.87122Z"
                                                                            fill="black"></path>
                                                                    </svg>
                                                                </span>
                                                                4.8
                                                            </div>
                                                            <p data-v-6652d5db="" class="review-comment">
                                                                “[결론]강력추천합니다.
                                                                #저렴한 가격 #친절한 상담 #작업완성도 높음
                                                                [저의 상황]아파트 베란다 유리에 백화현상이 심해서 유리교체를 의뢰했어요.
                                                                [상담]여러 고수님들과의 상담을 했는데, 가장 합리적인 가격에 적절한 솔루션을 제시해주셨어요.
                                                                [작업]예정된 작업시간보다 일찍 오셔서 작업환경을 확인하시는 것을 보며, '역시 고수시구나'라고
                                                                느꼈고, 작업에 정성을 다해서 꼼꼼히 작업하면서도 신속하게 작업해주시는 것에 감탄했습니다. 보시면
                                                                알아요. 작업을 정성껏 해주신다는 의미를요.
                                                                [서비스]교체해야 하는 베란다 유리를 보시고, 옆의 베란다 유리도 봐주시면서 "유리와 샷시사이에
                                                                실리콘이 삮았어요. 이건 작업끝나고 실리콘 작업해드릴께요"라고 하시더라구요. 견적에 포함되지 않은
                                                                것까지 해주시니 추가혜택도 받았네요.
                                                                [감사의 인사]유리바꾸고 나니 창밖이 선명하네요. 오늘 엄청 더우셨는데, 작업하시는라 고생많으셨고,
                                                                감사합니다. 사업 번창하세요^^”
                                                            </p>
                                                        </div>
                                                    </a>
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button data-v-21137603="" data-v-3d1a4f76="" type="button" data-role="none"
                                    class="slick-arrow slick-next" style="display: block;">Next</button>
                            </div>
                            <div data-v-231efbf4="" class="provider-list d-md-none">
                                <section data-v-6652d5db="" data-v-231efbf4="" class="popular-provider-card">
                                    <a data-v-6652d5db="" href="/profile/users/9623442?from=community_body_ad" class="">
                                        <div data-v-6652d5db="" class="profile-container">
                                            <div data-v-29d5164e="" data-v-6652d5db=""
                                                class="user-profile-picture profile-image">
                                                <div data-v-29d5164e="" data-name="image" class=""
                                                    data-src="https://static.cdn.soomgo.com/upload/profile/93a2934e-43f9-4225-a9e1-10808fe0e21b.jpg?webp=1&amp;h=320&amp;w=320"
                                                    lazy="loading"
                                                    style="background-image: url(&quot;data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA3MiA3MiI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYSIgZD0iTTAgMGg3MnY3MkgweiIvPgogICAgICAgIDxwYXRoIGlkPSJjIiBkPSJNMCAwaDcydjcySDB6Ii8+CiAgICA8L2RlZnM+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj4KICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYSIvPgogICAgICAgIDwvbWFzaz4KICAgICAgICA8ZyBtYXNrPSJ1cmwoI2IpIj4KICAgICAgICAgICAgPG1hc2sgaWQ9ImQiIGZpbGw9IiNmZmYiPgogICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYyIvPgogICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iI0YyRjJGMiIgeGxpbms6aHJlZj0iI2MiLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI0UxRTFFMSIgZD0iTTcwLjY3NyA2Ny4wMzJjLS45NTEtMi44NDQtMi42NzQtNS43MTItNS4yMTUtNy4zODEtNC44OS0zLjIzNi0xMC41ODctNC45NjItMTYuMDk1LTYuODEtMS4zMjktLjQ2NS0yLjY4LS45Ny0zLjg5My0xLjY5LTEuMDg1LS42NDMtMS40OTItMS45Ni0xLjc0My0zLjExNy0uMTEyLS42MTItLjE4LTEuMjQtLjIxNS0xLjg1NyAzLjk5NC01LjQ0OCA2LjY0NC0xNC4zNCA2LjY0NC0yMS42M0M1MC4xNiAxMy4xNzIgNDMuNzEyIDEwIDM1Ljc2IDEwYy03Ljk1NCAwLTE0LjQgMy4xNjYtMTQuNCAxNC41NDMgMCA3LjU1MSAyLjg0IDE2LjgxNCA3LjA3NSAyMi4xOTUtLjAzOS40MjQtLjA5Ljg1LS4xNjYgMS4yNzItLjI1MiAxLjE1Ny0uNjU5IDIuNDUtMS43NDIgMy4wOTItMS4yMTYuNzItMi41NjYgMS4xNzctMy44OTUgMS42NC01LjUwOSAxLjg0OS0xMS4yMDYgMy40NzgtMTYuMDk0IDYuNzE0LTIuNTQyIDEuNjctNC4yNjQgNC43MzItNS4yMTQgNy41NzZDLjM0NiA2OS45ODItLjA1NCA3My42MzguMDA2IDc2LjZoNzEuOTg4Yy4wNi0yLjk2Mi0uMzQtNi42MTctMS4zMTctOS41Njh6IiBtYXNrPSJ1cmwoI2QpIi8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K&quot;);">
                                                </div>
                                            </div>
                                            <div data-v-6652d5db="" class="profile-info">
                                                <h3 data-v-6652d5db="" class="profile-title">친절한유리가게</h3>
                                                <div data-v-6652d5db="" class="profile-subtitle">
                                                    <span data-v-6652d5db="">인천광역시 부평구</span>
                                                    ·
                                                    <span data-v-6652d5db="">경력 22년</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-6652d5db="" class="review-container">
                                            <div data-v-6652d5db="" class="pro-rate">
                                                <span data-v-0d243f1a="" data-v-6652d5db="" class="sg-icon-v1 fill"
                                                    style="width: 0.875rem; height: 0.875rem; --svg-color: #FFCE21;"><svg
                                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M12.105 1.87122C11.7914 1.87122 11.4853 1.96773 11.2284 2.14766C10.975 2.32515 10.7815 2.57534 10.6734 2.86504L8.61423 8.05029L8.60808 8.06632C8.60618 8.07144 8.60283 8.0759 8.59843 8.07915C8.59404 8.0824 8.5888 8.08428 8.58334 8.0846L3.04706 8.44117C1.61138 8.5344 1.12102 10.3313 2.16552 11.2001L2.16648 11.2009L6.40277 14.7343L6.40523 14.7364C6.41476 14.7442 6.42187 14.7546 6.42574 14.7664C6.42952 14.7778 6.42985 14.791 6.4271 14.8027L5.16262 19.7857C4.79476 21.227 6.35038 22.529 7.69736 21.6729L7.69831 21.6723L12.095 18.8881C12.098 18.8862 12.1015 18.8852 12.105 18.8852C12.1086 18.8852 12.1125 18.8865 12.1155 18.8884L16.8405 21.8884L16.8424 21.8896C18.0703 22.6641 19.4818 21.4869 19.1506 20.1797L17.7827 14.8018C17.78 14.7901 17.7806 14.7778 17.7843 14.7664C17.7882 14.7546 17.7953 14.7442 17.8048 14.7364L22.0436 11.2009L22.0445 11.2001C23.089 10.3313 22.5983 8.53437 21.1626 8.44115L15.6314 8.08488L15.6267 8.08461C15.6213 8.0843 15.616 8.0824 15.6116 8.07915C15.6072 8.0759 15.6039 8.07144 15.602 8.06632L15.5958 8.05029L13.5367 2.86504C13.4286 2.57534 13.2351 2.32515 12.9816 2.14766C12.7247 1.96773 12.4187 1.87122 12.105 1.87122Z"
                                                            fill="black"></path>
                                                    </svg>
                                                </span>
                                                5
                                            </div>
                                            <p data-v-6652d5db="" class="review-comment">
                                                “만족합니다.
                                                근데 이걸 떠나서 이 분 굉장히 좋으신 분이라 비용 조금 더 주더라도 이 분한테 맡기고 싶을 정도네요~ 오랜만에 거래처보다 더
                                                좋은 분 만난 거 같아 돈 아깝지가 않네요.
                                                리뷰 써 달라는 말도 없이 가시는데... 솔직히 리뷰 5점만점임에도 채팅상담에서 이미 별로인 사람들 보면 리뷰의 의미가 없다고
                                                생각했지만 이 분은 어쩔 수 없이 5점 만점인듯합니다. 유리 맡기실 일 있으면 이 분한테 맡기세요.”
                                            </p>
                                        </div>
                                    </a>
                                </section>
                                <section data-v-6652d5db="" data-v-231efbf4="" class="popular-provider-card">
                                    <a data-v-6652d5db="" href="/profile/users/3295186?from=community_body_ad" class="">
                                        <div data-v-6652d5db="" class="profile-container">
                                            <div data-v-29d5164e="" data-v-6652d5db=""
                                                class="user-profile-picture profile-image">
                                                <div data-v-29d5164e="" data-name="image" class=""
                                                    data-src="https://static.cdn.soomgo.com/upload/profile/757255b3-70f2-44f7-b9da-61c059b77fe7.jpg?webp=1&amp;h=320&amp;w=320"
                                                    lazy="loading"
                                                    style="background-image: url(&quot;data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA3MiA3MiI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYSIgZD0iTTAgMGg3MnY3MkgweiIvPgogICAgICAgIDxwYXRoIGlkPSJjIiBkPSJNMCAwaDcydjcySDB6Ii8+CiAgICA8L2RlZnM+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj4KICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYSIvPgogICAgICAgIDwvbWFzaz4KICAgICAgICA8ZyBtYXNrPSJ1cmwoI2IpIj4KICAgICAgICAgICAgPG1hc2sgaWQ9ImQiIGZpbGw9IiNmZmYiPgogICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYyIvPgogICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iI0YyRjJGMiIgeGxpbms6aHJlZj0iI2MiLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI0UxRTFFMSIgZD0iTTcwLjY3NyA2Ny4wMzJjLS45NTEtMi44NDQtMi42NzQtNS43MTItNS4yMTUtNy4zODEtNC44OS0zLjIzNi0xMC41ODctNC45NjItMTYuMDk1LTYuODEtMS4zMjktLjQ2NS0yLjY4LS45Ny0zLjg5My0xLjY5LTEuMDg1LS42NDMtMS40OTItMS45Ni0xLjc0My0zLjExNy0uMTEyLS42MTItLjE4LTEuMjQtLjIxNS0xLjg1NyAzLjk5NC01LjQ0OCA2LjY0NC0xNC4zNCA2LjY0NC0yMS42M0M1MC4xNiAxMy4xNzIgNDMuNzEyIDEwIDM1Ljc2IDEwYy03Ljk1NCAwLTE0LjQgMy4xNjYtMTQuNCAxNC41NDMgMCA3LjU1MSAyLjg0IDE2LjgxNCA3LjA3NSAyMi4xOTUtLjAzOS40MjQtLjA5Ljg1LS4xNjYgMS4yNzItLjI1MiAxLjE1Ny0uNjU5IDIuNDUtMS43NDIgMy4wOTItMS4yMTYuNzItMi41NjYgMS4xNzctMy44OTUgMS42NC01LjUwOSAxLjg0OS0xMS4yMDYgMy40NzgtMTYuMDk0IDYuNzE0LTIuNTQyIDEuNjctNC4yNjQgNC43MzItNS4yMTQgNy41NzZDLjM0NiA2OS45ODItLjA1NCA3My42MzguMDA2IDc2LjZoNzEuOTg4Yy4wNi0yLjk2Mi0uMzQtNi42MTctMS4zMTctOS41Njh6IiBtYXNrPSJ1cmwoI2QpIi8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K&quot;);">
                                                </div>
                                            </div>
                                            <div data-v-6652d5db="" class="profile-info">
                                                <h3 data-v-6652d5db="" class="profile-title">서진</h3>
                                                <div data-v-6652d5db="" class="profile-subtitle"><span
                                                        data-v-6652d5db="">대구광역시 서구</span> · <span data-v-6652d5db="">경력
                                                        35년</span></div>
                                            </div>
                                        </div>
                                        <div data-v-6652d5db="" class="review-container">
                                            <div data-v-6652d5db="" class="pro-rate"><span data-v-0d243f1a=""
                                                    data-v-6652d5db="" class="sg-icon-v1 fill"
                                                    style="width: 0.875rem; height: 0.875rem; --svg-color: #FFCE21;"><svg
                                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M12.105 1.87122C11.7914 1.87122 11.4853 1.96773 11.2284 2.14766C10.975 2.32515 10.7815 2.57534 10.6734 2.86504L8.61423 8.05029L8.60808 8.06632C8.60618 8.07144 8.60283 8.0759 8.59843 8.07915C8.59404 8.0824 8.5888 8.08428 8.58334 8.0846L3.04706 8.44117C1.61138 8.5344 1.12102 10.3313 2.16552 11.2001L2.16648 11.2009L6.40277 14.7343L6.40523 14.7364C6.41476 14.7442 6.42187 14.7546 6.42574 14.7664C6.42952 14.7778 6.42985 14.791 6.4271 14.8027L5.16262 19.7857C4.79476 21.227 6.35038 22.529 7.69736 21.6729L7.69831 21.6723L12.095 18.8881C12.098 18.8862 12.1015 18.8852 12.105 18.8852C12.1086 18.8852 12.1125 18.8865 12.1155 18.8884L16.8405 21.8884L16.8424 21.8896C18.0703 22.6641 19.4818 21.4869 19.1506 20.1797L17.7827 14.8018C17.78 14.7901 17.7806 14.7778 17.7843 14.7664C17.7882 14.7546 17.7953 14.7442 17.8048 14.7364L22.0436 11.2009L22.0445 11.2001C23.089 10.3313 22.5983 8.53437 21.1626 8.44115L15.6314 8.08488L15.6267 8.08461C15.6213 8.0843 15.616 8.0824 15.6116 8.07915C15.6072 8.0759 15.6039 8.07144 15.602 8.06632L15.5958 8.05029L13.5367 2.86504C13.4286 2.57534 13.2351 2.32515 12.9816 2.14766C12.7247 1.96773 12.4187 1.87122 12.105 1.87122Z"
                                                            fill="black"></path>
                                                    </svg>
                                                </span> 5 </div>
                                            <p data-v-6652d5db="" class="review-comment">“몇 달 전부터 시간 약속을 하고선 취소하는 바람에
                                                사장님께 여러번 죄송하다며 양해를 구했지만 늘 "언제든지 같이 시간 맞춰보입시다 사모님 시간 되실때 언제든지 전화주이소" 저 정말
                                                감동했어요😢
                                                오늘 시간이 딱 맞아 사장님 뵈었는데 이거는 ..상관없는 이야기지만 최강동안 이세요ㅜㅋ
                                                들어오실 때부터 남다른 실력과 미소로 무장하셔서 찐어른이십니다.
                                                인생사 이야기에서 부터 오늘 실리콘도 감동이지만 여러모로 배울점이 많으신 어른이셨어요
                                                앞으로도 건강히 오래도록 인생 즐기시면서 행복하게 사셨으면 하는 진심인 제 마음입니디^^
                                                아ㅡ그리고 실리콘은 당연히 만족 대만족이구요
                                                다른 부분까지 알아서 면밀히 잘 살피셔서 서비스 해주시고 깔끔하게 잘 마무리 했어요
                                                다시 한번 감사드리고 다음에 꼭 식사대접 할께요🙏
                                                다시 뵙고 싶은분👍👍”</p>
                                        </div>
                                    </a>
                                </section>
                                <section data-v-6652d5db="" data-v-231efbf4="" class="popular-provider-card"><a
                                        data-v-6652d5db="" href="/profile/users/1866527?from=community_body_ad"
                                        class="">
                                        <div data-v-6652d5db="" class="profile-container">
                                            <div data-v-29d5164e="" data-v-6652d5db=""
                                                class="user-profile-picture profile-image">
                                                <div data-v-29d5164e="" data-name="image" class=""
                                                    data-src="https://static.cdn.soomgo.com/upload/profile/a0f06808-5485-42a3-8568-e1ef3eb77bdf.jpg?webp=1&amp;h=320&amp;w=320"
                                                    lazy="loading"
                                                    style="background-image: url(&quot;data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA3MiA3MiI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYSIgZD0iTTAgMGg3MnY3MkgweiIvPgogICAgICAgIDxwYXRoIGlkPSJjIiBkPSJNMCAwaDcydjcySDB6Ii8+CiAgICA8L2RlZnM+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj4KICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYSIvPgogICAgICAgIDwvbWFzaz4KICAgICAgICA8ZyBtYXNrPSJ1cmwoI2IpIj4KICAgICAgICAgICAgPG1hc2sgaWQ9ImQiIGZpbGw9IiNmZmYiPgogICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYyIvPgogICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iI0YyRjJGMiIgeGxpbms6aHJlZj0iI2MiLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI0UxRTFFMSIgZD0iTTcwLjY3NyA2Ny4wMzJjLS45NTEtMi44NDQtMi42NzQtNS43MTItNS4yMTUtNy4zODEtNC44OS0zLjIzNi0xMC41ODctNC45NjItMTYuMDk1LTYuODEtMS4zMjktLjQ2NS0yLjY4LS45Ny0zLjg5My0xLjY5LTEuMDg1LS42NDMtMS40OTItMS45Ni0xLjc0My0zLjExNy0uMTEyLS42MTItLjE4LTEuMjQtLjIxNS0xLjg1NyAzLjk5NC01LjQ0OCA2LjY0NC0xNC4zNCA2LjY0NC0yMS42M0M1MC4xNiAxMy4xNzIgNDMuNzEyIDEwIDM1Ljc2IDEwYy03Ljk1NCAwLTE0LjQgMy4xNjYtMTQuNCAxNC41NDMgMCA3LjU1MSAyLjg0IDE2LjgxNCA3LjA3NSAyMi4xOTUtLjAzOS40MjQtLjA5Ljg1LS4xNjYgMS4yNzItLjI1MiAxLjE1Ny0uNjU5IDIuNDUtMS43NDIgMy4wOTItMS4yMTYuNzItMi41NjYgMS4xNzctMy44OTUgMS42NC01LjUwOSAxLjg0OS0xMS4yMDYgMy40NzgtMTYuMDk0IDYuNzE0LTIuNTQyIDEuNjctNC4yNjQgNC43MzItNS4yMTQgNy41NzZDLjM0NiA2OS45ODItLjA1NCA3My42MzguMDA2IDc2LjZoNzEuOTg4Yy4wNi0yLjk2Mi0uMzQtNi42MTctMS4zMTctOS41Njh6IiBtYXNrPSJ1cmwoI2QpIi8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K&quot;);">
                                                </div>
                                            </div>
                                            <div data-v-6652d5db="" class="profile-info">
                                                <h3 data-v-6652d5db="" class="profile-title">서진창호금속×전기공사설비</h3>
                                                <div data-v-6652d5db="" class="profile-subtitle"><span
                                                        data-v-6652d5db="">경남 창원시</span> · <span data-v-6652d5db="">경력
                                                        12년</span></div>
                                            </div>
                                        </div>
                                        <div data-v-6652d5db="" class="review-container">
                                            <div data-v-6652d5db="" class="pro-rate"><span data-v-0d243f1a=""
                                                    data-v-6652d5db="" class="sg-icon-v1 fill"
                                                    style="width: 0.875rem; height: 0.875rem; --svg-color: #FFCE21;"><svg
                                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M12.105 1.87122C11.7914 1.87122 11.4853 1.96773 11.2284 2.14766C10.975 2.32515 10.7815 2.57534 10.6734 2.86504L8.61423 8.05029L8.60808 8.06632C8.60618 8.07144 8.60283 8.0759 8.59843 8.07915C8.59404 8.0824 8.5888 8.08428 8.58334 8.0846L3.04706 8.44117C1.61138 8.5344 1.12102 10.3313 2.16552 11.2001L2.16648 11.2009L6.40277 14.7343L6.40523 14.7364C6.41476 14.7442 6.42187 14.7546 6.42574 14.7664C6.42952 14.7778 6.42985 14.791 6.4271 14.8027L5.16262 19.7857C4.79476 21.227 6.35038 22.529 7.69736 21.6729L7.69831 21.6723L12.095 18.8881C12.098 18.8862 12.1015 18.8852 12.105 18.8852C12.1086 18.8852 12.1125 18.8865 12.1155 18.8884L16.8405 21.8884L16.8424 21.8896C18.0703 22.6641 19.4818 21.4869 19.1506 20.1797L17.7827 14.8018C17.78 14.7901 17.7806 14.7778 17.7843 14.7664C17.7882 14.7546 17.7953 14.7442 17.8048 14.7364L22.0436 11.2009L22.0445 11.2001C23.089 10.3313 22.5983 8.53437 21.1626 8.44115L15.6314 8.08488L15.6267 8.08461C15.6213 8.0843 15.616 8.0824 15.6116 8.07915C15.6072 8.0759 15.6039 8.07144 15.602 8.06632L15.5958 8.05029L13.5367 2.86504C13.4286 2.57534 13.2351 2.32515 12.9816 2.14766C12.7247 1.96773 12.4187 1.87122 12.105 1.87122Z"
                                                            fill="black"></path>
                                                    </svg>
                                                </span> 5 </div>
                                            <p data-v-6652d5db="" class="review-comment">“이사온집 복층 테라스쪽으로 보일러 배관 구멍이 없어
                                                위험한 상황이였는데 맘은 급하고 여기저기 알아봐도 이중창 구멍 못뚫는다~밖에 실리콘 못쏜다~등등 여러곳에서 못한다고 한걸
                                                해내시네요~

                                                친절하시구 꼼꼼하시구 당일 오셔서 보시곤 바로 공장가셔서 만들어와서 설치,실리콘 마무리까지 깔끔하게 해주셔서 너무 감사해요~~

                                                보일러배관 땜에 혹여나 직실할수 있다고 위험하니
                                                문열어둬야 해서 춥고~
                                                천정엔 이슬이 맻히고~
                                                혹여나 직실할수 있다고 위험하다 ~ㅠㅠ 누전+질식+동파+가스비폭탄 등등 해결해 주셔서 고맙습니다~~
                                                역시 숨은고수는 고수시네요!!

                                                이제 보일러 연통만 밖으로 빼서 연결하면 안심하고 아이들과 따뜻한겨울 보낼수 있겠네요~
                                                보일러쪽에서 연통 연결을 담주로 예약잡아서 화나지만..;;;
                                                원인의 시작이 보일러 연통 작업이였으니..3주간 애먹;;눙물..

                                                암튼 숨고사장님 덕에 큰일하나 해결했어요!! 진심너무 감사하고 번창하세요!!!!”</p>
                                        </div>
                                    </a></section>
                                <section data-v-6652d5db="" data-v-231efbf4="" class="popular-provider-card"><a
                                        data-v-6652d5db="" href="/profile/users/9879135?from=community_body_ad"
                                        class="">
                                        <div data-v-6652d5db="" class="profile-container">
                                            <div data-v-29d5164e="" data-v-6652d5db=""
                                                class="user-profile-picture profile-image">
                                                <div data-v-29d5164e="" data-name="image" class=""
                                                    data-src="https://static.cdn.soomgo.com/upload/profile/ac0e4abd-1025-42fa-90ff-5bf1c0180449.jpg?webp=1&amp;h=320&amp;w=320"
                                                    lazy="loading"
                                                    style="background-image: url(&quot;data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA3MiA3MiI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYSIgZD0iTTAgMGg3MnY3MkgweiIvPgogICAgICAgIDxwYXRoIGlkPSJjIiBkPSJNMCAwaDcydjcySDB6Ii8+CiAgICA8L2RlZnM+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj4KICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYSIvPgogICAgICAgIDwvbWFzaz4KICAgICAgICA8ZyBtYXNrPSJ1cmwoI2IpIj4KICAgICAgICAgICAgPG1hc2sgaWQ9ImQiIGZpbGw9IiNmZmYiPgogICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYyIvPgogICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iI0YyRjJGMiIgeGxpbms6aHJlZj0iI2MiLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI0UxRTFFMSIgZD0iTTcwLjY3NyA2Ny4wMzJjLS45NTEtMi44NDQtMi42NzQtNS43MTItNS4yMTUtNy4zODEtNC44OS0zLjIzNi0xMC41ODctNC45NjItMTYuMDk1LTYuODEtMS4zMjktLjQ2NS0yLjY4LS45Ny0zLjg5My0xLjY5LTEuMDg1LS42NDMtMS40OTItMS45Ni0xLjc0My0zLjExNy0uMTEyLS42MTItLjE4LTEuMjQtLjIxNS0xLjg1NyAzLjk5NC01LjQ0OCA2LjY0NC0xNC4zNCA2LjY0NC0yMS42M0M1MC4xNiAxMy4xNzIgNDMuNzEyIDEwIDM1Ljc2IDEwYy03Ljk1NCAwLTE0LjQgMy4xNjYtMTQuNCAxNC41NDMgMCA3LjU1MSAyLjg0IDE2LjgxNCA3LjA3NSAyMi4xOTUtLjAzOS40MjQtLjA5Ljg1LS4xNjYgMS4yNzItLjI1MiAxLjE1Ny0uNjU5IDIuNDUtMS43NDIgMy4wOTItMS4yMTYuNzItMi41NjYgMS4xNzctMy44OTUgMS42NC01LjUwOSAxLjg0OS0xMS4yMDYgMy40NzgtMTYuMDk0IDYuNzE0LTIuNTQyIDEuNjctNC4yNjQgNC43MzItNS4yMTQgNy41NzZDLjM0NiA2OS45ODItLjA1NCA3My42MzguMDA2IDc2LjZoNzEuOTg4Yy4wNi0yLjk2Mi0uMzQtNi42MTctMS4zMTctOS41Njh6IiBtYXNrPSJ1cmwoI2QpIi8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K&quot;);">
                                                </div>
                                            </div>
                                            <div data-v-6652d5db="" class="profile-info">
                                                <h3 data-v-6652d5db="" class="profile-title">박성훈</h3>
                                                <div data-v-6652d5db="" class="profile-subtitle"><span
                                                        data-v-6652d5db="">대전 대덕구</span> · <span data-v-6652d5db="">경력
                                                        30년</span></div>
                                            </div>
                                        </div>
                                        <div data-v-6652d5db="" class="review-container">
                                            <div data-v-6652d5db="" class="pro-rate"><span data-v-0d243f1a=""
                                                    data-v-6652d5db="" class="sg-icon-v1 fill"
                                                    style="width: 0.875rem; height: 0.875rem; --svg-color: #FFCE21;"><svg
                                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M12.105 1.87122C11.7914 1.87122 11.4853 1.96773 11.2284 2.14766C10.975 2.32515 10.7815 2.57534 10.6734 2.86504L8.61423 8.05029L8.60808 8.06632C8.60618 8.07144 8.60283 8.0759 8.59843 8.07915C8.59404 8.0824 8.5888 8.08428 8.58334 8.0846L3.04706 8.44117C1.61138 8.5344 1.12102 10.3313 2.16552 11.2001L2.16648 11.2009L6.40277 14.7343L6.40523 14.7364C6.41476 14.7442 6.42187 14.7546 6.42574 14.7664C6.42952 14.7778 6.42985 14.791 6.4271 14.8027L5.16262 19.7857C4.79476 21.227 6.35038 22.529 7.69736 21.6729L7.69831 21.6723L12.095 18.8881C12.098 18.8862 12.1015 18.8852 12.105 18.8852C12.1086 18.8852 12.1125 18.8865 12.1155 18.8884L16.8405 21.8884L16.8424 21.8896C18.0703 22.6641 19.4818 21.4869 19.1506 20.1797L17.7827 14.8018C17.78 14.7901 17.7806 14.7778 17.7843 14.7664C17.7882 14.7546 17.7953 14.7442 17.8048 14.7364L22.0436 11.2009L22.0445 11.2001C23.089 10.3313 22.5983 8.53437 21.1626 8.44115L15.6314 8.08488L15.6267 8.08461C15.6213 8.0843 15.616 8.0824 15.6116 8.07915C15.6072 8.0759 15.6039 8.07144 15.602 8.06632L15.5958 8.05029L13.5367 2.86504C13.4286 2.57534 13.2351 2.32515 12.9816 2.14766C12.7247 1.96773 12.4187 1.87122 12.105 1.87122Z"
                                                            fill="black"></path>
                                                    </svg>
                                                </span> 4.9 </div>
                                            <p data-v-6652d5db="" class="review-comment">“문의부터 견적, 시공까지 일사천리였습니다. 친절한
                                                상담은 물론 가격까지 착했어요.”</p>
                                        </div>
                                    </a></section>
                                <section data-v-6652d5db="" data-v-231efbf4="" class="popular-provider-card"><a
                                        data-v-6652d5db="" href="/profile/users/5291165?from=community_body_ad"
                                        class="">
                                        <div data-v-6652d5db="" class="profile-container">
                                            <div data-v-29d5164e="" data-v-6652d5db=""
                                                class="user-profile-picture profile-image">
                                                <div data-v-29d5164e="" data-name="image" class=""
                                                    data-src="https://static.cdn.soomgo.com/upload/profile/2efccecb-4202-4ec9-91d2-a92da74d54f0.jpg?webp=1&amp;h=320&amp;w=320"
                                                    lazy="loading"
                                                    style="background-image: url(&quot;data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA3MiA3MiI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYSIgZD0iTTAgMGg3MnY3MkgweiIvPgogICAgICAgIDxwYXRoIGlkPSJjIiBkPSJNMCAwaDcydjcySDB6Ii8+CiAgICA8L2RlZnM+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj4KICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYSIvPgogICAgICAgIDwvbWFzaz4KICAgICAgICA8ZyBtYXNrPSJ1cmwoI2IpIj4KICAgICAgICAgICAgPG1hc2sgaWQ9ImQiIGZpbGw9IiNmZmYiPgogICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYyIvPgogICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iI0YyRjJGMiIgeGxpbms6aHJlZj0iI2MiLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI0UxRTFFMSIgZD0iTTcwLjY3NyA2Ny4wMzJjLS45NTEtMi44NDQtMi42NzQtNS43MTItNS4yMTUtNy4zODEtNC44OS0zLjIzNi0xMC41ODctNC45NjItMTYuMDk1LTYuODEtMS4zMjktLjQ2NS0yLjY4LS45Ny0zLjg5My0xLjY5LTEuMDg1LS42NDMtMS40OTItMS45Ni0xLjc0My0zLjExNy0uMTEyLS42MTItLjE4LTEuMjQtLjIxNS0xLjg1NyAzLjk5NC01LjQ0OCA2LjY0NC0xNC4zNCA2LjY0NC0yMS42M0M1MC4xNiAxMy4xNzIgNDMuNzEyIDEwIDM1Ljc2IDEwYy03Ljk1NCAwLTE0LjQgMy4xNjYtMTQuNCAxNC41NDMgMCA3LjU1MSAyLjg0IDE2LjgxNCA3LjA3NSAyMi4xOTUtLjAzOS40MjQtLjA5Ljg1LS4xNjYgMS4yNzItLjI1MiAxLjE1Ny0uNjU5IDIuNDUtMS43NDIgMy4wOTItMS4yMTYuNzItMi41NjYgMS4xNzctMy44OTUgMS42NC01LjUwOSAxLjg0OS0xMS4yMDYgMy40NzgtMTYuMDk0IDYuNzE0LTIuNTQyIDEuNjctNC4yNjQgNC43MzItNS4yMTQgNy41NzZDLjM0NiA2OS45ODItLjA1NCA3My42MzguMDA2IDc2LjZoNzEuOTg4Yy4wNi0yLjk2Mi0uMzQtNi42MTctMS4zMTctOS41Njh6IiBtYXNrPSJ1cmwoI2QpIi8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K&quot;);">
                                                </div>
                                            </div>
                                            <div data-v-6652d5db="" class="profile-info">
                                                <h3 data-v-6652d5db="" class="profile-title">대창윈도우</h3>
                                                <div data-v-6652d5db="" class="profile-subtitle"><span
                                                        data-v-6652d5db="">제주특별자치도 제주시</span> · <span
                                                        data-v-6652d5db="">경력 22년</span></div>
                                            </div>
                                        </div>
                                        <div data-v-6652d5db="" class="review-container">
                                            <div data-v-6652d5db="" class="pro-rate"><span data-v-0d243f1a=""
                                                    data-v-6652d5db="" class="sg-icon-v1 fill"
                                                    style="width: 0.875rem; height: 0.875rem; --svg-color: #FFCE21;"><svg
                                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M12.105 1.87122C11.7914 1.87122 11.4853 1.96773 11.2284 2.14766C10.975 2.32515 10.7815 2.57534 10.6734 2.86504L8.61423 8.05029L8.60808 8.06632C8.60618 8.07144 8.60283 8.0759 8.59843 8.07915C8.59404 8.0824 8.5888 8.08428 8.58334 8.0846L3.04706 8.44117C1.61138 8.5344 1.12102 10.3313 2.16552 11.2001L2.16648 11.2009L6.40277 14.7343L6.40523 14.7364C6.41476 14.7442 6.42187 14.7546 6.42574 14.7664C6.42952 14.7778 6.42985 14.791 6.4271 14.8027L5.16262 19.7857C4.79476 21.227 6.35038 22.529 7.69736 21.6729L7.69831 21.6723L12.095 18.8881C12.098 18.8862 12.1015 18.8852 12.105 18.8852C12.1086 18.8852 12.1125 18.8865 12.1155 18.8884L16.8405 21.8884L16.8424 21.8896C18.0703 22.6641 19.4818 21.4869 19.1506 20.1797L17.7827 14.8018C17.78 14.7901 17.7806 14.7778 17.7843 14.7664C17.7882 14.7546 17.7953 14.7442 17.8048 14.7364L22.0436 11.2009L22.0445 11.2001C23.089 10.3313 22.5983 8.53437 21.1626 8.44115L15.6314 8.08488L15.6267 8.08461C15.6213 8.0843 15.616 8.0824 15.6116 8.07915C15.6072 8.0759 15.6039 8.07144 15.602 8.06632L15.5958 8.05029L13.5367 2.86504C13.4286 2.57534 13.2351 2.32515 12.9816 2.14766C12.7247 1.96773 12.4187 1.87122 12.105 1.87122Z"
                                                            fill="black"></path>
                                                    </svg>
                                                </span> 4.9 </div>
                                            <p data-v-6652d5db="" class="review-comment">“급한 마음에 촉박하게 요청드렸는데도 방문해주시고 매우
                                                친절하고 솔직하게 지금 필요한것과 필요치 않은것을 체크해주셨습니다. 시공도 매우 꼼꼼하시고 좋았어요! 감사합니다!”</p>
                                        </div>
                                    </a></section>
                                <section data-v-6652d5db="" data-v-231efbf4="" class="popular-provider-card"><a
                                        data-v-6652d5db="" href="/profile/users/2530607?from=community_body_ad"
                                        class="">
                                        <div data-v-6652d5db="" class="profile-container">
                                            <div data-v-29d5164e="" data-v-6652d5db=""
                                                class="user-profile-picture profile-image">
                                                <div data-v-29d5164e="" data-name="image" class=""
                                                    data-src="https://static.cdn.soomgo.com/upload/profile/98ace1d5-560b-45e0-939e-6224666911dd.JPG?webp=1&amp;h=320&amp;w=320"
                                                    lazy="loading"
                                                    style="background-image: url(&quot;data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA3MiA3MiI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYSIgZD0iTTAgMGg3MnY3MkgweiIvPgogICAgICAgIDxwYXRoIGlkPSJjIiBkPSJNMCAwaDcydjcySDB6Ii8+CiAgICA8L2RlZnM+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj4KICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYSIvPgogICAgICAgIDwvbWFzaz4KICAgICAgICA8ZyBtYXNrPSJ1cmwoI2IpIj4KICAgICAgICAgICAgPG1hc2sgaWQ9ImQiIGZpbGw9IiNmZmYiPgogICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYyIvPgogICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iI0YyRjJGMiIgeGxpbms6aHJlZj0iI2MiLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI0UxRTFFMSIgZD0iTTcwLjY3NyA2Ny4wMzJjLS45NTEtMi44NDQtMi42NzQtNS43MTItNS4yMTUtNy4zODEtNC44OS0zLjIzNi0xMC41ODctNC45NjItMTYuMDk1LTYuODEtMS4zMjktLjQ2NS0yLjY4LS45Ny0zLjg5My0xLjY5LTEuMDg1LS42NDMtMS40OTItMS45Ni0xLjc0My0zLjExNy0uMTEyLS42MTItLjE4LTEuMjQtLjIxNS0xLjg1NyAzLjk5NC01LjQ0OCA2LjY0NC0xNC4zNCA2LjY0NC0yMS42M0M1MC4xNiAxMy4xNzIgNDMuNzEyIDEwIDM1Ljc2IDEwYy03Ljk1NCAwLTE0LjQgMy4xNjYtMTQuNCAxNC41NDMgMCA3LjU1MSAyLjg0IDE2LjgxNCA3LjA3NSAyMi4xOTUtLjAzOS40MjQtLjA5Ljg1LS4xNjYgMS4yNzItLjI1MiAxLjE1Ny0uNjU5IDIuNDUtMS43NDIgMy4wOTItMS4yMTYuNzItMi41NjYgMS4xNzctMy44OTUgMS42NC01LjUwOSAxLjg0OS0xMS4yMDYgMy40NzgtMTYuMDk0IDYuNzE0LTIuNTQyIDEuNjctNC4yNjQgNC43MzItNS4yMTQgNy41NzZDLjM0NiA2OS45ODItLjA1NCA3My42MzguMDA2IDc2LjZoNzEuOTg4Yy4wNi0yLjk2Mi0uMzQtNi42MTctMS4zMTctOS41Njh6IiBtYXNrPSJ1cmwoI2QpIi8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K&quot;);">
                                                </div>
                                            </div>
                                            <div data-v-6652d5db="" class="profile-info">
                                                <h3 data-v-6652d5db="" class="profile-title">우주글라스(김범수)</h3>
                                                <div data-v-6652d5db="" class="profile-subtitle"><span
                                                        data-v-6652d5db="">경기도 용인시</span> · <span data-v-6652d5db="">경력
                                                        23년</span></div>
                                            </div>
                                        </div>
                                        <div data-v-6652d5db="" class="review-container">
                                            <div data-v-6652d5db="" class="pro-rate"><span data-v-0d243f1a=""
                                                    data-v-6652d5db="" class="sg-icon-v1 fill"
                                                    style="width: 0.875rem; height: 0.875rem; --svg-color: #FFCE21;"><svg
                                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M12.105 1.87122C11.7914 1.87122 11.4853 1.96773 11.2284 2.14766C10.975 2.32515 10.7815 2.57534 10.6734 2.86504L8.61423 8.05029L8.60808 8.06632C8.60618 8.07144 8.60283 8.0759 8.59843 8.07915C8.59404 8.0824 8.5888 8.08428 8.58334 8.0846L3.04706 8.44117C1.61138 8.5344 1.12102 10.3313 2.16552 11.2001L2.16648 11.2009L6.40277 14.7343L6.40523 14.7364C6.41476 14.7442 6.42187 14.7546 6.42574 14.7664C6.42952 14.7778 6.42985 14.791 6.4271 14.8027L5.16262 19.7857C4.79476 21.227 6.35038 22.529 7.69736 21.6729L7.69831 21.6723L12.095 18.8881C12.098 18.8862 12.1015 18.8852 12.105 18.8852C12.1086 18.8852 12.1125 18.8865 12.1155 18.8884L16.8405 21.8884L16.8424 21.8896C18.0703 22.6641 19.4818 21.4869 19.1506 20.1797L17.7827 14.8018C17.78 14.7901 17.7806 14.7778 17.7843 14.7664C17.7882 14.7546 17.7953 14.7442 17.8048 14.7364L22.0436 11.2009L22.0445 11.2001C23.089 10.3313 22.5983 8.53437 21.1626 8.44115L15.6314 8.08488L15.6267 8.08461C15.6213 8.0843 15.616 8.0824 15.6116 8.07915C15.6072 8.0759 15.6039 8.07144 15.602 8.06632L15.5958 8.05029L13.5367 2.86504C13.4286 2.57534 13.2351 2.32515 12.9816 2.14766C12.7247 1.96773 12.4187 1.87122 12.105 1.87122Z"
                                                            fill="black"></path>
                                                    </svg>
                                                </span> 4.9 </div>
                                            <p data-v-6652d5db="" class="review-comment">“사실 가격은 다른 고수분들과 작업까지 진행을 안했으니
                                                최저가인지는 알수없지만,
                                                전 합리적이라고 생각합니다.
                                                저희집은 30층이고 거실 큰창 2개를 교체해서 난이도 최상이니까요
                                                사장님이 직접오셔서 견적하사며 설명도 자세히 해주고, 마무리도 완벽하고 기분이가 최고입니다”</p>
                                        </div>
                                    </a></section>
                                <section data-v-6652d5db="" data-v-231efbf4="" class="popular-provider-card"><a
                                        data-v-6652d5db="" href="/profile/users/1181910?from=community_body_ad"
                                        class="">
                                        <div data-v-6652d5db="" class="profile-container">
                                            <div data-v-29d5164e="" data-v-6652d5db=""
                                                class="user-profile-picture profile-image">
                                                <div data-v-29d5164e="" data-name="image" class=""
                                                    data-src="https://static.cdn.soomgo.com/upload/profile/2b206da5-a387-4b63-944f-e001b3589ee2.jpg?webp=1&amp;h=320&amp;w=320"
                                                    lazy="loading"
                                                    style="background-image: url(&quot;data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA3MiA3MiI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYSIgZD0iTTAgMGg3MnY3MkgweiIvPgogICAgICAgIDxwYXRoIGlkPSJjIiBkPSJNMCAwaDcydjcySDB6Ii8+CiAgICA8L2RlZnM+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj4KICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYSIvPgogICAgICAgIDwvbWFzaz4KICAgICAgICA8ZyBtYXNrPSJ1cmwoI2IpIj4KICAgICAgICAgICAgPG1hc2sgaWQ9ImQiIGZpbGw9IiNmZmYiPgogICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYyIvPgogICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iI0YyRjJGMiIgeGxpbms6aHJlZj0iI2MiLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI0UxRTFFMSIgZD0iTTcwLjY3NyA2Ny4wMzJjLS45NTEtMi44NDQtMi42NzQtNS43MTItNS4yMTUtNy4zODEtNC44OS0zLjIzNi0xMC41ODctNC45NjItMTYuMDk1LTYuODEtMS4zMjktLjQ2NS0yLjY4LS45Ny0zLjg5My0xLjY5LTEuMDg1LS42NDMtMS40OTItMS45Ni0xLjc0My0zLjExNy0uMTEyLS42MTItLjE4LTEuMjQtLjIxNS0xLjg1NyAzLjk5NC01LjQ0OCA2LjY0NC0xNC4zNCA2LjY0NC0yMS42M0M1MC4xNiAxMy4xNzIgNDMuNzEyIDEwIDM1Ljc2IDEwYy03Ljk1NCAwLTE0LjQgMy4xNjYtMTQuNCAxNC41NDMgMCA3LjU1MSAyLjg0IDE2LjgxNCA3LjA3NSAyMi4xOTUtLjAzOS40MjQtLjA5Ljg1LS4xNjYgMS4yNzItLjI1MiAxLjE1Ny0uNjU5IDIuNDUtMS43NDIgMy4wOTItMS4yMTYuNzItMi41NjYgMS4xNzctMy44OTUgMS42NC01LjUwOSAxLjg0OS0xMS4yMDYgMy40NzgtMTYuMDk0IDYuNzE0LTIuNTQyIDEuNjctNC4yNjQgNC43MzItNS4yMTQgNy41NzZDLjM0NiA2OS45ODItLjA1NCA3My42MzguMDA2IDc2LjZoNzEuOTg4Yy4wNi0yLjk2Mi0uMzQtNi42MTctMS4zMTctOS41Njh6IiBtYXNrPSJ1cmwoI2QpIi8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K&quot;);">
                                                </div>
                                            </div>
                                            <div data-v-6652d5db="" class="profile-info">
                                                <h3 data-v-6652d5db="" class="profile-title">3S도어 ⭐️(자동문,강화도어 설치수리서비스)⭐️
                                                </h3>
                                                <div data-v-6652d5db="" class="profile-subtitle"><span
                                                        data-v-6652d5db="">경기도 부천시</span> · <span data-v-6652d5db="">경력
                                                        8년</span></div>
                                            </div>
                                        </div>
                                        <div data-v-6652d5db="" class="review-container">
                                            <div data-v-6652d5db="" class="pro-rate"><span data-v-0d243f1a=""
                                                    data-v-6652d5db="" class="sg-icon-v1 fill"
                                                    style="width: 0.875rem; height: 0.875rem; --svg-color: #FFCE21;"><svg
                                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M12.105 1.87122C11.7914 1.87122 11.4853 1.96773 11.2284 2.14766C10.975 2.32515 10.7815 2.57534 10.6734 2.86504L8.61423 8.05029L8.60808 8.06632C8.60618 8.07144 8.60283 8.0759 8.59843 8.07915C8.59404 8.0824 8.5888 8.08428 8.58334 8.0846L3.04706 8.44117C1.61138 8.5344 1.12102 10.3313 2.16552 11.2001L2.16648 11.2009L6.40277 14.7343L6.40523 14.7364C6.41476 14.7442 6.42187 14.7546 6.42574 14.7664C6.42952 14.7778 6.42985 14.791 6.4271 14.8027L5.16262 19.7857C4.79476 21.227 6.35038 22.529 7.69736 21.6729L7.69831 21.6723L12.095 18.8881C12.098 18.8862 12.1015 18.8852 12.105 18.8852C12.1086 18.8852 12.1125 18.8865 12.1155 18.8884L16.8405 21.8884L16.8424 21.8896C18.0703 22.6641 19.4818 21.4869 19.1506 20.1797L17.7827 14.8018C17.78 14.7901 17.7806 14.7778 17.7843 14.7664C17.7882 14.7546 17.7953 14.7442 17.8048 14.7364L22.0436 11.2009L22.0445 11.2001C23.089 10.3313 22.5983 8.53437 21.1626 8.44115L15.6314 8.08488L15.6267 8.08461C15.6213 8.0843 15.616 8.0824 15.6116 8.07915C15.6072 8.0759 15.6039 8.07144 15.602 8.06632L15.5958 8.05029L13.5367 2.86504C13.4286 2.57534 13.2351 2.32515 12.9816 2.14766C12.7247 1.96773 12.4187 1.87122 12.105 1.87122Z"
                                                            fill="black"></path>
                                                    </svg>
                                                </span> 4.9 </div>
                                            <p data-v-6652d5db="" class="review-comment">“친절하시고 완성도가 만족스러워요^^
                                                마무리도 깔끔히 해주시고 감사합니다”</p>
                                        </div>
                                    </a></section>
                                <section data-v-6652d5db="" data-v-231efbf4="" class="popular-provider-card"><a
                                        data-v-6652d5db="" href="/profile/users/7562389?from=community_body_ad"
                                        class="">
                                        <div data-v-6652d5db="" class="profile-container">
                                            <div data-v-29d5164e="" data-v-6652d5db=""
                                                class="user-profile-picture profile-image">
                                                <div data-v-29d5164e="" data-name="image" class=""
                                                    data-src="https://static.cdn.soomgo.com/upload/profile/a11b532f-ec2d-42b3-92e1-e004c1a06b2f.jpg?webp=1&amp;h=320&amp;w=320"
                                                    lazy="loading"
                                                    style="background-image: url(&quot;data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA3MiA3MiI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYSIgZD0iTTAgMGg3MnY3MkgweiIvPgogICAgICAgIDxwYXRoIGlkPSJjIiBkPSJNMCAwaDcydjcySDB6Ii8+CiAgICA8L2RlZnM+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj4KICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYSIvPgogICAgICAgIDwvbWFzaz4KICAgICAgICA8ZyBtYXNrPSJ1cmwoI2IpIj4KICAgICAgICAgICAgPG1hc2sgaWQ9ImQiIGZpbGw9IiNmZmYiPgogICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYyIvPgogICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iI0YyRjJGMiIgeGxpbms6aHJlZj0iI2MiLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI0UxRTFFMSIgZD0iTTcwLjY3NyA2Ny4wMzJjLS45NTEtMi44NDQtMi42NzQtNS43MTItNS4yMTUtNy4zODEtNC44OS0zLjIzNi0xMC41ODctNC45NjItMTYuMDk1LTYuODEtMS4zMjktLjQ2NS0yLjY4LS45Ny0zLjg5My0xLjY5LTEuMDg1LS42NDMtMS40OTItMS45Ni0xLjc0My0zLjExNy0uMTEyLS42MTItLjE4LTEuMjQtLjIxNS0xLjg1NyAzLjk5NC01LjQ0OCA2LjY0NC0xNC4zNCA2LjY0NC0yMS42M0M1MC4xNiAxMy4xNzIgNDMuNzEyIDEwIDM1Ljc2IDEwYy03Ljk1NCAwLTE0LjQgMy4xNjYtMTQuNCAxNC41NDMgMCA3LjU1MSAyLjg0IDE2LjgxNCA3LjA3NSAyMi4xOTUtLjAzOS40MjQtLjA5Ljg1LS4xNjYgMS4yNzItLjI1MiAxLjE1Ny0uNjU5IDIuNDUtMS43NDIgMy4wOTItMS4yMTYuNzItMi41NjYgMS4xNzctMy44OTUgMS42NC01LjUwOSAxLjg0OS0xMS4yMDYgMy40NzgtMTYuMDk0IDYuNzE0LTIuNTQyIDEuNjctNC4yNjQgNC43MzItNS4yMTQgNy41NzZDLjM0NiA2OS45ODItLjA1NCA3My42MzguMDA2IDc2LjZoNzEuOTg4Yy4wNi0yLjk2Mi0uMzQtNi42MTctMS4zMTctOS41Njh6IiBtYXNrPSJ1cmwoI2QpIi8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K&quot;);">
                                                </div>
                                            </div>
                                            <div data-v-6652d5db="" class="profile-info">
                                                <h3 data-v-6652d5db="" class="profile-title">가나 유리 샷시</h3>
                                                <div data-v-6652d5db="" class="profile-subtitle"><span
                                                        data-v-6652d5db="">울산광역시 중구</span> · <span data-v-6652d5db="">경력
                                                        30년</span></div>
                                            </div>
                                        </div>
                                        <div data-v-6652d5db="" class="review-container">
                                            <div data-v-6652d5db="" class="pro-rate"><span data-v-0d243f1a=""
                                                    data-v-6652d5db="" class="sg-icon-v1 fill"
                                                    style="width: 0.875rem; height: 0.875rem; --svg-color: #FFCE21;"><svg
                                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M12.105 1.87122C11.7914 1.87122 11.4853 1.96773 11.2284 2.14766C10.975 2.32515 10.7815 2.57534 10.6734 2.86504L8.61423 8.05029L8.60808 8.06632C8.60618 8.07144 8.60283 8.0759 8.59843 8.07915C8.59404 8.0824 8.5888 8.08428 8.58334 8.0846L3.04706 8.44117C1.61138 8.5344 1.12102 10.3313 2.16552 11.2001L2.16648 11.2009L6.40277 14.7343L6.40523 14.7364C6.41476 14.7442 6.42187 14.7546 6.42574 14.7664C6.42952 14.7778 6.42985 14.791 6.4271 14.8027L5.16262 19.7857C4.79476 21.227 6.35038 22.529 7.69736 21.6729L7.69831 21.6723L12.095 18.8881C12.098 18.8862 12.1015 18.8852 12.105 18.8852C12.1086 18.8852 12.1125 18.8865 12.1155 18.8884L16.8405 21.8884L16.8424 21.8896C18.0703 22.6641 19.4818 21.4869 19.1506 20.1797L17.7827 14.8018C17.78 14.7901 17.7806 14.7778 17.7843 14.7664C17.7882 14.7546 17.7953 14.7442 17.8048 14.7364L22.0436 11.2009L22.0445 11.2001C23.089 10.3313 22.5983 8.53437 21.1626 8.44115L15.6314 8.08488L15.6267 8.08461C15.6213 8.0843 15.616 8.0824 15.6116 8.07915C15.6072 8.0759 15.6039 8.07144 15.602 8.06632L15.5958 8.05029L13.5367 2.86504C13.4286 2.57534 13.2351 2.32515 12.9816 2.14766C12.7247 1.96773 12.4187 1.87122 12.105 1.87122Z"
                                                            fill="black"></path>
                                                    </svg>
                                                </span> 4.8 </div>
                                            <p data-v-6652d5db="" class="review-comment">“[결론]강력추천합니다.
                                                #저렴한 가격 #친절한 상담 #작업완성도 높음
                                                [저의 상황]아파트 베란다 유리에 백화현상이 심해서 유리교체를 의뢰했어요.
                                                [상담]여러 고수님들과의 상담을 했는데, 가장 합리적인 가격에 적절한 솔루션을 제시해주셨어요.
                                                [작업]예정된 작업시간보다 일찍 오셔서 작업환경을 확인하시는 것을 보며, '역시 고수시구나'라고 느꼈고, 작업에 정성을 다해서
                                                꼼꼼히 작업하면서도 신속하게 작업해주시는 것에 감탄했습니다. 보시면 알아요. 작업을 정성껏 해주신다는 의미를요.
                                                [서비스]교체해야 하는 베란다 유리를 보시고, 옆의 베란다 유리도 봐주시면서 "유리와 샷시사이에 실리콘이 삮았어요. 이건
                                                작업끝나고 실리콘 작업해드릴께요"라고 하시더라구요. 견적에 포함되지 않은 것까지 해주시니 추가혜택도 받았네요.
                                                [감사의 인사]유리바꾸고 나니 창밖이 선명하네요. 오늘 엄청 더우셨는데, 작업하시는라 고생많으셨고, 감사합니다. 사업
                                                번창하세요^^”</p>
                                        </div>
                                    </a></section>
                            </div>
                        </section>
                        -->
            <!--커뮤니티 인기 서비스 TOP 8 (인기 카테고리 넣을건지..?)-->
            <!--
                        <section data-v-1e949c79="" data-v-1c31fdd0="" class="recommend-request">
                            <div data-v-1e949c79="" class="recommend-request-heading">
                                <h2 data-v-746dd3c0="" data-v-1e949c79=""
                                    class="recommend-request-title legacy-typography headline-subhead2 gray-900 text-align-left">
                                    커뮤니티 인기 서비스 TOP 8<br data-v-1e949c79="" data-v-746dd3c0="">바로 견적을 요청해보세요! </h2><a
                                    data-v-1e949c79="" href="/category-home" class=""><span data-v-746dd3c0=""
                                        data-v-1e949c79=""
                                        class="recommend-request-view-total legacy-typography interface-body2 gray-500 text-align-left">
                                        전체보기 </span></a>
                            </div>
                            <div data-v-1e949c79="" class="recommend-request-popular-service">
                                <ul data-v-1e949c79="" class="recommend-request-list">
                                    <li data-v-1e949c79="" class="recommend-request-item"><a data-v-1e949c79=""
                                            href="/hire/%ED%94%BC%EC%95%84%EB%85%B8%ED%82%A4%EB%B3%B4%EB%93%9C?from=%EC%BB%A4%EB%AE%A4%EB%8B%88%ED%8B%B0_%EB%B3%B8%EB%AC%B8"
                                            class=""><span data-v-1e949c79=""
                                                class="recommend-request-chip-item gray-900">피아노/키보드 레슨</span></a></li>
                                    <li data-v-1e949c79="" class="recommend-request-item"><a data-v-1e949c79=""
                                            href="/hire/%EA%B3%A8%ED%94%84?from=%EC%BB%A4%EB%AE%A4%EB%8B%88%ED%8B%B0_%EB%B3%B8%EB%AC%B8"
                                            class=""><span data-v-1e949c79=""
                                                class="recommend-request-chip-item gray-900">골프 레슨</span></a></li>
                                    <li data-v-1e949c79="" class="recommend-request-item"><a data-v-1e949c79=""
                                            href="/hire/%ED%8D%BC%EC%8A%A4%EB%84%90%ED%8A%B8%EB%A0%88%EC%9D%B4%EB%8B%9D?from=%EC%BB%A4%EB%AE%A4%EB%8B%88%ED%8B%B0_%EB%B3%B8%EB%AC%B8"
                                            class=""><span data-v-1e949c79=""
                                                class="recommend-request-chip-item gray-900">퍼스널트레이닝(PT)</span></a></li>
                                    <li data-v-1e949c79="" class="recommend-request-item"><a data-v-1e949c79=""
                                            href="/hire/%EB%B3%B4%EC%BB%AC?from=%EC%BB%A4%EB%AE%A4%EB%8B%88%ED%8B%B0_%EB%B3%B8%EB%AC%B8"
                                            class=""><span data-v-1e949c79=""
                                                class="recommend-request-chip-item gray-900">보컬 레슨</span></a></li>
                                    <li data-v-1e949c79="" class="recommend-request-item"><a data-v-1e949c79=""
                                            href="/hire/%EC%88%98%ED%95%99?from=%EC%BB%A4%EB%AE%A4%EB%8B%88%ED%8B%B0_%EB%B3%B8%EB%AC%B8"
                                            class=""><span data-v-1e949c79=""
                                                class="recommend-request-chip-item gray-900">수학 과외</span></a></li>
                                    <li data-v-1e949c79="" class="recommend-request-item"><a data-v-1e949c79=""
                                            href="/hire/%EC%97%90%EC%96%B4%EC%BB%A8-%EC%84%A4%EC%B9%98-%EC%88%98%EB%A6%AC?from=%EC%BB%A4%EB%AE%A4%EB%8B%88%ED%8B%B0_%EB%B3%B8%EB%AC%B8"
                                            class=""><span data-v-1e949c79=""
                                                class="recommend-request-chip-item gray-900">에어컨 설치 및 수리</span></a></li>
                                    <li data-v-1e949c79="" class="recommend-request-item"><a data-v-1e949c79=""
                                            href="/hire/%EB%AC%B8-%EC%84%A4%EC%B9%98-%EC%88%98%EB%A6%AC?from=%EC%BB%A4%EB%AE%A4%EB%8B%88%ED%8B%B0_%EB%B3%B8%EB%AC%B8"
                                            class=""><span data-v-1e949c79=""
                                                class="recommend-request-chip-item gray-900">문 설치 및 수리</span></a></li>
                                    <li data-v-1e949c79="" class="recommend-request-item"><a data-v-1e949c79=""
                                            href="/hire/%EC%88%98%EB%8F%84-%EC%84%A4%EC%B9%98-%EC%88%98%EB%A6%AC?from=%EC%BB%A4%EB%AE%A4%EB%8B%88%ED%8B%B0_%EB%B3%B8%EB%AC%B8"
                                            class=""><span data-v-1e949c79=""
                                                class="recommend-request-chip-item gray-900">수도 관련 설치 및 수리</span></a>
                                    </li>
                                </ul>
                            </div>
                        </section>
                        -->
            <!--조회수..넣는다면 조회수 별 인기글 세개 보여주는 기능으로 바꾸기-->
            <!--
            <section data-v-9fd2e7dc="" data-v-1c31fdd0="" class="popular-post">
              <div data-v-9fd2e7dc="" class="popular-post-heading">
                <h2
                  data-v-746dd3c0=""
                  data-v-9fd2e7dc=""
                  class="popular-post-title legacy-typography headline-subhead2 gray-900 text-align-left"
                >
                  지금 가장 뜨거운 🔥 재능 나눔&교환 게시글
                </h2>
              </div>
              <div data-v-9fd2e7dc="" class="popular-post-list-container">
                <ul
                  data-v-61cb68ac=""
                  data-v-9fd2e7dc=""
                  data-testid="curation-list"
                  class="curation-list"
                >
                  <li
                    data-v-61cb68ac=""
                    data-testid="curation-item"
                    class="curation-list-item"
                  >
                    <a
                      data-v-61cb68ac=""
                      href="/community/soomgo-life/posts/669f59b436e6901d91342fbf-%EC%A0%84)-%EC%98%AC%EB%A6%BC%ED%94%BD-%EC%88%98%EC%98%81-%EA%B5%AD%EA%B0%80%EB%8C%80%ED%91%9C%EA%B0%80-%EC%95%8C%EB%A0%A4%EC%A3%BC%EB%8A%94-%EB%AC%BC-%EA%B3%B5%ED%8F%AC%EC%A6%9D-%EA%B7%B9%EB%B3%B5-%EA%BF%80%ED%8C%81"
                      class="curation-list-wrapper"
                    >
                      <div
                        data-v-61cb68ac=""
                        class="curation-contents has-thumbnail"
                      >
                        <p data-v-61cb68ac="" class="topic-name">교환</p>
                        <p data-v-61cb68ac="" class="curation-title">
                          전) 올림픽 수영 국가대표가 알려주는 물 공포증 극복
                          꿀팁
                        </p>
                        <p data-v-61cb68ac="" class="curation-content">
                          기다리던 파리올림픽이 곧 시작됩니다! 이번 올림픽에서
                          많은 사람들이 주목하고 있는 종목은 아무래도 수영이
                          아닐까 싶은데요. 수영 황금세대라 불리는 선수들의
                          경기를 보면서 메달 획득에 대한 기대는 물론, 이번
                          기회에 수영을 한 번 제대로 배워보고 싶다는 생각을 하는
                          분들...
                        </p>
                        <div data-v-61cb68ac="" class="curation-reactions">
                          <span data-v-61cb68ac="" class="view-count"
                            >2,654</span
                          ><span data-v-61cb68ac="" class="comment-count">
                            1
                          </span>
                        </div>
                      </div>
                      <div data-v-61cb68ac="" class="curation-topic-image">
                        <img
                          data-v-61cb68ac=""
                          alt="다녀오겠숨니다(썸네일) _ 고수센터.png"
                          class="topic-thumbnail-image"
                          data-src="https://static.cdn.soomgo.com/upload/soomgoLifeAdmin/f8c31b86-2ff5-4470-9868-fb05f09224fa.png?h=128&amp;w=128&amp;webp=1"
                          src="https://static.cdn.soomgo.com/upload/soomgoLifeAdmin/f8c31b86-2ff5-4470-9868-fb05f09224fa.png?h=128&amp;w=128&amp;webp=1"
                          lazy="loaded"
                        />
                      </div> </a
                    ><a
                      data-v-61cb68ac=""
                      href="/community/soomgo-life/posts/66a82b8e1b6dd65ab5043fd9-%EC%97%85%EC%B2%B4%EC%97%90%EC%84%9C-%EB%B2%BD%EB%8F%8C%EB%B2%BD%EC%A7%80-%ED%8F%BC%EB%B8%94%EB%9F%AD%EB%B2%BD%EC%A7%80-%EA%B3%A0%EC%A7%91%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A0%EA%B0%80-%EB%AD%98%EA%B9%8C%EC%9A%94-"
                      class="curation-list-wrapper"
                    >
                      <div
                        data-v-61cb68ac=""
                        class="curation-contents has-thumbnail"
                      >
                        <p data-v-61cb68ac="" class="topic-name">나눔</p>
                        <p data-v-61cb68ac="" class="curation-title">
                          업체에서 벽돌벽지.폼블럭벽지.고집하는 이유가 뭘까요?
                          우리회사제품 나눔~
                        </p>
                        <p data-v-61cb68ac="" class="curation-content">
                          이사 갈 곳집이 한쪽방에 이런 제품으로 도배가
                          되어있습니다. 계약날 집주인 분이랑 이야기 하여 집전체
                          도배를 해주기로 하셨는데 집주인분과 거래하는
                          도배업체가 저쪽 방의 저 도배는 단열에 좋은데 왜하려고
                          하냐고 저방 빼고 견적을 냈다고 합니다. 그래서 저희가
                          저 방만...
                        </p>
                        <div data-v-61cb68ac="" class="curation-reactions">
                          <span data-v-61cb68ac="" class="view-count">156</span
                          ><span data-v-61cb68ac="" class="comment-count">
                            1
                          </span>
                        </div>
                      </div>
                      <div data-v-61cb68ac="" class="curation-topic-image">
                        <img
                          data-v-61cb68ac=""
                          alt="96c5cbcb-2f13-40d2-88ce-92ee218c218c.jpg"
                          class="topic-thumbnail-image"
                          data-src="https://static.cdn.soomgo.com/upload/media/864f27c4-2d25-4da0-aab3-d1f98aca1a95.jpg?h=128&amp;w=128&amp;webp=1"
                          src="https://static.cdn.soomgo.com/upload/media/864f27c4-2d25-4da0-aab3-d1f98aca1a95.jpg?h=128&amp;w=128&amp;webp=1"
                          lazy="loaded"
                        />
                      </div> </a
                    ><a
                      data-v-61cb68ac=""
                      href="/community/soomgo-life/posts/66a8405a36e6901d91343304-%EC%84%9D%EA%B3%A0%EB%B2%BD%EC%9D%B4-%EB%9C%A8%EA%B3%A0-%EC%B2%9C%EC%9E%A5%EB%8F%84%EB%B0%B0%EA%B0%80-%EC%9A%B8%EA%B3%A0-%EC%9A%95%EC%8B%A4%EB%B2%BD-%ED%83%80%EC%9D%BC%EC%97%90-%EA%B8%88%EC%9D%B4%EA%B0%84-%EC%A7%91"
                      class="curation-list-wrapper"
                    >
                      <div
                        data-v-61cb68ac=""
                        class="curation-contents has-thumbnail"
                      >
                        <p data-v-61cb68ac="" class="topic-name">나눔</p>
                        <p data-v-61cb68ac="" class="curation-title">
                          석고벽이 뜨고 천장도배가 울고 욕실벽 타일에 금이간 집
                          나눔^^
                        </p>
                        <p data-v-61cb68ac="" class="curation-content">
                          1.실외기실벽 곰팡이 2.공용 욕실 타일 금 3.작은방 가벽
                          들뜸(누수?여부) 4~8.천장 도배가 줄가면서 울음 수리로
                          가능 한지요? 최소한의 수리만 할 경우 비용은 얼마나
                          될까요?
                        </p>
                        <div data-v-61cb68ac="" class="curation-reactions">
                          <span data-v-61cb68ac="" class="view-count">109</span
                          ><span data-v-61cb68ac="" class="comment-count">
                            2
                          </span>
                        </div>
                      </div>
                      <div data-v-61cb68ac="" class="curation-topic-image">
                        <img
                          data-v-61cb68ac=""
                          alt="1785f713-5282-4c75-b452-a35a87b82802.jpg"
                          class="topic-thumbnail-image"
                          data-src="https://static.cdn.soomgo.com/upload/media/d1275f78-e5e8-458e-ba5c-a6575ead3329.jpg?h=128&amp;w=128&amp;webp=1"
                          src="https://static.cdn.soomgo.com/upload/media/d1275f78-e5e8-458e-ba5c-a6575ead3329.jpg?h=128&amp;w=128&amp;webp=1"
                          lazy="loaded"
                        />
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </section>
          --></div>
        </section>
      </div>
      <div data-v-c05eb1ae="" class="v-portal" style="display: none"></div>
    </div>
  </div>
</template>



<script>
// import Countdown from "@/components/Countdown.vue";
import { useSharePostStore } from "@/store/useSharePostStore";
import { mapStores } from "pinia";
import { useRoute } from "vue-router";

export default {
  name: "SharePostReadPage",
  components: {
    // Countdown,
  },
  data() {
    const route = useRoute();

    return {
      message: "test",
      itemDetails: null,
      // 전달받은 나눔글idx
      postIdx: route.params.id,
    };
  },
  computed: {
    ...mapStores(useSharePostStore),
  },
  created() {},
  mounted() {
    this.getShareDetail();
    console.log("나눔글디테일", this.sharePostStore.sharePost);
  },
  methods: {
    async getShareDetail() {
      await this.sharePostStore.getSharePost(this.postIdx);
    },
    async routeToShare() {
      await this.sharePostStore.getAttendSharePost(this.postIdx);
      if (this.sharePostStore.isSuccess === false) {
        alert(this.sharePostStore.shareDetail.message);
      } else alert("참여신청완료");
      console.log("스토어 나눔글참여하기", this.sharePostStore.isSuccess);
    },
    // handleCountdownFinished() {
    //   alert("카운트다운이 종료되었습니다.");
    // },
  },
};
</script>

<style scoped>
/* 기본 css */
.bbodyy {
  --gnb-height: 72px;
  padding-right: 0px;
  /* padding-top: 72px; */
}

.bbodyy,
template {
  height: 100%;
}

.bbodyy {
  margin: 0;
  font-family: Noto Sans KR, Malgun Gothic, -apple-system, Segoe UI, Roboto,
    Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Noto Color Emoji;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #323232;
  text-align: left;
  background-color: #fff;
  /* border:1px solid rgb(75, 83, 242); */
}

template {
  font-family: sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

div {
  display: block;
  unicode-bidi: isolate;
}

* {
  word-break: break-word;
}

*,
:after,
:before {
  box-sizing: border-box;
}

/* template[Attributes Style] {
    -webkit-locale: "ko";
} */

:root {
  view-transition-name: root;
}

template {
  display: block;
}

/* <div id="app"> */

.attenbtn {
  border: 1px solid black;
  border-radius: 10px;
}

.bbodyy.hide-mobile-global-header #app {
  height: 100%;
}

.slick-slider {
  box-sizing: border-box;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -ms-touch-action: pan-y;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;
}

.slick-track[data-v-e4caeaf8] {
  position: relative;
  top: 0;
  left: 0;
  display: block;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}

.indicator-body.center[data-v-fc3fcce8] {
  margin: 0 auto;
}

.indicator-body[data-v-fc3fcce8] {
  border-radius: 50%;
  animation: spin-data-v-fc3fcce8 1s ease-in-out infinite;
}

p[data-v-fc3fcce8] {
  font-size: 0.875rem;
  line-height: 1.3125rem;
  font-weight: 400;
  letter-spacing: -0.0125rem;
}

.prisma-icon.secondary[data-v-eec0a5dc] {
  color: #6a7685;
}

.prisma-icon[data-v-eec0a5dc] path {
  fill: currentColor;
}

.legacy-typography.gray-400[data-v-746dd3c0] {
  color: #a9a9a9;
}

.interface-body2[data-v-746dd3c0] {
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.57143;
  letter-spacing: -0.01875rem;
}

.legacy-typography.gray-900[data-v-746dd3c0] {
  color: #2d2d2d;
}

.display-display3[data-v-746dd3c0] {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.58333;
  letter-spacing: -0.03125rem;
}

.headline-subhead5[data-v-746dd3c0] {
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.57143;
  letter-spacing: -0.01875rem;
}

.interface-description[data-v-746dd3c0] {
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.0125rem;
}

.interface-description[data-v-746dd3c0] {
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.0125rem;
}

.headline-subhead4[data-v-746dd3c0] {
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.57143;
  letter-spacing: -0.01875rem;
}

.legacy-typography.gray-500[data-v-746dd3c0] {
  color: #888;
}

.headline-subhead7[data-v-746dd3c0] {
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.01875rem;
}

.headline-subhead2[data-v-746dd3c0] {
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: -0.01875rem;
}

.sg-icon-v1[data-v-0d243f1a] {
  display: inline-flex;
}

.sg-icon-v1[data-v-0d243f1a] svg {
  width: 100%;
  height: 100%;
  color: var(--svg-color);
}

.sg-icon-v1.fill[data-v-0d243f1a] svg path {
  fill: currentColor;
}

.sg-icon-v1[data-v-0d243f1a] {
  display: inline-flex;
}

[data-v-55917fe8] .slick-track {
  margin: 0;
}

[data-v-55917fe8] .slick-track {
  margin-left: 0;
}

[data-v-55917fe8] .slick-slide {
  cursor: pointer;
}

.user-profile-picture[data-v-29d5164e] {
  position: relative;
}

.user-profile-picture div[data-name="image"][data-v-29d5164e] {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #e1e1e1;
  border: 0.0625rem solid #f2f2f2;
  border-radius: 50%;
  background-size: cover;
  background-position: 50% 50%;
}

#app[data-is-loaded="true"],
#app[data-is-loaded="true"] #app-body,
#app[data-is-loaded="true"] #app-header,
#app[data-is-loaded="true"] #app-sticky-nav {
  opacity: 1;
}

#app #app-body[data-v-f2c98b1c] {
  height: 100%;
  position: relative;
  flex-grow: 1;
}

#app #app-body[data-v-f2c98b1c],
#app #app-header[data-v-f2c98b1c] {
  opacity: 1;
  transition: opacity 0.3s ease-in;
}

.community-container[data-v-c05eb1ae] {
  max-width: 100%;
}
@media (min-width: 1200px) {
  .container,
  .container-lg,
  .container-md,
  .container-sm,
  .container-xl {
    max-width: 62.5rem;
  }
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
@media (min-width: 1200px) {
  .container {
    max-width: 62.5rem;
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

hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 0.0625rem solid rgba(0, 0, 0, 0.1);
}

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

a,
a:hover {
  text-decoration: none;
}

a {
  color: #323232;
  background-color: transparent;
}

.list-inline,
.list-unstyled {
  padding-left: 0;
  list-style: none;
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

svg {
  overflow: hidden;
}
img,
svg {
  vertical-align: middle;
}

img {
  border-style: none;
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

.btn.btn-outline-secondary,
.btn.btn-secondary {
  color: #737373;
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

.btn-secondary {
  color: #323232;
  background-color: #e1e1e1;
  border-color: #e1e1e1;
}

.btn {
  display: inline-block;
  font-weight: 400;
  color: #323232;
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

.dropdown-menu-right {
  right: 0;
  left: auto;
}

@media (min-width: 576px) {
  .dropdown-menu-sm-left {
    right: auto;
    left: 0;
  }

  .dropdown-menu-sm-right {
    right: 0;
    left: auto;
  }
}

@media (min-width: 768px) {
  .dropdown-menu-md-left {
    right: auto;
    left: 0;
  }

  .dropdown-menu-md-right {
    right: 0;
    left: auto;
  }

  .d-md-block {
    display: block !important;
  }

  .d-md-none {
    display: none !important;
  }
}

@media (min-width: 992px) {
  .dropdown-menu-lg-left {
    right: auto;
    left: 0;
  }

  .dropdown-menu-lg-right {
    right: 0;
    left: auto;
  }
}

@media (min-width: 1200px) {
  .dropdown-menu-xl-left {
    right: auto;
    left: 0;
  }

  .dropdown-menu-xl-right {
    right: 0;
    left: auto;
  }
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

label {
  display: inline-block;
  margin-bottom: 0.5rem;
}

.custom-file,
.custom-file-input {
  position: relative;
  width: 100%;
  height: calc(1.5em + 1.5rem);
}

.custom-file {
  display: inline-block;
  margin-bottom: 0;
}

.custom-file-input {
  z-index: 2;
  margin: 0;
  opacity: 0;
}

.custom-file-label {
  white-space: nowrap;
  overflow-x: hidden;
}

.custom-control-label:before,
.custom-file-label,
.custom-select {
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .custom-control-label:before,
  .custom-file-label,
  .custom-select {
    transition: none;
  }
}

.custom-file-label,
.custom-file-label:after {
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.6875rem 1rem;
  line-height: 1.5;
  color: #323232;
}

.custom-file-label {
  left: 0;
  z-index: 1;
  height: calc(1.5em + 1.5rem);
  font-weight: 400;
  background-color: #fff;
  border: 0.0625rem solid #e1e1e1;
  border-radius: 0.25rem;
}

.d-block {
  display: block !important;
}

select.form-control[multiple],
select.form-control[size],
textarea.form-control {
  height: auto;
}

.form-control {
  display: block;
  width: 100%;
  height: calc(1.5em + 1.5rem);
  padding: 0.6875rem 1rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #323232;
  background-color: #fff;
  background-clip: padding-box;
  border: 0.0625rem solid #e1e1e1;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .form-control {
    transition: none;
  }
}

textarea {
  -webkit-appearance: none;
}

textarea {
  overflow: auto;
  resize: vertical;
}

.btn-group,
.btn-group-vertical {
  position: relative;
  display: inline-flex;
  vertical-align: middle;
}

.dropdown-toggle {
  white-space: nowrap;
}

.text-center {
  text-align: center !important;
}

@media (min-width: 576px) {
  .text-sm-left {
    text-align: left !important;
  }

  .text-sm-right {
    text-align: right !important;
  }

  .text-sm-center {
    text-align: center !important;
  }
}

@media (min-width: 768px) {
  .text-md-left {
    text-align: left !important;
  }

  .text-md-right {
    text-align: right !important;
  }

  .text-md-center {
    text-align: center !important;
  }
}

@media (min-width: 992px) {
  .text-lg-left {
    text-align: left !important;
  }

  .text-lg-right {
    text-align: right !important;
  }

  .text-lg-center {
    text-align: center !important;
  }
}

@media (min-width: 1200px) {
  .text-xl-left {
    text-align: left !important;
  }

  .text-xl-right {
    text-align: right !important;
  }

  .text-xl-center {
    text-align: center !important;
  }
}

figure {
  margin: 0 0 1rem;
}

.h2,
h2 {
  font-size: 2rem;
  line-height: 3rem;
  letter-spacing: -0.0375rem;
}

.d-none {
  display: none !important;
}

.h3,
h3 {
  font-size: 1.75rem;
  line-height: 2.625rem;
  font-weight: 400;
  letter-spacing: -0.03125rem;
}

.slick-slider[data-v-3d1a4f76] {
  position: relative;
  display: block;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -ms-touch-action: pan-y;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;
}

.slick-prev {
  left: -25px;
}

.slick-next,
.slick-prev {
  font-size: 0;
  line-height: 0;
  position: absolute;
  top: 50%;
  display: block;
  width: 20px;
  height: 20px;
  padding: 0;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  cursor: pointer;
  border: none;
}

.slick-next,
.slick-next:focus,
.slick-next:hover,
.slick-prev,
.slick-prev:focus,
.slick-prev:hover {
  color: transparent;
  outline: none;
  background: transparent;
}

.slick-list[data-v-3d1a4f76] {
  position: relative;
  display: block;
  overflow: hidden;
  margin: 0;
  padding: 0;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}

.slick-initialized .slick-slide[data-v-e4caeaf8] {
  display: block;
}

.slick-slide[data-v-e4caeaf8] {
  display: none;
  float: left;
  height: 100%;
  min-height: 1px;
}

.slick-list,
.slick-slider {
  position: relative;
  display: block;
}

.slick-prev {
  left: -25px;
}

.slick-next,
.slick-next:focus,
.slick-next:hover,
.slick-prev,
.slick-prev:focus,
.slick-prev:hover {
  color: transparent;
  outline: none;
  background: transparent;
}

.slick-next,
.slick-prev {
  font-size: 0;
  line-height: 0;
  position: absolute;
  top: 50%;
  display: block;
  width: 20px;
  height: 20px;
  padding: 0;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  cursor: pointer;
  border: none;
}

.slick-slider .slick-list,
.slick-slider .slick-track {
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0);
}

.slick-list,
.slick-slider {
  position: relative;
  display: block;
}

.slick-track {
  position: relative;
  top: 0;
  left: 0;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.slick-initialized .slick-slide {
  display: block;
}

.slick-slide {
  display: none;
  float: left;
  height: 100%;
  min-height: 1px;
}

.community-container[data-v-c05eb1ae] {
  max-width: 100%;
}

.curation-list[data-v-61cb68ac] {
  margin: 0;
}

.curation-list .curation-list-item .curation-list-wrapper[data-v-61cb68ac] {
  display: flex;
  align-items: center;
  padding: 0.75rem 0.125rem;
  margin-bottom: 0.125rem;
  cursor: pointer;
  border-bottom: 0.0625rem solid #f4f4f4;
}

.curation-list
  .curation-list-item
  .curation-list-wrapper
  .curation-contents[data-v-61cb68ac] {
  width: 100%;
}

.curation-list
  .curation-list-item
  .curation-list-wrapper
  .curation-contents.has-thumbnail[data-v-61cb68ac] {
  width: calc(100% - 4.875rem);
}

.curation-list
  .curation-list-item
  .curation-list-wrapper
  .curation-contents
  .topic-name[data-v-61cb68ac] {
  margin: 0 0 0.3125rem;
  font-size: 0.75rem;
  color: #737373;
}

.curation-list
  .curation-list-item
  .curation-list-wrapper
  .curation-contents
  .curation-title[data-v-61cb68ac] {
  margin: 0 0 0.1875rem;
  overflow: hidden;
  font-size: 0.875rem;
  font-weight: 500;
  color: #323232;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.curation-list
  .curation-list-item
  .curation-list-wrapper
  .curation-contents
  .curation-content[data-v-61cb68ac] {
  margin: 0;
  overflow: hidden;
  font-size: 0.875rem;
  color: #737373;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.curation-list
  .curation-list-item
  .curation-list-wrapper
  .curation-contents
  .curation-reactions[data-v-61cb68ac] {
  display: flex;
  align-items: center;
  margin-top: 0.375rem;
}

.curation-list
  .curation-list-item
  .curation-list-wrapper
  .curation-contents
  .curation-reactions
  .view-count[data-v-61cb68ac] {
  margin-right: 0.875rem;
}

.curation-list
  .curation-list-item
  .curation-list-wrapper
  .curation-contents
  .curation-reactions
  .comment-count[data-v-61cb68ac],
.curation-list
  .curation-list-item
  .curation-list-wrapper
  .curation-contents
  .curation-reactions
  .view-count[data-v-61cb68ac] {
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  line-height: 1.5;
  color: #c5c5c5;
  letter-spacing: -0.0125rem;
}

.curation-list
  .curation-list-item
  .curation-list-wrapper
  .curation-topic-image[data-v-61cb68ac] {
  margin-left: 0.75rem;
}

.curation-list
  .curation-list-item
  .curation-list-wrapper
  .curation-topic-image
  .topic-thumbnail-image[data-v-61cb68ac] {
  width: 4rem;
  height: 4rem;
  border: 0.0625rem solid #f4f4f4;
  border-radius: 8px;
}

.post-header[data-v-27cb0b18] {
  display: flex;
  flex-direction: column;
  background-color: #fff;
}

@media (min-width: 768px) {
  .post-header[data-v-27cb0b18] {
    margin-top: 3.5rem;
  }
}

.post-header-title-wrapper.has-service .post-address-info[data-v-a9bcd63a],
.post-header-title-wrapper.has-service[data-v-a9bcd63a] {
  margin-top: 1rem;
}

.post-header-title-wrapper[data-v-a9bcd63a] {
  margin-bottom: 2rem;
}

.post-header-title-wrapper .post-address-info[data-v-a9bcd63a],
.post-header-title-wrapper .post-service-name[data-v-a9bcd63a] {
  font-size: 0.875rem;
  line-height: 1.57;
  letter-spacing: -0.01875rem;
  color: #888;
}

.post-header-title-wrapper .post-service-name[data-v-a9bcd63a] {
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.post-header-title-wrapper .post-header-title[data-v-a9bcd63a] {
  margin: 0;
}

.post-header-title[data-v-a9bcd63a] {
  margin: 0 0 2rem;
  font-weight: 700;
  color: #2d2d2d;
}

.post-header-title-wrapper .post-address-info[data-v-a9bcd63a] {
  margin-top: 0.5rem;
}

.post-react-state[data-v-0a24800e] {
  display: flex;
  align-items: center;
  width: 100%;
}

.post-react-state .post-react-item.like-btn[data-v-0a24800e] {
  cursor: pointer;
}

.post-react-state .post-react-item[data-v-0a24800e] {
  display: flex;
  gap: 0.25rem;
  align-items: center;
  padding: 1.0625rem 0;
  margin-right: 1.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #6a7685;
}

@media (min-width: 768px) {
  .popular-provider[data-v-231efbf4] {
    padding: 2.5rem 0 1.75rem;
    margin: 0;
  }
}

.popular-provider[data-v-231efbf4] {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 2.5rem 1rem 1.75rem;
  margin: 0 -1rem;
}

.popular-provider .popular-provider-heading .service-name[data-v-231efbf4] {
  display: -webkit-box;
  max-height: 1.5em;
  line-height: 1.5;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.popular-provider .popular-provider-heading h2[data-v-231efbf4] {
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  line-height: normal;
  white-space: pre-line;
}

.popular-provider .popular-provider-heading > a[data-v-231efbf4] {
  flex: 0 0 auto;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem;
  color: #888;
  letter-spacing: -0.01875rem;
}

.popular-provider[data-v-231efbf4] .slick-arrow.slick-prev.slick-disabled {
  pointer-events: none;
  cursor: default;
  opacity: 0;
}

.popular-provider[data-v-231efbf4] .slick-arrow.slick-prev {
  left: -1.3125rem;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxmaWx0ZXIgeD0iLTEyLjUlIiB5PSItMTAlIiB3aWR0aD0iMTI1JSIgaGVpZ2h0PSIxMjUlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJhIj48ZmVPZmZzZXQgZHk9IjEiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiLz48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxLjUiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPjxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4yIDAiIGluPSJzaGFkb3dCbHVyT3V0ZXIxIi8+PC9maWx0ZXI+PGNpcmNsZSBpZD0iYiIgY3g9IjI0IiBjeT0iMjQiIHI9IjIwIi8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHVzZSBmaWxsPSIjMDAwIiBmaWx0ZXI9InVybCgjYSkiIHhsaW5rOmhyZWY9IiNiIi8+PHVzZSBmaWxsPSIjRkZGIiB4bGluazpocmVmPSIjYiIvPjxwYXRoIGQ9Ik0xMiAxMmgyNHYyNEgxMnoiLz48cGF0aCBzdHJva2U9IiM4ODgiIHN0cm9rZS13aWR0aD0iMS43IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0yNiAzMWwtNy03IDctNyIvPjwvZz48L3N2Zz4=);
}

.popular-provider[data-v-231efbf4] .slick-arrow {
  top: 50%;
  z-index: 1;
  width: 3rem;
  height: 3rem;
}

.popular-provider[data-v-231efbf4] .slick-slide {
  width: 16.125rem;
  padding: 0.75rem;
}

.popular-provider-card[data-v-6652d5db] {
  width: 16rem;
  border: 0.0625rem solid #f2f2f2;
  border-radius: 12px;
  box-shadow: 0 0.125rem 0.75rem 0 rgba(0, 0, 0, 0.08);
}

.popular-provider-card > a[data-v-6652d5db] {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}

.popular-provider-card .profile-container[data-v-6652d5db] {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.popular-provider-card .profile-container .profile-image[data-v-6652d5db] {
  flex: 0 0 auto;
  width: 3rem;
  height: 3rem;
  border-radius: 40px;
  border: 0.0625rem solid #f2f2f2;
}

.popular-provider-card .profile-container .profile-info[data-v-6652d5db] {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}

.popular-provider-card
  .profile-container
  .profile-info
  .profile-title[data-v-6652d5db] {
  display: -webkit-box;
  max-height: 1.5em;
  line-height: 1.5;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0;
  color: #323232;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: normal;
}

.popular-provider-card
  .profile-container
  .profile-info
  .profile-subtitle[data-v-6652d5db] {
  display: flex;
  gap: 0.25rem;
  color: #737373;
  font-size: 0.75rem;
  font-weight: 400;
}

.popular-provider-card .review-container[data-v-6652d5db] {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-height: 5.9375rem;
  padding: 0.75rem;
  border-radius: 8px;
  background: #fffaea;
  color: #323232;
  font-size: 0.875rem;
  font-weight: 500;
}

.popular-provider-card .review-container .pro-rate[data-v-6652d5db] {
  display: flex;
  gap: 0.125rem;
  justify-content: flex-start;
  align-items: center;
}

.popular-provider-card .review-container .review-comment[data-v-6652d5db] {
  display: -webkit-box;
  max-height: 3em;
  line-height: 1.5;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0;
}

.popular-provider[data-v-231efbf4] .slick-arrow.slick-next {
  right: -1.3125rem;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxmaWx0ZXIgeD0iLTEyLjUlIiB5PSItMTAlIiB3aWR0aD0iMTI1JSIgaGVpZ2h0PSIxMjUlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJhIj48ZmVPZmZzZXQgZHk9IjEiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiLz48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxLjUiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPjxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4yIDAiIGluPSJzaGFkb3dCbHVyT3V0ZXIxIi8+PC9maWx0ZXI+PGNpcmNsZSBpZD0iYiIgY3g9IjI0IiBjeT0iMjQiIHI9IjIwIi8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHVzZSBmaWxsPSIjMDAwIiBmaWx0ZXI9InVybCgjYSkiIHhsaW5rOmhyZWY9IiNiIi8+PHVzZSBmaWxsPSIjRkZGIiB4bGluazpocmVmPSIjYiIvPjxwYXRoIGQ9Ik0xMiAxMmgyNHYyNEgxMnoiLz48cGF0aCBzdHJva2U9IiM4ODgiIHN0cm9rZS13aWR0aD0iMS43IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0yMiAzMWw3LTctNy03Ii8+PC9nPjwvc3ZnPg==);
}

.popular-provider .provider-list[data-v-231efbf4] {
  width: 100%;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  display: flex;
  gap: 0.75rem;
  width: auto;
  padding: 1rem;
  margin: 0 -1rem;
}

.popular-provider .provider-list > [data-v-231efbf4] {
  flex: 0 0 auto;
}

.popular-post[data-v-9fd2e7dc] {
  position: relative;
  padding: 2.5rem 0 7.5rem;
}

@media (min-width: 768px) {
  .popular-post[data-v-9fd2e7dc] {
    padding-bottom: 10rem;
  }
}

.popular-post .popular-post-heading[data-v-9fd2e7dc] {
  margin-bottom: 0.75rem;
}

.popular-post .popular-post-heading .popular-post-title[data-v-9fd2e7dc] {
  margin: 0;
}

.related-posts[data-v-5f5444dc] {
  padding: 2.5rem 0;
}

.related-posts h2[data-v-5f5444dc] {
  margin-bottom: 1.25rem;
}

.related-posts h2 .title-badge[data-v-5f5444dc] {
  padding: 0.0625rem 0.375rem 0.125rem;
  margin-right: 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: #fff;
  background: #5080fa;
  border-radius: 4px;
}

.related-posts ul[data-v-5f5444dc] {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0;
}

.related-posts ul .post-link[data-v-5f5444dc] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: #f4f4f4;
  border-radius: 14px;
}

.related-posts ul .post-link .post-title[data-v-5f5444dc] {
  display: -webkit-box;
  max-height: 1.5em;
  line-height: 1.5;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-right: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.recommend-request[data-v-1e949c79] {
  position: relative;
  padding: 2.5rem 0;
}

.recommend-request .recommend-request-heading[data-v-1e949c79] {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1.25rem;
}

.recommend-request
  .recommend-request-heading
  .recommend-request-title[data-v-1e949c79] {
  margin: 0;
  white-space: pre-line;
}

.recommend-request
  .recommend-request-popular-service
  .recommend-request-list[data-v-1e949c79] {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 0.5rem;
}

.recommend-request
  .recommend-request-popular-service
  .recommend-request-list
  .recommend-request-item
  a[data-v-1e949c79] {
  display: block;
  padding: 0.25rem 0.6875rem 0.375rem;
  border: 0.0625rem solid #f4f4f4;
  border-radius: 41px;
}

.recommend-request
  .recommend-request-popular-service
  .recommend-request-list
  .recommend-request-item
  a
  .recommend-request-chip-item[data-v-1e949c79] {
  font-size: 0.875rem;
}

.soomgo-life-container[data-v-0352d1b6] {
  max-width: 100%;
  height: 100%;
}

.post-detail-container[data-v-614fb5f0] {
  width: 37.5rem;
  margin: 0 auto;
}

.post-category-subject[data-v-0ec9cb3e] {
  margin: 2rem 0 1rem;
}

.post-category-subject .category-breadcrumb[data-v-0ec9cb3e] {
  display: flex;
  align-items: center;
  margin: 0;
}

.post-category-subject
  .category-breadcrumb
  .category-breadcrumb-item
  .breadcrumb-item[data-v-0ec9cb3e] {
  display: flex;
  height: 1.375rem;
  cursor: pointer;
}

.post-category-subject
  .category-breadcrumb
  .breadcrumb-divider[data-v-0ec9cb3e] {
  width: 0.875rem;
  height: 0.875rem;
  margin: 0 0.1875rem;
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDE0djE0SDB6Ii8+PHBhdGggc3Ryb2tlPSIjQzVDNUM1IiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNNC42NjcgMTEuNjY3TDkuMzMzIDcgNC42NjcgMi4zMzMiLz48L2c+PC9zdmc+)
    no-repeat;
}

.post-comments-container[data-v-7bec7085] {
  position: relative;
  width: 100%;
  margin-bottom: 6.5rem;
}

.comment-input-box[data-v-c9a6beec] {
  position: relative;
  display: flex;
  align-items: flex-start;
  padding: 1.0625rem 0.875rem;
  margin: 1.25rem 0;
  background-color: #fff;
  border: 0.0625rem solid #f2f2f2;
  border-radius: 8px;
}

.comment-input-box .attach-file-label[data-v-c9a6beec] {
  width: 1.25rem;
  height: 1.25rem;
  margin: 0.0625rem 0.875rem 0 0;
}

.comment-input-box .attach-file-label .attach-image-icon[data-v-c9a6beec] {
  width: 1.25rem;
  height: 1.25rem;
  vertical-align: unset;
  cursor: pointer;
}

.comment-input-box .attach-file-label .file-input[data-v-c9a6beec] {
  display: none;
}

.comment-input-box .comment-body[data-v-c9a6beec] {
  position: relative;
  width: 100%;
}

.comment-input-box .comment-body .comment-input[data-v-c9a6beec] {
  width: 100%;
  min-height: 1.375rem;
  padding: 0;
  font-size: 0.875rem;
  color: #2d2d2d;
  resize: none;
  border: 0;
}

.comment-input-box .write-comment-submit.one-line[data-v-c9a6beec] {
  margin-bottom: auto;
}

.comment-input-box .write-comment-submit[data-v-c9a6beec] {
  display: none;
  font-weight: 500;
  color: #00c7ae;
  white-space: nowrap;
}

.post-comments-list[data-v-5a25cf8d] {
  width: 100%;
  margin-bottom: 0;
}

.post-comments-list-item[data-v-54dc8622] {
  display: flex;
  flex-direction: column;
}

.post-comment-wrapper[data-v-4c1fcafc] {
  display: flex;
  padding: 1.5rem;
}

@media (max-width: 991.98px) {
  .post-comment-wrapper[data-v-4c1fcafc] {
    padding: 1.5rem 0;
  }
}

.post-comment-wrapper .profile-image.provider[data-v-4c1fcafc] {
  cursor: pointer;
}

.post-comment-wrapper .profile-image .image[data-v-4c1fcafc] {
  box-sizing: content-box;
  width: 1.875rem;
  height: 1.875rem;
  border: 0.0625rem solid #f2f2f2;
  border-radius: 8px;
}

.post-comment-wrapper .comment-information[data-v-4c1fcafc] {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-left: 0.75rem;
}

@media (max-width: 991.98px) {
  .post-comment-wrapper .comment-information[data-v-4c1fcafc] {
    max-width: calc(100% - 2.5rem);
  }
}

.post-comment-wrapper
  .comment-information
  .user-info.provider[data-v-4c1fcafc] {
  cursor: pointer;
}

.post-comment-wrapper .comment-information .user-info[data-v-4c1fcafc] {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}

.post-comment-wrapper
  .comment-information
  .user-info
  .user-info-wrapper.pro-user[data-v-4c1fcafc] {
  max-width: calc(100% - 6rem);
}

.post-comment-wrapper
  .comment-information
  .user-info
  .user-info-wrapper[data-v-4c1fcafc] {
  display: flex;
  flex-direction: column;
  margin-top: -0.1875rem;
}

.post-comment-wrapper
  .comment-information
  .user-info
  .user-info-wrapper
  .user[data-v-4c1fcafc] {
  display: flex;
  align-items: center;
}

.post-comment-wrapper
  .comment-information
  .user-info
  .user-info-wrapper
  .user
  .user-name[data-v-4c1fcafc] {
  display: inline-block;
  height: 1.375rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.post-comment-wrapper
  .comment-information
  .user-info
  .user-info-wrapper
  .pro-user-services[data-v-4c1fcafc] {
  display: flex;
  align-items: center;
}

.post-comment-wrapper
  .comment-information
  .user-info
  .user-info-wrapper
  .pro-user-services
  .service.main-service[data-v-4c1fcafc] {
  overflow: hidden;
  text-overflow: ellipsis;
}

.post-comment-wrapper
  .comment-information
  .user-info
  .user-info-wrapper
  .pro-user-services
  .service[data-v-4c1fcafc]:first-child {
  margin-left: 0;
}

.post-comment-wrapper
  .comment-information
  .user-info
  .user-info-wrapper
  .pro-user-services
  .service[data-v-4c1fcafc] {
  display: inline-block;
  margin-left: 0.25rem;
  white-space: nowrap;
}

.post-comment-wrapper
  .comment-information
  .user-info
  .send-request-button[data-v-4c1fcafc] {
  width: 3.75rem;
  padding: 0.3125rem 0.5rem;
  margin-left: 2.25rem;
  color: #00c7ae;
  background-color: #eafaf9;
  border: 0;
  border-radius: 6px;
}

.post-comment-contents[data-v-3de9631b] {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  color: #323232;
}

.post-comment-contents .text[data-v-3de9631b] {
  margin: 0;
  white-space: pre-line;
}

.post-comment-contents .text.comment-text[data-v-3de9631b] {
  line-height: 1.5rem;
}

.post-comment-actions[data-v-7e7eb5fe] {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.post-comment-actions .comment-more-action[data-v-7e7eb5fe] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.9375rem;
}

.post-comment-actions .comment-more-action .comment-create-at[data-v-7e7eb5fe] {
  font-size: 0.75rem;
  line-height: 1.125rem;
  color: #a9a9a9;
}

.post-comment-actions
  .comment-more-action
  .b-dropdown[data-v-7e7eb5fe]
  button.btn.dropdown-toggle {
  width: 1.5rem;
  height: 1.5rem;
  margin: 0 0 0 1.25rem;
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOS4zNzEgMy4zMzMpIiBmaWxsPSIjQzVDNUM1IiBzdHJva2U9IiNDNUM1QzUiIHN0cm9rZS13aWR0aD0iMS41IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9Ii44MzMiIGN5PSI2LjY2NyIgcj0iMSIvPjxjaXJjbGUgY3g9Ii44MzMiIGN5PSIuODMzIiByPSIxIi8+PGNpcmNsZSBjeD0iLjgzMyIgY3k9IjEyLjUiIHI9IjEiLz48L2c+PC9zdmc+)
    no-repeat;
  border: none;
}

.post-comment-actions
  .comment-more-action
  .b-dropdown[data-v-7e7eb5fe]
  .dropdown-menu {
  padding: 1.125rem 0;
  margin-top: 0.25rem;
  text-align: center;
  border: 0.0625rem solid #e1e1e1;
}

.post-comment-actions
  .comment-more-action
  .b-dropdown[data-v-7e7eb5fe]
  .dropdown-menu
  .dropdown-item {
  padding: 0.3125rem 0;
  font-size: 0.875rem;
}

.post-comment-actions .comment-action-container[data-v-7e7eb5fe] {
  position: relative;
  display: flex;
  gap: 0.75rem;
}

.post-comment-actions
  .comment-action-container
  .comment-action[data-v-7e7eb5fe] {
  display: flex;
  gap: 0.25rem;
  align-items: center;
  height: 1.75rem;
  padding: 0 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem;
  color: #6a7685;
  border: 0.0625rem solid #e0e5eb;
  border-radius: 4px;
}

.soomgo-life-post-detail[data-v-1c31fdd0] {
  display: flex;
  flex-direction: column;
}

.soomgo-life-post-detail .hr-divider[data-v-1c31fdd0] {
  height: 0;
  margin: 0;
  border: 0;
  border-bottom: 0.0625rem solid #f4f4f4;
}

.body-container[data-v-e21cd7d0] {
  display: flex;
  flex-direction: column;
}

.user-profile-bar-container .user-profile-wrapper[data-v-5bbf4b7a] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.user-profile-bar-container
  .user-profile-wrapper
  .user-profile-area[data-v-5bbf4b7a] {
  display: flex;
}

.user-profile-bar-container
  .user-profile-wrapper
  .user-profile-area
  .profile-image[data-v-5bbf4b7a] {
  width: 2.75rem;
  height: 2.75rem;
  margin-right: 0.75rem;
  border: 0.0625rem solid #f2f2f2;
  border-radius: 10px;
}

.user-profile-bar-container
  .user-profile-wrapper
  .user-profile-area
  .profile-post-info[data-v-5bbf4b7a] {
  display: flex;
  flex-direction: column;
}

.user-profile-bar-container
  .user-profile-wrapper
  .user-profile-area
  .profile-post-info
  .user-name[data-v-5bbf4b7a] {
  margin: 0 0 0.125rem;
  font-weight: 500;
  color: #2d2d2d;
}

.user-profile-bar-container
  .user-profile-wrapper
  .user-profile-area
  .profile-post-info
  .post-created-at[data-v-5bbf4b7a] {
  margin: 0.125rem 0 0;
  color: #888;
}

.user-profile-bar-container
  .user-profile-wrapper
  .post-actions[data-v-5bbf4b7a] {
  display: flex;
}

.user-profile-bar-container
  .user-profile-wrapper
  .post-actions
  .icon[data-v-5bbf4b7a] {
  margin-left: 1.25rem;
  cursor: pointer;
}

.user-profile-bar-container
  .user-profile-wrapper
  .post-actions
  .icon[data-v-5bbf4b7a]:first-child {
  margin-left: 1rem;
}

.b-dropdown[data-v-5bbf4b7a] button.btn.dropdown-toggle {
  height: 1.5rem;
  margin: 0 0 0 1.25rem;
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDIxYTIgMiAwIDEwMC00IDIgMiAwIDAwMCA0em0wLTdhMiAyIDAgMTAwLTQgMiAyIDAgMDAwIDR6bTAtN2EyIDIgMCAxMDAtNCAyIDIgMCAwMDAgNHoiIGZpbGw9IiMyRDJEMkQiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==)
    no-repeat;
  border: none;
}

.b-dropdown[data-v-5bbf4b7a] .dropdown-menu {
  padding: 1.125rem 0;
  margin-top: 0.25rem;
  text-align: center;
  border: 0.0625rem solid #e1e1e1;
}

.b-dropdown[data-v-5bbf4b7a] .dropdown-menu .dropdown-item {
  padding: 0.3125rem 0;
  font-size: 0.875rem;
}

.body-container .body-contents[data-v-e21cd7d0] {
  margin: 2rem 0;
}

.curation-list[data-v-61cb68ac] {
  margin: 0;
}

.curation-list .curation-list-item .curation-list-wrapper[data-v-61cb68ac] {
  display: flex;
  align-items: center;
  padding: 0.75rem 0.125rem;
  margin-bottom: 0.125rem;
  cursor: pointer;
  border-bottom: 0.0625rem solid #f4f4f4;
}

.curation-list
  .curation-list-item
  .curation-list-wrapper
  .curation-contents[data-v-61cb68ac] {
  width: 100%;
}

.curation-list
  .curation-list-item
  .curation-list-wrapper
  .curation-contents.has-thumbnail[data-v-61cb68ac] {
  width: calc(100% - 4.875rem);
}

.curation-list
  .curation-list-item
  .curation-list-wrapper
  .curation-contents
  .topic-name[data-v-61cb68ac] {
  margin: 0 0 0.3125rem;
  font-size: 0.75rem;
  color: #737373;
}

.curation-list
  .curation-list-item
  .curation-list-wrapper
  .curation-contents
  .curation-title[data-v-61cb68ac] {
  margin: 0 0 0.1875rem;
  overflow: hidden;
  font-size: 0.875rem;
  font-weight: 500;
  color: #323232;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.curation-list
  .curation-list-item
  .curation-list-wrapper
  .curation-contents
  .curation-content[data-v-61cb68ac] {
  margin: 0;
  overflow: hidden;
  font-size: 0.875rem;
  color: #737373;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.curation-list
  .curation-list-item
  .curation-list-wrapper
  .curation-contents
  .curation-reactions[data-v-61cb68ac] {
  display: flex;
  align-items: center;
  margin-top: 0.375rem;
}

.curation-list
  .curation-list-item
  .curation-list-wrapper
  .curation-contents
  .curation-reactions
  .view-count[data-v-61cb68ac] {
  margin-right: 0.875rem;
}

.curation-list
  .curation-list-item
  .curation-list-wrapper
  .curation-contents
  .curation-reactions
  .comment-count[data-v-61cb68ac],
.curation-list
  .curation-list-item
  .curation-list-wrapper
  .curation-contents
  .curation-reactions
  .view-count[data-v-61cb68ac] {
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  line-height: 1.5;
  color: #c5c5c5;
  letter-spacing: -0.0125rem;
}

.curation-list
  .curation-list-item
  .curation-list-wrapper
  .curation-topic-image[data-v-61cb68ac] {
  margin-left: 0.75rem;
}

.curation-list
  .curation-list-item
  .curation-list-wrapper
  .curation-topic-image
  .topic-thumbnail-image[data-v-61cb68ac] {
  width: 4rem;
  height: 4rem;
  border: 0.0625rem solid #f4f4f4;
  border-radius: 8px;
}
</style>