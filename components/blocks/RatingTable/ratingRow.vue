<template>
    <div class="rating-row">
        <div class="rating-row__cell">{{ index + 1 }}</div>
        <div class="rating-row__cell">{{ name || 'Анонимный' }}</div>
        <div class="rating-row__cell">{{ mode }}</div>
        <div class="rating-row__cell">{{ time }}</div>
    </div>
</template>

<script setup>
defineProps({
    name: {
        type: String,
        required: true,
    },
    mode: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    index: {
        type: Number,
        required: true,
    }
})
</script>

<style lang="scss">
.rating-row {
    display: grid;
    grid-template-columns: 2.5rem 20rem 12rem 6.25rem;

    width: fit-content;

    &:nth-child(odd) {
        background-color: rgba(236, 179, 135, 0.1);
    }

    @media (max-width: 576px) {
        grid-template-columns: 2.5rem 12rem 12rem 6.25rem;

    }
}
.rating-row__cell {
    padding: 0.75rem;
    border-right: 1px solid rgba(38, 37, 34, 0.1);

    &:last-child {
        border-right: none;
    }

    @media (max-width: 576px) {
        padding: 0.5rem;
    }
}
</style>