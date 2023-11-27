<template>
    <section class="rating-table">
        <div class="container">
            <h3 class="rating-table__header">Рейтинг игроков</h3>
        </div>
        <div class="rating-table__content">
            <client-only>
                <rating-header/>
                <div
                    v-if="ratingList.length"
                >
                    <rating-row
                        v-for="(human, i) in ratingList"
                        :mode="human.mode"
                        :name="human.name"
                        :time="human.time"
                        :index="i"
                    />
                </div>
                <div
                    v-else
                    class="rating-table__not-found"
                >
                    Список победителей пуст
                </div>
            </client-only>
        </div>
    </section>
</template>

<script setup>
import ratingRow from './ratingRow.vue'
import ratingHeader from './ratingHeader.vue'

defineProps({
    ratingList: {
        type: Array,
        required: true,
    }
})
</script>

<style>
.rating-table {
    width: fit-content;
    max-width: 100%;
    margin: 0 auto;

}
.rating-table__header {
    margin-bottom: 1rem;
}
.rating-table__not-found {
    font-size: 2.5rem;
    text-align: center;
    line-height: 1;
    margin: 4rem auto 0;

    @media (max-width: 576px) {
        font-size: 1rem;
        margin: 2rem auto;

    }
}
.rating-table__content {
    @media (max-width: 576px) {
        width: fit-content;
        max-width: 100%;
        overflow-x: scroll;

    }
}

</style>