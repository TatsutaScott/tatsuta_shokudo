<template>
  <div>
    <div id="index-container">
      <div id="index-header">
        <h1>Recipe Index</h1>
        <p>
          ** In the future this section will include controls to sort and search
          through recipes **
        </p>
      </div>
      <div id="card-gallery">
        <recipeCard
          v-for="recipe in data.recipes"
          :key="recipe.id"
          :title="recipe.title"
          :tags="recipe.tags"
          :slug="recipe.slug"
        />
      </div>
    </div>
    <div id="footer"></div>
  </div>
</template>

<script setup>
import data from "@/data/tableOfContents.json";
import recipeCard from "@/components/low_level/recipe_card.vue";
</script>

<style lang="scss" scoped>
@import "@/assets/styles/globalStyles.scss";

#index-container {
  padding: 0 2rem;
}

h1 {
  margin-top: 0;
}

#card-gallery {
  margin-top: 1rem;
  gap: 1rem;
}

#footer {
  height: 100px;
}

@include mobile {
  #card-gallery {
    @include flex(column, center, center);
    flex-wrap: wrap;
  }
}

@include mid-size {
  #card-gallery {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}

@include desktop {
  #content {
    padding: 0;
    height: 100vh;
    display: grid;
    grid-template-rows: minmax(0, 1fr) auto;
  }

  #index-container {
    padding: 1rem;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: auto minmax(0, 1fr);
  }
  #card-gallery {
    overflow-y: scroll;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    box-sizing: border-box;
    padding: 1rem;
  }
  #footer {
    height: 0;
  }
}
</style>
