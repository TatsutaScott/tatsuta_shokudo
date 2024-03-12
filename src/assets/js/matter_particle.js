import { Composite, Bodies } from "matter-js";

class Matter_Particle {
  constructor(ctx, world, x, y, r, e) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.emoji = e;
    this.ctx = ctx;

    this.body = Bodies.circle(this.x, this.y, this.r, {
      friction: 0.1,
      restitution: 0.75,
      isStatic: false,
    });

    Composite.add(world, this.body);
  }
  show(dev = false) {
    let pos = this.body.position;
    let angle = this.body.angle;

    this.ctx.save();
    this.ctx.translate(pos.x, pos.y);
    this.ctx.rotate(angle);

    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";
    this.ctx.font = `${this.r * 2}px serif`;
    this.ctx.fillText(this.emoji, 0, 0);

    if (dev) {
      this.ctx.ellipse(0, 0, this.r * 2, this.r * 2, 0, 0, Math.PI * 2);
      this.ctx.stroke();
      this.ctx.fillRect(0, 0, this.r, 1);
    }

    this.ctx.restore();
  }
}

export default Matter_Particle;
