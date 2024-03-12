<template>
  <div id="recipe">
    <titleSection
      v-if="recipe"
      id="title-section"
      :title="recipe.title"
      :source="recipe.source"
      :time="recipe.time"
      :servings="recipe.servings"
      :tags="recipe.tags"
      :date="recipe.date"
    />

    <ingredientsSection
      v-if="recipe"
      id="ingredients-section"
      :ingredients="recipe.ingredients"
    />

    <directionsSection
      v-if="recipe"
      id="direction-section"
      :directions="recipe.directions"
    />

    <notesSection
      id="notes-section"
      :notes="recipe.notes"
      v-if="recipe && recipe.notes"
    />
    <div id="footer"></div>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";

import titleSection from "@/components/sections/title_section.vue";
import ingredientsSection from "@/components/sections/ingredients_section.vue";
import directionsSection from "@/components/sections/directions_section.vue";
import notesSection from "@/components/sections/notes_section.vue";

const props = defineProps({
  name: String,
});

const recipe = ref(null);

import(`../data/recipes/${props.name}.json`).then(
  (data) => (recipe.value = data)
);
</script>

<style scoped lang="scss">
@import "@/assets/styles/globalStyles.scss";

#content {
  padding: 0 1rem;
  box-sizing: border-box;
}

#footer {
  height: 2rem;
}

@include mobile {
}

@include mid-size {
  #ingredients-section {
    margin-top: 1rem;
  }
}

@include desktop {
  #content {
    padding: 0;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto minmax(0, 1fr) auto auto;
    grid-template-areas:
      "title title"
      "ingredients directions"
      "note note"
      "footer footer";
  }
  #title-section {
    grid-area: title;
    box-sizing: border-box;
    width: 100%;
    padding: 1rem;
  }

  #ingredients-section {
    grid-area: ingredients;
    box-sizing: border-box;
    padding: 1rem;
  }
  #direction-section {
    grid-area: directions;
    box-sizing: border-box;
    padding: 1rem;
    border-left: 1px solid black;
  }
  #notes-section {
    grid-area: note;
    box-sizing: border-box;
    padding: 1rem;
    max-height: 200px;
  }
  #footer {
    grid-area: footer;
    height: auto;
  }
}
</style>
