import { Bodies, Composite } from "matter-js";
class Boundary {
  constructor(ctx, world, x, y, w, h, a) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.ctx = ctx;
    this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, {
      friction: 0,
      restitution: 0.6,
      angle: a,
      isStatic: true,
    });
    Composite.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    let angle = this.body.angle;

    this.ctx.save();
    this.ctx.translate(pos.x, pos.y);
    this.ctx.rotate(angle);

    this.ctx.fillStyle = "black";
    this.ctx.fillRect(-this.w / 2, -this.h / 2, this.w, this.h);

    this.ctx.restore();
  }
}

export default Boundary;
