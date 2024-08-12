<template lang="">
    <div data-v-abea0528="" data-name="chat-message-input">
        <div data-v-c96edda4="" data-v-abea0528="" class="chat-message-input" my-role="CUSTOMER">
            <div data-v-c96edda4="" class="row message-input-form no-gutters align-items-center">
                <div data-v-c96edda4="" class="col">
                    <div data-v-c96edda4="" class="message-input-placeholder">
                        <p data-v-c96edda4="" style=""></p>
                    </div>
                    <textarea v-model="message" placeholder="메세지 췤~" data-v-c96edda4="" name="message-input" rows="1" wrap="soft" class="message-input form-control is-valid" maxlength="1000" state="true" style="resize: none; height: 37px; overflow: hidden;" id="__BVID__79">
                    </textarea>
                </div>
                <div @click="sendMessage" data-v-c96edda4="" class="col-auto">
                    <img data-v-c96edda4="" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDMwIDMwIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgc3Ryb2tlPSIjMDBDN0FFIiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTc1OCAtMTkzKSB0cmFuc2xhdGUoNTAgMTc5KSB0cmFuc2xhdGUoNzA4IDE0KSI+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD0iMTUiIGN5PSIxNSIgcj0iMTQuMjUiLz4KICAgICAgICAgICAgICAgICAgICA8ZyBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMCA2TDYgMCAxMiA2TTYgLjVMNiAxNS41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5IDcpIi8+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K" alt="" class="img-fluid btn-submit">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapStores } from 'pinia';
import {useChatMessageStore} from '@/store/useChatMessageStore';

export default {
    props: {
        roomIdx: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            message: ''
        };
    },
    computed:{
        ...mapStores(useChatMessageStore)
    },
    methods: {
        sendMessage() {
            if (this.message.trim() !== '') {
                this.chatMessageStore.sendChatMessage(this.message);
                this.message = '';
            }
        }
    }
}
</script>
<style scoped>
.chat-message-input[data-v-c96edda4] {
    position: fixed;
    bottom: 0;
    width: 100%;
    margin-bottom: 0;
    transition: margin-bottom .2s ease-out;
    will-change: margin-bottom;
    z-index: 1000; /* 추가: 입력창이 다른 요소들 위에 나타나도록 설정 */
}
@media (min-width: 768px) {
    .message-input-form[data-v-c96edda4] {
        padding: .5rem .75rem;
    }
}
.message-input-form[data-v-c96edda4] {
    position: relative;
    padding: .5125rem 1.75rem;
    background-color: #fff;
    border-top: .0625rem solid #f2f2f2;
}
.align-items-center {
    align-items: center !important;
}
.no-gutters {
    margin-right: 0;
    margin-left: 0;
}
.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -.9375rem;
    margin-left: -.9375rem;
}
.no-gutters>.col{
    padding-right: 0;
    padding-left: 0;
}

.col{
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
}
.col{
    position: relative;
    width: 100%;
    padding-right: .9375rem;
    padding-left: .9375rem;
}
.message-input-placeholder[data-v-c96edda4] {
    position: absolute;
    padding: .3125rem 1rem;
    font-size: 1rem;
    color: #b5b5b5;
    pointer-events: none;
    border: .09375rem solid transparent;
}
.text-rolling.slide-down[data-v-c96edda4] {
    animation-name: slide-down-data-v-c96edda4;
    animation-duration: .5s;
    animation-timing-function: ease-in-out;
}
.text-rolling[data-v-c96edda4] {
    margin-bottom: 0;
    opacity: 0;
}
.text-truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
p {
    margin-top: 0;
    margin-bottom: 1rem;
}
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    unicode-bidi: isolate;
}
p {
    margin-top: 0;
    margin-bottom: 1rem;
}
.message-input[data-v-c96edda4] {
    padding: .3125rem 1rem;
    font-size: 1rem;
    caret-color: #00c7ae;
    border: .09375rem solid #e1e1e1;
    border-radius: 18px;
    box-shadow: none;
}
.form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + 1.5rem);
    padding: .6875rem 1rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #323232;
    background-color: #fff;
    background-clip: padding-box;
    border: .0625rem solid #e1e1e1;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}
.btn-submit[data-v-c96edda4] {
    margin-left: .75rem;
    cursor: pointer;
    border-radius: 50%;
}

.img-fluid{
    max-width: 100%;
    height: auto;
}
img{
    vertical-align: middle;
}
img {
    border-style: none;
}
</style>