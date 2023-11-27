<template>
    <div class="rating-header">
        <div class="rating-header__cell">№</div>
        <div class="rating-header__cell">Имя</div>
        <div class="rating-header__cell">Режим</div>
        <div class="rating-header__cell">Время</div>
    </div>
</template>

<script setup >

</script>

<style>
.rating-header {
    display: grid;
    grid-template-columns: 2.5rem 20rem 12rem 6.25rem;
    background-color: rgba(236, 179, 135, 0.4);
    width: fit-content;


    @media (max-width: 576px) {
        grid-template-columns: 2.5rem 12rem 12rem 6.25rem;
    }
}

.rating-header__cell {
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