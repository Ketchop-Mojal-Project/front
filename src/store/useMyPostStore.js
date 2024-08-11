import axios from "axios";
import { defineStore } from "pinia";

export const useMyPostStore = defineStore("myPost", {
    state: () => (
        {
            isShowShare: true,
            isShowExchange: true,
            isShowJoinShare: false,
            isShowJoinExchange: false,
            selectedIdx: null,
            myShareListAll: [],
            myExchangeListAll: [],
            myJoinShareListAll: [],
            myJoinExchangeListAll: [],
        }
    ),
    actions: {
        // 내가 작성한 나눔글 전체리스트
        async getMyShareListAll() {
            try {
                let url = `/proxy/share/my/list`;
                let response = await axios.get(url, { withCredentials: true }, 5);
                this.myShareListAll = response.data.result;
                console.log("내가작성한나눔글리스트:", this.myShareListAll);
                console.log("응답왔다");
            } catch (error) {
                console.log(error);
            }
        },
        // 내가 작성한 교환글 전체리스트
        async getMyExchangeListAll() {
            try {
                let url = `/proxy/exchange/my/list`;
                let response = await axios.get(url, { withCredentials: true });
                this.myExchangeListAll = response.data.result;
                console.log("내가작성한교환글전체리스트:", this.myExchangeListAll);
                console.log("응답왔다");
            } catch (error) {
                console.log(error);
            }
        },

        // 내가 참여한 나눔글 전체리스트
        async getMyJoinShareListAll() {
            try {
                let url = `/proxy/share/joined/list`;
                let response = await axios.get(url, { withCredentials: true });
                this.myJoinShareListAll = response.data.result;
                console.log("내가참여한나눔글전체리스트:", this.myJoinShareListAll);
                console.log("응답왔다");
            } catch (error) {
                console.log(error);
            }
        },

        // 내가 참여한 교환글 전체리스트
        async getMyJoinExchangeListAll() {
            try {
                let url = `/proxy/exchange/joined/list`;
                let response = await axios.get(url, { withCredentials: true });
                this.myJoinExchangeListAll = response.data.result;
                console.log("exchange:", this.myJoinExchangeListAll);
            } catch (error) {
                console.log(error);
            }
        },
        selectCategory(idx) {
            this.selectedCategoryIdx = idx;
            // 상태 초기화
            this.isShowShare = false;
            this.isShowExchange = false;
            this.isShowJoinShare = false;
            this.isShowJoinExchange = false;

            // 클릭했을 때 showShare showExchange가 변동
            if (idx === 0) {
                this.isShowShare = true;
                this.isShowExchange = true;
            } else if (idx === 1) {
                this.isShowShare = true;
            } else if (idx === 2) {
                this.isShowExchange = true;
            } else if (idx === 3) {
                this.isShowJoinShare = true;
                this.isShowJoinExchange = true;
            } else if (idx === 4) {
                this.isShowJoinShare = true;
            } else if (idx === 5) {
                this.isShowJoinExchange = true;
            }
        },
    },
});