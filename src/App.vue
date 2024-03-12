<template>
  <div id="main">
    <navSection id="nav" />
    <RouterView id="content"></RouterView>
  </div>
</template>

<script setup>
import navSection from "./components/section_components/nav_section.vue";
</script>

<style lang="scss">
@import "./assets/styles/globalStyles.scss";

#main {
  margin: 0;
  padding: 0;
  display: flex;
}

#content {
  width: 100%;
  box-sizing: border-box;
}

#nav {
  box-sizing: border-box;
  overflow: hidden;
  flex: none;
}

@include mobile {
  #nav {
    width: 100vw;
    padding: 1rem;
  }
  #main {
    @include flex(column, flex-start, flex-start);
  }
}

@include mid-size {
  #nav {
    position: fixed;
    top: 0;
    left: 0;
    height: 98vh;
    width: 140px;
    padding: 1.5rem;
  }
  #main {
    @include flex(row, flex-start, flex-start);
    position: fixed;
    left: 140px;
    overflow-y: scroll;
  }
}

@include desktop {
  #nav {
    position: sticky;
    top: 0;
    height: 100vh;
    width: 140px;
    padding: 1.5rem;
  }
  #main {
    @include flex(row, flex-start, flex-start);
  }
}
</style>
