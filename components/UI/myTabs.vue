<template>
    <div class="tabs">
        <div
            v-for="(tab, i) in tabs"
            :key="i"
            class="tabs__item"
            :class="activeIndex === i ? 'tabs__item_active' : ''"
            @click="changeTab(i)"
        >
            {{ tab.text }}
        </div>
    </div>
</template>

<script setup>

const emit = defineEmits(['change'])

defineProps({
    tabs: {
        type: Array,
        required: true,
    },
    activeIndex: {
        type: Number,
        required: true,
    }
})

function changeTab(index) {
    emit('change', index)
}
</script>

<style scoped>
.tabs {
    display: flex;

    @media (max-width: 756px) {
        flex-direction: column;
    }
}
.tabs__item {
    display: inline-block;
    width: 100%;
    padding:  0.75rem 1.75rem;
    min-width: 120px;
    background: #e8a657;
    color: #FFF;
    border-right: 1px solid rgba(38, 37, 34, 0.1);

    cursor: pointer;
    text-align: center;
    transition: all 300ms;

    &:hover {
        background: #e5ae65;
    }

    &:focus {
        outline: none;
        background: #fcb75a;
        box-shadow: 0 0 0 3px #ffcfae;
    }

    &:first-child {
        border-radius: 0.125rem 0 0 0.125rem;
    }

    &:last-child {
        border-radius: 0 0.125rem 0.125rem 0;
        border-right: none;
    }

    @media (max-width: 756px) {
        min-width: 90px;
        border-top: 1px solid rgba(38, 37, 34, 0.1);
        border-right: none;

        &:first-child {
            border-top: none;

            border-radius:  0 0.125rem  0.125rem 0 ;
        }

        &:last-child {
            border-radius: 0.125rem 0 0 0.125rem ;
        }
    }
}
.tabs__item_active {
    background: #f6911e;

    &:hover {
        background: #f6911e;
    }

    &:focus {
        outline: none;
        background: #f6911e;
        box-shadow: 0 0 0 3px #ffcfae;
    }
}
</style>