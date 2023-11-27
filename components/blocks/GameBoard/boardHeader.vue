<template>
    <div class="game-header">
        <div class="game-header__reset-button">
            <my-button
                type="button"
                :mode-list="['small']"
                @click="emits('restart')"
            >
                <img
                    :style="{height: '14px', width: '14px'}"
                    src="/reset.png"
                    alt="reset"
                />
            </my-button>
        </div>

        <div class="game-header__timer">
            <my-timer
                :timer-start="timerStart"
                :timer-restart="timerRestart"
                @update:timer="(value) => emits('update:gameTimer', value)"
            />
        </div>

        <div class="game-header__count">
            <div class="game-header__count-image">
                <img src="/bomb.png" alt="bomb">
            </div>

            {{ bombsCount }}
        </div>
    </div>
</template>

<script setup>
import myTimer from '~/components/UI/myTimer.vue'
import myButton from '~/components/UI/myButton.vue'

const emits = defineEmits(['restart', 'update:gameTimer'])
defineProps({
    timerStart: {
        type: Boolean,
    },
    timerRestart: {
        type: Boolean,
    },
    bombsCount: {
        type: Number
    },
    gameTimer: {
        type: String
    }
})
</script>

<style>
.game-header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}
.game-header__count {
    padding: 0.25rem;
    min-width: 70px;
    gap: 0.25rem;
    display: flex;
    align-items: center;
    width: fit-content;
}
.game-header__count-image {
    height: 2rem;
    width: 2rem;

    img {
        width: 100%;
        height: 100%;
    }
}
</style>