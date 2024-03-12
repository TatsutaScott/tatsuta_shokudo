import { fraction } from "mathjs";

class Frac {
  constructor(num) {
    if (num.n) {
      console.log("hi");
      num = num.n / num.d;
    }
    this.baseValue = num;
    this.currVal = fraction(num);
  }
  mult(m) {
    this.currVal = fraction(this.baseValue * m);
    return this;
  }
  getComponents() {
    const w = Math.floor(this.currVal.n / this.currVal.d);
    const d = this.currVal.d;
    const n = this.currVal.n - w * d;
    return { w, d, n };
  }
  toString() {
    const comps = this.getComponents();
    const wholeNum = comps.w > 0 ? comps.w : "";
    const fracNum =
      comps.n > 0 ? `${superScript[comps.n]}⁄${subScript[comps.d]}` : "";
    return `${wholeNum} ${fracNum}`;
  }
  plural() {
    const comps = this.getComponents();
    return comps.w + comps.n > 1;
  }
}

const superScript = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"];
const subScript = ["₀", "₁", "₂", "₃", "₄", "₅", "₆", "₇", "₈", "₉"];

export default Frac;
