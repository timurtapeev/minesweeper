<template>
    <client-only>
        <Vueform>
            <SliderElement
                name="slider"
                :default="modelValue"
                :min="min"
                :max="max"
                :step="step"
                :label="label"
                :key="modelValue"
                @change="updateValue"
            />
        </Vueform>
    </client-only>
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
        type: Number,
    },
    name: {
        type: String,
    },
    max: {
        type: Number,
    },
    min: {
        type: Number,
    },
    step: {
        type: Number,
        default: 1,
    }
})

function updateValue(value) {
    emit('update:modelValue', value)
}
</script>

<style scoped>

</style>