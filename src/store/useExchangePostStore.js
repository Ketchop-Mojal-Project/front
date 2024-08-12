import axios from "axios";
import { defineStore } from "pinia";

export const useExchangePostStore = defineStore("exchangePost", {
    state: () => (
        {
            isShow: false,
            selectedIdx: null,
            exchangeListAll: [],

            currentPage: 0,   // 현재 페이지 번호
            pageSize: 10,     // 페이지당 아이템 수
            hasMore: true,    // 더 불러올 수 있는지 여부

            exchangePost: [],
            postIdx: 0,
        }
    ),
    actions: {

        // 상세글 조회
        async getExchangeRead(postIdx) {
            try { 
                // console.log("in");
                
                // this.postIdx = postIdx;

                let url = `/proxy/exchange/read?idx=${this.postIdx}`;
                // let url = `http://localhost:8080/exchange/read?idx=${this.postIdx}`;
                const response = await axios.get(url);

                console.log(response);
                
                this.exchangePost = response.data.result;
                // console.log(response.data.result);

            } catch (error) {
                console.log(error);
            }
        },


        // 교환글전체리스트
        async getExchangeListAll(page, size) {
            if(this.hasMore){
                try {
                    let url = `/proxy/exchange/list?page=${page}&size=${size}`;
                    let response = await axios.get(url);

                    // 불러온 데이터가 size보다 적다면 더 이상 불러올 데이터가 없다고 판단
                    if (response.data.result.length < size) {
                        this.hasMore = false;
                    }

                    // this.exchangeListAll = response.data.result; 
                    this.exchangeListAll = [...this.exchangeListAll, ...response.data.result];
                    console.log(this.exchangeListAll);

                    this.currentPage++;
                } catch (error) {
                    console.log(error);
                }
            }
        },


        // 선택한 나눔글,교환글 카테고리만 픽미픽미해서 가져오기
        async getExchangePostByCategory(selectedCategoryIdx) {
            let url = `/proxy/search/category?idx=${selectedCategoryIdx}`;
            this.selectedCategoryIdx = selectedCategoryIdx;
            let response = await axios.get(url); //응답 받아서 저장
            this.exchangeListAll = response.data.result.exchangePosts;
            this.category = response.data.result
            // console.log("스토어 해당카테고리 픽미픽미", this.category)
            // console.log("스토어 해당카테고리", this.exchangeListAll)
        },

    },
});