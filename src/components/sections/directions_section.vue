<template>
  <div id="direction-section">
    <div id="directions-title">
      <h2>Directions</h2>
    </div>
    <div id="directions-content">
      <Directions_subSection
        v-for="section in props.directions"
        :key="section.title"
        :title="section.title"
        :steps="section.steps"
      />
    </div>
  </div>
</template>

<script setup>
import Directions_subSection from "@/components/sections/directions_subSection.vue";
import { defineProps } from "vue";

const props = defineProps({
  directions: Object,
});
</script>

<style lang="scss">
@import "@/assets/styles/globalStyles.scss";

h2 {
  margin: 0;
  text-align: left;
}
#direction-section {
  @include flex(column, start, start);
  gap: 0.5rem;
}
#directions-content {
  height: auto;
  overflow-y: scroll;
}
</style>
