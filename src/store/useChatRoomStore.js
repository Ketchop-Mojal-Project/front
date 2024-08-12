import { defineStore } from "pinia";
import axios from "axios";
import SockJS from 'sockjs-client';
// import Stomp from 'stompjs';
import { Stomp } from '@stomp/stompjs';
import { useMemberStore } from '@/store/useMemberStore';


export const useChatRoomStore = defineStore('chatRoom', {
    state: () => ({
        stompClient: null, //WebSocket 클라이언트 인스턴스
        userIdx: null, //사용자idx
        //subscription : null, //채팅방 메시지를 관리하기 위한 WebSocket 구독 객체

        reconnectAttempts: 0, // 재시도 횟수
        maxReconnectAttempts: 5, // 최대 재시도 횟수
        reconnectDelay: 5000, // 재시도 대기 시간 (밀리초 단위)

        chatRooms: [],
        postIdx: 0,
        roomIdx: 0,
        data: [],

    }),
    // persist:{
    //     storage: sessionStorage,
    // },
    actions: {

        async CreateChatRoom(postIdx) {
            console.log("create room");

            this.postIdx = postIdx;

            const memberStore = useMemberStore();
            this.userIdx = memberStore.member.userIdx;

            let roomCreateReq = {
                postIdx: postIdx,
                participants: this.userIdx // 현재 로그인한 사용자의 idx
            };

            if (postIdx) { //이미 있으면 있는 채팅방 idx가 서버에서 넘어옴
                try {
                    const response = await axios.post(`/proxy/api/chat/rooms/${postIdx}/messages`, roomCreateReq, {
                        headers: {
                            "Content-Type": "application/json",
                        }
                    });

                    const responseData = response.data;

                    if (typeof responseData === 'number') {
                        // 서버로부터 받은 값이 Long일 경우
                        // console.log('서버로부터 받은 Long roomIdx 값:', responseData);
                        this.roomIdx = responseData;
                    } else {
                        this.data = responseData;
                    }

                } catch (error) {
                    console.error('채팅방 생성 중 오류 발생:', error);
                }
            }
            this.getChatRooms();
        },

        connect() { //SockJS와 STOMP를 사용하여 WebSocket 연결을 설정
            console.log("connect start");

            let socket = new SockJS("/proxy/ws", { withCredentials: true }); //새로운 SockJS 객체 생성, 서버의 WebSocket 엔드포인트에 연결
            this.stompClient = Stomp.over(socket); //SockJS 객체를 사용하여 STOMP 클라이언트를 생성

            this.stompClient.connect({}, this.getChatRooms, this.onError);
        },

        async getChatRooms() {
            console.log("getChatRooms start");

            this.reconnectAttempts = 0; // 재시도 횟수 초기화

            const memberStore = useMemberStore();
            this.userIdx = memberStore.member.userIdx;

            await axios.get(`/proxy/api/chat/rooms`, {
                params: {
                    userIdx: this.userIdx
                }
            })
                .then((response) => response.data)
                .then((data) => {
                    // console.log(data); // 서버에서 보낸 JSON 데이터를 바로 사용
                    this.chatRooms = data;
                    // console.log(this.chatRooms);

                })
                .catch((error) => {
                    console.error('There was a problem with the axios operation:', error);
                });

        },

        onError() { //WebSocket 연결이 실패하면 오류 메시지를 로그에 출력
            console.error(
                "Could not connect to WebSocket server. Please refresh this page to try again!"
            );

            if (this.reconnectAttempts < this.maxReconnectAttempts) {
                this.reconnectAttempts++;
                console.log(`WebSocket 연결 재시도 (${this.reconnectAttempts}/${this.maxReconnectAttempts})...`);
                setTimeout(this.connect, this.reconnectDelay);
            } else {
                console.error("WebSocket 최대 재시도 횟수 초과.");
            }

        },

        disconnect() { //스톰프 초기화
            if (this.stompClient !== null) {
                this.stompClient.disconnect(() => {
                    console.log("WebSocket 연결이 종료되었습니다.");
                });
                this.stompClient = null;
            }
        },

        initWebSocketHandling() { //웹페이지가 닫히기 전에 disconnect 메소드를 호출
            window.addEventListener("beforeunload", this.disconnect);
        }
    }
})