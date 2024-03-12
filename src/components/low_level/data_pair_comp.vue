<template>
  <div class="info">
    <span class="descriptor">{{ props.desc }}: </span>

    <a v-if="props.link" :href="props.link" class="plain link">
      {{ props.val }}
    </a>

    <span
      v-else-if="props.tag_list"
      v-for="tag in props.tag_list"
      :key="tag"
      class="tag"
    >
      <a :href="`/tag/${tag.toLowerCase()}`" class="plain link">{{ tag }}</a>
    </span>
    <span v-else-if="Array.isArray(props.val)">
      {{ props.val[0] }} - {{ props.val[1] }} {{ props.unit }}
    </span>
    <span v-else> {{ props.val }} {{ props.unit }}</span>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  desc: String,
  val: [String, Number],
  unit: String,
  link: String,
  tag_list: Array,
});
</script>

<style>
.descriptor {
  margin-right: 0.25rem;
  color: gray;
  font-size: 1rem;
}
.tag {
  margin-right: 0.25rem;
}
</style>
