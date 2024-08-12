import axios from "axios";
import { defineStore } from "pinia";

export const useShareStore = defineStore('share', {
    state: () => ({
        request: {
            title: "",
            contents: "",
            deadline: null,
            capacity: null,
            categoryIdx: null,
            btmCategory: "",
            images: []
        },

    }),
    actions: {
        changePostType(type) {
            // this.postType = type;
            console.log(type);
        },
        async createSharePost() {
            const url = '/proxy/share/create';

            const req = {
                title: this.request.title,
                contents: this.request.contents,
                deadline: this.request.deadline,
                capacity: this.request.capacity,
                categoryIdx: this.request.categoryIdx,
                btmCategory: this.request.btmCategory,
                images: this.request.images
            };

            try {
                console.log(req);
                const response = await axios.post(url, req, { withCredential: true });
                console.log('Post created successfully:', response.data);
                if (response.data.code === 2101) {
                    alert(response.data.message);
                } else if (response.data.code === 2102) {
                    alert(response.data.message);
                } else {
                    alert("글 작성 완료");
                }
            } catch (error) {
                console.error('Error creating post:', error);
            }
        },
    }
})