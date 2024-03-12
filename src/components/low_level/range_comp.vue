<template>
    <Number :value="props.low" />
    <span> - </span>
    <Number :value="props.high" />
</template>

<script setup>
import { defineProps } from 'vue';
import { Number } from './number_comp.vue';

const props = defineProps({
    low: Number, 
    high: Number
}); 

</script>

<style lang="scss">
Number{
    display: inline;
}
</style>