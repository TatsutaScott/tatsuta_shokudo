<template>
  <div class="ingredient">
    <!-- amount -->
    <div v-if="Array.isArray(props.amount)">
      <span>{{ props.amount[0].toString() }}</span>
      <span> - </span>
      <span>{{ props.amount[1].toString() }}</span>
    </div>
    <div v-else-if="props.amount == null"></div>
    <div v-else>
      <span>{{ props.amount.toString() }}</span>
    </div>

    <!-- unit -->
    <span :class="['unit', { too_long: long_name }]">{{ unit }}</span>

    <!-- name -->
    <div class="name-div">
      <span class="name">{{ props.name }}</span>
      <span class="note" v-if="props.note">{{ props.note }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps, ref } from "vue";

const props = defineProps(["name", "unit", "amount", "note"]);

const unit_key = {
  oz: "ounce",
  c: "cup",
  tbsp: "tablespoon",
  tsp: "teaspoon",
  lb: "lb",
  gal: "gallon",
  qt: "quart",
  pt: "pint",
  l: "liter",
  ml: "mililiter",
  g: "gram",
  kg: "kilogram",
};

const long_name = ref(props.unit && props.unit.length > 4); // eslint-disable-line no-unused-vars

const unit = computed(() => {
  let unit_string = "";

  if (!props.unit) return unit_string;

  if (window.innerWidth < 500) {
    if (unit_key[props.unit] != undefined) {
      return (unit_string += props.unit);
    } else {
      return (unit_string += props.unit + "s".repeat(props.amount.plural()));
    }
  } else {
    unit_string +=
      unit_key[props.unit] != undefined ? unit_key[props.unit] : props.unit;
  }

  if (Array.isArray(props.amount) || props.amount.plural()) unit_string += "s";

  return unit_string;
});
</script>

<style lang="scss">
@import "@/assets/styles/globalStyles.scss";

.ingredient {
  display: grid;
  justify-content: left;
  border-bottom: 1px solid lightgray;
  padding: 0.5rem;
  .name-div {
    @include flex(column, start, start);
  }
  .note {
    font-style: italic;
    color: gray;
  }
  .unit {
    display: flex;
    flex-wrap: wrap;
  }
  span {
    font-size: 1rem;
  }
}
.ingredient:first-of-type {
  border-top: 1px solid lightgray;
}
.ingredient:hover {
  background-color: rgba(179, 179, 179, 0.424);
  border-radius: 5px;
}

@include desktop {
  .ingredient {
    grid-template-columns: 2fr 3fr 11fr;
  }
}

@include mid-size {
  .ingredient {
    grid-template-columns: 1fr 3fr 11fr;
  }
}

@include mobile {
  .ingredient {
    grid-template-columns: 1fr 2fr 8fr;

    .too_long {
      font-size: 0.85rem;
    }
  }
}
</style>
