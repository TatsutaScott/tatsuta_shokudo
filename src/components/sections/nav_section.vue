<template>
  <div id="nav-div" :class="{ hide_nav: showNavbar }">
    <div id="nav-options">
      <router-link to="/index" class="plain">index</router-link>
      <router-link to="/about" class="plain">about</router-link>
    </div>
    <div id="site-title">
      <router-link to="/" class="plain" id="logo">
        <div>龍</div>
        <div>田</div>
        <div>食</div>
        <div>堂</div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showNavbar = ref(false); // eslint-disable-line no-unused-vars

window.addEventListener("scroll", onScroll);
let lastScrollPosition;

function onScroll() {
  // Get the current scroll position
  const currentScrollPosition = window.scrollY;
  // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
  if (currentScrollPosition < 0) {
    return;
  }
  // Here we determine whether we need to show or hide the navbar
  showNavbar.value = currentScrollPosition > lastScrollPosition;
  // Set the current scroll position as the last scroll position
  lastScrollPosition = currentScrollPosition;
}
</script>

<style lang="scss">
@import "@/assets/styles/globalStyles.scss";

#site-title {
  font-size: 2rem;
  text-align: center;
  border-radius: 5px;
  a {
    color: white;
  }
  background-color: slategray;
}

#nav-options {
  a {
    transition: 0.5s;
  }
  a:hover {
    background-color: rgba(0, 0, 0, 0.125);
    // border-width: 1px;
    // border-style: solid none;
  }
}

@include mobile {
  #logo {
    @include flex(row, center, center);
    padding: 0.5rem;
  }
  #nav-options {
    font-size: 1rem;
    @include flex(row, center, center);
    a {
      margin: 0.5rem 0.75rem;
    }
  }
  #nav {
    @include flex(column-reverse, flex-end, center);
    position: sticky;
    top: 0;
    transition: all 0.5s;
    background-color: white;
  }
  .hide_nav {
    transform: translateY(-200px);
  }
}

@include mid-size {
  #logo {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0.25rem 0.5rem;
    column-gap: 0.5rem;
  }
  #nav {
    @include flex(column, flex-end, center);
    gap: 1rem;
    border-right: 1px solid black;
    padding: 1rem;
  }
  #nav-options {
    @include flex(column, center, center);
    gap: 0.5rem;
    font-size: 1.25rem;
  }
}

@include desktop {
  #logo {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0.25rem 0.5rem;
    column-gap: 0.5rem;
  }
  #nav {
    @include flex(column, flex-end, center);
    padding: 1rem;
    gap: 1rem;
    border-right: 1px solid black;
  }
  #site-title {
    width: 90px;
    height: 90px;
    @include flex(row, center, center);
  }
  #nav-options {
    @include flex(column, center, center);
    gap: 0.5rem;
    a {
      font-size: 1.25rem;
      padding: 0.25rem 0.5rem;
      border-radius: 10px;
    }
  }
}
</style>
