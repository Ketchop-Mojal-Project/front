<template lang="">
    <div data-v-157a9d34="" data-v-abea0528="" class="chat-header">
        <div data-v-157a9d34="" class="info-area">
            <router-link to="/chat">
                <img data-v-157a9d34="" data-v-cbc4fb12="" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iIzMyMzIzMiIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPHBhdGggZD0iTTEyLjczMyAzLjQ0djE0LjA4bDYuNjM3LTYuNTgxIDEuMTI3IDEuMTM2LTguNTY0IDguNDkyLTguNTYzLTguNDkyIDEuMTI3LTEuMTM2IDYuNjM2IDYuNTgxVjMuNDRoMS42eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2LjAwMDAwMCwgLTExMC4wMDAwMDApIHRyYW5zbGF0ZSgxNi4wMDAwMDAsIDExMC4wMDAwMDApIHRyYW5zbGF0ZSgxMS45MzMzMzMsIDEyLjAwMzMxNCkgcm90YXRlKC0yNzAuMDAwMDAwKSB0cmFuc2xhdGUoLTExLjkzMzMzMywgLTEyLjAwMzMxNCkiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=" alt="뒤로 가기">
            </router-link>
            <div data-v-157a9d34="" class="info-section">
                <div data-v-157a9d34="" class="base">
                    <div data-v-157a9d34="" class="partner-name">[{{ roomTitle }}]게시글 보러가기👉</div>
                    <router-link :to="{ name: 'expostdetail', params: { id: this.postIdx } }">
                        <button data-v-cbc4fb12="" data-v-157a9d34="" type="button" class="btn icon-button list-arrow btn-secondary btn-md sg-button">
                            <img data-v-157a9d34="" data-v-cbc4fb12="" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj4KICAgICAgICA8ZyBzdHJva2U9IiNlMWUxZTEiIHN0cm9rZS13aWR0aD0iMS41Ij4KICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTUgMTBMMCA1IDUgMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM0MS4wMDAwMDAsIC0zMTEuMDAwMDAwKSB0cmFuc2xhdGUoMTYuMDAwMDAwLCAyNzIuMDAwMDAwKSB0cmFuc2xhdGUoMzI1LjAwMDAwMCwgMzkuMDAwMDAwKSB0cmFuc2xhdGUoNy4wMDAwMDAsIDQuMDAwMDAwKSB0cmFuc2xhdGUoMi41MDAwMDAsIDUuMDAwMDAwKSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC0yLjUwMDAwMCwgLTUuMDAwMDAwKSIvPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="프로필 보기">
                        </button>
                </router-link>
                </div>
            </div>
            <div data-v-157a9d34="" class="quick-btn-container right-align">
                <button data-v-cbc4fb12="" data-v-157a9d34="" type="button" class="btn btn-secondary btn-md sg-button">
                    <img data-v-157a9d34="" data-v-cbc4fb12="" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+CiAgICAgICAgPGcgc3Ryb2tlPSIjMzIzMjMyIiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE5LjYxMiA1LjY4OGMtLjg4OC0uODg5LTIuMDkzLTEuMzg4LTMuMzUtMS4zODgtMS4yNTYgMC0yLjQ2MS41LTMuMzUgMS4zODhMMTIgNi42MDFsLS45MTMtLjkxM2MtMS44NS0xLjg1LTQuODUtMS44NS02LjcgMC0xLjg1IDEuODUtMS44NSA0Ljg1IDAgNi43bC45MTMuOTEyTDEyIDIwbDYuNy02LjcuOTEyLS45MTNDMjAuNTAxIDExLjUgMjEgMTAuMjk0IDIxIDkuMDM3YzAtMS4yNTYtLjUtMi40Ni0xLjM4OC0zLjM0OXoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNDMgLTQ0MCkgdHJhbnNsYXRlKDUwIDQyMykgdHJhbnNsYXRlKDU4IDE2KSB0cmFuc2xhdGUoMTM1IDEpIi8+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=" alt="즐겨찾기">
                </button>
                <div data-v-157a9d34="" class="dropdown b-dropdown show btn-group" id="__BVID__349" @click="menuClick">
                    <button aria-haspopup="true" aria-expanded="true" type="button" class="btn dropdown-toggle btn-secondary" id="__BVID__349__BV_toggle_">
                        <img data-v-157a9d34="" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iIzMyMzIzMiIgc3Ryb2tlPSIjMzIzMjMyIiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yODcgLTQ0MCkgdHJhbnNsYXRlKDUwIDQyMykgdHJhbnNsYXRlKDU4IDE2KSB0cmFuc2xhdGUoMTc5IDEpIHRyYW5zbGF0ZSgxMSA0KSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxIiBjeT0iOCIgcj0iMSIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9IjEiIGN5PSIxNSIgcj0iMSIvPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K" alt="더 보기">
                    </button>
                    <ul role="menu" tabindex="-1" class="dropdown-menu dropdown-menu-right show" :class="{'menu-off':!isMenuOn}" aria-labelledby="__BVID__349__BV_toggle_" x-placement="bottom-end">
                        <li data-v-157a9d34="" role="presentation">
                            <a role="menuitem" href="#" target="_self" class="dropdown-item">채팅 메시지 검색</a>
                        </li>
                        <li data-v-157a9d34="" role="presentation">
                            <a role="menuitem" href="#" target="_self" class="dropdown-item"> 내가 보낸 요청서 보기 </a>
                        </li>
                        <li data-v-157a9d34="" role="presentation">
                            <a role="menuitem" href="#" target="_self" class="dropdown-item">신고하기</a>
                        </li>
                        <li data-v-157a9d34="" role="presentation">
                            <a role="menuitem" href="#" target="_self" class="dropdown-item">채팅방 나가기</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div data-v-157a9d34="" class="button-area">
            <ButtonComponent @click="matchingCheckEx()" :buttonName="buttonName"/>
        </div>
    </div>
</template>
<script>
import ButtonComponent from "@/components/ButtonComponent.vue";
import { useMatchingCheckStore } from "@/store/useMatchingCheckStore";
import { useChatRoomStore } from "@/store/useChatRoomStore";

export default {
  components: {
    ButtonComponent,
  },
  props: {
    roomTitle: {
      type: String,
      required: true,
    },
    postIdx: {
      type: Number,
      required: true,
    },
  },
  methods: {
    menuClick() {
      this.isMenuOn = !this.isMenuOn;
    },

    async matchingCheckEx() {
      const matchingCheckStore = useMatchingCheckStore();
      await matchingCheckStore.ExchangeCheck();

      if (matchingCheckStore.data.isSuccess == false) {
        if (matchingCheckStore.data.message) {
          // 서버에서 전송한 에러 메시지를 사용
          alert(`${matchingCheckStore.data.message}`);
        } else {
          // 서버의 응답이 없는 경우 또는 다른 에러
          alert("예기치 않은 오류가 발생했습니다. 다시 시도해 주세요.");
        }
      } else {
        // 성공적으로 요청이 완료된 경우
        const chatRoomStore = useChatRoomStore();
        const room = chatRoomStore.chatRooms.find(
          (room) => room.roomIdx === parseInt(matchingCheckStore.currentRoomIdx)
        ); //채팅방 배열에서 맞는 방 찾기

        alert(
          `${room.postWriterNickname}님과 ${room.participantNickname}의 ${room.giveBtmCategory} <-> ${room.takeBtmCategory} 교환이 확정되었습니다!`
        );
      }
    },
  },
  data() {
    return {
      isMenuOn: false,
      buttonName: "교환 확정하기",
    };
  },
};
</script>
<style scoped>
.menu-off {
  display: none;
}
@media (min-width: 576px) {
  .chat-header[data-v-157a9d34] {
    height: 3.625rem;
    padding: 0 1.5rem;
  }
}
.chat-header[data-v-157a9d34] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  height: auto;
  padding: 0.5rem 1.75rem 0.5rem;
  background-color: #fff;
  border-bottom: 0.0625rem solid #f2f2f2;
}
@media (min-width: 576px) {
  .chat-header .info-area[data-v-157a9d34] {
    flex: 1 0 auto;
    width: auto;
    height: auto;
  }
}
.chat-header .info-area[data-v-157a9d34] {
  display: flex;
  align-items: center;
  /* width: 100%; */
  /* height: 3.625rem; */
}
@media (min-width: 768px) {
  .chat-header .info-section[data-v-157a9d34] {
    display: flex;
    flex: 1;
  }
}
.chat-header .info-section .base[data-v-157a9d34] {
  display: flex;
}
.chat-header .info-area .partner-name[data-v-157a9d34] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 30.25rem;
  margin-left: 0.625rem;
  font-size: 1.125rem;
  line-height: 1.3125rem;
}
.chat-header .info-area .quick-btn-container[data-v-157a9d34] {
  display: flex;
  margin-left: auto;
}
.btn-group {
  position: relative;
  display: inline-flex;
  vertical-align: middle;
}
.dropdown-menu {
  /* position: absolute;
    top: 30px;
    right: 0; */
  position: absolute;
  will-change: transform;
  top: 0px;
  left: 0px;
  transform: translate3d(-136px, 36px, 0px);
  z-index: 1000;
  float: left;
  min-width: 10rem;
  padding: 0.875rem 0;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #323232;
  text-align: left;
  list-style: none;
  background-color: #fff;
  border: 0.0625rem solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  text-align: center;
}
.chat-header
  .info-area
  .quick-btn-container
  .b-dropdown[data-v-157a9d34]
  .dropdown-menu
  a.dropdown-item {
  padding: 0.25rem 0;
  margin: 0.25rem 0;
  font-size: 0.875rem;
  color: #737373;
  text-align: center;
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
</style>