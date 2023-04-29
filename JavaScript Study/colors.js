// function hex(r, g, b) {
//   return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }
// hex(255, 100, 25);

// function rgb(r, g, b) {
//   return `rgb(${r},${g},${b})`;
// }
// rgb(255, 100, 25);

// function makeColor(r, g, b) {
//   const color = {};
//   color.r = r;
//   color.g = g;
//   color.b = b;
//   color.rgb = function () {
//     const { r, g, b } = this;
//     return `rgb(${r},${g},${b})`;
//   };
//   color.hex = function () {
//     const { r, g, b } = this;
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   };
//   return color;
// }
// makeColor(255, 100, 25);
// const firstColor = makeColor(255, 100, 25);
// console.log(firstColor.rgb());
// console.log(firstColor.hex());

//*********************/

// function Color(r, g, b) {
//   this.r = r;
//   this.g = g;
//   this.b = b;
// }
// console.log(Color(255, 100, 25));
// console.log(new Color(255, 100, 25));

// Color.prototype.rgb = function () {
//   const { r, g, b } = this;
//   return `rgb(${r},${g},${b})`;
// };

// Color.prototype.hex = function () {
//   const { r, g, b } = this;
//   return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };

// Color.prototype.rgba = function (a = 1.0) {
//   const { r, g, b } = this;
//   return `rgba(${r},${g},${b},${a})`;
// };

// const color1 = new Color(255, 92, 84);
// const color2 = new Color(0, 0, 0);
// console.log(color1);
// console.log(color2);
// console.log(color1.rgb());
// console.log(color2.rgb());
// console.log(color1.hex());
// console.log(color2.hex());
// console.log(color1.rgba(0.5));
// console.log(color2.rgba(0.5));
// document.body.style.backgroundColor = color1.rgba(0.5);

//*********************/

// class Color {
//   constructor(r, g, b, name) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
//     this.name = name;
//   }
//   greet() {
//     return `Hello from ${this.name}!`;
//   }
//   rgb() {
//     const { r, g, b } = this;
//     return `rgb(${r},${g},${b})`;
//   }
//   hex() {
//     const { r, g, b } = this;
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   }
//   rgba(a = 1.0) {
//     const { r, g, b } = this;
//     return `rgba(${r},${g},${b},${a})`;
//   }
// }
// const color1 = new Color(255, 67, 100, "pink");
// console.log(color1.greet());
// console.log(color1.rgb());
// console.log(color1.hex());
// console.log(color1.rgba(0.5));
// const color2 = new Color(15, 256, 40, "green");
// console.log(color2.greet());
// console.log(color2.rgb());
// console.log(color2.hex());
// console.log(color2.rgba(0.5));

//*********************/

// class Color {
//   constructor(r, g, b, name) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
//     this.name = name;
//   }
//   innerRGB() {
//     const { r, g, b } = this;
//     return `${r},${g},${b}`;
//   }
//   greet() {
//     return `Hello from ${this.name}!`;
//   }
//   rgb() {
//     return `rgb(${this.innerRGB()})`;
//   }
//   hex() {
//     const { r, g, b } = this;
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   }
//   rgba(a = 1.0) {
//     const { r, g, b } = this;
//     return `rgba(${this.innerRGB()},${a})`;
//   }
// }
// const color1 = new Color(255, 67, 100, "pink");
// console.log(color1.greet());
// console.log(color1.rgb());
// console.log(color1.hex());
// console.log(color1.rgba(0.5));
// const color2 = new Color(15, 256, 40, "green");
// console.log(color2.greet());
// console.log(color2.rgb());
// console.log(color2.hex());
// console.log(color2.rgba(0.5));

//*********************/

class Color {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
    this.calcHSL();
  }
  innerRGB() {
    const { r, g, b } = this;
    return `${r},${g},${b}`;
  }
  greet() {
    return `Hello from ${this.name}!`;
  }
  rgb() {
    return `rgb(${this.innerRGB()})`;
  }
  hex() {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  rgba(a = 1.0) {
    const { r, g, b } = this;
    return `rgba(${this.innerRGB()},${a})`;
  }
  hsl() {
    const { h, s, l } = this;
    return `hsl(${h},${s}%,${l}%)`;
  }
  opposite() {
    const { h, s, l } = this;
    const newH = (h + 180) % 360;
    return `hsl(${newH},${s}%,${l}%)`;
  }
  fullySaturated() {
    const { h, l } = this;
    return `hsl(${h},100%,${l}%)`;
  }

  calcHSL() {
    let { r, g, b } = this;
    // Make r, g, and b fractions of 1
    r /= 255;
    g /= 255;
    b /= 255;

    // Find greatest and smallest channel values
    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;
    if (delta == 0) h = 0;
    else if (cmax == r)
      // Red is max
      h = ((g - b) / delta) % 6;
    else if (cmax == g)
      // Green is max
      h = (b - r) / delta + 2;
    // Blue is max
    else h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    // Make negative hues positive behind 360°
    if (h < 0) h += 360;
    // Calculate lightness
    l = (cmax + cmin) / 2;

    // Calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
    this.h = h;
    this.s = s;
    this.l = l;
  }
}
const color1 = new Color(255, 67, 100, "pink");
console.log(color1.greet());
console.log(color1.rgb());
console.log(color1.hex());
console.log(color1.rgba(0.5));
console.log(color1.hsl());
console.log(color1.opposite());
console.log(color1.fullySaturated());
console.log(color1.calcHSL());
const color2 = new Color(15, 256, 40, "green");
console.log(color2.greet());
console.log(color2.rgb());
console.log(color2.hex());
console.log(color2.rgba(0.5));
console.log(color2.hsl());
console.log(color2.opposite());
console.log(color2.fullySaturated());
console.log(color2.calcHSL());
