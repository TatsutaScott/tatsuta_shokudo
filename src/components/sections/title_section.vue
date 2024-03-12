<template>
  <div>
    <div id="title-heading" v-if="typeof props.title == 'string'">
      <h1>{{ props.title }}</h1>
    </div>
    <div id="title-heading" v-else>
      <h1>{{ props.title.foreign }}</h1>
      <h2>{{ props.title.english }}</h2>
    </div>

    <div id="info-section">
      <!-- source -->
      <info_data
        v-if="typeof props.source == 'string' && isURL(props.source)"
        desc="Source"
        :link="props.source"
        val="Link"
      />
      <div v-else-if="props.source.title && props.source.author" id="source">
        <info_data desc="Source" :val="props.source.title" />
        <info_data desc="Author" :val="props.source.author" />
      </div>
      <info_data v-else desc="Source" :val="props.source" />

      <!-- date -->
      <info_data desc="Date" :val="dateToString(props.date)" />

      <!-- time -->
      <div v-if="props.time.active" id="time">
        <info_data
          desc="Active"
          :val="time_string(props.time.active.amount, props.time.active.unit)"
        />

        <info_data
          desc="Passive"
          :val="time_string(props.time.passive.amount, props.time.passive.unit)"
        />
      </div>
      <info_data
        v-else
        desc="Time"
        :val="time_string(props.time.amount, props.time.unit)"
      />

      <!-- servings -->
      <info_data
        desc="Makes"
        :val="props.servings.amount"
        :unit="props.servings.unit"
      />

      <!-- tags -->
      <info_data desc="Tags" :tag_list="props.tags" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import info_data from "../lowLevelComps/data_pair_comp.vue";

const props = defineProps({
  title: [String, Object],
  source: [String, Object],
  time: Object,
  servings: Object,
  date: Array,
  tags: Array,
});

function isURL(text) {
  return text.slice(0, 4) == "http";
}

function monthToString(monthNumber) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  if (monthNumber < 1 || monthNumber > 12) {
    throw new Error("Invalid month number.");
  }

  return monthNames[monthNumber - 1];
}

function dateToString(dateArray) {
  return `${monthToString(dateArray[1])} ${dateArray[0]}, ${dateArray[2]}`;
}

function time_string(time, unit) {
  let days = 0,
    hours = 0,
    minutes = 0,
    output = "";
  if (unit == "h") {
    days = Math.floor(time / 24);
    hours = time % 24;
  } else if (unit == "m") {
    hours = Math.floor(time / 60);
    minutes = time % 60;
  }

  if (days > 0) output += days + " day" + "s".repeat(days > 1) + " ";
  if (hours > 0) output += hours + " hour" + "s".repeat(hours > 1) + " ";
  if (minutes > 0)
    output += minutes + " minute" + "s".repeat(minutes > 1) + " ";

  return output;
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/globalStyles.scss";

#title-section {
  box-sizing: border-box;
  @include flex(column, center, flex-start);
  gap: 1rem;

  h1 {
    margin: 0;
  }
  h2 {
    font-size: 1.25rem;
    color: gray;
  }

  #title-heading {
    @include flex(row, flex-start, baseline);
    gap: 0 1rem;
  }
  #info-section {
    padding: 0.5rem 0;

    @include flex(row, flex-start, baseline);
    flex-wrap: wrap;
    gap: 0.25rem 1rem;
  }
  #source,
  #time {
    @include flex(row, flex-start, baseline);
    gap: 1rem;
  }
}

@include mid-size {
  #title-section {
    position: fixed;
    top: 0;
    left: 0;
    height: 75%;
    width: 100px;
    padding: 1rem;
    gap: 0.5rem;

    writing-mode: vertical-rl;
    text-orientation: mixed;

    #info-section {
      border-top: 1px solid gray;
    }
  }
}

@include mobile {
  #title-section {
    margin-bottom: 1rem;
    #title-heading {
      flex-direction: column;
    }
    #info-section {
      border-top: 1px solid gray;
      border-bottom: 1px solid gray;
    }
  }
}

@include desktop {
  #title-section {
    border-bottom: 1px gray solid;
    gap: 0.5rem;

    #info-section {
      padding: 0;
    }
  }
}
</style>
