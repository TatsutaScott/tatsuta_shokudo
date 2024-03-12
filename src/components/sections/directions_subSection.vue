<template>
  <div class="direction-sub-section">
    <h3>{{ props.title }}</h3>
    <div
      v-for="(direction, index) in props.steps"
      :key="index"
      :class="['step', { highlighted: highlight_arr[index] }]"
      @click="() => set_highlight(index)"
    >
      <span class="step_number">{{ index + 1 }}</span>
      <p v-if="typeof direction == 'string'" class="step_content">
        {{ direction }}
      </p>
      <div v-else-if="typeof direction == 'object'" class="step_content">
        <p>{{ direction.step }}</p>
        <p class="note">{{ direction.note }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";

const props = defineProps({
  title: String,
  steps: Array,
});

const highlight_arr = ref([]);
set_highlight();
function set_highlight(index) {
  for (let i = 0; i < props.steps.length; i++) {
    highlight_arr.value[i] = i == index ? !highlight_arr.value[i] : false;
  }
}
</script>

<style scoped lang="scss">
.direction-sub-section {
  overflow-y: scroll;
}
.step {
  display: flex;
  font-size: 1rem;
  line-height: 150%;
  letter-spacing: 0.25px;
  box-sizing: border-box;
  padding: 0.75rem;
  .note {
    text-align: right;
    color: gray;
    font-style: italic;
  }
  .step_number {
    margin-right: 1rem;
    font-size: 1.5rem;
    color: gray;
  }
  p {
    margin: 0;
  }
  .step_content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
}
.highlighted {
  background-color: rgba(179, 179, 179, 0.424);
  border-radius: 5px;
}
.step:hover {
  background-color: rgba(179, 179, 179, 0.424);
  border-radius: 5px;
}
</style>
