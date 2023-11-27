<template>
    <h4>{{ time }}</h4>
</template>

<script setup>
import {ref, watch, computed} from 'vue'
import numberStartZero from "~/helpers/numberStartZero.js";

const emit = defineEmits(['save-time', 'update:timer'])
const props = defineProps({
    timerStart: {
        type: Boolean,
    },
    timerRestart: {
        type: Boolean,
    }
})
let seconds = ref(0)
let minutes = ref(0)
let hours = ref(0)
let interval

const time = computed(() => {
    return`${numberStartZero(hours.value)}:${numberStartZero(minutes.value)}:${numberStartZero(seconds.value)}`
})

watch(() => props.timerStart, (newValue, oldValue) => {
    if (newValue) {
        startTimer()
    } else {
        stopTimer()
    }
})
watch(() => props.timerRestart, (newValue, oldValue) => {
    if (newValue) {
        resetTimer()
    }
})

function updateTime() {
    seconds.value++;
    if (seconds.value === 60) {
        minutes.value++;
        seconds.value = 0;
    }
    if (minutes.value === 60) {
        hours.value++;
        minutes.value = 0;
    }

    emit('update:timer', time.value)
}

function startTimer() {
    interval = setInterval(updateTime, 1000);
}

function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {
    clearInterval(interval);
    seconds.value = 0;
    minutes.value = 0;
    hours.value = 0;
}
</script>

<style scoped>

</style>