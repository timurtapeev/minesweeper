<script setup>
import {ref} from 'vue'
import { VueFinalModal } from 'vue-final-modal'
import {leadersRatingStore} from "~/store/leadersRating.js";
import myButton from '@/components/UI/myButton.vue'
import myInput from "@/components/UI/myInput.vue"

const props = defineProps({
    title: {
        type: String,
    },
    desc: {
        type: String,
    },
    isWin: {
        type: Boolean,
    },
    mode: {
        type: Object,
    },
    time: {
        type: String,
    }
})
const emit = defineEmits(['close', 'restart'])
let userName = ref('')
let leadersRating = leadersRatingStore()

function closeModal(type) {
    if (props.isWin) {
        leadersRating.setLeader({
            name: userName.value,
            time: props.time,
            mode: props.mode.text
        })
    }

    emit(type)
}
</script>

<template>
    <VueFinalModal
        class="end-game-modal"
        content-class="end-game-modal__content"
        overlay-transition="vfm-fade"
        content-transition="vfm-fade"
    >
        <h2 class="end-game-modal__title">{{ title }}</h2>
        <p class="end-game-modal__description">{{ desc }}</p>

        <div v-if="isWin" class="end-game-modal__input">
            <my-input
                v-model="userName"
                :name="'userName'"
                :rules="['max:10']"
                :placeholder="'Имя игрока'"
            />
        </div>

        <div class="end-game-modal__button-wrapper">
            <my-button
                type="button"
                @click="closeModal('close')"
            >
                Закрыть
            </my-button>
            <my-button
                type="button"
                @click="closeModal('restart')"
            >
                Заново
            </my-button>
        </div>
    </VueFinalModal>
</template>

<style>
.end-game-modal {
    display: flex;
    justify-content: center;
    align-items: center;
}
.end-game-modal__content {
    display: flex;
    flex-direction: column;
    padding: 1rem 1.5rem;
    background: #fff;
    border-radius: 0.125rem;
    min-width: 520px;

    @media (max-width: 576px) {
        min-width: 0;
        width: 100%;
    }
}
.end-game-modal__title {
    margin-bottom: 0.615rem;
    text-align: center;
}
.end-game-modal__description {
    margin-bottom: 0.75rem;
    text-align: center;

}
.end-game-modal__button-wrapper {
    display: flex;
    gap: 1rem;
}
.end-game-modal__input {
    margin-bottom: 1.5rem;
}
</style>