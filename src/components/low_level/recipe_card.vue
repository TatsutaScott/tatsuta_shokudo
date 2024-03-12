<template>
  <router-link :to="`/recipe/${props.slug}`" class="card-container plain">
    <h3 v-if="typeof props.title == 'string'" class="main">
      {{ props.title }}
    </h3>
    <div else>
      <h3 class="main">{{ props.title.foreign }}</h3>
      <h4 class="sub">{{ props.title.english }}</h4>
    </div>
    <div class="tagContainer">
      <span class="cardTag" v-for="tag in props.tags" :key="tag">{{
        tag
      }}</span>
    </div>
  </router-link>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: String,
  tags: Array,
  slug: String,
});
</script>

<style scoped lang="scss">
@import "../../assets/styles/globalStyles.scss";

.card-container {
  @include flex(column, space-between, start);

  padding: 1rem;

  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;

  transition: all 0.5s;

  .main {
    font-size: 1.25rem;
  }
  .sub {
    font-size: 0.9rem;
    color: gray;
  }

  h3,
  h4 {
    margin: 0;
  }
  .cardTag {
    padding: 0.25rem;

    font-size: 0.75rem;

    border: 1px solid black;
    border-radius: 5px;

    background-color: white;
  }

  .tagContainer {
    @include flex(row, flex-start, center);
    gap: 0.25rem;
    flex-wrap: nowrap;
    overflow-x: hidden;
  }
}

.cardTag:hover,
.card-container:hover {
  background-color: rgba(191, 191, 191, 0.2);
}

@include mobile {
  .card-container {
    width: 100%;
    height: 110px;
  }
}

@include mid-size {
  .card-container {
    height: 110px;
  }
}

@include desktop {
  .card-container {
    height: 110px;
  }
}
</style>
