<template>
  <div :class="{ hide: has_notes }">
    <h2>Notes:</h2>
    <div id="notes-list">
      <div v-for="note in props.notes" class="note-div" :key="note.title">
        <p class="note-title">{{ note.title }}</p>
        <p class="note-content">{{ note.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";

const props = defineProps({
  notes: Array,
});

const has_notes = ref(props.notes.values.length > 0);
</script>

<style lang="scss">
@import "@/assets/styles/globalStyles.scss";

.note-div {
  display: grid;
  grid-template-columns: 1fr 11fr;
  gap: 0.5rem;
}

.note-content {
  margin-left: 1rem;
}

.hide {
  height: 0;
}

@include desktop {
  #notes-section {
    border-top: 1px gray solid;
    @include flex(column, start, start);
    gap: 0.5rem;
    #notes-list {
      p {
        padding: 0;
        margin: 0;
      }
      @include flex(column, start, start);
      gap: 0.5rem;
      height: auto;
      overflow-y: scroll;
    }
  }
}
</style>
