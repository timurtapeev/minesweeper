<template>
    <button
        v-if="type === 'button'"
        v-bind="$attrs"
        class="button"
        :class="classList"
    >
        <slot></slot>
    </button>

    <nuxt-link
        v-else-if="type === 'link'"
        v-bind="$attrs"
        class="button"
        :class="classList"
    >
        <slot></slot>
    </nuxt-link>
</template>

<script setup>
import {computed} from 'vue'
const props = defineProps({
    type: {
        type: String,
        required: true,
    },
    modeList: {
        type: Array,
        default: [],
    }
})

const classList = computed(() => {
    let mode = ''

    props.modeList.map((modeName) => {
        mode += ` button_${modeName}`
    })
    return mode
})
</script>

<style>
.button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding:  0.75rem 1.75rem;
    min-width: 120px;
    background: #e8a657;
    color: #FFF;
    border: none;
    border-radius: 0.125rem;

    cursor: pointer;
    text-align: center;
    text-decoration: none;

    transition: all 300ms;

    &:hover {
        background: #e5ae65;
    }

    &:focus {
        outline: none;
        background: #fcb75a;
        box-shadow: 0 0 0 3px #ffcfae;
    }

    &[disabled] {
        color: #d2d5db;
        background: #cca263;
        cursor: not-allowed;
    }
}
.button_small {
    min-width: 0;
    padding: 0.5rem 0.615rem;

}
</style>