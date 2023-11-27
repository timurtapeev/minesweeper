<template>
    <div class="header">
        <div class="container">
            <div class="header__content">
                <div class="header__btn">
                    <my-button type="link" to="/"> Играть </my-button>
                </div>

                <div class="header__links">
                    <nav class="header__link">
                        <my-link to="/rating">Рейтинг</my-link>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import myButton from '~/components/UI/myButton.vue'
import myLink from '~/components/UI/myLink.vue'

</script>

<style>
.header {
    width: 100%;
}
.header__content {
    display: grid;
    grid-template-columns: 0.5fr 2fr 0.5fr;
    gap: 1rem;

    border-bottom: 1px solid rgba(38, 37, 34, 0.1);
    padding: 0.75rem 0;

}
.header__link {
    display: flex;
    align-items: center;
}
.header__links {
    display: flex;
    grid-column: 2 / 3;

    align-items: center;

}
.header__btn {
    width: 100%;
}

</style>