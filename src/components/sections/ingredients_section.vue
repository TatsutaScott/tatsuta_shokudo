<template>
  <div id="ingredients-section">
    <div id="ingredients-title">
      <h2>Ingredients</h2>
      <div id="multipliers">
        <span
          v-for="m in multipliers"
          :class="[
            'button',
            'multiplier',
            { highlighted: m.hilite, unhighlighted: !m.hilite },
          ]"
          :key="m.val"
          @click="
            () => {
              mult(m.val);
              set_highlight(m.txt);
            }
          "
        >
          {{ !mobile ? m.txt : m.txt != "custom" ? `x ${m.val}` : "x " }}
          <number_input
            v-if="m.txt == 'custom'"
            :class="['button', { hidden: !m.hilite }]"
            :step="0.25"
            :range="[0, null]"
            v-model="m.val"
            @click="
              () => {
                if (m.hilite) {
                  mult(m.val);
                }
              }
            "
          />
        </span>
      </div>
    </div>

    <div id="ingredients-content">
      <subsection
        v-for="ingredient in props.ingredients"
        :key="ingredient.title"
        :ingredientGroup="ingredient"
        ref="subIngredients"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps, onMounted, ref } from "vue";
import subsection from "@/pages/recipePg/sectionComps/ingredient_subSection.vue";
import number_input from "../lowLevelComps/number_input.vue";

const props = defineProps({
  ingredients: Array,
});

const subIngredients = ref();
const mobile = ref(window.innerWidth < 500);
onMounted(() => {
  subIngredients.value.forEach((i) => {
    // i.hi();
    i.multiplySection(1);
  });
});

const multipliers = ref([
  { val: 0.5, txt: "half", hilite: false },
  { val: 1, txt: "normal", hilite: true },
  { val: 2, txt: "double", hilite: false },
  { val: 0.5, txt: "custom", hilite: false },
]);

//multiplies ingredient amounts
const mult = (m) => {
  subIngredients.value.forEach((s) => s.multiplySection(m));
};

//sets which multiplier is active
const set_highlight = (t) => {
  for (let i = 0; i < multipliers.value.length; i++) {
    multipliers.value[i].hilite = t == multipliers.value[i].txt ? true : false;
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/globalStyles.scss";

#ingredients-section {
  @include flex(column, start, start);
  gap: 0.5rem;

  #ingredients-title {
    width: 100%;
    @include flex(row, space-between, baseline);
  }

  #ingredients-content {
    width: 100%;
    height: auto;
    overflow-y: scroll;
  }

  #multipliers {
    @include flex(row, start, baseline);
    gap: 0.5rem;
  }
  .hidden {
    display: none;
  }
  .multiplier {
    border-radius: 5px;

    @include flex(row, start, baseline);
    gap: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  .highlighted {
    background-color: black;
    color: white;
    transition: background-color 0.5s 0.025s;
  }
  .unhighlighted {
    font-size: 0.8rem;
    color: gray;
    transition: background-color 0.5s 0.025s;
  }
}

@include mobile {
  #ingredients-section {
    #multipliers {
      gap: 0.125rem;
    }
  }
}
</style>
