<template>
    <nuxt-link class="link">
<!--        <p class="link__text">-->
            <slot></slot>
<!--            <span class="link__underline"/>-->
<!--        </p>-->
    </nuxt-link>
</template>

<script setup>

</script>

<style >
.link {
    padding: 0.5rem;
    color: rgba(157, 157, 157, 1);
    text-decoration: none;
    transition: color 300ms;

    &:hover {
        color: rgba(157, 157, 157, 0.7);

    }
}
.link__underline {
    display: block;
    position: absolute;
    bottom: -3px;
    height: 1px;
    width: 0;
    background-color: #9d9d9d;

    transition: width 300ms;
}
.link__text {
    position: relative;

}
.link:hover {
    .link__underline {
        width: 100%;
    }
}

</style>