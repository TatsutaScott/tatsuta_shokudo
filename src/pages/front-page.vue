<template>
  <div ref="sketch_container"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Engine, World, Mouse, MouseConstraint } from "matter-js";

import { makeCanvas } from "@/assets/js/canvas_util";
import { random } from "@/assets/js/random_util";

import { Matter_Particle, Matter_Boundary } from "@/assets/js/matter_classes";
import foods_list from "@/assets/js/food_icons";

const sketch_container = ref(null);
const particle_num = 70;
const particles = [];
const boundaries = [];

let engine, world, mConstraint;
let width, height, canvas, ctx, loop;

onMounted(() => {
  width = sketch_container.value.clientWidth;
  height = sketch_container.value.clientHeight;

  [canvas, ctx] = makeCanvas(width, height, sketch_container.value);

  engine = Engine.create();
  world = engine.world;

  for (let i = 0; i < particle_num; i++) {
    particles.push(
      new Matter_Particle(
        ctx,
        world,
        random(0, width),
        random(0, height),
        random(30, 40),
        random(foods_list)
      )
    );
  }

  boundaries.push(
    new Matter_Boundary(ctx, world, width / 2, 0, width, 1, 0),
    new Matter_Boundary(ctx, world, width / 2, height, width, 1, 0),
    new Matter_Boundary(ctx, world, 0, height / 2, 1, height, 0),
    new Matter_Boundary(ctx, world, width, height / 2, 1, height, 0)
  );

  const canvasMouse = Mouse.create(canvas);
  mConstraint = MouseConstraint.create(engine, { mouse: canvasMouse });
  World.add(world, mConstraint);
  loop = setInterval(draw);
  console.log(loop);
});

function draw() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, width, height);

  Engine.update(engine);

  for (let particle of particles) {
    particle.show();
  }
}
</script>

<style lang="scss">
#content {
  height: 100vh;
}
</style>
