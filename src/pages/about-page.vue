<template>
  <div>
    <div id="main">
      <h1>about</h1>
      <div>
        <h3>Why does this exist?</h3>
        <p>
          For the longest time my phone had hundreds of tabs open to random
          recipe sites that I would reference when I was cooking. It goes
          without saying that it was a system that was in need of improvement.
          So, partially out of a desire to practice web dev but mostly out out
          of a desire to organize and simplify my growing collection of go to
          recipes I set out to start this website.
        </p>
        <p>
          When I was a kid, my mother had a binder full of small, hand written
          recipe cards and magazine clippings that was her collection of
          recipes. In someways that binder represented her knowledge of cooking.
          In that binder was the family recipes that she grew up on, the recipes
          she first learned, the recipes that saved her on a week night. Its
          contents encompassed most of her (and by proxy, my) culinary world. My
          goal with this website is to develop something accomplishing that same
          function for me.
        </p>
      </div>
      <div>
        <h3>Disclaimer</h3>
        <p>
          The recipes featured on this website are sourced from various sources
          across the internet, including cooking blogs, recipe websites,
          cookbooks, and other culinary resources. I do not claim ownership of
          these recipes unless otherwise stated.
        </p>
        <p>
          If you have any concerns about the content featured on this website,
          please don't hesitate to contact us.
        </p>
      </div>
      <div>
        <h3>Contact Info</h3>
        <p>
          Email:
          <a href="mailto:tatsuta.scott@gmail.com">tatsuta.scott@gmail.com</a>
        </p>
        <p>
          Github:
          <a href="https://github.com/TatsutaScott"
            >https://github.com/TatsutaScott</a
          >
        </p>
      </div>
    </div>
    <div id="sidebar"></div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
#content {
  box-sizing: border-box;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 3fr 2fr;
}

#main {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  box-sizing: border-box;
  padding: 0 1rem;
}
h1 {
  margin: 1rem 0 0 0;
}
</style>
