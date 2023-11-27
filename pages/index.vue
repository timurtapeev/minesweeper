<template>
    <div class="page">
        <header class="page__header">
            <PageHeader/>
        </header>
        <main class="page__content">
            <div class="page__game-menu">
                <GameMenu
                    :modes="modes"
                    :active-mode="activeMode"
                    @change="changeMode"
                />
            </div>
            <div class="page__game-board">
                <GameSetting
                    v-if="activeMode === 3 && !isCustomModeStarted"
                    v-model="customMode"
                    @update:model-value="startCustom"
                />
                <GameBoard
                    v-else
                    :mode="currentMode"
                    :key="activeMode"
                />
            </div>
        </main>
    </div>
</template>

<script setup>
import {ref, reactive, computed} from 'vue'
import PageHeader from '~/components/blocks/PageHeader.vue'
import GameMenu from "~/components/blocks/GameMenu/GameMenu.vue";
import GameBoard from "~/components/blocks/GameBoard/GameBoard.vue";
import GameSetting from "~/components/blocks/GameSetting/GameSetting.vue";

let activeMode = ref(0)
const modes = reactive([
    {
        rows: 8,
        cols: 8,
        text: '8 x 8',
        bombs: 10,
    },
    {
        rows: 16,
        cols: 16,
        text: '16 x 16',
        bombs: 40,
    },
    {
        rows: 16,
        cols: 32,
        text: '32 x 16',
        bombs: 100,
    },
    {
        rows: null,
        cols: null,
        text: 'Произвольная',
        bombs: null,
    },
])

let customMode = reactive({
    rows: 8,
    cols: 8,
    text: 'Произвольный',
    bombs: 10,
})
let isCustomModeStarted = ref(false)
const currentMode = computed(() => {
    return modes[activeMode.value].bombs ? modes[activeMode.value] : customMode
})
function startCustom() {
    isCustomModeStarted.value = true
}
function changeMode(index) {
    activeMode.value = index
    isCustomModeStarted.value = false
}
</script>

<style scoped>
.page {
    min-height: 100vh;
    @media (max-width: 576px) {
        min-height: 120vh;
    }
}
.page__content {
    margin-top: 2.5rem;
}
.page__game-board {
    margin-top: 2rem;
}
</style>