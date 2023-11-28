<template>
    <div class="game-board">
        <div class="container">
            <div class="game-board__header">
                <board-header
                    :timer-start="isStarted"
                    :timer-restart="isRestart"
                    :bombs-count="bombsInBoard"
                    v-model:gameTimer="gameTime"
                    @restart="restartGame"
                />
            </div>
        </div>

        <div class="game-board__table">
            <div
                v-for="(row, i) in gameMatrix"
                :key="i"
                class="game-board__row"
            >
                <div
                    v-for="(cell) in row"
                    :key="cell"
                    class="game-board__cell"
                >
                    <board-cell
                        :bombs-array="bombsArray"
                        :cell-index="cell"
                        :game-matrix="gameMatrix"
                        :cols="mode.cols"
                        :opened-cells="openedCells"
                        :rows="mode.rows"
                        :first-matrix-col="firstMatrixCol"
                        :last-matrix-col="lastMatrixCol"
                        :game-started="isStarted"
                        :flag-marked-cells="flagMarkedCells.value"
                        @open="(index) => openCell(index)"
                        @mark="(value) => markCell(value)"
                        @boom="lostGame"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref, reactive, computed} from 'vue'
import { useModal } from 'vue-final-modal'
import spawnMatrix from "~/mixins/spawnMatrix.js"
import getAroundCellsIndex from "~/mixins/getAroundCellsIndex.js"
import getBombAroundCount from "~/mixins/getBombAroundCount.js"
import spawnBombs from "~/mixins/spawnBombs.js";
import isEqualArray from "~/helpers/isEqualArray.js"
import boardCell from '@/components/blocks/GameBoard/boardCell.vue'
import boardHeader from '@/components/blocks/GameBoard/boardHeader.vue'
import EndGameModal from "~/components/modals/EndGameModal.vue";

const props = defineProps({
    mode: {
        type: Object,
        required: true,
    }
})

// Game status
let isStarted = ref(false)
let isWon = ref(false)
let isRestart = ref(false)
let gameTime = ref('')

// Game Settings
let bombsArray = reactive([])
let openedCells = reactive([])
let flagMarkedCells = ref([])
const {gameMatrix, firstMatrixCol, lastMatrixCol } = spawnMatrix(props.mode.cols, props.mode.rows)

const bombsInBoard = computed(() => {
    return props.mode.bombs - flagMarkedCells.value.length
})

const isAllCellsOpened = computed(() => {
    return props.mode.cols * props.mode.rows - props.mode.bombs === openedCells.length
})

const { open, close, patchOptions } = useModal({
    component: EndGameModal,
    attrs: {
        onClose() {
            close()
        },
        onRestart() {
            restartGame()
            close()
        }
    },
})

function openCell(index) {
    if (!isStarted.value) {
        startGame(index)
    }

    openAroundCell(index)
}
function openAroundCell(index) {
    if (!openedCells.includes(index)) {
        openedCells.push(index)
        deleteMarkedCell(index)
        wonGame()

        let aroundCells = getAroundCellsIndex(index, props.mode.cols, props.mode.rows, gameMatrix, firstMatrixCol, lastMatrixCol)
        let bombsAroundCount = getBombAroundCount(index, aroundCells, bombsArray).length

        if (!bombsAroundCount) {
            aroundCells.forEach((el) => {
                openAroundCell(el)
            })
        }
    }
}
function markCell({status, index}) {
    if (status === 'flag') {
        flagMarkedCells.value.push(index)
    } else {
        deleteMarkedCell(index)
    }

    wonGame()
}

function deleteMarkedCell(index) {
    flagMarkedCells.value = flagMarkedCells.value.filter((id) => id !== index)
}

function wonGame() {
    // Если нужно для победы чтобы все бомбы были помечены флажками
    // if (isEqualArray(flagMarkedCells.value, bombsArray) && isAllCellsOpened.value) {
    if (isAllCellsOpened.value) {
        isWon.value = true
        console.log(gameTime.value)
        patchOptions({
            attrs: {
                title: 'Вы выйграли!',
                desc: 'Введите свое имя в поле ниже',
                isWin: isWon.value,
                mode: props.mode,
                time: gameTime.value,
            }
        })
        open()
        endGame()
    }
}

function lostGame() {
    isWon.value = false
    patchOptions({
        attrs: {
            title: 'Вы проиграли :(',
            desc: 'Попробуйте еще раз',
            isWin: isWon.value,
        }
    })
    open()
    endGame()
}

function openAllCells() {
    openedCells.splice(0)
    gameMatrix.forEach((el) => {
        el.forEach((el) => {
            openedCells.push(el)
        })
    })
}
function startGame(exception) {
    spawnBombs(props.mode.rows, props.mode.cols, bombsArray, props.mode.bombs, exception)
    isRestart.value = false
    isStarted.value = true
}

function endGame() {
    isStarted.value = false
    gameTime.value = ''
    deleteMarkedCell()
    openAllCells()
}

function restartGame() {
    isStarted.value = false
    isRestart.value = true
    gameTime.value = ''
    flagMarkedCells.value.splice(0)
    bombsArray.splice(0)
    openedCells.splice(0)
}

</script>

<style>
.game-board__row {
    display: flex;
}
.game-board__table {
    display: flex;
    flex-direction: column;
    overflow-x: scroll;
    width: fit-content;
    max-width: 100%;
    margin: 0.75rem auto 4rem;
}
</style>