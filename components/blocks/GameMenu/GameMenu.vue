<template>
    <div class="game-menu">
        <div class="container">
            <div class="game-menu__tabs">
                <my-tabs
                    :active-index="activeMode"
                    :tabs="modes"
                    @change="(index) => changeMode(index)"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import myTabs from '~/components/UI/myTabs.vue'

const emit = defineEmits(['change'])
defineProps({
    modes: {
        type: Array,
        required: true,
    },
    activeMode: {
        type: Number,
        required: true,
    }
})

function changeMode(index) {
    emit('change', index)
}
</script>

<style scoped>
</style>