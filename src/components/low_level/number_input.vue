<template>
  <div class="number-div">
    <span @click="update(-props.step)" class="dec">-</span>
    <span class="num">{{ model }}</span>
    <span @click="update(props.step)" class="inc">+</span>
  </div>
</template>

<script setup>
import { defineModel, defineProps } from "vue";

const model = defineModel();
const props = defineProps({
  step: Number,
  range: Array,
});

function update(n) {
  if (props.range[0] != null && model.value + n < props.range[0]) {
    model.value = props.range[0];
  } else if (props.range[1] != null && model.value + n > props.range[1]) {
    model.value = props.range[1];
  } else {
    model.value += n;
  }
}
</script>

<style lang="scss" scoped>
.number-div {
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
  .num {
    font-size: 1rem;
    width: 2rem;
  }
  .inc,
  .dec {
    font-size: 1rem;
  }
}
</style>
