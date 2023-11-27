<template>
    <Vueform>
        <TextElement
            :label="label"
            :placeholder="placeholder"
            :name="name"
            :rules="rules"
            @change="updateValue"
        />
    </Vueform>
</template>

<script setup>
const emit = defineEmits(['update:modelValue'])
defineProps({
    placeholder: {
        type: String,
    },
    label: {
        type: String,
    },
    modelValue: {
        type: String,
    },
    name: {
        type: String,
    },
    rules: {
        type: Array,
    }
})

function updateValue(value) {
    emit('update:modelValue', value)
}
</script>

<style>
</style>