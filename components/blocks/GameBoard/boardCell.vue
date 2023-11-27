<template>
    <div class="game-cell"
         @click="openCell"
         @contextmenu.prevent="changeMark"
         :style="{background: `${innerContent.background}`, color: numberColorSetting[bombAroundCount]}"
    >
        <template v-if="innerContent.type === 'image'">
            <img
                :src="innerContent.content"
                :alt="innerContent.content"
            >
        </template>

        <template v-else>
            {{ innerContent.content }}
        </template>
    </div>
</template>

<script setup>
import {ref, computed, watch} from 'vue'
import getAroundCellsIndex from "~/mixins/getAroundCellsIndex.js";
import getBombAroundCount from "~/mixins/getBombAroundCount.js";

const emits = defineEmits(['open', 'boom', 'mark'])
const props = defineProps({
    cols: {
        type: Number,
        required: true,
    },
    rows: {
        type: Number,
        required: true,
    },
    cellIndex: {
        type: Number,
        required: true,
    },
    bombsArray: {
        type: Array,
        required: true,
    },
    openedCells: {
        type: Array,
        required: true,
    },
    firstMatrixCol: {
        type: Array,
        required: true,
    },
    lastMatrixCol: {
        type: Array,
        required: true,
    },
    gameMatrix: {
        type: Array,
        required: true,
    },
    gameStarted: {
        type: Boolean,
        required: true
    }
})
const numberColorSetting = {
    1: '#0b57a4',
    2: '#31a40b',
    3: '#c70d0d',
    4: '#05294f',
    5: '#8c4909',
    6: '#0ba492',
    7: '#000000',
    8: '#ffffff',
}

let markStatus = ref('')
const isBomb = computed(() => {
    return props.bombsArray.includes(props.cellIndex)
})
const cellsAround = computed(() => {
    if (props.bombsArray.length) {
        return getAroundCellsIndex(props.cellIndex, props.cols, props.rows, props.gameMatrix, props.firstMatrixCol, props.lastMatrixCol)
    } else {
        return []
    }
})
const bombAroundCount = computed(() => {
    if (props.bombsArray.length) {
        return getBombAroundCount(props.cellIndex, cellsAround.value, props.bombsArray).length
    } else {
        return 0
    }
})
const isOpened = computed(() => {
    if (props.bombsArray.length) {
        return props.openedCells.includes(props.cellIndex)
    } else {
        return false
    }
})

const innerContent = computed(() => {
    if (isOpened.value) {
        if (isBomb.value) {
            return {
                type: 'image',
                background: '#ad2121',
                content: './bomb.png'
            }
        } else {
            return {
                type: 'text',
                background: '#fffdfd',
                content: bombAroundCount.value ? bombAroundCount.value : ''
            }
        }
    } else if (markStatus.value) {
        return {
            type: 'image',
            background: '#d5d5d5',
            content: markStatus.value === 'flag' ? 'flag.png' : 'question-mark.png',
        }
    } else {
        return {
            type: 'text',
            background: '#d5d5d5',
            content: '',
        }
    }
})

watch(() => props.gameStarted, () => {
    markStatus.value = ''
})

function openCell() {
   if (!isOpened.value) {
       markStatus.value = ''

       if (isBomb.value) {
           emits('boom')
       } else {
           emits('open', props.cellIndex)
       }
   }
}

function changeMark() {
    if (!isOpened.value && props.gameStarted) {
        if (markStatus.value === 'flag') {
            markStatus.value = 'question'
        } else if (markStatus.value === 'question') {
            markStatus.value = ''
        } else {
            markStatus.value = 'flag'
        }

        emits('mark', {
            status: markStatus.value,
            index: props.cellIndex
        })
    }
}
</script>

<style scoped>
.game-cell {
    height: 2rem;
    width: 2rem;
    padding: 0.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #c2c0c0;
}
</style>