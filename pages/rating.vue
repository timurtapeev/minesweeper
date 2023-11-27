<template>
    <div class="page">
        <header class="page__header">
            <PageHeader/>
        </header>
        <main class="page__content">
            <RatingTable
                :rating-list="ratingList"
            />
        </main>
    </div>
</template>

<script setup>
import {reactive} from 'vue'
import {leadersRatingStore} from "~/store/leadersRating.js";
import PageHeader from '~/components/blocks/PageHeader.vue'
import RatingTable from '~/components/blocks/RatingTable/RatingTable.vue'

let leadersRating = leadersRatingStore()
let ratingList = reactive(leadersRating.leaders)

leadersRating.getLeaders()
</script>

<style scoped>
.page {
    min-height: 100vh;
}
.page__content {
    margin-top: 2.5rem;
}
</style>