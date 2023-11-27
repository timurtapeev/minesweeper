<template>
    <div class="game-setting">
        <div class="container">
            <div class="game-settings__form">
                <my-range
                    v-model="bombsRangeSettings.value"
                    :max="bombsRangeSettings.max"
                    :label="bombsRangeSettings.label"
                    :min="bombsRangeSettings.min"
                />
                <my-range
                    v-model="rows"
                    :max="40"
                    :min="4"
                    :label="'Количество строк'"
                />
                <my-range
                    v-model="cols"
                    :max="40"
                    :min="4"
                    :label="'Количество колонок'"
                />
                <div class="game-settings__button">
                    <my-button
                        type="button"
                        @click="generateCustomMatrix"
                    >
                        Начать игру
                    </my-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref, computed} from 'vue'
import MyRange from "~/components/UI/myRange.vue";
import myButton from '@/components/UI/myButton.vue'

const emit  = defineEmits(['update:modelValue'])
const props = defineProps({
    modelValue: {
        type: Object,
    },
})
let rows = ref(props.modelValue.rows)
let cols = ref(props.modelValue.cols)

const bombsRangeSettings = computed(() => {
    return {
        max: rows.value * cols.value / 4,
        value: rows.value * cols.value / 8,
        label: 'Количество бомб',
        min: 1
    }
})

const customObject = computed(() => {
    return {
        bombs: Math.floor(bombsRangeSettings.value.value),
        rows: Math.floor(rows.value),
        text: props.modelValue.text,
        cols: Math.floor(cols.value),
    }
})

function generateCustomMatrix() {
    emit('update:modelValue', customObject.value)
}
</script>

<style>
.game-settings__form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 540px;
    margin: 0 auto;
}
.game-settings__button {
    margin-top: 1rem;
    width: fit-content;
}
</style>